import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import CartPage from './cartPage';
import { mockStore } from '../../../infrastructure/mockStore/mockStore';
import { mockStore2 } from '../../../infrastructure/mockStore/mockStore2';
import userEvent from '@testing-library/user-event';

describe('Given cartPage component', () => {
    describe('When we render the component cartPage', () => {
        test('Then it should display', async () => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <CartPage />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/mock/i);
            expect(element).toBeInTheDocument();
            userEvent.click(await screen.findByPlaceholderText(/mock/i));
        });
        test('Then it should display without products in the cart', () => {
            render(
                <Router>
                    <Provider store={mockStore2}>
                        <CartPage />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/carrito/i);
            expect(element).toBeInTheDocument();
        });
    });
});
