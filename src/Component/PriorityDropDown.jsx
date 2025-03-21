import React, { useContext } from 'react';
import { ManageVisibilityContext } from '../App';
import CommonDropDown from './common-component/CommonDropDown';

function PriorityDropDown({ addPriority }) {

    const valueConditions = ["Critical", "High", "Medium", "Low", "None"]

    const { priority } = useContext(ManageVisibilityContext);

    return (
        <>
            <CommonDropDown sx={{ minWidth: 120, display: 'contents' }}
                sxFormControl={{ minWidth: '15%' }}
                id="demo-simple-select-label"
                labelId="demo-simple-select-label"
                idSelect="demo-simple-select"
                valueSelect={priority}
                labelSelect="Priority"
                onChange={addPriority}
                valueMenuItem={valueConditions} />
        </>
    )
}

export default PriorityDropDown;
