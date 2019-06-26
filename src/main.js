import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
    theme: {
        primary: '#6200EE',
        secondary: '#03DAC5',
        background: '#FFFFFF',
        black: '#000000',
        error: '#B00020',
        warning: '#018786'
    }
});

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router
}).$mount('#app');