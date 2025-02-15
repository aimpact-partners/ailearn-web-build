System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/icons", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "dayjs@1.11.13", "@aimpact/ailearn-app@0.3.1/components/hooks", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.3.1/components/ui", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-app@0.3.1/components/icons", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/dropdown", "@beyond-js/widgets@1.1.1/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, NavbarHeader, CloasableNavbar, DefaultNavbar, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    NavbarHeader: void 0,
    CloasableNavbar: void 0,
    DefaultNavbar: void 0,
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
    }, function (_pragmateUi100Beta7Components) {
      dependency_5 = _pragmateUi100Beta7Components;
    }, function (_dayjs2) {
      dependency_6 = _dayjs2;
    }, function (_aimpactAilearnApp031ComponentsHooks) {
      dependency_7 = _aimpactAilearnApp031ComponentsHooks;
    }, function (_pragmateUi100Beta7Image) {
      dependency_8 = _pragmateUi100Beta7Image;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_9 = _aimpactAilearnApp031ComponentsUi;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_10 = _beyondJsReact18Widgets113Hooks;
    }, function (_aimpactChatSdk141Session) {
      dependency_11 = _aimpactChatSdk141Session;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_framerMotion2) {
      dependency_13 = _framerMotion2;
    }, function (_pragmateUi100Beta7Dropdown) {
      dependency_14 = _pragmateUi100Beta7Dropdown;
    }, function (_beyondJsWidgets111Render) {
      dependency_15 = _beyondJsWidgets111Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['pragmate-ui/icons', dependency_3], ['react', dependency_4], ['pragmate-ui/components', dependency_5], ['dayjs', dependency_6], ['@aimpact/ailearn-app/components/hooks', dependency_7], ['pragmate-ui/image', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['framer-motion', dependency_13], ['pragmate-ui/dropdown', dependency_14], ['@beyond-js/widgets/render', dependency_15]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/components/navbar-header.code');
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./components/closable
      *************************************/
      ims.set('./components/closable', {
        hash: 2740328343,
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
              if (!backlink) {
                return _routing.routing.back();
              }
              //back button is not working, so, we always replace the state here.
              if (typeof backlink === 'function') return backlink();
              _routing.routing.replaceState({}, null, backlink);
            };
            return _react.default.createElement(_icons.IconButton, {
              icon: "backArrow",
              className: "circle",
              onClick: onClick
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./components/notification
      *****************************************/

      ims.set('./components/notification', {
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

      /************************************
      INTERNAL MODULE: ./components/preload
      ************************************/

      ims.set('./components/preload', {
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
        hash: 644197281,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _react = require("react");
          var _closable = require("./navbars/closable");
          /*bundle*/
          function NavbarHeader(props) {
            return _react.default.createElement(_react.default.Fragment, null, props.closable ? _react.default.createElement(_closable.CloasableNavbar, {
              ...props
            }) : _react.default.createElement(DefaultNavbar, {
              ...props
            }));
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
        hash: 1130199880,
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
            }, texts.classrooms), _react.default.createElement(_item.MenuItem, {
              icon: "archive",
              href: "/archive"
            }, texts.archive));
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

      /**********************************
      INTERNAL MODULE: ./navbars/closable
      **********************************/

      ims.set('./navbars/closable', {
        hash: 2748402864,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CloasableNavbar = CloasableNavbar;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _context = require("../context");
          var _menu = require("../menu");
          var _userMenu = require("../user-menu");
          var _routing = require("@beyond-js/kernel/routing");
          var _closable = require("../components/closable");
          var _notification = require("../components/notification");
          var _preload = require("../components/preload");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function CloasableNavbar({
            children,
            detail,
            className,
            closable = false,
            store,
            backlink = undefined
          }) {
            const cls = `navbar-header${className ? ` ${className}` : ''}`;
            const ref = _react.default.useRef();
            const [menuOpened, setOpenMenu] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [updated, setUpdated] = _react.default.useState({});
            (0, _hooks.useBinder)([store.broker], () => {
              setUpdated({});
            }, 'title.changed');
            if (!textsReady) return _react.default.createElement(_preload.Preload, null);
            const toggleMenu = () => setOpenMenu(!menuOpened);
            const value = {
              texts,
              menuOpened,
              toggleMenu
            };
            const goHome = () => _routing.routing.pushState('/');
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_framerMotion.motion.header, {
              className: cls,
              ref: ref
            }, _react.default.createElement("section", {
              className: "left-section"
            }, _react.default.createElement(_closable.ClosableIcon, {
              apply: closable,
              backlink: backlink
            }), _react.default.createElement(_image.Image, {
              onClick: goHome,
              src: "/assets/rvd/logo.png",
              // src="/assets/logo.png"
              alt: "RVD.AI",
              className: "navbar-logo"
            }), closable && detail && _react.default.createElement("span", {
              className: "detail"
            }, detail), _react.default.createElement("app-breadcrumb", null), store?.broker?.title && _react.default.createElement("span", null, store.broker.title)), _react.default.createElement("section", {
              className: "right-section"
            }, children, _react.default.createElement(_userMenu.UserMenu, null))), _react.default.createElement(_notification.NotificationBar, {
              texts: texts
            }), _react.default.createElement(_menu.AsideMenu, null));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./navbars/default
      *********************************/

      ims.set('./navbars/default', {
        hash: 2023602553,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DefaultNavbar = DefaultNavbar;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _context = require("../context");
          var _menu = require("../menu");
          var _userMenu = require("../user-menu");
          var _routing = require("@beyond-js/kernel/routing");
          var _notification = require("../components/notification");
          var _preload = require("../components/preload");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function DefaultNavbar({
            children,
            detail,
            className,
            closable = false,
            breadcrumb = false,
            store,
            title,
            backlink = undefined
          }) {
            const cls = `navbar-header${className ? ` ${className}` : ''}`;
            const ref = _react.default.useRef();
            const [menuOpened, setOpenMenu] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [updated, setUpdated] = _react.default.useState({});
            (0, _hooks.useBinder)([store.broker], () => {
              setUpdated({});
            }, 'title.changed');
            if (!textsReady) return _react.default.createElement(_preload.Preload, null);
            const toggleMenu = () => setOpenMenu(!menuOpened);
            const value = {
              texts,
              menuOpened,
              toggleMenu
            };
            const goHome = () => _routing.routing.pushState('/');
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_framerMotion.motion.header, {
              className: cls,
              ref: ref
            }, _react.default.createElement("section", {
              className: "left-section"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "bars",
              onClick: toggleMenu,
              className: "hamburger-icon circle"
            }), _react.default.createElement(_image.Image, {
              onClick: goHome,
              src: "/assets/rvd/logo.png",
              // src="/assets/logo.png"
              alt: "RVD.AI",
              className: "navbar-logo"
            }), _react.default.createElement("app-breadcrumb", null), store?.broker?.title && _react.default.createElement("span", null, store.broker.title)), _react.default.createElement("section", {
              className: "right-section"
            }, children, _react.default.createElement(_userMenu.UserMenu, null))), _react.default.createElement(_notification.NotificationBar, {
              texts: texts
            }), _react.default.createElement(_menu.AsideMenu, null));
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
        hash: 3849710560,
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
            const handleLoadError = () => setLoadError(false);
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
        "im": "./navbars/closable",
        "from": "CloasableNavbar",
        "name": "CloasableNavbar"
      }, {
        "im": "./navbars/default",
        "from": "DefaultNavbar",
        "name": "DefaultNavbar"
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
        (require || prop === 'CloasableNavbar') && _export("CloasableNavbar", CloasableNavbar = require ? require('./navbars/closable').CloasableNavbar : value);
        (require || prop === 'DefaultNavbar') && _export("DefaultNavbar", DefaultNavbar = require ? require('./navbars/default').DefaultNavbar : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJhcHBseSIsImJhY2tsaW5rIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsImJhY2siLCJyZXBsYWNlU3RhdGUiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkljb25CdXR0b24iLCJpY29uIiwiY2xhc3NOYW1lIiwiX2NvbXBvbmVudHMiLCJfZGF5anMiLCJfaG9va3MiLCJpc1dpdGhpblNldmVuRGF5cyIsImRhdGUiLCJpbnB1dERhdGUiLCJtYXhEYXRlIiwiYWRkIiwiaXNBZnRlciIsIk5vdGlmaWNhdGlvbkJhciIsInRleHRzIiwiaXNWaXNpYmxlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNhbkJlU2hvd2VkIiwibW9zdEJlU2hvd2VkIiwic2V0TW9zdEJlU2hvd2VkIiwidXNlU3RhdGUiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsIm9uQ2xvc2UiLCJzZXRJdGVtIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsInRydWUiLCJMaW5rIiwiaHJlZiIsInRhcmdldCIsIm5ld1ZlcnNpb24iLCJ4cyIsImZhbHNlIiwiZGVza3RvcCIsInRpdGxlIiwibGFiZWwiLCJsaW5rIiwiX2ltYWdlIiwiX3VpIiwiUHJlbG9hZCIsIkFuaW1hdGVkQ29udGFpbmVyIiwiSW1hZ2UiLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY2xvc2FibGUiLCJOYXZiYXJIZWFkZXIiLCJwcm9wcyIsIkZyYWdtZW50IiwiY2xvc2FibGUiLCJDbG9hc2FibGVOYXZiYXIiLCJEZWZhdWx0TmF2YmFyIiwiT2ZmQ2FudmFzTWVudUNvbnRleHQiLCJ1c2VPZmZDYW52YXNNZW51Q29udGV4dCIsIl9jb250ZXh0IiwiX3RlYWNoZXIiLCJfc2Vzc2lvbiIsIl9zdHVkZW50IiwiX2NvbnRleHQyIiwiQXNpZGVNZW51IiwidG9nZ2xlTWVudSIsIm1lbnVPcGVuZWQiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJpc1RlYWNoZXIiLCJzZXRUZWFjaGVyIiwidGVhY2hlciIsInJvbGVzIiwiaW5jbHVkZXMiLCJ1c2VCaW5kZXIiLCJjbHMiLCJjbHNDb250YWluZXIiLCJNZW51IiwiVGVhY2hlck1lbnUiLCJTdHVkZW50TWVudSIsImNsaWNrT25CYWNrZHJvcCIsImN1cnJlbnQiLCJpc1NhbWVOb2RlIiwiUHJvdmlkZXIiLCJJY29uIiwiTWVudUl0ZW0iLCJjaGlsZHJlbiIsIkNvbnRyb2wiLCJhdHRycyIsIkFwcEljb24iLCJuYW1lIiwiX2l0ZW0iLCJtZW51IiwiaG9tZSIsImNsYXNzcm9vbXMiLCJjb21tdW5pdHkiLCJtb2R1bGVzIiwib3JnYW5pemF0aW9ucyIsImFyY2hpdmUiLCJ1c2VTZXNzaW9uIiwiX2JleW9uZF9jb250ZXh0IiwiX21lbnUiLCJfdXNlck1lbnUiLCJfbm90aWZpY2F0aW9uIiwiX3ByZWxvYWQiLCJfZnJhbWVyTW90aW9uIiwiZGV0YWlsIiwic3RvcmUiLCJ1bmRlZmluZWQiLCJzZXRPcGVuTWVudSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwiYnJva2VyIiwiZ29Ib21lIiwicHVzaFN0YXRlIiwibW90aW9uIiwiaGVhZGVyIiwic3JjIiwiYWx0IiwiVXNlck1lbnUiLCJicmVhZGNydW1iIiwiX2Ryb3Bkb3duIiwiX3Byb2ZpbGUiLCJsb2dvdXQiLCJEcm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiUHJvZmlsZUljb24iLCJEcm9wZG93bk1lbnUiLCJVc2VyTWVudUl0ZW0iLCJ1c2VyTWVudSIsInByZWZlcmVuY2VzIiwiRHJvcGRvd25JdGVtIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwic2V0UHJvcHMiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwicGhvdG9VUkwiLCJvbkVycm9yIiwiX3JlbmRlciIsIlRoZW1lU3dpdGNoZXIiLCJ0aGVtZSIsImdsb2JhbFRoaXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImRlZmF1bHRUaGVtZSIsInVzZXJUaGVtZSIsInNldEljb24iLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsInVzZUVmZmVjdCIsIlVzZXJJdGVtIl0sInNvdXJjZXMiOlsiL3RzL2NvbXBvbmVudHMvY2xvc2FibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLnRzeCIsIi90cy9jb21wb25lbnRzL3ByZWxvYWQudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL21lbnUvY29udGV4dC50c3giLCIvdHMvbWVudS9pbmRleC50c3giLCIvdHMvbWVudS9pdGVtLnRzeCIsIi90cy9tZW51L3N0dWRlbnQudHN4IiwiL3RzL21lbnUvdGVhY2hlci50c3giLCIvdHMvbWVudS91c2Utc2Vzc2lvbi50c3giLCIvdHMvbmF2YmFycy9jbG9zYWJsZS50c3giLCIvdHMvbmF2YmFycy9kZWZhdWx0LnRzeCIsIi90cy91c2VyLW1lbnUvaW5kZXgudHN4IiwiL3RzL3VzZXItbWVudS9pdGVtLnRzeCIsIi90cy91c2VyLW1lbnUvcHJvZmlsZS50c3giLCIvdHMvdXNlci1tZW51L3RoZW1lLWJ1dHRvbi50c3giLCIvdHMvdXNlci1tZW51L3VzZXItaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7O1VBZ0JNLFNBQVVHLFlBQVlBLENBQUM7WUFBRUMsS0FBSztZQUFFQztVQUFRLENBQUU7WUFDL0MsSUFBSSxDQUFDRCxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBRXZCLE1BQU1FLE9BQU8sR0FBR0MsS0FBSyxJQUFHO2NBQ3ZCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUV2QixJQUFJLENBQUNILFFBQVEsRUFBRTtnQkFDZCxPQUFPTixRQUFBLENBQUFVLE9BQU8sQ0FBQ0MsSUFBSSxFQUFFOztjQUV0QjtjQUNBLElBQUksT0FBT0wsUUFBUSxLQUFLLFVBQVUsRUFBRSxPQUFPQSxRQUFRLEVBQUU7Y0FDckROLFFBQUEsQ0FBQVUsT0FBTyxDQUFDRSxZQUFZLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRU4sUUFBUSxDQUFDO1lBQ3pDLENBQUM7WUFDRCxPQUFPSCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWixNQUFBLENBQUFhLFVBQVU7Y0FBQ0MsSUFBSSxFQUFDLFdBQVc7Y0FBQ0MsU0FBUyxFQUFDLFFBQVE7Y0FBQ1YsT0FBTyxFQUFFQTtZQUFPLEVBQUk7VUFDNUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBLElBQUFMLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFpQixXQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQWtCLE1BQUEsR0FBQWxCLE9BQUE7VUFFQSxJ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