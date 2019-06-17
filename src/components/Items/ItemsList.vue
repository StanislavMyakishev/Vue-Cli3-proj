<template>
    <v-content>
        <v-container>
            <v-layout row>
                <v-flex sm6 offset-sm3>
                    <v-list two-line>
                        <v-subheader>
                            Order List
                        </v-subheader>
                        <div v-for="(ord, index) in orders" >
                            <v-list-tile
                                    :key="ord.id"
                            >
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        <v-layout row>
                                            {{ord.order}}
                                            {{ord.area}}
                                        </v-layout>
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title class="text--primary">
                                        {{ord.customer}}
                                    </v-list-tile-sub-title>
                                    <v-list-tile-sub-title>
                                        {{ord.comment}}
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
                        order: "Order 1",
                        comment: "Order 1 comment",
                        customer: "Company 1",
                        area: "IT",
                        data: '17.06.2019'
                    },
                    {
                        id: 2,
                        order: "Order 2",
                        comment: "Order 2 comment",
                        customer: "Company 2",
                        area: "IT",
                        data: '17.06.2019'
                    },
                    {
                        id: 3,
                        order: "Order 3",
                        comment: "Order 3 comment",
                        customer: "Company 3",
                        area: "IT",
                        data: '17.06.2019'
                    }
                ]
            }
        },

    }
</script>