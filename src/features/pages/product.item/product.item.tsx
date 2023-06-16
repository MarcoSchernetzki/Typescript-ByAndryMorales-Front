import { ProductI } from '../../product/model/product';
import './product.item.css';

export const ProductItem = ({ item }: { item: ProductI }) => {
    return (
        <>
            <div className="container-service-item">
                <img
                    className="service-image"
                    src={item.image}
                    alt={item.name}
                    width="150px"
                    height="auto"
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                />
                <p className="service-name">{item.name}</p>
                <p className="service-duration">Duracion: {item.duration}</p>
                <p className="service-price">€ {item.price},00</p>
            </div>
        </>
    );
};
