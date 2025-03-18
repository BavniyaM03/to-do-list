import React, { createContext, useState } from 'react'
import './App.css'
import AddToDo from './Component/AddToDo'

export const ManageVisibilityContext = createContext();

function App() {
  const [todoDisplay, setTodoDisplay] = useState(true);
  const [searchResult, setSearchResult] = useState({ title: '', description: '' });
  const [displaySearchTodo, setDisplaySearchTodo] = useState(false)
  return (
    <>
      <ManageVisibilityContext.Provider
        value={{ todoDisplay, setTodoDisplay, searchResult, setSearchResult, displaySearchTodo, setDisplaySearchTodo }} >
        <AddToDo />
      </ManageVisibilityContext.Provider>
    </>
  )
}

export default App
