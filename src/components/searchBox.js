/**
 * Created by athajudeen on 06/11/2015.
 */
require('normalize.css');
require('styles/searchBox.css');

import React from 'react';
import AppActions from '../actions/appActions';

class SearchBoxComponent extends React.Component {

  onChange(){
    "use strict";
    var text = this.refs.searchText.value.trim();
    AppActions.doSearch(text);
  }

  render() {
    return (
      <div className="searchBoxWrapper">
        <div className="container-1">
          <span className="icon"><i className="fa fa-search"></i></span>
          <input type="search" id="search" placeholder="Search..." ref="searchText" onChange={this.onChange.bind(this)} />
        </div>
      </div>
    );
  }
}

SearchBoxComponent.defaultProps = {
};

export default SearchBoxComponent;
