import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../user/hook/useUser';
import { User } from '../../user/model/type';
import { UserRepository } from '../../user/service/userRepository';
import Styles from './register.module.css';

type formData = {
    name: string;
    email: string;
    passwd: string;
};

function Register() {
    const navigate = useNavigate();
    const { user } = useUser();
    const userRepo = new UserRepository();

    const initialState: formData = {
        name: '',
        email: '',
        passwd: '',
    };

    const [formState, setFormState] = useState(initialState);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };

    const handleSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();
        await userRepo.register(formState);
        navigate('/Ingresar');
    };

    return (
        <>
            {(user.user as User) ? (
                <div className={Styles.containerForm}>
                    <div className={Styles.register}>
                        <p>Gracias por unirte, {user.user?.name}!</p>

                        <p>
                            <img
                                src={'./assets/perro_pestaña.svg'}
                                alt="perrito con pestañas"
                            />
                        </p>
                    </div>
                </div>
            ) : (
                <div className={Styles.containerForm}>
                    <form onSubmit={handleSubmit} className={Styles.register}>
                        <p>Formulario de Registro</p>
                        <input
                            className={Styles.btnInput}
                            type="text"
                            name="name"
                            value={formState.name}
                            onInput={handleInput}
                            placeholder="Usuario"
                        />
                        <input
                            className={Styles.btnInput}
                            type="email"
                            name="email"
                            value={formState.email}
                            onInput={handleInput}
                            placeholder="Email"
                        />
                        <input
                            className={Styles.btnInput}
                            type="password"
                            name="passwd"
                            value={formState.passwd}
                            onInput={handleInput}
                            placeholder="Contraseña"
                        />
                        <button type="submit" className={Styles.btnLogin}>
                            Registrarse
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}

export default Register;
