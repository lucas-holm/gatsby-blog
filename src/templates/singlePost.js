import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container, Post, Hero, Nav, Seo, Burger } from "../components"

const singlePost = ({ data }) => {
  return (
    <Container>
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.excerpt}
      />
      <Hero />
      <Burger />
      <Nav />
      <Post>
        {/* Render the data from graphql query to the single post */}
        <h1>{data.mdx.frontmatter.title}</h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Post>
    </Container>
  )
}

export default singlePost

//Graphql query to get the data from the current post we're visiting
export const pageQuery = graphql`
  query singlePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        excerpt
        slug
        title
      }
    }
  }
`
