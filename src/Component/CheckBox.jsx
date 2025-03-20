import React, { useContext, useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { AllTodoContext } from '../App';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export function CheckBoxComponent({idx, handleCheckedTodo}) {

  return (
        <div>
            <Checkbox {...label} onChange={()=>handleCheckedTodo(idx)} />
        </div>
    );
}
