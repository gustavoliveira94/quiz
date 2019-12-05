import styled from 'styled-components';

const Title = styled.h1`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    span {
        position: absolute;
        right: 15px;
        white-space: nowrap;
        font-size: 14px;
    }
`;

export default Title;
