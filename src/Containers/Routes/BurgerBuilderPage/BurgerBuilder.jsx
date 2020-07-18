import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-64552.firebaseapp.com/'
});

export default instance;