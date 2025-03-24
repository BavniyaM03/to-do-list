import React, { memo } from 'react'
import { useContext, useEffect, useState } from "react";
import { AllTodoContext } from "../../App";
import PaginationButton from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Pagination = memo(function Pagination() {
    const { todo, sliceArray, setSliceArray } = useContext(AllTodoContext);

    const [todoPagination, setTodoPagination] = useState(
        {
            todoPerPage: 5,
            currentPage: 1,
            totalPages: ''
        })

    useEffect(() =>
        setTodoPagination({
            ...todoPagination,
            totalPages: Math.ceil(todo.length / todoPagination.todoPerPage)
        }), [todo]);

    const lastIndex = todoPagination.currentPage * todoPagination.todoPerPage;

    const startIndex = lastIndex - todoPagination.todoPerPage;

    const temp = todo.slice(startIndex, lastIndex);

    useEffect(() =>
        setSliceArray(temp),
        [todoPagination.currentPage]);

    const handleChange = (event, value) => {
        setTodoPagination({
            ...todoPagination,
            currentPage: value
        })
    };

    return (
        <Stack spacing={2} >
            <PaginationButton
                sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', padding: 5 }}
                count={todoPagination.totalPages}
                page={todoPagination.currentPage}
                value={todoPagination.currentPage}
                onChange={handleChange}
                color="primary"
                size="large" />
        </Stack>
    );
})

export default Pagination;
