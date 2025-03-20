import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ManageVisibilityContext } from '../App';

function PriorityDropDown({ addPriority }) {

    const value = ["Critical", "High", "Medium", "Low", "None"]

    const { priority } = useContext(ManageVisibilityContext);

    return (
        <Box sx={{ minWidth: 120, display:'contents'  }}>
            <FormControl sx={{ minWidth: '15%'}}>
                <InputLabel id="demo-simple-select-label">priority</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={priority}
                    label="Priority"
                    onChange={addPriority}
                >
                    {value.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
                    {/* <MenuItem value='In Progress'>In Progress</MenuItem>
                    <MenuItem value='Completed'>Completed  </MenuItem>
                    <MenuItem value='On Hold'>On Hold   </MenuItem>
                    <MenuItem value='Cancelled'>Cancelled  </MenuItem> */}
                </Select>
            </FormControl>
        </Box>

    )
}

export default PriorityDropDown;