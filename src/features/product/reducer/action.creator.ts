import { createAction } from '@reduxjs/toolkit';
import { ProductI } from '../model/type';
import { actionProduct } from './action.types';

export const loadActionProduct = createAction<Array<ProductI>>(
    actionProduct.load
);
export const addActionProduct = createAction<ProductI>(actionProduct.add);
export const updateActionProduct = createAction<ProductI>(actionProduct.update);
export const deleteActionProduct = createAction<string>(actionProduct.delete);
