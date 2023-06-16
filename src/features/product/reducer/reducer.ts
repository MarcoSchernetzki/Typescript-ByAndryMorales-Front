import { createReducer } from '@reduxjs/toolkit';
import { ProductI } from '../model/type';
import * as ac from './action.creator';

const initialState: Array<ProductI> = [];

export const productReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionProduct, (_state, action) => action.payload);
    builder.addCase(ac.addActionProduct, (state, action) => [
        ...state,
        action.payload,
    ]);
    builder.addCase(ac.updateActionProduct, (state, action) =>
        state.map((item) =>
            item.id === action.payload.id ? action.payload : item
        )
    );
    builder.addCase(ac.deleteActionProduct, (state, action) =>
        state.filter((item) => item.id !== action.payload)
    );
    builder.addDefaultCase((state) => state);
});
