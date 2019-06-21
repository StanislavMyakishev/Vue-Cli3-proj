<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1>Orders</h1>
                <v-list
                        subheader
                        two-line
                >
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-checkbox v-model="notifications"></v-checkbox>
                        </v-list-tile-action>

                        <v-list-tile-content @click="notifications = !notifications">
                            <v-list-tile-title>Notifications</v-list-tile-title>
                            <v-list-tile-sub-title>Allow notifications</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-flex>
        </v-layout>
        <div class="order" v-for="order in orders" :key="order.id">
            <h2 class="order__header">Name: {{ order.name }}</h2>
            <p class="order__description">Description: {{ order.description }}</p>
            <p class="order__customer">Customer: {{ order. customer }}</p>
            <p class="order__performer">Performer: {{order.performer }}</p>
            <p>Тут нет стилей пока, + это не все данные что есть в order, остальные не вижу</p>
        </div>
    </v-container>
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