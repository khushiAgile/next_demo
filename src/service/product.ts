import { API_DASHBOARD_COUNT, API_IMAGE_ADD, API_PRODUCT_CREATE, API_PRODUCT_LIST } from "@/constants/api";
import { IApiHeaders, IArgsAPiReq } from "@/types/auth";
import { api } from "./api";
import { ICreateProduct, ICreateProductApiRes, IGetDashboardApiRes, IImageAdd, IImageAddAPiRes, IProductApiRes } from "@/types/dashboard";
import { serverApi } from "./serverapi";

export const imageUploadAction = async (data: any, header: IApiHeaders = { contentType: 'multipart/form-data' }): Promise<IImageAddAPiRes> => {
    return api(header).post(API_IMAGE_ADD, data)
        .then((res) => {
            return res
        })
        .catch((err) => err);
};

export const createProductAction = async (data: ICreateProduct, header: IApiHeaders = {}): Promise<ICreateProductApiRes> => {
    return api(header).post(API_PRODUCT_CREATE, data)
        .then((res) => {
            return res
        })
        .catch((err) => err);
};

export const getDashboardCountAction = async (header: IApiHeaders = {}): Promise<IGetDashboardApiRes> => {
    return serverApi(header).post(API_DASHBOARD_COUNT)
        .then((res) => {
            return res
        })
        .catch((err) => err);
};

export const getProductListAction = async (data: IArgsAPiReq, header: IApiHeaders = {}): Promise<IProductApiRes> => {

    return serverApi(header).post(API_PRODUCT_LIST, data)
        .then((res) => {
            return res
        })
        .catch((err) => err);
};