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
    }, function (_react2) {
      dependency_1 = _react2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.6"], ["@beyond-js/widgets", "0.1.5"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.2.38"], ["@types/react-dom", "18.2.16"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.3/input-controller"
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
        hash: 8866632,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Component = Component;
          var _react = require("react");
          var _inputComponents = require("./input-components");
          /*bundle*/
          function Component({
            template
          }) {
            const isTemplateAnArray = Array.isArray(template);
            const SingleInput = (!isTemplateAnArray && _inputComponents.inputComponents[template.type]) ?? _inputComponents.inputComponents.default;
            const inputs = isTemplateAnArray && template.map(input => {
              const Element = _inputComponents.inputComponents[input.type] ?? _inputComponents.inputComponents.default;
              return _react.default.createElement(Element, {
                key: input.name,
                ...input,
                _components: _inputComponents.inputComponents
              });
            });
            const output = Array.isArray(template) ? inputs : _react.default.createElement(SingleInput, {
              ...template
            });
            return _react.default.createElement(_react.default.Fragment, null, output);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./input-components
      **********************************/

      ims.set('./input-components', {
        hash: 944678370,
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
          const inputComponents = exports.inputComponents = new InputComponents();
        }
      });

      /*****************************************
      INTERNAL MODULE: ./inputs/check-and-radios
      *****************************************/

      ims.set('./inputs/check-and-radios', {
        hash: 1764241953,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CheckAndRadios = CheckAndRadios;
          var _react = require("react");
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
              return _react.default.createElement(Element, {
                key: option.value,
                ...option
              });
            });
            return _react.default.createElement(_react.default.Fragment, null, output);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./inputs/default
      ********************************/

      ims.set('./inputs/default', {
        hash: 2365079751,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Input = Input;
          var _react = require("react");
          function Input(props) {
            const {
              label,
              events,
              ...othersSelectProps
            } = props;
            const id = othersSelectProps?.id ?? othersSelectProps.name;
            return _react.default.createElement("label", {
              htmlFor: id
            }, _react.default.createElement("span", null, label), _react.default.createElement("input", {
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
        hash: 600770447,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Select = Select;
          var _react = require("react");
          function Select(props) {
            const {
              options,
              label,
              events,
              ...othersSelectProps
            } = props;
            const optionsElements = options.length > 0 && options.map(opt => _react.default.createElement("option", {
              key: opt,
              value: opt
            }, opt));
            const id = othersSelectProps?.id ?? othersSelectProps.name;
            return _react.default.createElement("label", {
              htmlFor: id
            }, _react.default.createElement("span", null, label), _react.default.createElement("select", {
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
        hash: 2778630541,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextArea = TextArea;
          var _react = require("react");
          function TextArea(props) {
            const {
              label,
              events,
              ...othersSelectProps
            } = props;
            const id = othersSelectProps?.id ?? othersSelectProps.name;
            return _react.default.createElement("label", {
              htmlFor: id
            }, _react.default.createElement("span", null, label), _react.default.createElement("textarea", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2lucHV0Q29tcG9uZW50cyIsIkNvbXBvbmVudCIsInRlbXBsYXRlIiwiaXNUZW1wbGF0ZUFuQXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJTaW5nbGVJbnB1dCIsImlucHV0Q29tcG9uZW50cyIsInR5cGUiLCJkZWZhdWx0IiwiaW5wdXRzIiwibWFwIiwiaW5wdXQiLCJFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImtleSIsIm5hbWUiLCJfY29tcG9uZW50cyIsIm91dHB1dCIsIkZyYWdtZW50IiwiX2RlZmF1bHQiLCJfc2VsZWN0IiwiX3RleHRhcmVhIiwiX2NoZWNrQW5kUmFkaW9zIiwiSW5wdXRDb21wb25lbnRzIiwic2VsZWN0IiwiU2VsZWN0IiwidGV4dGFyZWEiLCJUZXh0QXJlYSIsInJhZGlvIiwiQ2hlY2tBbmRSYWRpb3MiLCJyYWRpb0l0ZW0iLCJJbnB1dCIsImNoZWNrYm94IiwiY2hlY2tJdGVtIiwic2V0Q29tcG9uZW50IiwiY29tcG9uZW50IiwiZXhwb3J0cyIsInByb3BzIiwib3B0aW9ucyIsIm9wdGlvbiIsInZhbHVlIiwibGFiZWwiLCJldmVudHMiLCJvdGhlcnNTZWxlY3RQcm9wcyIsImlkIiwiaHRtbEZvciIsIm9wdGlvbnNFbGVtZW50cyIsImxlbmd0aCIsIm9wdCJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2luZGV4LnRzeCIsIi9jb2RlL3RzL2lucHV0LWNvbXBvbmVudHMudHMiLCIvY29kZS90cy9pbnB1dHMvY2hlY2stYW5kLXJhZGlvcy50c3giLCIvY29kZS90cy9pbnB1dHMvZGVmYXVsdC50c3giLCIvY29kZS90cy9pbnB1dHMvc2VsZWN0LnRzeCIsIi9jb2RlL3RzL2lucHV0cy90ZXh0YXJlYS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VB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