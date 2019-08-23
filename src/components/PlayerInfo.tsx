import React from 'react'
import { Avatar, Paper, Typography, Link, Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from '@material-ui/core';
import Recent from './Recent';

const useStyles = makeStyles(theme => ({
    wrapper: {
        width: '90vw',
        margin: '20px auto',
        backgroundColor: 'transparent',
    },
    avatar: {
        height: 64,
        width: 64,
    },
    root: {
        border: '1px solid white',
        borderRadius: '50%',
    },
    header: {
        backgroundColor: '#222629',
        display: 'flex',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
        [theme.breakpoints.down(600)]: {
            flexDirection: 'column',
        },
    },
    text: {
        marginLeft: 25,
        color: '#3f51b5',
    },
    head: {
        color: '#94b4c3',
    },
    body: {
        color: '#eee2dc'
    },
    tableheadcell: {
        borderBottomColor:  '#3f51b5',
    },
    tablebodycell: {
        borderBottom:  'none',
    },
    win: { 
        color: '#5cdb95',
    },
    lose: {
        color: 'red',
    },
    stats: {
        backgroundColor: '#424242',
        [theme.breakpoints.down(600)]: {
            marginTop: 25,
        },
    },
    trpaper: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
  }));

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
    },
}

const PlayerInfo: React.FC<Props> = ({player, recent, wl}) => {
    const {
        mmr_estimate:{
                estimate
            },
        profile:{
            avatarfull,
            personaname,
            profileurl
    }} = player;
    const {
        win,
        lose
    } = wl;

    const classes = useStyles();
    return (
        <Paper className={classes.wrapper} elevation={0}>
            <Paper className={classes.header}>
                <Paper className={classes.trpaper} elevation={0}>
                    <Avatar alt="avatar" src={avatarfull} className={classes.avatar} classes={{root: classes.root}} />
                    <Link className={classes.text} href={profileurl}>{personaname}</Link>
                </Paper>
                <Paper className={classes.stats}> 
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell classes={{head: classes.head, root: classes.tableheadcell}}>Win-Loss</TableCell>
                            <TableCell classes={{head: classes.head, root: classes.tableheadcell}} align="center">MMR</TableCell>
                            <TableCell classes={{head: classes.head, root: classes.tableheadcell}} align="center">Winrate</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell classes={{body: classes.body, root: classes.tablebodycell}} component="th" scope="row">
                                    <Typography display='inline' className={classes.win}>{win}</Typography>
                                    - 
                                    <Typography display='inline' className={classes.lose}>{lose}</Typography> 
                                </TableCell>
                                <TableCell classes={{body: classes.body, root: classes.tablebodycell}} align="center">{estimate}</TableCell>
                                <TableCell classes={{body: classes.body, root: classes.tablebodycell}} align="center">{Math.round(win / (win + lose) * 100)} %</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </Paper>
            <Recent recent={recent}/>
        </Paper>
    )
}

export default PlayerInfo
