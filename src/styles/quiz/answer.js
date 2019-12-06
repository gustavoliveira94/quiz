import styled from 'styled-components';

const Answer = styled.button`
    background-color: ${props => props.correct && '#b4be58'};
    background-color: ${props => props.incorrect && '#ff6060'};
    color: ${props => props.correct && '#fff'};
    color: ${props => props.incorrect && '#fff'};
`;

export default Answer;
