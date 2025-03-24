import React, { createContext, useState } from 'react'
import './App.css'
import AddToDo from './Component/AddToDo'
import Search from './Component/Search';
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
    {
      id: 4,
      title1: "Update dependencies",
      description1: "Ensure all project dependencies are up to date.",
      status1: "Pending",
      priority1: "Low"
    },
    {
      id: 5,
      title1: "Fix UI bugs",
      description1: "Resolve reported UI/UX issues in the app.",
      status1: "In Progress",
      priority1: "High"
    },
    {
      id: 6,
      title1: "Write unit tests",
      description1: "Create unit tests to improve code coverage.",
      status1: "Pending",
      priority1: "High"
    },
    {
      id: 7,
      title1: "Optimize database queries",
      description1: "Improve the efficiency of database queries to enhance performance.",
      status1: "In Progress",
      priority1: "Medium"
    },
    {
      id: 8,
      title1: "Deploy latest build",
      description1: "Deploy the latest version of the application to production.",
      status1: "Pending",
      priority1: "High"
    },
    {
      id: 9,
      title1: "Conduct user testing",
      description1: "Gather user feedback on the latest features and fixes.",
      status1: "Completed",
      priority1: "Medium"
    },
    {
      id: 10,
      title1: "Refactor old code",
      description1: "Clean up and improve existing code for better maintainability.",
      status1: "Pending",
      priority1: "Low"
    },
    {
      id: 11,
      title1: "Prepare project presentation",
      description1: "Create slides and talking points for the project presentation.",
      status1: "In Progress",
      priority1: "Medium"
    },
    {
      id: 12,
      title1: "Security audit",
      description1: "Perform a security audit to identify vulnerabilities.",
      status1: "Pending",
      priority1: "High"
    },
    {
      id: 13,
      title1: "Automate deployment process",
      description1: "Set up CI/CD pipelines to streamline deployment.",
      status1: "In Progress",
      priority1: "High"
    },
    {
      id: 14,
      title1: "Update project roadmap",
      description1: "Refine and update the project roadmap with milestones.",
      status1: "Completed",
      priority1: "Medium"
    },
    {
      id: 15,
      title1: "Improve error logging",
      description1: "Enhance error tracking and logging mechanisms.",
      status1: "Pending",
      priority1: "High"
    },
    {
      id: 16,
      title1: "Optimize front-end performance",
      description1: "Minimize load time and improve responsiveness.",
      status1: "In Progress",
      priority1: "Medium"
    },
    {
      id: 17,
      title1: "Set up monitoring tools",
      description1: "Integrate tools to monitor application performance.",
      status1: "Pending",
      priority1: "High"
    },
    {
      id: 18,
      title1: "Conduct accessibility testing",
      description1: "Ensure the application meets accessibility standards.",
      status1: "Completed",
      priority1: "Medium"
    },
    {
      id: 19,
      title1: "Update API documentation",
      description1: "Revise API documentation with the latest changes.",
      status1: "Pending",
      priority1: "High"
    },
    {
      id: 20,
      title1: "Enhance dashboard UI",
      description1: "Improve the design and user experience of the dashboard.",
      status1: "In Progress",
      priority1: "High"
    }

  ]);

  const [sliceArray, setSliceArray] = useState([]);
  const [todoDisplay, setTodoDisplay] = useState(true);
  const [displayTodoAfterDeletion, setDisplayTodoAfterDeletion] = useState(false);
  const [displaySearchTodo, setDisplaySearchTodo] = useState(false)
  const [displayDeleteButton, setDisplayDeleteButton] = useState(false);
  const [searchResult, setSearchResult] = useState({ title: '', description: '' });
  const [allCheckedTodo, setAllCheckedTodo] = useState([]);
  const [checked, setChecked] = useState(false);

  const valueStatus = ["Not Started", "In Progress", "Completed", "On Hold", "Cancelled"]
  const valuePriority = ["Critical", "High", "Medium", "Low", "None"]


  const [inputData, setInputData] = useState({
    title: '',
    description: '',
    status: 'Not Started',
    priority: 'Low'
  })


  return (
    <>

      <displayTodoAfterDeletionContext.Provider value={{ displayTodoAfterDeletion, setDisplayTodoAfterDeletion }}>

        <ManageVisibilityContext.Provider
          value={{ todoDisplay, setTodoDisplay, searchResult, setSearchResult, displaySearchTodo, setDisplaySearchTodo }} >
          <CheckedTodoContext.Provider value={{ allCheckedTodo, setAllCheckedTodo, displayDeleteButton, setDisplayDeleteButton, checked, setChecked }}>
            <InputContext.Provider value={{ inputData, setInputData, valueStatus, valuePriority }} >
              <AllTodoContext.Provider value={{ todo, setTodo, sliceArray, setSliceArray }} >
                {/* <Search /> */}
                <AddToDo />
              </AllTodoContext.Provider>
            </InputContext.Provider>
          </CheckedTodoContext.Provider>
        </ManageVisibilityContext.Provider>

      </displayTodoAfterDeletionContext.Provider>

    </>
  )
}

export default App
