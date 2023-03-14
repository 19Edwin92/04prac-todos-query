import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
   <HeaderStyled height="50px">
    TODOS-Lists
   </HeaderStyled>
  )
}

export default Header

const HeaderStyled = styled.header`
  width: 100%;
  text-align: center;
  height: ${(props) =>props.height};
  line-height: ${(props) =>props.height};
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  left: 0;
  border-bottom: 1px solid black;
`