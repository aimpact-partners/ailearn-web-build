System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "@beyond-js/reactive@1.2.0/model", "pragmate-ui@1.0.0-beta.1/icons"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_3 = _beyondJsReact18Widgets112Hooks;
    }, function (_beyondJsReactive120Model) {
      dependency_4 = _beyondJsReactive120Model;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_5 = _pragmateUi100Beta1Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/ailearn-app", "0.1.3-dev.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.1/toast"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['pragmate-ui/icons', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.1/toast');
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./definitions
      *****************************/
      ims.set('./definitions', {
        hash: 3587947160,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3785050156,
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
            (0, _hooks.useBinder)([_model.toast], () => setItems(_model.toast.current), 'current.toast.changed');
            const elements = items.map(item => _react.default.createElement(_toast.Toast, {
              key: item.id,
              ...item,
              className: className,
              position: position
            }));
            return _react.default.createElement("div", {
              style: position,
              className: `pui-toast__container ${className}`,
              ...props
            }, elements);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./model
      ***********************/

      ims.set('./model', {
        hash: 1270696975,
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
              this.triggerEvent('current.toast.changed');
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
              this.triggerEvent('current.toast.changed');
              return newToast.id;
            }
            remove(toastId) {
              this.#current = this.#current.filter(toast => toast.id !== toastId);
              this.triggerEvent('current.toast.changed');
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
          const toast = exports.toast = new Toast();
        }
      });

      /***********************
      INTERNAL MODULE: ./toast
      ***********************/

      ims.set('./toast', {
        hash: 655369133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Toast = Toast;
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _useToast = require("./use-toast");
          const DEFAULT_DURATION = 3000;
          /*bundle*/
          function Toast({
            type,
            message,
            duration,
            id
          }) {
            const toastRef = _react.default.useRef(null);
            duration = duration ?? DEFAULT_DURATION;
            (0, _useToast.useToastAnimation)(toastRef, duration, id);
            const icons = {
              error: 'triangle-exclamation',
              success: 'tickCircle',
              info: 'infoCircle',
              loading: 'refreshCircle',
              warning: 'warning'
            };
            return _react.default.createElement("article", {
              ref: toastRef,
              className: `toast ${type}`
            }, _react.default.createElement(_icons.Icon, {
              icon: icons[type],
              className: 'icon'
            }), _react.default.createElement("p", {
              className: 'message'
            }, message));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./use-toast
      ***************************/

      ims.set('./use-toast', {
        hash: 3446030186,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useToastAnimation = useToastAnimation;
          var _react = require("react");
          var _model = require("./model");
          const ANIMATION_MARGIN = 300;
          function useToastAnimation(ref, duration, id) {
            _react.default.useEffect(() => {
              if (ref.current) {
                ref.current.classList.add('enter');
              }
              return () => {
                if (ref.current) ref.current.classList.remove('enter');
              };
            }, [ref]);
            _react.default.useEffect(() => {
              const enterTimeout = setTimeout(() => {
                if (ref.current) {
                  ref.current.classList.remove('enter');
                  ref.current.classList.add('exit');
                }
              }, duration);
              const exitTimeout = setTimeout(() => {
                _model.toast.current = _model.toast.current.filter(item => item.id !== id);
              }, duration + ANIMATION_MARGIN);
              return () => {
                clearTimeout(enterTimeout);
                clearTimeout(exitTimeout);
              };
            }, [duration, id, ref]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9yZWFjdCIsInJlcXVpcmUiLCJfaG9va3MiLCJfbW9kZWwiLCJfdG9hc3QiLCJUb2FzdHMiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwiY2xhc3NOYW1lIiwicHJvcHMiLCJpdGVtcyIsInNldEl0ZW1zIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwidG9hc3QiLCJjdXJyZW50IiwiZWxlbWVudHMiLCJtYXAiLCJpdGVtIiwiY3JlYXRlRWxlbWVudCIsIlRvYXN0Iiwia2V5IiwiaWQiLCJzdHlsZSIsIlJlYWN0aXZlTW9kZWwiLCJuZXdWYWx1ZSIsInRyaWdnZXJFdmVudCIsImNvbnN0cnVjdG9yIiwiZ2VuZXJhdGVVbmlxdWVJZCIsIiNnZW5lcmF0ZVVuaXF1ZUlkIiwiY3J5cHRvIiwiZ2V0UmFuZG9tVmFsdWVzIiwiVWludDhBcnJheSIsInRvU3RyaW5nIiwiYWRkIiwiI2FkZCIsInR5cGUiLCJtZXNzYWdlIiwiZHVyYXRpb24iLCJuZXdUb2FzdCIsInJlbW92ZSIsInRvYXN0SWQiLCJmaWx0ZXIiLCJzdWNjZXNzIiwiZXJyb3IiLCJ3YXJuaW5nIiwiaW5mbyIsImxvYWRpbmciLCJfaWNvbnMiLCJfdXNlVG9hc3QiLCJERUZBVUxUX0RVUkFUSU9OIiwidG9hc3RSZWYiLCJ1c2VSZWYiLCJ1c2VUb2FzdEFuaW1hdGlvbiIsImljb25zIiwicmVmIiwiSWNvbiIsImljb24iLCJBTklNQVRJT05fTUFSR0lOIiwidXNlRWZmZWN0IiwiY2xhc3NMaXN0IiwiZW50ZXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImV4aXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Il0sInNvdXJjZXMiOlsiL2RlZmluaXRpb25zLnRzIiwiL3RzL2luZGV4LnRzeCIsIi90cy9tb2RlbC50cyIsIi90cy90b2FzdC50c3giLCIvdHMvdXNlLXRvYXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6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