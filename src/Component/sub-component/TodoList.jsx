import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import { List } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { AllTodoContext, CheckedTodoContext, InputContext, ManageVisibilityContext, popupContext } from '../../App';
import SearchedTodoValue from '../SearchedTodoValue';
import DeleteBulk from '../DeleteBulk';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CommonTodoList from '../common-component/CommonTodoList';
import { ConfirmationNumber, Edit } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import CommonTodoAddForm from '../common-component/CommonTodoAddForm';
import Pagination from './Pagination';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { DndContext } from '@dnd-kit/core';
import CommonDialogBox from '../common-component/CommonDialogBox';



const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

function TodoList() {
    const { todoDisplay, searchResult, displaySearchTodo } = useContext(ManageVisibilityContext);
    const { valueStatus, valuePriority } = useContext(InputContext)
    const [id, setId] = useState();
    const [editTodoTitleDescriptionStatus, seteditTodoTitleDescriptionStatus] = useState({ editTodoTitleDescriptionStatusValue: '', editDescription: '', editStatus: '', editPriority: '' })
    const { allCheckedTodo, setAllCheckedTodo, displayDeleteButton, setDisplayDeleteButton, checked, setChecked } = useContext(CheckedTodoContext);
    const [dense, setDense] = React.useState(false);
    const { todo, setTodo, sliceArray, setSliceArray } = useContext(AllTodoContext)
    const {confirmation, setConfirmation} = useContext(popupContext)
     
    // const [confirmation, setConfirmation] = useState({
    //     open: false,
    //     deleteIndex: null
    // })

    console.log(39, confirmation);

    const deleteToDo = (index) => {
        setConfirmation({ ...confirmation, open: true, deleteIndex: index })
    }

    const confirmationDelete = (e) => {
        setConfirmation({ ...confirmation, open: false })
        if (e.target.value === 'true') {
            const finalTodo = sliceArray.filter((item, i) =>
                confirmation.deleteIndex != i
            )
            setSliceArray(finalTodo);
        }
        console.log(confirmation)
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
        const updatedData = sliceArray.filter((item, i) => {
            if (id === i) {
                item.title1 = editTodoTitleDescriptionStatus.editTodoTitleDescriptionStatusValue;
                item.description1 = editTodoTitleDescriptionStatus.editDescription;
                item.status1 = editTodoTitleDescriptionStatus.editStatus;
                item.priority1 = editTodoTitleDescriptionStatus.editPriority;
            }
            return item;
        })
        setSliceArray(updatedData);
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

    const handleCheckedTodo = (e, idx) => {
        setChecked(e.target.checked)
        setDisplayDeleteButton(true)
        const checkTodo = todo[idx]
        console.log(checkTodo)
        setAllCheckedTodo([...allCheckedTodo, checkTodo])
    }

    console.log('checked', checked)



    return (
        <>
            <Demo style={{ backgroundColor: '#ced4da' }}>
                <List dense={dense}>

                    {displayDeleteButton && <DeleteBulk setDisplayDeleteButton={setDisplayDeleteButton} displayDeleteButton={displayDeleteButton} />}

                    {sliceArray.map((item, index) => (
                        id === index ? (

                            <div key={index}>

                                <CommonTodoAddForm onSubmit={handleEditSubmit} idTitle="outlined-basic" labelTitle="Title" variantTitle="outlined" nameTitle="editTodoTitleDescriptionStatusValue" valueTitle={editTodoTitleDescriptionStatus.editTodoTitleDescriptionStatusValue} onChangeTitle={handleEditTodo} sxTitle={{ minWidth: '25%' }} requiredTitle={true} idDescription="outlined-multiline-static" labelDescription="Description" variantLabelDescription="outlined" rowsDescription={4} nameDescription="editDescription" valueDescription={editTodoTitleDescriptionStatus.editDescription} onChangeDescription={handleEditTodo} sxDescription={{ minWidth: '35%' }} requiredDescription={true} sxStatus={{ minWidth: 120, display: 'contents' }} sxFormControlStatus={{ minWidth: '15%' }} nameStatus="editStatus" idStatus="demo-simple-select-label" labelIdStatus="demo-simple-select-label" idSelectStatus="demo-simple-select" valueStatus={editTodoTitleDescriptionStatus.editStatus} labelStatus="Status" onChangeStatus={handleEditTodo} valueMenuItemStatus={valueStatus} sxPriority={{ minWidth: 120, display: 'contents' }} sxFormControlPriority={{ minWidth: '15%' }} namePriority="editPriority" idPriority="demo-simple-select-label" labelIdPriority="demo-simple-select-label" idSelectPriority="demo-simple-select" valuePriority={editTodoTitleDescriptionStatus.editPriority} labelPriority="Priority" onChangePriority={handleEditTodo} valueMenuItemPriority={valuePriority} edge="end" ariaLabel="" typeButton="submit" icon={<CheckCircleIcon type='sumbit' fontSize="large" />} />

                            </div>) : (

                            (todoDisplay ? (
                                // <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners} >
                                <div>

                                    {/* <SortableContext items={sliceArray} strategy={verticalListSortingStrategy} > */}
                                    <CommonTodoList
                                        id={item.id}
                                        value={item}
                                        key={item.id}
                                        edge="end"
                                        ariaLabel="delete"
                                        iconDelete={<DeleteIcon />}
                                        onDelete={() => deleteToDo(index)}
                                        iconEdit={<Edit />}
                                        onEdit={() => findEditItemInList(item, index)}
                                        iconCheckBox={<Checkbox check={checked} idx={index} sx={{ color: '#ced4da' }} onChange={(e) => handleCheckedTodo(e, index)} />}
                                    // onCheckBox={() => handleCheckedTodo(index)}
                                    />
                                    {/* <Checkbox check={checked} idx={index} onChange={(e)=>handleCheckedTodo(e, index)}/> */}
                                    {/* </SortableContext> */}

                                </div>
                                // </DndContext>

                            ) : (null))
                        )))}


                    {/*   SEARCH TODO VALUE WILL SHOW HERE */}
                    <SearchedTodoValue id={id} setId={setId} searchResult={searchResult} displaySearchTodo={displaySearchTodo} editTodoTitleDescriptionStatus={editTodoTitleDescriptionStatus} seteditTodoTitleDescriptionStatus={seteditTodoTitleDescriptionStatus } />
                </List>

                <CommonDialogBox open={confirmation.open} handleChange={(e) => { confirmationDelete(e) }} />
                {todoDisplay && <Pagination />}
            </Demo>
        </>
    )
}


export default TodoList;
