import { createContext, useState } from 'react'
import './App.css'
import AddToDo from './Component/AddToDo'
createContext


function App() {
  const [visibilityTodo, setVisibilityTodo] = useState(true);
  const ManageVisibilityContext = createContext();
  return (
    <>
      <ManageVisibilityContext.Provider value={visibilityTodo}>
        <AddToDo />
      </ManageVisibilityContext.Provider>
    </>
  )
}

export default App
