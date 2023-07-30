import { useContext } from 'react';
import { ProductI } from '../../product/model/product';
import './productItem.css';
import { ProductContext } from '../../../infrastructure/context/context';

export const ProductItem = ({ item }: { item: ProductI }) => {
    const { handleSelect } = useContext(ProductContext);
    return (
        <li
            key={item.id}
            className="container-service-item"
            onClick={(e) => {
                e.preventDefault();
                handleSelect(item);
            }}
        >
            <img
                className="service-image"
                src={item.image}
                alt={item.name}
                width="150px"
                height="auto"
            />
            <p className="service-name">{item.name}</p>
        </li>
    );
};
