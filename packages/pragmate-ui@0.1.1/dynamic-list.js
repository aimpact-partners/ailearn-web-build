System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.1/components", "framer-motion@10.18.0", "pragmate-ui@0.1.1/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, AddDynamicItem, Header, DynamicItem, List, useDynamicListContext, Provider, __beyond_pkg, hmr;
  _export({
    AddDynamicItem: void 0,
    Header: void 0,
    DynamicItem: void 0,
    List: void 0,
    useDynamicListContext: void 0,
    Provider: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_3 = _pragmateUi011Components;
    }, function (_framerMotion2) {
      dependency_4 = _framerMotion2;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.1.1"], ["@aimpact/ailearn-app", "0.0.32-dev.46"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.1.1/dynamic-list"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['framer-motion', dependency_4], ['pragmate-ui/icons', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/dynamic-list');
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./components/add-item
      *************************************/
      ims.set('./components/add-item', {
        hash: 2399851570,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AddDynamicItem = AddDynamicItem;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          /*bundle */
          function AddDynamicItem({
            children
          }) {
            const [value, setValue] = _react.default.useState();
            const {
              addItem
            } = (0, _context.useDynamicListContext)();
            const providerData = {};
            return _react.default.createElement(_components.Button, {
              variant: 'primary',
              onClick: addItem
            }, "Add");
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./components/dragabble-list
      *******************************************/

      ims.set('./components/dragabble-list', {
        hash: 792233935,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraggableList = DraggableList;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _context = require("../context");
          function DraggableList({
            children,
            className = ''
          }) {
            const {
              values,
              setValues
            } = (0, _context.useDynamicListContext)();
            return _react.default.createElement(_framerMotion.Reorder.Group, {
              className: className,
              values: values,
              onReorder: values => {
                setValues(values);
              }
            }, children);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./components/header
      ***********************************/

      ims.set('./components/header', {
        hash: 2912242721,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          /*bundle */
          function Header({
            children
          }) {
            const [value, setValue] = _react.default.useState();
            const {
              addItem
            } = (0, _context.useDynamicListContext)();
            const providerData = {};
            return _react.default.createElement("header", {
              className: 'pui-dynamic-list__header'
            }, _react.default.createElement(_components.Button, {
              variant: 'primary',
              onClick: addItem
            }, "Add"), children);
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./components/item
      *********************************/

      ims.set('./components/item', {
        hash: 3585517604,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicItem = DynamicItem;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          /*bundle */
          function DynamicItem(props) {
            const {
              children,
              index,
              identifier
            } = props;
            const {
              removeItem,
              draggable,
              refs,
              Item,
              registerRef
            } = (0, _context.useDynamicListContext)();
            const onRemove = () => removeItem(identifier.id);
            const attrs = {
              className: 'pui-dynamic-list__item',
              ...(draggable ? {
                value: props.identifier
              } : {})
            };
            const body = _react.default.createElement(Item, {
              ...props
            }, _react.default.createElement("div", {
              className: 'item__content'
            }, children), _react.default.createElement("section", {
              className: 'item__actions'
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'delete',
              onClick: onRemove
            })));
            const register = element => registerRef(index, element);
            return _react.default.createElement("div", {
              ...attrs,
              key: index,
              ref: register
            }, body);
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./components/list
      *********************************/

      ims.set('./components/list', {
        hash: 4287536703,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          /*bundle*/
          function List({
            className
          }) {
            const {
              draggable,
              name,
              values,
              setValues
            } = (0, _context.useDynamicListContext)();
            const attrs = {
              className: `pui-dynamic-list ${className}`
            };
            const handleChange = (index, value) => {
              const newValue = [...values];
              newValue[index] = value;
              setValues(newValue);
            };
            const output = values.map((item, index) => {
              const setValue = value => handleChange(index, value);
              return _react.default.createElement(_item.DynamicItem, {
                value: item,
                key: `${name}.${index}`,
                index: index,
                identifier: item,
                setValue: setValue
              }, item);
            });
            const Container = 'div';
            return _react.default.createElement(Container, {
              ...attrs
            }, output);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 4099544747,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDynamicListContext = exports.DynamicListContext = void 0;
          var _react = require("react");
          const DynamicListContext = exports.DynamicListContext = _react.default.createContext({});
          /*bundle*/
          const useDynamicListContext = () => _react.default.useContext(DynamicListContext);
          exports.useDynamicListContext = useDynamicListContext;
        }
      });

      /**************************
      INTERNAL MODULE: ./provider
      **************************/

      ims.set('./provider', {
        hash: 2667126817,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Provider = Provider;
          var _react = require("react");
          var _context = require("./context");
          /*bundle */
          function Provider({
            name,
            onChange,
            draggable,
            children,
            value,
            Item,
            className,
            defaultValue = ''
          }) {
            if (value && !Array.isArray(value)) {
              console.warn('Warning: value prop must be an array or undefined.');
            }
            const getDefaultValue = () => '';
            if (!value?.length) value = [getDefaultValue()];
            const [items, setItems] = _react.default.useState(value);
            const [isDraggable, setIsDraggable] = _react.default.useState(draggable);
            const refs = (0, _react.useRef)([]);
            const providerData = {
              addItem: () => {
                const newValue = [...items, getDefaultValue()];
                setItems(newValue);
              },
              draggable: isDraggable,
              refs,
              toggleDraggable: () => setIsDraggable(!isDraggable),
              removeItem: index => {
                const newItems = items.filter((_, i) => i !== index);
                setItems(newItems);
                console.log(22, newItems);
                const target = {
                  name,
                  value: newItems
                };
                onChange?.({
                  target,
                  currentTarget: target
                });
              },
              name,
              setItems,
              values: items,
              registerRef: (index, ref) => {
                refs.current[index] = ref;
              },
              setValue: (index, value) => {
                const newItems = [...items];
                newItems[index] = value;
                setItems(newItems);
              },
              setValues: value => {
                setItems(value);
                const target = {
                  name,
                  value
                };
                onChange?.({
                  target,
                  currentTarget: target
                });
              },
              getDefaultValue,
              items: items,
              Item
            };
            // const Container = draggable ? DraggableList : React.Fragment;
            return _react.default.createElement(_context.DynamicListContext.Provider, {
              value: providerData
            }, _react.default.createElement("div", {
              className: className
            }, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3983678313,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./components/add-item",
        "from": "AddDynamicItem",
        "name": "AddDynamicItem"
      }, {
        "im": "./components/header",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./components/item",
        "from": "DynamicItem",
        "name": "DynamicItem"
      }, {
        "im": "./components/list",
        "from": "List",
        "name": "List"
      }, {
        "im": "./context",
        "from": "useDynamicListContext",
        "name": "useDynamicListContext"
      }, {
        "im": "./provider",
        "from": "Provider",
        "name": "Provider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AddDynamicItem') && _export("AddDynamicItem", AddDynamicItem = require ? require('./components/add-item').AddDynamicItem : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./components/header').Header : value);
        (require || prop === 'DynamicItem') && _export("DynamicItem", DynamicItem = require ? require('./components/item').DynamicItem : value);
        (require || prop === 'List') && _export("List", List = require ? require('./components/list').List : value);
        (require || prop === 'useDynamicListContext') && _export("useDynamicListContext", useDynamicListContext = require ? require('./context').useDynamicListContext : value);
        (require || prop === 'Provider') && _export("Provider", Provider = require ? require('./provider').Provider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIkFkZER5bmFtaWNJdGVtIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsInNldFZhbHVlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsInByb3ZpZGVyRGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsIl9mcmFtZXJNb3Rpb24iLCJEcmFnZ2FibGVMaXN0IiwiY2xhc3NOYW1lIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiUmVvcmRlciIsIkdyb3VwIiwib25SZW9yZGVyIiwiSGVhZGVyIiwiX2ljb25zIiwiRHluYW1pY0l0ZW0iLCJwcm9wcyIsImluZGV4IiwiaWRlbnRpZmllciIsInJlbW92ZUl0ZW0iLCJkcmFnZ2FibGUiLCJyZWZzIiwiSXRlbSIsInJlZ2lzdGVyUmVmIiwib25SZW1vdmUiLCJpZCIsImF0dHJzIiwiYm9keSIsIkljb25CdXR0b24iLCJpY29uIiwicmVnaXN0ZXIiLCJlbGVtZW50Iiwia2V5IiwicmVmIiwiX2l0ZW0iLCJMaXN0IiwibmFtZSIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsIkNvbnRhaW5lciIsIkR5bmFtaWNMaXN0Q29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIlByb3ZpZGVyIiwib25DaGFuZ2UiLCJkZWZhdWx0VmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJjb25zb2xlIiwid2FybiIsImdldERlZmF1bHRWYWx1ZSIsImxlbmd0aCIsIml0ZW1zIiwic2V0SXRlbXMiLCJpc0RyYWdnYWJsZSIsInNldElzRHJhZ2dhYmxlIiwidXNlUmVmIiwidG9nZ2xlRHJhZ2dhYmxlIiwibmV3SXRlbXMiLCJmaWx0ZXIiLCJfIiwiaSIsImxvZyIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjdXJyZW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9hZGQtaXRlbS50c3giLCIvdHMvY29tcG9uZW50cy9kcmFnYWJibGUtbGlzdC50c3giLCIvdHMvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL2NvbXBvbmVudHMvaXRlbS50c3giLCIvdHMvY29tcG9uZW50cy9saXN0LnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9wcm92aWRlci50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxXQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDTztVQUFXLFNBQVVHLGNBQWNBLENBQUM7WUFBRUM7VUFBUSxDQUFFO1lBQ3RELE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1AsTUFBQSxDQUFBUSxPQUFLLENBQUNDLFFBQVEsRUFBRTtZQUMxQyxNQUFNO2NBQUVDO1lBQU8sQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVEscUJBQXFCLEdBQUU7WUFDM0MsTUFBTUMsWUFBWSxHQUFHLEVBQUU7WUFDdkIsT0FDQ1osTUFBQSxDQUFBUSxPQUFBLENBQUFLLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBWSxNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNDLE9BQU8sRUFBRU47WUFBTyxTQUVqQztVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBLElBQUFWLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFnQixhQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBRU0sU0FBVWlCLGFBQWFBLENBQUM7WUFBRWIs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