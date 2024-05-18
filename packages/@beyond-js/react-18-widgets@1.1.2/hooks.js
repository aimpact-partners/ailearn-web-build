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
        const dependencies = new Map([["react", "18.2.0"], ["react-dom", "18.2.0"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/kernel", "0.1.9"], ["@types/react", "18.0.26"], ["@types/react-dom", "18.0.10"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/ailearn-app", "0.0.32-beta.12"]]);
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
        hash: 4039034745,
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
                bindEvents.forEach(event => object.on(event, onBinder));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJ1c2VCaW5kZXIiLCJvYmplY3RzIiwib25CaW5kZXIiLCJldmVudHMiLCJiaW5kRXZlbnRzIiwidXNlRWZmZWN0IiwiY2FsbGJhY2siLCJvYmplY3QiLCJtZXRob2QiLCJmb3JFYWNoIiwiZXZlbnQiLCJvbiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX3RleHRzIiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJrZXkiLCJyZWFkeSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0cyIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsImhhc093blByb3BlcnR5IiwiY29uc29sZSIsIndhcm4iLCJpc1JlYWR5Il0sInNvdXJjZXMiOlsiL2luZGV4LnRzIiwiL3R5cGVzLnRzIiwiL3VzZS10ZXh0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQVNPLFdBUFA7Ozs7Ozs7VUFPaUIsU0FDUkMsU0FBU0EsQ0FBQ0MsT0FBd0IsRUFBRUMsUUFBMEIsRUFBRUMsTUFBQSxHQUF1QixRQUFRO1lBQ3ZHLE1BQU1DLFVBQVUsR0FBYSxPQUFPRCxNQUFNLEtBQUssUUFBUSxHQUFHLENBQUNBLE1BQU0sQ0FBQyxHQUFHQSxNQUFNO1lBRTNFTCxLQUFLLENBQUNPLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1DLFFBQVEsR0FBR0EsQ0FBQ0MsTUFBcUIsRUFBRUMsTUFBb0IsS0FBSTtnQkFDaEUsSUFBSSxDQUFDRCxNQUFNLENBQUNDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyQkosVUFBVSxDQUFDSyxPQUFPLENBQUNDLEtBQUssSUFBSUgsTUFBTSxDQUFDSSxFQUFFLENBQUNELEtBQUssRUFBRVIsUUFBUSxDQUFDLENBQUM7Y0FDeEQsQ0FBQztjQUNERCxPQUFPLENBQUNRLE9BQU8sQ0FBQ0YsTUFBTSxJQUFJRCxRQUFRLENBQUNDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztjQUNqRCxPQUFPLE1BQU1OLE9BQU8sQ0FBQ1EsT0FBTyxDQUFDRixNQUFNLElBQUlELFFBQVEsQ0FBQ0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2hFLENBQUMsRUFBRSxFQUFFLENBQUM7VUFDUDs7Ozs7Ozs7Ozs7VUNyQkE7O1VBRUFLLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBakIsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWlCLE1BQUEsR0FBQWpCLE9BQUE7VUFFTztVQUFVLFNBQ1JrQixRQUFRQSxDQUFDQyxTQUFpQixFQUFFQyxHQUFZO1lBQ2hELE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR3ZCLEtBQUssQ0FBQ3dCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDL0MsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHMUIsS0FBSyxDQUFDd0IsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUU1Q3hCLEtBQUssQ0FBQ08sU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTW9CLFVBQVUsR0FBRyxJQUFJVCxNQUFBLENBQUFVLFlBQVksQ0FBQ1IsU0FBUyxDQUFDO2NBQzlDLE1BQU1TLFlBQVksR0FBR0EsQ0FBQSxLQUFLO2dCQUN6QixJQUFJWixLQUFLLEdBQUdVLFVBQVUsQ0FBQ1YsS0FBSztnQkFDNUIsSUFBSVUsVUFBVSxDQUFDTCxLQUFLLElBQUlELEdBQUcsRUFBRTtrQkFDNUIsSUFBSSxDQUFDSixLQUFLLENBQUNhLGNBQWMsQ0FBQ1QsR0FBRyxDQUFDLEVBQUU7b0JBQy9CVSxPQUFPLENBQUNDLElBQUksQ0FDWCwwREFBMERYLEdBQUcsdUJBQXVCRCxTQUFTLEVBQUUsQ0FDL0Y7O2tCQUVGO2tCQUNBSCxLQUFLLEdBQUdVLFVBQVUsQ0FBQ1YsS0FBSyxDQUFDSSxHQUFHLENBQUM7O2dCQUU5QkssUUFBUSxDQUFDVCxLQUFLLENBQUM7Z0JBQ2ZNLFFBQVEsQ0FBQ0ksVUFBVSxDQUFDTCxLQUFLLENBQUM7Y0FDM0IsQ0FBQztjQUNESyxVQUFVLENBQUNkLEVBQUUsQ0FBQyxRQUFRLEVBQUVnQixZQUFZLENBQUM7Y0FDckNBLFlBQVksRUFBRTtjQUNkLE9BQU8sTUFBSztnQkFDWEYsVUFBVSxDQUFDZCxFQUFFLENBQUMsUUFBUSxFQUFFZ0IsWUFBWSxDQUFDO2NBQ3RDLENBQUM7WUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ04sTUFBTUksT0FBTyxHQUFHWCxLQUFLLElBQUksQ0FBQyxDQUFDRyxLQUFLO1lBQ2hDLE9BQU8sQ0FBQ1EsT0FBTyxFQUFFUixLQUFLLENBQUM7VUFDeEIiLCJpZ25vcmVMaXN0IjpbXX0=