import './homePage.css';
import {
    DataComentType,
    dataCertificate,
    dataComent,
} from '../../../infrastructure/data/data';
import { ServicesList } from '../servicesList/servicesList';

export function HomePage() {
    return (
        <>
            <main>
                <div className="container-highlight">
                    <img
                        className="highlight-image"
                        src="./assets/andry/andry-1.jpg"
                        alt="andry morales"
                        width="100%"
                    />
                </div>
                <div className="keen-slider container-certificate">
                    {dataCertificate.map((item: string, index: number) => {
                        return (
                            <li
                                key={index}
                                className="keen-slider__slide certificate"
                            >
                                <img
                                    className="certificate-image"
                                    src={item}
                                    alt="certificados"
                                    width="320px"
                                />
                            </li>
                        );
                    })}
                </div>
                <div className="container-service">
                    <ServicesList />
                    <div className="divButton">
                        <button
                            className="button-appoint"
                            onClick={() => {
                                window.location.assign(
                                    'https://widget.treatwell.es/establecimiento/100043880/servicios/'
                                );
                            }}
                        >
                            Pide tu Cita
                        </button>
                    </div>
                </div>
                <div className="container-keen-slider">
                    <div className="container-line" />
                    <p>Mis clientes dicen</p>
                    <div className="keen-slider comments">
                        {dataComent.map((item: DataComentType) => {
                            return (
                                <img
                                    key={item.id}
                                    className="keen-slider__slide"
                                    src={item.image}
                                    alt="comentarios de clientes"
                                    width="120px"
                                />
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}
