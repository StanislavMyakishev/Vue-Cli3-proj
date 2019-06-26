<template>
    <div id="app">
        <v-app class="body">
            <div class="wrapper">
                <app-header :links="links"></app-header>
                <v-content>
                    <router-view></router-view>
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

    export default {
        data() {
            return {
                drawer: false,
                user: {
                    username: "",
                    token: ""
                }
            }
        },
        components: {
            appFooter: Footer,
            appHeader: Header
        },
        methods: {
            authorized(user) {
                this.user.username = user.username;
                this.user.token = user.token;
                // Может еще какие данные передавать чтоб в ЛК отображать
            }
        },
        computed: {
            loggedIn() {
                return this.user.token.length > 0 ? true : false;
                // return true;
            },
            links() {
                if (this.loggedIn) {
                    return [
                        {title: 'My Orders', icon: 'bookmark_border', url: '/myorders'},
                        {title: 'New order', icon: 'note_add', url: '/new'},
                        {title: 'My requests', icon: 'description', url: '/list'},
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
            this.$root.$on('authorized', user => {
                this.user.username = user.username;
                this.user.token = user.token;
            });

            this.$root.$on('newOrder', order => {
                axios.post('http://127.0.0.1:8081/api/orders/', order, this.config)
                    .then(response => {
                        // Add some logic, waiting for spec
                    })
                    .catch(error => {
                        console.log(error);
                    })
            });

            this.$root.$on('logout', () => {
                this.user.token = '';
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