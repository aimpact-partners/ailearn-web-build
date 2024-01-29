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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 3959393714,
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
            let cls = `pui-confirm-dialog${centered ? ' pui-confirm-dialog-centered' : ''}`;
            if (properties.className) cls += ` ${properties.className}`;
            const props = Object.assign({}, properties);
            ['text', 'title', 'className', 'centering', 'btnCancel', 'btnConfirm', 'onCancel'].forEach(prop => delete props[prop]);
            let cancelLabel = 'Cancelar';
            let confirmLabel = 'Confirmar';
            let clsCancel = 'btn btn-default btn-cancel';
            let clsConfirm = 'btn btn-primary btn-confirm';
            let variantConfirm = 'success';
            let variantCancel = "warning";
            if (btnConfirm && typeof btnConfirm === 'object') {
              confirmLabel = btnConfirm.label ? btnConfirm.label : confirmLabel;
              clsConfirm = btnConfirm.className ? btnConfirm.className : clsConfirm;
              variantConfirm = btnConfirm.variant ?? variantConfirm;
            }
            if (btnCancel && typeof btnCancel === 'object') {
              cancelLabel = btnCancel.label ? btnCancel.label : cancelLabel;
              clsCancel = btnCancel.className ? btnCancel.className : clsCancel;
              variantCancel = btnCancel.variant ?? variantCancel;
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
              variant: variantCancel
            }), _react.default.createElement(_components.Button, {
              className: clsConfirm,
              label: confirmLabel,
              ...disabled,
              onClick: process,
              variant: variantConfirm
            })));
          };
          exports.ConfirmModal = ConfirmModal;
        }
      });

      /***********************
      INTERNAL MODULE: ./modal
      ***********************/

      ims.set('./modal', {
        hash: 3255747849,
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
            let cls = 'pui-modal ';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX21vZGFsIiwiX2NvbXBvbmVudHMiLCJBbGVydE1vZGFsIiwicHJvcHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJjbG9zZSIsImV2ZW50Iiwib25Db25maXJtIiwib25DbG9zZSIsInRleHQiLCJ0aXRsZSIsImJ0biIsImNlbnRlcmVkIiwiYnRuTGFiZWwiLCJjbHMiLCJjbGFzc05hbWUiLCJjbHNDYW5jZWwiLCJsYWJlbCIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsIk1vZGFsIiwic2hvdyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY2hpbGRyZW4iLCJCdXR0b24iLCJvbkNsaWNrIiwiX2ljb25zIiwiTW9kYWxDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2hpbGRyZW4iLCJkaXNtaXNzIiwib3V0cHV0IiwicHVzaCIsIkljb25CdXR0b24iLCJrZXkiLCJpY29uIiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50Iiwic3BlY3MiLCJjbG9uZUVsZW1lbnQiLCJQcm92aWRlciIsInZhbHVlIiwiQ29uZmlybU1vZGFsIiwicHJvcGVydGllcyIsInByb2Nlc3MiLCJzdG9wUHJvcGFnYXRpb24iLCJjb25zb2xlIiwid2FybiIsIm9uQ2FuY2VsIiwiYnRuQ29uZmlybSIsImJ0bkNhbmNlbCIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwiY2FuY2VsTGFiZWwiLCJjb25maXJtTGFiZWwiLCJjbHNDb25maXJtIiwidmFyaWFudENvbmZpcm0iLCJ2YXJpYW50Q2FuY2VsIiwidmFyaWFudCIsIl9jaGlsZHJlbiIsImNsb3NlQ2xpY2tlZCIsImNvbnRhaW5lciIsIm1vZGFsIiwidXNlUmVmIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwib25DbGlja0JhY2tkcm9wIiwicmVmIl0sInNvdXJjZXMiOlsiL3RzL2FsZXJ0LnRzeCIsIi90cy9jaGlsZHJlbi50c3giLCIvdHMvY29uZmlybS50c3giLCIvdHMvbW9kYWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDTztVQUFVLFNBQ1JHLFVBQVVBLENBQUNDLEtBQUs7WUFDeEIsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHUCxNQUFBLENBQUFRLE9BQUssQ0FBQ0MsUUFBUSxDQUFDO2NBQUVDLFFBQVEsRUFBRTtZQUFLLENBQUUsQ0FBQztZQUU3RCxNQUFNQyxLQUFLLEdBQUdDLEtBQUssSUFBRztjQUNyQkwsUUFBUSxDQUFDO2dCQUFFRyxRQUFRLEVBQUU7Y0FBSSxDQUFFLENBQUM7Y0FDNUIsSUFBSUwsS0FBSyxDQUFDUSxTQUFTLEVBQUVSLEtBQUssQ0FBQ1EsU0FBUyxFQUFFO2NBQ3RDTixRQUFRLENBQUM7Z0JBQUVHLFFBQVEsRUFBRTtjQUFLLENBQUUsQ0FBQztjQUM3QixJQUFJTCxLQUFLLENBQUNTLE9BQU8sRUFBRVQsS0FBSyxDQUFDUyxPQUFPLEVBQUU7WUFDbkMsQ0FBQztZQUNELE1BQU07Y0FBRUMsSUFBSTtjQUFFQyxLQUFLO2NBQUVDLEdBQUc7Y0FBRUM7WUFBUSxDQUFFLEdBQUdiLEtBQUs7WUFDNUMsSUFBSWMsUUFBUSxHQUFXLE9BQU9GLEdBQUcsS0FBSyxRQUFRLEdBQUdBLEdBQUcsR0FB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