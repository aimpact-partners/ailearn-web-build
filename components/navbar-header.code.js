System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.1/hooks", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/breadcrumb", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/dropdown", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/widgets@1.1.0/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, NavbarHeader, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    NavbarHeader: void 0,
    ProfileIcon: void 0,
    ThemeSwitcher: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_3 = _beyondJsReact18Widgets111Hooks;
    }, function (_pragmateUi011Icons) {
      dependency_4 = _pragmateUi011Icons;
    }, function (_pragmateUi011Image) {
      dependency_5 = _pragmateUi011Image;
    }, function (_pragmateUi011Breadcrumb) {
      dependency_6 = _pragmateUi011Breadcrumb;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_pragmateUi011Components) {
      dependency_8 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_9 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Dropdown) {
      dependency_10 = _pragmateUi011Dropdown;
    }, function (_beyondJsKernel019Routing) {
      dependency_11 = _beyondJsKernel019Routing;
    }, function (_beyondJsWidgets110Render) {
      dependency_12 = _beyondJsWidgets110Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/components/navbar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/image', dependency_5], ['pragmate-ui/breadcrumb', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/components', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['pragmate-ui/dropdown', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['@beyond-js/widgets/render', dependency_12]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/components/navbar-header.code');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 1377720157,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2194800419,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          var _beyond_context = require("beyond_context");
          var _context = require("./context");
          var _menu = require("./menu");
          var _userMenu = require("./user-menu");
          var _breadcrumb = require("pragmate-ui/breadcrumb");
          /*bundle*/
          function NavbarHeader({
            children,
            className,
            breadcrumb
          }) {
            const cls = `navbar-header${className ? ` ${className}` : ''}`;
            const ref = _react.default.useRef();
            const [menuOpened, setOpenMenu] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textsReady) return null;
            const toggleMenu = () => setOpenMenu(!menuOpened);
            const value = {
              texts,
              menuOpened,
              toggleMenu
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement("header", {
              className: cls,
              ref: ref
            }, _react.default.createElement("section", {
              className: "left-section"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "bars",
              onClick: toggleMenu,
              className: "hamburger-icon circle"
            }), _react.default.createElement(_image.Image, {
              src: "/assets/RVD.AI.Branding.png",
              alt: "RVD.AI",
              className: "navbar-logo"
            }), _react.default.createElement(_breadcrumb.BreadCrumb, {
              items: breadcrumb
            })), _react.default.createElement("section", {
              className: "right-section"
            }, children, _react.default.createElement(_userMenu.UserMenu, null))), _react.default.createElement(_menu.AsideMenu, null));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/context
      ******************************/

      ims.set('./menu/context', {
        hash: 617749427,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useOffCanvasMenuContext = exports.OffCanvasMenuContext = void 0;
          var _react = require("react");
          const OffCanvasMenuContext = exports.OffCanvasMenuContext = _react.default.createContext({});
          const useOffCanvasMenuContext = () => _react.default.useContext(OffCanvasMenuContext);
          exports.useOffCanvasMenuContext = useOffCanvasMenuContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./menu/index
      ****************************/

      ims.set('./menu/index', {
        hash: 4152304743,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideMenu = AsideMenu;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _teacher = require("./teacher");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _session = require("@aimpact/chat-sdk/session");
          var _student = require("./student");
          var _context2 = require("./context");
          function AsideMenu() {
            const {
              toggleMenu,
              menuOpened,
              texts
            } = (0, _context.useModuleContext)();
            const [isTeacher, setTeacher] = _react.default.useState(!!_session.sessionWrapper?.user?.teacher);
            const ref = (0, _react.useRef)(null);
            (0, _hooks.useBinder)([_session.sessionWrapper], () => setTeacher(!!_session.sessionWrapper.user?.teacher), 'login');
            const cls = `off-canvas-menu${menuOpened ? ' open' : ''}`;
            const clsContainer = `off-canvas-menu-container${menuOpened ? ' opened' : ''}`;
            const Menu = isTeacher ? _teacher.TeacherMenu : _student.StudentMenu;
            const clickOnBackdrop = event => {
              if (ref.current.isSameNode(event.target)) toggleMenu(!menuOpened);
            };
            return _react.default.createElement(_context2.OffCanvasMenuContext.Provider, {
              value: {
                texts,
                menuOpened,
                toggleMenu
              }
            }, _react.default.createElement("div", {
              className: clsContainer,
              onClick: clickOnBackdrop,
              ref: ref
            }, _react.default.createElement("aside", {
              className: cls
            }, _react.default.createElement("header", {
              className: "flex flex-container flex-space-between"
            }, _react.default.createElement("div", {
              className: "menu__header"
            }, _react.default.createElement(_icons.Icon, {
              icon: "bars",
              onClick: toggleMenu
            }), "RVD.AI Rivadavia"), _react.default.createElement(_icons.Icon, {
              icon: "close",
              onClick: toggleMenu
            })), _react.default.createElement(Menu, null))));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./menu/item
      ***************************/

      ims.set('./menu/item', {
        hash: 3673834216,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MenuItem = MenuItem;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _context = require("./context");
          function MenuItem({
            icon,
            href,
            children,
            ...props
          }) {
            const Control = href ? _components.Link : 'div';
            const {
              toggleMenu,
              menuOpened
            } = (0, _context.useOffCanvasMenuContext)();
            const attrs = {
              className: 'container__item'
            };
            if (href) {
              attrs['href'] = href;
            }
            const onClick = () => toggleMenu(!menuOpened);
            return _react.default.createElement("li", {
              ...props
            }, _react.default.createElement(Control, {
              ...attrs,
              onClick: onClick
            }, icon && _react.default.createElement(_icons.Icon, {
              icon: _icons2.ICONS[icon]
            }), children));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/student
      ******************************/

      ims.set('./menu/student', {
        hash: 3033976130,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentMenu = StudentMenu;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          function StudentMenu() {
            const {
              texts: {
                menu: texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("nav", null, _react.default.createElement(_item.MenuItem, {
              icon: "classrooms",
              href: "/classrooms/list"
            }, texts.classrooms), _react.default.createElement(_item.MenuItem, {
              icon: "school",
              href: "/organizations/join"
            }, texts.organizations));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/teacher
      ******************************/

      ims.set('./menu/teacher', {
        hash: 1376047197,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherMenu = TeacherMenu;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          function TeacherMenu() {
            const {
              texts: {
                menu: texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("nav", null, _react.default.createElement(_item.MenuItem, {
              icon: "module",
              href: "/modules/list"
            }, texts.modules), _react.default.createElement(_item.MenuItem, {
              icon: "schools",
              href: "/organizations/join"
            }, texts.organizations), _react.default.createElement(_item.MenuItem, {
              icon: "classrooms",
              href: "/classrooms/list"
            }, texts.classrooms));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./user-menu/index
      *********************************/

      ims.set('./user-menu/index', {
        hash: 85630236,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserMenu = UserMenu;
          var _react = require("react");
          var _dropdown = require("pragmate-ui/dropdown");
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _item = require("./item");
          var _themeButton = require("./theme-button");
          var _profile = require("./profile");
          var _context = require("../context");
          function UserMenu() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const logout = async event => {
              event.stopPropagation();
              await _session.sessionWrapper.logout();
              _routing.routing.pushState('/auth/login');
            };
            return _react.default.createElement(_dropdown.Dropdown, {
              className: "user-menu"
            }, _react.default.createElement(_dropdown.DropdownToggle, {
              className: "content-user"
            }, _react.default.createElement(_profile.ProfileIcon, null)), _react.default.createElement(_dropdown.DropdownMenu, null, _react.default.createElement(_item.UserMenuItem, {
              href: "/users/me",
              icon: "user"
            }, texts.userMenu.preferences), _react.default.createElement(_themeButton.ThemeSwitcher, null), _react.default.createElement(_item.UserMenuItem, {
              onClick: logout,
              icon: "exit"
            }, texts.userMenu.logout)));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./user-menu/item
      ********************************/

      ims.set('./user-menu/item', {
        hash: 1711784581,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserMenuItem = UserMenuItem;
          var _react = require("react");
          var _dropdown = require("pragmate-ui/dropdown");
          var _icons = require("pragmate-ui/icons");
          function UserMenuItem({
            icon,
            children,
            ...props
          }) {
            return _react.default.createElement(_dropdown.DropdownItem, {
              ...props
            }, _react.default.createElement("div", {
              className: "container__item"
            }, icon && _react.default.createElement(_icons.Icon, {
              icon: icon
            }), children));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./user-menu/profile
      ***********************************/

      ims.set('./user-menu/profile', {
        hash: 2952732086,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _session = require("@aimpact/chat-sdk/session");
          var _image = require("pragmate-ui/image");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /* bundle */
          const ProfileIcon = () => {
            const [loadError, setLoadError] = _react.default.useState(false);
            const [userProps, setProps] = _react.default.useState(_session.sessionWrapper.user?.getProperties() ?? {});
            (0, _hooks.useBinder)([_session.sessionWrapper], () => setProps(_session.sessionWrapper.user.getProperties()), 'login');
            if (!_session.sessionWrapper.user) return;
            const handleLoadError = () => setLoadError(true);
            return _react.default.createElement("div", {
              className: "dropdown-menu__user-icon"
            }, !loadError ? _react.default.createElement(_image.Image, {
              alt: "user image profile",
              src: userProps.photoURL,
              onError: handleLoadError
            }) : _react.default.createElement(_icons.Icon, {
              className: "lg",
              icon: 'user'
            }));
          };
          exports.ProfileIcon = ProfileIcon;
        }
      });

      /****************************************
      INTERNAL MODULE: ./user-menu/theme-button
      ****************************************/

      ims.set('./user-menu/theme-button', {
        hash: 1023347963,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeSwitcher = ThemeSwitcher;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _render = require("@beyond-js/widgets/render");
          var _item = require("./item");
          /*bundle*/
          function ThemeSwitcher() {
            const theme = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
            const themeStorage = localStorage.getItem('theme');
            const defaultTheme = theme ? 'dark' : 'light';
            const userTheme = themeStorage ?? defaultTheme;
            const [icon, setIcon] = _react.default.useState(userTheme === 'dark' ? 'sun' : 'moon');
            function handleChange(e) {
              e.preventDefault();
              const container = document.querySelector('html');
              const theme = icon === 'sun' ? 'light' : 'dark';
              container.setAttribute('data-beyond-mode', theme);
              localStorage.setItem('theme', theme);
              _render.widgets.attributes.add('data-beyond-mode', theme);
              setIcon(theme === 'dark' ? 'sun' : 'moon');
            }
            _react.default.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector('html');
              container.setAttribute('data-beyond-mode', themeStorage);
            }, []);
            return _react.default.createElement(_item.UserMenuItem, {
              onClick: handleChange
            }, _react.default.createElement(_icons.Icon, {
              icon: icon,
              onClick: handleChange
            }), _react.default.createElement("span", null, "Theme"));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./user-menu/user-item
      *************************************/

      ims.set('./user-menu/user-item', {
        hash: 1679571895,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserItem = UserItem;
          var _react = require("react");
          function UserItem() {
            return _react.default.createElement("div", null);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "NavbarHeader",
        "name": "NavbarHeader"
      }, {
        "im": "./user-menu/profile",
        "from": "ProfileIcon",
        "name": "ProfileIcon"
      }, {
        "im": "./user-menu/theme-button",
        "from": "ThemeSwitcher",
        "name": "ThemeSwitcher"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'NavbarHeader') && _export("NavbarHeader", NavbarHeader = require ? require('./index').NavbarHeader : value);
        (require || prop === 'ProfileIcon') && _export("ProfileIcon", ProfileIcon = require ? require('./user-menu/profile').ProfileIcon : value);
        (require || prop === 'ThemeSwitcher') && _export("ThemeSwitcher", ThemeSwitcher = require ? require('./user-menu/theme-button').ThemeSwitcher : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzIiwiX2ljb25zIiwiX2ltYWdlIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbnRleHQiLCJfbWVudSIsIl91c2VyTWVudSIsIl9icmVhZGNydW1iIiwiTmF2YmFySGVhZGVyIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJicmVhZGNydW1iIiwiY2xzIiwicmVmIiwidXNlUmVmIiwibWVudU9wZW5lZCIsInNldE9wZW5NZW51IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInRvZ2dsZU1lbnUiLCJ2YWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIkltYWdlIiwic3JjIiwiYWx0IiwiQnJlYWRDcnVtYiIsIml0ZW1zIiwiVXNlck1lbnUiLCJBc2lkZU1lbnUiLCJPZmZDYW52YXNNZW51Q29udGV4dCIsInVzZU9mZkNhbnZhc01lbnVDb250ZXh0IiwiX3RlYWNoZXIiLCJfc2Vzc2lvbiIsIl9zdHVkZW50IiwiX2NvbnRleHQyIiwiaXNUZWFjaGVyIiwic2V0VGVhY2hlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRlYWNoZXIiLCJ1c2VCaW5kZXIiLCJjbHNDb250YWluZXIiLCJNZW51IiwiVGVhY2hlck1lbnUiLCJTdHVkZW50TWVudSIsImNsaWNrT25CYWNrZHJvcCIsImV2ZW50IiwiY3VycmVudCIsImlzU2FtZU5vZGUiLCJ0YXJnZXQiLCJJY29uIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiTWVudUl0ZW0iLCJocmVmIiwicHJvcHMiLCJDb250cm9sIiwiTGluayIsImF0dHJzIiwiSUNPTlMiLCJfaXRlbSIsIm1lbnUiLCJjbGFzc3Jvb21zIiwib3JnYW5pemF0aW9ucyIsIm1vZHVsZXMiLCJfZHJvcGRvd24iLCJfcm91dGluZyIsIl90aGVtZUJ1dHRvbiIsIl9wcm9maWxlIiwibG9nb3V0Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIkRyb3Bkb3duIiwiRHJvcGRvd25Ub2dnbGUiLCJQcm9maWxlSWNvbiIsIkRyb3Bkb3duTWVudSIsIlVzZXJNZW51SXRlbSIsInVzZXJNZW51IiwicHJlZmVyZW5jZXMiLCJUaGVtZVN3aXRjaGVyIiwiRHJvcGRvd25JdGVtIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwic2V0UHJvcHMiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwicGhvdG9VUkwiLCJvbkVycm9yIiwiX3JlbmRlciIsInRoZW1lIiwiZ2xvYmFsVGhpcyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwidGhlbWVTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlZmF1bHRUaGVtZSIsInVzZXJUaGVtZSIsInNldEljb24iLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJ1c2VFZmZlY3QiLCJVc2VySXRlbSJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvbWVudS9jb250ZXh0LnRzeCIsIi90cy9tZW51L2luZGV4LnRzeCIsIi90cy9tZW51L2l0ZW0udHN4IiwiL3RzL21lbnUvc3R1ZGVudC50c3giLCIvdHMvbWVudS90ZWFjaGVyLnRzeCIsIi90cy91c2VyLW1lbnUvaW5kZXgudHN4IiwiL3RzL3VzZXItbWVudS9pdGVtLnRzeCIsIi90cy91c2VyLW1lbnUvcHJvZmlsZS50c3giLCIvdHMvdXNlci1tZW51L3RoZW1lLWJ1dHRvbi50c3giLCIvdHMvdXNlci1tZW51L3VzZXItaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQU9PLE1BQU1DLGFBQWEsR0FBQUMsT0FBQSxDQUFBRCxhQUFBLEdBQUdGLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxhQUFhLENBQVcsRUFBYyxDQUFDO1VBQ25FLE1BQU1DLGdCQUFnQixHQUFHQSxDQUFBLEtBQU1OLE1BQUEsQ0FBQUksT0FBSyxDQUFDRyxVQUFVLENBQUNMLGFBQWEsQ0FBQztVQUFDQyxPQUFBLENBQUFHLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1J0RSxJQUFBTixNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBTyxNQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxNQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxNQUFBLEdBQUFULE9BQUE7VUFDQSxJQUFBVSxlQUFBLEdBQUFWLE9BQUE7VUFDQSxJQUFBVyxRQUFBLEdBQUFYLE9BQUE7VUFDQSxJQUFBWSxLQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBYSxTQUFBLEdBQUFiLE9BQUE7VUFDQSxJQUFBYyxXQUFBLEdBQUFkLE9BQUE7VUFDTztVQUFVLFNBQVVlLFlBQVlBLENBQUM7WUFBRUMsUUFBUTtZQUFFQyxTQUFTO1lBQUVDO1VBQVUsQ0FBRTtZQUMxRSxNQUFNQyxHQUFHLEdBQUcsZ0JBQWdCRixTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzlELE1BQU1HLEdBQUcsR0FBR3JCLE1BQUEsQ0FBQUksT0FBSyxDQUFDa0IsTUFBTSxFQUFFO1lBQzFCLE1BQU0s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