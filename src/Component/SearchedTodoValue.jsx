import React, { useContext, useEffect, useState } from 'react';
import { AllTodoContext, ManageVisibilityContext, PaginationContext } from '../App';
import CommonTodoList from './common-component/CommonTodoList';
import CommonPagination from './common-component/CommonPagination';
function SearchedTodoValue() {
    const { searchResult, displaySearchTodo } = useContext(ManageVisibilityContext);
    const { todo, setTodo, sliceArray, setSliceArray } = useContext(AllTodoContext);
    const {todoPagination, setTodoPagination} = useContext(PaginationContext);
    

    // const [todoPagination, setTodoPagination] = useState(
    //     {
    //         todoPerPage: 5,
    //         currentPage: 1,
    //         totalPages: ''
    //     })

    useEffect(() =>
        setTodoPagination({
            ...todoPagination,
            totalPages: Math.ceil(searchResult.length / todoPagination.todoPerPage)
        }), [searchResult]);

    console.log("total pages", todoPagination.totalPages);

    console.log('Pagination')

    const lastIndex = todoPagination.currentPage * todoPagination.todoPerPage;

    console.log('lastIndex', lastIndex);

    const startIndex = lastIndex - todoPagination.todoPerPage;

    console.log('lastIndex', startIndex);

    console.log(29, searchResult);

    const temp = searchResult.slice(startIndex, lastIndex);

    console.log(38, temp);


    useEffect(() =>
        setSliceArray(temp),
        [todoPagination.currentPage, searchResult]);

    const handleChange = (event, value) => {
        setTodoPagination({
            ...todoPagination,
            currentPage: value
        })
    };


    console.log('sliceArray', sliceArray)


    return (
        <>
            {displaySearchTodo && (
                sliceArray.map((item, i) => (
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

            <CommonPagination
                sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', padding: 5 }}
                count={todoPagination.totalPages}
                defaultValue = {1}
                page={todoPagination.currentPage}
                value={todoPagination.currentPage}
                onChange={handleChange}
                color="primary"
                size="large" />

        </>
    )
}

export default SearchedTodoValue;