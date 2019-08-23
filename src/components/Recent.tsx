import React, { useEffect, useState } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, makeStyles, Chip, Avatar, Typography, withWidth } from '@material-ui/core';
import { getHeroes, getHeroName } from '../functions/getHeroName'
import { WithWidth } from '@material-ui/core/withWidth';

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
    }],
}

const useStyles = makeStyles(theme => ({
    paper: {
      backgroundColor: '#222629',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    head: {
        color: '#94b4c3',
    },
    body: {
        color: '#eee2dc'
    },
    tablecell: {
        borderBottomColor:  '#3f51b5',
        [theme.breakpoints.down(600)]: {
            padding: '14px 4px',
        },
    },
    chip: {
        color: '#5cdb95',
        borderColor: '#5cdb95',
        margin: '20px auto 0',
        display: 'flex',
        width: 200,
    },
    avatar: {
        height: 33,
        width: 59,
    },
    root: {
        border: '1px solid white',
        borderRadius: '0',
    },
    text: {
        color: '#eee2dc',
        marginLeft: 30,
            [theme.breakpoints.down(600)]: {
                marginLeft: 8, 
            },
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
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
  }));

const Recent: React.FC<Props & RouteComponentProps & WithWidth> = ({recent, history, width}) => {
    const classes = useStyles();
    const [heroes, setHeroes] = useState();
    const [success, setSuccess] = useState(false);
    const [break600, setBreak600] = useState(width.includes('sm') || width.includes('xs'));

    useEffect(() => setBreak600(width.includes('sm') || width.includes('xs')), [width])

    const fetchHeroes = () => {
        setSuccess(false);
        getHeroes()
        .then(data => setHeroes(data))
        .then(() => setSuccess(true))
    }
    useEffect(() => fetchHeroes(), [])

    return (
        <>
            <Chip label="Recent Matches" className={classes.chip} variant="outlined"/>
            <Paper className={classes.paper}>    
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell classes={{head: classes.head, root: classes.tablecell}} align="center">Hero</TableCell>
                            <TableCell classes={{head: classes.head, root: classes.tablecell}} align="center">W/L</TableCell>
                            {!break600 && <TableCell classes={{head: classes.head, root: classes.tablecell}} align="center">K/D/A</TableCell>}
                            {!break600 && <TableCell classes={{head: classes.head, root: classes.tablecell}} align="center">Duration</TableCell>}
                            {!break600 && <TableCell classes={{head: classes.head, root: classes.tablecell}} align="center">GPM</TableCell>}
                            {!break600 && <TableCell classes={{head: classes.head, root: classes.tablecell}} align="center">XPM</TableCell>}
                        </TableRow>
                    </TableHead>
                <TableBody>
                {recent.map(match => (
                    <TableRow key={match.match_id} hover onClick={() => history.push(`/match/${match.match_id}`)}>
                        <TableCell classes={{body: classes.body, root: classes.tablecell}}>
                            {!success && `${match.hero_id}`}
                            {success && 
                            <Paper className={classes.wrapper} elevation={0}>
                                <Avatar alt="avatar" src={`http://cdn.dota2.com/apps/dota2/images/heroes/${getHeroName(heroes, match.hero_id)}_sb.png`} className={classes.avatar} classes={{root: classes.root}} />
                                <Typography className={classes.text}>{getHeroName(heroes, match.hero_id).replace('_',' ').toUpperCase()}</Typography>
                            </Paper>
                            }
                        </TableCell>
                        <TableCell classes={{body: classes.body, root: classes.tablecell}} align="center">
                            {success &&
                                match.radiant_win ?
                                (match.player_slot < 128 ? <Chip label="Win" className={classes.chipwin} variant="outlined"/> : <Chip label="Lose" className={classes.chiplose} variant="outlined"/>):
                                (match.player_slot >= 128 ? <Chip label="Win" className={classes.chipwin} variant="outlined"/> : <Chip label="Lose" className={classes.chiplose} variant="outlined"/>)
                            }
                        </TableCell>
                        {!break600 && <TableCell classes={{body: classes.body, root: classes.tablecell}} align="center">{match.kills}/{match.deaths}/{match.assists}</TableCell>}
                        {!break600 && <TableCell classes={{body: classes.body, root: classes.tablecell}} align="center">{Math.round(match.duration/60)}</TableCell>}
                        {!break600 && <TableCell classes={{body: classes.body, root: classes.tablecell}} align="center">{match.gold_per_min}</TableCell>}
                        {!break600 && <TableCell classes={{body: classes.body, root: classes.tablecell}} align="center">{match.xp_per_min}</TableCell>}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Paper>
      </>  
    )
}

export default withWidth()(withRouter(Recent))
