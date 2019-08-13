import React from 'react'
import { cn } from '@bem-react/classname';
import Recent from "../Recent/Recent"
import "./PlayerInfo.css"

interface Props{
    player: {
        mmr_estimate: {
            estimate: any
        },
        profile:{
            account_id: any,
            avatar: any,
            avatarmedium: any,
            avatarfull: any,
            lastlogin: any,
            personaname: any,
            profileurl: any
        }
    },
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
    }],
    wl: {
        win: any,
        lose: any
    }
}

const PlayerInfo: React.FC<Props> = ({player, recent, wl}) => {
    const {
        mmr_estimate:{
                estimate
            },
        profile:{
            account_id,
            avatar,
            avatarmedium,
            avatarfull,
            lastlogin,
            personaname,
            profileurl
    }} = player;
    const {
        win,
        lose
    } = wl;
    const cnProfile = cn("ProfileInfo");
    return (
        <div className={cnProfile()}>
            <div className={cnProfile("Header")}>
                <div className={cnProfile("Info")}>
                    <img className={cnProfile("Avatar")} src={avatarmedium} alt="avatar"/>   
                    <a className={cnProfile("Name")} href={profileurl}>{personaname}</a> 
                </div>
                <div className={cnProfile("Stat")}>
                    <div className={cnProfile("Text")}><span className={cnProfile("Win")}>{win}</span> - <span className={cnProfile("Lose")}>{lose}</span></div>
                    <div className={cnProfile("Label")}>Win-Loss</div>
                </div>
                <div className={cnProfile("Stat")}>
                    <div className={cnProfile("Text")}><span className={cnProfile("MMR")}>{estimate} MMR</span></div>
                    <div className={cnProfile("Label")}>Estimate</div>
                </div>
                <div className={cnProfile("Stat")}>
                    <div className={cnProfile("Text")}><span className={cnProfile("Winrate")}>{Math.round(win / (win + lose) * 100)} %</span></div>
                    <div className={cnProfile("Label")}>Winrate</div>
                </div>
            </div>  
            <Recent recent={recent}/>   
        </div>
    )
}

export default PlayerInfo
