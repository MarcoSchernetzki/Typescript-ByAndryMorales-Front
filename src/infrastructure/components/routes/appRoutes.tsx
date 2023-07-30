import { Navigate, Routes, Route } from 'react-router-dom';
import { HomePage } from '../../../features/pages/homePage/homePage';
import DetailsPage from '../../../features/pages/details.page/details.page';
import { ServicesPage } from '../../../features/pages/servicesPage/servicesPage';
import { AboutMePage } from '../../../features/pages/aboutMePage/aboutMePage';
import { GiftCardPage } from '../../../features/pages/giftCardPage/giftCardPage';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="details" element={<DetailsPage />}></Route>
            <Route path="services" element={<ServicesPage />}></Route>
            <Route path="gift-card" element={<GiftCardPage />}></Route>
            <Route path="about-me" element={<AboutMePage />}></Route>
            <Route path="home" element={<HomePage />}></Route>
            <Route path="" element={<HomePage />}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
};
