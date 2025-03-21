import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material'
import CommonButton from './CommonButton';

const CommonTodoList = ({ value, edge, ariaLabel, onDelete, onEdit, onCheckBox, iconDelete, iconEdit, iconCheckBox }) => {
    return (
        <>

            <ListItem
                secondaryAction={
                    <div>
                        <CommonButton edge={edge} ariaLabel={ariaLabel} onClick={onDelete} icon={iconDelete} />
                        <CommonButton edge={edge} ariaLabel={ariaLabel} onClick={onEdit} icon={iconEdit} />
                        <CommonButton edge={edge} ariaLabel={ariaLabel} onClick={onCheckBox} icon={iconCheckBox} />
                    </div>
                }
            >
                <ListItemText>
                    <h2>{value.title1}</h2>
                    <p>
                        {value.description1}
                        <br />
                        Priority : {value.priority1}
                        <br />
                        Status :
                        <i>
                            {value.status1}
                        </i>
                    </p>
                    <br />
                </ListItemText>
            </ListItem>
            {/* )} */}
        </>
    )
}




export default CommonTodoList
