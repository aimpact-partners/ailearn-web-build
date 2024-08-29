System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["entities","4.5.0"]]);
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

// .beyond/uimport/temp/entities/lib/escape.js.4.5.0.js
var escape_js_4_5_0_exports = {};
__export(escape_js_4_5_0_exports, {
  encodeXML: () => encodeXML,
  escape: () => escape,
  escapeAttribute: () => escapeAttribute,
  escapeText: () => escapeText,
  escapeUTF8: () => escapeUTF8,
  getCodePoint: () => getCodePoint,
  xmlReplacer: () => xmlReplacer
});
module.exports = __toCommonJS(escape_js_4_5_0_exports);

// node_modules/entities/lib/esm/escape.js
var xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
var xmlCodeMap = /* @__PURE__ */new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]);
var getCodePoint = String.prototype.codePointAt != null ? (str, index) => str.codePointAt(index) : (c, index) => (c.charCodeAt(index) & 64512) === 55296 ? (c.charCodeAt(index) - 55296) * 1024 + c.charCodeAt(index + 1) - 56320 + 65536 : c.charCodeAt(index);
function encodeXML(str) {
  let ret = "";
  let lastIdx = 0;
  let match;
  while ((match = xmlReplacer.exec(str)) !== null) {
    const i = match.index;
    const char = str.charCodeAt(i);
    const next = xmlCodeMap.get(char);
    if (next !== void 0) {
      ret += str.substring(lastIdx, i) + next;
      lastIdx = i + 1;
    } else {
      ret += `${str.substring(lastIdx, i)}&#x${getCodePoint(str, i).toString(16)};`;
      lastIdx = xmlReplacer.lastIndex += Number((char & 64512) === 55296);
    }
  }
  return ret + str.substr(lastIdx);
}
var escape = encodeXML;
function getEscaper(regex, map) {
  return function escape2(data) {
    let match;
    let lastIdx = 0;
    let result = "";
    while (match = regex.exec(data)) {
      if (lastIdx !== match.index) {
        result += data.substring(lastIdx, match.index);
      }
      result += map.get(match[0].charCodeAt(0));
      lastIdx = match.index + 1;
    }
    return result + data.substring(lastIdx);
  };
}
var escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
var escapeAttribute = getEscaper(/["&\u00A0]/g, /* @__PURE__ */new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]]));
var escapeText = getEscaper(/[&<>\u00A0]/g, /* @__PURE__ */new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2VudGl0aWVzL2xpYi9lc2NhcGUuanMuNC41LjAuanMiLCIuLi9ub2RlX21vZHVsZXMvZW50aXRpZXMvbGliL2VzbS9lc2NhcGUudHMiXSwibmFtZXMiOlsiZXNjYXBlX2pzXzRfNV8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsImVuY29kZVhNTCIsImVzY2FwZSIsImVzY2FwZUF0dHJpYnV0ZSIsImVzY2FwZVRleHQiLCJlc2NhcGVVVEY4IiwiZ2V0Q29kZVBvaW50IiwieG1sUmVwbGFjZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwieG1sQ29kZU1hcCIsIk1hcCIsIlN0cmluZyIsInByb3RvdHlwZSIsImNvZGVQb2ludEF0Iiwic3RyIiwiaW5kZXgiLCJjIiwiY2hhckNvZGVBdCIsInJldCIsImxhc3RJZHgiLCJtYXRjaCIsImV4ZWMiLCJpIiwiY2hhciIsIm5leHQiLCJnZXQiLCJzdWJzdHJpbmciLCJ0b1N0cmluZyIsImxhc3RJbmRleCIsIk51bWJlciIsInN1YnN0ciIsImdldEVzY2FwZXIiLCJyZWdleCIsIm1hcCIsImVzY2FwZTIiLCJkYXRhIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx1QkFBQTtBQUFBQyxRQUFBLENBQUFELHVCQUFBO0VBQUFFLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFYLHVCQUFBOzs7QUNBTyxJQUFNUSxXQUFBLEdBQWM7QUFFM0IsSUFBTUksVUFBQSxHQUFhLG1CQUFJQyxHQUFBLENBQUksQ0FDdkIsQ0FBQyxJQUFJLFFBQVEsR0FDYixDQUFDLElBQUksT0FBTyxHQUNaLENBQUMsSUFBSSxRQUFRLEdBQ2IsQ0FBQyxJQUFJLE1BQU0sR0FDWCxDQUFDLElBQUksTUFBTSxFQUNkO0FBR00sSUFBTU4sWUFBQSxHQUVUTyxNQUFBLENBQU9DLFNBQUEsQ0FBVUMsV0FBQSxJQUFlLE9BQzFCLENBQUNDLEdBQUEsRUFBYUMsS0FBQSxLQUEwQkQsR0FBQSxDQUFJRCxXQUFBLENBQVlFLEtBQUssSUFFN0QsQ0FBQ0MsQ0FBQSxFQUFXRCxLQUFBLE1BQ1BDLENBQUEsQ0FBRUMsVUFBQSxDQUFXRixLQUFLLElBQUksV0FBWSxTQUM1QkMsQ0FBQSxDQUFFQyxVQUFBLENBQVdGLEtBQUssSUFBSSxTQUFVLE9BQ2pDQyxDQUFBLENBQUVDLFVBQUEsQ0FBV0YsS0FBQSxHQUFRLENBQUMsSUFDdEIsUUFDQSxRQUNBQyxDQUFBLENBQUVDLFVBQUEsQ0FBV0YsS0FBSztBQVNoQyxTQUFVaEIsVUFBVWUsR0FBQSxFQUFXO0VBQ2pDLElBQUlJLEdBQUEsR0FBTTtFQUNWLElBQUlDLE9BQUEsR0FBVTtFQUNkLElBQUlDLEtBQUE7RUFFSixRQUFRQSxLQUFBLEdBQVFmLFdBQUEsQ0FBWWdCLElBQUEsQ0FBS1AsR0FBRyxPQUFPLE1BQU07SUFDN0MsTUFBTVEsQ0FBQSxHQUFJRixLQUFBLENBQU1MLEtBQUE7SUFDaEIsTUFBTVEsSUFBQSxHQUFPVCxHQUFBLENBQUlHLFVBQUEsQ0FBV0ssQ0FBQztJQUM3QixNQUFNRSxJQUFBLEdBQU9mLFVBQUEsQ0FBV2dCLEdBQUEsQ0FBSUYsSUFBSTtJQUVoQyxJQUFJQyxJQUFBLEtBQVMsUUFBVztNQUNwQk4sR0FBQSxJQUFPSixHQUFBLENBQUlZLFNBQUEsQ0FBVVAsT0FBQSxFQUFTRyxDQUFDLElBQUlFLElBQUE7TUFDbkNMLE9BQUEsR0FBVUcsQ0FBQSxHQUFJO1dBQ1g7TUFDSEosR0FBQSxJQUFPLEdBQUdKLEdBQUEsQ0FBSVksU0FBQSxDQUFVUCxPQUFBLEVBQVNHLENBQUMsT0FBT2xCLFlBQUEsQ0FDckNVLEdBQUEsRUFDQVEsQ0FBQyxFQUNISyxRQUFBLENBQVMsRUFBRTtNQUViUixPQUFBLEdBQVVkLFdBQUEsQ0FBWXVCLFNBQUEsSUFBYUMsTUFBQSxFQUM5Qk4sSUFBQSxHQUFPLFdBQVksS0FBTTs7O0VBS3RDLE9BQU9MLEdBQUEsR0FBTUosR0FBQSxDQUFJZ0IsTUFBQSxDQUFPWCxPQUFPO0FBQ25DO0FBV08sSUFBTW5CLE1BQUEsR0FBU0QsU0FBQTtBQVl0QixTQUFTZ0MsV0FDTEMsS0FBQSxFQUNBQyxHQUFBLEVBQXdCO0VBRXhCLE9BQU8sU0FBU0MsUUFBT0MsSUFBQSxFQUFZO0lBQy9CLElBQUlmLEtBQUE7SUFDSixJQUFJRCxPQUFBLEdBQVU7SUFDZCxJQUFJaUIsTUFBQSxHQUFTO0lBRWIsT0FBUWhCLEtBQUEsR0FBUVksS0FBQSxDQUFNWCxJQUFBLENBQUtjLElBQUksR0FBSTtNQUMvQixJQUFJaEIsT0FBQSxLQUFZQyxLQUFBLENBQU1MLEtBQUEsRUFBTztRQUN6QnFCLE1BQUEsSUFBVUQsSUFBQSxDQUFLVCxTQUFBLENBQVVQLE9BQUEsRUFBU0MsS0FBQSxDQUFNTCxLQUFLOztNQUlqRHFCLE1BQUEsSUFBVUgsR0FBQSxDQUFJUixHQUFBLENBQUlMLEtBQUEsQ0FBTSxHQUFHSCxVQUFBLENBQVcsQ0FBQyxDQUFDO01BR3hDRSxPQUFBLEdBQVVDLEtBQUEsQ0FBTUwsS0FBQSxHQUFROztJQUc1QixPQUFPcUIsTUFBQSxHQUFTRCxJQUFBLENBQUtULFNBQUEsQ0FBVVAsT0FBTztFQUMxQztBQUNKO0FBU08sSUFBTWhCLFVBQUEsR0FBYTRCLFVBQUEsQ0FBVyxZQUFZdEIsVUFBVTtBQVFwRCxJQUFNUixlQUFBLEdBQWtCOEIsVUFBQSxDQUMzQixlQUNBLG1CQUFJckIsR0FBQSxDQUFJLENBQ0osQ0FBQyxJQUFJLFFBQVEsR0FDYixDQUFDLElBQUksT0FBTyxHQUNaLENBQUMsS0FBSyxRQUFRLEVBQ2pCLENBQUM7QUFTQyxJQUFNUixVQUFBLEdBQWE2QixVQUFBLENBQ3RCLGdCQUNBLG1CQUFJckIsR0FBQSxDQUFJLENBQ0osQ0FBQyxJQUFJLE9BQU8sR0FDWixDQUFDLElBQUksTUFBTSxHQUNYLENBQUMsSUFBSSxNQUFNLEdBQ1gsQ0FBQyxLQUFLLFFBQVEsRUFDakIsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==