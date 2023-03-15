import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

function Header() {
  const navigate = useNavigate()
  return (
    <HeaderStyled height="50px">
      <div
        onClick={()=> navigate("/")}>
        TODOS-Lists
      </div>
    </HeaderStyled>
  );
}

export default Header

const HeaderStyled = styled.header`
  width: 100%;
  text-align: center;
  height: ${(props) =>props.height};
  line-height: ${(props) =>props.height};
  font-size: 1.5rem;
  background: white;
  position: sticky;
  top: 0;
  left: 0;
  border-bottom: 1px solid black;

  div {
    cursor: pointer;
  }
`