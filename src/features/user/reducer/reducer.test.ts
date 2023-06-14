import { ProductI } from '../../product/model/type';
import { User } from '../model/type';
import { actionUser } from './action.types';
import { userReducer } from './reducer';

describe('Given the function userReducer', () => {
    const productMock: ProductI = {
        name: 'D200',
        image: '',
        price: 30,
        id: '2',
        isAvailable: true,
        description: '',
        category: 'producto',
        area: 'manicura',
        clients: [],
    };
    const userMock: User = {
        name: 'D200',
        passwd: '321',
        id: '2',
        isDelete: false,
        email: '@gmail',
        myProducts: [{ productId: productMock, amount: 1 }],
        role: 'user',
    };

    let action: { type: string; payload: unknown };
    let state: {
        user: User | null;
        token: string | null;
        isLogged: boolean;
        isLogging: boolean;
    };

    describe('When the action is startlogin', () => {
        test('Then the returned state should include the action payload', () => {
            action = {
                type: actionUser.startLogin,
                payload: {
                    isLogging: true,
                },
            };
            state = {
                user: null,
                token: null,
                isLogged: false,
                isLogging: true,
            };

            const result = userReducer(state, action);
            expect(result.isLogging).toBe(true);
        });
    });
    describe('When the action is login', () => {
        test('Then the returned state should include the action payload', () => {
            action = {
                type: actionUser.login,
                payload: {
                    user: userMock,
                    token: 'token',
                    isLogged: true,
                    isLogging: false,
                },
            };
            state = {
                user: null,
                token: null,
                isLogged: false,
                isLogging: true,
            };
            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is logout', () => {
        test('Then the returned state should be the action payload', () => {
            action = {
                type: actionUser.logout,
                payload: {
                    user: null,
                    token: null,
                    isLogged: false,
                    isLogging: false,
                },
            };
            state = {
                user: userMock,
                token: 'token',
                isLogged: false,
                isLogging: false,
            };

            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is add', () => {
        test('Then the returned state should be the original state', () => {
            action = {
                type: actionUser.addCart,
                payload: { productId: '2', amount: 1 },
            };
            state = state = {
                user: userMock,
                token: 'token',
                isLogged: false,
                isLogging: false,
            };
            const result = userReducer(state, action);
            expect(result.user?.myProducts.at(-1)).toEqual(action.payload);
        });
    });

    describe('When the action is update', () => {
        test('Then the returned state should be the original state and update the order', () => {
            action = {
                type: actionUser.updateCart,
                payload: { productId: productMock, amount: 2 },
            };
            state = state = {
                user: userMock,
                token: 'token',
                isLogged: false,
                isLogging: false,
            };

            const result = userReducer(state, action);
            expect(result.user?.myProducts.at(-1)).toEqual(action.payload);
        });
        test('Then the returned state should be the original state', () => {
            action = {
                type: actionUser.updateCart,
                payload: { productId: '1', amount: 2 },
            };
            state = state = {
                user: userMock,
                token: 'token',
                isLogged: false,
                isLogging: false,
            };

            const result = userReducer(state, action);
            expect(result.user?.myProducts).toEqual([
                { productId: productMock, amount: 1 },
            ]);
        });
    });

    describe('When the action is delete', () => {
        test('Then the returned state should be the original state', () => {
            action = {
                type: actionUser.deleteCart,
                payload: { productId: productMock, amount: 1 },
            };
            state = {
                user: userMock,
                token: 'token',
                isLogged: false,
                isLogging: false,
            };

            const result = userReducer(state, action);
            expect(result.user?.myProducts).toEqual([]);
        });
    });
});
