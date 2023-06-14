import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { UserRepository } from '../service/userRepository';
import * as ac from '../reducer/action.creator';
import { Order, ProtoUser } from '../model/type';

export const useUser = () => {
    const user = useSelector((state: rootState) => state.users);
    const dispatcher = useDispatch();
    const apiUser = useMemo(() => new UserRepository(), []);

    const handleLogin = (user: ProtoUser) => {
        apiUser.login(user).then((response) => {
            dispatcher(ac.loginActionUser(response));
        });
    };
    const handleLogout = () => {
        dispatcher(ac.logoutActionUser());
    };
    const handleAddCart = (order: Order) => {
        apiUser.addCart(order.productId.id as string);
        dispatcher(ac.addCartActionUser(order));
    };
    const handleDeleteCart = (order: Order) => {
        apiUser.deleteCart(order.productId.id as string);
        dispatcher(ac.deleteCartActionUser(order));
    };

    return {
        user,
        handleLogin,
        handleAddCart,
        handleDeleteCart,
        handleLogout,
    };
};
