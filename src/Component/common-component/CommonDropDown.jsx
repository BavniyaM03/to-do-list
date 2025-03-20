import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default CommonDropDown = (sx, sxfc, id, label, labelId, id, value, label, onChange, value) => {
    return (
        <>
            <Box sx={sx}>
                <FormControl sx={sxfc}>
                    <InputLabel id={id}>{label}</InputLabel>
                    <Select
                        labelId={labelId}
                        id={id}
                        value={value}
                        label={label}
                        onChange={onChange}
                    >
                        <MenuItem value={value}>{value}</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}

