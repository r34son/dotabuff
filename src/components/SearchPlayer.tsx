import React, { useState, useEffect } from 'react'
import { makeStyles, AppBar, Tabs, Tab, Typography, Paper } from '@material-ui/core';
import { Link, Route, RouteComponentProps } from 'react-router-dom';
import IDForm from './IDForm';
import SearchResult from './SearchResult';

const useStyles = makeStyles({
    AppBar: {
        background: '#222629',
        height: 70
    },
    Tab: {
        color: '#94b4c3',
        fontSize: 15,
        height: 70
    },
    text: {
        color: '#5cdb95',
    },
    paper: {
        backgroundColor: '#222629',
        padding: 30,
        margin: 50,
        color: '#5cdb95',
        textAlign: 'center',
    },
});

const SearchPlayer: React.FC<RouteComponentProps> = ({history}) => {
    const [current, setCurrent] = useState();
    const getCurrent = () => {
        switch (true) {
            case history.location.pathname.includes("/search/id/"): setCurrent(0); break;
            case history.location.pathname.includes("/search/name/"): setCurrent(1); break;
        }
    }
    useEffect(getCurrent, [history.location.pathname]);
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.AppBar} position="static">
                <Typography align='center' className={classes.text}>Search player for:</Typography>
                <Tabs  
                    value={current} 
                    onChange={(e, value) => setCurrent(value)} 
                    centered 
                    textColor="primary" 
                    indicatorColor="primary"
                >
                    <Tab className={classes.Tab} label="ID"   component={Link} to="/search/id/"/>
                    <Tab className={classes.Tab} label="Name" component={Link} to="/search/name/"/>
                </Tabs>
            </AppBar>
            <Route path="/search/" exact render={() => <Paper className={classes.paper}>Choose option ^^</Paper>} />
            <Route path="/search/id/" exact render={() => <IDForm forplayerid placeholder="Player ID" value="212884473"/>} />
            <Route path="/search/name/"  render={() => <IDForm forplayername placeholder="Player Name" value={history.location.pathname.split('/search/name/')[1]}/>} />   
            <Route path="/search/name/:name" component={SearchResult} />   
        </>
    )
}

export default SearchPlayer
