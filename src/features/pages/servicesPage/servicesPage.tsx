import { ButtonAppoint } from '../../../infrastructure/core/buttonAppoint/buttonAppoint';
import { ServicesList } from '../servicesList/servicesList';
import './servicesPage.css';

export const ServicesPage = () => {
    return (
        <>
            <div className="container-services">
                <ServicesList />
            </div>
            <div className="container-button">
                <ButtonAppoint />
            </div>
        </>
    );
};
