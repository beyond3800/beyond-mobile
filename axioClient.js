import Config from "react-native-config";

const base = 'https://api.themoviedb.org/3/'
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWNjZjhlMzE5MDA0MzI3ZDZjNTE0MDQ0ZjE3NzIxMSIsInN1YiI6IjY1MWRiZmNjYzUwYWQyMDBhZDgyZDk3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p8mJQt2eX2S4WXellnQEoaxQYgAMoM5B3aHkO9oToTA'
const { default: axios } = require("axios");

const createAxiosClient = (baseUrl) => {
   const client = axios.create({
       baseURL: `${base}${baseUrl}/`,
       timeout: 10000,
    })
    client.interceptors.request.use( async(config) => {
        config.headers.Authorization = `Bearer ${token}`
        return config
    })
    client.interceptors.response.use( (response) => {
        return response
    }, async (error) => {
        try {
            const { response } = error;
            if (response.status == 401) {
            }
        } catch (error) {
            // console.log(error)
        }
        throw error
    })
    return client
}
export  default createAxiosClient