import React, { useContext } from 'react';
import { AllTodoContext, CheckedTodoContext } from '../App';
import CommonButton from './common-component/CommonButton';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

function DeleteBulk() {
    const { allCheckedTodo, displayDeleteButton, setDisplayDeleteButton, checked, setChecked} = useContext(CheckedTodoContext);
    const { todo, setTodo, sliceArray, setSliceArray } = useContext(AllTodoContext);

    const handleDelete = () => {
        const temp = sliceArray.filter(item =>
            !allCheckedTodo.some(checkedItem => checkedItem.id === item.id)
        );
        setChecked(false);
        setSliceArray(temp);   
        setDisplayDeleteButton(false);
        
    };

    return (
        <>
            <CommonButton
                onClick={handleDelete}
                icon={<DeleteForeverOutlinedIcon sx={{color: '#343a40'}}/>} />
        </>
    )
}

export default DeleteBulk;