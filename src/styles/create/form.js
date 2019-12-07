import styled from 'styled-components';

const Form = styled.form`
    position: relative;
    width: 600px;
    height: 80%;
    max-height: 800px;
    background-color: #fff;
    padding: 15px;
    overflow-y: scroll;

    label {
        color: #000;
    }

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background: #d3d3d3;
    }

    @media (max-width: 500px) {
        width: 90%;
        height: 100%;
    }
`;

export default Form;
