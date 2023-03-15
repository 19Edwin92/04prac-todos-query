import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/commen/Footer'
import Header from '../components/commen/Header'

function TDDetail({data}) {
  const {id} = useParams()
  const todoDetail = data.find(el=> el.id === parseInt(id))
  return (
   <>
   <Header/>
   <DetailArtical>
    <p><Link to="/todolists">목차로 돌아가기</Link></p>
    <p>{todoDetail.id}</p>
    <p>{todoDetail.author}</p>
    <p>{todoDetail.title}</p>
    <p>{todoDetail.contents}</p>
   </DetailArtical>
   <Footer/>
   </>
  )
}

export default TDDetail

const DetailArtical = styled.article`
  width: 100%;
  padding: 20px;
` 