import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from '../../features/product/reducer/reducer';
import { Role } from '../../features/user/model/type';
import { userReducer } from '../../features/user/reducer/reducer';
import { rootState } from '../store/store';

export const userMock2 = {
    name: 'juan carlos',
    passwd: '898',
    id: '2',
    email: '@gmail',
    isDelete: false,
    role: 'user' as Role,
    myProducts: [],
};
export const preloadedState: Partial<rootState> = {
    users: {
        user: userMock2,
        token: '',
        isLogging: false,
        isLogged: true,
    },
};
export const mockStore2 = configureStore({
    reducer: {
        users: userReducer,
        products: productReducer,
    },
    preloadedState,
});
