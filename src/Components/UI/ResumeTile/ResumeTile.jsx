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
            <div 
                className={classes.ResumeTile} 
                onClick={props.clicked}
                modallink='https://firebasestorage.googleapis.com/v0/b/elliotts-emporium.appspot.com/o/Elliott%20Nixon%20-%20CV.pdf?alt=media&token=dda90261-ea39-40dc-97a8-bf2f45f7baa8'
            > {/* onClick={(this.props.clicked(props.clicked, props.modalLink))} *//* modalLink={props.modalLink}> */}
                <Tile
                    tileName='ResumeTile'
                    link=''
                    image='resumeIcon.png'
                    tag='Resumé'
                >
                <h2>Resumé</h2>
                </Tile>
            </div>
        </Aux>
    )
}

export default ResumeTile;
