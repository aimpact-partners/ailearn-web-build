System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/texts"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@beyond-js/react-18-widgets","1.0.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/texts', dep)],
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/@beyond-js/react-18-widgets/hooks.1.0.1.js
var hooks_1_0_1_exports = {};
__export(hooks_1_0_1_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  useBinder: () => useBinder,
  useTexts: () => useTexts
});
module.exports = __toCommonJS(hooks_1_0_1_exports);

// node_modules/@beyond-js/react-18-widgets/hooks/hooks.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("@beyond-js/kernel@0.1.9/texts"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-18-widgets@1.0.1/hooks"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@beyond-js/kernel/texts", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 364360737,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useBinder = useBinder2;
    var React = require2("react");
    function useBinder2(objects, onBinder, event = "change") {
      React.useEffect(() => {
        objects.forEach(object => {
          if (!object) throw new Error(`object is not valid in useBinder ${object}`);
          object.on(event, onBinder);
        });
        return () => objects.forEach(object => object.off(event, onBinder));
      }, []);
    }
  }
});
ims.set("./use-texts", {
  hash: 2878044955,
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
  "im": "./index",
  "from": "useBinder",
  "name": "useBinder"
}, {
  "im": "./use-texts",
  "from": "useTexts",
  "name": "useTexts"
}];
var useBinder, useTexts;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "useBinder") && (useBinder = require2 ? require2("./index").useBinder : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9ob29rcy4xLjAuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvaG9va3MvX19zb3VyY2VzL2hvb2tzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9ob29rcy9fX3NvdXJjZXMvaG9va3MvdXNlLXRleHRzLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiX19iZXlvbmRfcGtnIiwiaG1yIiwidXNlQmluZGVyIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJvYmplY3RzIiwib25CaW5kZXIiLCJldmVudCIsIlJlYWN0IiwidXNlRWZmZWN0IiwiZm9yRWFjaCIsIm9iamVjdCIsIkVycm9yIiwib24iLCJvZmYiLCJzcGVjaWZpZXIiLCJrZXkiLCJyZWFkeSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0cyIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsInZhbHVlIiwiaGFzT3duUHJvcGVydHkiLCJjb25zb2xlIiwid2FybiIsImlzUmVhZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQTtJQVVpQixTQUNSRixXQUFVRyxTQUFnQkMsVUFBc0JDLFFBQWdCLFVBQVE7TUFDN0VDLE1BQU1DLFVBQVUsTUFBbUI7UUFDL0JKLFFBQVFLLFFBQVNDLFVBQXFCO1VBQ2xDLElBQUksQ0FBQ0EsUUFBUSxNQUFNLElBQUlDLE1BQU0sb0NBQW9DRCxRQUFRO1VBQ3pFQSxPQUFPRSxHQUFHTixPQUFPRCxRQUFRO1FBQzdCLENBQUM7UUFDRCxPQUFPLE1BQVlELFFBQVFLLFFBQVNDLFVBQWdCQSxPQUFPRyxJQUFJUCxPQUFPRCxRQUFRLENBQUM7TUFDbkYsR0FBRyxFQUFFO0lBQ1Q7Ozs7Ozs7Ozs7OztJQ25CQTtJQUNBO0lBRWlCLFNBQVVILFVBQVNZLFdBQW1CQyxLQUFZO01BQ2xFLE1BQU0sQ0FBQ0MsT0FBT0MsUUFBUSxJQUFJVixNQUFNVyxTQUFTLEtBQUs7TUFDOUMsTUFBTSxDQUFDQyxPQUFPQyxRQUFRLElBQUliLE1BQU1XLFNBQVMsRUFBRTtNQUUzQ1gsTUFBTUMsVUFBVSxNQUFLO1FBQ3BCLE1BQU1hLGFBQWEsSUFBSUMsb0JBQWFSLFNBQVM7UUFDN0MsTUFBTVMsZUFBZSxNQUFLO1VBQ3pCLElBQUlDLFFBQVFILFdBQVdHO1VBQ3ZCLElBQUlILFdBQVdMLFNBQVNELEtBQUs7WUFDNUIsSUFBSSxDQUFDUyxNQUFNQyxlQUFlVixHQUFHLEdBQUc7Y0FDL0JXLFFBQVFDLEtBQ1AsMERBQTBEWiwwQkFBMEJELFdBQVc7O1lBSWpHVSxRQUFRSCxXQUFXRyxNQUFNVDs7VUFFMUJLLFNBQVNJLEtBQUs7VUFDZFAsU0FBU0ksV0FBV0wsS0FBSztRQUMxQjtRQUNBSyxXQUFXVCxHQUFHLFVBQVVXLFlBQVk7UUFDcENBLGNBQVk7UUFDWixPQUFPLE1BQUs7VUFDWEYsV0FBV1QsR0FBRyxVQUFVVyxZQUFZO1FBQ3JDO01BQ0QsR0FBRyxFQUFFO01BQ0wsTUFBTUssVUFBVVosU0FBUyxDQUFDLENBQUNHO01BQzNCLE9BQU8sQ0FBQ1MsU0FBU1QsS0FBSztJQUN2QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpbGVhcm4vYXBwL291dCJ9