import { useProduct } from '../../features/product/hook/use.Product';
import { ProductContext } from './context';

export function ProductContextProvider({
    children,
}: {
    children: JSX.Element;
}) {
    const context = useProduct();

    return (
        <ProductContext.Provider value={context}>
            {children}
        </ProductContext.Provider>
    );
}
