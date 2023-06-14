import { configureStore } from '@reduxjs/toolkit';
import { ProductI } from '../../features/product/model/type';
import { productReducer } from '../../features/product/reducer/reducer';
import { Role } from '../../features/user/model/type';
import { userReducer } from '../../features/user/reducer/reducer';
import { rootState } from '../store/store';

export const orderMock = {
    productId: { name: 'mock', id: '12414142' } as ProductI,
    amount: 1,
};
export const userMock = {
    name: 'david',
    passwd: '321',
    id: '2',
    isDelete: false,
    email: '@gmail',
    myProducts: [orderMock],
    role: 'user' as Role,
};
export const preloadedState: Partial<rootState> = {
    users: {
        user: userMock,
        token: 'token',
        isLogged: true,
        isLogging: false,
    },
    products: [{ name: 'tinte' } as ProductI],
};
export const mockStore = configureStore({
    reducer: {
        users: userReducer,
        products: productReducer,
    },
    preloadedState,
});
