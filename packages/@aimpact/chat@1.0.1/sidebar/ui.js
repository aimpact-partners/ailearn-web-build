System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/chat@1.0.1/sidebar/manager", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/icons", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/tooltip", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/components", "@aimpact/chat@1.0.1/extensions", "pragmate-ui@0.1.1/image", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/components"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_4 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_aimpactChat101SharedIcons) {
      dependency_6 = _aimpactChat101SharedIcons;
    }, function (_pragmateUi011Link) {
      dependency_7 = _pragmateUi011Link;
    }, function (_pragmateUi011Tooltip) {
      dependency_8 = _pragmateUi011Tooltip;
    }, function (_beyondJsKernel019Routing) {
      dependency_9 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_aimpactChat101Extensions) {
      dependency_11 = _aimpactChat101Extensions;
    }, function (_pragmateUi011Image) {
      dependency_12 = _pragmateUi011Image;
    }, function (_aimpactChatSdk100Session) {
      dependency_13 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101SharedComponents) {
      dependency_14 = _aimpactChat101SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.3.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.3.2"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.39"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2xpc3QiLCJfYXBwTG9nbyIsIl9tYW5hZ2VyIiwiX2hvb2tzIiwiQWN0aXZpdHlCYXIiLCJ0b3BJdGVtcyIsInNldFRvcEl0ZW1zIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiQXJyYXkiLCJmcm9tIiwiU2lkZWJhck1hbmFnZXIiLCJpdGVtcyIsInZhbHVlcyIsImJvdHRvbUl0ZW1zIiwic2V0Qm90dG9tSXRlbXMiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJBcHBMb2dvIiwiTGlzdEl0ZW1zIiwiX2ljb25zIiwiX2ljb25zMiIsIkl0ZW1Db250cm9sIiwiaXRlbSIsImlzQWN0aXZlIiwiY2xzIiwiY29udHJvbCIsImljb24iLCJsYXNzTmFtZSIsIklDT05TIiwiaGFzT3duUHJvcGVydHkiLCJJY29uQnV0dG9uIiwiX2xpbmsiLCJfdG9vbHRpcCIsIl9yb3V0aW5nIiwiX2NvbnRleHQiLCJfY29udHJvbCIsIkFjdGl2aXR5QmFyTGluayIsIm5hbWUiLCJocmVmIiwiRXhwbG9yZXIiLCJhY3Rpb24iLCJsaW5rIiwiaWQiLCJpc0xpbmsiLCJzZXRJc0FjdGl2ZSIsInJvdXRpbmciLCJ1cmkiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwidG9nZ2xlQWN0aW9uTWVudSIsInVzZVNpZGViYXJDb250ZXh0Iiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJhdHRycyIsImF0dHJpYnV0ZXMiLCJ0aXRsZSIsIkNvbnRyb2wiLCJMaW5rIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJwbGFjZW1lbnQiLCJrZXkiLCJleHBvcnRzIiwiX2l0ZW0iLCJtYXAiLCJpIiwiU2lkZWJhckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkV4cGxvcmVyVmlldyIsIm9wZW4iLCJhY3RpdmUiLCJfY29tcG9uZW50cyIsIl9leHRlbnNpb25zIiwiX2ltYWdlIiwicmVhZHkiLCJzZXRSZWFkeSIsImxvZ28iLCJzZXRMb2dvIiwidHlwZSIsInVzZUVmZmVjdCIsImV4dGVuc2lvbnMiLCJsb2FkIiwidGhlbiIsImxlbmd0aCIsIkltYWdlIiwic3JjIiwiSWNvbiIsIl9zZXNzaW9uIiwiUHJvZmlsZUljb24iLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ1c2VyUHJvcHMiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwiYWx0IiwicGhvdG9VUkwiLCJvbkVycm9yIiwiX2FjdGl2aXR5QmFyIiwiX2V4cGxvcmVyIiwiU2lkZWJhciIsInNldE9wZW4iLCJzZXRBY3RpdmUiLCJtb2R1bGUiLCJQcm92aWRlciIsInZhbHVlIiwicmVnaXN0ZXIiLCJUaGVtZVN3aXRjaGVyIiwibG9nb3V0IiwicHVzaFN0YXRlIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5LWJhci9pbmRleC50c3giLCIvdHMvYWN0aXZpdHktYmFyL2l0ZW0vY29udHJvbC50c3giLCIvdHMvYWN0aXZpdHktYmFyL2l0ZW0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXR5LWJhci9saXN0LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2V4cGxvcmVyLnRzeCIsIi90cy9pY29ucy9hcHAtbG9nby50c3giLCIvdHMvaWNvbnMvcHJvZmlsZS50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3JlZ2lzdHJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtV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