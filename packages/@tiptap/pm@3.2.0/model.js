System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["@tiptap/pm","3.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep)],
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

// .beyond/uimport/@tiptap/pm/model.3.2.0.js
var model_3_2_0_exports = {};
module.exports = __toCommonJS(model_3_2_0_exports);

// node_modules/@tiptap/pm/dist/model/index.js
var model_exports = {};
__reExport(model_exports, require("prosemirror-model@1.25.3"));

// .beyond/uimport/@tiptap/pm/model.3.2.0.js
__reExport(model_3_2_0_exports, model_exports, module.exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL3BtL21vZGVsLjMuMi4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvcG0vZGlzdC9tb2RlbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJtb2RlbF8zXzJfMF9leHBvcnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIm1vZGVsX2V4cG9ydHMiLCJfX3JlRXhwb3J0IiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1CQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFILG1CQUFBOzs7QUNBQSxJQUFBSSxhQUFBO0FBQ0FDLFVBQUEsQ0FBQUQsYUFBQSxFQUFjRSxPQUFBOzs7QUREZEQsVUFBQSxDQUFBTCxtQkFBQSxFQUFjSSxhQUFBLEVBQWRILE1BQUEsQ0FBQUMsT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvcnZkL291dCJ9