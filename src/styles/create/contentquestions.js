import styled from 'styled-components';

const ContentQuestions = styled.div`
    width: 100%;
    min-height: calc(100% - 430px);
    height: 200px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background: #d3d3d3;
    }
`;

export default ContentQuestions;
