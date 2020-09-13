import React from "react"
import { PaginationWrapper } from "../elements"

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <a href={prevPage}>Previous Page</a>
      <a href={nextPage}>Next Page</a>
    </PaginationWrapper>
  )
}
