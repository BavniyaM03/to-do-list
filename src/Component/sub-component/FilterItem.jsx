import { useContext, useState } from "react"
import CommonDropDown from "../common-component/CommonDropDown"
import { AllTodoContext, ManageVisibilityContext } from "../../App";

const filterByStatus= ["Not Started", "In Progress", "Completed", "On Hold", "Cancelled"]
const filterByPriority= ["Critical", "High", "Medium", "Low", "None"]

function FilterItem() {
    const { todoDisplay, setTodoDisplay, setSearchResult, setDisplaySearchTodo } = useContext(ManageVisibilityContext);
    const [searchQuery, setSearchQuery] = useState('');
    const { todo, setTodo } = useContext(AllTodoContext);

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

    const dSearch = debounce(filteredTodoItem, 50);

    return (
        <>
           <div style={{display : 'flex'}}>
           <CommonDropDown valueMenuItem={filterByStatus} labelSelect="Filter By Status" onChange={(e) => dSearch(e.target.value)} sx={{ marginTop : 5, marginLeft : 5, display : 'inline'}} />
           <CommonDropDown valueMenuItem={filterByPriority} labelSelect="Filter By Priority" onChange={(e) => dSearch(e.target.value)} sx={{ marginTop : 5, marginLeft : 0}} />
           </div>
        </>
    )
}
export default FilterItem