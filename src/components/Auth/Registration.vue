<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md8>
                    <v-card
                            class="elevation-10">
                        <v-toolbar
                                dark color="primary lighten-1">
                            <v-toolbar-title>Регистрация</v-toolbar-title>
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
                                        label="Пароль"
                                        type="password"
                                        counter
                                        v-model="password"
                                        :rules="passwordRules"
                                ></v-text-field>
                                <v-text-field
                                        prepend-icon="lock"
                                        name="confirm-password"
                                        label="Подтвердить пароль"
                                        type="password"
                                        counter
                                        v-model="confirmPassword"
                                        :rules="confirmPasswordRules"
                                ></v-text-field>
                                <v-layout row wrap>
                                    <v-text-field
                                            prepend-icon="person"
                                            class="compact-form"
                                            name="Название компании"
                                            label="Company name"
                                            type="text"
                                            v-model="companyname"
                                    ></v-text-field>
                                    <v-text-field
                                            prepend-icon="person"
                                            name="taxnumber"
                                            class="compact-form"
                                            label="ИНН"
                                            type="text"
                                            v-model="TIN"
                                    ></v-text-field>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-text-field
                                            prepend-icon="person"
                                            class="compact-form"
                                            name="address"
                                            label="Адрес"
                                            type="text"
                                            v-model="address"
                                    ></v-text-field>
                                    <v-text-field
                                            prepend-icon="person"
                                            name="website"
                                            class="compact-form"
                                            label="Вебсайт"
                                            type="text"
                                            v-model="website"
                                    ></v-text-field>
                                </v-layout>
                                <v-textarea
                                        prepend-icon="person"
                                        name="description"
                                        label="Описание"
                                        type="text"
                                        v-model="description">

                                </v-textarea>
                                <v-layout row wrap>
                                    <v-text-field
                                            prepend-icon="person"
                                            class="compact-form"
                                            name="first_name"
                                            label="Имя"
                                            type="text"
                                            v-model="first_name"
                                    ></v-text-field>
                                    <v-text-field
                                            prepend-icon="person"
                                            name="last_name"
                                            class="compact-form"
                                            label="Фамилия"
                                            type="text"
                                            v-model="last_name"
                                    ></v-text-field>
                                    <v-text-field
                                            prepend-icon="person"
                                            name="patronymic"
                                            class="compact-form"
                                            label="Отчество"
                                            type="text"
                                            v-model="patronymic"
                                    ></v-text-field>
                                </v-layout>
                                <v-text-field
                                        prepend-icon="person"
                                        name="position"
                                        label="Должность"
                                        type="text"
                                        v-model="position"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    color="secondary"
                                    @click="onSubmit"
                                    :disabled="!valid"
                            >Создать аккаунт
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
                password: '',
                companyname: '',
                TIN: '',
                address: '',
                website: '',
                description: '',
                first_name: '',
                last_name: '',
                patronymic: '',
                position: '',
                valid: false,
                confirmPasswrod: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
                ],
                confirmPasswordRules: [
                    v => !!v || 'Password confirm is required',
                    v => v === this.password || 'Passwords have to match '
                ]
            }
        },
        methods: {
            onSubmit() {
                if (this.$refs.form.validate()) {
                    const user = {
                        email: this.email,
                        password: this.password,
                        name: this.companyname,
                        itn: this.TIN,
                        address: this.address,
                        website: this.website,
                        description: this.description,
                        first_name: this.first_name,
                        last_name: this.last_name,
                        patronymic: this.patronymic,
                        position: this.position
                    };
                    axios.post('http://127.0.0.1:8081/api/organizations/', user)
                        .then(response => console.log(response))
                        .catch(error => {
                            console.log(error);
                        });
                    this.$router.push('/login')
                }
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