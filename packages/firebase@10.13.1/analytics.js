System.register(["@firebase/util@1.9.7","@firebase/component@0.6.8","@firebase/logger@0.4.2","idb@7.1.1","@firebase/app@0.10.10","@firebase/installations@0.6.8","@firebase/analytics@0.10.7"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.9.7"],["@firebase/component","0.6.8"],["@firebase/logger","0.4.2"],["idb","7.1.1"],["@firebase/app","0.10.10"],["@firebase/installations","0.6.8"],["@firebase/analytics","0.10.7"],["firebase","10.13.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.9.7', dep), dep => dependencies.set('@firebase/component@0.6.8', dep), dep => dependencies.set('@firebase/logger@0.4.2', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.10.10', dep), dep => dependencies.set('@firebase/installations@0.6.8', dep), dep => dependencies.set('@firebase/analytics@0.10.7', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/firebase/analytics.10.13.1.js
var analytics_10_13_1_exports = {};
module.exports = __toCommonJS(analytics_10_13_1_exports);

// node_modules/firebase/analytics/dist/esm/index.esm.js
var index_esm_exports = {};
__reExport(index_esm_exports, require("@firebase/analytics@0.10.7"));

// .beyond/uimport/firebase/analytics.10.13.1.js
__reExport(analytics_10_13_1_exports, index_esm_exports, module.exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9maXJlYmFzZS9hbmFseXRpY3MuMTAuMTMuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9maXJlYmFzZS9hbmFseXRpY3MvZGlzdC9lc20vaW5kZXguZXNtLmpzIl0sIm5hbWVzIjpbImFuYWx5dGljc18xMF8xM18xX2V4cG9ydHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW5kZXhfZXNtX2V4cG9ydHMiLCJfX3JlRXhwb3J0IiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHlCQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFILHlCQUFBOzs7QUNBQSxJQUFBSSxpQkFBQTtBQUFBQyxVQUFBLENBQUFELGlCQUFBLEVBQWNFLE9BQUE7OztBREFkRCxVQUFBLENBQUFMLHlCQUFBLEVBQWNJLGlCQUFBLEVBQWRILE1BQUEsQ0FBQUMsT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==