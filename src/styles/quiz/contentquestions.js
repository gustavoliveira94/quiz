import styled from 'styled-components';

const ContentQuestions = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding-bottom: 10px;
    border-bottom: 1px solid #e7ecef;

    h3 {
        padding-top: 10px;
    }

    button {
        border: 0;
        height: 40px;
        cursor: pointer;
    }
`;

export default ContentQuestions;
