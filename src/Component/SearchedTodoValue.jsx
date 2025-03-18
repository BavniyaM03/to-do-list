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

            {console.log(12, searchResult)}
            {console.log(12, typeof searchResult)}
            {displaySearchTodo && (
                searchResult.map((item, i) => (<ListItem
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
                    <ListItemText
                        primary={item.title1}
                        secondary={secondary ? item.description1 : null}
                    />
                </ListItem>))
            )}


        </>
    )
}

export default SearchedTodoValue;