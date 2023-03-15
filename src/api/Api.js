import axios from "axios";
import api from './BaseApi'

export const getTodos = async () => {
  const response = await api.get(`/todos`)
  // const response = await axios.get(`${process.env.REACT_APP_SERVER_KEY}/todos`)
  return response.data
}

export const addTodos = async (newTodo) => {
  const response = await api.post(`/todos`, newTodo)
}

export const deleteTodos = async ({id}) => {
  const response = await api.delete(`/todos/${id}`)
}

export const updateTodo = async ([id, updateTodo]) => {
  const response = await api.patch(`/todos/${id}`, updateTodo)
}