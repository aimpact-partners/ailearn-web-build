System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, List, __beyond_pkg, hmr;
  _export("List", void 0);
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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.1.1"], ["@aimpact/ailearn-app", "0.0.39"]]);
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
        hash: 3396034214,
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
          function DraggableList({
            specs,
            control,
            index,
            ...props
          }) {
            const [items, setItems] = _react.default.useState(props.items);
            const onReorder = items => {
              setItems(items);
              if (props.onReorder) props.onReorder(items);
            };
            const output = items.map((item, idx) => _react.default.createElement(_framerMotion.Reorder.Item, {
              value: item,
              key: `${item}`
            }, item));
            return _react.default.createElement(_framerMotion.Reorder.Group, {
              values: items,
              onReorder: onReorder
            }, output);
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./html-attributes
      *********************************/

      ims.set('./html-attributes', {
        hash: 1750835586,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getAttributes = getAttributes;
          /**
           * A Set containing common HTML attributes that are used to control element behavior and information.
           * This Set is utilized to filter properties from objects to ensure only valid HTML attributes,
           * including accessibility attributes (those starting with 'aria-') and custom data attributes (those starting with 'data-'),
           * are included. These attributes can influence the HTML rendering and are recognized by web browsers.
           */
          const htmlAttributes = new Set(['id', 'class', 'style', 'title', 'data', 'value', 'href', 'src', 'alt', 'onclick', 'onchange', 'onmouseover', 'disabled', 'readonly', 'type', 'placeholder', 'name', 'method', 'action', 'checked', 'selected', 'width', 'height', 'maxlength', 'minlength', 'pattern', 'step', 'required', 'autocomplete', 'autofocus', 'multiple', 'form', 'size', 'srcset', 'for', 'tabindex', 'role', 'aria-label']);
          /**
           * Filters the properties of an object to include only those that are recognized HTML attributes, with the
           * capability to explicitly exclude certain attributes even if they are valid. The function checks for standard
           * attributes defined in the `htmlAttributes` set, and dynamically accepts any properties that begin with 'aria-'
           * or 'data-'. It excludes any properties listed in the `exclusions` array, regardless of their validity as HTML attributes.
           *
           * @param {Record<string, any>} props - The object containing properties that may or may not correspond to valid HTML attributes.
           * @param {string[]} exclusions - Array of property names to be excluded from the returned object, even if they are valid HTML attributes.
           * @returns {Record<string, any>} A new object containing only the properties that are valid HTML attributes and not listed in exclusions.
           */
          function getAttributes(props, exclusions = []) {
            const filtered = {};
            const exclusionSet = new Set(exclusions); // Convert exclusions array to a Set for efficient lookup
            for (const prop in props) {
              // Check for known attributes or attributes starting with 'aria-' or 'data-' and not in the exclusions list
              if ((htmlAttributes.has(prop) || prop.startsWith('aria-') || prop.startsWith('data-')) && !exclusionSet.has(prop)) {
                filtered[prop] = props[prop];
              }
            }
            return filtered;
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2821981443,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _draggable = require("./draggable");
          var _item = require("./item");
          var _dragable = require("./item/dragable");
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
              draggable,
              childrenPosition = 'top',
              control,
              as = 'ul',
              // @deprecated
              container = 'ul'
            } = props;
            const Container = as || container;
            const onTop = childrenPosition === 'top';
            const ItemControl = draggable ? _dragable.DraggableItem : _item.ItemList;
            if (draggable) return _react.default.createElement(_draggable.DraggableList, {
              items: items,
              ...props
            });
            const output = items.map((item, idx) => _react.default.createElement(ItemControl, {
              index: index,
              key: idx,
              specs: specs,
              control: control,
              item: item,
              idx: idx
            }));
            const top = onTop && children ? children : null;
            const bottom = !onTop && children ? children : null;
            return _react.default.createElement(Container, {
              className: className
            }, top, output, bottom);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./item/dragable
      *******************************/

      ims.set('./item/dragable', {
        hash: 2025054626,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraggableItem = DraggableItem;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _ = require("./");
          function DraggableItem({
            as,
            ...props
          }) {
            const {
              item,
              idx
            } = props;
            const attrs = {
              as
            };
            console.log(20, item);
            return _react.default.createElement(_framerMotion.Reorder.Item, {
              value: item,
              key: idx,
              ...attrs
            }, _react.default.createElement(_.ItemList, {
              ...props,
              item: item,
              idx: idx,
              as: 'span'
            }));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./item/html
      ***************************/

      ims.set('./item/html', {
        hash: 4112620444,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HTMLItem = HTMLItem;
          var _react = require("react");
          var _htmlAttributes = require("../html-attributes");
          function HTMLItem({
            as = 'li',
            children,
            ...props
          }) {
            const Control = as;
            const {
              item
            } = props;
            const attrs = (0, _htmlAttributes.getAttributes)(props, ['item', 'data']);
            return _react.default.createElement(Control, {
              ...attrs
            }, item);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./item/index
      ****************************/

      ims.set('./item/index', {
        hash: 1732096771,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemList = ItemList;
          var _react = require("react");
          var _html = require("./html");
          function ItemList({
            specs,
            index,
            item,
            control,
            idx,
            as = 'li'
          }) {
            // Determine the appropriate component to use based on whether 'control' is a string or a component.
            control = control ? control : as || 'li';
            const Control = typeof control === 'string' ? _html.HTMLItem : control;
            const elementProps = {
              key: item[index] || idx,
              index: idx,
              data: item,
              item,
              specs,
              as: typeof control === 'string' ? control : undefined // Pass 'as' only if control is a string
            };

            const element = _react.default.createElement(Control, elementProps);
            return element;
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 398657150,
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
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'List') && _export("List", List = require ? require('./index').List : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkRyYWdnYWJsZUxpc3QiLCJzcGVjcyIsImNvbnRyb2wiLCJpbmRleCIsInByb3BzIiwiaXRlbXMiLCJzZXRJdGVtcyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsIm9uUmVvcmRlciIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJpZHgiLCJjcmVhdGVFbGVtZW50IiwiUmVvcmRlciIsIkl0ZW0iLCJ2YWx1ZSIsImtleSIsIkdyb3VwIiwidmFsdWVzIiwiaHRtbEF0dHJpYnV0ZXMiLCJTZXQiLCJnZXRBdHRyaWJ1dGVzIiwiZXhjbHVzaW9ucyIsImZpbHRlcmVkIiwiZXhjbHVzaW9uU2V0IiwicHJvcCIsImhhcyIsInN0YXJ0c1dpdGgiLCJfZHJhZ2dhYmxlIiwiX2l0ZW0iLCJfZHJhZ2FibGUiLCJMaXN0IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJkcmFnZ2FibGUiLCJjaGlsZHJlblBvc2l0aW9uIiwiYXMiLCJjb250YWluZXIiLCJDb250YWluZXIiLCJvblRvcCIsIkl0ZW1Db250cm9sIiwiRHJhZ2dhYmxlSXRlbSIsIkl0ZW1MaXN0IiwidG9wIiwiYm90dG9tIiwiXyIsImF0dHJzIiwiY29uc29sZSIsImxvZyIsIl9odG1sQXR0cmlidXRlcyIsIkhUTUxJdGVtIiwiQ29udHJvbCIsIl9odG1sIiwiZWxlbWVudFByb3BzIiwiZGF0YSIsInVuZGVmaW5lZCIsImVsZW1lbnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvdHMvZHJhZ2dhYmxlLnRzeCIsIi90cy9odG1sLWF0dHJpYnV0ZXMudHMiLCIvdHMvaW5kZXgudHN4IiwiL3RzL2l0ZW0vZHJhZ2FibGUudHN4IiwiL3RzL2l0ZW0vaHRtbC50c3giLCIvdHMvaXRlbS9pbmRleC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxs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