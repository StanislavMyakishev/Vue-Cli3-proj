<template>
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
</template>

<script>
    import axios from 'axios'

    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '';

    export default {
        props: ['links'],
        data() {
            return {
                data: []
            }
        },
        methods: {
            logout(title) {
                if (title === 'logout') {
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
