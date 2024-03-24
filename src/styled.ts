import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eee',
  fundo: '#dfe6e9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    background-color: #dfe6e9;
  }

  body {
    overflow-x: hidden; 
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
