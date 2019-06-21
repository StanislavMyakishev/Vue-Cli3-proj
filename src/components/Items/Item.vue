<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card>
                    <v-toolbar
                            color="lue-grey lighten-5"
                    >
                        <v-toolbar-title>{{order.name}}</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-list two-line>
                            <v-divider></v-divider>
                            <v-list-tile>
                                <v-list-tile-sub-title>
                                    Customer:
                                </v-list-tile-sub-title>
                                <v-list-tile-title>
                                    {{order.customer}}
                                </v-list-tile-title>
                            </v-list-tile>
                            <v-divider></v-divider>
                            <v-list-tile>
                                <v-list-tile-sub-title>
                                    Category:
                                </v-list-tile-sub-title>
                                <v-list-tile-title>
                                    {{order.category}}
                                </v-list-tile-title>
                            </v-list-tile>
                            <v-divider></v-divider>
                            <v-list-tile>
                                <v-list-tile-sub-title>
                                    Date:
                                </v-list-tile-sub-title>
                                <v-list-tile-title>
                                    {{order.date}}
                                </v-list-tile-title>
                            </v-list-tile>
                            <v-divider></v-divider>
                            <v-list-tile>
                                <v-list-tile-sub-title>
                                    Description:
                                </v-list-tile-sub-title>
                                <v-list-tile-title>
                                    {{order.description}}
                                </v-list-tile-title>
                            </v-list-tile>
                            <v-divider></v-divider>
                        </v-list>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn>

                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                order: {
                    id: 1,
                    name: "Order 1",
                    description: "Order 1 comment",
                    customer: "Company 1",
                    category: "IT",
                    date: '17.06.2019'
                }
            }
        }
    }
</script>