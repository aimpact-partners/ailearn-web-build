System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["format","0.2.2"]]);
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

// node_modules/format/format.js
var require_format = __commonJS({
  "node_modules/format/format.js"(exports, module2) {
    ;
    (function () {
      var namespace;
      if (typeof module2 !== "undefined") {
        namespace = module2.exports = format;
      } else {
        namespace = function () {
          return this || (1, eval)("this");
        }();
      }
      namespace.format = format;
      namespace.vsprintf = vsprintf;
      if (typeof console !== "undefined" && typeof console.log === "function") {
        namespace.printf = printf;
      }
      function printf() {
        console.log(format.apply(null, arguments));
      }
      function vsprintf(fmt, replacements) {
        return format.apply(null, [fmt].concat(replacements));
      }
      function format(fmt) {
        var argIndex = 1,
          args = [].slice.call(arguments),
          i = 0,
          n = fmt.length,
          result = "",
          c,
          escaped = false,
          arg,
          tmp,
          leadingZero = false,
          precision,
          nextArg = function () {
            return args[argIndex++];
          },
          slurpNumber = function () {
            var digits = "";
            while (/\d/.test(fmt[i])) {
              digits += fmt[i++];
              c = fmt[i];
            }
            return digits.length > 0 ? parseInt(digits) : null;
          };
        for (; i < n; ++i) {
          c = fmt[i];
          if (escaped) {
            escaped = false;
            if (c == ".") {
              leadingZero = false;
              c = fmt[++i];
            } else if (c == "0" && fmt[i + 1] == ".") {
              leadingZero = true;
              i += 2;
              c = fmt[i];
            } else {
              leadingZero = true;
            }
            precision = slurpNumber();
            switch (c) {
              case "b":
                result += parseInt(nextArg(), 10).toString(2);
                break;
              case "c":
                arg = nextArg();
                if (typeof arg === "string" || arg instanceof String) result += arg;else result += String.fromCharCode(parseInt(arg, 10));
                break;
              case "d":
                result += parseInt(nextArg(), 10);
                break;
              case "f":
                tmp = String(parseFloat(nextArg()).toFixed(precision || 6));
                result += leadingZero ? tmp : tmp.replace(/^0/, "");
                break;
              case "j":
                result += JSON.stringify(nextArg());
                break;
              case "o":
                result += "0" + parseInt(nextArg(), 10).toString(8);
                break;
              case "s":
                result += nextArg();
                break;
              case "x":
                result += "0x" + parseInt(nextArg(), 10).toString(16);
                break;
              case "X":
                result += "0x" + parseInt(nextArg(), 10).toString(16).toUpperCase();
                break;
              default:
                result += c;
                break;
            }
          } else if (c === "%") {
            escaped = true;
          } else {
            result += c;
          }
        }
        return result;
      }
    })();
  }
});

