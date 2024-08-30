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

// .beyond/uimport/entities/lib/escape.js.4.5.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9lbnRpdGllcy9saWIvZXNjYXBlLmpzLjQuNS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9lc20vZXNjYXBlLnRzIl0sIm5hbWVzIjpbImVzY2FwZV9qc180XzVfMF9leHBvcnRzIiwiX19leHBvcnQiLCJlbmNvZGVYTUwiLCJlc2NhcGUiLCJlc2NhcGVBdHRyaWJ1dGUiLCJlc2NhcGVUZXh0IiwiZXNjYXBlVVRGOCIsImdldENvZGVQb2ludCIsInhtbFJlcGxhY2VyIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInhtbENvZGVNYXAiLCJNYXAiLCJTdHJpbmciLCJwcm90b3R5cGUiLCJjb2RlUG9pbnRBdCIsInN0ciIsImluZGV4IiwiYyIsImNoYXJDb2RlQXQiLCJyZXQiLCJsYXN0SWR4IiwibWF0Y2giLCJleGVjIiwiaSIsImNoYXIiLCJuZXh0IiwiZ2V0Iiwic3Vic3RyaW5nIiwidG9TdHJpbmciLCJsYXN0SW5kZXgiLCJOdW1iZXIiLCJzdWJzdHIiLCJnZXRFc2NhcGVyIiwicmVnZXgiLCJtYXAiLCJlc2NhcGUyIiwiZGF0YSIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsdUJBQUE7QUFBQUMsUUFBQSxDQUFBRCx1QkFBQTtFQUFBRSxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBWCx1QkFBQTs7O0FDQU8sSUFBTVEsV0FBQSxHQUFjO0FBRTNCLElBQU1JLFVBQUEsR0FBYSxtQkFBSUMsR0FBQSxDQUFJLENBQ3ZCLENBQUMsSUFBSSxRQUFRLEdBQ2IsQ0FBQyxJQUFJLE9BQU8sR0FDWixDQUFDLElBQUksUUFBUSxHQUNiLENBQUMsSUFBSSxNQUFNLEdBQ1gsQ0FBQyxJQUFJLE1BQU0sRUFDZDtBQUdNLElBQU1OLFlBQUEsR0FFVE8sTUFBQSxDQUFPQyxTQUFBLENBQVVDLFdBQUEsSUFBZSxPQUMxQixDQUFDQyxHQUFBLEVBQWFDLEtBQUEsS0FBMEJELEdBQUEsQ0FBSUQsV0FBQSxDQUFZRSxLQUFLLElBRTdELENBQUNDLENBQUEsRUFBV0QsS0FBQSxNQUNQQyxDQUFBLENBQUVDLFVBQUEsQ0FBV0YsS0FBSyxJQUFJLFdBQVksU0FDNUJDLENBQUEsQ0FBRUMsVUFBQSxDQUFXRixLQUFLLElBQUksU0FBVSxPQUNqQ0MsQ0FBQSxDQUFFQyxVQUFBLENBQVdGLEtBQUEsR0FBUSxDQUFDLElBQ3RCLFFBQ0EsUUFDQUMsQ0FBQSxDQUFFQyxVQUFBLENBQVdGLEtBQUs7QUFTaEMsU0FBVWhCLFVBQVVlLEdBQUEsRUFBVztFQUNqQyxJQUFJSSxHQUFBLEdBQU07RUFDVixJQUFJQyxPQUFBLEdBQVU7RUFDZCxJQUFJQyxLQUFBO0VBRUosUUFBUUEsS0FBQSxHQUFRZixXQUFBLENBQVlnQixJQUFBLENBQUtQLEdBQUcsT0FBTyxNQUFNO0lBQzdDLE1BQU1RLENBQUEsR0FBSUYsS0FBQSxDQUFNTCxLQUFBO0lBQ2hCLE1BQU1RLElBQUEsR0FBT1QsR0FBQSxDQUFJRyxVQUFBLENBQVdLLENBQUM7SUFDN0IsTUFBTUUsSUFBQSxHQUFPZixVQUFBLENBQVdnQixHQUFBLENBQUlGLElBQUk7SUFFaEMsSUFBSUMsSUFBQSxLQUFTLFFBQVc7TUFDcEJOLEdBQUEsSUFBT0osR0FBQSxDQUFJWSxTQUFBLENBQVVQLE9BQUEsRUFBU0csQ0FBQyxJQUFJRSxJQUFBO01BQ25DTCxPQUFBLEdBQVVHLENBQUEsR0FBSTtXQUNYO01BQ0hKLEdBQUEsSUFBTyxHQUFHSixHQUFBLENBQUlZLFNBQUEsQ0FBVVAsT0FBQSxFQUFTRyxDQUFDLE9BQU9sQixZQUFBLENBQ3JDVSxHQUFBLEVBQ0FRLENBQUMsRUFDSEssUUFBQSxDQUFTLEVBQUU7TUFFYlIsT0FBQSxHQUFVZCxXQUFBLENBQVl1QixTQUFBLElBQWFDLE1BQUEsRUFDOUJOLElBQUEsR0FBTyxXQUFZLEtBQU07OztFQUt0QyxPQUFPTCxHQUFBLEdBQU1KLEdBQUEsQ0FBSWdCLE1BQUEsQ0FBT1gsT0FBTztBQUNuQztBQVdPLElBQU1uQixNQUFBLEdBQVNELFNBQUE7QUFZdEIsU0FBU2dDLFdBQ0xDLEtBQUEsRUFDQUMsR0FBQSxFQUF3QjtFQUV4QixPQUFPLFNBQVNDLFFBQU9DLElBQUEsRUFBWTtJQUMvQixJQUFJZixLQUFBO0lBQ0osSUFBSUQsT0FBQSxHQUFVO0lBQ2QsSUFBSWlCLE1BQUEsR0FBUztJQUViLE9BQVFoQixLQUFBLEdBQVFZLEtBQUEsQ0FBTVgsSUFBQSxDQUFLYyxJQUFJLEdBQUk7TUFDL0IsSUFBSWhCLE9BQUEsS0FBWUMsS0FBQSxDQUFNTCxLQUFBLEVBQU87UUFDekJxQixNQUFBLElBQVVELElBQUEsQ0FBS1QsU0FBQSxDQUFVUCxPQUFBLEVBQVNDLEtBQUEsQ0FBTUwsS0FBSzs7TUFJakRxQixNQUFBLElBQVVILEdBQUEsQ0FBSVIsR0FBQSxDQUFJTCxLQUFBLENBQU0sR0FBR0gsVUFBQSxDQUFXLENBQUMsQ0FBQztNQUd4Q0UsT0FBQSxHQUFVQyxLQUFBLENBQU1MLEtBQUEsR0FBUTs7SUFHNUIsT0FBT3FCLE1BQUEsR0FBU0QsSUFBQSxDQUFLVCxTQUFBLENBQVVQLE9BQU87RUFDMUM7QUFDSjtBQVNPLElBQU1oQixVQUFBLEdBQWE0QixVQUFBLENBQVcsWUFBWXRCLFVBQVU7QUFRcEQsSUFBTVIsZUFBQSxHQUFrQjhCLFVBQUEsQ0FDM0IsZUFDQSxtQkFBSXJCLEdBQUEsQ0FBSSxDQUNKLENBQUMsSUFBSSxRQUFRLEdBQ2IsQ0FBQyxJQUFJLE9BQU8sR0FDWixDQUFDLEtBQUssUUFBUSxFQUNqQixDQUFDO0FBU0MsSUFBTVIsVUFBQSxHQUFhNkIsVUFBQSxDQUN0QixnQkFDQSxtQkFBSXJCLEdBQUEsQ0FBSSxDQUNKLENBQUMsSUFBSSxPQUFPLEdBQ1osQ0FBQyxJQUFJLE1BQU0sR0FDWCxDQUFDLElBQUksTUFBTSxHQUNYLENBQUMsS0FBSyxRQUFRLEVBQ2pCLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=