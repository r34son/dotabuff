import React, {useState} from 'react'
import { cn } from '@bem-react/classname';
import "./IDForm.css"
import { placeholder } from '@babel/types';

interface Props{
    placeholder?: string,
    onSubmit: (arg0:number) => void;
}

const IDForm: React.FC<Props> = ({onSubmit, placeholder}) => {
    const [ID,setID] = useState('');
    const cnID = cn("IDForm");
    return (
        <form className={cnID()} onSubmit={(e) => {e.preventDefault(); onSubmit(+ID)}}>
            <input type="text" className={cnID("Input")} placeholder={placeholder || "ID"} onChange={(e) => setID(e.target.value)}/>
            <input type="submit" value="Search" className={cnID("Submit")}/>
        </form>
    )
}

export default IDForm
