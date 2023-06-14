import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { appStore } from '../../../infrastructure/store/store';
import { mockStore } from '../../../infrastructure/mockStore/mockStore';
import LoginPage from './loginPage';
import { mockStore2 } from '../../../infrastructure/mockStore/mockStore2';

describe('Given LoginPage component', () => {
    describe('When we render the component LoginPage', () => {
        test('Then it should display form of login', async () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <LoginPage />
                    </Provider>
                </Router>
            );
            const element = await screen.findByPlaceholderText(/Contraseña/i);
            expect(element).toBeInTheDocument();
            fireEvent.input(await screen.findByPlaceholderText('Contraseña'));
        });
        test('Then it should display of welcome', async () => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <LoginPage />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/BIENVENID@/i);
            expect(element).toBeInTheDocument();
            userEvent.click(await screen.findByRole('button'));
        });
        test('Then it should display of welcome but without token', async () => {
            render(
                <Router>
                    <Provider store={mockStore2}>
                        <LoginPage />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/BIENVENID@/i);
            expect(element).toBeInTheDocument();
            userEvent.click(await screen.findByRole('button'));
        });
    });
});
