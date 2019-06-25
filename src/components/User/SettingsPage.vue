<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md8>
                    <v-card
                            class="elevation-10"
                    >
                        <v-toolbar
                                dark color="primary"
                        >
                            <v-toolbar-title>My Account</v-toolbar-title>
                        </v-toolbar>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    color="primary"
                                    @click="toEditPage"
                            >Edit
                            </v-btn>
                            <v-btn
                                    color="primary"
                                    @click="editPassword"
                            >Password
                            </v-btn>
                            <v-btn
                                    color="primary"
                                    @click="deleteAccount"
                            >Delete Account
                            </v-btn>

                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import axios from 'axios'

    export default {
        // data() {
        //     return {
        //         email: '',
        //         password: '',
        //         companyname: '',
        //         TIN: '',
        //         address: '',
        //         website: '',
        //         description: '',
        //         first_name: '',
        //         last_name: '',
        //         patronymic: '',
        //         position: '',
        //         valid: false,
        //         confirmPasswrod: '',
        //         emailRules: [
        //             v => !!v || 'E-mail is required',
        //             v => /.+@.+/.test(v) || 'E-mail must be valid'
        //         ],
        //         passwordRules: [
        //             v => !!v || 'Password is required',
        //             v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
        //         ],
        //         confirmPasswordRules: [
        //             v => !!v || 'Password confirm is required',
        //             v => v === this.password || 'Passwords have to match '
        //         ]
        //     }
        // },

        mounted() {
            this.getInfo();
        },
        methods: {
            getInfo() {
                // if (this.$refs.form.validate()) {
                //     const user = {
                //         email: this.email,
                //         password: this.password,
                //         name: this.companyname,
                //         itn: this.TIN,
                //         address: this.address,
                //         website: this.website,
                //         description: this.description,
                //         first_name: this.first_name,
                //         last_name: this.last_name,
                //         patronymic: this.patronymic,
                //         position: this.position
                //     };
                //     axios.patch('http://127.0.0.1:8081/api/organizations/', user)
                //         .then(response => console.log(response))
                //         .catch(error => {
                //             console.log(error);
                //         });
            },

            toEditPage() {

            },

            editPassword() {

            },

            deleteAccount() {

            }
        }
    }
</script>

<style>
    .compact-form {
        transform: scale(0.875);
        transform-origin: left;
    }
</style>