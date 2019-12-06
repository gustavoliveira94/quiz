import styled from 'styled-components';

const Title = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    border-bottom: 4px solid #e7ecef;
    padding-bottom: 6px;

    h2 {
        width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 16px;
    }

    span {
        :nth-of-type(1) {
            position: absolute;
            left: 15px;
            white-space: nowrap;
            font-size: 14px;
        }
        :nth-of-type(2) {
            position: absolute;
            right: 15px;
            white-space: nowrap;
            font-size: 14px;
        }
    }
`;

export default Title;
