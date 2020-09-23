import React from "react"
import { graphql } from "gatsby"
import { Container, Content, Hero } from "../components"

const notFound = ({ data }) => {
  const hero = data.imageSharp.fluid

  return (
    <Container>
      <Hero fluid={hero} />
      <Content>
        <h1>Page not found</h1>
      </Content>
    </Container>
  )
}

export default notFound

export const notFoundQuery = graphql`
  query NotFoundQuery {
    imageSharp(fluid: { originalName: { eq: "404.jpg" } }) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
