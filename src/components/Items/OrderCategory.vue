<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Here must be title of Category</h1>
                <!--<ul>-->
                    <!--<li v-for="(order, index) in orders" :key="index">ID : {{ order.id }}</li>-->
                <!--</ul>-->
                <v-card v-if="orders">{{orders}}</v-card>
                <!--<v-card-->
                <!--color="primary"-->

                <!--v-for="(ord,index) in orders"-->
                <!--:key="index"-->
                <!--&gt;-->
                <!--<v-layout row>-->
                <!--&lt;!&ndash;<v-flex xs4>&ndash;&gt;-->
                <!--&lt;!&ndash;<v-img&ndash;&gt;-->
                <!--&lt;!&ndash;:src="ord.imageSrc"&ndash;&gt;-->
                <!--&lt;!&ndash;height="160px"&ndash;&gt;-->
                <!--&lt;!&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;</v-img>&ndash;&gt;-->
                <!--&lt;!&ndash;</v-flex>&ndash;&gt;-->
                <!--<v-flex xs8>-->
                <!--<v-card-text>-->
                <!--<h2 class="text&#45;&#45;primary">{{ord.name}}</h2>-->
                <!--<p>{{ord.description}}</p>-->
                <!--</v-card-text>-->
                <!--<v-card-actions>-->
                <!--<v-spacer></v-spacer>-->
                <!--<v-btn-->
                <!--class="info"-->
                <!--:to="/ord/ + ord.id"-->
                <!--&gt;Open-->
                <!--</v-btn>-->
                <!--</v-card-actions>-->
                <!--</v-flex>-->
                <!--</v-layout>-->
                <!--</v-card>-->
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                // categoryDict: {
                //     'IT': 0,
                //     'Finance': 1,
                //     'Human Resources': 2,
                //     'Marketing': 3,
                //     'Retail': 4,
                //     'Others': 5
                // },
                categoryDict: [
                    [0, 'IT'],
                    [1, 'Finance'],
                    [2, 'HR'],
                    [3, 'Marketing'],
                    [4, 'Retail'],
                    [5, 'Others']
                ],
                orders: null
            }
        },


        async mounted() {
            await this.showOrders();
        },
        methods: {
            async showOrders() {
                const response = await axios.get('http://127.0.0.1:8081/api/orders/');
                console.log('1', response);
                let category = this.$route.query.category;
                this.orders = response.data.filter(element => element.category === this.categoryDict[category][0]);
                console.log('2', this.orders);

            },

        },
    }
</script>
