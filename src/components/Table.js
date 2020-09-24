import React from "react"
import { TableWrapper } from "../elements"

//custom table-compoent for table-elements in our blog-posts
export const Table = ({ children }) => {
  return (
    <TableWrapper>
      <table>{children}</table>
    </TableWrapper>
  )
}
