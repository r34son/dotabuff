import React from 'react'
import { cn } from '@bem-react/classname';
import "./MatchInfo.css"

interface Props{
    match:{
        dire_score: any,
    }
}

const MatchInfo: React.FC<Props> = ({match}) => {
    const {dire_score} = match;
    const cnMatchInfo = cn("MatchInfo");
    return (
        <div className ={cnMatchInfo()}>
            <div>{dire_score}</div>
        </div>
    )
}

export default MatchInfo
