import { IconButton } from '@mui/material';
import { Button } from '@mui/material';

const CommonButton = ({ sx, edge, ariaLabel, variant, typeButton, icon, text, onClick }) => {

    return (
        <>
            <IconButton sx={sx} edge={edge} aria-label={ariaLabel} onClick={onClick}>
                <Button variant={variant} type={typeButton}>
                    {icon ? icon : text}
                </Button>
            </IconButton>
        </>
    )
}

export default CommonButton


   