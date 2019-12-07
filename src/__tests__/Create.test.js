/* eslint-disable no-undef */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Create from '../pages/create';

jest.mock('react-redux');

describe('test create', () => {
    it('check form create quiz', () => {
        const history = createMemoryHistory();
        const route = '/create';
        history.push(route);

        const dispatch = jest.fn();

        useDispatch.mockReturnValue(dispatch);

        const { getByText, getByTestId, getAllByText } = render(
            <Router history={history}>
                <Create />
            </Router>
        );

        expect(history.location.pathname).toBe('/create');

        expect(getByText('QUIZ')).toBeTruthy();
        fireEvent.change(getByTestId('name'), {
            target: { value: 'Teste' },
        });
        fireEvent.change(getByTestId('description'), {
            target: { value: 'Teste' },
        });
        fireEvent.change(getByTestId('question'), {
            target: { value: 'Teste' },
        });
        fireEvent.change(getByTestId('correct'), {
            target: { value: 'Teste' },
        });
        fireEvent.change(getByTestId('answers'), {
            target: { value: 'Testando' },
        });

        fireEvent.click(getByTestId('create-answers'));
        fireEvent.click(getByTestId('create-answers'));
        fireEvent.click(getByTestId('create-answers'));
        fireEvent.click(getByTestId('create-answers'));

        expect(getByTestId('content-answers')).toContainElement(
            getAllByText('Resposta: Testando')[0],
            getAllByText('Resposta: Testando')[1],
            getAllByText('Resposta: Testando')[2],
            getAllByText('Resposta: Testando')[3]
        );

        fireEvent.click(getByTestId('create-more-answers'));

        expect(getByTestId('content-answers').textContent).toBe('');

        fireEvent.click(getByTestId('create-quiz'));

        history.push('/');

        expect(history.location.pathname).toBe('/');
    });
});
