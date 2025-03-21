import React, { useContext } from 'react';
import { ManageVisibilityContext } from '../App';
import CommonDropDown from './common-component/CommonDropDown';

export default function DropDownStatus({ addStatus }) {
    const { status } = useContext(ManageVisibilityContext);
    const valueConditions = ["Not Started", "In Progress", "Completed", "On Hold", "Cancelled"]

    return (
        <>
            <CommonDropDown sx={{ minWidth: 120, display: 'contents' }}
                sxFormControl={{ minWidth: '15%' }}
                id="demo-simple-select-label"
                labelId="demo-simple-select-label"
                idSelect="demo-simple-select"
                valueSelect={status}
                labelSelect="Status"
                onChange={addStatus}
                valueMenuItem={valueConditions} />
        </>
    );
}