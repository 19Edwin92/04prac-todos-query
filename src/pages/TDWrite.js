import React from 'react'
import styled from 'styled-components'
import Footer from '../components/commen/Footer'
import Header from '../components/commen/Header'

function TDWrite() {
  return (
   <>
   <Header/>
   <WriteDiv>
    여기에 입력을 입력하자
   </WriteDiv>
   <Footer/>
   </>
  )
}

export default TDWrite

const WriteDiv = styled.div`
  width: 100%;
  padding: 10px;
`
