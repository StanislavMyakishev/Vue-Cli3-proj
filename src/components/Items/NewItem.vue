<template>
    <v-container>
        <v-layout row justify-center align-center>
            <v-flex d-flex xs12 sm12 md8>
                <v-card>
                    <v-toolbar
                            dark color="primary"
                    >
                        <v-toolbar-title>New Order</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                                    v-model="name"
                                    :counter="10"
                                    label="New Item name"
                                    :rules="nameRules"
                                    required

                            ></v-text-field>
                            <v-text-field
                                    v-model="descr"
                                    label="Description"
                                    :rules="descrRules"
                                    required
                            ></v-text-field>
                            <v-select
                                    v-model="select"
                                    :items="items"
                                    label="Areas"
                                    :rules="selectRules"
                                    required
                            ></v-select>
                            <v-checkbox
                                    v-model="checkbox"
                                    label="I read Terms and conditions"
                                    :rules="checkboxRules"
                                    required
                            ></v-checkbox>
                            <v-btn @click="validate" :disabled="!valid" class="blue-grey lighten-4">submit</v-btn>
                            <v-btn @click="clear" class="blue-grey lighten-4">clear</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            name: '',
            descr: '',
            select: null,
            items: [
                'IT',
                'Finance',
                'Human Resources',
                'Marketing',
                'Retail',
                'Other'
            ],
            checkbox: false,
            valid: true,
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters'
            ],
            descrRules: [
                v => !!v || 'Description is required'
            ],
            selectRules: [
                v => !!v || "Pick at least one field"
            ],
            checkboxRules: [
                v => !!v || 'You must agree to continue!'
            ]
        }),
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    // Add POST request
                }
            },
            clear() {
                this.name = ''
                this.descr = ''
                this.select = null
                this.checkbox = false
            }
        }
    }
</script>