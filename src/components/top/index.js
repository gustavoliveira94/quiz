import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Styles
import Logo from '../../styles/logo';

const Top = () => {
    const location = useLocation();

    return (
        <Logo>
            {location.pathname !== '/' && (
                <Link
                    to="/"
                    style={{
                        textDecoration: 'none',
                        color: '#000',
                        position: 'absolute',
                        left: 20,
                    }}
                >
                    <i className="fas fa-2x fa-angle-left" />
                </Link>
            )}
            <Link to="/">
                <h1>QUIZ</h1>
            </Link>
        </Logo>
    );
};

export default Top;
