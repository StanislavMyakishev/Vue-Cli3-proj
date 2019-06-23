<template>
    <v-layout justify-center>
        <v-flex xs12 sm6>
            <v-card
                    color="blue-grey lighten-4"
                    class="elevation-10 mb-3">
                <v-container
                        fluid
                        grid-list-md
                >
                    <v-layout row wrap>
                        <v-flex
                                v-for="card in cards"
                                :key="card.title"
                                v-bind="{ [`xs${card.flex}`]: true }"
                        >
                            <v-card>
                                <v-img
                                        :src=card.src
                                        aspect-ratio="2.75"
                                ></v-img>

                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0">{{card.title}}</h3>
                                        <p class="mb-0">Company: {{card.company}}</p>
                                    </div>
                                </v-card-title>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                            class="info"
                                            :to="/ord/ + card.id"
                                    >Open
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
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
                },{
                    title: 'Third name order',
                    description: 'Field for description',
                    company: 'Planet LTD',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                    id: '3',
                    flex: 6,
                },{
                    title: 'Forth name order',
                    description: 'Field for description',
                    company: 'Squirrel LTD',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    id: '4',
                    flex: 6,
                },{
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