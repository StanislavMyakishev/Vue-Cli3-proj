<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container>
        <v-layout align-center justify-center column fill-height>
            <v-flex xs12>
                <v-card
                        class="elevation-10 mb-3">
                    <v-responsive
                            class="rel">
                        <img class="abs" src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
                        <v-img
                                :src="testOrder.imageSrc"
                                height="300px">
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <h1 class="text-md-center">{{testOrder.title}}</h1>
                        <h2 class="text-md-center"> от компании "{{testOrder.company}}"</h2>
                        <p class="text-md-center">{{testOrder.description}}</p>
                        <p class="text-md-right">{{testOrder.createdDate.getFullYear() + '/' +
                            testOrder.createdDate.getMonth() + '/' + testOrder.createdDate.getDate() + ' ' +
                            testOrder.createdDate.getHours() + ':' + testOrder.createdDate.getMinutes()}} </p>
                    </v-card-text>
                </v-card>
                <v-card v-if=perform>
                    <v-card-text>
                        <v-textarea
                                label="Комментарий">
                        </v-textarea>
                    </v-card-text>
                    <div class="text-xs-center">
                        <v-btn large color="primary">Оставить заявку на заказ</v-btn>
                    </div>
                </v-card>
                <v-card v-else>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <div class="text-xs-center">
                            <v-btn large color="secondary">Заказ выполнен</v-btn>
                        </div>
                        <div class="text-xs-center">
                            <v-btn large color="warning">Изменить заказ</v-btn>
                        </div>
                        <div class="text-xs-center">
                            <v-btn large color="error">Удалить заказ</v-btn>
                        </div>
                    </v-card-actions>
                </v-card>
                <v-card v-if=!perform>
                    <v-list two-line>
                        <template v-for="(item, index) in performers">
                            <v-subheader
                                    v-if="item.header"
                                    :key="item.header">
                                {{ item.header }}
                            </v-subheader>

                            <v-divider
                                    v-else-if="item.divider"
                                    :key="index"
                                    :inset="item.inset"
                            ></v-divider>

                            <v-list-tile
                                    v-else
                                    :key="item.title"
                                    avatar>
                                <v-list-tile-avatar>
                                    <img :src="item.avatar">
                                </v-list-tile-avatar>

                                <v-list-tile-content>
                                    <v-list-tile-title v-html="item.performerName"></v-list-tile-title>
                                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                </v-list-tile-content>
                                <v-btn
                                        v-if=!hired
                                        color="secondary"
                                        @click="hired = !hired"
                                >Принять заявку
                                </v-btn>
                                <v-btn
                                        v-else
                                        color="error"
                                        @click="hired = !hired"
                                >Удалить перформера
                                </v-btn>
                            </v-list-tile>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                perform: !true,
                hired: false,
                id: this.$route.params.id,
                testOrder: {
                    title: 'Фриланс-биржа',
                    company: 'Университет ИТМО',
                    category: "IT",
                    createdDate: new Date(2019, 0, 1, 0, 0, 0, 0),
                    description: 'Наша компания предлагает Вам выполнить восхитительный проект: создание фриланс биржи!' +
                        ' Нам необходима реализация сайта этого проекта на стеке python + js используя vue (использование ' +
                        'Нам необходима реализация сайта этого проекта на стеке python + js используя vue (использование ' +
                        'инструментов по типу vuetify оставется на ваш вкус). Сайт должен быть красивым и функциональным,' +
                        'страницы должны быть реализованы с использованием material design компонентов и в принципе выглядеть ' +
                        'приятно. Это сампл описания заказа, так что особо не зачитывайтесь. Далее будет сгенерированный текст,' +
                        ' спасибо за внимание! ' + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    id: '1',
                },
                performers: [
                    {header: 'Заявки'},
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                        performerName: 'Иван Иванов',
                        subtitle: "<span class='text--primary'>Проект интересный, очень заинтересован его выполнить за зачет по вебу :)</span>"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                        performerName: 'Павел Григорьев <span class="grey--text text--lighten-1"></span>',
                        subtitle: "<span class='text--primary'>Куда нажать, чтобы просто получить зачет по вебу?</span>"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                        performerName: 'Анна Некифорова',
                        subtitle: "<span class='text--primary'>Согласна остановить горящую избу на скаку за тройку по вебу</span>"
                    }
                ]
            }
        }
    }
</script>

<style>
    .rel {
        position: relative;
    }

    .abs {
        top: 20px;
        left: 20px;
        position: absolute;
        z-index: 100;
    }
</style>