import React, {useState} from 'react'
import { cn } from '@bem-react/classname';
import "./IDForm.css"
import { Link } from 'react-router-dom';

interface Props{
    value?: string,
    placeholder?: string,
    formatch?: boolean,
    forplayer: boolean
}

const IDForm: React.FC<Props> = ({ placeholder, value, forplayer, formatch = !forplayer}) => {
    const [ID,setID] = useState(value || '');
    const path = forplayer ? `/player/${ID}` : `/match/${ID}`;
    const cnID = cn("IDForm");
    return (
        <form className={cnID()}>
            <input type="text" className={cnID("Input")} placeholder={placeholder || "ID"} value={value} onChange={(e) => setID(e.target.value)}/>
            <Link className={cnID("Submit")} to={path}>Search</Link>
        </form>
    )
}

export default IDForm
