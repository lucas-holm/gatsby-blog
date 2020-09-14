import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const NavWrapper = styled.nav`
  grid-column: 2 / 6;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 5vh;
  background-color: #b7b7a4;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`

export const NavLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  font-size: 1.5rem;
  color: #fff;

  &:hover {
    color: black;
  }
`
