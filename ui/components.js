System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/reactive@0.0.1/model", "pragmate-ui@1.0.0-beta.7/alert", "react@18.2.0", "@aimpact/ailearn-app@0.3.1/components/module-card", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/ailearn-app@0.3.1/components/hooks", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/image", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp031ComponentsHooks) {
      dependency_10 = _aimpactAilearnApp031ComponentsHooks;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_11 = _pragmateUi100Beta7Toast;
    }, function (_pragmateUi100Beta7List) {
      dependency_12 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_13 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7Components) {
      dependency_14 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Form) {
      dependency_15 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_16 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Image) {
      dependency_17 = _pragmateUi100Beta7Image;
    }, function (_beyondJsKernel019Routing) {
      dependency_18 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/reactive/model', dependency_4], ['pragmate-ui/alert', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/module-card', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['@aimpact/ailearn-app/components/hooks', dependency_10], ['pragmate-ui/toast', dependency_11], ['pragmate-ui/list', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/components', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/icons', dependency_16], ['pragmate-ui/image', dependency_17], ['@beyond-js/kernel/routing', dependency_18]]);
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
        hash: 4202921180,
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
              globalThis.c = this;
              this.#store = new _store.StoreManager(this.uri.qs.get('view'));
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.view = this.uri.qs.get('view');
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
        hash: 3534261693,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@aimpact/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            isStore;
            constructor(view) {
              super({
                properties: ['view']
              });
              this.view = view || 'classrooms';
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
        hash: 930076546,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftCard = DraftCard;
          var React = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _DATA = require("../DATA");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          function DraftCard() {
            const {
              assignment: item
            } = _DATA.CARDS_DATA;
            // listen module-card changes and re-render the component
            (0, _hooks.useHmr)([_moduleCard.hmr]);
            const texts = {
              item: {
                description: 'This is a description',
                title: 'This is a title',
                draftTitle: 'Draft Module'
              },
              actions: {
                link: 'Navegar'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h3", null, "Draft"), React.createElement(_moduleCard.DraftCard, {
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
        hash: 2822540395,
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
              classroom: item.module.classroom,
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
        hash: 2228966926,
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
              },
              actions: {
                delete: 'Delete',
                copy: 'Copy'
              },
              classrooms: {
                code: 'Code'
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

      /**********************************************
      INTERNAL MODULE: ./views/components/icons/icons
      **********************************************/

      ims.set('./views/components/icons/icons', {
        hash: 3414743747,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IconsTemplate = IconsTemplate;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function IconsTemplate() {
            const IconItem = ({
              item
            }) => _react.default.createElement(_icons.AppIcon, {
              name: item,
              title: item
            });
            const IconButtonItem = ({
              item,
              ...props
            }) => _react.default.createElement(_icons.AppIconButton, {
              name: item,
              title: item,
              ...props
            });
            const BgIconItem = ({
              item
            }) => _react.default.createElement(_icons.BgIcon, {
              name: item,
              title: item
            });
            return _react.default.createElement("div", {
              className: "icons-page"
            }, _react.default.createElement("h1", null, "Icons"), _react.default.createElement("h3", null, "All icons"), _react.default.createElement(_list.List, {
              className: "icons-list",
              items: Object.keys(_icons.ICONS),
              control: IconItem
            }), _react.default.createElement("h2", null, "Background icons"), _react.default.createElement(_list.List, {
              className: "icons-list",
              items: ['content-theory', 'debate', 'spoken', 'character-talk', 'multiple-choice'],
              control: BgIconItem
            }), _react.default.createElement("h2", null, "Icon Buttons"), _react.default.createElement("h3", null, "Default"), _react.default.createElement(_list.List, {
              className: "icons-list",
              items: Object.keys(_icons.ICONS),
              control: IconButtonItem
            }), _react.default.createElement("h3", null, "Primary"), _react.default.createElement(_list.List, {
              className: "icons-list",
              specs: {
                variant: 'primary'
              },
              items: Object.keys(_icons.ICONS),
              control: IconButtonItem
            }));
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
        hash: 1873735292,
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
          var _icons = require("./components/icons/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const [view, setView] = _react.default.useState(store.view ? store.view : 'classrooms');
            (0, _hooks.useBinder)([store.view], () => setView(store.view));
            const components = {
              alerts: _alerts.Alerts,
              cards: _cards.CardsTemplate,
              // classrooms: CardsTemplate,
              classrooms: _classrooms.ClassroomCardsTemplate,
              icons: _icons.IconsTemplate
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
            console.log(0.1, view, components[view]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJnbG9iYWxUaGlzIiwiYyIsIlN0b3JlTWFuYWdlciIsInVyaSIsInFzIiwiZ2V0IiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJ2aWV3IiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiaXNTdG9yZSIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsIkNBUkRTX0RBVEEiLCJhc3NpZ25tZW50IiwibW9kdWxlIiwiY2xhc3Nyb29tIiwibmFtZSIsImlkIiwicGljdHVyZSIsIm93bmVyIiwicGhvdG9VcmwiLCJhY3Rpdml0aWVzIiwiY291bnQiLCJ0eXBlcyIsImF1ZGllbmNlIiwiY2F0ZXRvcnkiLCJsZXZlbCIsImxhbmd1YWdlIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJjb21tdW5pdHkiLCJjcmVhdG9yIiwib2JqZWN0aXZlIiwiZHVyYXRpb24iLCJwbGF5Z3JvdW5kIiwiYWN0aXZpdHkiLCJ0eXBlIiwicHVibGljIiwic3RhdHVzIiwiYWkiLCJyZXNvdXJjZXMiLCJtYXRlcmlhbHMiLCJzcGVjcyIsImFzc2Vzc21lbnQiLCJjcml0ZXJpYSIsInN1YmplY3QiLCJ0YXNrIiwib2JqZWN0aXZlcyIsImluc3RydWN0aW9ucyIsIl9hbGVydCIsIl9yZWFjdCIsIkFsZXJ0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJBbGVydCIsIm1lc3NhZ2UiLCJSZWFjdCIsIl9hc3NpZ25tZW50cyIsIl9jb21tdW5pdHkiLCJfZHJhZnQiLCJfbW9kdWxlIiwiX2hvbWVBc3NpZ25tZW50cyIsIl9hY3Rpdml0eSIsIkNhcmRzVGVtcGxhdGUiLCJBY3Rpdml0eUNhcmRFeGFtcGxlIiwiTW9kdWxlQ2FyZEV4YW1wbGUiLCJDb21tdW5pdHlDYXJkIiwiRHJhZnRDYXJkIiwiQXNzaWdubWVudENhcmRFeGFtcGxlIiwiQXNzaWdubWVudEhvbWVDYXJkRXhhbXBsZSIsIl9tb2R1bGVDYXJkIiwiX2hvb2tzIiwiX0RBVEEiLCJpdGVtIiwiaG1yVXBkYXRlZCIsInNldEhtclVwZGF0ZWQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsImhtciIsInRleHRzIiwiYWN0aW9ucyIsImxpbmsiLCJkZWJhdGUiLCJzcG9rZW4iLCJBY3Rpdml0eUNhcmQiLCJlbnRpdHkiLCJBc3NpZ25tZW50Q2FyZCIsIl9pY29ucyIsInVzZSIsInRlc3QiLCJNb2R1bGVDYXJkIiwiaHJlZiIsIk1vZHVsZUNhcmRGb290ZXIiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkFwcEljb25CdXR0b24iLCJpY29uIiwidXNlSG1yIiwiZHJhZnRUaXRsZSIsIkRBVEEiLCJjb2RlIiwiX3RvYXN0IiwiQ2xhc3Nyb29tQ2FyZHNUZW1wbGF0ZSIsImNvcHkiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnRlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiY29waWVkIiwiZGVsZXRlIiwiY2xhc3Nyb29tcyIsIkNsYXNzcm9vbUNhcmQiLCJfbGlzdCIsIkljb25zVGVtcGxhdGUiLCJJY29uSXRlbSIsIkFwcEljb24iLCJJY29uQnV0dG9uSXRlbSIsInByb3BzIiwiQmdJY29uSXRlbSIsIkJnSWNvbiIsIkxpc3QiLCJpdGVtcyIsIk9iamVjdCIsImtleXMiLCJJQ09OUyIsImNvbnRyb2wiLCJ2YXJpYW50IiwiQmFja2dyb3VuZHMiLCJiYWNrZ3JvdW5kcyIsIm1hcCIsImtleSIsIl91aSIsIkJhbm5lcnMiLCJoZWFkZXJMaXN0IiwidXJsIiwiSGVhZGVyQ2FyZCIsImFsdCIsImltYWdlIiwib3B0aW9uIiwib3B0aW9uYWwiLCJsaXN0IiwiX2NvbXBvbmVudHMiLCJCdXR0b25zIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsIkJ1dHRvbkdyb3VwIiwiRW1wdHkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiX2Zvcm0iLCJGb3JtcyIsImRlZmF1bHRWYWx1ZXMiLCJkZWZhdWx0TmFtZSIsImV4YW1wbGVQYXNzd29yZCIsImV4YW1wbGVFbWFpbCIsImhvdmVyVGV4dCIsImRlZmF1bHRUZXh0IiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiY3VycmVudFZhbHVlIiwidmFsdWUiLCJJbnB1dCIsImxhYmVsIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiSWNvbnMiLCJJY29uIiwiX2ltYWdlIiwiSWxsdXN0cmF0aW9ucyIsIkltYWdlIiwic3JjIiwiZXhhbXBsZUl0ZW1zIiwiTGlzdHMiLCJJdGVtIiwiZGF0YSIsIlR5cG9ncmFwaHkiLCJfYWxlcnRzIiwiX2NhcmRzIiwiX2NsYXNzcm9vbXMiLCJfcm91dGluZyIsInNldFZpZXciLCJjb21wb25lbnRzIiwiYWxlcnRzIiwiY2FyZHMiLCJpY29ucyIsIm9uQ2xpY2siLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY2xzIiwiY29uc29sZSIsImxvZyIsIk1haW4iLCJQYWdlQ29udGFpbmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9jYXJkcy9EQVRBLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvY2FyZHMvYWxlcnRzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL3R5cGVzL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL3R5cGVzL2Fzc2lnbm1lbnRzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL3R5cGVzL2NvbW11bml0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9jYXJkcy90eXBlcy9kcmFmdC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9jYXJkcy90eXBlcy9ob21lLWFzc2lnbm1lbnRzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL3R5cGVzL21vZHVsZS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9jbGFzc3Jvb21zL0RBVEEudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9jbGFzc3Jvb21zL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2ljb25zL2ljb25zLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3RyYXNoL2JhY2tncm91bmRzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3RyYXNoL2Jhbm5lcnMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHJhc2gvYnV0dG9ucyBjb3B5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3RyYXNoL2J1dHRvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHJhc2gvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHJhc2gvZm9ybXMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHJhc2gvaWNvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHJhc2gvaWxsdXN0cmF0aW9ucy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy90cmFzaC9saXN0cy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy90cmFzaC90eXBvZ3JhcGh5LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3Mi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