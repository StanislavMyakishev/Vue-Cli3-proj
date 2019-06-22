<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md6>
                    <v-card>
                        <v-toolbar
                                dark color="primary"
                        >
                            <v-toolbar-title>Registration form</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form
                                    v-model="valid"
                                    ref="form"
                                    lazy-validation
                            >
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
                                        label="Password"
                                        type="password"
                                        counter
                                        v-model="password"
                                        :rules="passwordRules"
                                ></v-text-field>
                                <v-text-field
                                        prepend-icon="lock"
                                        name="confirm-password"
                                        label="Confirm password"
                                        type="password"
                                        counter
                                        v-model="confirmPassword"
                                        :rules="confirmPasswordRules"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    color="primary"
                                    @click="onSubmit"
                                    :disabled="!valid"
                            >Create account</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    <div v-if="authorized">
        <div class="icon">Мои заказы</div>
        <div class="icon">Личный кабинет</div>
        <div class="icon">Что-то еще личное</div>
    </div>
    <div v-else>
        <div class="icon">Регистрация</div>
        <div class="icon">Логин</div>
    </div>
    </v-content>

</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                email: '',
                password: '',
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
            onSubmit(){
                if (this.$refs.form.validate()) {
                    const user = {
                        username: this.email,
                        password: this.password
                    }

                    // Можно будет добавть визуальщину или переход в лк при регистрации, пока этого нема
                    axios.post('http://127.0.0.1:8081/api/registration/', user)
                        .then(response => {
                            if (response.code === '200') {
                                // alert("User added to database")
                                this.$root.$emit('authorized', {...user, token: response.data.token})
                            } else {
                                throw new Error('Some error occured')
                            }
                        })
                        .catch(error => {
                            alert(error);
                        })
                }
            }
        }
    }
</script>