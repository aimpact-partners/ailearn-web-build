System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, __beyond_pkg, hmr;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", null], ["@types/node", "18.11.18"], ["@beyond-js/kernel", "0.1.9"], ["@aimpact/ailearn-app", "0.3.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/kernel@0.1.9/error"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./error
      ***********************/
      ims.set('./error', {
        hash: 1344789388,
        creator: function (require, exports) {
          "use strict";

          const prepareStackTrace = Error => {
            Error.prepareStackTrace = (err, frames) => {
              for (const frame of frames) {
                if (frame.isNative()) continue;
                const file = frame.getFileName();
                const line = frame.getLineNumber();
                const column = frame.getColumnNumber();
                console.log(file, line, column);
              }
              return err.stack;
            };
          };
          Error.prepareStackTrace && prepareStackTrace(Error);
        }
      });

      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {};
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJwcmVwYXJlU3RhY2tUcmFjZSIsIkVycm9yIiwiZXJyIiwiZnJhbWVzIiwiZnJhbWUiLCJpc05hdGl2ZSIsImZpbGUiLCJnZXRGaWxlTmFtZSIsImxpbmUiLCJnZXRMaW5lTnVtYmVyIiwiY29sdW1uIiwiZ2V0Q29sdW1uTnVtYmVyIiwiY29uc29sZSIsImxvZyIsInN0YWNrIl0sInNvdXJjZXMiOlsiL2Vycm9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFPQSxNQUFNQSxpQkFBaUIsR0FBSUMsS0FBVSxJQUFVO1lBQzNDQSxLQUFLLENBQUNELGlCQUFpQixHQUFHLENBQUNFLEdBQVUsRUFBRUMsTUFBa0IsS0FBSTtjQUN6RCxLQUFLLE1BQU1DLEtBQUssSUFBSUQsTUFBTSxFQUFFO2dCQUN4QixJQUFJQyxLQUFLLENBQUNDLFFBQVEsRUFBRSxFQUFFO2dCQUV0QixNQUFNQyxJQUFJLEdBQUdGLEtBQUssQ0FBQ0csV0FBVyxFQUFFO2dCQUNoQyxNQUFNQyxJQUFJLEdBQUdKLEtBQUssQ0FBQ0ssYUFBYSxFQUFFO2dCQUNsQyxNQUFNQyxNQUFNLEdBQUdOLEtBQUssQ0FBQ08sZUFBZSxFQUFFO2dCQUV0Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNQLElBQUksRUFBRUUsSUFBSSxFQUFFRSxNQUFNLENBQUM7O2NBR25DLE9BQU9SLEdBQUcsQ0FBQ1ksS0FBSztZQUNwQixDQUFDO1VBQ0wsQ0FBQztVQUVBYixLQUFhLENBQUNELGlCQUFpQixJQUFJQSxpQkFBaUIsQ0FBQ0MsS0FBSyxDQUFDIiwiaWdub3JlTGlzdCI6W119