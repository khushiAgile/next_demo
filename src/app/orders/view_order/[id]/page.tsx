'use client'
import CustomImage from '@/component/common/Image/image'
import Pagination from '@/component/common/Pagination/pagination'
import { IMAGE_BASE } from '@/constants'
import { getOrderDetailAction } from '@/service/order'
import { useAppSelector } from '@/service/redux/store'
import React, { useEffect } from 'react'
import styles from './page.module.css'

export interface IParamsProps {
    id: number;
}

const page = ({ params }: { params: IParamsProps }) => {

    const orderDetail = useAppSelector(state => state?.order?.orderDetail)

    useEffect(() => {
        getOrderDetailAction(params)
    }, [params])

    return (
        <>

            <div>
                <h1>View Order</h1>
                <div className={styles.detail}>
                    <h3>User Name: <span className={styles.viewDetail}>{orderDetail?.userName}</span></h3>
                    <h3>Phone No: <span className={styles.viewDetail}>{orderDetail?.mobileNo}</span></h3>
                    <h3>Total Point: <span className={styles.viewDetail}>{orderDetail?.totalPoints}</span></h3>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.tableHeader}>
                            <th className={styles.th}>Product Image</th>
                            <th className={styles.th}>Product Name</th>
                            <th className={styles.th}>Points</th>
                            <th className={styles.th}>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderDetail?.product && orderDetail?.product?.map((item) => (
                            <tr key={item?._id}>
                                <td className={styles.td_image}><CustomImage src={IMAGE_BASE + item?.productImages[0]} width={200} height={200} type='external' alt="Product 1" className={styles.product_pic} /></td>
                                <td className={styles.td}>{item?.productName}</td>
                                <td className={styles.td}>{item?.points}</td>
                                <td className={styles.td}>{item?.quantity}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default page