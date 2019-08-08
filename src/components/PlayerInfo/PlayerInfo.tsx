import React from 'react'
import { cn } from '@bem-react/classname';
import "./PlayerInfo.css"

interface Props{
    player: {
        mmr_estimate: {
            estimate: any
        }
    },
    recent: {
        
    }
}

const PlayerInfo: React.FC<Props> = ({player}) => {
    const {mmr_estimate:{estimate}} = player;
    return (
        <div>
            {estimate}
        </div>
    )
}

export default PlayerInfo
