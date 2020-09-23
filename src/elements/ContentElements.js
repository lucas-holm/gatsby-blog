import styled from "styled-components"

export const ContentWrapper = styled.main`
  grid-column: 2 / 6;
  background-color: ${props => props.theme.colors.content};
  box-shadow: ${props => props.theme.shadows.elevation};

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 6;
  }
`
