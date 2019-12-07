/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Styles
import Form from '../../styles/create/form';
import Input from '../../styles/create/input';
import Answers from '../../styles/create/answers';
import Action from '../../styles/create/action';
import ContentActions from '../../styles/create/contentactions';
import Add from '../../styles/create/add';
import ContentAnswers from '../../styles/create/contentanswers';

// Actions
import { setQuiz } from '../../actions';

const FormCreate = () => {
    const dispatch = useDispatch();

    const [error, setError] = useState('');

    const [info, setInfo] = useState({
        name: '',
        description: '',
    });

    const [questions, setQuestions] = useState({
        question: '',
        textAnswers: '',
        answers: [],
        correct: '',
    });

    const [more, setMore] = useState({
        add: [],
    });

    const handleAnswers = e => {
        setQuestions({ ...questions, textAnswers: e.target.value });
    };

    const createAnswers = e => {
        if (questions.textAnswers.trim()) {
            setQuestions({
                ...questions,
                answers: [
                    ...questions.answers,
                    {
                        _id: Math.floor(
                            Math.random() * 132156102364564132132456
                        ),
                        name: questions.textAnswers,
                    },
                ],
            });
        }
        e.preventDefault();
    };

    const resetForm = () => {
        setQuestions({
            ...questions,
            question: '',
            answers: [],
            textAnswers: '',
            correct: '',
        });
    };

    const createMoreAnswers = e => {
        e.preventDefault();
        if (
            questions.answers.length >= 4 &&
            questions.correct &&
            questions.question
        ) {
            resetForm();
            setMore({
                ...more,
                add: [
                    ...more.add,
                    {
                        answers: questions.answers,
                        correct: questions.correct,
                        question: questions.question,
                    },
                ],
            });
            setError('');
        }

        if (!questions.question) {
            setError('Por favor, adicione uma pergunta!');
        }

        if (!questions.correct) {
            setError('Por favor, adicione uma resposta correta!');
        }

        if (questions.answers.length < 4) {
            setError('Por favor, adicione pelo menos 4 respostas!');
        }
    };

    const createQuiz = e => {
        e.preventDefault();
        if (more.add.length < 1) {
            setError('Por favor, adicione pelo menos 1 pergunta!');
        }
        dispatch(
            setQuiz({
                name: info.name,
                description: info.description,
                questions: more.add,
            })
        );
        window.location = '/';
    };

    return (
        <Form>
            <label htmlFor="name">Nome:</label>
            <Input
                data-testid="name"
                name="name"
                required
                onChange={e => setInfo({ ...info, name: e.target.value })}
            />
            <label htmlFor="description">Descrição:</label>
            <Input
                data-testid="description"
                name="description"
                required
                onChange={e =>
                    setInfo({ ...info, description: e.target.value })
                }
            />
            <label htmlFor="question">Pergunta:</label>
            <Input
                data-testid="question"
                name="question"
                value={questions.question}
                onChange={e =>
                    setQuestions({
                        ...questions,
                        question: e.target.value,
                    })
                }
            />
            <label htmlFor="correct">Resposta correta:</label>
            <Input
                data-testid="correct"
                name="correct"
                value={questions.correct}
                onChange={e =>
                    setQuestions({
                        ...questions,
                        correct: e.target.value,
                    })
                }
            />
            <Add>
                <label htmlFor="answers">Respostas:</label>
                <button
                    type="button"
                    onClick={e => createAnswers(e)}
                    data-testid="create-answers"
                >
                    <i className="fas fa-plus-circle" />
                </button>
            </Add>
            <Input
                data-testid="answers"
                value={questions.textAnswers}
                name="answers"
                onChange={e => handleAnswers(e)}
            />
            <small style={{ color: '#f05' }}>{error}</small>
            <ContentAnswers data-testid="content-answers">
                {questions.answers.length >= 1 &&
                    questions.answers.map((question, index) => (
                        <Answers key={index}>
                            <span>
                                Resposta: {question.name}{' '}
                                <i
                                    onClick={() => {
                                        setQuestions({
                                            ...questions,
                                            answers: [
                                                ...questions.answers.filter(
                                                    a =>
                                                        a.name !== question.name
                                                ),
                                            ],
                                        });
                                    }}
                                    className="fas fa-minus-circle"
                                />
                            </span>
                        </Answers>
                    ))}
            </ContentAnswers>
            <ContentActions>
                <Action data-testid="create-quiz" onClick={e => createQuiz(e)}>
                    Criar
                </Action>
                <Action
                    data-testid="create-more-answers"
                    onClick={e => createMoreAnswers(e)}
                >
                    Adicionar Pergunta
                </Action>
            </ContentActions>
        </Form>
    );
};

export default FormCreate;
