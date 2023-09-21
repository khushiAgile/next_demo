// components/Pagination.js

import Link from 'next/link';
import React, { FC } from 'react';
import styles from './pagination.module.css'

interface IProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage?: number;
    linkHref: string;
}

const Pagination: FC<IProps> = ({ totalItems, linkHref, itemsPerPage, currentPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <div className={styles.pagination}>
            {/* {currentPage > 1 && (
                <button className={styles.paginationBtn} onClick={() => handlePageChange(currentPage - 1)}>&lt;</button>
            )} */}

            {Array.from({ length: totalPages }).map((_, index) => (
                <Link
                    href={{ pathname: linkHref, query: { page: index + 1 } }}
                    key={index}
                    className={styles.paginationBtn}
                >
                    {index + 1}
                </Link>
            ))}

            {/* {currentPage < totalPages && (
                <button className={styles.paginationBtn} onClick={() => handlePageChange(currentPage + 1)}>&gt;</button>
            )} */}
        </div>
    );
};

export default Pagination;
