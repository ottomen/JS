import { useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteButton from '@mui/icons-material/Delete';
import StoreContext from './../store/store';
import { deleteUser } from './../utils/helpers';

const columns = [
    { field: 'id', headerName: 'ID', width: 70, align: 'center' },
    {
        field: 'name',
        headerName: 'Full name',
        width: 150,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 200,
    },
    {
        field: 'company',
        headerName: 'Company',
        width: 320,
        valueGetter: (params) => {
            return params.value.name;
        },
    },
    {
        field: 'remove',
        headerName: 'Remove',
        width: 80,
        sortable: false,
        resizable: false,
        pinnable: false,
        hideSortIcons: true,
        filterable: false,
        hideable: false,
        align: 'center',
        renderCell: () => {
            return (
                <IconButton
                    color="primary"
                    aria-label="Delete"
                    component="label"
                >
                    <DeleteButton />
                </IconButton>
            );
        },
    },
];

function UsersList({ loading }) {
    const { users, setUsers } = useContext(StoreContext);

    const handleOnCellClick = (cell) => {
        if (cell.field !== 'remove') return;
        setUsers(deleteUser(cell, users));
    };

    return (
        <DataGrid
            initialState={{
                sorting: {
                    sortModel: [{ field: 'id', sort: 'asc' }],
                },
            }}
            loading={loading}
            rows={users}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            disableColumnSelector
            disableColumnMenu
            checkboxSelection={false}
            onCellClick={handleOnCellClick}
        />
    );
}

export default UsersList;
