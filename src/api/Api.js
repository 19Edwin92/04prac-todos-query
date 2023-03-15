import axios from "axios";

export const getTodos = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_KEY}/todos`)
  // const response = await axios.get(`http://localhost:4002/todos`)
  return response.data
}