<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm8 offset-sm2>
                <v-card flat>
                    <v-card-text
                            class="display-2">
                        <span class="clr">Мои заказы</span>
                    </v-card-text>
                </v-card>
                <v-card
                        class="elevation-10 mb-3"
                        v-for="(ord, index) in myorders"
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
                                <p class="clamp">{{ord.description}}</p>
                                <p>{{ord.date_created | parseDate}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        class="secondary"
                                        @click="goToOrder(index)">
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
    import router from '../../router/index'

    export default {
        data() {
            return {
                myorders: []
            }
        },
        mounted() {
            this.getMyOrders();
            this.$root.$on('orderDeleted', this.getMyOrders);
        },

        filters: {
            parseDate(date) {
                return date.replace(/(\d+)-(\d+)-(\d+)T(\d+):(\d+).+/, '$1-$2-$3 $4:$5')
            }
        },

        methods: {
            goToOrder(index) {
                // this.$root.$emit('goToOrder', this.myorders[index]);
                router.push({path: '/order', query: {id: this.myorders[index].id}})
            },
            getMyOrders() {
                let config = this.config;
                axios.get('http://127.0.0.1:8081/api/organizations/' + localStorage.getItem('userId') + '/get_orders/', config)
                    .then(response => response.data)
                    .then(data => {
                        this.myorders = data;
                    })
                    .catch(error => this.$root.$emit('error', error));
            }
        },
        props: ['config']
    }
</script>

<style>
    .clamp {
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
</style>
