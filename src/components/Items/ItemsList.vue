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
                                            {{ord.category}}
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

    export default {
        data() {
            return {
                orders: [
                    {
                        id: 1,
                        name: "Order 1",
                        description: "Order 1 comment",
                        customer: "Company 1",
                        category: "IT",
                        data: '17.06.2019',

                    },
                    {
                        id: 2,
                        name: "Order 2",
                        description: "Order 2 comment",
                        customer: "Company 2",
                        category: "IT",
                        data: '17.06.2019'
                    },
                    {
                        id: 3,
                        name: "Order 3",
                        description: "Order 3 comment",
                        customer: "Company 3",
                        category: "IT",
                        data: '17.06.2019'
                    }
                ]
            }
        }
    }
</script>