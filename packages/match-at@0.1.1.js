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

// .beyond/uimport/match-at.0.1.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9tYXRjaC1hdC9saWIvbWF0Y2hBdC5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC9tYXRjaC1hdC4wLjEuMS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlX21hdGNoQXQiLCJfX2NvbW1vbkpTIiwibm9kZV9tb2R1bGVzL21hdGNoLWF0L2xpYi9tYXRjaEF0LmpzIiwiZXhwb3J0cyIsIm1vZHVsZTIiLCJnZXRSZWxvY2F0YWJsZSIsInJlIiwiX19tYXRjaEF0UmVsb2NhdGFibGUiLCJzb3VyY2UiLCJmbGFncyIsImlnbm9yZUNhc2UiLCJtdWx0aWxpbmUiLCJ1bmljb2RlIiwiUmVnRXhwIiwibWF0Y2hBdCIsInN0ciIsInBvcyIsImdsb2JhbCIsInN0aWNreSIsIkVycm9yIiwicmVsb2MiLCJsYXN0SW5kZXgiLCJtYXRjaCIsImV4ZWMiLCJsZW5ndGgiLCJtYXRjaF9hdF8wXzFfMV9leHBvcnRzIiwiX19leHBvcnQiLCJkZWZhdWx0IiwibWF0Y2hfYXRfMF8xXzFfZGVmYXVsdCIsIm1vZHVsZSIsIl9fdG9Db21tb25KUyIsIl9fcmVFeHBvcnQiLCJfX3RvRVNNIiwiaW1wb3J0X21hdGNoX2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxlQUFBLEdBQUFDLFVBQUE7RUFBQSxzQ0FBQUMsQ0FBQUMsT0FBQSxFQUFBQyxPQUFBO0lBQUEsU0FBU0MsZUFBZUMsRUFBQSxFQUFJO01BRTFCLElBQUksQ0FBQ0EsRUFBQSxDQUFHQyxvQkFBQSxFQUFzQjtRQUk1QixJQUFJQyxNQUFBLEdBQVNGLEVBQUEsQ0FBR0UsTUFBQSxHQUFTO1FBR3pCLElBQUlDLEtBQUEsR0FBUSxPQUFPSCxFQUFBLENBQUdJLFVBQUEsR0FBYSxNQUFNLE9BQU9KLEVBQUEsQ0FBR0ssU0FBQSxHQUFZLE1BQU0sT0FBT0wsRUFBQSxDQUFHTSxPQUFBLEdBQVUsTUFBTTtRQUsvRk4sRUFBQSxDQUFHQyxvQkFBQSxHQUF1QixJQUFJTSxNQUFBLENBQU9MLE1BQUEsRUFBUUMsS0FBSztNQUNwRDtNQUNBLE9BQU9ILEVBQUEsQ0FBR0Msb0JBQUE7SUFDWjtJQUVBLFNBQVNPLFFBQVFSLEVBQUEsRUFBSVMsR0FBQSxFQUFLQyxHQUFBLEVBQUs7TUFDN0IsSUFBSVYsRUFBQSxDQUFHVyxNQUFBLElBQVVYLEVBQUEsQ0FBR1ksTUFBQSxFQUFRO1FBQzFCLE1BQU0sSUFBSUMsS0FBQSxDQUFNLHFEQUFxRDtNQUN2RTtNQUNBLElBQUlDLEtBQUEsR0FBUWYsY0FBQSxDQUFlQyxFQUFFO01BQzdCYyxLQUFBLENBQU1DLFNBQUEsR0FBWUwsR0FBQTtNQUNsQixJQUFJTSxLQUFBLEdBQVFGLEtBQUEsQ0FBTUcsSUFBQSxDQUFLUixHQUFHO01BRzFCLElBQUlPLEtBQUEsQ0FBTUEsS0FBQSxDQUFNRSxNQUFBLEdBQVMsTUFBTSxNQUFNO1FBRW5DRixLQUFBLENBQU1FLE1BQUEsR0FBU0YsS0FBQSxDQUFNRSxNQUFBLEdBQVM7UUFDOUIsT0FBT0YsS0FBQTtNQUNULE9BQU87UUFDTCxPQUFPO01BQ1Q7SUFDRjtJQUVBbEIsT0FBQSxDQUFPRCxPQUFBLEdBQVVXLE9BQUE7RUFBQTtBQUFBOzs7QUNyQ2pCLElBQUFXLHNCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsc0JBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBMUIsT0FBQSxHQUFBMkIsWUFBQSxDQUFBTCxzQkFBQTtBQUFBTSxVQUFBLENBQUFOLHNCQUFBLEVBQWNPLE9BQUEsQ0FBQWhDLGVBQUEsS0FBZDZCLE1BQUEsQ0FBQTFCLE9BQUE7QUFFQSxJQUFBOEIsZUFBQSxHQUFxQkQsT0FBQSxDQUFBaEMsZUFBQTtBQUNyQixJQUFPNEIsc0JBQUEsR0FBUUssZUFBQSxDQUFBTixPQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9