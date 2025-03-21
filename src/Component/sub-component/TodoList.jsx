import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import { List } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { AllTodoContext, CheckedTodoContext, finalTodoAfterDeletionContext, ManageVisibilityContext } from '../../App';
import SearchedTodoValue from '../SearchedTodoValue';
import DropDownStatusEdit from '../DropDownStatusEdit';
import PriorityDropDownEdit from '../PriorityDropDownEdit';
import DeleteBulk from '../DeleteBulk';
import CommonTextField from '../common-component/CommonTextField';
import CommonButton from '../common-component/CommonButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CommonTodoList from '../common-component/CommonTodoList';
import { CommonCheckBox } from '../common-component/CommonCheckBox';
import { Edit } from '@mui/icons-material';

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

function TodoList() {
    const { todoDisplay, searchResult, displaySearchTodo } = useContext(ManageVisibilityContext);
    const [id, setId] = useState();
    const [editTodoTitleDescriptionStatus, seteditTodoTitleDescriptionStatus] = useState({ editTodoTitleDescriptionStatusValue: '', editDescription: '', editStatus: '', editPriority: '' })
    const { allCheckedTodo, setAllCheckedTodo } = useContext(CheckedTodoContext);
    const [dense, setDense] = React.useState(false);
    const [displayDeleteButton, setDisplayDeleteButton] = useState(false);
    const { finalTodoAfterDeletion } = useContext(finalTodoAfterDeletionContext)
    const { todo, setTodo } = useContext(AllTodoContext)

    const deleteToDo = (index) => {
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

    return (
        <>
            <Demo>
                <List dense={dense}>

                    {/* Delete Button Will be Show Here */}
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

                                    <CommonButton
                                        edge="end"
                                        ariaLabel="delete"
                                        typeButton="submit"
                                        icon={<CheckCircleIcon type='sumbit' fontSize="large" />} />

                                </form>
                            </div>) : (

                            (todoDisplay ? (
                                <CommonTodoList
                                    value={item}
                                    key={index}
                                    edge="end"
                                    ariaLabel="delete"
                                    iconDelete={<DeleteIcon />}
                                    onDelete={() => deleteToDo(index)}
                                    iconEdit={<Edit />}
                                    onEdit={() => findEditItemInList(item, index)}
                                    iconCheckBox={<CommonCheckBox />}
                                    onCheckBox={handleCheckedTodo} />

                            ) : (null))
                        )


                    )

                    )}


                    {/* THIS WILL DISPLAY WHEN TODO WILL DELETE IN BULK */}
                    {todoDisplay ? ('') : (
                        (finalTodoAfterDeletion.map((item, index) => (
                            <div key={index}>

                                <CommonTodoList
                                    value={item}
                                    key={index}
                                    edge="end"
                                    ariaLabel="delete"
                                    iconDelete={<DeleteIcon />}
                                    onDelete={() => deleteToDo(index)}
                                    iconEdit={<Edit />}
                                    onEdit={() => findEditItemInList(item, index)}
                                />

                            </div>
                        )))

                    )}

                    <SearchedTodoValue searchResult={searchResult} displaySearchTodo={displaySearchTodo} />

                </List>
            </Demo>

        </>
    )
}


export default TodoList;
