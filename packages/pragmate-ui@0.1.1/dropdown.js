System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "framer-motion@10.18.0", "pragmate-ui@0.1.1/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, DropdownContainer, DropdownItem, DropdownMenu, DropdownToggle, useDropdownContext, Dropdown, IDropdownProps, IDropdownItemProps, __beyond_pkg, hmr;
  _export({
    DropdownContainer: void 0,
    DropdownItem: void 0,
    DropdownMenu: void 0,
    DropdownToggle: void 0,
    useDropdownContext: void 0,
    Dropdown: void 0,
    IDropdownProps: void 0,
    IDropdownItemProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_framerMotion2) {
      dependency_2 = _framerMotion2;
    }, function (_pragmateUi011Components) {
      dependency_3 = _pragmateUi011Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.1.1"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.1.1/dropdown"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['framer-motion', dependency_2], ['pragmate-ui/components', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/dropdown');
      ims = new Map();
      /*****************************************
      INTERNAL MODULE: ./components/animated-div
      *****************************************/
      ims.set('./components/animated-div', {
        hash: 744696097,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedDiv = AnimatedDiv;
          var React = require("react");
          var _framerMotion = require("framer-motion");
          function AnimatedDiv({
            children,
            className
          } = {
            children: null,
            className: ''
          }) {
            return React.createElement(_framerMotion.motion.div, {
              className: className,
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.1
                },
                y: 0
              },
              exit: {
                transition: {
                  duration: 0.3
                },
                opacity: 0
              }
            }, children);
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./components/container
      **************************************/

      ims.set('./components/container', {
        hash: 2258949651,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownContainer = DropdownContainer;
          var _react = require("react");
          var _context = require("../context");
          var _useClickContainer = require("../hooks/use-click-container");
          /*bundle*/
          function DropdownContainer({
            children,
            className
          }) {
            const {
              toggleMenu,
              setToggleMenu
            } = (0, _context.useDropdownContext)();
            const {
              ref
            } = (0, _useClickContainer.useClickContainer)({
              toggleMenu,
              setToggleMenu
            });
            const cls = `pui-dropdown-container${className ? ` ${className}` : ''}${toggleMenu ? ' pui-dropdown-container--opened' : ''}`;
            return _react.default.createElement("div", {
              ref: ref,
              className: cls
            }, children);
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./components/item
      *********************************/

      ims.set('./components/item', {
        hash: 4123003515,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownItem = DropdownItem;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function DropdownItem(props) {
            const {
              setToggleMenu
            } = (0, _context.useDropdownContext)();
            const {
              children,
              className,
              onClick,
              tag = _components.Link
            } = props;
            const handleClick = async event => {
              event.stopPropagation();
              if (!!onClick && typeof onClick === 'function') await onClick(event);
              setToggleMenu(false);
            };
            const Control = tag ?? 'div';
            const cls = `pui-dropdown-menu__item${className ? ` ${className}` : ''}`;
            const properties = Object.assign({}, props);
            const toDelete = ['children', 'className', 'onClick', 'tag', 'id'];
            toDelete.forEach(key => delete properties[key]);
            return _react.default.createElement("li", null, _react.default.createElement(Control, {
              className: cls,
              onClick: handleClick,
              ...properties
            }, children));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./components/menu
      *********************************/

      ims.set('./components/menu', {
        hash: 391814111,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownMenu = DropdownMenu;
          var _react = require("react");
          var _context = require("../context");
          var _animatedDiv = require("./animated-div");
          /*bundle*/
          function DropdownMenu(props) {
            const {
              toggleMenu
            } = (0, _context.useDropdownContext)();
            if (!toggleMenu) return null;
            let cls = `pui-dropdown-menu  pui-dropdown-menu--opened`;
            return _react.default.createElement(_animatedDiv.AnimatedDiv, {
              className: cls
            }, _react.default.createElement("ul", {
              className: 'pui-dropdown-menu__list'
            }, props.children));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./components/toggle
      ***********************************/

      ims.set('./components/toggle', {
        hash: 2994452618,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownToggle = DropdownToggle;
          var React = require("react");
          var _context = require("../context");
          /*bundle*/
          function DropdownToggle({
            children,
            className
          }) {
            const cls = `pui-dropdown__toggle${className ? ` ${className}` : ''}`;
            const {
              toggleMenu,
              setToggleMenu
            } = (0, _context.useDropdownContext)();
            const onClick = event => {
              event.stopPropagation();
              setToggleMenu(!toggleMenu);
            };
            return React.createElement("div", {
              onClick: onClick,
              className: cls
            }, children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 3904183137,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDropdownContext = exports.DropdownContext = void 0;
          var _react = require("react");
          const DropdownContext = exports.DropdownContext = _react.default.createContext(null);
          /*bundle */
          const useDropdownContext = () => (0, _react.useContext)(DropdownContext);
          exports.useDropdownContext = useDropdownContext;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./hooks/use-click-container
      *******************************************/

      ims.set('./hooks/use-click-container', {
        hash: 3079559365,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useClickContainer = useClickContainer;
          var _react = require("react");
          function useClickContainer({
            toggleMenu,
            setToggleMenu
          }) {
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const onClick = event => {
                const {
                  current
                } = ref;
                const {
                  target,
                  currentTarget
                } = event;
                const path = event.composedPath ? event.composedPath() : [];
                const pathTarget = path.length > 0 ? path[0] : null;
                const isSameNode = current === target || current === currentTarget || pathTarget === current;
                const isAChildren = current?.contains(pathTarget);
                if (toggleMenu && !isSameNode && !isAChildren) setToggleMenu(false);
              };
              globalThis.document.addEventListener('click', onClick);
              return () => globalThis.document.removeEventListener('click', onClick);
            }, [toggleMenu]);
            return {
              ref
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1134357420,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dropdown = Dropdown;
          var _react = require("react");
          var _context = require("./context");
          var _container = require("./components/container");
          /*bundle*/
          function Dropdown({
            children,
            className
          }) {
            const [toggleMenu, setToggleMenu] = _react.default.useState(false);
            const value = {
              toggleMenu,
              setToggleMenu
            };
            return _react.default.createElement(_context.DropdownContext.Provider, {
              value: value
            }, _react.default.createElement(_container.DropdownContainer, {
              className: className
            }, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2479703114,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./components/container",
        "from": "DropdownContainer",
        "name": "DropdownContainer"
      }, {
        "im": "./components/item",
        "from": "DropdownItem",
        "name": "DropdownItem"
      }, {
        "im": "./components/menu",
        "from": "DropdownMenu",
        "name": "DropdownMenu"
      }, {
        "im": "./components/toggle",
        "from": "DropdownToggle",
        "name": "DropdownToggle"
      }, {
        "im": "./context",
        "from": "useDropdownContext",
        "name": "useDropdownContext"
      }, {
        "im": "./index",
        "from": "Dropdown",
        "name": "Dropdown"
      }, {
        "im": "./types",
        "from": "IDropdownProps",
        "name": "IDropdownProps"
      }, {
        "im": "./types",
        "from": "IDropdownItemProps",
        "name": "IDropdownItemProps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'DropdownContainer') && _export("DropdownContainer", DropdownContainer = require ? require('./components/container').DropdownContainer : value);
        (require || prop === 'DropdownItem') && _export("DropdownItem", DropdownItem = require ? require('./components/item').DropdownItem : value);
        (require || prop === 'DropdownMenu') && _export("DropdownMenu", DropdownMenu = require ? require('./components/menu').DropdownMenu : value);
        (require || prop === 'DropdownToggle') && _export("DropdownToggle", DropdownToggle = require ? require('./components/toggle').DropdownToggle : value);
        (require || prop === 'useDropdownContext') && _export("useDropdownContext", useDropdownContext = require ? require('./context').useDropdownContext : value);
        (require || prop === 'Dropdown') && _export("Dropdown", Dropdown = require ? require('./index').Dropdown : value);
        (require || prop === 'IDropdownProps') && _export("IDropdownProps", IDropdownProps = require ? require('./types').IDropdownProps : value);
        (require || prop === 'IDropdownItemProps') && _export("IDropdownItemProps", IDropdownItemProps = require ? require('./types').IDropdownItemProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJtb3Rpb24iLCJkaXYiLCJhbmltYXRlIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInkiLCJleGl0IiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfdXNlQ2xpY2tDb250YWluZXIiLCJEcm9wZG93bkNvbnRhaW5lciIsInRvZ2dsZU1lbnUiLCJzZXRUb2dnbGVNZW51IiwidXNlRHJvcGRvd25Db250ZXh0IiwicmVmIiwidXNlQ2xpY2tDb250YWluZXIiLCJjbHMiLCJkZWZhdWx0IiwiX2NvbXBvbmVudHMiLCJEcm9wZG93bkl0ZW0iLCJwcm9wcyIsIm9uQ2xpY2siLCJ0YWciLCJMaW5rIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIkNvbnRyb2wiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidG9EZWxldGUiLCJmb3JFYWNoIiwia2V5IiwiX2FuaW1hdGVkRGl2IiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25Ub2dnbGUiLCJEcm9wZG93bkNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJwYXRoVGFyZ2V0IiwibGVuZ3RoIiwiaXNTYW1lTm9kZSIsImlzQUNoaWxkcmVuIiwiY29udGFpbnMiLCJnbG9iYWxUaGlzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9jb250YWluZXIiLCJEcm9wZG93biIsInVzZVN0YXRlIiwidmFsdWUiLCJQcm92aWRlciIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2NvbXBvbmVudHMvYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy9jb21wb25lbnRzL2NvbnRhaW5lci50c3giLCIvdHMvY29tcG9uZW50cy9pdGVtLnRzeCIsIi90cy9jb21wb25lbnRzL21lbnUudHN4IiwiL3RzL2NvbXBvbmVudHMvdG9nZ2xlLnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9ob29rcy91c2UtY2xpY2stY29udGFpbmVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxhQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVRSxXQUFXQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUM7VUFBUyxJQUErQjtZQUFFRCxRQUFRLEVBQUUsSUFBSTtZQUFFQyxTQUFTLEVBQUU7VUFBRSxDQUFFO1lBQ2hILE9BQ0NMLEtBQUEsQ0FBQU0sYUFBQSxDQUFDSixhQUFBLENBQUFLLE1BQU0sQ0FBQ0MsR0FBRztjQUNWSCxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJJLE9BQU8sRUFBRTtnQkFDUkMsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZDLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFO2lCQUNWO2dCQUNEQyxDQUFDLEVBQUU7ZUFDSDtjQUNEQyxJQUFJLEVBQUU7Z0JBQ0xILFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFO2lCQUNWO2dCQUNERixPQUFPLEVBQUU7O1lBQ1QsR0FFQU4sUUFBUSxDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUFXLE1BQUEsR0FBQWQsT0FBQTtVQUNBLElBQUFlLFFBQUEsR0FBQWYsT0FBQTtVQUNBLElBQUFnQixrQkFBQSxHQUFBaEIsT0FBQTtVQUdPO1VBQVUsU0FBVWlC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