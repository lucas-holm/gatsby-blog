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
      props.isFirst ? props.theme.colors.test : props.theme.colors.light1};
    pointer-events: ${props.isFirst ? "none" : "auto"};
    cursor: ${props.isFirst ? "default" : "pointer"};
  }

  a:nth-child(2) {
    color: ${props =>
      props.isLast ? props.theme.colors.test : props.theme.colors.light1};
    pointer-events: ${props.isLast ? "none" : "auto"};
    cursor: ${props.isLast ? "default" : "pointer"};
  }
`
