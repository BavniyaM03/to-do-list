import React, { useContext, useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { AllTodoContext } from '../App';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export function CheckBoxComponent(props) {
    const { todo } = useContext(AllTodoContext);
    const [checkedTodo, setCheckedTodo] = useState([]);

    const handleChange = () => {
        const checkItem = todo.find((_, index) => index === props.idx);
        
        if (checkItem) {
            setCheckedTodo(prevCheckedTodo => [...prevCheckedTodo, checkItem]);
        }
    };
     
    // Log checkedTodo when it changes
    useEffect(() => {
        console.log('Updated checkedTodo:', checkedTodo);
    }, [checkedTodo]);
    console.log('Updated checkedTodo:', checkedTodo);
    return (
        <div>
            <Checkbox {...label} onChange={handleChange} />
        </div>
    );
}
