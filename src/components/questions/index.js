/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styles
import Container from '../../styles/questions/container';
import Title from '../../styles/questions/title';

// Actions
import { removeQuiz } from '../../actions';

const Questions = ({ data }) => {
    const dispatch = useDispatch();

    return (
        <Container>
            <i
                onClick={() => dispatch(removeQuiz(data._id))}
                className="fas fa-minus-circle"
                title="remover"
            />
            <Link
                to={`/quiz/${data._id}`}
                style={{
                    textDecoration: 'none',
                    width: '100%',
                    height: '100%',
                    marginTop: 20,
                }}
            >
                <Title title={data.name}>Name: {data.name}</Title>
                <Title title={data.description}>
                    Descrição: {data.description}
                </Title>
                <br />
                <Title>
                    {data.questions.length <= 1 ? 'Pergunta' : 'Perguntas'}{' '}
                    {data.questions.length}
                </Title>
            </Link>
        </Container>
    );
};

Questions.propTypes = {
    data: PropTypes.shape.isRequired,
};

export default Questions;
