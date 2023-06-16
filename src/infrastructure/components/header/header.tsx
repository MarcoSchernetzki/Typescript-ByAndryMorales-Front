import { Link } from 'react-router-dom';
import './header.css';

export function Header() {
    return (
        <header>
            <div className="header-bar">
                <Link to={'./'} className="link">
                    <img
                        src="../../../../assets/logo-andry-gota.svg"
                        alt="Andry Morales logo"
                        width="40px"
                    />
                </Link>

                <Link to={'./login'} className="link">
                    <img
                        src="../../../../assets/person-add.svg"
                        alt="iniciar sesion"
                        width="30px"
                    />
                </Link>
            </div>
        </header>
    );
}
