<template>
    <ul>
        <li v-for="(order, index) in orders" :key="index"></li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            categoryDict: {
                'IT': 0,
                'Finance': 1,
                'Human Resources': 2,
                'Marketing': 3,
                'Retail': 4,
                'Others': 5
            },
            orders: []
        }
    },
    mounted() {
        this.$root.$on('showCategory', category => {
            axios.get('http://127.0.0.1:8081/api/orders/')
                .then(response => {
                    return response.data.filter(element => element.category === categoryDict[category])
                })
                .then((fjlteredOrders) => {
                    orders = filteredOrders;
                })
        })
    }
}
</script>

<style>

</style>
