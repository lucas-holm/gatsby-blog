import React from "react"
import { CardWrapper } from "../elements"
import { Button } from "../components"

export const ContentCard = ({ date, title, excerpt, slug }) => {
  return (
    <CardWrapper>
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <Button href={slug}>Read More</Button>
    </CardWrapper>
  )
}
