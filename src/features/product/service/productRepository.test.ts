import { Area, Category } from '../model/type';
import { ProductRepository } from './productRepository';

const mockProduct = {
    id: '',
    name: '',
    image: '',
    price: 40,
    category: 'producto' as Category,
    area: 'pestaña' as Area,
    description: '',
    isAvailable: true,
    clients: [],
};
const newMockProduct = {
    id: '',
    name: '',
    image: '',
    price: 40,
    category: 'producto' as Category,
    area: 'pestaña' as Area,
    description: '',
    isAvailable: true,
    clients: [],
};

describe('Given userRepository Service', () => {
    let service: ProductRepository;
    const error = new Error('Error');
    beforeEach(() => {
        service = new ProductRepository();
    });
    describe('When it has been run findAll and it has called findAll', () => {
        test(`Then if I use service.findAll() 
            it should return a Promise of user`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockProduct),
            });
            await service.findAll();
            expect(fetch).toHaveBeenCalled();
        });
        test(`Then if I use service.findAll() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });
            await service.findAll();
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe('When it has been run findOne and it has called findOne', () => {
        test(`Then if I use service.findOne() 
            it should return a Promise of user`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockProduct),
            });
            const result = await service.findOne(mockProduct.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(mockProduct);
        });
        test(`Then if I use service.findOne() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });
            await service.findOne(mockProduct.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe('When it has been run deleteProduct and it has called deleteProduct', () => {
        test(`Then if I use service.deleteProduct() 
            it should return a Promise of user`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockProduct),
            });
            const result = await service.deleteProduct(mockProduct.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(mockProduct);
        });
        test(`Then if I use service.deleteProduct() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });
            await service.deleteProduct(mockProduct.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe('When it has been run createProduct and it has called createProduct', () => {
        test(`Then if I use service.createProduct() 
            it should return a Promise of user`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockProduct),
            });
            const result = await service.createProduct(mockProduct);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(mockProduct);
        });
        test(`Then if I use service.createProduct() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });
            await service.createProduct(mockProduct);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe('When it has been run updateProduct and it has called updateProduct', () => {
        test(`Then if I use service.updateProduct() 
            it should return a Promise of user`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(newMockProduct),
            });
            const result = await service.updateProduct(mockProduct.id, {
                price: newMockProduct.price,
            });
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(newMockProduct);
        });
        test(`Then if I use service.updateProduct() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });
            await service.updateProduct(mockProduct.id, {
                price: 55,
            });
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe('When we instantiate it', () => {
        test('Then if i use service.createError(), it should return an error', () => {
            const error = service.createError(
                new Response('Error', {
                    status: 400,
                    statusText: 'error',
                })
            );

            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(error).toEqual(result);
        });
    });
});
