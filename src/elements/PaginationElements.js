import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const PaginationWrapper = styled.div`
  grid-column: 2 / 6;
  padding: 2rem;
  display: flex;
  justify-content: center;

  a:nth-child(1) {
    color: ${props =>
      props.isFirst
        ? props.theme.colors.lightGray
        : props.theme.colors.darkGray};
    pointer-events: ${props => (props.isFirst ? "none" : "auto")};
    cursor: ${props => (props.isFirst ? "default" : "pointer")};
  }

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

export const PaginationElement = styled(props => <Link {...props} />)`
  font-size: 1.5rem;
  text-decoration: none;
  margin: 0 2rem;
`
