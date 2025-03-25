import React, { useContext, useEffect, useState } from 'react';
import { AllTodoContext, CheckedTodoContext, InputContext, ManageVisibilityContext, PaginationContext, popupContext } from '../App';
import CommonTodoList from './common-component/CommonTodoList';
import CommonPagination from './common-component/CommonPagination';
import DeleteIcon from '@mui/icons-material/Delete';
import { Edit } from '@mui/icons-material';
import CommonTodoAddForm from './common-component/CommonTodoAddForm';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';




function SearchedTodoValue({ id, setId,  editTodoTitleDescriptionStatus, seteditTodoTitleDescriptionStatus }) {

    const { todoDisplay, searchResult, displaySearchTodo } = useContext(ManageVisibilityContext);
    const { valueStatus, valuePriority } = useContext(InputContext)
    const { allCheckedTodo, setAllCheckedTodo, displayDeleteButton, setDisplayDeleteButton, checked, setChecked } = useContext(CheckedTodoContext);
    const [dense, setDense] = React.useState(false);
    const { todo, setTodo, sliceArray, setSliceArray } = useContext(AllTodoContext)
    const { confirmation, setConfirmation } = useContext(popupContext)
    const { todoPagination, setTodoPagination } = useContext(PaginationContext);

    console.log(confirmation)
    //DELETE EDIT LOGIC ON SEARCH

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


    //PAGINATION LOGIC

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
                (sliceArray.map((item, index) => (
                    id === index ? (

                        <div key={index}>

                            <CommonTodoAddForm onSubmit={handleEditSubmit} idTitle="outlined-basic" labelTitle="Title" variantTitle="outlined" nameTitle="editTodoTitleDescriptionStatusValue" valueTitle={editTodoTitleDescriptionStatus.editTodoTitleDescriptionStatusValue} onChangeTitle={handleEditTodo} sxTitle={{ minWidth: '25%' }} requiredTitle={true} idDescription="outlined-multiline-static" labelDescription="Description" variantLabelDescription="outlined" rowsDescription={4} nameDescription="editDescription" valueDescription={editTodoTitleDescriptionStatus.editDescription} onChangeDescription={handleEditTodo} sxDescription={{ minWidth: '35%' }} requiredDescription={true} sxStatus={{ minWidth: 120, display: 'contents' }} sxFormControlStatus={{ minWidth: '15%' }} nameStatus="editStatus" idStatus="demo-simple-select-label" labelIdStatus="demo-simple-select-label" idSelectStatus="demo-simple-select" valueStatus={editTodoTitleDescriptionStatus.editStatus} labelStatus="Status" onChangeStatus={handleEditTodo} valueMenuItemStatus={valueStatus} sxPriority={{ minWidth: 120, display: 'contents' }} sxFormControlPriority={{ minWidth: '15%' }} namePriority="editPriority" idPriority="demo-simple-select-label" labelIdPriority="demo-simple-select-label" idSelectPriority="demo-simple-select" valuePriority={editTodoTitleDescriptionStatus.editPriority} labelPriority="Priority" onChangePriority={handleEditTodo} valueMenuItemPriority={valuePriority} edge="end" ariaLabel="" typeButton="submit" icon={<CheckCircleIcon type='sumbit' fontSize="large" />} />

                        </div>) : (


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
                            // iconCheckBox={<Checkbox check={checked} idx={index} sx={{ color: '#ced4da' }} onChange={(e) => handleCheckedTodo(e, index)} />}
                            // onCheckBox={() => handleCheckedTodo(index)}
                            />
                            {/* <Checkbox check={checked} idx={index} onChange={(e)=>handleCheckedTodo(e, index)}/> */}
                            {/* </SortableContext> */}

                        </div>
                        // </DndContext>

                    )
                    // sliceArray.map((item, i) => (
                    // <div key={i}>

                    /* <CommonTodoList
                        value={item}
                        edge="end"
                        ariaLabel="delete"
                        onDelete={() => deleteToDo(index)}
                        onEdit={() => findEditItemInList(item, index)} /> */
                    // <CommonTodoList
                    //     id={item.id}
                    //     value={item}
                    //     key={item.id}
                    //     edge="end"
                    //     ariaLabel="delete"
                    //     iconDelete={<DeleteIcon />}
                    //     onDelete={() => deleteToDo(index)}
                    //     iconEdit={<Edit />}
                    //     onEdit={() => findEditItemInList(item, index)} />
                    // </div>
                    // ))
                )))
            )}




            <CommonPagination
                sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', padding: 5 }}
                count={todoPagination.totalPages}
                defaultValue={1}
                page={todoPagination.currentPage}
                value={todoPagination.currentPage}
                onChange={handleChange}
                color="primary"
                size="large" />

        </>
    )
}

export default SearchedTodoValue;