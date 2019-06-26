<template>
    <v-container grid-list-md text-xs-center>
        <v-layout>
            <v-flex>
                <v-card>
                    <v-layout row wrap>
                        <v-flex xs12 md4 sm4>
                            <v-card flat>
                                <v-responsive>
                                    <v-avatar
                                            :tile=true
                                            :size="300"
                                            color="grey lighten-4">
                                        <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
                                    </v-avatar>
                                </v-responsive>
                                <v-card-text>
                                    <h2 class="text-md-center">{{organization.address}}</h2>
                                    <h2 class="text-md-center">{{organization.website}}</h2>
                                    <h2 class="text-md-center">ИНН: {{organization.itn}}</h2>
                                </v-card-text>
                                <v-card-actions class="pa-3">
                                    Рейтинг:
                                    <v-spacer></v-spacer>
                                    <span class="grey--text text--lighten-2 caption mr-2">({{ rating }})</span>
                                    <v-rating
                                            v-model="rating"
                                            background-color="white"
                                            color="secondary"
                                            dense
                                            half-increments
                                            hover
                                            size="18"
                                    ></v-rating>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 md8 sm8>
                            <v-card flat>
                                <v-card-text class="headline">
                                    <span class="text-md-center">{{organization.name}}</span>
                                </v-card-text>
                                <v-card-text class="text-sm-left">
                                    <span class="text--primary">{{organization.description}}</span>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs12 md12 sm12>
                            <v-card flat>
                                <v-list two-line>
                                    <template v-for="(user, index) in users">
                                        <v-subheader
                                                v-if="user.header"
                                                :key="user.header">
                                            {{ user.header }}
                                        </v-subheader>
                                        <v-divider
                                                v-else-if="user.divider"
                                                :key="index"
                                                :inset="user.inset"
                                        ></v-divider>
                                        <v-list-tile
                                                v-else
                                                :key="user.title"
                                                avatar>
                                            <v-list-tile-avatar>
                                                <img :src="user.avatar">
                                            </v-list-tile-avatar>
                                            <v-list-tile-content>
                                                <v-list-tile-title v-html="user.performerName"></v-list-tile-title>
                                                <v-list-tile-sub-title v-html="user.subtitle"></v-list-tile-sub-title>
                                            </v-list-tile-content>
                                            <v-card-actions class="pa-3">
                                                Оценка:
                                                <v-spacer></v-spacer>
                                                <span class="grey--text text--lighten-2 caption mr-2">({{ user.rating }})</span>
                                                <v-rating
                                                        v-model="user.rating"
                                                        background-color="white"
                                                        color="secondary"
                                                        dense
                                                        :readonly="true"
                                                        half-increments
                                                        hover
                                                        size="18"
                                                ></v-rating>
                                            </v-card-actions>
                                        </v-list-tile>
                                    </template>
                                </v-list>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs12 md12 sm12>
                            <v-card flat v-if=perform>
                                <v-card-text>
                                    <v-textarea
                                            label="Комментарий">
                                    </v-textarea>
                                </v-card-text>
                                <v-card-actions class="pa-3">
                                    Оценка:
                                    <v-spacer></v-spacer>
                                    <span class="grey--text text--lighten-2 caption mr-2">({{ ownRating }})</span>
                                    <v-rating
                                            v-model="ownRating"
                                            background-color="white"
                                            color="secondary"
                                            half-increments
                                            hover
                                            size="18"
                                    ></v-rating>
                                </v-card-actions>
                                <div class="text-xs-center">
                                    <v-btn large color="secondary">Отправить отзыв</v-btn>
                                </div>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    export default {
        props: ['id'],
        data() {
            return {
                perform: !true,
                rating: 2,
                ownRating: 5,
                organization: {
                    name: 'Университет ИТМО',
                    itn: '12345678912',
                    description: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa',
                    website: 'www.itmo.ru',
                    imgSrc: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
                    address: 'Ulitsa Pushkina dom Kolotushkina',
                },
                users: [
                    {header: 'Отзывы'},
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                        performerName: 'Иван Иванов',
                        subtitle: "<span class='text--primary'>Организация неплохая и выпускники интересные!</span>",
                        rating: 5,
                    },
                    {divider: true, inset: true},
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                        performerName: 'Павел Григорьев <span class="grey--text text--lighten-1"></span>',
                        subtitle: "<span class='text--primary'>Куда нажать, чтобы просто получить зачет по вебу в этой контрое?</span>",
                        rating: 4,
                    },
                    {divider: true, inset: true},
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                        performerName: 'Анна Некифорова',
                        subtitle: "<span class='text--primary'>Какая оценка по вебу у меня, такая будет и у Вас!!!!</span>",
                        rating: 3,
                    }
                ],
            }
        },
        methods: {}
    }
</script>

<style>
    .float {
        float: left;
        text-align: center;
    }

    .abs {
        height: 180px;
        width: 180px;
        top: 20px;
        left: 20px;
        position: absolute;
        z-index: 100;
    }
</style>
