System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "@aimpact/ailearn-app@0.1.13/components/ui", "@aimpact/ailearn-app@0.1.13/components/navbar-header.code", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/config", "pragmate-ui@1.0.0-beta.6/empty", "@aimpact/ailearn-app@0.1.13/shared/charts", "pragmate-ui@1.0.0-beta.6/drawer", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/perfect-scrollbar", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/ailearn-app@0.1.13/components/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/chips", "pragmate-ui@1.0.0-beta.6/image", "@aimpact/ailearn-app@0.1.13/utils", "pragmate-ui@1.0.0-beta.6/tooltip", "pragmate-ui@1.0.0-beta.6/collapsible", "pragmate-ui@1.0.0-beta.6/alert", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/dropdown"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, dependency_32, dependency_33, dependency_34, bimport, __Bundle, __pkg, ims, Controller, View, ActivityAlerts, DetailActivityBody, DetailActivity, MultipleChoiceReport, AssessmentQuestions, ActivityView, ActivityParticipant, GeneralView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    ActivityAlerts: void 0,
    DetailActivityBody: void 0,
    DetailActivity: void 0,
    MultipleChoiceReport: void 0,
    AssessmentQuestions: void 0,
    ActivityView: void 0,
    ActivityParticipant: void 0,
    GeneralView: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_2 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp0113DashboardLayoutWidget) {
      dependency_3 = _aimpactAilearnApp0113DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk100ReactiveEntitiesItem) {
      dependency_4 = _aimpactAilearnSdk100ReactiveEntitiesItem;
    }, function (_aimpactAilearnSdk100ReactiveModel) {
      dependency_5 = _aimpactAilearnSdk100ReactiveModel;
    }, function (_aimpactHttpSuite001Api) {
      dependency_6 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_7 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk130Session) {
      dependency_8 = _aimpactChatSdk130Session;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_9 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Texts) {
      dependency_10 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_11 = _aimpactAilearnSdk100Tracking;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_13 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_aimpactAilearnApp0113ComponentsNavbarHeaderCode) {
      dependency_14 = _aimpactAilearnApp0113ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_15 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp0113Config) {
      dependency_16 = _aimpactAilearnApp0113Config;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_17 = _pragmateUi100Beta6Empty;
    }, function (_aimpactAilearnApp0113SharedCharts) {
      dependency_18 = _aimpactAilearnApp0113SharedCharts;
    }, function (_pragmateUi100Beta6Drawer) {
      dependency_19 = _pragmateUi100Beta6Drawer;
    }, function (_pragmateUi100Beta6Components) {
      dependency_20 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6PerfectScrollbar) {
      dependency_21 = _pragmateUi100Beta6PerfectScrollbar;
    }, function (_pragmateUi100Beta6List) {
      dependency_22 = _pragmateUi100Beta6List;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_23 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_24 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Form) {
      dependency_25 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Chips) {
      dependency_26 = _pragmateUi100Beta6Chips;
    }, function (_pragmateUi100Beta6Image) {
      dependency_27 = _pragmateUi100Beta6Image;
    }, function (_aimpactAilearnApp0113Utils) {
      dependency_28 = _aimpactAilearnApp0113Utils;
    }, function (_pragmateUi100Beta6Tooltip) {
      dependency_29 = _pragmateUi100Beta6Tooltip;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_30 = _pragmateUi100Beta6Collapsible;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_31 = _pragmateUi100Beta6Alert;
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_32 = _aimpactChatSdk130ChatComponentCode;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_33 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6Dropdown) {
      dependency_34 = _pragmateUi100Beta6Dropdown;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_3], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_4], ['@aimpact/ailearn-sdk/reactive/model', dependency_5], ['@aimpact/http-suite/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-sdk/core', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@aimpact/ailearn-sdk/tracking', dependency_11], ['react', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_14], ['pragmate-ui/icons', dependency_15], ['@aimpact/ailearn-app/config', dependency_16], ['pragmate-ui/empty', dependency_17], ['@aimpact/ailearn-app/shared/charts', dependency_18], ['pragmate-ui/drawer', dependency_19], ['pragmate-ui/components', dependency_20], ['pragmate-ui/perfect-scrollbar', dependency_21], ['pragmate-ui/list', dependency_22], ['@aimpact/ailearn-app/components/icons', dependency_23], ['@beyond-js/react-18-widgets/hooks', dependency_24], ['pragmate-ui/form', dependency_25], ['pragmate-ui/chips', dependency_26], ['pragmate-ui/image', dependency_27], ['@aimpact/ailearn-app/utils', dependency_28], ['pragmate-ui/tooltip', dependency_29], ['pragmate-ui/collapsible', dependency_30], ['pragmate-ui/alert', dependency_31], ['@aimpact/chat-sdk/chat-component.code', dependency_32], ['@aimpact/chat-sdk/widgets/markdown', dependency_33], ['pragmate-ui/dropdown', dependency_34]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.1.13/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/assignments/dashboard.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3329750896,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          var _dashboardLayout = require("@aimpact/ailearn-app/dashboard-layout.widget");
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
            show() {
              _dashboardLayout.LayoutBroker.removeOverlay();
              if (this.uri.vars.get('id')) {
                this.#store.load(this.uri.vars.get('id'));
              }
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {
              this.#store.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /****************************
      INTERNAL MODULE: ./model/DATA
      ****************************/

      ims.set('./model/DATA', {
        hash: 1777830926,
        creator: function (require, exports) {
          "use strict";

          const data = {
            status: true,
            data: {
              activities: {
                items: {
                  '37b28bb0-74a8-44b5-ae71-4ff910ce055b': {
                    duration: 0,
                    module: {
                      creator: {
                        photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTtewZAeH-29p3QJ-rwEuUuMTAjjS4FgkOsfC0v1m=s96-c',
                        name: 'Félix Tovar',
                        id: '8cGf2jOlDLZRCY6rQWWsLnhjMB62'
                      },
                      audience: '6to año',
                      ai: true,
                      description: 'Este módulo tiene como objetivo que los alumnos comprendan el proceso de la fotosíntesis y su importancia en los ecosistemas, abordando sus componentes, etapas y el impacto que tiene en la vida en la Tierra.',
                      language: 'es',
                      title: 'Comprendiendo la Fotosíntesis',
                      type: 'module',
                      picture: '',
                      objective: 'Comprender el proceso de la fotosíntesis y su importancia en los ecosistemas.',
                      duration: '15',
                      public: true,
                      timeUpdated: 1727278311113,
                      timeCreated: 1727278311113,
                      id: 'f770cbc2-65e4-4c5d-bc0e-ae3b160e080e',
                      status: 'active'
                    },
                    description: 'Los estudiantes tendrán una conversación interactiva con el Dr. Green, un personaje ficticio que es un experto en fotosíntesis. Durante la charla, explorarán cómo las plantas convierten la luz solar en energía y la importancia de este proceso en los ecosistemas. Los estudiantes podrán hacer preguntas y recibir respuestas detalladas sobre las reacciones químicas involucradas y el impacto del ciclo de la fotosíntesis en la vida cotidiana.',
                    resources: {
                      specs: {
                        instructions: 'Inicia la conversación presentándote como un experto en biología. Invita al estudiante a hacer preguntas sobre la fotosíntesis y explica de manera interactiva los conceptos relacionados, promoviendo un diálogo activo.',
                        role: 'Tú eres un experto en biología y fotosíntesis.',
                        objectives: [{
                          name: 'comprension-fotosintesis',
                          objective: 'Comprender los procesos de la fotosíntesis y su importancia en los ecosistemas.'
                        }, {
                          name: 'curiosidad-cientifica',
                          objective: 'Fomentar la curiosidad científica a través de preguntas y exploración de conceptos.'
                        }, {
                          name: 'habilidades-comunicativas',
                          objective: 'Desarrollar habilidades comunicativas al formular preguntas y expresar ideas.'
                        }]
                      },
                      materials: {}
                    },
                    language: 'es',
                    id: '37b28bb0-74a8-44b5-ae71-4ff910ce055b',
                    type: 'character-talk',
                    title: 'Diálogo con el Dr. Green, el experto en fotosíntesis',
                    picture: '',
                    objective: 'Comprender los procesos de la fotosíntesis y su relevancia en los ecosistemas, así como fomentar la curiosidad científica en los estudiantes.'
                  },
                  'bc6ecedf-4cc7-4a57-be94-a8afbc160af1': {
                    duration: 0,
                    module: {
                      creator: {
                        photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTtewZAeH-29p3QJ-rwEuUuMTAjjS4FgkOsfC0v1m=s96-c',
                        name: 'Félix Tovar',
                        id: '8cGf2jOlDLZRCY6rQWWsLnhjMB62'
                      },
                      audience: '6to año',
                      ai: true,
                      description: 'Este módulo tiene como objetivo que los alumnos comprendan el proceso de la fotosíntesis y su importancia en los ecosistemas, abordando sus componentes, etapas y el impacto que tiene en la vida en la Tierra.',
                      language: 'es',
                      title: 'Comprendiendo la Fotosíntesis',
                      type: 'module',
                      picture: '',
                      objective: 'Comprender el proceso de la fotosíntesis y su importancia en los ecosistemas.',
                      duration: '15',
                      public: true,
                      timeUpdated: 1727278311113,
                      timeCreated: 1727278311113,
                      id: 'f770cbc2-65e4-4c5d-bc0e-ae3b160e080e',
                      status: 'active'
                    },
                    description: 'Los estudiantes aprenderán sobre el proceso de la fotosíntesis, sus etapas y la importancia de este proceso para los ecosistemas. A través de una presentación interactiva y el uso de gráficos y diagramas, los alumnos explorarán cómo las plantas convierten la luz solar en energía, y cómo este proceso beneficia tanto a los organismos autotróficos como a los heterótrofos en el ecosistema.',
                    resources: {
                      specs: {
                        instructions: 'Inicia la conversación haciendo preguntas sobre el concepto de fotosíntesis. Responde a las inquietudes del alumno, facilita información adicional y guía a través del proceso de descubrimiento sobre las etapas y componentes de la fotosíntesis.',
                        role: 'Docente',
                        objectives: [{
                          name: 'comprender-etapas-fotosintesis',
                          objective: 'Explicar las etapas de la fotosíntesis y su rol en el mantenimiento de los ecosistemas.'
                        }, {
                          name: 'identificar-componentes-fotosintesis',
                          objective: 'Identificar los componentes necesarios para el proceso de fotosíntesis.'
                        }]
                      },
                      materials: {
                        synthesis: '- **Fotosíntesis**\n  - _Definición_: Proceso de conversión de **luz solar** en **energía química**\n  - _Organismos involucrados_: \n    - **Plantas**\n    - **Algas**\n    - **Bacterias**\n  \n- **Componentes necesarios**\n  - **Dióxido de carbono**\n  - **Agua**\n  - **Luz del sol**\n\n- **Productos generados**\n  - **Glucosa**\n  - **Oxígeno**\n\n- **Importancia**\n  - **Ecosistemas**: Proporciona **alimento**\n  - **Aire limpio**',
                        article: 'La fotosíntesis es el proceso mediante el cual las plantas, algas y algunas bacterias convierten la luz solar en energía química. Utilizan dióxido de carbono, agua y la luz del sol para producir glucosa y oxígeno. Este proceso es esencial para los ecosistemas, ya que proporciona alimento y aire limpio.',
                        dyslexia: 'La fotosíntesis es un proceso importante. Las plantas, algunas algas y ciertas bacterias hacen fotosíntesis. Con este proceso, convierten la luz del sol en energía. \n\nPara hacer fotosíntesis, las plantas utilizan tres cosas: dióxido de carbono, agua y luz solar. \n\nPrimero, las plantas toman dióxido de carbono del aire. Luego, absorben agua del suelo. Finalmente, usan la luz del sol. Con estos tres ingredientes, producen glucosa y oxígeno. \n\nLa glucosa es una forma de azúcar. Es alimento para las plantas. También es energía para crecer y vivir. El oxígeno es gas que nosotros respiramos. Es muy importante para todos los seres vivos.\n\nLa fotosíntesis es esencial porque ayuda a crear alimento y aire limpio. Sin este proceso, los ecosistemas no podrían funcionar. \n\nPiensa en la fotosíntesis como una cocina. La planta es el chef que utiliza ingredientes para hacer una comida. Esos ingredientes son el dióxido de carbono, el agua y la luz solar. Al final, la planta produce glucosa como alimento y aire limpio como un regalo para todos.\n\nRecuerda: la fotosíntesis ayuda a las plantas a vivir y a los seres vivos a respirar. ¿Por qué crees que este proceso es tan importante? Reflexiona sobre esto.'
                      }
                    },
                    language: 'es',
                    id: 'bc6ecedf-4cc7-4a57-be94-a8afbc160af1',
                    type: 'content-theory',
                    title: 'Comprendiendo la Fotosíntesis',
                    picture: '',
                    objective: 'Los alumnos podrán explicar las etapas de la fotosíntesis y su rol fundamental en el mantenimiento de los ecosistemas, identificando los componentes necesarios para el proceso.'
                  },
                  '024f6b72-e64a-45e2-af96-26b56389d711': {
                    duration: 0,
                    module: {
                      creator: {
                        photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTtewZAeH-29p3QJ-rwEuUuMTAjjS4FgkOsfC0v1m=s96-c',
                        name: 'Félix Tovar',
                        id: '8cGf2jOlDLZRCY6rQWWsLnhjMB62'
                      },
                      audience: '6to año',
                      ai: true,
                      description: 'Este módulo tiene como objetivo que los alumnos comprendan el proceso de la fotosíntesis y su importancia en los ecosistemas, abordando sus componentes, etapas y el impacto que tiene en la vida en la Tierra.',
                      language: 'es',
                      title: 'Comprendiendo la Fotosíntesis',
                      type: 'module',
                      picture: '',
                      objective: 'Comprender el proceso de la fotosíntesis y su importancia en los ecosistemas.',
                      duration: '15',
                      public: true,
                      timeUpdated: 1727278311113,
                      timeCreated: 1727278311113,
                      id: 'f770cbc2-65e4-4c5d-bc0e-ae3b160e080e',
                      status: 'active'
                    },
                    description: 'Actividad de debate individual donde los estudiantes discutirán sobre la importancia de la fotosíntesis en el contexto del cambio climático, abordando sus efectos y beneficios para los ecosistemas.',
                    resources: {
                      specs: {
                        instructions: 'Inicia el debate presentando el tema y alentando al alumno a formular su argumento. Proporciona retroalimentación continua y plantea preguntas que estimulen la reflexión y el análisis crítico. Evita guiar demasiado al alumno, permitiendo que desarrolle sus ideas con independencia.',
                        role: 'Docente',
                        subject: 'Debate sobre el impacto de la fotosíntesis en el medio ambiente y su papel en la mitigación del cambio climático',
                        objectives: [{
                          name: 'comprension-ecologica',
                          objective: 'Analizar cómo la fotosíntesis contribuye a la sostenibilidad de los ecosistemas.'
                        }, {
                          name: 'argumentacion-critica',
                          objective: 'Desarrollar habilidades de argumentación crítica mediante el uso de evidencias científicas.'
                        }, {
                          name: 'conciencia-ambiental',
                          objective: 'Reflexionar sobre la importancia de la fotosíntesis en la mitigación del cambio climático.'
                        }, {
                          name: 'trabajo-colaborativo',
                          objective: 'Fomentar el trabajo colaborativo a través del intercambio de ideas.'
                        }]
                      },
                      materials: {}
                    },
                    language: 'es',
                    id: '024f6b72-e64a-45e2-af96-26b56389d711',
                    type: 'debate',
                    title: 'La Fotosíntesis y su Rol en el Cambio Climático',
                    picture: '',
                    objective: 'Los alumnos lograrán argumentar y analizar el impacto de la fotosíntesis en el medio ambiente, especialmente en relación con la mitigación del cambio climático y la sostenibilidad de los ecosistemas.'
                  }
                },
                order: ['024f6b72-e64a-45e2-af96-26b56389d711', '37b28bb0-74a8-44b5-ae71-4ff910ce055b', 'bc6ecedf-4cc7-4a57-be94-a8afbc160af1']
              },
              module: {
                duration: '15',
                creator: {
                  photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTtewZAeH-29p3QJ-rwEuUuMTAjjS4FgkOsfC0v1m=s96-c',
                  name: 'Félix Tovar',
                  id: '8cGf2jOlDLZRCY6rQWWsLnhjMB62'
                },
                audience: '6to año',
                description: 'Este módulo tiene como objetivo que los alumnos comprendan el proceso de la fotosíntesis y su importancia en los ecosistemas, abordando sus componentes, etapas y el impacto que tiene en la vida en la Tierra.',
                language: 'es',
                id: 'f770cbc2-65e4-4c5d-bc0e-ae3b160e080e',
                title: 'Comprendiendo la Fotosíntesis',
                picture: '',
                objective: 'Comprender el proceso de la fotosíntesis y su importancia en los ecosistemas.'
              },
              classroom: {
                name: 'playground ftovar',
                id: '2c1da49f-580a-4b4c-a0e6-81f0a265f284',
                picture: ''
              },
              id: '4c0fe2c3-b0f1-4642-ae55-5494355e693f',
              participants: {
                '8cGf2jOlDLZRCY6rQWWsLnhjMB62': {
                  user: {
                    photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTtewZAeH-29p3QJ-rwEuUuMTAjjS4FgkOsfC0v1m=s96-c',
                    name: 'Félix Tovar',
                    id: '8cGf2jOlDLZRCY6rQWWsLnhjMB62'
                  },
                  activities: {
                    '024f6b72-e64a-45e2-af96-26b56389d711': {
                      data: {
                        messages: {
                          count: 8
                        },
                        progress: {
                          summary: 'Félix ha completado la comprensión ecológica y ha mostrado conciencia ambiental, mientras trabaja en su argumentación crítica y en el fomento del trabajo colaborativo.',
                          objectives: [{
                            name: 'comprension-ecologica',
                            objective: 'Félix identifica la relación entre la concentración de árboles y la calidad del aire, demostrando comprensión sobre el papel de la fotosíntesis en los ecosistemas.',
                            status: {
                              name: 'completed',
                              icon: '✔️'
                            }
                          }, {
                            name: 'argumentacion-critica',
                            objective: 'Félix aún no ha presentado evidencia científica, pero la sugerencia del asistente de IA impulsa el desarrollo de su argumentación.',
                            status: {
                              name: 'in progress',
                              icon: '🔧'
                            }
                          }, {
                            name: 'conciencia-ambiental',
                            objective: 'A través de su observación, Félix muestra una creciente conciencia sobre la importancia de la fotosíntesis en la mitigación del cambio climático.',
                            status: {
                              name: 'completed',
                              icon: '✔️'
                            }
                          }, {
                            name: 'trabajo-colaborativo',
                            objective: 'La interacción entre Félix y el asistente de IA fomenta el intercambio de ideas, pero no se ha evidenciado un trabajo colaborativo específico.',
                            status: {
                              name: 'in progress',
                              icon: '🔧'
                            }
                          }]
                        }
                      }
                    }
                  }
                },
                uJVxRdIjrGMgOYnTFsEKg9UFx0Z2: {
                  user: {
                    photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTtd3D8FSUERmB7p29gdqDchlBYqO-wuX0XCEiFV_T-Zt=s96-c',
                    name: 'Felix Tovar',
                    id: 'uJVxRdIjrGMgOYnTFsEKg9UFx0Z2'
                  },
                  activities: {
                    '024f6b72-e64a-45e2-af96-26b56389d711': {
                      data: {
                        messages: {
                          count: 2
                        },
                        progress: {
                          summary: 'Felix avanza al analizar la fotosíntesis en relación al cambio climático y la sostenibilidad, mientras desarrolla conciencia ambiental. Sin embargo, los objetivos de argumentación crítica y trabajo colaborativo aún están en progreso.',
                          objectives: [{
                            name: 'comprension-ecologica',
                            objective: 'Felix ha comenzado a conectar la fotosíntesis con la sostenibilidad de los ecosistemas al mencionar la regulación de temperaturas y la purificación del aire.',
                            status: {
                              name: 'in progress',
                              icon: '🔧'
                            }
                          }, {
                            name: 'argumentacion-critica',
                            objective: 'En progreso',
                            status: {
                              name: 'in progress',
                              icon: '🔧'
                            }
                          }, {
                            name: 'conciencia-ambiental',
                            objective: 'Felix mostró preocupación por el cambio climático y la necesidad de cuidar los árboles, lo que refleja una creciente conciencia ambiental.',
                            status: {
                              name: 'completed',
                              icon: '✔️'
                            }
                          }, {
                            name: 'trabajo-colaborativo',
                            objective: 'En progreso',
                            status: {
                              name: 'in progress',
                              icon: '🔧'
                            }
                          }]
                        }
                      }
                    }
                  }
                }
              }
            }
          };
        }
      });

      /*********************************************
      INTERNAL MODULE: ./model/activities/activities
      *********************************************/

      ims.set('./model/activities/activities', {
        hash: 1459040242,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentActivities = void 0;
          var _activity = require("./activity");
          class AssignmentActivities {
            #items = [];
            #map = new Map();
            get items() {
              return this.#items;
            }
            #dashboard;
            get dashboard() {
              return this.#dashboard;
            }
            constructor(dashboard, data) {
              this.#dashboard = dashboard;
              data.order.forEach(id => {
                const instance = new _activity.AssignmentActivity(data.items[id]);
                this.#map.set(id, instance);
                this.#items.push(instance);
              });
            }
            has(id) {
              return this.#map.has(id);
            }
            get(id) {
              return this.#map.get(id);
            }
          }
          exports.AssignmentActivities = AssignmentActivities;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./model/activities/activity
      *******************************************/

      ims.set('./model/activities/activity', {
        hash: 1140457750,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentActivity = void 0;
          var _item = require("@aimpact/ailearn-sdk/reactive/entities/item");
          class AssignmentActivity extends _item.Item {
            #participantsMap = new Map();
            #participants = [];
            get participants() {
              return this.#participants;
            }
            constructor(data) {
              super({
                entity: 'assignment-activity',
                ...data,
                properties: ['duration', 'module', 'description', 'resources', 'language', 'id', 'type', 'title', 'picture', 'objective']
              });
              // console.log('en ', this.id, ' participan', this.#participants);
            }
            addParticipant(participant) {
              this.#participants.push(participant);
              this.#participantsMap.set(participant.id, participant);
            }
            getParticipant(id) {
              return this.#participantsMap.get(id);
            }
            hasParticipant(id) {
              return this.#participantsMap.has(id);
            }
          }
          exports.AssignmentActivity = AssignmentActivity;
        }
      });

      /*****************************
      INTERNAL MODULE: ./model/index
      *****************************/

      ims.set('./model/index', {
        hash: 673760546,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dashboard = void 0;
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _participants = require("./participants/participants");
          var _activities = require("./activities/activities");
          class Dashboard extends _model.ReactiveModel {
            #api;
            #participants;
            get participants() {
              return this.#participants;
            }
            #module;
            get module() {
              return this.#module;
            }
            #classroom;
            get classroom() {
              return this.#classroom;
            }
            #activities;
            get activities() {
              return this.#activities;
            }
            #error = null;
            get error() {
              return this.#error;
            }
            get totalParticipants() {
              return Object.keys(this.participants.items).length;
            }
            get totalMultiple() {
              return this.participants.items.reduce((acc, curr) => {
                // if (curr.selection) return acc + 1;
                return acc;
                1;
              }, 0);
            }
            get totalSpoken() {
              return this.participants.items.reduce((acc, curr) => {
                // if (curr.selection) return acc + 1;
                return acc;
              }, 0);
            }
            constructor() {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#participants = new _participants.Participants(this);
              this.reactiveProps(['selection', 'spoken', 'found', 'assessment']);
              globalThis.model = this;
            }
            async load(id) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.get(`/assignments/${id}/dashboard`);
              if (!response.status) {
                if (typeof response.error === 'object') {
                  this.#error = response.error;
                }
                throw new Error(response.error?.text);
              }
              if (Object.keys(response.data).length === 0) {
                this.found = false;
                this.ready = true;
                return;
              }
              const {
                module,
                participants,
                activities,
                classroom,
                id: dashboardId
              } = response.data;
              this.#activities = new _activities.AssignmentActivities(this, activities);
              this.#participants.load(participants, this.#activities);
              globalThis.model = this;
              this.#module = module;
              this.#classroom = classroom;
              this.id = dashboardId;
              this.found = true;
              this.ready = true;
            }
          }
          exports.Dashboard = Dashboard;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./model/participants/activities
      ***********************************************/

      ims.set('./model/participants/activities', {
        hash: 2406348326,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantActivities = void 0;
          var _activity = require("./activity");
          class ParticipantActivities {
            #items = [];
            #map = new Map();
            #parent;
            get parent() {
              return this.#parent;
            }
            get items() {
              return this.#items;
            }
            constructor(parent, items) {
              this.#items = items;
              const keys = Object.keys(items);
              this.#items = keys.map(id => {
                /**
                 * The items are structured as follows:
                 * {
                 * 	"1716134400000": {
                 * 		"data": {
                 * 			"messages": {
                 * 				"items": [],
                 * 				"total": 0
                 * 			},
                 * 			"progress": {
                 *
                 * }
                 * the data property is an unnecessary wrapper that we need to remove from the backend
                 */
                const activity = parent.dashboard.activities.get(id);
                activity.addParticipant(parent);
                const instance = new _activity.ParticipantActivity({
                  activity,
                  ...items[id]?.data
                });
                this.#map.set(id, instance);
                this.#parent = parent;
                return instance;
              });
            }
            has(id) {
              return this.#map.has(id);
            }
            get(id) {
              return this.#map.get(id);
            }
          }
          exports.ParticipantActivities = ParticipantActivities;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./model/participants/activity
      *********************************************/

      ims.set('./model/participants/activity', {
        hash: 3513535960,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantActivity = void 0;
          var _item = require("@aimpact/ailearn-sdk/reactive/entities/item");
          class ParticipantActivity extends _item.Item {
            constructor(data) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['alerts', 'messages', 'progress', 'activity', 'synthesis']
              });
            }
          }
          exports.ParticipantActivity = ParticipantActivity;
        }
      });

      /************************************************
      INTERNAL MODULE: ./model/participants/participant
      ************************************************/

      ims.set('./model/participants/participant', {
        hash: 1175026643,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Participant = void 0;
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          var _activities = require("./activities");
          class Participant extends _model.ReactiveModel {
            #activities;
            get activities() {
              return this.#activities;
            }
            #dashboard;
            get dashboard() {
              return this.#dashboard;
            }
            constructor(dashboard, item) {
              super({
                ...item,
                properties: ['user', 'id'] // we need to update activities structure
              });
              this.#dashboard = dashboard;
              this.#activities = new _activities.ParticipantActivities(this, item.activities);
            }
          }
          exports.Participant = Participant;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./model/participants/participants
      *************************************************/

      ims.set('./model/participants/participants', {
        hash: 2004723837,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Participants = void 0;
          var _participant = require("./participant");
          class Participants {
            #map = new Map();
            #items = [];
            get items() {
              return this.#items;
            }
            #dashboard;
            get dashboard() {
              return this.#dashboard;
            }
            constructor(dashboard) {
              this.#dashboard = dashboard;
            }
            load(items, activities) {
              this.#items = Object.keys(items).map(id => {
                const participant = new _participant.Participant(this.dashboard, {
                  id,
                  ...items[id]
                });
                this.#items.push(participant);
                this.#map.set(id, participant);
                return participant;
              });
            }
            has(id) {
              return this.#map.has(id);
            }
            get(id) {
              return this.#map.get(id);
            }
          }
          exports.Participants = Participants;
        }
      });

      /*****************************
      INTERNAL MODULE: ./model/types
      *****************************/

      ims.set('./model/types', {
        hash: 3927952553,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3461370567,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _dashboardLayout = require("@aimpact/ailearn-app/dashboard-layout.widget");
          var _model = require("./model");
          var _model2 = require("@aimpact/ailearn-sdk/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          //@ts-ignore

          class StoreManager extends _model2.ReactiveModel {
            isStore;
            #model;
            #tracking;
            #activitySelected;
            get activitySelected() {
              return this.#activitySelected;
            }
            get currentTracking() {
              return this.#tracking;
            }
            #session;
            get session() {
              return this.#session;
            }
            #view;
            get view() {
              return this.#view;
            }
            set view(view) {
              this.#view = view;
            }
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            get assignment() {
              return this.#session;
            }
            get model() {
              return this.#model;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            #users = new Map();
            #currentTracking;
            #trackings = new Map();
            get users() {
              return this.#users;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
              _dashboardLayout.LayoutBroker.setModel(this);
              this.#model = new _model.Dashboard();
              globalThis.store = this;
            }
            async load(id) {
              try {
                this.fetching = true;
                this.#assignmentId = id;
                await this.#model.load(id);
                globalThis.m = this.#model;
              } catch (e) {} finally {
                super.ready = true;
                this.fetching = false;
              }
            }
            loadUserTracking(userId) {
              try {
                if (this.#trackings.has(userId)) return this.#trackings.get(userId);
                this.#currentTracking = _tracking.Tracking.get({
                  assignmentId: this.#assignmentId,
                  userId,
                  chat: true
                });
                this.#trackings.set(userId, this.#currentTracking);
                this.#currentTracking.load({
                  id: this.#assignmentId,
                  userId
                });
                this.triggerEvent();
                return this.#currentTracking;
              } catch (e) {
                console.error(e);
              }
            }
            refresh = async () => {
              try {
                this.fetching = true;
                await this.model.load(this.#assignmentId);
                this.trigger('data.updated');
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            };
            refreshDrawer = async () => {
              try {
                await this.model.load(this.#assignmentId);
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            };
            clear() {
              _dashboardLayout.LayoutBroker.clear();
            }
            selectActivity(id) {
              this.#activitySelected = id;
              this.view = 'activity';
              this.trigger('change');
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***************************
      INTERNAL MODULE: ./views/404
      ***************************/

      ims.set('./views/404', {
        hash: 2398831463,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NotFound = NotFound;
          var _react = require("react");
          function NotFound({
            store,
            texts
          }) {
            if (store.model.error?.code === 403) {
              return _react.default.createElement("app-not-allowed", null);
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("app-missing", null));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/charts/index
      ************************************/

      ims.set('./views/charts/index', {
        hash: 2122160673,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Charts = Charts;
          var _react = require("react");
          var _multiple = require("./multiple");
          var _spoken = require("./spoken");
          // import { ParticipationChart } from './participation';
          function Charts({
            data
          }) {
            return _react.default.createElement("section", {
              className: "charts__container"
            }, _react.default.createElement(_multiple.MultipleChart, null), _react.default.createElement(_spoken.SpokenChart, null));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/charts/multiple
      ***************************************/

      ims.set('./views/charts/multiple', {
        hash: 475317666,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChart = MultipleChart;
          var _react = require("react");
          var _charts = require("@aimpact/ailearn-app/shared/charts");
          var _context = require("../context");
          var _settings = require("./settings");
          function MultipleChart() {
            const {
              store,
              texts
            } = (0, _context.useDashboardContext)();
            globalThis.store = store;
            let activity;
            Object.keys(store.model.activities.items).forEach(index => {
              if (activity) return;
              const current = store.model.activities.items?.[index];
              if (current && current.type === 'multiple-choice') activity = current;
            });
            if (!activity) return null;
            const countObjectsWithoutUseMultiple = participants => {
              return participants.reduce((count, item) => {
                const hasNonZeroCount = Object.values(item.activities).some(activity => {
                  const counters = activity.data?.counters;
                  return counters && counters.total !== undefined && counters.correct !== undefined && counters.wrong !== undefined;
                });
                return count + (hasNonZeroCount ? 1 : 0);
              }, 0);
            };
            const diff = countObjectsWithoutUseMultiple(store.model.participants);
            return _react.default.createElement("article", {
              className: "charts__item"
            }, _react.default.createElement("h3", null, activity.title), _react.default.createElement(_charts.Chart, {
              options: {
                series: [store.model.participants.length - diff, diff],
                labels: [texts.participation.pending, texts.participation.total],
                ..._settings.CHART_BASE_SPECS,
                responsive: _settings.RESPONSIVE_BASE_SPECS
              }
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/charts/settings
      ***************************************/

      ims.set('./views/charts/settings', {
        hash: 1370120933,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RESPONSIVE_BASE_SPECS = exports.CHART_BASE_SPECS = void 0;
          const CHART_BASE_SPECS = exports.CHART_BASE_SPECS = {
            theme: {
              palette: 'palette7' // upto palette10
            },
            legend: {
              position: 'bottom',
              horizontalAlign: 'left'
            },
            chart: {
              type: 'donut',
              height: '200px'
            },
            dataLabels: {
              formatter: (value, data) => {
                const {
                  seriesIndex,
                  w: {
                    config: {
                      series
                    }
                  }
                } = data;
                return series[seriesIndex];
              }
            }
          };
          const RESPONSIVE_BASE_SPECS = exports.RESPONSIVE_BASE_SPECS = [{
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom'
              },
              chart: {
                width: '180px',
                height: '180px'
              }
            }
          }, {
            breakpoint: 880,
            options: {
              legend: {
                position: 'bottom',
                horizontalAlign: 'left'
              },
              chart: {
                width: '160px'
              }
            }
          }];
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/charts/spoken
      *************************************/

      ims.set('./views/charts/spoken', {
        hash: 1806893939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenChart = SpokenChart;
          var _react = require("react");
          var _charts = require("@aimpact/ailearn-app/shared/charts");
          var _context = require("../context");
          var _settings = require("./settings");
          function SpokenChart() {
            const {
              store,
              texts,
              model
            } = (0, _context.useDashboardContext)();
            const {
              items: activities,
              order
            } = model.activities;
            const spokenId = Object.keys(activities).find(key => activities[key].type === 'spoken');
            if (!spokenId) return null;
            const total = store.model.participants.reduce((acc, item) => item.activities[spokenId] ? acc + 1 : acc, 0);
            const diff = store.model.participants.length - total;
            return _react.default.createElement("article", {
              className: "charts__item"
            }, _react.default.createElement("h3", null, texts.spoken), _react.default.createElement(_charts.Chart, {
              options: {
                series: [diff, store.model.participants.length - diff],
                labels: [texts.participation.pending, texts.participation.total],
                ..._settings.CHART_BASE_SPECS,
                responsive: _settings.RESPONSIVE_BASE_SPECS
              }
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3635320329,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDashboardContext = exports.DashboardContext = void 0;
          var _react = require("react");
          const DashboardContext = exports.DashboardContext = _react.default.createContext({});
          const useDashboardContext = () => _react.default.useContext(DashboardContext);
          exports.useDashboardContext = useDashboardContext;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/drawer/aside-drawer
      *******************************************/

      ims.set('./views/drawer/aside-drawer', {
        hash: 22884553,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideDrawer = AsideDrawer;
          var _react = require("react");
          var _drawer = require("pragmate-ui/drawer");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _activity = require("../student/activity");
          var _assignment = require("../student/assignment");
          var _perfectScrollbar = require("pragmate-ui/perfect-scrollbar");
          var _wall = require("./wall");
          function AsideDrawer() {
            const {
              showDrawer,
              store,
              setShowDrawer
            } = (0, _context.useDashboardContext)();
            if (showDrawer.show === false) return;
            return _react.default.createElement(_drawer.Drawer, {
              className: "ds-drawer",
              position: "right",
              open: showDrawer.show,
              onClose: () => setShowDrawer({
                show: false
              })
            }, _react.default.createElement(_perfectScrollbar.ScrollContainer, {
              className: "ds-drawer-scroll-container",
              "data-perfect-scrollbar": "",
              "data-suppress-scroll-x": "true"
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: showDrawer.view,
              options: {
                wall: _react.default.createElement(_wall.Wall, {
                  item: showDrawer.data
                }),
                'student-activity': _react.default.createElement(_activity.DetailActivity, {
                  item: showDrawer.data
                }),
                student: _react.default.createElement(_assignment.StudentAssignmentSummary, {
                  item: showDrawer.data
                })
              }
            })));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/drawer/content
      **************************************/

      ims.set('./views/drawer/content', {
        hash: 666808265,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wall = Wall;
          var React = require("react");
          var Drawer = require("pragmate-ui/drawer");
          var _context = require("../context");
          function Wall({
            item
          }) {
            const {
              store
            } = (0, _context.useDashboardContext)();
            const {
              user: student
            } = item;
            const [items, setItems] = React.useState(item.activities.items);
            const [fetching, setFetching] = React.useState(false);
            const onRefresh = () => {
              setFetching(true);
              store.refreshDrawer().finally(() => {
                setFetching(false);
                setItems(item.activities.items);
              });
            };
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("h2", null, student.name), React.createElement("div", null, React.createElement(Drawer.CloseButton, null)))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/drawer/wall
      ***********************************/

      ims.set('./views/drawer/wall', {
        hash: 2628510498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wall = Wall;
          var React = require("react");
          var Drawer = require("pragmate-ui/drawer");
          var _context = require("../context");
          function Wall({
            item
          }) {
            const {
              store
            } = (0, _context.useDashboardContext)();
            const [fetching, setFetching] = React.useState(false);
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("h2", null, "Wall"), React.createElement("div", null, React.createElement(Drawer.CloseButton, null)))), React.createElement("section", {
              className: "ds-drawer__content"
            }, React.createElement("app-dashboard-wall", {
              id: store.assignmentId
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 1805669159,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _config = require("@aimpact/ailearn-app/config");
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          const APP = _config.default?.params?.APP_NAME ?? 'RVD AI';
          function Empty({
            store,
            texts
          }) {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_empty.Empty, {
              className: "empty-section__container",
              icon: _icons.ICONS.classworks
            }, _react.default.createElement("h3", {
              className: "title"
            }, store.model.module.title), _react.default.createElement("p", null, texts.empty))));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 185675526,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 1686713671,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("./context");
          var _userData = require("./user-data");
          function Header() {
            const {
              model,
              texts,
              setShowDrawer
            } = (0, _context.useDashboardContext)();
            const {
              title,
              description,
              picture,
              owner,
              creator
            } = model.module;
            const onClick = () => {
              setShowDrawer({
                show: true,
                view: 'wall'
              });
            };
            return _react.default.createElement("section", {
              className: "page__header-container"
            }, _react.default.createElement("header", {
              className: "assigment-header"
            }, _react.default.createElement("section", {
              className: "main-content"
            }, _react.default.createElement(_ui.EntityImage, {
              entity: "module",
              src: picture,
              alt: title
            }), _react.default.createElement("h1", null, title), _react.default.createElement("p", {
              className: "p1 hidden-xs"
            }, description), _react.default.createElement("div", {
              className: "module__managers-section"
            }, _react.default.createElement("div", {
              className: "module__managers-section"
            }, owner && _react.default.createElement(_userData.UserData, {
              label: texts.owner,
              data: owner
            }), creator && _react.default.createElement(_userData.UserData, {
              label: texts.creator,
              data: creator
            })))), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              bordered: true,
              icon: "shared-folder",
              className: "btn btn-primary outline pui-button has-icon ",
              onClick: onClick
            }, texts.actions.wall))), _react.default.createElement("div", {
              className: "actions"
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1479535714,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _config = require("@aimpact/ailearn-app/config");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _ = require("./404");
          var _context = require("./context");
          var _asideDrawer = require("./drawer/aside-drawer");
          var _empty = require("./empty");
          var _header = require("./header");
          var _header2 = require("./list/header");
          var _components = require("pragmate-ui/components");
          var _activity = require("./views/activity");
          var _general = require("./views/general");
          const APPNAME = _config.default?.params?.APP_NAME ?? 'RVD.AI';
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [showDrawer, setShowDrawer] = (0, _react.useState)({
              show: false,
              data: null
            });
            const [view, setView] = (0, _react.useState)('general');
            const [, setTotalParticipants] = (0, _react.useState)(store.model?.participants?.items?.length ?? 0);
            const [state, setState] = (0, _react.useState)(store.getProperties());
            const [fetching, setFetching] = (0, _react.useState)(store.fetching);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            (0, _hooks.useBinder)([store], () => setTotalParticipants(store.model?.participants?.items?.length ?? 0), 'data.updated');
            (0, _hooks.useBinder)([store], () => setState(store.getProperties()), 'change');
            (0, _hooks.useBinder)([store], () => setFetching(store.fetching), 'fetching.changed');
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            if (!store.model.found) return _react.default.createElement(_.NotFound, {
              store: store,
              texts: texts
            });
            if (store.model.totalParticipants === 0) return _react.default.createElement(_empty.Empty, {
              store: store,
              texts: texts
            });
            const value = {
              texts,
              model: store.model,
              store,
              showDrawer,
              setShowDrawer,
              view,
              setView
            };
            const cls = `dashboard-container${fetching ? ' is-fetching' : ''}`;
            return _react.default.createElement(_ui.PageContainer, {
              className: cls
            }, _react.default.createElement(_context.DashboardContext.Provider, {
              value: value
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_header2.StudentsHeader, null), _react.default.createElement(_components.ConditionalContainer, {
              condition: !!store.activitySelected,
              ternary: true,
              options: {
                false: _react.default.createElement(_general.GeneralView, null),
                true: _react.default.createElement(_activity.ActivityView, null)
              }
            }), _react.default.createElement(_asideDrawer.AsideDrawer, null)));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/list/header/activity-filter
      ***************************************************/

      ims.set('./views/list/header/activity-filter', {
        hash: 4177184922,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityFilter = ActivityFilter;
          var _react = require("react");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          function ActivityFilter({
            item
          }) {
            const {
              setView,
              model,
              texts,
              store
            } = (0, _context.useDashboardContext)();
            const icon = _icons2.ICONS[item.type];
            let cls = `activity-type__icon activity--${item.type}`;
            if (store.activitySelected?.type === item.type) {
              cls += ' active';
            }
            const title = item.title;
            const handleClick = event => {
              store.selectActivity(item);
            };
            return _react.default.createElement("section", {
              className: cls,
              onClick: handleClick
            }, _react.default.createElement(_icons.IconButton, {
              icon: icon,
              title: title
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/list/header/index
      *****************************************/

      ims.set('./views/list/header/index', {
        hash: 1318594541,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentsHeader = StudentsHeader;
          var _react = require("react");
          var _context = require("../../context");
          var _form = require("pragmate-ui/form");
          var _list = require("pragmate-ui/list");
          var _activityFilter = require("./activity-filter");
          var _icons = require("pragmate-ui/icons");
          function StudentsHeader() {
            const {
              model,
              texts,
              store
            } = (0, _context.useDashboardContext)();
            const listCls = `activity-types__list${store.activitySelected ? ' activity-selected' : ''}`;
            const [refreshing, setRefreshing] = _react.default.useState(false);
            const onRefresh = event => {
              event.stopPropagation();
              setRefreshing(true);
              store.refresh();
              setTimeout(() => {
                setRefreshing(false);
              }, 1000);
            };
            return _react.default.createElement("header", {
              className: "dashboard-students__header"
            }, _react.default.createElement("div", {
              className: "ds-students-header__col"
            }, _react.default.createElement("section", {
              className: "header__title"
            }, _react.default.createElement("h6", null, texts.list.students), _react.default.createElement("span", null, "(", model.participants.items?.length, " ", texts.list.participants, ")")), _react.default.createElement("section", null, _react.default.createElement(_form.Input, {
              type: "text",
              className: "header__search",
              placeholder: texts.list.search,
              icon: "search"
            }))), _react.default.createElement("div", {
              className: "ds-students-header__col"
            }, _react.default.createElement(_list.List, {
              className: listCls,
              items: model.activities.items,
              control: _activityFilter.ActivityFilter
            }), _react.default.createElement(_icons.IconButton, {
              disabled: refreshing,
              onClick: onRefresh,
              icon: "refresh",
              variant: "primary",
              className: "circle"
            })));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/list/item/activity
      ******************************************/

      ims.set('./views/list/item/activity', {
        hash: 1592072111,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivity = ModuleActivity;
          var _react = require("react");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          function ModuleActivity({
            item
          }) {
            const {
              user,
              activity,
              participant
            } = item;
            const {
              texts,
              setShowDrawer,
              store
            } = (0, _context.useDashboardContext)();
            const hasParticipated = participant.activities.has(activity.id);
            const participantActivity = participant.activities.get(activity.id);
            let type = hasParticipated ? 'success' : 'warning';
            const output = [];
            if (activity.type === 'assessment' && activity.subtype === 'multiple-choice' && data.data) {
              output.push(_react.default.createElement("span", null, item.data.counters.correct, " /", item.data.counters.total));
            }
            let label = hasParticipated ? 'Done' : 'Pending';
            if (['content-theory', 'debate', 'character-talk'].includes(activity.type)) {
              const total = participantActivity?.messages?.count ?? 0;
              label = total + ' messages';
            }
            if (activity.type === 'spoken' && item.data) {
              const keys = Object.keys(item.data);
              label = keys.reduce((acc, key) => acc + item.data[key].icon, '');
              type = 'default';
            }
            if (activity.type === 'assessment' && activity.subtype === 'multiple-choice' && data.data) {
              const {
                correct,
                total
              } = item.data?.counters;
              if (correct < total / 2) type = 'error';
              label = `${correct} /${total}`;
            }
            if (hasParticipated && participant.activities[activity.id]?.messages) {
              label = texts.messageCounter + user.activities[activity.id]?.messages.count;
            }
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              const tracking = store.loadUserTracking(user.id);
              setShowDrawer({
                show: true,
                view: 'student-activity',
                data: {
                  tracking,
                  activityId: activity.id,
                  ...item
                }
              });
            };
            const icons = participantActivity?.progress?.objectives?.map(item => item?.status?.icon);
            return _react.default.createElement("li", {
              onClick: onClick,
              key: `${user.id}.${activity.id}`,
              className: "card-student-item"
            }, _react.default.createElement("div", null, _react.default.createElement("span", {
              className: "activity-title"
            }, activity.title), _react.default.createElement("div", {
              className: "user-messages"
            }, _react.default.createElement("span", null, label))), _react.default.createElement("div", {
              className: "user-activity__information"
            }, _react.default.createElement("div", {
              className: "flex-container flex-vertical-center gap-05"
            }, participantActivity?.alerts?.length ? _react.default.createElement(_icons.Icon, {
              icon: "error",
              className: "error-icon"
            }) : null), _react.default.createElement("div", null, icons)));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/list/item/index
      ***************************************/

      ims.set('./views/list/item/index', {
        hash: 2078750904,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _context = require("../../context");
          var _list = require("pragmate-ui/list");
          var _activity = require("./activity");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _utils = require("@aimpact/ailearn-app/utils");
          function Item({
            item
          }) {
            const {
              texts,
              model,
              store,
              setShowDrawer
            } = (0, _context.useDashboardContext)();
            const {
              user
            } = item;
            const participation = Object.keys(item.activities);
            const activityItems = model.activities.items.map(activity => {
              return {
                activity,
                user: item.user,
                key: activity.id,
                participant: item,
                data: item.activities[activity.id]?.data
              };
            });
            const percentile = participation.length / model.activities.items.length * 100;
            const participantUri = `/assignments/${store.assignmentId}/dashboard/participant/${item.user.id}`;
            const viewStudent = event => {
              event.preventDefault();
              setShowDrawer({
                show: true,
                view: 'student',
                data: item
              });
              localStorage.setItem('student.details', JSON.stringify(item.user));
              return false;
            };
            return _react.default.createElement("li", {
              className: "dashboard-card card__user"
            }, _react.default.createElement("header", null, _react.default.createElement(_image.Image, {
              src: user?.photoUrl ? user.photoUrl : 'https://res.cloudinary.com/versus/image/upload/f_auto,q_auto/v1/AImpact/Avatar/default',
              alt: `${user.name}-avatar`,
              className: "avatar__image"
            }), _react.default.createElement(_components.Link, {
              href: participantUri,
              onClick: viewStudent
            }, _react.default.createElement("h5", null, user.name))), _react.default.createElement("div", {
              className: "detail__info"
            }, _react.default.createElement("h6", {
              className: "percentil-section"
            }, texts.percentil, _react.default.createElement("span", null, (0, _utils.limitDecimals)(percentile), "%")), _react.default.createElement(_list.List, {
              className: "list-unstyled user-activity__data",
              items: activityItems,
              control: _activity.ModuleActivity
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/list/item/spoken
      ****************************************/

      ims.set('./views/list/item/spoken', {
        hash: 2080228594,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenData = SpokenData;
          var _react = require("react");
          var _context = require("../../context");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _tooltip = require("pragmate-ui/tooltip");
          var _list = require("pragmate-ui/list");
          function SpokenData({
            data
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const faces = Object.keys(_core.Faces);
            const control = ({
              data
            }) => {
              return _react.default.createElement(_tooltip.Tooltip, {
                content: data
              }, _react.default.createElement("span", {
                className: "result__icon"
              }, _core.Faces[data]));
            };
            const hasSpoken = data.spoken && Object.keys(data.spoken)?.length;
            return _react.default.createElement("section", {
              className: "card__detail"
            }, _react.default.createElement("h4", null, texts.spoken), hasSpoken ? _react.default.createElement(_list.List, {
              className: "spoken-evaluation",
              items: faces,
              control: control
            }) : _react.default.createElement("span", {
              className: "spoken-evaluation"
            }, "No evaluation"));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/student/activity/actitity-types
      *******************************************************/

      ims.set('./views/student/activity/actitity-types', {
        hash: 2900269673,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/student/activity/alerts
      ***********************************************/

      ims.set('./views/student/activity/alerts', {
        hash: 510871750,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityAlerts = ActivityAlerts;
          var React = require("react");
          var _context = require("../../context");
          var _list = require("pragmate-ui/list");
          var _collapsible = require("pragmate-ui/collapsible");
          /*bundle*/
          function ActivityAlerts({
            participant,
            participantActivity
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            if (!participantActivity?.alerts) return null;
            const Item = ({
              item
            }) => {
              return React.createElement("article", {
                className: "ds-drawer__activity-item"
              }, React.createElement(_collapsible.CollapsibleContainer, null, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("span", null, item.text)), React.createElement(_collapsible.CollapsibleContent, null, React.createElement("div", {
                className: "alert-item"
              }, React.createElement("h6", null, "RVD AI"), React.createElement("div", null, item.iteration.assistant), React.createElement("h6", null, "Student"), React.createElement("div", null, item.iteration.student)))));
            };
            return React.createElement(React.Fragment, null, React.createElement("section", {
              className: "alerts__container"
            }, React.createElement("header", null, React.createElement("h4", null, texts.alerts)), React.createElement(_list.List, {
              as: "div",
              items: participantActivity?.alerts,
              control: Item
            })));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/student/activity/content
      ************************************************/

      ims.set('./views/student/activity/content', {
        hash: 2999847398,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DetailActivityBody = DetailActivityBody;
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("../../context");
          var _assessment = require("./materials/assessment");
          var _chat = require("./materials/chat");
          var _spoken = require("./materials/spoken");
          var _select = require("./select");
          var _alerts = require("./alerts");
          /*bundle*/
          function DetailActivityBody({
            participant,
            assignmentActivity,
            activity,
            setActivity
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const participantActivity = participant.activities.get(assignmentActivity.id);
            return React.createElement(React.Fragment, null, React.createElement("section", {
              className: "ds-drawer__content"
            }, React.createElement(_select.ActivitySelect, {
              activity: activity,
              setActivity: setActivity
            }), React.createElement("div", {
              className: "activity__information-container"
            }, React.createElement("section", {
              className: "activity-information"
            }, activity.subtype && React.createElement("span", null, React.createElement("strong", null, texts.subtype, ":"), " ", activity.subtype)), React.createElement("section", {
              className: "activity__description mt-15"
            }, React.createElement("h6", null, texts.description), React.createElement("p", {
              className: "p2"
            }, activity.description)))), React.createElement("div", {
              className: "ds-drawer__content"
            }, React.createElement(_alerts.ActivityAlerts, {
              participant: participant,
              participantActivity: participantActivity
            }), React.createElement(_components.ConditionalContainer, {
              condition: activity.type,
              options: {
                conversation: React.createElement(_chat.UserChat, {
                  item: activity
                }),
                'content-theory': React.createElement(_chat.UserChat, {
                  item: activity
                }),
                'character-talk': React.createElement(_chat.UserChat, {
                  item: activity
                }),
                debate: React.createElement(_chat.UserChat, {
                  item: activity
                }),
                'multiple-choice': React.createElement(_assessment.MaterialAssessment, {
                  item: activity
                }),
                assessment: React.createElement(_assessment.MaterialAssessment, {
                  item: activity
                }),
                spoken: React.createElement(_spoken.SpokenAnalysis, {
                  item: activity
                })
              }
            })));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/student/activity/index
      **********************************************/

      ims.set('./views/student/activity/index', {
        hash: 2887352513,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DetailActivity = DetailActivity;
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("../../context");
          var Drawer = require("pragmate-ui/drawer");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _content = require("./content");
          /*bundle*/
          function DetailActivity({
            item
          }) {
            const {
              store,
              texts: {
                activities: texts
              }
            } = (0, _context.useDashboardContext)();
            const {
              tracking,
              activityId
            } = item;
            const {
              user: student,
              participant
            } = item;
            const [activity, setActivity] = React.useState(tracking.activities.get(activityId));
            const [fetching, setFetching] = React.useState(false);
            const [ready, setReady] = React.useState(tracking.ready);
            (0, _hooks.useBinder)([tracking], () => {
              setReady(tracking.ready);
              if (tracking.ready) {
                setActivity(tracking.activities.get(activityId));
              }
            });
            React.useEffect(() => {
              setReady(false);
              setTimeout(() => {
                setReady(true);
              }, 50);
            }, [activity]);
            if (!ready || !activity) {
              return React.createElement(React.Fragment, null, React.createElement("header", {
                className: "dashboard-drawer__header"
              }, React.createElement("section", {
                className: "user__title flex-container flex-space-between"
              }, React.createElement("h2", null, student.name), React.createElement("div", {
                className: "flex-container flex-space-between"
              }, React.createElement(Drawer.CloseButton, null)))), React.createElement(_components.Spinner, {
                active: true
              }));
            }
            const onRefresh = () => {
              setFetching(true);
              store.refreshDrawer().finally(() => {
                setFetching(false);
              });
            };
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("h2", null, student.name), React.createElement("div", {
              className: "flex-container flex-space-between"
            }, React.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle",
              onClick: onRefresh
            }), React.createElement(Drawer.CloseButton, null)))), React.createElement(_components.ConditionalContainer, {
              ternary: true,
              condition: !!ready && !!activity,
              options: {
                true: React.createElement(_content.DetailActivityBody, {
                  assignmentActivity: item.activity,
                  activity: activity,
                  setActivity: setActivity,
                  participant: participant
                }),
                false: React.createElement(_components.Spinner, {
                  active: true
                })
              }
            }));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/student/activity/materials/assessment
      *************************************************************/

      ims.set('./views/student/activity/materials/assessment', {
        hash: 475211674,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialAssessment = MaterialAssessment;
          var _react = require("react");
          var _multiple = require("./multiple");
          function MaterialAssessment({
            item
          }) {
            return _react.default.createElement("div", null, _react.default.createElement(_multiple.MultipleChoiceReport, {
              item: item
            }));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/student/activity/materials/chat
      *******************************************************/

      ims.set('./views/student/activity/materials/chat', {
        hash: 3591866052,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserChat = UserChat;
          var _react = require("react");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _context = require("../../../context");
          var _empty = require("./empty");
          var _emptyChat = require("./empty-chat");
          //@ts-ignore

          function UserChat({
            item
          }) {
            const {
              texts: {
                chat: texts
              }
            } = (0, _context.useDashboardContext)();
            if (!item.chatModel?.id) return _react.default.createElement(_empty.EmptyMaterial, null);
            const chatId = item.chatModel.id;
            return _react.default.createElement("div", {
              className: "drawer-content"
            }, item?.data?.messages?.synthesis && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h4", null, texts.synthesis), _react.default.createElement("p", null, item.data.messages?.synthesis)), _react.default.createElement("h4", null, texts.title), _react.default.createElement("div", {
              className: "messages__list"
            }, _react.default.createElement(_chatComponent.AgentsChatContainer, {
              id: chatId,
              empty: _emptyChat.EmptyChat,
              icon: "/assets/rvd/profile-blue.png"
            }, _react.default.createElement(_chatComponent.AgentsChatPanel, null))));
          }
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./views/student/activity/materials/competencies
      ***************************************************************/

      ims.set('./views/student/activity/materials/competencies', {
        hash: 3533181059,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CompetenciesFeedback = CompetenciesFeedback;
          var _react = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _context = require("../../../context");
          function CompetenciesFeedback() {
            const {
              store
            } = (0, _context.useDashboardContext)();
            return _react.default.createElement(_markdown.Markdown, {
              content: store.assessment.competenciesFeedback
            });
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/student/activity/materials/empty-chat
      *************************************************************/

      ims.set('./views/student/activity/materials/empty-chat', {
        hash: 583939129,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyChat = EmptyChat;
          var _empty = require("pragmate-ui/empty");
          var _react = require("react");
          var _context = require("../../../context");
          function EmptyChat() {
            const {
              texts: {
                chat: {
                  empty: texts
                }
              },
              store
            } = (0, _context.useDashboardContext)();
            if (!store?.model) return null;
            const {
              title,
              description
            } = texts;
            return _react.default.createElement("div", {
              className: "empty-chat"
            }, _react.default.createElement(_empty.Empty, {
              icon: "info",
              className: ""
            }, _react.default.createElement("h3", null, title), _react.default.createElement("span", null, description)));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/student/activity/materials/empty
      ********************************************************/

      ims.set('./views/student/activity/materials/empty', {
        hash: 3969561360,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyMaterial = EmptyMaterial;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../../../context");
          function EmptyMaterial({
            message
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            message = message ?? texts.activities.empty;
            return _react.default.createElement(_ui.EmptyCard, {
              icon: "info",
              text: message,
              className: "empty-section__container"
            });
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/student/activity/materials/index
      ********************************************************/

      ims.set('./views/student/activity/materials/index', {
        hash: 3713624883,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DefaultMaterial = DefaultMaterial;
          var _react = require("react");
          function DefaultMaterial({
            item
          }) {
            return _react.default.createElement("div", null, item.description);
          }
        }
      });

      /********************************************************************
      INTERNAL MODULE: ./views/student/activity/materials/multiple/counters
      ********************************************************************/

      ims.set('./views/student/activity/materials/multiple/counters', {
        hash: 4109160760,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Counters = Counters;
          var _react = require("react");
          var _context = require("../../../../context");
          function Counters({
            item
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            if (!item.data) return null;
            const {
              counters: {
                total,
                correct
              }
            } = item.data;
            return _react.default.createElement("section", {
              className: "assessment-counters flex-container my-15 flex-end primary-text"
            }, _react.default.createElement("div", null, texts.total, ": ", total, " / ", texts.correct, ": ", correct));
          }
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./views/student/activity/materials/multiple/index
      *****************************************************************/

      ims.set('./views/student/activity/materials/multiple/index', {
        hash: 2179020753,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceReport = void 0;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _context = require("../../../../context");
          var _empty = require("../empty");
          var _counters = require("./counters");
          var _questions = require("./questions");
          /*bundle*/
          const MultipleChoiceReport = ({
            item
          }) => {
            const {
              store,
              texts
            } = (0, _context.useDashboardContext)();
            const [counters, setCounters] = _react.default.useState({});
            (0, _hooks.useBinder)([store], () => {
              setCounters({
                ...item.counters
              });
            });
            if (!item.data) {
              return _react.default.createElement(_empty.EmptyMaterial, {
                message: texts.activities.empty
              });
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_counters.Counters, {
              item: item
            }), _react.default.createElement(_questions.AssessmentQuestions, {
              item: item,
              showAnswers: true
            }));
          };
          exports.MultipleChoiceReport = MultipleChoiceReport;
        }
      });

      /******************************************************************
      INTERNAL MODULE: ./views/student/activity/materials/multiple/option
      ******************************************************************/

      ims.set('./views/student/activity/materials/multiple/option', {
        hash: 3009204594,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemOption = ItemOption;
          var _react = require("react");
          function ItemOption({
            option,
            i,
            data,
            showAnswers,
            question
          }) {
            let cls = `option-item${data.answer === i ? ' option--selected' : ''} `;
            if (data.answer === i) cls += `option${data.accuracy ? ' option--correct' : ' option--wrong'}`;
            if (showAnswers && i === question.correctAnswer) cls += ' option--correct';
            return _react.default.createElement("div", {
              key: option,
              className: cls
            }, _react.default.createElement("span", null, option));
          }
        }
      });

      /*********************************************************************
      INTERNAL MODULE: ./views/student/activity/materials/multiple/questions
      *********************************************************************/

      ims.set('./views/student/activity/materials/multiple/questions', {
        hash: 586202807,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssessmentQuestions = void 0;
          var _react = require("react");
          var _option = require("./option");
          /*bundle*/
          const AssessmentQuestions = ({
            item,
            showAnswers
          }) => {
            const {
              data
            } = item;
            const responses = data.responses ?? [];
            const output = item.assessment.questions.map((question, index) => {
              const data = (responses && responses[index]) ?? {};
              const options = question.options.map((option, i) => {
                const attrs = {
                  i,
                  data,
                  question,
                  option,
                  showAnswers
                };
                return _react.default.createElement(_option.ItemOption, {
                  key: `question.${i}.option.${index}`,
                  ...attrs
                });
              });
              return _react.default.createElement("div", {
                key: question.question,
                className: "question__container question__container--results"
              }, _react.default.createElement("h5", null, question.question), options);
            });
            return _react.default.createElement(_react.default.Fragment, null, output);
          };
          exports.AssessmentQuestions = AssessmentQuestions;
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./views/student/activity/materials/spoken/index
      ***************************************************************/

      ims.set('./views/student/activity/materials/spoken/index', {
        hash: 3220261501,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenAnalysis = SpokenAnalysis;
          var _react = require("react");
          var _config = require("@aimpact/ailearn-app/config");
          var _list = require("pragmate-ui/list");
          var _context = require("../../../../context");
          var _empty = require("../empty");
          var _item = require("./item");
          function SpokenAnalysis({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useDashboardContext)();
            if (!item.data) return _react.default.createElement(_empty.EmptyMaterial, {
              message: texts.activities.empty
            });
            const elements = Object.keys(item.data).map(key => item.data[key]);
            const audioUrl = `${_config.default.params.apis.ailearn}/assignments/${store.model.assignmentId}/activities/${item.id}/tracking/${store.userId}/audio`;
            return _react.default.createElement("div", {
              className: "assessment-analysis__container"
            }, _react.default.createElement("h4", null, texts.assessments.title), _react.default.createElement("p", {
              className: "p2"
            }, texts.assessments.oralText), _react.default.createElement("div", {
              className: "flex-container flex-space-between flex-vertical-center"
            }, _react.default.createElement("h4", null, texts.studentAudio), _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: audioUrl
            }), "Your browser does not support the audio element."))), _react.default.createElement(_list.List, {
              container: "div",
              items: elements,
              control: _item.SpokenItem
            }));
          }
        }
      });

      /**************************************************************
      INTERNAL MODULE: ./views/student/activity/materials/spoken/item
      **************************************************************/

      ims.set('./views/student/activity/materials/spoken/item', {
        hash: 419659886,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenItem = void 0;
          var _react = require("react");
          const SpokenItem = ({
            data
          }) => {
            const item = data;
            return _react.default.createElement("article", {
              className: "assessment__analysis-item"
            }, _react.default.createElement("section", {
              className: "item__icon__container"
            }, _react.default.createElement("span", null, item.icon)), _react.default.createElement("section", null, _react.default.createElement("header", null, _react.default.createElement("h5", null, item.name)), _react.default.createElement("p", {
              className: "p2"
            }, item.feedback)));
          };
          exports.SpokenItem = SpokenItem;
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/student/activity/select/index
      *****************************************************/

      ims.set('./views/student/activity/select/index', {
        hash: 243617906,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySelect = ActivitySelect;
          var _react = require("react");
          var _dropdown = require("pragmate-ui/dropdown");
          var _toggle = require("./toggle");
          var _context = require("../../../context");
          var _item = require("./item");
          function ActivitySelect({
            activity,
            setActivity
          }) {
            const {
              store
            } = (0, _context.useDashboardContext)();
            const [selected, setSelected] = _react.default.useState(activity.id);
            const items = store.model.activities.items.filter(activity => activity.id !== selected).map(activity => {
              return _react.default.createElement(_item.ActivitySelectItem, {
                key: activity.id,
                activity: activity,
                setSelected: setActivity
              });
            });
            return _react.default.createElement(_dropdown.Dropdown, {
              className: "dropdown-menu"
            }, _react.default.createElement(_dropdown.DropdownToggle, null, _react.default.createElement(_toggle.ToggleOption, {
              as: "div",
              id: selected,
              key: `${selected}-toggle`
            })), _react.default.createElement(_dropdown.DropdownMenu, null, items));
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/student/activity/select/item
      ****************************************************/

      ims.set('./views/student/activity/select/item', {
        hash: 1090987499,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySelectItem = ActivitySelectItem;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _dropdown = require("pragmate-ui/dropdown");
          var _context = require("../../../context");
          function ActivitySelectItem({
            setSelected,
            activity,
            as = _dropdown.DropdownItem
          }) {
            const {
              store,
              texts
            } = (0, _context.useDashboardContext)();
            const iconCls = `icon-select  icon--${activity.type}`;
            const Control = as;
            const onClick = event => {
              event.preventDefault();
              setSelected(activity);
            };
            return _react.default.createElement(Control, {
              className: "select-dropdown",
              onClick: onClick
            }, _react.default.createElement("div", {
              className: "dropdown-toggle__content"
            }, _react.default.createElement("section", {
              className: iconCls
            }, _react.default.createElement(_icons.AppIcon, {
              className: "icon-select",
              icon: activity.type
            })), _react.default.createElement("div", null, _react.default.createElement("h6", null, activity.title), _react.default.createElement("span", null, texts.activities.types[activity.type]))));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/student/activity/select/toggle
      ******************************************************/

      ims.set('./views/student/activity/select/toggle', {
        hash: 2790039332,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ToggleOption = ToggleOption;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _dropdown = require("pragmate-ui/dropdown");
          var _context = require("../../../context");
          function ToggleOption({
            id,
            as = _dropdown.DropdownItem
          }) {
            const {
              store,
              texts
            } = (0, _context.useDashboardContext)();
            const activity = store.model.activities.get(id);
            if (!activity) return null;
            const iconCls = `icon-select  icon--${activity.type}`;
            const Control = as;
            if (!activity) {
              console.warn('Activity not found', id);
              return null;
            }
            return _react.default.createElement(Control, {
              className: "select-dropdown"
            }, _react.default.createElement("div", {
              className: "dropdown-toggle__content"
            }, _react.default.createElement("section", {
              className: iconCls
            }, _react.default.createElement(_icons.AppIcon, {
              className: "icon-select",
              icon: activity.type
            })), _react.default.createElement("div", null, _react.default.createElement("h6", null, activity.title), _react.default.createElement("span", null, texts.activities.types[activity.type]))), _react.default.createElement(_icons.AppIcon, {
              icon: "arrowDropDown"
            }));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./views/student/assignment/activity/alerts
      **********************************************************/

      ims.set('./views/student/assignment/activity/alerts', {
        hash: 2856495340,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityAlerts = ActivityAlerts;
          var React = require("react");
          var _list = require("pragmate-ui/list");
          var _collapsible = require("pragmate-ui/collapsible");
          var _context = require("../../../context");
          /*bundle*/
          function ActivityAlerts({
            participantActivity
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            if (!participantActivity?.alerts?.length) return null;
            const Item = ({
              item
            }) => {
              return React.createElement("article", {
                className: "ds-drawer__activity-item"
              }, React.createElement(_collapsible.CollapsibleContainer, null, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("span", null, item.text)), React.createElement(_collapsible.CollapsibleContent, null, React.createElement("div", {
                className: "alert-item"
              }, React.createElement("h6", null, "RVD AI"), React.createElement("div", null, item.iteration.assistant), React.createElement("h6", null, "Student"), React.createElement("div", null, item.iteration.student)))));
            };
            return React.createElement(React.Fragment, null, React.createElement("section", {
              className: "alerts__container"
            }, React.createElement("header", null, React.createElement("h6", null, texts.alerts, " ", React.createElement("span", null, "(", participantActivity?.alerts?.length, ")"))), React.createElement(_list.List, {
              as: "div",
              items: participantActivity?.alerts,
              control: Item
            })));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./views/student/assignment/activity/index
      *********************************************************/

      ims.set('./views/student/assignment/activity/index', {
        hash: 5616741,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivity = StudentAssignmentActivity;
          var React = require("react");
          var _objective = require("./objective");
          var _list = require("pragmate-ui/list");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../../../context");
          var _collapsible = require("pragmate-ui/collapsible");
          var _components = require("pragmate-ui/components");
          var _alerts = require("./alerts");
          function StudentAssignmentActivity({
            item,
            index
          }) {
            const {
              texts,
              store
            } = (0, _context.useDashboardContext)();
            const [isDragging, setIsDragging] = React.useState(index === 0);
            const onToggle = () => {
              setIsDragging(!isDragging);
            };
            const onNavigate = event => {
              event.preventDefault();
              return false;
            };
            return React.createElement("article", {
              className: "ds-drawer__activity-item"
            }, React.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle,
              open: isDragging
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("header", {
              className: "activity__header"
            }, React.createElement("section", {
              className: "activity-header__container"
            }, React.createElement("picture", {
              className: `activity-type__icon activity--${item.activity.type}`
            }, React.createElement(_icons.AppIcon, {
              icon: _icons.ICONS[item.activity.type]
            })), React.createElement("div", null, React.createElement("h5", null, item.activity.title), React.createElement("span", null, texts.activities.types[item.activity.type]))), React.createElement(_components.Link, {
              onClick: onNavigate,
              className: "activity-messages-count"
            }, "(mensajes ", item.messages.count, ")"))), React.createElement(_collapsible.CollapsibleContent, null, React.createElement(React.Fragment, null, React.createElement(_alerts.ActivityAlerts, {
              participantActivity: item
            }), React.createElement("h4", {
              className: "mt-30"
            }, texts.activities.summary), React.createElement("p", null, item.synthesis), React.createElement("h4", {
              className: "mb-30"
            }, texts.activities.progres), React.createElement(_list.List, {
              className: "unstyled-list activity__users-list",
              items: item.progress.objectives,
              control: _objective.StudentAssignmentActivityObjective
            })))));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/student/assignment/activity/objective
      *************************************************************/

      ims.set('./views/student/assignment/activity/objective', {
        hash: 1653994816,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityObjective = StudentAssignmentActivityObjective;
          var React = require("react");
          function StudentAssignmentActivityObjective({
            item
          }) {
            const {
              name,
              analysis,
              status
            } = item;
            return React.createElement("div", null, React.createElement("header", {
              className: "assigment-activity-objective__header"
            }, React.createElement("h6", null, name), React.createElement("div", null, React.createElement("div", {
              className: "status__container"
            }, React.createElement("span", null, status.icon), React.createElement("span", null, status.text)))), React.createElement("p", null, analysis));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/student/assignment/index
      ************************************************/

      ims.set('./views/student/assignment/index', {
        hash: 2271588596,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentSummary = StudentAssignmentSummary;
          var React = require("react");
          var Drawer = require("pragmate-ui/drawer");
          var _list = require("pragmate-ui/list");
          var _activity = require("./activity");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../../context");
          function StudentAssignmentSummary({
            item
          }) {
            const {
              store
            } = (0, _context.useDashboardContext)();
            const {
              user: student
            } = item;
            const [items, setItems] = React.useState(item.activities.items);
            const [fetching, setFetching] = React.useState(false);
            const onRefresh = () => {
              setFetching(true);
              store.refreshDrawer().finally(() => {
                setFetching(false);
                setItems([...item.activities.items]);
              });
            };
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("h2", null, student.name), React.createElement("div", null, React.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle",
              onClick: onRefresh
            }), React.createElement(Drawer.CloseButton, null)))), React.createElement("section", {
              className: "ds-drawer__content"
            }, React.createElement(_list.List, {
              className: "assignment-activity-list",
              items: items,
              control: _activity.StudentAssignmentActivity
            })));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/user-data
      *********************************/

      ims.set('./views/user-data', {
        hash: 3896593591,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = UserData;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          function UserData({
            label,
            data: {
              photoUrl,
              name
            }
          }) {
            return React.createElement("div", {
              className: "user-data__section"
            }, React.createElement("h6", {
              className: "user-data__label"
            }, label), React.createElement("section", {
              className: "user-data__detail"
            }, React.createElement(_image.Image, {
              className: "user-data__img",
              src: photoUrl
            }), React.createElement("span", {
              className: "user-data__name"
            }, name)));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/views/activity/index
      ********************************************/

      ims.set('./views/views/activity/index', {
        hash: 1426086405,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityView = ActivityView;
          var _config = require("@aimpact/ailearn-app/config");
          var _react = require("react");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          var _list = require("pragmate-ui/list");
          var _participant = require("./participant");
          var _empty = require("pragmate-ui/empty");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          const APPNAME = _config.default?.params?.APP_NAME ?? 'RVD.AI';
          /*bundle*/
          function ActivityView() {
            const {
              store
            } = (0, _context.useDashboardContext)();
            const {
              activitySelected: activity
            } = store;
            const [updated, setUpdated] = _react.default.useState({});
            (0, _hooks.useBinder)([store], () => setUpdated(store.activitySelected), 'data.updated');
            const onClose = () => {
              store.selectActivity(null);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: `activity-header bg-activity--${activity.type}`
            }, _react.default.createElement("div", null, _react.default.createElement("h4", null, activity.title, " ")), _react.default.createElement("div", {
              className: "close-icon"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "close",
              title: "Close",
              onClick: onClose
            }))), activity.participants.length ? _react.default.createElement(_list.List, {
              className: "activity-users__list",
              items: activity.participants,
              control: _participant.ActivityParticipant
            }) : _react.default.createElement(_empty.Empty, {
              text: 'No participants found'
            }));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/views/activity/participant
      **************************************************/

      ims.set('./views/views/activity/participant', {
        hash: 1739209237,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityParticipant = ActivityParticipant;
          var _config = require("@aimpact/ailearn-app/config");
          var _react = require("react");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _list = require("pragmate-ui/list");
          var _objective = require("../../student/assignment/activity/objective");
          const APPNAME = _config.default?.params?.APP_NAME ?? 'RVD.AI';
          /*bundle*/
          function ActivityParticipant({
            item
          }) {
            const {
              store
            } = (0, _context.useDashboardContext)();
            const {
              activitySelected: activity
            } = store;
            const data = item.activities.get(activity.id);
            if (!data) {
              console.warn(`the user ${item.user.name} has not participate on activity`, item);
              return null;
            }
            const onClose = () => {
              store.selectActivity(null);
            };
            const user = item.user;
            return _react.default.createElement("div", {
              className: "activity-participant"
            }, _react.default.createElement("section", {
              className: "col"
            }, _react.default.createElement(_ui.UserData, {
              data: item.user
            })), _react.default.createElement("section", null, _react.default.createElement(_list.List, {
              items: data.progress.objectives,
              control: _objective.StudentAssignmentActivityObjective
            })));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/views/general
      *************************************/

      ims.set('./views/views/general', {
        hash: 4110800493,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GeneralView = GeneralView;
          var _config = require("@aimpact/ailearn-app/config");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _charts = require("../charts");
          var _context = require("../context");
          var _item = require("../list/item");
          const APPNAME = _config.default?.params?.APP_NAME ?? 'RVD.AI';
          /*bundle*/
          function GeneralView() {
            const {
              store
            } = (0, _context.useDashboardContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_charts.Charts, {
              data: store.model.participants
            }), _react.default.createElement("div", {
              className: "dashboard__list"
            }, _react.default.createElement(_list.List, {
              className: "list-unstyled users__list",
              items: store.model.participants.items,
              control: _item.Item
            })));
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
      }, {
        "im": "./views/student/activity/alerts",
        "from": "ActivityAlerts",
        "name": "ActivityAlerts"
      }, {
        "im": "./views/student/activity/content",
        "from": "DetailActivityBody",
        "name": "DetailActivityBody"
      }, {
        "im": "./views/student/activity/index",
        "from": "DetailActivity",
        "name": "DetailActivity"
      }, {
        "im": "./views/student/activity/materials/multiple/index",
        "from": "MultipleChoiceReport",
        "name": "MultipleChoiceReport"
      }, {
        "im": "./views/student/activity/materials/multiple/questions",
        "from": "AssessmentQuestions",
        "name": "AssessmentQuestions"
      }, {
        "im": "./views/student/assignment/activity/alerts",
        "from": "ActivityAlerts",
        "name": "ActivityAlerts"
      }, {
        "im": "./views/views/activity/index",
        "from": "ActivityView",
        "name": "ActivityView"
      }, {
        "im": "./views/views/activity/participant",
        "from": "ActivityParticipant",
        "name": "ActivityParticipant"
      }, {
        "im": "./views/views/general",
        "from": "GeneralView",
        "name": "GeneralView"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'ActivityAlerts') && _export("ActivityAlerts", ActivityAlerts = require ? require('./views/student/activity/alerts').ActivityAlerts : value);
        (require || prop === 'DetailActivityBody') && _export("DetailActivityBody", DetailActivityBody = require ? require('./views/student/activity/content').DetailActivityBody : value);
        (require || prop === 'DetailActivity') && _export("DetailActivity", DetailActivity = require ? require('./views/student/activity/index').DetailActivity : value);
        (require || prop === 'MultipleChoiceReport') && _export("MultipleChoiceReport", MultipleChoiceReport = require ? require('./views/student/activity/materials/multiple/index').MultipleChoiceReport : value);
        (require || prop === 'AssessmentQuestions') && _export("AssessmentQuestions", AssessmentQuestions = require ? require('./views/student/activity/materials/multiple/questions').AssessmentQuestions : value);
        (require || prop === 'ActivityAlerts') && _export("ActivityAlerts", ActivityAlerts = require ? require('./views/student/assignment/activity/alerts').ActivityAlerts : value);
        (require || prop === 'ActivityView') && _export("ActivityView", ActivityView = require ? require('./views/views/activity/index').ActivityView : value);
        (require || prop === 'ActivityParticipant') && _export("ActivityParticipant", ActivityParticipant = require ? require('./views/views/activity/participant').ActivityParticipant : value);
        (require || prop === 'GeneralView') && _export("GeneralView", GeneralView = require ? require('./views/views/general').GeneralView : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJQYXJ0aWNpcGFudEFjdGl2aXRpZXMiLCJwYXJlbnQiLCJhY3Rpdml0eSIsIlBhcnRpY2lwYW50QWN0aXZpdHkiLCJQYXJ0aWNpcGFudCIsIml0ZW0iLCJfcGFydGljaXBhbnQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsMiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl90cmFja2luZyIsImlzU3RvcmUiLCJ0cmFja2luZyIsImFjdGl2aXR5U2VsZWN0ZWQiLCJjdXJyZW50VHJhY2tpbmciLCJzZXNzaW9uIiwidmlldyIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsInNwZWNpZmllciIsInVzZXJzIiwidHJhY2tpbmdzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJzZXRNb2RlbCIsImZldGNoaW5nIiwibSIsImUiLCJsb2FkVXNlclRyYWNraW5nIiwidXNlcklkIiwiVHJhY2tpbmciLCJjaGF0IiwiY29uc29sZSIsInJlZnJlc2giLCJ0cmlnZ2VyIiwicmVmcmVzaERyYXdlciIsInNlbGVjdEFjdGl2aXR5IiwiX3JlYWN0IiwiTm90Rm91bmQiLCJjb2RlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX211bHRpcGxlIiwiX3Nwb2tlbiIsIkNoYXJ0cyIsImNsYXNzTmFtZSIsIk11bHRpcGxlQ2hhcnQiLCJTcG9rZW5DaGFydCIsIl9jaGFydHMiLCJfY29udGV4dCIsIl9zZXR0aW5ncyIsInVzZURhc2hib2FyZENvbnRleHQiLCJpbmRleCIsImN1cnJlbnQiLCJjb3VudE9iamVjdHNXaXRob3V0VXNlTXVsdGlwbGUiLCJoYXNOb25aZXJvQ291bnQiLCJ2YWx1ZXMiLCJzb21lIiwiY291bnRlcnMiLCJ0b3RhbCIsInVuZGVmaW5lZCIsImNvcnJlY3QiLCJ3cm9uZyIsImRpZmYiLCJDaGFydCIsIm9wdGlvbnMiLCJzZXJpZXMiLCJsYWJlbHMiLCJwYXJ0aWNpcGF0aW9uIiwicGVuZGluZyIsIkNIQVJUX0JBU0VfU1BFQ1MiLCJyZXNwb25zaXZlIiwiUkVTUE9OU0lWRV9CQVNFX1NQRUNTIiwidGhlbWUiLCJwYWxldHRlIiwibGVnZW5kIiwicG9zaXRpb24iLCJob3Jpem9udGFsQWxpZ24iLCJjaGFydCIsImhlaWdodCIsImRhdGFMYWJlbHMiLCJmb3JtYXR0ZXIiLCJzZXJpZXNJbmRleCIsInciLCJjb25maWciLCJicmVha3BvaW50Iiwid2lkdGgiLCJzcG9rZW5JZCIsImZpbmQiLCJrZXkiLCJzcG9rZW4iLCJEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfZHJhd2VyIiwiX2NvbXBvbmVudHMiLCJfYXNzaWdubWVudCIsIl9wZXJmZWN0U2Nyb2xsYmFyIiwiX3dhbGwiLCJBc2lkZURyYXdlciIsInNob3dEcmF3ZXIiLCJzZXRTaG93RHJhd2VyIiwiRHJhd2VyIiwib3BlbiIsIm9uQ2xvc2UiLCJTY3JvbGxDb250YWluZXIiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIndhbGwiLCJXYWxsIiwiRGV0YWlsQWN0aXZpdHkiLCJzdHVkZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRTdW1tYXJ5IiwiUmVhY3QiLCJzZXRJdGVtcyIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJvblJlZnJlc2giLCJmaW5hbGx5IiwiY2xzIiwiQ2xvc2VCdXR0b24iLCJfaWNvbnMiLCJfdWkiLCJfZW1wdHkiLCJBUFAiLCJBUFBfTkFNRSIsIkVtcHR5IiwiUGFnZUNvbnRhaW5lciIsIklDT05TIiwiY2xhc3N3b3JrcyIsImVtcHR5IiwiX3VzZXJEYXRhIiwiSGVhZGVyIiwib3duZXIiLCJvbkNsaWNrIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJhbHQiLCJVc2VyRGF0YSIsImxhYmVsIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwiX2hvb2tzIiwiXyIsIl9hc2lkZURyYXdlciIsIl9oZWFkZXIiLCJfaGVhZGVyMiIsIl9nZW5lcmFsIiwiQVBQTkFNRSIsInNldFJlYWR5Iiwic2V0VmlldyIsInNldFRvdGFsUGFydGljaXBhbnRzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImdldFByb3BlcnRpZXMiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiUHJvdmlkZXIiLCJTdHVkZW50c0hlYWRlciIsInRlcm5hcnkiLCJmYWxzZSIsIkdlbmVyYWxWaWV3IiwidHJ1ZSIsIkFjdGl2aXR5VmlldyIsIl9pY29uczIiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJJY29uQnV0dG9uIiwiX2Zvcm0iLCJfbGlzdCIsIl9hY3Rpdml0eUZpbHRlciIsImxpc3RDbHMiLCJyZWZyZXNoaW5nIiwic2V0UmVmcmVzaGluZyIsInN0b3BQcm9wYWdhdGlvbiIsInNldFRpbWVvdXQiLCJsaXN0Iiwic3R1ZGVudHMiLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwiTGlzdCIsImNvbnRyb2wiLCJkaXNhYmxlZCIsInZhcmlhbnQiLCJNb2R1bGVBY3Rpdml0eSIsImhhc1BhcnRpY2lwYXRlZCIsInBhcnRpY2lwYW50QWN0aXZpdHkiLCJvdXRwdXQiLCJzdWJ0eXBlIiwiaW5jbHVkZXMiLCJtZXNzYWdlQ291bnRlciIsInByZXZlbnREZWZhdWx0IiwiYWN0aXZpdHlJZCIsImljb25zIiwiYWxlcnRzIiwiSWNvbiIsIl9pbWFnZSIsIl91dGlscyIsImFjdGl2aXR5SXRlbXMiLCJwZXJjZW50aWxlIiwicGFydGljaXBhbnRVcmkiLCJ2aWV3U3R1ZGVudCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiSW1hZ2UiLCJMaW5rIiwiaHJlZiIsInBlcmNlbnRpbCIsImxpbWl0RGVjaW1hbHMiLCJfY29yZSIsIl90b29sdGlwIiwiU3Bva2VuRGF0YSIsImZhY2VzIiwiRmFjZXMiLCJUb29sdGlwIiwiY29udGVudCIsImhhc1Nwb2tlbiIsIl9jb2xsYXBzaWJsZSIsIkFjdGl2aXR5QWxlcnRzIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIml0ZXJhdGlvbiIsImFzc2lzdGFudCIsImFzIiwiX2Fzc2Vzc21lbnQiLCJfY2hhdCIsIl9zZWxlY3QiLCJfYWxlcnRzIiwiRGV0YWlsQWN0aXZpdHlCb2R5IiwiYXNzaWdubWVudEFjdGl2aXR5Iiwic2V0QWN0aXZpdHkiLCJBY3Rpdml0eVNlbGVjdCIsImNvbnZlcnNhdGlvbiIsIlVzZXJDaGF0IiwiZGViYXRlIiwiTWF0ZXJpYWxBc3Nlc3NtZW50IiwiYXNzZXNzbWVudCIsIlNwb2tlbkFuYWx5c2lzIiwiX2NvbnRlbnQiLCJ1c2VFZmZlY3QiLCJTcGlubmVyIiwiYWN0aXZlIiwiTXVsdGlwbGVDaG9pY2VSZXBvcnQiLCJfY2hhdENvbXBvbmVudCIsIl9lbXB0eUNoYXQiLCJjaGF0TW9kZWwiLCJFbXB0eU1hdGVyaWFsIiwiY2hhdElkIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsIkVtcHR5Q2hhdCIsIkFnZW50c0NoYXRQYW5lbCIsIl9tYXJrZG93biIsIkNvbXBldGVuY2llc0ZlZWRiYWNrIiwiTWFya2Rvd24iLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIm1lc3NhZ2UiLCJFbXB0eUNhcmQiLCJEZWZhdWx0TWF0ZXJpYWwiLCJDb3VudGVycyIsIl9jb3VudGVycyIsIl9xdWVzdGlvbnMiLCJzZXRDb3VudGVycyIsIkFzc2Vzc21lbnRRdWVzdGlvbnMiLCJzaG93QW5zd2VycyIsIkl0ZW1PcHRpb24iLCJvcHRpb24iLCJpIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJfb3B0aW9uIiwicmVzcG9uc2VzIiwicXVlc3Rpb25zIiwiYXR0cnMiLCJlbGVtZW50cyIsImF1ZGlvVXJsIiwiYXNzZXNzbWVudHMiLCJvcmFsVGV4dCIsInN0dWRlbnRBdWRpbyIsImNvbnRyb2xzIiwicHJlbG9hZCIsImNvbnRhaW5lciIsIlNwb2tlbkl0ZW0iLCJmZWVkYmFjayIsIl9kcm9wZG93biIsIl90b2dnbGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZmlsdGVyIiwiQWN0aXZpdHlTZWxlY3RJdGVtIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlRvZ2dsZU9wdGlvbiIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duSXRlbSIsImljb25DbHMiLCJDb250cm9sIiwiQXBwSWNvbiIsInR5cGVzIiwid2FybiIsIl9vYmplY3RpdmUiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5IiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJvblRvZ2dsZSIsIm9uTmF2aWdhdGUiLCJwcm9ncmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZSIsImFuYWx5c2lzIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJBY3Rpdml0eVBhcnRpY2lwYW50Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvREFUQS50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXRpZXMudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdHkudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudHMudHMiLCIvdHlwZXMudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvNDA0LnRzeCIsIi90cy92aWV3cy9jaGFydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9tdWx0aXBsZS50c3giLCIvdHMvdmlld3MvY2hhcnRzL3NldHRpbmdzLnRzeCIsIi90cy92aWV3cy9jaGFydHMvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RyYXdlci9hc2lkZS1kcmF3ZXIudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9jb250ZW50LnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvd2FsbC50c3giLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9oZWFkZXIvYWN0aXZpdHktZmlsdGVyLnRzeCIsIi90cy92aWV3cy9saXN0L2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9zcG9rZW4udHN4IiwiL2FjdGl0aXR5LXR5cGVzLnRzIiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvYWxlcnRzLnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL2Fzc2Vzc21lbnQudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL2NoYXQudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvZW1wdHktY2hhdC50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9tdWx0aXBsZS9jb3VudGVycy50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvbXVsdGlwbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL211bHRpcGxlL29wdGlvbi50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvbXVsdGlwbGUvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL3Nwb2tlbi9pdGVtLnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L3NlbGVjdC9pbmRleC50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9zZWxlY3QvaXRlbS50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9zZWxlY3QvdG9nZ2xlLnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2Fzc2lnbm1lbnQvYWN0aXZpdHkvYWxlcnRzLnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2Fzc2lnbm1lbnQvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYXNzaWdubWVudC9hY3Rpdml0eS9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYXNzaWdubWVudC9pbmRleC50c3giLCIvdHMvdmlld3MvdXNlci1kYXRhLnRzeCIsIi90cy92aWV3cy92aWV3cy9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3Mvdmlld3MvYWN0aXZpdHkvcGFydGljaXBhbnQudHN4IiwiL3RzL3ZpZXdzL3ZpZXdzL2dlbmVyYWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLFlBQVks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