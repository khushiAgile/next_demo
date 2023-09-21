
export interface IDashboardCount {
    userCount: number;
    productCount: number;
    orderCount: number;
}

export interface IGetDashboardApiRes {
    data: IDashboardCount;
    message: string;
    statusCode: number;
}

export interface IProductList {
    adminProductList: AdminProductList[];
    total_records: number;
}

export interface AdminProductList extends ICreateProduct {
    _id: string;
    productStatus: boolean;
}


export interface IProductApiRes {
    status: number;
    message: string;
    data: IProductList;
}

export interface ICreateProductApiRes {
    status: number;
    message: string;
    data: AdminProductList;
}

export interface ICreateProduct {
    productName: string;
    productDescription: string;
    productImages: string[];
    productPoints: number;
}


export interface IProductApiResError {
    error: string;
    message: any;
    statusCode: number;
}
export interface IImageAddAPiRes {
    status: number;
    message: string;
    data: Image[];
}

interface Image {
    name: string;
    url: string;
}

export interface IImageAdd {
    files: File[];
    module_name: string;
}