System.register(["@babel/runtime@7.24.1/helpers/esm/objectWithoutPropertiesLoose"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.24.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@babel/runtime@7.24.1/helpers/esm/objectWithoutPropertiesLoose', dep)],
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

// .beyond/uimport/@babel/runtime/helpers/esm/objectWithoutProperties.7.24.1.js
var objectWithoutProperties_7_24_1_exports = {};
__export(objectWithoutProperties_7_24_1_exports, {
  default: () => objectWithoutProperties_7_24_1_default
});
module.exports = __toCommonJS(objectWithoutProperties_7_24_1_exports);

// node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var import_objectWithoutPropertiesLoose = __toESM(require("@babel/runtime@7.24.1/helpers/esm/objectWithoutPropertiesLoose"), 0);
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0, import_objectWithoutPropertiesLoose.default)(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

// .beyond/uimport/@babel/runtime/helpers/esm/objectWithoutProperties.7.24.1.js
var objectWithoutProperties_7_24_1_default = _objectWithoutProperties;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy43LjI0LjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiXSwibmFtZXMiOlsib2JqZWN0V2l0aG91dFByb3BlcnRpZXNfN18yNF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJvYmplY3RXaXRob3V0UHJvcGVydGllc183XzI0XzFfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsIl9fdG9FU00iLCJyZXF1aXJlIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwic291cmNlIiwiZXhjbHVkZWQiLCJ0YXJnZXQiLCJrZXkiLCJpIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic291cmNlU3ltYm9sS2V5cyIsImxlbmd0aCIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHNDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsc0NBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sc0NBQUE7OztBQ0FBLElBQUFPLG1DQUFBLEdBQXlDQyxPQUFBLENBQUFDLE9BQUE7QUFDMUIsU0FBUkMseUJBQTBDQyxNQUFBLEVBQVFDLFFBQUEsRUFBVTtFQUNqRSxJQUFJRCxNQUFBLElBQVUsTUFBTSxPQUFPLENBQUM7RUFDNUIsSUFBSUUsTUFBQSxPQUFTTixtQ0FBQSxDQUFBTCxPQUFBLEVBQTZCUyxNQUFBLEVBQVFDLFFBQVE7RUFDMUQsSUFBSUUsR0FBQSxFQUFLQyxDQUFBO0VBQ1QsSUFBSUMsTUFBQSxDQUFPQyxxQkFBQSxFQUF1QjtJQUNoQyxJQUFJQyxnQkFBQSxHQUFtQkYsTUFBQSxDQUFPQyxxQkFBQSxDQUFzQk4sTUFBTTtJQUMxRCxLQUFLSSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJRyxnQkFBQSxDQUFpQkMsTUFBQSxFQUFRSixDQUFBLElBQUs7TUFDNUNELEdBQUEsR0FBTUksZ0JBQUEsQ0FBaUJILENBQUE7TUFDdkIsSUFBSUgsUUFBQSxDQUFTUSxPQUFBLENBQVFOLEdBQUcsS0FBSyxHQUFHO01BQ2hDLElBQUksQ0FBQ0UsTUFBQSxDQUFPSyxTQUFBLENBQVVDLG9CQUFBLENBQXFCQyxJQUFBLENBQUtaLE1BQUEsRUFBUUcsR0FBRyxHQUFHO01BQzlERCxNQUFBLENBQU9DLEdBQUEsSUFBT0gsTUFBQSxDQUFPRyxHQUFBO0lBQ3ZCO0VBQ0Y7RUFDQSxPQUFPRCxNQUFBO0FBQ1Q7OztBRFpBLElBQU9WLHNDQUFBLEdBQVFPLHdCQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9