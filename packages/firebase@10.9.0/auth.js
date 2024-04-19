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

// .beyond/uimport/firebase/auth.10.9.0.js
var auth_10_9_0_exports = {};
module.exports = __toCommonJS(auth_10_9_0_exports);

// node_modules/firebase/auth/dist/esm/index.esm.js
var index_esm_exports = {};
__reExport(index_esm_exports, require("@firebase/auth@1.6.2"));

// .beyond/uimport/firebase/auth.10.9.0.js
__reExport(auth_10_9_0_exports, index_esm_exports, module.exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9maXJlYmFzZS9hdXRoLjEwLjkuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9maXJlYmFzZS9hdXRoL2Rpc3QvZXNtL2luZGV4LmVzbS5qcyJdLCJuYW1lcyI6WyJhdXRoXzEwXzlfMF9leHBvcnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImluZGV4X2VzbV9leHBvcnRzIiwiX19yZUV4cG9ydCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQkFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBSCxtQkFBQTs7O0FDQUEsSUFBQUksaUJBQUE7QUFBQUMsVUFBQSxDQUFBRCxpQkFBQSxFQUFjRSxPQUFBOzs7QURBZEQsVUFBQSxDQUFBTCxtQkFBQSxFQUFjSSxpQkFBQSxFQUFkSCxNQUFBLENBQUFDLE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9hcHAvb3V0In0=