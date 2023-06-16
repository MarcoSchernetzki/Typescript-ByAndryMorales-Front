import { ProductItem } from '../product.item/product.item';
import './services.list.css';
import { data } from '../../../infrastructure/data/data';
import { ProductI } from '../../product/model/product';

export function ServicesList() {
    return (
        <>
            <span className="tittle-bottom" />
            <h2 className="services-tittle">Nuestros Servicios</h2>
            <ul className="services-list">
                {data.map((item: ProductI) => (
                    <li key={item.id}>
                        <ProductItem item={item}></ProductItem>
                    </li>
                ))}
            </ul>
        </>
    );
}
