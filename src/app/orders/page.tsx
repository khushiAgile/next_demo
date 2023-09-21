'use client'
import CustomPagination from '@/component/common/CustomPagination/pagination'
import { ROUTES } from '@/constants/routes'
import { getOrderListAction } from '@/service/order'
import { useAppSelector } from '@/service/redux/store'
import { IArgsAPiReq } from '@/types/auth'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../../app/users/page.module.css'

const product = () => {

    const { adminOrderList, total_records } = useAppSelector(state => state?.order?.orderList)

    const [args, setArgs] = useState<IArgsAPiReq>({
        limit: 10,
        page: 1,
    });

    useEffect(() => {
        getOrderListAction(args)
    }, [args])

    const handlePageChange = (newPage: number) => {
        setArgs({ ...args, page: newPage });
    };

    return (
        <>
            <div className={styles.productMain}>
                <div className={styles.heading}>
                    <h1>Orders</h1>

                </div>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.tableHeader}>
                            <th className={styles.th}>User Name</th>
                            <th className={styles.th}>Mobile Number</th>
                            <th className={styles.th}>Total Points</th>
                            <th className={styles.th}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adminOrderList && adminOrderList.map((item) => (
                            <tr key={item?._id}>
                                <td className={styles.td}>{item?.userName}</td>
                                <td className={styles.td}>{item?.mobileNo}</td>
                                <td className={styles.td}>{item?.totalPoints}</td>
                                <td className={`${styles.btn_container} ${styles.td}`}>
                                    <Link href={{ pathname: `${ROUTES.viewOrder}${item?._id}` }} className={styles.edit_btn}>View</Link>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            {total_records > 10 && <CustomPagination totalItems={total_records} itemsPerPage={args.limit} onchange={handlePageChange} currentPage={args.page} />}
        </>
    )
}

export default product