import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend234.herokuapp.com/'
});

export default instance;