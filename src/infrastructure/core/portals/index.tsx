import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const createWrapperAndAppendToBody = (wrapperId: string) => {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
};
export const Portals = ({
    children,
    wrapperId = 'portals-wrapper',
}: {
    children: JSX.Element;
    wrapperId: string;
}) => {
    const [wrapperElement, setWrapperElement] = useState(null as any);
    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;
        if (!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element);
        return () => {
            if (systemCreated && element?.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [wrapperId]);
    if (wrapperElement === null) {
        return null;
    }
    return createPortal(children, wrapperElement);
};