import axios from "axios";

export const axiosInstance = axios.create( {
    baseURL: "https://fva8rhim.api.sanity.io/v2021-10-21/data/query/production"
} );
