import { useState } from "react"

export const useInput = (value) => {
  const [inputValue, setInputValue] = useState(value || "")
  const OnChangeHandler = (e) => {
    setInputValue(e.target.value)
  }
  return [inputValue, OnChangeHandler, setInputValue,]
}
// 렌더링 측면에서 불필요함이 있기 때문에, useRef = reactHookForm