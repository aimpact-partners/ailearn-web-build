System.register(["@beyond-js/kernel@0.1.12/bundle","react@18.3.1","@beyond-js/kernel@0.1.12/core","@beyond-js/kernel@0.1.12/texts"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["react","18.3.1"],["@beyond-js/react-18-widgets","1.1.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/texts', dep)],
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

// .beyond/uimport/@beyond-js/react-18-widgets/hooks.1.1.4.js
var hooks_1_1_4_exports = {};
__export(hooks_1_1_4_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  useBinder: () => useBinder,
  useTexts: () => useTexts
});
module.exports = __toCommonJS(hooks_1_1_4_exports);

// node_modules/@beyond-js/react-18-widgets/hooks/hooks.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("react@18.3.1"), 0);
var dependency_2 = __toESM(require("@beyond-js/kernel@0.1.12/texts"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-18-widgets@1.1.4/hooks"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@beyond-js/kernel/texts", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
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
ims.set("./types", {
  hash: 1313278057,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvaG9va3MuMS4xLjQuanMiLCJmaWxlOi8vL19fc291cmNlcy9ob29rcy9pbmRleC50cyIsImZpbGU6Ly8vX19zb3VyY2VzL2hvb2tzL3R5cGVzLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvaG9va3MvdXNlLXRleHRzLnRzIl0sIm5hbWVzIjpbImhvb2tzXzFfMV80X2V4cG9ydHMiLCJfX2V4cG9ydCIsIl9fYmV5b25kX3BrZyIsImhtciIsInVzZUJpbmRlciIsInVzZVRleHRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwicmVxdWlyZTIiLCJ1c2VCaW5kZXIyIiwib2JqZWN0cyIsIm9uQmluZGVyIiwiZXZlbnRzIiwiYmluZEV2ZW50cyIsInVzZUVmZmVjdCIsImNhbGxiYWNrIiwib2JqZWN0IiwibWV0aG9kIiwiZm9yRWFjaCIsImV2ZW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl90ZXh0cyIsInVzZVRleHRzMiIsInNwZWNpZmllciIsImtleSIsInJlYWR5Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzIiwic2V0VGV4dHMiLCJtb2RlbFRleHRzIiwiQ3VycmVudFRleHRzIiwidHJpZ2dlckV2ZW50IiwiaGFzT3duUHJvcGVydHkiLCJjb25zb2xlIiwid2FybiIsIm9uIiwiaXNSZWFkeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQkFBQTtBQUFBQyxRQUFBLENBQUFELG1CQUFBO0VBQUFFLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFSLG1CQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUEsSUFBQVMsS0FBQSxHQUFBQyxRQUFBO0lBU2lCLFNBQ1JDLFdBQVVDLE9BQUEsRUFBMEJDLFFBQUEsRUFBNEJDLE1BQUEsR0FBdUIsVUFBUTtNQUN2RyxNQUFNQyxVQUFBLEdBQXVCLE9BQU9ELE1BQUEsS0FBVyxXQUFXLENBQUNBLE1BQU0sSUFBSUEsTUFBQTtNQUVyRUwsS0FBQSxDQUFNTyxTQUFBLENBQVUsTUFBSztRQUNwQixNQUFNQyxRQUFBLEdBQVdBLENBQUNDLE1BQUEsRUFBdUJDLE1BQUEsS0FBd0I7VUFDaEUsSUFBSSxDQUFDRCxNQUFBLENBQU9DLE1BQU0sR0FBRztVQUNyQkosVUFBQSxDQUFXSyxPQUFBLENBQVFDLEtBQUEsSUFBUTtZQUMxQkgsTUFBQSxDQUFPQyxNQUFNLEVBQUVFLEtBQUEsRUFBT1IsUUFBUTtVQUMvQixDQUFDO1FBQ0Y7UUFDQUQsT0FBQSxDQUFRUSxPQUFBLENBQVFGLE1BQUEsSUFBVUQsUUFBQSxDQUFTQyxNQUFBLEVBQVEsSUFBSSxDQUFDO1FBQ2hELE9BQU8sTUFBTU4sT0FBQSxDQUFRUSxPQUFBLENBQVFGLE1BQUEsSUFBVUQsUUFBQSxDQUFTQyxNQUFBLEVBQVEsS0FBSyxDQUFDO01BQy9ELEdBQUcsRUFBRTtJQUNOOzs7Ozs7SUN2QkE7O0lBRUFJLE1BQUEsQ0FBQUMsY0FBQSxDQUFBaEIsT0FBQTtNQUNBaUIsS0FBQTtJQUNBOzs7Ozs7Ozs7Ozs7SUNKQSxJQUFBZixLQUFBLEdBQUFDLFFBQUE7SUFDQSxJQUFBZSxNQUFBLEdBQUFmLFFBQUE7SUFFaUIsU0FDUmdCLFVBQVNDLFNBQUEsRUFBbUJDLEdBQUEsRUFBWTtNQUNoRCxNQUFNLENBQUNDLEtBQUEsRUFBT0MsUUFBUSxJQUFJckIsS0FBQSxDQUFNc0IsUUFBQSxDQUFTLEtBQUs7TUFDOUMsTUFBTSxDQUFDQyxLQUFBLEVBQU9DLFFBQVEsSUFBSXhCLEtBQUEsQ0FBTXNCLFFBQUEsQ0FBUyxFQUFFO01BRTNDdEIsS0FBQSxDQUFNTyxTQUFBLENBQVUsTUFBSztRQUNwQixNQUFNa0IsVUFBQSxHQUFhLElBQUlULE1BQUEsQ0FBQVUsWUFBQSxDQUFhUixTQUFTO1FBQzdDLE1BQU1TLFlBQUEsR0FBZUEsQ0FBQSxLQUFLO1VBQ3pCLElBQUlaLEtBQUEsR0FBUVUsVUFBQSxDQUFXVixLQUFBO1VBQ3ZCLElBQUlVLFVBQUEsQ0FBV0wsS0FBQSxJQUFTRCxHQUFBLEVBQUs7WUFDNUIsSUFBSSxDQUFDSixLQUFBLENBQU1hLGNBQUEsQ0FBZVQsR0FBRyxHQUFHO2NBQy9CVSxPQUFBLENBQVFDLElBQUEsQ0FDUCwwREFBMERYLEdBQUcsdUJBQXVCRCxTQUFTLEVBQUU7O1lBSWpHSCxLQUFBLEdBQVFVLFVBQUEsQ0FBV1YsS0FBQSxDQUFNSSxHQUFHOztVQUU3QkssUUFBQSxDQUFTVCxLQUFLO1VBQ2RNLFFBQUEsQ0FBU0ksVUFBQSxDQUFXTCxLQUFLO1FBQzFCO1FBQ0FLLFVBQUEsQ0FBV00sRUFBQSxDQUFHLFVBQVVKLFlBQVk7UUFDcENBLFlBQUEsQ0FBWTtRQUNaLE9BQU8sTUFBSztVQUNYRixVQUFBLENBQVdNLEVBQUEsQ0FBRyxVQUFVSixZQUFZO1FBQ3JDO01BQ0QsR0FBRyxFQUFFO01BQ0wsTUFBTUssT0FBQSxHQUFVWixLQUFBLElBQVMsQ0FBQyxDQUFDRyxLQUFBO01BQzNCLE9BQU8sQ0FBQ1MsT0FBQSxFQUFTVCxLQUFLO0lBQ3ZCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9ydmQvb3V0In0=