import { ProductI } from '../model/type';
import { actionProduct } from './action.types';
import { productReducer } from './reducer';

describe('Given the function productReducer', () => {
    const productMock: ProductI = {
        name: 'D200',
        image: '',
        price: 30,
        id: '2',
        isAvailable: true,
        description: '',
        category: 'producto',
        area: 'manicura',
        clients: [],
    };

    let action: { type: string; payload: unknown };
    let state: Array<ProductI>;

    describe('When the action is load', () => {
        beforeEach(() => {
            action = {
                type: actionProduct.load,
                payload: [productMock],
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = productReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is add', () => {
        beforeEach(() => {
            action = {
                type: actionProduct.add,
                payload: productMock,
            };
            state = [];
        });
        test('Then the returned state should include the action payload', () => {
            const result = productReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update', () => {
        beforeEach(() => {
            action = {
                type: actionProduct.update,
                payload: { ...productMock, name: 'Update name' },
            };
            state = [productMock];
        });
        test('Then the returned state should include the action payload', () => {
            const result = productReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionProduct.update,
                payload: { ...productMock, id: 1, name: 'Update name' },
            };
            state = [productMock];
        });
        test('Then the returned state should be the original state', () => {
            const result = productReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is delete', () => {
        beforeEach(() => {
            action = {
                type: actionProduct.delete,
                payload: '2',
            };
            state = [productMock];
        });
        test('Then the returned state should not include the action payload', () => {
            const result = productReducer(state, action);
            expect(result).toEqual([]);
        });
    });

    describe('When the action is delete and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionProduct.delete,
                payload: { ...productMock, id: 1 },
            };
            state = [productMock];
        });
        test('Then the returned state should should be the original state', () => {
            const result = productReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is any other', () => {
        beforeEach(() => {
            action = {
                type: '',
                payload: null,
            };
            state = [productMock];
        });
        test('Then the returned state should be ...', () => {
            const result = productReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
