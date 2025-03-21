import React, { useContext, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ManageVisibilityContext } from '../App';
import CommonButton from './common-component/CommonButton';

function Search({ todo }) {

    const { todoDisplay, setTodoDisplay, searchResult, setSearchResult, displaySearchTodo, setDisplaySearchTodo } = useContext(ManageVisibilityContext);


    const [searchQuery, setSearchQuery] = useState('');
    // const [searchResult, setSearchResult] = useState({ title: '', description: '' });
    // const [displaySearchTodo, setDisplaySearchTodo] = useState(false)


    function debounce(func, delay) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }

    // const filteredTodoItem = (userInput) => {
    //     setSearchQuery(userInput);
    //     const searchTodo = todo.filter((item, i) => {
    //         if (userInput === item.title1) {
    //             setDisplaySearchTodo(true);
    //             return item;
    //         }
    //         return 0;
    //     })
    //     setSearchResult(searchTodo);
    //     console.log('searchTodo', searchTodo);
    // }


    const filteredTodoItem = (userInput) => {
        setSearchQuery(userInput);
        const searchTodo = todo.filter((item, i) => {
            if (userInput === item.title1) {
                setTodoDisplay(false)
                console.log('odoDisplay', todoDisplay)
                setDisplaySearchTodo(true);
                return item;
            }
            else if (userInput === item.status1) {
                setTodoDisplay(false)
                console.log('status', item.status1)
                setDisplaySearchTodo(true);
                return item;
            }
            else if (userInput === item.priority1) {
                setTodoDisplay(false)
                console.log('status', item.status1)
                setDisplaySearchTodo(true);
                return item;
            }

            return console.log(45, 'invalid input')
        })
        setSearchResult(searchTodo);
        if (searchTodo.length === 0) {
            setTodoDisplay(true);
        }
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

                <CommonButton type="button" 
                sx={{ p: '10px' }}  
                ariaLabel="search" 
                onClick={() => dSearch(searchQuery)} 
                icon={<SearchIcon/>} />

            </Paper>


        </>
    )
}

export default Search;