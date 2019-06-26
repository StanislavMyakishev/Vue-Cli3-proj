<template>
    <v-content>
        <v-container fluid grid-list-xl>
            <!--SEARCH-->
            <v-layout align-center justify-center row>
                <v-flex xs12 sm8 md6 align-center justify-center column fill-height>
                    <v-layout>
                        <v-text-field
                                class="text-md-center"
                                flat
                                label="Поиск">
                        </v-text-field>
                        <v-btn class="secondary">
                            <v-icon>search</v-icon>
                        </v-btn>
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
                                xs12 sm6 md4>
                            <v-item>
                                <v-card
                                        class="cent elevation-10"
                                        @click="showCategory(item.id)">
                                    <div v-if="!drawPic">
                                        <p class="clr display-3 font-weight-bold">
                                            {{item.title}}
                                        </p>
                                    </div>
                                    <v-card-media
                                            v-else>
                                        <v-img
                                                :src="item.imgSrc"
                                                height="200px"
                                        ></v-img>
                                    </v-card-media>
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
    import router from '../router/index'

    export default {
        data() {
            return {
                drawPic: false,
                items: [
                    {
                        id: 1,
                        title: 'IT',
                        imgSrc: "https://s3.amazonaws.com/rm-marketing-production/ample_admin/attachments/files/000/001/088/large_cropped/IT%20Spotlight.jpg?1519855047"
                    },
                    {
                        id: 2,
                        title: 'Finance',
                        imgSrc: "https://st2.depositphotos.com/2951317/10235/v/950/depositphotos_102355506-stock-illustration-finance-background-with-vector-icons.jpg"
                    },
                    {
                        id: 3,
                        title: 'HR',
                        imgSrc: "https://2f0m6a43zofy3ffa863wmmhv-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/What-is-Human-Resources.jpg"
                    },
                    {
                        id: 4,
                        title: 'Marketing',
                        imgSrc: "https://www.uhyhn.co.nz/wp-content/uploads/2011/06/marketing-pic.jpg"
                    },
                    {
                        id: 5,
                        title: 'Retail',
                        imgSrc: "https://sweetwatertexas.net/sites/default/files/news/retail.jpg"
                    },
                    {
                        id: 6,
                        title: 'Other',
                        imgSrc: "https://thequestion-dev.s3.eu-central-1.amazonaws.com/246/141504-28ea5090.jpeg"
                    }
                ]
            }
        },
        methods: {
            showCategory(id) {
                const category = id - 1;
                this.$root.$emit('showCategory');
                router.push({path: '/category', query: {category: category}});
            }
        }
    }
</script>

<style scoped>
    .cent {
        height: 200px;
        line-height: 200px;
        text-align: center;
    }

    .clr {
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
        color: rgba(98, 0, 238, 1);
    }
</style>

