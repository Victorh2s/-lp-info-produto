import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus {
      outline:0;
      box-shadow: 10px 10px 29px -20px rgba(0,0,0,0.75);
    }

    body{
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    body, input, textarea, button, a, select, option {
      font:400 1rem 'Montserrat', sans-serif;

    }

    ::-webkit-scrollbar {
      width: 8px;
      background-color: ${(props) => props.theme.Light['background-page']};;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }
  }

`;