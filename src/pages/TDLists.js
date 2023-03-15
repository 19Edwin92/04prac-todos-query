import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/commen/Footer'
import Header from '../components/commen/Header'
import TDMainInner from '../components/commen/TDMainInner'
import { Article } from './TDMain'

function TDLists({data}) {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <div>
        <h3>TODOS-list</h3>
        <Article>
          {data.map((el) => (
            <div key={el.id} onClick={()=>navigate(`/todolists/${el.id}`)}>
            <TDMainInner text={el.title} author={el.author} />
            </div>
          ))}
        </Article>
      </div>

      <Footer />
    </>
  );
}

export default TDLists