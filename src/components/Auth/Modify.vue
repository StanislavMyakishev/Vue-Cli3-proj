<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>

                <v-flex>
                    <v-card
                            class="elevation-12"
                    >
                        <v-toolbar
                                dark color="primary"
                        >
                            <v-toolbar-title>Account settings</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form
                                    v-model="valid"
                                    ref="form"
                                    lazy-validation
                            >
                                <v-text-field
                                        name="email"
                                        label="Email"
                                        type="email"
                                        v-model="email"
                                        :rules="emailRules"
                                ></v-text-field>
                                <v-text-field
                                        name="password"
                                        label="Password"
                                        type="password"
                                        counter
                                        v-model="password"
                                        :rules="passwordRules"
                                ></v-text-field>
                                <v-text-field
                                        name="confirmpassword"
                                        label="Confirm password"
                                        type="password"
                                        counter
                                        v-model="password"
                                        :rules="passwordRules"
                                ></v-text-field>
                                <v-layout row wrap>
                                    <v-text-field
                                            class="compact-form"
                                            name="companyname"
                                            label="Company name"
                                            type="text"
                                            v-model="textNode"
                                    ></v-text-field>
                                    <v-text-field
                                            name="taxnumber"
                                            class="compact-form"
                                            label="TIN"
                                            type="text"
                                            v-model="textNode"
                                    ></v-text-field>
                                </v-layout>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    color="primary"
                                    @click="onSubmit"
                                    :disabled="!valid"
                            >Save changes
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: '',
                valid: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
                ]
            }
        },
        methods: {
            onSubmit() {
                if (this.$refs.form.validate()) {
                    const user = {
                        emial: this.email,
                        password: this.password
                    }
                    alert(user.emial + ' ' + user.password)
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