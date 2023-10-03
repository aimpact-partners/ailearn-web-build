System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.37/components", "pragmate-ui@0.0.37/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, AlertModal, ConfirmModal, Modal, __beyond_pkg, hmr;
  _export({
    AlertModal: void 0,
    ConfirmModal: void 0,
    Modal: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0037Components) {
      dependency_2 = _pragmateUi0037Components;
    }, function (_pragmateUi0037Icons) {
      dependency_3 = _pragmateUi0037Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_4 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.37/modal"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/icons', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/modal');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./alert
      ***********************/
      ims.set('./alert', {
        hash: 653241551,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AlertModal = AlertModal;
          var _react = require("react");
          var _modal = require("./modal");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function AlertModal(props) {
            const [state, setState] = _react.default.useState({
              fetching: false
            });
            const close = event => {
              setState({
                fetching: true
              });
              if (props.onConfirm) props.onConfirm();
              setState({
                fetching: false
              });
              if (props.onClose) props.onClose();
            };
            const {
              text,
              title,
              btn,
              centered
            } = props;
            let btnLabel = typeof btn === 'string' ? btn : 'Confirmar';
            let cls = `pui-alert-dialog${centered ? ' pui-alert-dialog-centered' : ''}`;
            if (props.className) cls += ` ${props.className}`;
            let clsCancel = 'btn btn-default btn-cancel';
            if (btn && typeof btn === 'object') {
              btnLabel = btn.label ?? btn;
              clsCancel = btn.className ?? clsCancel;
            }
            const disabled = {};
            if (state.fetching) disabled.disabled = true;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: cls
            }, _react.default.createElement("div", {
              className: 'alert-dialog-content'
            }, title && _react.default.createElement("h3", {
              dangerouslySetInnerHTML: {
                __html: title
              }
            }), text && _react.default.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: text
              }
            }), props.children ? props.children : null), _react.default.createElement("div", {
              className: 'actions'
            }, _react.default.createElement(_components.Button, {
              className: clsCancel,
              label: btnLabel,
              onClick: close,
              ...disabled
            })));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./children
      **************************/

      ims.set('./children', {
        hash: 3485003532,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModalContext = exports.ModalContext = exports.Children = void 0;
          var _react = require("react");
          var React = _react;
          var _icons = require("pragmate-ui/icons");
          const ModalContext = (0, _react.createContext)({});
          exports.ModalContext = ModalContext;
          const useModalContext = () => (0, _react.useContext)(ModalContext);
          exports.useModalContext = useModalContext;
          const Children = ({
            children,
            close,
            dismiss
          }) => {
            const output = [];
            if (dismiss !== false) {
              output.push(React.createElement(_icons.IconButton, {
                className: "close-icon",
                onClick: close,
                "data-dismiss": "modal",
                "aria-label": "Close",
                key: "dismiss-button",
                icon: "close"
              }));
            }
            const childrenWithProps = React.Children.map(children, child => {
              // checking isValidElement is the safe way and avoids a typescript error too
              if ((0, _react.isValidElement)(child)) {
                const specs = {};
                //TODO: check a official way to check the children type
                return (0, _react.cloneElement)(child, specs);
              }
              return child;
            });
            output.push(childrenWithProps);
            return React.createElement(ModalContext.Provider, {
              value: {
                close,
                dismiss
              }
            }, output);
          };
          exports.Children = Children;
        }
      });

      /*************************
      INTERNAL MODULE: ./confirm
      *************************/

      ims.set('./confirm', {
        hash: 3809719880,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmModal = void 0;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _modal = require("./modal");
          /*bundle*/
          const ConfirmModal = properties => {
            const [state, setState] = React.useState({
              fetching: false
            });
            const process = async event => {
              event.stopPropagation();
              setState({
                fetching: true
              });
              const {
                onConfirm,
                onClose
              } = properties;
              if (!onConfirm) {
                console.warn('there is no confirm funciton defined');
                setState({
                  fetching: false
                });
                return;
              }
              await onConfirm();
              setState({
                fetching: false
              });
            };
            const {
              text,
              title,
              btn,
              onCancel,
              centered,
              onConfirm,
              btnConfirm,
              btnCancel
            } = properties;
            let cls = `pragmate-confirm-dialog${centered ? ' pragmate-confirm-dialog-centered' : ''}`;
            if (properties.className) cls += ` ${properties.className}`;
            const props = Object.assign({}, properties);
            ['text', 'title', 'className', 'centering', 'btnCancel', 'btnConfirm', 'onCancel'].forEach(prop => delete props[prop]);
            let cancelLabel = 'Cancelar';
            let confirmLabel = 'Confirmar';
            let clsCancel = 'btn btn-default btn-cancel';
            let clsConfirm = 'btn btn-primary btn-confirm';
            if (btnConfirm && typeof btnConfirm === 'object') {
              confirmLabel = btnConfirm.label ? btnConfirm.label : btn;
              clsConfirm = btnConfirm.className ? btnConfirm.className : clsConfirm;
            }
            if (btnCancel && typeof btnCancel === 'object') {
              cancelLabel = btnCancel.label ? btnCancel.label : btn;
              clsCancel = btnCancel.className ? btnCancel.className : clsCancel;
            }
            const disabled = {};
            if (state.fetching) disabled.disabled = true;
            return React.createElement(_modal.Modal, {
              show: true,
              className: cls,
              onClose: onCancel
            }, React.createElement("div", {
              className: 'confirm-dialog-content'
            }, title && React.createElement("h3", null, title), text && React.createElement("div", null, text), properties.children), React.createElement("div", {
              className: 'actions'
            }, React.createElement(_components.Button, {
              label: cancelLabel,
              ...disabled,
              onClick: onCancel,
              variant: 'warning',
              bordered: true
            }), React.createElement(_components.Button, {
              className: clsConfirm,
              label: confirmLabel,
              ...disabled,
              onClick: process,
              variant: 'success',
              bordered: true
            })));
          };
          exports.ConfirmModal = ConfirmModal;
        }
      });

      /***********************
      INTERNAL MODULE: ./modal
      ***********************/

      ims.set('./modal', {
        hash: 866306233,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Modal = Modal;
          var _react = require("react");
          var React = _react;
          var _children = require("./children");
          /*bundle*/
          function Modal(props) {
            const [state, setState] = (0, _react.useState)({
              show: props?.show ?? false,
              closeClicked: false,
              container: null
            });
            const modal = (0, _react.useRef)(null);
            const close = async event => {
              if (event) event.stopPropagation();
              const {
                onClose
              } = props;
              const body = document.querySelector('body');
              modal.current.classList.add('modal-hidden');
              window.setTimeout(async () => {
                setState({
                  ...state,
                  show: false,
                  closeClicked: true
                });
                body.setAttribute('style', '');
                body.classList.remove('body-custom-modal-opened');
                onClose(event);
              }, 300);
            };
            const onClickBackdrop = event => {
              event.stopPropagation();
              close(event);
            };
            const show = state.show;
            let cls = 'pragmate-modal ';
            cls += props.className ? props.className : '';
            if (show) cls += ' show-modal';
            const output = [];
            if (show) {
              output.push(React.createElement("div", {
                key: "modal-content-wrapper",
                className: "modal-wrapper"
              }, React.createElement("div", {
                className: "modal-content",
                onClick: event => {
                  event.stopPropagation();
                }
              }, React.createElement(_children.Children, {
                ...props,
                close: close,
                key: "children-content"
              }))));
            }
            return React.createElement("div", {
              ref: modal,
              onClick: onClickBackdrop,
              className: cls
            }, output);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./alert",
        "from": "AlertModal",
        "name": "AlertModal"
      }, {
        "im": "./confirm",
        "from": "ConfirmModal",
        "name": "ConfirmModal"
      }, {
        "im": "./modal",
        "from": "Modal",
        "name": "Modal"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AlertModal') && _export("AlertModal", AlertModal = require ? require('./alert').AlertModal : value);
        (require || prop === 'ConfirmModal') && _export("ConfirmModal", ConfirmModal = require ? require('./confirm').ConfirmModal : value);
        (require || prop === 'Modal') && _export("Modal", Modal = require ? require('./modal').Modal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX21vZGFsIiwiX2NvbXBvbmVudHMiLCJBbGVydE1vZGFsIiwicHJvcHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJjbG9zZSIsImV2ZW50Iiwib25Db25maXJtIiwib25DbG9zZSIsInRleHQiLCJ0aXRsZSIsImJ0biIsImNlbnRlcmVkIiwiYnRuTGFiZWwiLCJjbHMiLCJjbGFzc05hbWUiLCJjbHNDYW5jZWwiLCJsYWJlbCIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsIk1vZGFsIiwic2hvdyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY2hpbGRyZW4iLCJCdXR0b24iLCJvbkNsaWNrIiwiUmVhY3QiLCJfaWNvbnMiLCJNb2RhbENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZU1vZGFsQ29udGV4dCIsInVzZUNvbnRleHQiLCJDaGlsZHJlbiIsImRpc21pc3MiLCJvdXRwdXQiLCJwdXNoIiwiSWNvbkJ1dHRvbiIsImtleSIsImljb24iLCJjaGlsZHJlbldpdGhQcm9wcyIsIm1hcCIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJzcGVjcyIsImNsb25lRWxlbWVudCIsIlByb3ZpZGVyIiwidmFsdWUiLCJDb25maXJtTW9kYWwiLCJwcm9wZXJ0aWVzIiwicHJvY2VzcyIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnNvbGUiLCJ3YXJuIiwib25DYW5jZWwiLCJidG5Db25maXJtIiwiYnRuQ2FuY2VsIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsInByb3AiLCJjYW5jZWxMYWJlbCIsImNvbmZpcm1MYWJlbCIsImNsc0NvbmZpcm0iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJfY2hpbGRyZW4iLCJjbG9zZUNsaWNrZWQiLCJjb250YWluZXIiLCJtb2RhbCIsInVzZVJlZiIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZSIsIm9uQ2xpY2tCYWNrZHJvcCIsInJlZiJdLCJzb3VyY2VzIjpbIi90cy9hbGVydC50c3giLCIvdHMvY2hpbGRyZW4udHN4IiwiL3RzL2NvbmZpcm0udHN4IiwiL3RzL21vZGFsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ087VUFBVSxTQUNSRyxVQUFVQSxDQUFDQyxLQUFLO1lBQ3hCLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1AsTUFBQSxDQUFBUSxPQUFLLENBQUNDLFFBQVEsQ0FBQztjQUFFQyxRQUFRLEVBQUU7WUFBSyxDQUFFLENBQUM7WUFFN0QsTUFBTUMsS0FBSyxHQUFHQyxLQUFLLElBQUc7Y0FDckJMLFFBQVEsQ0FBQztnQkFBRUcsUUFBUSxFQUFFO2NBQUksQ0FBRSxDQUFDO2NBQzVCLElBQUlMLEtBQUssQ0FBQ1EsU0FBUyxFQUFFUixLQUFLLENBQUNRLFNBQVMsRUFBRTtjQUN0Q04sUUFBUSxDQUFDO2dCQUFFRyxRQUFRLEVBQUU7Y0FBSyxDQUFFLENBQUM7Y0FDN0IsSUFBSUwsS0FBSyxDQUFDUyxPQUFPLEVBQUVULEtBQUssQ0FBQ1MsT0FBTyxFQUFFO1lBQ25DLENBQUM7WUFDRCxNQUFNO2NBQUVDLElBQUk7Y0FBRUMsS0FBSztjQUFFQyxHQUFHO2NBQUVDO1lBQVEsQ0FBRSxHQUFHYixLQUFLO1lBQzVDLElBQUljLFFBQVEsR0FBVyxPQUFPRixHQUFHLEtBQUssUUFBUSxHQUFHQSxHQUFHLEdBQUcsV0FBVztZQUVsRSxJ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