import { ProductI } from '../../../product/model/type';
import { useUser } from '../../../user/hook/useUser';
import Styles from './homeItem.module.css';

export function HomeItem({ item }: { item: ProductI }) {
    const { handleAddCart } = useUser();

    const handleClick = () => {
        handleAddCart({ productId: item, amount: 1 });
    };

    return (
        <div className={Styles.containerProduct} onClick={handleClick}>
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
