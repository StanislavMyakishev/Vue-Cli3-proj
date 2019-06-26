<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card flat>
                    <v-card-text
                            class="display-2">
                        <span class="clr">Мои заказы</span>
                    </v-card-text>
                </v-card>
                <v-card
                        class="elevation-10 mb-3"
                        v-for="ord in ordList"
                        :key="ord.id">
                    <v-layout row>
                        <v-flex xs4>
                            <v-img
                                    :src="ord.imageSrc"
                                    height="160px">
                            </v-img>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">{{ord.name}}</h2>
                                <p>{{ord.description}}</p>
                                <p>{{ord.date_created}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        class="secondary"
                                        :to="/ord/ + ord.id">
                                    Открыть
                                </v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                ordList: [
                    {
                        name: 'Первый заказ',
                        description: 'Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа ',
                        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                        date_created: new Date(),
                    },
                    {
                        name: 'Второй заказ',
                        description: 'Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа Описание заказа ',
                        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                        date_created: new Date(),
                    },
                ]
            }
        },
        created() {
            axios.get('http://127.0.0.1:8081/api/orders/')
                .then(response => response.data)
                .then(data => {
                    this.myorders = data;
                })
            // + ДОБАВИТЬ ФИЛЬТРАЦИЮ ПО customer_id
        }
    }
</script>