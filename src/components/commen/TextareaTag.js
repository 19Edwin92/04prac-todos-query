import React from 'react'
import styled from 'styled-components';

function TextareaTag({title, inputValue, inputOnChnage, placeholder, maxLength}) {
  return (
    <>
      <h2>{title}</h2>
      <TextareaStyled
        required
        type="text"
        value={inputValue}
        onChange={inputOnChnage}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </>
  );
}

export default TextareaTag;

const TextareaStyled = styled.textarea`
  width: 95%;
  height: 200px;
  padding: 10px;
  display: block;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 10px;
`