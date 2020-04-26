//Component for clickable Tiles that have a link to another site
import React from 'react'

import Aux from '../../../hoc/Auxillary/Auxillary';

//CSS
import classes from './Tile.module.css';
//

const Tile = (props) => {
    //storing the filename for the image in the logo variable and appending to 
    //the relative path for assets using template literal
    const logo = props.image;

    return (
        <Aux>
            <div className={classes.TileContainer}>
                <div className={classes.Tile}>
                    <a href={props.link}>
                        <img src={require(`../../../assets/images/${logo}`)} alt={props.tileName} />
                    </a>
                </div>
                <h2>{props.tag}</h2>
            </div>
        </Aux>
    )
}

export default Tile;