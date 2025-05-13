System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.0-beta.7/icons", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/components", "dayjs@1.11.13", "@aimpact/ailearn-app@0.4.1/components/hooks", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.4.1/components/ui", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-app@0.4.1/model/wrapper", "@aimpact/ailearn-app@0.4.1/components/icons", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/dropdown", "@beyond-js/widgets@1.1.2/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, NavbarHeader, CloasableNavbar, DefaultNavbar, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    NavbarHeader: void 0,
    CloasableNavbar: void 0,
    DefaultNavbar: void 0,
    ProfileIcon: void 0,
    ThemeSwitcher: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_beyondJsKernel0112Routing) {
      dependency_2 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_3 = _pragmateUi100Beta7Icons;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_5 = _pragmateUi100Beta7Components;
    }, function (_dayjs2) {
      dependency_6 = _dayjs2;
    }, function (_aimpactAilearnApp041ComponentsHooks) {
      dependency_7 = _aimpactAilearnApp041ComponentsHooks;
    }, function (_pragmateUi100Beta7Image) {
      dependency_8 = _pragmateUi100Beta7Image;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_9 = _aimpactAilearnApp041ComponentsUi;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_10 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactChatSdk154Session) {
      dependency_11 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnApp041ModelWrapper) {
      dependency_12 = _aimpactAilearnApp041ModelWrapper;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_13 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_framerMotion2) {
      dependency_14 = _framerMotion2;
    }, function (_pragmateUi100Beta7Dropdown) {
      dependency_15 = _pragmateUi100Beta7Dropdown;
    }, function (_beyondJsWidgets112Render) {
      dependency_16 = _beyondJsWidgets112Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/rvd", "0.4.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/components/navbar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['pragmate-ui/icons', dependency_3], ['react', dependency_4], ['pragmate-ui/components', dependency_5], ['dayjs', dependency_6], ['@aimpact/ailearn-app/components/hooks', dependency_7], ['pragmate-ui/image', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@aimpact/ailearn-app/model/wrapper', dependency_12], ['@aimpact/ailearn-app/components/icons', dependency_13], ['framer-motion', dependency_14], ['pragmate-ui/dropdown', dependency_15], ['@beyond-js/widgets/render', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/components/navbar-header.code');
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./components/closable
      *************************************/
      ims.set('./components/closable', {
        hash: 1683162156,
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
            broker,
            apply,
            backlink,
            force
          }) {
            if (!apply) return null;
            const onClick = event => {
              event.stopPropagation();
              if (backlink && broker.force || _routing.routing.history.records.entries.length === 1) {
                //back button is not working, so, we always replace the state here.
                if (typeof backlink === 'function') return backlink();
                _routing.routing.replaceState({}, null, backlink);
              }
              return _routing.routing.back();
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
        hash: 2229346156,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _react = require("react");
          var _closable = require("./navbars/closable");
          var _default = require("./navbars/default");
          /*bundle*/
          function NavbarHeader(props) {
            return _react.default.createElement(_react.default.Fragment, null, props.closable ? _react.default.createElement(_closable.CloasableNavbar, {
              ...props
            }) : _react.default.createElement(_default.DefaultNavbar, {
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
        hash: 760958719,
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
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
            }), _wrapper.settings.APP_NAME), _react.default.createElement(_icons.Icon, {
              icon: "close",
              onClick: toggleMenu
            })), _react.default.createElement("div", {
              className: "menu__inner-content"
            }, _react.default.createElement(Menu, null), _react.default.createElement("div", {
              className: "menu__footer"
            }, _react.default.createElement("div", {
              className: "icon__container"
            }, _react.default.createElement(_icons.Icon, {
              icon: "email"
            })), texts.menu.support, ": ", _wrapper.settings.APP_SUPPORT_EMAIL)))));
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
        hash: 3153130697,
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
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
            }, _react.default.createElement("div", {
              className: "navbar__container"
            }, _react.default.createElement("section", {
              className: "left-section"
            }, _react.default.createElement(_closable.ClosableIcon, {
              broker: store.broker,
              apply: closable,
              backlink: backlink
            }), _react.default.createElement(_image.Image, {
              onClick: goHome,
              src: _wrapper.settings.APP_LOGO,
              // src="/assets/logo.png"
              alt: _wrapper.settings.APP_NAME,
              className: "navbar-logo"
            }), closable && detail && _react.default.createElement("span", {
              className: "detail"
            }, detail), _react.default.createElement("app-breadcrumb", null), store?.broker?.title && _react.default.createElement("span", null, store.broker.title)), _react.default.createElement("section", {
              className: "right-section"
            }, children, _react.default.createElement(_userMenu.UserMenu, null)))), _react.default.createElement(_notification.NotificationBar, {
              texts: texts
            }), _react.default.createElement(_menu.AsideMenu, null));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./navbars/default
      *********************************/

      ims.set('./navbars/default', {
        hash: 2683708958,
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
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function DefaultNavbar({
            children,
            className,
            store
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
            }, _react.default.createElement("div", {
              className: "navbar__container"
            }, _react.default.createElement("section", {
              className: "left-section"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "bars",
              onClick: toggleMenu,
              className: "hamburger-icon circle"
            }), _react.default.createElement(_image.Image, {
              onClick: goHome,
              src: _wrapper.settings.APP_LOGO,
              alt: _wrapper.settings.APP_NAME,
              className: "navbar-logo"
            }), _react.default.createElement("app-breadcrumb", null), store?.broker?.title && _react.default.createElement("span", null, store.broker.title)), _react.default.createElement("section", {
              className: "right-section"
            }, children, _react.default.createElement(_userMenu.UserMenu, null)))), _react.default.createElement(_notification.NotificationBar, {
              texts: texts
            }), _react.default.createElement(_menu.AsideMenu, null));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./user-menu/index
      *********************************/

      ims.set('./user-menu/index', {
        hash: 1953972172,
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
          var _image = require("pragmate-ui/image");
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
            }, _react.default.createElement(_profile.ProfileIcon, null)), _react.default.createElement(_dropdown.DropdownMenu, null, _react.default.createElement("section", {
              className: "user-menu__user-data"
            }, _react.default.createElement(_image.Image, {
              alt: "user image profile",
              src: _session.sessionWrapper.user.photoURL
            }), _react.default.createElement("span", null, _session.sessionWrapper.user.displayName), _react.default.createElement("span", null, _session.sessionWrapper.user.email)), _react.default.createElement(_item.UserMenuItem, {
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
        hash: 4170625474,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = void 0;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
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
            }) : _react.default.createElement(_icons.AppIcon, {
              icon: "user"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJicm9rZXIiLCJhcHBseSIsImJhY2tsaW5rIiwiZm9yY2UiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwiaGlzdG9yeSIsInJlY29yZHMiLCJlbnRyaWVzIiwibGVuZ3RoIiwicmVwbGFjZVN0YXRlIiwiYmFjayIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJjbGFzc05hbWUiLCJfY29tcG9uZW50cyIsIl9kYXlqcyIsIl9ob29rcyIsImlzV2l0aGluU2V2ZW5EYXlzIiwiZGF0ZSIsImlucHV0RGF0ZSIsIm1heERhdGUiLCJhZGQiLCJpc0FmdGVyIiwiTm90aWZpY2F0aW9uQmFyIiwidGV4dHMiLCJpc1Zpc2libGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FuQmVTaG93ZWQiLCJtb3N0QmVTaG93ZWQiLCJzZXRNb3N0QmVTaG93ZWQiLCJ1c2VTdGF0ZSIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwib25DbG9zZSIsInNldEl0ZW0iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpbmsiLCJocmVmIiwidGFyZ2V0IiwibmV3VmVyc2lvbiIsInhzIiwiZmFsc2UiLCJkZXNrdG9wIiwidGl0bGUiLCJsYWJlbCIsImxpbmsiLCJfaW1hZ2UiLCJfdWkiLCJQcmVsb2FkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJJbWFnZSIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9jbG9zYWJsZSIsIl9kZWZhdWx0IiwiTmF2YmFySGVhZGVyIiwicHJvcHMiLCJGcmFnbWVudCIsImNsb3NhYmxlIiwiQ2xvYXNhYmxlTmF2YmFyIiwiRGVmYXVsdE5hdmJhciIsIk9mZkNhbnZhc01lbnVDb250ZXh0IiwidXNlT2ZmQ2FudmFzTWVudUNvbnRleHQiLCJfY29udGV4dCIsIl90ZWFjaGVyIiwiX3Nlc3Npb24iLCJfc3R1ZGVudCIsIl9jb250ZXh0MiIsIl93cmFwcGVyIiwiQXNpZGVNZW51IiwidG9nZ2xlTWVudSIsIm1lbnVPcGVuZWQiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJpc1RlYWNoZXIiLCJzZXRUZWFjaGVyIiwidGVhY2hlciIsInJvbGVzIiwiaW5jbHVkZXMiLCJ1c2VCaW5kZXIiLCJjbHMiLCJjbHNDb250YWluZXIiLCJNZW51IiwiVGVhY2hlck1lbnUiLCJTdHVkZW50TWVudSIsImNsaWNrT25CYWNrZHJvcCIsImN1cnJlbnQiLCJpc1NhbWVOb2RlIiwiUHJvdmlkZXIiLCJJY29uIiwic2V0dGluZ3MiLCJBUFBfTkFNRSIsIm1lbnUiLCJzdXBwb3J0IiwiQVBQX1NVUFBPUlRfRU1BSUwiLCJNZW51SXRlbSIsImNoaWxkcmVuIiwiQ29udHJvbCIsImF0dHJzIiwiQXBwSWNvbiIsIm5hbWUiLCJfaXRlbSIsImhvbWUiLCJjbGFzc3Jvb21zIiwiY29tbXVuaXR5IiwibW9kdWxlcyIsIm9yZ2FuaXphdGlvbnMiLCJhcmNoaXZlIiwidXNlU2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9tZW51IiwiX3VzZXJNZW51IiwiX25vdGlmaWNhdGlvbiIsIl9wcmVsb2FkIiwiX2ZyYW1lck1vdGlvbiIsImRldGFpbCIsInN0b3JlIiwidW5kZWZpbmVkIiwic2V0T3Blbk1lbnUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImdvSG9tZSIsInB1c2hTdGF0ZSIsIm1vdGlvbiIsImhlYWRlciIsInNyYyIsIkFQUF9MT0dPIiwiYWx0IiwiVXNlck1lbnUiLCJfZHJvcGRvd24iLCJfcHJvZmlsZSIsImxvZ291dCIsIkRyb3Bkb3duIiwiRHJvcGRvd25Ub2dnbGUiLCJQcm9maWxlSWNvbiIsIkRyb3Bkb3duTWVudSIsInBob3RvVVJMIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsIlVzZXJNZW51SXRlbSIsInVzZXJNZW51IiwicHJlZmVyZW5jZXMiLCJEcm9wZG93bkl0ZW0iLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJzZXRQcm9wcyIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJvbkVycm9yIiwiX3JlbmRlciIsIlRoZW1lU3dpdGNoZXIiLCJ0aGVtZSIsImdsb2JhbFRoaXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImRlZmF1bHRUaGVtZSIsInVzZXJUaGVtZSIsInNldEljb24iLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsInVzZUVmZmVjdCIsIlVzZXJJdGVtIl0sInNvdXJjZXMiOlsiL3RzL2NvbXBvbmVudHMvY2xvc2FibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLnRzeCIsIi90cy9jb21wb25lbnRzL3ByZWxvYWQudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL21lbnUvY29udGV4dC50c3giLCIvdHMvbWVudS9pbmRleC50c3giLCIvdHMvbWVudS9pdGVtLnRzeCIsIi90cy9tZW51L3N0dWRlbnQudHN4IiwiL3RzL21lbnUvdGVhY2hlci50c3giLCIvdHMvbWVudS91c2Utc2Vzc2lvbi50c3giLCIvdHMvbmF2YmFycy9jbG9zYWJsZS50c3giLCIvdHMvbmF2YmFycy9kZWZhdWx0LnRzeCIsIi90cy91c2VyLW1lbnUvaW5kZXgudHN4IiwiL3RzL3VzZXItbWVudS9pdGVtLnRzeCIsIi90cy91c2VyLW1lbnUvcHJvZmlsZS50c3giLCIvdHMvdXNlci1tZW51L3RoZW1lLWJ1dHRvbi50c3giLCIvdHMvdXNlci1tZW51L3VzZXItaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFFBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7VUFnQk0sU0FBVUcsWUFBWUEsQ0FBQztZQUFFQyxNQUFNO1lBQUVDLEtBQUs7WUFBRUMsUUFBUTtZQUFFQztVQUFLLENBQUU7WUFDOUQsSUFBSSxDQUFDRixLQUFLLEVBQUUsT0FBTyxJQUFJO1lBRXZCLE1BQU1HLE9BQU8sR0FBR0MsS0FBSyxJQUFHO2NBQ3ZCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QixJQUFLSixRQUFRLElBQUlGLE1BQU0sQ0FBQ0csS0FBSyxJQUFLUixRQUFBLENBQUFZLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDL0U7Z0JBQ0EsSUFBSSxPQUFPVCxRQUFRLEtBQUssVUFBVSxFQUFFLE9BQU9BLFFBQVEsRUFBRTtnQkFDckRQLFFBQUEsQ0FBQVksT0FBTyxDQUFDSyxZQUFZLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRVYsUUFBUSxDQUFDOztjQUd6QyxPQUFPUCxRQUFBLENBQUFZLE9BQU8sQ0FBQ00sSUFBSSxFQUFFO1lBQ3RCLENBQUM7WUFDRCxPQUFP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