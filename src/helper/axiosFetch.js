import axios from "axios"

export const getProducts = async () => {
    await axios.get(`/api/products?
        organization_id=${import.meta.env.VITE_ORG_ID}
        &reverse_sort=false&page=1&size=10
        &Appid=${import.meta.env.VITE_APP_ID}
        &Apikey=${import.meta.env.VITE_API_KEY}`
    )
}