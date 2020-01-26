import React from "react";
import { Card } from '@material-ui/core/'

const HeroCard = (props) => {
    console.log("Props", props);
    return (
        <Card>
            <h1>{props.hero.name}</h1>
            <img src={props.hero.image.url}/>
            <h2>{props.hero.biography['full-name']}</h2>
        </Card>
            
    )
}

export default HeroCard;