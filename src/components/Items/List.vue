<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My orders</h1>

                <v-card
                        color="blue-grey lighten-4"
                        class="elevation-10 mb-3"
                        v-for="ord in ordList"
                        :key="ord.id"
                >
                    <v-layout row>
                        <v-flex xs4>
                            <v-img
                                    :src="ord.imageSrc"
                                    height="160px"
                            >
                            </v-img>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">{{ord.title}}</h2>
                                <p>{{ord.description}}</p>
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
    export default {
        data() {
            return {
                ordList: [
                    {
                        title: 'First order',
                        description: 'This is our first company order',
                        promo: false,
                        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                        id: '1'
                    },
                    {
                        title: 'Second order',
                        description: 'Second but not the last',
                        promo: false,
                        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                        id: '2'
                    }
                ]
            }
        }
    }
</script>