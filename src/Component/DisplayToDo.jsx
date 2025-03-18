import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, List, TextField } from '@mui/material';
import { ListItem } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemText } from '@mui/material'
import { Edit } from '@mui/icons-material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ManageVisibilityContext } from '../App';
import SearchedTodoValue from './SearchedTodoValue';

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

const DisplayToDo = ({ todo, setTodo, title, description, addTitle }) => {
    const { todoDisplay, setTodoDisplay, searchResult, setSearchResult, displaySearchTodo, setDisplaySearchTodo } = useContext(ManageVisibilityContext);
    const [id, setId] = useState();
    // const [editTodoTitleDescriptionStatus, seteditTodoTitleDescriptionStatus] = useState('')
    const [editTodoTitleDescriptionStatus, seteditTodoTitleDescriptionStatus] = useState({ editTodoTitleDescriptionStatusValue: '', editDescription: '', editStatus: '', editPriority: '' })
    const [dense, setDense] = React.useState(false);
    // const [todoDisplay, setDisplayTodo] = React.useState(true);

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
        seteditTodoTitleDescriptionStatus({
            editTodoTitleDescriptionStatusValue: item.title1, 
            editDescription: item.description1, 
            editStatus: item.status1, editPriority: item.priority1
        })
        console.log(36, item);
    }


    const handleEditSubmit = (e) => {
        e.preventDefault();
        console.log(41, id)
        const updatedData = todo.filter((item, i) => {
            if (id === i) {
                item.title1 = editTodoTitleDescriptionStatus.editTodoTitleDescriptionStatusValue;
                item.description1 = editTodoTitleDescriptionStatus.editDescription;
                item.status1 = editTodoTitleDescriptionStatus.editStatus;
                item.priority1 = editTodoTitleDescriptionStatus.editPriority;
            }
            return item;
        })
        console.log('after update todo', updatedData)
        console.log(36, id);
        setTodo(updatedData);
        setId();
    }




    const handleEditTodo = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value)
        seteditTodoTitleDescriptionStatus((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    console.log(editTodoTitleDescriptionStatus);

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
                                        name="editTodoTitleDescriptionStatusValue"
                                        // value={item.title1}
                                        value={editTodoTitleDescriptionStatus.editTodoTitleDescriptionStatusValue}
                                        onChange={handleEditTodo}
                                    />

                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Description"
                                        multiline
                                        rows={4}
                                        name="editDescription"
                                        value={editTodoTitleDescriptionStatus.editDescription}
                                        onChange={handleEditTodo}
                                    />

                                    <TextField
                                        id="outlined-basic"
                                        label="Status"
                                        variant="outlined"
                                        name="editStatus"
                                        value={editTodoTitleDescriptionStatus.editStatus}
                                        onChange={handleEditTodo} />

                                    <TextField
                                        id="outlined-basic"
                                        label="Priority"
                                        variant="outlined"
                                        name="Priority"
                                        value={editTodoTitleDescriptionStatus.editPriority}
                                        onChange={handleEditTodo} />

                                    <IconButton edge="end" aria-label="delete">
                                        <Button variant="outlined" type='submit' >
                                            <AddCircleIcon type='sumbit' fontSize="large"></AddCircleIcon>
                                        </Button>
                                    </IconButton>

                                </form>
                            </div>) : (

                            (todoDisplay ? (<ListItem

                                key={index}
                                secondaryAction={
                                    <div>
                                        {console.log(132, todoDisplay)}
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon onClick={() => deleteToDo(index)} />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete">
                                            <Edit onClick={() => findEditItemInList(item, index)} />
                                        </IconButton>
                                    </div>
                                }
                            >

                                {/* {console.log(item)} */}


                                <ListItemText> <h2>{item.title1}</h2> <p>{item.description1} <br /> Priority :  {item.priority1} <br />status : <i>{item.status1} </i> </p> </ListItemText>
                            </ListItem>) : (null))
                        )


                    ))}

                    <SearchedTodoValue searchResult={searchResult} displaySearchTodo={displaySearchTodo} />

                </List>
            </Demo>

        </>
    )
}

export default DisplayToDo