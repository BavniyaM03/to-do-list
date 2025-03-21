import React, { useContext, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './Header';
import DisplayToDo from './DisplayToDo';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Search from './Search';
import { AllTodoContext, ManageVisibilityContext } from '../App';
import PriorityDropDown from './PriorityDropDown';
import DropDownStatus from './DropDownStatus';
import CommonTextField from './common-component/CommonTextField';
import CommonButton from './common-component/CommonButton';

export default function AddToDo() {
    const { status, setStatus, priority, setPriority } = useContext(ManageVisibilityContext);
    const { todo, setTodo } = useContext(AllTodoContext)

    // const [todo, setTodo] = useState([])
    // const [todo, setTodo] = useState([
    //     {
    //         title1: "Complete project documentation",
    //         description1: "Write and review all necessary documentation for the project.",
    //         status1: "In Progress",
    //         priority1: "High"
    //     },
    //     {
    //         title1: "Team meeting",
    //         description1: "Discuss project updates and next steps.",
    //         status1: "Pending",
    //         priority1: "Medium"
    //     },
    //     {
    //         title1: "Code review",
    //         description1: "Review the latest code changes before merging.",
    //         status1: "Completed",
    //         priority1: "High"
    //     },
    //     {
    //         title1: "Update dependencies",
    //         description1: "Ensure all project dependencies are up to date.",
    //         status1: "Pending",
    //         priority1: "Low"
    //     },
    //     {
    //         title1: "Fix UI bugs",
    //         description1: "Resolve reported UI/UX issues in the app.",
    //         status1: "In Progress",
    //         priority1: "High"
    //     }
    // ]
    // )
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    // const [status, setStatus] = useState('')
    // const [priority, setPriority] = useState('')

    const addTitle = (e) => {
        setTitle(e.target.value)
    }

    const addDescription = (e) => {
        setDescription(e.target.value)
    }

    const addStatus = (e) => {
        setStatus(e.target.value)
    }

    const addPriority = (e) => {
        setPriority(e.target.value)
    }

    const addToDoInList = (e) => {
        e.preventDefault();
        setTodo([...todo,
        {
            title1: title,
            description1: description,
            status1: status,
            priority1: priority
        }])
        setTitle('')
        setDescription('')
        setStatus('')
        setPriority('')
    }

    return (
        <>
            <CssBaseline />
            <Container >
                <Header />
                <Search todo={todo} />
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>

                    <form action="" onSubmit={addToDoInList}  >

                        <CommonTextField
                            id="outlined-basic"
                            label="Title"
                            variant="outlined"
                            name="title"
                            value={title}
                            onChange={addTitle}
                            sx={{ minWidth: '25%' }} />

                        <CommonTextField
                            id="outlined-multiline-static"
                            label="Description"
                            variant="outlined"
                            multiline
                            rows={4}
                            name="editDescription"
                            value={description}
                            onChange={addDescription}
                            sx={{ minWidth: '35%' }} />

                        <DropDownStatus addStatus={addStatus} />

                        <PriorityDropDown addPriority={addPriority} />


                        <CommonButton
                            edge="end"
                            ariaLabel="delete"
                            typeButton="submit"
                            icon={<AddCircleIcon type='sumbit' fontSize="large" />} />
                    </form>

                    <DisplayToDo todo={todo} setTodo={setTodo} title={title} description={description} addTitle={addTitle} />

                </Box>
            </Container >
        </>
    );
}





// const [todo, setTodo] = useState({
//     title: '',
//     desciption: ''
// })

// const addTitle = (e) => {
//     let title = e.target.value;
//     console.log(title)
// }

// const addToDoInList = (e) => {

//     // setTodo({
//     //     ...todo,
//     //     [e.target.name]:e.target.value
//     // })
//     // console.log(todo)
// }
