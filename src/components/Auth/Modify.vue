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
                            <v-toolbar-title>Account settings</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form
                                    v-model="valid"
                                    ref="form"
                                    lazy-validation
                            >
                                <p class="text-"
                                   prepend-icon="person"
                                   name="email"
                                   label="Email"
                                   type="email"
                                   v-model="email"
                                   :rules="emailRules"
                                   :is="editable"
                                >Email: {{email}}</p>

                                <!--<p class="text-"-->
                                   <!--:is="editable"-->
                                   <!--prepend-icon="lock"-->
                                   <!--name="password"-->
                                   <!--label="Password"-->
                                   <!--type="password"-->
                                   <!--counter-->
                                   <!--v-model="password"-->
                                   <!--:rules="passwordRules"-->
                                <!--&gt;</p>-->
                                <!--<p class="text-"-->
                                   <!--:is="editable"-->
                                   <!--prepend-icon="lock"-->
                                   <!--name="confirm-password"-->
                                   <!--label="Confirm password"-->
                                   <!--type="password"-->
                                   <!--counter-->
                                   <!--v-model="confirmPassword"-->
                                   <!--:rules="confirmPasswordRules"-->
                                <!--&gt;</p>-->
                                <v-layout row wrap>
                                    <p class="text-"
                                       :is="editable"
                                       prepend-icon="person"
                                       name="companyname"
                                       label="Название компании"
                                       type="text"
                                       v-model="companyname"
                                    >Название компании: {{companyname}}&#8195;</p>
                                    <p class="text-"
                                       :is="editable"
                                       prepend-icon="person"
                                       name="taxnumber"
                                       label="ИНН"
                                       type="text"
                                       v-model="TIN"
                                    >ИНН: {{TIN}} </p>
                                </v-layout>
                                <v-layout row wrap>
                                    <p class="text-"
                                       :is="editable"
                                       prepend-icon="person"
                                       name="address"
                                       label="Адрес"
                                       type="text"
                                       v-model="address"
                                    >Адрес: {{address}}&#8195;</p>
                                    <p class="text-"
                                       :is="editable"
                                       prepend-icon="person"
                                       name="website"
                                       label="Website"
                                       type="text"
                                       v-model="website"
                                    >Website: {{website}}</p>
                                </v-layout>
                                <p class="text-"
                                   :is="editable"
                                   prepend-icon="person"
                                   name="description"
                                   label="Описание"
                                   type="text"
                                   v-model="description"
                                >Описание:&#8195; {{description}}</p>
                                <v-layout row wrap>
                                    <p class="text-"
                                       :is="editable"
                                       prepend-icon="person"
                                       name="last-name"
                                       label="Фамилия"
                                       type="text"
                                       v-model="last_name"
                                    >Ф.И.О.&#8195;{{last_name}} &#8195;</p>
                                    <p class="text-"
                                       :is="editable"
                                       prepend-icon="person"
                                       name="first-name"
                                       label="Имя"
                                       type="text"
                                       v-model="first_name"
                                    >{{first_name}}&#8195;</p>
                                    <p class="text-"
                                       :is="editable"
                                       prepend-icon="person"
                                       name="middle-name"
                                       label="Отчество"
                                       type="text"
                                       v-model="patronymic"
                                    > {{patronymic}}&#8195;</p>

                                </v-layout>
                                <p class="text-"
                                   :is="editable"
                                   prepend-icon="person"
                                   name="position"
                                   label="Должность"
                                   type="text"
                                   v-model="position"
                                >Position: {{position}}</p>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn large color="warning"
                                   v-if="editable === 'p'"
                                   @click="editInfo">Изменить профиль
                            </v-btn>
                            <v-btn v-else
                                   large color="warning"
                                   @click="saveInfo">Сохранить изменения
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
        data: function () {
            return {
                email: '',
                editable: 'p',
                // password: '',
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
                confirmPassword: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                // passwordRules: [
                //     v => !!v || 'Password is required',
                //     v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
                // ],
                // confirmPasswordRules: [
                //     v => !!v || 'Password confirm is required',
                //     v => v === this.password || 'Passwords have to match '
                // ]
            }
        },
        mounted() {

            axios.get('http://127.0.0.1:8081/api/organizations/' + localStorage.getItem('userId') + '/')
                .then(response => response.data)
                .then(data => {
                    let organization = data;
                    this.email = organization.email;
                    this.companyname = organization.name;
                    this.TIN = organization.itn;
                    this.address = organization.address;
                    this.website = organization.website;
                    this.description = organization.description;
                    this.first_name = organization.first_name;
                    this.last_name = organization.last_name;
                    this.patronymic = organization.patronymic;
                    this.position = organization.position;

                })
                .catch(error => {
                    console.log(error)
                });
        },
        methods: {
            editInfo() {
                this.editable = "v-text-field";
                // axios.patch('http://127.0.0.1:8081/api/orders/', this.order)
            },
            saveInfo() {
                if (this.$refs.form.validate()) {
                    const user = {
                        email: this.email,
                        name: this.companyname,
                        itn: this.TIN,
                        address: this.address,
                        website: this.website,
                        description: this.description,
                        first_name: this.first_name,
                        last_name: this.last_name,
                        patronymic: this.patronymic,
                        position: this.position,
                    };
                    let config = this.config
                    axios.patch('http://127.0.0.1:8081/api/organizations/'+ localStorage.getItem('userId') + '/', user, config)
                        .then(response => console.log(response))
                        .catch(error => {
                            this.$root.$emit('error', error);
                        });
                    this.editable = 'p';
                }
            }
        },
        props: [ 'config']
    }
</script>

<style>
    .compact-form {
        transform: scale(0.875);
        transform-origin: left;
    }
</style>