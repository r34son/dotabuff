import React, { useState } from 'react'
import { cn } from '@bem-react/classname';
import IDForm from "../IDForm/IDForm"
import MatchInfo from "../MatchInfo/MatchInfo"
import "./MatchPage.css"

const MatchPage = () => {
    const [match, setMatch] = useState();
    const [success, setSuccess] = useState(false);
    const cnMatch = cn("MatchPage");

    const getMatch = (ID:number) => {
        fetch(`https://api.opendota.com/api/matches/${ID}`)
        .then(res => res.json())
        .then(data => {
            setMatch(data);
            return data;
        })
        .then(data => console.log(data))
        .then(() => setSuccess(true))
    }
    return (
        <main className={cnMatch()}>
           <IDForm onSubmit={getMatch} placeholder="Match ID"/>
           {success && <MatchInfo match={match}/>}
        </main>
    )
}

export default MatchPage
