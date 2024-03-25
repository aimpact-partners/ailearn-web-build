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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.6"], ["@aimpact/ailearn-app", "0.0.31"]]);
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
        hash: 991719792,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX21vZGFsIiwiX2NvbXBvbmVudHMiLCJBbGVydE1vZGFsIiwicHJvcHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJjbG9zZSIsImV2ZW50Iiwib25Db25maXJtIiwib25DbG9zZSIsInRleHQiLCJ0aXRsZSIsImJ0biIsImNlbnRlcmVkIiwiYnRuTGFiZWwiLCJjbHMiLCJjbGFzc05hbWUiLCJjbHNDYW5jZWwiLCJsYWJlbCIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsIk1vZGFsIiwic2hvdyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY2hpbGRyZW4iLCJCdXR0b24iLCJvbkNsaWNrIiwiX2ljb25zIiwiTW9kYWxDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2hpbGRyZW4iLCJkaXNtaXNzIiwib3V0cHV0IiwicHVzaCIsIkljb25CdXR0b24iLCJrZXkiLCJpY29uIiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50Iiwic3BlY3MiLCJjbG9uZUVsZW1lbnQiLCJQcm92aWRlciIsInZhbHVlIiwiUmVhY3QiLCJfdXNlQWN0aW9uUHJvcGVydGllcyIsIkNvbmZpcm1Nb2RhbCIsInByb3BlcnRpZXMiLCJvbkNhbmNlbCIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwiY29uZmlybVByb3BzIiwiY2FuY2VsUHJvcHMiLCJ1c2VBY3Rpb25Qcm9wZXJ0aWVzIiwiaGFuZGxlQ2xvc2UiLCJkZWZpbmVQcm9wZXJ0eSIsIm9uUHJvY2Vzc0NvbmZpcm0iLCJjYWxsYmFjayIsInN0b3BQcm9wYWdhdGlvbiIsImFjdGlvbnMiLCJjb25maXJtIiwiY2FuY2VsIiwiRXJyb3IiLCJidG5Db25maXJtIiwiYnRuQ2FuY2VsIiwiZGVmYXVsdENvbmZpcm0iLCJ2YXJpYW50IiwiZGVmYXVsdENhbmNlbCIsImJvcmRlcmVkIiwiX2NoaWxkcmVuIiwiY2xvc2VDbGlja2VkIiwiY29udGFpbmVyIiwibW9kYWwiLCJ1c2VSZWYiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJvbkNsaWNrQmFja2Ryb3AiLCJyZWYiXSwic291cmNlcyI6WyIvdHMvYWxlcnQudHN4IiwiL3RzL2NoaWxkcmVuLnRzeCIsIi90cy9jb25maXJtL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL2NvbmZpcm0vdXNlLWFjdGlvbi1wcm9wZXJ0aWVzLnRzeCIsIi90cy9tb2RhbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDTztVQUFVLFNBQ1JHLFVBQVVBLENBQUNDLEtBQUs7WUFDeEIsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHUCxNQUFBLENBQUFRLE9BQUssQ0FBQ0MsUUFBUSxDQUFDO2NBQUVDLFFBQVEsRUFBRTtZQUFLLENBQUUsQ0FBQztZQUU3RCxNQUFNQyxLQUFLLEdBQUdDLEtBQUssSUFBRztjQUNyQkwsUUFBUSxDQUFDO2dCQUFFRyxRQUFRLEVBQUU7Y0FBSSxDQUFFLENBQUM7Y0FDNUIsSUFBSUwsS0FBSyxDQUFDUSxTQUFTLEVBQUVSLEtBQUssQ0FBQ1EsU0FBUyxFQUFFO2NBQ3RDTixRQUFRLENBQUM7Z0JBQUVHLFFBQVEsRUFBRTtjQUFLLENBQUUsQ0FB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