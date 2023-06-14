import { ProductIOld } from '../../product/model/type';

export type Order = {
    productId: ProductIOld;
    amount: number;
};
export type Role = 'user' | 'admin';
export type ProtoUser = {
    id?: string;
    name?: string;
    email?: string;
    passwd?: string;
    isDelete?: boolean;
    role?: Role;
    myProducts?: Array<Order>;
};
export type User = {
    id: string;
    name: string;
    email: string;
    passwd: string;
    isDelete: boolean;
    role: Role;
    myProducts: Array<Order>;
};
export type UserToken = {
    user: User;
    token: string;
};
