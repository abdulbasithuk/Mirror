/**
 * Created by athajudeen on 06/11/2015.
 */
import appDispatcher from '../dispatcher/appDispatcher';
import constants from '../constants/appConstants';
import assign from 'object-assign';

var eventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

var AppStore = assign({}, eventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

// Register callback to handle all updates
appDispatcher.register(function(action) {});

export default AppStore;
