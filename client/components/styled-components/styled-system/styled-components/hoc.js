'use strict';

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    ', '\n    ', '\n    ', '\n  '], ['\n    ', '\n    ', '\n    ', '\n    ', '\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled = require('styled-components').default;
var fontSize = require('../font-size');
var width = require('../width');
var space = require('../space');
var color = require('../color');

module.exports = function (Component) {
  var SystemComponent = styled(Component)(_templateObject, fontSize, width, space, color);

  return SystemComponent;
};