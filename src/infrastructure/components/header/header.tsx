import { Link } from 'react-router-dom';
import Styles from './header.module.css';

export function Header() {
    return (
        <header>
            <div className={Styles.header}>
                <div className={Styles.headerMobile}>
                    <Link to="Home">
                        <img
                            className={Styles.headerLogo}
                            src={'./assets/logo-andry-gota.svg'}
                            alt="logo de una gota"
                            width="70px"
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
}
