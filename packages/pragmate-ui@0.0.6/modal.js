System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
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
    }, function (_pragmateUi006Components) {
      dependency_2 = _pragmateUi006Components;
    }, function (_pragmateUi006Icons) {
      dependency_3 = _pragmateUi006Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_4 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.6"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.6/modal"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/icons', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.6/modal');
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

      /*******************************
      INTERNAL MODULE: ./confirm/index
      *******************************/

      ims.set('./confirm/index', {
        hash: 1809216388,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmModal = void 0;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _modal = require("../modal");
          var _useActionProperties = require("./use-action-properties");
          /*bundle*/
          const ConfirmModal = properties => {
            const [state, setState] = React.useState({
              fetching: false
            });
            const {
              text,
              title,
              onCancel,
              centered
            } = properties;
            let cls = `pui-confirm-dialog${centered ? ' pui-confirm-dialog-centered' : ''}`;
            if (properties.className) cls += ` ${properties.className}`;
            const props = Object.assign({}, properties);
            ['text', 'title', 'className', 'centering', 'btnCancel', 'btnConfirm', 'onCancel'].forEach(prop => delete props[prop]);
            const [confirmProps, cancelProps] = (0, _useActionProperties.useActionProperties)(properties, setState);
            const disabled = {};
            if (state.fetching) disabled.disabled = true;
            return React.createElement(_modal.Modal, {
              show: true,
              className: cls,
              onClose: onCancel
            }, React.createElement("div", {
              className: 'pui-confirm-dialog-content'
            }, title && React.createElement("h3", null, title), text && React.createElement("div", null, text), properties.children), React.createElement("div", {
              className: 'actions'
            }, React.createElement(_components.Button, {
              ...cancelProps,
              ...disabled
            }), React.createElement(_components.Button, {
              ...disabled,
              ...confirmProps
            })));
          };
          exports.ConfirmModal = ConfirmModal;
        }
      });

      /************************************
      INTERNAL MODULE: ./confirm/interfaces
      ************************************/

      ims.set('./confirm/interfaces', {
        hash: 3806365043,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************************
      INTERNAL MODULE: ./confirm/use-action-properties
      ***********************************************/

      ims.set('./confirm/use-action-properties', {
        hash: 750273394,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useActionProperties = useActionProperties;
          /**
           * useActionProperties function
           *
           * This function is designed to process and return action properties for the Button component
           * in the Pragmate UI library. It supports the current API structure of the Button component
           * while maintaining backward compatibility with an older configuration format.
           *
           * The function takes a `properties` object as an argument. If this object contains an `actions` property,
           * it directly returns the `confirm` and `cancel` actions defined within. This is aligned with the current API design.
           *
           * For backward compatibility, the function also handles the scenario where the `actions` property is not present.
           * In this case, it extracts and processes individual properties like `onCancel`, `onConfirm`, `btnConfirm`, and `btnCancel`
           * from the `properties` object. These are then used to construct and return `confirm` and `cancel` action objects
           * with appropriate labels, class names, variants, and onClick handlers.
           *
           * @param {object} properties - The properties object containing either a direct `actions` property
           *                              or individual properties for backward compatibility.
           * @returns An array containing two action objects: confirm and cancel.
           */
          function useActionProperties(properties, setState) {
            const onProcessConfirm = callback => {
              return async event => {
                event.stopPropagation();
                setState({
                  fetching: true
                });
                await callback();
                setState({
                  fetching: false
                });
              };
            };
            if (properties.actions) {
              const confirmProps = {
                ...properties.actions.confirm
              };
              const cancelProps = {
                ...properties.actions.cancel
              };
              if (!confirmProps.onClick && !properties.onConfirm) {
                throw new Error('ConfirmModal: No confirm function defined');
              }
              if (!cancelProps.onClick && !properties.onCancel) {
                throw new Error('ConfirmModal: No cancel function defined');
              }
              confirmProps.onClick = onProcessConfirm(confirmProps.onClick ?? properties.onConfirm);
              cancelProps.onClick = cancelProps.onClick ?? properties.onCancel;
              return [confirmProps, cancelProps];
            }
            const {
              onCancel,
              onConfirm,
              btnConfirm,
              btnCancel
            } = properties;
            const defaultConfirm = {
              label: 'Confirm',
              variant: 'primary',
              onClick: onProcessConfirm(onConfirm)
            };
            const defaultCancel = {
              label: 'Cancel',
              variant: 'primary',
              onClick: onCancel,
              bordered: true
            };
            const actions = {
              confirm: typeof btnConfirm === 'object' ? {
                ...defaultConfirm,
                ...btnCancel
              } : defaultConfirm,
              cancel: typeof btnCancel === 'object' ? {
                ...defaultCancel,
                ...btnCancel
              } : defaultCancel
            };
            return [actions.confirm, actions.cancel];
          }
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
        "im": "./confirm/index",
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
        (require || prop === 'ConfirmModal') && _export("ConfirmModal", ConfirmModal = require ? require('./confirm/index').ConfirmModal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX21vZGFsIiwiX2NvbXBvbmVudHMiLCJBbGVydE1vZGFsIiwicHJvcHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJjbG9zZSIsImV2ZW50Iiwib25Db25maXJtIiwib25DbG9zZSIsInRleHQiLCJ0aXRsZSIsImJ0biIsImNlbnRlcmVkIiwiYnRuTGFiZWwiLCJjbHMiLCJjbGFzc05hbWUiLCJjbHNDYW5jZWwiLCJsYWJlbCIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsIk1vZGFsIiwic2hvdyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY2hpbGRyZW4iLCJCdXR0b24iLCJvbkNsaWNrIiwiX2ljb25zIiwiTW9kYWxDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2hpbGRyZW4iLCJkaXNtaXNzIiwib3V0cHV0IiwicHVzaCIsIkljb25CdXR0b24iLCJrZXkiLCJpY29uIiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50Iiwic3BlY3MiLCJjbG9uZUVsZW1lbnQiLCJQcm92aWRlciIsInZhbHVlIiwiUmVhY3QiLCJfdXNlQWN0aW9uUHJvcGVydGllcyIsIkNvbmZpcm1Nb2RhbCIsInByb3BlcnRpZXMiLCJvbkNhbmNlbCIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwiY29uZmlybVByb3BzIiwiY2FuY2VsUHJvcHMiLCJ1c2VBY3Rpb25Qcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJvblByb2Nlc3NDb25maXJtIiwiY2FsbGJhY2siLCJzdG9wUHJvcGFnYXRpb24iLCJhY3Rpb25zIiwiY29uZmlybSIsImNhbmNlbCIsIkVycm9yIiwiYnRuQ29uZmlybSIsImJ0bkNhbmNlbCIsImRlZmF1bHRDb25maXJtIiwidmFyaWFudCIsImRlZmF1bHRDYW5jZWwiLCJib3JkZXJlZCIsIl9jaGlsZHJlbiIsImNsb3NlQ2xpY2tlZCIsImNvbnRhaW5lciIsIm1vZGFsIiwidXNlUmVmIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwib25DbGlja0JhY2tkcm9wIiwicmVmIl0sInNvdXJjZXMiOlsiL3RzL2FsZXJ0LnRzeCIsIi90cy9jaGlsZHJlbi50c3giLCIvdHMvY29uZmlybS9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy9jb25maXJtL3VzZS1hY3Rpb24tcHJvcGVydGllcy50c3giLCIvdHMvbW9kYWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ087VUFBVSxTQUNSRyxVQUFVQSxDQUFDQyxLQUFLO1lBQ3hCLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1AsTUFBQSxDQUFBUSxPQUFLLENBQUNDLFFBQVEsQ0FBQztjQUFFQyxRQUFRLEVBQUU7WUFBSyxDQUFFLENBQUM7WUFFN0QsTUFBTUMsS0FBSyxHQUFHQyxLQUFLLElBQUc7Y0FDckJMLFFBQVEsQ0FBQztnQkFBRUcsUUFBUSxFQUFFO2NBQUksQ0FBRSxDQUFDO2NBQzVCLElBQUlMLEtBQUssQ0FBQ1EsU0FBUyxFQUFFUixLQUFLLENBQUNRLFNBQVMsRUFBRTtjQUN0Q04sUUFBUSxDQUFDO2dCQUFFRyxRQUFRLEVBQUU7Y0FBSyxDQUFFLENBQUM7Y0FDN0IsSUFBSUws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