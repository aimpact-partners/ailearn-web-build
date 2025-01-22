System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/icons", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/chat-sdk@1.4.1/session", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/icons", "dayjs@1.11.13", "@aimpact/ailearn-app@0.3.1/components/hooks", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/dropdown", "@beyond-js/widgets@1.1.1/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, NavbarHeader, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta7Icons) {
      dependency_3 = _pragmateUi100Beta7Icons;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Image) {
      dependency_6 = _pragmateUi100Beta7Image;
    }, function (_aimpactChatSdk141Session) {
      dependency_7 = _aimpactChatSdk141Session;
    }, function (_pragmateUi100Beta7Components) {
      dependency_8 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_9 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_dayjs2) {
      dependency_10 = _dayjs2;
    }, function (_aimpactAilearnApp031ComponentsHooks) {
      dependency_11 = _aimpactAilearnApp031ComponentsHooks;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_12 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7Dropdown) {
      dependency_13 = _pragmateUi100Beta7Dropdown;
    }, function (_beyondJsWidgets111Render) {
      dependency_14 = _beyondJsWidgets111Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/components/navbar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['pragmate-ui/icons', dependency_3], ['react', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/image', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/components', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['dayjs', dependency_10], ['@aimpact/ailearn-app/components/hooks', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/dropdown', dependency_13], ['@beyond-js/widgets/render', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/components/navbar-header.code');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./closable
      **************************/
      ims.set('./closable', {
        hash: 1303316421,
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
              className: "circle",
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

      /************************
      INTERNAL MODULE: ./global
      ************************/

      ims.set('./global', {
        hash: 3098530438,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2843041784,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _context = require("./context");
          var _menu = require("./menu");
          var _userMenu = require("./user-menu");
          var _routing = require("@beyond-js/kernel/routing");
          var _closable = require("./closable");
          var _notification = require("./notification");
          var _preload = require("./preload");
          /*bundle*/
          function NavbarHeader({
            children,
            detail,
            className,
            closable = false,
            updated,
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
              src: "/assets/rvd/logo.png",
              // src="/assets/logo.png"
              alt: "RVD.AI",
              className: "navbar-logo"
            }), closable && detail && _react.default.createElement("span", {
              className: "detail"
            }, detail), _react.default.createElement("app-breadcrumb", null)), _react.default.createElement("section", {
              className: "right-section"
            }, children, _react.default.createElement(_userMenu.UserMenu, null))), _react.default.createElement(_notification.NotificationBar, {
              texts: texts
            }), _react.default.createElement(_menu.AsideMenu, null));
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
        hash: 375223156,
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
            const [isTeacher, setTeacher] = _react.default.useState(!!user?.teacher || !!user?.roles?.includes('teacher'));
            (0, _hooks.useBinder)([user], () => {
              setTeacher(!!user?.teacher || !!user?.roles.includes('teacher'));
            }, ['user.loaded', 'login']);
            if (!user) return null;
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
        hash: 3943653979,
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
              href: "/classrooms/list"
            }, texts.classrooms));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/teacher
      ******************************/

      ims.set('./menu/teacher', {
        hash: 2417268694,
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
              icon: "community",
              href: "/community"
            }, texts.community), _react.default.createElement(_item.MenuItem, {
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

      /******************************
      INTERNAL MODULE: ./notification
      ******************************/

      ims.set('./notification', {
        hash: 3113318078,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NotificationBar = NotificationBar;
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _dayjs = require("dayjs");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          /**
           * Checks if the current date is at most 7 days after the given date.
           * @param {string | Date} date - The input date to compare.
           * @returns {boolean} - Returns true if the current date is at most 7 days after the input date, otherwise false.
           */
          function isWithinSevenDays(date) {
            const inputDate = (0, _dayjs.default)(date);
            const maxDate = inputDate.add(7, 'day');
            return !(0, _dayjs.default)().isAfter(maxDate);
          }
          function NotificationBar({
            texts
          }) {
            const isVisible = !localStorage.getItem('app.version.notification');
            const canBeShowed = isWithinSevenDays('2024-12-01');
            const [mostBeShowed, setMostBeShowed] = _react.default.useState(isVisible && canBeShowed);
            const screenSize = (0, _hooks.useMediaQuery)();
            if (!mostBeShowed) return null;
            const onClose = event => {
              event.stopPropagation();
              localStorage.setItem('app.version.notification', 'true');
              setMostBeShowed(false);
            };
            return _react.default.createElement("div", {
              className: "notification__bar--container"
            }, _react.default.createElement("div", {
              className: "notification__bar--content"
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: screenSize === 'xs',
              ternary: true,
              options: {
                true: _react.default.createElement(_components.Link, {
                  href: "https://www.rvd.ai/actualizacion-versiones-app/mis-aulas",
                  target: "_blank"
                }, _react.default.createElement("div", {
                  className: "notification__message"
                }, texts.newVersion.xs)),
                false: _react.default.createElement("div", {
                  className: "notification__message"
                }, _react.default.createElement("h6", null, texts.newVersion.desktop.title), _react.default.createElement("span", null, texts.newVersion.desktop.label), _react.default.createElement(_components.Link, {
                  href: "https://www.rvd.ai/actualizacion-versiones-app/mis-aulas",
                  target: "_blank"
                }, texts.newVersion.desktop.link))
              }
            }), _react.default.createElement(_icons.IconButton, {
              icon: "close",
              onClick: onClose
            })));
          }
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
        hash: 842084235,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserMenu = UserMenu;
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _dropdown = require("pragmate-ui/dropdown");
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _profile = require("./profile");
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
        hash: 3199545540,
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
            const handleLoadError = () => setLoadError(true);
            (0, _hooks.useBinder)([_session.sessionWrapper], () => setProps(_session.sessionWrapper.user.getProperties()), 'login');
            if (!_session.sessionWrapper.user) return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJhcHBseSIsImJhY2tsaW5rIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJjbGFzc05hbWUiLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfaW1hZ2UiLCJfY29udGV4dCIsIl9tZW51IiwiX3VzZXJNZW51IiwiX2Nsb3NhYmxlIiwiX25vdGlmaWNhdGlvbiIsIl9wcmVsb2FkIiwiTmF2YmFySGVhZGVyIiwiY2hpbGRyZW4iLCJkZXRhaWwiLCJjbG9zYWJsZSIsInVwZGF0ZWQiLCJ1bmRlZmluZWQiLCJjbHMiLCJyZWYiLCJ1c2VSZWYiLCJtZW51T3BlbmVkIiwic2V0T3Blbk1lbnUiLCJ1c2VTdGF0ZSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiUHJlbG9hZCIsInRvZ2dsZU1lbnUiLCJnb0hvbWUiLCJwdXNoU3RhdGUiLCJQcm92aWRlciIsIkltYWdlIiwic3JjIiwiYWx0IiwiVXNlck1lbnUiLCJOb3RpZmljYXRpb25CYXIiLCJBc2lkZU1lbnUiLCJPZmZDYW52YXNNZW51Q29udGV4dCIsInVzZU9mZkNhbnZhc01lbnVDb250ZXh0IiwiX3RlYWNoZXIiLCJfc2Vzc2lvbiIsIl9zdHVkZW50IiwiX2NvbnRleHQyIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiaXNUZWFjaGVyIiwic2V0VGVhY2hlciIsInRlYWNoZXIiLCJyb2xlcyIsImluY2x1ZGVzIiwidXNlQmluZGVyIiwiY2xzQ29udGFpbmVyIiwiTWVudSIsIlRlYWNoZXJNZW51IiwiU3R1ZGVudE1lbnUiLCJjbGlja09uQmFja2Ryb3AiLCJjdXJyZW50IiwiaXNTYW1lTm9kZSIsInRhcmdldCIsIkljb24iLCJfY29tcG9uZW50cyIsIk1lbnVJdGVtIiwiaHJlZiIsInByb3BzIiwiQ29udHJvbCIsIkxpbmsiLCJhdHRycyIsIkFwcEljb24iLCJuYW1lIiwiX2l0ZW0iLCJtZW51IiwiaG9tZSIsImNsYXNzcm9vbXMiLCJjb21tdW5pdHkiLCJtb2R1bGVzIiwib3JnYW5pemF0aW9ucyIsInVzZVNlc3Npb24iLCJfZGF5anMiLCJpc1dpdGhpblNldmVuRGF5cyIsImRhdGUiLCJpbnB1dERhdGUiLCJtYXhEYXRlIiwiYWRkIiwiaXNBZnRlciIsImlzVmlzaWJsZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjYW5CZVNob3dlZCIsIm1vc3RCZVNob3dlZCIsInNldE1vc3RCZVNob3dlZCIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwib25DbG9zZSIsInNldEl0ZW0iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIm5ld1ZlcnNpb24iLCJ4cyIsImZhbHNlIiwiZGVza3RvcCIsInRpdGxlIiwibGFiZWwiLCJsaW5rIiwiX3VpIiwiQW5pbWF0ZWRDb250YWluZXIiLCJfZHJvcGRvd24iLCJfcHJvZmlsZSIsImxvZ291dCIsIkRyb3Bkb3duIiwiRHJvcGRvd25Ub2dnbGUiLCJQcm9maWxlSWNvbiIsIkRyb3Bkb3duTWVudSIsIlVzZXJNZW51SXRlbSIsInVzZXJNZW51IiwicHJlZmVyZW5jZXMiLCJEcm9wZG93bkl0ZW0iLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJzZXRQcm9wcyIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsIm9uRXJyb3IiLCJfcmVuZGVyIiwiVGhlbWVTd2l0Y2hlciIsInRoZW1lIiwiZ2xvYmFsVGhpcyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwidGhlbWVTdG9yYWdlIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwic2V0SWNvbiIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwidXNlRWZmZWN0IiwiVXNlckl0ZW0iXSwic291cmNlcyI6WyIvdHMvY2xvc2FibGUudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL21lbnUvY29udGV4dC50c3giLCIvdHMvbWVudS9pbmRleC50c3giLCIvdHMvbWVudS9pdGVtLnRzeCIsIi90cy9tZW51L3N0dWRlbnQudHN4IiwiL3RzL21lbnUvdGVhY2hlci50c3giLCIvdHMvbWVudS91c2Utc2Vzc2lvbi50c3giLCIvdHMvbm90aWZpY2F0aW9uLnRzeCIsIi90cy9wcmVsb2FkLnRzeCIsIi90cy91c2VyLW1lbnUvaW5kZXgudHN4IiwiL3RzL3VzZXItbWVudS9pdGVtLnRzeCIsIi90cy91c2VyLW1lbnUvcHJvZmlsZS50c3giLCIvdHMvdXNlci1tZW51L3RoZW1lLWJ1dHRvbi50c3giLCIvdHMvdXNlci1tZW51L3VzZXItaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFB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