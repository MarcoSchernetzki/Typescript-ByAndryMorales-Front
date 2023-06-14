import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../user/hook/useUser';
import { User } from '../../user/model/type';
import Styles from '../registerPage/register.module.css';

type formData = {
    name: string;
    passwd: string;
};

function LoginPage() {
    const { user, handleLogin, handleLogout } = useUser();

    const initialState: formData = {
        name: '',
        passwd: '',
    };

    const [formState, setFormState] = useState(initialState);

    const handleLoginInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };

    const handleLoginSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleLogin(formState);
    };

    return (
        <>
            {(user.user as User) ? (
                <>
                    {user.token ? (
                        localStorage.setItem('token', user.token)
                    ) : (
                        <></>
                    )}
                    <div className={Styles.containerForm}>
                        <form
                            onSubmit={handleLoginSubmit}
                            className={Styles.register}
                        >
                            <div>
                                <p>BIENVENID@, {user.user?.name}!</p>

                                <p>
                                    <img
                                        src={'./assets/perro_pestaña.svg'}
                                        alt="perrito con pestañas"
                                    />
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    handleLogout();
                                    localStorage.clear();
                                }}
                                className={Styles.btnLogin}
                            >
                                cerrar sesion
                            </button>
                        </form>
                    </div>
                </>
            ) : (
                <div className={Styles.containerForm}>
                    <form
                        onSubmit={handleLoginSubmit}
                        className={Styles.register}
                    >
                        <p>Formulario Login</p>
                        <input
                            className={Styles.btnInput}
                            type="text"
                            name="name"
                            value={formState.name}
                            onInput={handleLoginInput}
                            placeholder="Usuario"
                        />
                        <input
                            className={Styles.btnInput}
                            type="password"
                            name="passwd"
                            value={formState.passwd}
                            onInput={handleLoginInput}
                            placeholder="Contraseña"
                        />
                        <button type="submit" className={Styles.btnLogin}>
                            Ingresar
                        </button>

                        <p className={Styles.registerLink}>
                            <Link
                                className={Styles.registerLink}
                                to="/Registrar"
                            >
                                ¿No tienes cuenta?
                            </Link>
                        </p>

                        <p className={Styles.registerLink}>
                            <Link
                                className={Styles.registerLink}
                                to="/Registrar"
                            >
                                Registrate ahora!
                            </Link>{' '}
                        </p>
                    </form>
                </div>
            )}
        </>
    );
}

export default LoginPage;
