import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Wrap = styled.footer`
    margin-top: 180px;
    padding: 20px 0;
`;

function Footer() {
    return (
        <Wrap>
            <Container maxWidth="md">
                <Typography variant="subtitle1" align="center" gutterBottom>
                    Artur Shevchenko, 2023
                </Typography>
            </Container>
        </Wrap>
    );
}

export default Footer;
