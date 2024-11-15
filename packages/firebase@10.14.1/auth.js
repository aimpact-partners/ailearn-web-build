System.register(["@firebase/util@1.10.0","@firebase/component@0.6.9","@firebase/logger@0.4.2","idb@7.1.1","@firebase/app@0.10.13","tslib@2.7.0","@firebase/auth@1.7.9"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.10.0"],["@firebase/component","0.6.9"],["@firebase/logger","0.4.2"],["idb","7.1.1"],["@firebase/app","0.10.13"],["tslib","2.7.0"],["@firebase/auth","1.7.9"],["firebase","10.14.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.10.0', dep), dep => dependencies.set('@firebase/component@0.6.9', dep), dep => dependencies.set('@firebase/logger@0.4.2', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.10.13', dep), dep => dependencies.set('tslib@2.7.0', dep), dep => dependencies.set('@firebase/auth@1.7.9', dep)],
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

// .beyond/uimport/firebase/auth.10.14.1.js
var auth_10_14_1_exports = {};
module.exports = __toCommonJS(auth_10_14_1_exports);

// node_modules/firebase/auth/dist/esm/index.esm.js
var index_esm_exports = {};
__reExport(index_esm_exports, require("@firebase/auth@1.7.9"));

// .beyond/uimport/firebase/auth.10.14.1.js
__reExport(auth_10_14_1_exports, index_esm_exports, module.exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9maXJlYmFzZS9hdXRoLjEwLjE0LjEuanMiLCIuLi9ub2RlX21vZHVsZXMvZmlyZWJhc2UvYXV0aC9kaXN0L2VzbS9pbmRleC5lc20uanMiXSwibmFtZXMiOlsiYXV0aF8xMF8xNF8xX2V4cG9ydHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW5kZXhfZXNtX2V4cG9ydHMiLCJfX3JlRXhwb3J0IiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFILG9CQUFBOzs7QUNBQSxJQUFBSSxpQkFBQTtBQUFBQyxVQUFBLENBQUFELGlCQUFBLEVBQWNFLE9BQUE7OztBREFkRCxVQUFBLENBQUFMLG9CQUFBLEVBQWNJLGlCQUFBLEVBQWRILE1BQUEsQ0FBQUMsT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==