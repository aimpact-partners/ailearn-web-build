System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "pragmate-ui@0.1.1/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, DropdownContainer, DropdownItem, DropdownMenu, DropdownToggle, useDropdownContext, Dropdown, IDropdownProps, IDropdownItemProps, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_framerMotion2) {
      dependency_3 = _framerMotion2;
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.1.1"], ["@aimpact/ailearn-app", "0.0.42"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3], ['pragmate-ui/components', dependency_4]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJtb3Rpb24iLCJkaXYiLCJhbmltYXRlIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInkiLCJleGl0IiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfdXNlQ2xpY2tDb250YWluZXIiLCJEcm9wZG93bkNvbnRhaW5lciIsInRvZ2dsZU1lbnUiLCJzZXRUb2dnbGVNZW51IiwidXNlRHJvcGRvd25Db250ZXh0IiwicmVmIiwidXNlQ2xpY2tDb250YWluZXIiLCJjbHMiLCJkZWZhdWx0IiwiX2NvbXBvbmVudHMiLCJEcm9wZG93bkl0ZW0iLCJwcm9wcyIsIm9uQ2xpY2siLCJ0YWciLCJMaW5rIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIkNvbnRyb2wiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidG9EZWxldGUiLCJmb3JFYWNoIiwia2V5IiwiX2FuaW1hdGVkRGl2IiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25Ub2dnbGUiLCJEcm9wZG93bkNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJwYXRoVGFyZ2V0IiwibGVuZ3RoIiwiaXNTYW1lTm9kZSIsImlzQUNoaWxkcmVuIiwiY29udGFpbnMiLCJnbG9iYWxUaGlzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9jb250YWluZXIiLCJEcm9wZG93biIsInVzZVN0YXRlIiwidmFsdWUiLCJQcm92aWRlciIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2NvbXBvbmVudHMvYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy9jb21wb25lbnRzL2NvbnRhaW5lci50c3giLCIvdHMvY29tcG9uZW50cy9pdGVtLnRzeCIsIi90cy9jb21wb25lbnRzL21lbnUudHN4IiwiL3RzL2NvbXBvbmVudHMvdG9nZ2xlLnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9ob29rcy91c2UtY2xpY2stY29udGFpbmVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVVFLFdBQVdBLENBQUM7WUFBRUMsUUFBUTtZQUFFQztVQUFTLElBQStCO1lBQUVELFFBQVEsRUFBRSxJQUFJO1lBQUVDLFNBQVMsRUFBRTtVQUFFLENBQUU7WUFDaEgsT0FDQ0wsS0FBQSxDQUFBTSxhQUFBLENBQUNKLGFBQUEsQ0FBQUssTUFBTSxDQUFDQyxHQUFHO2NBQ1ZILFNBQVMsRUFBRUEsU0FBUztjQUNwQkksT0FBTyxFQUFFO2dCQUNSQyxPQUFPLEVBQUUsQ0FBQztnQkFDVkMsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUU7aUJBQ1Y7Z0JBQ0RDLENBQUMsRUFBRTtlQUNIO2NBQ0RDLElBQUksRUFBRTtnQkFDTEgsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUU7aUJBQ1Y7Z0JBQ0RGLE9BQU8sRUFBRTs7WUFDVCxHQUVBTixRQUFRLENBQ0c7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQVcsTUFBQSxHQUFBZCxPQUFBO1VBQ0EsSUFBQWUsUUFBQSxHQUFBZixPQUFBO1VBQ0EsSUFBQWdCLGtCQUFBLEdBQUFoQixPQUFBO1VBR087VUFBVSxTQUFV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