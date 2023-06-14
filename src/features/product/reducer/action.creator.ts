import { createAction } from '@reduxjs/toolkit';
import { ProductIOld } from '../model/type';
import { actionProduct } from './action.types';
import { ProductI } from '../model/product';

export const loadActionProduct = createAction<Array<ProductIOld>>(
    actionProduct.load
);
export const addActionProduct = createAction<ProductIOld>(actionProduct.add);
export const updateActionProduct = createAction<ProductIOld>(
    actionProduct.update
);
export const deleteActionProduct = createAction<string>(actionProduct.delete);
export const selectActionCreator = createAction<ProductI>(actionProduct.select);
