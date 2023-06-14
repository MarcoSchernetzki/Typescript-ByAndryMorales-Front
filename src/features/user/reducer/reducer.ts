import { createReducer } from '@reduxjs/toolkit';
import { User } from '../model/type';
import * as ac from './action.creator';

const initialState: {
    user: User | null;
    token: string | null;
    isLogged: boolean;
    isLogging: boolean;
} = {
    user: null,
    token: null,
    isLogged: false,
    isLogging: false,
};

export const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.startLoginActionUser, (state, _action) => ({
        ...state,
        user: null,
        token: null,
        isLogged: true,
        isLogging: true,
    }));
    builder.addCase(ac.loginActionUser, (state, action) => ({
        ...state,
        isLogged: true,
        isLogging: false,
        user: action.payload.user,
        token: action.payload.token,
    }));
    builder.addCase(ac.logoutActionUser, (state, _action) => ({
        ...state,
        isLogged: false,
        user: null,
        isLogging: false,
        token: null,
    }));
    builder.addCase(ac.addCartActionUser, (state, action) => ({
        ...state,
        isLogged: true,
        isLogging: false,
        user: {
            ...(state.user as User),
            myProducts: [...(state.user as User).myProducts, action.payload],
        },
    }));
    builder.addCase(ac.updateCartActionUser, (state, action) => ({
        ...state,
        user: {
            ...(state.user as User),
            myProducts: (state.user as User).myProducts.map((item) =>
                item.productId.id === action.payload.productId.id
                    ? action.payload
                    : item
            ),
        },
        isLogged: true,
        isLogging: false,
    }));
    builder.addCase(ac.deleteCartActionUser, (state, action) => ({
        ...state,
        user: {
            ...(state.user as User),
            myProducts: (state.user as User).myProducts.filter(
                (item) => item.productId.id !== action.payload.productId.id
            ),
        },
        isLogged: true,
        isLogging: false,
    }));

    builder.addDefaultCase((state) => state);
});
