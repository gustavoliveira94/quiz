import styled from 'styled-components';

const Content = styled.div`
    width: 500px;
    height: 80%;
    max-height: 800px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, 0.1);
    margin: 60px 0;

    @media (max-width: 500px) {
        width: 90%;
        margin: 60px 5%;
    }
`;

export default Content;
