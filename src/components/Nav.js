import React from "react"
import { NavWrapper, NavLink } from "../elements"

//Nav-component for desktop
export const Nav = () => {
  return (
    <NavWrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">About</NavLink>
      <NavLink to="/">Contact</NavLink>
    </NavWrapper>
  )
}
