<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm8 offset-sm2>
                <v-card flat>
                    <v-card-text
                            class="display-2">
                        <span class="clr">Отправлены заявки на заказы:</span>
                    </v-card-text>
                </v-card>
                <v-card
                        class="elevation-10 mb-3"
                        v-for="ord in requestedOrders"
                        :key="ord.id">
                    <v-layout row>
                        <v-flex xs4>
                            <v-img
                                    :src="'https://picjumbo.com/wp-content/uploads/morning-home-office-working-and-breakfast_free_stock_photos_picjumbo_DSC06051-2210x1473.jpg'"
                                    height="230px">
                            </v-img>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">{{ord.name}}</h2>
                                <p>{{ord.customer.name}}</p>
                                <p>{{ord.description}}</p>
                                <p>{{ord.date_created | parseDate}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        class="secondary"
                                        :to="'/order/?id=' + ord.id">
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
    import axios from 'axios'

    export default {
        data() {
            return {
                requestedOrders: [],
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            }
        },
        mounted() {
            this.getMyRequests();
            this.$root.$on('updateRequests', this.getMyRequests);
        },
        methods: {
            getMyRequests() {
                let config = this.config;
                axios.get('http://127.0.0.1:8081/api/organizations/' + localStorage.getItem('userId') + '/get_requested_orders/', config)
                    .then(response => response.data)
                    .then(data => {
                        this.requestedOrders = data;
                    })
                    .catch(error => console.log(error));
            }
        },
        props: ['config'],

        filters: {
            parseDate(date) {
                return date.replace(/(\d+)-(\d+)-(\d+)T(\d+):(\d+).+/, '$1-$2-$3 $4:$5')
            }
        },
    }
</script>

<style>
    .clr {
        color: rgb(98, 0, 238);
    }
</style>