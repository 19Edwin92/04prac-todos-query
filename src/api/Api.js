// import axios from "axios";
import api from './BaseApi'

export const getTodos = async () => {
  const response = await api.get(`/todos`)
  // const response = await axios.get(`${process.env.REACT_APP_SERVER_KEY}/todos`)
  return response.data
}

export const addTodos = async (newTodo) => {
  await api.post(`/todos`, newTodo)
}

export const deleteTodos = async ({id}) => {
  await api.delete(`/todos/${id}`)
}

export const updateTodo = async ([id, updateTodo]) => {
  await api.patch(`/todos/${id}`, updateTodo)
}

export const getComment = async () => {
  const response = await api.get(`/comment`)
  return response.data
}

export const addComment = async (newComment) => {
  // console.log(newComment)
  await api.post(`/comment`, newComment)
}