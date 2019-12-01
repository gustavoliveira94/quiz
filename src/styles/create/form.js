import styled from 'styled-components';

const Form = styled.form`
    position: relative;
    width: 600px;
    height: calc(100vh - 160px);
    background-color: #fff;
    padding: 15px;

    div {
        display: flex;
        align-items: center;
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #46b3e6;
            width: 15px;
            height: 15px;
            border-radius: 15px;
            margin-left: 5px;
            color: #fff;
            cursor: pointer;
            border: 0;
        }
    }
`;

export default Form;
