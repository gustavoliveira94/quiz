import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Styles
import Container from '../../styles/create/container';
import Content from '../../styles/create/content';
import Form from '../../styles/create/form';
import Input from '../../styles/create/input';
import Questions from '../../styles/create/questions';
import Send from '../../styles/create/send';

// Components
import Top from '../../components/top';

// Actions
import { setQuiz } from '../../actions';

const Create = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        name: '',
        description: '',
        textQuestions: '',
        questions: [
            {
                name: '',
                answers: [],
                correct: '',
            },
        ],
    });

    const handleQuestions = e => {
        setState({ ...state, textQuestions: e.target.value });
    };

    const createQuestions = e => {
        if (state.textQuestions !== '') {
            setState({
                ...state,
                ...state.questions,
                answers: state.questions[0].answers.concat(state.textQuestions),
            });
        }
        e.preventDefault();
    };

    const createQuiz = e => {
        dispatch(setQuiz());
        e.preventDefault();
    };

    console.log(state.questions);
    console.log(state.textQuestions);

    return (
        <Container>
            <Top />
            <Content>
                <Form>
                    <label htmlFor="name">Nome:</label>
                    <Input
                        name="name"
                        onChange={e =>
                            setState({ ...state, name: e.target.value })
                        }
                    />
                    <label htmlFor="description">Descrição:</label>
                    <Input
                        name="description"
                        onChange={e =>
                            setState({ ...state, description: e.target.value })
                        }
                    />
                    <div>
                        <label htmlFor="questions">Perguntas:</label>
                        <button type="button" onClick={e => createQuestions(e)}>
                            +
                        </button>
                    </div>
                    <Input
                        name="questions"
                        onChange={e => handleQuestions(e)}
                    />
                    {state.questions &&
                        state.questions.map((question, index) => (
                            <Questions>
                                <span key={index}>{question.name}</span>
                            </Questions>
                        ))}
                    <Send onClick={() => createQuiz()}>Criar</Send>
                </Form>
            </Content>
        </Container>
    );
};

export default Create;
