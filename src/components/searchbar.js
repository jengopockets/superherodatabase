import React from 'react';
import { TextField } from '@material-ui/core'

const SearchBar = () => {
    return(
        <div>
            <TextField id="outlined-basic" label="Search" variant="outlined"/>
        </div>
    )
}

export default SearchBar;