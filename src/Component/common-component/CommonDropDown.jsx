import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./assets/CommonDropDown.css"; // Import external CSS



const CommonDropDown = ({ sx, sxFormControl, id, labelId, idSelect, valueSelect, labelSelect, onChange, name, valueMenuItem }) => {
    return (
        <>
            <Box sx={sx} className="custom-dropdown-box">
                <FormControl sx={sxFormControl} custom-dropdown-form>
                    <InputLabel className="custom-dropdown-label" id={id}>{labelSelect}</InputLabel>
                    <Select
                        labelId={labelId}
                        id={idSelect}
                        value={valueSelect}
                        label={labelSelect}
                        onChange={onChange}
                        name={name}
                        //this is for style - below this
                        className="custom-dropdown-select"
                        MenuProps={{ classes: { paper: "custom-dropdown-menu" } }}
                    >
                        {valueMenuItem.map((item, index) => (
                            <MenuItem key={index} value={item} className="custom-dropdown-menu">{item}</MenuItem>
                        ))}

                    </Select>
                </FormControl>
            </Box>
        </>
    )
}

export default CommonDropDown








