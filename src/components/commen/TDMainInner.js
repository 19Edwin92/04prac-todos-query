import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function TDMainInner({author, text, navigates}) {
  const navigate = useNavigate();
  return (
    <DivStyled 
      onClick={()=> navigate(`/${navigates}`)}>
      {!author && <p>{text}</p>}
      {author && (<p>{text} <br/>{author}</p>)}
      <p>아이콘</p>
    </DivStyled>
  )
}

export default TDMainInner;

const DivStyled = styled.div`
  display: grid;
  height: 70px;
  grid-template-columns: 1fr 80px;
  border: 1px solid black;
  border-radius: 10px;
  align-items: center;
  cursor: pointer;
  p {
    padding: 0 10px;
  }
`