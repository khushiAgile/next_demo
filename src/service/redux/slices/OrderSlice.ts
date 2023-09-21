import { IAdminOrderList, IOrderDetail } from "@/types/order";
import { createSlice } from "@reduxjs/toolkit";

export interface IOrderSlice {
    isLoading: boolean;
    orderList: IAdminOrderList
    orderDetail: IOrderDetail;
}

const initialState: IOrderSlice = {
    isLoading: false,
    orderList: {
        adminOrderList: [{
            _id: '',
            userName: '',
            totalPoints: 0,
            mobileNo: '',
        }],
        total_records: 0
    },
    orderDetail: {
        _id: '',
        mobileNo: '',
        product: [],
        totalPoints: 0,
        userId: '',
        userName: ''
    }
};

// Reducer
const orderSlice = createSlice({
    name: "order",
    initialState: initialState,
    reducers: {
        loaderChange: (state, action) => {
            state.isLoading = action.payload;
        },
        getOrderList: (state, action) => {
            state.orderList = action.payload;
        },
        getOrderDetail: (state, action) => {
            state.orderDetail = action.payload;
        }
    },
});

export const { loaderChange, getOrderList, getOrderDetail } = orderSlice.actions;
export default orderSlice.reducer;
