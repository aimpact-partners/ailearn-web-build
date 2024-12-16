System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/icons", "lodash@4.17.21", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, AddButton, RemoveButton, DynamicButton, DynamicIconButton, useDynamicFieldContext, DynamicField, DynamicFieldContainer, TotalElements, __beyond_pkg, hmr;
  _export({
    AddButton: void 0,
    RemoveButton: void 0,
    DynamicButton: void 0,
    DynamicIconButton: void 0,
    useDynamicFieldContext: void 0,
    DynamicField: void 0,
    DynamicFieldContainer: void 0,
    TotalElements: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_2 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_3 = _pragmateUi100Beta7Icons;
    }, function (_lodash) {
      dependency_4 = _lodash;
    }, function (_beyondJsKernel019Styles) {
      dependency_5 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.17"], ["@aimpact/ailearn-app", "0.2.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.17/components/dynamic-field"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/icons', dependency_3], ['lodash', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.17/components/dynamic-field');
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./actions/add
      *****************************/
      ims.set('./actions/add', {
        hash: 4126504715,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AddButton = void 0;
          var _react = require("react");
          var _context = require("../context");
          var _wrapper = require("./wrapper");
          /*bundle*/ // AddButton.tsx

          const AddButton = ({
            template,
            children
          }) => {
            const {
              onAdd
            } = (0, _context.useDynamicFieldContext)();
            return _react.default.createElement(_wrapper.ActionWrapper, {
              onClick: onAdd
            }, children);
          };
          exports.AddButton = AddButton;
        }
      });

      /********************************
      INTERNAL MODULE: ./actions/remove
      ********************************/

      ims.set('./actions/remove', {
        hash: 1978015170,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RemoveButton = void 0;
          var _react = require("react");
          var _context = require("../context");
          var _wrapper = require("./wrapper");
          /*bundle*/ // RemoveButton.tsx

          const RemoveButton = ({
            index,
            children
          }) => {
            const {
              onRemove
            } = (0, _context.useDynamicFieldContext)();
            return _react.default.createElement(_wrapper.ActionWrapper, {
              onClick: () => onRemove(index)
            }, children);
          };
          exports.RemoveButton = RemoveButton;
        }
      });

      /*********************************
      INTERNAL MODULE: ./actions/wrapper
      *********************************/

      ims.set('./actions/wrapper', {
        hash: 3526438104,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActionWrapper = void 0;
          var _react = require("react");
          const ActionWrapper = ({
            children,
            onClick
          }) => {
            if (!_react.default.isValidElement(children)) {
              console.error('ActionWrapper: The child must be a valid React element.');
              return null;
            }
            return _react.default.cloneElement(children, {
              onClick
            });
          };
          exports.ActionWrapper = ActionWrapper;
        }
      });

      /***********************************
      INTERNAL MODULE: ./components/button
      ***********************************/

      ims.set('./components/button', {
        hash: 2437638923,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicButton = DynamicButton;
          exports.DynamicIconButton = DynamicIconButton;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          /*bundle*/
          function DynamicButton({
            children,
            action,
            onClick,
            ...props
          }) {
            const {
              onAdd,
              onRemove
            } = (0, _context.useDynamicFieldContext)();
            const actions = {
              add: onAdd,
              remove: onRemove
            };
            const handleClick = () => {
              if (onClick) onClick();
              if (action && actions[action]) actions[action]();
            };
            return _react.default.createElement(_components.Button, {
              ...props,
              onClick: handleClick
            }, children);
          }
          /*bundle*/
          function DynamicIconButton({
            children,
            index,
            action,
            onClick,
            ...props
          }) {
            const {
              onAdd,
              onRemove
            } = (0, _context.useDynamicFieldContext)();
            const actions = {
              add: onAdd,
              remove: onRemove
            };
            const handleClick = () => {
              if (onClick) onClick();
              if (action && actions[action]) actions[action](index);
            };
            return _react.default.createElement(_icons.IconButton, {
              ...props,
              onClick: handleClick
            }, children);
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./components/template
      *************************************/

      ims.set('./components/template', {
        hash: 1394527578,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.defaultFieldTemplate = void 0;
          var React = require("react");
          const defaultFieldTemplate = children => {
            return React.Children.toArray(children).reduce((acc, child) => {
              if (React.isValidElement(child) && child.props.name) {
                acc[child.props.name] = '';
              }
              return acc;
            }, {});
          };
          exports.defaultFieldTemplate = defaultFieldTemplate;
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 294486155,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDynamicFieldContext = exports.ModuleContext = void 0;
          var React = require("react");
          const ModuleContext = exports.ModuleContext = React.createContext({});
          const /*bundle*/useDynamicFieldContext = () => React.useContext(ModuleContext);
          exports.useDynamicFieldContext = useDynamicFieldContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./field/field
      *****************************/

      ims.set('./field/field', {
        hash: 2935613698,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicField = DynamicField;
          var _react = require("react");
          var _context = require("../context");
          var _row = require("../field/row");
          /*bundle*/ // DynamicField.tsx

          function DynamicField({
            children,
            index
          }) {
            const {
              onBlur,
              fields,
              onRemove,
              onUpdate,
              name
            } = (0, _context.useDynamicFieldContext)();
            const handleOnBlur = event => {
              console.log('escuchamos el onBlur');
              if (!onBlur) return;
              const target = {
                name,
                value: fields
              };
              onBlur({
                target,
                currentTarget: target
              });
            };
            return _react.default.createElement("div", {
              className: "dynamic-form__container"
            }, fields.map((field, index) => _react.default.createElement(_row.FieldRow, {
              key: index,
              field: field,
              index: index,
              children: children,
              onRemove: onRemove,
              onBlur: handleOnBlur,
              onUpdate: onUpdate
            })));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./field/row
      ***************************/

      ims.set('./field/row', {
        hash: 1132438387,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FieldRow = void 0;
          var _react = require("react");
          // field-row.tsx

          const FieldRow = ({
            field,
            index,
            children,
            onRemove,
            onBlur,
            onUpdate
          }) => {
            const renderChild = child => {
              if (!_react.default.isValidElement(child)) return child;
              const onChange = e => onUpdate(index, e.currentTarget.name, e.currentTarget.value);
              return _react.default.cloneElement(child, {
                value: field[child.props.name] || '',
                onChange,
                onBlur,
                index
              });
            };
            const renderChildren = () => _react.default.Children.map(children, renderChild);
            return _react.default.createElement("div", {
              className: "dynamic-form__field",
              "data-index": index
            }, renderChildren());
          };
          exports.FieldRow = FieldRow;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./hooks/use-field-manager
      *****************************************/

      ims.set('./hooks/use-field-manager', {
        hash: 1699253795,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useFieldManager = useFieldManager;
          var _react = require("react");
          // use-field-manager.ts

          function useFieldManager(lazyInit, initialFields = []) {
            const initialValue = initialFields.length ? initialFields : lazyInit ? [{}] : [];
            const [fields, setFields] = (0, _react.useState)(initialValue);
            (0, _react.useEffect)(() => {
              setFields(initialFields);
            }, [initialFields]);
            const add = template => {
              const newFields = [...fields, {
                ...template
              }];
              setFields(newFields);
              return newFields;
            };
            const remove = index => {
              const newFields = fields.filter((_, i) => i !== index);
              setFields([...newFields]);
              return newFields;
            };
            const update = (index, name, newValue) => {
              const newFields = fields.map((field, i) => i === index ? {
                ...field,
                [name]: newValue
              } : field);
              setFields(newFields);
              return newFields;
            };
            return {
              fields,
              add,
              remove,
              update
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1048838726,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicFieldContainer = DynamicFieldContainer;
          var _react = require("react");
          var _context = require("./context");
          var _useFieldManager = require("./hooks/use-field-manager");
          var _template = require("./components/template");
          /*bundle*/ // DynamicField.tsx

          function DynamicFieldContainer({
            texts = {
              add: 'Add',
              remove: 'Remove'
            },
            children,
            value,
            name,
            lazyInit = false,
            onChange,
            onBlur
          }) {
            const {
              fields,
              add,
              remove,
              update
            } = (0, _useFieldManager.useFieldManager)(lazyInit, value);
            const fieldTemplate = (0, _react.useMemo)(() => (0, _template.defaultFieldTemplate)(children), [children]);
            const executeOnChange = (newFields, name) => {
              if (!onChange) return;
              const target = {
                name,
                value: newFields
              };
              onChange({
                target,
                currentTarget: target,
                name
              });
            };
            const onAdd = () => {
              const newFields = add(fieldTemplate);
              executeOnChange(newFields, 'add');
            };
            const onRemove = index => {
              const newFields = remove(index);
              executeOnChange(newFields, 'remove');
            };
            const onUpdate = (index, name, value) => {
              const newFields = update(index, name, value);
              executeOnChange(newFields, 'change');
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: {
                onBlur,
                texts,
                fields,
                onAdd,
                onRemove,
                onUpdate,
                value: fields,
                name
              }
            }, children);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./total-elements
      ********************************/

      ims.set('./total-elements', {
        hash: 2002400230,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TotalElements = TotalElements;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function TotalElements() {
            const {
              fields
            } = (0, _context.useDynamicFieldContext)();
            return React.createElement("span", {
              className: "pui-dynamic-field__total-elements"
            }, fields.length);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2277440067,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./actions/add",
        "from": "AddButton",
        "name": "AddButton"
      }, {
        "im": "./actions/remove",
        "from": "RemoveButton",
        "name": "RemoveButton"
      }, {
        "im": "./components/button",
        "from": "DynamicButton",
        "name": "DynamicButton"
      }, {
        "im": "./components/button",
        "from": "DynamicIconButton",
        "name": "DynamicIconButton"
      }, {
        "im": "./context",
        "from": "useDynamicFieldContext",
        "name": "useDynamicFieldContext"
      }, {
        "im": "./field/field",
        "from": "DynamicField",
        "name": "DynamicField"
      }, {
        "im": "./index",
        "from": "DynamicFieldContainer",
        "name": "DynamicFieldContainer"
      }, {
        "im": "./total-elements",
        "from": "TotalElements",
        "name": "TotalElements"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AddButton') && _export("AddButton", AddButton = require ? require('./actions/add').AddButton : value);
        (require || prop === 'RemoveButton') && _export("RemoveButton", RemoveButton = require ? require('./actions/remove').RemoveButton : value);
        (require || prop === 'DynamicButton') && _export("DynamicButton", DynamicButton = require ? require('./components/button').DynamicButton : value);
        (require || prop === 'DynamicIconButton') && _export("DynamicIconButton", DynamicIconButton = require ? require('./components/button').DynamicIconButton : value);
        (require || prop === 'useDynamicFieldContext') && _export("useDynamicFieldContext", useDynamicFieldContext = require ? require('./context').useDynamicFieldContext : value);
        (require || prop === 'DynamicField') && _export("DynamicField", DynamicField = require ? require('./field/field').DynamicField : value);
        (require || prop === 'DynamicFieldContainer') && _export("DynamicFieldContainer", DynamicFieldContainer = require ? require('./index').DynamicFieldContainer : value);
        (require || prop === 'TotalElements') && _export("TotalElements", TotalElements = require ? require('./total-elements').TotalElements : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfd3JhcHBlciIsIkFkZEJ1dHRvbiIsInRlbXBsYXRlIiwiY2hpbGRyZW4iLCJvbkFkZCIsInVzZUR5bmFtaWNGaWVsZENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFjdGlvbldyYXBwZXIiLCJvbkNsaWNrIiwiZXhwb3J0cyIsIlJlbW92ZUJ1dHRvbiIsImluZGV4Iiwib25SZW1vdmUiLCJpc1ZhbGlkRWxlbWVudCIsImNvbnNvbGUiLCJlcnJvciIsImNsb25lRWxlbWVudCIsIl9jb21wb25lbnRzIiwiX2ljb25zIiwiRHluYW1pY0J1dHRvbiIsImFjdGlvbiIsInByb3BzIiwiYWN0aW9ucyIsImFkZCIsInJlbW92ZSIsImhhbmRsZUNsaWNrIiwiQnV0dG9uIiwiRHluYW1pY0ljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiUmVhY3QiLCJkZWZhdWx0RmllbGRUZW1wbGF0ZSIsIkNoaWxkcmVuIiwidG9BcnJheSIsInJlZHVjZSIsImFjYyIsImNoaWxkIiwibmFtZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9yb3ciLCJEeW5hbWljRmllbGQiLCJvbkJsdXIiLCJmaWVsZHMiLCJvblVwZGF0ZSIsImhhbmRsZU9uQmx1ciIsImV2ZW50IiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NOYW1lIiwibWFwIiwiZmllbGQiLCJGaWVsZFJvdyIsImtleSIsInJlbmRlckNoaWxkIiwib25DaGFuZ2UiLCJlIiwicmVuZGVyQ2hpbGRyZW4iLCJ1c2VGaWVsZE1hbmFnZXIiLCJsYXp5SW5pdCIsImluaXRpYWxGaWVsZHMiLCJpbml0aWFsVmFsdWUiLCJsZW5ndGgiLCJzZXRGaWVsZHMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm5ld0ZpZWxkcyIsImZpbHRlciIsIl8iLCJpIiwidXBkYXRlIiwibmV3VmFsdWUiLCJfdXNlRmllbGRNYW5hZ2VyIiwiX3RlbXBsYXRlIiwiRHluYW1pY0ZpZWxkQ29udGFpbmVyIiwidGV4dHMiLCJmaWVsZFRlbXBsYXRlIiwidXNlTWVtbyIsImV4ZWN1dGVPbkNoYW5nZSIsIlByb3ZpZGVyIiwiVG90YWxFbGVtZW50cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2FjdGlvbnMvYWRkLnRzeCIsIi90cy9hY3Rpb25zL3JlbW92ZS50c3giLCIvdHMvYWN0aW9ucy93cmFwcGVyLnRzeCIsIi90cy9jb21wb25lbnRzL2J1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy90ZW1wbGF0ZS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9maWVsZC9maWVsZC50c3giLCIvdHMvZmllbGQvcm93LnRzeCIsIi90cy9ob29rcy91c2UtZmllbGQtbWFuYWdlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3RvdGFsLWVsZW1lbnRzLnRzeCIsIi90eXBlcy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBT08sV0FWUDs7VUFVa0IsTUFBTUcsU0FBUyxHQUFHQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUM7VUFBUSxDQUFrQixLQUFJO1lBQzlFLE1BQU07Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBTSxzQkFBc0IsR0FBRTtZQUUxQyxPQUFPUixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUCxRQUFBLENBQUFRLGFBQWE7Y0FBQ0MsT0FBTyxFQUFFTDtZQUFLLEdBQUdELFFB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