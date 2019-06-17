<template>
    <v-container>
        <v-layout row>
            <v-flex sm6 offset-sm3>
                <form>
                    <v-text-field
                            v-model="name"
                            :counter="10"
                            label="New Item name"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="descr"
                            label="Description"
                            required
                    ></v-text-field>
                    <v-select
                            v-model="select"
                            :items="items"
                            label="Areas"
                            required
                    ></v-select>
                    <v-checkbox
                            v-model="checkbox"
                            label="I read Terms and conditions"
                            required
                    ></v-checkbox>
                    <v-btn @click="submit">submit</v-btn>
                    <v-btn @click="clear">clear</v-btn>
                </form>
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
            checkbox: false
        }),
        methods: {
            submit () {
                //logic
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