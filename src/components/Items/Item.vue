<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card>
                    <v-img
                            :src="testOrder.imageSrc"
                            height="300px"
                    >
                    </v-img>
                    <v-card-text>
                        <h1 class="text--primary">{{testOrder.title}}</h1>
                        <p>{{testOrder.description}}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="warning" flat>Edit</v-btn>
                        <v-btn class="success">Buy</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        props: ['id'],
        data() {
            return {
                testOrder: {
                    title: 'Test order',
                    description: 'This is test order page, just look at this qt pie',
                    imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    id: '1'
                }
            }
        }
    }
</script>