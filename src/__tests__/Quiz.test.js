/* eslint-disable no-undef */
import React from 'react';
import { useSelector } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Quiz from '../pages/quiz';

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: '12',
    }),
    useRouteMatch: () => ({ url: '/quiz/12' }),
}));

describe('test quiz', () => {
    it('check render quiz', () => {
        const history = createMemoryHistory();
        history.push('/quiz');
        useSelector.mockImplementation(cb =>
            cb({
                quiz: {
                    quiz: [
                        {
                            description: 'Teste',
                            name: 'Teste',
                            questions: [
                                {
                                    answers: [
                                        { _id: 1, name: 'teste' },
                                        { _id: 2, name: 'teste' },
                                        { _id: 3, name: 'teste' },
                                        { _id: 4, name: 'teste' },
                                    ],
                                    correct: 'teste',
                                    question: 'teste',
                                },
                            ],
                            _id: 12,
                        },
                        {
                            description: 'Teste',
                            name: 'Teste',
                            questions: [
                                {
                                    answers: [
                                        { _id: 1, name: 'teste' },
                                        { _id: 2, name: 'teste' },
                                        { _id: 3, name: 'teste' },
                                        { _id: 4, name: 'teste' },
                                    ],
                                    correct: 'teste',
                                    question: 'teste',
                                },
                            ],
                            _id: 13,
                        },
                    ],
                },
            })
        );
        const { getByText, getAllByTestId } = render(
            <Router history={history}>
                <Quiz />
            </Router>
        );

        expect(getByText('QUIZ')).toBeTruthy();
        expect(history.location.pathname).toBe('/quiz');

        fireEvent.click(getAllByTestId('option')[0]);
        expect(getAllByTestId('option')[0]).toHaveAttribute('disabled');
    });
});
