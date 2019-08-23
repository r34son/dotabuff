import React from 'react'
import { makeStyles, Card, CardContent, Typography, CardActions, Button, Paper, Tooltip, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    card: { 
        maxWidth: 400,
        backgroundColor: '#222629',
        marginBottom: 30,
    },
    paper: {
        width: '85vw',
        margin: '70px auto 0',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
        flexWrap: 'wrap',
    },
    button: {
        //color: '#5cdb95',
        //borderColor: '#5cdb95',
    },
    text: {
        color: '#eee2dc',
    },
    header: {
        color: '#5cdb95',
    },
    action: {
        justifyContent: 'center',
    },
    divider: {
        backgroundColor: '#5cdb95',
        marginBottom: 10,
    },
});

const MainPage = () => {
    const classes=useStyles();
    return (
        <Paper className={classes.paper} elevation={0}>
              <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align='center' className={classes.header}>
                        Search Matches
                    </Typography>
                    <Divider variant="middle" className={classes.divider}/>
                    <Typography variant="body2" className={classes.text} component="p">
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis corrupti optio iure explicabo repellat eos incidunt suscipit. Voluptatum libero nisi, consectetur culpa quod vel eum sed laborum quos fuga inventore reiciendis dolores consequuntur illum. Magni reiciendis quia quam. Quod, laborum corporis. Dolorem laudantium fugiat, exercitationem voluptatum consequatur ipsam ullam libero quaerat deleniti iusto consectetur itaque doloribus, magni quasi voluptate, illo voluptatem distinctio. Debitis adipisci, ratione consectetur facere dolorum id perferendis pariatur nam dicta iusto corporis delectus, sed sunt, nostrum nulla odit exercitationem quae error? A vitae facere, dolorum dolorem incidunt, officiis animi magnam ducimus quam sed voluptatum! Fugit, repellendus.
                    </Typography>
                </CardContent>
                <CardActions className={classes.action}>
                    <Tooltip 
                    title={'Find out DOTA2 matches statistics!'}
                    >
                        <Button 
                            variant="outlined" 
                            color="primary" 
                            className={classes.button}
                            component={Link} 
                            to="/match/"
                        >
                            Search Match
                        </Button>
                    </Tooltip>
                </CardActions>
            </Card>
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align='center' className={classes.header}>
                        Search Players
                    </Typography>
                    <Divider variant="middle" className={classes.divider}/>
                    <Typography variant="body2" className={classes.text} component="p">
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis corrupti optio iure explicabo repellat eos incidunt suscipit. Voluptatum libero nisi, consectetur culpa quod vel eum sed laborum quos fuga inventore reiciendis dolores consequuntur illum. Magni reiciendis quia quam. Quod, laborum corporis. Dolorem laudantium fugiat, exercitationem voluptatum consequatur ipsam ullam libero quaerat deleniti iusto consectetur itaque doloribus, magni quasi voluptate, illo voluptatem distinctio. Debitis adipisci, ratione consectetur facere dolorum id perferendis pariatur nam dicta iusto corporis delectus, sed sunt, nostrum nulla odit exercitationem quae error? A vitae facere, dolorum dolorem incidunt, officiis animi magnam ducimus quam sed voluptatum! Fugit, repellendus.
                    </Typography>
                </CardContent>
                <CardActions className={classes.action}>
                    <Tooltip 
                    title={'Find out DOTA2 players statistics!'}
                    >
                        <Button 
                            variant="outlined" 
                            color="primary" 
                            className={classes.button}
                            component={Link} 
                            to="/search/"
                        >
                            Search Player
                        </Button>
                    </Tooltip>
                </CardActions>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align='center' className={classes.header}> 
                            Search Matches
                        </Typography>
                        <Divider variant="middle" className={classes.divider}/>
                        <Typography variant="body2" className={classes.text} component="p">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis corrupti optio iure explicabo repellat eos incidunt suscipit. Voluptatum libero nisi, consectetur culpa quod vel eum sed laborum quos fuga inventore reiciendis dolores consequuntur illum. Magni reiciendis quia quam. Quod, laborum corporis. Dolorem laudantium fugiat, exercitationem voluptatum consequatur ipsam ullam libero quaerat deleniti iusto consectetur itaque doloribus, magni quasi voluptate, illo voluptatem distinctio. Debitis adipisci, ratione consectetur facere dolorum id perferendis pariatur nam dicta iusto corporis delectus, sed sunt, nostrum nulla odit exercitationem quae error? A vitae facere, dolorum dolorem incidunt, officiis animi magnam ducimus quam sed voluptatum! Fugit, repellendus.
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.action}>
                        <Tooltip 
                        title={'Main page'}
                        >
                            <Button 
                                variant="outlined" 
                                color="primary" 
                                className={classes.button}
                                component={Link} 
                                to="/"
                            >
                                Search
                            </Button>
                        </Tooltip>
                    </CardActions>
                </Card>
        </Paper>
    )
}

export default MainPage
