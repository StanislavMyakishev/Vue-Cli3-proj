<template>
    <v-container>
        <v-layout row>
            <v-flex sm6 offset-sm3>
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
                    <v-btn @click="validate" :disabled="!valid">submit</v-btn>
                    <v-btn @click="clear">clear</v-btn>
                </v-form>
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
            validate () {
                if (this.$refs.form.validate()) {
                    // Add POST request
                }
            },
            clear () {
                this.name = ''
                this.descr = ''
                this.select = null
                this.checkbox = false
            }
        }
    }
</script>