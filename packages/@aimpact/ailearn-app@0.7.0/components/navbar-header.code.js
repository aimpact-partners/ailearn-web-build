System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/icons", "react@18.3.1", "pragmate-ui@1.0.8/components", "dayjs@1.11.13", "@aimpact/ailearn-app@0.7.0/shared/hooks", "pragmate-ui@1.0.8/image", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/ailearn-app@0.7.0/model/wrapper", "@beyond-js/react-18-widgets@1.1.8/hooks", "framer-motion@10.18.0", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-app@0.7.0/components/icons", "@radix-ui/react-accordion@1.2.12", "pragmate-ui@1.0.8/dropdown", "@aimpact/chat-sdk@1.5.5/users", "@beyond-js/widgets@1.1.2/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Environment, NavbarHeader, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    Environment: void 0,
    NavbarHeader: void 0,
    ProfileIcon: void 0,
    ThemeSwitcher: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Routing) {
      dependency_1 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Icons) {
      dependency_2 = _pragmateUi108Icons;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_pragmateUi108Components) {
      dependency_4 = _pragmateUi108Components;
    }, function (_dayjs2) {
      dependency_5 = _dayjs2;
    }, function (_aimpactAilearnApp070SharedHooks) {
      dependency_6 = _aimpactAilearnApp070SharedHooks;
    }, function (_pragmateUi108Image) {
      dependency_7 = _pragmateUi108Image;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_8 = _aimpactAilearnApp070ComponentsUi;
    }, function (_aimpactAilearnApp070ModelWrapper) {
      dependency_9 = _aimpactAilearnApp070ModelWrapper;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_10 = _beyondJsReact18Widgets118Hooks;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_aimpactChatSdk155Session) {
      dependency_12 = _aimpactChatSdk155Session;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_13 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_radixUiReactAccordion) {
      dependency_14 = _radixUiReactAccordion;
    }, function (_pragmateUi108Dropdown) {
      dependency_15 = _pragmateUi108Dropdown;
    }, function (_aimpactChatSdk155Users) {
      dependency_16 = _aimpactChatSdk155Users;
    }, function (_beyondJsWidgets112Render) {
      dependency_17 = _beyondJsWidgets112Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/components/navbar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/routing', dependency_1], ['pragmate-ui/icons', dependency_2], ['react', dependency_3], ['pragmate-ui/components', dependency_4], ['dayjs', dependency_5], ['@aimpact/ailearn-app/shared/hooks', dependency_6], ['pragmate-ui/image', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/ailearn-app/model/wrapper', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['framer-motion', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['@aimpact/ailearn-app/components/icons', dependency_13], ['@radix-ui/react-accordion', dependency_14], ['pragmate-ui/dropdown', dependency_15], ['@aimpact/chat-sdk/users', dependency_16], ['@beyond-js/widgets/render', dependency_17]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/components/navbar-header.code');
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
        hash: 1878913676,
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
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
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

      /*****************************
      INTERNAL MODULE: ./environment
      *****************************/

      ims.set('./environment', {
        hash: 3183393909,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Environment = Environment;
          var _react = require("react");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /*bundle*/
          function Environment() {
            const {
              environment
            } = _wrapper.settings;
            if (!['local', 'development', 'testing', 'quality'].includes(environment)) return null;
            let label = environment === 'quality' ? 'Beta' : environment;
            return _react.default.createElement("div", {
              className: "environment-header"
            }, label, " environment");
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2912096874,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _framerMotion = require("framer-motion");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _closable = require("./components/closable");
          var _notification = require("./components/notification");
          var _preload = require("./components/preload");
          var _context = require("./context");
          var _menu = require("./menu");
          var _userMenu = require("./user-menu");
          var _environment = require("./environment");
          /*bundle*/
          function NavbarHeader({
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
            }, _react.default.createElement("div", {
              className: "navbar-sticky-container"
            }, _react.default.createElement(_environment.Environment, null), _react.default.createElement(_framerMotion.motion.header, {
              className: cls,
              ref: ref
            }, _react.default.createElement("div", {
              className: "navbar__container"
            }, _react.default.createElement("section", {
              className: "left-section"
            }, closable ? _react.default.createElement(_closable.ClosableIcon, {
              broker: store.broker,
              apply: closable,
              backlink: backlink,
              force: store?.broker?.force
            }) : _react.default.createElement(_icons.IconButton, {
              icon: "bars",
              onClick: toggleMenu,
              className: "hamburger-icon circle"
            }), _react.default.createElement(_image.Image, {
              onClick: goHome,
              src: _wrapper.settings.APP_LOGO,
              alt: _wrapper.settings.APP_NAME,
              className: "navbar-logo"
            }), closable && detail && _react.default.createElement("span", {
              className: "detail"
            }, detail), _react.default.createElement('app-breadcrumb'), store?.broker?.title && _react.default.createElement("span", null, store.broker.title)), _react.default.createElement("section", {
              className: "right-section"
            }, children, _react.default.createElement(_userMenu.UserMenu, null))))), _react.default.createElement(_notification.NotificationBar, {
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
        hash: 2465851343,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideMenu = AsideMenu;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _session = require("@aimpact/chat-sdk/session");
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _context = require("../context");
          var _context2 = require("./context");
          var _student = require("./student");
          var _teacher = require("./teacher");
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
            //@ts-ignore
            const isTeacher = !!user?.teacher || !!user?.roles?.includes('teacher');
            (0, _hooks.useStore)(user, ['user.loaded', 'login']);
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
        hash: 4270880512,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherMenu = TeacherMenu;
          var _react = require("react");
          var _context = require("../context");
          var Accordion = require("@radix-ui/react-accordion");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _item = require("./item");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
            }, texts.modules), _wrapper.settings.kb && _react.default.createElement("li", {
              className: "menu-item"
            }, _react.default.createElement(Accordion.Root, {
              type: "single",
              collapsible: true
            }, _react.default.createElement(Accordion.Item, {
              value: `1`
            }, _react.default.createElement(Accordion.Trigger, {
              className: "menu-trigger"
            }, _react.default.createElement("div", {
              className: "container__item"
            }, _react.default.createElement(_icons.AppIcon, {
              name: "entities/classroom"
            }), texts.knowledgeBoxes), _react.default.createElement("span", {
              className: "caret",
              "aria-hidden": true
            }, "\u25BE")), _react.default.createElement(Accordion.Content, {
              className: "menu-content "
            }, _react.default.createElement("ul", {
              className: "submenu"
            }, _react.default.createElement(_item.MenuItem, {
              icon: "entities/classroom",
              href: "/kb/sections/list"
            }, texts.sections), _react.default.createElement(_item.MenuItem, {
              icon: "entities/classroom",
              href: "/kb/articles/list"
            }, texts.articles)))))), _react.default.createElement(_item.MenuItem, {
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
        hash: 3646206172,
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
        hash: 2932083971,
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
            const handleLoadError = () => setLoadError(true);
            const userProps = _session.sessionWrapper.user?.getProperties() ?? {};
            (0, _hooks.useStore)(_session.sessionWrapper, ['login']);
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
        hash: 4027481563,
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
        "im": "./environment",
        "from": "Environment",
        "name": "Environment"
      }, {
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
        (require || prop === 'Environment') && _export("Environment", Environment = require ? require('./environment').Environment : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJicm9rZXIiLCJhcHBseSIsImJhY2tsaW5rIiwiZm9yY2UiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwiaGlzdG9yeSIsInJlY29yZHMiLCJlbnRyaWVzIiwibGVuZ3RoIiwicmVwbGFjZVN0YXRlIiwiYmFjayIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJjbGFzc05hbWUiLCJfY29tcG9uZW50cyIsIl9kYXlqcyIsIl9ob29rcyIsImlzV2l0aGluU2V2ZW5EYXlzIiwiZGF0ZSIsImlucHV0RGF0ZSIsIm1heERhdGUiLCJhZGQiLCJpc0FmdGVyIiwiTm90aWZpY2F0aW9uQmFyIiwidGV4dHMiLCJpc1Zpc2libGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FuQmVTaG93ZWQiLCJtb3N0QmVTaG93ZWQiLCJzZXRNb3N0QmVTaG93ZWQiLCJ1c2VTdGF0ZSIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwib25DbG9zZSIsInNldEl0ZW0iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpbmsiLCJocmVmIiwidGFyZ2V0IiwibmV3VmVyc2lvbiIsInhzIiwiZmFsc2UiLCJkZXNrdG9wIiwidGl0bGUiLCJsYWJlbCIsImxpbmsiLCJfaW1hZ2UiLCJfdWkiLCJQcmVsb2FkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJJbWFnZSIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3dyYXBwZXIiLCJFbnZpcm9ubWVudCIsImVudmlyb25tZW50Iiwic2V0dGluZ3MiLCJpbmNsdWRlcyIsIl9iZXlvbmRfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfY2xvc2FibGUiLCJfbm90aWZpY2F0aW9uIiwiX3ByZWxvYWQiLCJfY29udGV4dCIsIl9tZW51IiwiX3VzZXJNZW51IiwiX2Vudmlyb25tZW50IiwiTmF2YmFySGVhZGVyIiwiY2hpbGRyZW4iLCJkZXRhaWwiLCJjbG9zYWJsZSIsInN0b3JlIiwidW5kZWZpbmVkIiwiY2xzIiwicmVmIiwidXNlUmVmIiwibWVudU9wZW5lZCIsInNldE9wZW5NZW51IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidG9nZ2xlTWVudSIsInZhbHVlIiwiZ29Ib21lIiwicHVzaFN0YXRlIiwiUHJvdmlkZXIiLCJtb3Rpb24iLCJoZWFkZXIiLCJzcmMiLCJBUFBfTE9HTyIsImFsdCIsIkFQUF9OQU1FIiwiVXNlck1lbnUiLCJBc2lkZU1lbnUiLCJPZmZDYW52YXNNZW51Q29udGV4dCIsInVzZU9mZkNhbnZhc01lbnVDb250ZXh0IiwiX3Nlc3Npb24iLCJfY29udGV4dDIiLCJfc3R1ZGVudCIsIl90ZWFjaGVyIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiaXNUZWFjaGVyIiwidGVhY2hlciIsInJvbGVzIiwidXNlU3RvcmUiLCJjbHNDb250YWluZXIiLCJNZW51IiwiVGVhY2hlck1lbnUiLCJTdHVkZW50TWVudSIsImNsaWNrT25CYWNrZHJvcCIsImN1cnJlbnQiLCJpc1NhbWVOb2RlIiwiSWNvbiIsIm1lbnUiLCJzdXBwb3J0IiwiQVBQX1NVUFBPUlRfRU1BSUwiLCJNZW51SXRlbSIsInByb3BzIiwiQ29udHJvbCIsImF0dHJzIiwiQXBwSWNvbiIsIm5hbWUiLCJfaXRlbSIsImhvbWUiLCJjbGFzc3Jvb21zIiwiQWNjb3JkaW9uIiwiY29tbXVuaXR5IiwibW9kdWxlcyIsImtiIiwiUm9vdCIsInR5cGUiLCJjb2xsYXBzaWJsZSIsIkl0ZW0iLCJUcmlnZ2VyIiwia25vd2xlZGdlQm94ZXMiLCJDb250ZW50Iiwic2VjdGlvbnMiLCJhcnRpY2xlcyIsIm9yZ2FuaXphdGlvbnMiLCJhcmNoaXZlIiwidXNlU2Vzc2lvbiIsIl9kcm9wZG93biIsIl9wcm9maWxlIiwibG9nb3V0IiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlByb2ZpbGVJY29uIiwiRHJvcGRvd25NZW51IiwicGhvdG9VUkwiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiVXNlck1lbnVJdGVtIiwidXNlck1lbnUiLCJwcmVmZXJlbmNlcyIsIkRyb3Bkb3duSXRlbSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsImhhbmRsZUxvYWRFcnJvciIsInVzZXJQcm9wcyIsImdldFByb3BlcnRpZXMiLCJvbkVycm9yIiwiX3JlbmRlciIsIlRoZW1lU3dpdGNoZXIiLCJ0aGVtZSIsImdsb2JhbFRoaXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImRlZmF1bHRUaGVtZSIsInVzZXJUaGVtZSIsInNldEljb24iLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsInVzZUVmZmVjdCIsIlVzZXJJdGVtIl0sInNvdXJjZXMiOlsiL3RzL2NvbXBvbmVudHMvY2xvc2FibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLnRzeCIsIi90cy9jb21wb25lbnRzL3ByZWxvYWQudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2Vudmlyb25tZW50LnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvbWVudS9jb250ZXh0LnRzeCIsIi90cy9tZW51L2luZGV4LnRzeCIsIi90cy9tZW51L2l0ZW0udHN4IiwiL3RzL21lbnUvc3R1ZGVudC50c3giLCIvdHMvbWVudS90ZWFjaGVyLnRzeCIsIi90cy9tZW51L3VzZS1zZXNzaW9uLnRzeCIsIi90cy91c2VyLW1lbnUvaW5kZXgudHN4IiwiL3RzL3VzZXItbWVudS9pdGVtLnRzeCIsIi90cy91c2VyLW1lbnUvcHJvZmlsZS50c3giLCIvdHMvdXNlci1tZW51L3RoZW1lLWJ1dHRvbi50c3giLCIvdHMvdXNlci1tZW51L3VzZXItaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFFBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7VUFnQk0sU0FBVUcsWUFBWUEsQ0FBQztZQUFFQyxNQUFNO1lBQUVDLEtBQUs7WUFBRUMsUUFBUTtZQUFFQztVQUFLLENBQUU7WUFDOUQsSUFBSSxDQUFDRixLQUFLLEVBQUUsT0FBTyxJQUFJO1lBRXZCLE1BQU1HLE9BQU8sR0FBR0MsS0FBSyxJQUFHO2NBQ3ZCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QixJQUFLSixRQUFRLElBQUlGLE1BQU0sQ0FBQ0csS0FBSyxJQUFLUixRQUFBLENBQUFZLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDL0U7Z0JBQ0EsSUFBSSxPQUFPVCxRQUFRLEtBQUssVUFBVSxFQUFFLE9BQU9BLFFBQVEsRUFBRTtnQkFDckRQLFFBQUEsQ0FBQVksT0FBTyxDQUFDSyxZQUFZLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRVYsUUFBUSxDQUFDOztjQUd6QyxPQUFPUCxRQUFBLENBQUFZLE9BQU8sQ0FBQ00sSUFBSSxFQUFFO1lBQ3RCLENBQUM7WUFDRCxPQUFPZixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEs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