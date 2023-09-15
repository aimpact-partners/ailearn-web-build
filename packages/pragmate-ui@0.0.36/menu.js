System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/image", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Menu, __beyond_pkg, hmr;
  _export("Menu", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Image) {
      dependency_4 = _pragmateUi0036Image;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/menu"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/image', dependency_4], ['@beyond-js/kernel/routing', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/menu');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./content
      *************************/
      ims.set('./content', {
        hash: 2796574182,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SideMenuContent = void 0;
          var _react = require("react");
          var _list = require("./list");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          const SideMenuContent = ({
            title
          }) => {
            const {
              toggleMenu,
              isOpen
            } = (0, _context.useMenuContext)();
            const cls = isOpen ? "side-menu__content" : "side-menu__content__hide side-menu__content";
            const defaultTitle = title ?? "Title";
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_icons.IconButton, {
              icon: "close",
              className: "side-menu__toggle",
              onClick: toggleMenu
            }), _react.default.createElement("header", null, _react.default.createElement("span", null, defaultTitle)), _react.default.createElement(_list.SideMenuList, null));
          };
          exports.SideMenuContent = SideMenuContent;
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 4010051245,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMenuContext = exports.MenuContext = void 0;
          var _react = require("react");
          const MenuContext = (0, _react.createContext)({});
          exports.MenuContext = MenuContext;
          const useMenuContext = () => (0, _react.useContext)(MenuContext);
          exports.useMenuContext = useMenuContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 319265641,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Menu = void 0;
          var _react = require("react");
          var _content = require("./content");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          /*bundle*/
          const Menu = ({
            items,
            title
          }) => {
            const [isOpen, setIsOpen] = (0, _react.useState)(false);
            const toggleMenu = () => {
              setIsOpen(!isOpen);
            };
            return _react.default.createElement(_context.MenuContext.Provider, {
              value: {
                isOpen,
                items,
                toggleMenu
              }
            }, _react.default.createElement(_icons.IconButton, {
              onClick: toggleMenu,
              icon: "menu"
            }), _react.default.createElement(_content.SideMenuContent, {
              title: title
            }), isOpen && _react.default.createElement("div", {
              onClick: toggleMenu,
              className: "background-black"
            }));
          };
          exports.Menu = Menu;
        }
      });

      /***********************
      INTERNAL MODULE: ./items
      ***********************/

      ims.set('./items', {
        hash: 2650623906,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.menuItems = void 0;
          const menuItems = [{
            title: "Sub title",
            link: "#",
            icon: "user"
          }, {
            title: "Sub title",
            link: "#",
            icon: "favorite"
          }, {
            title: "Sub title",
            link: "#",
            icon: "star"
          }, {
            title: "Sub title",
            link: "#",
            icon: "off"
          }, {
            title: "Sub title",
            link: "#",
            icon: "bell"
          }];
          exports.menuItems = menuItems;
        }
      });

      /****************************
      INTERNAL MODULE: ./list/index
      ****************************/

      ims.set('./list/index', {
        hash: 3097741487,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SideMenuList = void 0;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          const SideMenuList = () => {
            const {
              items
            } = (0, _context.useMenuContext)();
            const output = items.map(item => _react.default.createElement(_item.SideMenuItem, {
              key: item.icon,
              item: item
            }));
            return _react.default.createElement("ul", {
              className: "side-menu__list"
            }, output);
          };
          exports.SideMenuList = SideMenuList;
        }
      });

      /***************************
      INTERNAL MODULE: ./list/item
      ***************************/

      ims.set('./list/item', {
        hash: 2834511559,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SideMenuItem = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("../context");
          const SideMenuItem = ({
            item
          }) => {
            const {
              title,
              link,
              icon
            } = item;
            const {
              toggleMenu
            } = (0, _context.useMenuContext)();
            const onClick = event => {
              event.preventDefault();
              event.stopPropagation();
              _routing.routing.pushState(link);
              toggleMenu();
            };
            return _react.default.createElement("li", {
              className: "side-menu__item"
            }, _react.default.createElement("a", {
              onClick: onClick
            }, _react.default.createElement(_icons.Icon, {
              icon: icon
            }), _react.default.createElement("span", null, title)));
          };
          exports.SideMenuItem = SideMenuItem;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Menu",
        "name": "Menu"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Menu') && _export("Menu", Menu = require ? require('./index').Menu : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2xpc3QiLCJfaWNvbnMiLCJfY29udGV4dCIsIlNpZGVNZW51Q29udGVudCIsInRpdGxlIiwidG9nZ2xlTWVudSIsImlzT3BlbiIsInVzZU1lbnVDb250ZXh0IiwiY2xzIiwiZGVmYXVsdFRpdGxlIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJTaWRlTWVudUxpc3QiLCJleHBvcnRzIiwiTWVudUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb250ZW50IiwiTWVudSIsIml0ZW1zIiwic2V0SXNPcGVuIiwidXNlU3RhdGUiLCJQcm92aWRlciIsInZhbHVlIiwibWVudUl0ZW1zIiwibGluayIsIl9pdGVtIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsIlNpZGVNZW51SXRlbSIsImtleSIsIl9yb3V0aW5nIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJJY29uIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvY29udGVudC50c3giLCIvY29kZS90cy9jb250ZXh0LnRzeCIsIi9jb2RlL3RzL2luZGV4LnRzeCIsIi9jb2RlL3RzL2l0ZW1zLnRzIiwiL2NvZGUvdHMvbGlzdC9pbmRleC50c3giLCIvY29kZS90cy9saXN0L2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNPLE1BQU1JLGVBQWUsR0FB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