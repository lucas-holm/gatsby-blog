import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//custom styling for the wrapper of the pagination element
export const PaginationWrapper = styled.div`
  grid-column: 2 / 6;
  padding: 2rem;
  display: flex;
  justify-content: center;

  /* styling for the first child of the wrapper (previous page) */
  /* if isFirst variable is true, it means we're currently on the first page, 
  therefore we dont want any pointer events or pointer-cursor */
  a:nth-child(1) {
    color: ${props =>
      props.isFirst
        ? props.theme.colors.lightGray
        : props.theme.colors.darkGray};
    pointer-events: ${props => (props.isFirst ? "none" : "auto")};
    cursor: ${props => (props.isFirst ? "default" : "pointer")};
  }

  /* styling for the second child of the wrapper (next page)
  same here, if we're on the last page we dont want any pointer-events
  or cursor-pointer */
  a:nth-child(2) {
    color: ${props =>
      props.isLast
        ? props.theme.colors.lightGray
        : props.theme.colors.darkGray};
    pointer-events: ${props => (props.isLast ? "none" : "auto")};
    cursor: ${props => (props.isLast ? "default" : "pointer")};
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 6;
  }
`

//custom styling for the Link-element which we use instead of the <a> tags.
export const PaginationElement = styled(props => <Link {...props} />)`
  font-size: 1.5rem;
  text-decoration: none;
  margin: 0 2rem;
`
