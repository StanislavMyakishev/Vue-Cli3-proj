<template>
    <v-content>
        <v-container fluid grid-list-xl>
            <!--SEARCH-->
            <v-layout align-center justify-center row>
                <v-flex xs12 sm8 md6 align-center justify-center column fill-height>
                    <v-layout>
                        <v-text-field
                                class="mx-3"
                                flat
                                label="Search"
                                solo-inverted
                        >

                        </v-text-field>
                        <v-btn class="blue-grey lighten-4">
                            <v-icon>search</v-icon>
                        </v-btn>
                        <v-form
                                v-model="valid"
                                ref="form"
                        >
                        </v-form>
                    </v-layout>
                </v-flex>
            </v-layout>
            <!--SEARCH ENDS-->

            <!--AREAS-->
            <v-item-group>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex
                                v-for="item in items"
                                :key="item.id"
                                xs12 sm6 md4
                        >
                            <v-item>
                                <v-card
                                        color="blue-grey lighten-4"
                                        class="align-center"
                                        height="200"
                                >
                                    <v-card-title
                                            primary class="title black--text"
                                    >{{item.title}}</v-card-title>
                                    <v-card-text class="black--text">{{ lorem }}</v-card-text>
                                </v-card>
                            </v-item>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-item-group>
            <!--AREAS END-->
        </v-container>
    </v-content>
</template>

<script>

    export default {
        data() {
            return {
                links: [
                    {title: 'login', icon: 'lock', url: '/login'},
                    {title: 'Registration', icon: 'face', url: '/reg'}],
                lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus,
                nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in,
                mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
                items: [
                    {
                        id: 1,
                        title: 'IT',
                    },
                    {
                        id: 2,
                        title: 'Finance',
                    },
                    {
                        id: 3,
                        title: 'HR',
                    },
                    {
                        id: 4,
                        title: 'Marketing',
                    },
                    {
                        id: 5,
                        title: 'Retail',
                    },
                    {
                        id: 6,
                        title: 'Other',
                    }
                ]
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .pointer {
        cursor: pointer
    }
</style>

