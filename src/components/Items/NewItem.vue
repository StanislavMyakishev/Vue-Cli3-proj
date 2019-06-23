<template>
    <v-container>
        <v-layout row justify-center>
            <v-flex d-flex sm8 md8>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                            v-model="name"
                            :counter="10"
                            label="New Item name"
                            :rules="nameRules"
                            required

                    ></v-text-field>
                    <v-textarea
                            v-model="descr"
                            label="Description"
                            :rules="descrRules"
                            required
                    ></v-textarea>
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

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from 'axios'

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
                v => !!v || 'You must accept terms to continue'
            ]
        }),

        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    const order = {
                        name: this.name,
                        description: this.descr,
                        category: this.select
                    };
                    this.$root.$emit('newItem', order);
                    axios.post('http://127.0.0.1:8081/api/orders/', order)
                        .then(response => {
                            console.log(response)
                        })
                }
            },

            clear() {
                this.name = '';
                this.descr = '';
                this.select = null;
                this.checkbox = false
            }
        }
    }
</script>