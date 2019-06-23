<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My orders</h1>

                <v-card
                        color="primary"
                        class="elevation-10 mb-3"
                        v-for="(ord, index) in orders"
                        :key="index"
                >
                    <v-layout row>
                        <!--<v-flex xs4>-->
                            <!--<v-img-->
                                    <!--:src="ord.imageSrc"-->
                                    <!--height="160px"-->
                            <!--&gt;-->
                            <!--</v-img>-->
                        <!--</v-flex>-->
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">{{ord.name}}</h2>
                                <p>{{ord.description}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        class="info"
                                        :to="/ord/ + index"
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
                categoryDict: {
                    'IT': 0,
                    'Finance': 1,
                    'HR': 2,
                    'Marketing': 3,
                    'Retail': 4,
                    'Others': 5
                },
                orders: []
            }
        },
        mounted() {
            this.$root.$on('showCategory', category => {
                axios.get('http://127.0.0.1:8081/api/orders/')
                    .then(response => {
                        return response.data.filter(element => element.category === this.categoryDict[category])
                    })
                    .then((filteredOrders) => {
                        this.orders = filteredOrders;
                    })
            })
        }
    }
</script>