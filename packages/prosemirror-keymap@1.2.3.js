System.register(["w3c-keyname@2.2.8","orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["w3c-keyname","2.2.8"],["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["prosemirror-keymap","1.2.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/prosemirror-keymap.1.2.3.js
var prosemirror_keymap_1_2_3_exports = {};
__export(prosemirror_keymap_1_2_3_exports, {
  keydownHandler: () => keydownHandler,
  keymap: () => keymap
});
module.exports = __toCommonJS(prosemirror_keymap_1_2_3_exports);

// node_modules/prosemirror-keymap/dist/index.js
var import_w3c_keyname = require("w3c-keyname@2.2.8");
var import_prosemirror_state = require("prosemirror-state@1.4.3");
var mac = typeof navigator != "undefined" && /Mac|iP(hone|[oa]d)/.test(navigator.platform);
var windows = typeof navigator != "undefined" && /Win/.test(navigator.platform);
function normalizeKeyName(name) {
  let parts = name.split(/-(?!$)/),
    result = parts[parts.length - 1];
  if (result == "Space") result = " ";
  let alt, ctrl, shift, meta;
  for (let i = 0; i < parts.length - 1; i++) {
    let mod = parts[i];
    if (/^(cmd|meta|m)$/i.test(mod)) meta = true;else if (/^a(lt)?$/i.test(mod)) alt = true;else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true;else if (/^s(hift)?$/i.test(mod)) shift = true;else if (/^mod$/i.test(mod)) {
      if (mac) meta = true;else ctrl = true;
    } else throw new Error("Unrecognized modifier name: " + mod);
  }
  if (alt) result = "Alt-" + result;
  if (ctrl) result = "Ctrl-" + result;
  if (meta) result = "Meta-" + result;
  if (shift) result = "Shift-" + result;
  return result;
}
function normalize(map) {
  let copy = /* @__PURE__ */Object.create(null);
  for (let prop in map) copy[normalizeKeyName(prop)] = map[prop];
  return copy;
}
function modifiers(name, event, shift = true) {
  if (event.altKey) name = "Alt-" + name;
  if (event.ctrlKey) name = "Ctrl-" + name;
  if (event.metaKey) name = "Meta-" + name;
  if (shift && event.shiftKey) name = "Shift-" + name;
  return name;
}
function keymap(bindings) {
  return new import_prosemirror_state.Plugin({
    props: {
      handleKeyDown: keydownHandler(bindings)
    }
  });
}
function keydownHandler(bindings) {
  let map = normalize(bindings);
  return function (view, event) {
    let name = (0, import_w3c_keyname.keyName)(event),
      baseName,
      direct = map[modifiers(name, event)];
    if (direct && direct(view.state, view.dispatch, view)) return true;
    if (name.length == 1 && name != " ") {
      if (event.shiftKey) {
        let noShift = map[modifiers(name, event, false)];
        if (noShift && noShift(view.state, view.dispatch, view)) return true;
      }
      if ((event.altKey || event.metaKey || event.ctrlKey) && !(windows && event.ctrlKey && event.altKey) && (baseName = import_w3c_keyname.base[event.keyCode]) && baseName != name) {
        let fromCode = map[modifiers(baseName, event)];
        if (fromCode && fromCode(view.state, view.dispatch, view)) return true;
      }
    }
    return false;
  };
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcm9zZW1pcnJvci1rZXltYXAuMS4yLjMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3Ita2V5bWFwL2Rpc3QvaW5kZXguanMiXSwibmFtZXMiOlsicHJvc2VtaXJyb3Jfa2V5bWFwXzFfMl8zX2V4cG9ydHMiLCJfX2V4cG9ydCIsImtleWRvd25IYW5kbGVyIiwia2V5bWFwIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF93M2Nfa2V5bmFtZSIsInJlcXVpcmUiLCJpbXBvcnRfcHJvc2VtaXJyb3Jfc3RhdGUiLCJtYWMiLCJuYXZpZ2F0b3IiLCJ0ZXN0IiwicGxhdGZvcm0iLCJ3aW5kb3dzIiwibm9ybWFsaXplS2V5TmFtZSIsIm5hbWUiLCJwYXJ0cyIsInNwbGl0IiwicmVzdWx0IiwibGVuZ3RoIiwiYWx0IiwiY3RybCIsInNoaWZ0IiwibWV0YSIsImkiLCJtb2QiLCJFcnJvciIsIm5vcm1hbGl6ZSIsIm1hcCIsImNvcHkiLCJPYmplY3QiLCJjcmVhdGUiLCJwcm9wIiwibW9kaWZpZXJzIiwiZXZlbnQiLCJhbHRLZXkiLCJjdHJsS2V5IiwibWV0YUtleSIsInNoaWZ0S2V5IiwiYmluZGluZ3MiLCJQbHVnaW4iLCJwcm9wcyIsImhhbmRsZUtleURvd24iLCJ2aWV3Iiwia2V5TmFtZSIsImJhc2VOYW1lIiwiZGlyZWN0Iiwic3RhdGUiLCJkaXNwYXRjaCIsIm5vU2hpZnQiLCJiYXNlIiwia2V5Q29kZSIsImZyb21Db2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxnQ0FBQTtBQUFBQyxRQUFBLENBQUFELGdDQUFBO0VBQUFFLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLGdD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