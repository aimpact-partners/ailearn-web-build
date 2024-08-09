System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.1/components"], function (_export, _context2) {
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
    }, function (_pragmateUi100Beta1Components) {
      dependency_4 = _pragmateUi100Beta1Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/ailearn-app", "0.1.3-dev.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.1/dropdown"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3], ['pragmate-ui/components', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.1/dropdown');
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
        hash: 4207993415,
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
        hash: 1155104003,
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
        hash: 3840324528,
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
        hash: 2744155022,
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
        hash: 2450413676,
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