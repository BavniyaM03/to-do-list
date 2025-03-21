import { TextField } from "@mui/material"
export default function CommonTextField({ id, label, variant, multiline, rows, name, value, onChange, sx,required,  placeholder}) {
    return (
        <>
            <TextField
                id={id}
                label={label}
                variant={variant}
                multiline={multiline}
                rows={rows}
                name={name}
                value={value}
                onChange={onChange}
                sx={sx}
                required={required}
                placeholder={placeholder}/>          
        </>
    )
}





