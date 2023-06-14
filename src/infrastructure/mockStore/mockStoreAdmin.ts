import { configureStore } from '@reduxjs/toolkit';
import { ProductI } from '../../features/product/model/type';
import { productReducer } from '../../features/product/reducer/reducer';
import { Role } from '../../features/user/model/type';
import { userReducer } from '../../features/user/reducer/reducer';
import { rootState } from '../store/store';

export const orderMock = {
    productId: { name: 'mock' } as ProductI,
    amount: 1,
};
export const userMockAdmin = {
    name: 'messi',
    passwd: '321',
    id: '2',
    role: 'admin' as Role,
    isDelete: false,
    email: '@gmail',
    myProducts: [orderMock],
};
export const preloadedState: Partial<rootState> = {
    users: {
        isLogged: true,
        token: 'token',
        isLogging: false,
        user: userMockAdmin,
    },
    products: [{ name: 'tinte' } as ProductI],
};
export const mockStoreAdmin = configureStore({
    reducer: {
        users: userReducer,
        products: productReducer,
    },
    preloadedState,
});
