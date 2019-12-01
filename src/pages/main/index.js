import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import Container from '../../styles/main/container';
import Content from '../../styles/main/content';
import Create from '../../styles/main/create';

// Component
import Questions from '../../components/questions';
import Top from '../../components/top';

const Main = () => {
    return (
        <Container>
            <Top />
            <Content>
                <Questions />
            </Content>
            <Create>
                <Link to="/create">
                    <p>+</p>
                </Link>
            </Create>
        </Container>
    );
};

export default Main;
