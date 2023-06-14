import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockStore } from '../../mockStore/mockStore';
import { appStore } from '../../store/store';
import { PrivateRoute } from './routesPrivate';

describe('Given the route', () => {
    test('if we are logged should go to patatas', async () => {
        render(
            <>
                <Router>
                    <Provider store={mockStore}>
                        <PrivateRoute>
                            <p>pestaña</p>
                        </PrivateRoute>
                    </Provider>
                </Router>
            </>
        );

        const element = screen.getByText(/pestaña/i);
        expect(element).toBeInTheDocument();
    });
    test('if we are not logged should go to home', async () => {
        render(
            <>
                <Router initialEntries={['/home']} initialIndex={1}>
                    <Provider store={appStore}>
                        <PrivateRoute>
                            <p>pestaña</p>
                        </PrivateRoute>
                    </Provider>
                </Router>
            </>
        );

        const element = screen.queryByText(/pestaña/i);
        expect(element).toBe(null);
    });
});
