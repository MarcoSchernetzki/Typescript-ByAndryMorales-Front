import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../../infrastructure/store/store';
import { Area, Category, ProductI } from '../model/type';
import { ProductRepository } from '../service/productRepository';
import { useProduct } from './useProduct';

jest.mock('../service/productRepository');

const product1 = {
    name: 'ailin',
    image: 'url image',
    price: 30,
    area: 'ceja' as Area,
    category: 'producto' as Category,
    clients: [],
    description: '',
    id: '7',
    isAvailable: true,
};
const product2 = {
    name: 'carina',
    image: 'image',
    price: 60,
    area: 'manicura' as Area,
    category: 'servicio' as Category,
    clients: [],
    description: 'desc',
    id: '7',
    isAvailable: true,
};

describe('Given useProduct', () => {
    let result: {
        current: {
            products: Array<ProductI>;
            handleAdd: (newProduct: ProductI) => void;
            handleDelete: (id: string) => void;
            handleUpdate: (
                id: string | undefined,
                updateProduct: Partial<ProductI>
            ) => void;
        };
    };

    beforeEach(() => {
        ProductRepository.prototype.findAll = jest
            .fn()
            .mockResolvedValue([product2]);
        ProductRepository.prototype.createProduct = jest
            .fn()
            .mockResolvedValue(product1);
        ProductRepository.prototype.deleteProduct = jest
            .fn()
            .mockResolvedValue(product1);
        ProductRepository.prototype.updateProduct = jest
            .fn()
            .mockResolvedValue([{ ...product2, image: 'new img' }]);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        ({ result } = renderHook(() => useProduct(), { wrapper }));
    });
    describe('When it has been run handleAdd and it has called handleAdd', () => {
        test('Then should return a Promise of product', async () => {
            await waitFor(() => {
                result.current.handleAdd(product1);
                expect(result.current.products.at(-1)).toEqual(product1);
            });
        });
        test('Then should return an error', async () => {
            const error = new Error('');
            ProductRepository.prototype.createProduct = jest
                .fn()
                .mockRejectedValue(product1);
            await waitFor(() => {
                result.current.handleAdd(product1);
                expect(error).toBeInstanceOf(Error);
            });
        });
    });
    describe('When it has been run handleUpdate and it has called handleUpdate', () => {
        test('Then should return a Promise of update product', async () => {
            await waitFor(() => {
                result.current.handleUpdate(product1.id, product2);
                expect(result.current.products.at(-1)).toEqual(product2);
            });
        });
        test('Then should return an error', async () => {
            const error = new Error('');
            ProductRepository.prototype.updateProduct = jest
                .fn()
                .mockRejectedValue(product1);
            await waitFor(() => {
                result.current.handleUpdate(product1.id, product1);
                expect(error).toBeInstanceOf(Error);
            });
        });
    });
    describe('When it has been run handleDelete and it has called handleDelete', () => {
        test('Then should return a Promise of delete product', async () => {
            await waitFor(() => {
                result.current.handleDelete(product1.id);
                expect(result.current.products).toEqual([]);
            });
        });
        test('Then should return an error', async () => {
            const error = new Error('');
            ProductRepository.prototype.updateProduct = jest
                .fn()
                .mockRejectedValue(product1);
            await waitFor(() => {
                result.current.handleDelete(product1.id);
                expect(error).toBeInstanceOf(Error);
            });
        });
    });
});
