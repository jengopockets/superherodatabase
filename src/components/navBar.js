import React from "react";

import { makeStyles } from '@material-ui/core/styles'

import  SearchBar  from "./searchbar";

const useStyles = makeStyles({
    nav: {
        background: 'linear-gradient(to right, #6190e8, #a7bfe8)',
        width: '100%',
    },
    navelmt: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }

})

const NavBar = () => {
    const classes = useStyles();
return (
    <div className={classes.nav}>
        <div className={classes.navelmt}>
            <h1 className="header">Superhero Database</h1>
            <SearchBar/>
            <div className="nav-links">
                {/* <NavLink className="link" to="/">Home</NavLink> */}
            </div>
        </div>
        

        
    </div>
)
}

export default NavBar;