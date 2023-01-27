import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Footer from './../elements/Footer';

function Layout({ children }) {
    return (
        <>
            <Box component="main" sx={{}}>
                <CssBaseline />
                {children}
            </Box>
            <Footer />
        </>
    );
}

export default Layout;
