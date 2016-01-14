require('normalize.css');
require('styles/App.less');

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './searchBox.js';
import ResultsList from './resultsList.js';
import NavBar from './navBar.js';

class HomePageComponent extends React.Component {
  render() {
    return (
        <span>I am in the main.js - homePage component </span>
    );
  }
}

HomePageComponent.defaultProps = {
};

export default HomePageComponent;
