import { ProductI } from '../../../product/model/type';
import AppointmentItem from '../appointmentItem/appointmentItem';
import Styles from '../../productPage/productPage.module.css';

function AppointmentList({ item }: { item: Array<ProductI> }) {
    return (
        <>
            <ul className={Styles.productImage}>
                {item.map((item: ProductI) =>
                    item.category === 'servicio' ? (
                        <li className={Styles.productLi} key={item.id}>
                            <AppointmentItem item={item} />
                        </li>
                    ) : (
                        <></>
                    )
                )}
            </ul>
        </>
    );
}

export default AppointmentList;
