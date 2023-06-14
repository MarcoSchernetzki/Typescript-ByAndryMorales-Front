import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
    mockStore,
    orderMock,
    userMock,
} from '../../../infrastructure/mockStore/mockStore';
import { Order, ProtoUser, User } from '../model/type';
import { UserRepository } from '../service/userRepository';
import { useUser } from './useUser';
let result: {
    current: {
        user: {
            user: User | null;
            token: string | null;
            isLogged: boolean;
            isLogging: boolean;
        };
        handleLogin: (user: ProtoUser) => void;
        handleAddCart: (order: Order) => void;
        handleDeleteCart: (order: Order) => void;
    };
};
// test de prueba
//const dispatchSpy = jest.spyOn(appStore, 'dispatch');
describe('Given useProduct', () => {
    beforeEach(() => {
        UserRepository.prototype.register = jest
            .fn()
            .mockResolvedValue(userMock);
        UserRepository.prototype.login = jest.fn().mockResolvedValue(userMock);
        UserRepository.prototype.addCart = jest
            .fn()
            .mockResolvedValue(userMock);
        UserRepository.prototype.deleteCart = jest
            .fn()
            .mockResolvedValue(orderMock);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={mockStore}>{children}</Provider>
        );

        ({ result } = renderHook(() => useUser(), { wrapper }));
    });
    describe('When it has been run handleLogin and it has called handleLogin', () => {
        test('Then should return a Promise of user', () => {
            result.current.handleLogin({
                name: userMock.name,
                passwd: userMock.passwd,
            });
            expect(UserRepository.prototype.login).toHaveBeenCalled();
        });
    });
    //test a solucionar
    // describe('When it has been run handleDeleteCart and it has called handleDeleteCart', () => {
    //     test('Then should return a Promise of user', async () => {
    //         await result.current.handleDeleteCart(orderMock);
    //         expect(dispatchSpy).toHaveBeenCalled();
    //     });
    // });
    // describe('When it has been run handleAddCart and it has called handleAddCart', () => {
    //     test('Then should return a Promise of user', () => {
    //         result.current.handleAddCart(orderMock);
    //         expect(dispatchSpy).toHaveBeenCalled();
    //     });
    // });
});
