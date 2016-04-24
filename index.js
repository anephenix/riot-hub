'use strict';

var hub;

// This is an event emitter, used to handle communicating events
// between different parts of the application.

var riot = require('riot');

function Hub () {
  riot.observable(this);
}

function load () {
  if (hub) return hub;
  hub = new Hub();
  return hub;
}

module.exports = load;
