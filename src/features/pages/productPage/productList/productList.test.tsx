import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import ProductList from './productList';
import { Area, Category } from '../../../product/model/type';
import { Provider } from 'react-redux';
import { mockStore } from '../../../../infrastructure/mockStore/mockStore';
import userEvent from '@testing-library/user-event';

describe('Given HomeItem component', () => {
    describe('When we render the component', () => {
        test('Then it should display', async () => {
            const mockProduct = [
                {
                    area: 'ceja' as Area,
                    category: 'producto' as Category,
                    clients: [],
                    description: '',
                    isAvailable: true,
                    price: 40,
                    id: '2',
                    name: 'peine',
                    image: 'url',
                },
            ];
            render(
                <Router>
                    <Provider store={mockStore}>
                        <ProductList item={mockProduct} />
                    </Provider>
                </Router>
            );
            const element = screen.getByText('peine');
            expect(element).toBeInTheDocument();
            userEvent.click(await screen.findByText(/peine/i));
        });
    });
});
