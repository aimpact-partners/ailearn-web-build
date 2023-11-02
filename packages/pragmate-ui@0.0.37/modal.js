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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLElBQUlmLEtBQUssQ0FBQ2dCLFNBQVMsR0FBR2hCLEtBQUssQ0FBQ2dCLFNBQVMsR0FBRyxFQUFFO1lBRTdDLElBQUlLLElBQUksRUFBRU4sR0FBRyxJQUFJLGFBQWE7WUFDOUIsTUFBTWlCLE1BQU0sR0FBRyxFQUFFO1lBRWpCLElBQUlYLElBQUksRUFBRTtjQUNUVyxNQUFNLENBQUNDLElBQUksQ0FDVjlCO2dCQUFLZ0MsR0FBRyxFQUFDLHVCQUF1QjtnQkFBQ25CLFNBQVMsRUFBQztjQUFlLEdBQ3pEYjtnQkFDQ2EsU0FBUyxFQUFDLGVBQWU7Z0JBQ3pCVSxPQUFPLEVBQUVuQixLQUFLLElBQUc7a0JBQ2hCQSxLQUFLLENBQUN1QyxlQUFlLEVBQUU7Z0JBQ3hCO2NBQUMsR0FFRDNDLG9CQUFDMkIsa0JBQVE7Z0JBQUEsR0FBSzlCLEtBQUs7Z0JBQUVNLEtBQUssRUFBRUEsS0FBSztnQkFBRTZCLEdBQUcsRUFBQztjQUFrQixFQUFHLENBQ3ZELENBQ0QsQ0FDTjs7WUFHRixPQUNDaEM7Y0FBS3dFLEdBQUcsRUFBRVosS0FBSztjQUFFckMsT0FBTyxFQUFFZ0QsZUFBZTtjQUFFMUQsU0FBUyxFQUFFRDtZQUFHLEdBQ3ZEaUIsTUFBTSxDQUNGO1VBRVIiLCJuYW1lcyI6WyJBbGVydE1vZGFsIiwicHJvcHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwiY2xvc2UiLCJldmVudCIsIm9uQ29uZmlybSIsIm9uQ2xvc2UiLCJ0ZXh0IiwidGl0bGUiLCJidG4iLCJjZW50ZXJlZCIsImJ0bkxhYmVsIiwiY2xzIiwiY2xhc3NOYW1lIiwiY2xzQ2FuY2VsIiwibGFiZWwiLCJkaXNhYmxlZCIsIk1vZGFsIiwic2hvdyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY2hpbGRyZW4iLCJCdXR0b24iLCJvbkNsaWNrIiwiTW9kYWxDb250ZXh0IiwiZXhwb3J0cyIsInVzZU1vZGFsQ29udGV4dCIsIkNoaWxkcmVuIiwiZGlzbWlzcyIsIm91dHB1dCIsInB1c2giLCJJY29uQnV0dG9uIiwia2V5IiwiaWNvbiIsImNoaWxkcmVuV2l0aFByb3BzIiwibWFwIiwiY2hpbGQiLCJzcGVjcyIsIlByb3ZpZGVyIiwidmFsdWUiLCJDb25maXJtTW9kYWwiLCJwcm9wZXJ0aWVzIiwicHJvY2VzcyIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnNvbGUiLCJ3YXJuIiwib25DYW5jZWwiLCJidG5Db25maXJtIiwiYnRuQ2FuY2VsIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsInByb3AiLCJjYW5jZWxMYWJlbCIsImNvbmZpcm1MYWJlbCIsImNsc0NvbmZpcm0iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJjbG9zZUNsaWNrZWQiLCJjb250YWluZXIiLCJtb2RhbCIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZSIsIm9uQ2xpY2tCYWNrZHJvcCIsInJlZiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvYWxlcnQudHN4IiwidHMvY2hpbGRyZW4udHN4IiwidHMvY29uZmlybS50c3giLCJ0cy9tb2RhbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=