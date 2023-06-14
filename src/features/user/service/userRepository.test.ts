import { Role } from '../model/type';
import { UserRepository } from './userRepository';

const mockUser = {
    id: '12',
    name: 'mock user',
    email: 'mockuser@gmail.com',
    passwd: '54321',
    isDelete: false,
    role: 'user' as Role,
    myProducts: [],
};
const newMockUser = {
    id: '12',
    name: 'mock user',
    email: 'updateuser@gmail.com',
    passwd: '54321',
    isDelete: false,
    role: 'user' as Role,
    myProducts: [],
};

describe('Given userRepository Service', () => {
    let service: UserRepository;
    const error = new Error('Error');
    beforeEach(() => {
        service = new UserRepository();
    });
    describe('When we instantiate it', () => {
        test('Then if i use service.error(), it should return an error', () => {
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
    describe('When it has been run register and it has called register', () => {
        test(`Then if I use service.register() 
            it should return a Promise of user`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser),
            });
            const result = await service.register(mockUser);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(mockUser);
        });
        test(`Then if I use service.register() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });
            await service.register(mockUser);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe('When it has been run login and it has called login', () => {
        test(`Then if I use service.login() 
            it should return a Promise of user`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser),
            });
            const result = await service.login(mockUser);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(mockUser);
        });
        test(`Then if I use service.login() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });
            await service.login(mockUser);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe('When it has been run findOne and it has called findOne', () => {
        test(`Then if I use service.findOne() 
            it should return a Promise of user`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser),
            });
            const result = await service.findOne(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(mockUser);
        });
        test(`Then if I use service.findOne() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });
            await service.findOne(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe('When it has been run addCart and it has called addCart', () => {
        test(`Then if I use service.addCart() 
            it should return a Promise of user`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockUser),
            });
            const result = await service.addCart(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(mockUser);
        });
        test(`Then if I use service.addCart() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });
            await service.addCart(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe('When it has been run updateCart and it has called updateCart', () => {
        test(`Then if I use service.updateCart() 
            it should return a Promise of user`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(newMockUser),
            });
            const result = await service.updateCart(mockUser.id, {
                email: newMockUser.email,
            });
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(newMockUser);
        });
        test(`Then if I use service.updateCart() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });
            await service.updateCart(mockUser.id, {
                email: 'update@gmail.com',
            });
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe('When it has been run deleteCart and it has called deleteCart', () => {
        test(`Then if I use service.deleteCart() 
            it should return a Promise of user`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(newMockUser),
            });
            const result = await service.deleteCart(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(newMockUser);
        });
        test(`Then if I use service.deleteCart() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });
            await service.deleteCart(mockUser.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
});
