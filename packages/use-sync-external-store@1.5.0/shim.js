System.register(["react@18.3.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["use-sync-external-store","1.5.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep)],
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

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";

    (function () {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = true, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot();
          objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = true);
        }
        cachedValue = useState({
          inst: {
            value,
            getSnapshot
          }
        });
        var inst = cachedValue[0].inst,
          forceUpdate = cachedValue[1];
        useLayoutEffect(function () {
          inst.value = value;
          inst.getSnapshot = getSnapshot;
          checkIfSnapshotChanged(inst) && forceUpdate({
            inst
          });
        }, [subscribe, value, getSnapshot]);
        useEffect(function () {
          checkIfSnapshotChanged(inst) && forceUpdate({
            inst
          });
          return subscribe(function () {
            checkIfSnapshotChanged(inst) && forceUpdate({
              inst
            });
          });
        }, [subscribe]);
        useDebugValue(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React = require("react@18.3.1"),
        objectIs = "function" === typeof Object.is ? Object.is : is,
        useState = React.useState,
        useEffect = React.useEffect,
        useLayoutEffect = React.useLayoutEffect,
        useDebugValue = React.useDebugValue,
        didWarnOld18Alpha = false,
        didWarnUncachedGetSnapshot = false,
        shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
      exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// .beyond/uimport/use-sync-external-store/shim.1.5.0.js
var shim_1_5_0_exports = {};
__export(shim_1_5_0_exports, {
  default: () => shim_1_5_0_default
});
module.exports = __toCommonJS(shim_1_5_0_exports);
__reExport(shim_1_5_0_exports, __toESM(require_shim()), module.exports);
var import_shim = __toESM(require_shim());
var shim_1_5_0_default = import_shim.default;
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5kZXZlbG9wbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltL2luZGV4LmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW0uMS41LjAuanMiXSwibmFtZXMiOlsicmVxdWlyZV91c2Vfc3luY19leHRlcm5hbF9zdG9yZV9zaGltX2RldmVsb3BtZW50IiwiX19jb21tb25KUyIsIm5vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5kZXZlbG9wbWVudC5qcyIsImV4cG9ydHMiLCJpcyIsIngiLCJ5IiwidXNlU3luY0V4dGVybmFsU3RvcmUkMiIsInN1YnNjcmliZSIsImdldFNuYXBzaG90IiwiZGlkV2Fybk9sZDE4QWxwaGEiLCJSZWFjdCIsInN0YXJ0VHJhbnNpdGlvbiIsImNvbnNvbGUiLCJlcnJvciIsInZhbHVlIiwiZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QiLCJjYWNoZWRWYWx1ZSIsIm9iamVjdElzIiwidXNlU3RhdGUiLCJpbnN0IiwiZm9yY2VVcGRhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJjaGVja0lmU25hcHNob3RDaGFuZ2VkIiwidXNlRWZmZWN0IiwidXNlRGVidWdWYWx1ZSIsImxhdGVzdEdldFNuYXBzaG90IiwibmV4dFZhbHVlIiwidXNlU3luY0V4dGVybmFsU3RvcmUkMSIsIl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyIsInJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCIsIkVycm9yIiwicmVxdWlyZSIsIk9iamVjdCIsInNoaW0iLCJ3aW5kb3ciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZSIsInJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wIiwicmVxdWlyZV9zaGltIiwibm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW0vaW5kZXguanMiLCJtb2R1bGUyIiwic2hpbV8xXzVfMF9leHBvcnRzIiwiX19leHBvcnQiLCJkZWZhdWx0Iiwic2hpbV8xXzVfMF9kZWZhdWx0IiwibW9kdWxlIiwiX190b0NvbW1vbkpTIiwiX19yZUV4cG9ydCIsIl9fdG9FU00iLCJpbXBvcnRfc2hpbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZ0RBQUEsR0FBQUMsVUFBQTtFQUFBLHNGQUFBQyxDQUFBQyxPQUFBO0lBQUE7O0lBV0EsQ0FDRyxZQUFZO01BQ1gsU0FBU0MsR0FBR0MsQ0FBQSxFQUFHQyxDQUFBLEVBQUc7UUFDaEIsT0FBUUQsQ0FBQSxLQUFNQyxDQUFBLEtBQU0sTUFBTUQsQ0FBQSxJQUFLLElBQUlBLENBQUEsS0FBTSxJQUFJQyxDQUFBLEtBQVFELENBQUEsS0FBTUEsQ0FBQSxJQUFLQyxDQUFBLEtBQU1BLENBQUE7TUFDeEU7TUFDQSxTQUFTQyx1QkFBdUJDLFNBQUEsRUFBV0MsV0FBQSxFQUFhO1FBQ3REQyxpQkFBQSxJQUNFLFdBQVdDLEtBQUEsQ0FBTUMsZUFBQSxLQUNmRixpQkFBQSxHQUFvQixNQUN0QkcsT0FBQSxDQUFRQyxLQUFBLENBQ04sZ01BQ0Y7UUFDRixJQUFJQyxLQUFBLEdBQVFOLFdBQUEsQ0FBWTtRQUN4QixJQUFJLENBQUNPLDBCQUFBLEVBQTRCO1VBQy9CLElBQUlDLFdBQUEsR0FBY1IsV0FBQSxDQUFZO1VBQzlCUyxRQUFBLENBQVNILEtBQUEsRUFBT0UsV0FBVyxNQUN4QkosT0FBQSxDQUFRQyxLQUFBLENBQ1Asc0VBQ0YsR0FDQ0UsMEJBQUEsR0FBNkI7UUFDbEM7UUFDQUMsV0FBQSxHQUFjRSxRQUFBLENBQVM7VUFDckJDLElBQUEsRUFBTTtZQUFFTCxLQUFBO1lBQWNOO1VBQXlCO1FBQ2pELENBQUM7UUFDRCxJQUFJVyxJQUFBLEdBQU9ILFdBQUEsQ0FBWSxHQUFHRyxJQUFBO1VBQ3hCQyxXQUFBLEdBQWNKLFdBQUEsQ0FBWTtRQUM1QkssZUFBQSxDQUNFLFlBQVk7VUFDVkYsSUFBQSxDQUFLTCxLQUFBLEdBQVFBLEtBQUE7VUFDYkssSUFBQSxDQUFLWCxXQUFBLEdBQWNBLFdBQUE7VUFDbkJjLHNCQUFBLENBQXVCSCxJQUFJLEtBQUtDLFdBQUEsQ0FBWTtZQUFFRDtVQUFXLENBQUM7UUFDNUQsR0FDQSxDQUFDWixTQUFBLEVBQVdPLEtBQUEsRUFBT04sV0FBVyxDQUNoQztRQUNBZSxTQUFBLENBQ0UsWUFBWTtVQUNWRCxzQkFBQSxDQUF1QkgsSUFBSSxLQUFLQyxXQUFBLENBQVk7WUFBRUQ7VUFBVyxDQUFDO1VBQzFELE9BQU9aLFNBQUEsQ0FBVSxZQUFZO1lBQzNCZSxzQkFBQSxDQUF1QkgsSUFBSSxLQUFLQyxXQUFBLENBQVk7Y0FBRUQ7WUFBVyxDQUFDO1VBQzVELENBQUM7UUFDSCxHQUNBLENBQUNaLFNBQVMsQ0FDWjtRQUNBaUIsYUFBQSxDQUFjVixLQUFLO1FBQ25CLE9BQU9BLEtBQUE7TUFDVDtNQUNBLFNBQVNRLHVCQUF1QkgsSUFBQSxFQUFNO1FBQ3BDLElBQUlNLGlCQUFBLEdBQW9CTixJQUFBLENBQUtYLFdBQUE7UUFDN0JXLElBQUEsR0FBT0EsSUFBQSxDQUFLTCxLQUFBO1FBQ1osSUFBSTtVQUNGLElBQUlZLFNBQUEsR0FBWUQsaUJBQUEsQ0FBa0I7VUFDbEMsT0FBTyxDQUFDUixRQUFBLENBQVNFLElBQUEsRUFBTU8sU0FBUztRQUNsQyxTQUFTYixLQUFBLEVBQVA7VUFDQSxPQUFPO1FBQ1Q7TUFDRjtNQUNBLFNBQVNjLHVCQUF1QnBCLFNBQUEsRUFBV0MsV0FBQSxFQUFhO1FBQ3RELE9BQU9BLFdBQUEsQ0FBWTtNQUNyQjtNQUNBLGdCQUFnQixPQUFPb0IsOEJBQUEsSUFDckIsZUFDRSxPQUFPQSw4QkFBQSxDQUErQkMsMkJBQUEsSUFDeENELDhCQUFBLENBQStCQywyQkFBQSxDQUE0QkMsS0FBQSxDQUFNLENBQUM7TUFDcEUsSUFBSXBCLEtBQUEsR0FBUXFCLE9BQUEsQ0FBUTtRQUNsQmQsUUFBQSxHQUFXLGVBQWUsT0FBT2UsTUFBQSxDQUFPN0IsRUFBQSxHQUFLNkIsTUFBQSxDQUFPN0IsRUFBQSxHQUFLQSxFQUFBO1FBQ3pEZSxRQUFBLEdBQVdSLEtBQUEsQ0FBTVEsUUFBQTtRQUNqQkssU0FBQSxHQUFZYixLQUFBLENBQU1hLFNBQUE7UUFDbEJGLGVBQUEsR0FBa0JYLEtBQUEsQ0FBTVcsZUFBQTtRQUN4QkcsYUFBQSxHQUFnQmQsS0FBQSxDQUFNYyxhQUFBO1FBQ3RCZixpQkFBQSxHQUFvQjtRQUNwQk0sMEJBQUEsR0FBNkI7UUFDN0JrQixJQUFBLEdBQ0UsZ0JBQWdCLE9BQU9DLE1BQUEsSUFDdkIsZ0JBQWdCLE9BQU9BLE1BQUEsQ0FBT0MsUUFBQSxJQUM5QixnQkFBZ0IsT0FBT0QsTUFBQSxDQUFPQyxRQUFBLENBQVNDLGFBQUEsR0FDbkNULHNCQUFBLEdBQ0FyQixzQkFBQTtNQUNSSixPQUFBLENBQVFtQyxvQkFBQSxHQUNOLFdBQVczQixLQUFBLENBQU0yQixvQkFBQSxHQUF1QjNCLEtBQUEsQ0FBTTJCLG9CQUFBLEdBQXVCSixJQUFBO01BQ3ZFLGdCQUFnQixPQUFPTCw4QkFBQSxJQUNyQixlQUNFLE9BQU9BLDhCQUFBLENBQStCVSwwQkFBQSxJQUN4Q1YsOEJBQUEsQ0FBK0JVLDBCQUFBLENBQTJCUixLQUFBLENBQU0sQ0FBQztJQUNyRSxHQUFHO0VBQUE7QUFBQTs7O0FDOUZMLElBQUFTLFlBQUEsR0FBQXZDLFVBQUE7RUFBQSxvREFBQXdDLENBQUF0QyxPQUFBLEVBQUF1QyxPQUFBO0lBQUE7O0lBRUEsSUFBSSxPQUF1QztNQUN6Q0EsT0FBQSxDQUFPdkMsT0FBQSxHQUFVO0lBQ25CLE9BQU87TUFDTHVDLE9BQUEsQ0FBT3ZDLE9BQUEsR0FBVUgsZ0RBQUE7SUFDbkI7RUFBQTtBQUFBOzs7QUNOQSxJQUFBMkMsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUE1QyxPQUFBLEdBQUE2QyxZQUFBLENBQUFMLGtCQUFBO0FBQUFNLFVBQUEsQ0FBQU4sa0JBQUEsRUFBY08sT0FBQSxDQUFBVixZQUFBLEtBQWRPLE1BQUEsQ0FBQTVDLE9BQUE7QUFFQSxJQUFBZ0QsV0FBQSxHQUFxQkQsT0FBQSxDQUFBVixZQUFBO0FBQ3JCLElBQU9NLGtCQUFBLEdBQVFLLFdBQUEsQ0FBQU4sT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvcnZkL291dCJ9