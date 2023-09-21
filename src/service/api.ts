import { API_BASE } from "@/constants";
import { IApiHeaders } from "@/types/auth";
import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
import { store } from "./redux/store";

export function getToken() {
    const { getState } = store;
    const { auth: { userData } } = getState()
    return userData?.authToken
}

export const api = (header: IApiHeaders = {}) => {

    const axiosClient: AxiosInstance = axios.create({
        baseURL: API_BASE,
        headers: {
            Accept: "application/json",
            "Content-Type": header.contentType,
        },
    });

    axiosClient.interceptors.request.use(
        (config) => {
            console.log("Starting Loading");
            if (getToken())
                config.headers['Authorization'] = `Bearer ${getToken()}`;
            return config;
        },
        (error) => {
            console.error("Request interceptor error:", error);
            return Promise.reject(error);
        }
    );
    axiosClient.interceptors.response.use(
        (response: AxiosResponse) => {
            console.log("Here...", response);
            return response.data;
        },
        (error: AxiosError) => {
            if (error.response) {
                if (error.response.data) {
                    return error.response.data
                }
                if (error.response.status === 401 || error.response.status === 403) {
                    return error.response.data
                }
            }
            throw error;
        }
    );

    return axiosClient;
}
