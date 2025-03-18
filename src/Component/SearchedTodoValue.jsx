import React, { useState } from 'react';
import { ListItem } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemText } from '@mui/material'
import { Edit } from '@mui/icons-material';
function SearchedTodoValue({ searchResult, displaySearchTodo }) {
    const [secondary, setSecondary] = React.useState(true);
    return (
        <>
            {displaySearchTodo && (
                searchResult.map((item, i) => (<ListItem
                    key={i}
                    secondaryAction={
                        <div>
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon onClick={() => deleteToDo(index)} />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete">
                                <Edit onClick={() => findEditItemInList(item, index)} />
                            </IconButton>
                        </div>
                    }
                >

                    <ListItemText> <h2>{item.title1}</h2> <p>{item.description1} <br /> Priority :  {item.priority1} <br />status : <i>{item.status1} </i> </p> </ListItemText>

                </ListItem>))
            )}


        </>
    )
}

export default SearchedTodoValue;