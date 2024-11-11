import axios from "axios";
import { SERVER_URL } from "@/app/constants/constanst";
const BASE_URL = SERVER_URL

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})

api.interceptors.response.use(
    (response) => response,
    async error => {
        const original_request = error.config

        if (error.response?.status === 401 && !original_request._retry) {
            original_request._retry = true;
            try {
                await refresh_token();
                return api(original_request)
            } catch (refreshError) {
                window.location.href = '/login'
                return Promise.reject(refreshError)
            }

        }
          return Promise.reject(error)
    }
)

export const get_user_profile_details = async (username:any) => {
    const reposnse = await api.get(`/user_data/${username}/`)
    return reposnse.data
}


const refresh_token = async () => {
    const response = await api.post('token/refresh')
    return response.data
}


export const login = async (username: any, password: any) => {
    const response = await api.post('token/', {username, password})
    return response.data
}
