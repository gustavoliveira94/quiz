import styled from 'styled-components';

const Create = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    background-color: #46b3e6;
    cursor: pointer;
    box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, 0.59);

    p {
        font-size: 48px;
        color: #fff;
        font-weight: lighter;
    }
`;

export default Create;
