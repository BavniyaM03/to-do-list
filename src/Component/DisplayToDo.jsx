import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, List} from '@mui/material';
import { ListItem } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemText } from '@mui/material'
import { CheckBox, CheckBoxOutlineBlank, Edit } from '@mui/icons-material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { CheckedTodoContext, displayTodoAfterDeletionContext, finalTodoAfterDeletionContext, ManageVisibilityContext } from '../App';
import SearchedTodoValue from './SearchedTodoValue';
import DropDownStatusEdit from './DropDownStatusEdit';
import PriorityDropDownEdit from './PriorityDropDownEdit';
import { CheckBoxComponent } from './CheckBox';
import DeleteBulk from './DeleteBulk';
import CommonTextField from './common-component/CommonTextField';

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const DisplayToDo = ({ todo, setTodo, title, description, addTitle }) => {
    const { todoDisplay, setTodoDisplay, searchResult, setSearchResult, displaySearchTodo, setDisplaySearchTodo } = useContext(ManageVisibilityContext);
    const [id, setId] = useState();
    // const [editTodoTitleDescriptionStatus, seteditTodoTitleDescriptionStatus] = useState('')
    const [editTodoTitleDescriptionStatus, seteditTodoTitleDescriptionStatus] = useState({ editTodoTitleDescriptionStatusValue: '', editDescription: '', editStatus: '', editPriority: '' })
    const { allCheckedTodo, setAllCheckedTodo } = useContext(CheckedTodoContext);
    const [dense, setDense] = React.useState(false);
    const [displayDeleteButton, setDisplayDeleteButton] = useState(false);
    // const { displayTodoAfterDeletion, setDisplayTodoAfterDeletion } = useContext(finalTodoAfterDeletionContext)
    const { finalTodoAfterDeletion, setFinalTodoAfterDeletion } = useContext(finalTodoAfterDeletionContext)
    // const { displayTodoAfterDeletion, setDisplayTodoAfterDeletion } = useContext(displayTodoAfterDeletionContext);
    // const [allCheckedTodo, setallCheckedTodo] = useState([]);
    // const [todoDisplay, setDisplayTodo] = React.useState(true);

    const deleteToDo = (index) => {
        // console.log(e);
        const result = confirm('Are you sure you want to delete');
        if (result === true) {
            const finalTodo = todo.filter((item, i) =>
                index != i
            )
            setTodo(finalTodo);
            alert('are you sure you want to delete')
        }
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

    const handleCheckedTodo = (idx) => {
        setDisplayDeleteButton(true)
        const checkTodo = todo[idx]
        console.log(checkTodo)
        setAllCheckedTodo([...allCheckedTodo, checkTodo])
    }
    console.log('allCheckedTodo', allCheckedTodo)
    console.log(editTodoTitleDescriptionStatus);

    return (
        <>
            <Demo>
                <List dense={dense}>
                    {displayDeleteButton && <DeleteBulk />}
                    {todo.map((item, index) => (
                        id === index ? (

                            <div key={index}>

                                <form action="" onSubmit={handleEditSubmit}  >

                                    <CommonTextField id="outlined-basic"
                                        label="Title"
                                        variant="outlined"
                                        name="editTodoTitleDescriptionStatusValue"
                                        value={editTodoTitleDescriptionStatus.editTodoTitleDescriptionStatusValue}
                                        onChange={handleEditTodo} />

                                    <CommonTextField id="outlined-multiline-static"
                                        label="Description"
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        name="editDescription"
                                        value={editTodoTitleDescriptionStatus.editDescription}
                                        onChange={handleEditTodo} />


                                    <DropDownStatusEdit value={editTodoTitleDescriptionStatus} handleEditTodo={handleEditTodo} />


                                    <PriorityDropDownEdit editTodoTitleDescriptionStatus={editTodoTitleDescriptionStatus} handleEditTodo={handleEditTodo} />

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

                                        <IconButton>
                                            <CheckBoxComponent idx={index} handleCheckedTodo={handleCheckedTodo} />
                                        </IconButton>


                                    </div>
                                }
                            >

                                {/* {console.log(item)} */}


                                <ListItemText> <h2>{item.title1}</h2> <p>{item.description1} <br /> Priority :  {item.priority1} <br />status : <i>{item.status1} </i> </p> </ListItemText>
                            </ListItem>) : (null))
                        )))}
                    {console.log('  finalTodoAfterDeletion', finalTodoAfterDeletion)}

                    {todoDisplay ? ('') : (
                        // console.log(191, todoDisplay),
                        // console.log('  finalTodoAfterDeletion', finalTodoAfterDeletion)
                        (finalTodoAfterDeletion.map((element, index) => (
                            <div key={index}>
                                <ListItem

                                    secondaryAction={
                                        <div>
                                            {console.log(132, todoDisplay)}
                                            <IconButton disabled edge="end" aria-label="delete">
                                                <DeleteIcon onClick={() => deleteToDo(index)} />
                                            </IconButton>
                                            <IconButton disabled edge="end" aria-label="delete">
                                                <Edit onClick={() => findEditItemInList(element, index)} />
                                            </IconButton>
                                        </div>
                                    }
                                >

                                    {/* {console.log(element[0].title1)} */}


                                    <ListItemText> <h2>{element.title1}</h2> <p>{element.description1} <br /> Priority :  {element.priority1} <br />status : <i>{element.status1} </i> </p> </ListItemText>
                                </ListItem>
                            </div>
                        )))

                    )}

                    <SearchedTodoValue searchResult={searchResult} displaySearchTodo={displaySearchTodo} />

                </List>
            </Demo>

        </>
    )
}

export default DisplayToDo