import React from "react"
import styled from "styled-components"

const ButtonStyled = styled.button`
  width: 160px;
  height: 30px;
  background-color: #000;
  border: none;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
`

const Button = ({ children }) => <ButtonStyled>{children}</ButtonStyled>

export default Button
