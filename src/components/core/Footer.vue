<template>
    <v-footer
            height="auto"
            color="primary">
        <v-layout
                justify-center
                row
                wrap>
            <v-btn
                    v-for="link in links"
                    :key="link.name"
                    color="white"
                    flat
                    :to=link.url
                    round>
                {{ link.name }}
            </v-btn>
            <v-flex
                    primary
                    lighten-1
                    py-3
                    text-xs-center
                    white--text
                    xs12>
                &copy;2018 — <strong>ITMO Dev</strong>
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script>
    export default {
        data: () => ({
            links: [{
                name: 'О Нас',
                url: '/about'
            }, {
                name: 'Команда',
                url: '/team'
            }, {
                name: 'Блог',
                url: '/blog',
            },]
        })
    }
</script>