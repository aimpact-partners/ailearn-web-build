System.register(["@beyond-js/kernel@0.1.14/bundle", "react@18.3.1", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/base"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, AlertModal, ConfirmModal, Modal, IModalProps, __beyond_pkg, hmr;
  _export({
    AlertModal: void 0,
    ConfirmModal: void 0,
    Modal: void 0,
    IModalProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi108Components) {
      dependency_2 = _pragmateUi108Components;
    }, function (_pragmateUi108Icons) {
      dependency_3 = _pragmateUi108Icons;
    }, function (_pragmateUi108Base) {
      dependency_4 = _pragmateUi108Base;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "0.1.6"], ["@floating-ui/dom", "1.7.3"], ["clsx", "2.1.1"], ["framer-motion", "11.11.11"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.8"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.8/modal"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/base', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.8/modal');
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
        hash: 3433912244,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModalContext = exports.ModalContext = exports.Children = void 0;
          var _react = require("react");
          var React = _react;
          const ModalContext = exports.ModalContext = (0, _react.createContext)({});
          const useModalContext = () => (0, _react.useContext)(ModalContext);
          exports.useModalContext = useModalContext;
          const Children = ({
            children,
            close,
            dismiss
          }) => {
            const output = [];
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
        hash: 1766706381,
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
              onClose,
              show
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
              show: show,
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
        hash: 1933355049,
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
                await callback(event);
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
        hash: 618130017,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Modal = Modal;
          var _react = require("react");
          var React = _react;
          var _children = require("./children");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function Modal(props) {
            const [state, setState] = (0, _react.useState)({
              show: props?.show ?? false,
              closeClicked: (props.closeClicked || props.closeBackdrop) ?? true,
              container: null
            });
            const modal = (0, _react.useRef)(null);
            React.useEffect(() => {
              setState(prevState => ({
                ...prevState,
                show: props.show
              }));
            }, [props.show]);
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
                key: "modal-content-wrapper",
                className: "modal-wrapper"
              }, React.createElement("div", {
                className: "modal-content",
                onClick: event => {
                  event.stopPropagation();
                }
              }, React.createElement(_icons.IconButton, {
                className: "close-icon",
                onClick: close,
                "data-dismiss": "modal",
                "aria-label": "Close",
                key: "dismiss-button",
                icon: "close"
              }), React.createElement(_children.Children, {
                ...props,
                close: close,
                key: "children-content"
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
        hash: 3090985645,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbW9kYWwiLCJfY29tcG9uZW50cyIsIkFsZXJ0TW9kYWwiLCJwcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidGV4dCIsInRpdGxlIiwiY2VudGVyZWQiLCJidXR0b24iLCJjbG9zZSIsIm9uQ29uZmlybSIsIm9uQ2xvc2UiLCJidG5BdHRycyIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwibGFiZWwiLCJidXR0b25MYWJlbCIsIm9uQ2xpY2siLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwiTW9kYWwiLCJzaG93IiwiSHRtbFdyYXBwZXIiLCJjaGlsZHJlbiIsIkJ1dHRvbiIsIl9yZWFjdCIsIk1vZGFsQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIkNoaWxkcmVuIiwiZGlzbWlzcyIsIm91dHB1dCIsImNoaWxkcmVuV2l0aFByb3BzIiwibWFwIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsInNwZWNzIiwiY2xvbmVFbGVtZW50IiwicHVzaCIsIlByb3ZpZGVyIiwidmFsdWUiLCJfdXNlQWN0aW9uUHJvcGVydGllcyIsIkNvbmZpcm1Nb2RhbCIsInByb3BlcnRpZXMiLCJvbkNhbmNlbCIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwiY29uZmlybVByb3BzIiwiY2FuY2VsUHJvcHMiLCJ1c2VBY3Rpb25Qcm9wZXJ0aWVzIiwiaGFuZGxlQ2xvc2UiLCJvblByb2Nlc3NDb25maXJtIiwiY2FsbGJhY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImFjdGlvbnMiLCJjb25maXJtIiwiY2FuY2VsIiwiRXJyb3IiLCJidG5Db25maXJtIiwiYnRuQ2FuY2VsIiwiZGVmYXVsdENvbmZpcm0iLCJ2YXJpYW50IiwiZGVmYXVsdENhbmNlbCIsImJvcmRlcmVkIiwiX2NoaWxkcmVuIiwiX2ljb25zIiwiY2xvc2VDbGlja2VkIiwiY2xvc2VCYWNrZHJvcCIsImNvbnRhaW5lciIsIm1vZGFsIiwidXNlUmVmIiwidXNlRWZmZWN0IiwicHJldlN0YXRlIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZSIsIm9uQ2xpY2tCYWNrZHJvcCIsImtleSIsIkljb25CdXR0b24iLCJpY29uIiwicmVmIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWxlcnQudHN4IiwiL3RzL2NoaWxkcmVuLnRzeCIsIi90cy9jb25maXJtL2luZGV4LnRzeCIsIi90cy9jb25maXJtL3VzZS1hY3Rpb24tcHJvcGVydGllcy50c3giLCIvdHMvbW9kYWwudHN4IiwiL2FsZXJ0LnRzIiwiL2NvbmZpcm0udHMiLCIvbW9kYWwtcHJvcHMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUdPO1VBQVUsU0FDUkcsVUFBVUEsQ0FBQ0MsS0FBdUI7WUFDMUMsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHUCxLQUFLLENBQUNRLFFBQVEsQ0FBQztjQUFFQyxRQUFRLEVBQUU7WUFBSyxDQUFFLENBQUM7WUFDN0QsTUFBTTtjQUFFQyxJQUFJO2NBQUVDLEtBQUs7Y0FBRUMsUUFBUTtjQUFFQyxNQUFNLEdBQUc7WUFBRSxDQUFFLEdBQUdSLEtBQUs7WUFDcEQsTUFBTVMsS0FBSyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN4QlAsUUFBUSxDQUFDO2dC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Q0FBQztZQUVELE1BQU1wQyxJQUFJLEdBQVlwQixLQUFLLENBQUNvQixJQUFJO1lBRWhDLElBQUlILEdBQUcsR0FBVyxZQUFZO1lBQzlCQSxHQUFHLElBQUlsQixLQUFLLENBQUNhLFNBQVMsR0FBR2IsS0FBSyxDQUFDYSxTQUFTLEdBQUcsRUFBRTtZQUU3QyxJQUFJUSxJQUFJLEVBQUVILEdBQUcsSUFBSSxhQUFhO1lBQzlCLE1BQU1lLE1BQU0sR0FBRyxFQUFFO1lBRWpCLElBQUlaLElBQUksRUFBRTtjQUNUWSxNQUFNLENBQUNPLElBQUksQ0FDVjdDLEtBQUEsQ0FBQXdCLGFBQUE7Z0JBQUtzRSxHQUFHLEVBQUMsdUJBQXVCO2dCQUFDNUUsU0FBUyxFQUFDO2NBQWUsR0FDekRsQixLQUFBLENBQUF3QixhQUFBO2dCQUNDTixTQUFTLEVBQUMsZUFBZTtnQkFDekJJLE9BQU8sRUFBRXdDLEtBQUssSUFBRztrQkFDaEJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2dCQUN4QjtjQUFDLEdBRUQvRCxLQUFBLENBQUF3QixhQUFBLENBQUNtRCxNQUFBLENBQUFvQixVQUFVO2dCQUNWN0UsU0FBUyxFQUFDLFlBQVk7Z0JBQ3RCSSxPQUFPLEVBQUVSLEtBQUs7Z0JBQUEsZ0JBQ0QsT0FBTztnQkFBQSxjQUNULE9BQU87Z0JBQ2xCZ0YsR0FBRyxFQUFDLGdCQUFnQjtnQkFDcEJFLElBQUksRUFBQztjQUFPLEVBQ1gsRUFFRmhHLEtBQUEsQ0FBQXdCLGFBQUEsQ0FBQ2tELFNBQUEsQ0FBQXRDLFFBQVE7Z0JBQUEsR0FBSy9CLEtBQUs7Z0JBQUVTLEtBQUssRUFBRUEsS0FBSztnQkFBRWdGLEdBQUcsRUFBQztjQUFrQixHQUN2RHpGLEtBQUssQ0FBQ3VCLFFBQVEsQ0FDTCxDQUNOLENBQ0QsQ0FDTjs7WUFHRixPQUNDNUIsS0FBQSxDQUFBd0IsYUFBQTtjQUFLeUUsR0FBRyxFQUFFbEIsS0FBSztjQUFFekQsT0FBTyxFQUFFdUUsZUFBZTtjQUFFM0UsU0FBUyxFQUFFSztZQUFHLEdBQ3ZEZSxNQUFNLENBQ0Y7VUFFUjs7Ozs7Ozs7Ozs7VUM3RUE7O1VBRUFjLE1BQUEsQ0FBQThDLGNBQUEsQ0FBQWxFLE9BQUE7WUFDQWUsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBSyxNQUFBLENBQUE4QyxjQUFBLENBQUFsRSxPQUFBO1lBQ0FlLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQUssTUFBQSxDQUFBOEMsY0FBQSxDQUFBbEUsT0FBQTtZQUNBZSxLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=