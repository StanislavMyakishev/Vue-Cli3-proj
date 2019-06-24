<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm8 offset-sm2>
                <h1 class="text--secondary mb-3">My orders</h1>

                <v-card
                        color="blue-grey lighten-4"
                        class="elevation-10 mb-3"
                        v-for="ord in myorders"
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
                                <p>{{ord.description}}</p>
                                <p>{{ord.date_created}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        class="info"
                                        :to="/ord/ + ord.id"
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
    import axios from 'axios';
    export default {
        data() {
            return {
                myorders: []
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