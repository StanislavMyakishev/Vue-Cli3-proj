<!--ПОЛНОСТЬЮ РАБОЧАЯ СТРАНИЦА-->

<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md6>
                    <v-card
                            class="elevation-12">
                        <v-toolbar
                                dark color="primary lighten-1">
                            <v-toolbar-title>Подтверждение по email</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form
                                    v-model="valid"
                                    ref="form"
                                    lazy-validation>
                                <v-text-field
                                        prepend-icon="person"
                                        name="email"
                                        label="Email"
                                        type="email"
                                        v-model="email"
                                        :rules="emailRules"
                                ></v-text-field>
                                <v-text-field
                                        prepend-icon="lock"
                                        name="password"
                                        label="Token"
                                        type="token"
                                        counter
                                        v-model="token"
                                        :rules="tokenRules"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    color="secondary"
                                    @click="onSubmit"
                                    :disabled="!valid"
                            >Подтвердить e-mail
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
        data() {
            return {
                email: '',
                token: '',
                valid: false,
                emailRules: [
                    v => !!v || 'Введите Ваш e-mail',
                    v => /.+@.+/.test(v) || 'E-mail должен быть реальным'
                ],
                tokenRules: [
                    v => !!v || 'Введите Token из письма'
                ]
            }
        },

        methods: {
            onSubmit() {
                if (this.$refs.form.validate()) {
                    const user = {
                        email: this.email,
                        token: this.token
                    };
                    axios.post('http://127.0.0.1:8081/api/organizations/confirm_email/', user)
                        .then(response => {
                            if (response.status === 200) {
                                console.log('Alles gut');
                                this.$router.push('/login')
                            }
                        })
                        .catch(error => {
                            this.$root.$emit('error', error);
                        });
                }
            }
        }
    }
</script>
