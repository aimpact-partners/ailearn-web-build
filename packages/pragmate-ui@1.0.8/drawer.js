System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/base", "framer-motion@10.18.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, CloseButton, useDrawerContext, Drawer, Container, __beyond_pkg, hmr;
  _export({
    CloseButton: void 0,
    useDrawerContext: void 0,
    Drawer: void 0,
    Container: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi108Icons) {
      dependency_3 = _pragmateUi108Icons;
    }, function (_pragmateUi108Base) {
      dependency_4 = _pragmateUi108Base;
    }, function (_framerMotion2) {
      dependency_5 = _framerMotion2;
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
          "vspecifier": "pragmate-ui@1.0.8/drawer"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/base', dependency_4], ['framer-motion', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.8/drawer');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./animations
      ****************************/
      ims.set('./animations', {
        hash: 114192017,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.animations = void 0;
          const animations = exports.animations = {
            slideDown: {
              initial: {
                y: '-50%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            default: {
              initial: {
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            fadeInUpfadeOutLeft: {
              initial: {
                y: '-90%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                x: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            }
          };
        }
      });

      /******************************
      INTERNAL MODULE: ./close-button
      ******************************/

      ims.set('./close-button', {
        hash: 1994997619,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CloseButton = CloseButton;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          /*bundle*/
          function CloseButton({
            className,
            onClick
          }) {
            const {
              onClose
            } = (0, _context.useDrawerContext)();
            const listener = event => {
              if (onClick) return onClick();
              onClose();
            };
            const cls = `pui-drawer-close-button circle${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_icons.IconButton, {
              className: cls,
              icon: 'close',
              onClick: listener
            });
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 3738712239,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDrawerContext = exports.DrawerContext = void 0;
          var _react = require("react");
          const DrawerContext = exports.DrawerContext = _react.default.createContext({
            open: false,
            onClose: () => {}
          });
          /*bundle*/
          const useDrawerContext = () => {
            const context = _react.default.useContext(DrawerContext);
            if (!context) {
              throw new Error('useDrawerContext must be used within a DrawerProvider');
            }
            return context;
          };
          exports.useDrawerContext = useDrawerContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2434882231,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Container = void 0;
          exports.Drawer = Drawer;
          var React = require("react");
          var _framerMotion = require("framer-motion");
          var _context = require("./context");
          const positionClasses = {
            left: 'pui-drawer-left',
            right: 'pui-drawer-right',
            top: 'pui-drawer-top',
            bottom: 'pui-drawer-bottom'
          };
          /*bundle*/
          function Drawer({
            className,
            position = 'left',
            open,
            onClose,
            children,
            closeBackdrop = true
          }) {
            let drawerClass = open ? `pui-drawer ${positionClasses[position]}` : 'pui-drawer hidden';
            if (className) drawerClass += ' ' + className;
            if (open) drawerClass += ` pui-drawer-open-${position}`;
            if (!open) return;
            const cls = `pui-drawer-container${className ? ` ${className}` : ''}`;
            const onClickContent = e => {
              e.stopPropagation();
            };
            const onClickBackdrop = e => {
              if (closeBackdrop) {
                onClose();
              }
            };
            return React.createElement(_context.DrawerContext.Provider, {
              value: {
                open,
                onClose
              }
            }, React.createElement(_framerMotion.motion.div, {
              className: cls,
              onClick: onClickBackdrop
            }, React.createElement(_framerMotion.motion.div, {
              onClick: onClickContent,
              initial: {
                x: '+100vh',
                opacity: 0
              },
              animate: {
                x: 0,
                opacity: 1
              },
              exit: {
                x: '100vh',
                opacity: 0
              },
              transition: {
                duration: 0.3,
                ease: 'linear'
              },
              className: drawerClass
            }, React.createElement("div", {
              className: "pui-drawer-content"
            }, children))));
          }
          /*bundle*/
          const Container = exports.Container = Drawer;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./close-button",
        "from": "CloseButton",
        "name": "CloseButton"
      }, {
        "im": "./context",
        "from": "useDrawerContext",
        "name": "useDrawerContext"
      }, {
        "im": "./index",
        "from": "Drawer",
        "name": "Drawer"
      }, {
        "im": "./index",
        "from": "Container",
        "name": "Container"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CloseButton') && _export("CloseButton", CloseButton = require ? require('./close-button').CloseButton : value);
        (require || prop === 'useDrawerContext') && _export("useDrawerContext", useDrawerContext = require ? require('./context').useDrawerContext : value);
        (require || prop === 'Drawer') && _export("Drawer", Drawer = require ? require('./index').Drawer : value);
        (require || prop === 'Container') && _export("Container", Container = require ? require('./index').Container : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhbmltYXRpb25zIiwiZXhwb3J0cyIsInNsaWRlRG93biIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiZGVmYXVsdCIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX3JlYWN0IiwicmVxdWlyZSIsIl9pY29ucyIsIl9jb250ZXh0IiwiQ2xvc2VCdXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwib25DbG9zZSIsInVzZURyYXdlckNvbnRleHQiLCJsaXN0ZW5lciIsImV2ZW50IiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsIkljb25CdXR0b24iLCJpY29uIiwiRHJhd2VyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJvcGVuIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJFcnJvciIsIlJlYWN0IiwiX2ZyYW1lck1vdGlvbiIsInBvc2l0aW9uQ2xhc3NlcyIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsIkRyYXdlciIsInBvc2l0aW9uIiwiY2hpbGRyZW4iLCJjbG9zZUJhY2tkcm9wIiwiZHJhd2VyQ2xhc3MiLCJvbkNsaWNrQ29udGVudCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNsaWNrQmFja2Ryb3AiLCJQcm92aWRlciIsInZhbHVlIiwibW90aW9uIiwiZGl2IiwiZWFzZSIsIkNvbnRhaW5lciJdLCJzb3VyY2VzIjpbIi90cy9hbmltYXRpb25zLnRzeCIsIi90cy9jbG9zZS1idXR0b24udHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQU8sTUFBTUEsVUFBVSxHQUFBQyxPQUFBLENBQUFELFVBQUEsR0FBRztZQUN6QkUsU0FBUyxFQUFFO2NBQ1ZDLE9B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