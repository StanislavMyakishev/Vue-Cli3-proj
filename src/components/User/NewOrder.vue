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
                            <v-toolbar-title>New Order</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form
                                    v-model="valid"
                                    ref="form"
                                    lazy-validation
                            >
                                <v-text-field
                                        v-model="name"
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
                                        item-text="text"
                                        item-value="value"
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
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="validate" :disabled="!valid" class="blue-grey lighten-4">submit</v-btn>
                            <v-btn @click="clear" class="blue-grey lighten-4">clear</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>


<script>

    export default {
        data: () => ({
            name: '',
            descr: '',
            select: null,
            items: [
                {value: 1, text: 'IT'},
                {value: 2, text: 'Finance'},
                {value: 3, text: 'Human Resources'},
                {value: 4, text: 'Marketing'},
                {value: 5, text: 'Retail'},
                {value: 6, text: 'Other'}
            ],
            checkbox: false,
            // tags: [],
            valid: true,
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length >= 10) || 'Name must be more than 10 characters'
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
                        category: this.select - 1,
                        // tags: [],

                    };
                    console.log(order);
                    this.$root.$emit('newOrder', order);
                }
            },
            clear() {
                this.name = '',
                this.descr = '',
                this.select = null,
                this.checkbox = false
            }
        }
    }
</script>