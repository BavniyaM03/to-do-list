import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
import "./assets/CommonButton.css"; 


const CommonButton = ({value, sx, edge, ariaLabel, variant, typeButton, icon, text, onClick }) => {

    return (
        <>
            <IconButton  className="custom-icon-button" sx={sx} edge={edge} aria-label={ariaLabel} onClick={onClick}>
                <Button className="custom-button" variant={variant} type={typeButton}>
                    {icon ? icon : text}
                </Button>
            </IconButton>
        </>
    )
}

export default CommonButton


   