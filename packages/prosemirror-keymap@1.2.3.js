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

// .beyond/uimport/temp/prosemirror-keymap.1.2.3.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Byb3NlbWlycm9yLWtleW1hcC4xLjIuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcm9zZW1pcnJvci1rZXltYXAvZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJwcm9zZW1pcnJvcl9rZXltYXBfMV8yXzNfZXhwb3J0cyIsIl9fZXhwb3J0Iiwia2V5ZG93bkhhbmRsZXIiLCJrZXltYXAiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3czY19rZXluYW1lIiwicmVxdWlyZSIsImltcG9ydF9wcm9zZW1pcnJvcl9zdGF0ZSIsIm1hYyIsIm5hdmlnYXRvciIsInRlc3QiLCJwbGF0Zm9ybSIsIndpbmRvd3MiLCJub3JtYWxpemVLZXlOYW1lIiwibmFtZSIsInBhcnRzIiwic3BsaXQiLCJyZXN1bHQiLCJsZW5ndGgiLCJhbHQiLCJjdHJsIiwic2hpZnQiLCJtZXRhIiwiaSIsIm1vZCIsIkVycm9yIiwibm9ybWFsaXplIiwibWFwIiwiY29weSIsIk9iamVjdCIsImNyZWF0ZSIsInByb3AiLCJtb2RpZmllcnMiLCJldmVudCIsImFsdEtleSIsImN0cmxLZXkiLCJtZXRhS2V5Iiwic2hpZnRLZXkiLCJiaW5kaW5ncyIsIlBsdWdpbiIsInByb3BzIiwiaGFuZGxlS2V5RG93biIsInZpZXciLCJrZXlOYW1lIiwiYmFzZU5hbWUiLCJkaXJlY3QiLCJzdGF0ZSIsImRpc3BhdGNoIiwibm9TaGlmdCIsImJhc2UiLCJrZXlDb2RlIiwiZnJvbUNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGdDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsZ0NBQUE7RUFBQUUsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FB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