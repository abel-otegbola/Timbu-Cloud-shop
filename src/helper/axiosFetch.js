import axios from "axios"

const ORG_ID = import.meta.env.VITE_ORG_ID;
const Appid = import.meta.env.VITE_APP_ID
const Apikey = import.meta.env.VITE_API_KEY;


export const getProducts = async (page, cat) => {
    return await axios.get(
        `/api/products?organization_id=${ORG_ID}&category_id=${cat}&reverse_sort=false&page=${page}&size=12&Appid=${Appid}&Apikey=${Apikey}`
    )
}

export const getSingleProduct = async (id) => {
    return await axios.get(
        `/api/products/${id}?organization_id=${ORG_ID}&Appid=${Appid}&Apikey=${Apikey}`
    )
}

export const getCategories = async () => {
    return await axios.get(
        `/api/categories?organization_id=${ORG_ID}&reverse_sort=false&page=1&size=12&Appid=${Appid}&Apikey=${Apikey}`
    )
}

export const searchProducts = async (query) => {
    return await axios.get(
        `/api/products?organization_id=${ORG_ID}&search_value=${query}&reverse_sort=false&page=1&size=12&Appid=${Appid}&Apikey=${Apikey}`
    )
}