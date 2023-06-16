import { ProductI } from '../../../product/model/product';
import Styles from './homeItem.module.css';

export function HomeItem({ item }: { item: ProductI }) {
    return (
        <div className={Styles.containerProduct}>
            <img
                className={Styles.productImage}
                src={item.image}
                alt={item.name}
                width="200px"
                height="230px"
            />
            <div className={Styles.productDescription}>
                <p>{item.name}</p>
                <p>{item.price} €</p>
            </div>
        </div>
    );
}
