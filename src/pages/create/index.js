/* eslint-disable react/no-array-index-key */
import React from 'react';

// Styles
import Container from '../../styles/create/container';
import Content from '../../styles/create/content';

// Components
import Top from '../../components/top';
import FormCreate from '../../components/formcreate';

const Create = () => {
    return (
        <Container>
            <Top />
            <Content>
                <FormCreate />
            </Content>
        </Container>
    );
};

export default Create;
