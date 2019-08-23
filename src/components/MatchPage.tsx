import React, { useState, useEffect } from 'react'
import MatchInfo from "./MatchInfo"
import Loading from './Loading';
import { RouteComponentProps } from 'react-router';

const MatchPage: React.FC<RouteComponentProps<{id: any}>> = ({match}) => {
    const [matchInfo, setMatchInfo] = useState();
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const getMatchInfo = (ID:number) => {
        setLoading(true);
        setSuccess(false);
        fetch(`https://api.opendota.com/api/matches/${ID}`)
        .then(res => res.json())
        .then(data => {
            setMatchInfo(data);
            return data;
        })
        .then(data => console.log(data))
        .then(() => setSuccess(true))
        .then(() => setLoading(false))
    }

    useEffect(() => getMatchInfo(match.params.id), [match.params.id]);

    return (
        <main>
            {!success && loading && <Loading/>}
            {success && <MatchInfo data={matchInfo}/>}
        </main>
    )
}

export default MatchPage
