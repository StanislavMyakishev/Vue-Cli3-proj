<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card>
                    <v-img
                            :src="imageSrc"
                            height="300px"
                    >
                    </v-img>
                    <v-card-text>
                        <h1 class="text--primary">{{order.name}}</h1>
                        <h2>{{order.customer.name}}</h2>
                        <p>{{order.description}}</p>
                        <p>{{order.date_created}}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="warning" flat>Edit</v-btn>
                        <v-btn class="success">Get</v-btn>
                    </v-card-actions>
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
                // testOrder: {
                //     title: 'Test order',
                //     company: 'Squirrel LTD',
                //     description: 'This is test order page, just look at this qt pie',
                //     imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                //     id: '1'
                // }

                order: null,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
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
            let id = this.$route.query.id;
            axios.get('http://127.0.0.1:8081/api/orders/' + id + '/')
                .then(response => response.data)
                .then(data => {
                    this.order = data;
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
</script>