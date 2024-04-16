System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.1/hooks", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/image", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/dropdown", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/widgets@1.1.0/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, NavbarHeader, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_pragmateUi011Components) {
      dependency_7 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Dropdown) {
      dependency_9 = _pragmateUi011Dropdown;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_beyondJsWidgets110Render) {
      dependency_11 = _beyondJsWidgets110Render;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/image', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8], ['pragmate-ui/dropdown', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['@beyond-js/widgets/render', dependency_11]]);
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
        hash: 1839686598,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzIiwiX2ljb25zIiwiX2ltYWdlIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbnRleHQiLCJfbWVudSIsIl91c2VyTWVudSIsIk5hdmJhckhlYWRlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiYnJlYWRjcnVtYiIsImNscyIsInJlZiIsInVzZVJlZiIsIm1lbnVPcGVuZWQiLCJzZXRPcGVuTWVudSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0b2dnbGVNZW51IiwidmFsdWUiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJJbWFnZSIsInNyYyIsImFsdCIsIlVzZXJNZW51IiwiQXNpZGVNZW51IiwiT2ZmQ2FudmFzTWVudUNvbnRleHQiLCJ1c2VPZmZDYW52YXNNZW51Q29udGV4dCIsIl90ZWFjaGVyIiwiX3Nlc3Npb24iLCJfc3R1ZGVudCIsIl9jb250ZXh0MiIsImlzVGVhY2hlciIsInNldFRlYWNoZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0ZWFjaGVyIiwidXNlQmluZGVyIiwiY2xzQ29udGFpbmVyIiwiTWVudSIsIlRlYWNoZXJNZW51IiwiU3R1ZGVudE1lbnUiLCJjbGlja09uQmFja2Ryb3AiLCJldmVudCIsImN1cnJlbnQiLCJpc1NhbWVOb2RlIiwidGFyZ2V0IiwiSWNvbiIsIl9jb21wb25lbnRzIiwiX2ljb25zMiIsIk1lbnVJdGVtIiwiaHJlZiIsInByb3BzIiwiQ29udHJvbCIsIkxpbmsiLCJhdHRycyIsIklDT05TIiwiX2l0ZW0iLCJtZW51IiwiY2xhc3Nyb29tcyIsIm9yZ2FuaXphdGlvbnMiLCJtb2R1bGVzIiwiX2Ryb3Bkb3duIiwiX3JvdXRpbmciLCJfdGhlbWVCdXR0b24iLCJfcHJvZmlsZSIsImxvZ291dCIsInN0b3BQcm9wYWdhdGlvbiIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJEcm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiUHJvZmlsZUljb24iLCJEcm9wZG93bk1lbnUiLCJVc2VyTWVudUl0ZW0iLCJ1c2VyTWVudSIsInByZWZlcmVuY2VzIiwiVGhlbWVTd2l0Y2hlciIsIkRyb3Bkb3duSXRlbSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInNldFByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwib25FcnJvciIsIl9yZW5kZXIiLCJ0aGVtZSIsImdsb2JhbFRoaXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwiYWRkIiwidXNlRWZmZWN0IiwiVXNlckl0ZW0iXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL21lbnUvY29udGV4dC50c3giLCIvdHMvbWVudS9pbmRleC50c3giLCIvdHMvbWVudS9pdGVtLnRzeCIsIi90cy9tZW51L3N0dWRlbnQudHN4IiwiL3RzL21lbnUvdGVhY2hlci50c3giLCIvdHMvdXNlci1tZW51L2luZGV4LnRzeCIsIi90cy91c2VyLW1lbnUvaXRlbS50c3giLCIvdHMvdXNlci1tZW51L3Byb2ZpbGUudHN4IiwiL3RzL3VzZXItbWVudS90aGVtZS1idXR0b24udHN4IiwiL3RzL3VzZXItbWVudS91c2VyLWl0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBT08sTUFBTUMsYUFBYSxHQUFBQyxPQUFBLENBQUFELGFBQUEsR0FBR0YsTUFBQSxDQUFBSSxPQUFLLENBQUNDLGFBQWEsQ0FBVyxFQUFjLENBQUM7VUFDbkUsTUFBTUMsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTU4sTUFBQSxDQUFBSSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0wsYUFBYSxDQUFDO1VBQUNDLE9BQUEsQ0FBQUcsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUnRFLElBQUFOLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFPLE1BQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLE1BQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLGVBQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFXLFFBQUEsR0FBQVgsT0FBQTtVQUNBLElBQUFZLEtBQUEsR0FBQVosT0FBQTtVQUNBLElBQUFhLFNBQUEsR0FBQWIsT0FBQTtVQUNPO1VBQVUsU0FBVWMsWUFBWUEsQ0FBQztZQUFFQyxRQUFRO1lBQUVDLFNBQVM7WUFBRUM7VUFBVSxDQUFFO1lBQzFFLE1BQU1DLEdBQUcsR0FBRyxnQkFBZ0JGLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDOUQsTUFBTUcsR0FBRyxHQUFHcEIsTUFBQSxDQUFBSSxPQUFLLENBQUNpQixNQUFNLEVBQUU7WUFDMUIsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLFdBQVcsQ0FBQyxHQUFHdkIsTUFBQSxDQUFBSSxPQUFLLENBQUNvQixRQUFRLENB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QUFNLENBQUM1RSxJQUFJLEVBQUU4RSxPQUFPLENBQUMsR0FBR2pILE1BQUEsQ0FBQUksT0FBSyxDQUFDb0IsUUFBUSxDQUFTd0YsU0FBUyxLQUFLLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBRXJGLFNBQVNFLFlBQVlBLENBQUNDLENBQUM7Y0FDdEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO2NBRWxCLE1BQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBQ2hELE1BQU1mLEtBQUssR0FBR3JFLElBQUksS0FBSyxLQUFLLEdBQUcsT0FBTyxHQUFHLE1BQU07Y0FDL0NrRixTQUFTLENBQUNHLFlBQVksQ0FBQyxrQkFBa0IsRUFBRWhCLEtBQUssQ0FBQztjQUNqREssWUFBWSxDQUFDWSxPQUFPLENBQUMsT0FBTyxFQUFFakIsS0FBSyxDQUFDO2NBQ3BDRCxPQUFBLENBQUFtQixPQUFPLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixFQUFFcEIsS0FBSyxDQUFDO2NBRWpEUyxPQUFPLENBQUNULEtBQUssS0FBSyxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUMzQztZQUVBeEcsTUFBQSxDQUFBSSxPQUFLLENBQUN5SCxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJLENBQUNqQixZQUFZLEVBQUU7Y0FDbkIsTUFBTVMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Y0FDaERGLFNBQVMsQ0FBQ0csWUFBWSxDQUFDLGtCQUFrQixFQUFFWixZQUFZLENBQUM7WUFDekQsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLE9BQ0M1RyxNQUFBLENBQUFJLE9BQUEsQ0FBQTRCLGFBQUEsQ0FBQ3lDLEtBQUEsQ0FBQWlCLFlBQVk7Y0FBQ3RELE9BQU8sRUFBRThFO1lBQVksR0FDbENsSCxNQUFBLENBQUFJLE9BQUEsQ0FBQTRCLGFBQUEsQ0FBQ3ZCLE1BQUEsQ0FBQXNELElBQUk7Y0FBQzVCLElBQUksRUFBRUEsSUFBSTtjQUFFQyxPQUFPLEVBQUU4RTtZQUFZLEVBQUksRUFDM0NsSCxNQUFBLENBQUFJLE9BQUEsQ0FBQTRCLGFBQUEsdUJBQWtCLENBQ0o7VUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNBLElBQUFoQyxNQUFBLEdBQUFDLE9BQUE7VUFDTSxTQUFVNkgsUUFBUUEsQ0FBQTtZQUN2QixPQUFPOUgsTUFBQSxDQUFBSSxPQUFBLENBQUE0QixhQUFBLGFBQVc7VUFDbkIiLCJpZ25vcmVMaXN0IjpbXX0=