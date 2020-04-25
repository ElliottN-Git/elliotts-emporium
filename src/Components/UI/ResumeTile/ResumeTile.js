import React from 'react'

//CSS
import classes from './ResumeTile.module.css';
//

//Components
import Tile from '../Tile/Tile'
import Aux from '../../../hoc/Auxillary/Auxillary';
//


const ResumeTile = (props) => {
    return (
        <Aux>
            <div className={classes.ResumeTile} onClick={props.clicked}>
                <Tile
                    tileName='ResumeTile'
                    link=''
                    image='resumeLogo.jpg'
                    tileText='Resumé'
                />
                <h2>Resumé</h2>
            </div>
        </Aux>
    )
}

export default ResumeTile;
