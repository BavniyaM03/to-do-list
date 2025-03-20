import React, { useContext, useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { AllTodoContext, CheckedTodoContext, displayTodoAfterDeletionContext, finalTodoAfterDeletionContext, ManageVisibilityContext } from '../App';

function DeleteBulk() {
    const { todoDisplay, setTodoDisplay } = useContext(ManageVisibilityContext);
    const { allCheckedTodo, setAllCheckedTodo } = useContext(CheckedTodoContext);
    // const { displayTodoAfterDeletion, setDisplayTodoAfterDeletion } = useContext(displayTodoAfterDeletionContext);
    const { finalTodoAfterDeletion, setFinalTodoAfterDeletion } = useContext(finalTodoAfterDeletionContext)

    const { todo } = useContext(AllTodoContext);
    // const [finalTodoAfterDeletion, setFinalTodoAfterDeletion] = useState([]);



    const handleDelete = () => {
        const temp = todo.filter(item =>
            !allCheckedTodo.some(checkedItem => checkedItem.id === item.id)
        );
        setFinalTodoAfterDeletion(...finalTodoAfterDeletion, temp);
        // if (finalTodoAfterDeletion.length >= 0) {
        //     setTodoDisplay(false);
        // }
        setTodoDisplay(false);
    };

    console.log(34, finalTodoAfterDeletion);

    return (
        <>
            <Stack direction="row" spacing={1}>
                <Chip
                    label="All Todo Delete"
                    // onClick={handleDelete}
                    onDelete={handleDelete}
                    deleteIcon={<DeleteIcon />}
                    variant="outlined"
                />
            </Stack>
        </>
    )
}

export default DeleteBulk;