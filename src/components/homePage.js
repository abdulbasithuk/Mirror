import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navBar.js';

class HomePageComponent extends React.Component {
  render() {
    return (
        <span>I am in the homePage component </span>
    );
  }
}

HomePageComponent.defaultProps = {
};

export default HomePageComponent;
