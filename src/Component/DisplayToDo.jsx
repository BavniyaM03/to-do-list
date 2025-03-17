import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, List, TextField } from '@mui/material';
import { ListItem } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemText } from '@mui/material'
import { Edit } from '@mui/icons-material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

const DisplayToDo = ({ todo, setTodo, title, description, addTitle }) => {
    const [editWindowIndex, seteditWindowIndex] = useState();
    const [editTitle, setEditTitle] = useState()
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(true);

    const deleteToDo = (index) => {
        // console.log(e);
        const finalTodo = todo.filter((item, i) =>
            index != i
        )
        setTodo(finalTodo);
        console.log('after delete', todo)
    }

    const editToDoListItem = (e, editWindowIndex) => {

    }

    const findEditItemInList = (item, index) => {
        seteditWindowIndex(index);

    }

    const handleEditSubmit = (e, editWindowIndex) => {
        e.preventDefault();
        const updatedData = todo.filter((item, i) => {
            if (editWindowIndex === i) {
                item.title1 = editTitle
            }
        })
        setTodo(updatedData);
    }

    console.log(todo);

    const handleEditTodoTitle = (e) => {
        console.log('title edit function called', e)
        setEditTitle(e.target.value)
        console.log(editTitle);
    }





    return (
        <>
            <Demo>
                <List dense={dense}>
                    {todo.map((item, index) => (
                        editWindowIndex === index ? (

                            <div key={index}>

                                <form action="" onSubmit={handleEditSubmit}  >
                                    <TextField
                                        id="outlined-basic"
                                        label="Title"
                                        variant="outlined"
                                        name="title"
                                        // value={}
                                        onChange={handleEditTodoTitle}
                                    />

                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Description"
                                        multiline
                                        rows={4}
                                        name="description"
                                        value={item.description1}

                                    />

                                    <IconButton edge="end" aria-label="delete">
                                        <Button variant="outlined" type='submit' >
                                            <AddCircleIcon type='sumbit' fontSize="large"></AddCircleIcon>
                                        </Button>
                                    </IconButton>

                                </form>
                            </div>) : (<ListItem
                                key={index}
                                secondaryAction={
                                    <>
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon onClick={() => deleteToDo(index)} />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete">
                                            <Edit onClick={() => findEditItemInList(item, index)} />
                                        </IconButton>
                                    </>
                                }
                            >

                                {/* {console.log(item)} */}


                                <ListItemText
                                    primary={item.title1}
                                    secondary={secondary ? item.description1 : null}
                                />
                            </ListItem>)


                    ))}


                </List>
            </Demo>

        </>
    )
}

export default DisplayToDo