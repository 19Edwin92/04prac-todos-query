import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterDiv height="50px"> ⓒ copirigth</FooterDiv>
  )
}

export default Footer

const FooterDiv = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 1200px;
  min-width: 800px;
  height: ${props => props.height};
  line-height: ${props => props.height};
  border-top: 1px solid black;
  text-align: center;
  background: white;
`
