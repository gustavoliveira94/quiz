import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    overflow: scroll;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background: #d3d3d3;
    }
`;

export default Container;
