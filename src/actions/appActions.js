/**
 * Created by athajudeen on 06/11/2015.
 */
import appDispatcher from '../dispatcher/appDispatcher';
import constants from '../constants/appConstants';
import searchAPI from '../api/searchAPI';
var Promise = require('es6-promise').Promise;

var appActions ={
  doSearch: function(text){
    "use strict";
    console.log(text);
    Promise.resolve(searchAPI.getBundle(text)).then(
      function(data){
        console.log(data);
        appDispatcher.dispatch({
          actionType: constants.DO_SEARCH,
          data: data
        });
      }
    );
  }
};

export default appActions;
