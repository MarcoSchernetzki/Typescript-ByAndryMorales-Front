import { useUser } from '../../user/hook/useUser';
import { User } from '../../user/model/type';
import Styles from './cartPage.module.css';

function CartPage() {
    const { user, handleDeleteCart } = useUser();
    console.log(user);

    return (
        <>
            {' '}
            <main className={Styles.containerMain}>
                <ul>
                    {(user.user as User).myProducts.length > 0 ? (
                        user.user?.myProducts.map((item) => {
                            return (
                                <li
                                    key={Math.floor(Math.random() * 1000)}
                                    className={Styles.cartContainer}
                                >
                                    <div className={Styles.cartProduct}>
                                        <img
                                            src={item.productId.image}
                                            alt={item.productId.name}
                                            width="100px"
                                        />

                                        <p>{item.productId.name}</p>
                                        <p>{item.productId.price} €</p>

                                        <div
                                            onClick={() =>
                                                handleDeleteCart(item)
                                            }
                                        >
                                            <img
                                                className={Styles.btnCartDelete}
                                                src={'./assets/cubo-basura.svg'}
                                                alt="cubo de basura"
                                                width="30px"
                                                placeholder={
                                                    item.productId.name
                                                }
                                            />
                                        </div>
                                    </div>
                                </li>
                            );
                        })
                    ) : (
                        <p className={Styles.cartEmpty}>
                            Tu carrito esta vacio
                        </p>
                    )}
                </ul>
            </main>
        </>
    );
}

export default CartPage;
