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
    display: none;
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

//Burger-menu

export const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: black;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
  }

  @media ${props => props.theme.breakpoints.desktop} {
    display: none;
  }
`

export const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  background: #d7d7d7;
  position: absolute;
  top: 0;
  right: 0;
  transform: ${props => (props.nav ? "translateX(0)" : "translateX(100%)")};

  ul {
    list-style-type: none;
  }
  li {
    margin-top: 1rem;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;

    :hover {
      color: #b8f2e6;
    }
  }
`
