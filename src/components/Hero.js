import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { HeroImageWrapper } from "../elements"

export const Hero = ({ fluid }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fluid: { originalName: { eq: "heroo.jpg" } }) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)

  return (
    <HeroImageWrapper>
      <Img
        fluid={fluid ? fluid : data.imageSharp.fluid}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </HeroImageWrapper>
  )
}
