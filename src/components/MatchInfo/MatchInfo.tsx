import React from 'react'
import { cn } from '@bem-react/classname';
import "./MatchInfo.css"

interface Props{
    data:{
        dire_score: any,
    },
    match?:{
        params:{
            id: any
        }
    }
}

const MatchInfo: React.FC<Props> = ({data, match}) => {
    const {dire_score} = data;
    const cnMatchInfo = cn("MatchInfo");
    return (
        <div className ={cnMatchInfo()}>
            <div>Match Info: {dire_score}</div>
        </div>
    )
}

export default MatchInfo
