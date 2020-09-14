import React from 'react';
import {createGlobalStyle} from "styled-components";
import ToDoTemplate from './components/TodoTemplate';
import TodoHead from './components/ToDoHead';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToDoTemplate>
        <TodoHead />
      </ToDoTemplate>

    </div>
  );
}

export default App;
