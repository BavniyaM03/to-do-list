import React, { useContext } from 'react';
import { ManageVisibilityContext } from '../App';
import CommonDropDown from './common-component/CommonDropDown';


function PriorityDropDownEdit({ editTodoTitleDescriptionStatus, handleEditTodo }) {

    const valueConditions = ["Critical", "High", "Medium", "Low", "None"]

    return (
        <>
            <CommonDropDown sx={{ minWidth: 120, display: 'contents' }}
                sxFormControl={{ minWidth: '15%' }}
                id="demo-simple-select-label"
                labelId="demo-simple-select-label"
                idSelect="demo-simple-select"
                valueSelect={editTodoTitleDescriptionStatus.editPriority}
                labelSelect="Priority"
                onChange={handleEditTodo}
                name="editPriority"
                valueMenuItem={valueConditions} />
        </>
    )
}

export default PriorityDropDownEdit;



