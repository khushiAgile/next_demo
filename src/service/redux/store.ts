import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector as useReduxSelector,
} from "react-redux";
import AuthSlice from "./slices/AuthSlice";
import ProductSlice from "./slices/ProductSlice"
import userSlice from "./slices/UserSlice"
import OrderSlice from "./slices/OrderSlice";

export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        product: ProductSlice,
        user: userSlice,
        order: OrderSlice,
    },
    middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types

