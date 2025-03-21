import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const CommonDropDown = ({ sx, sxFormControl, id, labelId, idSelect, valueSelect, labelSelect, onChange, name, valueMenuItem }) => {
    return (
        <>
            <Box sx={sx}>
                <FormControl sx={sxFormControl}>
                    <InputLabel id={id}>{labelSelect}</InputLabel>
                    <Select
                        labelId={labelId}
                        id={idSelect}
                        value={valueSelect}
                        label={labelSelect}
                        onChange={onChange}
                        name={name}
                    >
                        {valueMenuItem.map((item, index) => (
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                        ))}

                    </Select>
                </FormControl>
            </Box>
        </>
    )
}

export default CommonDropDown




