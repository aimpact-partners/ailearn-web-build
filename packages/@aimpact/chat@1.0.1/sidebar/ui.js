System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/chat@1.0.1/sidebar/manager", "pragmate-ui@0.0.37/icons", "pragmate-ui@0.0.37/link", "pragmate-ui@0.0.37/tooltip", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.37/components", "@aimpact/chat@1.0.1/shared/icons", "@aimpact/chat@1.0.1/extensions", "pragmate-ui@0.0.37/image", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/components"], function (_export, _context2) {
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
    }, function (_pragmateUi0037Icons) {
      dependency_4 = _pragmateUi0037Icons;
    }, function (_pragmateUi0037Link) {
      dependency_5 = _pragmateUi0037Link;
    }, function (_pragmateUi0037Tooltip) {
      dependency_6 = _pragmateUi0037Tooltip;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_8 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0037Components) {
      dependency_9 = _pragmateUi0037Components;
    }, function (_aimpactChat101SharedIcons) {
      dependency_10 = _aimpactChat101SharedIcons;
    }, function (_aimpactChat101Extensions) {
      dependency_11 = _aimpactChat101Extensions;
    }, function (_pragmateUi0037Image) {
      dependency_12 = _pragmateUi0037Image;
    }, function (_aimpactChatSdk100Session) {
      dependency_13 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101SharedComponents) {
      dependency_14 = _aimpactChat101SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/chat/sidebar/manager', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/link', dependency_5], ['pragmate-ui/tooltip', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/chat/shared/icons', dependency_10], ['@aimpact/chat/extensions', dependency_11], ['pragmate-ui/image', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['@aimpact/chat/shared/components', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/sidebar/ui');
      ims = new Map();
      /************************************
      INTERNAL MODULE: ./activity-bar/index
      ************************************/
      ims.set('./activity-bar/index', {
        hash: 2110201182,
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
          function ActivityBar() {
            const topItems = Array.from(_manager.SidebarManager.items.values());
            const bottomItems = Array.from(_manager.SidebarManager.bottomItems.values());
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
        hash: 1053101733,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemControl = ItemControl;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function ItemControl({
            item,
            isActive
          }) {
            const variant = `${isActive ? 'active' : 'nav'}`;
            const cls = `nav__item circle md`;
            if (item.control) {
              return _react.default.createElement(item.control, {
                icon: item.icon,
                variant: variant,
                className: cls
              });
            }
            const icon = item.icon;
            return _react.default.createElement(_icons.IconButton, {
              icon: icon,
              variant: variant,
              className: cls
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activity-bar/item/index
      *****************************************/

      ims.set('./activity-bar/item/index', {
        hash: 3770310234,
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
              icon,
              href,
              Explorer,
              action,
              link
            } = item;
            const isLink = !Explorer && !action;
            const [isActive, setIsActive] = _react.default.useState(_routing.routing.uri.pathname.includes(href));
            const {
              toggleActionMenu
            } = (0, _context.useSidebarContext)();
            (0, _hooks.useBinder)([_routing.routing], () => setIsActive(_routing.routing.uri.pathname.includes(href)));
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
        hash: 1659812748,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ListItems = ListItems;
          var _react = require("react");
          var _item = require("./item");
          function ListItems({
            items,
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
          const SidebarContext = _react.default.createContext({});
          exports.SidebarContext = SidebarContext;
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
        hash: 1067153692,
        creator: function (require, exports) {
          "use strict";

          var _manager = require("@aimpact/chat/sidebar/manager");
          var _profile = require("./icons/profile");
          var _routing = require("@beyond-js/kernel/routing");
          var _session = require("@aimpact/chat-sdk/session");
          var _components = require("@aimpact/chat/shared/components");
          (() => {
            _manager.SidebarManager.register([{
              id: 'profile',
              control: _profile.ProfileIcon,
              Explorer: 'aimpact-chat-user-profile',
              title: _session.sessionWrapper.user.getProperties().email
            }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2xpc3QiLCJfYXBwTG9nbyIsIl9tYW5hZ2VyIiwiQWN0aXZpdHlCYXIiLCJ0b3BJdGVtcyIsIkFycmF5IiwiZnJvbSIsIlNpZGViYXJNYW5hZ2VyIiwiaXRlbXMiLCJ2YWx1ZXMiLCJib3R0b21JdGVtcyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJBcHBMb2dvIiwiTGlzdEl0ZW1zIiwiX2ljb25zIiwiSXRlbUNvbnRyb2wiLCJpdGVtIiwiaXNBY3RpdmUiLCJ2YXJpYW50IiwiY2xzIiwiY29udHJvbCIsImljb24iLCJJY29uQnV0dG9uIiwiX2xpbmsiLCJfdG9vbHRpcCIsIl9yb3V0aW5nIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJfY29udHJvbCIsIkFjdGl2aXR5QmFyTGluayIsIm5hbWUiLCJocmVmIiwiRXhwbG9yZXIiLCJhY3Rpb24iLCJsaW5rIiwiaXNMaW5rIiwic2V0SXNBY3RpdmUiLCJ1c2VTdGF0ZSIsInJvdXRpbmciLCJ1cmkiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwidG9nZ2xlQWN0aW9uTWVudSIsInVzZVNpZGViYXJDb250ZXh0IiwidXNlQmluZGVyIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJhdHRycyIsImF0dHJpYnV0ZXMiLCJ0aXRsZSIsIkNvbnRyb2wiLCJMaW5rIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJwbGFjZW1lbnQiLCJleHBvcnRzIiwiX2l0ZW0iLCJtYXAiLCJpIiwia2V5IiwiU2lkZWJhckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkV4cGxvcmVyVmlldyIsIm9wZW4iLCJhY3RpdmUiLCJfY29tcG9uZW50cyIsIl9pY29uczIiLCJfZXh0ZW5zaW9ucyIsIl9pbWFnZSIsInJlYWR5Iiwic2V0UmVhZHkiLCJsb2dvIiwic2V0TG9nbyIsInR5cGUiLCJJQ09OUyIsInVzZUVmZmVjdCIsImV4dGVuc2lvbnMiLCJsb2FkIiwidGhlbiIsImxlbmd0aCIsIkltYWdlIiwic3JjIiwiSWNvbiIsIl9zZXNzaW9uIiwiUHJvZmlsZUljb24iLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ1c2VyUHJvcHMiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwiYWx0IiwicGhvdG9VUkwiLCJvbkVycm9yIiwiX2FjdGl2aXR5QmFyIiwiX2V4cGxvcmVyIiwiU2lkZWJhciIsInNldE9wZW4iLCJzZXRBY3RpdmUiLCJtb2R1bGUiLCJpZCIsIlByb3ZpZGVyIiwidmFsdWUiLCJfcHJvZmlsZSIsInJlZ2lzdGVyIiwiZW1haWwiLCJUaGVtZVN3aXRjaGVyIiwibG9nb3V0IiwicHVzaFN0YXRlIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5LWJhci9pbmRleC50c3giLCIvdHMvYWN0aXZpdHktYmFyL2l0ZW0vY29udHJvbC50c3giLCIvdHMvYWN0aXZpdHktYmFyL2l0ZW0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXR5LWJhci9saXN0LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2V4cGxvcmVyLnRzeCIsIi90cy9pY29ucy9hcHAtbG9nby50c3giLCIvdHMvaWNvbnMvcHJvZmlsZS50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3JlZ2lzdHJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUVj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