System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/base", "framer-motion@10.18.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, List, __beyond_pkg, hmr;
  _export("List", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta1Base) {
      dependency_3 = _pragmateUi100Beta1Base;
    }, function (_framerMotion2) {
      dependency_4 = _framerMotion2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/ailearn-app", "0.1.0-dev.02"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.1/list"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/base', dependency_3], ['framer-motion', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.1/list');
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./definitions
      *****************************/
      ims.set('./definitions', {
        hash: 4269899392,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************
      INTERNAL MODULE: ./draggable
      ***************************/

      ims.set('./draggable', {
        hash: 1315270784,
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
        hash: 1312888326,
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
        hash: 4008082234,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraggableItem = DraggableItem;
          var _framerMotion = require("framer-motion");
          var _react = require("react");
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
        hash: 2640674525,
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
        hash: 1449589652,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9yZWFjdCIsInJlcXVpcmUiLCJfZnJhbWVyTW90aW9uIiwiRHJhZ2dhYmxlTGlzdCIsInNwZWNzIiwiY29udHJvbCIsImluZGV4IiwicHJvcHMiLCJpdGVtcyIsInNldEl0ZW1zIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwib25SZW9yZGVyIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsImlkeCIsImNyZWF0ZUVsZW1lbnQiLCJSZW9yZGVyIiwiSXRlbSIsImtleSIsIkdyb3VwIiwidmFsdWVzIiwiaHRtbEF0dHJpYnV0ZXMiLCJTZXQiLCJnZXRBdHRyaWJ1dGVzIiwiZXhjbHVzaW9ucyIsImZpbHRlcmVkIiwiZXhjbHVzaW9uU2V0IiwicHJvcCIsImhhcyIsInN0YXJ0c1dpdGgiLCJfZHJhZ2dhYmxlIiwiX2l0ZW0iLCJfZHJhZ2FibGUiLCJMaXN0IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJkcmFnZ2FibGUiLCJjaGlsZHJlblBvc2l0aW9uIiwiYXMiLCJjb250YWluZXIiLCJDb250YWluZXIiLCJvblRvcCIsIkl0ZW1Db250cm9sIiwiRHJhZ2dhYmxlSXRlbSIsIkl0ZW1MaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwiY29uc29sZSIsIndhcm4iLCJ0b3AiLCJib3R0b20iLCJfIiwiYXR0cnMiLCJfaHRtbEF0dHJpYnV0ZXMiLCJIVE1MSXRlbSIsIkNvbnRyb2wiLCJfaHRtbCIsImVsZW1lbnRQcm9wcyIsImRhdGEiLCJ1bmRlZmluZWQiLCJlbGVtZW50Il0sInNvdXJjZXMiOlsiL2RlZmluaXRpb25zLnRzIiwiL3RzL2RyYWdnYWJsZS50c3giLCIvdHMvaHRtbC1hdHRyaWJ1dGVzLnRzIiwiL3RzL2luZGV4LnRzeCIsIi90cy9pdGVtL2RyYWdhYmxlLnRzeCIsIi90cy9pdGVtL2h0bWwudHN4IiwiL3RzL2l0ZW0vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxs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