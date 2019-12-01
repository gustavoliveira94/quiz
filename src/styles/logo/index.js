import styled from 'styled-components';

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #000;
    box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, 0.59);

    a {
        text-decoration: none;
    }

    h1 {
        font-family: 'Alatsi', sans-serif;
        color: #fff;
    }
`;

export default Logo;
