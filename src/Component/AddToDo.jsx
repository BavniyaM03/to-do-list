import React, { useContext, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './Header';
import TodoList from './sub-component/TodoList'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Search from './Search';
import { AllTodoContext, InputContext, ManageVisibilityContext } from '../App';
import PriorityDropDown from './PriorityDropDown';
import DropDownStatus from './DropDownStatus';
import CommonTextField from './common-component/CommonTextField';
import CommonButton from './common-component/CommonButton';

export default function AddToDo() {
    const { todo, setTodo } = useContext(AllTodoContext)
    const { inputData, setInputData } = useContext(InputContext)

    const addToDoInList = (e) => {
        e.preventDefault();
        setTodo([...todo,
        {
            title1: inputData.title,
            description1: inputData.description,
            status1: inputData.status,
            priority1: inputData.priority
        }])
        setInputData({
            title: '',
            description: '',
            status: 'Status',
            priority: 'Priority'
        });
    }

    const handleInputDetails = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value)
        setInputData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
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
                            value={inputData.title}
                            onChange={handleInputDetails}
                            sx={{ minWidth: '25%' }}
                            required={true} />

                        <CommonTextField
                            id="outlined-multiline-static"
                            label="Description"
                            variant="outlined"
                            multiline
                            rows={4}
                            name="description"
                            value={inputData.description}
                            onChange={handleInputDetails}
                            sx={{ minWidth: '35%' }}
                            required={true} />

                        <DropDownStatus addStatus={handleInputDetails} name="status" />

                        <PriorityDropDown addPriority={handleInputDetails} name="priority" />

                        <CommonButton
                            edge="end"
                            ariaLabel="delete"
                            typeButton="submit"
                            icon={<AddCircleIcon type='sumbit' fontSize="large" />} />
                    </form>

                    <TodoList />

                </Box>
            </Container >
        </>
    );
}