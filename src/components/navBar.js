/**
 * Created by athajudeen on 13/01/2016.
 */

require('styles/navBar.less');

import React from 'react';
import AppActions from '../actions/appActions';
import { Link } from 'react-router'

let sdLogo = require('../images/sdwsLogo.png');

class NavBarComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="com-nav-bar">
                <div className="cd-logo">
                    <img className="cd-logo-item" src={sdLogo} alt="Test logo"/>
                </div>
                <div className="cd-navigation">
                    <ul>
                        <li className="cd-navigation-item"><Link to="/home">Home</Link></li>
                        <li className="cd-navigation-item"><Link to="/about">About</Link></li>
                        <li className="cd-navigation-item"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

NavBarComponent.defaultProps = {
};

export default NavBarComponent;