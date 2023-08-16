System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, Component, inputComponents, __beyond_pkg, hmr;
  _export({
    Component: void 0,
    inputComponents: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.6.1"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.5"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/input-controller"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3919871860,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Component = Component;
          var React = require("react");
          var _inputComponents = require("./input-components");
          /*bundle*/
          function Component({
            template
          }) {
            const isTemplateAnArray = Array.isArray(template);
            const SingleInput = (!isTemplateAnArray && _inputComponents.inputComponents[template.type]) ?? _inputComponents.inputComponents.default;
            const inputs = isTemplateAnArray && template.map(input => {
              const Element = _inputComponents.inputComponents[input.type] ?? _inputComponents.inputComponents.default;
              return React.createElement(Element, {
                key: input.name,
                ...input,
                _components: _inputComponents.inputComponents
              });
            });
            const output = Array.isArray(template) ? inputs : React.createElement(SingleInput, {
              ...template
            });
            return React.createElement(React.Fragment, null, output);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./input-components
      **********************************/

      ims.set('./input-components', {
        hash: 2354356184,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.inputComponents = void 0;
          var _default = require("./inputs/default");
          var _select = require("./inputs/select");
          var _textarea = require("./inputs/textarea");
          var _checkAndRadios = require("./inputs/check-and-radios");
          class InputComponents {
            select = _select.Select;
            textarea = _textarea.TextArea;
            radio = _checkAndRadios.CheckAndRadios;
            radioItem = _default.Input;
            checkbox = _checkAndRadios.CheckAndRadios;
            checkItem = _default.Input;
            default = _default.Input;
            setComponent(type, component) {
              this[type] = component;
            }
          }
          /*bundle*/
          const inputComponents = new InputComponents();
          exports.inputComponents = inputComponents;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./inputs/check-and-radios
      *****************************************/

      ims.set('./inputs/check-and-radios', {
        hash: 3403928382,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CheckAndRadios = CheckAndRadios;
          var React = require("react");
          function CheckAndRadios(props) {
            const {
              _components
            } = props;
            const output = props.options.map(option => {
              const Element = _components[option.type] ?? _components.default;
              const type = option.type === 'radioItem' ? 'radio' : 'checkbox';
              option = {
                ...option,
                type
              };
              return React.createElement(Element, {
                key: option.value,
                ...option
              });
            });
            return React.createElement(React.Fragment, null, output);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./inputs/default
      ********************************/

      ims.set('./inputs/default', {
        hash: 1333658770,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Input = Input;
          var React = require("react");
          function Input(props) {
            const {
              label,
              events,
              ...othersSelectProps
            } = props;
            const id = othersSelectProps?.id ?? othersSelectProps.name;
            return React.createElement("label", {
              htmlFor: id
            }, React.createElement("span", null, label), React.createElement("input", {
              ...othersSelectProps,
              ...events,
              id: id
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./inputs/select
      *******************************/

      ims.set('./inputs/select', {
        hash: 1243619150,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Select = Select;
          var React = require("react");
          function Select(props) {
            const {
              options,
              label,
              events,
              ...othersSelectProps
            } = props;
            const optionsElements = options.length > 0 && options.map(opt => React.createElement("option", {
              key: opt,
              value: opt
            }, opt));
            const id = othersSelectProps?.id ?? othersSelectProps.name;
            return React.createElement("label", {
              htmlFor: id
            }, React.createElement("span", null, label), React.createElement("select", {
              ...othersSelectProps,
              id: id,
              ...events
            }, optionsElements));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./inputs/textarea
      *********************************/

      ims.set('./inputs/textarea', {
        hash: 562440940,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextArea = TextArea;
          var React = require("react");
          function TextArea(props) {
            const {
              label,
              events,
              ...othersSelectProps
            } = props;
            const id = othersSelectProps?.id ?? othersSelectProps.name;
            return React.createElement("label", {
              htmlFor: id
            }, React.createElement("span", null, label), React.createElement("textarea", {
              ...othersSelectProps,
              ...events,
              id: id
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Component",
        "name": "Component"
      }, {
        "im": "./input-components",
        "from": "inputComponents",
        "name": "inputComponents"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Component') && _export("Component", Component = require ? require('./index').Component : value);
        (require || prop === 'inputComponents') && _export("inputComponents", inputComponents = require ? require('./input-components').inputComponents : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfaW5wdXRDb21wb25lbnRzIiwiQ29tcG9uZW50IiwidGVtcGxhdGUiLCJpc1RlbXBsYXRlQW5BcnJheSIsIkFycmF5IiwiaXNBcnJheSIsIlNpbmdsZUlucHV0IiwiaW5wdXRDb21wb25lbnRzIiwidHlwZSIsImRlZmF1bHQiLCJpbnB1dHMiLCJtYXAiLCJpbnB1dCIsIkVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwia2V5IiwibmFtZSIsIl9jb21wb25lbnRzIiwib3V0cHV0IiwiRnJhZ21lbnQiLCJfZGVmYXVsdCIsIl9zZWxlY3QiLCJfdGV4dGFyZWEiLCJfY2hlY2tBbmRSYWRpb3MiLCJJbnB1dENvbXBvbmVudHMiLCJzZWxlY3QiLCJTZWxlY3QiLCJ0ZXh0YXJlYSIsIlRleHRBcmVhIiwicmFkaW8iLCJDaGVja0FuZFJhZGlvcyIsInJhZGlvSXRlbSIsIklucHV0IiwiY2hlY2tib3giLCJjaGVja0l0ZW0iLCJzZXRDb21wb25lbnQiLCJjb21wb25lbnQiLCJleHBvcnRzIiwicHJvcHMiLCJvcHRpb25zIiwib3B0aW9uIiwidmFsdWUiLCJsYWJlbCIsImV2ZW50cyIsIm90aGVyc1NlbGVjdFByb3BzIiwiaWQiLCJodG1sRm9yIiwib3B0aW9uc0VsZW1lbnRzIiwibGVuZ3RoIiwib3B0Il0sInNvdXJjZXMiOlsiL2NvZGUvdHMvaW5kZXgudHN4IiwiL2NvZGUvdHMvaW5wdXQtY29tcG9uZW50cy50cyIsIi9jb2RlL3RzL2lucHV0cy9jaGVjay1hbmQtcmFkaW9zLnRzeCIsIi9jb2RlL3RzL2lucHV0cy9kZWZhdWx0LnRzeCIsIi9jb2RlL3RzL2lucHV0cy9zZWxlY3QudHN4IiwiL2NvZGUvdHMvaW5wdXRzL3RleHRhcmVhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFB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