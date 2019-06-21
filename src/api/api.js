import axios from 'axios'

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '';

export default {

    data() {
        return {
            data: []
        }
    },

    methods: {
        getUsers() {
            axios.get('http://127.0.0.1:8081/api/orders/')
                .then(response => {this.data = response})
                .catch(error => console.log('nibba', error));
        },

    }

}