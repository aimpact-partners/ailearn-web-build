System.register(["@babel/runtime@7.24.1/helpers/esm/setPrototypeOf"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.24.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@babel/runtime@7.24.1/helpers/esm/setPrototypeOf', dep)],
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

// .beyond/uimport/@babel/runtime/helpers/esm/inherits.7.24.1.js
var inherits_7_24_1_exports = {};
__export(inherits_7_24_1_exports, {
  default: () => inherits_7_24_1_default
});
module.exports = __toCommonJS(inherits_7_24_1_exports);

// node_modules/@babel/runtime/helpers/esm/inherits.js
var import_setPrototypeOf = __toESM(require("@babel/runtime@7.24.1/helpers/esm/setPrototypeOf"), 0);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0, import_setPrototypeOf.default)(subClass, superClass);
}

// .beyond/uimport/@babel/runtime/helpers/esm/inherits.7.24.1.js
var inherits_7_24_1_default = _inherits;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy43LjI0LjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiXSwibmFtZXMiOlsiaW5oZXJpdHNfN18yNF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJpbmhlcml0c183XzI0XzFfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfc2V0UHJvdG90eXBlT2YiLCJfX3RvRVNNIiwicmVxdWlyZSIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsIlR5cGVFcnJvciIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImRlZmluZVByb3BlcnR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx1QkFBQTtBQUFBQyxRQUFBLENBQUFELHVCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLHVCQUFBOzs7QUNBQSxJQUFBTyxxQkFBQSxHQUEyQkMsT0FBQSxDQUFBQyxPQUFBO0FBQ1osU0FBUkMsVUFBMkJDLFFBQUEsRUFBVUMsVUFBQSxFQUFZO0VBQ3RELElBQUksT0FBT0EsVUFBQSxLQUFlLGNBQWNBLFVBQUEsS0FBZSxNQUFNO0lBQzNELE1BQU0sSUFBSUMsU0FBQSxDQUFVLG9EQUFvRDtFQUMxRTtFQUNBRixRQUFBLENBQVNHLFNBQUEsR0FBWUMsTUFBQSxDQUFPQyxNQUFBLENBQU9KLFVBQUEsSUFBY0EsVUFBQSxDQUFXRSxTQUFBLEVBQVc7SUFDckVHLFdBQUEsRUFBYTtNQUNYQyxLQUFBLEVBQU9QLFFBQUE7TUFDUFEsUUFBQSxFQUFVO01BQ1ZDLFlBQUEsRUFBYztJQUNoQjtFQUNGLENBQUM7RUFDREwsTUFBQSxDQUFPTSxjQUFBLENBQWVWLFFBQUEsRUFBVSxhQUFhO0lBQzNDUSxRQUFBLEVBQVU7RUFDWixDQUFDO0VBQ0QsSUFBSVAsVUFBQSxFQUFZLElBQUFMLHFCQUFBLENBQUFMLE9BQUEsRUFBZVMsUUFBQSxFQUFVQyxVQUFVO0FBQ3JEOzs7QURiQSxJQUFPVCx1QkFBQSxHQUFRTyxTQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9