import { ProtoUser, User, UserToken } from '../model/type';
import { UserRepo } from './userRepo';

export class UserRepository implements UserRepo<User> {
    urlBase: string;
    constructor(url = '') {
        this.urlBase = 'http://localhost:3200/user';
    }
    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }
    register(user: ProtoUser): Promise<User> {
        return fetch(`${this.urlBase}/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    login(user: ProtoUser): Promise<UserToken> {
        return fetch(`${this.urlBase}/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    findOne(id: string): Promise<User> {
        return fetch(`${this.urlBase}/${id}`)
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    addCart(id: string): Promise<User> {
        return fetch(`${this.urlBase}/cart/add/${id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    updateCart(id: string, partialUser: Partial<User>): Promise<User> {
        return fetch(`${this.urlBase}/cart/update/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialUser),
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    deleteCart(id: string): Promise<void> {
        return fetch(`${this.urlBase}/cart/delete/${id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                return `${error}`;
            });
    }
}
