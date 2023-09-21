import { API_USER_CREATE, API_USER_LIST, API_USER_UPDATE } from "@/constants/api";
import { IApiHeaders } from "@/types/auth";
import { ICreateUser, ICreateUserApiRes, IUpdateUser, IUserApiRes, IUserArgs } from "@/types/user";
import { api } from "./api";
import { getUserList } from "./redux/slices/UserSlice";
import { store } from "./redux/store";

export const getUserListAction = async (data: IUserArgs, header: IApiHeaders = {}): Promise<IUserApiRes> => {
    return api(header).post(API_USER_LIST, data)
        .then((res) => {
            store.dispatch(getUserList(res?.data));
            return res?.data
        })
        .catch(() => store.dispatch(getUserList([])));
};

export const createUserAction = async (data: ICreateUser, header: IApiHeaders = {}): Promise<ICreateUserApiRes> => {
    return api(header).post(API_USER_CREATE, data)
        .then((res) => {
            return res
        })
        .catch((err) => err);
};

export const updateUserAction = async (data: IUpdateUser, header: IApiHeaders = {}): Promise<any> => {
    return api(header).post(API_USER_UPDATE, data)
        .then((res) => {
            return res
        })
        .catch((err) => err);
};
