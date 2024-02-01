import { useLocation, useNavigate } from 'react-router-dom';
import { menuRoutesI } from '../../../constants/menuRoutes/menuRoutes';
import './sectionMenu.css';
import { useState } from 'react';

export const SectionMenu = ({
    sections,
    setIsOpen,
}: {
    sections: Array<menuRoutesI>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const { pathname } = useLocation();
    const [menuSelected, setMenuSelected] = useState(pathname);
    const navigate = useNavigate();
    const handleClick = (path: string) => {
        setMenuSelected(path);
        navigate(path);
        setIsOpen(false);
    };
    return (
        sections && (
            <ul className="menu-ul">
                {sections.map((item) => {
                    return (
                        <li
                            className={`menu-li ${
                                menuSelected === item.path ? 'active' : ''
                            }`}
                            key={item.text}
                            onClick={() => handleClick(item.path)}
                        >
                            <p>{item.text}</p>
                        </li>
                    );
                })}
            </ul>
        )
    );
};
