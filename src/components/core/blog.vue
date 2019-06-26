<template>
    <v-container fluid>
        <v-layout column>
            <v-flex lg8 sm8 xs8>
                <v-layout align-center justify-center column fill-height>
                    <v-card flat>
                        <v-card-title>
                            <v-card-text class="display-4">
                                <span class="clr">{{title}}</span>
                            </v-card-text>
                        </v-card-title>
                    </v-card>
                    <v-card flat>
                        <v-card-title>
                            <v-card-text class="display-2">
                                <span class="clr">{{page.description}}</span>
                            </v-card-text>
                        </v-card-title>
                    </v-card>
                    <v-card flat>
                        <v-list>
                            <v-card-text class="display-1">
                                <span class="clr">Заметки по работе над проектом</span>
                            </v-card-text>
                            <v-list-tile
                                    v-for="item in page.about"
                                    :key="item.title">
                                <v-list-tile-action>
                                    <v-icon color="secondary">check_circle_outline</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title v-text="item.title"></v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-card>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            title: 'Блог',
            page: {
                description: 'Станислава Мякишева',
                about: [{
                    title: 'Придумал я как-то, что весь фронт у нас будет на Vuetify'
                }, {
                    title: 'Накидал страничек, освоился с фреймворком, настроил роуты'
                }, {
                    title: 'Начал исправлять косяки, котоыре уже появились, по-тихоньку начал расширять функционал'
                }, {
                    title: 'Параллельно реализовывал свои идеи'
                }, {
                    title: 'Намучался с дизайном и адоптацией под маленькие экраны'
                }
                ]
            }
        })
    }
</script>