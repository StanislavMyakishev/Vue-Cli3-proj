<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center row>
                <v-flex xs12 sm12 md10>
                    <v-card>
                        <v-toolbar dark color="primary">
                            {{organization.name}}
                        </v-toolbar>
                        <v-card-title>
                            TIN: {{organization.itn}}
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-title>
                            {{organization.description}}
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-title>
                            Website: {{organization.website}}
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-title>
                            {{organization.address}}
                        </v-card-title>
                        <v-btn
                                @click="getReviews"></v-btn>
                        <v-layout>
                            <v-flex xs12 md12 sm12>
                                <v-card flat>
                                    <v-card-text>
                                        <v-text-field
                                            label="Title"
                                            v-model="title">
                                        </v-text-field>
                                        <v-textarea
                                                label="Комментарий"
                                                v-model="review">
                                        </v-textarea>
                                    </v-card-text>
                                    <v-card-actions class="pa-3">
                                        Оценка:
                                        <v-spacer></v-spacer>
                                        <v-rating
                                                v-model="ownRating"
                                                background-color="white"
                                                color="secondary"
                                                half-increments
                                                hover
                                                size="18"
                                        ></v-rating>
                                    </v-card-actions>
                                    <div class="text-xs-center">
                                        <v-btn large color="secondary"
                                               @click="makeReview">Отправить отзыв
                                        </v-btn>
                                    </div>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import axios from 'axios'
    import router from '../../router/index'
    export default {
        props: ['id',  'config'],
        data() {
            return {
                organization: [],
                ownRating: 0,
                review: '',
                title: ''
            }
        },
        created() {
            axios.get('http://127.0.0.1:8081/api/organizations/' + this.id + '/')
                .then(response => response.data)
                .then(data => {
                    this.organization = data;
                })
                .catch(error => {
                    console.log(error)
                });
            this.getReviews();
        },

        methods: {
            getReviews() {
                axios.get('http://127.0.0.1:8081/api/organizations/' + this.id + '/get_reviews/')
                    .then(response => {
                        console.log(response)
                    })
                    // // response.data
                    // .then(data => {
                    //     this.organization = data;
                    // })
                    .catch(error => {
                        console.log(error)
                    });
            },
            makeReview() {
                const review = {
                    title: this.title,
                    review: this.review,
                    rating: this.ownRating

                };
                let config = this.config;
                axios.post('http://127.0.0.1:8081/api/organizations/' + this.id + '/make_review/', review, config)
                    .catch(error => {console.log(error)});
                router.push('/')
            }

        },

    }
</script>
