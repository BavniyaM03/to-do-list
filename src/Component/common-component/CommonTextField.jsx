import { TextField } from "@mui/material"
import "./assets/CommonTextField.css"; // Import external CSS

export default function CommonTextField({ id, label, variant, multiline, rows, name, value, onChange, sx, required, placeholder }) {
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
                placeholder={placeholder}
                //below this is for style
                className="custom-text-field"
                InputLabelProps={{ className: "custom-label" }}
                InputProps={{ className: "custom-input" }}
            />

        </>
    )
}




