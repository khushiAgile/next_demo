import ProductTable from '@/component/common/ProductTable/productTable'
import { ROUTES } from '@/constants/routes'
import { getProductListAction } from '@/service/product'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

export const revalidate = 1

interface ISearchParam {
    page: number
}

let productPageNumber = 10;
let productLimitParPage = 5;

const product = async ({ searchParams }: { searchParams: ISearchParam }) => {

    productPageNumber = searchParams?.page;

    const { data } = await getProductListAction({ page: productPageNumber, limit: productLimitParPage })

    return (
        <>
            <div className={styles.productMain}>
                <div className={styles.heading}>
                    <h1>Products</h1>
                    <Link href={ROUTES.addProduct} className={styles.addBtn}> Add New Product</Link>
                </div>
                {data?.adminProductList?.length ? <ProductTable listData={data} productPageNumber={productPageNumber} /> : <h1>Data Not Found</h1>}
            </div>
        </>
    )
}

export default product