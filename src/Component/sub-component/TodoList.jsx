import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import { List } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { AllTodoContext, CheckedTodoContext, InputContext, ManageVisibilityContext } from '../../App';
import SearchedTodoValue from '../SearchedTodoValue';
import DeleteBulk from '../DeleteBulk';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CommonTodoList from '../common-component/CommonTodoList';
import { CheckBox, Edit } from '@mui/icons-material';
import CommonTodoAddForm from '../common-component/CommonTodoAddForm';

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

function TodoList() {
    const { todoDisplay, searchResult, displaySearchTodo } = useContext(ManageVisibilityContext);
    const { valueStatus, valuePriority } = useContext(InputContext)
    const [id, setId] = useState();
    const [editTodoTitleDescriptionStatus, seteditTodoTitleDescriptionStatus] = useState({ editTodoTitleDescriptionStatusValue: '', editDescription: '', editStatus: '', editPriority: '' })
    const { allCheckedTodo, setAllCheckedTodo } = useContext(CheckedTodoContext);
    const [dense, setDense] = React.useState(false);
    const [displayDeleteButton, setDisplayDeleteButton] = useState(false);
    const { todo, setTodo } = useContext(AllTodoContext)
    const [checked, setChecked] = useState(false);

    const deleteToDo = (index) => {
        const result = confirm('Are you sure you want to delete');
        if (result === true) {
            const finalTodo = todo.filter((item, i) =>
                index != i
            )
            setTodo(finalTodo);
            alert('are you sure you want to delete')
        }
    }

    const findEditItemInList = (item, index) => {
        setId(index);
        seteditTodoTitleDescriptionStatus({
            editTodoTitleDescriptionStatusValue: item.title1,
            editDescription: item.description1,
            editStatus: item.status1, editPriority: item.priority1
        })
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        console.log(41, id)
        const updatedData = todo.filter((item, i) => {
            if (id === i) {
                item.title1 = editTodoTitleDescriptionStatus.editTodoTitleDescriptionStatusValue;
                item.description1 = editTodoTitleDescriptionStatus.editDescription;
                item.status1 = editTodoTitleDescriptionStatus.editStatus;
                item.priority1 = editTodoTitleDescriptionStatus.editPriority;
            }
            return item;
        })
        setTodo(updatedData);
        setId();
    }

    const handleEditTodo = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value)
        seteditTodoTitleDescriptionStatus((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleCheckedTodo = (idx) => {
        setChecked(true)
        setDisplayDeleteButton(true)
        const checkTodo = todo[idx]
        console.log(checkTodo)
        setAllCheckedTodo([...allCheckedTodo, checkTodo])
    }

    return (
        <>
            <Demo>
                <List dense={dense}>

                    {/* Delete Button Will be Show Here */}
                    {displayDeleteButton && <DeleteBulk setDisplayDeleteButton={setDisplayDeleteButton} />}

                    {todo.map((item, index) => (
                        id === index ? (

                            <div key={index}>

                                <CommonTodoAddForm onSubmit={handleEditSubmit} idTitle="outlined-basic" labelTitle="Title" variantTitle="outlined" nameTitle="editTodoTitleDescriptionStatusValue" valueTitle={editTodoTitleDescriptionStatus.editTodoTitleDescriptionStatusValue} onChangeTitle={handleEditTodo} sxTitle={{ minWidth: '25%' }} idDescription="outlined-multiline-static" labelDescription="Description" variantLabelDescription="outlined" rowsDescription={4} nameDescription="editDescription" valueDescription={editTodoTitleDescriptionStatus.editDescription} onChangeDescription={handleEditTodo} sxDescription={{ minWidth: '35%' }} sxStatus={{ minWidth: 120, display: 'contents' }} sxFormControlStatus={{ minWidth: '15%' }} nameStatus="editStatus" idStatus="demo-simple-select-label" labelIdStatus="demo-simple-select-label" idSelectStatus="demo-simple-select" valueStatus={editTodoTitleDescriptionStatus.editStatus} labelStatus="Status" onChangeStatus={handleEditTodo} valueMenuItemStatus={valueStatus} sxPriority={{ minWidth: 120, display: 'contents' }} sxFormControlPriority={{ minWidth: '15%' }} namePriority="editPriority" idPriority="demo-simple-select-label" labelIdPriority="demo-simple-select-label" idSelectPriority="demo-simple-select" valuePriority={editTodoTitleDescriptionStatus.editPriority} labelPriority="Priority" onChangePriority={handleEditTodo} valueMenuItemPriority={valuePriority} edge="end" ariaLabel="" typeButton="submit" icon={<CheckCircleIcon type='sumbit' fontSize="large" />} />

                            </div>) : (

                            (todoDisplay ? (
                                <>
                                    <CommonTodoList
                                        value={item}
                                        key={index}
                                        edge="end"
                                        ariaLabel="delete"
                                        iconDelete={<DeleteIcon />}
                                        onDelete={() => deleteToDo(index)}
                                        iconEdit={<Edit />}
                                        onEdit={() => findEditItemInList(item, index)}
                                        iconCheckBox={<CheckBox />}
                                        onCheckBox={() => handleCheckedTodo(index)}
                                    />
                                </>

                            ) : (null))
                        )))}
                    {/*   SEARCH TODO VALUE WILL SHOW HERE */}
                    <SearchedTodoValue searchResult={searchResult} displaySearchTodo={displaySearchTodo} />
                </List>
            </Demo>
        </>
    )
}


export default TodoList;
