System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/chat@1.0.1/sidebar/manager", "@beyond-js/react-18-widgets@1.1.1/hooks", "pragmate-ui@0.0.6/icons", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.6/link", "pragmate-ui@0.0.6/tooltip", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/components", "@aimpact/chat@1.0.1/extensions", "pragmate-ui@0.0.6/image", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, AppLogo, ProfileIcon, Sidebar, __beyond_pkg, hmr;
  _export({
    AppLogo: void 0,
    ProfileIcon: void 0,
    Sidebar: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_aimpactChat101SidebarManager) {
      dependency_3 = _aimpactChat101SidebarManager;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_4 = _beyondJsReact18Widgets111Hooks;
    }, function (_pragmateUi006Icons) {
      dependency_5 = _pragmateUi006Icons;
    }, function (_aimpactChat101SharedIcons) {
      dependency_6 = _aimpactChat101SharedIcons;
    }, function (_pragmateUi006Link) {
      dependency_7 = _pragmateUi006Link;
    }, function (_pragmateUi006Tooltip) {
      dependency_8 = _pragmateUi006Tooltip;
    }, function (_beyondJsKernel019Routing) {
      dependency_9 = _beyondJsKernel019Routing;
    }, function (_pragmateUi006Components) {
      dependency_10 = _pragmateUi006Components;
    }, function (_aimpactChat101Extensions) {
      dependency_11 = _aimpactChat101Extensions;
    }, function (_pragmateUi006Image) {
      dependency_12 = _pragmateUi006Image;
    }, function (_aimpactChatSdk100Session) {
      dependency_13 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101SharedComponents) {
      dependency_14 = _aimpactChat101SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.3.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.3.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.31"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/sidebar/ui"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/chat/sidebar/manager', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['pragmate-ui/icons', dependency_5], ['@aimpact/chat/shared/icons', dependency_6], ['pragmate-ui/link', dependency_7], ['pragmate-ui/tooltip', dependency_8], ['@beyond-js/kernel/routing', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/chat/extensions', dependency_11], ['pragmate-ui/image', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['@aimpact/chat/shared/components', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/sidebar/ui');
      ims = new Map();
      /************************************
      INTERNAL MODULE: ./activity-bar/index
      ************************************/
      ims.set('./activity-bar/index', {
        hash: 3961468584,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ActivityBar;
          var _react = require("react");
          var _list = require("./list");
          var _appLogo = require("../icons/app-logo");
          var _manager = require("@aimpact/chat/sidebar/manager");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ActivityBar() {
            const [topItems, setTopItems] = _react.default.useState(Array.from(_manager.SidebarManager.items.values()));
            const [bottomItems, setBottomItems] = _react.default.useState(Array.from(_manager.SidebarManager.bottomItems.values()));
            (0, _hooks.useBinder)([_manager.SidebarManager], () => {
              console.log('cambiamos');
              setTopItems(Array.from(_manager.SidebarManager.items.values()));
              setBottomItems(Array.from(_manager.SidebarManager.bottomItems.values()));
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("aside", {
              className: 'aside-bar'
            }, _react.default.createElement("section", {
              className: 'aside__top'
            }, _react.default.createElement(_appLogo.AppLogo, null)), _react.default.createElement(_list.ListItems, {
              items: topItems,
              className: 'aside__nav'
            }), _react.default.createElement(_list.ListItems, {
              items: bottomItems,
              className: 'aside__footer'
            })));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./activity-bar/item/control
      *******************************************/

      ims.set('./activity-bar/item/control', {
        hash: 436944484,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemControl = ItemControl;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/chat/shared/icons");
          function ItemControl({
            item,
            isActive
          }) {
            const cls = `nav__item circle md ${isActive ? ' nav__item--active' : ''}`;
            if (item.control) {
              return _react.default.createElement(item.control, {
                icon: item.icon,
                lassName: cls
              });
            }
            const icon = _icons2.ICONS.hasOwnProperty(item.icon) ? _icons2.ICONS[item.icon] : item.icon;
            return _react.default.createElement(_icons.IconButton, {
              icon: icon,
              className: cls
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activity-bar/item/index
      *****************************************/

      ims.set('./activity-bar/item/index', {
        hash: 416632896,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityBarLink = void 0;
          var _react = require("react");
          var _link = require("pragmate-ui/link");
          var _tooltip = require("pragmate-ui/tooltip");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _control = require("./control");
          const ActivityBarLink = ({
            item
          }) => {
            const {
              name,
              href,
              Explorer,
              action,
              link,
              id
            } = item;
            const isLink = !Explorer && !action;
            const [isActive, setIsActive] = _react.default.useState(_routing.routing.uri.pathname.includes(href));
            const {
              toggleActionMenu
            } = (0, _context.useSidebarContext)();
            (0, _hooks.useBinder)([_routing.routing], () => {
              const isActive = _routing.routing.uri.pathname.includes(href) || _routing.routing.uri.pathname.includes(id);
              setIsActive(isActive);
            });
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              const onClick = item.onClick ?? item.action;
              if (onClick) {
                return onClick(event);
              }
              toggleActionMenu(item);
            };
            let attrs = {
              className: ''
            };
            if (item.attributes) attrs = {
              ...item.attributes
            };
            if (isLink) attrs.href = '/' + href;
            const title = item.title ?? name;
            const Control = link === false ? 'span' : _link.Link;
            return _react.default.createElement(_tooltip.Tooltip, {
              content: title,
              placement: 'right',
              key: item.id
            }, _react.default.createElement(Control, {
              ...attrs,
              onClick: onClick,
              className: 'aside-item'
            }, _react.default.createElement(_control.ItemControl, {
              isActive: isActive,
              item: item
            })));
          };
          exports.ActivityBarLink = ActivityBarLink;
        }
      });

      /***********************************
      INTERNAL MODULE: ./activity-bar/list
      ***********************************/

      ims.set('./activity-bar/list', {
        hash: 1420341788,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ListItems = ListItems;
          var _react = require("react");
          var _item = require("./item");
          function ListItems({
            items = [],
            className
          }) {
            return _react.default.createElement("section", {
              className: className
            }, items.map((item, i) => {
              return _react.default.createElement(_item.ActivityBarLink, {
                item: item,
                key: i
              });
            }));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 2122402811,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSidebarContext = exports.SidebarContext = void 0;
          var _react = require("react");
          const SidebarContext = exports.SidebarContext = _react.default.createContext({});
          const useSidebarContext = () => _react.default.useContext(SidebarContext);
          exports.useSidebarContext = useSidebarContext;
        }
      });

      /**************************
      INTERNAL MODULE: ./explorer
      **************************/

      ims.set('./explorer', {
        hash: 2576305374,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ExplorerView = ExplorerView;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("./context");
          function ExplorerView() {
            const {
              open,
              toggleActionMenu,
              active
            } = (0, _context.useSidebarContext)();
            const {
              pathname
            } = _routing.routing.uri;
            const cls = `explorer${open ? ' open' : ''}`;
            if (!active?.Explorer) return null;
            const {
              Explorer,
              href
            } = active;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("aside", {
              className: cls
            }, _react.default.createElement("div", {
              className: 'sidebar-content'
            }, _react.default.createElement(Explorer, null))));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./icons/app-logo
      ********************************/

      ims.set('./icons/app-logo', {
        hash: 4195591344,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppLogo = AppLogo;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/chat/shared/icons");
          var _extensions = require("@aimpact/chat/extensions");
          var _image = require("pragmate-ui/image");
          /* bundle */
          function AppLogo() {
            const [ready, setReady] = _react.default.useState();
            const [logo, setLogo] = _react.default.useState({
              type: 'icon',
              icon: _icons2.ICONS['rvd']
            });
            _react.default.useEffect(() => {
              _extensions.extensions.load(['app-menu-icon']).then(extensions => {
                setReady(true);
                if (!extensions.length) return;
                setLogo(extensions[0]);
              });
            }, []);
            if (!ready) {
              return _react.default.createElement("div", {
                className: 'aside-item'
              }, _react.default.createElement(_image.Image, {
                src: '#'
              }));
            }
            const Control = logo.type === 'icon' ? _icons.Icon : _image.Image;
            const attrs = {};
            if (logo.type === 'img') attrs.src = logo.src;else if (logo.type === 'icon') attrs.icon = logo.icon;
            return _react.default.createElement("div", {
              className: 'aside-item'
            }, _react.default.createElement(_components.Link, {
              href: '/'
            }, _react.default.createElement(Control, {
              ...attrs,
              className: 'lg'
            })));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./icons/profile
      *******************************/

      ims.set('./icons/profile', {
        hash: 2058794887,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _session = require("@aimpact/chat-sdk/session");
          /* bundle */
          const ProfileIcon = ({
            onClick
          }) => {
            const [loadError, setLoadError] = _react.default.useState(false);
            if (!_session.sessionWrapper.user) return;
            const userProps = _session.sessionWrapper.user.getProperties();
            const handleLoadError = () => setLoadError(true);
            return _react.default.createElement("div", {
              className: 'aside-item',
              onClick: onClick
            }, !loadError ? _react.default.createElement("img", {
              alt: 'user image profile',
              src: userProps.photoURL,
              onError: handleLoadError
            }) : _react.default.createElement(_icons.Icon, {
              className: 'lg',
              icon: 'user'
            }));
          };
          exports.ProfileIcon = ProfileIcon;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3904242059,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Sidebar = Sidebar;
          var _react = require("react");
          var _activityBar = require("./activity-bar");
          var _explorer = require("./explorer");
          var _context = require("./context");
          /*bundle*/
          function Sidebar() {
            const [open, setOpen] = _react.default.useState(false);
            const [active, setActive] = _react.default.useState();
            const toggleActionMenu = module => {
              if (!active || active.id === module.id) setOpen(!open);
              setActive(module);
            };
            return _react.default.createElement(_context.SidebarContext.Provider, {
              value: {
                open,
                toggleActionMenu,
                active
              }
            }, _react.default.createElement("div", {
              className: 'nav-wrapper'
            }, _react.default.createElement(_activityBar.default, null), _react.default.createElement(_explorer.ExplorerView, null)));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./registry
      **************************/

      ims.set('./registry', {
        hash: 4254811252,
        creator: function (require, exports) {
          "use strict";

          var _manager = require("@aimpact/chat/sidebar/manager");
          var _routing = require("@beyond-js/kernel/routing");
          var _session = require("@aimpact/chat-sdk/session");
          var _components = require("@aimpact/chat/shared/components");
          (() => {
            _manager.SidebarManager.register([{
              control: _components.ThemeSwitcher,
              title: 'Theme',
              id: 'themeSwitcher',
              link: false
            }, {
              icon: 'exit',
              id: 'logout',
              title: 'Logout',
              link: false,
              onClick: async event => {
                event.stopPropagation();
                await _session.sessionWrapper.logout();
                _routing.routing.pushState('/auth/login');
              }
            }], 'bottom');
          })();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./icons/app-logo",
        "from": "AppLogo",
        "name": "AppLogo"
      }, {
        "im": "./icons/profile",
        "from": "ProfileIcon",
        "name": "ProfileIcon"
      }, {
        "im": "./index",
        "from": "Sidebar",
        "name": "Sidebar"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AppLogo') && _export("AppLogo", AppLogo = require ? require('./icons/app-logo').AppLogo : value);
        (require || prop === 'ProfileIcon') && _export("ProfileIcon", ProfileIcon = require ? require('./icons/profile').ProfileIcon : value);
        (require || prop === 'Sidebar') && _export("Sidebar", Sidebar = require ? require('./index').Sidebar : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2xpc3QiLCJfYXBwTG9nbyIsIl9tYW5hZ2VyIiwiX2hvb2tzIiwiQWN0aXZpdHlCYXIiLCJ0b3BJdGVtcyIsInNldFRvcEl0ZW1zIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiQXJyYXkiLCJmcm9tIiwiU2lkZWJhck1hbmFnZXIiLCJpdGVtcyIsInZhbHVlcyIsImJvdHRvbUl0ZW1zIiwic2V0Qm90dG9tSXRlbXMiLCJ1c2VCaW5kZXIiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiQXBwTG9nbyIsIkxpc3RJdGVtcyIsIl9pY29ucyIsIl9pY29uczIiLCJJdGVtQ29udHJvbCIsIml0ZW0iLCJpc0FjdGl2ZSIsImNscyIsImNvbnRyb2wiLCJpY29uIiwibGFzc05hbWUiLCJJQ09OUyIsImhhc093blByb3BlcnR5IiwiSWNvbkJ1dHRvbiIsIl9saW5rIiwiX3Rvb2x0aXAiLCJfcm91dGluZyIsIl9jb250ZXh0IiwiX2NvbnRyb2wiLCJBY3Rpdml0eUJhckxpbmsiLCJuYW1lIiwiaHJlZiIsIkV4cGxvcmVyIiwiYWN0aW9uIiwibGluayIsImlkIiwiaXNMaW5rIiwic2V0SXNBY3RpdmUiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsInRvZ2dsZUFjdGlvbk1lbnUiLCJ1c2VTaWRlYmFyQ29udGV4dCIsIm9uQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiYXR0cnMiLCJhdHRyaWJ1dGVzIiwidGl0bGUiLCJDb250cm9sIiwiTGluayIsIlRvb2x0aXAiLCJjb250ZW50IiwicGxhY2VtZW50Iiwia2V5IiwiZXhwb3J0cyIsIl9pdGVtIiwibWFwIiwiaSIsIlNpZGViYXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJFeHBsb3JlclZpZXciLCJvcGVuIiwiYWN0aXZlIiwiX2NvbXBvbmVudHMiLCJfZXh0ZW5zaW9ucyIsIl9pbWFnZSIsInJlYWR5Iiwic2V0UmVhZHkiLCJsb2dvIiwic2V0TG9nbyIsInR5cGUiLCJ1c2VFZmZlY3QiLCJleHRlbnNpb25zIiwibG9hZCIsInRoZW4iLCJsZW5ndGgiLCJJbWFnZSIsInNyYyIsIkljb24iLCJfc2Vzc2lvbiIsIlByb2ZpbGVJY29uIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidXNlclByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsImFsdCIsInBob3RvVVJMIiwib25FcnJvciIsIl9hY3Rpdml0eUJhciIsIl9leHBsb3JlciIsIlNpZGViYXIiLCJzZXRPcGVuIiwic2V0QWN0aXZlIiwibW9kdWxlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInJlZ2lzdGVyIiwiVGhlbWVTd2l0Y2hlciIsImxvZ291dCIsInB1c2hTdGF0ZSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0eS1iYXIvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXR5LWJhci9pdGVtL2NvbnRyb2wudHN4IiwiL3RzL2FjdGl2aXR5LWJhci9pdGVtL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0eS1iYXIvbGlzdC50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9leHBsb3Jlci50c3giLCIvdHMvaWNvbnMvYXBwLWxvZ28udHN4IiwiL3RzL2ljb25zL3Byb2ZpbGUudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9yZWdpc3RyeS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxR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