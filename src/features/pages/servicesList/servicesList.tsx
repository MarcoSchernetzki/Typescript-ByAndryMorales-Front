import { data } from '../../../infrastructure/data/data';
import { ProductI } from '../../product/model/product';
import { ProductItem } from '../productItem/productItem';
import './servicesList.css';

export const ServicesList = () => {
    return (
        <>
            <span className="tittle-bottom" />
            <h2 className="services-tittle">Nuestros Servicios</h2>
            <ul className="services-list">
                {data.map((item: ProductI) => (
                    <ProductItem key={item.id} item={item}></ProductItem>
                ))}
            </ul>
        </>
    );
};
