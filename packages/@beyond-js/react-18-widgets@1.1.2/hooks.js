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
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsKernel019Texts) {
      dependency_2 = _beyondJsKernel019Texts;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["react", "18.2.0"], ["react-dom", "18.2.0"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/kernel", "0.1.9"], ["@types/react", "18.0.26"], ["@types/react-dom", "18.0.10"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
        hash: 3139994690,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBinder = useBinder;
          var _react = require("react");
          /*bundle*/ /***
                      * Executes a useEffect hook binging the event defined in all
                      * objects passed
                         @@ -8,13 +7,18 @@ import * as React from 'react';
                      * @param {function} onBinder function to be executed when the event is fired
                      * @param {string} events the event to be listened, by default is event change
                      */
          function useBinder(objects, onBinder, events = 'change') {
            const bindEvents = typeof events === 'string' ? [events] : events;
            _react.default.useEffect(() => {
              objects.forEach(object => {
                if (!object?.on) return;
                bindEvents.forEach(event => object.on(event, onBinder));
              });
              return () => objects.forEach(object => {
                if (!object?.off) return;
                bindEvents.forEach(event => object.off(event, onBinder));
              });
            }, []);
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwidXNlQmluZGVyIiwib2JqZWN0cyIsIm9uQmluZGVyIiwiZXZlbnRzIiwiYmluZEV2ZW50cyIsImRlZmF1bHQiLCJ1c2VFZmZlY3QiLCJmb3JFYWNoIiwib2JqZWN0Iiwib24iLCJldmVudCIsIm9mZiIsIlJlYWN0IiwiX3RleHRzIiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJrZXkiLCJyZWFkeSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0cyIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsInZhbHVlIiwiaGFzT3duUHJvcGVydHkiLCJjb25zb2xlIiwid2FybiIsImlzUmVhZHkiXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvdXNlLXRleHRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQVFPLFdBUFA7Ozs7Ozs7VUFPaUIsU0FDUkMsU0FBU0EsQ0FBQ0MsT0FBYyxFQUFFQyxRQUFvQixFQUFFQyxNQUFBLEdBQTRCLFFBQVE7WUFDNUYsTUFBTUMsVUFBVSxHQUFhLE9BQU9ELE1BQU0sS0FBSyxRQUFRLEdBQUcsQ0FBQ0EsTUFBTSxDQUFDLEdBQUdBLE1BQU07WUFDM0VMLE1BQUEsQ0FBQU8sT0FBSyxDQUFDQyxTQUFTLENBQUMsTUFBSztjQUNwQkwsT0FBTyxDQUFDTSxPQUFPLENBQUNDLE1BQU0sSUFBRztnQkFDeEIsSUFBSSxDQUFDQSxNQUFNLEVBQUVDLEVBQUUsRUFBRTtnQkFDakJMLFVBQVUsQ0FBQ0csT0FBTyxDQUFDRyxLQUFLLElBQUlGLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDQyxLQUFLLEVBQUVSLFFBQVEsQ0FBQyxDQUFDO2NBQ3hELENBQUMsQ0FBQztjQUVGLE9BQU8sTUFDTkQsT0FBTyxDQUFDTSxPQUFPLENBQUNDLE1BQU0sSUFBRztnQkFDeEIsSUFBSSxDQUFDQSxNQUFNLEVBQUVHLEdBQUcsRUFBRTtnQkFDbEJQLFVBQVUsQ0FBQ0csT0FBTyxDQUFDRyxLQUFLLElBQUlGLE1BQU0sQ0FBQ0csR0FBRyxDQUFDRCxLQUFLLEVBQUVSLFFBQVEsQ0FBQyxDQUFDO2NBQ3pELENBQUMsQ0FBQztZQUNKLENBQUMsRUFBRSxFQUFFLENBQUM7VUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQVUsS0FBQSxHQUFBYixPQUFBO1VBQ0EsSUFBQWMsTUFBQSxHQUFBZCxPQUFBO1VBRU87VUFBVSxTQUNSZSxRQUFRQSxDQUFDQyxTQUFpQixFQUFFQyxHQUFZO1lBQ2hELE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR04sS0FBSyxDQUFDTyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQy9DLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1QsS0FBSyxDQUFDTyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBRTVDUCxLQUFLLENBQUNOLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1nQixVQUFVLEdBQUcsSUFBSVQsTUFBQSxDQUFBVSxZQUFZLENBQUNSLFNBQVMsQ0FBQztjQUM5QyxNQUFNUyxZQUFZLEdBQUdBLENBQUEsS0FBSztnQkFDekIsSUFBSUMsS0FBSyxHQUFHSCxVQUFVLENBQUNHLEtBQUs7Z0JBQzVCLElBQUlILFVBQVUsQ0FBQ0wsS0FBSyxJQUFJRCxHQUFHLEVBQUU7a0JBQzVCLElBQUksQ0FBQ1MsS0FBSyxDQUFDQyxjQUFjLENBQUNWLEdBQUcsQ0FBQyxFQUFFO29CQUMvQlcsT0FBTyxDQUFDQyxJQUFJLENBQ1gsMERBQTBEWixHQUFHLHVCQUF1QkQsU0FBUyxFQUFFLENBQy9GOztrQkFFRjtrQkFDQVUsS0FBSyxHQUFHSCxVQUFVLENBQUNHLEtBQUssQ0FBQ1QsR0FBRyxDQUFDOztnQkFFOUJLLFFBQVEsQ0FBQ0ksS0FBSyxDQUFDO2dCQUNmUCxRQUFRLENBQUNJLFVBQVUsQ0FBQ0wsS0FBSyxDQUFDO2NBQzNCLENBQUM7Y0FDREssVUFBVSxDQUFDYixFQUFFLENBQUMsUUFBUSxFQUFFZSxZQUFZLENBQUM7Y0FDckNBLFlBQVksRUFBRTtjQUNkLE9BQU8sTUFBSztnQkFDWEYsVUFBVSxDQUFDYixFQUFFLENBQUMsUUFBUSxFQUFFZSxZQUFZLENBQUM7Y0FDdEMsQ0FBQztZQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDTixNQUFNSyxPQUFPLEdBQUdaLEtBQUssSUFBSSxDQUFDLENBQUNHLEtBQUs7WUFDaEMsT0FBTyxDQUFDUyxPQUFPLEVBQUVULEtBQUssQ0FBQztVQUN4QiJ9