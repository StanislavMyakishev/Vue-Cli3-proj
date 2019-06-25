<template>
    <div id="app">
        <v-app class="body">
            <div class="wrapper">
                <v-navigation-drawer
                        app
                        temporary=""
                        v-model="drawer"
                >
                    <v-list>
                        <v-list-tile
                                v-for="link of links"
                                :key="link.title"
                                :to="link.url"
                        >
                            <v-list-tile-action>
                                <v-icon>{{link.icon}}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title v-text="link.title"></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-navigation-drawer>
                <app-header :links="links"></app-header>
                <v-content>
                    <router-view :config="config" :userId="user.userId"></router-view>
                </v-content>
            </div>
            <app-footer></app-footer>
        </v-app>
    </div>
</template>

<script>
    import Footer from '@/components/core/Footer'
    import Header from '@/components/core/Header'
    import axios from 'axios'
    import router from './router/index'

    export default {
        data() {
            return {
                drawer: false,
                user: {
                    username: "",
                    token: "",
                    userId: "",
                }
            }
        },
        components: {
            appFooter: Footer,
            appHeader: Header
        },
        // methods: {
        //     authorized(user) {
        //         this.user.username = user.username;
        //         this.user.token = user.token;
        //         this.user.userId = user.userId;
        //         // Может еще какие данные передавать чтоб в ЛК отображать
        //     }
        // },
        computed: {
            loggedIn() {
                return this.user.token.length > 0;

                // return true;
            },
            links() {
                if (this.loggedIn) {
                    return [
                        {title: 'My Orders', icon: 'bookmark_border', url: '/myorders'},
                        {title: 'New order', icon: 'note_add', url: '/new'},
                        {title: 'My requests', icon: 'description', url: '/myrequests'},
                        {title: 'Org Info', icon: 'face', url: '/organization'},
                        {title: 'logout', icon: 'lock', url: '/'},
                    ]
                } else {
                    return [
                        {title: 'login', icon: 'lock', url: '/login'},
                        {title: 'Registration', icon: 'face', url: '/reg'}
                    ]
                }
            },
            config() {
                return {
                    headers: {
                        Authorization: 'Token ' + this.user.token
                    }
                }
            }
        },
        mounted() {
            if (localStorage.getItem('username') !== null) {
                this.user.username = localStorage.getItem('username');
                this.user.token = localStorage.getItem('token');
                this.user.userId = localStorage.getItem('userId');
            }

            this.$root.$on('authorized', user => {
                this.user.username = user.username;
                this.user.token = user.token;
                this.user.userId = user.userId;

                localStorage.setItem('username', this.user.username);
                localStorage.setItem('token', this.user.token);
                localStorage.setItem('userId', this.user.userId);

            });

            this.$root.$on('newOrder', order => {
                axios.post('http://127.0.0.1:8081/api/orders/', order, this.config)
                    .then(response => {
                        router.push('/myorders')
                    })
                    .catch(error => {
                        console.log(error);
                    })
            });

            this.$root.$on('logout', () => {
                this.user.token = '';
                localStorage.removeItem('username');
                localStorage.removeItem('token');
                localStorage.removeItem('userId');
            })
        }
    }
</script>

<style scoped>

    #app {
        background-color: #607d8b;
    }

    .body {
        display: flex;
        flex-direction: column;
    }

    .wrapper {
        flex: 1 0 auto;
    }

</style>