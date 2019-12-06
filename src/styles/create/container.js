import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: calc(100% - 60px);
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background: #d3d3d3;
    }
`;

export default Container;
