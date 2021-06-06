"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ToggleSwitch = props => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "CheckBoxWrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "CheckBox",
    id: "aaa",
    type: "checkbox"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "CheckBoxLabel",
    htmlFor: "aaa"
  })));
};

var _default = ToggleSwitch;
exports.default = _default;