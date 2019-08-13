import React, { useState, useEffect } from 'react'
import { cn } from '@bem-react/classname';
import IDForm from "../IDForm/IDForm"
import PlayerInfo from "../PlayerInfo/PlayerInfo"
import Loading from "../Loading/Loading"
import "./PlayerPage.css"

const PlayerPage = (props:any) => {
    const [player, setPlayer] = useState();
    const [recent, setRecent] = useState();
    const [wl, setWl] = useState();
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const cnPlayerPage = cn("PlayerPage");

    const getPlayerInfo = (ID: number) => {
        setLoading(true);
        setSuccess(false);
        fetch(`https://api.opendota.com/api/players/${ID}`)
        .then(res => res.json())
        .then(data => {
            setPlayer(data);
            console.log("player", data);
            return fetch(`https://api.opendota.com/api/players/${ID}/recentMatches`);
        })    
        .then(res => res.json())
        .then(data => {
            setRecent(data);
            console.log("recent", data);
            return fetch(`https://api.opendota.com/api/players/${ID}/wl`);
        })
        .then(res => res.json())
        .then(data => {
            setWl(data);
            console.log("wl", data);
        })
        .then(() => setSuccess(true))
        .then(() => setLoading(false))
    }

    useEffect(() => getPlayerInfo(props.match.params.id),[]);

    return (
        <main className={cnPlayerPage()}>
            {!success && loading && <Loading/>}
            {success && <PlayerInfo player={player} recent={recent} wl={wl}/>}
        </main>
    )
}

export default PlayerPage
