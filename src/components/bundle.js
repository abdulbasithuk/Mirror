/**
 * Created by athajudeen on 09/11/2015.
 */
require('normalize.css');

import React from 'react';

class BundleComponent extends React.Component {

  render() {
    return (
        <tr>
          <td><img src = { this.props.data._source.provider.logoUrl}/></td>
          <td>{ this.props.data._source.name}</td>
          <td>£ { this.props.data._source.cost.totalFirstYearAmount}</td>
          <td>£ { this.props.data._source.cost.totalFirstPeriodAmount}</td>
          <td> View more </td>
        </tr>
    );
  }
}

BundleComponent.defaultProps = {
};

export default BundleComponent;
