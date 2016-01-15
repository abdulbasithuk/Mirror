require('normalize.css');
require('styles/App.less');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import NavBar from './navBar.js';
import AboutPage from './aboutPage.js';
import ContactPage from './contactPage.js';
import HomePage from './homePage';

class App extends React.Component {
    render() {
        return (
        <div className="app-container">
            <div className="lay-header">
                <NavBar />
            </div>
            <div className="lay-body">
                {this.props.children}
            </div>
        </div>
        )
    }
}

// Render the main component into the dom
ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="home" component={HomePage}/>
            <Route path="about" component={AboutPage}/>
            <Route path="contact" component={ContactPage}/>
        </Route>
    </Router>, document.getElementById('app'));