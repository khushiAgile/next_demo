import React from 'react'
import styles from '../dashbord/page.module.css'
import { getDashboardCountAction } from '@/service/product'
import { ROUTES } from '@/constants/routes'
import Link from 'next/link'

const Dashbord = async () => {

    const { data } = await getDashboardCountAction()
    console.log('data: ', data);

    return (
        <section className={styles.dashbordMain}>
            <div className={styles.heading}>
                <h1>Welcome to the Admin Dashboard</h1>
            </div>
            <div className={styles.cards}>
                <div className={styles.card} >
                    <h3>Totle Customer</h3>
                    <Link href={ROUTES.user}>{data?.userCount || 0}</Link>
                </div>
                <div className={styles.card}>
                    <h3>Totle Product</h3>
                    <Link href={ROUTES.product}>{data?.productCount || 0}</Link>
                </div>
                <div className={styles.card} >
                    <h3>Totle Order</h3>
                    <Link href={ROUTES.order}>{data?.orderCount || 0}</Link>
                </div>
            </div>
        </section>
    )
}

export default Dashbord