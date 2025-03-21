import React, { useContext } from 'react';
import { InputContext, ManageVisibilityContext } from '../App';
import CommonDropDown from './common-component/CommonDropDown';

function PriorityDropDown({ addPriority, name}) {

    const valueConditions = ["Critical", "High", "Medium", "Low", "None"]

    const { inputData } = useContext(InputContext);

    return (
        <>
            <CommonDropDown sx={{ minWidth: 120, display: 'contents' }}
                sxFormControl={{ minWidth: '15%' }}
                name={name}
                id="demo-simple-select-label"
                labelId="demo-simple-select-label"
                idSelect="demo-simple-select"
                valueSelect={inputData.priority}
                labelSelect="Priority"
                onChange={addPriority}
                valueMenuItem={valueConditions} />
        </>
    )
}

export default PriorityDropDown;
