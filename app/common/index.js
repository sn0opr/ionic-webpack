
'use strict';

/**
 * Module dependencies
 */
var angular = require('angular');

module.exports = angular

  .module('common', [
    require('./d3').name,
    require('./libs').name,
    require('./ui').name,
    require('./util').name
  ]);
