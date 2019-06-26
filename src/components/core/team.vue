<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout column>
                <v-flex lg8 sm8 xs12>
                    <v-layout align-center justify-center column fill-height>
                        <v-card flat>
                            <v-card-title>
                                <v-card-text class="display-2">
                                    <span class="clr">Команда</span>
                                </v-card-text>
                            </v-card-title>
                        </v-card>
                        <v-flex xs12>
                            <v-layout column>
                                <v-flex xs12>
                                    <v-card flat>
                                        <v-list>
                                            <v-card-text class="display-1">
                                                <span class="clr">Senior</span>
                                            </v-card-text>
                                            <v-list-tile
                                                    v-for="(name, i) in senior"
                                                    :key="i">
                                                <v-list-tile-action>
                                                    <v-icon color="secondary">star</v-icon>
                                                </v-list-tile-action>
                                                <v-list-tile-content>
                                                    <v-list-tile-title v-text="name.title"></v-list-tile-title>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                        </v-list>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12>
                                    <v-card flat>
                                        <v-list>
                                            <v-card-text class="display-1">
                                                <span class="clr">Junior</span>
                                            </v-card-text>
                                            <v-list-tile
                                                    v-for="(name, i) in junior"
                                                    :key="i">
                                                <v-list-tile-action>
                                                    <v-icon color="secondary">star</v-icon>
                                                </v-list-tile-action>
                                                <v-list-tile-content>
                                                    <v-list-tile-title v-text="name.title"></v-list-tile-title>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                        </v-list>
                                    </v-card>
                                </v-flex>
                            </v-layout>
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
            senior: [
                {
                    title: 'Плугин Кирилл',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    title: 'Попов Владислав',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    title: 'Халепский Игорь',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    title: 'Доска Виктор',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    title: 'Неустроева Анастасия',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    title: 'Мякишев Станисалв',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
            ],
            junior: [
                {
                    title: 'Семилетов Александр',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    title: 'Люрко Георгий',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    title: 'Шаров Денис',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    title: 'Чернявский Дмитрий',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    title: 'Барабанов Александр',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    title: 'Аксенов Михаил',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    title: 'Вотчицев Никита',
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
            ]
        })
    }
</script>

<style>
    /*.pic_style {*/
    /*    width: 500px;*/
    /*}*/
</style>