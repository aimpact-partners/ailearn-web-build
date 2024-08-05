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

// .beyond/uimport/swiper/modules.8.4.7.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zd2lwZXIvbW9kdWxlcy44LjQuNy5qcyJdLCJuYW1lcyI6WyJtb2R1bGVzXzhfNF83X2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJtb2R1bGVzXzhfNF83X2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX19yZUV4cG9ydCIsInJlcXVpcmUiLCJpbXBvcnRfbW9kdWxlcyIsIl9fdG9FU00iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBQTtBQUFBQyxRQUFBLENBQUFELHFCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLHFCQUFBO0FBQUFPLFVBQUEsQ0FBQVAscUJBQUEsRUFBY1EsT0FBQSxrQkFBZEosTUFBQSxDQUFBQyxPQUFBO0FBRUEsSUFBQUksY0FBQSxHQUFxQkMsT0FBQSxDQUFBRixPQUFBO0FBQ3JCLElBQU9MLHFCQUFBLEdBQVFNLGNBQUEsQ0FBQVAsT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==