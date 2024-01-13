// App.js
import React from 'react';
import './App.css';
import TodoButton from './pages/TodoButton';
import { TodoSearch } from './pages/TodoSearch';

function App() {
  return (
    <div className="App">
      <TodoSearch>
        <TodoButton />
      </TodoSearch>
    </div>
  );
}

export default App;
