System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/reactive@1.1.6/model", "pragmate-ui@0.0.36/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Toasts, ToastTypes, IToast, toast, Toast, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_2 = _beyondJsReact18Widgets101Hooks;
    }, function (_beyondJsReactive116Model) {
      dependency_3 = _beyondJsReactive116Model;
    }, function (_pragmateUi0036Icons) {
      dependency_4 = _pragmateUi0036Icons;
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
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/react-18-widgets/hooks', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['pragmate-ui/icons', dependency_4]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBQ0E7VUFDQTtVQWNPO1VBQVUsU0FBVUEsTUFBTSxDQUFDO1lBQ2pDQyxRQUFRLEdBQUc7Y0FBRUMsTUFBTSxFQUFFLE1BQU07Y0FBRUMsS0FBSyxFQUFFO1lBQU0sQ0FBRTtZQUM1Q0MsU0FBUztZQUNULEdBQUdDO1VBQUssQ0FDUTtZQUNoQixNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdDLGNBQUssQ0FBQ0MsUUFBUSxDQUE0QixFQUFFLENBQUM7WUFFdkUsb0JBQVMsRUFBQyxDQUFDQyxZQUFLLENBQUMsRUFBRSxNQUFNSCxRQUFRLENBQUNHLFlBQUssQ0FBQ0MsT0FBTyxDQUFDLEVBQUUsdUJBQXVCLENBQUM7WUFFMUUsTUFBTUMsUUFBUSxHQUFHTixLQUFLLENBQUNPLEdBQUcsQ0FBRUMsSUFBWSxJQUFLTiw2QkFBQ08sWUFBSztjQUFDQyxHQUFHLEVBQUVGLElBQUksQ0FBQ0csRUFBRTtjQUFBLEdBQU1IO1lBQUksRUFBSSxDQUFDO1lBRS9FLE9BQ0NOO2NBQUtVLEtBQUssRUFBRWpCLFFBQVE7Y0FBRUcsU0FBUyxFQUFFLHNCQUFzQjtjQUFBLEdBQU1DO1lBQUssR0FDaEVPLFFBQVEsQ0FDSjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDQTtVQVVBLE1BQU1HLEtBQU0sU0FBUUksb0JBQWtCO1lBQ3JDLFFBQVE7WUFFUixJQUFJUixPQUFPO2NBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUTtZQUNyQjtZQUVBLElBQUlBLE9BQU8sQ0FBQ1MsUUFBbUM7Y0FDOUMsSUFBSSxDQUFDLFFBQVEsR0FBR0EsUUFBUTtjQUN4QixJQUFJLENBQUNDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQztZQUMzQztZQUVBQztjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRTtZQUNuQjtZQUNBLGlCQUFpQjtjQUNoQixPQUFPQyxNQUFNLENBQUNDLGVBQWUsQ0FBQyxJQUFJQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxFQUFFO1lBQzdEO1lBQ0EsSUFBSSxDQUFDQyxJQUFnQixFQUFFQyxPQUFlLEVBQUVDLFFBQWdCO2NBQ3ZELE1BQU1DLFFBQVEsR0FBVztnQkFDeEJiLEVBQUUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzVCVyxPQUFPO2dCQUNQRCxJQUFJO2dCQUNKRTtlQUNBO2NBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRUMsUUFBUSxDQUFDO2NBQzVDLElBQUksQ0FBQ1QsWUFBWSxDQUFDLHVCQUF1QixDQUFDO2NBQzFDLE9BQU9TLFFBQVEsQ0FBQ2IsRUFBRTtZQUNuQjtZQUVBYyxNQUFNLENBQUNDLE9BQWU7Y0FDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDQyxNQUFNLENBQUV2QixLQUFhLElBQUtBLEtBQUssQ0FBQ08sRUFBRSxLQUFLZSxPQUFPLENBQUM7Y0FDN0UsSUFBSSxDQUFDWCxZQUFZLENBQUMsdUJBQXVCLENBQUM7WUFDM0M7WUFFQWEsT0FBTyxDQUFDTixPQUFlLEVBQUVDLFFBQWlCO2NBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUVELE9BQU8sRUFBRUMsUUFBUSxDQUFDO1lBQy9DO1lBRUFNLEtBQUssQ0FBQ1AsT0FBZSxFQUFFQyxRQUFpQjtjQUN2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFRCxPQUFPLEVBQUVDLFFBQVEsQ0FBQztZQUM3QztZQUVBTyxPQUFPLENBQUNSLE9BQWUsRUFBRUMsUUFBaUI7Y0FDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRUQsT0FBTyxFQUFFQyxRQUFRLENBQUM7WUFDL0M7WUFFQVEsSUFBSSxDQUFDVCxPQUFlLEVBQUVDLFFBQWlCO2NBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUVELE9BQU8sRUFBRUMsUUFBUSxDQUFDO1lBQzVDO1lBRUFTLE9BQU8sQ0FBQ1YsT0FBZSxFQUFFQyxRQUFpQjtjQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFRCxPQUFPLEVBQUVDLFFBQVEsQ0FBQztZQUMvQzs7VUFHTTtVQUFXLE1BQU1uQixLQUFLLEdBQUcsSUFBSUssS0FBSyxFQUFFO1VBQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwRTVDO1VBQ0E7VUFDQTtVQVNBLE1BQU1DLGdCQUFnQixHQUFHLElBQUk7VUFDN0IsTUFBTUMsZ0JBQWdCLEdBQUcsR0FBRztVQUVyQjtVQUFVLFNBQVUxQixLQUFLLENBQUM7WUFBRVksSUFBSTtZQUFFQyxPQUFPO1lBQUVDLFFBQVE7WUFBRVo7VUFBRSxDQUFTO1lBQ3RFLE1BQU15QixRQUFRLEdBQUdsQyxjQUFLLENBQUNtQyxNQUFNLENBQWlCLElBQUksQ0FBQztZQUVuRG5DLGNBQUssQ0FBQ29DLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUlGLFFBQVEsQ0FBQy9CLE9BQU8sRUFBRTtnQkFDckIrQixRQUFRLENBQUMvQixPQUFPLENBQUNrQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7O2NBRXhDLE9BQU8sTUFBSztnQkFDWCxJQUFJSixRQUFRLENBQUMvQixPQUFPLEVBQUUrQixRQUFRLENBQUMvQixPQUFPLENBQUNrQyxTQUFTLENBQUNkLE1BQU0sQ0FBQyxPQUFPLENBQUM7Y0FDakUsQ0FBQztZQUNGLENBQUMsRUFBRSxDQUFDVyxRQUFRLENBQUMvQixPQUFPLENBQUMsQ0FBQztZQUV0QkgsY0FBSyxDQUFDb0MsU0FBUyxDQUFDLE1BQUs7Y0FDcEJmLFFBQVEsR0FBR0EsUUFBUSxJQUFJVyxnQkFBZ0I7Y0FFdkNPLFVBQVUsQ0FBQyxNQUFLO2dCQUNmTCxRQUFRLENBQUMvQixPQUFPLENBQUNrQyxTQUFTLENBQUNkLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQzFDVyxRQUFRLENBQUMvQixPQUFPLENBQUNrQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Y0FDdkMsQ0FBQyxFQUFFakIsUUFBUSxDQUFDO2NBRVosTUFBTW1CLE9BQU8sR0FBR0QsVUFBVSxDQUFDLE1BQUs7Z0JBQy9CckMsWUFBSyxDQUFDQyxPQUFPLEdBQUdELFlBQUssQ0FBQ0MsT0FBTyxDQUFDc0IsTUFBTSxDQUFFbkIsSUFBWSxJQUFLQSxJQUFJLENBQUNHLEVBQUUsS0FBS0EsRUFBRSxDQUFDO2NBQ3ZFLENBQUMsRUFBRVksUUFBUSxHQUFHWSxnQkFBZ0IsQ0FBQztjQUUvQixPQUFPLE1BQU1RLFlBQVksQ0FBQ0QsT0FBTyxDQUFDO1lBQ25DLENBQUMsRUFBRSxDQUFDbkIsUUFBUSxFQUFFWixFQUFFLENBQUMsQ0FBQztZQUNsQixNQUFNaUMsS0FBSyxHQUFHO2NBQ2JmLEtBQUssRUFBRSxzQkFBc0I7Y0FDN0JELE9BQU8sRUFBRSxZQUFZO2NBQ3JCRyxJQUFJLEVBQUUsWUFBWTtjQUNsQkMsT0FBTyxFQUFFLGVBQWU7Y0FDeEJGLE9BQU8sRUFBRTthQUNUO1lBQ0QsT0FDQzVCO2NBQVMyQyxHQUFHLEVBQUVULFFBQVE7Y0FBRXRDLFNBQVMsRUFBRSxTQUFTdUIsSUFBSTtZQUFFLEdBQ2pEbkIsNkJBQUM0QyxXQUFJO2NBQUNDLElBQUksRUFBRUgsS0FBSyxDQUFDdkIsSUFBSSxDQUFDO2NBQUV2QixTQUFTLEVBQUM7WUFBTSxFQUFHLEVBQzVDSTtjQUFHSixTQUFTLEVBQUM7WUFBUyxHQUFFd0IsT0FBTyxDQUFLLENBQzNCO1VBRVoiLCJuYW1lcyI6WyJUb2FzdHMiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwiY2xhc3NOYW1lIiwicHJvcHMiLCJpdGVtcyIsInNldEl0ZW1zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInRvYXN0IiwiY3VycmVudCIsImVsZW1lbnRzIiwibWFwIiwiaXRlbSIsIlRvYXN0Iiwia2V5IiwiaWQiLCJzdHlsZSIsIlJlYWN0aXZlTW9kZWwiLCJuZXdWYWx1ZSIsInRyaWdnZXJFdmVudCIsImNvbnN0cnVjdG9yIiwiY3J5cHRvIiwiZ2V0UmFuZG9tVmFsdWVzIiwiVWludDhBcnJheSIsInRvU3RyaW5nIiwidHlwZSIsIm1lc3NhZ2UiLCJkdXJhdGlvbiIsIm5ld1RvYXN0IiwicmVtb3ZlIiwidG9hc3RJZCIsImZpbHRlciIsInN1Y2Nlc3MiLCJlcnJvciIsIndhcm5pbmciLCJpbmZvIiwibG9hZGluZyIsImV4cG9ydHMiLCJERUZBVUxUX0RVUkFUSU9OIiwiQU5JTUFUSU9OX01BUkdJTiIsInRvYXN0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJpY29ucyIsInJlZiIsIkljb24iLCJpY29uIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2luZGV4LnRzeCIsImNvZGUvdHMvbW9kZWwudHMiLCJjb2RlL3RzL3RvYXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXX0=