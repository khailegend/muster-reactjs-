import axios from 'axios';

class AxiosService {
    constructor(){
        const instance = axios.create({});
        instance.interceptors.request.use(function (config) {
            const token = localStorage.getItem('token');
            config.headers.Authorization =  token ? `Bearer ${token}` : '';
            return config;
        });
        instance.interceptors.response.use(this.handleCussess , this.handleError)
        this.instance = instance;
    }

    handleCussess(response) {
        return response
    }

    handleError(error) {
        return Promise.reject(error);
    }

    get(url) {
        return this.instance.get(url);
    }
}

export default new AxiosService();