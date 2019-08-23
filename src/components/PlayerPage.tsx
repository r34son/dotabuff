import React, { useState, useEffect } from 'react'
import PlayerInfo from "./PlayerInfo"
import Loading from "./Loading"
import { RouteComponentProps } from 'react-router-dom';

const PlayerPage: React.FC<RouteComponentProps<{id: any}>> = ({match}) => {
    const [player, setPlayer] = useState();
    const [recent, setRecent] = useState();
    const [wl, setWl] = useState();
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);


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

    useEffect(() => getPlayerInfo(match.params.id), [match.params.id]);

    return (
        <main>
            {!success && loading && <Loading/>}
            {success && <PlayerInfo player={player} recent={recent} wl={wl}/>}
        </main>
    )
}

export default PlayerPage