// .beyond/uimport/format.0.2.2.js
var format_0_2_2_exports = {};
__export(format_0_2_2_exports, {
  default: () => format_0_2_2_default
});
module.exports = __toCommonJS(format_0_2_2_exports);
__reExport(format_0_2_2_exports, __toESM(require_format()), module.exports);
var import_format = __toESM(require_format());
var format_0_2_2_default = import_format.default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9mb3JtYXQvZm9ybWF0LmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L2Zvcm1hdC4wLjIuMi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlX2Zvcm1hdCIsIl9fY29tbW9uSlMiLCJub2RlX21vZHVsZXMvZm9ybWF0L2Zvcm1hdC5qcyIsImV4cG9ydHMiLCJtb2R1bGUyIiwibmFtZXNwYWNlIiwiZm9ybWF0IiwiZXZhbCIsInZzcHJpbnRmIiwiY29uc29sZSIsImxvZyIsInByaW50ZiIsImFwcGx5IiwiYXJndW1lbnRzIiwiZm10IiwicmVwbGFjZW1lbnRzIiwiY29uY2F0IiwiYXJnSW5kZXgiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwiaSIsIm4iLCJsZW5ndGgiLCJyZXN1bHQiLCJjIiwiZXNjYXBlZCIsImFyZyIsInRtcCIsImxlYWRpbmdaZXJvIiwicHJlY2lzaW9uIiwibmV4dEFyZyIsInNsdXJwTnVtYmVyIiwiZGlnaXRzIiwidGVzdCIsInBhcnNlSW50IiwidG9TdHJpbmciLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInJlcGxhY2UiLCJKU09OIiwic3RyaW5naWZ5IiwidG9VcHBlckNhc2UiLCJmb3JtYXRfMF8yXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsImZvcm1hdF8wXzJfMl9kZWZhdWx0IiwibW9kdWxlIiwiX190b0NvbW1vbkpTIiwiX19yZUV4cG9ydCIsIl9fdG9FU00iLCJpbXBvcnRfZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxjQUFBLEdBQUFDLFVBQUE7RUFBQSwrQkFBQUMsQ0FBQUMsT0FBQSxFQUFBQyxPQUFBO0lBV0E7SUFBQyxDQUFDLFlBQVc7TUFHWCxJQUFJQyxTQUFBO01BR0osSUFBSSxPQUFPRCxPQUFBLEtBQVcsYUFBYTtRQUNqQ0MsU0FB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QUFBLEtBQ0c7Z0JBQ0hILEdBQUEsR0FBTVMsTUFBQSxDQUFPRSxVQUFBLENBQVdSLE9BQUEsQ0FBUSxDQUFDLEVBQUVTLE9BQUEsQ0FBUVYsU0FBQSxJQUFhLENBQUMsQ0FBQztnQkFDMUROLE1BQUEsSUFBVUssV0FBQSxHQUFjRCxHQUFBLEdBQU1BLEdBQUEsQ0FBSWEsT0FBQSxDQUFRLE1BQU0sRUFBRTtnQkFDbEQ7Y0FBQSxLQUNHO2dCQUNIakIsTUFBQSxJQUFVa0IsSUFBQSxDQUFLQyxTQUFBLENBQVVaLE9BQUEsQ0FBUSxDQUFDO2dCQUNsQztjQUFBLEtBQ0c7Z0JBQ0hQLE1BQUEsSUFBVSxNQUFNVyxRQUFBLENBQVNKLE9BQUEsQ0FBUSxHQUFHLEVBQUUsRUFBRUssUUFBQSxDQUFTLENBQUM7Z0JBQ2xEO2NBQUEsS0FDRztnQkFDSFosTUFBQSxJQUFVTyxPQUFBLENBQVE7Z0JBQ2xCO2NBQUEsS0FDRztnQkFDSFAsTUFBQSxJQUFVLE9BQU9XLFFBQUEsQ0FBU0osT0FBQSxDQUFRLEdBQUcsRUFBRSxFQUFFSyxRQUFBLENBQVMsRUFBRTtnQkFDcEQ7Y0FBQSxLQUNHO2dCQUNIWixNQUFBLElBQVUsT0FBT1csUUFBQSxDQUFTSixPQUFBLENBQVEsR0FBRyxFQUFFLEVBQUVLLFFBQUEsQ0FBUyxFQUFFLEVBQUVRLFdBQUEsQ0FBWTtnQkFDbEU7Y0FBQTtnQkFFQXBCLE1BQUEsSUFBVUMsQ0FBQTtnQkFDVjtZQUFBO1VBRUosV0FBV0EsQ0FBQSxLQUFNLEtBQUs7WUFDcEJDLE9BQUEsR0FBVTtVQUNaLE9BQU87WUFDTEYsTUFBQSxJQUFVQyxDQUFBO1VBQ1o7UUFDRjtRQUNBLE9BQU9ELE1BQUE7TUFDVDtJQUVGLEdBQUU7RUFBQTtBQUFBOzs7QUMvSEYsSUFBQXFCLG9CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsb0JBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBOUMsT0FBQSxHQUFBK0MsWUFBQSxDQUFBTCxvQkFBQTtBQUFBTSxVQUFBLENBQUFOLG9CQUFBLEVBQWNPLE9BQUEsQ0FBQXBELGNBQUEsS0FBZGlELE1BQUEsQ0FBQTlDLE9BQUE7QUFFQSxJQUFBa0QsYUFBQSxHQUFxQkQsT0FBQSxDQUFBcEQsY0FBQTtBQUNyQixJQUFPZ0Qsb0JBQUEsR0FBUUssYUFBQSxDQUFBTixPQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9