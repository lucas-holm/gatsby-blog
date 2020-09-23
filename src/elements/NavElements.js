import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const NavWrapper = styled.nav`
  grid-column: 2 / 6;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 5vh;
  background-color: ${props => props.theme.colors.nav};
  box-shadow: ${props => props.theme.shadows.elevation};
  border-bottom: solid 1px black;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 6;
  }
`

export const NavLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  font-size: 1.5rem;
  color: #fff;

  &:hover {
    color: black;
  }
`
