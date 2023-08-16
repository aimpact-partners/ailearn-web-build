System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@0.0.1/session", "@aimpact/chat@0.0.2/shared/components", "@aimpact/chat@0.0.2/navigation", "pragmate-ui@0.0.36/link", "@aimpact/chat@0.0.2/shared/icons", "pragmate-ui@0.0.36/tooltip", "@beyond-js/react-18-widgets@1.0.1/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, AppLogo, ProfileIcon, Sidebar, __beyond_pkg, hmr;
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
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_4 = _beyondJsKernel019Routing;
    }, function (_aimpactChatSdk001Session) {
      dependency_5 = _aimpactChatSdk001Session;
    }, function (_aimpactChat002SharedComponents) {
      dependency_6 = _aimpactChat002SharedComponents;
    }, function (_aimpactChat002Navigation) {
      dependency_7 = _aimpactChat002Navigation;
    }, function (_pragmateUi0036Link) {
      dependency_8 = _pragmateUi0036Link;
    }, function (_aimpactChat002SharedIcons) {
      dependency_9 = _aimpactChat002SharedIcons;
    }, function (_pragmateUi0036Tooltip) {
      dependency_10 = _pragmateUi0036Tooltip;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_11 = _beyondJsReact18Widgets101Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "0.0.2"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@0.0.2/sidebar",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/chat/shared/components', dependency_6], ['@aimpact/chat/navigation', dependency_7], ['pragmate-ui/link', dependency_8], ['@aimpact/chat/shared/icons', dependency_9], ['pragmate-ui/tooltip', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@0.0.2/sidebar.code');
      ims = new Map();
      /************************************
      INTERNAL MODULE: ./activity-bar/index
      ************************************/
      ims.set('./activity-bar/index', {
        hash: 4252736684,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ActivityBar;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _routing = require("@beyond-js/kernel/routing");
          var _list = require("./list");
          var _appLogo = require("../icons/app-logo");
          var _profile = require("../icons/profile");
          var _session = require("@aimpact/chat-sdk/session");
          var _components = require("@aimpact/chat/shared/components");
          function ActivityBar() {
            const [open, setOpen] = _react.default.useState(false);
            const toggleOpen = () => setOpen(!open);
            const cls = `explorer ${open ? 'open' : ''}`;
            const logout = event => {
              event.stopPropagation();
              _session.sessionWrapper.auth.logout();
              _routing.routing.pushState('/auth/login');
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("aside", {
              className: 'aside-bar'
            }, _react.default.createElement("section", {
              className: 'aside__top'
            }, _react.default.createElement(_appLogo.AppLogo, null)), _react.default.createElement(_list.ListItems, null), _react.default.createElement("section", {
              className: 'aside__footer'
            }, _react.default.createElement(_profile.ProfileIcon, {
              onClick: toggleOpen
            }), _react.default.createElement("div", {
              className: 'aside-item'
            }, _react.default.createElement(_components.ThemeSwitcher, null)), _react.default.createElement("div", {
              className: 'aside-item'
            }, _react.default.createElement(_icons.Icon, {
              icon: 'exit',
              onClick: logout
            })))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./activity-bar/list
      ***********************************/

      ims.set('./activity-bar/list', {
        hash: 337535349,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ListItems = ListItems;
          var _react = require("react");
          var _navigation = require("@aimpact/chat/navigation");
          var _navLink = require("../nav-link");
          function ListItems() {
            const appModules = _navigation.AppNavigation.modules;
            return _react.default.createElement("section", {
              className: 'aside__nav'
            }, Array.from(appModules.items.values()).map((item, i) => {
              const {
                name,
                icon,
                href,
                Explorer,
                action
              } = item;
              return _react.default.createElement(_navLink.NavLink, {
                item: item,
                key: i,
                name: name,
                href: href,
                icon: icon,
                isLink: !Explorer && !action
              });
            }));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 2947760699,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSidebarContext = exports.SidebarContext = void 0;
          var React = require("react");
          const SidebarContext = React.createContext({});
          exports.SidebarContext = SidebarContext;
          const useSidebarContext = () => React.useContext(SidebarContext);
          exports.useSidebarContext = useSidebarContext;
        }
      });

      /**************************
      INTERNAL MODULE: ./explorer
      **************************/

      ims.set('./explorer', {
        hash: 1777789148,
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
              modules,
              active
            } = (0, _context.useSidebarContext)();
            const module = modules.items.get(active);
            const {
              pathname
            } = _routing.routing.uri;
            const cls = `explorer${open ? ' open' : ''}`;
            if (!module?.Explorer) return null;
            const {
              Explorer,
              href
            } = module;
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
        hash: 1845760461,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppLogo = void 0;
          var _react = require("react");
          var _link = require("pragmate-ui/link");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/chat/shared/icons");
          /* bundle */
          const AppLogo = () => _react.default.createElement("div", {
            className: 'aside-item'
          }, _react.default.createElement(_link.Link, {
            href: '/'
          }, _react.default.createElement(_icons.Icon, {
            icon: _icons2.ICONS['logo'],
            className: 'lg'
          })));
          exports.AppLogo = AppLogo;
        }
      });

      /*******************************
      INTERNAL MODULE: ./icons/profile
      *******************************/

      ims.set('./icons/profile', {
        hash: 1355952848,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = void 0;
          var _react = require("react");
          var _session = require("@aimpact/chat-sdk/session");
          var _icons = require("pragmate-ui/icons");
          /* bundle */
          const ProfileIcon = ({
            onClick
          }) => {
            const [loadError, setLoadError] = _react.default.useState(false);
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
        hash: 3450156435,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Sidebar = Sidebar;
          var React = require("react");
          var _navigation = require("@aimpact/chat/navigation");
          var _activityBar = require("./activity-bar");
          var _explorer = require("./explorer");
          var _context = require("./context");
          /*bundle*/
          function Sidebar() {
            const appModules = _navigation.AppNavigation.modules;
            const items = Array.from(appModules.items.values());
            const [open, setOpen] = React.useState(false);
            const [active, setActive] = React.useState('');
            const toggleActionMenu = module => {
              if (active === module) setOpen(!open);
              setActive(module);
            };
            return React.createElement(_context.SidebarContext.Provider, {
              value: {
                open,
                modules: appModules,
                toggleActionMenu,
                active
              }
            }, React.createElement("div", {
              className: 'nav-wrapper'
            }, React.createElement(_activityBar.default, null), React.createElement(_explorer.ExplorerView, null)));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./nav-link
      **************************/

      ims.set('./nav-link', {
        hash: 3410436952,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavLink = void 0;
          var _react = require("react");
          var _link = require("pragmate-ui/link");
          var _icons = require("pragmate-ui/icons");
          var _tooltip = require("pragmate-ui/tooltip");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          const NavLink = ({
            item,
            isLink = false,
            name,
            href,
            icon
          }) => {
            const [isActive, setIsActive] = _react.default.useState(_routing.routing.uri.pathname.includes(href));
            const {
              toggleActionMenu,
              active,
              setOpened,
              opened
            } = (0, _context.useSidebarContext)();
            (0, _hooks.useBinder)([_routing.routing], () => setIsActive(_routing.routing.uri.pathname.includes(href)));
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              if (item.action) {
                return item.action();
              }
              toggleActionMenu(item.id);
            };
            let attrs = {
              className: ''
            };
            if (item.attributes) attrs = {
              ...item.attributes
            };
            const title = item.title ?? name;
            const NavButton = () => {
              return _react.default.createElement(_icons.IconButton, {
                icon: icon,
                variant: `${isActive ? 'active' : 'nav'}`,
                className: `nav__item circle md${attrs?.className ? ` ${attrs.className}` : ''}`,
                onClick: onClick
              });
            };
            const Linked = () => {
              return _react.default.createElement(_link.Link, {
                href: `/${href}`,
                ...attrs,
                onClick: onClick
              }, _react.default.createElement(_icons.IconButton, {
                icon: icon,
                variant: `${isActive ? 'active' : 'nav'}`,
                className: `nav__item circle md${attrs?.className ? ` ${attrs.className}` : ''}`
              }));
            };
            const Control = isLink ? _react.default.createElement(Linked, null) : _react.default.createElement(NavButton, null);
            return _react.default.createElement(_tooltip.Tooltip, {
              text: title,
              position: 'right'
            }, Control);
          };
          exports.NavLink = NavLink;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3JvdXRpbmciLCJfbGlzdCIsIl9hcHBMb2dvIiwiX3Byb2ZpbGUiLCJfc2Vzc2lvbiIsIl9jb21wb25lbnRzIiwiQWN0aXZpdHlCYXIiLCJvcGVuIiwic2V0T3BlbiIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInRvZ2dsZU9wZW4iLCJjbHMiLCJsb2dvdXQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInNlc3Npb25XcmFwcGVyIiwiYXV0aCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJBcHBMb2dvIiwiTGlzdEl0ZW1zIiwiUHJvZmlsZUljb24iLCJvbkNsaWNrIiwiVGhlbWVTd2l0Y2hlciIsIkljb24iLCJpY29uIiwiX25hdmlnYXRpb24iLCJfbmF2TGluayIsImFwcE1vZHVsZXMiLCJBcHBOYXZpZ2F0aW9uIiwibW9kdWxlcyIsIkFycmF5IiwiZnJvbSIsIml0ZW1zIiwidmFsdWVzIiwibWFwIiwiaXRlbSIsImkiLCJuYW1lIiwiaHJlZiIsIkV4cGxvcmVyIiwiYWN0aW9uIiwiTmF2TGluayIsImtleSIsImlzTGluayIsIlJlYWN0IiwiU2lkZWJhckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZVNpZGViYXJDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb250ZXh0IiwiRXhwbG9yZXJWaWV3IiwidG9nZ2xlQWN0aW9uTWVudSIsImFjdGl2ZSIsIm1vZHVsZSIsImdldCIsInBhdGhuYW1lIiwidXJpIiwiSWNvbkJ1dHRvbiIsIl9saW5rIiwiX2ljb25zMiIsIkxpbmsiLCJJQ09OUyIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwiYWx0Iiwic3JjIiwicGhvdG9VUkwiLCJvbkVycm9yIiwiX2FjdGl2aXR5QmFyIiwiX2V4cGxvcmVyIiwiU2lkZWJhciIsInNldEFjdGl2ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJfdG9vbHRpcCIsIl9ob29rcyIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJpbmNsdWRlcyIsInNldE9wZW5lZCIsIm9wZW5lZCIsInVzZUJpbmRlciIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJhdHRycyIsImF0dHJpYnV0ZXMiLCJ0aXRsZSIsIk5hdkJ1dHRvbiIsInZhcmlhbnQiLCJMaW5rZWQiLCJDb250cm9sIiwiVG9vbHRpcCIsInRleHQiLCJwb3NpdGlvbiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0eS1iYXIvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXR5LWJhci9saXN0LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2V4cGxvcmVyLnRzeCIsIi90cy9pY29ucy9hcHAtbG9nby50c3giLCIvdHMvaWNvbnMvcHJvZmlsZS50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL25hdi1saW5rLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxRQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxRQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBTyxXQUFBLEdBQUFQLE9BQUE7VUFFYyxTQUFVUSxXQUFXQSxDQUFBO1lBQ2xDLE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR1gsTUFBQSxDQUFBWSxPQUFLLENBQUNDLFFBQVEsQ0FB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