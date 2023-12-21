System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/texts"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@beyond-js/react-18-widgets","1.0.3"]]);
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

// .beyond/uimport/@beyond-js/react-18-widgets/hooks.1.0.3.js
var hooks_1_0_3_exports = {};
__export(hooks_1_0_3_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  useBinder: () => useBinder,
  useTexts: () => useTexts
});
module.exports = __toCommonJS(hooks_1_0_3_exports);

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
    "vspecifier": "@beyond-js/react-18-widgets@1.0.3/hooks"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@beyond-js/kernel/texts", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 1265547908,
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
  hash: 2544629518,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvaG9va3MuMS4wLjMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdC0xOC13aWRnZXRzL2hvb2tzL19fc291cmNlcy9ob29rcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvaG9va3MvX19zb3VyY2VzL2hvb2tzL3VzZS10ZXh0cy50cyJdLCJuYW1lcyI6WyJob29rc18xXzBfM19leHBvcnRzIiwiX19leHBvcnQiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJ1c2VCaW5kZXIiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJSZWFjdCIsInJlcXVpcmUyIiwidXNlQmluZGVyMiIsIm9iamVjdHMiLCJvbkJpbmRlciIsImV2ZW50IiwidXNlRWZmZWN0IiwiZm9yRWFjaCIsIm9iamVjdCIsIkVycm9yIiwib24iLCJvZmYiLCJfdGV4dHMiLCJ1c2VUZXh0czIiLCJzcGVjaWZpZXIiLCJrZXkiLCJyZWFkeSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0cyIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsInZhbHVlIiwiaGFzT3duUHJvcGVydHkiLCJjb25zb2xlIiwid2FybiIsImlzUmVhZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsbUJBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVIsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxJQUFBUyxLQUFBLEdBQUFDLFFBQUE7SUFVaUIsU0FDUkMsV0FBVUMsT0FBQSxFQUFnQkMsUUFBQSxFQUFzQkMsS0FBQSxHQUFnQixVQUFRO01BQ2hGTCxLQUFBLENBQU1NLFNBQUEsQ0FBVSxNQUFtQjtRQUNsQ0gsT0FBQSxDQUFRSSxPQUFBLENBQVNDLE1BQUEsSUFBcUI7VUFDckMsSUFBSSxDQUFDQSxNQUFBLEVBQVEsTUFBTSxJQUFJQyxLQUFBLENBQU0sb0NBQW9DRCxNQUFBLEVBQVE7VUFDekVBLE1BQUEsQ0FBT0UsRUFBQSxDQUFHTCxLQUFBLEVBQU9ELFFBQVE7UUFDMUIsQ0FBQztRQUNELE9BQU8sTUFBWUQsT0FBQSxDQUFRSSxPQUFBLENBQVNDLE1BQUEsSUFBZ0JBLE1BQUEsQ0FBT0csR0FBQSxDQUFJTixLQUFBLEVBQU9ELFFBQVEsQ0FBQztNQUNoRixHQUFHLEVBQUU7SUFDTjs7Ozs7Ozs7Ozs7O0lDbkJBLElBQUFKLEtBQUEsR0FBQUMsUUFBQTtJQUNBLElBQUFXLE1BQUEsR0FBQVgsUUFBQTtJQUVpQixTQUNSWSxVQUFTQyxTQUFBLEVBQW1CQyxHQUFBLEVBQVk7TUFDaEQsTUFBTSxDQUFDQyxLQUFBLEVBQU9DLFFBQVEsSUFBSWpCLEtBQUEsQ0FBTWtCLFFBQUEsQ0FBUyxLQUFLO01BQzlDLE1BQU0sQ0FBQ0MsS0FBQSxFQUFPQyxRQUFRLElBQUlwQixLQUFBLENBQU1rQixRQUFBLENBQVMsRUFBRTtNQUUzQ2xCLEtBQUEsQ0FBTU0sU0FBQSxDQUFVLE1BQUs7UUFDcEIsTUFBTWUsVUFBQSxHQUFhLElBQUlULE1BQUEsQ0FBQVUsWUFBQSxDQUFhUixTQUFTO1FBQzdDLE1BQU1TLFlBQUEsR0FBZUEsQ0FBQSxLQUFLO1VBQ3pCLElBQUlDLEtBQUEsR0FBUUgsVUFBQSxDQUFXRyxLQUFBO1VBQ3ZCLElBQUlILFVBQUEsQ0FBV0wsS0FBQSxJQUFTRCxHQUFBLEVBQUs7WUFDNUIsSUFBSSxDQUFDUyxLQUFBLENBQU1DLGNBQUEsQ0FBZVYsR0FBRyxHQUFHO2NBQy9CVyxPQUFBLENBQVFDLElBQUEsQ0FDUCwwREFBMERaLEdBQUEsdUJBQTBCRCxTQUFBLEVBQVc7O1lBSWpHVSxLQUFBLEdBQVFILFVBQUEsQ0FBV0csS0FBQSxDQUFNVCxHQUFBOztVQUUxQkssUUFBQSxDQUFTSSxLQUFLO1VBQ2RQLFFBQUEsQ0FBU0ksVUFBQSxDQUFXTCxLQUFLO1FBQzFCO1FBQ0FLLFVBQUEsQ0FBV1gsRUFBQSxDQUFHLFVBQVVhLFlBQVk7UUFDcENBLFlBQUEsQ0FBWTtRQUNaLE9BQU8sTUFBSztVQUNYRixVQUFBLENBQVdYLEVBQUEsQ0FBRyxVQUFVYSxZQUFZO1FBQ3JDO01BQ0QsR0FBRyxFQUFFO01BQ0wsTUFBTUssT0FBQSxHQUFVWixLQUFBLElBQVMsQ0FBQyxDQUFDRyxLQUFBO01BQzNCLE9BQU8sQ0FBQ1MsT0FBQSxFQUFTVCxLQUFLO0lBQ3ZCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWlsZWFybi9hcHAvb3V0In0=