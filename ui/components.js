System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "pragmate-ui@1.0.0-beta.7/alert", "react@18.2.0", "@aimpact/ailearn-app@0.3.1/components/module-card", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_4 = _pragmateUi100Beta7Alert;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp031ComponentsModuleCard) {
      dependency_6 = _aimpactAilearnApp031ComponentsModuleCard;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_7 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_9 = _pragmateUi100Beta7Toast;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_10 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Form) {
      dependency_12 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_13 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Image) {
      dependency_14 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7List) {
      dependency_15 = _pragmateUi100Beta7List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/ui/components"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['pragmate-ui/alert', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/module-card', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8], ['pragmate-ui/toast', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/image', dependency_14], ['pragmate-ui/list', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-ui-components",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/ui/components",
        "is": "page",
        "route": "/ui/components",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/ui/components');
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

      /*********************************************
      INTERNAL MODULE: ./views/components/cards/DATA
      *********************************************/

      ims.set('./views/components/cards/DATA', {
        hash: 218262819,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CARDS_DATA = void 0;
          const CARDS_DATA = exports.CARDS_DATA = {
            assignment: {
              module: {
                classroom: {
                  name: 'Matematicas',
                  id: 'ddc86faf-4e0c-4f22-a406-525d5f9b8947',
                  picture: ''
                },
                owner: {
                  photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTteBk-dzWH8dPy8wGf6OUdISFnBiASQbKLgugwXqfDy-PyQ=s96-c',
                  name: "Henry Test's",
                  id: '650d629a-59ef-4dc2-9b98-28cdaed68f04'
                },
                activities: {
                  count: 3,
                  types: ['content-theory', 'debate', 'spoken']
                },
                audience: {
                  catetory: 'aaa',
                  level: '3er Año'
                },
                language: 'es',
                timeUpdated: 1715290709493,
                timeCreated: 1715290709493,
                description: 'Módulo destinado a comprender y aplicar los principios fundamentales de la trigonometría en situaciones prácticas y analíticas. Los estudiantes aprenderán sobre las razones trigonométricas en triángulos rectángulos, funciones trigonométricas, y el uso de herramientas digitales para su análisis.',
                id: '403932c9-7314-4bb2-b861-e0e077b3a6ee',
                title: 'Título de la tarjeta de módulos publicados puede tener hasta tres líneas...',
                picture: 'https://dev.ailearn.api.aimpact.partners/modules/403932c9-7314-4bb2-b861-e0e077b3a6ee/picture'
              },
              id: '274fa1c9-99cd-4d84-8780-1fe04881b93f'
            },
            community: {
              owner: {
                photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTteBk-dzWH8dPy8wGf6OUdISFnBiASQbKLgugwXqfDy-PyQ=s96-c',
                name: "Henry Test's",
                id: '650d629a-59ef-4dc2-9b98-28cdaed68f04'
              },
              audience: {
                catetory: 'aaa',
                level: '3er Año'
              },
              creator: {
                photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTteBk-dzWH8dPy8wGf6OUdISFnBiASQbKLgugwXqfDy-PyQ=s96-c',
                name: 'Henry Box',
                id: '9hYZlT9NGYT4bfdPxqRzkit2exa2'
              },
              description: 'Este módulo te invita a explorar el impacto de la Inteligencia Artificial (IA) en la educación. Desde cómo puede personalizar tu aprendizaje hasta su papel como complemento en la enseñanza, buscamos fomentar un debate informado sobre sus beneficios y desafíos.',
              language: 'es',
              title: 'Inteligencia Artificial en el Aula',
              picture: 'https://ailearn-http-v2-j2rcifstnq-uc.a.run.app/modules/cd9a1fa7-280e-415b-951c-459b2248b38d/picture?95154.29999999702',
              objective: 'Analizar y reflexionar sobre el uso de la Inteligencia Artificial en el aula desde diferentes perspectivas, promoviendo debates estructurados para evaluar críticamente sus ventajas y desafíos en la enseñanza. Se abordará el valor de la misma en la personalización del aprendizaje, su rol complementario en la labor docente, y se invitará a la reflexión sobre su influencia en el proceso de aprendizaje de manera individual. Se utilizarán ejemplos cotidianos.',
              duration: 15,
              activities: {
                count: 3,
                types: ['content-theory', 'debate', 'spoken']
              },
              timeUpdated: 1715290709493,
              playground: {
                assignment: '/assignments/2c3b24a8-e7b1-4f8a-86ea-0c0fbd3761ef'
              },
              timeCreated: 1715290709493,
              id: '6f78c411-b383-4d3d-8051-2e34e887af40'
            },
            activity: {
              id: '717d372a-ded8-4239-9d16-6ad668305216',
              objective: 'Demostrar la comprensión de los efectos de las antenas Wi-Fi mediante una presentación oral estructurada.',
              type: 'spoken',
              title: 'Presentación Oral sobre Efectos de Wi-Fi',
              description: 'Prepararás y presentarás un breve informe oral sobre los efectos de la radiación de las antenas Wi-Fi en la salud humana.',
              language: 'es',
              picture: '',
              duration: 30,
              module: {
                id: 'd816e99f-0105-43f2-b5a6-e005fd45e1ed',
                creator: {
                  id: '9hYZlT9NGYT4bfdPxqRzkit2exa2',
                  name: 'Henry Box',
                  photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTteBk-dzWH8dPy8wGf6OUdISFnBiASQbKLgugwXqfDy-PyQ=s96-c'
                },
                objective: 'Analizar el impacto de las antenas Wi-Fi en la salud humana, fomentando la comprensión de los principios básicos de la radiación electromagnética y su relación con el cuerpo humano, así como la capacidad para explicar fenómenos científicos asociados a esta tecnología.',
                title: 'Impacto de las Antenas Wi-Fi en la Salud Humana',
                description: 'Este módulo está diseñado para analizar el efecto de las antenas Wi-Fi en la salud humana, proporcionando una comprensión de la radiación electromagnética y su interacción con el cuerpo humano.',
                language: 'es',
                picture: 'https://dev.ailearn.api.aimpact.partners/modules/d816e99f-0105-43f2-b5a6-e005fd45e1ed/picture?6477436',
                duration: '45',
                audience: '5to año',
                public: true,
                status: 'active',
                type: 'module',
                timeCreated: 1730817517390,
                timeUpdated: 1730817517390,
                ai: true
              },
              resources: {
                materials: {},
                specs: {
                  assessment: 'La tarea consiste en evaluar la presentación oral del estudiante sobre los efectos de las antenas Wi-Fi. Se debe considerar la claridad de la exposición, la comprensión del tema y la estructura del texto entregado. Se evaluarán aspectos como la precisión de la información, la capacidad de argumentación y la calidad del lenguaje utilizado. Al finalizar la actividad, se debe leer atentamente el texto de la presentación y tomar nota de los puntos fuertes y las áreas de mejora.',
                  criteria: [{
                    name: 'Claridad',
                    subject: 'El alumno debe exponer de manera clara y comprensible, evitando tecnicismos innecesarios y facilitando la comprensión del tema a la audiencia.'
                  }, {
                    name: 'Estructura',
                    subject: 'La presentación debe seguir una estructura lógica con introducción, desarrollo y conclusiones claramente definidas, permitiendo un seguimiento fácil por parte del oyente.'
                  }, {
                    name: 'Contenido',
                    subject: 'Se evaluará la precisión y relevancia de la información presentada sobre las antenas Wi-Fi, así como la inclusión de argumentos relacionados con los efectos en la salud y el medio ambiente.'
                  }, {
                    name: 'Lenguaje',
                    subject: 'El uso de un lenguaje apropiado y el cuidado en la pronunciación, ortografía y gramática serán factores clave en la evaluación del texto entregado.'
                  }],
                  task: 'Realiza una presentación oral de hasta tres minutos sobre los efectos de las antenas Wi-Fi. La presentación debe incluir una introducción sobre qué son las antenas Wi-Fi, cómo funcionan y los posibles efectos en la salud y el medio ambiente. Asegúrate de estructurar tu exposición en: introducción, desarrollo y conclusiones. Utiliza un lenguaje claro y conciso, y demuestra tu comprensión del tema. Prepara un texto que puedas entregar después de tu exposición.',
                  objectives: '',
                  instructions: ''
                }
              }
            }
          };
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/components/cards/alerts
      ***********************************************/

      ims.set('./views/components/cards/alerts', {
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
      INTERNAL MODULE: ./views/components/cards/index
      **********************************************/

      ims.set('./views/components/cards/index', {
        hash: 3040713242,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardsTemplate = CardsTemplate;
          var React = require("react");
          var _assignments = require("./types/assignments");
          var _community = require("./types/community");
          var _draft = require("./types/draft");
          var _module = require("./types/module");
          var _homeAssignments = require("./types/home-assignments");
          var _activity = require("./types/activity");
          function CardsTemplate() {
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h1", null, "Cards"), React.createElement("div", {
              className: "tree-columns"
            }, React.createElement(_activity.ActivityCardExample, {
              type: "content-theory"
            }), React.createElement(_activity.ActivityCardExample, {
              type: "character-talk"
            }), React.createElement(_activity.ActivityCardExample, {
              type: "multiple-choice"
            }), React.createElement(_module.ModuleCardExample, null), React.createElement(_community.CommunityCard, null), React.createElement(_draft.DraftCard, null), React.createElement(_assignments.AssignmentCardExample, null), React.createElement(_assignments.AssignmentCardExample, {
              className: "entity-card--xs"
            }), React.createElement(_homeAssignments.AssignmentHomeCardExample, null)));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/components/cards/types/activity
      *******************************************************/

      ims.set('./views/components/cards/types/activity', {
        hash: 1662650598,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityCardExample = ActivityCardExample;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _DATA = require("../DATA");
          function ActivityCardExample({
            className,
            type
          }) {
            const {
              activity: item
            } = _DATA.CARDS_DATA;
            const [hmrUpdated, setHmrUpdated] = React.useState({});
            // listen module-card changes and re-render the component
            (0, _hooks.useBinder)([_moduleCard.hmr], () => setHmrUpdated({}));
            const texts = {
              item: {
                description: 'This is a description',
                title: 'This is a title'
              },
              actions: {
                link: 'Navegar'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h3", null, "Activity"), React.createElement(_moduleCard.ActivityCard, {
              type: type,
              className: className,
              item: item,
              texts: texts,
              audience: false,
              entity: "assignment"
            }));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./views/components/cards/types/assignments
      **********************************************************/

      ims.set('./views/components/cards/types/assignments', {
        hash: 680018754,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentCardExample = AssignmentCardExample;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _DATA = require("../DATA");
          function AssignmentCardExample({
            className
          }) {
            const {
              assignment: item
            } = _DATA.CARDS_DATA;
            const [hmrUpdated, setHmrUpdated] = React.useState({});
            // listen module-card changes and re-render the component
            (0, _hooks.useBinder)([_moduleCard.hmr], () => setHmrUpdated({}));
            const texts = {
              item: {
                description: 'This is a description',
                title: 'This is a title'
              },
              actions: {
                link: 'Navegar'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h3", null, "Assignment mobile"), React.createElement(_moduleCard.AssignmentCard, {
              className: className,
              item: item.module,
              texts: texts,
              audience: false,
              entity: "assignment"
            }));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/components/cards/types/community
      ********************************************************/

      ims.set('./views/components/cards/types/community', {
        hash: 4161253365,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityCard = CommunityCard;
          var React = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _DATA = require("../DATA");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function CommunityCard() {
            const {
              community: item
            } = _DATA.CARDS_DATA;
            const [hmrUpdated, setHmrUpdated] = React.useState({});
            // listen module-card changes and re-render the component
            (0, _hooks.useBinder)([_moduleCard.hmr], () => setHmrUpdated({}));
            const texts = {
              item: {
                description: 'This is a description',
                title: 'This is a title'
              },
              actions: {
                use: 'Usar',
                test: 'Probar'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h3", null, "Community"), React.createElement(_moduleCard.ModuleCard, {
              href: item.playground.assignment,
              className: "community-card",
              item: item,
              texts: texts,
              entity: "assignment"
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, React.createElement(_moduleCard.ModuleCardActionsFooter, null, item?.playground?.assignment && React.createElement(_icons.AppIconButton, {
              icon: "watch",
              title: texts.actions.test,
              href: item.playground.assignment
            }), React.createElement(_icons.AppIconButton, {
              icon: "clone",
              title: texts.actions.use
            })))));
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/components/cards/types/draft
      ****************************************************/

      ims.set('./views/components/cards/types/draft', {
        hash: 623486671,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftCard = DraftCard;
          var React = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _DATA = require("../DATA");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function DraftCard() {
            const {
              assignment: item
            } = _DATA.CARDS_DATA;
            const [hmrUpdated, setHmrUpdated] = React.useState({});
            // listen module-card changes and re-render the component
            (0, _hooks.useBinder)([_moduleCard.hmr], () => setHmrUpdated({}));
            const texts = {
              item: {
                description: 'This is a description',
                title: 'This is a title'
              },
              actions: {
                link: 'Navegar'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h3", null, "Draft"), React.createElement(_moduleCard.ModuleCard, {
              className: "draft--card",
              item: item.module,
              texts: texts,
              audience: false,
              entity: "module"
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item.module
            }, React.createElement(_moduleCard.ModuleCardActionsFooter, null, React.createElement(_icons.AppIconButton, {
              icon: "watch",
              title: texts.actions.link,
              href: `/assignments/${item.id}`
            })))));
          }
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./views/components/cards/types/home-assignments
      ***************************************************************/

      ims.set('./views/components/cards/types/home-assignments', {
        hash: 4179904408,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentHomeCardExample = AssignmentHomeCardExample;
          var React = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _DATA = require("../DATA");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function AssignmentHomeCardExample() {
            const {
              assignment: item
            } = _DATA.CARDS_DATA;
            const [hmrUpdated, setHmrUpdated] = React.useState({});
            // listen module-card changes and re-render the component
            (0, _hooks.useBinder)([_moduleCard.hmr], () => setHmrUpdated({}));
            const texts = {
              item: {
                description: 'This is a description',
                title: 'This is a title'
              },
              actions: {
                link: 'Navegar'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h3", null, "Home Assignments"), React.createElement(_moduleCard.AssignmentCard, {
              classroom: true,
              item: item.module,
              texts: texts,
              audience: false,
              entity: "assignment"
            }));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/components/cards/types/module
      *****************************************************/

      ims.set('./views/components/cards/types/module', {
        hash: 3747642367,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleCardExample = ModuleCardExample;
          var React = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _DATA = require("../DATA");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function ModuleCardExample() {
            const {
              assignment: item
            } = _DATA.CARDS_DATA;
            const [hmrUpdated, setHmrUpdated] = React.useState({});
            // listen module-card changes and re-render the component
            (0, _hooks.useBinder)([_moduleCard.hmr], () => setHmrUpdated({}));
            const texts = {
              item: {
                description: 'This is a description',
                title: 'This is a title'
              },
              actions: {
                link: 'Navegar'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h3", null, "Module"), React.createElement(_moduleCard.ModuleCard, {
              item: item.module,
              texts: texts,
              audience: false,
              entity: "assignment"
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item.module
            }, React.createElement(_moduleCard.ModuleCardActionsFooter, null, React.createElement(_icons.AppIconButton, {
              icon: "watch",
              title: texts.actions.link,
              href: `/assignments/${item.id}`
            })))));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/components/classrooms/DATA
      **************************************************/

      ims.set('./views/components/classrooms/DATA', {
        hash: 2177842802,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DATA = void 0;
          const DATA = exports.DATA = {
            classroom: {
              owner: {
                photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTtdZVHKyHNQutbdqxduIlPEx90m9ufbN-kimmJ7-=s96-c',
                name: 'Julio Rodriguez',
                id: 'tHXKJj7aQsVW9oSvCKRg24dKfds1'
              },
              timeUpdated: 1726753948073,
              description: 'caracas',
              timeCreated: 1726753948073,
              id: '14fe458c-0ef2-41c1-a50d-921442584a06',
              name: 'caracas 2111',
              code: '555112'
            }
          };
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/components/classrooms/index
      ***************************************************/

      ims.set('./views/components/classrooms/index', {
        hash: 3147160896,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomCardsTemplate = ClassroomCardsTemplate;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _toast = require("pragmate-ui/toast");
          var React = require("react");
          var _DATA = require("./DATA");
          function ClassroomCardsTemplate({
            texts
          }) {
            const {
              classroom
            } = _DATA.DATA;
            const copy = event => {
              event.stopPropagation();
              const content = event.currentTarget.dataset.copy;
              navigator.clipboard.writeText(content);
              _toast.toast.success(texts.messages.copied);
            };
            texts = {
              ...texts,
              messages: {
                copied: 'Copiado al portapapeles'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h1", null, "Classrooms"), React.createElement("div", {
              className: "tree-columns"
            }, React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts
            }), React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts,
              className: "bg-debate"
            }), React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts,
              className: "bg-content-theory"
            }), React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts,
              className: "bg-conversation"
            }), React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts,
              className: "bg-spoken"
            }), React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts,
              className: "bg-character-talk"
            }), React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts,
              className: "bg-multiple-choice"
            })));
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/components/trash/backgrounds
      ****************************************************/

      ims.set('./views/components/trash/backgrounds', {
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

      /************************************************
      INTERNAL MODULE: ./views/components/trash/banners
      ************************************************/

      ims.set('./views/components/trash/banners', {
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

      /*****************************************************
      INTERNAL MODULE: ./views/components/trash/buttons copy
      *****************************************************/

      ims.set('./views/components/trash/buttons copy', {
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

      /************************************************
      INTERNAL MODULE: ./views/components/trash/buttons
      ************************************************/

      ims.set('./views/components/trash/buttons', {
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

      /**********************************************
      INTERNAL MODULE: ./views/components/trash/empty
      **********************************************/

      ims.set('./views/components/trash/empty', {
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

      /**********************************************
      INTERNAL MODULE: ./views/components/trash/forms
      **********************************************/

      ims.set('./views/components/trash/forms', {
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

      /**********************************************
      INTERNAL MODULE: ./views/components/trash/icons
      **********************************************/

      ims.set('./views/components/trash/icons', {
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

      /******************************************************
      INTERNAL MODULE: ./views/components/trash/illustrations
      ******************************************************/

      ims.set('./views/components/trash/illustrations', {
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

      /**********************************************
      INTERNAL MODULE: ./views/components/trash/lists
      **********************************************/

      ims.set('./views/components/trash/lists', {
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

      /***************************************************
      INTERNAL MODULE: ./views/components/trash/typography
      ***************************************************/

      ims.set('./views/components/trash/typography', {
        hash: 1604906955,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Typography = Typography;
          var _react = require("react");
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
            }, _react.default.createElement("p", {
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
        hash: 1612552491,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _alerts = require("./components/cards/alerts");
          var _list = require("pragmate-ui/list");
          var _cards = require("./components/cards");
          var _classrooms = require("./components/classrooms");
          /*bundle*/
          function View() {
            const [view, setView] = _react.default.useState('classrooms');
            const components = {
              alerts: _alerts.Alerts,
              cards: _cards.CardsTemplate,
              // classrooms: CardsTemplate,
              classrooms: _classrooms.ClassroomCardsTemplate
            };
            const Item = ({
              item
            }) => {
              const onClick = event => {
                setView(item);
              };
              return _react.default.createElement("li", {
                onClick: onClick
              }, item);
            };
            const Main = components[view];
            return _react.default.createElement(_ui.PageContainer, {
              className: "components-ui-page"
            }, _react.default.createElement("aside", null, _react.default.createElement(_list.List, {
              items: Object.keys(components),
              control: Item
            })), _react.default.createElement("main", null, _react.default.createElement(Main, null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiQ0FSRFNfREFUQSIsImFzc2lnbm1lbnQiLCJtb2R1bGUiLCJjbGFzc3Jvb20iLCJuYW1lIiwiaWQiLCJwaWN0dXJlIiwib3duZXIiLCJwaG90b1VybCIsImFjdGl2aXRpZXMiLCJjb3VudCIsInR5cGVzIiwiYXVkaWVuY2UiLCJjYXRldG9yeSIsImxldmVsIiwibGFuZ3VhZ2UiLCJ0aW1lVXBkYXRlZCIsInRpbWVDcmVhdGVkIiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsImNvbW11bml0eSIsImNyZWF0b3IiLCJvYmplY3RpdmUiLCJkdXJhdGlvbiIsInBsYXlncm91bmQiLCJhY3Rpdml0eSIsInR5cGUiLCJwdWJsaWMiLCJzdGF0dXMiLCJhaSIsInJlc291cmNlcyIsIm1hdGVyaWFscyIsInNwZWNzIiwiYXNzZXNzbWVudCIsImNyaXRlcmlhIiwic3ViamVjdCIsInRhc2siLCJvYmplY3RpdmVzIiwiaW5zdHJ1Y3Rpb25zIiwiX2FsZXJ0IiwiX3JlYWN0IiwiQWxlcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkFsZXJ0IiwibWVzc2FnZSIsIlJlYWN0IiwiX2Fzc2lnbm1lbnRzIiwiX2NvbW11bml0eSIsIl9kcmFmdCIsIl9tb2R1bGUiLCJfaG9tZUFzc2lnbm1lbnRzIiwiX2FjdGl2aXR5IiwiQ2FyZHNUZW1wbGF0ZSIsIkFjdGl2aXR5Q2FyZEV4YW1wbGUiLCJNb2R1bGVDYXJkRXhhbXBsZSIsIkNvbW11bml0eUNhcmQiLCJEcmFmdENhcmQiLCJBc3NpZ25tZW50Q2FyZEV4YW1wbGUiLCJBc3NpZ25tZW50SG9tZUNhcmRFeGFtcGxlIiwiX21vZHVsZUNhcmQiLCJfaG9va3MiLCJfREFUQSIsIml0ZW0iLCJobXJVcGRhdGVkIiwic2V0SG1yVXBkYXRlZCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiaG1yIiwidGV4dHMiLCJhY3Rpb25zIiwibGluayIsIkFjdGl2aXR5Q2FyZCIsImVudGl0eSIsIkFzc2lnbm1lbnRDYXJkIiwiX2ljb25zIiwidXNlIiwidGVzdCIsIk1vZHVsZUNhcmQiLCJocmVmIiwiTW9kdWxlQ2FyZEZvb3RlciIsIk1vZHVsZUNhcmRBY3Rpb25zRm9vdGVyIiwiQXBwSWNvbkJ1dHRvbiIsImljb24iLCJEQVRBIiwiY29kZSIsIl90b2FzdCIsIkNsYXNzcm9vbUNhcmRzVGVtcGxhdGUiLCJjb3B5IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjb250ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImNvcGllZCIsIkNsYXNzcm9vbUNhcmQiLCJCYWNrZ3JvdW5kcyIsImJhY2tncm91bmRzIiwibWFwIiwia2V5IiwiX3VpIiwiQmFubmVycyIsImhlYWRlckxpc3QiLCJ1cmwiLCJIZWFkZXJDYXJkIiwiYWx0IiwiaW1hZ2UiLCJvcHRpb24iLCJvcHRpb25hbCIsImxpc3QiLCJfY29tcG9uZW50cyIsIkJ1dHRvbnMiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsIkJ1dHRvbkdyb3VwIiwiRW1wdHkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiX2Zvcm0iLCJGb3JtcyIsImRlZmF1bHRWYWx1ZXMiLCJkZWZhdWx0TmFtZSIsImV4YW1wbGVQYXNzd29yZCIsImV4YW1wbGVFbWFpbCIsImhvdmVyVGV4dCIsImRlZmF1bHRUZXh0IiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiY3VycmVudFZhbHVlIiwidmFsdWUiLCJJbnB1dCIsImxhYmVsIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiSWNvbnMiLCJJY29uIiwiX2ltYWdlIiwiSWxsdXN0cmF0aW9ucyIsIkltYWdlIiwic3JjIiwiX2xpc3QiLCJleGFtcGxlSXRlbXMiLCJMaXN0cyIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJJdGVtIiwiZGF0YSIsIlR5cG9ncmFwaHkiLCJfYWxlcnRzIiwiX2NhcmRzIiwiX2NsYXNzcm9vbXMiLCJ2aWV3Iiwic2V0VmlldyIsImNvbXBvbmVudHMiLCJhbGVydHMiLCJjYXJkcyIsImNsYXNzcm9vbXMiLCJvbkNsaWNrIiwiTWFpbiIsIlBhZ2VDb250YWluZXIiLCJPYmplY3QiLCJrZXlzIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9jYXJkcy9EQVRBLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvY2FyZHMvYWxlcnRzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL3R5cGVzL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL3R5cGVzL2Fzc2lnbm1lbnRzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL3R5cGVzL2NvbW11bml0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9jYXJkcy90eXBlcy9kcmFmdC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9jYXJkcy90eXBlcy9ob21lLWFzc2lnbm1lbnRzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL3R5cGVzL21vZHVsZS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9jbGFzc3Jvb21zL0RBVEEudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9jbGFzc3Jvb21zL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3RyYXNoL2JhY2tncm91bmRzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3RyYXNoL2Jhbm5lcnMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHJhc2gvYnV0dG9ucyBjb3B5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3RyYXNoL2J1dHRvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHJhc2gvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHJhc2gvZm9ybXMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHJhc2gvaWNvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHJhc2gvaWxsdXN0cmF0aW9ucy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy90cmFzaC9saXN0cy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy90cmFzaC90eXBvZ3JhcGh5LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElB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