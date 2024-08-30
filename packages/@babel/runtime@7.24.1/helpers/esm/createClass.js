System.register(["@babel/runtime@7.24.1/helpers/esm/typeof","@babel/runtime@7.24.1/helpers/esm/toPrimitive","@babel/runtime@7.24.1/helpers/esm/toPropertyKey"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.24.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@babel/runtime@7.24.1/helpers/esm/typeof', dep), dep => dependencies.set('@babel/runtime@7.24.1/helpers/esm/toPrimitive', dep), dep => dependencies.set('@babel/runtime@7.24.1/helpers/esm/toPropertyKey', dep)],
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

// .beyond/uimport/@babel/runtime/helpers/esm/createClass.7.24.1.js
var createClass_7_24_1_exports = {};
__export(createClass_7_24_1_exports, {
  default: () => createClass_7_24_1_default
});
module.exports = __toCommonJS(createClass_7_24_1_exports);

// node_modules/@babel/runtime/helpers/esm/createClass.js
var import_toPropertyKey = __toESM(require("@babel/runtime@7.24.1/helpers/esm/toPropertyKey"), 0);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0, import_toPropertyKey.default)(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

// .beyond/uimport/@babel/runtime/helpers/esm/createClass.7.24.1.js
var createClass_7_24_1_default = _createClass;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy43LjI0LjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiXSwibmFtZXMiOlsiY3JlYXRlQ2xhc3NfN18yNF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJjcmVhdGVDbGFzc183XzI0XzFfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfdG9Qcm9wZXJ0eUtleSIsIl9fdG9FU00iLCJyZXF1aXJlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsMEJBQUE7QUFBQUMsUUFBQSxDQUFBRCwwQkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTiwwQkFBQTs7O0FDQUEsSUFBQU8sb0JBQUEsR0FBMEJDLE9BQUEsQ0FBQUMsT0FBQTtBQUMxQixTQUFTQyxrQkFBa0JDLE1BQUEsRUFBUUMsS0FBQSxFQUFPO0VBQ3hDLFNBQVNDLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlELEtBQUEsQ0FBTUUsTUFBQSxFQUFRRCxDQUFBLElBQUs7SUFDckMsSUFBSUUsVUFBQSxHQUFhSCxLQUFBLENBQU1DLENBQUE7SUFDdkJFLFVBQUEsQ0FBV0MsVUFBQSxHQUFhRCxVQUFBLENBQVdDLFVBQUEsSUFBYztJQUNqREQsVUFBQSxDQUFXRSxZQUFBLEdBQWU7SUFDMUIsSUFBSSxXQUFXRixVQUFBLEVBQVlBLFVBQUEsQ0FBV0csUUFBQSxHQUFXO0lBQ2pEQyxNQUFBLENBQU9DLGNBQUEsQ0FBZVQsTUFBQSxNQUFRSixvQkFBQSxDQUFBTCxPQUFBLEVBQWNhLFVBQUEsQ0FBV00sR0FBRyxHQUFHTixVQUFVO0VBQ3pFO0FBQ0Y7QUFDZSxTQUFSTyxhQUE4QkMsV0FBQSxFQUFhQyxVQUFBLEVBQVlDLFdBQUEsRUFBYTtFQUN6RSxJQUFJRCxVQUFBLEVBQVlkLGlCQUFBLENBQWtCYSxXQUFBLENBQVlHLFNBQUEsRUFBV0YsVUFBVTtFQUNuRSxJQUFJQyxXQUFBLEVBQWFmLGlCQUFBLENBQWtCYSxXQUFBLEVBQWFFLFdBQVc7RUFDM0ROLE1BQUEsQ0FBT0MsY0FBQSxDQUFlRyxXQUFBLEVBQWEsYUFBYTtJQUM5Q0wsUUFBQSxFQUFVO0VBQ1osQ0FBQztFQUNELE9BQU9LLFdBQUE7QUFDVDs7O0FEZEEsSUFBT3BCLDBCQUFBLEdBQVFtQixZQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9