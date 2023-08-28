System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/reactive@1.1.3/model", "pragmate-ui@0.0.36/icons"], function (_export, _context) {
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
    }, function (_beyondJsReactive113Model) {
      dependency_4 = _beyondJsReactive113Model;
    }, function (_pragmateUi0036Icons) {
      dependency_5 = _pragmateUi0036Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 182626329,
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
              ...item
            }));
            return _react.default.createElement("div", {
              style: position,
              className: `pui-toast__container`,
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
          const toast = new Toast();
          exports.toast = toast;
        }
      });

      /***********************
      INTERNAL MODULE: ./toast
      ***********************/

      ims.set('./toast', {
        hash: 2244319811,
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
                toastRef.current.classList.add('enter');
              }
              return () => {
                if (toastRef.current) toastRef.current.classList.remove('enter');
              };
            }, [toastRef.current]);
            _react.default.useEffect(() => {
              duration = duration ?? DEFAULT_DURATION;
              setTimeout(() => {
                toastRef.current.classList.remove('enter');
                toastRef.current.classList.add('exit');
              }, duration);
              const timeout = setTimeout(() => {
                _model.toast.current = _model.toast.current.filter(item => item.id !== id);
              }, duration + ANIMATION_MARGIN);
              return () => clearTimeout(timeout);
            }, [duration, id]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sQ0FBQ2tDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztjQUN2QyxDQUFDLEVBQUVqQixRQUFRLENBQUM7Y0FFWixNQUFNbUIsT0FBTyxHQUFHRCxVQUFVLENBQUMsTUFBSztnQkFDL0JyQyxZQUFLLENBQUNDLE9BQU8sR0FBR0QsWUFBSyxDQUFDQyxPQUFPLENBQUNzQixNQUFNLENBQUVuQixJQUFZLElBQUtBLElBQUksQ0FBQ0csRUFBRSxLQUFLQSxFQUFFLENBQUM7Y0FDdkUsQ0FBQyxFQUFFWSxRQUFRLEdBQUdZLGdCQUFnQixDQUFDO2NBRS9CLE9BQU8sTUFBTVEsWUFBWSxDQUFDRCxPQUFPLENBQUM7WUFDbkMsQ0FBQyxFQUFFLENBQUNuQixRQUFRLEVBQUVaLEVBQUUsQ0FBQyxDQUFDO1lBQ2xCLE1BQU1pQyxLQUFLLEdBQUc7Y0FDYmYsS0FBSyxFQUFFLHNCQUFzQjtjQUM3QkQsT0FBTyxFQUFFLFlBQVk7Y0FDckJHLElBQUksRUFBRSxZQUFZO2NBQ2xCQyxPQUFPLEVBQUUsZUFBZTtjQUN4QkYsT0FBTyxFQUFFO2FBQ1Q7WUFDRCxPQUNDNUI7Y0FBUzJDLEdBQUcsRUFBRVQsUUFBUTtjQUFFdEMsU0FBUyxFQUFFLFNBQVN1QixJQUFJO1lBQUUsR0FDakRuQiw2QkFBQzRDLFdBQUk7Y0FBQ0MsSUFBSSxFQUFFSCxLQUFLLENBQUN2QixJQUFJLENBQUM7Y0FBRXZCLFNBQVMsRUFBQztZQUFNLEVBQUcsRUFDNUNJO2NBQUdKLFNBQVMsRUFBQztZQUFTLEdBQUV3QixPQUFPLENBQUssQ0FDM0I7VUFFWiIsIm5hbWVzIjpbIlRvYXN0cyIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJjbGFzc05hbWUiLCJwcm9wcyIsIml0ZW1zIiwic2V0SXRlbXMiLCJSZWFjdCIsInVzZVN0YXRlIiwidG9hc3QiLCJjdXJyZW50IiwiZWxlbWVudHMiLCJtYXAiLCJpdGVtIiwiVG9hc3QiLCJrZXkiLCJpZCIsInN0eWxlIiwiUmVhY3RpdmVNb2RlbCIsIm5ld1ZhbHVlIiwidHJpZ2dlckV2ZW50IiwiY29uc3RydWN0b3IiLCJjcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJVaW50OEFycmF5IiwidG9TdHJpbmciLCJ0eXBlIiwibWVzc2FnZSIsImR1cmF0aW9uIiwibmV3VG9hc3QiLCJyZW1vdmUiLCJ0b2FzdElkIiwiZmlsdGVyIiwic3VjY2VzcyIsImVycm9yIiwid2FybmluZyIsImluZm8iLCJsb2FkaW5nIiwiZXhwb3J0cyIsIkRFRkFVTFRfRFVSQVRJT04iLCJBTklNQVRJT05fTUFSR0lOIiwidG9hc3RSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwidGltZW91dCIsImNsZWFyVGltZW91dCIsImljb25zIiwicmVmIiwiSWNvbiIsImljb24iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvaW5kZXgudHN4IiwiY29kZS90cy9tb2RlbC50cyIsImNvZGUvdHMvdG9hc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdfQ==