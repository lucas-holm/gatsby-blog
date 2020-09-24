import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { HeroImageWrapper } from "../elements"

export const Hero = ({ fluid }) => {
  //graphql query to get the image
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
        //if fluid-argument is true (if we pass in another image)
        //we want to use that image, else use the image from the graphql query
        //I used fluid instead of fixed to make it stretch across the container
        fluid={fluid ? fluid : data.imageSharp.fluid}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </HeroImageWrapper>
  )
}
