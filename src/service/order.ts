import { IParamsProps } from "@/app/orders/view_order/[id]/page";
import { API_ORDER_GET, API_ORDER_LIST } from "@/constants/api";
import { IApiHeaders, IArgsAPiReq } from "@/types/auth";
import { IGetOrderApiRes, IOrderApiRes } from "@/types/order";
import { api } from "./api";
import { getOrderDetail, getOrderList } from "./redux/slices/OrderSlice";
import { store } from "./redux/store";

export const getOrderListAction = async (data: IArgsAPiReq, header: IApiHeaders = {}): Promise<IOrderApiRes> => {
    return api(header).post(API_ORDER_LIST, data)
        .then((res) => {
            store.dispatch(getOrderList(res?.data));
            return res?.data;
        })
        .catch(() => store.dispatch(getOrderList([])));
};

export const getOrderDetailAction = async (data: IParamsProps, header: IApiHeaders = {}): Promise<IGetOrderApiRes> => {
    return api(header).get(API_ORDER_GET + data.id, { data })
        .then((res) => {
            store.dispatch(getOrderDetail(res?.data));
            return res?.data;
        })
        .catch(() => store.dispatch(getOrderDetail({})));
};
