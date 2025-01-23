System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/reactive@0.0.1/model", "pragmate-ui@1.0.0-beta.7/alert", "react@18.2.0", "@aimpact/ailearn-app@0.3.1/components/module-card", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/list", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactReactive001Model) {
      dependency_4 = _aimpactReactive001Model;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_5 = _pragmateUi100Beta7Alert;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactAilearnApp031ComponentsModuleCard) {
      dependency_7 = _aimpactAilearnApp031ComponentsModuleCard;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_8 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_9 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_10 = _pragmateUi100Beta7Toast;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_11 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Form) {
      dependency_13 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_14 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Image) {
      dependency_15 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7List) {
      dependency_16 = _pragmateUi100Beta7List;
    }, function (_beyondJsKernel019Routing) {
      dependency_17 = _beyondJsKernel019Routing;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/reactive/model', dependency_4], ['pragmate-ui/alert', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/module-card', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['pragmate-ui/toast', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/image', dependency_15], ['pragmate-ui/list', dependency_16], ['@beyond-js/kernel/routing', dependency_17]]);
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
        hash: 4099742761,
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
            show() {
              this.#store.view = this.uri.qs.vars('view');
            }
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
        hash: 450507310,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@aimpact/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            isStore;
            constructor() {
              super({
                properties: ['view']
              });
            }
          }
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
        hash: 4179321000,
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
              },
              types: {
                'content-theory': 'Contenido/Teoría',
                'multiple-choice': 'Selección Múltiple',
                'character-talk': 'Conversación con un Personaje',
                debate: 'Debate',
                assessment: 'Selección Múltiple',
                spoken: 'Exposición Oral'
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
        hash: 1421718371,
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
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function View({
            store
          }) {
            const [view, setView] = _react.default.useState(store.view ? store.view : 'classrooms');
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
                _routing.routing.pushState(`/ui/components?view=${item}`);
                setView(item);
              };
              const cls = `components-ui-page__item ${view === item ? 'active' : ''}`;
              return _react.default.createElement("li", {
                onClick: onClick,
                className: cls
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInZpZXciLCJ1cmkiLCJxcyIsInZhcnMiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiQ0FSRFNfREFUQSIsImFzc2lnbm1lbnQiLCJtb2R1bGUiLCJjbGFzc3Jvb20iLCJuYW1lIiwiaWQiLCJwaWN0dXJlIiwib3duZXIiLCJwaG90b1VybCIsImFjdGl2aXRpZXMiLCJjb3VudCIsInR5cGVzIiwiYXVkaWVuY2UiLCJjYXRldG9yeSIsImxldmVsIiwibGFuZ3VhZ2UiLCJ0aW1lVXBkYXRlZCIsInRpbWVDcmVhdGVkIiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsImNvbW11bml0eSIsImNyZWF0b3IiLCJvYmplY3RpdmUiLCJkdXJhdGlvbiIsInBsYXlncm91bmQiLCJhY3Rpdml0eSIsInR5cGUiLCJwdWJsaWMiLCJzdGF0dXMiLCJhaSIsInJlc291cmNlcyIsIm1hdGVyaWFscyIsInNwZWNzIiwiYXNzZXNzbWVudCIsImNyaXRlcmlhIiwic3ViamVjdCIsInRhc2siLCJvYmplY3RpdmVzIiwiaW5zdHJ1Y3Rpb25zIiwiX2FsZXJ0IiwiX3JlYWN0IiwiQWxlcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkFsZXJ0IiwibWVzc2FnZSIsIlJlYWN0IiwiX2Fzc2lnbm1lbnRzIiwiX2NvbW11bml0eSIsIl9kcmFmdCIsIl9tb2R1bGUiLCJfaG9tZUFzc2lnbm1lbnRzIiwiX2FjdGl2aXR5IiwiQ2FyZHNUZW1wbGF0ZSIsIkFjdGl2aXR5Q2FyZEV4YW1wbGUiLCJNb2R1bGVDYXJkRXhhbXBsZSIsIkNvbW11bml0eUNhcmQiLCJEcmFmdENhcmQiLCJBc3NpZ25tZW50Q2FyZEV4YW1wbGUiLCJBc3NpZ25tZW50SG9tZUNhcmRFeGFtcGxlIiwiX21vZHVsZUNhcmQiLCJfaG9va3MiLCJfREFUQSIsIml0ZW0iLCJobXJVcGRhdGVkIiwic2V0SG1yVXBkYXRlZCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiaG1yIiwidGV4dHMiLCJhY3Rpb25zIiwibGluayIsImRlYmF0ZSIsInNwb2tlbiIsIkFjdGl2aXR5Q2FyZCIsImVudGl0eSIsIkFzc2lnbm1lbnRDYXJkIiwiX2ljb25zIiwidXNlIiwidGVzdCIsIk1vZHVsZUNhcmQiLCJocmVmIiwiTW9kdWxlQ2FyZEZvb3RlciIsIk1vZHVsZUNhcmRBY3Rpb25zRm9vdGVyIiwiQXBwSWNvbkJ1dHRvbiIsImljb24iLCJEQVRBIiwiY29kZSIsIl90b2FzdCIsIkNsYXNzcm9vbUNhcmRzVGVtcGxhdGUiLCJjb3B5IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjb250ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImNvcGllZCIsIkNsYXNzcm9vbUNhcmQiLCJCYWNrZ3JvdW5kcyIsImJhY2tncm91bmRzIiwibWFwIiwia2V5IiwiX3VpIiwiQmFubmVycyIsImhlYWRlckxpc3QiLCJ1cmwiLCJIZWFkZXJDYXJkIiwiYWx0IiwiaW1hZ2UiLCJvcHRpb24iLCJvcHRpb25hbCIsImxpc3QiLCJfY29tcG9uZW50cyIsIkJ1dHRvbnMiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsIkJ1dHRvbkdyb3VwIiwiRW1wdHkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiX2Zvcm0iLCJGb3JtcyIsImRlZmF1bHRWYWx1ZXMiLCJkZWZhdWx0TmFtZSIsImV4YW1wbGVQYXNzd29yZCIsImV4YW1wbGVFbWFpbCIsImhvdmVyVGV4dCIsImRlZmF1bHRUZXh0IiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiY3VycmVudFZhbHVlIiwidmFsdWUiLCJJbnB1dCIsImxhYmVsIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiSWNvbnMiLCJJY29uIiwiX2ltYWdlIiwiSWxsdXN0cmF0aW9ucyIsIkltYWdlIiwic3JjIiwiX2xpc3QiLCJleGFtcGxlSXRlbXMiLCJMaXN0cyIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJJdGVtIiwiZGF0YSIsIlR5cG9ncmFwaHkiLCJfYWxlcnRzIiwiX2NhcmRzIiwiX2NsYXNzcm9vbXMiLCJfcm91dGluZyIsInNldFZpZXciLCJjb21wb25lbnRzIiwiYWxlcnRzIiwiY2FyZHMiLCJjbGFzc3Jvb21zIiwib25DbGljayIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJjbHMiLCJNYWluIiwiUGFnZUNvbnRhaW5lciIsIk9iamVjdCIsImtleXMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL0RBVEEudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9jYXJkcy9hbGVydHMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvY2FyZHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvY2FyZHMvdHlwZXMvYWN0aXZpdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvY2FyZHMvdHlwZXMvYXNzaWdubWVudHMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvY2FyZHMvdHlwZXMvY29tbXVuaXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL3R5cGVzL2RyYWZ0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL3R5cGVzL2hvbWUtYXNzaWdubWVudHMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvY2FyZHMvdHlwZXMvbW9kdWxlLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NsYXNzcm9vbXMvREFUQS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2NsYXNzcm9vbXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHJhc2gvYmFja2dyb3VuZHMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHJhc2gvYmFubmVycy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy90cmFzaC9idXR0b25zIGNvcHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHJhc2gvYnV0dG9ucy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy90cmFzaC9lbXB0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy90cmFzaC9mb3Jtcy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy90cmFzaC9pY29ucy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy90cmFzaC9pbGx1c3RyYXRpb25zLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3RyYXNoL2xpc3RzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3RyYXNoL3R5cG9ncmFwaHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJB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O2NBQU1FLFNBQVMsRUFBQztZQUFVLGFBQWUsRUFDekNMLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNvQyxNQUFBLENBQUF1RSxJQUFJO2NBQUN6RyxTQUFTLEVBQUMsSUFBSTtjQUFDMEMsSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUNuQy9DLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNvQyxNQUFBLENBQUF1RSxJQUFJO2NBQUN6RyxTQUFTLEVBQUMsSUFBSTtjQUFDMEMsSUFBSSxFQUFDO1lBQVMsRUFBRyxFQUN0Qy9DLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNvQyxNQUFBLENBQUF1RSxJQUFJO2NBQUN6RyxTQUFTLEVBQUMsSUFBSTtjQUFDMEMsSUFBSSxFQUFDO1lBQVMsRUFBRyxFQUN0Qy9DLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNvQyxNQUFBLENBQUF1RSxJQUFJO2NBQUN6RyxTQUFTLEVBQUMsSUFBSTtjQUFDMEMsSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUNuQy9DLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNvQyxNQUFBLENBQUF1RSxJQUFJO2NBQUN6RyxTQUFTLEVBQUMsSUFBSTtjQUFDMEMsSUFBSSxFQUFDO1lBQVcsRUFBRyxFQUN4Qy9DLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNvQyxNQUFBLENBQUF1RSxJQUFJO2NBQUN6RyxTQUFTLEVBQUMsSUFBSTtjQUFDMEMsSUFBSSxFQUFDO1lBQUssRUFBRyxFQUNsQy9DLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNvQyxNQUFBLENBQUF1RSxJQUFJO2NBQUN6RyxTQUFTLEVBQUMsSUFBSTtjQUFDMEMsSUFBSSxFQUFDO1lBQVEsRUFBRyxFQUNyQy9DLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNvQyxNQUFBLENBQUF1RSxJQUFJO2NBQUN6RyxTQUFTLEVBQUMsSUFBSTtjQUFDMEMsSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUNuQy9DLE1B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