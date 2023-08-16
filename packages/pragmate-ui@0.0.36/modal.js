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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.6.1"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.5"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/modal"
        },
        "type": "code",
        "name": "modal"
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
        hash: 283074475,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX21vZGFsIiwiX2Zvcm0iLCJBbGVydE1vZGFsIiwicHJvcHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJjbG9zZSIsImV2ZW50Iiwib25Db25maXJtIiwib25DbG9zZSIsInRleHQiLCJ0aXRsZSIsImJ0biIsImNlbnRlcmVkIiwiYnRuTGFiZWwiLCJjbHMiLCJjbGFzc05hbWUiLCJjbHNDYW5jZWwiLCJsYWJlbCIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsIk1vZGFsIiwic2hvdyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY2hpbGRyZW4iLCJCdXR0b24iLCJvbkNsaWNrIiwiUmVhY3QiLCJfaWNvbnMiLCJCZXlvbmRNb2RhbENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZUJleW9uZE1vZGFsQ29udGV4dCIsInVzZUNvbnRleHQiLCJDaGlsZHJlbiIsImRpc21pc3MiLCJvdXRwdXQiLCJwdXNoIiwiSWNvbkJ1dHRvbiIsImtleSIsImljb24iLCJjaGlsZHJlbldpdGhQcm9wcyIsIm1hcCIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJzcGVjcyIsImNsb25lRWxlbWVudCIsIlByb3ZpZGVyIiwidmFsdWUiLCJDb25maXJtTW9kYWwiLCJwcm9wZXJ0aWVzIiwicHJvY2VzcyIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnNvbGUiLCJ3YXJuIiwib25DYW5jZWwiLCJidG5Db25maXJtIiwiYnRuQ2FuY2VsIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsInByb3AiLCJjYW5jZWxMYWJlbCIsImNvbmZpcm1MYWJlbCIsImNsc0NvbmZpcm0iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJfY2hpbGRyZW4iLCJjbG9zZUNsaWNrZWQiLCJjb250YWluZXIiLCJtb2RhbCIsInVzZVJlZiIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZSIsIm9uQ2xpY2tCYWNrZHJvcCIsInJlZiJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2FsZXJ0LnRzeCIsIi9jb2RlL3RzL2NoaWxkcmVuLnRzeCIsIi9jb2RlL3RzL2NvbmZpcm0udHN4IiwiL2NvZGUvdHMvbW9kYWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ087VUFBVSxTQUNSRyxVQUFVQSxDQUFDQyxLQUFLO1lBQ3ZCLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1AsTUFBQSxDQUFBUSxPQUFLLENBQUNDLFFBQVEsQ0FBQztjQUFFQyxRQUFRLEVBQUU7WUFBSyxDQUFFLENBQUM7WUFFN0QsTUFBTUMsS0FBSyxHQUFJQyxLQUFLLElBQUk7Y0FDdEJMLFFBQVEsQ0FBQztnQkFBRUcsUUFBUSxFQUFFO2NBQUksQ0FBRSxDQUFDO2NBQzVCLElBQUlMLEtBQUssQ0FBQ1EsU0FBUyxFQUFFUixLQUFLLENBQUNRLFNBQVMsRUFBRTtjQUN0Q04sUUFBUSxDQUFDO2dCQUFFRyxRQUFRLEVBQUU7Y0FBSyxDQUFFLENBQUM7Y0FDN0IsSUFBSUwsS0FBSyxDQUFDUyxPQUFPLEVBQUVULEtBQUssQ0FBQ1MsT0FBTyxFQUFFO1lBQ3BDLENBQUM7WUFDRCxNQUFNO2NBQUVDLElBQUk7Y0FBRUMsS0FBSztjQUFFQyxHQUFHO2NBQUVDO1lBQVEsQ0FBRSxHQUFHYixLQUFLO1lBQzVDLElBQUljLFFBQVEsR0FBVyxPQUFPRixHQUFHLEtBQUssUUFBUSxHQUFHQSxHQUFHLEdBQUcsV0FBVztZQUVsRSxJQUFJRyxHQUFHLEdBQVcsc0JBQ2hCRixRQUFRLEdBQUcsK0JBQStCLEdBQUcsRUFDL0MsRUFBRTtZQUNGLElBQUliLEtBQUssQ0FBQ2dCLFNBQVMsRUFBRUQsR0FBRyxJQUFJLElBQUlmLEtBQUssQ0FBQ2dCLFNBQVMsRUFBRTtZQUNqRCxJQUFJQyxTQUFTLEdBQVcsNEJBQTRCO1lBRXBELElBQUlMLEdBQUcsSUFBSSxPQUFPQSxHQUFHLEtBQUssUUFBUSxFQUFFO2NBQ2xDRSxRQUFRLEdBQUdGLEdBQUcsQ0FBQ00sS0FBSyxJQUFJTixHQUFHO2NBQzNCSyxTQUFTLEdBQUdMLEdBQUcsQ0FBQ0ksU0FBUyxJQUFJQyxTQUFTOztZQUd4QyxNQUFNRSxRQUFRLEdBQTJCLEVBQUU7WUFDM0MsSUFBSWxCLEtBQUssQ0FBQ0ksUUFBUSxFQUFFYyxRQUFRLENBQUNBLFFBQVEsR0FBRyxJQUFJO1lBRTVDLE9BQ0V4QixNQUFBLENBQUFRLE9BQUEsQ0FBQWlCLGFBQUEsQ0FBQ3ZCLE1BQUEsQ0FBQXdCLEtBQUs7Y0FBQ0MsSUFBSTtjQUFDTixTQUFTLEVBQUVEO1lBQUcsR0FDeEJwQixNQUFBLENBQUFRLE9BQUEsQ0FBQWlCLGFBQUE7Y0FBS0osU0FBUyxFQUFDO1lBQXNCLEdBQ2xDTCxLQUFLLElBQUloQixNQUFBLENBQUFRLE9BQUEsQ0FBQWlCLGFBQUE7Y0FBSUcsdUJBQXVCLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRWI7Y0FBSztZQUFFLEVBQUksRUFDM0RELElBQUksSUFBSWYsTUFBQSxDQUFBUSxPQUFBLENBQUFpQixhQUFBO2NBQUtHLHVCQUF1QixFQUFFO2dCQUFFQyxNQUFNLEVBQUVkO2NBQUk7WUFBRSxFQUFJLEVBQzFEVixLQUFLLENBQUN5QixRQUFRLEdBQUd6QixLQUFLLENBQUN5QixRQUFRLEdBQUcsSUFBSSxDQUNuQyxFQUVOOUIsTUFBQSxDQUFBUSxPQUFBLENBQUFpQixhQUFBO2NBQUtKLFNBQVMsRUFBQztZQUFTLEdBQ3RCckIsTUFBQSxDQUFBUSxPQUFBLENBQUFpQixhQUFBLENBQUN0QixLQUFBLENBQUE0QixNQUFNO2NBQ0xWLFNBQVMsRUFBRUMsU0FBUztjQUNwQkMsS0FBSyxFQUFFSixRQUFRO2NBQ2ZhLE9BQU8sRUFBRXJCLEtBQUs7Y0FBQSxHQUNWYTtZQUFRLEVBQ1osQ0FDRSxDQUNBO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaERBLElBQUFTLEtBQUEsR0FBQWhDLE9BQUE7VUFVQSxJQUFBaUMsTUFBQSxHQUFBakMsT0FBQTtVQUNPLE1BQU1rQyxrQkFBa0IsR0FBaUIsSUFBQUYsS0FBQSxDQUFBRyxhQUFhLEVBQUMsRUFBRSxDQUFDO1VBQUNDLE9BQUEsQ0FBQUYsa0JBQUEsR0FBQUEsa0JBQUE7VUFDM0QsTUFBTUcscUJBQXFCLEdBQUdBLENBQUEsS0FBTSxJQUFBTCxLQUFBLENBQUFNLFVBQVUsRUFBQ0osa0JBQWtCLENBQUM7VUFBQ0UsT0FBQSxDQUFBQyxxQkFBQSxHQUFBQSxxQkFBQTtVQU9uRSxNQUFNRSxRQUFRLEdBQUdBLENBQUM7WUFBRVYsUUFBUTtZQUFFbkIsS0FBSztZQUFFOEI7VUFBTyxDQUFTLEtBQWlCO1lBQzNFLE1BQU1DLE1BQU0sR0FBRyxFQUFFO1lBQ2pCLElBQUlELE9BQU8sS0FBSyxLQUFLLEVBQUU7Y0FDckJDLE1BQU0sQ0FBQ0MsSUFBSSxDQUNUVixLQUFBLENBQUFSLGFBQUEsQ0FBQ1MsTUFBQSxDQUFBVSxVQUFVO2dCQUNUdkIsU0FBUyxFQUFDLFlBQVk7Z0JBQ3RCVyxPQUFPLEVBQUVyQixLQUFLO2dCQUFBLGdCQUNELE9BQU87Z0JBQUEsY0FDVCxPQUFPO2dCQUNsQmtDLEdBQUcsRUFBQyxnQkFBZ0I7Z0JBQ3BCQyxJQUFJLEVBQUM7Y0FBTyxFQUNaLENBQ0g7O1lBRUgsTUFBTUMsaUJBQWlCLEdBQUdkLEtBQUssQ0FBQ08sUUFBUSxDQUFDUSxHQUFHLENBQUNsQixRQUFRLEVBQUdtQixLQUFLLElBQUk7Y0FDL0Q7Y0FDQSxJQUFJLElBQUFoQixLQUFBLENBQUFpQixjQUFjLEVBQUNELEtBQUssQ0FBQyxFQUFFO2dCQUN6QixNQUFNRSxLQUFLLEdBQUcsRUFBRTtnQkFDaEI7Z0JBQ0EsT0FBTyxJQUFBbEIsS0FBQSxDQUFBbUIsWUFBWSxFQUFDSCxLQUFLLEVBQUVFLEtBQUssQ0FBQzs7Y0FFbkMsT0FBT0YsS0FBSztZQUNkLENBQUMsQ0FBQztZQUNGUCxNQUFNLENBQUNDLElBQUksQ0FBQ0ksaUJBQWlCLENBQUM7WUFDOUIsT0FDRWQsS0FBQSxDQUFBUixhQUFBLENBQUNVLGtCQUFrQixDQUFDa0IsUUFBUTtjQUMxQkMsS0FBSyxFQUFFO2dCQUNMM0MsS0FBSztnQkFDTDhCOztZQUNELEdBRUFDLE1BQU0sQ0FDcUI7VUFFbEMsQ0FBQztVQUFDTCxPQUFBLENBQUFHLFFBQUEsR0FBQUEsUUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREYsSUFBQVAsS0FBQSxHQUFBaEMsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVcsTUFBTXNELFlBQVksR0FBSUMsVUFBVSxJQUFpQjtZQUlqRSxNQUFNLENBQUNsRCxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHMEIsS0FBSyxDQUFDeEIsUUFBUSxDQUFRO2NBQUVDLFFBQVEsRUFBRTtZQUFLLENBQUUsQ0FBQztZQUVwRSxNQUFNK0MsT0FBTyxHQUFHLE1BQU83QyxLQUFLLElBQW1CO2NBQzdDQSxLQUFLLENBQUM4QyxlQUFlLEVBQUU7Y0FDdkJuRCxRQUFRLENBQUM7Z0JBQUVHLFFBQVEsRUFBRTtjQUFJLENBQUUsQ0FBQztjQUM1QixNQUFNO2dCQUFFRyxTQUFTO2dCQUFFQztjQUFPLENBQUUsR0FBRzBDLFVBQVU7Y0FDekMsSUFBSSxDQUFDM0MsU0FBUyxFQUFFO2dCQUNkOEMsT0FBTyxDQUFDQyxJQUFJLENBQUMsc0NBQXNDLENBQUM7Z0JBQ3BEckQsUUFBUSxDQUFDO2tCQUFFRyxRQUFRLEVBQUU7Z0JBQUssQ0FBRSxDQUFDO2dCQUM3Qjs7Y0FFRixNQUFNRyxTQUFTLEVBQUU7Y0FDakJOLFFBQVEsQ0FBQztnQkFBRUcsUUFBUSxFQUFFO2NBQUssQ0FBRSxDQUFDO1lBQy9CLENBQUM7WUFFRCxNQUFNO2NBQ0pLLElBQUk7Y0FDSkMsS0FBSztjQUNMQyxHQUFHO2NBQ0g0QyxRQUFRO2NBQ1IzQyxRQUFRO2NBQ1JMLFNBQVM7Y0FDVGlELFVBQVU7Y0FDVkM7WUFBUyxDQUNWLEdBQUdQLFVBQVU7WUFFZCxJQUFJcEMsR0FBRyxHQUFXLDBCQUNoQkYsUUFBUSxHQUFHLG1DQUFtQyxHQUFHLEVBQ25ELEVBQUU7WUFDRixJQUFJc0MsVUFBVSxDQUFDbkMsU0FBUyxFQUFFRCxHQUFHLElBQUksSUFBSW9DLFVBQVUsQ0FBQ25DLFNBQVMsRUFBRTtZQUUzRCxNQUFNaEIsS0FBSyxHQUFHMkQsTUFBTSxDQUFDQyxNQUFNLENBQUMsRUFBRSxFQUFFVCxVQUFVLENBQUM7WUFFM0MsQ0FDRSxNQUFNLEVBQ04sT0FBTyxFQUNQLFdBQVcsRUFDWCxXQUFXLEVBQ1gsV0FBVyxFQUNYLFlBQVksRUFDWixVQUFVLENBQ1gsQ0FBQ1UsT0FBTyxDQUFFQyxJQUFJLElBQUssT0FBTzlELEtBQUssQ0FBQzhELElBQUksQ0FBQyxDQUFDO1lBRXZDLElBQUlDLFdBQVcsR0FBVyxVQUFVO1lBQ3BDLElBQUlDLFlBQVksR0FBVyxXQUFXO1lBQ3RDLElBQUkvQyxTQUFTLEdBQVcsNEJBQTRCO1lBQ3BELElBQUlnRCxVQUFVLEdBQVcsNkJBQTZCO1lBRXRELElBQUlSLFVBQVUsSUFBSSxPQUFPQSxVQUFVLEtBQUssUUFBUSxFQUFFO2NBQ2hETyxZQUFZLEdBQUdQLFVBQVUsQ0FBQ3ZDLEtBQUssR0FBR3VDLFVBQVUsQ0FBQ3ZDLEtBQUssR0FBR04sR0FBRztjQUN4RHFELFVBQVUsR0FBR1IsVUFBVSxDQUFDekMsU0FBUyxHQUFHeUMsVUFBVSxDQUFDekMsU0FBUyxHQUFHaUQsVUFBVTs7WUFHdkUsSUFBSVAsU0FBUyxJQUFJLE9BQU9BLFNBQVMsS0FBSyxRQUFRLEVBQUU7Y0FDOUNLLFdBQVcsR0FBR0wsU0FBUyxDQUFDeEMsS0FBSyxHQUFHd0MsU0FBUyxDQUFDeEMsS0FBSyxHQUFHTixHQUFHO2NBQ3JESyxTQUFTLEdBQUd5QyxTQUFTLENBQUMxQyxTQUFTLEdBQUcwQyxTQUFTLENBQUMxQyxTQUFTLEdBQUdDLFNBQVM7O1lBR25FLE1BQU1FLFFBQVEsR0FBMkIsRUFBRTtZQUMzQyxJQUFJbEIsS0FBSyxDQUFDSSxRQUFRLEVBQUVjLFFBQVEsQ0FBQ0EsUUFBUSxHQUFHLElBQUk7WUFFNUMsT0FDRVMsS0FBQSxDQUFBUixhQUFBLENBQUN2QixNQUFBLENBQUF3QixLQUFLO2NBQUNDLElBQUk7Y0FBQ04sU0FBUyxFQUFFRCxHQUFHO2NBQUVOLE9BQU8sRUFBRStDO1lBQVEsR0FDM0M1QixLQUFBLENBQUFSLGFBQUE7Y0FBS0osU0FBUyxFQUFDO1lBQXdCLEdBQ3BDTCxLQUFLLElBQUlpQixLQUFBLENBQUFSLGFBQUEsYUFBS1QsS0FBSyxDQUFNLEVBQ3pCRCxJQUFJLElBQUlrQixLQUFBLENBQUFSLGFBQUEsY0FBTVYsSUFBSSxDQUFPLEVBQ3pCeUMsVUFBVSxDQUFDMUIsUUFBUSxDQUNoQixFQUVORyxLQUFBLENBQUFSLGFBQUE7Y0FBS0osU0FBUyxFQUFDO1lBQVMsR0FDdEJZLEtBQUEsQ0FBQVIsYUFBQSxDQUFDdEIsS0FBQSxDQUFBNEIsTUFBTTtjQUNMUixLQUFLLEVBQUU2QyxXQUFXO2NBQUEsR0FDZDVDLFFBQVE7Y0FDWlEsT0FBTyxFQUFFNkIsUUFBUTtjQUNqQlUsT0FBTyxFQUFDLFNBQVM7Y0FDakJDLFFBQVEsRUFBQztZQUFNLEVBQ2YsRUFDRnZDLEtBQUEsQ0FBQVIsYUFBQSxDQUFDdEIsS0FBQSxDQUFBNEIsTUFBTTtjQUNMVixTQUFTLEVBQUVpRCxVQUFVO2NBQ3JCL0MsS0FBSyxFQUFFOEMsWUFBWTtjQUFBLEdBQ2Y3QyxRQUFRO2NBQ1pRLE9BQU8sRUFBRXlCLE9BQU87Y0FDaEJjLE9BQU8sRUFBQyxTQUFTO2NBQ2pCQyxRQUFRLEVBQUM7WUFBTSxFQUNmLENBQ0UsQ0FDQTtVQUVaLENBQUM7VUFBQ25DLE9BQUEsQ0FBQWtCLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoR0YsSUFBQXRCLEtBQUEsR0FBQWhDLE9BQUE7VUFFQSxJQUFBd0UsU0FBQSxHQUFBeEUsT0FBQTtVQVFPO1VBQVUsU0FDUnlCLEtBQUtBLENBQUNyQixLQUFZO1lBTTFCLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRyxJQUFBMEIsS0FBQSxDQUFBeEIsUUFBUSxFQUFRO2NBQ3pDa0IsSUFBSSxFQUFFdEIsS0FBSyxFQUFFc0IsSUFBSSxJQUFJLEtBQUs7Y0FDMUIrQyxZQUFZLEVBQUUsS0FBSztjQUNuQkMsU0FBUyxFQUFFO2FBQ1gsQ0FBQztZQUNGLE1BQU1DLEtBQUssR0FBcUMsSUFBQTNDLEtBQUEsQ0FBQTRDLE1BQU0sRUFBaUIsSUFBSSxDQUFDO1lBRTVFLE1BQU1sRSxLQUFLLEdBQUcsTUFBT0MsS0FBeUMsSUFBbUI7Y0FDaEYsSUFBSUEsS0FBSyxFQUFFQSxLQUFLLENBQUM4QyxlQUFlLEVBQUU7Y0FDbEMsTUFBTTtnQkFBRTVDO2NBQU8sQ0FBRSxHQUFHVCxLQUFLO2NBQ3pCLE1BQU15RSxJQUFJLEdBQW9CQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Y0FDNURKLEtBQUssQ0FBQ0ssT0FBTyxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7Y0FDM0NDLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLFlBQTBCO2dCQUMzQzlFLFFBQVEsQ0FBQztrQkFBRSxHQUFHRCxLQUFLO2tCQUFFcUIsSUFBSSxFQUFFLEtBQUs7a0JBQUUrQyxZQUFZLEVBQUU7Z0JBQUksQ0FBRSxDQUFDO2dCQUN2REksSUFBSSxDQUFDUSxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztnQkFDOUJSLElBQUksQ0FBQ0ksU0FBUyxDQUFDSyxNQUFNLENBQUMsMEJBQTBCLENBQUM7Z0JBQ2pEekUsT0FBTyxDQUFDRixLQUFLLENBQUM7Y0FDZixDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ1IsQ0FBQztZQUVELE1BQU00RSxlQUFlLEdBQUk1RSxLQUF5QyxJQUFVO2NBQzNFQSxLQUFLLENBQUM4QyxlQUFlLEVBQUU7Y0FDdkIvQyxLQUFLLENBQUNDLEtBQUssQ0FBQztZQUNiLENBQUM7WUFFRCxNQUFNZSxJQUFJLEdBQVlyQixLQUFLLENBQUNxQixJQUFJO1lBRWhDLElBQUlQLEdBQUcsR0FBVyxpQkFBaUI7WUFDbkNBLEdBQUcsSUFBSWYsS0FBSyxDQUFDZ0IsU0FBUyxHQUFHaEIsS0FBSyxDQUFDZ0IsU0FBUyxHQUFHLEVBQUU7WUFFN0MsSUFBSU0sSUFBSSxFQUFFUCxHQUFHLElBQUksYUFBYTtZQUM5QixNQUFNc0IsTUFBTSxHQUFHLEVBQUU7WUFFakIsSUFBSWYsSUFBSSxFQUFFO2NBQ1RlLE1BQU0sQ0FBQ0MsSUFBSSxDQUNWVixLQUFBLENBQUFSLGFBQUE7Z0JBQUtvQixHQUFHLEVBQUMsdUJBQXVCO2dCQUFDeEIsU0FBUyxFQUFDO2NBQWUsR0FDekRZLEtBQUEsQ0FBQVIsYUFBQTtnQkFDQ0osU0FBUyxFQUFDLGVBQWU7Z0JBQ3pCVyxPQUFPLEVBQUVwQixLQUFLLElBQUc7a0JBQ2hCQSxLQUFLLENBQUM4QyxlQUFlLEVBQUU7Z0JBQ3hCO2NBQUMsR0FFRHpCLEtBQUEsQ0FBQVIsYUFBQSxDQUFDZ0QsU0FBQSxDQUFBakMsUUFBUTtnQkFBQSxHQUFLbkMsS0FBSztnQkFBRU0sS0FBSyxFQUFFQSxLQUFLO2dCQUFFa0MsR0FBRyxFQUFDO2NBQWtCLEVBQUcsQ0FDdkQsQ0FDRCxDQUNOOztZQUdGLE9BQ0NaLEtBQUEsQ0FBQVIsYUFBQTtjQUFLZ0UsR0FBRyxFQUFFYixLQUFLO2NBQUU1QyxPQUFPLEVBQUV3RCxlQUFlO2NBQUVuRSxTQUFTLEVBQUVEO1lBQUcsR0FDdkRzQixNQUFNLENBQ0Y7VUFFUiJ9