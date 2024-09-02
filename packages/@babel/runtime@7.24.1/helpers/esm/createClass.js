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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/createClass.7.24.1.js
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/createClass.7.24.1.js
var createClass_7_24_1_default = _createClass;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLjcuMjQuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVDbGFzc183XzI0XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsImNyZWF0ZUNsYXNzXzdfMjRfMV9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF90b1Byb3BlcnR5S2V5IiwiX190b0VTTSIsInJlcXVpcmUiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsIl9jcmVhdGVDbGFzcyIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSwwQkFBQTtBQUFBQyxRQUFBLENBQUFELDBCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLDBCQUFBOzs7QUNBQSxJQUFBTyxvQkFBQSxHQUEwQkMsT0FBQSxDQUFBQyxPQUFBO0FBQzFCLFNBQVNDLGtCQUFrQkMsTUFBQSxFQUFRQyxLQUFBLEVBQU87RUFDeEMsU0FBU0MsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSUQsS0FBQSxDQUFNRSxNQUFBLEVBQVFELENBQUEsSUFBSztJQUNyQyxJQUFJRSxVQUFBLEdBQWFILEtBQUEsQ0FBTUMsQ0FBQTtJQUN2QkUsVUFBQSxDQUFXQyxVQUFBLEdBQWFELFVBQUEsQ0FBV0MsVUFBQSxJQUFjO0lBQ2pERCxVQUFBLENBQVdFLFlBQUEsR0FBZTtJQUMxQixJQUFJLFdBQVdGLFVBQUEsRUFBWUEsVUFBQSxDQUFXRyxRQUFBLEdBQVc7SUFDakRDLE1BQUEsQ0FBT0MsY0FBQSxDQUFlVCxNQUFBLE1BQVFKLG9CQUFBLENBQUFMLE9BQUEsRUFBY2EsVUFBQSxDQUFXTSxHQUFHLEdBQUdOLFVBQVU7RUFDekU7QUFDRjtBQUNlLFNBQVJPLGFBQThCQyxXQUFBLEVBQWFDLFVBQUEsRUFBWUMsV0FBQSxFQUFhO0VBQ3pFLElBQUlELFVBQUEsRUFBWWQsaUJBQUEsQ0FBa0JhLFdBQUEsQ0FBWUcsU0FBQSxFQUFXRixVQUFVO0VBQ25FLElBQUlDLFdBQUEsRUFBYWYsaUJBQUEsQ0FBa0JhLFdBQUEsRUFBYUUsV0FBVztFQUMzRE4sTUFBQSxDQUFPQyxjQUFBLENBQWVHLFdBQUEsRUFBYSxhQUFhO0lBQzlDTCxRQUFBLEVBQVU7RUFDWixDQUFDO0VBQ0QsT0FBT0ssV0FBQTtBQUNUOzs7QURkQSxJQUFPcEIsMEJBQUEsR0FBUW1CLFlBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=