// import React, { useContext, useState, useEffect } from 'react';
// import Checkbox from '@mui/material/Checkbox';
// import { AllTodoContext } from '../../App';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// export function CommonCheckBox ({idx, handleCheckedTodo}) {

//   return (
//         <div>
//             <Checkbox {...label} onChange={()=>handleCheckedTodo(idx)} />
//         </div>
//     );
// }



import React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function CommonCheckBox({checkedValue, onChange, inputProps}) {

    return (
        <Checkbox
            checked={checkedValue}
            onChange={onChange}
            inputProps={inputProps}
        />
    );
}
