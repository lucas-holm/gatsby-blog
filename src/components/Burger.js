import React from "react"
import { MenuIcon } from "../elements"
import { useState } from "react"
import { BurgerLinks } from "../components"

export const Burger = () => {
  const [nav, showNav] = useState(false)
  return (
    <>
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <BurgerLinks nav={nav} />
    </>
  )
}
