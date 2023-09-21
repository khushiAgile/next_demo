import { LS_TOKEN } from "@/constants";
import { authFail, authSuccess } from "@/service/redux/slices/AuthSlice";
import { Store } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "./cookies";

// Fun used for setting up the common header for axios through out the app and rehydrate the redux store
export const setupAxios = async (store: Store) => {
    try {
        // eslint-disable-next-line valid-typeof
        if (typeof document !== undefined && getCookie(LS_TOKEN)) {
            const userData = JSON.parse(getCookie(LS_TOKEN) || '');

            // It's used to rehydrate redux auth data when page is refreshed
            if (userData?.authToken) {
                store.dispatch(authSuccess(userData));
                axios.defaults.headers.common['Authorization'] = 'Bearer' + ' ' + userData?.access_token;
            }
            else {
                store.dispatch(authFail());
            }
        }
    } catch (error) {
        console.log('error: ', error);
    }
};
