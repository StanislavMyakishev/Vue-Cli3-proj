<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container>
        <v-layout align-center justify-center column fill-height>
            <v-flex xs12 md10 xl10>
                <v-card xs12 md10
                        class="elevation-10 mb-3">
                    <v-responsive
                            class="rel"
                    >
                        <img class="abs" src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
                        <v-img
                                :src="imageSrc"
                                height="300px"
                        >
                        </v-img>
                    </v-responsive>
                    <v-card-text class="test">
                        <component
                                :is="editable"
                                class="text-md-center"
                                v-model="order.name"
                        >{{order.name}}
                        </component>
                        <h2 class="text-md-center"
                        > от компании "{{order.customer.name}}"</h2>
                        <component
                                :is="editable"
                                class="text-md-center test2"
                                v-model="order.description">{{order.description}}
                        </component>
                        <p class="text-md-right">{{order.date_created | parseDate}} </p>
                    </v-card-text>
                </v-card>
                <v-card v-if=perform>
                    <v-card-text>
                        <v-textarea
                                v-model="comment"
                                label="Комментарий">
                        </v-textarea>
                    </v-card-text>
                    <div class="text-xs-center">
                        <v-btn large color="primary"
                               @click="applyForOrder">Оставить заявку на заказ
                        </v-btn>
                    </div>
                </v-card>
                <v-card v-else>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <div class="text-xs-center">
                            <v-btn
                                    large color="success"
                                    @click="completeOrder">Заказ выполнен
                            </v-btn>
                        </div>
                        <div class="text-xs-center">
                            <v-btn v-if="editable === 'p'"
                                   large color="warning"
                                   @click="editOrder">Изменить заказ
                            </v-btn>
                            <v-btn v-else
                                   large color="success"
                                   @click="saveChanges">Сохранить изменения
                            </v-btn>
                        </div>
                        <div class="text-xs-center">
                            <v-btn large color="error"
                                   @click="deleteOrder">Удалить заказ
                            </v-btn>
                        </div>
                    </v-card-actions>
                </v-card>

<!--НАДО НОРМАЛЬНО ВЫВОДИТЬ-->
                <v-card v-if="!perform && order.status !== 2">
                    <v-list two-line>
                        <template v-for="(performer, index) in performers">
                            <v-divider :key="index"></v-divider>
                            <v-list-tile
                                    :key="performer.name"
                                    avatar
                            >
                                <v-list-tile-avatar>
                                    <span class="white--text headline">{{performer.name}}</span>
                                </v-list-tile-avatar>

                                <v-list-tile-content>
                                    <v-list-tile-title>{{performer.name}}</v-list-tile-title>
                                    <v-list-tile-sub-title>{{performer.comment}}</v-list-tile-sub-title>
                                </v-list-tile-content>
                                <v-btn
                                        v-if="order.status === 0"
                                        color="success"
                                        @click="acceptOrderRequest"
                                >Принять заявку
                                </v-btn>
                                <v-btn
                                        v-else
                                        color="error"
                                        @click="removePerformer"
                                >Удалить перформера
                                </v-btn>
                            </v-list-tile>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
    import axios from 'axios'
    import router from '../../router/index'

    export default {
        data() {
            return {
                order: {name: '', customer: {name: ''}, date_created: ''},
                id: NaN,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                perform: null,
                performers: [],
                editable: 'p',
                comment: '',

            }
        },
        mounted() {
            this.id = this.$route.query.id;

            axios.get('http://127.0.0.1:8081/api/orders/' + this.id + '/')
                .then(response => response.data)
                .then(data => {
                    this.order = data;
                    this.perform = this.order.customer.id !== this.userId;
                })
                .catch(error => {
                    console.log(error)
                });
            this.getPerformers();

        },

        filters: {
            parseDate(date) {
                return date.replace(/(\d+)-(\d+)-(\d+)T(\d+):(\d+).+/, '$1-$2-$3 $4:$5')
            }
        },
        methods: {
            editOrder() {
                this.editable = "v-text-field";
                // axios.patch('http://127.0.0.1:8081/api/orders/', this.order)
            },
            saveChanges() {
                let config = this.config;
                axios.put('http://127.0.0.1:8081/api/orders/' + this.id + '/', this.order, config)
                    .then(response => {
                        alert('Order has been successfully changed');
                    })
                    .catch(error => console.log(error));
                this.editable = 'p'

            },
            deleteOrder() {
                let config = this.config;
                axios.delete('http://127.0.0.1:8081/api/orders/' + this.id + '/', config);
                this.$root.$emit('orderDeleted');
                router.push('/myorders')
            },

            completeOrder() {
                let config = this.config;
                axios.post('http://127.0.0.1:8081/api/orders/' + this.id + '/complete_order/', null, config)
            },
            applyForOrder() {
                let config = this.config;
                axios.post('http://127.0.0.1:8081/api/orders/' + this.id + '/apply_for_order/', {comment: this.comment}, config);
                router.push('/myrequests')
            },
            getPerformers() {
                let config = this.config;
                axios.get('http://127.0.0.1:8081/api/orders/' + this.id + '/get_order_requests/', config)
                    .then(response => response.data)
                    .then(data => {
                        this.performers = data
                    });
            },
            acceptOrderRequest() {
                let config = this.config;
                axios.post('http://127.0.0.1:8081/api/orders/' + this.id + '/accept_order_requests/', null, config)

            },
            removePerformer() {
                let config = this.config;
                axios.post('http://127.0.0.1:8081/api/orders/' + this.id + '/remove_performer/', null, config)
            }
        },
        props: ['userId', 'config']
    }
</script>

<style>
    .rel {
        position: relative;
    }

    .abs {
        top: 20px;
        left: 20px;
        position: absolute;
        z-index: 100;
    }

    .test {
        /*overflow: auto;*/
    }

    .test2 {
        word-wrap: break-word;
    }
</style>