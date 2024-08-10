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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/ailearn-app", "0.1.4-test.03"]]);
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
        hash: 542180885,
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
        hash: 3923787680,
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
          /*bundle*/
          function List({
            items,
            children,
            control,
            empty,
            ...props
          }) {
            const {
              className,
              index = 'id',
              specs,
              draggable,
              childrenPosition = 'top',
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
            if (control) {
              // console.warn(
              // 	'The "control" prop is deprecated and will be removed in future versions. Please use children to define the item components.',
              // );
            }
            if (items.length === 0 && empty) {
              const Control = empty;
              return _react.default.createElement(Control, null);
            }
            const renderItems = control ? items.map((item, idx) => _react.default.createElement(ItemControl, {
              index: index,
              key: idx,
              specs: specs,
              control: control,
              item: item,
              idx: idx
            })) : items.map((item, idx) => _react.Children.map(children, child => (0, _react.isValidElement)(child) ? (0, _react.cloneElement)(child, {
              key: idx,
              index,
              specs,
              item,
              idx
            }) : child));
            const top = onTop && children ? children : null;
            const bottom = !onTop && children ? children : null;
            return _react.default.createElement(Container, {
              className: className
            }, top, renderItems, bottom);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9yZWFjdCIsInJlcXVpcmUiLCJfZnJhbWVyTW90aW9uIiwiRHJhZ2dhYmxlTGlzdCIsInNwZWNzIiwiY29udHJvbCIsImluZGV4IiwicHJvcHMiLCJpdGVtcyIsInNldEl0ZW1zIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwib25SZW9yZGVyIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsImlkeCIsImNyZWF0ZUVsZW1lbnQiLCJSZW9yZGVyIiwiSXRlbSIsImtleSIsIkdyb3VwIiwidmFsdWVzIiwiaHRtbEF0dHJpYnV0ZXMiLCJTZXQiLCJnZXRBdHRyaWJ1dGVzIiwiZXhjbHVzaW9ucyIsImZpbHRlcmVkIiwiZXhjbHVzaW9uU2V0IiwicHJvcCIsImhhcyIsInN0YXJ0c1dpdGgiLCJfZHJhZ2dhYmxlIiwiX2l0ZW0iLCJfZHJhZ2FibGUiLCJMaXN0IiwiY2hpbGRyZW4iLCJlbXB0eSIsImNsYXNzTmFtZSIsImRyYWdnYWJsZSIsImNoaWxkcmVuUG9zaXRpb24iLCJhcyIsImNvbnRhaW5lciIsIkNvbnRhaW5lciIsIm9uVG9wIiwiSXRlbUNvbnRyb2wiLCJEcmFnZ2FibGVJdGVtIiwiSXRlbUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJjb25zb2xlIiwid2FybiIsImxlbmd0aCIsIkNvbnRyb2wiLCJyZW5kZXJJdGVtcyIsIkNoaWxkcmVuIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsInRvcCIsImJvdHRvbSIsIl8iLCJhdHRycyIsIl9odG1sQXR0cmlidXRlcyIsIkhUTUxJdGVtIiwiX2h0bWwiLCJlbGVtZW50UHJvcHMiLCJkYXRhIiwidW5kZWZpbmVkIiwiZWxlbWVudCJdLCJzb3VyY2VzIjpbIi9kZWZpbml0aW9ucy50cyIsIi90cy9kcmFnZ2FibGUudHN4IiwiL3RzL2h0bWwtYXR0cmlidXRlcy50cyIsIi90cy9pbmRleC50c3giLCIvdHMvaXRlbS9kcmFnYWJsZS50c3giLCIvdHMvaXRlbS9odG1sLnRzeCIsIi90cy9pdGVtL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTs7VUFFQUEsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFDLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQUdNLFNBQVVFLGFBQWFBLENBQUk7WUFBRUMsS0FBSztZQUFFQyxPQUFPO1lBQUVDLEtBQUs7WUFBRSxHQUFHQztVQUFLLENBQWlCO1lBQ2xGLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1QsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQ0osS0FBSyxDQUFDQyxLQUFLLENBQUM7WUFFckQsTUFBTUksU0FBUyxHQUFJSixLQUFVLElBQUk7Y0FDaENDLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO2NBRWYsSUFBSUQsS0FBSyxDQUFDSyxTQUFTLEVBQUVMLEtBQUssQ0FBQ0ssU0FBUyxDQUFDSixLQUFLLENBQUM7WUFDNUMsQ0FBQztZQUVELE1BQU1LLE1BQU0sR0FBZ0JMLEtBQUssQ0FBQ00sR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRUMsR0FBRyxLQUMvQ2hCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBTyxhQUFBLENBQUNmLGFBQUEsQ0FBQWdCLE9BQU8sQ0FBQ0MsSUFBSTtjQUFDcEIsS0FBSyxFQUFFZ0IsSUFBSTtjQUFFSyxHQUFHLEVBQUUsR0FBR0wsSUFBeUI7WUFBRSxHQUM1REEsSUFBNEIsQ0FFOUIsQ0FBQztZQUVGLE9BQ0NmLE1BQUEsQ0FBQVUsT0FBQSxDQUFBTyxhQUFBLENBQUNmLGFBQUEsQ0FBQWdCLE9BQU8sQ0FBQ0csS0FBSztjQUFDQyxNQUFNLEVB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