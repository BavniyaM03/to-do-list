import React, { useContext, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ManageVisibilityContext } from '../App';
import { styled, alpha } from '@mui/material/styles';


function Search({ todo }) {

    const { todoDisplay, setTodoDisplay, setSearchResult, setDisplaySearchTodo } = useContext(ManageVisibilityContext);
    const [searchQuery, setSearchQuery] = useState('');

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
                width: '12ch',
                '&:focus': {
                    width: '20ch',
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

    const dSearch = debounce(filteredTodoItem, 1000);

    return (
        <>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon onClick={() => dSearch(searchQuery)} />
                </SearchIconWrapper>
                <StyledInputBase
                    onChange={(e) => dSearch(e.target.value)}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        </>
    )
}

export default Search;