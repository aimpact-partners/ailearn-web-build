System.register(["@babel/runtime@7.24.1/helpers/esm/arrayLikeToArray"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.24.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@babel/runtime@7.24.1/helpers/esm/arrayLikeToArray', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/@babel/runtime/helpers/esm/arrayWithoutHoles.7.24.1.js
var arrayWithoutHoles_7_24_1_exports = {};
__export(arrayWithoutHoles_7_24_1_exports, {
  default: () => arrayWithoutHoles_7_24_1_default
});
module.exports = __toCommonJS(arrayWithoutHoles_7_24_1_exports);

// node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
var import_arrayLikeToArray = __toESM(require("@babel/runtime@7.24.1/helpers/esm/arrayLikeToArray"), 0);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0, import_arrayLikeToArray.default)(arr);
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/arrayWithoutHoles.7.24.1.js
var arrayWithoutHoles_7_24_1_default = _arrayWithoutHoles;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLjcuMjQuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyJdLCJuYW1lcyI6WyJhcnJheVdpdGhvdXRIb2xlc183XzI0XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsImFycmF5V2l0aG91dEhvbGVzXzdfMjRfMV9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9hcnJheUxpa2VUb0FycmF5IiwiX190b0VTTSIsInJlcXVpcmUiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJhcnIiLCJBcnJheSIsImlzQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGdDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsZ0NBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sZ0NBQUE7OztBQ0FBLElBQUFPLHVCQUFBLEdBQTZCQyxPQUFBLENBQUFDLE9BQUE7QUFDZCxTQUFSQyxtQkFBb0NDLEdBQUEsRUFBSztFQUM5QyxJQUFJQyxLQUFBLENBQU1DLE9BQUEsQ0FBUUYsR0FBRyxHQUFHLFdBQU9KLHVCQUFBLENBQUFMLE9BQUEsRUFBaUJTLEdBQUc7QUFDckQ7OztBREFBLElBQU9SLGdDQUFBLEdBQVFPLGtCQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9