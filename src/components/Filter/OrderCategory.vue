<template>
    <v-layout justify-center>
        <v-flex xs12 sm8>
            <v-card
                    color="blue-grey lighten-4"
                    class="elevation-10 mb-3">
                <v-container
                        fluid
                        grid-list-md
                >
                    <v-layout row wrap>
                        <v-flex
                                v-for="card in orders"
                                :key="card.name"
                                xs12 sm6
                        >
                            <v-card>
                                <v-img
                                        :src=src
                                        aspect-ratio="2.75"
                                ></v-img>

                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0">{{card.name}}</h3>
                                        <p class="mb-0">Company: {{card.customer_id}}</p>
                                    </div>
                                </v-card-title>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                            class="info"
                                            :to="'/order/?id=' + card.id"
                                    >Open
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                categoryDict: [
                    [0, 'IT'],
                    [1, 'Finance'],
                    [2, 'HR'],
                    [3, 'Marketing'],
                    [4, 'Retail'],
                    [5, 'Others']
                ],
                orders: null,
                src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
            }
        },
        async mounted() {
            await this.showOrders();
        },
        methods: {
            async showOrders() {
                const response = await axios.get('http://127.0.0.1:8081/api/orders/');
                let category = this.$route.query.category;
                this.orders = response.data.filter(element => element.category === this.categoryDict[category][0]);
            },
        },
    }
</script>