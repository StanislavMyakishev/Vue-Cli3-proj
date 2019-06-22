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
            <v-layout row wrap>
                <v-flex d-flex xs12 sm6 md4>
                    <v-card
                            @click="showCategory"
                            color="primary"
                            dark>
                        <v-card-title primary class="title black--text">IT</v-card-title>
                        <v-card-text class="black--text">{{ lorem }}</v-card-text>
                    </v-card>
                </v-flex>

                <v-flex d-flex xs12 sm6 md4>
                    <v-card color="primary" dark>
                        <v-card-title primary roundcard class="title black--text">Finance</v-card-title>
                        <v-card-text class="black--text">{{ lorem }}</v-card-text>
                    </v-card>
                </v-flex>

                <v-flex d-flex xs12 sm6 md4>
                    <v-card color="primary" dark>
                        <v-card-title primary class="title black--text">Human Resources</v-card-title>
                        <v-card-text class="black--text">{{ lorem }}</v-card-text>
                    </v-card>
                </v-flex>

                <v-flex d-flex xs12 sm6 md4>
                    <v-card color="primary" dark>
                        <v-card-title primary class="title black--text">Marketing</v-card-title>
                        <v-card-text class="black--text">{{ lorem }}</v-card-text>
                    </v-card>
                </v-flex>

                <v-flex d-flex xs12 sm6 md4>
                    <v-card color="primary" dark>
                        <v-card-title primary class="title black--text">Retail</v-card-title>
                        <v-card-text class="black--text">{{ lorem }}</v-card-text>
                    </v-card>
                </v-flex>

                <v-flex d-flex xs12 sm6 md4>
                    <v-card color="primary" dark>
                        <v-card-title primary class="title black--text">Other</v-card-title>
                        <v-card-text class="black--text">{{ lorem }}</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
            <!--AREAS END-->


        </v-container>
    </v-content>
</template>

<script>
    import router from '../router/index'

    export default {
        data() {
            return {
                links: [
                    {title: 'login', icon: 'lock', url: '/login'},
                    {title: 'Registration', icon: 'face', url: '/reg'}],
                lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,

            }
        },
        methods: {
            showCategory(event) {
                const category = event.currentTarget.firstElementChild.innerText;
                router.push('/test')
                this.$root.$emit('showCategory', category);
            }
        }
    }
</script>

<style scoped>
    .pointer {
        cursor: pointer
    }
</style>

