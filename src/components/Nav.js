import React from "react"
import { NavWrapper } from "../elements"
import { Link } from "gatsby"

export const Nav = () => {
  return (
    <NavWrapper>
      <Link to="/">Home</Link>
      <Link to="/">About</Link>
      <Link to="/">Contact</Link>
    </NavWrapper>
  )
}
