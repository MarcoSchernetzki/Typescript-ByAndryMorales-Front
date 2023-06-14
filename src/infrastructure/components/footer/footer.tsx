import Styles from './footer.module.css';

export function Footer() {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.icons}>
                <img
                    src={'./assets/logo-facebook.svg'}
                    alt="logo facebook"
                    width="20px"
                />
                <img
                    src={'./assets/logo-insta.svg'}
                    alt="logo instagram"
                    width="20px"
                />
                <img
                    src={'./assets/logo-whatsapp.svg'}
                    alt="logo whatsapp"
                    width="20px"
                />
            </div>

            <address>TERMINOS Y CONDICIONES | POLITICA DE PRIVACIDAD</address>
        </footer>
    );
}
