System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/reactive@1.1.4/model", "pragmate-ui@0.0.36/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Toasts, ToastTypes, IToast, toast, Toast, __beyond_pkg, hmr;
  _export({
    Toasts: void 0,
    ToastTypes: void 0,
    IToast: void 0,
    toast: void 0,
    Toast: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_3 = _beyondJsReact18Widgets101Hooks;
    }, function (_beyondJsReactive114Model) {
      dependency_4 = _beyondJsReactive114Model;
    }, function (_pragmateUi0036Icons) {
      dependency_5 = _pragmateUi0036Icons;
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
          "vspecifier": "pragmate-ui@0.0.36/toast"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['pragmate-ui/icons', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/toast');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1361611415,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Toasts = Toasts;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _model = require("./model");
          var _toast = require("./toast");
          /*bundle*/
          function Toasts({
            position = {
              bottom: '1rem',
              right: '1rem'
            },
            className,
            ...props
          }) {
            const [items, setItems] = _react.default.useState([]);
            (0, _hooks.useBinder)([_model.toast], () => setItems(_model.toast.current), 'current-toasts-changed');
            const elements = items.map(item => _react.default.createElement(_toast.Toast, {
              key: item.id,
              ...item
            }));
            return _react.default.createElement("div", {
              style: position,
              className: `essential__toasts ${className}`,
              ...props
            }, elements);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./model
      ***********************/

      ims.set('./model', {
        hash: 1249255664,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.toast = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Toast extends _model.ReactiveModel {
            #current;
            get current() {
              return this.#current;
            }
            set current(newValue) {
              this.#current = newValue;
              this.triggerEvent('current-toasts-changed');
            }
            constructor() {
              super();
              this.#current = [];
            }
            #generateUniqueId() {
              return crypto.getRandomValues(new Uint8Array(16)).toString();
            }
            #add(type, message, duration) {
              const newToast = {
                id: this.#generateUniqueId(),
                message,
                type,
                duration
              };
              this.#current = [...this.#current, newToast];
              this.triggerEvent('current-toasts-changed');
              return newToast.id;
            }
            remove(toastId) {
              this.#current = this.#current.filter(toast => toast.id !== toastId);
              this.triggerEvent('current-toasts-changed');
            }
            success(message, duration) {
              return this.#add('success', message, duration);
            }
            error(message, duration) {
              return this.#add('error', message, duration);
            }
            warning(message, duration) {
              return this.#add('warning', message, duration);
            }
            info(message, duration) {
              return this.#add('info', message, duration);
            }
            loading(message, duration) {
              return this.#add('loading', message, duration);
            }
          }
          /*bundle*/
          const toast = new Toast();
          exports.toast = toast;
        }
      });

      /***********************
      INTERNAL MODULE: ./toast
      ***********************/

      ims.set('./toast', {
        hash: 1200851649,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Toast = Toast;
          var _react = require("react");
          var _model = require("./model");
          var _icons = require("pragmate-ui/icons");
          const DEFAULT_DURATION = 3000;
          const ANIMATION_MARGIN = 300;
          /*bundle*/
          function Toast({
            type,
            message,
            duration,
            id
          }) {
            const toastRef = _react.default.useRef(null);
            _react.default.useEffect(() => {
              if (toastRef.current) {
                toastRef.current.classList.add("enter");
              }
              return () => {
                if (toastRef.current) toastRef.current.classList.remove("enter");
              };
            }, [toastRef.current]);
            _react.default.useEffect(() => {
              duration = duration ?? DEFAULT_DURATION;
              setTimeout(() => {
                toastRef.current.classList.remove("enter");
                toastRef.current.classList.add("exit");
              }, duration);
              const timeout = setTimeout(() => {
                _model.toast.current = _model.toast.current.filter(item => item.id !== id);
              }, duration + ANIMATION_MARGIN);
              return () => clearTimeout(timeout);
            }, [duration, id]);
            const icons = {
              error: "triangle-exclamation",
              success: "tickCircle",
              info: "infoCircle",
              loading: "refreshCircle",
              warning: "warning"
            };
            return _react.default.createElement("article", {
              ref: toastRef,
              className: `toast ${type}`
            }, _react.default.createElement(_icons.Icon, {
              icon: icons[type],
              className: "icon"
            }), _react.default.createElement("p", {
              className: "message"
            }, message));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Toasts",
        "name": "Toasts"
      }, {
        "im": "./model",
        "from": "ToastTypes",
        "name": "ToastTypes"
      }, {
        "im": "./model",
        "from": "IToast",
        "name": "IToast"
      }, {
        "im": "./model",
        "from": "toast",
        "name": "toast"
      }, {
        "im": "./toast",
        "from": "Toast",
        "name": "Toast"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Toasts') && _export("Toasts", Toasts = require ? require('./index').Toasts : value);
        (require || prop === 'ToastTypes') && _export("ToastTypes", ToastTypes = require ? require('./model').ToastTypes : value);
        (require || prop === 'IToast') && _export("IToast", IToast = require ? require('./model').IToast : value);
        (require || prop === 'toast') && _export("toast", toast = require ? require('./model').toast : value);
        (require || prop === 'Toast') && _export("Toast", Toast = require ? require('./toast').Toast : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2hvb2tzIiwiX21vZGVsIiwiX3RvYXN0IiwiVG9hc3RzIiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsImNsYXNzTmFtZSIsInByb3BzIiwiaXRlbXMiLCJzZXRJdGVtcyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsInRvYXN0IiwiY3VycmVudCIsImVsZW1lbnRzIiwibWFwIiwiaXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJUb2FzdCIsImtleSIsImlkIiwic3R5bGUiLCJSZWFjdGl2ZU1vZGVsIiwibmV3VmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJjb25zdHJ1Y3RvciIsImdlbmVyYXRlVW5pcXVlSWQiLCIjZ2VuZXJhdGVVbmlxdWVJZCIsImNyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQ4QXJyYXkiLCJ0b1N0cmluZyIsImFkZCIsIiNhZGQiLCJ0eXBlIiwibWVzc2FnZSIsImR1cmF0aW9uIiwibmV3VG9hc3QiLCJyZW1vdmUiLCJ0b2FzdElkIiwiZmlsdGVyIiwic3VjY2VzcyIsImVycm9yIiwid2FybmluZyIsImluZm8iLCJsb2FkaW5nIiwiZXhwb3J0cyIsIl9pY29ucyIsIkRFRkFVTFRfRFVSQVRJT04iLCJBTklNQVRJT05fTUFSR0lOIiwidG9hc3RSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjbGFzc0xpc3QiLCJzZXRUaW1lb3V0IiwidGltZW91dCIsImNsZWFyVGltZW91dCIsImljb25zIiwicmVmIiwiSWNvbiIsImljb24iXSwic291cmNlcyI6WyIvY29kZS90cy9pbmRleC50c3giLCIvY29kZS90cy9tb2RlbC50cyIsIi9jb2RlL3RzL3RvYXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9B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