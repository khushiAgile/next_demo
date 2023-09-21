import { IArgsAPiReq } from "./auth";

export interface IUserList {
    adminUserList: AdminUserList[];
    total_records: number
}

export interface AdminUserList extends IUpdateUser {
    depot: string;
}

export interface IUserApiRes {
    status: number;
    message: string;
    data: IUserList;
}

interface Data extends ICreateUser {
    productStatus: boolean;
    createdDate: string;
    updatedDate: string;
    _id: string;
    __v: number;
}

export interface ICreateUserApiRes {
    status: number;
    message: string;
    data: Data;
}

export interface ICreateUser {
    userName: string;
    mobileNo: string;
    point: number;
}

export interface IUserArgs extends IArgsAPiReq {
    column?: string;
    order?: string;
}
export interface IUpdateUser extends ICreateUser {
    _id: string;
}