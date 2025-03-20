import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ManageVisibilityContext } from '../App';
     

function PriorityDropDownEdit({ editTodoTitleDescriptionStatus, handleEditTodo }) {

    const value = ["Critical", "High", "Medium", "Low", "None"]

    const { priority } = useContext(ManageVisibilityContext);

    return (
        <Box sx={{ minWidth: 120, display:'contents' }}>
            <FormControl sx={{ minWidth: '15%' }}>
                <InputLabel id="demo-simple-select-label">priority</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={editTodoTitleDescriptionStatus.editPriority}
                    label="Priority"
                    onChange={handleEditTodo}
                    name="editPriority"
                >
                    {value.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>

    )
}

export default PriorityDropDownEdit;


