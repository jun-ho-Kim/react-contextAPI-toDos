import React from 'react';
import {createGlobalStyle} from "styled-components";
import ToDoTemplate from './components/TodoTemplate';
import TodoHead from './components/ToDoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;


function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <ToDoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </ToDoTemplate>
    </TodoProvider>
  );
}

export default App;
