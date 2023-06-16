import { data } from '../../../infrastructure/data/data';
import Styles from './home.Page.module.css';
import HomeList from './homeList/homeList';

function HomePage() {
    const products = data;
    return (
        <main className={Styles.main}>
            <div className={Styles.photoLogo}>
                <button
                    className={Styles.pideCita}
                    onClick={() => {
                        window.location.assign(
                            'https://widget.treatwell.es/establecimiento/100043880/servicios/'
                        );
                    }}
                >
                    PIDE CITA
                </button>
            </div>
            <div className={Styles.containerProduct}>
                <div className={Styles.productTittle}>NUESTROS PRODUCTOS</div>
                <div className={Styles.productList}>
                    <div>
                        <img
                            src={'./assets/arrow-left.svg'}
                            alt="flecha hacia la izquierda"
                            width="30px"
                        />
                    </div>
                    <div className={Styles.productImage}>
                        <HomeList item={products} key={Math.random() * 233} />
                    </div>
                    <div>
                        <img
                            src={'./assets/arrow-right.svg'}
                            alt="flecha hacia la derecha"
                            width="30px"
                        />
                    </div>
                </div>
                <div className={Styles.productTittle}>100% naturales</div>
            </div>
            <div className={Styles.photoCejas}></div>
        </main>
    );
}

export default HomePage;
