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
                            <p className="service-duration">
                                Duracion: {item.duration}
                            </p>
                            <p className="service-price">€ {item.price},00</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
