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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.1.1"], ["@aimpact/ailearn-app", "0.0.50"]]);
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
        hash: 241077873,
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
        hash: 1170767405,
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
            specs,
            className,
            defaultValue = ''
          }) {
            if (value && !Array.isArray(value)) {
              console.warn('Warning: value prop must be an array or undefined. Received', value);
            }
            const getDefaultValue = () => '';
            if (!value?.length) value = [getDefaultValue()];
            const [items, setItems] = _react.default.useState([...value]);
            const [isDraggable, setIsDraggable] = _react.default.useState(draggable);
            const refs = (0, _react.useRef)([]);
            _react.default.useEffect(() => {
              setItems(value);
            }, [value.length]);
            const providerData = {
              addItem: () => {
                const newValue = [...items, getDefaultValue()];
                setItems(newValue);
              },
              draggable: isDraggable,
              refs,
              specs: specs ?? {},
              toggleDraggable: () => setIsDraggable(!isDraggable),
              removeItem: index => {
                const newItems = items.filter((_, i) => i !== index);
                setItems(newItems);
                const target = {
                  name,
                  value: newItems
                };
                onChange?.({
                  target,
                  currentTarget: target
                });
                return newItems;
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
        hash: 733921901,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIkFkZER5bmFtaWNJdGVtIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsInNldFZhbHVlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsInByb3ZpZGVyRGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsIl9mcmFtZXJNb3Rpb24iLCJEcmFnZ2FibGVMaXN0IiwiY2xhc3NOYW1lIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiUmVvcmRlciIsIkdyb3VwIiwib25SZW9yZGVyIiwiSGVhZGVyIiwiX2ljb25zIiwiRHluYW1pY0l0ZW0iLCJwcm9wcyIsImluZGV4IiwiaWRlbnRpZmllciIsInJlbW92ZUl0ZW0iLCJkcmFnZ2FibGUiLCJyZWZzIiwiSXRlbSIsInJlZ2lzdGVyUmVmIiwib25SZW1vdmUiLCJpZCIsImF0dHJzIiwiYm9keSIsIkljb25CdXR0b24iLCJpY29uIiwicmVnaXN0ZXIiLCJlbGVtZW50Iiwia2V5IiwicmVmIiwiX2l0ZW0iLCJMaXN0IiwibmFtZSIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsIkNvbnRhaW5lciIsIkR5bmFtaWNMaXN0Q29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIlByb3ZpZGVyIiwib25DaGFuZ2UiLCJzcGVjcyIsImRlZmF1bHRWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImNvbnNvbGUiLCJ3YXJuIiwiZ2V0RGVmYXVsdFZhbHVlIiwibGVuZ3RoIiwiaXRlbXMiLCJzZXRJdGVtcyIsImlzRHJhZ2dhYmxlIiwic2V0SXNEcmFnZ2FibGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0b2dnbGVEcmFnZ2FibGUiLCJuZXdJdGVtcyIsImZpbHRlciIsIl8iLCJpIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImN1cnJlbnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9jb21wb25lbnRzL2FkZC1pdGVtLnRzeCIsIi90cy9jb21wb25lbnRzL2RyYWdhYmJsZS1saXN0LnRzeCIsIi90cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvY29tcG9uZW50cy9pdGVtLnRzeCIsIi90cy9jb21wb25lbnRzL2xpc3QudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL3Byb3ZpZGVyLnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUNPO1VBQVcsU0FBVUcsY0FBY0EsQ0FBQztZQUFFQztVQUFRLENBQUU7WUFDdEQsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHUCxNQUFBLENBQUFRLE9BQUssQ0FBQ0MsUUFBUSxFQUFFO1lBQzFDLE1BQU07Y0FBRUM7WUFBTyxDQUFFLEdBQUcsSUFBQVAsUUFBQSxDQUFBUSxxQkFBcUIsR0FBRTtZQUMzQyxNQUFNQyxZQUFZLEdBQUcsRUFBRTtZQUN2QixPQUNDWixNQUFBLENBQUFRLE9BQUEsQ0FBQUssYUFBQSxDQUFDWCxXQUFBLENBQUFZLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0MsT0FBTyxFQUFFTjtZQUFPLFNBRWpDO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkEsSUFBQVYsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWdCLGFBQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFFTSxTQUFVaUIsYUFB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