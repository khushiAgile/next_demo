'use client'
import CustomImage from '@/component/common/Image/image'
import Pagination from '@/component/common/Pagination/pagination'
import { IMAGE_BASE } from '@/constants'
import { ROUTES } from '@/constants/routes'
import { IProductList } from '@/types/dashboard'
import React from 'react'
import styles from '../../../app/products/page.module.css'

interface IProps {
    listData: IProductList
    productPageNumber: number
}

const ProductTable = (props: IProps) => {

    const { listData, productPageNumber } = props;

    return (
        <>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tableHeader}>
                        <th className={styles.th}>Product Pic</th>
                        <th className={styles.th}>Product Name</th>
                        <th className={styles.th}>Product Description</th>
                        <th className={styles.th}>Product Points</th>
                    </tr>
                </thead>
                <tbody>
                    {listData?.adminProductList && listData?.adminProductList.map((item) => (
                        <tr key={item?._id}>
                            <td className={styles.td_image}><CustomImage src={IMAGE_BASE + item?.productImages[0]} width={200} height={200} type='external' alt="Product 1" className={styles.product_pic} /></td>
                            <td className={styles.td}>{item?.productName}</td>
                            <td className={`${styles.td} ${styles.columnPadding}`} dangerouslySetInnerHTML={{ __html: item?.productDescription }}></td>
                            <td className={styles.td}>{item?.productPoints}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            <Pagination totalItems={listData?.total_records} itemsPerPage={5} linkHref={ROUTES.product} currentPage={productPageNumber} />

        </>
    )
}

export default ProductTable