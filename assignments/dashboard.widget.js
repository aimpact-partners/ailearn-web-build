System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "@aimpact/ailearn-app@0.1.13/components/ui", "@aimpact/ailearn-app@0.1.13/components/navbar-header.code", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/config", "pragmate-ui@1.0.0-beta.6/empty", "@aimpact/ailearn-app@0.1.13/shared/charts", "pragmate-ui@1.0.0-beta.6/drawer", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/perfect-scrollbar", "@aimpact/ailearn-app@0.1.13/components/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/chips", "pragmate-ui@1.0.0-beta.6/image", "@aimpact/ailearn-app@0.1.13/utils", "pragmate-ui@1.0.0-beta.6/tooltip", "pragmate-ui@1.0.0-beta.6/collapsible", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/dropdown"], function (_export, _context2) {
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
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp0113DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0113DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk100ReactiveEntitiesItem) {
      dependency_5 = _aimpactAilearnSdk100ReactiveEntitiesItem;
    }, function (_aimpactAilearnSdk100ReactiveModel) {
      dependency_6 = _aimpactAilearnSdk100ReactiveModel;
    }, function (_aimpactHttpSuite001Api) {
      dependency_7 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_8 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk130Session) {
      dependency_9 = _aimpactChatSdk130Session;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_10 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Texts) {
      dependency_11 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_12 = _aimpactAilearnSdk100Tracking;
    }, function (_react2) {
      dependency_13 = _react2;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_14 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_aimpactAilearnApp0113ComponentsNavbarHeaderCode) {
      dependency_15 = _aimpactAilearnApp0113ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_16 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp0113Config) {
      dependency_17 = _aimpactAilearnApp0113Config;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_18 = _pragmateUi100Beta6Empty;
    }, function (_aimpactAilearnApp0113SharedCharts) {
      dependency_19 = _aimpactAilearnApp0113SharedCharts;
    }, function (_pragmateUi100Beta6Drawer) {
      dependency_20 = _pragmateUi100Beta6Drawer;
    }, function (_pragmateUi100Beta6Components) {
      dependency_21 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6PerfectScrollbar) {
      dependency_22 = _pragmateUi100Beta6PerfectScrollbar;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_23 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_24 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6List) {
      dependency_25 = _pragmateUi100Beta6List;
    }, function (_pragmateUi100Beta6Form) {
      dependency_26 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Chips) {
      dependency_27 = _pragmateUi100Beta6Chips;
    }, function (_pragmateUi100Beta6Image) {
      dependency_28 = _pragmateUi100Beta6Image;
    }, function (_aimpactAilearnApp0113Utils) {
      dependency_29 = _aimpactAilearnApp0113Utils;
    }, function (_pragmateUi100Beta6Tooltip) {
      dependency_30 = _pragmateUi100Beta6Tooltip;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_31 = _pragmateUi100Beta6Collapsible;
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_32 = _aimpactChatSdk130ChatComponentCode;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_33 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6Dropdown) {
      dependency_34 = _pragmateUi100Beta6Dropdown;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_5], ['@aimpact/ailearn-sdk/reactive/model', dependency_6], ['@aimpact/http-suite/api', dependency_7], ['@aimpact/ailearn-sdk/config', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@aimpact/ailearn-sdk/tracking', dependency_12], ['react', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_15], ['pragmate-ui/icons', dependency_16], ['@aimpact/ailearn-app/config', dependency_17], ['pragmate-ui/empty', dependency_18], ['@aimpact/ailearn-app/shared/charts', dependency_19], ['pragmate-ui/drawer', dependency_20], ['pragmate-ui/components', dependency_21], ['pragmate-ui/perfect-scrollbar', dependency_22], ['@aimpact/ailearn-app/components/icons', dependency_23], ['@beyond-js/react-18-widgets/hooks', dependency_24], ['pragmate-ui/list', dependency_25], ['pragmate-ui/form', dependency_26], ['pragmate-ui/chips', dependency_27], ['pragmate-ui/image', dependency_28], ['@aimpact/ailearn-app/utils', dependency_29], ['pragmate-ui/tooltip', dependency_30], ['pragmate-ui/collapsible', dependency_31], ['@aimpact/chat-sdk/chat-component.code', dependency_32], ['@aimpact/chat-sdk/widgets/markdown', dependency_33], ['pragmate-ui/dropdown', dependency_34]]);
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
        hash: 2832010006,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivity = ModuleActivity;
          var _react = require("react");
          var _chips = require("pragmate-ui/chips");
          var _context = require("../../context");
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
            let type = hasParticipated ? 'success' : 'warning';
            const output = [];
            if (activity.type === 'assessment' && activity.subtype === 'multiple-choice' && data.data) {
              output.push(_react.default.createElement("span", null, item.data.counters.correct, " /", item.data.counters.total));
            }
            let label = hasParticipated ? 'Done' : 'Pending';
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
            return _react.default.createElement("li", {
              onClick: onClick,
              key: `${user.id}.${activity.id}`
            }, _react.default.createElement("span", null, activity.title), _react.default.createElement(_chips.Chip, {
              variant: type,
              className: `${type}-chip`
            }, label));
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
        hash: 2814465526,
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
              items: participantActivity.alerts,
              control: Item
            })));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/student/activity/content
      ************************************************/

      ims.set('./views/student/activity/content', {
        hash: 2265370745,
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
            }, React.createElement("span", null, React.createElement("strong", null, texts.type, ":"), " ", activity.type), activity.subtype && React.createElement("span", null, React.createElement("strong", null, texts.subtype, ":"), " ", activity.subtype)), React.createElement("section", {
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
        hash: 2611394882,
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
        hash: 432559208,
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
              store
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
            })), _react.default.createElement("span", null, activity.title)));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/student/activity/select/toggle
      ******************************************************/

      ims.set('./views/student/activity/select/toggle', {
        hash: 3358556226,
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
              store
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
            })), _react.default.createElement("span", null, activity.title)), _react.default.createElement(_icons.AppIcon, {
              icon: "arrowDropDown"
            }));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./views/student/assignment/activity/index
      *********************************************************/

      ims.set('./views/student/assignment/activity/index', {
        hash: 961721996,
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
          function StudentAssignmentActivity({
            item,
            index
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const [isDragging, setIsDragging] = React.useState(index === 0);
            const onToggle = () => {
              setIsDragging(!isDragging);
            };
            return React.createElement("article", {
              className: "ds-drawer__activity-item"
            }, React.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle,
              open: isDragging
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("header", {
              className: "activity__header"
            }, React.createElement("picture", {
              className: `activity-type__icon activity--${item.activity.type}`
            }, React.createElement(_icons.AppIcon, {
              icon: _icons.ICONS[item.activity.type]
            })), React.createElement("div", null, React.createElement("h5", null, item.activity.title), React.createElement("span", null, texts.activities.types[item.activity.type])))), React.createElement(_collapsible.CollapsibleContent, null, React.createElement(React.Fragment, null, React.createElement("h4", {
              className: "mt-30"
            }, texts.activities.summary), React.createElement("h6", null, item.name, " "), React.createElement("p", null, item.synthesis), React.createElement("h4", {
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
        hash: 1234310929,
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
            }, React.createElement("h6", null, name), React.createElement("div", {
              className: "status__container"
            }, React.createElement("span", null, status.icon), React.createElement("span", null, status.name))), React.createElement("p", null, analysis));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/student/assignment/index
      ************************************************/

      ims.set('./views/student/assignment/index', {
        hash: 1244524683,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJQYXJ0aWNpcGFudEFjdGl2aXRpZXMiLCJwYXJlbnQiLCJhY3Rpdml0eSIsIlBhcnRpY2lwYW50QWN0aXZpdHkiLCJQYXJ0aWNpcGFudCIsIml0ZW0iLCJfcGFydGljaXBhbnQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsMiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl90cmFja2luZyIsImlzU3RvcmUiLCJ0cmFja2luZyIsImFjdGl2aXR5U2VsZWN0ZWQiLCJjdXJyZW50VHJhY2tpbmciLCJzZXNzaW9uIiwidmlldyIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsInNwZWNpZmllciIsInVzZXJzIiwidHJhY2tpbmdzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJzZXRNb2RlbCIsImZldGNoaW5nIiwibSIsImUiLCJsb2FkVXNlclRyYWNraW5nIiwidXNlcklkIiwiVHJhY2tpbmciLCJjaGF0IiwiY29uc29sZSIsInJlZnJlc2giLCJ0cmlnZ2VyIiwicmVmcmVzaERyYXdlciIsInNlbGVjdEFjdGl2aXR5IiwiX3JlYWN0IiwiTm90Rm91bmQiLCJjb2RlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX211bHRpcGxlIiwiX3Nwb2tlbiIsIkNoYXJ0cyIsImNsYXNzTmFtZSIsIk11bHRpcGxlQ2hhcnQiLCJTcG9rZW5DaGFydCIsIl9jaGFydHMiLCJfY29udGV4dCIsIl9zZXR0aW5ncyIsInVzZURhc2hib2FyZENvbnRleHQiLCJpbmRleCIsImN1cnJlbnQiLCJjb3VudE9iamVjdHNXaXRob3V0VXNlTXVsdGlwbGUiLCJoYXNOb25aZXJvQ291bnQiLCJ2YWx1ZXMiLCJzb21lIiwiY291bnRlcnMiLCJ0b3RhbCIsInVuZGVmaW5lZCIsImNvcnJlY3QiLCJ3cm9uZyIsImRpZmYiLCJDaGFydCIsIm9wdGlvbnMiLCJzZXJpZXMiLCJsYWJlbHMiLCJwYXJ0aWNpcGF0aW9uIiwicGVuZGluZyIsIkNIQVJUX0JBU0VfU1BFQ1MiLCJyZXNwb25zaXZlIiwiUkVTUE9OU0lWRV9CQVNFX1NQRUNTIiwidGhlbWUiLCJwYWxldHRlIiwibGVnZW5kIiwicG9zaXRpb24iLCJob3Jpem9udGFsQWxpZ24iLCJjaGFydCIsImhlaWdodCIsImRhdGFMYWJlbHMiLCJmb3JtYXR0ZXIiLCJzZXJpZXNJbmRleCIsInciLCJjb25maWciLCJicmVha3BvaW50Iiwid2lkdGgiLCJzcG9rZW5JZCIsImZpbmQiLCJrZXkiLCJzcG9rZW4iLCJEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfZHJhd2VyIiwiX2NvbXBvbmVudHMiLCJfYXNzaWdubWVudCIsIl9wZXJmZWN0U2Nyb2xsYmFyIiwiX3dhbGwiLCJBc2lkZURyYXdlciIsInNob3dEcmF3ZXIiLCJzZXRTaG93RHJhd2VyIiwiRHJhd2VyIiwib3BlbiIsIm9uQ2xvc2UiLCJTY3JvbGxDb250YWluZXIiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIndhbGwiLCJXYWxsIiwiRGV0YWlsQWN0aXZpdHkiLCJzdHVkZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRTdW1tYXJ5IiwiUmVhY3QiLCJzZXRJdGVtcyIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJvblJlZnJlc2giLCJmaW5hbGx5IiwiY2xzIiwiQ2xvc2VCdXR0b24iLCJfaWNvbnMiLCJfdWkiLCJfZW1wdHkiLCJBUFAiLCJBUFBfTkFNRSIsIkVtcHR5IiwiUGFnZUNvbnRhaW5lciIsIklDT05TIiwiY2xhc3N3b3JrcyIsImVtcHR5IiwiX3VzZXJEYXRhIiwiSGVhZGVyIiwib3duZXIiLCJvbkNsaWNrIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJhbHQiLCJVc2VyRGF0YSIsImxhYmVsIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwiX2hvb2tzIiwiXyIsIl9hc2lkZURyYXdlciIsIl9oZWFkZXIiLCJfaGVhZGVyMiIsIl9nZW5lcmFsIiwiQVBQTkFNRSIsInNldFJlYWR5Iiwic2V0VmlldyIsInNldFRvdGFsUGFydGljaXBhbnRzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImdldFByb3BlcnRpZXMiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiUHJvdmlkZXIiLCJTdHVkZW50c0hlYWRlciIsInRlcm5hcnkiLCJmYWxzZSIsIkdlbmVyYWxWaWV3IiwidHJ1ZSIsIkFjdGl2aXR5VmlldyIsIl9pY29uczIiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJJY29uQnV0dG9uIiwiX2Zvcm0iLCJfbGlzdCIsIl9hY3Rpdml0eUZpbHRlciIsImxpc3RDbHMiLCJyZWZyZXNoaW5nIiwic2V0UmVmcmVzaGluZyIsInN0b3BQcm9wYWdhdGlvbiIsInNldFRpbWVvdXQiLCJsaXN0Iiwic3R1ZGVudHMiLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwiTGlzdCIsImNvbnRyb2wiLCJkaXNhYmxlZCIsInZhcmlhbnQiLCJfY2hpcHMiLCJNb2R1bGVBY3Rpdml0eSIsImhhc1BhcnRpY2lwYXRlZCIsIm91dHB1dCIsInN1YnR5cGUiLCJtZXNzYWdlQ291bnRlciIsInByZXZlbnREZWZhdWx0IiwiYWN0aXZpdHlJZCIsIkNoaXAiLCJfaW1hZ2UiLCJfdXRpbHMiLCJhY3Rpdml0eUl0ZW1zIiwicGVyY2VudGlsZSIsInBhcnRpY2lwYW50VXJpIiwidmlld1N0dWRlbnQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIkltYWdlIiwiTGluayIsImhyZWYiLCJwZXJjZW50aWwiLCJsaW1pdERlY2ltYWxzIiwiX2NvcmUiLCJfdG9vbHRpcCIsIlNwb2tlbkRhdGEiLCJmYWNlcyIsIkZhY2VzIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJoYXNTcG9rZW4iLCJfY29sbGFwc2libGUiLCJBY3Rpdml0eUFsZXJ0cyIsInBhcnRpY2lwYW50QWN0aXZpdHkiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiaXRlcmF0aW9uIiwiYXNzaXN0YW50IiwiYWxlcnRzIiwiYXMiLCJfYXNzZXNzbWVudCIsIl9jaGF0IiwiX3NlbGVjdCIsIl9hbGVydHMiLCJEZXRhaWxBY3Rpdml0eUJvZHkiLCJhc3NpZ25tZW50QWN0aXZpdHkiLCJzZXRBY3Rpdml0eSIsIkFjdGl2aXR5U2VsZWN0IiwiY29udmVyc2F0aW9uIiwiVXNlckNoYXQiLCJkZWJhdGUiLCJNYXRlcmlhbEFzc2Vzc21lbnQiLCJhc3Nlc3NtZW50IiwiU3Bva2VuQW5hbHlzaXMiLCJfY29udGVudCIsInVzZUVmZmVjdCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJNdWx0aXBsZUNob2ljZVJlcG9ydCIsIl9jaGF0Q29tcG9uZW50IiwiX2VtcHR5Q2hhdCIsImNoYXRNb2RlbCIsIkVtcHR5TWF0ZXJpYWwiLCJjaGF0SWQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiRW1wdHlDaGF0IiwiQWdlbnRzQ2hhdFBhbmVsIiwiX21hcmtkb3duIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJNYXJrZG93biIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwibWVzc2FnZSIsIkVtcHR5Q2FyZCIsIkRlZmF1bHRNYXRlcmlhbCIsIkNvdW50ZXJzIiwiX2NvdW50ZXJzIiwiX3F1ZXN0aW9ucyIsInNldENvdW50ZXJzIiwiQXNzZXNzbWVudFF1ZXN0aW9ucyIsInNob3dBbnN3ZXJzIiwiSXRlbU9wdGlvbiIsIm9wdGlvbiIsImkiLCJxdWVzdGlvbiIsImFuc3dlciIsImFjY3VyYWN5IiwiY29ycmVjdEFuc3dlciIsIl9vcHRpb24iLCJyZXNwb25zZXMiLCJxdWVzdGlvbnMiLCJhdHRycyIsImVsZW1lbnRzIiwiYXVkaW9VcmwiLCJhc3Nlc3NtZW50cyIsIm9yYWxUZXh0Iiwic3R1ZGVudEF1ZGlvIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiY29udGFpbmVyIiwiU3Bva2VuSXRlbSIsImZlZWRiYWNrIiwiX2Ryb3Bkb3duIiwiX3RvZ2dsZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJmaWx0ZXIiLCJBY3Rpdml0eVNlbGVjdEl0ZW0iLCJEcm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiVG9nZ2xlT3B0aW9uIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25JdGVtIiwiaWNvbkNscyIsIkNvbnRyb2wiLCJBcHBJY29uIiwid2FybiIsIl9vYmplY3RpdmUiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5IiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJvblRvZ2dsZSIsInR5cGVzIiwicHJvZ3JlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlPYmplY3RpdmUiLCJhbmFseXNpcyIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsL0RBVEEudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0aWVzLnRzIiwiL3RzL21vZGVsL2FjdGl2aXRpZXMvYWN0aXZpdHkudHMiLCIvdHMvbW9kZWwvaW5kZXgudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXR5LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvcGFydGljaXBhbnRzLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvY2hhcnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGFydHMvbXVsdGlwbGUudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9zZXR0aW5ncy50c3giLCIvdHMvdmlld3MvY2hhcnRzL3Nwb2tlbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kcmF3ZXIvYXNpZGUtZHJhd2VyLnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvY29udGVudC50c3giLCIvdHMvdmlld3MvZHJhd2VyL3dhbGwudHN4IiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaGVhZGVyL2FjdGl2aXR5LWZpbHRlci50c3giLCIvdHMvdmlld3MvbGlzdC9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9hY3Rpdml0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vc3Bva2VuLnRzeCIsIi9hY3RpdGl0eS10eXBlcy50cyIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L2FsZXJ0cy50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9jb250ZW50LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9hc3Nlc3NtZW50LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9jaGF0LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9jb21wZXRlbmNpZXMudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL2VtcHR5LWNoYXQudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvbXVsdGlwbGUvY291bnRlcnMudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL211bHRpcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9tdWx0aXBsZS9vcHRpb24udHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL211bHRpcGxlL3F1ZXN0aW9ucy50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9zcG9rZW4vaXRlbS50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9zZWxlY3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvc2VsZWN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvc2VsZWN0L3RvZ2dsZS50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hc3NpZ25tZW50L2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2Fzc2lnbm1lbnQvYWN0aXZpdHkvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2Fzc2lnbm1lbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3VzZXItZGF0YS50c3giLCIvdHMvdmlld3Mvdmlld3MvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3ZpZXdzL2FjdGl2aXR5L3BhcnRpY2lwYW50LnRzeCIsIi90cy92aWV3cy92aWV3cy9nZW5lcmFsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsZ0JBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxTQUFRTCxLQUFBLENBQUFNLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlMLE1BQUEsQ0FBQU8sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFB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