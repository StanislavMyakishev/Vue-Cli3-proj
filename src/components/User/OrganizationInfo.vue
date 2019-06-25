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
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import axios from 'axios'

    export default {
        props: ['id'],
        data() {
            return {
                organization: []
            }
        },
        created() {
            let id = 2;
            axios.get('http://127.0.0.1:8081/api/organizations/' + id + '/')
                .then(response => response.data)
                .then(data => {
                    this.organization = data;
                })
                .catch(error => {
                    console.log(error)
                });
        },

        methods: {
            getReviews() {
                axios.get('http://127.0.0.1:8081/api/organizations/get_reviews')
                    .then(response => {console.log(response)})
                    // // response.data
                    // .then(data => {
                    //     this.organization = data;
                    // })
                    .catch(error => {
                        console.log(error)
                    });
            }

        }
        //    ДОБАВИТЬ ОТЗЫВЫ
    }
</script>
