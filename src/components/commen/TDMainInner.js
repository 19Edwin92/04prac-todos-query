import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';


function TDMainInner({type,author,key, text, navigates, icon, deleteHandler}) {
  const navigate = useNavigate();
  
  switch (type) {
    case "TDMain":
      return (
        <DivStyled
            onClick={()=> navigate(`/${navigates}`)}>
            <p>{text}</p>
            <p className='icon' onClick={deleteHandler}>{icon}</p>
          </DivStyled>
      )
    case "TDLists":
      return (
        <DivStyled>
          <div onClick={() => navigate(`/todolists/${navigates}`)}>
            <p>
              {text} <br />
              {author}
            </p>
          </div>
          <p className="icon" onClick={deleteHandler}>
            {icon}
          </p>
        </DivStyled>
      ); 

    case "TDDetail":
      return (
        <DivStyled>
        <div key={key}>
          <p>
            {text}
          </p>
        </div>
        <p className="icon">
          {icon}
        </p>
      </DivStyled>
      )
    default:
      return;  
  }
}

// function TDMainInner({author, text, navigates, icon, deleteHandler}) {
//   const navigate = useNavigate();
//   return (
//    <>
//    {!deleteHandler ? (
//     <DivStyled
//     onClick={()=> navigate(`/${navigates}`)}>
//     <p>{text}</p>
//     <p className='icon' onClick={deleteHandler}>{icon}</p>
//   </DivStyled>
//    ) : (
//     <DivStyled>
//     <div onClick={()=>navigate(`/todolists/${navigates}`)}>
//     <p>{text} <br/>{author}</p>
//     </div>
//     <p className='icon' onClick={deleteHandler}>{icon}</p>
//   </DivStyled>)}
//    </>
//   )
// }

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
  .icon {
    font-size: 1.5rem;
    color: orange;
  }
`