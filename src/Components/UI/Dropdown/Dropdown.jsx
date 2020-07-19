import React, { Component } from 'react';
import classes from './Dropdown.module.css';
import { Link } from 'react-router-dom';

export class Dropdown extends Component {
    state = {
        showList: false
    }

    toggleMenu = (event) => {
        event.preventDefault();
        if (this.state.showList) {
            this.setState({showList: false});
        } else {
            this.setState({showList: true});
        }
    }

    render() {
        let style = this.props.navShrink ? {backgroundColor: "rgba(200, 200, 200, 1)", height: "30px"} : null;
        return (
            <div onClick={this.toggleMenu} className={classes.Container} style={style}>
                <a href="/" onClick={this.toggleMenu}>Projects</a>

                {this.state.showList
                    ? (<ul className={classes.List}>
                        <li><Link to="/mindmape">MindMape</Link></li>
                        <li><Link to="/burgerbuilder">BurgerBuilder</Link></li>
                    </ul>)
                    : null}
            </div>
        )
    };
}

export default Dropdown;
