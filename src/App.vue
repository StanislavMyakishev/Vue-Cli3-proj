<template>
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
      <v-content>
        <router-view></router-view>
      </v-content>
    </div>
    <!--FOOTER-->
    <app-footer></app-footer>
    <!--FOOTER ENDS-->
  </v-app>
</template>

<script>
  import Footer from '@/components/Items/Footer'
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
      appFooter: Footer
    }
  }
</script>

<style scoped>
  .body {
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    flex: 1 0 auto;
  }

  .footer {
    flex-shrink: 0;
  }
</style>