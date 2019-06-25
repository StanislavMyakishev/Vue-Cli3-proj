<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm8 offset-sm2>
                <h1 class="text--secondary mb-3">My orders</h1>

                <v-card
                        color="blue-grey lighten-4"
                        class="elevation-10 mb-3"
                        v-for="(ord, index) in myorders"
                        :key="ord.id"
                >
                    <v-layout row>
                        <v-flex xs4>
                            <v-img
                                    :src="'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'"
                                    height="160px"
                            >
                            </v-img>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">{{ord.name}}</h2>
                                <!--ord.description переделать, выезжает текст за рамки карточки-->
                                <p>{{ord.customer.name}}</p>
                                <p class="break">{{ord.description}}</p>
                                <p>{{ord.date_created}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        class="info"
                                        @click="goToOrder(index)"
                                >Open
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
    import router from '../../router/index'
    import axios from 'axios';

    export default {
        data() {
            return {
                myorders: []
            }
        },
        created() {
            let config = this.config;
            axios.get('http://127.0.0.1:8081/api/organizations/get_orders/', config)
                .then(response => response.data)
                .then(data => {
                    this.myorders = data;
                })
                .catch(error => console.log(error));
            console.log(this.config);
        },
        methods: {
            goToOrder(index) {
                // this.$root.$emit('goToOrder', this.myorders[index]);
                router.push({path: '/order', query: {id: this.myorders[index].id}})
            }
        },
        props: ['config']
    }
</script>

<style>
    .break {
        word-wrap: break-word;
    }
</style>