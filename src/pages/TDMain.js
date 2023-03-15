import React from 'react'
import styled from 'styled-components';
import TDMainInner from '../components/commen/TDMainInner';
import Header from '../components/commen/Header';
import Footer from '../components/commen/Footer'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'


function TDMain() {

  return (
    <>
      <Header />
      <Article>
        <TDMainInner
          text="할일 목록"
          navigates="todowrite"
          icon={<BsFillArrowRightCircleFill />}
        />
        <TDMainInner
          text="TODO LIST"
          navigates="todolists"
          icon={<BsFillArrowRightCircleFill />}
        />
      </Article>
    </>
  );
}

export default TDMain;

export const Article = styled.article`
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`


