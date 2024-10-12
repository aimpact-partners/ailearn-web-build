System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, AddButton, RemoveButton, useDynamicFieldContext, DynamicField, __beyond_pkg, hmr;
  _export({
    AddButton: void 0,
    RemoveButton: void 0,
    useDynamicFieldContext: void 0,
    DynamicField: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta6Components) {
      dependency_2 = _pragmateUi100Beta6Components;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/components/dynamic-field"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/components/dynamic-field');
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

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 1559545418,
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

      /***************************
      INTERNAL MODULE: ./field-row
      ***************************/

      ims.set('./field-row', {
        hash: 1841621951,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FieldRow = void 0;
          var _react = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          // field-row.tsx

          const FieldRow = ({
            field,
            index,
            children,
            onRemove,
            onUpdate
          }) => {
            const {
              fields,
              texts
            } = (0, _context.useDynamicFieldContext)();
            const renderChild = child => {
              if (!_react.default.isValidElement(child)) return child;
              const onChange = e => onUpdate(index, child.props.name, e.target.value);
              return _react.default.cloneElement(child, {
                value: field[child.props.name] || '',
                onChange
              });
            };
            const renderChildren = () => _react.default.Children.map(children, renderChild);
            return _react.default.createElement("div", {
              className: "dynamic-form__field",
              "data-index": index
            }, renderChildren(), fields.length > 1 && _react.default.createElement("div", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              type: "button",
              onClick: () => onRemove(index)
            }, texts.remove)));
          };
          exports.FieldRow = FieldRow;
        }
      });

      /***********************
      INTERNAL MODULE: ./field
      ***********************/

      ims.set('./field', {
        hash: 2077509141,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicField = DynamicField;
          var _react = require("react");
          var _useFieldManager = require("./use-field-manager");
          var _fieldRow = require("./field-row");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          // DynamicField.tsx

          const defaultFieldTemplate = children => {
            return _react.default.Children.toArray(children).reduce((acc, child) => {
              if (_react.default.isValidElement(child) && child.props.name) {
                acc[child.props.name] = '';
              }
              return acc;
            }, {});
          };
          /*bundle*/
          function DynamicField({
            texts = {
              add: 'Add',
              remove: 'Remove'
            },
            children,
            value,
            name,
            onChange
          }) {
            const {
              fields,
              add,
              remove,
              update
            } = (0, _useFieldManager.useFieldManager)(value);
            const fieldTemplate = (0, _react.useMemo)(() => defaultFieldTemplate(children), [children]);
            const onAdd = () => {
              const newFields = add(fieldTemplate);
              if (onChange) {
                const target = {
                  name,
                  value: newFields
                };
                onChange({
                  target,
                  currentTarget: target
                });
              }
            };
            const onRemove = index => {
              const newFields = remove(index);
              if (onChange) {
                const target = {
                  name,
                  value: newFields
                };
                onChange({
                  target,
                  currentTarget: target
                });
              }
            };
            const onUpdate = (index, name, value) => {
              const newFields = update(index, name, value);
              const target = {
                name,
                value: newFields
              };
              if (onChange) onChange({
                target,
                currentTarget: target
              });
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: {
                texts,
                fields,
                onAdd,
                onRemove,
                onUpdate
              }
            }, _react.default.createElement("div", {
              className: "dynamic-form__container"
            }, fields.map((field, index) => _react.default.createElement(_fieldRow.FieldRow, {
              key: index,
              field: field,
              index: index,
              children: children,
              onRemove: onRemove,
              onUpdate: onUpdate
            })), _react.default.createElement("div", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              type: "button",
              onClick: onAdd,
              variant: "primary",
              bordered: true
            }, texts.add))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 794643406,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************
      INTERNAL MODULE: ./use-field-manager
      ***********************************/

      ims.set('./use-field-manager', {
        hash: 71051280,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useFieldManager = useFieldManager;
          var _react = require("react");
          // use-field-manager.ts

          function useFieldManager(initialFields = []) {
            const [fields, setFields] = (0, _react.useState)(initialFields.length ? initialFields : [{}]);
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
              if (fields.length > 1) {
                const newFields = fields.filter((_, i) => i !== index);
                setFields(newFields);
                return newFields;
              }
              return fields;
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
      __pkg.exports.descriptor = [{
        "im": "./actions/add",
        "from": "AddButton",
        "name": "AddButton"
      }, {
        "im": "./actions/remove",
        "from": "RemoveButton",
        "name": "RemoveButton"
      }, {
        "im": "./context",
        "from": "useDynamicFieldContext",
        "name": "useDynamicFieldContext"
      }, {
        "im": "./field",
        "from": "DynamicField",
        "name": "DynamicField"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AddButton') && _export("AddButton", AddButton = require ? require('./actions/add').AddButton : value);
        (require || prop === 'RemoveButton') && _export("RemoveButton", RemoveButton = require ? require('./actions/remove').RemoveButton : value);
        (require || prop === 'useDynamicFieldContext') && _export("useDynamicFieldContext", useDynamicFieldContext = require ? require('./context').useDynamicFieldContext : value);
        (require || prop === 'DynamicField') && _export("DynamicField", DynamicField = require ? require('./field').DynamicField : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfd3JhcHBlciIsIkFkZEJ1dHRvbiIsInRlbXBsYXRlIiwiY2hpbGRyZW4iLCJvbkFkZCIsInVzZUR5bmFtaWNGaWVsZENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFjdGlvbldyYXBwZXIiLCJvbkNsaWNrIiwiZXhwb3J0cyIsIlJlbW92ZUJ1dHRvbiIsImluZGV4Iiwib25SZW1vdmUiLCJpc1ZhbGlkRWxlbWVudCIsImNvbnNvbGUiLCJlcnJvciIsImNsb25lRWxlbWVudCIsIlJlYWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJGaWVsZFJvdyIsImZpZWxkIiwib25VcGRhdGUiLCJmaWVsZHMiLCJ0ZXh0cyIsInJlbmRlckNoaWxkIiwiY2hpbGQiLCJvbkNoYW5nZSIsImUiLCJwcm9wcyIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbmRlckNoaWxkcmVuIiwiQ2hpbGRyZW4iLCJtYXAiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJCdXR0b24iLCJ0eXBlIiwicmVtb3ZlIiwiX3VzZUZpZWxkTWFuYWdlciIsIl9maWVsZFJvdyIsImRlZmF1bHRGaWVsZFRlbXBsYXRlIiwidG9BcnJheSIsInJlZHVjZSIsImFjYyIsIkR5bmFtaWNGaWVsZCIsImFkZCIsInVwZGF0ZSIsInVzZUZpZWxkTWFuYWdlciIsImZpZWxkVGVtcGxhdGUiLCJ1c2VNZW1vIiwibmV3RmllbGRzIiwiY3VycmVudFRhcmdldCIsIlByb3ZpZGVyIiwia2V5IiwidmFyaWFudCIsImJvcmRlcmVkIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJpbml0aWFsRmllbGRzIiwic2V0RmllbGRzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmaWx0ZXIiLCJfIiwiaSIsIm5ld1ZhbHVlIl0sInNvdXJjZXMiOlsiL3RzL2FjdGlvbnMvYWRkLnRzeCIsIi90cy9hY3Rpb25zL3JlbW92ZS50c3giLCIvdHMvYWN0aW9ucy93cmFwcGVyLnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2ZpZWxkLXJvdy50c3giLCIvdHMvZmllbGQudHN4IiwiL3R5cGVzLnRzeCIsIi90cy91c2UtZmllbGQtbWFuYWdlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFPTyxXQVZQOztVQVVrQixNQUFNRyxTQUFTLEdBQUdBLENBQUM7WUFBRUMsUUFBUTtZQUFFQztVQUFRLENBQWtCLEtBQUk7WUFDOUUsTUFBTTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLHNCQUFzQixHQUFFO1lBRTFDLE9BQU9SLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNQLFFBQUEsQ0FBQVEsYUFBYTtjQUFDQyxPQUFPLEVBQUVMO1lBQUssR0FBR0QsUUFBUSxDQUFpQjtVQUNqRSxDQUFDO1VBQUNPLE9BQUEsQ0FBQVQsU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JGLElBQUFKLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQU9PLFdBVlA7O1VBVWtCLE1BQU1hLFlBQVksR0FBR0EsQ0FBQztZQUFFQyxLQUFLO1lBQUVUO1VBQVEsQ0FBcUIsS0FBSTtZQUNqRixNQUFNO2NBQUVVO1lBQVEsQ0FBRSxHQUFHLElBQUFkLFFBQUEsQ0FBQU0sc0JBQXNCLEdBQUU7WUFDN0MsT0FBT1IsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1AsUUFB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