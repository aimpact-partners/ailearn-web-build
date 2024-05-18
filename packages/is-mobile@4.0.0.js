System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["is-mobile","4.0.0"]]);
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

// node_modules/is-mobile/index.js
var require_is_mobile = __commonJS({
  "node_modules/is-mobile/index.js"(exports, module2) {
    "use strict";

    module2.exports = isMobile;
    module2.exports.isMobile = isMobile;
    module2.exports.default = isMobile;
    var mobileRE = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
    var notMobileRE = /CrOS/;
    var tabletRE = /android|ipad|playbook|silk/i;
    function isMobile(opts) {
      if (!opts) opts = {};
      let ua = opts.ua;
      if (!ua && typeof navigator !== "undefined") ua = navigator.userAgent;
      if (ua && ua.headers && typeof ua.headers["user-agent"] === "string") {
        ua = ua.headers["user-agent"];
      }
      if (typeof ua !== "string") return false;
      let result = mobileRE.test(ua) && !notMobileRE.test(ua) || !!opts.tablet && tabletRE.test(ua);
      if (!result && opts.tablet && opts.featureDetect && navigator && navigator.maxTouchPoints > 1 && ua.indexOf("Macintosh") !== -1 && ua.indexOf("Safari") !== -1) {
        result = true;
      }
      return result;
    }
  }
});

// .beyond/uimport/temp/is-mobile.4.0.0.js
var is_mobile_4_0_0_exports = {};
__export(is_mobile_4_0_0_exports, {
  default: () => is_mobile_4_0_0_default
});
module.exports = __toCommonJS(is_mobile_4_0_0_exports);
__reExport(is_mobile_4_0_0_exports, __toESM(require_is_mobile()), module.exports);
var import_is_mobile = __toESM(require_is_mobile());
var is_mobile_4_0_0_default = import_is_mobile.default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9pcy1tb2JpbGUvaW5kZXguanMiLCIuLi8uYmV5b25kL3VpbXBvcnQvdGVtcC9pcy1tb2JpbGUuNC4wLjAuanMiXSwibmFtZXMiOlsicmVxdWlyZV9pc19tb2JpbGUiLCJfX2NvbW1vbkpTIiwibm9kZV9tb2R1bGVzL2lzLW1vYmlsZS9pbmRleC5qcyIsImV4cG9ydHMiLCJtb2R1bGUyIiwiaXNNb2JpbGUiLCJkZWZhdWx0IiwibW9iaWxlUkUiLCJub3RNb2JpbGVSRSIsInRhYmxldFJFIiwib3B0cyIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaGVhZGVycyIsInJlc3VsdCIsInRlc3QiLCJ0YWJsZXQiLCJmZWF0dXJlRGV0ZWN0IiwibWF4VG91Y2hQb2ludHMiLCJpbmRleE9mIiwiaXNfbW9iaWxlXzRfMF8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsImlzX21vYmlsZV80XzBfMF9kZWZhdWx0IiwibW9kdWxlIiwiX190b0NvbW1vbkpTIiwiX19yZUV4cG9ydCIsIl9fdG9FU00iLCJpbXBvcnRfaXNfbW9iaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxpQkFBQSxHQUFBQyxVQUFBO0VBQUEsaUNBQUFDLENBQUFDLE9BQUEsRUFBQUMsT0FBQTtJQUFBOztJQUVBQSxPQUFBLENBQU9ELE9BQUEsR0FBVUUsUUFBQTtJQUNqQkQsT0FBQSxDQUFPRCxPQUFBLENBQVFFLFFBQUEsR0FBV0EsUUFBQTtJQUMxQkQsT0FBQSxDQUFPRCxPQUFBLENBQVFHLE9BQUEsR0FBVUQsUUFBQTtJQUV6QixJQUFNRSxRQUFBLEdBQVc7SUFDakIsSUFBTUMsV0FBQSxHQUFjO0lBRXBCLElBQU1DLFFBQUEsR0FBVztJQUVqQixTQUFTSixTQUFVSyxJQUFBLEVBQU07TUFDdkIsSUFBSSxDQUFDQSxJQUFBLEVBQU1BLElBQUEsR0FBTyxDQUFDO01BQ25CLElBQUlDLEVBQUEsR0FBS0QsSUFBQSxDQUFLQyxFQUFBO01BQ2QsSUFBSSxDQUFDQSxFQUFBLElBQU0sT0FBT0MsU0FBQSxLQUFjLGFBQWFELEVBQUEsR0FBS0MsU0FBQSxDQUFVQyxTQUFBO01BQzVELElBQUlGLEVBQUEsSUFBTUEsRUFBQSxDQUFHRyxPQUFBLElBQVcsT0FBT0gsRUFBQSxDQUFHRyxPQUFBLENBQVEsa0JBQWtCLFVBQVU7UUFDcEVILEVBQUEsR0FBS0EsRUFBQSxDQUFHRyxPQUFBLENBQVE7TUFDbEI7TUFDQSxJQUFJLE9BQU9ILEVBQUEsS0FBTyxVQUFVLE9BQU87TUFFbkMsSUFBSUksTUFBQSxHQUNEUixRQUFBLENBQVNTLElBQUEsQ0FBS0wsRUFBRSxLQUFLLENBQUNILFdBQUEsQ0FBWVEsSUFBQSxDQUFLTCxFQUFFLEtBQ3pDLENBQUMsQ0FBQ0QsSUFBQSxDQUFLTyxNQUFBLElBQVVSLFFBQUEsQ0FBU08sSUFBQSxDQUFLTCxFQUFFO01BRXBDLElBQ0UsQ0FBQ0ksTUFBQSxJQUNETCxJQUFBLENBQUtPLE1BQUEsSUFDTFAsSUFBQSxDQUFLUSxhQUFBLElBQ0xOLFNBQUEsSUFDQUEsU0FBQSxDQUFVTyxjQUFBLEdBQWlCLEtBQzNCUixFQUFBLENBQUdTLE9BQUEsQ0FBUSxXQUFXLE1BQU0sTUFDNUJULEVBQUEsQ0FBR1MsT0FBQSxDQUFRLFFBQVEsTUFBTSxJQUN6QjtRQUNBTCxNQUFBLEdBQVM7TUFDWDtNQUVBLE9BQU9BLE1BQUE7SUFDVDtFQUFBO0FBQUE7OztBQ3JDQSxJQUFBTSx1QkFBQTtBQUFBQyxRQUFBLENBQUFELHVCQUFBO0VBQUFmLE9BQUEsRUFBQUEsQ0FBQSxLQUFBaUI7QUFBQTtBQUFBQyxNQUFBLENBQUFyQixPQUFBLEdBQUFzQixZQUFBLENBQUFKLHVCQUFBO0FBQUFLLFVBQUEsQ0FBQUwsdUJBQUEsRUFBY00sT0FBQSxDQUFBM0IsaUJBQUEsS0FBZHdCLE1BQUEsQ0FBQXJCLE9BQUE7QUFFQSxJQUFBeUIsZ0JBQUEsR0FBcUJELE9BQUEsQ0FBQTNCLGlCQUFBO0FBQ3JCLElBQU91Qix1QkFBQSxHQUFRSyxnQkFBQSxDQUFBdEIsT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FwcC9vdXQifQ==