System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/base"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, List, __beyond_pkg, hmr;
  _export("List", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_framerMotion2) {
      dependency_2 = _framerMotion2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_3 = _pragmateUi100Beta7Base;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.1.13"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.7/list"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['framer-motion', dependency_2], ['pragmate-ui/base', dependency_3]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./draggable
      ***************************/
      ims.set('./draggable', {
        hash: 2033348794,
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
        hash: 3506431895,
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
            const renderItems = control ? items.map((item, idx) => {
              return _react.default.createElement(ItemControl, {
                index: index,
                key: idx,
                specs: specs,
                control: control,
                item: item,
                idx: idx
              });
            }) : items.map((item, idx) => _react.Children.map(children, child => (0, _react.isValidElement)(child) ? (0, _react.cloneElement)(child, {
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
        hash: 3472479063,
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
        hash: 1844515837,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemList = ItemList;
          var _react = require("react");
          var _html = require("./html");
          /**
           * Componente que renderiza un elemento de la lista.
           *
           * @template T - El tipo de los elementos en la lista.
           * @template U - Tipo de las propiedades adicionales opcionales (por defecto un objeto genérico).
           *
           * @param props - Las propiedades de `ItemList`.
           * @returns El elemento renderizado.
           */
          function ItemList({
            index,
            item,
            idx,
            as = 'li',
            control,
            specs = {}
          }) {
            const Control = typeof control === 'string' ? _html.HTMLItem : control;
            const elementProps = {
              key: item[index] || idx,
              index: idx,
              item,
              data: item,
              ...specs,
              as: typeof control === 'string' ? control : undefined
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
        hash: 2125397034,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkRyYWdnYWJsZUxpc3QiLCJzcGVjcyIsImNvbnRyb2wiLCJpbmRleCIsInByb3BzIiwiaXRlbXMiLCJzZXRJdGVtcyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsIm9uUmVvcmRlciIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJpZHgiLCJjcmVhdGVFbGVtZW50IiwiUmVvcmRlciIsIkl0ZW0iLCJ2YWx1ZSIsImtleSIsIkdyb3VwIiwidmFsdWVzIiwiaHRtbEF0dHJpYnV0ZXMiLCJTZXQiLCJnZXRBdHRyaWJ1dGVzIiwiZXhjbHVzaW9ucyIsImZpbHRlcmVkIiwiZXhjbHVzaW9uU2V0IiwicHJvcCIsImhhcyIsInN0YXJ0c1dpdGgiLCJfZHJhZ2dhYmxlIiwiX2l0ZW0iLCJfZHJhZ2FibGUiLCJMaXN0IiwiY2hpbGRyZW4iLCJlbXB0eSIsImNsYXNzTmFtZSIsImRyYWdnYWJsZSIsImNoaWxkcmVuUG9zaXRpb24iLCJhcyIsImNvbnRhaW5lciIsIkNvbnRhaW5lciIsIm9uVG9wIiwiSXRlbUNvbnRyb2wiLCJEcmFnZ2FibGVJdGVtIiwiSXRlbUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJjb25zb2xlIiwid2FybiIsImxlbmd0aCIsIkNvbnRyb2wiLCJyZW5kZXJJdGVtcyIsIkNoaWxkcmVuIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsInRvcCIsImJvdHRvbSIsIl8iLCJhdHRycyIsIl9odG1sQXR0cmlidXRlcyIsIkhUTUxJdGVtIiwiX2h0bWwiLCJlbGVtZW50UHJvcHMiLCJkYXRhIiwidW5kZWZpbmVkIiwiZWxlbWVudCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi90cy9kcmFnZ2FibGUudHN4IiwiL3RzL2h0bWwtYXR0cmlidXRlcy50cyIsIi90cy9pbmRleC50c3giLCIvdHMvaXRlbS9kcmFnYWJsZS50c3giLCIvdHMvaXRlbS9odG1sLnRzeCIsIi90cy9pdGVtL2luZGV4LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxhQUFBLEdBQUFELE9BQUE7VUFHTSxTQUFVRSxhQUFhQSxDQUFnQztZQUM1REMsS0FBSztZQUNMQyxPQUFPO1lBQ1BDLEtBQUs7WUFDTCxHQUFHQztVQUFLLENBQ3lCO1lBQ2pDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1QsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQ0osS0FBSyxDQUFDQyxLQUFLLENBQUM7WUFFckQsTUFBTUksU0FBUyxHQUFJSixLQUFVLElBQUk7Y0FDaENDLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO2NBRWYsSUFBSUQsS0FBSyxDQUFDSyxTQUFTLEVBQUVMLEtBQUssQ0FBQ0ssU0FBUyxDQUFDSixLQUFLLENBQUM7WUFDNUMsQ0FBQztZQUVELE1BQU1LLE1BQU0sR0FBZ0JMLEtBQUssQ0FBQ00sR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRUMsR0FBRyxLQUMvQ2hCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBTyxhQUFBLENBQUNmLGFBQUEsQ0FBQWdCLE9BQU8sQ0FBQ0MsSUFBSTtjQUFDQyxLQUFLLEVBQUVMLElBQUk7Y0FBRU0sR0FBRyxFQUFFLEdBQUdOLElBQXlCO1lBQUUsR0FDNURBLElBQTRCLENBRTlCLENBQUM7WUFFRixPQUNDZixNQUFBLENBQUFVLE9BQUEsQ0FBQU8sYUFBQSxDQUFDZixhQUFBLENBQUFnQixPQUFPLENBQUNJLEtBQUs7Y0FBQ0MsTUFBTSxFQUFFZixLQUFLO2NBQUVJLFNBQVMsRUFBRUE7WUFBUyxHQUNoREMsTUFBTSxDQUNRO1VBRWxCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdC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