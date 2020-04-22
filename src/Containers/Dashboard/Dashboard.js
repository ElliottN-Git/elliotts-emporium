// Main container for 'Featured tiles' dashboard

import React, { Component } from 'react'
import Aux from '../../hoc/Auxillary/Auxillary';

//CSS
import classes from './Dashboard.module.css';
//

//Components
import Tile from '../../Components/UI/Tile/Tile';
//

//TODO scroll past header, Dashboard pins to top and 'picks up'
//the items as you scroll past them

const tiles = [
    { id: 1, tileName: 'LinkedIn', link: 'https://www.linkedin.com/in/elliott-nixon/', image: 'Linkedin-logo-full.jpg' },
    { id: 2, tileName: 'GitHub', link: 'https://github.com/ElliottN-Git/', image: 'GitHub-Logo1.png' }
]

export default class Dashboard extends Component {

    render() {
        return (
            <Aux>
                <div className={classes.Dashboard}>
                    {tiles.map(tile => (
                        <Tile
                            key={tile.id}
                            tileName={tile.tileName}
                            link={tile.link}
                            image={tile.image}
                        />
                    ))}
                </div>
            </Aux>
        )
    }
}