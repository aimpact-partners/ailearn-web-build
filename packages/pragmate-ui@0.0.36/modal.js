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
        hash: 1674043790,
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
            let btnLabel = typeof btn === "string" ? btn : "Confirmar";
            let cls = `beyond-alert-dialog${centered ? " beyond-alert-dialog-centered" : ""}`;
            if (props.className) cls += ` ${props.className}`;
            let clsCancel = "btn btn-default btn-cancel";
            if (btn && typeof btn === "object") {
              btnLabel = btn.label ?? btn;
              clsCancel = btn.className ?? clsCancel;
            }
            const disabled = {};
            if (state.fetching) disabled.disabled = true;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: cls
            }, _react.default.createElement("div", {
              className: "alert-dialog-content"
            }, title && _react.default.createElement("h3", {
              dangerouslySetInnerHTML: {
                __html: title
              }
            }), text && _react.default.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: text
              }
            }), props.children ? props.children : null), _react.default.createElement("div", {
              className: "actions"
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
        hash: 3727515368,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBeyondModalContext = exports.Children = exports.BeyondModalContext = void 0;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          const BeyondModalContext = (0, React.createContext)({});
          exports.BeyondModalContext = BeyondModalContext;
          const useBeyondModalContext = () => (0, React.useContext)(BeyondModalContext);
          exports.useBeyondModalContext = useBeyondModalContext;
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
            return React.createElement(BeyondModalContext.Provider, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtZQUNuQ0EsR0FBRyxJQUFJZixLQUFLLENBQUNnQixTQUFTLEdBQUdoQixLQUFLLENBQUNnQixTQUFTLEdBQUcsRUFBRTtZQUU3QyxJQUFJSyxJQUFJLEVBQUVOLEdBQUcsSUFBSSxhQUFhO1lBQzlCLE1BQU1pQixNQUFNLEdBQUcsRUFBRTtZQUVqQixJQUFJWCxJQUFJLEVBQUU7Y0FDVFcsTUFBTSxDQUFDQyxJQUFJLENBQ1Y5QjtnQkFBS2dDLEdBQUcsRUFBQyx1QkFBdUI7Z0JBQUNuQixTQUFTLEVBQUM7Y0FBZSxHQUN6RGI7Z0JBQ0NhLFNBQVMsRUFBQyxlQUFlO2dCQUN6QlUsT0FBTyxFQUFFbkIsS0FBSyxJQUFHO2tCQUNoQkEsS0FBSyxDQUFDdUMsZUFBZSxFQUFFO2dCQUN4QjtjQUFDLEdBRUQzQyxvQkFBQzJCLGtCQUFRO2dCQUFBLEdBQUs5QixLQUFLO2dCQUFFTSxLQUFLLEVBQUVBLEtBQUs7Z0JBQUU2QixHQUFHLEVBQUM7Y0FBa0IsRUFBRyxDQUN2RCxDQUNELENBQ047O1lBR0YsT0FDQ2hDO2NBQUt3RSxHQUFHLEVBQUVaLEtBQUs7Y0FBRXJDLE9BQU8sRUFBRWdELGVBQWU7Y0FBRTFELFNBQVMsRUFBRUQ7WUFBRyxHQUN2RGlCLE1BQU0sQ0FDRjtVQUVSIiwibmFtZXMiOlsiQWxlcnRNb2RhbCIsInByb3BzIiwic3RhdGUiLCJzZXRTdGF0ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsImNsb3NlIiwiZXZlbnQiLCJvbkNvbmZpcm0iLCJvbkNsb3NlIiwidGV4dCIsInRpdGxlIiwiYnRuIiwiY2VudGVyZWQiLCJidG5MYWJlbCIsImNscyIsImNsYXNzTmFtZSIsImNsc0NhbmNlbCIsImxhYmVsIiwiZGlzYWJsZWQiLCJNb2RhbCIsInNob3ciLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNoaWxkcmVuIiwiQnV0dG9uIiwib25DbGljayIsIkJleW9uZE1vZGFsQ29udGV4dCIsImV4cG9ydHMiLCJ1c2VCZXlvbmRNb2RhbENvbnRleHQiLCJDaGlsZHJlbiIsImRpc21pc3MiLCJvdXRwdXQiLCJwdXNoIiwiSWNvbkJ1dHRvbiIsImtleSIsImljb24iLCJjaGlsZHJlbldpdGhQcm9wcyIsIm1hcCIsImNoaWxkIiwic3BlY3MiLCJQcm92aWRlciIsInZhbHVlIiwiQ29uZmlybU1vZGFsIiwicHJvcGVydGllcyIsInByb2Nlc3MiLCJzdG9wUHJvcGFnYXRpb24iLCJjb25zb2xlIiwid2FybiIsIm9uQ2FuY2VsIiwiYnRuQ29uZmlybSIsImJ0bkNhbmNlbCIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwiY2FuY2VsTGFiZWwiLCJjb25maXJtTGFiZWwiLCJjbHNDb25maXJtIiwidmFyaWFudCIsImJvcmRlcmVkIiwiY2xvc2VDbGlja2VkIiwiY29udGFpbmVyIiwibW9kYWwiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJvbkNsaWNrQmFja2Ryb3AiLCJyZWYiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2FsZXJ0LnRzeCIsInRzL2NoaWxkcmVuLnRzeCIsInRzL2NvbmZpcm0udHN4IiwidHMvbW9kYWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19