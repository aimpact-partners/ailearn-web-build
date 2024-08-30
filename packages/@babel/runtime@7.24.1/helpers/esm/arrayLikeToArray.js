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

// .beyond/uimport/@babel/runtime/helpers/esm/arrayLikeToArray.7.24.1.js
var arrayLikeToArray_7_24_1_exports = {};
__export(arrayLikeToArray_7_24_1_exports, {
  default: () => arrayLikeToArray_7_24_1_default
});
module.exports = __toCommonJS(arrayLikeToArray_7_24_1_exports);

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

// .beyond/uimport/@babel/runtime/helpers/esm/arrayLikeToArray.7.24.1.js
var arrayLikeToArray_7_24_1_default = _arrayLikeToArray;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LjcuMjQuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIl0sIm5hbWVzIjpbImFycmF5TGlrZVRvQXJyYXlfN18yNF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJhcnJheUxpa2VUb0FycmF5XzdfMjRfMV9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9hcnJheUxpa2VUb0FycmF5IiwiYXJyIiwibGVuIiwibGVuZ3RoIiwiaSIsImFycjIiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsK0JBQUE7QUFBQUMsUUFBQSxDQUFBRCwrQkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTiwrQkFBQTs7O0FDQWUsU0FBUk8sa0JBQW1DQyxHQUFBLEVBQUtDLEdBQUEsRUFBSztFQUNsRCxJQUFJQSxHQUFBLElBQU8sUUFBUUEsR0FBQSxHQUFNRCxHQUFBLENBQUlFLE1BQUEsRUFBUUQsR0FBQSxHQUFNRCxHQUFBLENBQUlFLE1BQUE7RUFDL0MsU0FBU0MsQ0FBQSxHQUFJLEdBQUdDLElBQUEsR0FBTyxJQUFJQyxLQUFBLENBQU1KLEdBQUcsR0FBR0UsQ0FBQSxHQUFJRixHQUFBLEVBQUtFLENBQUEsSUFBS0MsSUFBQSxDQUFLRCxDQUFBLElBQUtILEdBQUEsQ0FBSUcsQ0FBQTtFQUNuRSxPQUFPQyxJQUFBO0FBQ1Q7OztBRERBLElBQU9ULCtCQUFBLEdBQVFJLGlCQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9