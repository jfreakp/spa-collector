import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { getEnvVariables } from '../helpers/getEnvVariables';

const {VITE_URL_AUTH} = getEnvVariables()
export const genesisApi = axios.create({
    baseURL: VITE_URL_AUTH
})

//inteceptores
genesisApi.interceptors.request.use((config:any) => {
    
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    };
    console.log("config",config.headers);
    return config;
})

export default genesisApi