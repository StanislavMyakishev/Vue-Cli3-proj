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

    export default {
        data() {
            return {
                drawer: false,
                links: [
                    {title: 'login', icon: 'lock', url: '/login'},
                    {title: 'Registration', icon: 'face', url: '/reg'},
                    {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
                    {title: 'New ad', icon: 'note_add', url: '/new'},
                    {title: 'My ads', icon: 'list', url: '/list'}
                ]
            }
        },
        components: {
            appFooter: Footer,
            appHeader: Header
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