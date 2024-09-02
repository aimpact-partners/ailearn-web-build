System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["match-at","0.1.1"]]);
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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// node_modules/match-at/lib/matchAt.js
var require_matchAt = __commonJS({
  "node_modules/match-at/lib/matchAt.js"(exports, module2) {
    function getRelocatable(re) {
      if (!re.__matchAtRelocatable) {
        var source = re.source + "|()";
        var flags = "g" + (re.ignoreCase ? "i" : "") + (re.multiline ? "m" : "") + (re.unicode ? "u" : "");
        re.__matchAtRelocatable = new RegExp(source, flags);
      }
      return re.__matchAtRelocatable;
    }
    function matchAt(re, str, pos) {
      if (re.global || re.sticky) {
        throw new Error("matchAt(...): Only non-global regexes are supported");
      }
      var reloc = getRelocatable(re);
      reloc.lastIndex = pos;
      var match = reloc.exec(str);
      if (match[match.length - 1] == null) {
        match.length = match.length - 1;
        return match;
      } else {
        return null;
      }
    }
    module2.exports = matchAt;
  }
});

// .beyond/uimport/temp/match-at.0.1.1.js
var match_at_0_1_1_exports = {};
__export(match_at_0_1_1_exports, {
  default: () => match_at_0_1_1_default
});
module.exports = __toCommonJS(match_at_0_1_1_exports);
__reExport(match_at_0_1_1_exports, __toESM(require_matchAt()), module.exports);
var import_match_at = __toESM(require_matchAt());
var match_at_0_1_1_default = import_match_at.default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9tYXRjaC1hdC9saWIvbWF0Y2hBdC5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21hdGNoLWF0LjAuMS4xLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVfbWF0Y2hBdCIsIl9fY29tbW9uSlMiLCJub2RlX21vZHVsZXMvbWF0Y2gtYXQvbGliL21hdGNoQXQuanMiLCJleHBvcnRzIiwibW9kdWxlMiIsImdldFJlbG9jYXRhYmxlIiwicmUiLCJfX21hdGNoQXRSZWxvY2F0YWJsZSIsInNvdXJjZSIsImZsYWdzIiwiaWdub3JlQ2FzZSIsIm11bHRpbGluZSIsInVuaWNvZGUiLCJSZWdFeHAiLCJtYXRjaEF0Iiwic3RyIiwicG9zIiwiZ2xvYmFsIiwic3RpY2t5IiwiRXJyb3IiLCJyZWxvYyIsImxhc3RJbmRleCIsIm1hdGNoIiwiZXhlYyIsImxlbmd0aCIsIm1hdGNoX2F0XzBfMV8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJtYXRjaF9hdF8wXzFfMV9kZWZhdWx0IiwibW9kdWxlIiwiX190b0NvbW1vbkpTIiwiX19yZUV4cG9ydCIsIl9fdG9FU00iLCJpbXBvcnRfbWF0Y2hfYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGVBQUEsR0FBQUMsVUFBQTtFQUFBLHNDQUFBQyxDQUFBQyxPQUFBLEVBQUFDLE9BQUE7SUFBQSxTQUFTQyxlQUFlQyxFQUFBLEVBQUk7TUFFMUIsSUFBSSxDQUFDQSxFQUFBLENBQUdDLG9CQUFBLEVBQXNCO1FBSTVCLElBQUlDLE1BQUEsR0FBU0YsRUFBQSxDQUFHRSxNQUFBLEdBQVM7UUFHekIsSUFBSUMsS0FBQSxHQUFRLE9BQU9ILEVBQUEsQ0FBR0ksVUFBQSxHQUFhLE1BQU0sT0FBT0osRUFBQSxDQUFHSyxTQUFBLEdBQVksTUFBTSxPQUFPTCxFQUFBLENBQUdNLE9BQUEsR0FBVSxNQUFNO1FBSy9GTixFQUFBLENBQUdDLG9CQUFBLEdBQXVCLElBQUlNLE1BQUEsQ0FBT0wsTUFBQSxFQUFRQyxLQUFLO01BQ3BEO01BQ0EsT0FBT0gsRUFBQSxDQUFHQyxvQkFBQTtJQUNaO0lBRUEsU0FBU08sUUFBUVIsRUFBQSxFQUFJUyxHQUFBLEVBQUtDLEdBQUEsRUFBSztNQUM3QixJQUFJVixFQUFBLENBQUdXLE1BQUEsSUFBVVgsRUFBQSxDQUFHWSxNQUFBLEVBQVE7UUFDMUIsTUFBTSxJQUFJQyxLQUFBLENBQU0scURBQXFEO01BQ3ZFO01BQ0EsSUFBSUMsS0FBQSxHQUFRZixjQUFBLENBQWVDLEVBQUU7TUFDN0JjLEtBQUEsQ0FBTUMsU0FBQSxHQUFZTCxHQUFBO01BQ2xCLElBQUlNLEtBQUEsR0FBUUYsS0FBQSxDQUFNRyxJQUFBLENBQUtSLEdBQUc7TUFHMUIsSUFBSU8sS0FBQSxDQUFNQSxLQUFBLENBQU1FLE1BQUEsR0FBUyxNQUFNLE1BQU07UUFFbkNGLEtBQUEsQ0FBTUUsTUFBQSxHQUFTRixLQUFBLENBQU1FLE1BQUEsR0FBUztRQUM5QixPQUFPRixLQUFBO01BQ1QsT0FBTztRQUNMLE9BQU87TUFDVDtJQUNGO0lBRUFsQixPQUFBLENBQU9ELE9BQUEsR0FBVVcsT0FBQTtFQUFBO0FBQUE7OztBQ3JDakIsSUFBQVcsc0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxzQkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUExQixPQUFBLEdBQUEyQixZQUFBLENBQUFMLHNCQUFBO0FBQUFNLFVBQUEsQ0FBQU4sc0JBQUEsRUFBY08sT0FBQSxDQUFBaEMsZUFBQSxLQUFkNkIsTUFBQSxDQUFBMUIsT0FBQTtBQUVBLElBQUE4QixlQUFBLEdBQXFCRCxPQUFBLENBQUFoQyxlQUFBO0FBQ3JCLElBQU80QixzQkFBQSxHQUFRSyxlQUFBLENBQUFOLE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=