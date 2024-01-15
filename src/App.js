import React from 'react';
import './App.css';
import { ContextProvider } from './pages/assets/Context';
import { TodoSearch } from './pages/TodoSearch';

function App() {
  return (
    <div className="App">
      {/* Provee el contexto a la aplicación */}
      <ContextProvider>
        {/* Componente principal de búsqueda y visualización de tareas */}
        <TodoSearch />
      </ContextProvider>
    </div>
  );
}

export default App;