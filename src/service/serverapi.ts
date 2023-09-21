'use server'
import { API_BASE, LS_TOKEN } from "@/constants";
import { IApiHeaders } from "@/types/auth";
import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
import { cookies } from "next/headers";


export const serverApi = (header: IApiHeaders = {}) => {

    const token = cookies().get(LS_TOKEN)?.value
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
            if (token)
                config.headers['Authorization'] = `Bearer ${JSON.parse(token).authToken}`;
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
            // if (response.data) {
            //   toast.dismiss();
            //   const successResponse = response.data as ISuccessResponse;
            //   toast.success(successResponse.message);
            // }
            return response.data;
        },
        (error: AxiosError) => {
            if (error.response) {
                if (error.response.data) {
                    // console.error("API Error:", error.response.data);
                    // toast.dismiss();
                    // const errorResponse = error.response.data as IErrorResponse;
                    // toast.error(errorResponse.error);
                }
                if (error.response.status === 401 || error.response.status === 403) {
                    // dispatch(authFail({}));
                }
            }
            throw error;
        }
    );

    return axiosClient;
}
