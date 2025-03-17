import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Icon, IconButton, TextField } from '@mui/material';
import { Button } from '@mui/material';
import Header from './Header';
import DisplayToDo from './DisplayToDo';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function AddToDo() {

    const [todo, setTodo] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
   

    const addTitle = (e) => {
        setTitle(e.target.value)
    }

    // console.log("this is title", title, "this is desciption", description)

    const addDescription = (e) => {
        setDescription(e.target.value)
    }

    const addToDoInList = (e) => {
        e.preventDefault();
        setTodo([...todo,
        {
            title1: title,
            description1: description
        }])
        setTitle('')
        setDescription('')
    }
    console.log(todo);
    return (
        <>
            <CssBaseline />
            <Container >
                <Header />
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>

                    <form action="" onSubmit={addToDoInList}  >
                        <TextField
                            id="outlined-basic"
                            label="Title"
                            variant="outlined"
                            name="title"
                            value={title}
                            onChange={addTitle} />

                        <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                            name="description"
                            value={description}
                            onChange={addDescription}
                        />
                        <IconButton edge="end" aria-label="delete">
                            <Button variant="outlined" type='submit' >
                                <AddCircleIcon type='sumbit' fontSize="large"></AddCircleIcon>
                            </Button>
                        </IconButton>
                    </form>

                    <DisplayToDo todo={todo} setTodo={setTodo} title={title} description={description} addTitle={addTitle}/>

                </Box>
            </Container>
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
