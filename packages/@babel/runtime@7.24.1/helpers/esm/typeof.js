System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.24.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@babel/runtime/helpers/esm/typeof.7.24.1.js
var typeof_7_24_1_exports = {};
__export(typeof_7_24_1_exports, {
  default: () => typeof_7_24_1_default
});
module.exports = __toCommonJS(typeof_7_24_1_exports);

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o2) {
    return typeof o2;
  } : function (o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// .beyond/uimport/@babel/runtime/helpers/esm/typeof.7.24.1.js
var typeof_7_24_1_default = _typeof;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuNy4yNC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyJdLCJuYW1lcyI6WyJ0eXBlb2ZfN18yNF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJ0eXBlb2ZfN18yNF8xX2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX3R5cGVvZiIsIm8iLCJTeW1ib2wiLCJpdGVyYXRvciIsIm8yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFBO0FBQUFDLFFBQUEsQ0FBQUQscUJBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4scUJBQUE7OztBQ0FlLFNBQVJPLFFBQXlCQyxDQUFBLEVBQUc7RUFDakM7O0VBRUEsT0FBT0QsT0FBQSxHQUFVLGNBQWMsT0FBT0UsTUFBQSxJQUFVLFlBQVksT0FBT0EsTUFBQSxDQUFPQyxRQUFBLEdBQVcsVUFBVUMsRUFBQSxFQUFHO0lBQ2hHLE9BQU8sT0FBT0EsRUFBQTtFQUNoQixJQUFJLFVBQVVBLEVBQUEsRUFBRztJQUNmLE9BQU9BLEVBQUEsSUFBSyxjQUFjLE9BQU9GLE1BQUEsSUFBVUUsRUFBQSxDQUFFQyxXQUFBLEtBQWdCSCxNQUFBLElBQVVFLEVBQUEsS0FBTUYsTUFBQSxDQUFPSSxTQUFBLEdBQVksV0FBVyxPQUFPRixFQUFBO0VBQ3BILEdBQUdKLE9BQUEsQ0FBUUMsQ0FBQztBQUNkOzs7QURMQSxJQUFPTCxxQkFBQSxHQUFRSSxPQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9