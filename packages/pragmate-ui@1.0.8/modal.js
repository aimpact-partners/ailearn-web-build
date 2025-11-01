System.register(["@beyond-js/kernel@0.1.14/bundle", "react@18.3.1", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/base", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, AlertModal, ConfirmModal, Modal, IModalProps, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel0114Styles) {
      dependency_5 = _beyondJsKernel0114Styles;
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/base', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbW9kYWwiLCJfY29tcG9uZW50cyIsIkFsZXJ0TW9kYWwiLCJwcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidGV4dCIsInRpdGxlIiwiY2VudGVyZWQiLCJidXR0b24iLCJjbG9zZSIsIm9uQ29uZmlybSIsIm9uQ2xvc2UiLCJidG5BdHRycyIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwibGFiZWwiLCJidXR0b25MYWJlbCIsIm9uQ2xpY2siLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwiTW9kYWwiLCJzaG93IiwiSHRtbFdyYXBwZXIiLCJjaGlsZHJlbiIsIkJ1dHRvbiIsIl9yZWFjdCIsIk1vZGFsQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIkNoaWxkcmVuIiwiZGlzbWlzcyIsIm91dHB1dCIsImNoaWxkcmVuV2l0aFByb3BzIiwibWFwIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsInNwZWNzIiwiY2xvbmVFbGVtZW50IiwicHVzaCIsIlByb3ZpZGVyIiwidmFsdWUiLCJfdXNlQWN0aW9uUHJvcGVydGllcyIsIkNvbmZpcm1Nb2RhbCIsInByb3BlcnRpZXMiLCJvbkNhbmNlbCIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwiY29uZmlybVByb3BzIiwiY2FuY2VsUHJvcHMiLCJ1c2VBY3Rpb25Qcm9wZXJ0aWVzIiwiaGFuZGxlQ2xvc2UiLCJvblByb2Nlc3NDb25maXJtIiwiY2FsbGJhY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImFjdGlvbnMiLCJjb25maXJtIiwiY2FuY2VsIiwiRXJyb3IiLCJidG5Db25maXJtIiwiYnRuQ2FuY2VsIiwiZGVmYXVsdENvbmZpcm0iLCJ2YXJpYW50IiwiZGVmYXVsdENhbmNlbCIsImJvcmRlcmVkIiwiX2NoaWxkcmVuIiwiX2ljb25zIiwiY2xvc2VDbGlja2VkIiwiY2xvc2VCYWNrZHJvcCIsImNvbnRhaW5lciIsIm1vZGFsIiwidXNlUmVmIiwidXNlRWZmZWN0IiwicHJldlN0YXRlIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZSIsIm9uQ2xpY2tCYWNrZHJvcCIsImtleSIsIkljb25CdXR0b24iLCJpY29uIiwicmVmIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWxlcnQudHN4IiwiL3RzL2NoaWxkcmVuLnRzeCIsIi90cy9jb25maXJtL2luZGV4LnRzeCIsIi90cy9jb25maXJtL3VzZS1hY3Rpb24tcHJvcGVydGllcy50c3giLCIvdHMvbW9kYWwudHN4IiwiL2FsZXJ0LnRzIiwiL2NvbmZpcm0udHMiLCIvbW9kYWwtcHJvcHMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBR087VUFBVSxTQUNSRyxVQUFVQSxDQUFDQyxLQUF1QjtZQUMxQyxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdQLEtBQUssQ0FBQ1EsUUFBUSxDQUFDO2NBQUVDLFFBQVEsRUFBRTtZQUFLLENBQUUsQ0FBQztZQUM3RCxNQUFNO2NBQUVDLElBQUk7Y0FBRUMsS0FBSztjQUFFQyxRQUFRO2NBQUVDLE1BQU0sR0FBRztZQUFFLENBQUUsR0FBR1IsS0FBSztZQUNwRCxNQUFNUyxLQUFLLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3hCUCxRQUFRLENBQUM7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YixDQUFDO1lBRUQsTUFBTXBDLElBQUksR0FBWXBCLEtBQUssQ0FBQ29CLElBQUk7WUFFaEMsSUFBSUgsR0FBRyxHQUFXLFlBQVk7WUFDOUJBLEdBQUcsSUFBSWxCLEtBQUssQ0FBQ2EsU0FBUyxHQUFHYixLQUFLLENBQUNhLFNBQVMsR0FBRyxFQUFFO1lBRTdDLElBQUlRLElBQUksRUFBRUgsR0FBRyxJQUFJLGFBQWE7WUFDOUIsTUFBTWUsTUFBTSxHQUFHLEVBQUU7WUFFakIsSUFBSVosSUFBSSxFQUFFO2NBQ1RZLE1BQU0sQ0FBQ08sSUFBSSxDQUNWN0MsS0FBQSxDQUFBd0IsYUFBQTtnQkFBS3NFLEdBQUcsRUFBQyx1QkFBdUI7Z0JBQUM1RSxTQUFTLEVBQUM7Y0FBZSxHQUN6RGxCLEtBQUEsQ0FBQXdCLGFBQUE7Z0JBQ0NOLFNBQVMsRUFBQyxlQUFlO2dCQUN6QkksT0FBTyxFQUFFd0MsS0FBSyxJQUFHO2tCQUNoQkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Z0JBQ3hCO2NBQUMsR0FFRC9ELEtBQUEsQ0FBQXdCLGFBQUEsQ0FBQ21ELE1BQUEsQ0FBQW9CLFVBQVU7Z0JBQ1Y3RSxTQUFTLEVBQUMsWUFBWTtnQkFDdEJJLE9BQU8sRUFBRVIsS0FBSztnQkFBQSxnQkFDRCxPQUFPO2dCQUFBLGNBQ1QsT0FBTztnQkFDbEJnRixHQUFHLEVBQUMsZ0JBQWdCO2dCQUNwQkUsSUFBSSxFQUFDO2NBQU8sRUFDWCxFQUVGaEcsS0FBQSxDQUFBd0IsYUFBQSxDQUFDa0QsU0FBQSxDQUFBdEMsUUFBUTtnQkFBQSxHQUFLL0IsS0FBSztnQkFBRVMsS0FBSyxFQUFFQSxLQUFLO2dCQUFFZ0YsR0FBRyxFQUFDO2NBQWtCLEdBQ3ZEekYsS0FBSyxDQUFDdUIsUUFBUSxDQUNMLENBQ04sQ0FDRCxDQUNOOztZQUdGLE9BQ0M1QixLQUFBLENBQUF3QixhQUFBO2NBQUt5RSxHQUFHLEVBQUVsQixLQUFLO2NBQUV6RCxPQUFPLEVBQUV1RSxlQUFlO2NBQUUzRSxTQUFTLEVBQUVLO1lBQUcsR0FDdkRlLE1BQU0sQ0FDRjtVQUVSOzs7Ozs7Ozs7OztVQzdFQTs7VUFFQWMsTUFBQSxDQUFBOEMsY0FBQSxDQUFBbEUsT0FBQTtZQUNBZSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFLLE1BQUEsQ0FBQThDLGNBQUEsQ0FBQWxFLE9BQUE7WUFDQWUsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBSyxNQUFBLENBQUE4QyxjQUFBLENBQUFsRSxPQUFBO1lBQ0FlLEtBQUE7VUFDQSIsImlnbm9yZUxpc3QiOltdfQ==