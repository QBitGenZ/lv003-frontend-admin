import React from "react";
import "./Pagination.css";

const Pagination = ({ totalPage, currentPage, setCurrentPage }) => {
    const nextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPage; i++) {
            pageNumbers.push(
                <span
                    key={i}
                    className={
                        "current-page " + (i === currentPage ? "active" : "")
                    }
                    onClick={() => setCurrentPage(i)}>
                    {i}
                </span>
            );
        }
        return pageNumbers;
    };

    return (
        <div id='Pagination'>
            <i
                className='fa-solid fa-arrow-left prev-page'
                onClick={prevPage}></i>
            {renderPageNumbers()}
            <i
                className='fa-solid fa-arrow-right next-page'
                onClick={nextPage}></i>
        </div>
    );
};

export default Pagination;
