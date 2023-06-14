import { Link } from 'react-router-dom';
import { useUser } from '../../../features/user/hook/useUser';
import Styles from '../../../features/pages/cartPage/cartPage.module.css';

export function PrivateRoute({ children }: { children: JSX.Element }) {
    const { user } = useUser();
    return user.isLogged ? (
        children
    ) : (
        <main className={Styles.containerMain}>
            <div className={Styles.cartEmpty}>
                <img src="./assets/error-404.png" alt="pagina no encontrada" />
                Para disfrutar de todo el contenido
                <Link to="/Ingresar">inicie sesion aqui</Link>
            </div>
        </main>
    );
}
