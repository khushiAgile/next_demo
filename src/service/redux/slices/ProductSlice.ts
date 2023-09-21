import { IDashboardCount, IProductList } from "@/types/dashboard";
import { createSlice } from "@reduxjs/toolkit";

export interface IAuthSlice {
    isLoading: boolean;
    productCount: IDashboardCount
    productList: IProductList;
}

const initialState: IAuthSlice = {
    isLoading: false,
    productCount: {
        orderCount: 0,
        productCount: 0,
        userCount: 0
    },
    productList: {
        adminProductList: []
    }
};

// Reducer
const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        loaderChange: (state, action) => {
            state.isLoading = action.payload;
        },
        getDashboardCount: (state, action) => {
            state.productCount = action.payload;
        },
        getProductList: (state, action) => {
            state.productList = action.payload;
        }
    },
});

export const { loaderChange, getDashboardCount, getProductList } = productSlice.actions;
export default productSlice.reducer;
