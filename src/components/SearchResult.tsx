import React, { useState, useEffect } from 'react'
import { RouteComponentProps, Link } from 'react-router-dom';
import Loading from './Loading';
import { List, ListItem, ListItemIcon, ListItemText, Avatar, makeStyles, Divider, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
        avatar: {
            height: 64,
            width: 64,
            marginRight: 30,
        },
        root: {
            border: '1px solid white',
            borderRadius: '50%',
        },
        list: {
            maxWidth: 500,
        },
        paper: {
            backgroundColor: '#222629',
            padding: 30,
            margin: 10,
            color: '#5cdb95',
            textAlign: 'center',
            width: 500,
        },
    }))

const SearchResult: React.FC<RouteComponentProps<{name: string}>> = ({match:{ params: {name}}}) => {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState();
    const classes = useStyles();

    const search = (name: string) => {
        setLoading(true);
        setSuccess(false);
        fetch(`https://api.opendota.com/api/search?q=${name}`)
        .then(res => res.json())
        .then(data => {
            setResult(data);
            console.log("result", data);
        })    
        .then(() => setSuccess(true))
        .then(() => setLoading(false))
    }

    useEffect(() => search(name), [name]);

    return (
        <section>
            {!success && loading && <Loading/>}
            {success && 
                result.length !== 0 ?
                <List className={classes.list}>
                    {result.map((player: { avatarfull: string, personaname: string, account_id: number, }) => 
                        <>
                            <ListItem button component={Link} to={`/player/${player.account_id}`}>
                                <ListItemIcon>
                                    <Avatar alt="avatar" src={player.avatarfull} className={classes.avatar} classes={{root: classes.root}} />
                                </ListItemIcon>
                                <ListItemText primary={player.personaname} />
                            </ListItem>
                            <Divider variant="middle"/>
                        </>
                    )}
                </List>:
                 <Paper className={classes.paper}>No results</Paper>
            }
        </section>
    )
}

export default SearchResult
