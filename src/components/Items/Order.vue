<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container>
        <v-layout align-center justify-center column fill-height>
            <v-flex xs12 md10>
                <v-card
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
                        <h1 class="text-md-center">{{order.name}}</h1>
                        <h2 class="text-md-center"> от компании "{{order.customer.name}}"</h2>
                        <p class="text-md-center test2">{{order.description}}</p>
                        <p class="text-md-right">{{order.date_created | parseDate}} </p>
                    </v-card-text>
                </v-card>
                <v-card v-if=perform>
                    <v-card-text>
                        <v-textarea
                                label="Комментарий">
                        </v-textarea>
                    </v-card-text>
                    <div class="text-xs-center">
                        <v-btn large color="primary">Оставить заявку на заказ</v-btn>
                    </div>
                </v-card>
                <v-card v-else>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <div class="text-xs-center">
                            <v-btn large color="success">Заказ выполнен</v-btn>
                        </div>
                        <div class="text-xs-center">
                            <v-btn large color="warning">Изменить заказ</v-btn>
                        </div>
                        <div class="text-xs-center">
                            <v-btn large color="error">Удалить заказ</v-btn>
                        </div>
                    </v-card-actions>
                </v-card>
                <v-card v-if=!perform>
                    <v-list two-line>
                        <template v-for="(item, index) in performers">
                            <v-subheader
                                    v-if="item.header"
                                    :key="item.header"
                            >
                                {{ item.header }}
                            </v-subheader>

                            <v-divider
                                    v-else-if="item.divider"
                                    :key="index"
                                    :inset="item.inset"
                            ></v-divider>

                            <v-list-tile
                                    v-else
                                    :key="item.title"
                                    avatar
                            >
                                <v-list-tile-avatar>
                                    <img :src="item.avatar">
                                </v-list-tile-avatar>

                                <v-list-tile-content>
                                    <v-list-tile-title v-html="item.performerName"></v-list-tile-title>
                                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                </v-list-tile-content>
                                <v-btn
                                        v-if=!hired
                                        color="success"
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
        </v-layout>
    </v-container>
</template>







<!--<template>-->
    <!--<v-container>-->
        <!--<v-layout row>-->
            <!--<v-flex xs12>-->
                <!--<v-card>-->
                    <!--<v-img-->
                            <!--:src="imageSrc"-->
                            <!--height="300px"-->
                    <!--&gt;-->
                    <!--</v-img>-->
                    <!--<v-card-text>-->
                        <!--<h1 class="text&#45;&#45;primary">{{order.name}}</h1>-->
                        <!--<h2>{{order.customer.name}}</h2>-->
                        <!--<p>{{order.description}}</p>-->
                        <!--<p>{{order.date_created}}</p>-->
                    <!--</v-card-text>-->
                    <!--<v-card-actions>-->
                        <!--<v-spacer></v-spacer>-->
                        <!--<v-btn class="warning" flat>Edit</v-btn>-->
                        <!--<v-btn class="success">Get</v-btn>-->
                    <!--</v-card-actions>-->
                <!--</v-card>-->
            <!--</v-flex>-->
        <!--</v-layout>-->
    <!--</v-container>-->
<!--</template>-->

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                order: null,
                id: NaN,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                perform: null
            }
        },

        // mounted() {
        //     // this.$root.$on('showOrder', this.showOrder(orderToShow))
        // },
        //
        // methods: {
        //     showOrder(orderToShow) {
        //         this.order = orderToShow;
        //     },
        // }
        created() {
            this.id = this.$route.query.id;

            axios.get('http://127.0.0.1:8081/api/orders/' + this.id + '/')
                .then(response => response.data)
                .then(data => {
                    this.order = data;
                    this.perform = this.order.customer.id === this.userId;
                })
                .catch(error => {
                    console.log(error)
                })
        },

        filters: {
            parseDate(date) {
                return date.replace(/(\d+)-(\d+)-(\d+)T(\d+):(\d+).+/, '$1-$2-$3 $4:$5')
            }
        },
        props: ['userId']
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