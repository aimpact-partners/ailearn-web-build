System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.1/hooks", "pragmate-ui@0.1.0/icons", "pragmate-ui@0.1.0/image", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.0/components", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.0/dropdown", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/widgets@1.1.0/render"], function (_export, _context2) {
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
    }, function (_pragmateUi010Icons) {
      dependency_4 = _pragmateUi010Icons;
    }, function (_pragmateUi010Image) {
      dependency_5 = _pragmateUi010Image;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_pragmateUi010Components) {
      dependency_7 = _pragmateUi010Components;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi010Dropdown) {
      dependency_9 = _pragmateUi010Dropdown;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_beyondJsWidgets110Render) {
      dependency_11 = _beyondJsWidgets110Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      }, _context2.meta.url).package();
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
        hash: 483707974,
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
            }, _react.default.createElement(_icons.Icon, {
              icon: "bars",
              onClick: toggleMenu,
              className: "hamburger-icon"
            }), _react.default.createElement(_image.Image, {
              src: "/assets/RVD.AI.Branding.png",
              alt: "RVD.AI",
              className: "navbar-logo"
            })), _react.default.createElement(_userMenu.UserMenu, null)), _react.default.createElement(_menu.AsideMenu, null));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./menu/index
      ****************************/

      ims.set('./menu/index', {
        hash: 4204613204,
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
          function AsideMenu() {
            const {
              toggleMenu,
              menuOpened
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
            return _react.default.createElement("div", {
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
            }), "RVD.AI"), _react.default.createElement(_icons.Icon, {
              icon: "close",
              onClick: toggleMenu
            })), _react.default.createElement(Menu, null)));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./menu/item
      ***************************/

      ims.set('./menu/item', {
        hash: 1146531511,
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
          function MenuItem({
            icon,
            href,
            children,
            ...props
          }) {
            const Control = href ? _components.Link : 'div';
            const attrs = {
              className: 'container__item'
            };
            if (href) {
              attrs['href'] = href;
            }
            return _react.default.createElement("li", {
              ...props
            }, _react.default.createElement(Control, {
              ...attrs
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
        hash: 769021653,
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
              icon: "classes",
              href: "/classrooms/list"
            }, texts.classrooms));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/teacher
      ******************************/

      ims.set('./menu/teacher', {
        hash: 3465362216,
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
              icon: "classworks",
              href: "/modules/list"
            }, texts.modules), _react.default.createElement(_item.MenuItem, {
              icon: "schools",
              href: "/organizations/join"
            }, texts.organizations), _react.default.createElement(_item.MenuItem, {
              icon: "classes",
              href: "/classrooms/list"
            }, texts.classrooms));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./user-menu/index
      *********************************/

      ims.set('./user-menu/index', {
        hash: 2640633750,
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
            }, _react.default.createElement(_profile.ProfileIcon, null)), _react.default.createElement(_dropdown.DropdownMenu, null, _react.default.createElement(_themeButton.ThemeSwitcher, null), _react.default.createElement(_item.UserMenuItem, {
              onClick: logout,
              icon: "exit"
            }, texts.menu.logout)));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./user-menu/item
      ********************************/

      ims.set('./user-menu/item', {
        hash: 1471099294,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzIiwiX2ljb25zIiwiX2ltYWdlIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbnRleHQiLCJfbWVudSIsIl91c2VyTWVudSIsIk5hdmJhckhlYWRlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiYnJlYWRjcnVtYiIsImNscyIsInJlZiIsInVzZVJlZiIsIm1lbnVPcGVuZWQiLCJzZXRPcGVuTWVudSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0b2dnbGVNZW51IiwidmFsdWUiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJJY29uIiwiaWNvbiIsIm9uQ2xpY2siLCJJbWFnZSIsInNyYyIsImFsdCIsIlVzZXJNZW51IiwiQXNpZGVNZW51IiwiX3RlYWNoZXIiLCJfc2Vzc2lvbiIsIl9zdHVkZW50IiwiaXNUZWFjaGVyIiwic2V0VGVhY2hlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRlYWNoZXIiLCJ1c2VCaW5kZXIiLCJjbHNDb250YWluZXIiLCJNZW51IiwiVGVhY2hlck1lbnUiLCJTdHVkZW50TWVudSIsImNsaWNrT25CYWNrZHJvcCIsImV2ZW50IiwiY3VycmVudCIsImlzU2FtZU5vZGUiLCJ0YXJnZXQiLCJfY29tcG9uZW50cyIsIl9pY29uczIiLCJNZW51SXRlbSIsImhyZWYiLCJwcm9wcyIsIkNvbnRyb2wiLCJMaW5rIiwiYXR0cnMiLCJJQ09OUyIsIl9pdGVtIiwibWVudSIsImNsYXNzcm9vbXMiLCJtb2R1bGVzIiwib3JnYW5pemF0aW9ucyIsIl9kcm9wZG93biIsIl9yb3V0aW5nIiwiX3RoZW1lQnV0dG9uIiwiX3Byb2ZpbGUiLCJsb2dvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlByb2ZpbGVJY29uIiwiRHJvcGRvd25NZW51IiwiVGhlbWVTd2l0Y2hlciIsIlVzZXJNZW51SXRlbSIsIkRyb3Bkb3duSXRlbSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInNldFByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwib25FcnJvciIsIl9yZW5kZXIiLCJ0aGVtZSIsImdsb2JhbFRoaXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwiYWRkIiwidXNlRWZmZWN0IiwiVXNlckl0ZW0iXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL21lbnUvaW5kZXgudHN4IiwiL3RzL21lbnUvaXRlbS50c3giLCIvdHMvbWVudS9zdHVkZW50LnRzeCIsIi90cy9tZW51L3RlYWNoZXIudHN4IiwiL3RzL3VzZXItbWVudS9pbmRleC50c3giLCIvdHMvdXNlci1tZW51L2l0ZW0udHN4IiwiL3RzL3VzZXItbWVudS9wcm9maWxlLnRzeCIsIi90cy91c2VyLW1lbnUvdGhlbWUtYnV0dG9uLnRzeCIsIi90cy91c2VyLW1lbnUvdXNlci1pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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