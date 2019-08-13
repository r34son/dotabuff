import React from 'react'
import { cn } from '@bem-react/classname';
import "./Recent.css"
import { Link } from 'react-router-dom';

interface Props{
    recent: [{
        assists: any,
        deaths: any,
        duration: any,
        game_mode: any,
        gold_per_min: any,
        hero_damage: any,
        hero_healing: any,
        hero_id: any,
        is_roaming: any,
        kills: any,
        lane: any,
        lane_role: any,
        last_hits: any,
        leaver_status: any,
        lobby_type: any,
        match_id: any,
        party_size: any,
        player_slot: any,
        radiant_win: any,
        start_time: any,
        tower_damage: any,
        version: any,
        xp_per_min: any
    }]
}

const Recent: React.FC<Props> = ({recent}) => {
    const cnRecent = cn("Recent");
    return (
        <ul className={cnRecent()}>
            {recent.map(match => 
                <Link className={cnRecent("Match")} key={match.match_id} to={`/match/${match.match_id}`}>
                    <div className={cnRecent("Hero")}>
                        {match.hero_id}
                    </div>
                    <div className={cnRecent("KDA")}>
                        {match.kills}/{match.deaths}/{match.assists}
                    </div>
                </Link>
            )}  
        </ul>          
    )
}

export default Recent
