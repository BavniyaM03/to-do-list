import React, { useContext, useEffect, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { AllTodoContext, ManageVisibilityContext, PaginationContext } from '../App';
import { styled, alpha } from '@mui/material/styles';
import CommonDropDown from './common-component/CommonDropDown';


function Search() {

    const { todoDisplay, setTodoDisplay, searchResult, setSearchResult, setDisplaySearchTodo } = useContext(ManageVisibilityContext);
    const [searchQuery, setSearchQuery] = useState('');
    const { todo, setTodo, sliceArray} = useContext(AllTodoContext);
    const {todoPagination, setTodoPagination} = useContext(PaginationContext);

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
            if (userInput) {
                let arrayOfPropertiesValue = Object.values(item)
                let descriptionRemove = arrayOfPropertiesValue.filter((item, index) => index !== 2)
                return descriptionRemove.join('')
                    .toLowerCase()
                    .includes(userInput.toLowerCase());
            }
            else {
                console.log('Invalid')
            }
        })
        setTodoDisplay(false)
        setDisplaySearchTodo(true);
        setSearchResult(searchTodo);
        setTodoPagination({...todoPagination,  currentPage: 1})
    }

    // console.log('search item', searchTodo)
    console.log('search item 87', searchResult)

    console.log(todo, setTodo);
    const dSearch = debounce(filteredTodoItem, 50);

    return (
        <>

            <input value={searchQuery} onChange={(e) => dSearch(e.target.value)} />
        </>
    )
}

export default Search;