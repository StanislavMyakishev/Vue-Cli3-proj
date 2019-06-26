<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout column>
                <v-flex lg8 sm8 xs12>
                    <v-layout align-center justify-center column fill-height>
                        <v-card flat>
                            <v-card-title>
                                <v-card-text class="display-2">
                                    <span class="clr">О нас</span>
                                </v-card-text>
                            </v-card-title>
                        </v-card>
                        <v-card flat>
                            <v-card-title>
                                <v-card-text class="subheading">
                                    {{page.description}}
                                </v-card-text>
                            </v-card-title>
                        </v-card>
                        <v-flex xs12>
                            <v-card flat>
                                <v-list>
                                    <v-card-text class="title text-xs-center">
                                        <span class="clr">Что мы успели сделать?</span>
                                    </v-card-text>
                                    <v-list-tile
                                            v-for="item in page.about"
                                            :key="item.title">
                                        <v-list-tile-action>
                                            <v-icon color="secondary">star</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title v-text="item.title"></v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                </v-list>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        data: () => ({
            page: {
                title: 'О нас',
                description: 'Наша команда занимается разработкой этого сайта с 10 июня 2019 года. Вообще эта страница не очень нужна, но иногда нам хочется, чтобы было красиво и мы делаем красиво :)',
                about: [{
                    title: 'Собрали команду с нуля'
                }, {
                    title: 'Разработали эндпоинты и модель БД PostgreSQL'
                }, {
                    title: 'Разработали концепцию дизайна'
                }, {
                    title: 'Реализовали одностраничный фронт сайта'
                }, {
                    title: 'Допилили кучу косяков'
                }
                ]
            }
        })
    }
</script>