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
        hash: 3726852541,
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
              className: cls,
              onClose: props.onClose
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
        hash: 30477597,
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
              centered,
              onClose
            } = properties;
            let cls = `pui-confirm-dialog${centered ? ' pui-confirm-dialog-centered' : ''}`;
            if (properties.className) cls += ` ${properties.className}`;
            const props = Object.assign({}, properties);
            ['text', 'title', 'className', 'centering', 'btnCancel', 'btnConfirm', 'onCancel'].forEach(prop => delete props[prop]);
            const [confirmProps, cancelProps] = (0, _useActionProperties.useActionProperties)(properties, setState);
            const disabled = {};
            if (state.fetching) disabled.disabled = true;
            const handleClose = onClose ?? onCancel;
            return React.createElement(_modal.Modal, {
              show: true,
              className: cls,
              onClose: handleClose
            }, React.createElement("div", {
              className: 'pui-confirm-dialog-content'
            }, title && React.createElement("h3", null, title), text && React.createElement("div", {
              className: 'pui-confirm-dialog-content__text'
            }, text), properties.children), React.createElement("div", {
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
        hash: 4185920130,
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
        hash: 895556506,
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
                ...btnConfirm
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
        hash: 1597779210,
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
                const {
                  onClose
                } = props;
                console.log(99, onClose);
                if (!onClose || typeof onClose !== 'function') return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX21vZGFsIiwiX2NvbXBvbmVudHMiLCJBbGVydE1vZGFsIiwicHJvcHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJjbG9zZSIsImV2ZW50Iiwib25Db25maXJtIiwib25DbG9zZSIsInRleHQiLCJ0aXRsZSIsImJ0biIsImNlbnRlcmVkIiwiYnRuTGFiZWwiLCJjbHMiLCJjbGFzc05hbWUiLCJjbHNDYW5jZWwiLCJsYWJlbCIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsIk1vZGFsIiwic2hvdyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY2hpbGRyZW4iLCJCdXR0b24iLCJvbkNsaWNrIiwiX2ljb25zIiwiTW9kYWxDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2hpbGRyZW4iLCJkaXNtaXNzIiwib3V0cHV0IiwicHVzaCIsIkljb25CdXR0b24iLCJrZXkiLCJpY29uIiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50Iiwic3BlY3MiLCJjbG9uZUVsZW1lbnQiLCJQcm92aWRlciIsInZhbHVlIiwiUmVhY3QiLCJfdXNlQWN0aW9uUHJvcGVydGllcyIsIkNvbmZpcm1Nb2RhbCIsInByb3BlcnRpZXMiLCJvbkNhbmNlbCIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwiY29uZmlybVByb3BzIiwiY2FuY2VsUHJvcHMiLCJ1c2VBY3Rpb25Qcm9wZXJ0aWVzIiwiaGFuZGxlQ2xvc2UiLCJkZWZpbmVQcm9wZXJ0eSIsIm9uUHJvY2Vzc0NvbmZpcm0iLCJjYWxsYmFjayIsInN0b3BQcm9wYWdhdGlvbiIsImFjdGlvbnMiLCJjb25maXJtIiwiY2FuY2VsIiwiRXJyb3IiLCJidG5Db25maXJtIiwiYnRuQ2FuY2VsIiwiZGVmYXVsdENvbmZpcm0iLCJ2YXJpYW50IiwiZGVmYXVsdENhbmNlbCIsImJvcmRlcmVkIiwiX2NoaWxkcmVuIiwiY2xvc2VDbGlja2VkIiwiY29udGFpbmVyIiwibW9kYWwiLCJ1c2VSZWYiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwib25DbGlja0JhY2tkcm9wIiwicmVmIl0sInNvdXJjZXMiOlsiL3RzL2FsZXJ0LnRzeCIsIi90cy9jaGlsZHJlbi50c3giLCIvdHMvY29uZmlybS9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy9jb25maXJtL3VzZS1hY3Rpb24tcHJvcGVydGllcy50c3giLCIvdHMvbW9kYWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ087VUFBVSxTQUNSRyxVQUFVQSxDQUFDQyxLQUFLO1lBQ3hCLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1AsTUFBQSxDQUFBUSxPQUFLLENBQUNDLFFBQVEsQ0FBQztjQUFFQyxRQUFRLEVBQUU7WUFBSyxDQUFFLENBQUM7WUFFN0QsTUFBTUMsS0FBSyxHQUFHQyxLQUFLLElBQUc7Y0FDckJMLFFBQVEsQ0FBQztnQkFBRUcsUUFBUSxFQUFFO2NBQUksQ0FBRSxDQUFDO2NBQzVCLElBQUlMLEtBQUssQ0FBQ1EsU0FBUyxFQUFFUixLQUFLLENBQUNRLFNBQVMsRUFBRTtjQUN0Q04sUUFBUSxDQUFDO2dCQUFFRyxRQUFRLEVB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