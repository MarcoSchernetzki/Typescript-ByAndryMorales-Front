import { useState, SyntheticEvent } from 'react';
import './giftCardPage.css';
import { Loader } from '../../../infrastructure/core/loader/loader';

export const GiftCardPage = () => {
    const [giftCardState, setGiftCardState] = useState({
        name: '',
        money: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setGiftCardState({
            ...giftCardState,
            [element.name]: element.value,
        });
    };
    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        setIsLoading(true);
        fetch('https://formsubmit.co/ajax/byandrymorales@gmail.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(giftCardState),
        })
            .then((res) => res.json())
            .then(() => {
                window.open(
                    'https://widget.treatwell.es/establecimiento/100043880/servicios/',
                    '_blank'
                );
                return setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    };

    return isLoading ? (
        <Loader />
    ) : (
        <div className="container-main">
            <span className="tittle-bottom" />
            <h2 className="tittle">Gift Card - Tarjeta de Regalo</h2>
            <div className="container-giftCard">
                <div className="giftCard-layer">
                    <div className="giftCard-container-img">
                        <img
                            src="../../../../assets/giftcard.jpg"
                            alt="gift card"
                            width="300px"
                            className="giftCard-img"
                        />
                        <p className="giftCard-money">
                            {giftCardState.money} €
                        </p>
                        <p className="giftCard-name">{giftCardState.name}</p>
                    </div>
                    <p className="giftCard-description">
                        Regala belleza y bienestar con nuestra tarjeta de
                        regalo, que te permite sorprender a esa persona desea
                        realzar su belleza. La Gift Card puede redimirse por
                        cualquiera de nuestros tratamientos, especializada en
                        realzar tu mirada. Un producto flexible, facil de usar y
                        regalar, que puedes recargar con el monto que desees y
                        rebicirla en digital con una excelente presentacion,
                        lista para ser entregada.
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            type="number"
                            name="amount"
                            placeholder="Cantidad"
                            onInput={handleInput}
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="money"
                            placeholder="Monto (€)"
                            onInput={handleInput}
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email del destinatario"
                            onInput={handleInput}
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre del destinatario"
                            maxLength={16}
                            onInput={handleInput}
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="message"
                            placeholder="Mensaje"
                            onInput={handleInput}
                            required
                        />
                    </label>
                    <input
                        type="hidden"
                        name="_next"
                        value="http://localhost:3000"
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="giftCard-button">
                        <button type="submit" className="buttonSend">
                            Comprar Ahora
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
