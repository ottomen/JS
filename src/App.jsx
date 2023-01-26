import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import UserList from "./components/pages/UsersListPage";
import StoreContext from "./components/store/store";

function App() {
    const [users, setUsers] = useState([]);
    return (
        <StoreContext.Provider
            value={{
                users,
                setUsers,
            }}
        >
            <Box component="main" sx={{}}>
                <CssBaseline />
                <Container maxWidth="md">
                    <UserList />
                </Container>
            </Box>
        </StoreContext.Provider>
    );
}

export default App;
