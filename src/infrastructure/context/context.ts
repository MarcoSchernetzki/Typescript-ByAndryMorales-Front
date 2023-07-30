import { createContext } from 'react';
import { ProductI } from '../../features/product/model/product';

export const initialContext: {
    selectedProduct: ProductI;
    handleSelect: (data: ProductI) => void;
    isLoaded: boolean;
    handleLoader: () => boolean;
    productStorage: () => void | ProductI;
} = {
    selectedProduct: {} as ProductI,
    handleSelect: () => undefined,
    isLoaded: true,
    handleLoader: () => false,
    productStorage: () => ({} as ProductI),
};

export const ProductContext = createContext(initialContext);
