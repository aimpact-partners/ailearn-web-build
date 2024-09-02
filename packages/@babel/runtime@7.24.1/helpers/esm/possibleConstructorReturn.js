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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/possibleConstructorReturn.7.24.1.js
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/possibleConstructorReturn.7.24.1.js
var possibleConstructorReturn_7_24_1_default = _possibleConstructorReturn;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uNy4yNC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiXSwibmFtZXMiOlsicG9zc2libGVDb25zdHJ1Y3RvclJldHVybl83XzI0XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsInBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5fN18yNF8xX2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3R5cGVvZiIsIl9fdG9FU00iLCJyZXF1aXJlIiwiaW1wb3J0X2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwic2VsZiIsImNhbGwiLCJUeXBlRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHdDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsd0NBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sd0NBQUE7OztBQ0FBLElBQUFPLGFBQUEsR0FBb0JDLE9BQUEsQ0FBQUMsT0FBQTtBQUNwQixJQUFBQyw0QkFBQSxHQUFrQ0YsT0FBQSxDQUFBQyxPQUFBO0FBQ25CLFNBQVJFLDJCQUE0Q0MsSUFBQSxFQUFNQyxJQUFBLEVBQU07RUFDN0QsSUFBSUEsSUFBQSxTQUFTTixhQUFBLENBQUFMLE9BQUEsRUFBUVcsSUFBSSxNQUFNLFlBQVksT0FBT0EsSUFBQSxLQUFTLGFBQWE7SUFDdEUsT0FBT0EsSUFBQTtFQUNULFdBQVdBLElBQUEsS0FBUyxRQUFRO0lBQzFCLE1BQU0sSUFBSUMsU0FBQSxDQUFVLDBEQUEwRDtFQUNoRjtFQUNBLFdBQU9KLDRCQUFBLENBQUFSLE9BQUEsRUFBc0JVLElBQUk7QUFDbkM7OztBRE5BLElBQU9ULHdDQUFBLEdBQVFRLDBCQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9