import React from "react"
import { Container, Hero, Nav, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <Hero />
      <Nav />
      <Content>
        <ContentCard
          date="2020-09-13"
          title="TESTING"
          excerpt="TESTAR ÄNNU MER"
          slug="/"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
