import { IUserList } from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";

export interface IUserSlice {
    isLoading: boolean;
    userList: IUserList;
}

const initialState: IUserSlice = {
    isLoading: false,
    userList: {
        adminUserList: [],
        total_records: 0
    }
};

// Reducer
const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        loaderChange: (state, action) => {
            state.isLoading = action.payload;
        },
        getUserList: (state, action) => {
            state.userList = action.payload;
        }
    },
});

export const { loaderChange, getUserList } = userSlice.actions;
export default userSlice.reducer;
