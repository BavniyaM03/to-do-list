import React, { useContext, useEffect, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { AllTodoContext, ManageVisibilityContext } from '../App';
import { styled, alpha } from '@mui/material/styles';
import CommonDropDown from './common-component/CommonDropDown';


function Search() {

    const { todoDisplay, setTodoDisplay, setSearchResult, setDisplaySearchTodo } = useContext(ManageVisibilityContext);
    const [searchQuery, setSearchQuery] = useState('');
    const { todo, setTodo, sliceArray} = useContext(AllTodoContext);

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '30ch',
                '&:focus': {
                    width: '40ch',
                },
            },
        },
    }));

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

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
    }

    console.log(todo, setTodo);
    const dSearch = debounce(filteredTodoItem, 50);

    return (
        <>
            {/* <Search > */}
                {/* <SearchIconWrapper >
                    <SearchIcon onChange={(e) => dSearch(e.target.value)} />
                </SearchIconWrapper>  */}
                {/* <StyledInputBase
                    onChange={(e) => dSearch(e.target.value)}
                    // onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                /> */}
                {/* <input value={searchQuery} onChange={(e) => dSearch(e.target.value)} /> */}
            {/* </Search> */}


            <input value={searchQuery} onChange={(e) => dSearch(e.target.value)} />
        </>
    )
}

export default Search;