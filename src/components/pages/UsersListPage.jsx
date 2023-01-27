import { useContext, useEffect, useState } from 'react';
import { Box, Button, Grid, Container } from '@mui/material';
import api from './../../api/axios';
import UsersList from '../elements/UsersList';
import CreateUser from '../elements/CreateUser';
import StoreContext from './../store/store';
import Hero from './../elements/Hero';
import { addUser } from './../utils/helpers';

function UsersListPage() {
    const [open, setOpen] = useState(false);
    const { users, setUsers } = useContext(StoreContext);
    const [loading, setLoading] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };

    const handleCreateNewUser = async (data) => {
        try {
            const response = await addUser(data, users); //Dummy fake promise with POST req
            setUsers(response);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await api.get('/users');
                setUsers(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        };

        fetchData();
    }, [setUsers]);

    return (
        <>
            <Hero />
            <Container maxWidth="md">
                <Box sx={{ height: 700, width: '100%' }}>
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Grid item xs={8}>
                            <h2>User List</h2>
                        </Grid>
                        <Grid item xs={4} justifyContent="flex-end">
                            <Grid container justifyContent="flex-end">
                                <Button
                                    variant="contained"
                                    onClick={handleOpen}
                                >
                                    Create user
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <UsersList loading={loading} />
                    <CreateUser
                        open={open}
                        handleClose={handleClose}
                        handleCreateNewUser={handleCreateNewUser}
                    />
                </Box>
            </Container>
        </>
    );
}

export default UsersListPage;
