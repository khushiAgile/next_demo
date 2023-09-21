import React, { FC } from 'react';
import styles from './pagination.module.css'

interface IProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage?: number;
    onchange: (value: number) => void;
}

const CustomPagination: FC<IProps> = ({ totalItems, itemsPerPage, currentPage, onchange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <div className={styles.pagination}>
            {/* {currentPage > 1 && (
                <button className={styles.paginationBtn} onClick={() => handlePageChange(currentPage - 1)}>&lt;</button>
            )} */}

            {Array.from({ length: totalPages }).map((_, index) => (
                <button
                    key={index}
                    className={styles.paginationBtn}
                    onClick={() => onchange(index + 1)}
                    disabled={currentPage === index + 1}
                >
                    {index + 1}
                </button>
            ))}

            {/* {currentPage < totalPages && (
                <button className={styles.paginationBtn} onClick={() => handlePageChange(currentPage + 1)}>&gt;</button>
            )} */}
        </div>
    );
};

export default CustomPagination;
