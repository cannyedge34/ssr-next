'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errorPage = function errorPage() {
  return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'Hahaha, something went wrong'), _react2.default.createElement('p', null, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', null, 'Try going back!'))));
};

exports.default = errorPage;