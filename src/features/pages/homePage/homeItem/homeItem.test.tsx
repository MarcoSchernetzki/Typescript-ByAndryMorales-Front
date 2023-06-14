import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { HomeItem } from './homeItem';
import '@testing-library/jest-dom';
import { ProductI } from '../../../product/model/type';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { mockStore } from '../../../../infrastructure/mockStore/mockStore';

describe('Given HomeItem component', () => {
    describe('When we render the component', () => {
        test('Then it should display', async () => {
            const mockProduct: ProductI = {
                area: 'ceja',
                category: 'producto',
                clients: [],
                description: '',
                isAvailable: true,
                price: 40,
                id: '2',
                name: 'peine',
                image: 'url',
            };

            render(
                <Router>
                    <Provider store={mockStore}>
                        <HomeItem item={mockProduct} />
                    </Provider>
                </Router>
            );
            const element = screen.getByAltText('peine');
            expect(element).toBeInTheDocument();
            userEvent.click(await screen.findByText(/peine/i));
        });
    });
});
