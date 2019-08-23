import React, { useState, useEffect } from 'react'
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Typography, Chip, Avatar } from '@material-ui/core';
import { getHeroes, getHeroName } from '../functions/getHeroName';

const useStyles = makeStyles(theme => ({
    paper: {
        width: '90vw',
        margin: '10px auto',
        backgroundColor: '#222629',
        marginTop: theme.spacing(2),
        overflowX: 'auto',
        flexWrap: 'wrap',
    },
    table: {
      minWidth: 650,
    },
    head: {
        color: '#94b4c3',
    },
    body: {
        color: '#eee2dc'
    },
    tablecell: {
        borderBottomColor:  '#3f51b5',
    },
    headerrow: {
        borderBottom: 'none',
    },
    headercell: {
        color:  '#3f51b5',
    },
    gray: {
        color: '#94b4c3',
        borderBottom:  'none',
    },
    text: {
        color: '#94b4c3',
        padding: theme.spacing(1),
    },
    toppaper: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    chipwin: {
        color: '#5cdb95',
        borderColor: '#5cdb95',
        marginLeft: 5,
    },
    chiplose: {
        color: '#9a1750',
        borderColor: '#9a1750',
        marginLeft: 5,
    },
    name: {
        color: '#eee2dc',
        marginTop: -40,
        marginLeft: 50,
        lineHeight: '36px',
    },
  }));

interface Props{
    data:{
        dire_score: any,
        duration: any,
        first_blood_time: any,
        game_mode: any,
        lobby_type: any,
        match_id: any,
        players: [{
            abandons: any,
            account_id: any,
            assists: any,
            deaths: any,
            denies: any,
            duration: any,
            gold_per_min: any,
            hero_id: any,
            hero_damage: any,
            hero_healing: any,
            hero_kills: any,
            isRadiant: any,
            kda: any,
            kills: any,
            lane: any,
            last_hits: any,
            level: any,
            lose: any,
            match_id: any,
            personaname: any,
            radiant_win: any,
            start_time: any,
            total_gold: any,
            total_xp: any,
            tower_damage: any,
            win: any,
            xp_per_min: any,
         }],
        /*radiant_gold_adv: (28) [0, -13, -445, -27, -687, -928, -1613, -1626, -2828, -2895, -3287, -5276, -5545, -6263, -5075, -5710, -8206, -8745, -10292, -12561, -13445, -17575, -21072, -24179, -26558, -27509, -33718, -40163]*/
        radiant_score: any,
        radiant_win: any,
        /*radiant_xp_adv: (28) [0, 103, -108, 100, -305, -384, -836, -1258, -2652, -3120, -2520, -2802, -2836, -3671, -1248, -2032, -3802, -4035, -6548, -8713, -11188, -14811, -18719, -22917, -25973, -27359, -36136, -40434]*/
        replay_url: any,
        start_time: any,
        version: any,
    }
}

const MatchInfo: React.FC<Props> = ({data}) => {
    const {
        dire_score, duration, match_id, players, radiant_score, radiant_win, start_time
    } = data;
    const [heroes, setHeroes] = useState();
    const [success, setSuccess] = useState(false);
    const fetchHeroes = () => {
        setSuccess(false);
        getHeroes()
        .then(data => setHeroes(data))
        .then(() => setSuccess(true))
    }
    useEffect(() => fetchHeroes(), [])
    
    const classes = useStyles();
    const timeConverter = (timestamp: number) => {
        var a = new Date(timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = `${date} ${month} ${year} ${hour}:${min}:${sec}`;
        return time;
      }
    const mapToTable: ([]: any[]) => void = players =>  players.map(player => ( 
        <TableRow key={player.hero_id} hover>
            <TableCell classes={{body: classes.body, root: classes.tablecell}}>
            {!success && `${player.hero_id}`}
            {success && <Avatar alt="avatar" src={`http://cdn.dota2.com/apps/dota2/images/heroes/${getHeroName(heroes, player.hero_id)}_sb.png`} /*className={classes.avatar} classes={{root: classes.root}}*/ />}
            {success && <Typography className={classes.name}>{player.personaname || "Nickname"}</Typography>}
             </TableCell>
            <TableCell classes={{body: classes.body, root: classes.tablecell}} align="center">{player.kills}/{player.deaths}/{player.assists}</TableCell>
            <TableCell classes={{body: classes.body, root: classes.tablecell}} align="center">{player.gold_per_min}</TableCell>
            <TableCell classes={{body: classes.body, root: classes.tablecell}} align="center">{player.xp_per_min}</TableCell>
            <TableCell classes={{body: classes.body, root: classes.tablecell}} align="center">{player.last_hits}/{player.denies}</TableCell>
        </TableRow>
    ))
    return (
        <>
            <Paper className={`${classes.paper} ${classes.toppaper}`}>
                <Typography className={classes.text}>Match {match_id}</Typography>
                <Typography className={classes.text}>Duration {Math.trunc(duration/60)}:{duration%60}</Typography>
                <Typography className={classes.text}>Started: {`${timeConverter(start_time)}`}</Typography>
            </Paper>
            <Paper className={classes.paper}>    
                <Table className={classes.table} size='small'>
                <TableHead>
                <TableRow>
                    <TableCell classes={{head: classes.head, root: classes.tablecell}}>Hero</TableCell>
                    <TableCell classes={{head: classes.head, root: classes.tablecell}} align="center">K/D/A</TableCell>
                    <TableCell classes={{head: classes.head, root: classes.tablecell}} align="center">GPM</TableCell>
                    <TableCell classes={{head: classes.head, root: classes.tablecell}} align="center">XPM</TableCell>
                    <TableCell classes={{head: classes.head, root: classes.tablecell}} align="center">LH/DN</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow classes={{root: classes.gray} }>
                        <TableCell classes={{body: classes.headercell, root: classes.headerrow}} align="center">
                            Radiant {radiant_win ? <Chip label="Win" className={classes.chipwin} variant="outlined"/> : <Chip label="Lose" className={classes.chiplose} variant="outlined"/>}
                        </TableCell>
                        <TableCell classes={{body: classes.body, root: classes.gray}} align="left"> Score: {radiant_score}</TableCell>
                    </TableRow>  
                    {mapToTable(players.filter(player => player.isRadiant))}
                    <TableRow>
                        <TableCell  classes={{body: classes.headercell, root: classes.headerrow}} align="center">
                            Dire {!radiant_win ? <Chip label="Win" className={classes.chipwin} variant="outlined"/> : <Chip label="Lose" className={classes.chiplose} variant="outlined"/>}
                        </TableCell>
                        <TableCell  classes={{body: classes.body, root: classes.gray}} align="left">Score: {dire_score}</TableCell>
                    </TableRow>  
                    {mapToTable(players.filter(player => !player.isRadiant))}
                </TableBody>
            </Table>
        </Paper>  
      </>
    )
}

export default MatchInfo
