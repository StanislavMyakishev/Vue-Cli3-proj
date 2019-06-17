<template>
    <v-toolbar app dark color="primary">
        <v-toolbar-side-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
        ></v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link
                  to="/"
                  tag="span"
                  class="pointer"
          >
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
          >
            <v-icon left>{{link.icon}}</v-icon>
            {{link.title}}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
</template>

<script>
export default {
    props: ['links']
}
</script>
