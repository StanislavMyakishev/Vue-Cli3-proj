<template>
  <v-layout row justify-center>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Ой-ой. Что-то пошло не так...</v-card-title>

        <v-card-text>
          {{text}}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="goBack"
          >
            Вернуться назад
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import router from '../../router/index'

export default {
    data() {
        return {
            dialog: false,
            text: '',
        }
    },
    mounted() {
        this.$root.$on('error', error => {
            this.dialog = true;
            this.text = error;
        })
    },
    methods: {
        goBack() {
            this.dialog = false;
            router.go(-1);
        }
    }
}
</script>
