/* eslint-disable no-undef */
import React from 'react';
import { useSelector } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Main from '../pages/main';

jest.mock('react-redux');

describe('test main', () => {
    it('check render main', () => {
        const history = createMemoryHistory();
        useSelector.mockImplementation(cb =>
            cb({
                quiz: {
                    quiz: [
                        {
                            description: 'Brasil',
                            name: 'Brasil',
                            questions: [
                                {
                                    answers: [
                                        { _id: 1, name: 'teste' },
                                        { _id: 1, name: 'brasil' },
                                    ],
                                    correct: 'teste',
                                    question: 'teste',
                                },
                            ],
                            _id: 12,
                        },
                    ],
                },
            })
        );
        const { getByText, getByTestId, getAllByText } = render(
            <Router history={history}>
                <Main />
            </Router>
        );
        expect(getByText('QUIZ')).toBeTruthy();
        expect(history.location.pathname).toBe('/');

        expect(getByTestId('quiz')).toContainElement(
            getAllByText('Name: Brasil')[0],
            getAllByText('Descrição: Brasil')[1]
        );

        fireEvent.click(getByTestId('create'));
        expect(history.location.pathname).toBe('/create');
    });
});
