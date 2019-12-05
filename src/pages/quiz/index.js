import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Styles
import Container from '../../styles/quiz/container';
import Content from '../../styles/quiz/content';

// Component
import Top from '../../components/top';

const Quiz = () => {
    const quizId = useSelector(({ quiz }) => quiz);
    const id = useParams();
    console.log(quizId.quiz.filter(q => String(q._id) === id.id));

    const quiz = quizId.quiz.filter(q => String(q._id) === id.id);

    return (
        <>
            <Top />
            <Container>
                <Content>{quiz.map(q => q.name)}</Content>
            </Container>
        </>
    );
};

export default Quiz;
