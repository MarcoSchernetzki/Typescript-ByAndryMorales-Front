import { Navigate, Routes, Route } from 'react-router-dom';
import { HomePage } from '../../../features/pages/home.page/home.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="Home" element={<HomePage />}></Route>
            <Route path="" element={<HomePage />}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
