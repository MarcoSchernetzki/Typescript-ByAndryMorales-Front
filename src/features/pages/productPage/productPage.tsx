import { SyntheticEvent, useState } from 'react';
import { useProduct } from '../../product/hook/useProduct';
import {
    Area,
    Category,
    ProductIOld,
    ProtoProductI,
} from '../../product/model/type';
import { useUser } from '../../user/hook/useUser';
import { User } from '../../user/model/type';
import ProductList from './productList/productList';
import Styles from './productPage.module.css';

function ProductPage() {
    const { user } = useUser();
    const { products, handleAdd } = useProduct();

    const initialState: ProtoProductI = {
        name: '',
        area: '' as Area,
        category: '' as Category,
        description: '',
        image: '',
        price: 0,
    };

    const [formState, setFormState] = useState(initialState);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };
    const handleClick = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleAdd(formState as ProductIOld);
    };

    return (
        <>
            {(user.user as User).role === 'admin' ? (
                <>
                    <div className={Styles.containerAdd}>
                        <form
                            onSubmit={handleClick}
                            className={Styles.register}
                        >
                            <p>Añade un Producto/Servicio</p>
                            <input
                                className={Styles.btnAddForm}
                                type="text"
                                name="name"
                                value={formState.name}
                                onInput={handleInput}
                                placeholder="Nombre"
                                required
                            />
                            <input
                                className={Styles.btnAddForm}
                                type="text"
                                name="description"
                                value={formState.description}
                                onInput={handleInput}
                                placeholder="Descripcion"
                                required
                            />
                            <input
                                className={Styles.btnAddForm}
                                type="text"
                                name="image"
                                value={formState.image}
                                onInput={handleInput}
                                placeholder="Imagen"
                                required
                            />
                            <input
                                className={Styles.btnAddForm}
                                type="number"
                                name="price"
                                value={formState.price}
                                onInput={handleInput}
                                placeholder="Precio"
                                required
                            />
                            <div>
                                <input
                                    className={Styles.btnAddForm}
                                    type="radio"
                                    name="area"
                                    value="ceja"
                                    onClick={handleInput}
                                    required
                                />
                                Ceja
                                <input
                                    className={Styles.btnAddForm}
                                    type="radio"
                                    name="area"
                                    value="manicura"
                                    onClick={handleInput}
                                    required
                                />
                                Manicura
                                <input
                                    className={Styles.btnAddForm}
                                    type="radio"
                                    name="area"
                                    value="pestaña"
                                    onClick={handleInput}
                                    required
                                />
                                Pestaña
                            </div>
                            <div>
                                <input
                                    className={Styles.btnAddForm}
                                    type="radio"
                                    name="category"
                                    value="producto"
                                    onClick={handleInput}
                                    required
                                />
                                Producto
                                <input
                                    className={Styles.btnAddForm}
                                    type="radio"
                                    name="category"
                                    value="servicio"
                                    onClick={handleInput}
                                    required
                                />
                                Servicio
                            </div>

                            <button type="submit" className={Styles.btnAddSend}>
                                Añadir
                            </button>
                        </form>
                    </div>
                    <ul>
                        <ProductList item={products} />
                    </ul>
                    <div className={Styles.productList}></div>
                </>
            ) : (
                <main className={Styles.containerProduct}>
                    <div className={Styles.productList}></div>
                </main>
            )}
        </>
    );
}

export default ProductPage;
