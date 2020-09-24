import React from "react"
import { MenuIcon } from "../elements"
import { useState } from "react"
import { BurgerLinks } from "../components"

//Burger-component for mobile
export const Burger = () => {
  const [nav, showNav] = useState(false)
  return (
    <>
      {/* click event to toggle the nav */}
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <BurgerLinks nav={nav} />
    </>
  )
}
