import { HomeItem } from '../homeItem/homeItem';
import Styles from '../home.Page.module.css';
import { ProductI } from '../../../product/model/product';

function HomeList({ item }: { item: Array<ProductI> }) {
    return (
        <>
            <ul className={Styles.productImage}>
                {item.map((item: ProductI) => (
                    <li className={Styles.productLi} key={item.id}>
                        <HomeItem item={item} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default HomeList;
