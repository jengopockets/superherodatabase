import React, {useState} from 'react';
import { TextField } from '@material-ui/core'
import { connect } from 'react-redux';
import {loadingHero} from '../actions/index';

const SearchBar = (props) => {

    const [search, setSearch] = useState("")

    const handleInput = e => {
        e.preventDefault();
        setSearch(e.target.value);
    }
    const getHero = e => {
        e.preventDefault();
        props.loadingHero(search);
    }
    return(
        <form onSubmit={getHero}>
            <TextField id="outlined-basic" label="Search" variant="outlined" type="text" value={search} onSubmit={getHero} onChange={handleInput}/>
        </form>
    )   
}

export default connect (null,{loadingHero}) (SearchBar);