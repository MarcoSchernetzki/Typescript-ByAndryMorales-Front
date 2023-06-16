import { Link } from 'react-router-dom';
import Styles from './menu.module.css';

export function Menu() {
    const menuOptions = [
        { id: '1', path: 'Servicios', label: 'Servicios' },
        { id: '2', path: 'Productos', label: 'Productos' },
        {
            id: '3',
            path: 'Carrito',
            label: (
                <img
                    src={'./assets/shopping-cart.png'}
                    alt="carrito"
                    width="30px"
                />
            ),
        },
        {
            id: '4',
            path: 'Ingresar',
            label: (
                <img
                    src={'./assets/person-add.png'}
                    alt="ingresar"
                    width="30px"
                />
            ),
        },
    ];
    return (
        <nav className={Styles.nav}>
            <ul className={Styles.ul}>
                {menuOptions.map((item) => (
                    <li key={item.id}>
                        <Link className={Styles.link} to={item.path}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
