import { UserToken } from '../model/type';

export interface UserRepo<T> {
    findOne: (id: string) => Promise<T>;
    register: (user: Partial<T>) => Promise<T>;
    login: (user: Partial<T>) => Promise<UserToken>;
    addCart: (id: string) => Promise<T>;
    updateCart: (id: string, partialUser: Partial<T>) => Promise<T>;
    deleteCart: (id: string) => Promise<void>;
}
