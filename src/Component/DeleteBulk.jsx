import React, { useContext } from 'react';
import { AllTodoContext, CheckedTodoContext, finalTodoAfterDeletionContext, ManageVisibilityContext } from '../App';
import CommonButton from './common-component/CommonButton';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

function DeleteBulk() {
    const { setTodoDisplay } = useContext(ManageVisibilityContext);
    const { allCheckedTodo } = useContext(CheckedTodoContext);
    const { finalTodoAfterDeletion, setFinalTodoAfterDeletion } = useContext(finalTodoAfterDeletionContext)
    const { todo } = useContext(AllTodoContext);

    const handleDelete = () => {
        const temp = todo.filter(item =>
            !allCheckedTodo.some(checkedItem => checkedItem.id === item.id)
        );
        setFinalTodoAfterDeletion(...finalTodoAfterDeletion, temp);
        setTodoDisplay(false);
    };

    return (
        <>
            <CommonButton
                onClick={handleDelete}
                icon={<DeleteForeverOutlinedIcon />} />
        </>
    )
}

export default DeleteBulk;