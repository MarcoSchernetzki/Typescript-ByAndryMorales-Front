import { ProductContextProvider } from '../../context/provider';
import { Layout } from '../layout/layout';
import { AppRoutes } from '../routes/appRoutes';
import './app.css';

export const App = () => {
    return (
        <ProductContextProvider>
            <Layout>
                <main>
                    <AppRoutes />
                </main>
            </Layout>
        </ProductContextProvider>
    );
};
