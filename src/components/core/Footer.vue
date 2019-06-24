<template>
    <v-footer
            height="auto"
            color="primary lighten-2"
    >
        <v-layout
                justify-center
                row
                wrap
        >
            <v-btn
                    v-for="link in links"
                    :key="link"
                    color="black"
                    flat
                    round
            >
                {{ link }}
            </v-btn>
            <v-flex
                    dark
                    primary
                    py-3
                    text-xs-center
                    white--text
                    xs12
            >
                &copy;2018 — <strong>ITMO Dev</strong>
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script>
    export default {
        data: () => ({
            links: [
                'Home',
                'About Us',
                'Team',
                'Blog',
                'Contact Us'
            ]
        })
    }
</script>