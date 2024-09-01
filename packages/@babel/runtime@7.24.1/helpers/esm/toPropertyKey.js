System.register(["@babel/runtime@7.24.1/helpers/esm/typeof","@babel/runtime@7.24.1/helpers/esm/toPrimitive"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.24.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@babel/runtime@7.24.1/helpers/esm/typeof', dep), dep => dependencies.set('@babel/runtime@7.24.1/helpers/esm/toPrimitive', dep)],
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/toPropertyKey.7.24.1.js
var toPropertyKey_7_24_1_exports = {};
__export(toPropertyKey_7_24_1_exports, {
  default: () => toPropertyKey_7_24_1_default
});
module.exports = __toCommonJS(toPropertyKey_7_24_1_exports);

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
var import_typeof = __toESM(require("@babel/runtime@7.24.1/helpers/esm/typeof"), 0);
var import_toPrimitive = __toESM(require("@babel/runtime@7.24.1/helpers/esm/toPrimitive"), 0);
function toPropertyKey(t) {
  var i = (0, import_toPrimitive.default)(t, "string");
  return "symbol" == (0, import_typeof.default)(i) ? i : i + "";
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/toPropertyKey.7.24.1.js
var toPropertyKey_7_24_1_default = toPropertyKey;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuNy4yNC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuanMiXSwibmFtZXMiOlsidG9Qcm9wZXJ0eUtleV83XzI0XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsInRvUHJvcGVydHlLZXlfN18yNF8xX2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3R5cGVvZiIsIl9fdG9FU00iLCJyZXF1aXJlIiwiaW1wb3J0X3RvUHJpbWl0aXZlIiwidG9Qcm9wZXJ0eUtleSIsInQiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw0QkFBQTtBQUFBQyxRQUFBLENBQUFELDRCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLDRCQUFBOzs7QUNBQSxJQUFBTyxhQUFBLEdBQW9CQyxPQUFBLENBQUFDLE9BQUE7QUFDcEIsSUFBQUMsa0JBQUEsR0FBd0JGLE9BQUEsQ0FBQUMsT0FBQTtBQUNULFNBQVJFLGNBQStCQyxDQUFBLEVBQUc7RUFDdkMsSUFBSUMsQ0FBQSxPQUFJSCxrQkFBQSxDQUFBUixPQUFBLEVBQVlVLENBQUEsRUFBRyxRQUFRO0VBQy9CLE9BQU8sZ0JBQVlMLGFBQUEsQ0FBQUwsT0FBQSxFQUFRVyxDQUFDLElBQUlBLENBQUEsR0FBSUEsQ0FBQSxHQUFJO0FBQzFDOzs7QURGQSxJQUFPViw0QkFBQSxHQUFRUSxhQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9