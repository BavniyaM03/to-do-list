import React, { useContext, useState } from 'react';
import { AllTodoContext, CheckedTodoContext, finalTodoAfterDeletionContext, ManageVisibilityContext } from '../App';
import CommonButton from './common-component/CommonButton';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

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
            <CommonButton 
            onClick={handleDelete} 
            icon={<DeleteForeverOutlinedIcon/>}  />
        </>
    )
}

export default DeleteBulk;