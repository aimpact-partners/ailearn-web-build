System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/chat@1.0.1/sidebar/manager", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/icons", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.6/link", "pragmate-ui@0.0.6/tooltip", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/components", "@aimpact/chat@1.0.1/extensions", "pragmate-ui@0.0.6/image", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/components"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_4 = _beyondJsReact18Widgets104Hooks;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "0.1.5"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 3403001104,
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
        hash: 4184320029,
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
              placement: 'right'
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
        hash: 2145033942,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ExplorerView = ExplorerView;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("pragmate-ui/icons");
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
            }, _react.default.createElement(Explorer, null))), _react.default.createElement("div", {
              className: `toggle-explorer ${open === href ? 'open' : ''}`
            }, _react.default.createElement(_icons.IconButton, {
              className: 'lg',
              icon: 'expandMore',
              onClick: () => toggleActionMenu(href)
            })));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./icons/app-logo
      ********************************/

      ims.set('./icons/app-logo', {
        hash: 1631617552,
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
              icon: _icons2.ICONS['logo']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2xpc3QiLCJfYXBwTG9nbyIsIl9tYW5hZ2VyIiwiX2hvb2tzIiwiQWN0aXZpdHlCYXIiLCJ0b3BJdGVtcyIsInNldFRvcEl0ZW1zIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiQXJyYXkiLCJmcm9tIiwiU2lkZWJhck1hbmFnZXIiLCJpdGVtcyIsInZhbHVlcyIsImJvdHRvbUl0ZW1zIiwic2V0Qm90dG9tSXRlbXMiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJBcHBMb2dvIiwiTGlzdEl0ZW1zIiwiX2ljb25zIiwiX2ljb25zMiIsIkl0ZW1Db250cm9sIiwiaXRlbSIsImlzQWN0aXZlIiwiY2xzIiwiY29udHJvbCIsImljb24iLCJsYXNzTmFtZSIsIklDT05TIiwiaGFzT3duUHJvcGVydHkiLCJJY29uQnV0dG9uIiwiX2xpbmsiLCJfdG9vbHRpcCIsIl9yb3V0aW5nIiwiX2NvbnRleHQiLCJfY29udHJvbCIsIkFjdGl2aXR5QmFyTGluayIsIm5hbWUiLCJocmVmIiwiRXhwbG9yZXIiLCJhY3Rpb24iLCJsaW5rIiwiaWQiLCJpc0xpbmsiLCJzZXRJc0FjdGl2ZSIsInJvdXRpbmciLCJ1cmkiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwidG9nZ2xlQWN0aW9uTWVudSIsInVzZVNpZGViYXJDb250ZXh0Iiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJhdHRycyIsImF0dHJpYnV0ZXMiLCJ0aXRsZSIsIkNvbnRyb2wiLCJMaW5rIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJwbGFjZW1lbnQiLCJleHBvcnRzIiwiX2l0ZW0iLCJtYXAiLCJpIiwia2V5IiwiU2lkZWJhckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkV4cGxvcmVyVmlldyIsIm9wZW4iLCJhY3RpdmUiLCJfY29tcG9uZW50cyIsIl9leHRlbnNpb25zIiwiX2ltYWdlIiwicmVhZHkiLCJzZXRSZWFkeSIsImxvZ28iLCJzZXRMb2dvIiwidHlwZSIsInVzZUVmZmVjdCIsImV4dGVuc2lvbnMiLCJsb2FkIiwidGhlbiIsImxlbmd0aCIsIkltYWdlIiwic3JjIiwiSWNvbiIsIl9zZXNzaW9uIiwiUHJvZmlsZUljb24iLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ1c2VyUHJvcHMiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwiYWx0IiwicGhvdG9VUkwiLCJvbkVycm9yIiwiX2FjdGl2aXR5QmFyIiwiX2V4cGxvcmVyIiwiU2lkZWJhciIsInNldE9wZW4iLCJzZXRBY3RpdmUiLCJtb2R1bGUiLCJQcm92aWRlciIsInZhbHVlIiwicmVnaXN0ZXIiLCJUaGVtZVN3aXRjaGVyIiwibG9nb3V0IiwicHVzaFN0YXRlIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5LWJhci9pbmRleC50c3giLCIvdHMvYWN0aXZpdHktYmFyL2l0ZW0vY29udHJvbC50c3giLCIvdHMvYWN0aXZpdHktYmFyL2l0ZW0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXR5LWJhci9saXN0LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2V4cGxvcmVyLnRzeCIsIi90cy9pY29ucy9hcHAtbG9nby50c3giLCIvdHMvaWNvbnMvcHJvZmlsZS50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3JlZ2lzdHJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtV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