import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ManageVisibilityContext } from '../App';

export default function DropDownStatus({ addStatus }) {
    const { status } = useContext(ManageVisibilityContext);

    return (
        <Box sx={{ minWidth: 120, display:'contents' }}>
            <FormControl sx={{ minWidth: '15%'}}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    label="Status"
                    onChange={addStatus}
                >
                    <MenuItem value='Not Started'>Not Started  </MenuItem>
                    <MenuItem value='In Progress'>In Progress</MenuItem>
                    <MenuItem value='Completed'>Completed  </MenuItem>
                    <MenuItem value='On Hold'>On Hold   </MenuItem>
                    <MenuItem value='Cancelled'>Cancelled  </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
