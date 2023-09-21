'use client'
import Link from 'next/link'
import React, { FC, ReactNode } from 'react'
import CustomImage from '../Image/image'
import styles from './header.module.css'
import { ROUTES } from '../../../constants/routes'
import { usePathname, useRouter } from 'next/navigation'
import { deleteCookie } from '@/utils/cookies'
import { LS_TOKEN } from '@/constants'

interface IProps {
    children?: ReactNode
}

const Header: FC<IProps> = ({ children }) => {

    const router = usePathname();
    const route = useRouter();
    const showHeader = (router).includes('/auth');

    const onClick = () => {
        deleteCookie(LS_TOKEN)
        route.push(ROUTES.login)
    }

    return (
        <div className={styles.admin_layout}>
            {!showHeader && <nav className={styles.admin_nav}>
                <div>
                    <Link href={ROUTES.default}>
                        <CustomImage src='/logo1.jpg' alt='Logo' height={100} width={100} type='external' ></CustomImage>
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link href={ROUTES.default}>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href={ROUTES.user}>
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link href={ROUTES.product}>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href={ROUTES.order}>
                            Orders
                        </Link>
                    </li>
                </ul>
            </nav>}
            <main className={styles.admin_content}>
                {!showHeader && <header className={styles.header}>
                    <h4 onClick={() => onClick()}>Logout</h4>
                </header>}
                <div className={styles.contain}>

                    {children}
                </div>
            </main>
        </div>
    )
}

export default Header