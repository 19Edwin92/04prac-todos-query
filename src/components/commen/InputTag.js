import React from 'react'
import styled from 'styled-components'

function InputTag({title, ref,inputValue, inputOnChnage, placeholder, maxLength}) {
  return (
    <>
      <h2>{title}</h2>
      <InputStyled
        required
        ref={ref}
        type="text"
        value={inputValue}
        onChange={inputOnChnage}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </>
  );
}

export default InputTag
const InputStyled = styled.input`
  width: 95%;
  height: 50px;
  padding: 10px;
  display: block;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 10px;
`