import React from 'react';
import { TextField } from '@material-ui/core'
import { connect } from 'react-redux';
import {loadingHero} from '../actions/index';

const SearchBar = (props) => {
    const getHero = e => {
        e.preventDefault();
        props.loadingHero();
    }
    return(
        <form onSubmit={getHero}>
            <TextField id="outlined-basic" label="Search" variant="outlined" />
        </form>
    )
}

export default connect (null,{loadingHero}) (SearchBar);