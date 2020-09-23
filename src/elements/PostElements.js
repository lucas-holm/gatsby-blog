import styled from "styled-components"

export const PostWrapper = styled.main`
  grid-column: 2 / 6;
  background-color: ${props => props.theme.colors.content};
  box-shadow: ${props => props.theme.shadows.elevation};
  padding: 2rem;
  max-width: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1rem;
  }

  p {
    line-height: 1.7rem;
    margin: 1rem 0;
  }

  code {
    line-height: 1.5rem;
  }

  table {
    margin: 1rem 0;
  }

  th {
    font-weight: 700;
  }
  table,
  th,
  td {
    border: 1px solid black;
  }

  th,
  td {
    padding: 0.5rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 6;
  }
`
