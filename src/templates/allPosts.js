import React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Content,
  ContentCard,
  Hero,
  Pagination,
  Nav,
  Seo,
  Burger,
} from "../components"

const AllPosts = ({ pageContext, data }) => {
  //Pagination variables to see if we're currently on the first page or last page
  //and variables to change pages
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  //saves the edges from the graphql into a variable
  const posts = data.allMdx.edges

  return (
    <Container>
      <Seo />
      <Hero />
      <Burger />
      <Nav />
      <Content>
        {posts.map(post => (
          //Render the data we get from the graphql query to the contentcard component.
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          ></ContentCard>
        ))}
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Container>
  )
}

export default AllPosts

//Graphql query to get all posts
export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
        }
      }
    }
  }
`
