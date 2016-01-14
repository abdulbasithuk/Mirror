/**
 * Created by athajudeen on 06/11/2015.
 */
require('normalize.css');
require('styles/resultsList.css');

import React from 'react';
import AppStore from '../stores/appStore';
import NoResults from './noResults';
import Bundle from './bundle';

function getResultsListState() {
  "use strict";
  return { data: AppStore.getAllResults()}
}

class ResultsListComponent extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.state = { data: { data: [], info: {} } };
  }

  componentDidMount() {
    this.setState(getResultsListState());
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  render() {
    var results = this.state.data;
    console.log(results);
    return (
      <div className="resultsListWrapper">
        <div className="container-1">
          { results.data.length < 1 ? <NoResults/> : null }
          <table cellSpacing='0'>
            <tbody>
              { results.data.length > 0 ? results.data.map(function(eachBundle, key){
                return <Bundle key={key} data={eachBundle} />
              }) : null }
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  _onChange() {
    this.setState(getResultsListState());
  }
}

ResultsListComponent.defaultProps = {
};

export default ResultsListComponent;
