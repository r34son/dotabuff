import React, { useState } from 'react'
import { cn } from '@bem-react/classname';
import IDForm from "../IDForm/IDForm"
import PlayerInfo from "../PlayerInfo/PlayerInfo"
import "./PlayerPage.css"

const PlayerPage = () => {
    const [player, setPlayer] = useState();
    const [recent, setRecent] = useState();
    const [wl, setWl] = useState();
    const [success, setSuccess] = useState(false);
    const cnPlayerPage = cn("PlayerPage");

    const onSubmit = (ID: number) => {
        fetch(`https://api.opendota.com/api/players/${ID}`)
        .then(res => res.json())
        .then(data => {
            setPlayer(data);
            console.log("player",data);
            return fetch(`https://api.opendota.com/api/players/${ID}/recentMatches`);
        })    
        .then(res => res.json())
        .then(data => {
            setRecent(data);
            console.log("recent",data);
            return fetch(`https://api.opendota.com/api/players/${ID}/wl`);
        })
        .then(res => res.json())
        .then(data => {
            setWl(data);
            console.log("wl", data);
        })
        .then(() => setSuccess(true))
    }

    return (
        <main className={cnPlayerPage()}>
            <IDForm onSubmit={onSubmit} placeholder="Player ID"/>
            {success && <PlayerInfo player={player} recent={recent}/>}
        </main>
    )
}

export default PlayerPage
