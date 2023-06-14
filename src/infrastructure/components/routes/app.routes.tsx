import { Navigate, Routes, Route } from 'react-router-dom';
import AppointmentPage from '../../../features/pages/AppointmentPage/appointmentPage';
import CartPage from '../../../features/pages/cartPage/cartPage';
import LoginPage from '../../../features/pages/loginPage/loginPage';
import ProductPage from '../../../features/pages/productPage/productPage';
import Register from '../../../features/pages/registerPage/register';
import { PrivateRoute } from './routesPrivate';
import { HomePage } from '../../../features/pages/home.page/home.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="Home" element={<HomePage />}></Route>
            <Route path="" element={<HomePage />}></Route>
            <Route path="Registrar" element={<Register />}></Route>
            <Route path="Ingresar" element={<LoginPage />}></Route>
            <Route
                path="Carrito"
                element={
                    <PrivateRoute>
                        <CartPage />
                    </PrivateRoute>
                }
            ></Route>
            <Route
                path="Productos"
                element={
                    <PrivateRoute>
                        <ProductPage />
                    </PrivateRoute>
                }
            ></Route>
            <Route
                path="Servicios"
                element={
                    <PrivateRoute>
                        <AppointmentPage />
                    </PrivateRoute>
                }
            ></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
