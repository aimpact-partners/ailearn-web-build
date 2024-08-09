System.register(["ssr-window@4.0.2","dom7@4.0.6","swiper@8.4.7"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["ssr-window","4.0.2"],["dom7","4.0.6"],["swiper","8.4.7"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('ssr-window@4.0.2', dep), dep => dependencies.set('dom7@4.0.6', dep), dep => dependencies.set('swiper@8.4.7', dep)],
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/swiper/modules.8.4.7.js
var modules_8_4_7_exports = {};
__export(modules_8_4_7_exports, {
  default: () => modules_8_4_7_default
});
module.exports = __toCommonJS(modules_8_4_7_exports);
__reExport(modules_8_4_7_exports, require("swiper@8.4.7"), module.exports);
var import_modules = __toESM(require("swiper@8.4.7"));
var modules_8_4_7_default = import_modules.default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3N3aXBlci9tb2R1bGVzLjguNC43LmpzIl0sIm5hbWVzIjpbIm1vZHVsZXNfOF80XzdfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsIm1vZHVsZXNfOF80XzdfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfX3JlRXhwb3J0IiwicmVxdWlyZSIsImltcG9ydF9tb2R1bGVzIiwiX190b0VTTSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFBO0FBQUFDLFFBQUEsQ0FBQUQscUJBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4scUJBQUE7QUFBQU8sVUFBQSxDQUFBUCxxQkFBQSxFQUFjUSxPQUFBLGtCQUFkSixNQUFBLENBQUFDLE9BQUE7QUFFQSxJQUFBSSxjQUFBLEdBQXFCQyxPQUFBLENBQUFGLE9BQUE7QUFDckIsSUFBT0wscUJBQUEsR0FBUU0sY0FBQSxDQUFBUCxPQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYXBwL291dCJ9