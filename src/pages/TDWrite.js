import React from 'react'
import { QueryClient, useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { addTodos } from '../api/Api'
import Button from '../components/commen/Button'
import Header from '../components/commen/Header'
import InputTag from '../components/commen/InputTag'
import TextareaTag from '../components/commen/TextareaTag'
import { useInput } from '../hook/useInput'

function TDWrite() {
  const [title, titleChangeHandler, setTitle] = useInput();
  const [author, authorChangeHandler, setAuthor] = useInput();
  const [contents, contentsChangeHandler, setContents] = useInput();
  const navigate = useNavigate();
  
  const qureyClient = useQueryClient();
  const mutaionadd = useMutation(addTodos, {
    onSuccess: ()=> {
      qureyClient.invalidateQueries('todos');
    },
    onError: err => {
      console.log("글을 저장하지 못했습니다.");
    }
  });

  const onWriteHandler = (e) => {
    e.preventDefault();
    mutaionadd.mutate({title, author, contents});
    setTitle("");
    setAuthor("");
    setContents("");
    navigate("/todolists")
  };

  return (
    <>
      <Header />
      <WriteDiv>
        <form onSubmit={onWriteHandler}>
          <InputTag
            title="제목"
            inputValue={title}
            inputOnChnage={titleChangeHandler}
            placeholder="제목을 입력해주세요(50자 이내)"
            maxLength="50"
          />
          <InputTag
            title="작성자"
            inputValue={author}
            inputOnChnage={authorChangeHandler}
            placeholder="작성자를 입력해주세요(5자 이내)"
            maxLength="5"
          />
          <TextareaTag
            title="작성자"
            inputValue={contents}
            inputOnChnage={contentsChangeHandler}
            placeholder="내용을 입력해주세요(200자 이내)"
            maxLength="200"
          />
          <Button innerText="추가하기"/>
        </form>
      </WriteDiv>
    </>
  );
}

export default TDWrite;

const WriteDiv = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 50px;
`
