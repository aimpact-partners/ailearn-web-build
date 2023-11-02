System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/chat@1.0.1/sidebar/manager", "pragmate-ui@0.0.37/icons", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.37/link", "pragmate-ui@0.0.37/tooltip", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.37/components", "@aimpact/chat@1.0.1/extensions", "pragmate-ui@0.0.37/image", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/components"], function (_export, _context2) {
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
    }, function (_aimpactChat101SharedIcons) {
      dependency_5 = _aimpactChat101SharedIcons;
    }, function (_pragmateUi0037Link) {
      dependency_6 = _pragmateUi0037Link;
    }, function (_pragmateUi0037Tooltip) {
      dependency_7 = _pragmateUi0037Tooltip;
    }, function (_beyondJsKernel019Routing) {
      dependency_8 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_9 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0037Components) {
      dependency_10 = _pragmateUi0037Components;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/chat/sidebar/manager', dependency_3], ['pragmate-ui/icons', dependency_4], ['@aimpact/chat/shared/icons', dependency_5], ['pragmate-ui/link', dependency_6], ['pragmate-ui/tooltip', dependency_7], ['@beyond-js/kernel/routing', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/chat/extensions', dependency_11], ['pragmate-ui/image', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['@aimpact/chat/shared/components', dependency_14]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxDQUFDLGFBQWEsQ0FBQztjQUNqQzthQUNBLENBQ0QsRUFDRCxRQUFRLENBQ1I7VUFDRixDQUFDLEdBQUciLCJuYW1lcyI6WyJBY3Rpdml0eUJhciIsInRvcEl0ZW1zIiwiQXJyYXkiLCJmcm9tIiwiU2lkZWJhck1hbmFnZXIiLCJpdGVtcyIsInZhbHVlcyIsImJvdHRvbUl0ZW1zIiwiUmVhY3QiLCJjbGFzc05hbWUiLCJBcHBMb2dvIiwiTGlzdEl0ZW1zIiwiSXRlbUNvbnRyb2wiLCJpdGVtIiwiaXNBY3RpdmUiLCJjbHMiLCJjb250cm9sIiwiaWNvbiIsImxhc3NOYW1lIiwiSUNPTlMiLCJoYXNPd25Qcm9wZXJ0eSIsIkljb25CdXR0b24iLCJBY3Rpdml0eUJhckxpbmsiLCJuYW1lIiwiaHJlZiIsIkV4cGxvcmVyIiwiYWN0aW9uIiwibGluayIsImlkIiwiaXNMaW5rIiwic2V0SXNBY3RpdmUiLCJ1c2VTdGF0ZSIsInJvdXRpbmciLCJ1cmkiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwidG9nZ2xlQWN0aW9uTWVudSIsIm9uQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiYXR0cnMiLCJhdHRyaWJ1dGVzIiwidGl0bGUiLCJDb250cm9sIiwiTGluayIsIlRvb2x0aXAiLCJjb250ZW50IiwicGxhY2VtZW50IiwiZXhwb3J0cyIsIm1hcCIsImkiLCJrZXkiLCJTaWRlYmFyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTaWRlYmFyQ29udGV4dCIsInVzZUNvbnRleHQiLCJFeHBsb3JlclZpZXciLCJvcGVuIiwiYWN0aXZlIiwicmVhZHkiLCJzZXRSZWFkeSIsImxvZ28iLCJzZXRMb2dvIiwidHlwZSIsInVzZUVmZmVjdCIsImV4dGVuc2lvbnMiLCJsb2FkIiwidGhlbiIsImxlbmd0aCIsIkltYWdlIiwic3JjIiwiSWNvbiIsIlByb2ZpbGVJY29uIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidXNlclByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsImFsdCIsInBob3RvVVJMIiwib25FcnJvciIsIlNpZGViYXIiLCJzZXRPcGVuIiwic2V0QWN0aXZlIiwibW9kdWxlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInJlZ2lzdGVyIiwiZW1haWwiLCJUaGVtZVN3aXRjaGVyIiwibG9nb3V0IiwicHVzaFN0YXRlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9hY3Rpdml0eS1iYXIvaW5kZXgudHN4IiwidHMvYWN0aXZpdHktYmFyL2l0ZW0vY29udHJvbC50c3giLCJ0cy9hY3Rpdml0eS1iYXIvaXRlbS9pbmRleC50c3giLCJ0cy9hY3Rpdml0eS1iYXIvbGlzdC50c3giLCJ0cy9jb250ZXh0LnRzIiwidHMvZXhwbG9yZXIudHN4IiwidHMvaWNvbnMvYXBwLWxvZ28udHN4IiwidHMvaWNvbnMvcHJvZmlsZS50c3giLCJ0cy9pbmRleC50c3giLCJ0cy9yZWdpc3RyeS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==