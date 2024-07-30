System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "pragmate-ui@1.0.0-beta.1/alert", "react@18.2.0", "@aimpact/ailearn-app@0.1.0-dev.08/components/ui", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/chat@1.0.2/shared/components", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/image", "pragmate-ui@1.0.0-beta.1/list", "pragmate-ui@1.0.0-beta.1/tabs"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_pragmateUi100Beta1Alert) {
      dependency_4 = _pragmateUi100Beta1Alert;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp010Dev08ComponentsUi) {
      dependency_6 = _aimpactAilearnApp010Dev08ComponentsUi;
    }, function (_pragmateUi100Beta1Components) {
      dependency_7 = _pragmateUi100Beta1Components;
    }, function (_aimpactChat102SharedComponents) {
      dependency_8 = _aimpactChat102SharedComponents;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_9 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Image) {
      dependency_10 = _pragmateUi100Beta1Image;
    }, function (_pragmateUi100Beta1List) {
      dependency_11 = _pragmateUi100Beta1List;
    }, function (_pragmateUi100Beta1Tabs) {
      dependency_12 = _pragmateUi100Beta1Tabs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-dev.08"], ["@aimpact/ailearn-app", "0.1.0-dev.08"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.08/ui/components"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['pragmate-ui/alert', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/chat/shared/components', dependency_8], ['pragmate-ui/icons', dependency_9], ['pragmate-ui/image', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/tabs', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-ui-components",
        "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.08/ui/components",
        "is": "page",
        "route": "/ui/components",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-dev.08/ui/components');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1927493790,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {}
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /*******************************
      INTERNAL MODULE: ./data/template
      *******************************/

      ims.set('./data/template', {
        hash: 3019401528,
        creator: function (require, exports) {
          // import type { IActivityBaseData, IActivityData } from '@aimpact/ailearn-api/data/interfaces';
          // const data: IActivityBaseData = {
          // 	id: 'example-ID',
          // 	picture: 'https://res.cloudinary.com/versus/image/upload/f_auto,q_auto/v1/AImpact/umiatpnb6l4vzuqrwi5f',
          // 	language: 'es',
          // 	type: 'example',
          // 	title: 'Example of a title for any card',
          // 	description:
          // 		'Example of a description designed for any type of card. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
          // 	data: {
          // 		activities: {
          // 			count: 5
          // 		}
          // 	}
          // };
          // export const activity = { id: data.id, data };
          "use strict";
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1793251939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          class StoreManager {}
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/components/alerts
      *****************************************/

      ims.set('./views/components/alerts', {
        hash: 3760538140,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Alerts = Alerts;
          var _alert = require("pragmate-ui/alert");
          var _react = require("react");
          function Alerts() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Alerts"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement(_alert.Alert, {
              type: "success"
            }, " Success alert"), _react.default.createElement(_alert.Alert, {
              type: "error"
            }, " error alert"), _react.default.createElement(_alert.Alert, {
              type: "info"
            }, " info alert"), _react.default.createElement(_alert.Alert, {
              type: "warning"
            }, " warning alert"))));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/components/banners
      ******************************************/

      ims.set('./views/components/banners', {
        hash: 3095340695,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Banners = Banners;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Banners() {
            const headerList = [{
              url: '',
              status: 'waiting'
            }, {
              url: '',
              status: 'current'
            }, {
              url: '',
              status: 'done'
            }];
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Banners"), _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("h4", null, "Default"), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.HeaderCard, {
              title: "\u00A1Hello <Student Name>!",
              alt: 'card-robot',
              image: "/assets/ai-robot.webp"
            }, _react.default.createElement("p", {
              className: "p2"
            }, "Welcome to your activity space. You can now access the learning modules assigned to you by your teacher. It's easy!"))), _react.default.createElement("h4", null, "Default Light"), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.HeaderCard, {
              option: "light",
              title: "\u00A1Hello <Student Name>!",
              alt: 'card-robot',
              image: "/assets/ai-robot.webp"
            }, _react.default.createElement("p", {
              className: "p2"
            }, "Welcome to your activity space. You can now access the learning modules assigned to you by your teacher. It's easy!"))), _react.default.createElement("h4", null, "Default with Numbers/List"), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.HeaderCard, {
              optional: "light",
              list: headerList,
              title: "Let's keep evolving"
            }, _react.default.createElement("p", {
              className: "p1 mb-20"
            }, "Here you have a space to list multiple pages and follow up with a nice dynamic header.", _react.default.createElement("br", null), _react.default.createElement("br", null), "Showing the different possibilities that have redirections through links and multiple colours such as the following:", ' '), _react.default.createElement("p", {
              className: "p2 mb-10"
            }, "current: var(--on-primary)"), _react.default.createElement("p", {
              className: "p2 mb-10"
            }, "waiting: var(--tertiary-20)"), _react.default.createElement("p", {
              className: "p2 mb-10"
            }, "success: var(--success-70)")))));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/components/buttons
      ******************************************/

      ims.set('./views/components/buttons', {
        hash: 1649869800,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Buttons = Buttons;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function Buttons() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Buttons"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("span", {
              className: "h3"
            }, "Normal state"), _react.default.createElement(_components.Button, null, "Primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary"
            }, "Secondary button"), _react.default.createElement(_components.Button, {
              variant: "tertiary"
            }, "Tertiary button"), _react.default.createElement("span", {
              className: "h3"
            }, "Disabled Buttons"), _react.default.createElement(_components.Button, {
              disabled: true
            }, "Primary disabled button"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              disabled: true
            }, "Secondary disable button"), _react.default.createElement(_components.Button, {
              variant: "tertiary",
              disabled: true
            }, "Tertiary disable button"), _react.default.createElement("span", {
              className: "h3"
            }, "Bordered"), _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true
            }, "primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              bordered: true
            }, "secondary button"), _react.default.createElement(_components.Button, {
              variant: "tertiary",
              bordered: true
            }, "tertiary button"), _react.default.createElement("span", {
              className: "h3"
            }, "ButtonGroup"), _react.default.createElement(_components.ButtonGroup, null, _react.default.createElement(_components.Button, null, "btn 1"), _react.default.createElement(_components.Button, null, "btn 2"), _react.default.createElement(_components.Button, null, "btn 3")))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/cards
      ****************************************/

      ims.set('./views/components/cards', {
        hash: 2632731124,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Cards = Cards;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _template = require("../../data/template");
          function Cards() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Cards"), _react.default.createElement("span", {
              className: "p1"
            }, "New Cards"), _react.default.createElement("div", {
              className: "list-example__container"
            }, _react.default.createElement(_ui.Card, null, _react.default.createElement(_ui.CardImage, {
              src: _template.activity.data.picture,
              alt: _template.activity.data.title
            }, _react.default.createElement("div", {
              className: "card__top_text secondary"
            }, "Classroom")), _react.default.createElement(_ui.CardContent, {
              option: "column",
              className: "theme-0"
            }, _react.default.createElement("section", {
              className: "card-footer__container"
            }, _react.default.createElement("div", {
              className: "card__text-content"
            }, _react.default.createElement("h4", {
              className: "card__title"
            }, _template.activity.data.title), _react.default.createElement("span", {
              className: "card__subtitle p2"
            }, _template.activity.data.description))), _react.default.createElement("div", {
              className: "card__footer-actions"
            }, _react.default.createElement("hr", {
              className: "card__divider"
            }), _react.default.createElement("div", {
              className: "card__details"
            }, _react.default.createElement("span", {
              className: "cart__text-non-hover p2"
            }, _template.activity.data.activities?.count, " Actividad"), _react.default.createElement("span", {
              className: "card__text-hover p2"
            }, "Acceder")))))), _react.default.createElement("span", {
              className: "p1"
            }, "Old card"), _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("div", {
              className: "list__item"
            }, _react.default.createElement("section", {
              className: "list__item__header curriculum-objective"
            }, _react.default.createElement("header", null, _react.default.createElement("a", {
              href: "/classworks/management/5c47e4e4-61a6-4ee7-83e1-6b206f89a990"
            }, _react.default.createElement("h4", null, _react.default.createElement("svg", {
              viewBox: "0 0 24 24",
              className: "pragmate-icon"
            }, _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("path", {
              id: "Trazado_229",
              "data-name": "Trazado 229",
              d: "M0,0H24V24H0Z",
              transform: "translate(0)",
              fill: "none"
            }), _react.default.createElement("path", {
              id: "Trazado_230",
              "data-name": "Trazado 230",
              d: "M13,3,1,9.545l4.364,2.378v6.545L13,22.636l7.636-4.167V11.924l2.182-1.189v7.538H25V9.545Zm7.44,6.545L13,13.6,5.56,9.545,13,5.487Zm-1.985,7.625L13,20.149,7.545,17.171V13.113L13,16.091l5.455-2.978Z",
              transform: "translate(-1 -0.818)"
            })))), "Card title"))), _react.default.createElement("section", {
              className: "class-actions"
            }, _react.default.createElement("button", {
              type: "button",
              className: "pragmate-icon-button btn-default ripple"
            }, _react.default.createElement("svg", {
              viewBox: "0 0 24 24",
              className: "pragmate-icon"
            }, _react.default.createElement("g", null, _react.default.createElement("g", null, ' ', _react.default.createElement("path", {
              id: "Trazado_175",
              "data-name": "Trazado 175",
              d: "M0,0H24V24H0Z",
              fill: "none"
            }), _react.default.createElement("path", {
              id: "Trazado_176",
              "data-name": "Trazado 176",
              d: "M51.375,38.33a2.912,2.912,0,0,0-1.96.77l-7.13-4.15a2.767,2.767,0,0,0,0-1.4l7.05-4.11a2.993,2.993,0,1,0-.96-2.19,3.274,3.274,0,0,0,.09.7l-7.05,4.11a3,3,0,1,0,0,4.38l7.12,4.16a2.821,2.821,0,0,0-.08.65,2.92,2.92,0,1,0,2.92-2.92Zm0-12.08a1,1,0,1,1-1,1A1,1,0,0,1,51.375,26.25Zm-12,9a1,1,0,1,1,1-1A1,1,0,0,1,39.375,35.25Zm12,7.02a1,1,0,1,1,1-1A1,1,0,0,1,51.375,42.27Z",
              transform: "translate(-33.375 -22.25)"
            }))))), _react.default.createElement("button", {
              type: "button",
              className: "pragmate-icon-button btn-default ripple"
            }, _react.default.createElement("svg", {
              viewBox: "0 0 24 24",
              className: "pragmate-icon"
            }, _react.default.createElement("g", null, _react.default.createElement("g", {
              id: "delete"
            }, _react.default.createElement("path", {
              d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            }))))))), _react.default.createElement("article", {
              className: "collapsible__container  topics "
            }, _react.default.createElement("header", {
              className: "collapsible__header  topics-header "
            }, _react.default.createElement("div", {
              className: "collapsible__header-content"
            }, _react.default.createElement("h5", null, "Any content")))))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/empty
      ****************************************/

      ims.set('./views/components/empty', {
        hash: 2006490327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Empty() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "EmptyList"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement(_ui.EmptyCard, {
              text: "This is a text field to explain what data is missing.",
              icon: "generate"
            }))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/forms
      ****************************************/

      ims.set('./views/components/forms', {
        hash: 730311099,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Forms = Forms;
          var _react = require("react");
          var _components = require("@aimpact/chat/shared/components");
          function Forms() {
            const defaultValues = {
              defaultName: '',
              examplePassword: '',
              exampleEmail: '',
              hoverText: '',
              defaultText: ''
            };
            const [values, setValues] = _react.default.useState(defaultValues);
            const handleChange = ({
              currentTarget: target
            }) => {
              const currentValue = {
                ...values
              };
              currentValue[target.name] = target.value;
              setValues(currentValue);
            };
            const {
              defaultName,
              examplePassword,
              exampleEmail,
              hoverText,
              defaultText
            } = values;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Forms"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement(_components.Input, {
              label: "Full Name - Default State",
              type: "text",
              name: "defaultName",
              value: defaultName,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_components.Input, {
              label: "Full Password - Default State",
              type: "password",
              name: "examplePassword",
              value: examplePassword,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_components.Input, {
              label: "Full Email - Default State",
              type: "text",
              name: "hoverText",
              value: hoverText,
              onChange: handleChange,
              placeholder: "This is a placeholder example. Complete State"
            }), _react.default.createElement(_components.Input, {
              label: "Full Email - Default State",
              type: "text",
              name: "defaultText",
              value: defaultText,
              onChange: handleChange,
              placeholder: "Input user name and surname. Complete State"
            }), _react.default.createElement(_components.Input, {
              placeholder: "Default Disabled Input State",
              type: "email",
              name: "exampleEmail",
              disabled: true,
              value: exampleEmail,
              onChange: handleChange,
              required: true
            }))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/icons
      ****************************************/

      ims.set('./views/components/icons', {
        hash: 2311052754,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Icons = Icons;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function Icons() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Icons"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container optional centered"
            }, _react.default.createElement("div", {
              className: "sub-item__container optional"
            }, _react.default.createElement("span", {
              className: "p2 mb-10"
            }, "Default"), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "menu"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "profile"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "refresh"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "drag"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "list-menu"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "mic"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "delete"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "copy"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "chat"
            })), _react.default.createElement("div", {
              className: "sub-item__container optional"
            }, _react.default.createElement("span", {
              className: "p2 mb-10"
            }, "Hover"), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "menu"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "profile"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "refresh"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "drag"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "list-menu"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "mic"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "delete"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "copy"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "chat"
            })))));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/components/illustrations
      ************************************************/

      ims.set('./views/components/illustrations', {
        hash: 2599249148,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Illustrations = Illustrations;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          function Illustrations() {
            return _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Illustrations"), _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("div", {
              className: "images-list__container"
            }, _react.default.createElement(_image.Image, {
              src: "https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_220/v1/AImpact/fujhhbk2li36uxgyaipn",
              alt: "Sad Explorer"
            }), _react.default.createElement(_image.Image, {
              src: "https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_220/v1/AImpact/lwkztda1sq08ushwipmi",
              alt: "Happy Explorer"
            }), _react.default.createElement(_image.Image, {
              src: "https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_270/v1/AImpact/f7knfihku0pyr8eo2yqh",
              alt: "Neutral Explorer"
            }), _react.default.createElement(_image.Image, {
              src: "https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_220/v1/AImpact/etq89fualhdkhkpeofat",
              alt: "Neutral Explorer"
            }))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/lists
      ****************************************/

      ims.set('./views/components/lists', {
        hash: 110724290,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Lists = Lists;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          const exampleItems = [{
            text: '3'
          }, {
            text: '2'
          }, {
            text: '1'
          }, {
            text: '...'
          }, {
            text: ''
          }];
          function Lists() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Lists"), _react.default.createElement("section", null, _react.default.createElement("div", {
              className: "item__container optional centered"
            }, _react.default.createElement(_list.List, {
              className: "list__container",
              items: exampleItems,
              control: Item
            }))));
          }
          function Item({
            data
          }) {
            return _react.default.createElement("span", {
              className: "p2"
            }, data.text);
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/components/typography
      *********************************************/

      ims.set('./views/components/typography', {
        hash: 2386178516,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Typography = Typography;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Typography() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Fonts"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("h1", null, "h1: Title with h1"), _react.default.createElement("h2", null, "h2: Title with h2"), _react.default.createElement("h3", null, "h3: Title with h3"), _react.default.createElement("h4", null, "h4: Title with h4"), _react.default.createElement("h5", null, "h5: Title with h5"))), _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Paragraph"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement(_ui.SubDivider, {
              title: "Example of a subtitle divider"
            }), _react.default.createElement("p", {
              className: "p1"
            }, "P1. Paragraph: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sunt alias aut vel, repellat, tenetur fuga ratione soluta, perspiciatis nihil iste sed voluptatibus voluptates nostrum?Consectetur id corporis optio similique."), _react.default.createElement("p", {
              className: "p2"
            }, "P2. Paragraph: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sunt alias aut vel, repellat, tenetur fuga ratione soluta, perspiciatis nihil iste sed voluptatibus voluptates nostrum?Consectetur id corporis optio similique."), _react.default.createElement("p", {
              className: "p1 disabled-text"
            }, "P1 Disable text"), _react.default.createElement("p", {
              className: "p2 disabled-text"
            }, "P2 Disable text"))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1878888243,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _typography = require("./components/typography");
          var _buttons = require("./components/buttons");
          var _cards = require("./components/cards");
          var _tabs = require("pragmate-ui/tabs");
          var _alerts = require("./components/alerts");
          var _icons = require("./components/icons");
          var _forms = require("./components/forms");
          var _lists = require("./components/lists");
          var _banners = require("./components/banners");
          var _illustrations = require("./components/illustrations");
          var _empty = require("./components/empty");
          /*bundle*/
          function View() {
            return _react.default.createElement("main", null, _react.default.createElement(_tabs.TabsContainer, null, _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, "Elements"), _react.default.createElement(_tabs.Tab, null, "Pallete"), _react.default.createElement(_tabs.Tab, null, "Forms & Lists"), _react.default.createElement(_tabs.Tab, null, "Cards & Banners"), _react.default.createElement(_tabs.Tab, null, "Illustrations")), _react.default.createElement(_tabs.Panes, null, _react.default.createElement("div", {
              className: "elements-general__container"
            }, _react.default.createElement(_typography.Typography, null), _react.default.createElement(_icons.Icons, null), _react.default.createElement(_buttons.Buttons, null), _react.default.createElement(_alerts.Alerts, null)), _react.default.createElement("pui-template-view-widget", null), _react.default.createElement("div", {
              className: "elements-general__container"
            }, _react.default.createElement(_forms.Forms, null), _react.default.createElement(_lists.Lists, null), _react.default.createElement(_empty.Empty, null)), _react.default.createElement("div", {
              className: "elements-general__container"
            }, _react.default.createElement(_cards.Cards, null), _react.default.createElement(_banners.Banners, null)), _react.default.createElement("div", {
              className: "elements-general__container"
            }, _react.default.createElement(_illustrations.Illustrations, null)))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX2FsZXJ0IiwiX3JlYWN0IiwiQWxlcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkFsZXJ0IiwidHlwZSIsIl91aSIsIkJhbm5lcnMiLCJoZWFkZXJMaXN0IiwidXJsIiwic3RhdHVzIiwiSGVhZGVyQ2FyZCIsInRpdGxlIiwiYWx0IiwiaW1hZ2UiLCJvcHRpb24iLCJvcHRpb25hbCIsImxpc3QiLCJfY29tcG9uZW50cyIsIkJ1dHRvbnMiLCJCdXR0b24iLCJ2YXJpYW50IiwiZGlzYWJsZWQiLCJib3JkZXJlZCIsIkJ1dHRvbkdyb3VwIiwiX3RlbXBsYXRlIiwiQ2FyZHMiLCJDYXJkIiwiQ2FyZEltYWdlIiwic3JjIiwiYWN0aXZpdHkiLCJkYXRhIiwicGljdHVyZSIsIkNhcmRDb250ZW50IiwiZGVzY3JpcHRpb24iLCJhY3Rpdml0aWVzIiwiY291bnQiLCJocmVmIiwidmlld0JveCIsImlkIiwiZCIsInRyYW5zZm9ybSIsImZpbGwiLCJFbXB0eSIsIkVtcHR5Q2FyZCIsInRleHQiLCJpY29uIiwiRm9ybXMiLCJkZWZhdWx0VmFsdWVzIiwiZGVmYXVsdE5hbWUiLCJleGFtcGxlUGFzc3dvcmQiLCJleGFtcGxlRW1haWwiLCJob3ZlclRleHQiLCJkZWZhdWx0VGV4dCIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm5hbWUiLCJ2YWx1ZSIsIklucHV0IiwibGFiZWwiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJfaWNvbnMiLCJJY29ucyIsIkljb24iLCJfaW1hZ2UiLCJJbGx1c3RyYXRpb25zIiwiSW1hZ2UiLCJfbGlzdCIsImV4YW1wbGVJdGVtcyIsIkxpc3RzIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsIkl0ZW0iLCJUeXBvZ3JhcGh5IiwiU3ViRGl2aWRlciIsIl90eXBvZ3JhcGh5IiwiX2J1dHRvbnMiLCJfY2FyZHMiLCJfdGFicyIsIl9hbGVydHMiLCJfZm9ybXMiLCJfbGlzdHMiLCJfYmFubmVycyIsIl9pbGx1c3RyYXRpb25zIiwiX2VtcHR5IiwiVGFic0NvbnRhaW5lciIsIlRhYnMiLCJUYWIiLCJQYW5lcyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL2RhdGEvdGVtcGxhdGUudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9hbGVydHMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYmFubmVycy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9idXR0b25zLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Zvcm1zLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2ljb25zLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2lsbHVzdHJhdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvbGlzdHMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHlwb2dyYXBoeS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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