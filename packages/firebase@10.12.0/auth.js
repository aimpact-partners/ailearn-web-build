System.register(["@firebase/util@1.9.6","@firebase/component@0.6.7","@firebase/logger@0.4.2","idb@7.1.1","@firebase/app@0.10.3","tslib@2.6.2","@firebase/auth@1.7.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.9.6"],["@firebase/component","0.6.7"],["@firebase/logger","0.4.2"],["idb","7.1.1"],["@firebase/app","0.10.3"],["tslib","2.6.2"],["@firebase/auth","1.7.3"],["firebase","10.12.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.9.6', dep), dep => dependencies.set('@firebase/component@0.6.7', dep), dep => dependencies.set('@firebase/logger@0.4.2', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.10.3', dep), dep => dependencies.set('tslib@2.6.2', dep), dep => dependencies.set('@firebase/auth@1.7.3', dep)],
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

// .beyond/uimport/temp/firebase/auth.10.12.0.js
var auth_10_12_0_exports = {};
module.exports = __toCommonJS(auth_10_12_0_exports);

// node_modules/firebase/auth/dist/esm/index.esm.js
var index_esm_exports = {};
__reExport(index_esm_exports, require("@firebase/auth@1.7.3"));

// .beyond/uimport/temp/firebase/auth.10.12.0.js
__reExport(auth_10_12_0_exports, index_esm_exports, module.exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2ZpcmViYXNlL2F1dGguMTAuMTIuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9maXJlYmFzZS9hdXRoL2Rpc3QvZXNtL2luZGV4LmVzbS5qcyJdLCJuYW1lcyI6WyJhdXRoXzEwXzEyXzBfZXhwb3J0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbmRleF9lc21fZXhwb3J0cyIsIl9fcmVFeHBvcnQiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUgsb0JBQUE7OztBQ0FBLElBQUFJLGlCQUFBO0FBQUFDLFVBQUEsQ0FBQUQsaUJBQUEsRUFBY0UsT0FBQTs7O0FEQWRELFVBQUEsQ0FBQUwsb0JBQUEsRUFBY0ksaUJBQUEsRUFBZEgsTUFBQSxDQUFBQyxPQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYXBwL291dCJ9