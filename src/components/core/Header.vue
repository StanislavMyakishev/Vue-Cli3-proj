<template>
    <v-layout>
        <v-toolbar app dark color="primary">
            <v-toolbar-side-icon
                    class="hidden-md-and-up"
                    @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-toolbar-title class="display-1">
                <router-link
                        to="/"
                        tag="span"
                        class="pointer">
                    Treasury
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                        v-for="link of links"
                        :key="link.title"
                        :to="link.url"
                        flat
                        @click="logout(link.title)">
                    <v-icon left>{{link.icon}}</v-icon>
                    {{link.title}}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-navigation-drawer
                app
                temporary=""
                v-model="drawer">
            <v-list>
                <v-list-tile
                        v-for="link of links"
                        :key="link.title"
                        :to="link.url"
                        @click="logout(link.title)">
                    <v-list-tile-action>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="link.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </v-layout>
</template>

<script>
    import axios from 'axios'
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '';

    export default {
        props: ['links'],
        data() {
            return {
                drawer: false,
                data: []
            }
        },
        methods: {
            logout(title) {
                if(title === 'Выйти') {
                    this.$root.$emit('logout');
                    this.$router.push('/');
                }
            }
        }
    }
</script>

<style>
    .pointer {
        cursor: pointer;
    }
</style>
