import React from "react";
import HeroCard from './card';
import { connect } from "react-redux";

const mapStateToProps = state => {
    console.log("State",state);
        return {
            results:state.results
        }
    

}

const Cards = props => {
    console.log(props.results);
    
    return(
        <div>
            {props.results.map(hero => (
                <HeroCard key={hero.id} hero={hero} />
            ))}
        </div>
    )
}

export default connect (mapStateToProps)(Cards)
