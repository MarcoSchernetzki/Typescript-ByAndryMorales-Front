import { useState } from 'react';
import { ProductI } from '../model/product';
import { useNavigate } from 'react-router';

export const useProduct = () => {
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState({} as ProductI);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleSelect = (product: ProductI) => {
        setSelectedProduct(product);
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        navigate('/details');
    };
    const handleLoader = () => {
        setTimeout(() => {
            return setIsLoaded(true);
        }, 1000);

        return isLoaded;
    };
    const productStorage = () => {
        if (!selectedProduct.name && localStorage.getItem('selectedProduct')) {
            return setSelectedProduct(
                JSON.parse(localStorage.getItem('selectedProduct') as string)
            );
        }
        return selectedProduct;
    };

    return {
        selectedProduct,
        handleSelect,
        handleLoader,
        isLoaded,
        productStorage,
    };
};
