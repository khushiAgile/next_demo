import { api } from './api';
import { store } from './redux/store';
import { authFail, authSuccess } from './redux/slices/AuthSlice';
import { IAuthApiRes, ILogin } from '@/types/auth';
import { API_LOGIN } from '@/constants/api';

export const login = async (data: ILogin): Promise<IAuthApiRes> => {
    return api().post(API_LOGIN, data)
        .then((res) => {
            store.dispatch(authSuccess(res?.data))
            return Promise.resolve(res);
        })
        .catch((err) => {
            store.dispatch(authFail({}))
            return Promise.reject(err);
        })
};

