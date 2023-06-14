import { ProductI } from '../../../product/model/type';
import Styles from '../../productPage/productPage.module.css';

function AppointmentItem({ item }: { item: ProductI }) {
    return (
        <div className={Styles.containerProduct}>
            <img
                className={Styles.productImage}
                src={item.image}
                alt={item.name}
                width="200px"
            />
            <div className={Styles.productDescription}>
                <p>{item.name}</p>
                <p>{item.price} €</p>
            </div>
        </div>
    );
}

export default AppointmentItem;
