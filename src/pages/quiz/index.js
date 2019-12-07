/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Styles
import Container from '../../styles/quiz/container';
import Content from '../../styles/quiz/content';
import Title from '../../styles/quiz/title';
import Questions from '../../styles/quiz/questions';
import ContentQuestions from '../../styles/quiz/contentquestions';
import Answer from '../../styles/quiz/answer';
import ContentAnswer from '../../styles/quiz/contentanswer';

// Component
import Top from '../../components/top';

const Quiz = () => {
    const quizId = useSelector(({ quiz }) => quiz);
    console.log(quizId);
    const [disabled, setDisabled] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [correct, setCorrect] = useState([]);
    const [incorrect, setIncorrect] = useState([]);
    const [count, setCount] = useState(0);
    const id = useParams();

    // Quiz Filter ID
    const quiz = quizId.quiz.filter(q => String(q._id) === id.id);

    // Correct Answers
    const verifyAnswer = (corrects, answer, question) => {
        setAnswers([...answers, answer]);

        if (corrects === answer.name) {
            setCount(count + 1);
            setCorrect([...correct, answer]);
            setDisabled([...disabled, question]);
        } else {
            setIncorrect([...incorrect, answer]);
            setDisabled([...disabled, question]);
        }
    };

    return (
        <>
            <Top />
            <Container>
                <Content>
                    <Title>
                        <span>
                            {quiz && quiz[0].questions.length > 1
                                ? 'Perguntas:'
                                : 'Pergunta:'}{' '}
                            {quiz && quiz[0].questions.length}
                        </span>
                        <h2 title={quiz && quiz.map(q => q.name)}>
                            {quiz && quiz.map(q => q.name)}
                        </h2>{' '}
                        <span>R. certas: {count}</span>
                    </Title>
                    <Questions>
                        {quiz &&
                            quiz[0].questions.map(q => (
                                <ContentQuestions key={q.question}>
                                    <h3>Pergunta: {q.question}</h3>
                                    <br />
                                    {q.answers.map((answer, index) => (
                                        <ContentAnswer key={index}>
                                            <Answer
                                                data-testid="option"
                                                type="button"
                                                correct={correct.find(
                                                    c => c._id === answer._id
                                                )}
                                                incorrect={incorrect.find(
                                                    c => c._id === answer._id
                                                )}
                                                disabled={disabled.find(
                                                    a => a === q.question
                                                )}
                                                onClick={() =>
                                                    verifyAnswer(
                                                        q.correct,
                                                        answer,
                                                        q.question
                                                    )
                                                }
                                            >
                                                <p>{answer.name}</p>
                                            </Answer>
                                        </ContentAnswer>
                                    ))}
                                </ContentQuestions>
                            ))}
                    </Questions>
                </Content>
            </Container>
        </>
    );
};

export default Quiz;
