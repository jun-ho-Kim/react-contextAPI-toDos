import React from 'react';
import {createGlobalStyle} from "styled-components";
import ToDoTemplate from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToDoTemplate>안녕하세요</ToDoTemplate>
    </div>
  );
}

export default App;
