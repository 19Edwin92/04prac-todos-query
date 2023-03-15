import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/commen/Button'
import Header from '../components/commen/Header'
import InputTag from '../components/commen/InputTag'
import TextareaTag from '../components/commen/TextareaTag'
import { useInput } from '../hook/useInput'
import { getComment, updateTodo } from '../api/Api'
import TDMainInner from '../components/commen/TDMainInner'
import {AiOutlineComment} from 'react-icons/ai'


function TDDetail({item}) {
  const {id} = useParams()
  const todoDetail = item.find(el=> el.id === parseInt(id))
  const [edite, setEdit] = useState(false)
  const [title,titleChangeHandler] = useInput(todoDetail.title);
  const [author, authorChangeHandler] = useInput(todoDetail.author);
  const [contents, contentsChangeHandler] = useInput(todoDetail.contents);
  const qureyClient = useQueryClient();
  const mutationupdate = useMutation(updateTodo, {
    onSuccess: ()=> {
      qureyClient.invalidateQueries('todos') // 
    },
    onError: err => {
      console.log("글을 저장하지 못했습니다.")
    }
  })

  const onEditHandler = (e) => {
    e.preventDefault();
    mutationupdate.mutate([todoDetail.id, {title, author, contents}])
    setEdit((pre)=> !pre)
  }

  // comments 부분
  const{isLoading, isError, data} = useQuery("comments", getComment)
  const [comment, commentChangeHandler, setComment] = useInput();
  const findtodosComments = data?.filter(el=> el.todosid === Number(id))
  console.log(findtodosComments)

  if(isLoading) {
    return <div>로딩 중...</div>
  }
  
  if(isError) {
    return <div> 오류가 발생했습니다.</div>
  }

  return (
    <>
      <Header />
      <DetailArtical>
        <p>
          <Link to="/todolists">목차로 돌아가기</Link>
        </p>

        {!edite && (
          <>
            <ArticleDiv>
              <h1>{todoDetail.title}</h1>
              <hr />
              <p>글번호 : {todoDetail.id}</p>
              <p>작성자 : {todoDetail.author}</p>
              <p className="constents">{todoDetail.contents}</p>
            </ArticleDiv>
            <Button
              onClick={(e) => setEdit((pre) => !pre)}
              innerText="수정하기"
            />
            <form>
              <InputTag
                title="댓글입력"
                inputValue={comment}
                inputOnChnage={commentChangeHandler}
                placeholder="댓글을 입력해주세요(100자 이내)"
                maxLength="100"
              />
            </form>
            {findtodosComments.map((el) => (
                <div style={{margin:"10px auto", width:"98%"}}>
                  <TDMainInner
                  type="TDDetail"
                  key={el.id}
                  text={el.comment}
                  icon={<AiOutlineComment/>}
                />
                </div>
            ))}
          </>
        )}
        {edite && (
          <ArticleDiv>
            <form onSubmit={onEditHandler}>
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
              <Button innerText="수정완료" />
            </form>
          </ArticleDiv>
        )}
      </DetailArtical>
    </>
  );
}

export default TDDetail

const DetailArtical = styled.article`
  width: 95%;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 50px;
` 
const ArticleDiv = styled.div`
  width: 95%;
  min-height: 450px;
  margin: 0 auto;
  padding: 1rem;
  border: 3px solid gray;
  border-radius: 10px;

  h1 {
    text-align: center; 
  }

  .constents {
    word-wrap: break-word;
    text-align: justify;
  }
`