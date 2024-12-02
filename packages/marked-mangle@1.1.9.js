System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["marked-mangle","1.1.9"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
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

// .beyond/uimport/marked-mangle.1.1.9.js
var marked_mangle_1_1_9_exports = {};
__export(marked_mangle_1_1_9_exports, {
  mangle: () => mangle
});
module.exports = __toCommonJS(marked_mangle_1_1_9_exports);

// node_modules/marked-mangle/src/index.js
function mangle() {
  return {
    mangle: false,
    walkTokens(token) {
      if (token.type !== "link") {
        return;
      }
      if (!token.href.startsWith("mailto:")) {
        return;
      }
      const email = token.href.substring(7);
      const mangledEmail = mangleEmail(email);
      token.href = `mailto:${mangledEmail}`;
      if (token.tokens.length !== 1 || token.tokens[0].type !== "text" || token.tokens[0].text !== email) {
        return;
      }
      token.text = mangledEmail;
      token.tokens[0].text = mangledEmail;
    }
  };
}
function mangleEmail(text) {
  let out = "",
    i,
    ch;
  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = "x" + ch.toString(16);
    }
    out += "&#" + ch + ";";
  }
  return out;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9tYXJrZWQtbWFuZ2xlLjEuMS45LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC1tYW5nbGUvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmtlZF9tYW5nbGVfMV8xXzlfZXhwb3J0cyIsIl9fZXhwb3J0IiwibWFuZ2xlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIndhbGtUb2tlbnMiLCJ0b2tlbiIsInR5cGUiLCJocmVmIiwic3RhcnRzV2l0aCIsImVtYWlsIiwic3Vic3RyaW5nIiwibWFuZ2xlZEVtYWlsIiwibWFuZ2xlRW1haWwiLCJ0b2tlbnMiLCJsZW5ndGgiLCJ0ZXh0Iiwib3V0IiwiaSIsImNoIiwibCIsImNoYXJDb2RlQXQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDJCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsMkJBQUE7RUFBQUUsTUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwsMkJBQUE7OztBQ0FPLFNBQVNFLE9BQUEsRUFBUztFQUN2QixPQUFPO0lBQ0xBLE1BQUEsRUFBUTtJQUNSSSxXQUFXQyxLQUFBLEVBQU87TUFDaEIsSUFBSUEsS0FBQSxDQUFNQyxJQUFBLEtBQVMsUUFBUTtRQUN6QjtNQUNGO01BRUEsSUFBSSxDQUFDRCxLQUFBLENBQU1FLElBQUEsQ0FBS0MsVUFBQSxDQUFXLFNBQVMsR0FBRztRQUNyQztNQUNGO01BRUEsTUFBTUMsS0FBQSxHQUFRSixLQUFBLENBQU1FLElBQUEsQ0FBS0csU0FBQSxDQUFVLENBQUM7TUFDcEMsTUFBTUMsWUFBQSxHQUFlQyxXQUFBLENBQVlILEtBQUs7TUFFdENKLEtBQUEsQ0FBTUUsSUFBQSxHQUFPLFVBQVVJLFlBQUE7TUFFdkIsSUFBSU4sS0FBQSxDQUFNUSxNQUFBLENBQU9DLE1BQUEsS0FBVyxLQUFLVCxLQUFBLENBQU1RLE1BQUEsQ0FBTyxHQUFHUCxJQUFBLEtBQVMsVUFBVUQsS0FBQSxDQUFNUSxNQUFBLENBQU8sR0FBR0UsSUFBQSxLQUFTTixLQUFBLEVBQU87UUFDbEc7TUFDRjtNQUVBSixLQUFBLENBQU1VLElBQUEsR0FBT0osWUFBQTtNQUNiTixLQUFBLENBQU1RLE1BQUEsQ0FBTyxHQUFHRSxJQUFBLEdBQU9KLFlBQUE7SUFDekI7RUFDRjtBQUNGO0FBRUEsU0FBU0MsWUFBWUcsSUFBQSxFQUFNO0VBQ3pCLElBQUlDLEdBQUEsR0FBTTtJQUNSQyxDQUFBO0lBQ0FDLEVBQUE7RUFFRixNQUFNQyxDQUFBLEdBQUlKLElBQUEsQ0FBS0QsTUFBQTtFQUNmLEtBQUtHLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlFLENBQUEsRUFBR0YsQ0FBQSxJQUFLO0lBQ3RCQyxFQUFBLEdBQUtILElBQUEsQ0FBS0ssVUFBQSxDQUFXSCxDQUFDO0lBQ3RCLElBQUlJLElBQUEsQ0FBS0MsTUFBQSxDQUFPLElBQUksS0FBSztNQUN2QkosRUFBQSxHQUFLLE1BQU1BLEVBQUEsQ0FBR0ssUUFBQSxDQUFTLEVBQUU7SUFDM0I7SUFDQVAsR0FBQSxJQUFPLE9BQU9FLEVBQUEsR0FBSztFQUNyQjtFQUVBLE9BQU9GLEdBQUE7QUFDVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==