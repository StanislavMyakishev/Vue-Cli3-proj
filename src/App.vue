<template>
    <div id="app">
        <v-app class="body">
            <div class="wrapper">
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
       
        computed: {
            loggedIn() {
                return this.user.token.length > 0;
            },
            links() {
                if (this.loggedIn) {
                    return [
                        {title: 'Мои заказы', icon: 'bookmark_border', url: '/myorders'},
                        {title: 'Новый заказ', icon: 'note_add', url: '/new'},
                        {title: 'Мои заявки', icon: 'description', url: '/myrequests'},
                        {title: 'Выйти', icon: 'lock', url: '/'},
                    ]
                } else {
                    return [
                        {title: 'Вход', icon: 'lock', url: '/login'},
                        {title: 'Регистрация', icon: 'face', url: '/reg'}
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
        },
    }
</script>

<style scoped>

    #app {
        background-color: #FFFFFF;
    }

    .body {
        display: flex;
        flex-direction: column;
    }

    .wrapper {
        flex: 1 0 auto;
    }

</style>