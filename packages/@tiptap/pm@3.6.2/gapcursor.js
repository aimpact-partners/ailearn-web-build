System.register(["w3c-keyname@2.2.8","orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3","prosemirror-keymap@1.2.3","prosemirror-view@1.40.1","prosemirror-gapcursor@1.3.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["w3c-keyname","2.2.8"],["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["prosemirror-keymap","1.2.3"],["prosemirror-view","1.40.1"],["prosemirror-gapcursor","1.3.2"],["@tiptap/pm","3.6.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('prosemirror-gapcursor@1.3.2', dep)],
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

// .beyond/uimport/@tiptap/pm/gapcursor.3.6.2.js
var gapcursor_3_6_2_exports = {};
module.exports = __toCommonJS(gapcursor_3_6_2_exports);

// node_modules/@tiptap/pm/dist/gapcursor/index.js
var gapcursor_exports = {};
__reExport(gapcursor_exports, require("prosemirror-gapcursor@1.3.2"));

// .beyond/uimport/@tiptap/pm/gapcursor.3.6.2.js
__reExport(gapcursor_3_6_2_exports, gapcursor_exports, module.exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL3BtL2dhcGN1cnNvci4zLjYuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL3BtL2Rpc3QvZ2FwY3Vyc29yL2luZGV4LmpzIl0sIm5hbWVzIjpbImdhcGN1cnNvcl8zXzZfMl9leHBvcnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImdhcGN1cnNvcl9leHBvcnRzIiwiX19yZUV4cG9ydCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx1QkFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBSCx1QkFBQTs7O0FDQUEsSUFBQUksaUJBQUE7QUFDQUMsVUFBQSxDQUFBRCxpQkFBQSxFQUFjRSxPQUFBOzs7QUREZEQsVUFBQSxDQUFBTCx1QkFBQSxFQUFjSSxpQkFBQSxFQUFkSCxNQUFBLENBQUFDLE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL3J2ZC9vdXQifQ==