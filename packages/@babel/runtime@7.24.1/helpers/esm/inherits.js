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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/inherits.7.24.1.js
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/inherits.7.24.1.js
var inherits_7_24_1_default = _inherits;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLjcuMjQuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyJdLCJuYW1lcyI6WyJpbmhlcml0c183XzI0XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsImluaGVyaXRzXzdfMjRfMV9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9zZXRQcm90b3R5cGVPZiIsIl9fdG9FU00iLCJyZXF1aXJlIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiVHlwZUVycm9yIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJ2YWx1ZSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwiZGVmaW5lUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHVCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsdUJBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sdUJBQUE7OztBQ0FBLElBQUFPLHFCQUFBLEdBQTJCQyxPQUFBLENBQUFDLE9BQUE7QUFDWixTQUFSQyxVQUEyQkMsUUFBQSxFQUFVQyxVQUFBLEVBQVk7RUFDdEQsSUFBSSxPQUFPQSxVQUFBLEtBQWUsY0FBY0EsVUFBQSxLQUFlLE1BQU07SUFDM0QsTUFBTSxJQUFJQyxTQUFBLENBQVUsb0RBQW9EO0VBQzFFO0VBQ0FGLFFBQUEsQ0FBU0csU0FBQSxHQUFZQyxNQUFBLENBQU9DLE1BQUEsQ0FBT0osVUFBQSxJQUFjQSxVQUFBLENBQVdFLFNBQUEsRUFBVztJQUNyRUcsV0FBQSxFQUFhO01BQ1hDLEtBQUEsRUFBT1AsUUFBQTtNQUNQUSxRQUFBLEVBQVU7TUFDVkMsWUFBQSxFQUFjO0lBQ2hCO0VBQ0YsQ0FBQztFQUNETCxNQUFBLENBQU9NLGNBQUEsQ0FBZVYsUUFBQSxFQUFVLGFBQWE7SUFDM0NRLFFBQUEsRUFBVTtFQUNaLENBQUM7RUFDRCxJQUFJUCxVQUFBLEVBQVksSUFBQUwscUJBQUEsQ0FBQUwsT0FBQSxFQUFlUyxRQUFBLEVBQVVDLFVBQVU7QUFDckQ7OztBRGJBLElBQU9ULHVCQUFBLEdBQVFPLFNBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=