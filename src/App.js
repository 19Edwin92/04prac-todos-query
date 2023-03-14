import React from 'react'
import Router from './shared/Router'
import { createGlobalStyle } from 'styled-components';


function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
  }
`

