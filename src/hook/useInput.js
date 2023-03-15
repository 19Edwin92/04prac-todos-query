import { useState } from "react"

export const useInput = (value) => {
  const [inputValue, setInputValue] = useState(value || "")
  const OnChangeHandler = (e) => {
    setInputValue(e.target.value)
  }
  return [inputValue, OnChangeHandler, setInputValue,]
}