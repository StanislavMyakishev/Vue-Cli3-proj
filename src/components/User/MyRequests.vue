<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My Requests</h1>

                <v-card
                        color="blue-grey lighten-4"
                        class="elevation-10 mb-3"
                        v-for="ord in requestedOrders"
                        :key="ord.id"
                >
                    <v-layout row>
                        <v-flex xs4>
                            <v-img
                                    :src="imageSrc"
                                    height="160px"
                            >
                            </v-img>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">{{ord.name}}</h2>
                                <p>{{ord.description}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        class="info"
                                        :to="'/order/?id=' + ord.id"
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
    import axios from 'axios'
    export default {
        data() {
            return {
                requestedOrders: [
                ],
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
        props: ['config']
    }
</script>