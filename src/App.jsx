import { useState, useMemo } from 'react';
import Layout from './components/templates/Layout';
import UserList from './components/pages/UsersListPage';
import StoreContext from './components/store/store';

function App() {
    const [users, setUsers] = useState([]);
    //Some memoization to not to re-render the root component
    const value = useMemo(() => {
        return {
            users,
            setUsers,
        };
    }, [users]);
    return (
        <StoreContext.Provider value={value}>
            <Layout>
                <UserList />
            </Layout>
        </StoreContext.Provider>
    );
}

export default App;
