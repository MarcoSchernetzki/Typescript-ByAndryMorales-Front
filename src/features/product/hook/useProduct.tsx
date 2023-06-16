import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { ProductRepository } from '../service/productRepository';
import * as ac from '../reducer/action.creator';
import { ProductI } from '../model/type';

export const useProduct = () => {
    const products = useSelector((state: rootState) => state.products);
    const dispatcher = useDispatch();
    const apiProduct = useMemo(() => new ProductRepository(), []);

    useEffect(() => {
        apiProduct
            .findAll()
            .then((products) => dispatcher(ac.loadActionProduct(products)));
        //.catch((error: Error) => console.log(error.name, error.message));
    }, [apiProduct, dispatcher]);

    const handleAdd = (newProduct: ProductI) => {
        apiProduct.createProduct(newProduct).then((products: ProductI) => {
            dispatcher(ac.addActionProduct(products));
        });
    };
    const handleUpdate = (
        id: string | undefined,
        updateProduct: Partial<ProductI>
    ) => {
        apiProduct
            .updateProduct(id, updateProduct)
            .then((product: ProductI) =>
                dispatcher(ac.updateActionProduct(product))
            );
    };
    const handleDelete = (id: string) => {
        apiProduct.deleteProduct(id).then(() => {
            dispatcher(ac.deleteActionProduct(id));
        });
    };

    return {
        products,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
