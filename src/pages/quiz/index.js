import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Styles
import Container from '../../styles/quiz/container';
import Content from '../../styles/quiz/content';
import Title from '../../styles/quiz/title';
import Questions from '../../styles/quiz/questions';

// Component
import Top from '../../components/top';

const Quiz = () => {
    const quizId = useSelector(({ quiz }) => quiz);
    const id = useParams();

    const quiz = quizId.quiz.filter(q => String(q._id) === id.id);
    console.log(quiz[0].questions);

    return (
        <>
            <Top />
            <Container>
                <Content>
                    <Title>
                        {quiz.map(q => q.name)} <span>Respostas certas: 0</span>
                    </Title>
                    <Questions>
                        {quiz[0].questions.map(q => (
                            <>
                                <p>{q.question}</p>
                                <p>{q.answers}</p>
                            </>
                        ))}
                    </Questions>
                </Content>
            </Container>
        </>
    );
};

export default Quiz;
