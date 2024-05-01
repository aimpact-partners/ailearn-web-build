System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, List, ListProps, __beyond_pkg, hmr;
  _export({
    List: void 0,
    ListProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_framerMotion2) {
      dependency_3 = _framerMotion2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.1.1"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.1.1/list"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/list');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./draggable
      ***************************/
      ims.set('./draggable', {
        hash: 397607482,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraggableList = DraggableList;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          /**
           *
           */
          function DraggableList(props) {
            const [items, setItems] = _react.default.useState(props.items);
            const onReorder = items => {
              console.log(30, items);
              setItems(items);
              if (props.onReorder) props.onReorder(items);
            };
            const attrs = {
              as: props.as
            };
            return _react.default.createElement(_framerMotion.Reorder.Group, {
              ...attrs,
              values: items,
              onReorder: onReorder
            }, items.map((item, idx) => {
              return _react.default.createElement(_framerMotion.Reorder.Item, {
                key: idx,
                value: item
              }, item);
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2617765566,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _draggable = require("./draggable");
          /*bundle */
          function List({
            items,
            ...props
          }) {
            const {
              className,
              children,
              index = 'id',
              specs,
              dragabble,
              childrenPosition = 'top',
              control,
              as = 'ul',
              // @deprecated
              container = 'ul'
            } = props;
            const Container = as || container;
            const Control = control;
            const onTop = childrenPosition === 'top';
            const output = items.map((item, idx) => {
              const element = _react.default.createElement(Control, {
                key: item[index] || idx,
                index: idx,
                data: item,
                item,
                specs
              });
              return element;
            });
            if (dragabble) return _react.default.createElement(_draggable.DraggableList, {
              items: output,
              ...props
            });
            const top = onTop && children ? children : null;
            const bottom = !onTop && children ? children : null;
            return _react.default.createElement(Container, {
              className: className
            }, top, output, bottom);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3001830922,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "List",
        "name": "List"
      }, {
        "im": "./types",
        "from": "ListProps",
        "name": "ListProps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'List') && _export("List", List = require ? require('./index').List : value);
        (require || prop === 'ListProps') && _export("ListProps", ListProps = require ? require('./types').ListProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkRyYWdnYWJsZUxpc3QiLCJwcm9wcyIsIml0ZW1zIiwic2V0SXRlbXMiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJvblJlb3JkZXIiLCJjb25zb2xlIiwibG9nIiwiYXR0cnMiLCJhcyIsImNyZWF0ZUVsZW1lbnQiLCJSZW9yZGVyIiwiR3JvdXAiLCJ2YWx1ZXMiLCJtYXAiLCJpdGVtIiwiaWR4IiwiSXRlbSIsImtleSIsInZhbHVlIiwiX2RyYWdnYWJsZSIsIkxpc3QiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImluZGV4Iiwic3BlY3MiLCJkcmFnYWJibGUiLCJjaGlsZHJlblBvc2l0aW9uIiwiY29udHJvbCIsImNvbnRhaW5lciIsIkNvbnRhaW5lciIsIkNvbnRyb2wiLCJvblRvcCIsIm91dHB1dCIsImVsZW1lbnQiLCJkYXRhIiwidG9wIiwiYm90dG9tIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL3RzL2RyYWdnYWJsZS50c3giLCIvdHMvaW5kZXgudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBQ0E7OztVQUdNLFNBQVVFLGFBQWFBLENBQUNDLEtBQUs7WUFDbEMsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHTixNQUFBLENBQUFPLE9BQUssQ0FBQ0MsUUFBUSxDQUFDSixLQUFLLENBQUNDLEtBQUssQ0FBQztZQUVyRCxNQUFNSSxTQUFTLEdBQUdKLEtBQUssSUFBRztjQUN6QkssT0FBTyxDQUFDQyxHQUFHLENBQUMsRUFBRSxFQUFFTixLQUFLLENBQUM7Y0FDdEJDLFFBQVEs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