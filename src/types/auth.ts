
export interface IApiHeaders {
    token?: string;
    contentType?: 'application/json' | string;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IUserData {
    id: string;
    authToken: string;
}

export interface IAuthApiRes {
    status: number;
    message?: string;
    data: ILogin;
}

export interface IArgsAPiReq {
    page: number;
    limit: number;
    search?: string;
}