/**
 * Created by athajudeen on 09/11/2015.
 */
require('normalize.css');

import React from 'react';

class NoResultsComponent extends React.Component {

  render() {
    return (
      <div className="status">
        <div className="icon"><i className="fa fa-exclamation-triangle"></i></div>
        <div className="message"> No results found </div>
      </div>
    );
  }
}

NoResultsComponent.defaultProps = {
};

export default NoResultsComponent;
