/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Styles
import Form from '../../styles/create/form';
import Input from '../../styles/create/input';
import Questions from '../../styles/create/questions';
import Action from '../../styles/create/action';
import ContentActions from '../../styles/create/contentactions';
import Add from '../../styles/create/add';

// Actions
import { setQuiz } from '../../actions';

const FormCreate = () => {
    const dispatch = useDispatch();
    const quiz = useSelector(state => state);

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
                answers: [...questions.answers, questions.textAnswers],
            });
        }
        e.preventDefault();
    };

    const createMoreAnswers = e => {
        e.preventDefault();
        if (questions.answers.length >= 4) {
            setQuestions({
                ...questions,
                question: '',
                answers: [],
                textAnswers: '',
                correct: '',
            });
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
        }
    };

    const createQuiz = e => {
        e.preventDefault();
        createMoreAnswers(e);
        if (more.add.length >= 1) {
            dispatch(
                setQuiz({
                    name: info.name,
                    description: info.description,
                    questions: more.add,
                })
            );
        }
    };

    console.log('quiz', quiz);
    console.log('add', more);

    return (
        <Form>
            <label htmlFor="name">Nome:</label>
            <Input
                name="name"
                required
                onChange={e => setInfo({ ...info, name: e.target.value })}
            />
            <label htmlFor="description">Descrição:</label>
            <Input
                name="description"
                required
                onChange={e =>
                    setInfo({ ...info, description: e.target.value })
                }
            />
            <label htmlFor="answers">Pergunta:</label>
            <Input
                name="answers"
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
                <button type="button" onClick={e => createAnswers(e)}>
                    <i className="fas fa-plus-circle" />
                </button>
            </Add>
            <Input
                value={questions.textAnswers}
                name="answers"
                onChange={e => handleAnswers(e)}
            />
            {questions &&
                questions.answers.map((question, index) => (
                    <Questions>
                        <span key={index}>
                            Resposta: {question}{' '}
                            <i className="fas fa-minus-circle" />
                        </span>
                    </Questions>
                ))}
            <ContentActions>
                <Action onClick={e => createQuiz(e)}>Criar</Action>
                <Action onClick={e => createMoreAnswers(e)}>
                    Nova Pergunta
                </Action>
            </ContentActions>
        </Form>
    );
};

export default FormCreate;
