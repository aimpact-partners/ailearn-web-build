System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "pragmate-ui@1.0.0-beta.6/alert", "react@18.3.1", "@aimpact/ailearn-app@0.1.6-dev.21/components/ui", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/list"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_4 = _pragmateUi100Beta6Alert;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp016Dev21ComponentsUi) {
      dependency_6 = _aimpactAilearnApp016Dev21ComponentsUi;
    }, function (_pragmateUi100Beta6Components) {
      dependency_7 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Form) {
      dependency_8 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_9 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6Image) {
      dependency_10 = _pragmateUi100Beta6Image;
    }, function (_pragmateUi100Beta6List) {
      dependency_11 = _pragmateUi100Beta6List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["simplebar-react", "3.2.6"], ["swiper", "10.3.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["@aimpact/ailearn-app", "0.1.6-dev.21"], ["@aimpact/ailearn-app", "0.1.6-dev.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/ui/components"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['pragmate-ui/alert', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/form', dependency_8], ['pragmate-ui/icons', dependency_9], ['pragmate-ui/image', dependency_10], ['pragmate-ui/list', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-ui-components",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/ui/components",
        "is": "page",
        "route": "/ui/components",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.21/ui/components');
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
        hash: 575573814,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Alerts = Alerts;
          var _alert = require("pragmate-ui/alert");
          var _react = require("react");
          function Alerts() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", null, " Texts states"), _react.default.createElement("span", {
              className: "text-success"
            }, " Success alert"), _react.default.createElement("span", {
              className: "text-error"
            }, " error alert"), _react.default.createElement("span", {
              className: "text-info"
            }, " info alert"), _react.default.createElement("span", {
              className: "text-warning"
            }, " warning alert"), _react.default.createElement("h3", {
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
            }, " warning alert")), _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement(_alert.Alert, {
              type: "error",
              message: "Esto es un error"
            }), _react.default.createElement(_alert.Alert, {
              type: "success",
              message: "Esto es un success"
            }), _react.default.createElement(_alert.Alert, {
              type: "info",
              message: "Esto es un info"
            }), _react.default.createElement(_alert.Alert, {
              type: "warning",
              message: "Esto es un error"
            }), _react.default.createElement(_alert.Alert, {
              type: "error"
            }, _react.default.createElement("h3", null, "Alert title"), _react.default.createElement("p", null, "Content in de alert")), _react.default.createElement(_alert.Alert, {
              type: "success"
            }, _react.default.createElement("h3", null, "Alert title"), _react.default.createElement("p", null, "Content in de alert")), _react.default.createElement(_alert.Alert, {
              type: "error"
            }, _react.default.createElement("h3", null, "Alert title"), _react.default.createElement("p", null, "Content in de alert")), _react.default.createElement(_alert.Alert, {
              type: "info"
            }, _react.default.createElement("h3", null, "Alert title"), _react.default.createElement("p", null, "Content in de alert")))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/backgrounds
      **********************************************/

      ims.set('./views/components/backgrounds', {
        hash: 1161471450,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Backgrounds = Backgrounds;
          var _react = require("react");
          function Backgrounds() {
            const backgrounds = ['primary-container', 'secondary-container', 'primary-dark-container', 'secondary-dark-container', 'primary-light-container', 'secondary-light-container', 'background', 'surface', 'surface-variant'];
            return _react.default.createElement("div", null, backgrounds.map(item => {
              return _react.default.createElement("div", {
                key: item
              }, _react.default.createElement("h3", null, item), _react.default.createElement("div", {
                className: `bg-box bg-${item}`
              }));
            }));
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

      /***********************************************
      INTERNAL MODULE: ./views/components/buttons copy
      ***********************************************/

      ims.set('./views/components/buttons copy', {
        hash: 504127515,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Buttons = Buttons;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function Buttons() {
            return _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "button-row"
            }, _react.default.createElement(_components.Button, {
              variant: "primary"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              variant: "primary",
              icon: "user"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              icon: "user"
            }, "Primary button")), _react.default.createElement("div", {
              className: "button-row"
            }, _react.default.createElement(_components.Button, {
              bordered: true,
              variant: "primary"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              bordered: true,
              variant: "secondary"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              bordered: true,
              variant: "primary",
              icon: "user"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              bordered: true,
              variant: "secondary",
              icon: "user"
            }, "Primary button")));
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
        hash: 3020221867,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Forms = Forms;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
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
            }, _react.default.createElement(_form.Input, {
              label: "Full Name - Default State",
              type: "text",
              name: "defaultName",
              value: defaultName,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_form.Input, {
              label: "Full Password - Default State",
              type: "password",
              name: "examplePassword",
              value: examplePassword,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_form.Input, {
              label: "Full Email - Default State",
              type: "text",
              name: "hoverText",
              value: hoverText,
              onChange: handleChange,
              placeholder: "This is a placeholder example. Complete State"
            }), _react.default.createElement(_form.Input, {
              label: "Full Email - Default State",
              type: "text",
              name: "defaultText",
              value: defaultText,
              onChange: handleChange,
              placeholder: "Input user name and surname. Complete State"
            }), _react.default.createElement(_form.Input, {
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
        hash: 381670367,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _alerts = require("./components/alerts");
          /*bundle*/
          function View() {
            return _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_alerts.Alerts, null));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/old_
      ****************************/

      ims.set('./views/old_', {
        hash: 3234661470,
        creator: function (require, exports) {
          // import React from 'react';
          // import { Typography } from './components/typography';
          // import { Buttons } from './components/buttons';
          // import { Cards } from './components/cards';
          // import { TabsContainer, Tabs, Panes, Tab } from 'pragmate-ui/tabs';
          // import { Alerts } from './components/alerts';
          // import { Icons } from './components/icons';
          // import { Forms } from './components/forms';
          // import { Lists } from './components/lists';
          // import { Banners } from './components/banners';
          // import { Illustrations } from './components/illustrations';
          // import { Empty } from './components/empty';
          // import { PageContainer } from '@aimpact/ailearn-app/components/ui';
          // export /*bundle*/
          // function OLDView() {
          // 	return (
          // 		<main>
          // 			<TabsContainer>
          // 				<Tabs>
          // 					<Tab>Elements</Tab>
          // 					<Tab>Pallete</Tab>
          // 					<Tab>Forms & Lists</Tab>
          // 					<Tab>Cards & Banners</Tab>
          // 					<Tab>Illustrations</Tab>
          // 				</Tabs>
          // 				<Panes>
          // 					<div className="elements-general__container">
          // 						<Typography />
          // 						<Icons />
          // 						<Buttons />
          // 						<Alerts />
          // 					</div>
          // 					<pui-template-view-widget />
          // 					<div className="elements-general__container">
          // 						{/* Forms & Lists */}
          // 						<Forms />
          // 						<Lists />
          // 						<Empty />
          // 					</div>
          // 					<div className="elements-general__container">
          // 						{/* Cards & Banners */}
          // 						<Cards />
          // 						<Banners />
          // 					</div>
          // 					<div className="elements-general__container">
          // 						<Illustrations />
          // 					</div>
          // 				</Panes>
          // 			</TabsContainer>
          // 		</main>
          // 	);
          // }
          "use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX2FsZXJ0IiwiX3JlYWN0IiwiQWxlcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkFsZXJ0IiwidHlwZSIsIm1lc3NhZ2UiLCJCYWNrZ3JvdW5kcyIsImJhY2tncm91bmRzIiwibWFwIiwiaXRlbSIsImtleSIsIl91aSIsIkJhbm5lcnMiLCJoZWFkZXJMaXN0IiwidXJsIiwic3RhdHVzIiwiSGVhZGVyQ2FyZCIsInRpdGxlIiwiYWx0IiwiaW1hZ2UiLCJvcHRpb24iLCJvcHRpb25hbCIsImxpc3QiLCJfY29tcG9uZW50cyIsIkJ1dHRvbnMiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsImJvcmRlcmVkIiwiZGlzYWJsZWQiLCJCdXR0b25Hcm91cCIsIl90ZW1wbGF0ZSIsIkNhcmRzIiwiQ2FyZCIsIkNhcmRJbWFnZSIsInNyYyIsImFjdGl2aXR5IiwiZGF0YSIsInBpY3R1cmUiLCJDYXJkQ29udGVudCIsImRlc2NyaXB0aW9uIiwiYWN0aXZpdGllcyIsImNvdW50IiwiaHJlZiIsInZpZXdCb3giLCJpZCIsImQiLCJ0cmFuc2Zvcm0iLCJmaWxsIiwiRW1wdHkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiX2Zvcm0iLCJGb3JtcyIsImRlZmF1bHRWYWx1ZXMiLCJkZWZhdWx0TmFtZSIsImV4YW1wbGVQYXNzd29yZCIsImV4YW1wbGVFbWFpbCIsImhvdmVyVGV4dCIsImRlZmF1bHRUZXh0IiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY3VycmVudFZhbHVlIiwibmFtZSIsInZhbHVlIiwiSW5wdXQiLCJsYWJlbCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsIl9pY29ucyIsIkljb25zIiwiSWNvbiIsIl9pbWFnZSIsIklsbHVzdHJhdGlvbnMiLCJJbWFnZSIsIl9saXN0IiwiZXhhbXBsZUl0ZW1zIiwiTGlzdHMiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiSXRlbSIsIlR5cG9ncmFwaHkiLCJTdWJEaXZpZGVyIiwiX2FsZXJ0cyIsIlBhZ2VDb250YWluZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9kYXRhL3RlbXBsYXRlLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWxlcnRzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2JhY2tncm91bmRzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Jhbm5lcnMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYnV0dG9ucyBjb3B5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2J1dHRvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvY2FyZHMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZm9ybXMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaWNvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaWxsdXN0cmF0aW9ucy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9saXN0cy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy90eXBvZ3JhcGh5LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3Mvb2xkXy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7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RSxPQUFBLENBQUFDLGFBQUEsaUNBQTBCLEVBQzFCSCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxpQ0FBMEIsRUFDMUJILE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLGlDQUEwQixDQUNyQixDQUNHLEVBQ1ZILE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQUlFLFNBQVMsRUFBQztZQUFVLGVBQWUsRUFDdkNMLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUFxQixHQUN2Q0wsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWlCLEdBQy9CTCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxHQUFBLENBQUE2RSxVQUFVO2NBQUN2RSxLQUFLLEVBQUM7WUFBK0IsRUFBRyxFQUNwRHBCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQUdFLFNBQVMsRUFBQztZQUFJLG1QQUliLEVBQ0pMLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQUdFLFNBQVMsRUFBQztZQUFJLG1QQUliLEVBQ0pMLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQUdFLFNBQVMsRUFBQztZQUFrQixxQkFBb0IsRUFDbkRMLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQUdFLFNBQVMsRUFBQztZQUFrQixxQkFBb0IsQ0FDOUMsQ0FDRyxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcENBLElBQUFMLE1BQUEsR0FBQWQsT0FBQTtVQUNBLElBQUE0QixHQUFBLEdBQUE1QixPQUFBO1VBQ0EsSUFBQTBHLE9BQUEsR0FBQTFHLE9BQUE7VUFDTztVQUFVLFNBQ1JTLElBQUlBLENBQUE7WUFDWixPQUNDSyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxHQUFBLENBQUErRSxhQUFhLFFBQ2I3RixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUYsT0FBQSxDQUFBM0YsTUFBTSxPQUFHLENBQ0s7VUFFbEI7Ozs7Ozs7Ozs7O1VDVkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFBQSJ9