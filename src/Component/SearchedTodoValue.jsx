import React, { useContext, useState } from 'react';
import { AllTodoContext, ManageVisibilityContext } from '../App';
import CommonTodoList from './common-component/CommonTodoList';
function SearchedTodoValue() {
    const { searchResult, displaySearchTodo } = useContext(ManageVisibilityContext);
    const {todo, setTodo} = useContext(AllTodoContext);
    return (
        <>
            {displaySearchTodo && (
                searchResult.map((item, i) => (
                    <div key={i}>
                        <CommonTodoList
                        value={item} 
                        edge="end" 
                        ariaLabel="delete" 
                        onDelete={() => deleteToDo(index)}
                        onEdit={() => findEditItemInList(item, index)} />
                    </div>

                ))
            )}


        </>
    )
}

export default SearchedTodoValue;