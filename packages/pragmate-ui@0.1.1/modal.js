System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, AlertModal, ConfirmModal, Modal, IModalProps, __beyond_pkg, hmr;
  _export({
    AlertModal: void 0,
    ConfirmModal: void 0,
    Modal: void 0,
    IModalProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_2 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_3 = _pragmateUi011Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_4 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.1.1"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.1.1/modal"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/icons', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/modal');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./alert
      ***********************/
      ims.set('./alert', {
        hash: 853535473,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AlertModal = AlertModal;
          var React = require("react");
          var _modal = require("./modal");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function AlertModal(props) {
            const [state, setState] = React.useState({
              fetching: false
            });
            const {
              text,
              title,
              centered,
              button = {}
            } = props;
            const close = async () => {
              setState({
                fetching: true
              });
              if (props.onConfirm) await props.onConfirm();
              setState({
                fetching: false
              });
              if (props.onClose) props.onClose();
            };
            const btnAttrs = {
              className: `btn btn-primary${props.className ? ` ${props.className}` : ''}`,
              disabled: state.fetching,
              label: props.buttonLabel || 'Confirm',
              onClick: close,
              ...button
            };
            let cls = `pui-alert-dialog${centered ? ' pui-alert-dialog-centered' : ''}`;
            if (props.className) cls += ` ${props.className}`;
            return React.createElement(_modal.Modal, {
              show: true,
              className: cls,
              onClose: props.onClose
            }, React.createElement("div", {
              className: 'alert-dialog-content'
            }, title && React.createElement(_components.HtmlWrapper, null, title), text && React.createElement(_components.HtmlWrapper, null, text), props.children ? props.children : null), React.createElement("div", {
              className: 'pui-modal-actions'
            }, React.createElement(_components.Button, {
              ...btnAttrs
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
        hash: 3064030298,
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

      /***********************************************
      INTERNAL MODULE: ./confirm/use-action-properties
      ***********************************************/

      ims.set('./confirm/use-action-properties', {
        hash: 1336422196,
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
        hash: 688066261,
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
              closeClicked: (props.closeClicked || props.closeBackdrop) ?? true,
              container: null
            });
            const modal = (0, _react.useRef)(null);
            const close = async event => {
              if (event) event.stopPropagation();
              const body = document.querySelector('body');
              modal.current.classList.add('modal-hidden');
              globalThis.setTimeout(async () => {
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
              }, 200);
            };
            const onClickBackdrop = event => {
              event.stopPropagation();
              if (!state.closeClicked) return;
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

      /*****************************
      INTERNAL MODULE: ./types/alert
      *****************************/

      ims.set('./types/alert', {
        hash: 418551076,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************
      INTERNAL MODULE: ./types/confirm
      *******************************/

      ims.set('./types/confirm', {
        hash: 4185920130,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************
      INTERNAL MODULE: ./types/modal-props
      ***********************************/

      ims.set('./types/modal-props', {
        hash: 1341912741,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
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
      }, {
        "im": "./types/modal-props",
        "from": "IModalProps",
        "name": "IModalProps"
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
        (require || prop === 'IModalProps') && _export("IModalProps", IModalProps = require ? require('./types/modal-props').IModalProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbW9kYWwiLCJfY29tcG9uZW50cyIsIkFsZXJ0TW9kYWwiLCJwcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidGV4dCIsInRpdGxlIiwiY2VudGVyZWQiLCJidXR0b24iLCJjbG9zZSIsIm9uQ29uZmlybSIsIm9uQ2xvc2UiLCJidG5BdHRycyIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwibGFiZWwiLCJidXR0b25MYWJlbCIsIm9uQ2xpY2siLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwiTW9kYWwiLCJzaG93IiwiSHRtbFdyYXBwZXIiLCJjaGlsZHJlbiIsIkJ1dHRvbiIsIl9yZWFjdCIsIl9pY29ucyIsIk1vZGFsQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIkNoaWxkcmVuIiwiZGlzbWlzcyIsIm91dHB1dCIsInB1c2giLCJkZWZhdWx0IiwiSWNvbkJ1dHRvbiIsImtleSIsImljb24iLCJjaGlsZHJlbldpdGhQcm9wcyIsIm1hcCIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJzcGVjcyIsImNsb25lRWxlbWVudCIsIlByb3ZpZGVyIiwidmFsdWUiLCJfdXNlQWN0aW9uUHJvcGVydGllcyIsIkNvbmZpcm1Nb2RhbCIsInByb3BlcnRpZXMiLCJvbkNhbmNlbCIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwiY29uZmlybVByb3BzIiwiY2FuY2VsUHJvcHMiLCJ1c2VBY3Rpb25Qcm9wZXJ0aWVzIiwiaGFuZGxlQ2xvc2UiLCJvblByb2Nlc3NDb25maXJtIiwiY2FsbGJhY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImFjdGlvbnMiLCJjb25maXJtIiwiY2FuY2VsIiwiRXJyb3IiLCJidG5Db25maXJtIiwiYnRuQ2FuY2VsIiwiZGVmYXVsdENvbmZpcm0iLCJ2YXJpYW50IiwiZGVmYXVsdENhbmNlbCIsImJvcmRlcmVkIiwiX2NoaWxkcmVuIiwiY2xvc2VDbGlja2VkIiwiY2xvc2VCYWNrZHJvcCIsImNvbnRhaW5lciIsIm1vZGFsIiwidXNlUmVmIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZSIsIm9uQ2xpY2tCYWNrZHJvcCIsInJlZiIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2FsZXJ0LnRzeCIsIi90cy9jaGlsZHJlbi50c3giLCIvdHMvY29uZmlybS9pbmRleC50c3giLCIvdHMvY29uZmlybS91c2UtYWN0aW9uLXByb3BlcnRpZXMudHN4IiwiL3RzL21vZGFsLnRzeCIsIi9hbGVydC50cyIsIi9jb25maXJtLnRzIiwiL21vZGFsLXByb3BzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFHTztVQUFVLFNBQ1JHLFVBQVVBLENBQUNDLEtBQXVCO1lBQzFDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1AsS0FBSyxDQUFDUSxRQUFRLENBQUM7Y0FBRUMsUUFBUSxFQUFFO1lBQUssQ0FBRSxDQUFDO1lBQzdELE1BQU07Y0FBRUMsSUFBSTtjQUFFQyxLQUFLO2NBQUVDLFFBQVE7Y0FBRUMsTUFBTSxHQUFHO1lBQUUsQ0FBRSxHQUFHUixLQUFLO1lBQ3BELE1BQU1TLEtBQUssR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDeEJQLFFBQVEsQ0FBQztnQkFBRUUsUUFBUSxFQUFF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