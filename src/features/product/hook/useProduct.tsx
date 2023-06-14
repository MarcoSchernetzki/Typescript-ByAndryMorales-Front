import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { ProductRepository } from '../service/productRepository';
import * as ac from '../reducer/action.creator';
import { ProductIOld } from '../model/type';
import { useNavigate } from 'react-router';
import { ProductI } from '../model/product';

export const useProduct = () => {
    const navigate = useNavigate();
    const products = useSelector((state: rootState) => state.products);
    const dispatcher = useDispatch();
    const apiProduct = useMemo(() => new ProductRepository(), []);

    useEffect(() => {
        apiProduct
            .findAll()
            .then((products) => dispatcher(ac.loadActionProduct(products)));
        //.catch((error: Error) => console.log(error.name, error.message));
    }, [apiProduct, dispatcher]);

    const handleAdd = (newProduct: ProductIOld) => {
        apiProduct.createProduct(newProduct).then((products: ProductIOld) => {
            dispatcher(ac.addActionProduct(products));
        });
    };
    const handleUpdate = (
        id: string | undefined,
        updateProduct: Partial<ProductIOld>
    ) => {
        apiProduct
            .updateProduct(id, updateProduct)
            .then((product: ProductIOld) =>
                dispatcher(ac.updateActionProduct(product))
            );
    };
    const handleDelete = (id: string) => {
        apiProduct.deleteProduct(id).then(() => {
            dispatcher(ac.deleteActionProduct(id));
        });
    };

    const handleSelect = (product: ProductI) => {
        apiProduct
            .getProduct(product.id as string)
            .then(() => {
                dispatcher(ac.selectActionCreator(product));
                navigate('/details');
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        products,
        handleAdd,
        handleUpdate,
        handleDelete,
        handleSelect,
    };
};
