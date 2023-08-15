System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["marked-mangle","1.1.0"]]);
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

// .beyond/uimport/temp/marked-mangle.1.1.0.js
var marked_mangle_1_1_0_exports = {};
__export(marked_mangle_1_1_0_exports, {
  mangle: () => mangle
});
module.exports = __toCommonJS(marked_mangle_1_1_0_exports);

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21hcmtlZC1tYW5nbGUuMS4xLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkLW1hbmdsZS9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJtYW5nbGUiLCJtb2R1bGUiLCJ3YWxrVG9rZW5zIiwidG9rZW4iLCJ0eXBlIiwiaHJlZiIsInN0YXJ0c1dpdGgiLCJlbWFpbCIsInN1YnN0cmluZyIsIm1hbmdsZWRFbWFpbCIsIm1hbmdsZUVtYWlsIiwidG9rZW5zIiwibGVuZ3RoIiwidGV4dCIsIm91dCIsImkiLCJjaCIsImwiLCJjaGFyQ29kZUF0IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBO0FBQUFDOzs7QUNBTyxTQUFTRCxTQUFTO0VBQ3ZCLE9BQU87SUFDTEEsUUFBUTtJQUNSRSxXQUFXQyxPQUFPO01BQ2hCLElBQUlBLE1BQU1DLFNBQVMsUUFBUTtRQUN6QjtNQUNGO01BRUEsSUFBSSxDQUFDRCxNQUFNRSxLQUFLQyxXQUFXLFNBQVMsR0FBRztRQUNyQztNQUNGO01BRUEsTUFBTUMsUUFBUUosTUFBTUUsS0FBS0csVUFBVSxDQUFDO01BQ3BDLE1BQU1DLGVBQWVDLFlBQVlILEtBQUs7TUFFdENKLE1BQU1FLE9BQU8sVUFBVUk7TUFFdkIsSUFBSU4sTUFBTVEsT0FBT0MsV0FBVyxLQUFLVCxNQUFNUSxPQUFPLEdBQUdQLFNBQVMsVUFBVUQsTUFBTVEsT0FBTyxHQUFHRSxTQUFTTixPQUFPO1FBQ2xHO01BQ0Y7TUFFQUosTUFBTVUsT0FBT0o7TUFDYk4sTUFBTVEsT0FBTyxHQUFHRSxPQUFPSjtJQUN6QjtFQUNGO0FBQ0Y7QUFFQSxTQUFTQyxZQUFZRyxNQUFNO0VBQ3pCLElBQUlDLE1BQU07SUFDUkM7SUFDQUM7RUFFRixNQUFNQyxJQUFJSixLQUFLRDtFQUNmLEtBQUtHLElBQUksR0FBR0EsSUFBSUUsR0FBR0YsS0FBSztJQUN0QkMsS0FBS0gsS0FBS0ssV0FBV0gsQ0FBQztJQUN0QixJQUFJSSxLQUFLQyxRQUFPLEdBQUksS0FBSztNQUN2QkosS0FBSyxNQUFNQSxHQUFHSyxTQUFTLEVBQUU7SUFDM0I7SUFDQVAsT0FBTyxPQUFPRSxLQUFLO0VBQ3JCO0VBRUEsT0FBT0Y7QUFDVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpbGVhcm4vYXBwL291dCJ9