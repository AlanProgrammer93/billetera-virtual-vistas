import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'http://192.168.0.18/'
});

export default clientAxios;