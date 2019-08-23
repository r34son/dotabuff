import React, {useState, useEffect} from 'react'
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { AppBar, Tabs, Tab, makeStyles } from '@material-ui/core';


const styles = makeStyles({
        AppBar: {
            background: '#222629',
            height: 70
        },
        Tab: {
            color: '#94b4c3',
            fontSize: 15,
            height: 70
        }
    });

const Header: React.FC<RouteComponentProps> = ({history}) => {
    const [current, setCurrent] = useState(0);
    const getCurrent = () => {
        switch (true) {
            case history.location.pathname==="/": setCurrent(0); break;
            case history.location.pathname.includes("/match/"): setCurrent(1); break;
            case history.location.pathname.includes("/player/") || history.location.pathname.includes('/search/'): setCurrent(2); break;
            default: setCurrent(0); break;
        }
    }
    useEffect(getCurrent, [history.location.pathname]);
    const classes = styles();
    return (
        <AppBar className={classes.AppBar} position="static">
            <Tabs  
                value={current} 
                onChange={(e, value) => setCurrent(value)} 
                centered 
                textColor="primary" 
                indicatorColor="primary"
            >
                <Tab className={classes.Tab} label="Dotabuff"   component={Link} to="/"/>
                <Tab className={classes.Tab} label="Match"      component={Link} to="/match/"/>
                <Tab className={classes.Tab} label="Search"     component={Link} to="/search/"/>
            </Tabs>
        </AppBar>
    )
}

export default withRouter(Header)
