import styled from 'styled-components';

const Form = styled.form`
    position: relative;
    width: 600px;
    height: 800px;
    background-color: #fff;
    padding: 15px;
    overflow-y: scroll;

    label {
        color: #000;
    }

    @media (max-width: 500px) {
        width: 90%;
        height: 100%;
        margin: 60px 5%;
    }
`;

export default Form;
