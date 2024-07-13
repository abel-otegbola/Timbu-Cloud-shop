import axios from "axios"

export const getProducts = async () => {
    const ORG_ID = import.meta.env.VITE_ORG_ID;
    const Appid = import.meta.env.VITE_APP_ID
    const Apikey = import.meta.env.VITE_API_KEY;

    const URL = import.meta.env.DEV ? "/api" : "https://api.timbu.cloud"

    return await axios.get(`${URL}/products?organization_id=${ORG_ID}&reverse_sort=false&page=1&size=10&Appid=${Appid}&Apikey=${Apikey}`
    )
}