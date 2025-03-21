import CommonButton from "./CommonButton"
import CommonDropDown from "./CommonDropDown"
import CommonTextField from "./CommonTextField"

const CommonTodoAddForm = ({ onSubmit, idTitle, labelTitle, variantLabelTite, nameTitle, valueTitle, onChangeTitle, sxTitle, requiredTitle, idDescription, labelDescription, variantLabelDescription, rowsDescription, nameDescription, valueDescription, onChangeDescription, sxDescription, requiredDescription, sxStatus, sxFormControlStatus, nameStatus, idStatus, labelIdStatus, idSelectStatus, valueStatus, labelStatus, onChangeStatus, valueMenuItemStatus, sxPriority, sxFormControlPriority, namePriority, idPriority, labelIdPriority, idSelectPriority, valuePriority, labelPriority, onChangePriority, valueMenuItemPriority, edge, ariaLabel, typeButton, icon }) => {
    return (
        <>
            <form action="" onSubmit={onSubmit}  >

                <CommonTextField
                    id={idTitle}
                    label={labelTitle}
                    variant={variantLabelTite}
                    name={nameTitle}
                    value={valueTitle}
                    onChange={onChangeTitle}
                    sx={sxTitle}
                    required={requiredTitle} />

                <CommonTextField
                    id={idDescription}
                    label={labelDescription}
                    variant={variantLabelDescription}
                    multiline
                    rows={rowsDescription}
                    name={nameDescription}
                    value={valueDescription}
                    onChange={onChangeDescription}
                    sx={sxDescription}
                    required={requiredDescription} />

                <CommonDropDown
                    sx={sxStatus}
                    sxFormControl={sxFormControlStatus}
                    name={nameStatus}
                    id={idStatus}
                    labelId={labelIdStatus}
                    idSelect={idSelectStatus}
                    valueSelect={valueStatus}
                    labelSelect={labelStatus}
                    onChange={onChangeStatus}
                    valueMenuItem={valueMenuItemStatus} />

                <CommonDropDown
                    sx={sxPriority}
                    sxFormControl={sxFormControlPriority}
                    name={namePriority}
                    id={idPriority}
                    labelId={labelIdPriority}
                    idSelect={idSelectPriority}
                    valueSelect={valuePriority}
                    labelSelect={labelPriority}
                    onChange={onChangePriority}
                    valueMenuItem={valueMenuItemPriority} />

                <CommonButton
                    edge={edge}
                    ariaLabel={ariaLabel}
                    typeButton={typeButton}
                    icon={icon} />
            </form>
        </>
    )
}

export default CommonTodoAddForm

