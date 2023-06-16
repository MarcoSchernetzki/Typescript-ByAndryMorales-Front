import { ProductI } from '../../../product/model/type';
import { HomeItem } from '../homeItem/homeItem';
import Styles from '../home.Page.module.css';

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
