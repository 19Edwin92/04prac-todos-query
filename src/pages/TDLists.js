import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/commen/Footer'
import Header from '../components/commen/Header'
import TDMainInner from '../components/commen/TDMainInner'
import { Article } from './TDMain'
import {RiDeleteBin2Line} from 'react-icons/ri'
import { useMutation, useQueryClient } from 'react-query'
import { deleteTodos } from '../api/Api'

function TDLists({data}) {
  const qureyClient = useQueryClient();
  const mutaiondelete = useMutation(deleteTodos, {
    onSuccess: () => {
      qureyClient.invalidateQueries("todos");
    },
    onError: (err) => {
      console.log("글을 저장하지 못했습니다.");
    },
  });
  const deleteHandler = (id) => {
    // console.log(id)
    mutaiondelete.mutate({ id });
  };
  return (
    <>
      <Header />
      <div>
        <h3>TODOS-list</h3>
        <Article>
          {data.map((el) => (
            // <div key={el.id} onClick={() => navigate(`/todolists/${el.id}`)}>
            <div key={el.id}>
            <TDMainInner
              type="TDLists"
              text={el.title}
              author={el.author}
              icon={<RiDeleteBin2Line />}
              deleteHandler={()=>deleteHandler(el.id)}
              navigates={el.id}
            />
          </div>
          ))}
        </Article>
      </div>
    </>
  );
}

export default TDLists