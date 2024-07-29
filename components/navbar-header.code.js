System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.1/icons", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/image", "pragmate-ui@1.0.0-beta.1/breadcrumb", "@aimpact/ailearn-app@0.1.0-dev.02/components/ui", "@aimpact/chat-sdk@1.0.1/session", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/ailearn-app@0.1.0-dev.02/components/icons", "pragmate-ui@1.0.0-beta.1/dropdown", "@beyond-js/widgets@1.1.0/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, NavbarHeader, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel019Routing) {
      dependency_2 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_3 = _pragmateUi100Beta1Icons;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta1Image) {
      dependency_6 = _pragmateUi100Beta1Image;
    }, function (_pragmateUi100Beta1Breadcrumb) {
      dependency_7 = _pragmateUi100Beta1Breadcrumb;
    }, function (_aimpactAilearnApp010Dev02ComponentsUi) {
      dependency_8 = _aimpactAilearnApp010Dev02ComponentsUi;
    }, function (_aimpactChatSdk101Session) {
      dependency_9 = _aimpactChatSdk101Session;
    }, function (_pragmateUi100Beta1Components) {
      dependency_10 = _pragmateUi100Beta1Components;
    }, function (_aimpactAilearnApp010Dev02ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp010Dev02ComponentsIcons;
    }, function (_pragmateUi100Beta1Dropdown) {
      dependency_12 = _pragmateUi100Beta1Dropdown;
    }, function (_beyondJsWidgets110Render) {
      dependency_13 = _beyondJsWidgets110Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-dev.02"], ["@aimpact/ailearn-app", "0.1.0-dev.02"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.02/components/navbar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['pragmate-ui/icons', dependency_3], ['react', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/image', dependency_6], ['pragmate-ui/breadcrumb', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/dropdown', dependency_12], ['@beyond-js/widgets/render', dependency_13]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-dev.02/components/navbar-header.code');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./closable
      **************************/
      ims.set('./closable', {
        hash: 4203241015,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClosableIcon = ClosableIcon;
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          /**
           * Renders an icon button that conditionally handles navigation based on the user's history state and provided backlink.
           * This component determines if the user can navigate back in their browsing history safely (i.e., the user did not land directly via URL).
           * If navigating back is deemed unsafe or if the history is inadequate, it redirects to a provided backlink URL, thus avoiding potential navigation errors.
           *
           * @param {object} props - The properties passed to the ClosableIcon component.
           * @param {Function} props.apply - A flag to determine if the IconButton should be rendered. If falsy, the component renders nothing.
           * @param {string} props.backlink - A URL string to redirect to if there is no adequate history to go back to. This is used to replace the current state in history, ensuring the user does not navigate back to an erroneous or unintended page.
           * @returns {JSX.Element|null} A clickable icon that conditionally manipulates the navigation history based on the session's state, or null if `apply` is falsy.
           *
           * Usage Example:
           * <ClosableIcon apply={true} backlink="/home" />
           *
           * In this scenario, if sessionStorage indicates that the user did not start their session from the current view, and if there is a sufficient history, it will trigger a back navigation. Otherwise, it will redirect to the `/home` URL provided in `backlink`.
           */
          function ClosableIcon({
            apply,
            backlink
          }) {
            if (!apply) return null;
            const onClick = event => {
              event.stopPropagation();
              //back button is not working, so, we always replace the state here.
              if (typeof backlink === 'function') return backlink();
              _routing.routing.replaceState({}, null, backlink);
            };
            return _react.default.createElement(_icons.IconButton, {
              icon: "close",
              onClick: onClick
            });
          }
        }
      });

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
        hash: 367507126,
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
          var _routing = require("@beyond-js/kernel/routing");
          var _closable = require("./closable");
          var _preload = require("./preload");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /*bundle*/
          function NavbarHeader({
            children,
            detail,
            className,
            closable = false,
            updated,
            breadcrumb,
            backlink = undefined
          }) {
            const cls = `navbar-header${className ? ` ${className}` : ''}`;
            const ref = _react.default.useRef();
            const [menuOpened, setOpenMenu] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textsReady) return _react.default.createElement(_preload.Preload, null);
            const toggleMenu = () => setOpenMenu(!menuOpened);
            const value = {
              texts,
              menuOpened,
              toggleMenu,
              updated
            };
            const goHome = () => _routing.routing.pushState('/');
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement("header", {
              className: cls,
              ref: ref
            }, _react.default.createElement("section", {
              className: "left-section"
            }, !closable && _react.default.createElement(_icons.IconButton, {
              icon: "bars",
              onClick: toggleMenu,
              className: "hamburger-icon circle"
            }), _react.default.createElement(_closable.ClosableIcon, {
              apply: closable,
              backlink: backlink
            }), !closable && _react.default.createElement(_image.Image, {
              onClick: goHome,
              src: "/assets/rvd/RVD.AI.Branding.png",
              // src="/assets/logo.png"
              alt: "RVD.AI",
              className: "navbar-logo"
            }), closable && detail && _react.default.createElement("span", {
              className: "detail"
            }, detail), breadcrumb && _react.default.createElement(_ui.AnimatedContainer, null, _react.default.createElement(_breadcrumb.BreadCrumb, {
              className: "desktop-breadcrumb",
              items: breadcrumb,
              separator: ":"
            }))), _react.default.createElement("section", {
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
        hash: 3773047745,
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
            const ref = (0, _react.useRef)(null);
            const {
              user
            } = _session.sessionWrapper;
            const [isTeacher, setTeacher] = _react.default.useState(!!user.teacher || !!user?.roles?.includes('teacher'));
            (0, _hooks.useBinder)([user], () => {
              setTeacher(!!user.teacher || !!user?.roles.includes('teacher'));
            }, ['user.loaded', 'login']);
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
        hash: 2183568391,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MenuItem = MenuItem;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
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
            }, icon && _react.default.createElement(_icons.AppIcon, {
              name: icon
            }), children));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/student
      ******************************/

      ims.set('./menu/student', {
        hash: 2338361162,
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
              icon: "home",
              href: "/"
            }, texts.home), _react.default.createElement(_item.MenuItem, {
              icon: "entities/classroom",
              href: "/classrooms/join"
            }, texts.classrooms));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/teacher
      ******************************/

      ims.set('./menu/teacher', {
        hash: 1667274283,
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
              icon: "home",
              href: "/"
            }, texts.home), _react.default.createElement(_item.MenuItem, {
              icon: "entities/module",
              href: "/modules/list"
            }, texts.modules), _react.default.createElement(_item.MenuItem, {
              icon: "entities/school",
              href: "/organizations/list"
            }, texts.organizations), _react.default.createElement(_item.MenuItem, {
              icon: "entities/classroom",
              href: "/classrooms/list"
            }, texts.classrooms));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./menu/use-session
      **********************************/

      ims.set('./menu/use-session', {
        hash: 4175025227,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSession = useSession;
          function useSession() {}
        }
      });

      /*************************
      INTERNAL MODULE: ./preload
      *************************/

      ims.set('./preload', {
        hash: 3972098412,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Preload() {
            return _react.default.createElement(_ui.AnimatedContainer, null, _react.default.createElement("header", {
              className: "navbar-header preload"
            }, _react.default.createElement("div", {
              className: "left-section"
            }), _react.default.createElement("div", {
              className: "right-section"
            }, _react.default.createElement(_image.Image, {
              className: "profile-img preload"
            }))));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./user-menu/index
      *********************************/

      ims.set('./user-menu/index', {
        hash: 2656601671,
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
            }, texts.userMenu.preferences), _react.default.createElement(_item.UserMenuItem, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJhcHBseSIsImJhY2tsaW5rIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9ob29rcyIsIl9pbWFnZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jb250ZXh0IiwiX21lbnUiLCJfdXNlck1lbnUiLCJfYnJlYWRjcnVtYiIsIl9jbG9zYWJsZSIsIl9wcmVsb2FkIiwiX3VpIiwiTmF2YmFySGVhZGVyIiwiY2hpbGRyZW4iLCJkZXRhaWwiLCJjbGFzc05hbWUiLCJjbG9zYWJsZSIsInVwZGF0ZWQiLCJicmVhZGNydW1iIiwidW5kZWZpbmVkIiwiY2xzIiwicmVmIiwidXNlUmVmIiwibWVudU9wZW5lZCIsInNldE9wZW5NZW51IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIlByZWxvYWQiLCJ0b2dnbGVNZW51IiwidmFsdWUiLCJnb0hvbWUiLCJwdXNoU3RhdGUiLCJQcm92aWRlciIsIkltYWdlIiwic3JjIiwiYWx0IiwiQW5pbWF0ZWRDb250YWluZXIiLCJCcmVhZENydW1iIiwiaXRlbXMiLCJzZXBhcmF0b3IiLCJVc2VyTWVudSIsIkFzaWRlTWVudSIsIk9mZkNhbnZhc01lbnVDb250ZXh0IiwidXNlT2ZmQ2FudmFzTWVudUNvbnRleHQiLCJfdGVhY2hlciIsIl9zZXNzaW9uIiwiX3N0dWRlbnQiLCJfY29udGV4dDIiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJpc1RlYWNoZXIiLCJzZXRUZWFjaGVyIiwidGVhY2hlciIsInJvbGVzIiwiaW5jbHVkZXMiLCJ1c2VCaW5kZXIiLCJjbHNDb250YWluZXIiLCJNZW51IiwiVGVhY2hlck1lbnUiLCJTdHVkZW50TWVudSIsImNsaWNrT25CYWNrZHJvcCIsImN1cnJlbnQiLCJpc1NhbWVOb2RlIiwidGFyZ2V0IiwiSWNvbiIsIl9jb21wb25lbnRzIiwiTWVudUl0ZW0iLCJocmVmIiwicHJvcHMiLCJDb250cm9sIiwiTGluayIsImF0dHJzIiwiQXBwSWNvbiIsIm5hbWUiLCJfaXRlbSIsIm1lbnUiLCJob21lIiwiY2xhc3Nyb29tcyIsIm1vZHVsZXMiLCJvcmdhbml6YXRpb25zIiwidXNlU2Vzc2lvbiIsIl9kcm9wZG93biIsIl9wcm9maWxlIiwibG9nb3V0IiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlByb2ZpbGVJY29uIiwiRHJvcGRvd25NZW51IiwiVXNlck1lbnVJdGVtIiwidXNlck1lbnUiLCJwcmVmZXJlbmNlcyIsIkRyb3Bkb3duSXRlbSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInNldFByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwib25FcnJvciIsIl9yZW5kZXIiLCJUaGVtZVN3aXRjaGVyIiwidGhlbWUiLCJnbG9iYWxUaGlzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aGVtZVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwic2V0SWNvbiIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsImFkZCIsInVzZUVmZmVjdCIsIlVzZXJJdGVtIl0sInNvdXJjZXMiOlsiL3RzL2Nsb3NhYmxlLnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvbWVudS9jb250ZXh0LnRzeCIsIi90cy9tZW51L2luZGV4LnRzeCIsIi90cy9tZW51L2l0ZW0udHN4IiwiL3RzL21lbnUvc3R1ZGVudC50c3giLCIvdHMvbWVudS90ZWFjaGVyLnRzeCIsIi90cy9tZW51L3VzZS1zZXNzaW9uLnRzeCIsIi90cy9wcmVsb2FkLnRzeCIsIi90cy91c2VyLW1lbnUvaW5kZXgudHN4IiwiL3RzL3VzZXItbWVudS9pdGVtLnRzeCIsIi90cy91c2VyLW1lbnUvcHJvZmlsZS50c3giLCIvdHMvdXNlci1tZW51L3RoZW1lLWJ1dHRvbi50c3giLCIvdHMvdXNlci1tZW51L3VzZXItaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7OztVQWdCTSxTQUFVRyxZQUFZQSxDQUFDO1lBQUVDLEtBQUs7WUFBRUM7VUFBUSxDQUFFO1lBQy9DLElBQUksQ0FBQ0QsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUV2QixNQUFNRSxPQUFPLEdBQUdDLEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkI7Y0FDQSxJQUFJLE9BQU9ILFFBQVEsS0FBSyxVQUFVLEVBQUUsT0FBT0EsUUFBUSxFQUFFO2NBQ3JETixRQUFBLENBQUFVLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUVMLFFBQVEsQ0FBQztZQUN6QyxDQUFDO1lBQ0QsT0FBT0gsTUFBQSxDQUFBUyxPQUFBLENB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