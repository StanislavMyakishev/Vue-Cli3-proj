<template>
    <v-layout align-center justify-center column>
        <v-flex xs6>
            <v-card>
                <v-img
                        src="https://happybirthdaywishesworld.com/wp-content/uploads/2017/12/Happy-birthday-images.jpg"
                        aspect-ratio="2.75"
                ></v-img>
                <h1 class="text-md-center">С днем рождения!</h1>
                <h3 class="text-md-center">праздничный мем по css...</h3>
            </v-card>
            <v-img
                    class="step"
                    max-width="300"
                    src="https://pp.userapi.com/c851328/v851328550/13a4d9/jRHr-xvbUjQ.jpg"
            ></v-img>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        data: () => ({
            cards: [
                {
                    title: 'First name order',
                    description: 'This is our first company order',
                    company: 'Squirrel LTD',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    id: '1',
                    flex: 6,
                },
                {
                    title: 'Second name order',
                    description: 'Second but not the last',
                    company: 'Planet LTD',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                    id: '2',
                    flex: 6,
                }, {
                    title: 'Third name order',
                    description: 'Field for description',
                    company: 'Planet LTD',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                    id: '3',
                    flex: 6,
                }, {
                    title: 'Forth name order',
                    description: 'Field for description',
                    company: 'Squirrel LTD',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    id: '4',
                    flex: 6,
                }, {
                    title: 'Fifth name order',
                    description: 'Field for description',
                    company: 'Planet LTD',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                    id: '5',
                    flex: 12,
                }
            ]
        })
    }
</script>


<style>
    .step {
        min-height: 300px;
        min-width: 400px;
        margin: 10px;
    }
</style>