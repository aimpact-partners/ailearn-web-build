System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
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
    }, function (_pragmateUi003Components) {
      dependency_2 = _pragmateUi003Components;
    }, function (_pragmateUi003Icons) {
      dependency_3 = _pragmateUi003Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_4 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.3/modal"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/icons', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.3/modal');
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
        hash: 1989640400,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModalContext = exports.ModalContext = exports.Children = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          const ModalContext = exports.ModalContext = (0, _react.createContext)({});
          const useModalContext = () => (0, _react.useContext)(ModalContext);
          exports.useModalContext = useModalContext;
          const Children = ({
            children,
            close,
            dismiss
          }) => {
            const output = [];
            if (dismiss !== false) {
              output.push(_react.default.createElement(_icons.IconButton, {
                className: "close-icon",
                onClick: close,
                "data-dismiss": "modal",
                "aria-label": "Close",
                key: "dismiss-button",
                icon: "close"
              }));
            }
            const childrenWithProps = _react.default.Children.map(children, child => {
              // checking isValidElement is the safe way and avoids a typescript error too
              if ((0, _react.isValidElement)(child)) {
                const specs = {};
                //TODO: check a official way to check the children type
                return (0, _react.cloneElement)(child, specs);
              }
              return child;
            });
            output.push(childrenWithProps);
            return _react.default.createElement(ModalContext.Provider, {
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
        hash: 457223324,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmModal = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _modal = require("./modal");
          /*bundle*/
          const ConfirmModal = properties => {
            const [state, setState] = _react.default.useState({
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
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: cls,
              onClose: onCancel
            }, _react.default.createElement("div", {
              className: "confirm-dialog-content"
            }, title && _react.default.createElement("h3", null, title), text && _react.default.createElement("div", null, text), properties.children), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              label: cancelLabel,
              ...disabled,
              onClick: onCancel,
              variant: "warning",
              bordered: true
            }), _react.default.createElement(_components.Button, {
              className: clsConfirm,
              label: confirmLabel,
              ...disabled,
              onClick: process,
              variant: "success",
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
        hash: 1090963775,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Modal = Modal;
          var _react = require("react");
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
              output.push(_react.default.createElement("div", {
                key: "modal-content-wrapper",
                className: "modal-wrapper"
              }, _react.default.createElement("div", {
                className: "modal-content",
                onClick: event => {
                  event.stopPropagation();
                }
              }, _react.default.createElement(_children.Children, {
                ...props,
                close: close,
                key: "children-content"
              }))));
            }
            return _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX21vZGFsIiwiX2NvbXBvbmVudHMiLCJBbGVydE1vZGFsIiwicHJvcHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJjbG9zZSIsImV2ZW50Iiwib25Db25maXJtIiwib25DbG9zZSIsInRleHQiLCJ0aXRsZSIsImJ0biIsImNlbnRlcmVkIiwiYnRuTGFiZWwiLCJjbHMiLCJjbGFzc05hbWUiLCJjbHNDYW5jZWwiLCJsYWJlbCIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsIk1vZGFsIiwic2hvdyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY2hpbGRyZW4iLCJCdXR0b24iLCJvbkNsaWNrIiwiX2ljb25zIiwiTW9kYWxDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2hpbGRyZW4iLCJkaXNtaXNzIiwib3V0cHV0IiwicHVzaCIsIkljb25CdXR0b24iLCJrZXkiLCJpY29uIiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50Iiwic3BlY3MiLCJjbG9uZUVsZW1lbnQiLCJQcm92aWRlciIsInZhbHVlIiwiQ29uZmlybU1vZGFsIiwicHJvcGVydGllcyIsInByb2Nlc3MiLCJzdG9wUHJvcGFnYXRpb24iLCJjb25zb2xlIiwid2FybiIsIm9uQ2FuY2VsIiwiYnRuQ29uZmlybSIsImJ0bkNhbmNlbCIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwiY2FuY2VsTGFiZWwiLCJjb25maXJtTGFiZWwiLCJjbHNDb25maXJtIiwidmFyaWFudCIsImJvcmRlcmVkIiwiX2NoaWxkcmVuIiwiY2xvc2VDbGlja2VkIiwiY29udGFpbmVyIiwibW9kYWwiLCJ1c2VSZWYiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJvbkNsaWNrQmFja2Ryb3AiLCJyZWYiXSwic291cmNlcyI6WyIvdHMvYWxlcnQudHN4IiwiL3RzL2NoaWxkcmVuLnRzeCIsIi90cy9jb25maXJtLnRzeCIsIi90cy9tb2RhbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNPO1VBQVUsU0FDUkcsVUFBVUEsQ0FBQ0MsS0FBSztZQUN4QixNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdQLE1BQUEsQ0FBQVEsT0FBSyxDQUFDQyxRQUFRLENBQUM7Y0FBRUMsUUFBUSxFQUFFO1lBQUssQ0FBRSxDQUFDO1lBRTdELE1BQU1DLEtBQUssR0FBR0MsS0FBSyxJQUFHO2NBQ3JCTCxRQUFRLENBQUM7Z0JBQUVHLFFBQVEsRUFBRTtjQUFJLENBQUUsQ0FBQztjQUM1QixJQUFJTCxLQUFLLENBQUNRLFNBQVMsRUFBRVIsS0FBSyxDQUFDUSxTQUFTLEVBQUU7Y0FDdENOLFFBQVEsQ0FBQztnQkFBRUcsUUFBUSxFQUFFO2NBQUssQ0FBRSxDQUFDO2NBQzdCLElBQUlMLEtBQUssQ0FBQ1MsT0FBTyxFQUFFVCxLQUFLLENBQUNTLE9BQU8sRUFBRTtZQUNuQyxDQUFDO1lBQ0QsTUFBTTtjQUFFQyxJQUFJO2NBQUVDLEtBQUs7Y0FBRUMsR0FBRztjQUFFQztZQUFRLENBQUUsR0FBR2IsS0FBSztZQUM1QyxJQUFJYyxRQUFRLEdBQVcsT0FBT0YsR0FBRyxLQUFLLFFBQVEsR0FBR0EsR0FBRyxHQUFHLFdBQVc7WUFFbEUsSUFBSUcsR0FB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