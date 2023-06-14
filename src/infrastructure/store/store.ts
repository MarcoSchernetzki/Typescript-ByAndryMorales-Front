import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from '../../features/product/reducer/reducer';
import { userReducer } from '../../features/user/reducer/reducer';

export const appStore = configureStore({
    reducer: {
        users: userReducer,
        products: productReducer,
    },
});
export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
