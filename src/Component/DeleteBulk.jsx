import React, { useContext } from 'react';
import { AllTodoContext, CheckedTodoContext} from '../App';
import CommonButton from './common-component/CommonButton';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

function DeleteBulk({setDisplayDeleteButton}) {
    const { allCheckedTodo } = useContext(CheckedTodoContext);
    const { todo, setTodo } = useContext(AllTodoContext);

    const handleDelete = () => {
        const temp = todo.filter(item =>
            !allCheckedTodo.some(checkedItem => checkedItem.id === item.id)
        );
        setTodo(temp);
        setDisplayDeleteButton(false);
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