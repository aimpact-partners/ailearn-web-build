System.register(["@beyond-js/kernel@0.1.14/bundle","react@18.3.1","@beyond-js/kernel@0.1.14/core","@beyond-js/kernel@0.1.14/texts"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.14"],["react","18.3.1"],["@beyond-js/react-18-widgets","1.1.7"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.14/bundle', dep), dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('@beyond-js/kernel@0.1.14/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.14/texts', dep)],
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
// If the importer is in node compatibility mode or this is not an ESM
// file that has been converted to a CommonJS file using a Babel-
// compatible transform (i.e. "__esModule" has not been set), then set
// "default" to the CommonJS "module.exports" for node compatibility.
isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@beyond-js/react-18-widgets/hooks.1.1.7.js
var hooks_1_1_7_exports = {};
__export(hooks_1_1_7_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  useBinder: () => useBinder,
  useStore: () => useStore,
  useTexts: () => useTexts
});
module.exports = __toCommonJS(hooks_1_1_7_exports);

// node_modules/@beyond-js/react-18-widgets/hooks/hooks.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.14/bundle"), 0);
var dependency_1 = __toESM(require("react@18.3.1"), 0);
var dependency_2 = __toESM(require("@beyond-js/kernel@0.1.14/texts"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-18-widgets@1.1.7/hooks"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@beyond-js/kernel/texts", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./types", {
  hash: 4218133194,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./use-binder", {
  hash: 3517680304,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useBinder = useBinder2;
    var React = require2("react");
    function useBinder2(objects, onBinder, events = "change") {
      const bindEvents = typeof events === "string" ? [events] : events;
      React.useEffect(() => {
        const callback = (object, method) => {
          if (!object[method]) return;
          bindEvents.forEach(event => {
            object[method](event, onBinder);
          });
        };
        objects.forEach(object => callback(object, "on"));
        return () => objects.forEach(object => callback(object, "off"));
      }, []);
    }
  }
});
ims.set("./use-screen", {
  hash: 3220525410,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useScreen = useScreen;
    var _react = require2("react");
    const baseBreaks = {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    };
    function useScreen(breaks) {
      const vals = {
        ...baseBreaks,
        ...breaks
      };
      const getKey = w => {
        const list = Object.entries(vals);
        const sorted = list.sort(([, a], [, b]) => b - a);
        for (const [k, min] of sorted) {
          if (w >= min) return k;
        }
        return "xs";
      };
      const hasWin = typeof globalThis !== "undefined" && !!globalThis.window;
      const [state, setState] = (0, _react.useState)(() => {
        const w = hasWin ? globalThis.innerWidth : 0;
        const h = hasWin ? globalThis.innerHeight : 0;
        const k = getKey(w);
        const flags = makeFlags(k, vals, w);
        return {
          width: w,
          height: h,
          key: k,
          ...flags
        };
      });
      (0, _react.useEffect)(() => {
        if (!hasWin) return;
        const update = () => {
          const w = globalThis.innerWidth;
          const h = globalThis.innerHeight;
          const k = getKey(w);
          const flags = makeFlags(k, vals, w);
          setState(prev => {
            if (prev.width !== w || prev.height !== h || prev.key !== k) {
              return {
                width: w,
                height: h,
                key: k,
                ...flags
              };
            }
            return prev;
          });
        };
        update();
        globalThis.addEventListener("resize", update);
        return () => {
          globalThis.removeEventListener("resize", update);
        };
      }, [hasWin, vals]);
      return state;
    }
    function makeFlags(k, vals, w) {
      const xs = k === "xs";
      const sm = k === "sm";
      const md = k === "md";
      const lg = k === "lg";
      const xl = k === "xl";
      const xxl = k === "xxl";
      const isMobile = w < vals.md;
      const isTablet = w >= vals.md && w < vals.lg;
      const isDesktop = w >= vals.lg;
      return {
        xs,
        sm,
        md,
        lg,
        xl,
        xxl,
        isMobile,
        isTablet,
        isDesktop
      };
    }
  }
});
ims.set("./use-store", {
  hash: 4171293876,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useStore = useStore2;
    var _react = require2("react");
    function useStore2(store, events = ["change"], onListen) {
      if (!Array.isArray(events)) {
        throw new Error("The events parameter must be an array of strings");
      }
      const [, setVersion] = (0, _react.useState)(0);
      (0, _react.useEffect)(() => {
        const handler = () => {
          setVersion(v => v + 1);
          onListen?.();
        };
        events.forEach(event => store.on(event, handler));
        return () => {
          events.forEach(event => store.off(event, handler));
        };
      }, [store, events]);
      return store;
    }
  }
});
ims.set("./use-texts", {
  hash: 2200528805,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useTexts = useTexts2;
    var React = require2("react");
    var _texts = require2("@beyond-js/kernel/texts");
    function useTexts2(specifier, key) {
      const [ready, setReady] = React.useState(false);
      const [texts, setTexts] = React.useState({});
      React.useEffect(() => {
        const modelTexts = new _texts.CurrentTexts(specifier);
        const triggerEvent = () => {
          let value = modelTexts.value;
          if (modelTexts.ready && key) {
            if (!value.hasOwnProperty(key)) {
              console.warn(`the key specified for texts was not found. Key passed: ${key}, module specifier: ${specifier}`);
            }
            value = modelTexts.value[key];
          }
          setTexts(value);
          setReady(modelTexts.ready);
        };
        modelTexts.on("change", triggerEvent);
        triggerEvent();
        return () => {
          modelTexts.on("change", triggerEvent);
        };
      }, []);
      const isReady = ready && !!texts;
      return [isReady, texts];
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./use-binder",
  "from": "useBinder",
  "name": "useBinder"
}, {
  "im": "./use-store",
  "from": "useStore",
  "name": "useStore"
}, {
  "im": "./use-texts",
  "from": "useTexts",
  "name": "useTexts"
}];
var useBinder, useStore, useTexts;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "useBinder") && (useBinder = require2 ? require2("./use-binder").useBinder : value);
  (require2 || prop === "useStore") && (useStore = require2 ? require2("./use-store").useStore : value);
  (require2 || prop === "useTexts") && (useTexts = require2 ? require2("./use-texts").useTexts : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvaG9va3MuMS4xLjcuanMiLCJmaWxlOi8vL19fc291cmNlcy9ob29rcy90eXBlcy50cyIsImZpbGU6Ly8vX19zb3VyY2VzL2hvb2tzL3VzZS1iaW5kZXIudHMiLCJmaWxlOi8vL19fc291cmNlcy9ob29rcy91c2Utc2NyZWVuLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvaG9va3MvdXNlLXN0b3JlLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvaG9va3MvdXNlLXRleHRzLnRzIl0sIm5hbWVzIjpbImhvb2tzXzFfMV83X2V4cG9ydHMiLCJfX2V4cG9ydCIsIl9fYmV5b25kX3BrZyIsImhtciIsInVzZUJpbmRlciIsInVzZVN0b3JlIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIlJlYWN0IiwicmVxdWlyZTIiLCJ1c2VCaW5kZXIyIiwib2JqZWN0cyIsIm9uQmluZGVyIiwiZXZlbnRzIiwiYmluZEV2ZW50cyIsInVzZUVmZmVjdCIsImNhbGxiYWNrIiwib2JqZWN0IiwibWV0aG9kIiwiZm9yRWFjaCIsImV2ZW50IiwiX3JlYWN0IiwiYmFzZUJyZWFrcyIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJ4eGwiLCJ1c2VTY3JlZW4iLCJicmVha3MiLCJ2YWxzIiwiZ2V0S2V5IiwidyIsImxpc3QiLCJlbnRyaWVzIiwic29ydGVkIiwic29ydCIsImEiLCJiIiwiayIsIm1pbiIsImhhc1dpbiIsImdsb2JhbFRoaXMiLCJ3aW5kb3ciLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJpbm5lcldpZHRoIiwiaCIsImlubmVySGVpZ2h0IiwiZmxhZ3MiLCJtYWtlRmxhZ3MiLCJ3aWR0aCIsImhlaWdodCIsImtleSIsInVwZGF0ZSIsInByZXYiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlzTW9iaWxlIiwiaXNUYWJsZXQiLCJpc0Rlc2t0b3AiLCJ1c2VTdG9yZTIiLCJzdG9yZSIsIm9uTGlzdGVuIiwiQXJyYXkiLCJpc0FycmF5IiwiRXJyb3IiLCJzZXRWZXJzaW9uIiwiaGFuZGxlciIsInYiLCJvbiIsIm9mZiIsIl90ZXh0cyIsInVzZVRleHRzMiIsInNwZWNpZmllciIsInJlYWR5Iiwic2V0UmVhZHkiLCJ0ZXh0cyIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsImhhc093blByb3BlcnR5IiwiY29uc29sZSIsIndhcm4iLCJpc1JlYWR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsbUJBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVQsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQTs7SUFFQVUsTUFBQSxDQUFBQyxjQUFBLENBQUFILE9BQUE7TUFDQUksS0FBQTtJQUNBOzs7Ozs7Ozs7Ozs7SUNKQSxJQUFBQyxLQUFBLEdBQUFDLFFBQUE7SUFTaUIsU0FDUkMsV0FBVUMsT0FBQSxFQUEyQkMsUUFBQSxFQUE2QkMsTUFBQSxHQUF3QixVQUFRO01BQzFHLE1BQU1DLFVBQUEsR0FBdUIsT0FBT0QsTUFBQSxLQUFXLFdBQVcsQ0FBQ0EsTUFBTSxJQUFJQSxNQUFBO01BRXJFTCxLQUFBLENBQU1PLFNBQUEsQ0FBVSxNQUFLO1FBQ3BCLE1B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QUFBUSxZQUFBLENBQWFOLFNBQVM7UUFDN0MsTUFBTU8sWUFBQSxHQUFlQSxDQUFBLEtBQUs7VUFDekIsSUFBSTVFLEtBQUEsR0FBUTBFLFVBQUEsQ0FBVzFFLEtBQUE7VUFDdkIsSUFBSTBFLFVBQUEsQ0FBV0osS0FBQSxJQUFTdEIsR0FBQSxFQUFLO1lBQzVCLElBQUksQ0FBQ2hELEtBQUEsQ0FBTTZFLGNBQUEsQ0FBZTdCLEdBQUcsR0FBRztjQUMvQjhCLE9BQUEsQ0FBUUMsSUFBQSxDQUNQLDBEQUEwRC9CLEdBQUcsdUJBQXVCcUIsU0FBUyxFQUFFOztZQUlqR3JFLEtBQUEsR0FBUTBFLFVBQUEsQ0FBVzFFLEtBQUEsQ0FBTWdELEdBQUc7O1VBRTdCeUIsUUFBQSxDQUFTekUsS0FBSztVQUNkdUUsUUFBQSxDQUFTRyxVQUFBLENBQVdKLEtBQUs7UUFDMUI7UUFDQUksVUFBQSxDQUFXVCxFQUFBLENBQUcsVUFBVVcsWUFBWTtRQUNwQ0EsWUFBQSxDQUFZO1FBQ1osT0FBTyxNQUFLO1VBQ1hGLFVBQUEsQ0FBV1QsRUFBQSxDQUFHLFVBQVVXLFlBQVk7UUFDckM7TUFDRCxHQUFHLEVBQUU7TUFDTCxNQUFNSSxPQUFBLEdBQVVWLEtBQUEsSUFBUyxDQUFDLENBQUNFLEtBQUE7TUFDM0IsT0FBTyxDQUFDUSxPQUFBLEVBQVNSLEtBQUs7SUFDdkIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL3J2ZC9vdXQifQ==