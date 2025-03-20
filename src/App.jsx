import React, { createContext, useState } from 'react'
import './App.css'
import AddToDo from './Component/AddToDo'
// import DropDown from './Component/DropDownStatus';
// import Checkboxes from './Component/BulkDelete';

export const ManageVisibilityContext = createContext();
export const AllTodoContext = createContext();

function App() {
  const [todo, setTodo] = useState([
    {
      title1: "Complete project documentation",
      description1: "Write and review all necessary documentation for the project.",
      status1: "In Progress",
      priority1: "High"
    },
    {
      title1: "Team meeting",
      description1: "Discuss project updates and next steps.",
      status1: "Pending",
      priority1: "Medium"
    },
    {
      title1: "Code review",
      description1: "Review the latest code changes before merging.",
      status1: "Completed",
      priority1: "High"
    },
    {
      title1: "Update dependencies",
      description1: "Ensure all project dependencies are up to date.",
      status1: "Pending",
      priority1: "Low"
    },
    {
      title1: "Fix UI bugs",
      description1: "Resolve reported UI/UX issues in the app.",
      status1: "In Progress",
      priority1: "High"
    }
  ]
  )
  const [todoDisplay, setTodoDisplay] = useState(true);
  const [searchResult, setSearchResult] = useState({ title: '', description: '' });
  const [displaySearchTodo, setDisplaySearchTodo] = useState(false)
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('')


  return (
    <>
      <AllTodoContext.Provider value={{todo, setTodo}} >
        <ManageVisibilityContext.Provider
          value={{ todoDisplay, setTodoDisplay, searchResult, setSearchResult, displaySearchTodo, setDisplaySearchTodo, status, setStatus, priority, setPriority }} >
          <AddToDo />
        </ManageVisibilityContext.Provider>
      </AllTodoContext.Provider>
    </>
  )
}

export default App
