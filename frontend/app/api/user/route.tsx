import axios from "axios";
import { SERVER_URL } from "@/app/constants/constanst";
const BASE_URL = SERVER_URL

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})

export const get_user_profile_details = async (username:any) => {
    const reposnse = await api.get(`/user_data/${username}/`)
    return reposnse.data
}
