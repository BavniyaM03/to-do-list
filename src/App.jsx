import React, { createContext, useState } from 'react'
import './App.css'
import AddToDo from './Component/AddToDo'
export const ManageVisibilityContext = createContext();
export const AllTodoContext = createContext();
export const CheckedTodoContext = createContext();
export const displayTodoAfterDeletionContext = createContext();
export const finalTodoAfterDeletionContext = createContext();
export const InputContext = createContext();

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title1: "Complete project documentation",
      description1: "Write and review all necessary documentation for the project.",
      status1: "In Progress",
      priority1: "High"
    },
    {
      id: 2,
      title1: "Team meeting",
      description1: "Discuss project updates and next steps.",
      status1: "Pending",
      priority1: "Medium"
    },
    {
      id: 3,
      title1: "Code review",
      description1: "Review the latest code changes before merging.",
      status1: "Completed",
      priority1: "High"
    },
    // {
    //   id: 4,
    //   title1: "Update dependencies",
    //   description1: "Ensure all project dependencies are up to date.",
    //   status1: "Pending",
    //   priority1: "Low"
    // },
    // {
    //   id: 5,
    //   title1: "Fix UI bugs",
    //   description1: "Resolve reported UI/UX issues in the app.",
    //   status1: "In Progress",
    //   priority1: "High"
    // },
    // {
    //   id: 6,
    //   title1: "Write unit tests",
    //   description1: "Create unit tests to improve code coverage.",
    //   status1: "Pending",
    //   priority1: "High"
    // },
    // {
    //   id: 7,
    //   title1: "Optimize database queries",
    //   description1: "Improve the efficiency of database queries to enhance performance.",
    //   status1: "In Progress",
    //   priority1: "Medium"
    // },
    // {
    //   id: 8,
    //   title1: "Deploy latest build",
    //   description1: "Deploy the latest version of the application to production.",
    //   status1: "Pending",
    //   priority1: "High"
    // },
    // {
    //   id: 9,
    //   title1: "Conduct user testing",
    //   description1: "Gather user feedback on the latest features and fixes.",
    //   status1: "Completed",
    //   priority1: "Medium"
    // },
    // {
    //   id: 10,
    //   title1: "Refactor old code",
    //   description1: "Clean up and improve existing code for better maintainability.",
    //   status1: "Pending",
    //   priority1: "Low"
    // }
  ]);

  const [todoDisplay, setTodoDisplay] = useState(true);
  const [displayTodoAfterDeletion, setDisplayTodoAfterDeletion] = useState(false);
  const [displaySearchTodo, setDisplaySearchTodo] = useState(false)

  const [searchResult, setSearchResult] = useState({ title: '', description: '' });
  const [allCheckedTodo, setAllCheckedTodo] = useState([]);

  const valueStatus = ["Not Started", "In Progress", "Completed", "On Hold", "Cancelled"]
  const valuePriority = ["Critical", "High", "Medium", "Low", "None"]
  

  const [inputData, setInputData] = useState({
    title: '',
    description: '',
    status: '',
    priority: ''
  })

  return (
    <>
        <displayTodoAfterDeletionContext.Provider value={{ displayTodoAfterDeletion, setDisplayTodoAfterDeletion }}>
          <AllTodoContext.Provider value={{ todo, setTodo }} >
            <ManageVisibilityContext.Provider
              value={{ todoDisplay, setTodoDisplay, searchResult, setSearchResult, displaySearchTodo, setDisplaySearchTodo }} >
              <CheckedTodoContext.Provider value={{ allCheckedTodo, setAllCheckedTodo }}>
                <InputContext.Provider value={{ inputData, setInputData, valueStatus, valuePriority }} >

                  <AddToDo />

                </InputContext.Provider>
              </CheckedTodoContext.Provider>
            </ManageVisibilityContext.Provider>
          </AllTodoContext.Provider>
        </displayTodoAfterDeletionContext.Provider>

    </>
  )
}

export default App
