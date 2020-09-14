import React from "react"
import { NavWrapper, NavLink } from "../elements"

export const Nav = () => {
  return (
    <NavWrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">About</NavLink>
      <NavLink to="/">Contact</NavLink>
    </NavWrapper>
  )
}
