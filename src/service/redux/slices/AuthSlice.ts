import { LS_TOKEN } from "@/constants";
import { IUserData } from "@/types/auth";
import { deleteCookie, setCookie } from "@/utils/cookies";
import { createSlice } from "@reduxjs/toolkit";

export interface IAuthSlice {
    isLoading: boolean;
    isLoggedIn: boolean;
    userData: IUserData;
}

const initialState: IAuthSlice = {
    isLoading: false,
    isLoggedIn: false,
    userData: {
        id: '',
        authToken: ''
    }
};

// Reducer
const loginSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {
        authSuccess: (state, action) => {

            setCookie(LS_TOKEN, JSON.stringify(action.payload))
            state.isLoggedIn = true
            state.userData = action.payload
        },
        authFail: (state, action) => {

            deleteCookie(LS_TOKEN)

            state.isLoggedIn = false
            state.userData = {
                id: '',
                authToken: ''
            }
        },
        loaderChange: (state, payload) => {
            state.isLoading = payload.payload;
        },
    },
});

export const { loaderChange, authSuccess, authFail } = loginSlice.actions;
export default loginSlice.reducer;
