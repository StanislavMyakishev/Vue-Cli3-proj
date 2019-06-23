import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
    theme: {
        primary: '#78909C',
        secondary: '#FFF59D',
        accent: '#ff5722',
        error: '#FF6D00',
        warning: '#ff9800',
        info: '#8bc34a',
        success: '#4caf50'
    }
});

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router
}).$mount('#app');