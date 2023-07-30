import { useKeenSlider } from 'keen-slider/react';
import { useContext, useEffect } from 'react';
import './homePage.css';
import 'keen-slider/keen-slider.min.css';
import {
    DataComentType,
    dataCertificate,
    dataComent,
} from '../../../infrastructure/data/data';
import { ServicesList } from '../servicesList/servicesList';
import { ButtonAppoint } from '../../../infrastructure/core/buttonAppoint/buttonAppoint';
import { ProductContext } from '../../../infrastructure/context/context';
import { Loader } from '../../../infrastructure/core/loader/loader';

export const HomePage = () => {
    const { isLoaded, handleLoader } = useContext(ProductContext);

    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>;
                let mouseOver = false;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 5000);
                }
                slider.on('created', () => {
                    slider.container.addEventListener('mouseover', () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener('mouseout', () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });
                slider.on('dragStarted', clearNextTimeout);
                slider.on('animationEnded', nextTimeout);
                slider.on('updated', nextTimeout);
            },
        ]
    );

    useEffect(() => {
        if (!isLoaded) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'scroll';
        };
    }, [isLoaded]);

    return (
        <>
            {!handleLoader() && <Loader />}
            <div className="container-highlight">
                <img
                    className="highlight-image"
                    src="./assets/andry/andry-1.jpg"
                    alt="andry morales"
                    width="100%"
                />
            </div>
            <div ref={sliderRef} className="keen-slider container-certificate">
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
            </div>
            <div className="container-keen-slider">
                <div className="container-line" />
                <p>Mis clientes dicen</p>
                <div ref={sliderRef} className="keen-slider comments">
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
            <div className="container-button">
                <ButtonAppoint />
            </div>
        </>
    );
};
