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
    const [id, setId] = useState();
    // const [editTitle, setEditTitle] = useState('')
    const [editTitle, setEditTitle] = useState({ editTitleValue: '', editDescription: '' })
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

    const findEditItemInList = (item, index) => {
        setId(index);
    }


    const handleEditSubmit = (e) => {
        e.preventDefault();
        console.log(41, id)
        const updatedData = todo.filter((item, i) => {
            if (id === i) {
            item.title1 = editTitle.editTitleValue;
            item.description1 = editTitle.editDescription;
            }
            return item;
        })
        console.log('after update todo', updatedData)
        console.log(36, id);
        setTodo(updatedData);
        setId();
    }




    const handleEditTodoTitle = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value)
        setEditTitle((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    console.log(editTitle);

    return (
        <>
            <Demo>
                <List dense={dense}>
                    {todo.map((item, index) => (
                        id === index ? (

                            <div key={index}>

                                <form action="" onSubmit={handleEditSubmit}  >
                                    <TextField
                                        id="outlined-basic"
                                        label="Title"
                                        variant="outlined"
                                        name="editTitleValue"
                                        value={editTitle.editTitleValue}
                                        onChange={handleEditTodoTitle}
                                    />

                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Description"
                                        multiline
                                        rows={4}
                                        name="editDescription"
                                        value={editTitle.editDescription}
                                        onChange={handleEditTodoTitle}
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