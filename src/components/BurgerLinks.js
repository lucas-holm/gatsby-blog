import React from "react"
import { MenuLinks } from "../elements"

//Nav-links for mobile
export const BurgerLinks = ({ nav }) => {
  return (
    <MenuLinks nav={nav}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </MenuLinks>
  )
}
