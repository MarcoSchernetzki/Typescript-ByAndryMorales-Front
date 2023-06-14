import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductPage from './productPage';
import { mockStore } from '../../../infrastructure/mockStore/mockStore';
import { mockStoreAdmin } from '../../../infrastructure/mockStore/mockStoreAdmin';
import userEvent from '@testing-library/user-event';

describe('Given productPage component', () => {
    describe('When we render the component productPage', () => {
        test('Then it should display the products', async () => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <ProductPage />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/tinte/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display the form for admin', () => {
            render(
                <Router>
                    <Provider store={mockStoreAdmin}>
                        <ProductPage />
                    </Provider>
                </Router>
            );
            const element = screen.getByPlaceholderText(/Imagen/i);
            const button = screen.getByText('Añadir');
            userEvent.click(button);
            expect(element).toBeInTheDocument();

            expect(button).toBeInTheDocument();
            fireEvent.input(screen.getByPlaceholderText(/Imagen/i));
        });
    });
});
