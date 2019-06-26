<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container>
        <v-layout align-center justify-center column fill-height>
            <v-flex xs12>

                <!--САМ ЗАКАЗ-->
                <v-card
                        class="elevation-10 mb-3">
                    <v-responsive>
                        <div class="rel">
                            <img class="icon" src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
                        </div>
                        <v-img
                                class="backg"
                                :src="'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'"
                                height="300px">
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <h1 class="text-md-center"
                            :is="editable"
                            v-model="order.name"
                        >{{order.name}}</h1>
                        <h2 class="text-md-center"> от компании "{{order.customer.name}}"</h2>
                        <p class="text-md-center"
                           :is="editable"
                           v-model="order.description"
                        >{{order.description}}</p>
                        <p class="text-md-right">{{order.date_created | parseDate}} </p>
                    </v-card-text>
                </v-card>
                <!--САМ ЗАКАЗ ЗАКОНЧИЛСЯ-->

                <!--ДЛЯ ИСПОЛНИТЕЛЯ-->
                <v-card v-if=perform>
                    <v-card-text>
                        <v-textarea
                                label="Комментарий">
                        </v-textarea>
                    </v-card-text>
                    <div class="text-xs-center">
                        <v-btn large color="secondary"
                               @click="applyForOrder"
                        >Оставить заявку на заказ
                        </v-btn>
                    </div>
                </v-card>

                <!--ДЛЯ ЗАКАЗЧИКА-->
                <v-card
                        v-if="!perform && order.status !== 2"
                        class="elevation-10">

                    <v-layout align-center justify-center row fill-height>
                        <v-flex lg12 sm12 xs12>
                            <v-card flat>
                                <div class="text-xs-center">
                                    <v-btn large color="secondary"
                                           @click="completeOrder">Заказ выполнен
                                    </v-btn>

                                    <v-btn large color="warning"
                                           v-if="editable === 'p'"
                                           @click="editOrder">Изменить заказ
                                    </v-btn>
                                    <v-btn v-else
                                           large color="warning"
                                           @click="saveChanges">Сохранить изменения
                                    </v-btn>

                                    <v-btn large color="error"
                                           @click="deleteOrder">Удалить заказ
                                    </v-btn>
                                </div>
                            </v-card>
                        </v-flex>
                    </v-layout>

                    <!--ЗАЯВКИ К ЗАКАЗУ-->
                    <v-flex lg12 sm12 xs12>
                        <v-card flat>
                            <v-list two-line>
                                <v-subheader>
                                    {{ header }}
                                </v-subheader>
                                <template v-for="(item, index) in performers">
                                    <v-divider
                                            v-if="'index !== 0 && index !== performers.length'"
                                            :key="index"
                                            inset
                                    ></v-divider>
                                    <v-list-tile
                                            v-else
                                            :key="item.title"
                                            avatar>
                                        <v-list-tile-avatar>
                                            <img :src="'https://cdn.vuetifyjs.com/images/lists/1.jpg'">
                                        </v-list-tile-avatar>

                                        <v-list-tile-content>
                                            <v-list-tile-title v-html="item.performerName"></v-list-tile-title>
                                            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                        </v-list-tile-content>
                                        <v-btn
                                                v-if=!hired
                                                color="secondary"
                                                @click="hired = !hired"
                                        >Принять заявку
                                        </v-btn>
                                        <v-btn
                                                v-else
                                                color="error"
                                                @click="hired = !hired"
                                        >Удалить перформера
                                        </v-btn>
                                    </v-list-tile>
                                </template>
                            </v-list>
                        </v-card>
                    </v-flex>
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
                perform: null,
                id: NaN,
                performers: [],
                editable: 'p',
                comment: '',
                header: 'Заявки',

                hired: false,
                // testOrder: {
                //     title: 'Фриланс-биржа',
                //     company: 'Университет ИТМО',
                //     category: "IT",
                //     createdDate: new Date(2019, 0, 1, 0, 0, 0, 0),
                //     description: 'Наша компания предлагает Вам выполнить восхитительный проект: создание фриланс биржи!' +
                //         ' Нам необходима реализация сайта этого проекта на стеке python + js используя vue (использование ' +
                //         'Нам необходима реализация сайта этого проекта на стеке python + js используя vue (использование ' +
                //         'инструментов по типу vuetify оставется на ваш вкус). Сайт должен быть красивым и функциональным,' +
                //         'страницы должны быть реализованы с использованием material design компонентов и в принципе выглядеть ' +
                //         'приятно. Это сампл описания заказа, так что особо не зачитывайтесь. Далее будет сгенерированный текст,' +
                //         ' спасибо за внимание! ' + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                //     imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                //     id: '1',
                // },

                // performers: [
                //     {header: 'Заявки'},
                //     {
                //         avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                //         performerName: 'Иван Иванов',
                //         subtitle: "<span class='text--primary'>Проект интересный, очень заинтересован его выполнить за зачет по вебу :)</span>"
                //     },
                //     {divider: true, inset: true},
                //     {
                //         avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                //         performerName: 'Павел Григорьев <span class="grey--text text--lighten-1"></span>',
                //         subtitle: "<span class='text--primary'>Куда нажать, чтобы просто получить зачет по вебу?</span>"
                //     },
                //     {divider: true, inset: true},
                //     {
                //         avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                //         performerName: 'Анна Некифорова',
                //         subtitle: "<span class='text--primary'>Согласна остановить горящую избу на скаку за тройку по вебу</span>"
                //     }
                // ]
            }
        },

        mounted() {
            this.id = this.$route.query.id;

            let config = this.config;
            axios.get('http://127.0.0.1:8081/api/orders/' + this.id + '/', config)
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
                this.$root.$emit('updateRequests');
                router.push('/myrequests')
            },
            getPerformers() {
                let config = this.config;
                axios.get('http://127.0.0.1:8081/api/orders/' + this.id + '/get_order_requests/', config)
                    .then(response => response.data)
                    .then(data => {
                        this.performers = data
                    });
                console.log(this.performers)
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

    .icon {
        z-index: 1;
        top: 20px;
        left: 20px;
        position: absolute;
    }

    .backg {
        z-index: 3;
    }
</style>