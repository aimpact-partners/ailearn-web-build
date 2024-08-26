System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, useBinder, useTexts, __beyond_pkg, hmr;
  _export({
    useBinder: void 0,
    useTexts: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondJsKernel019Texts) {
      dependency_2 = _beyondJsKernel019Texts;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["react", "18.2.0"], ["react-dom", "18.2.0"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/kernel", "0.1.9"], ["@types/react", "18.0.26"], ["@types/react-dom", "18.0.10"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/react-18-widgets@1.1.2/hooks"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/texts', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3517680304,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBinder = useBinder;
          var React = require("react");
          /*bundle*/ /***
                      * Executes a useEffect hook binging the event defined in all
                      * objects passed
                         @@ -8,13 +7,18 @@ import * as React from 'react';
                      * @param {function} onBinder function to be executed when the event is fired
                      * @param {string} events the event to be listened, by default is event change
                      */
          function useBinder(objects, onBinder, events = 'change') {
            const bindEvents = typeof events === 'string' ? [events] : events;
            React.useEffect(() => {
              const callback = (object, method) => {
                if (!object[method]) return;
                bindEvents.forEach(event => {
                  object[method](event, onBinder);
                });
              };
              objects.forEach(object => callback(object, 'on'));
              return () => objects.forEach(object => callback(object, 'off'));
            }, []);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1313278057,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************
      INTERNAL MODULE: ./use-texts
      ***************************/

      ims.set('./use-texts', {
        hash: 2200528805,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTexts = useTexts;
          var React = require("react");
          var _texts = require("@beyond-js/kernel/texts");
          /*bundle*/
          function useTexts(specifier, key) {
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
                  //@ts-ignore
                  value = modelTexts.value[key];
                }
                setTexts(value);
                setReady(modelTexts.ready);
              };
              modelTexts.on('change', triggerEvent);
              triggerEvent();
              return () => {
                modelTexts.on('change', triggerEvent);
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
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'useBinder') && _export("useBinder", useBinder = require ? require('./index').useBinder : value);
        (require || prop === 'useTexts') && _export("useTexts", useTexts = require ? require('./use-texts').useTexts : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJ1c2VCaW5kZXIiLCJvYmplY3RzIiwib25CaW5kZXIiLCJldmVudHMiLCJiaW5kRXZlbnRzIiwidXNlRWZmZWN0IiwiY2FsbGJhY2siLCJvYmplY3QiLCJtZXRob2QiLCJmb3JFYWNoIiwiZXZlbnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl90ZXh0cyIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwia2V5IiwicmVhZHkiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dHMiLCJzZXRUZXh0cyIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbnNvbGUiLCJ3YXJuIiwib24iLCJpc1JlYWR5Il0sInNvdXJjZXMiOlsiL2luZGV4LnRzIiwiL3R5cGVzLnRzIiwiL3VzZS10ZXh0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQVNPLFdBUFA7Ozs7Ozs7VUFPaUIsU0FDUkMsU0FBU0EsQ0FBQ0MsT0FBd0IsRUFBRUMsUUFBMEIsRUFBRUMsTUFBQSxHQUF1QixRQUFRO1lBQ3ZHLE1BQU1DLFVBQVUsR0FBYSxPQUFPRCxNQUFNLEtBQUssUUFBUSxHQUFHLENBQUNBLE1BQU0sQ0FBQyxHQUFHQSxNQUFNO1lBRTNFTCxLQUFLLENBQUNPLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1DLFFBQVEsR0FBR0EsQ0FBQ0MsTUFBcUIsRUFBRUMsTUFBb0IsS0FBSTtnQkFDaEUsSUFBSSxDQUFDRCxNQUFNLENBQUNDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyQkosVUFBVSxDQUFDSyxPQUFPLENBQUNDLEtBQUssSUFBRztrQkFDMUJILE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUNFLEtBQUssRUFBRVIsUUFBUSxDQUFDO2dCQUNoQyxDQUFDLENBQUM7Y0FDSCxDQUFDO2NBQ0RELE9BQU8sQ0FBQ1EsT0FBTyxDQUFDRixNQUFNLElBQUlELFFBQVEsQ0FBQ0MsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2NBQ2pELE9BQU8sTUFBTU4sT0FBTyxDQUFDUSxPQUFPLENBQUNGLE1BQU0sSUFBSUQsUUFBUSxDQUFDQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDaEUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztVQUNQOzs7Ozs7Ozs7OztVQ3ZCQTs7VUFFQUksTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFoQixLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBZ0IsTUFBQSxHQUFBaEIsT0FBQTtVQUVPO1VBQVUsU0FDUmlCLFFBQVFBLENBQUNDLFNBQWlCLEVBQUVDLEdBQVk7WUFDaEQsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHdEIsS0FBSyxDQUFDdUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUd6QixLQUFLLENBQUN1QixRQUFRLENBQUMsRUFBRSxDQUFDO1lBRTVDdkIsS0FBSyxDQUFDTyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNbUIsVUFBVSxHQUFHLElBQUlULE1BQUEsQ0FBQVUsWUFBWSxDQUFDUixTQUFTLENBQUM7Y0FDOUMsTUFBTVMsWUFBWSxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3pCLElBQUlaLEtBQUssR0FBR1UsVUFBVSxDQUFDVixLQUFLO2dCQUM1QixJQUFJVSxVQUFVLENBQUNMLEtBQUssSUFBSUQsR0FBRyxFQUFFO2tCQUM1QixJQUFJLENBQUNKLEtBQUssQ0FBQ2EsY0FBYyxDQUFDVCxHQUFHLENBQUMsRUFBRTtvQkFDL0JVLE9BQU8sQ0FBQ0MsSUFBSSxDQUNYLDBEQUEwRFgsR0FBRyx1QkFBdUJELFNBQVMsRUFBRSxDQUMvRjs7a0JBRUY7a0JBQ0FILEtBQUssR0FBR1UsVUFBVSxDQUFDVixLQUFLLENBQUNJLEdBQUcsQ0FBQzs7Z0JBRTlCSyxRQUFRLENBQUNULEtBQUssQ0FBQztnQkFDZk0sUUFBUSxDQUFDSSxVQUFVLENBQUNMLEtBQUssQ0FBQztjQUMzQixDQUFDO2NBQ0RLLFVBQVUsQ0FBQ00sRUFBRSxDQUFDLFFBQVEsRUFBRUosWUFBWSxDQUFDO2NBQ3JDQSxZQUFZLEVBQUU7Y0FDZCxPQUFPLE1BQUs7Z0JBQ1hGLFVBQVUsQ0FBQ00sRUFBRSxDQUFDLFFBQVEsRUFBRUosWUFBWSxDQUFDO2NBQ3RDLENBQUM7WUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ04sTUFBTUssT0FBTyxHQUFHWixLQUFLLElBQUksQ0FBQyxDQUFDRyxLQUFLO1lBQ2hDLE9BQU8sQ0FBQ1MsT0FBTyxFQUFFVCxLQUFLLENBQUM7VUFDeEIiLCJpZ25vcmVMaXN0IjpbXX0=