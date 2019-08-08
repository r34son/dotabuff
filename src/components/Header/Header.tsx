import React, {useState} from 'react'
import { cn } from '@bem-react/classname';
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    const [current, setCurrent] = useState(0);

    const cnHeader = cn("Header");
    return (
        <header className={cnHeader()}>
            <ul className={cnHeader("List")}>
                <li className={cnHeader("Item", {current: current == 0})} onClick={() => setCurrent(0)}>
                    <Link to="/match/">Match</Link> 
                </li>
                <li className={cnHeader("Item", {current: current == 1})} onClick={() => setCurrent(1)}>
                    <Link to="/player/">Player</Link> 
                </li>
                <li className={cnHeader("Item", {current: current == 2})} onClick={() => setCurrent(2)}>
                    <Link to="/">Smth...</Link> 
                </li>
            </ul>
        </header>
    )
}

export default Header
