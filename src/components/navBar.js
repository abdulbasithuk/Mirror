/**
 * Created by athajudeen on 13/01/2016.
 */

require('styles/navBar.less');

import React from 'react';
import AppActions from '../actions/appActions';
import { Link } from 'react-router'

let profileImage = require('../images/profile_image.png');

const ACTIVE_LINK = "cd-active-link";

class NavBarComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="com-nav-bar">
                <div className="cd-logo">
                    <img className="cd-logo-item" src={profileImage}/>
                    <span className="cd-title">Abdul's Space</span>
                </div>
                <div className="cd-navigation">
                    <ul className="cd-navigation-links-wrapper">
                        <li><Link className="cd-navigation-item" to="/home" activeClassName={ACTIVE_LINK}>Home</Link></li>
                        <li><Link className="cd-navigation-item" to="/about" activeClassName={ACTIVE_LINK}>About</Link></li>
                        <li><Link className="cd-navigation-item" to="/contact" activeClassName={ACTIVE_LINK}>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

NavBarComponent.defaultProps = {
};

export default NavBarComponent;