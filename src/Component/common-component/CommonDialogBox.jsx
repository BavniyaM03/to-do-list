import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function CommonDialogBox({open, handleChange}) {
    // console.log(open)
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
        >
            <DialogTitle>{"Use Google's location service?"}</DialogTitle>
            <DialogActions>
                <Button value='false' onClick={handleChange}>Disagree</Button>
                <Button value='true' onClick={handleChange}>Agree</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CommonDialogBox
