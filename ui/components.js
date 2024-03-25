System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "pragmate-ui@0.0.6/alert", "react@18.2.0", "@aimpact/ailearn-app@0.0.29/components/ui", "pragmate-ui@0.0.6/components", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/tabs"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_3 = _beyondJsReact18Widgets111Page;
    }, function (_pragmateUi006Alert) {
      dependency_4 = _pragmateUi006Alert;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp0029ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0029ComponentsUi;
    }, function (_pragmateUi006Components) {
      dependency_7 = _pragmateUi006Components;
    }, function (_aimpactChat101SharedComponents) {
      dependency_8 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi006Icons) {
      dependency_9 = _pragmateUi006Icons;
    }, function (_pragmateUi006Image) {
      dependency_10 = _pragmateUi006Image;
    }, function (_pragmateUi006Tabs) {
      dependency_11 = _pragmateUi006Tabs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.29"], ["@aimpact/ailearn-app", "0.0.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.29/ui/components"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['pragmate-ui/alert', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/chat/shared/components', dependency_8], ['pragmate-ui/icons', dependency_9], ['pragmate-ui/image', dependency_10], ['pragmate-ui/tabs', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-ui-components",
        "vspecifier": "@aimpact/ailearn-app@0.0.29/ui/components",
        "is": "page",
        "route": "/ui/components",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.29/ui/components');
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
        hash: 2617694072,
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
              className: "card__subtitle disabled-text p2"
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
        hash: 2842405251,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Lists = Lists;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          const exampleItems = [{
            text: '3'
          }, {
            text: '2'
          }, {
            text: '1'
          }, {
            text: '...'
          }, {
            text: '🚀'
          }];
          function Lists() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Lists"), _react.default.createElement("section", null, _react.default.createElement("div", {
              className: "item__container optional centered"
            }, _react.default.createElement(_ui.ListContainer, {
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
        hash: 2202033890,
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
              titleText: "Example of a subtitle divider"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX2FsZXJ0IiwiX3JlYWN0IiwiQWxlcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkFsZXJ0IiwidHlwZSIsIl91aSIsIkJhbm5lcnMiLCJoZWFkZXJMaXN0IiwidXJsIiwic3RhdHVzIiwiSGVhZGVyQ2FyZCIsInRpdGxlIiwiYWx0IiwiaW1hZ2UiLCJvcHRpb24iLCJvcHRpb25hbCIsImxpc3QiLCJfY29tcG9uZW50cyIsIkJ1dHRvbnMiLCJCdXR0b24iLCJ2YXJpYW50IiwiZGlzYWJsZWQiLCJib3JkZXJlZCIsIkJ1dHRvbkdyb3VwIiwiX3RlbXBsYXRlIiwiQ2FyZHMiLCJDYXJkIiwiQ2FyZEltYWdlIiwic3JjIiwiYWN0aXZpdHkiLCJkYXRhIiwicGljdHVyZSIsIkNhcmRDb250ZW50IiwiZGVzY3JpcHRpb24iLCJhY3Rpdml0aWVzIiwiY291bnQiLCJocmVmIiwidmlld0JveCIsImlkIiwiZCIsInRyYW5zZm9ybSIsImZpbGwiLCJFbXB0eSIsIkVtcHR5Q2FyZCIsInRleHQiLCJpY29uIiwiRm9ybXMiLCJkZWZhdWx0VmFsdWVzIiwiZGVmYXVsdE5hbWUiLCJleGFtcGxlUGFzc3dvcmQiLCJleGFtcGxlRW1haWwiLCJob3ZlclRleHQiLCJkZWZhdWx0VGV4dCIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm5hbWUiLCJ2YWx1ZSIsIklucHV0IiwibGFiZWwiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJfaWNvbnMiLCJJY29ucyIsIkljb24iLCJfaW1hZ2UiLCJJbGx1c3RyYXRpb25zIiwiSW1hZ2UiLCJleGFtcGxlSXRlbXMiLCJMaXN0cyIsIkxpc3RDb250YWluZXIiLCJpdGVtcyIsImNvbnRyb2wiLCJJdGVtIiwiVHlwb2dyYXBoeSIsIlN1YkRpdmlkZXIiLCJ0aXRsZVRleHQiLCJfdHlwb2dyYXBoeSIsIl9idXR0b25zIiwiX2NhcmRzIiwiX3RhYnMiLCJfYWxlcnRzIiwiX2Zvcm1zIiwiX2xpc3RzIiwiX2Jhbm5lcnMiLCJfaWxsdXN0cmF0aW9ucyIsIl9lbXB0eSIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiVGFiIiwiUGFuZXMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9kYXRhL3RlbXBsYXRlLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWxlcnRzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Jhbm5lcnMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYnV0dG9ucy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9jYXJkcy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lbXB0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9mb3Jtcy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pY29ucy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pbGx1c3RyYXRpb25zLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2xpc3RzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3R5cG9ncmFwaHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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