import styled from 'styled-components';
import Container from '@mui/material/Container';

import image from './../../assets/img.jpg';

const Wrap = styled.div`
    position: relative;
    margin-bottom: 30px;
    clip-path: polygon(0 0%, 100% 0, 100% 90%, 0 100%);
`;

const Inner = styled.div`
    position: relative;
    min-height: 220px;
    z-index: 3;
    padding: 90px 0;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #3d4246;
    opacity: 0.3;
    z-index: 2;
`;

const Title = styled.h1`
    font-size: 2em;
    line-height: 1.2;
    color: #fff;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Image = styled.img`
    display: block;
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
`;

function Hero() {
    return (
        <Wrap>
            <Image src={image} loading="lazy" alt="" />
            <Overlay />
            <Inner>
                <Container maxWidth="md">
                    <Title>Fancy heading with some custom styles</Title>
                </Container>
            </Inner>
        </Wrap>
    );
}

export default Hero;
