import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Register from './register';
import { appStore } from '../../../infrastructure/store/store';
import { mockStore } from '../../../infrastructure/mockStore/mockStore';
const mockNavigate = jest.fn();

jest.mock('../../user/service/userRepository');

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as jest.Mock),
    useNavigate: () => mockNavigate,
}));

describe('Given Register component', () => {
    describe('When we render the component Register', () => {
        test('Then it should display form of register', async () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <Register />
                    </Provider>
                </Router>
            );
            const element = await screen.findByPlaceholderText(/Contraseña/i);
            expect(element).toBeInTheDocument();
            fireEvent.input(await screen.findByPlaceholderText('Contraseña'));
            userEvent.click(await screen.findByRole('button'));
        });
        test('Then it should display of welcome', async () => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <Register />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/unirte/i);
            expect(element).toBeInTheDocument();
        });
    });
});
