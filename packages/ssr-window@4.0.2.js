System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["ssr-window","4.0.2"]]);
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

// .beyond/uimport/ssr-window.4.0.2.js
var ssr_window_4_0_2_exports = {};
__export(ssr_window_4_0_2_exports, {
  extend: () => extend,
  getDocument: () => getDocument,
  getWindow: () => getWindow,
  ssrDocument: () => ssrDocument,
  ssrWindow: () => ssrWindow
});
module.exports = __toCommonJS(ssr_window_4_0_2_exports);

// node_modules/ssr-window/ssr-window.esm.js
function isObject(obj) {
  return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target = {}, src = {}) {
  Object.keys(src).forEach(key => {
    if (typeof target[key] === "undefined") target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
var ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function getDocument() {
  const doc = typeof document !== "undefined" ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === "undefined") {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== "undefined" ? window : {};
  extend(win, ssrWindow);
  return win;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zc3Itd2luZG93LjQuMC4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Nzci13aW5kb3cvc3NyLXdpbmRvdy5lc20uanMiXSwibmFtZXMiOlsic3NyX3dpbmRvd180XzBfMl9leHBvcnRzIiwiX19leHBvcnQiLCJleHRlbmQiLCJnZXREb2N1bWVudCIsImdldFdpbmRvdyIsInNzckRvY3VtZW50Iiwic3NyV2luZG93IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImlzT2JqZWN0Iiwib2JqIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJ0YXJnZXQiLCJzcmMiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImxlbmd0aCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwibm9kZU5hbWUiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRyZW4iLCJjaGlsZE5vZGVzIiwic3R5bGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnROUyIsImltcG9ydE5vZGUiLCJsb2NhdGlvbiIsImhhc2giLCJob3N0IiwiaG9zdG5hbWUiLCJocmVmIiwib3JpZ2luIiwicGF0aG5hbWUiLCJwcm90b2NvbCIsInNlYXJjaCIsImRvYyIsImRvY3VtZW50IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInB1c2hTdGF0ZSIsImdvIiwiYmFjayIsIkN1c3RvbUV2ZW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJJbWFnZSIsIkRhdGUiLCJzY3JlZW4iLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwibWF0Y2hNZWRpYSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpZCIsIndpbiIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUE7QUFBQUMsUUFBQSxDQUFBRCx3QkFBQTtFQUFBRSxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBVCx3QkFBQTs7O0FDWUEsU0FBU1UsU0FBU0MsR0FBQSxFQUFLO0VBQ25CLE9BQVFBLEdBQUEsS0FBUSxRQUNaLE9BQU9BLEdBQUEsS0FBUSxZQUNmLGlCQUFpQkEsR0FBQSxJQUNqQkEsR0FBQSxDQUFJQyxXQUFBLEtBQWdCQyxNQUFBO0FBQzVCO0FBQ0EsU0FBU1gsT0FBT1ksTUFBQSxHQUFTLENBQUMsR0FBR0MsR0FBQSxHQUFNLENBQUMsR0FBRztFQUNuQ0YsTUFBQSxDQUFPRyxJQUFBLENBQUtELEdBQUcsRUFBRUUsT0FBQSxDQUFTQyxHQUFBLElBQVE7SUFDOUIsSUFBSSxPQUFPSixNQUFBLENBQU9JLEdBQUEsTUFBUyxhQUN2QkosTUFBQSxDQUFPSSxHQUFBLElBQU9ILEdBQUEsQ0FBSUcsR0FBQSxXQUNiUixRQUFBLENBQVNLLEdBQUEsQ0FBSUcsR0FBQSxDQUFJLEtBQ3RCUixRQUFBLENBQVNJLE1BQUEsQ0FBT0ksR0FBQSxDQUFJLEtBQ3BCTCxNQUFBLENBQU9HLElBQUEsQ0FBS0QsR0FBQSxDQUFJRyxHQUFBLENBQUksRUFBRUMsTUFBQSxHQUFTLEdBQUc7TUFDbENqQixNQUFBLENBQU9ZLE1BQUEsQ0FB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