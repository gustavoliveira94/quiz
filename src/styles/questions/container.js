import styled from 'styled-components';

const Container = styled.li`
    position: relative;
    width: 280px;
    height: 120px;
    background-color: #fff;
    padding: 10px;
    margin: 0 20px;
    box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, 0.1);
    margin-top: 15px;

    :hover {
        cursor: pointer;
        opacity: 0.9;
    }

    i {
        position: absolute;
        right: 10px;
        z-index: 2;
        color: #f00;
    }
`;

export default Container;
