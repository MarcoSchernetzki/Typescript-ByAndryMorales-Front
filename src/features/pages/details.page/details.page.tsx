import './details.page.css';
import { ProductContext } from '../../../infrastructure/context/context';
import { useContext } from 'react';
import { ButtonAppoint } from '../../../infrastructure/core/buttonAppoint/buttonAppoint';

function DetailsPage() {
    const { selectedProduct, productStorage } = useContext(ProductContext);

    return (
        <>
            {productStorage() && (
                <div className="container-details">
                    <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        width="320px"
                        className="details-image"
                    />
                    <div className="container-description">
                        <span className="tittle-bottom" />
                        <p className="details-tittle">{selectedProduct.name}</p>
                        <div className="details-description">
                            {selectedProduct.description}
                        </div>
                        <p className="details-duration">
                            Duracion: {selectedProduct.duration}
                        </p>
                        <div className="details-price">
                            € {selectedProduct.price},00
                        </div>
                        <ButtonAppoint />
                    </div>
                </div>
            )}
        </>
    );
}
export default DetailsPage;
