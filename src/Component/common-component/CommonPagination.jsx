import PaginationButton from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function CommonPagination({sx, count, page, value, onChange, color, size, defaultValue}) {
    return (
        <>
            <Stack spacing={2} >
                <PaginationButton
                    sx={sx}
                    count={count}
                    page={page}
                    value={value}
                    onChange={onChange}
                    color="primary"
                    size="large" 
                    defaultValue={defaultValue}/>
            </Stack>
        </>
    )
}

export default CommonPagination;