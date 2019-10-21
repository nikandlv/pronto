import axios from 'axios'
import route from 'axios-endpoint'
axios.defaults.baseURL = 'http://localhost:8000';

export default {
    getConfig: route('GET','/config').generate(),
}