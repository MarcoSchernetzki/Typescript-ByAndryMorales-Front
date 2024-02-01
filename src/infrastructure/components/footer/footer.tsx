import { useState } from 'react';
import { Modal } from '../../core/modal/modal';
import styles from './footer.module.css';

export const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    return (
        <>
            <footer className={styles.footer}>
                <img
                    src="../../../../assets/logo-andry-gota.svg"
                    alt="Andry Morales logo"
                    width="40px"
                />
                <div className={styles.footer_container}>
                    <a
                        href="https://wa.me/34653538373?text=Hola,%20me%20gustaria%20reservar%20una%20cita."
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className={styles.social__icon}
                            src="../../../../assets/footer/logo-whatsapp.svg"
                            alt="whatsapp"
                            width="25px"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/by_andrymorales/?hl=es"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className={styles.social__icon}
                            src="../../../../assets/footer/logo-insta.svg"
                            alt="instagram"
                            width="25px"
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=100087617080427"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className={styles.social__icon}
                            src="../../../../assets/footer/logo-facebook.svg"
                            alt="facebook"
                            width="25px"
                            height="27px"
                        />
                    </a>
                    <a
                        href="https://www.google.es/maps/place/By+Andry+Morales/@40.4288709,-3.7074863,17z/data=!3m1!4b1!4m6!3m5!1s0xd4229e1d4441ec7:0x61cc874212bc193b!8m2!3d40.4288668!4d-3.7049114!16s%2Fg%2F11vjh3wkp0?entry=ttu"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className={styles.social__icon}
                            src="../../../../assets/footer/location.svg"
                            alt="ubicacion"
                            width="25px"
                            height="27px"
                        />
                    </a>
                    <img
                        className={styles.social__icon}
                        src="../../../../assets/footer/clock.svg"
                        alt="email"
                        width="25px"
                        onClick={handleClick}
                    />
                </div>
            </footer>
            <Modal isOpen={isOpen} handleClose={handleClick}>
                <div>
                    <h2 style={{ margin: '0 auto 15px' }}>Ven a visitarnos</h2>
                    <p>
                        <strong>lun a vier:</strong> 10:00 a 21:00hs
                    </p>
                    <p>
                        <strong>sabado:</strong> 10:00 a 20:00hs
                    </p>
                    <p>
                        <strong>domingo:</strong> cerrado
                    </p>
                    <p style={{ marginTop: '10px' }}>
                        <strong>Correo:</strong> byandrymorales@gmail.com
                    </p>
                </div>
            </Modal>
        </>
    );
};
