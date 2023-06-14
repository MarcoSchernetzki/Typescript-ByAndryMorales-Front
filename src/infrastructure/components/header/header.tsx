import { useNavigate, Link } from 'react-router-dom';
import './header.css';
import { useUser } from '../../../features/user/hook/useUser';

export const Header = () => {
    const navigate = useNavigate();
    const { user, handleLogout } = useUser();
    return (
        <header>
            <div className="container-header">
                {user.user ? (
                    <>
                        {' '}
                        <h2>Cuenta de {user.user.name}</h2>{' '}
                        <button
                            className="button"
                            onClick={(e) => {
                                e.preventDefault();
                                handleLogout();
                                navigate('/login');
                            }}
                        >
                            Salir
                        </button>{' '}
                    </>
                ) : (
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
                )}
            </div>
        </header>
    );
};
