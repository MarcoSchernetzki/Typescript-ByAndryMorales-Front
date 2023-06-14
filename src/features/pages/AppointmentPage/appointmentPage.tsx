import { useProduct } from '../../product/hook/useProduct';
import AppointmentList from './appointmentList/appointmentList';

function AppointmentPage() {
    const { products } = useProduct();
    return (
        <main>
            <AppointmentList item={products} key={Math.random() * 233} />
        </main>
    );
}

export default AppointmentPage;
