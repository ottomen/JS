import { useContext, useEffect, useState } from 'react'
import { Suspense } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import UsersList from '../elements/UsersList'
import CreateUser from '../elements/CreateUser'
import StoreContext from './../store/store'
import api from './../../api/axios'

function UsersListPage() {
    const [open, setOpen] = useState(false)
    const { users, setUsers } = useContext(StoreContext)
    const [loading, setLoading] = useState(true)
    const handleOpen = () => setOpen(true)
    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const { data: response } = await api.get('/users')
                setUsers(response)
            } catch (error) {
                console.error(error.message)
            }
            setLoading(false)
        }

        fetchData()
    }, [])

    return (
        <Box sx={{ height: 700, width: '100%' }}>
            <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
            >
                <Grid item xs={8}>
                    <h1>User List</h1>
                </Grid>
                <Grid item xs={4} justifyContent="flex-end">
                    <Grid container justifyContent="flex-end">
                        <Button variant="contained" onClick={handleOpen}>
                            Create user
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <UsersList loading={loading} />
            <CreateUser open={open} handleClose={handleClose} />
        </Box>
    )
}

export default UsersListPage
