<template>
    <v-content>
        <v-container>
            <v-layout row>
                <v-flex xs12 sm12 md12>
                    <v-list two-line>
                        <v-subheader>
                            Order List
                        </v-subheader>
                        <div v-for="(ord, index) in orders">
                            <v-list-tile
                                    :key="ord.id"
                            >
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        <v-layout row>
                                            {{ord.name}}
                                            <v-spacer></v-spacer>
                                            <!--{{findCategory(ord.category, categories)}}-->
                                        </v-layout>
                                    </v-list-tile-title>
                                    <!--<v-list-tile-sub-title class="text&#45;&#45;primary">-->
                                    <!--{{ord.customer_id}}-->
                                    <!--</v-list-tile-sub-title>-->
                                    <v-list-tile-sub-title>
                                        {{ord.description}}
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                                <!--<v-list-tile-action>-->
                                <!--<v-list-tile-action-text>{{ order.data }}</v-list-tile-action-text>-->
                                <!--</v-list-tile-action>-->

                            </v-list-tile>
                            <v-divider
                                    v-if="index + 1 < orders.length"
                                    :key="index"
                            >
                            </v-divider>
                        </div>
                    </v-list>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                orders: []
            }
        },
        created() {
            axios.get('http://127.0.0.1:8081/api/orders/')
                .then(response => response.data)
                .then(data => {
                    this.orders = data;
                })

                // Дальше надо в template юзать через v-for="order in orders"
                // и проставлять нужные вам значения, посмотрите в доках
        }
    }
</script>