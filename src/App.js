import React from 'react'
import Router from './shared/Router'
import { createGlobalStyle } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()
function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
      </QueryClientProvider>
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

