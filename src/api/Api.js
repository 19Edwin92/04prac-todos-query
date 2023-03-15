import axios from "axios";
import api from './BaseApi'

export const getTodos = async () => {
  // const response = await api.get(`/todos`)
  const response = await axios.get(`${process.env.REACT_APP_SERVER_KEY}/todos`)
  return response.data
}

export const addTodos = async (newTodo) => {
  const response = await axios.post(`${process.env.REACT_APP_SERVER_KEY}/todos`, newTodo)
}

export const deleteTodos = async ({id}) => {
  const response = await axios.delete(`${process.env.REACT_APP_SERVER_KEY}/todos/${id}`)
}

export const updateTodo = async ([id, updateTodo]) => {
  const response = await axios.patch(`${process.env.REACT_APP_SERVER_KEY}/todos/${id}`, updateTodo)
}