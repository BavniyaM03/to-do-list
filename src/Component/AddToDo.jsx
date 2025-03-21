import React, { useContext, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './Header';
import TodoList from './sub-component/TodoList'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Search from './Search';
import { AllTodoContext, InputContext} from '../App';

import CommonTodoAddForm from './common-component/CommonTodoAddForm';

export default function AddToDo() {
    const { todo, setTodo } = useContext(AllTodoContext)
    const { inputData, setInputData, valueStatus, valuePriority } = useContext(InputContext)
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
                    <CommonTodoAddForm onSubmit={addToDoInList} idTitle="outlined-basic" labelTitle="Title" variantTitle="outlined" nameTitle="title" valueTitle={inputData.title} onChangeTitle={handleInputDetails} sxTitle={{ minWidth: '25%' }} requiredTitle={true} idDescription="outlined-multiline-static" labelDescription="Description" variantLabelDescription="outlined" rowsDescription={4} nameDescription="description" valueDescription={inputData.description} onChangeDescription={handleInputDetails} sxDescription={{ minWidth: '35%' }} requiredDescription={true} sxStatus={{ minWidth: 120, display: 'contents' }} sxFormControlStatus={{ minWidth: '15%' }} nameStatus="status" idStatus="demo-simple-select-label" labelIdStatus="demo-simple-select-label" idSelectStatus="demo-simple-select" valueStatus={inputData.status} labelStatus="Status" onChangeStatus={handleInputDetails} valueMenuItemStatus={valueStatus} sxPriority={{ minWidth: 120, display: 'contents' }} sxFormControlPriority={{ minWidth: '15%' }} namePriority="priority" idPriority="demo-simple-select-label" labelIdPriority="demo-simple-select-label" idSelectPriority="demo-simple-select" valuePriority={inputData.priority} labelPriority="Priority" onChangePriority={handleInputDetails} valueMenuItemPriority={valuePriority} edge="end" ariaLabel="{valueConditions}" typeButton="submit" icon={<AddCircleIcon type='sumbit' fontSize="large" />} />

                    <TodoList />

                </Box>
            </Container >
        </>
    );
}