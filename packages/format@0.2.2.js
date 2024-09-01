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

// .beyond/uimport/temp/format.0.2.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9mb3JtYXQvZm9ybWF0LmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L3RlbXAvZm9ybWF0LjAuMi4yLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVfZm9ybWF0IiwiX19jb21tb25KUyIsIm5vZGVfbW9kdWxlcy9mb3JtYXQvZm9ybWF0LmpzIiwiZXhwb3J0cyIsIm1vZHVsZTIiLCJuYW1lc3BhY2UiLCJmb3JtYXQiLCJldmFsIiwidnNwcmludGYiLCJjb25zb2xlIiwibG9nIiwicHJpbnRmIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJmbXQiLCJyZXBsYWNlbWVudHMiLCJjb25jYXQiLCJhcmdJbmRleCIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJpIiwibiIsImxlbmd0aCIsInJlc3VsdCIsImMiLCJlc2NhcGVkIiwiYXJnIiwidG1wIiwibGVhZGluZ1plcm8iLCJwcmVjaXNpb24iLCJuZXh0QXJnIiwic2x1cnBOdW1iZXIiLCJkaWdpdHMiLCJ0ZXN0IiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwicmVwbGFjZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b1VwcGVyQ2FzZSIsImZvcm1hdF8wXzJfMl9leHBvcnRzIiwiX19leHBvcnQiLCJkZWZhdWx0IiwiZm9ybWF0XzBfMl8yX2RlZmF1bHQiLCJtb2R1bGUiLCJfX3RvQ29tbW9uSlMiLCJfX3JlRXhwb3J0IiwiX190b0VTTSIsImltcG9ydF9mb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGNBQUEsR0FBQUMsVUFBQTtFQUFBLCtCQUFBQyxDQUFBQyxPQUFBLEVBQUFDLE9BQUE7SUFXQTtJQUFDLENBQUMsWUFBVztNQUdYLElBQUlDLFNBQUE7TUFHSixJQUFJLE9BQU9ELE9BQUEsS0FBVyxhQUFhO1FBQ2pD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Q2hDO2NBQUEsS0FDRztnQkFDSEgsR0FBQSxHQUFNUyxNQUFBLENBQU9FLFVBQUEsQ0FBV1IsT0FBQSxDQUFRLENBQUMsRUFBRVMsT0FBQSxDQUFRVixTQUFBLElBQWEsQ0FBQyxDQUFDO2dCQUMxRE4sTUFBQSxJQUFVSyxXQUFBLEdBQWNELEdBQUEsR0FBTUEsR0FBQSxDQUFJYSxPQUFBLENBQVEsTUFBTSxFQUFFO2dCQUNsRDtjQUFBLEtBQ0c7Z0JBQ0hqQixNQUFBLElBQVVrQixJQUFBLENBQUtDLFNBQUEsQ0FBVVosT0FBQSxDQUFRLENBQUM7Z0JBQ2xDO2NBQUEsS0FDRztnQkFDSFAsTUFBQSxJQUFVLE1BQU1XLFFBQUEsQ0FBU0osT0FBQSxDQUFRLEdBQUcsRUFBRSxFQUFFSyxRQUFBLENBQVMsQ0FBQztnQkFDbEQ7Y0FBQSxLQUNHO2dCQUNIWixNQUFBLElBQVVPLE9BQUEsQ0FBUTtnQkFDbEI7Y0FBQSxLQUNHO2dCQUNIUCxNQUFBLElBQVUsT0FBT1csUUFBQSxDQUFTSixPQUFBLENBQVEsR0FBRyxFQUFFLEVBQUVLLFFBQUEsQ0FBUyxFQUFFO2dCQUNwRDtjQUFBLEtBQ0c7Z0JBQ0haLE1BQUEsSUFBVSxPQUFPVyxRQUFBLENBQVNKLE9BQUEsQ0FBUSxHQUFHLEVBQUUsRUFBRUssUUFBQSxDQUFTLEVBQUUsRUFBRVEsV0FBQSxDQUFZO2dCQUNsRTtjQUFBO2dCQUVBcEIsTUFBQSxJQUFVQyxDQUFBO2dCQUNWO1lBQUE7VUFFSixXQUFXQSxDQUFBLEtBQU0sS0FBSztZQUNwQkMsT0FBQSxHQUFVO1VBQ1osT0FBTztZQUNMRixNQUFBLElBQVVDLENBQUE7VUFDWjtRQUNGO1FBQ0EsT0FBT0QsTUFBQTtNQUNUO0lBRUYsR0FBRTtFQUFBO0FBQUE7OztBQy9IRixJQUFBcUIsb0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUE5QyxPQUFBLEdBQUErQyxZQUFBLENBQUFMLG9CQUFBO0FBQUFNLFVBQUEsQ0FBQU4sb0JBQUEsRUFBY08sT0FBQSxDQUFBcEQsY0FBQSxLQUFkaUQsTUFBQSxDQUFBOUMsT0FBQTtBQUVBLElBQUFrRCxhQUFBLEdBQXFCRCxPQUFBLENBQUFwRCxjQUFBO0FBQ3JCLElBQU9nRCxvQkFBQSxHQUFRSyxhQUFBLENBQUFOLE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=