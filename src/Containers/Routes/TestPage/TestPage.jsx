import React, { Component } from 'react';
import NavBar from '../../../Components/Navigation/NavBar';
import Aux from '../../../hoc/Auxillary/Auxillary';
import classes from './TestPage.module.css';

export class TestPage extends Component {
    render() {
        return (
            <Aux>
                <NavBar />
                <div className={classes.TestPage}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante lacus, tristique et fringilla non, dapibus vitae diam. Aenean semper lobortis ligula ut laoreet. Nam non mollis lorem. Aenean vulputate iaculis orci eget iaculis. Morbi justo neque, porta a ultrices eu, ultrices vitae nibh. Nulla vitae orci a elit elementum ultrices. Aenean sed erat vitae elit lacinia iaculis vitae vel nisi. Mauris facilisis scelerisque nulla, id consequat dui viverra nec. Mauris sollicitudin, quam vel faucibus dignissim, metus lacus consequat leo, in pretium erat purus in elit. Nunc maximus lorem ullamcorper diam interdum, quis pellentesque arcu sodales. Nulla facilisi. Nullam gravida gravida felis, sit amet mollis ipsum fringilla a.

                    Donec odio nibh, viverra eget dui ut, tincidunt mollis felis. Vivamus non scelerisque metus. Vivamus tortor lorem, laoreet vulputate ullamcorper ut, feugiat vitae lectus. Integer in feugiat ligula. Nullam mi sapien, rutrum ut leo vel, lacinia hendrerit elit. Quisque ornare metus libero, sed ornare tellus tincidunt eu. Curabitur nec viverra urna. Quisque sit amet congue sapien, at sollicitudin sapien. In laoreet iaculis consectetur. Donec gravida orci diam, ut tincidunt metus dapibus et. Fusce blandit ultrices tellus at efficitur. Aenean et ex id quam pharetra varius non id ligula.

                    Nunc vitae imperdiet libero. Curabitur accumsan suscipit lorem, sed tristique justo vestibulum in. Duis vitae congue lacus. In vel rhoncus tortor. Integer eleifend, turpis at accumsan condimentum, neque arcu ullamcorper mauris, at pellentesque tortor nisi eget nibh. Fusce aliquam neque mi, vel efficitur mauris lacinia quis. Ut maximus elementum augue sed laoreet. Suspendisse tempor ultricies velit non blandit. Etiam eget auctor neque. Nunc tincidunt, erat id imperdiet luctus, elit dolor aliquam quam, a venenatis libero eros in arcu. Donec tortor tortor, mattis non libero ac, semper gravida risus. Maecenas tristique nisi non erat tempor facilisis. Nam lacinia ipsum eget lorem auctor, et gravida eros pretium. Donec vel massa quis nisi commodo molestie malesuada sit amet sapien. Nunc porta tincidunt eleifend. Fusce laoreet erat eget nulla laoreet, vitae vulputate massa dignissim.

                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque libero ligula, mollis sed ultricies nec, tristique et enim. Mauris ut sapien erat. Aliquam tincidunt semper cursus. Aliquam erat volutpat. Vivamus ac suscipit nulla. Donec at ex ullamcorper, laoreet ante ut, euismod neque. Phasellus id imperdiet orci. Integer maximus ultricies nibh id auctor. Etiam semper quam blandit velit tempor pretium.
                </div>
            </Aux>
        )
    }
}

export default TestPage;
