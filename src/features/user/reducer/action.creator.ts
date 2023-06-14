import { createAction } from '@reduxjs/toolkit';
import { Order, UserToken } from '../model/type';
import { actionUser } from './action.types';

export const startLoginActionUser = createAction<void>(actionUser.startLogin);
export const loginActionUser = createAction<UserToken>(actionUser.login);
export const logoutActionUser = createAction<void>(actionUser.logout);
export const addCartActionUser = createAction<Order>(actionUser.addCart);
export const updateCartActionUser = createAction<Order>(actionUser.updateCart);
export const deleteCartActionUser = createAction<Order>(actionUser.deleteCart);
