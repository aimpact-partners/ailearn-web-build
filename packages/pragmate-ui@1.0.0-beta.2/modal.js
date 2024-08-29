System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/base", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, AlertModal, ConfirmModal, Modal, IModalProps, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta2Components) {
      dependency_2 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_3 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Base) {
      dependency_4 = _pragmateUi100Beta2Base;
    }, function (_beyondJsKernel019Styles) {
      dependency_5 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/ailearn-app", "0.1.6-dev.08"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.2/modal"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/base', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.2/modal');
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
        hash: 1764852864,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModalContext = exports.ModalContext = exports.Children = void 0;
          var _react = require("react");
          var React = _react;
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
              if ((0, _react.isValidElement)(child)) {
                const specs = {};
                //TODO: check a official way to check the children type
                return (0, _react.cloneElement)(child, specs);
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

      /*******************************
      INTERNAL MODULE: ./confirm/index
      *******************************/

      ims.set('./confirm/index', {
        hash: 479072307,
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
              className: 'pui-actions'
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
        hash: 2995467792,
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
              }, props.children))));
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
        hash: 3453279328,
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
        hash: 1658030921,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbW9kYWwiLCJfY29tcG9uZW50cyIsIkFsZXJ0TW9kYWwiLCJwcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidGV4dCIsInRpdGxlIiwiY2VudGVyZWQiLCJidXR0b24iLCJjbG9zZSIsIm9uQ29uZmlybSIsIm9uQ2xvc2UiLCJidG5BdHRycyIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwibGFiZWwiLCJidXR0b25MYWJlbCIsIm9uQ2xpY2siLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwiTW9kYWwiLCJzaG93IiwiSHRtbFdyYXBwZXIiLCJjaGlsZHJlbiIsIkJ1dHRvbiIsIl9yZWFjdCIsIl9pY29ucyIsIk1vZGFsQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIkNoaWxkcmVuIiwiZGlzbWlzcyIsIm91dHB1dCIsInB1c2giLCJJY29uQnV0dG9uIiwia2V5IiwiaWNvbiIsImNoaWxkcmVuV2l0aFByb3BzIiwibWFwIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsInNwZWNzIiwiY2xvbmVFbGVtZW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIl91c2VBY3Rpb25Qcm9wZXJ0aWVzIiwiQ29uZmlybU1vZGFsIiwicHJvcGVydGllcyIsIm9uQ2FuY2VsIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsInByb3AiLCJjb25maXJtUHJvcHMiLCJjYW5jZWxQcm9wcyIsInVzZUFjdGlvblByb3BlcnRpZXMiLCJoYW5kbGVDbG9zZSIsIm9uUHJvY2Vzc0NvbmZpcm0iLCJjYWxsYmFjayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJjYW5jZWwiLCJFcnJvciIsImJ0bkNvbmZpcm0iLCJidG5DYW5jZWwiLCJkZWZhdWx0Q29uZmlybSIsInZhcmlhbnQiLCJkZWZhdWx0Q2FuY2VsIiwiYm9yZGVyZWQiLCJfY2hpbGRyZW4iLCJjbG9zZUNsaWNrZWQiLCJjbG9zZUJhY2tkcm9wIiwiY29udGFpbmVyIiwibW9kYWwiLCJ1c2VSZWYiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwib25DbGlja0JhY2tkcm9wIiwicmVmIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWxlcnQudHN4IiwiL3RzL2NoaWxkcmVuLnRzeCIsIi90cy9jb25maXJtL2luZGV4LnRzeCIsIi90cy9jb25maXJtL3VzZS1hY3Rpb24tcHJvcGVydGllcy50c3giLCIvdHMvbW9kYWwudHN4IiwiL2FsZXJ0LnRzIiwiL2NvbmZpcm0udHMiLCIvbW9kYWwtcHJvcHMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBR087VUFBVSxTQUNSRyxVQUFVQSxDQUFDQyxLQUF1QjtZQUMxQyxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdQLEtBQUssQ0FBQ1EsUUFBUSxDQUFDO2NBQUVDLFFBQVEsRUFBRTtZQUFLLENBQUUsQ0FBQztZQUM3RCxNQUFNO2NBQUVDLElBQUk7Y0FBRUMsS0FBSztjQUFFQyxRQUFRO2NBQUVDLE1BQU0sR0FBRztZQUFFLENBQUUsR0FBR1IsS0FBSztZQUNwRCxNQUFNUyxLQUFLLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3hCUCxRQUFRLENBQUM7Z0JBQUVFLFFBQVEsRUFBRTtjQUFJLENB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