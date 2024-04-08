import React, { useState } from "react"
import "../styles/Pagination.css"

const PaginationComponent = ({
  items,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  // Calculate total pages
  const totalPages = Math.ceil(items / itemsPerPage)

  // Function to change page
  const setPage = (page) => {
    setCurrentPage(page)
  }

  // Generate page numbers
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div id="paginationControls">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => setPage(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </button>
      ))}
    </div>
  )
}

export default PaginationComponent
