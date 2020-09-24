import React from "react"
import { PaginationWrapper, PaginationElement } from "../elements"

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  //we pass down these arguments to be able to set specific styling
  //of the elements depending where we're currently at on the paginations
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement to={prevPage}>Previous Page</PaginationElement>
      <PaginationElement to={nextPage}>Next Page</PaginationElement>
    </PaginationWrapper>
  )
}
