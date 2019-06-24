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
            axios.get('http://127.0.0.1:8081/api/organizations/2/')
                .then(response => response.data)
                .then(data => {
                    this.organization = data;
                });
        }
        //    ДОБАВИТЬ ОТЗЫВЫ
    }
</script>

<style scoped>
</style>