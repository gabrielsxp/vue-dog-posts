import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://n161.tech/api/dummyapi/'
});

export default instance;