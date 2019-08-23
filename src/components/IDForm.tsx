import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { TextField, Button, Tooltip, makeStyles } from '@material-ui/core';

interface Props{
    value?: string,
    placeholder?: string,
    formatch?: boolean,
    forplayerid?: boolean,
    forplayername?: boolean,
}

const useStyles = makeStyles({
    textField: {
        marginLeft: 10,
        marginRight: 10,
        width: 200,
        color: '#94b4c3'
    },
    gray: {
        color: '#94b4c3'
    },
    input: {
        display: 'none',
    },
    form: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        height: 56,
        marginTop: 8,
        boxSizing: 'border-box',
    },
    root: {
        '& label': {
            color: '#6b6e70',
        },
        '& label.Mui-focused': {
          color: '#45a29e',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#474b4f',
          },
          '&:hover fieldset': {
            borderColor: '#6b6e70',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#45a29e',
            borderLeftWidth: 6,
            padding: '4px !important', // override inline-style
          },
        },
    },
  });


const IDForm: React.FC<Props> = ({ placeholder, value, forplayerid, formatch, forplayername }) => {
    const [ID,setID] = useState(value || '');
    const classes = useStyles();
    let path = '/';
    switch (true) {
        case forplayerid: path =`/player/${ID}`
            break;
        case forplayername: path = `/search/name/${ID}`
            break;
        case formatch: path = `/match/${ID}`
            break;
        }

    return (
        <form className={classes.form}>
            <TextField
                label={placeholder}
                defaultValue={ID}
                onChange={(e) => setID(e.target.value)}
                onSubmit={(e) => e.preventDefault()}
                className={classes.textField}
                classes={{
                    root:classes.root
                }}
                InputProps={{className: classes.gray}}
                margin="normal"
                autoFocus={!!value}
                variant="outlined"
            />
            <Tooltip 
                title={!ID && 'You must specify ID field'}
                disableHoverListener={!!ID}
            >
                <Button 
                    variant="outlined" 
                    color="primary" 
                    className={classes.button}
                    component={Link} 
                    to={path}
                >
                    Search
                </Button>
            </Tooltip>
        </form>
    )
}

export default IDForm
