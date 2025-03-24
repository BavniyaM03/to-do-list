import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material'
import CommonButton from './CommonButton';
import "./assets/CommonTodoList.css";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';


const CommonTodoList = ({ value, edge, ariaLabel, onDelete, onEdit, onCheckBox, iconDelete, iconEdit, iconCheckBox, id }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }
    return (
        <>
            <ListItem className="common-todo-item"
                /* <ListItem ref={setNodeRef}  {...attributes} {...listeners} style={style} className="common-todo-item" */
                secondaryAction={
                    <div className="common-todo-buttons">
                        <CommonButton edge={edge} ariaLabel={ariaLabel} onClick={onDelete} icon={iconDelete} />
                        <CommonButton edge={edge} ariaLabel={ariaLabel} onClick={onEdit} icon={iconEdit} />
                        <CommonButton edge={edge} ariaLabel={ariaLabel} onClick={onCheckBox} icon={iconCheckBox} />
                    </div>
                }
            >
                <ListItemText className="common-todo-text">
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
