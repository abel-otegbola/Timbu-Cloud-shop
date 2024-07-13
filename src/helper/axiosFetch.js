import axios from "axios"

export const getProducts = async () => {
    const ORG_ID = import.meta.env.VITE_ORG_ID;
    const Appid = import.meta.env.VITE_APP_ID
    const Apikey = import.meta.env.VITE_API_KEY;

    return await axios.get(`/api/products?organization_id=${ORG_ID}&reverse_sort=false&page=1&size=10&Appid=${Appid}&Apikey=${Apikey}`
    )
}