System.register(["@firebase/util@1.9.4","@firebase/component@0.6.5","@firebase/logger@0.4.0","idb@7.1.1","@firebase/app@0.9.29","tslib@2.6.2","@firebase/auth@1.6.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.9.4"],["@firebase/component","0.6.5"],["@firebase/logger","0.4.0"],["idb","7.1.1"],["@firebase/app","0.9.29"],["tslib","2.6.2"],["@firebase/auth","1.6.2"],["firebase","10.9.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.9.4', dep), dep => dependencies.set('@firebase/component@0.6.5', dep), dep => dependencies.set('@firebase/logger@0.4.0', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.9.29', dep), dep => dependencies.set('tslib@2.6.2', dep), dep => dependencies.set('@firebase/auth@1.6.2', dep)],
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

// .beyond/uimport/temp/firebase/auth.10.9.0.js
var auth_10_9_0_exports = {};
module.exports = __toCommonJS(auth_10_9_0_exports);

// node_modules/firebase/auth/dist/esm/index.esm.js
var index_esm_exports = {};
__reExport(index_esm_exports, require("@firebase/auth@1.6.2"));

// .beyond/uimport/temp/firebase/auth.10.9.0.js
__reExport(auth_10_9_0_exports, index_esm_exports, module.exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2ZpcmViYXNlL2F1dGguMTAuOS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZpcmViYXNlL2F1dGgvZGlzdC9lc20vaW5kZXguZXNtLmpzIl0sIm5hbWVzIjpbImF1dGhfMTBfOV8wX2V4cG9ydHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW5kZXhfZXNtX2V4cG9ydHMiLCJfX3JlRXhwb3J0IiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1CQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFILG1CQUFBOzs7QUNBQSxJQUFBSSxpQkFBQTtBQUFBQyxVQUFBLENBQUFELGlCQUFBLEVBQWNFLE9BQUE7OztBREFkRCxVQUFBLENBQUFMLG1CQUFBLEVBQWNJLGlCQUFBLEVBQWRILE1BQUEsQ0FBQUMsT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FwcC9vdXQifQ==