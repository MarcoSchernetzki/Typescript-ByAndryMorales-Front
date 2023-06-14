import { useProduct } from '../../../product/hook/useProduct';
import { ProductIOld } from '../../../product/model/type';
import Styles from '../productPage.module.css';

function ProductList({ item }: { item: Array<ProductIOld> }) {
    const { handleDelete } = useProduct();

    const handleClick = (item: ProductIOld) => {
        handleDelete(item.id as string);
    };
    return (
        <>
            {item.map((item) => (
                <li
                    key={Math.floor(Math.random() * 1000)}
                    className={Styles.productList}
                    onClick={() => handleClick(item)}
                >
                    {' '}
                    Eliminar :
                    <button className={Styles.btnAddSend}> {item.name}</button>
                </li>
            ))}
        </>
    );
}

export default ProductList;
