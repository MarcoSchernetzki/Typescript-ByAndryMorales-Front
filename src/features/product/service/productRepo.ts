export interface ProductRepo<T> {
    findAll: () => Promise<Array<T>>;
    findOne: (id: string) => Promise<T>;
    createProduct: (product: T) => Promise<T>;
    updateProduct: (id: string, partialProduct: Partial<T>) => Promise<T>;
    deleteProduct: (id: string) => Promise<void>;
}
