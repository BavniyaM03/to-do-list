import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SearchedTodoValue from './SearchedTodoValue';

function Search({ todo }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState({title: '', description: ''});
    const [displaySearchTodo, setDisplaySearchTodo] = useState(false)

    function debounce(func, delay) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }

    const filteredTodoItem = (userInput) => {
        setSearchQuery(userInput);
        const searchTodo = todo.filter((item, i) => {
            if (userInput === item.title1) {
                setDisplaySearchTodo(true);
                return item;
            }
            return 0;
        })
        setSearchResult(searchTodo);
        console.log('searchTodo', searchTodo);
    }

    console.log('searchResult', searchResult)

    const dSearch = debounce(filteredTodoItem, 600);

    return (
        <>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    onChange={(e) => dSearch(e.target.value)}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search To Do Title"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />

                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon onClick={() => dSearch(searchQuery)} />
                </IconButton>
            </Paper>

            <SearchedTodoValue searchResult={searchResult} displaySearchTodo={displaySearchTodo}/>
        </>
    )
}

export default Search;