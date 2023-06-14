import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { ProductI } from '../../../product/model/type';
import HomeList from './homeList';
import { Provider } from 'react-redux';
import { appStore } from '../../../../infrastructure/store/store';

describe('Given HomeList component', () => {
    describe('When we render the component', () => {
        test('Then it should display the title', () => {
            const mockProductList: Array<ProductI> = [
                {
                    area: 'ceja',
                    category: 'producto',
                    clients: [],
                    description: '',
                    isAvailable: true,
                    price: 40,
                    id: '2',
                    name: 'lifting',
                    image: 'url',
                },
            ];
            render(
                <Router>
                    <Provider store={appStore}>
                        <HomeList item={mockProductList} />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/lifting/i);
            expect(element).toBeInTheDocument();
        });
    });
});
