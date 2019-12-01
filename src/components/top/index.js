import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import Logo from '../../styles/logo';

const Top = () => {
    return (
        <Logo>
            <Link to="/">
                <h1>QUIZ</h1>
            </Link>
        </Logo>
    );
};

export default Top;
