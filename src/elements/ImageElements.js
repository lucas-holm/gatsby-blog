import styled from "styled-components"

//styling for the hero-wrapper
export const HeroImageWrapper = styled.div`
  grid-column: 2 / 6;
  height: 30vh;
  box-shadow: ${props => props.theme.shadows.elevation};

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 6;
  }
`
