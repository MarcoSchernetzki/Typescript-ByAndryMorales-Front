import { ProductI } from '../model/type';
import { ProductRepo } from './productRepo';

export class ProductRepository implements ProductRepo<ProductI> {
    urlBase: string;
    constructor(url = '') {
        this.urlBase = 'http://localhost:3200/product';
    }
    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }
    findAll(): Promise<Array<ProductI>> {
        return fetch(`${this.urlBase}`)
            .then((response) => response.json())
            .then((resp) => resp.products)
            .catch((error) => {
                return `${error}`;
            });
    }
    findOne(id: string): Promise<ProductI> {
        return fetch(`${this.urlBase}/${id}`)
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    createProduct(product: ProductI): Promise<ProductI> {
        return fetch(`${this.urlBase}/`, {
            method: 'POST',
            body: JSON.stringify(product),
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
    updateProduct(
        id: string | undefined,
        partialProduct: Partial<ProductI>
    ): Promise<ProductI> {
        return fetch(`${this.urlBase}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialProduct),
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
    deleteProduct(id: string): Promise<void> {
        return fetch(`${this.urlBase}/${id}`, {
            method: 'DELETE',
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
