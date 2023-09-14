System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
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
    }, function (_pragmateUi0036Form) {
      dependency_2 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_4 = _beyondJsKernel019Styles;
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
          "vspecifier": "pragmate-ui@0.0.36/modal"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/form', dependency_2], ['pragmate-ui/icons', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/modal');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./alert
      ***********************/
      ims.set('./alert', {
        hash: 1066568466,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AlertModal = AlertModal;
          var _react = require("react");
          var _modal = require("./modal");
          var _form = require("pragmate-ui/form");
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
            }, _react.default.createElement(_form.Button, {
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
        hash: 1628170100,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModalContext = exports.ModalContext = exports.Children = void 0;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          const ModalContext = (0, React.createContext)({});
          exports.ModalContext = ModalContext;
          const useModalContext = () => (0, React.useContext)(ModalContext);
          exports.useModalContext = useModalContext;
          const Children = ({
            children,
            close,
            dismiss
          }) => {
            const output = [];
            if (dismiss !== false) {
              output.push(React.createElement(_icons.IconButton, {
                className: 'close-icon',
                onClick: close,
                "data-dismiss": 'modal',
                "aria-label": 'Close',
                key: 'dismiss-button',
                icon: 'close'
              }));
            }
            const childrenWithProps = React.Children.map(children, child => {
              // checking isValidElement is the safe way and avoids a typescript error too
              if ((0, React.isValidElement)(child)) {
                const specs = {};
                //TODO: check a official way to check the children type
                return (0, React.cloneElement)(child, specs);
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
        hash: 1394277312,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmModal = void 0;
          var React = require("react");
          var _form = require("pragmate-ui/form");
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
                console.warn("there is no confirm funciton defined");
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
            let cls = `pragmate-confirm-dialog${centered ? " pragmate-confirm-dialog-centered" : ""}`;
            if (properties.className) cls += ` ${properties.className}`;
            const props = Object.assign({}, properties);
            ["text", "title", "className", "centering", "btnCancel", "btnConfirm", "onCancel"].forEach(prop => delete props[prop]);
            let cancelLabel = "Cancelar";
            let confirmLabel = "Confirmar";
            let clsCancel = "btn btn-default btn-cancel";
            let clsConfirm = "btn btn-primary btn-confirm";
            if (btnConfirm && typeof btnConfirm === "object") {
              confirmLabel = btnConfirm.label ? btnConfirm.label : btn;
              clsConfirm = btnConfirm.className ? btnConfirm.className : clsConfirm;
            }
            if (btnCancel && typeof btnCancel === "object") {
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
              className: "confirm-dialog-content"
            }, title && React.createElement("h3", null, title), text && React.createElement("div", null, text), properties.children), React.createElement("div", {
              className: "actions"
            }, React.createElement(_form.Button, {
              label: cancelLabel,
              ...disabled,
              onClick: onCancel,
              variant: "warning",
              bordered: "true"
            }), React.createElement(_form.Button, {
              className: clsConfirm,
              label: confirmLabel,
              ...disabled,
              onClick: process,
              variant: "success",
              bordered: "true"
            })));
          };
          exports.ConfirmModal = ConfirmModal;
        }
      });

      /***********************
      INTERNAL MODULE: ./modal
      ***********************/

      ims.set('./modal', {
        hash: 1257089891,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Modal = Modal;
          var React = require("react");
          var _children = require("./children");
          /*bundle*/
          function Modal(props) {
            const [state, setState] = (0, React.useState)({
              show: props?.show ?? false,
              closeClicked: false,
              container: null
            });
            const modal = (0, React.useRef)(null);
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
                key: 'modal-content-wrapper',
                className: 'modal-wrapper'
              }, React.createElement("div", {
                className: 'modal-content',
                onClick: event => {
                  event.stopPropagation();
                }
              }, React.createElement(_children.Children, {
                ...props,
                close: close,
                key: 'children-content'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsSUFBSWYsS0FBSyxDQUFDZ0IsU0FBUyxHQUFHaEIsS0FBSyxDQUFDZ0IsU0FBUyxHQUFHLEVBQUU7WUFFN0MsSUFBSUssSUFBSSxFQUFFTixHQUFHLElBQUksYUFBYTtZQUM5QixNQUFNaUIsTUFBTSxHQUFHLEVBQUU7WUFFakIsSUFBSVgsSUFBSSxFQUFFO2NBQ1RXLE1BQU0sQ0FBQ0MsSUFBSSxDQUNWOUI7Z0JBQUtnQyxHQUFHLEVBQUMsdUJBQXVCO2dCQUFDbkIsU0FBUyxFQUFDO2NBQWUsR0FDekRiO2dCQUNDYSxTQUFTLEVBQUMsZUFBZTtnQkFDekJVLE9BQU8sRUFBRW5CLEtBQUssSUFBRztrQkFDaEJBLEtBQUssQ0FBQ3VDLGVBQWUsRUFBRTtnQkFDeEI7Y0FBQyxHQUVEM0Msb0JBQUMyQixrQkFBUTtnQkFBQSxHQUFLOUIsS0FBSztnQkFBRU0sS0FBSyxFQUFFQSxLQUFLO2dCQUFFNkIsR0FBRyxFQUFDO2NBQWtCLEVBQUcsQ0FDdkQsQ0FDRCxDQUNOOztZQUdGLE9BQ0NoQztjQUFLd0UsR0FBRyxFQUFFWixLQUFLO2NBQUVyQyxPQUFPLEVBQUVnRCxlQUFlO2NBQUUxRCxTQUFTLEVBQUVEO1lBQUcsR0FDdkRpQixNQUFNLENBQ0Y7VUFFUiIsIm5hbWVzIjpbIkFsZXJ0TW9kYWwiLCJwcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJSZWFjdCIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJjbG9zZSIsImV2ZW50Iiwib25Db25maXJtIiwib25DbG9zZSIsInRleHQiLCJ0aXRsZSIsImJ0biIsImNlbnRlcmVkIiwiYnRuTGFiZWwiLCJjbHMiLCJjbGFzc05hbWUiLCJjbHNDYW5jZWwiLCJsYWJlbCIsImRpc2FibGVkIiwiTW9kYWwiLCJzaG93IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjaGlsZHJlbiIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJNb2RhbENvbnRleHQiLCJleHBvcnRzIiwidXNlTW9kYWxDb250ZXh0IiwiQ2hpbGRyZW4iLCJkaXNtaXNzIiwib3V0cHV0IiwicHVzaCIsIkljb25CdXR0b24iLCJrZXkiLCJpY29uIiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJtYXAiLCJjaGlsZCIsInNwZWNzIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIkNvbmZpcm1Nb2RhbCIsInByb3BlcnRpZXMiLCJwcm9jZXNzIiwic3RvcFByb3BhZ2F0aW9uIiwiY29uc29sZSIsIndhcm4iLCJvbkNhbmNlbCIsImJ0bkNvbmZpcm0iLCJidG5DYW5jZWwiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JFYWNoIiwicHJvcCIsImNhbmNlbExhYmVsIiwiY29uZmlybUxhYmVsIiwiY2xzQ29uZmlybSIsInZhcmlhbnQiLCJib3JkZXJlZCIsImNsb3NlQ2xpY2tlZCIsImNvbnRhaW5lciIsIm1vZGFsIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwib25DbGlja0JhY2tkcm9wIiwicmVmIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9hbGVydC50c3giLCJ0cy9jaGlsZHJlbi50c3giLCJ0cy9jb25maXJtLnRzeCIsInRzL21vZGFsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdfQ==