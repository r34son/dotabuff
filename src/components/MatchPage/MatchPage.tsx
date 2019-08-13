import React, { useState, useEffect } from 'react'
import { cn } from '@bem-react/classname';
import IDForm from "../IDForm/IDForm"
import MatchInfo from "../MatchInfo/MatchInfo"
import "./MatchPage.css"
import Loading from '../Loading/Loading';

const MatchPage = (props:any) => {
    const [match, setMatch] = useState();
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const cnMatch = cn("MatchPage");

    const getMatchInfo = (ID:number) => {
        setLoading(true);
        setSuccess(false);
        fetch(`https://api.opendota.com/api/matches/${ID}`)
        .then(res => res.json())
        .then(data => {
            setMatch(data);
            return data;
        })
        .then(data => console.log(data))
        .then(() => setSuccess(true))
        .then(() => setLoading(false))
    }

    useEffect(() => getMatchInfo(props.match.params.id),[]);

    return (
        <main className={cnMatch()}>
            {!success && loading && <Loading/>}
           {success && <MatchInfo data={match}/>}
        </main>
    )
}

export default MatchPage
