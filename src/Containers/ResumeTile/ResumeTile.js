import React from 'react'

//CSS
import classes from './ResumeTile.module.css';
//

//Components
import Tile from '../../Components/UI/Tile/Tile';
import Aux from '../../hoc/Auxillary/Auxillary';
//


const ResumeTile = () => {
    return (
        <Aux>
            <div className={classes.ResumeTile}>
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
