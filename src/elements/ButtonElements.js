import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//styling for the button element
export const ButtonWrapper = styled(props => <Link {...props} />)`
  background-color: ${props => props.theme.colors.button};
  border-radius: 20px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 16px 20px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
  margin-top: 1rem;

  &:hover {
    background-color: #6c757d;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`
