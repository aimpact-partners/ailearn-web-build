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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.1.1"], ["@aimpact/ailearn-app", "0.0.46.dev-16"]]);
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
        hash: 2445323371,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraggableList = DraggableList;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
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
        hash: 1845911779,
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
            if (!Array.isArray(items)) {
              console.warn('Invalid "items" prop: Expected an array. Please review the component usage and ensure the "items" prop is correctly passed as an array.');
              return null;
            }
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
        hash: 804698170,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkRyYWdnYWJsZUxpc3QiLCJzcGVjcyIsImNvbnRyb2wiLCJpbmRleCIsInByb3BzIiwiaXRlbXMiLCJzZXRJdGVtcyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsIm9uUmVvcmRlciIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJpZHgiLCJjcmVhdGVFbGVtZW50IiwiUmVvcmRlciIsIkl0ZW0iLCJ2YWx1ZSIsImtleSIsIkdyb3VwIiwidmFsdWVzIiwiaHRtbEF0dHJpYnV0ZXMiLCJTZXQiLCJnZXRBdHRyaWJ1dGVzIiwiZXhjbHVzaW9ucyIsImZpbHRlcmVkIiwiZXhjbHVzaW9uU2V0IiwicHJvcCIsImhhcyIsInN0YXJ0c1dpdGgiLCJfZHJhZ2dhYmxlIiwiX2l0ZW0iLCJfZHJhZ2FibGUiLCJMaXN0IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJkcmFnZ2FibGUiLCJjaGlsZHJlblBvc2l0aW9uIiwiYXMiLCJjb250YWluZXIiLCJDb250YWluZXIiLCJvblRvcCIsIkl0ZW1Db250cm9sIiwiRHJhZ2dhYmxlSXRlbSIsIkl0ZW1MaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwiY29uc29sZSIsIndhcm4iLCJ0b3AiLCJib3R0b20iLCJfIiwiYXR0cnMiLCJfaHRtbEF0dHJpYnV0ZXMiLCJIVE1MSXRlbSIsIkNvbnRyb2wiLCJfaHRtbCIsImVsZW1lbnRQcm9wcyIsImRhdGEiLCJ1bmRlZmluZWQiLCJlbGVtZW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL3RzL2RyYWdnYWJsZS50c3giLCIvdHMvaHRtbC1hdHRyaWJ1dGVzLnRzIiwiL3RzL2luZGV4LnRzeCIsIi90cy9pdGVtL2RyYWdhYmxlLnRzeCIsIi90cy9pdGVtL2h0bWwudHN4IiwiL3RzL2l0ZW0vaW5kZXgudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGws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