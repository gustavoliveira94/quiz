import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import Container from '../../styles/main/container';
import Content from '../../styles/main/content';
import Logo from '../../styles/logo';
import Create from '../../styles/create';

// Component
import Questions from '../../components/questions';

const Main = () => {
    return (
        <Container>
            <Logo>
                <Link href="/">
                    <h1>QUIZ</h1>
                </Link>
            </Logo>
            <Content>
                <Questions />
            </Content>
            <Create>
                <p>+</p>
            </Create>
        </Container>
    );
};

export default Main;
