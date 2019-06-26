<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.allwallpaper.in/wallpapers/2560x1600/5480/sad-danbo-2560x1600-wallpaper.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Error</div>
          </div>
        </v-card-title>
          <v-card-text v-show="show">
            Something has gone wrong!
          </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>