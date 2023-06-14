import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './app';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { mockStore } from '../../mockStore/mockStore';

describe('Given App component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <App />
                    </Provider>
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/POLITICA/i);
            expect(element).toBeInTheDocument();
        });
    });
});
