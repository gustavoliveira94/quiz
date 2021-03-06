import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Styles
import Container from '../../styles/main/container';
import Content from '../../styles/main/content';
import Create from '../../styles/main/create';

// Component
import Questions from '../../components/questions';
import Top from '../../components/top';

const Main = () => {
    const renderQuiz = useSelector(({ quiz }) => quiz);
    return (
        <>
            <Top />
            <Container>
                <Content data-testid="quiz">
                    {renderQuiz &&
                        renderQuiz.quiz.map(quiz => (
                            <Questions key={quiz._id} data={quiz} />
                        ))}
                </Content>
                <Create>
                    <Link to="/create" data-testid="create">
                        <p>+</p>
                    </Link>
                </Create>
            </Container>
        </>
    );
};

export default Main;
