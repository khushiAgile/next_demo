export interface IOrderList {
    _id: string;
    userName: string;
    totalPoints: number;
    mobileNo: string;
}

export interface IAdminOrderList {
    adminOrderList: [IOrderList];
    total_records: number
}

export interface IOrderDetail {
    _id: string;
    userId: string;
    userName: string;
    mobileNo: string;
    product: Product[];
    totalPoints: number;
}

export interface Product {
    _id: number;
    productId: string;
    productName: string;
    points: number;
    quantity: number;
    productImages: string[];
}

export interface IOrderApiRes {
    status: number;
    message: string;
    data: IAdminOrderList;
}

export interface IGetOrderApiRes {
    status: number;
    message: string;
    data: IOrderDetail;
}