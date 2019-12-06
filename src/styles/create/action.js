import styled from 'styled-components';

const Action = styled.button`
    width: 40%;
    height: 50px;
    background-color: #46b3e6;
    color: #fff;
    font-size: 18px;
    border: 0;
    cursor: pointer;

    @media (max-width: 500px) {
        font-size: 16px;
    }
`;

export default Action;
