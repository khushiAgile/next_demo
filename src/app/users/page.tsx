'use client'

import CustomPagination from '@/component/common/CustomPagination/pagination'
import { ROUTES } from '@/constants/routes'
import { useAppSelector } from '@/service/redux/store'
import { getUserListAction } from '@/service/user'
import { IArgsAPiReq } from '@/types/auth'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'

const product = () => {

    const { adminUserList, total_records } = useAppSelector(state => state?.user?.userList)

    const [args, setArgs] = useState<IArgsAPiReq>({
        limit: 100,
        page: 1,
    });

    useEffect(() => {
        getUserListAction(args)
    }, [args])

    const handlePageChange = (newPage: number) => {
        setArgs({ ...args, page: newPage });
    };

    return (
        <>
            <div className={styles.productMain}>
                <div className={styles.heading}>
                    <h1>Users</h1>
                    <Link href={ROUTES.addUser} className={styles.addBtn}> Add New User</Link>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.tableHeader}>
                            <th className={styles.th}>User Name</th>
                            <th className={styles.th}>Mobile Number</th>
                            <th className={styles.th}>Points</th>
                            <th className={styles.th}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adminUserList && adminUserList.map((item) => (
                            <tr key={item?._id}>
                                <td className={styles.td}>{item?.userName}</td>
                                <td className={styles.td}>{item?.mobileNo}</td>
                                <td className={styles.td}>{item?.point}</td>
                                <td className={`${styles.btn_container} ${styles.td}`}>
                                    <Link href={{ pathname: `${ROUTES.editUser}${item?._id}`, query: { UserName: item?.userName, phoneNo: item?.mobileNo, point: item?.point } }} className={styles.edit_btn}>Edit</Link>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <CustomPagination totalItems={total_records} itemsPerPage={args.limit} onchange={handlePageChange} currentPage={args.page} />
        </>
    )
}

export default product