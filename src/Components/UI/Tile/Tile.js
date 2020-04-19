//Component for clickable Tiles that have a link to another site

import React from 'react'

//CSS
import classes from './Tile.module.css';
//

const Tile = (props) => {
    const logo = props.image;

    return (
        <div className={classes.Tile}>
            <a href={props.link}>
                <img src={require(`../../../assets/images/${logo}`)} alt={props.tileName} />
            </a>
        </div>
    )
}

export default Tile;