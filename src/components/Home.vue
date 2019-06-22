<template>
    <v-content>
        <v-container fluid grid-list-xl>
            <!--SEARCH-->
            <v-layout align-center justify-center row>
                <v-flex xs12 sm8 md6 align-center justify-center column fill-height>
                    <v-layout>
                        <v-text-field
                                class="mx-3"
                                flat
                                label="Search"
                                solo-inverted
                        >

                        </v-text-field>
                        <v-btn class="blue-grey lighten-4">
                            <v-icon>search</v-icon>
                        </v-btn>
                        <v-form
                                v-model="valid"
                                ref="form"
                        >
                        </v-form>
                    </v-layout>
                </v-flex>
            </v-layout>
            <!--SEARCH ENDS-->

            <!--AREAS-->
            <v-item-group>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex
                                v-for="item in items"
                                :key="item.id"
                                xs12 sm6 md4
                        >
                            <v-item>
                                <v-card
                                        color="blue-grey lighten-4"
                                        class="align-center"
                                        height="200"
                                        @click="goToField(item)"
                                >
                                    <v-card-title
                                            primary class="title black--text"
                                    >{{item.title}}
                                    </v-card-title>
                                    <v-card-text class="black--text">{{ item.description }}</v-card-text>
                                </v-card>
                            </v-item>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-item-group>
            <!--AREAS END-->
        </v-container>
    </v-content>
</template>

<script>

    export default {
        data() {
            return {
                items: [
                    {
                        id: 1,
                        title: 'IT',
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil!"
                    },
                    {
                        id: 2,
                        title: 'Finance',
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil!"
                    },
                    {
                        id: 3,
                        title: 'HR',
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil!"
                    },
                    {
                        id: 4,
                        title: 'Marketing',
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil!"
                    },
                    {
                        id: 5,
                        title: 'Retail',
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil!"
                    },
                    {
                        id: 6,
                        title: 'Other',
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil!"
                    }
                ]
            }
        },
        methods: {
            goToField(item) {
                this.$router.push({ path: item.title })
            }
        }
    }
</script>

<style scoped>
    .pointer {
        cursor: pointer
    }
</style>

