System.register(["@babel/runtime@7.24.1/helpers/esm/typeof","@babel/runtime@7.24.1/helpers/esm/assertThisInitialized"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.24.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@babel/runtime@7.24.1/helpers/esm/typeof', dep), dep => dependencies.set('@babel/runtime@7.24.1/helpers/esm/assertThisInitialized', dep)],
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

// .beyond/uimport/@babel/runtime/helpers/esm/possibleConstructorReturn.7.24.1.js
var possibleConstructorReturn_7_24_1_exports = {};
__export(possibleConstructorReturn_7_24_1_exports, {
  default: () => possibleConstructorReturn_7_24_1_default
});
module.exports = __toCommonJS(possibleConstructorReturn_7_24_1_exports);

// node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var import_typeof = __toESM(require("@babel/runtime@7.24.1/helpers/esm/typeof"), 0);
var import_assertThisInitialized = __toESM(require("@babel/runtime@7.24.1/helpers/esm/assertThisInitialized"), 0);
function _possibleConstructorReturn(self, call) {
  if (call && ((0, import_typeof.default)(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0, import_assertThisInitialized.default)(self);
}

// .beyond/uimport/@babel/runtime/helpers/esm/possibleConstructorReturn.7.24.1.js
var possibleConstructorReturn_7_24_1_default = _possibleConstructorReturn;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLjcuMjQuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIl0sIm5hbWVzIjpbInBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5fN18yNF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXzdfMjRfMV9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF90eXBlb2YiLCJfX3RvRVNNIiwicmVxdWlyZSIsImltcG9ydF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsInNlbGYiLCJjYWxsIiwiVHlwZUVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx3Q0FBQTtBQUFBQyxRQUFBLENBQUFELHdDQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLHdDQUFBOzs7QUNBQSxJQUFBTyxhQUFBLEdBQW9CQyxPQUFBLENBQUFDLE9BQUE7QUFDcEIsSUFBQUMsNEJBQUEsR0FBa0NGLE9BQUEsQ0FBQUMsT0FBQTtBQUNuQixTQUFSRSwyQkFBNENDLElBQUEsRUFBTUMsSUFBQSxFQUFNO0VBQzdELElBQUlBLElBQUEsU0FBU04sYUFBQSxDQUFBTCxPQUFBLEVBQVFXLElBQUksTUFBTSxZQUFZLE9BQU9BLElBQUEsS0FBUyxhQUFhO0lBQ3RFLE9BQU9BLElBQUE7RUFDVCxXQUFXQSxJQUFBLEtBQVMsUUFBUTtJQUMxQixNQUFNLElBQUlDLFNBQUEsQ0FBVSwwREFBMEQ7RUFDaEY7RUFDQSxXQUFPSiw0QkFBQSxDQUFBUixPQUFBLEVBQXNCVSxJQUFJO0FBQ25DOzs7QUROQSxJQUFPVCx3Q0FBQSxHQUFRUSwwQkFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==