import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styles
import Container from '../../styles/questions/container';
import Title from '../../styles/questions/title';

const Questions = ({ data }) => {
    console.log('teste', data);
    return (
        <Link
            to={`/quiz/${data._id}`}
            style={{ textDecoration: 'none', height: '120px' }}
        >
            <Container>
                <Title>Name: {data.name}</Title>
                <Title>Descrição: {data.description}</Title>
                <br />
                <Title>
                    {data.questions.length <= 1 ? 'Pergunta' : 'Perguntas'}{' '}
                    {data.questions.length}
                </Title>
            </Container>
        </Link>
    );
};

Questions.propTypes = {
    data: PropTypes.shape.isRequired,
};

export default Questions;
