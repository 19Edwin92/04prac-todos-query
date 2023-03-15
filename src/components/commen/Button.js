import React from 'react'
import styled from 'styled-components'

function Button({innerText, onClick}) {
  return (
    <ButtonStyled onClick={onClick}>
      {innerText}
    </ButtonStyled>
  )
}

export default Button

const ButtonStyled = styled.button`
  width: 98%;
  height: 50px;
  display: block;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 10px;
  background: transparent;
  margin-top: 30px;
  font-size: 1.3rem;
  &:hover {
    background: #BCC5D1;
    font-weight: 800;
  }
`