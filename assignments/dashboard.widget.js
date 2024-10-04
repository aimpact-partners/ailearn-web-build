System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "@aimpact/ailearn-app@0.1.13/components/ui", "@aimpact/ailearn-app@0.1.13/components/navbar-header.code", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/config", "pragmate-ui@1.0.0-beta.6/empty", "@aimpact/ailearn-app@0.1.13/shared/charts", "pragmate-ui@1.0.0-beta.6/drawer", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/perfect-scrollbar", "@aimpact/ailearn-app@0.1.13/components/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/chips", "pragmate-ui@1.0.0-beta.6/image", "@aimpact/ailearn-app@0.1.13/utils", "pragmate-ui@1.0.0-beta.6/tooltip", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/dropdown", "pragmate-ui@1.0.0-beta.6/collapsible"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, dependency_32, dependency_33, dependency_34, bimport, __Bundle, __pkg, ims, Controller, View, DetailActivityBody, aDetailActivity, DetailActivity, MultipleChoiceReport, AssessmentQuestions, ActivityView, ActivityParticipant, GeneralView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    DetailActivityBody: void 0,
    aDetailActivity: void 0,
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
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_31 = _aimpactChatSdk130ChatComponentCode;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_32 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6Dropdown) {
      dependency_33 = _pragmateUi100Beta6Dropdown;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_34 = _pragmateUi100Beta6Collapsible;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_5], ['@aimpact/ailearn-sdk/reactive/model', dependency_6], ['@aimpact/http-suite/api', dependency_7], ['@aimpact/ailearn-sdk/config', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@aimpact/ailearn-sdk/tracking', dependency_12], ['react', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_15], ['pragmate-ui/icons', dependency_16], ['@aimpact/ailearn-app/config', dependency_17], ['pragmate-ui/empty', dependency_18], ['@aimpact/ailearn-app/shared/charts', dependency_19], ['pragmate-ui/drawer', dependency_20], ['pragmate-ui/components', dependency_21], ['pragmate-ui/perfect-scrollbar', dependency_22], ['@aimpact/ailearn-app/components/icons', dependency_23], ['@beyond-js/react-18-widgets/hooks', dependency_24], ['pragmate-ui/list', dependency_25], ['pragmate-ui/form', dependency_26], ['pragmate-ui/chips', dependency_27], ['pragmate-ui/image', dependency_28], ['@aimpact/ailearn-app/utils', dependency_29], ['pragmate-ui/tooltip', dependency_30], ['@aimpact/chat-sdk/chat-component.code', dependency_31], ['@aimpact/chat-sdk/widgets/markdown', dependency_32], ['pragmate-ui/dropdown', dependency_33], ['pragmate-ui/collapsible', dependency_34]]);
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
        hash: 2688842466,
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
                properties: ['messages', 'progress', 'activity', 'synthesis']
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
        hash: 2388013600,
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
          function AsideDrawer() {
            const {
              showDrawer,
              store,
              setShowDrawer
            } = (0, _context.useDashboardContext)();
            const Wall = () => _react.default.createElement("app-dashboard-wall", {
              id: store.assignmentId
            });
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
                wall: _react.default.createElement(Wall, null),
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

      /************************************************
      INTERNAL MODULE: ./views/student/activity/content
      ************************************************/

      ims.set('./views/student/activity/content', {
        hash: 2568623642,
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
          /*bundle*/
          function DetailActivityBody({
            activity,
            setActivity
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            console.log(33);
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
            }, React.createElement(_components.ConditionalContainer, {
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

      /***************************************************
      INTERNAL MODULE: ./views/student/activity/index copy
      ***************************************************/

      ims.set('./views/student/activity/index copy', {
        hash: 1064543214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.aDetailActivity = aDetailActivity;
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("../../context");
          var _assessment = require("./materials/assessment");
          var _chat = require("./materials/chat");
          var _spoken = require("./materials/spoken");
          var _select = require("./select");
          var Drawer = require("pragmate-ui/drawer");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function aDetailActivity({
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
              return React.createElement(_components.Spinner, {
                active: true
              });
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
            }), React.createElement(Drawer.CloseButton, null)))), !ready ? React.createElement(_components.Spinner, {
              active: true
            }) : React.createElement(React.Fragment, null, React.createElement("section", {
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
            }, activity.description)))), React.createElement(_components.ConditionalContainer, {
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
        hash: 628507918,
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
              return React.createElement(_components.Spinner, {
                active: true
              });
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
                  activity: activity,
                  setActivity: setActivity
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
        "im": "./views/student/activity/content",
        "from": "DetailActivityBody",
        "name": "DetailActivityBody"
      }, {
        "im": "./views/student/activity/index copy",
        "from": "aDetailActivity",
        "name": "aDetailActivity"
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
        (require || prop === 'DetailActivityBody') && _export("DetailActivityBody", DetailActivityBody = require ? require('./views/student/activity/content').DetailActivityBody : value);
        (require || prop === 'aDetailActivity') && _export("aDetailActivity", aDetailActivity = require ? require('./views/student/activity/index copy').aDetailActivity : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJQYXJ0aWNpcGFudEFjdGl2aXRpZXMiLCJwYXJlbnQiLCJhY3Rpdml0eSIsIlBhcnRpY2lwYW50QWN0aXZpdHkiLCJQYXJ0aWNpcGFudCIsIml0ZW0iLCJfcGFydGljaXBhbnQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsMiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl90cmFja2luZyIsImlzU3RvcmUiLCJ0cmFja2luZyIsImFjdGl2aXR5U2VsZWN0ZWQiLCJjdXJyZW50VHJhY2tpbmciLCJzZXNzaW9uIiwidmlldyIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsInNwZWNpZmllciIsInVzZXJzIiwidHJhY2tpbmdzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJzZXRNb2RlbCIsImZldGNoaW5nIiwibSIsImUiLCJsb2FkVXNlclRyYWNraW5nIiwidXNlcklkIiwiVHJhY2tpbmciLCJjaGF0IiwiY29uc29sZSIsInJlZnJlc2giLCJ0cmlnZ2VyIiwicmVmcmVzaERyYXdlciIsInNlbGVjdEFjdGl2aXR5IiwiX3JlYWN0IiwiTm90Rm91bmQiLCJjb2RlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX211bHRpcGxlIiwiX3Nwb2tlbiIsIkNoYXJ0cyIsImNsYXNzTmFtZSIsIk11bHRpcGxlQ2hhcnQiLCJTcG9rZW5DaGFydCIsIl9jaGFydHMiLCJfY29udGV4dCIsIl9zZXR0aW5ncyIsInVzZURhc2hib2FyZENvbnRleHQiLCJpbmRleCIsImN1cnJlbnQiLCJjb3VudE9iamVjdHNXaXRob3V0VXNlTXVsdGlwbGUiLCJoYXNOb25aZXJvQ291bnQiLCJ2YWx1ZXMiLCJzb21lIiwiY291bnRlcnMiLCJ0b3RhbCIsInVuZGVmaW5lZCIsImNvcnJlY3QiLCJ3cm9uZyIsImRpZmYiLCJDaGFydCIsIm9wdGlvbnMiLCJzZXJpZXMiLCJsYWJlbHMiLCJwYXJ0aWNpcGF0aW9uIiwicGVuZGluZyIsIkNIQVJUX0JBU0VfU1BFQ1MiLCJyZXNwb25zaXZlIiwiUkVTUE9OU0lWRV9CQVNFX1NQRUNTIiwidGhlbWUiLCJwYWxldHRlIiwibGVnZW5kIiwicG9zaXRpb24iLCJob3Jpem9udGFsQWxpZ24iLCJjaGFydCIsImhlaWdodCIsImRhdGFMYWJlbHMiLCJmb3JtYXR0ZXIiLCJzZXJpZXNJbmRleCIsInciLCJjb25maWciLCJicmVha3BvaW50Iiwid2lkdGgiLCJzcG9rZW5JZCIsImZpbmQiLCJrZXkiLCJzcG9rZW4iLCJEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfZHJhd2VyIiwiX2NvbXBvbmVudHMiLCJfYXNzaWdubWVudCIsIl9wZXJmZWN0U2Nyb2xsYmFyIiwiQXNpZGVEcmF3ZXIiLCJzaG93RHJhd2VyIiwic2V0U2hvd0RyYXdlciIsIldhbGwiLCJEcmF3ZXIiLCJvcGVuIiwib25DbG9zZSIsIlNjcm9sbENvbnRhaW5lciIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwid2FsbCIsIkRldGFpbEFjdGl2aXR5Iiwic3R1ZGVudCIsIlN0dWRlbnRBc3NpZ25tZW50U3VtbWFyeSIsIl9pY29ucyIsIl91aSIsIl9lbXB0eSIsIkFQUCIsIkFQUF9OQU1FIiwiRW1wdHkiLCJQYWdlQ29udGFpbmVyIiwiSUNPTlMiLCJjbGFzc3dvcmtzIiwiZW1wdHkiLCJfdXNlckRhdGEiLCJIZWFkZXIiLCJvd25lciIsIm9uQ2xpY2siLCJFbnRpdHlJbWFnZSIsInNyYyIsImFsdCIsIlVzZXJEYXRhIiwibGFiZWwiLCJCdXR0b24iLCJib3JkZXJlZCIsImFjdGlvbnMiLCJfaG9va3MiLCJfIiwiX2FzaWRlRHJhd2VyIiwiX2hlYWRlciIsIl9oZWFkZXIyIiwiX2dlbmVyYWwiLCJBUFBOQU1FIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldFZpZXciLCJzZXRUb3RhbFBhcnRpY2lwYW50cyIsInN0YXRlIiwic2V0U3RhdGUiLCJnZXRQcm9wZXJ0aWVzIiwic2V0RmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiY2xzIiwiUHJvdmlkZXIiLCJTdHVkZW50c0hlYWRlciIsInRlcm5hcnkiLCJmYWxzZSIsIkdlbmVyYWxWaWV3IiwidHJ1ZSIsIkFjdGl2aXR5VmlldyIsIl9pY29uczIiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJJY29uQnV0dG9uIiwiX2Zvcm0iLCJfbGlzdCIsIl9hY3Rpdml0eUZpbHRlciIsImxpc3RDbHMiLCJyZWZyZXNoaW5nIiwic2V0UmVmcmVzaGluZyIsIm9uUmVmcmVzaCIsInN0b3BQcm9wYWdhdGlvbiIsInNldFRpbWVvdXQiLCJsaXN0Iiwic3R1ZGVudHMiLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwiTGlzdCIsImNvbnRyb2wiLCJkaXNhYmxlZCIsInZhcmlhbnQiLCJfY2hpcHMiLCJNb2R1bGVBY3Rpdml0eSIsImhhc1BhcnRpY2lwYXRlZCIsIm91dHB1dCIsInN1YnR5cGUiLCJtZXNzYWdlQ291bnRlciIsInByZXZlbnREZWZhdWx0IiwiYWN0aXZpdHlJZCIsIkNoaXAiLCJfaW1hZ2UiLCJfdXRpbHMiLCJhY3Rpdml0eUl0ZW1zIiwicGVyY2VudGlsZSIsInBhcnRpY2lwYW50VXJpIiwidmlld1N0dWRlbnQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIkltYWdlIiwiTGluayIsImhyZWYiLCJwZXJjZW50aWwiLCJsaW1pdERlY2ltYWxzIiwiX2NvcmUiLCJfdG9vbHRpcCIsIlNwb2tlbkRhdGEiLCJmYWNlcyIsIkZhY2VzIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJoYXNTcG9rZW4iLCJSZWFjdCIsIl9hc3Nlc3NtZW50IiwiX2NoYXQiLCJfc2VsZWN0IiwiRGV0YWlsQWN0aXZpdHlCb2R5Iiwic2V0QWN0aXZpdHkiLCJsb2ciLCJBY3Rpdml0eVNlbGVjdCIsImNvbnZlcnNhdGlvbiIsIlVzZXJDaGF0IiwiZGViYXRlIiwiTWF0ZXJpYWxBc3Nlc3NtZW50IiwiYXNzZXNzbWVudCIsIlNwb2tlbkFuYWx5c2lzIiwiYURldGFpbEFjdGl2aXR5IiwidXNlRWZmZWN0IiwiU3Bpbm5lciIsImFjdGl2ZSIsImZpbmFsbHkiLCJDbG9zZUJ1dHRvbiIsIl9jb250ZW50IiwiTXVsdGlwbGVDaG9pY2VSZXBvcnQiLCJfY2hhdENvbXBvbmVudCIsIl9lbXB0eUNoYXQiLCJjaGF0TW9kZWwiLCJFbXB0eU1hdGVyaWFsIiwiY2hhdElkIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsIkVtcHR5Q2hhdCIsIkFnZW50c0NoYXRQYW5lbCIsIl9tYXJrZG93biIsIkNvbXBldGVuY2llc0ZlZWRiYWNrIiwiTWFya2Rvd24iLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIm1lc3NhZ2UiLCJFbXB0eUNhcmQiLCJEZWZhdWx0TWF0ZXJpYWwiLCJDb3VudGVycyIsIl9jb3VudGVycyIsIl9xdWVzdGlvbnMiLCJzZXRDb3VudGVycyIsIkFzc2Vzc21lbnRRdWVzdGlvbnMiLCJzaG93QW5zd2VycyIsIkl0ZW1PcHRpb24iLCJvcHRpb24iLCJpIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJfb3B0aW9uIiwicmVzcG9uc2VzIiwicXVlc3Rpb25zIiwiYXR0cnMiLCJlbGVtZW50cyIsImF1ZGlvVXJsIiwiYXNzZXNzbWVudHMiLCJvcmFsVGV4dCIsInN0dWRlbnRBdWRpbyIsImNvbnRyb2xzIiwicHJlbG9hZCIsImNvbnRhaW5lciIsIlNwb2tlbkl0ZW0iLCJmZWVkYmFjayIsIl9kcm9wZG93biIsIl90b2dnbGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZmlsdGVyIiwiQWN0aXZpdHlTZWxlY3RJdGVtIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlRvZ2dsZU9wdGlvbiIsImFzIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25JdGVtIiwiaWNvbkNscyIsIkNvbnRyb2wiLCJBcHBJY29uIiwid2FybiIsIl9vYmplY3RpdmUiLCJfY29sbGFwc2libGUiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5IiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJvblRvZ2dsZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0eXBlcyIsIkNvbGxhcHNpYmxlQ29udGVudCIsInByb2dyZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiYW5hbHlzaXMiLCJzZXRJdGVtcyIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsL0RBVEEudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0aWVzLnRzIiwiL3RzL21vZGVsL2FjdGl2aXRpZXMvYWN0aXZpdHkudHMiLCIvdHMvbW9kZWwvaW5kZXgudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXR5LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvcGFydGljaXBhbnRzLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvY2hhcnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGFydHMvbXVsdGlwbGUudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9zZXR0aW5ncy50c3giLCIvdHMvdmlld3MvY2hhcnRzL3Nwb2tlbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kcmF3ZXIvYXNpZGUtZHJhd2VyLnRzeCIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2hlYWRlci9hY3Rpdml0eS1maWx0ZXIudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vYWN0aXZpdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3Nwb2tlbi50c3giLCIvYWN0aXRpdHktdHlwZXMudHMiLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9jb250ZW50LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L2luZGV4IGNvcHkudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL2Fzc2Vzc21lbnQudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL2NoYXQudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvZW1wdHktY2hhdC50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9tdWx0aXBsZS9jb3VudGVycy50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvbXVsdGlwbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL211bHRpcGxlL29wdGlvbi50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvbXVsdGlwbGUvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL3Nwb2tlbi9pdGVtLnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L3NlbGVjdC9pbmRleC50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9zZWxlY3QvaXRlbS50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9zZWxlY3QvdG9nZ2xlLnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2Fzc2lnbm1lbnQvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYXNzaWdubWVudC9hY3Rpdml0eS9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYXNzaWdubWVudC9pbmRleC50c3giLCIvdHMvdmlld3MvdXNlci1kYXRhLnRzeCIsIi90cy92aWV3cy92aWV3cy9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3Mvdmlld3MvYWN0aXZpdHkvcGFydGljaXBhbnQudHN4IiwiL3RzL3ZpZXdzL3ZpZXdzL2dlbmVyYWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSFIsZ0JBQUEsQ0FBQVMsWUFBWSxDQUFDQyxhQUFhLEVBQUU7Y0FDNUIsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBRTNDO1lBRUE7OztZQUdBRSxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFaLEtBQU0sQ0FBQ2EsS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFBLENBQUFoQixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7VUM1QkQsTUFBTWlCLElBQUksR0FBRztZQUNaQyxNQUFNLEVBQUUsSUFBSTtZQUNaRCxJQUFJLEVBQUU7Y0FDTEUsVUFBVSxFQUFFO2dCQUNYQyxLQUFLLEVBQUU7a0JBQ04sc0NBQXNDLEVBQUU7b0JBQ3ZDQyxRQUFRLEVBQUUsQ0FBQztvQkFDWEMsTUFBTSxFQUFFO3NCQUNQQyxPQUFPLEVBQUU7d0JBQ1JDLFFBQVEsRUFDUCx3RkFBd0Y7d0JBQ3pGQyxJQUFJLEVBQUUsYUFBYTt3QkFDbkJDLEVBQUUsRUFBRTt1QkFDSjtzQkFDREMsUUFBUSxFQUFFLFNBQVM7c0JBQ25CQyxFQUFFLEVBQUUsSUFBSTtzQkFDUkMsV0FBVyxFQUNWLGlOQUFpTjtzQkFDbE5DLFFBQVEsRUFBRSxJQUFJO3NCQUNkQyxLQUFLLEVBQUUsK0JBQStCO3NCQUN0Q0MsSUFBSSxFQUFFLFFBQVE7c0JBQ2RDLE9BQU8sRUFBRSxFQUFFO3NCQUNYQyxTQUFTLEVBQUUsK0VBQStFO3NCQUMxRmIsUUFBUSxFQUFFLElBQUk7c0JBQ2RjLE1BQU0sRUFBRSxJQUFJO3NCQUNaQyxXQUFXLEVBQUUsYUFBYTtzQkFDMUJDLFdBQVcsRUFBRSxhQUFhO3NCQUMxQlgsRUFBRSxFQUFFLHNDQUFzQztzQkFDMUNSLE1BQU0sRUFBRTtxQkFDUjtvQkFDRFcsV0FBVyxFQUNWLDBiQUEwYjtvQkFDM2JTLFNBQVMsRUFBRTtzQkFDVkMsS0FBSyxFQUFFO3dCQUNOQyxZQUFZLEVBQ1gsMk5BQTJOO3dCQUM1TkMsSUFBSSxFQUFFLGdEQUFnRDt3QkFDdERDLFVBQVUsRUFBRSxDQUNYOzBCQUNDakIsSUFBSSxFQUFFLDBCQUEwQjswQkFDaENTLFNBQVMsRUFDUjt5QkFDRCxFQUNEOzBCQUNDVCxJQUFJLEVBQUUsdUJBQXVCOzBCQUM3QlMsU0FBUyxFQUNSO3lCQUNELEVBQ0Q7MEJBQ0NULElBQUksRUFBRSwyQkFBMkI7MEJBQ2pDUyxTQUFTLEVBQ1I7eUJBQ0Q7dUJBRUY7c0JBQ0RTLFNBQVMsRUFBRTtxQkFDWDtvQkFDRGIsUUFBUSxFQUFFLElBQUk7b0JBQ2RKLEVBQUUsRUFBRSxzQ0FBc0M7b0JBQzFDTSxJQUFJLEVBQUUsZ0JBQWdCO29CQUN0QkQsS0FBSyxFQUFFLHNEQUFzRDtvQkFDN0RFLE9BQU8sRUFBRSxFQUFFO29CQUNYQyxTQUFTLEVBQ1I7bUJBQ0Q7a0JBQ0Qsc0NBQXNDLEVBQUU7b0JBQ3ZDYixRQUFRLEVBQUUsQ0FBQztvQkFDWEMsTUFBTSxFQUFFO3NCQUNQQyxPQUFPLEVBQUU7d0JBQ1JDLFFBQVEsRUFDUCx3RkFBd0Y7d0JBQ3pGQyxJQUFJLEVBQUUsYUFBYTt3QkFDbkJDLEVBQUUsRUFBRTt1QkFDSjtzQkFDREMsUUFBUSxFQUFFLFNBQVM7c0JBQ25CQyxFQUFFLEVBQUUsSUFBSTtzQkFDUkMsV0FBVyxFQUNWLGlOQUFpTjtzQkFDbE5DLFFBQVEsRUFBRSxJQUFJO3NCQUNkQyxLQUFLLEVBQUUsK0JBQStCO3NCQUN0Q0MsSUFBSSxFQUFFLFFBQVE7c0JBQ2RDLE9BQU8sRUFBRSxFQUFFO3NCQUNYQyxTQUFTLEVBQUUsK0VBQStFO3NCQUMxRmIsUUFBUSxFQUFFLElBQUk7c0JBQ2RjLE1BQU0sRUFBRSxJQUFJO3NCQUNaQyxXQUFXLEVBQUUsYUFBYTtzQkFDMUJDLFdBQVcsRUFBRSxhQUFhO3NCQUMxQlgsRUFBRSxFQUFFLHNDQUFzQztzQkFDMUNSLE1BQU0sRUFBRTtxQkFDUjtvQkFDRFcsV0FBVyxFQUNWLHNZQUFzWTtvQkFDdllTLFNBQVMsRUFBRTtzQkFDVkMsS0FBSyxFQUFFO3dCQUNOQyxZQUFZLEVBQ1gscVBBQXFQO3dCQUN0UEMsSUFBSSxFQUFFLFNBQVM7d0JBQ2ZDLFVBQVUsRUFBRSxDQUNYOzBCQUNDakIsSUFBSSxFQUFFLGdDQUFnQzswQkFDdENTLFNBQVMsRUFDUjt5QkFDRCxFQUNEOzBCQUNDVCxJQUFJLEVBQUUsc0NBQXNDOzBCQUM1Q1MsU0FBUyxFQUFFO3lCQUNYO3VCQUVGO3NCQUNEUyxTQUFTLEVBQUU7d0JBQ1ZDLFNBQVMsRUFDUix3YkFBd2I7d0JBQ3piQyxPQUFPLEVBQ04saVRBQWlUO3dCQUNsVEMsUUFBUSxFQUNQOztxQkFFRjtvQkFDRGhCLFFBQVEsRUFBRSxJQUFJO29CQUNkSixFQUFFLEVBQUUsc0NBQXNDO29CQUMxQ00sSUFBSSxFQUFFLGdCQUFnQjtvQkFDdEJELEtBQUssRUFBRSwrQkFBK0I7b0JBQ3RDRSxPQUFPLEVBQUUsRUFBRTtvQkFDWEMsU0FBUyxFQUNSO21CQUNEO2tCQUNELHNDQUFzQyxFQUFFO29CQUN2Q2IsUUFBUSxFQUFFLENBQUM7b0JBQ1hDLE1BQU0sRUFBRTtzQkFDUEMsT0FBTyxFQUFFO3dCQUNSQyxRQUFRLEVBQ1Asd0ZBQXdGO3dCQUN6RkMsSUFBSSxFQUFFLGFBQWE7d0JBQ25CQyxFQUFFLEVBQUU7dUJBQ0o7c0JBQ0RDLFFBQVEsRUFBRSxTQUFTO3NCQUNuQkMsRUFBRSxFQUFFLElBQUk7c0JBQ1JDLFdBQVcsRUFDVixpTkFBaU47c0JBQ2xOQyxRQUFRLEVBQUUsSUFBSTtzQkFDZEMsS0FBSyxFQUFFLCtCQUErQjtzQkFDdENDLElBQUksRUFBRSxRQUFRO3NCQUNkQyxPQUFPLEVBQUUsRUFBRTtzQkFDWEMsU0FBUyxFQUFFLCtFQUErRTtzQkFDMUZiLFFBQVEsRUFBRSxJQUFJO3NCQUNkYyxNQUFNLEVBQUUsSUFBSTtzQkFDWkMsV0FBVyxFQUFFLGFBQWE7c0JBQzFCQyxXQUFXLEVBQUUsYUFBYTtzQkFDMUJYLEVBQUUsRUFBRSxzQ0FBc0M7c0JBQzFDUixNQUFNLEVBQUU7cUJBQ1I7b0JBQ0RXLFdBQVcsRUFDVix1TUFBdU07b0JBQ3hNUyxTQUFTLEVBQUU7c0JBQ1ZDLEtBQUssRUFBRTt3QkFDTkMsWUFBWSxFQUNYLDJSQUEyUjt3QkFDNVJDLElBQUksRUFBRSxTQUFTO3dCQUNmTSxPQUFPLEVBQ04sa0hBQWtIO3dCQUNuSEwsVUFBVSxFQUFFLENBQ1g7MEJBQ0NqQixJQUFJLEVBQUUsdUJBQXVCOzBCQUM3QlMsU0FBUyxFQUNSO3lCQUNELEVBQ0Q7MEJBQ0NULElBQUksRUFBRSx1QkFBdUI7MEJBQzdCUyxTQUFTLEVBQ1I7eUJBQ0QsRUFDRDswQkFDQ1QsSUFBSSxFQUFFLHNCQUFzQjswQkFDNUJTLFNBQVMsRUFDUjt5QkFDRCxFQUNEOzBCQUNDVCxJQUFJLEVBQUUsc0JBQXNCOzBCQUM1QlMsU0FBUyxFQUFFO3lCQUNYO3VCQUVGO3NCQUNEUyxTQUFTLEVBQUU7cUJBQ1g7b0JBQ0RiLFFBQVEsRUFBRSxJQUFJO29CQUNkSixFQUFFLEVBQUUsc0NBQXNDO29CQUMxQ00sSUFBSSxFQUFFLFFBQVE7b0JBQ2RELEtBQUssRUFBRSxpREFBaUQ7b0JBQ3hERSxPQUFPLEVBQUUsRUFBRTtvQkFDWEMsU0FBUyxFQUNSOztpQkFFRjtnQkFDRGMsS0FBSyxFQUFFLENBQ04sc0NBQXNDLEVBQ3RDLHNDQUFzQyxFQUN0QyxzQ0FBc0M7ZUFFdkM7Y0FDRDFCLE1BQU0sRUFBRTtnQkFDUEQsUUFBUSxFQUFFLElBQUk7Z0JBQ2RFLE9BQU8sRUFBRTtrQkFDUkMsUUFBUSxFQUFFLHdGQUF3RjtrQkFDbEdDLElBQUksRUFBRSxhQUFhO2tCQUNuQkMsRUFBRSxFQUFFO2lCQUNKO2dCQUNEQyxRQUFRLEVBQUUsU0FBUztnQkFDbkJFLFdBQVcsRUFDVixpTkFBaU47Z0JBQ2xOQyxRQUFRLEVBQUUsSUFBSTtnQkFDZEosRUFBRSxFQUFFLHNDQUFzQztnQkFDMUNLLEtBQUssRUFBRSwrQkFBK0I7Z0JBQ3RDRSxPQUFPLEVBQUUsRUFBRTtnQkFDWEMsU0FBUyxFQUFFO2VBQ1g7Y0FDRGUsU0FBUyxFQUFFO2dCQUNWeEIsSUFBSSxFQUFFLG1CQUFtQjtnQkFDekJDLEVBQUUsRUFBRSxzQ0FBc0M7Z0JBQzFDTyxPQUFPLEVBQUU7ZUFDVDtjQUNEUCxFQUFFLEVBQUUsc0NBQXNDO2NBQzFDd0IsWUFBWSxFQUFFO2dCQUNiLDhCQUE4QixFQUFFO2tCQUMvQkMsSUFBSSxFQUFFO29CQUNMM0IsUUFBUSxFQUFFLHdGQUF3RjtvQkFDbEdDLElBQUksRUFBRSxhQUFhO29CQUNuQkMsRUFBRSxFQUFFO21CQUNKO2tCQUNEUCxVQUFVLEVBQUU7b0JBQ1gsc0NBQXNDLEVBQUU7c0JBQ3ZDRixJQUFJLEVBQUU7d0JBQ0xtQyxRQUFRLEVBQUU7MEJBQ1RDLEtBQUssRUFBRTt5QkFDUDt3QkFDREMsUUFBUSxFQUFFOzBCQUNUQyxPQUFPLEVBQ04seUtBQXlLOzBCQUMxS2IsVUFBVSxFQUFFLENBQ1g7NEJBQ0NqQixJQUFJLEVBQUUsdUJBQXVCOzRCQUM3QlMsU0FBUyxFQUNSLHFLQUFxSzs0QkFDdEtoQixNQUFNLEVBQUU7OEJBQ1BPLElBQUksRUFBRSxXQUFXOzhCQUNqQitCLElBQUksRUFBRTs7MkJBRVAsRUFDRDs0QkFDQy9CLElBQUksRUFBRSx1QkFBdUI7NEJBQzdCUyxTQUFTLEVBQ1Isb0lBQW9JOzRCQUNySWhCLE1BQU0sRUFBRTs4QkFDUE8sSUFBSSxFQUFFLGFBQWE7OEJBQ25CK0IsSUFBSSxFQUFFOzsyQkFFUCxFQUNEOzRCQUNDL0IsSUFBSSxFQUFFLHNCQUFzQjs0QkFDNUJTLFNBQVMsRUFDUixtSkFBbUo7NEJBQ3BKaEIsTUFBTSxFQUFFOzhCQUNQTyxJQUFJLEVBQUUsV0FBVzs4QkFDakIrQixJQUFJLEVBQUU7OzJCQUVQLEVBQ0Q7NEJBQ0MvQixJQUFJLEVBQUUsc0JBQXNCOzRCQUM1QlMsU0FBUyxFQUNSLGdKQUFnSjs0QkFDakpoQixNQUFNLEVBQUU7OEJBQ1BPLElBQUksRUFBRSxhQUFhOzhCQUNuQitCLElBQUksRUFBRTs7MkJBRVA7Ozs7O2lCQU1OO2dCQUNEQyw0QkFBNEIsRUFBRTtrQkFDN0JOLElBQUksRUFBRTtvQkFDTDNCLFFBQVEsRUFDUCw0RkFBNEY7b0JBQzdGQyxJQUFJLEVBQUUsYUFBYTtvQkFDbkJDLEVBQUUsRUFBRTttQkFDSjtrQkFDRFAsVUFBVSxFQUFFO29CQUNYLHNDQUFzQyxFQUFFO3NCQUN2Q0YsSUFBSSxFQUFFO3dCQUNMbUMsUUFBUSxFQUFFOzBCQUNUQyxLQUFLLEVBQUU7eUJBQ1A7d0JBQ0RDLFFBQVEsRUFBRTswQkFDVEMsT0FBTyxFQUNOLDJPQUEyTzswQkFDNU9iLFVBQVUsRUFBRSxDQUNYOzRCQUNDakIsSUFBSSxFQUFFLHVCQUF1Qjs0QkFDN0JTLFNBQVMsRUFDUiwrSkFBK0o7NEJBQ2hLaEIsTUFBTSxFQUFFOzhCQUNQTyxJQUFJLEVBQUUsYUFBYTs4QkFDbkIrQixJQUFJLEVBQUU7OzJCQUVQLEVBQ0Q7NEJBQ0MvQixJQUFJLEVBQUUsdUJBQXVCOzRCQUM3QlMsU0FBUyxFQUFFLGFBQWE7NEJBQ3hCaEIsTUFBTSxFQUFFOzhCQUNQTyxJQUFJLEVBQUUsYUFBYTs4QkFDbkIrQixJQUFJLEVBQUU7OzJCQUVQLEVBQ0Q7NEJBQ0MvQixJQUFJLEVBQUUsc0JBQXNCOzRCQUM1QlMsU0FBUyxFQUNSLDRJQUE0STs0QkFDN0loQixNQUFNLEVBQUU7OEJBQ1BPLElBQUksRUFBRSxXQUFXOzhCQUNqQitCLElBQUksRUFBRTs7MkJBRVAsRUFDRDs0QkFDQy9CLElBQUksRUFBRSxzQkFBc0I7NEJBQzVCUyxTQUFTLEVBQUUsYUFBYTs0QkFDeEJoQixNQUFNLEVBQUU7OEJBQ1BPLElBQUksRUFBRSxhQUFhOzhCQUNuQitCLElBQUksRUFBRTs7MkJBRVA7Ozs7Ozs7O1dBU1Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbFZELElBQUFFLFNBQUEsR0FBQTlELE9BQUE7VUFFTSxNQUFPK0Qsb0JBQW9CO1lBQ2hDLENBQUF2QyxLQUFNLEdBQXlCLEVBQUU7WUFDakMsQ0FBQXdDLEdBQUksR0FBb0MsSUFBSUMsR0FBRyxFQUFFO1lBQ2pELElBQUl6QyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUEwQyxTQUFVO1lBQ1YsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFDQUMsWUFBWUQsU0FBUyxFQUFFN0MsSUFBSTtjQUMxQixJQUFJLENBQUMsQ0FBQTZDLFNBQVUsR0FBR0EsU0FBUztjQUMzQjdDLElBQUksQ0FBQytCLEtBQUssQ0FBQ2dCLE9BQU8sQ0FBQ3RDLEVBQUUsSUFBRztnQkFDdkIsTUFBTXVDLFFBQVEsR0FBRyxJQUFJUCxTQUFBLENBQUFRLGtCQUFrQixDQUFDakQsSUFBSSxDQUFDRyxLQUFLLENBQUNNLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLENBQUMsQ0FBQWtDLEdBQUksQ0FBQ08sR0FBRyxDQUFDekMsRUFBRSxFQUFFdUMsUUFBUSxDQUFDO2dCQUMzQixJQUFJLENBQUMsQ0FBQTdDLEtBQU0sQ0FBQ2dELElBQUksQ0FBQ0gsUUFBUSxDQUFDO2NBQzNCLENBQUMsQ0FBQztZQUNIO1lBRUFJLEdBQUdBLENBQUMzQyxFQUFVO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQWtDLEdBQUksQ0FBQ1MsR0FBRyxDQUFDM0MsRUFBRSxDQUFDO1lBQ3pCO1lBQ0FkLEdBQUdBLENBQUNjLEVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBa0MsR0FBSSxDQUFDaEQsR0FBRyxDQUFDYyxFQUFFLENBQUM7WUFDekI7O1VBQ0FWLE9BQUEsQ0FBQTJDLG9CQUFBLEdBQUFBLG9CQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdCRCxJQUFBVyxLQUFBLEdBQUExRSxPQUFBO1VBR00sTUFBT3NFLGtCQUFtQixTQUFRSSxLQUFBLENBQUFDLElBQUk7WUFZM0MsQ0FBQUMsZUFBZ0IsR0FBNkIsSUFBSVgsR0FBRyxFQUFFO1lBQ3RELENBQUFYLFlBQWEsR0FBa0IsRUFBRTtZQUNqQyxJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUNBYSxZQUFZOUMsSUFBSTtjQUNmLEtBQUssQ0FBQztnQkFDTHdELE1BQU0sRUFBRSxxQkFBcUI7Z0JBQzdCLEdBQUd4RCxJQUFJO2dCQUNQeUQsVUFBVSxFQUFFLENBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixhQUFhLEVBQ2IsV0FBVyxFQUNYLFVBQVUsRUFDVixJQUFJLEVBRUosTUFBTSxFQUNOLE9BQU8sRUFDUCxTQUFTLEVBQ1QsV0FBVztlQUVaLENBQUM7Y0FFRjtZQUNEO1lBRUFDLGNBQWNBLENBQUNDLFdBQXdCO2NBQ3RDLElBQUksQ0FBQyxDQUFBMUIsWUFBYSxDQUFDa0IsSUFBSSxDQUFDUSxXQUFXLENBQUM7Y0FDcEMsSUFBSSxDQUFDLENBQUFKLGVBQWdCLENBQUNMLEdBQUcsQ0FBQ1MsV0FBVyxDQUFDbEQsRUFBRSxFQUFFa0QsV0FBVyxDQUFDO1lBQ3ZEO1lBRUFDLGNBQWNBLENBQUNuRCxFQUFVO2NBQ3hCLE9BQU8sSUFBSSxDQUFDLENBQUE4QyxlQUFnQixDQUFDNUQsR0FBRyxDQUFDYyxFQUFFLENBQUM7WUFDckM7WUFFQW9ELGNBQWNBLENBQUNwRCxFQUFVO2NBQ3hCLE9BQU8sSUFBSSxDQUFDLENBQUE4QyxlQUFnQixDQUFDSCxHQUFHLENBQUMzQyxFQUFFLENBQUM7WUFDckM7O1VBQ0FWLE9BQUEsQ0FBQWtELGtCQUFBLEdBQUFBLGtCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RERCxJQUFBYSxNQUFBLEdBQUFuRixPQUFBO1VBQ0EsSUFBQW9GLElBQUEsR0FBQXBGLE9BQUE7VUFDQSxJQUFBcUYsT0FBQSxHQUFBckYsT0FBQTtVQUNBLElBQUFzRixRQUFBLEdBQUF0RixPQUFBO1VBR0EsSUFBQXVGLGFBQUEsR0FBQXZGLE9BQUE7VUFDQSxJQUFBd0YsV0FBQSxHQUFBeEYsT0FBQTtVQUVNLE1BQU95RixTQUFVLFNBQVFOLE1BQUEsQ0FBQU8sYUFBeUI7WUFDdkQsQ0FBQUMsR0FBSTtZQU1KLENBQUFyQyxZQUFhO1lBRWIsSUFBSUEsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFDQSxDQUFBNUIsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBQ0EsQ0FBQTJCLFNBQVU7WUFDVixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUNBLENBQUE5QixVQUFXO1lBQ1gsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFQSxDQUFBcUUsS0FBTSxHQUEwQyxJQUFJO1lBQ3BELElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSUMsaUJBQWlCQSxDQUFBO2NBQ3BCLE9BQU9DLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ3pDLFlBQVksQ0FBQzlCLEtBQUssQ0FBQyxDQUFDd0UsTUFBTTtZQUNuRDtZQUVBLElBQUlDLGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxJQUFJLENBQUMzQyxZQUFZLENBQUM5QixLQUFLLENBQUMwRSxNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFQyxJQUFJLEtBQUk7Z0JBQ25EO2dCQUNBLE9BQU9ELEdBQUc7Z0JBQ1YsQ0FBQztjQUNGLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTjtZQUNBLElBQUlFLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQy9DLFlBQVksQ0FBQzlCLEtBQUssQ0FBQzBFLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVDLElBQUksS0FBSTtnQkFDbkQ7Z0JBQ0EsT0FBT0QsR0FBRztjQUNYLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTjtZQUNBaEMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBd0IsR0FBSSxHQUFHLElBQUlQLElBQUEsQ0FBQWtCLEdBQUcsQ0FBQ2pCLE9BQUEsQ0FBQWtCLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMvQyxJQUFJLENBQUMsQ0FBQXBELFlBQWEsR0FBRyxJQUFJaUMsYUFBQSxDQUFBb0IsWUFBWSxDQUFDLElBQUksQ0FBQztjQUMzQyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO2NBQ2xFQyxVQUFVLENBQUNDLEtBQUssR0FBRyxJQUFJO1lBQ3hCO1lBRUEsTUFBTTdGLElBQUlBLENBQUNhLEVBQUU7Y0FDWixJQUFJLENBQUMsQ0FBQTZELEdBQUksQ0FBQ29CLE1BQU0sQ0FBQ3pCLFFBQUEsQ0FBQTBCLGNBQWMsQ0FBQ3pELElBQUksQ0FBQzBELEtBQUssQ0FBQztjQUUzQyxNQUFNQyxRQUFRLEdBQWMsTUFBTSxJQUFJLENBQUMsQ0FBQXZCLEdBQUksQ0FBQzNFLEdBQUcsQ0FBQyxnQkFBZ0JjLEVBQUUsWUFBWSxDQUFDO2NBRS9FLElBQUksQ0FBQ29GLFFBQVEsQ0FBQzVGLE1BQU0sRUFBRTtnQkFDckIsSUFBSSxPQUFPNEYsUUFBUSxDQUFDdEIsS0FBSyxLQUFLLFFBQVEsRUFBRTtrQkFDdkMsSUFBSSxDQUFDLENBQUFBLEtBQU0sR0FBR3NCLFFBQVEsQ0FBQ3RCLEtBQUs7O2dCQUU3QixNQUFNLElBQUl1QixLQUFLLENBQUNELFFBQVEsQ0FBQ3RCLEtBQUssRUFBRXdCLElBQUksQ0FBQzs7Y0FHdEMsSUFBSXRCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDbUIsUUFBUSxDQUFDN0YsSUFBSSxDQUFDLENBQUMyRSxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUM1QyxJQUFJLENBQUNxQixLQUFLLEdBQUcsS0FBSztnQkFDbEIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtnQkFDakI7O2NBR0QsTUFBTTtnQkFBRTVGLE1BQU07Z0JBQUU0QixZQUFZO2dCQUFFL0IsVUFBVTtnQkFBRThCLFNBQVM7Z0JBQUV2QixFQUFFLEVBQUV5RjtjQUFXLENBQUUsR0FBR0wsUUFBUSxDQUFDN0YsSUFBSTtjQUV0RixJQUFJLENBQUMsQ0FBQUUsVUFBVyxHQUFHLElBQUlpRSxXQUFBLENBQUF6QixvQkFBb0IsQ0FBQyxJQUFJLEVBQUV4QyxVQUFVLENBQUM7Y0FDN0QsSUFBSSxDQUFDLENBQUErQixZQUFhLENBQUNyQyxJQUFJLENBQUNxQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUEvQixVQUFXLENBQUM7Y0FDdkRzRixVQUFVLENBQUNDLEtBQUssR0FBRyxJQUFJO2NBQ3ZCLElBQUksQ0FBQyxDQUFBcEYsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxDQUFBMkIsU0FBVSxHQUFHQSxTQUFTO2NBRTNCLElBQUksQ0FBQ3ZCLEVBQUUsR0FBR3lGLFdBQVc7Y0FFckIsSUFBSSxDQUFDRixLQUFLLEdBQUcsSUFBSTtjQUNqQixJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO1lBQ2xCOztVQUNBbEcsT0FBQSxDQUFBcUUsU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlGRCxJQUFBM0IsU0FBQSxHQUFBOUQsT0FBQTtVQUdNLE1BQU93SCxxQkFBcUI7WUFDakMsQ0FBQWhHLEtBQU0sR0FBMEIsRUFBRTtZQUNsQyxDQUFBd0MsR0FBSSxHQUFxQyxJQUFJQyxHQUFHLEVBQUU7WUFDbEQsQ0FBQXdELE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUNBLElBQUlqRyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBMkMsWUFBWXNELE1BQW1CLEVBQUVqRyxLQUFLO2NBQ3JDLElBQUksQ0FBQyxDQUFBQSxLQUFNLEdBQUdBLEtBQUs7Y0FDbkIsTUFBTXVFLElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFJLENBQUN2RSxLQUFLLENBQUM7Y0FDL0IsSUFBSSxDQUFDLENBQUFBLEtBQU0sR0FBR3VFLElBQUksQ0FBQy9CLEdBQUcsQ0FBQ2xDLEVBQUUsSUFBRztnQkFDM0I7Ozs7Ozs7Ozs7Ozs7O2dCQWVBLE1BQU00RixRQUFRLEdBQUdELE1BQU0sQ0FBQ3ZELFNBQVMsQ0FBQzNDLFVBQVUsQ0FBQ1AsR0FBRyxDQUFDYyxFQUFFLENBQUM7Z0JBQ3BENEYsUUFBUSxDQUFDM0MsY0FBYyxDQUFDMEMsTUFBTSxDQUFDO2dCQUUvQixNQUFNcEQsUUFBUSxHQUFHLElBQUlQLFNBQUEsQ0FBQTZELG1CQUFtQixDQUFDO2tCQUN4Q0QsUUFBUTtrQkFDUixHQUFHbEcsS0FBSyxDQUFDTSxFQUFFLENBQUMsRUFBRVQ7aUJBQ2QsQ0FBQztnQkFDRixJQUFJLENBQUMsQ0FBQTJDLEdBQUksQ0FBQ08sR0FBRyxDQUFDekMsRUFBRSxFQUFFdUMsUUFBUSxDQUFDO2dCQUMzQixJQUFJLENBQUMsQ0FBQW9ELE1BQU8sR0FBR0EsTUFBTTtnQkFDckIsT0FBT3BELFFBQVE7Y0FDaEIsQ0FBQyxDQUFDO1lBQ0g7WUFFQUksR0FBR0EsQ0FBQzNDLEVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBa0MsR0FBSSxDQUFDUyxHQUFHLENBQUMzQyxFQUFFLENBQUM7WUFDekI7WUFDQWQsR0FBR0EsQ0FBQ2MsRUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFrQyxHQUFJLENBQUNoRCxHQUFHLENBQUNjLEVBQUUsQ0FBQztZQUN6Qjs7VUFDQVYsT0FBQSxDQUFBb0cscUJBQUEsR0FBQUEscUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckRELElBQUE5QyxLQUFBLEdBQUExRSxPQUFBO1VBRU0sTUFBTzJILG1CQUFvQixTQUFRakQsS0FBQSxDQUFBQyxJQUFJO1lBQzVDUixZQUFZOUMsSUFBSTtjQUNmLEtBQUssQ0FBQztnQkFDTCxHQUFHQSxJQUFJO2dCQUNQd0QsTUFBTSxFQUFFLHNCQUFzQjtnQkFDOUJDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFdBQVc7ZUFDNUQsQ0FBQztZQUNIOztVQUNBMUQsT0FBQSxDQUFBdUcsbUJBQUEsR0FBQUEsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkQsSUFBQXhDLE1BQUEsR0FBQW5GLE9BQUE7VUFDQSxJQUFBd0YsV0FBQSxHQUFBeEYsT0FBQTtVQWdDTSxNQUFPNEgsV0FBWSxTQUFRekMsTUFBQSxDQUFBTyxhQUEwQjtZQUcxRCxDQUFBbkUsVUFBVztZQUNYLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBRUEsQ0FBQTJDLFNBQVU7WUFDVixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBQyxZQUFZRCxTQUFTLEVBQUUyRCxJQUFJO2NBQzFCLEtBQUssQ0FBQztnQkFDTCxHQUFHQSxJQUFJO2dCQUNQL0MsVUFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2VBQzNCLENBQUM7Y0FDRixJQUFJLENBQUMsQ0FBQVosU0FBVSxHQUFHQSxTQUFTO2NBQzNCLElBQUksQ0FBQyxDQUFBM0MsVUFBVyxHQUFHLElBQUlpRSxXQUFBLENBQUFnQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUVLLElBQUksQ0FBQ3RHLFVBQVUsQ0FBQztZQUNwRTs7VUFDQUgsT0FBQSxDQUFBd0csV0FBQSxHQUFBQSxXQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JERCxJQUFBRSxZQUFBLEdBQUE5SCxPQUFBO1VBRU0sTUFBTzJHLFlBQVk7WUFDeEIsQ0FBQTNDLEdBQUksR0FBNkIsSUFBSUMsR0FBRyxFQUFFO1lBQzFDLENBQUF6QyxLQUFNLEdBQWtCLEVBQUU7WUFDMUIsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBMEMsU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBQ0FDLFlBQVlELFNBQVM7Y0FDcEIsSUFBSSxDQUFDLENBQUFBLFNBQVUsR0FBR0EsU0FBUztZQUM1QjtZQUVBakQsSUFBSUEsQ0FBQ08sS0FBSyxFQUFFRCxVQUFVO2NBQ3JCLElBQUksQ0FBQyxDQUFBQyxLQUFNLEdBQUdzRSxNQUFNLENBQUNDLElBQUksQ0FBQ3ZFLEtBQUssQ0FBQyxDQUFDd0MsR0FBRyxDQUFDbEMsRUFBRSxJQUFHO2dCQUN6QyxNQUFNa0QsV0FBVyxHQUFHLElBQUk4QyxZQUFBLENBQUFGLFdBQVcsQ0FBQyxJQUFJLENBQUMxRCxTQUFTLEVBQUU7a0JBQUVwQyxFQUFFO2tCQUFFLEdBQUdOLEtBQUssQ0FBQ00sRUFBRTtnQkFBQyxDQUFFLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxDQUFBTixLQUFNLENBQUNnRCxJQUFJLENBQUNRLFdBQVcsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLENBQUFoQixHQUFJLENBQUNPLEdBQUcsQ0FBQ3pDLEVBQUUsRUFBRWtELFdBQVcsQ0FBQztnQkFDOUIsT0FBT0EsV0FBVztjQUNuQixDQUFDLENBQUM7WUFDSDtZQUVBUCxHQUFHQSxDQUFDM0MsRUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFrQyxHQUFJLENBQUNTLEdBQUcsQ0FBQzNDLEVBQUUsQ0FBQztZQUN6QjtZQUNBZCxHQUFHQSxDQUFDYyxFQUFVO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQWtDLEdBQUksQ0FBQ2hELEdBQUcsQ0FBQ2MsRUFBRSxDQUFDO1lBQ3pCOztVQUNBVixPQUFBLENBQUF1RixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7O1VDakNEOztVQUVBYixNQUFBLENBQUFpQyxjQUFBLENBQUEzRyxPQUFBO1lBQ0E0RyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDREEsSUFBQTdILGdCQUFBLEdBQUFILE9BQUE7VUFFQSxJQUFBbUYsTUFBQSxHQUFBbkYsT0FBQTtVQUNBLElBQUFpSSxPQUFBLEdBQUFqSSxPQUFBO1VBQ0EsSUFBQWtJLE1BQUEsR0FBQWxJLE9BQUE7VUFDQSxJQUFBbUksZUFBQSxHQUFBbkksT0FBQTtVQUNBLElBQUFvSSxTQUFBLEdBQUFwSSxPQUFBO1VBUEE7O1VBU00sTUFBT1EsWUFBYSxTQUFReUgsT0FBQSxDQUFBdkMsYUFBMkI7WUFDNUQyQyxPQUFPO1lBQ1AsQ0FBQXZCLEtBQU07WUFDTixDQUFBd0IsUUFBUztZQUNULENBQUFDLGdCQUFpQjtZQUNqQixJQUFJQSxnQkFBZ0JBLENBQUE7Y0FDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsZ0JBQWlCO1lBQzlCO1lBRUEsSUFBSUMsZUFBZUEsQ0FBQTtjQUNsQixPQUFPLElBQUksQ0FBQyxDQUFBRixRQUFTO1lBQ3RCO1lBQ0EsQ0FBQUcsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUEsQ0FBQUMsSUFBSztZQUNMLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsSUFBWTtjQUNwQixJQUFJLENBQUMsQ0FBQUEsSUFBSyxHQUFHQSxJQUFJO1lBQ2xCO1lBQ0EsQ0FBQUMsWUFBYTtZQUNiLElBQUlBLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBRUEsSUFBSUMsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFILE9BQVE7WUFDckI7WUFDQSxJQUFJM0IsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxDQUFBK0IsS0FBTSxHQUErQixJQUFJWCxNQUFBLENBQUFZLFlBQVksQ0FBQ1gsZUFBQSxDQUFBekcsTUFBTSxDQUFDcUgsU0FBUyxDQUFDO1lBQ3ZFLElBQUlGLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUViLEtBQUs7WUFDMUI7WUFDQSxJQUFJVixLQUFLQSxDQUFBO2NBQ1IsT0FBTyxLQUFLLENBQUNBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQXVCLEtBQU0sQ0FBQ3ZCLEtBQUs7WUFDeEM7WUFFQSxDQUFBMEIsS0FBTSxHQUFxQixJQUFJL0UsR0FBRyxFQUFFO1lBQ3BDLENBQUF1RSxlQUFnQjtZQUNoQixDQUFBUyxTQUFVLEdBQTBCLElBQUloRixHQUFHLEVBQUU7WUFDN0MsSUFBSStFLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUE3RSxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUEwRSxLQUFNLENBQUNLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FDM0NoSixnQkFBQSxDQUFBUyxZQUFZLENBQUN3SSxRQUFRLENBQUMsSUFBSSxDQUFDO2NBQzNCLElBQUksQ0FBQyxDQUFBdEMsS0FBTSxHQUFHLElBQUkzQixNQUFBLENBQUFNLFNBQVMsRUFBRTtjQUM3Qm9CLFVBQVUsQ0FBQ3ZHLEtBQUssR0FBRyxJQUFJO1lBQ3hCO1lBQ0EsTUFBTVcsSUFBSUEsQ0FBQ2EsRUFBRTtjQUNaLElBQUk7Z0JBQ0gsSUFBSSxDQUFDdUgsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLElBQUksQ0FBQyxDQUFBVixZQUFhLEdBQUc3RyxFQUFFO2dCQUV2QixNQUFNLElBQUksQ0FBQyxDQUFBZ0YsS0FBTSxDQUFDN0YsSUFBSSxDQUFDYSxFQUFFLENBQUM7Z0JBRTFCK0UsVUFBVSxDQUFDeUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBeEMsS0FBTTtlQUMxQixDQUFDLE9BQU95QyxDQUFDLEVBQUUsQyxDQUNYLFNBQVM7Z0JBQ1QsS0FBSyxDQUFDakMsS0FBSyxHQUFHLElBQUk7Z0JBQ2xCLElBQUksQ0FBQytCLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBRyxnQkFBZ0JBLENBQUNDLE1BQU07Y0FDdEIsSUFBSTtnQkFDSCxJQUFJLElBQUksQ0FBQyxDQUFBUixTQUFVLENBQUN4RSxHQUFHLENBQUNnRixNQUFNLENBQUMsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBUixTQUFVLENBQUNqSSxHQUFHLENBQUN5SSxNQUFNLENBQUM7Z0JBRW5FLElBQUksQ0FBQyxDQUFBakIsZUFBZ0IsR0FBR0osU0FBQSxDQUFBc0IsUUFBUSxDQUFDMUksR0FBRyxDQUFDO2tCQUFFMkgsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBQSxZQUFhO2tCQUFFYyxNQUFNO2tCQUFFRSxJQUFJLEVBQUU7Z0JBQUksQ0FBRSxDQUFDO2dCQUM5RixJQUFJLENBQUMsQ0FBQVYsU0FBVSxDQUFDMUUsR0FBRyxDQUFDa0YsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBakIsZUFBZ0IsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLENBQUFBLGVBQWdCLENBQUN2SCxJQUFJLENBQUM7a0JBQUVhLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQTZHLFlBQWE7a0JBQUVjO2dCQUFNLENBQUUsQ0FBQztnQkFFOUQsSUFBSSxDQUFDTixZQUFZLEVBQUU7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLENBQUFYLGVBQWdCO2VBQzVCLENBQUMsT0FBT2UsQ0FBQyxFQUFFO2dCQUNYSyxPQUFPLENBQUNoRSxLQUFLLENBQUMyRCxDQUFDLENBQUM7O1lBRWxCO1lBRUFNLE9BQU8sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDcEIsSUFBSTtnQkFDSCxJQUFJLENBQUNSLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNLElBQUksQ0FBQ3ZDLEtBQUssQ0FBQzdGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTBILFlBQWEsQ0FBQztnQkFDekMsSUFBSSxDQUFDbUIsT0FBTyxDQUFDLGNBQWMsQ0FBQztlQUM1QixDQUFDLE9BQU9QLENBQUMsRUFBRTtnQkFDWEssT0FBTyxDQUFDaEUsS0FBSyxDQUFDMkQsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDRixRQUFRLEdBQUcsS0FBSzs7WUFFdkIsQ0FBQztZQUVEVSxhQUFhLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzFCLElBQUk7Z0JBQ0gsTUFBTSxJQUFJLENBQUNqRCxLQUFLLENBQUM3RixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEwSCxZQUFhLENBQUM7ZUFDekMsQ0FBQyxPQUFPWSxDQUFDLEVBQUU7Z0JBQ1hLLE9BQU8sQ0FBQ2hFLEtBQUssQ0FBQzJELENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ0YsUUFBUSxHQUFHLEtBQUs7O1lBRXZCLENBQUM7WUFFRGxJLEtBQUtBLENBQUE7Y0FDSmhCLGdCQUFBLENBQUFTLFlBQVksQ0FBQ08sS0FBSyxFQUFFO1lBQ3JCO1lBRUE2SSxjQUFjQSxDQUFDbEksRUFBRTtjQUNoQixJQUFJLENBQUMsQ0FBQXlHLGdCQUFpQixHQUFHekcsRUFBRTtjQUUzQixJQUFJLENBQUM0RyxJQUFJLEdBQUcsVUFBVTtjQUN0QixJQUFJLENBQUNvQixPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCOztVQUNBMUksT0FBQSxDQUFBWixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbElELElBQUF5SixNQUFBLEdBQUFqSyxPQUFBO1VBT00sU0FBVWtLLFFBQVFBLENBQUM7WUFBRTVKLEtBQUs7WUFBRXVJO1VBQUssQ0FBRTtZQUN4QyxJQUFJdkksS0FBSyxDQUFDd0csS0FBSyxDQUFDbEIsS0FBSyxFQUFFdUUsSUFBSSxLQUFLLEdBQUcsRUFBRTtjQUNwQyxPQUFPRixNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLHlCQUFtQjs7WUFFM0IsT0FDQ0gsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFBSCxNQUFBLENBQUExRCxPQUFBLENBQUE4RCxRQUFBLFFBQ0NKLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEscUJBQWUsQ0FDYjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQSxJQUFBSCxNQUFBLEdBQUFqSyxPQUFBO1VBQ0EsSUFBQXNLLFNBQUEsR0FBQXRLLE9BQUE7VUFDQSxJQUFBdUssT0FBQSxHQUFBdkssT0FBQTtVQUNBO1VBRU0sU0FBVXdLLE1BQU1BLENBQUM7WUFBRW5KO1VBQUksQ0FBRTtZQUM5QixPQUNDNEksTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFTSyxTQUFTLEVBQUM7WUFBbUIsR0FFckNSLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsQ0FBQ0UsU0FBQSxDQUFBSSxhQUFhLE9BQUcsRUFDakJULE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsQ0FBQ0csT0FBQSxDQUFBSSxXQUFXLE9BQUcsQ0FDTjtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBLElBQUFWLE1BQUEsR0FBQWpLLE9BQUE7VUFDQSxJQUFBNEssT0FBQSxHQUFBNUssT0FBQTtVQUNBLElBQUE2SyxRQUFBLEdBQUE3SyxPQUFBO1VBRUEsSUFBQThLLFNBQUEsR0FBQTlLLE9BQUE7VUFFTSxTQUFVMEssYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQUVwSyxLQUFLO2NBQUV1STtZQUFLLENBQUUsR0FBRyxJQUFBZ0MsUUFBQSxDQUFBRSxtQkFBbUIsR0FBRTtZQUM5Q2xFLFVBQVUsQ0FBQ3ZHLEtBQUssR0FBR0EsS0FBSztZQUN4QixJQUFJb0gsUUFBUTtZQUNaNUIsTUFBTSxDQUFDQyxJQUFJLENBQUN6RixLQUFLLENBQUN3RyxLQUFLLENBQUN2RixVQUFVLENBQUNDLEtBQUssQ0FBQyxDQUFDNEMsT0FBTyxDQUFDNEcsS0FBSyxJQUFHO2NBQ3pELElBQUl0RCxRQUFRLEVBQUU7Y0FDZCxNQUFNdUQsT0FBTyxHQUFHM0ssS0FBSyxDQUFDd0csS0FBSyxDQUFDdkYsVUFBVSxDQUFDQyxLQUFLLEdBQUd3SixLQUFLLENBQUM7Y0FDckQsSUFBSUMsT0FBTyxJQUFJQSxPQUFPLENBQUM3SSxJQUFJLEtBQUssaUJBQWlCLEVBQUVzRixRQUFRLEdBQUd1RCxPQUFPO1lBQ3RFLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQ3ZELFFBQVEsRUFBRSxPQUFPLElBQUk7WUFFMUIsTUFBTXdELDhCQUE4QixHQUFJNUgsWUFBNEIsSUFBWTtjQUMvRSxPQUFPQSxZQUFZLENBQUM0QyxNQUFNLENBQUMsQ0FBQ3pDLEtBQUssRUFBRW9FLElBQUksS0FBSTtnQkFDMUMsTUFBTXNELGVBQWUsR0FBR3JGLE1BQU0sQ0FBQ3NGLE1BQU0sQ0FBQ3ZELElBQUksQ0FBQ3RHLFVBQVUsQ0FBQyxDQUFDOEosSUFBSSxDQUFDM0QsUUFBUSxJQUFHO2tCQUN0RSxNQUFNNEQsUUFBUSxHQUFHNUQsUUFBUSxDQUFDckcsSUFBSSxFQUFFaUssUUFBUTtrQkFDeEMsT0FDQ0EsUUFBUSxJQUNSQSxRQUFRLENBQUNDLEtBQUssS0FBS0MsU0FBUyxJQUM1QkYsUUFBUSxDQUFDRyxPQUFPLEtBQUtELFNBQVMsSUFDOUJGLFFBQVEsQ0FBQ0ksS0FBSyxLQUFLRixTQUFTO2dCQUU5QixDQUFDLENBQUM7Z0JBQ0YsT0FBTy9ILEtBQUssSUFBSTBILGVBQWUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2NBQ3pDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTixDQUFDO1lBRUQsTUFBTVEsSUFBSSxHQUFHVCw4QkFBOEIsQ0FBQzVLLEtBQUssQ0FBQ3dHLEtBQUssQ0FBQ3hELFlBQVksQ0FBQztZQUVyRSxPQUNDMkcsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFTSyxTQUFTLEVBQUM7WUFBYyxHQUNoQ1IsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxhQUFLMUMsUUFBUSxDQUFDdkYsS0FBSyxDQUFNLEVBQ3pCOEgsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDUSxPQUFBLENBQUFnQixLQUFLO2NBQ0xDLE9BQU8sRUFBRTtnQkFDUkMsTUFBTSxFQUFFLENBQUN4TCxLQUFLLENBQUN3RyxLQUFLLENBQUN4RCxZQUFZLENBQUMwQyxNQUFNLEdBQUcyRixJQUFJLEVBQUVBLElBQUksQ0FBQztnQkFDdERJLE1BQU0sRUFBRSxDQUFDbEQsS0FBSyxDQUFDbUQsYUFBYSxDQUFDQyxPQUFPLEVBQUVwRCxLQUFLLENBQUNtRCxhQUFhLENBQUNULEtBQUssQ0FBQztnQkFDaEUsR0FBR1QsU0FBQSxDQUFBb0IsZ0JBQWdCO2dCQUNuQkMsVUFBVSxFQUFFckIsU0FBQSxDQUFBc0I7O1lBQ1osRUFDQSxDQUNPO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaERPLE1BQU1GLGdCQUFnQixHQUFBOUssT0FBQSxDQUFBOEssZ0JBQUEsR0FBRztZQUMvQkcsS0FBSyxFQUFFO2NBQ05DLE9BQU8sRUFBRSxVQUFVLENBQUM7YUFDcEI7WUFDREMsTUFBTSxFQUFFO2NBQ1BDLFFBQVEsRUFBRSxRQUFRO2NBQ2xCQyxlQUFlLEVBQUU7YUFDakI7WUFDREMsS0FBSyxFQUFFO2NBQ050SyxJQUFJLEVBQUUsT0FBTztjQUNidUssTUFBTSxFQUFFO2FBQ1I7WUFDREMsVUFBVSxFQUFFO2NBQ1hDLFNBQVMsRUFBRUEsQ0FBQzdFLEtBQUssRUFBRTNHLElBQUksS0FBSTtnQkFDMUIsTUFBTTtrQkFDTHlMLFdBQVc7a0JBQ1hDLENBQUMsRUFBRTtvQkFDRkMsTUFBTSxFQUFFO3NCQUFFbEI7b0JBQU07a0JBQUU7Z0JBQ2xCLENBQ0QsR0FBR3pLLElBQUk7Z0JBRVIsT0FBT3lLLE1BQU0sQ0FBQ2dCLFdBQVcsQ0FBQztjQUMzQjs7V0FFRDtVQUVNLE1BQU1WLHFCQUFxQixHQUFBaEwsT0FBQSxDQUFBZ0wscUJBQUEsR0FBRyxDQUNwQztZQUNDYSxVQUFVLEVBQUUsR0FBRztZQUNmcEIsT0FBTyxFQUFFO2NBQ1JVLE1BQU0sRUFBRTtnQkFDUEMsUUFBUSxFQUFFO2VBQ1Y7Y0FDREUsS0FBSyxFQUFFO2dCQUNOUSxLQUFLLEVBQUUsT0FBTztnQkFDZFAsTUFBTSxFQUFFOzs7V0FHVixFQUNEO1lBQ0NNLFVBQVUsRUFBRSxHQUFHO1lBQ2ZwQixPQUFPLEVBQUU7Y0FDUlUsTUFBTSxFQUFFO2dCQUNQQyxRQUFRLEVBQUUsUUFBUTtnQkFDbEJDLGVBQWUsRUFBRTtlQUNqQjtjQUNEQyxLQUFLLEVBQUU7Z0JBQ05RLEtBQUssRUFBRTs7O1dBR1QsQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuREQsSUFBQWpELE1BQUEsR0FBQWpLLE9BQUE7VUFDQSxJQUFBNEssT0FBQSxHQUFBNUssT0FBQTtVQUNBLElBQUE2SyxRQUFBLEdBQUE3SyxPQUFBO1VBRUEsSUFBQThLLFNBQUEsR0FBQTlLLE9BQUE7VUFFTSxTQUFVMkssV0FBV0EsQ0FBQTtZQUMxQixNQUFNO2NBQUVySyxLQUFLO2NBQUV1SSxLQUFLO2NBQUUvQjtZQUFLLENBQUUsR0FBRyxJQUFBK0QsUUFBQSxDQUFBRSxtQkFBbUIsR0FBRTtZQUNyRCxNQUFNO2NBQUV2SixLQUFLLEVBQUVELFVBQVU7Y0FBRTZCO1lBQUssQ0FBRSxHQUFHMEQsS0FBSyxDQUFDdkYsVUFBVTtZQUVyRCxNQUFNNEwsUUFBUSxHQUFHckgsTUFBTSxDQUFDQyxJQUFJLENBQUN4RSxVQUFVLENBQUMsQ0FBQzZMLElBQUksQ0FBQ0MsR0FBRyxJQUFJOUwsVUFBVSxDQUFDOEwsR0FBRyxDQUFDLENBQUNqTCxJQUFJLEtBQUssUUFBUSxDQUFDO1lBQ3ZGLElBQUksQ0FBQytLLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFDMUIsTUFBTTVCLEtBQUssR0FBR2pMLEtBQUssQ0FBQ3dHLEtBQUssQ0FBQ3hELFlBQVksQ0FBQzRDLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUUwQixJQUFJLEtBQU1BLElBQUksQ0FBQ3RHLFVBQVUsQ0FBQzRMLFFBQVEsQ0FBQyxHQUFHaEgsR0FBRyxHQUFHLENBQUMsR0FBR0EsR0FBSSxFQUFFLENBQUMsQ0FBQztZQUM1RyxNQUFNd0YsSUFBSSxHQUFHckwsS0FBSyxDQUFDd0csS0FBSyxDQUFDeEQsWUFBWSxDQUFDMEMsTUFBTSxHQUFHdUYsS0FBSztZQUVwRCxPQUNDdEIsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFTSyxTQUFTLEVBQUM7WUFBYyxHQUNoQ1IsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxhQUFLdkIsS0FBSyxDQUFDeUUsTUFBTSxDQUFNLEVBQ3ZCckQsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDUSxPQUFBLENBQUFnQixLQUFLO2NBQ0xDLE9BQU8sRUFBRTtnQkFDUkMsTUFBTSxFQUFFLENBQUNILElBQUksRUFBRXJMLEtBQUssQ0FBQ3dHLEtBQUssQ0FBQ3hELFlBQVksQ0FBQzBDLE1BQU0sR0FBRzJGLElBQUksQ0FBQztnQkFDdERJLE1BQU0sRUFBRSxDQUFDbEQsS0FBSyxDQUFDbUQsYUFBYSxDQUFDQyxPQUFPLEVBQUVwRCxLQUFLLENBQUNtRCxhQUFhLENBQUNULEtBQUssQ0FBQztnQkFDaEUsR0FBR1QsU0FBQSxDQUFBb0IsZ0JBQWdCO2dCQUNuQkMsVUFBVSxFQUFFckIsU0FBQSxDQUFBc0I7O1lBQ1osRUFDQSxDQUNPO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUFuQyxNQUFBLEdBQUFqSyxPQUFBO1VBcUJPLE1BQU11TixnQkFBZ0IsR0FBQW5NLE9BQUEsQ0FBQW1NLGdCQUFBLEdBQUd0RCxNQUFBLENBQUExRCxPQUFLLENBQUNpSCxhQUFhLENBQUMsRUFBb0MsQ0FBQztVQUNsRixNQUFNekMsbUJBQW1CLEdBQUdBLENBQUEsS0FBTWQsTUFBQSxDQUFBMUQsT0FBSyxDQUFDa0gsVUFBVSxDQUFDRixnQkFBZ0IsQ0FBQztVQUFDbk0sT0FBQSxDQUFBMkosbUJBQUEsR0FBQUEsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEI1RSxJQUFBZCxNQUFBLEdBQUFqSyxPQUFBO1VBRUEsSUFBQTBOLE9BQUEsR0FBQTFOLE9BQUE7VUFDQSxJQUFBNkssUUFBQSxHQUFBN0ssT0FBQTtVQUNBLElBQUEyTixXQUFBLEdBQUEzTixPQUFBO1VBQ0EsSUFBQThELFNBQUEsR0FBQTlELE9BQUE7VUFDQSxJQUFBNE4sV0FBQSxHQUFBNU4sT0FBQTtVQUNBLElBQUE2TixpQkFBQSxHQUFBN04sT0FBQTtVQUNNLFNBQVU4TixXQUFXQSxDQUFBO1lBQzFCLE1BQU07Y0FBRUMsVUFBVTtjQUFFek4sS0FBSztjQUFFME47WUFBYSxDQUFFLEdBQUcsSUFBQW5ELFFBQUEsQ0FBQUUsbUJBQW1CLEdBQUU7WUFFbEUsTUFBTWtELElBQUksR0FBR0EsQ0FBQSxLQUFNaEUsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFvQnRJLEVBQUUsRUFBRXhCLEtBQUssQ0FBQ3FJO1lBQVksRUFBSTtZQUVqRSxJQUFJb0YsVUFBVSxDQUFDcE4sSUFBSSxLQUFLLEtBQUssRUFBRTtZQUUvQixPQUNDc0osTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDc0QsT0FBQSxDQUFBUSxNQUFNO2NBQ056RCxTQUFTLEVBQUMsV0FBVztjQUNyQitCLFFBQVEsRUFBQyxPQUFPO2NBQ2hCMkIsSUFBSSxFQUFFSixVQUFVLENBQUNwTixJQUFJO2NBQ3JCeU4sT0FBTyxFQUFFQSxDQUFBLEtBQU1KLGFBQWEsQ0FBQztnQkFBRXJOLElBQUksRUFBRTtjQUFLLENBQUU7WUFBQyxHQUU3Q3NKLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsQ0FBQ3lELGlCQUFBLENBQUFRLGVBQWU7Y0FBQzVELFNBQVMsRUFBQyw0QkFBNEI7Y0FBQSwwQkFBd0IsRUFBRTtjQUFBLDBCQUF3QjtZQUFNLEdBQzlHUixNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUN1RCxXQUFBLENBQUFXLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFUixVQUFVLENBQUNyRixJQUFJO2NBQzFCbUQsT0FBTyxFQUFFO2dCQUNSMkMsSUFBSSxFQUFFdkUsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDNkQsSUFBSSxPQUFHO2dCQUNkLGtCQUFrQixFQUFFaEUsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDdEcsU0FBQSxDQUFBMkssY0FBYztrQkFBQzVHLElBQUksRUFBRWtHLFVBQVUsQ0FBQzFNO2dCQUFJLEVBQUk7Z0JBQzdEcU4sT0FBTyxFQUFFekUsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDd0QsV0FBQSxDQUFBZSx3QkFBd0I7a0JBQUM5RyxJQUFJLEVBQUVrRyxVQUFVLENBQUMxTTtnQkFBSTs7WUFDeEQsRUFDQSxDQUNlLENBQ1Y7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0EsSUFBQXVOLE1BQUEsR0FBQTVPLE9BQUE7VUFDQSxJQUFBNk8sR0FBQSxHQUFBN08sT0FBQTtVQUNBLElBQUFxRixPQUFBLEdBQUFyRixPQUFBO1VBQ0EsSUFBQWlLLE1BQUEsR0FBQWpLLE9BQUE7VUFFQSxJQUFBOE8sTUFBQSxHQUFBOU8sT0FBQTtVQUVBLE1BQU0rTyxHQUFHLEdBQUcxSixPQUFBLENBQUFrQixPQUFNLEVBQUVDLE1BQU0sRUFBRXdJLFFBQVEsSUFBSSxRQUFRO1VBQzFDLFNBQVVDLEtBQUtBLENBQUM7WUFBRTNPLEtBQUs7WUFBRXVJO1VBQUssQ0FBRTtZQUNyQyxPQUNDb0IsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFBSCxNQUFBLENBQUExRCxPQUFBLENBQUE4RCxRQUFBLFFBQ0NKLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsQ0FBQ3lFLEdBQUEsQ0FBQUssYUFBYSxRQUNiakYsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDMEUsTUFBQSxDQUFBRyxLQUFjO2NBQUN4RSxTQUFTLEVBQUMsMEJBQTBCO2NBQUM3RyxJQUFJLEVBQUVnTCxNQUFBLENBQUFPLEtBQUssQ0FBQ0M7WUFBVSxHQUMxRW5GLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUE7Y0FBSUssU0FBUyxFQUFDO1lBQU8sR0FBRW5LLEtBQUssQ0FBQ3dHLEtBQUssQ0FBQ3BGLE1BQU0sQ0FBQ1MsS0FBSyxDQUFNLEVBQ3JEOEgsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxZQUFJdkIsS0FBSyxDQUFDd0csS0FBSyxDQUFLLENBQ0osQ0FDRixDQUNkO1VBRUw7Ozs7Ozs7Ozs7O1VDbkJBOztVQUVBdkosTUFBQSxDQUFBaUMsY0FBQSxDQUFBM0csT0FBQTtZQUNBNEcsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUE2RyxHQUFBLEdBQUE3TyxPQUFBO1VBRUEsSUFBQTJOLFdBQUEsR0FBQTNOLE9BQUE7VUFDQSxJQUFBaUssTUFBQSxHQUFBakssT0FBQTtVQUNBLElBQUE2SyxRQUFBLEdBQUE3SyxPQUFBO1VBQ0EsSUFBQXNQLFNBQUEsR0FBQXRQLE9BQUE7VUFDTSxTQUFVdVAsTUFBTUEsQ0FBQTtZQUNyQixNQUFNO2NBQUV6SSxLQUFLO2NBQUUrQixLQUFLO2NBQUVtRjtZQUFhLENBQUUsR0FBRyxJQUFBbkQsUUFBQSxDQUFBRSxtQkFBbUIsR0FBRTtZQUM3RCxNQUFNO2NBQUU1SSxLQUFLO2NBQUVGLFdBQVc7Y0FBRUksT0FBTztjQUFFbU4sS0FBSztjQUFFN047WUFBTyxDQUFFLEdBQUdtRixLQUFLLENBQUNwRixNQUFNO1lBQ3BFLE1BQU0rTixPQUFPLEdBQUdBLENBQUEsS0FBSztjQUNwQnpCLGFBQWEsQ0FBQztnQkFDYnJOLElBQUksRUFBRSxJQUFJO2dCQUNWK0gsSUFBSSxFQUFFO2VBQ04sQ0FBQztZQUNILENBQUM7WUFDRCxPQUNDdUIsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFTSyxTQUFTLEVBQUM7WUFBd0IsR0FDMUNSLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUE7Y0FBUUssU0FBUyxFQUFDO1lBQWtCLEdBQ25DUixNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBO2NBQVNLLFNBQVMsRUFBQztZQUFjLEdBQ2hDUixNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUN5RSxHQUFBLENBQUFhLFdBQVc7Y0FBQzdLLE1BQU0sRUFBQyxRQUFRO2NBQUM4SyxHQUFHLEVBQUV0TixPQUFPO2NBQUV1TixHQUFHLEVBQUV6TjtZQUFLLEVBQUksRUFDekQ4SCxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLGFBQUtqSSxLQUFLLENBQU0sRUFDaEI4SCxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBO2NBQUdLLFNBQVMsRUFBQztZQUFjLEdBQUV4SSxXQUFXLENBQUssRUFDN0NnSSxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUEwQixHQUN4Q1IsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBMEIsR0FDdkMrRSxLQUFLLElBQUl2RixNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUNrRixTQUFBLENBQUFPLFFBQVE7Y0FBQ0MsS0FBSyxFQUFFakgsS0FBSyxDQUFDMkcsS0FBSztjQUFFbk8sSUFBSSxFQUFFbU87WUFBSyxFQUFJLEVBQ3REN04sT0FBTyxJQUFJc0ksTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDa0YsU0FBQSxDQUFBTyxRQUFRO2NBQUNDLEtBQUssRUFBRWpILEtBQUssQ0FBQ2xILE9BQU87Y0FBRU4sSUFBSSxFQUFFTTtZQUFPLEVBQUksQ0FDeEQsQ0FDRCxDQUNHLEVBQ1ZzSSxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUFTLEdBQ3ZCUixNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUN1RCxXQUFBLENBQUFvQyxNQUFNO2NBQ05DLFFBQVE7Y0FDUnBNLElBQUksRUFBQyxlQUFlO2NBQ3BCNkcsU0FBUyxFQUFDLDhDQUE4QztjQUN4RGdGLE9BQU8sRUFBRUE7WUFBTyxHQUVmNUcsS0FBSyxDQUFDb0gsT0FBTyxDQUFDekIsSUFBSSxDQUNYLENBQ0osQ0FDRSxFQUNUdkUsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBUyxFQUFPLENBQ3RCO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0NBLElBQUFvRSxHQUFBLEdBQUE3TyxPQUFBO1VBQ0EsSUFBQXFGLE9BQUEsR0FBQXJGLE9BQUE7VUFDQSxJQUFBa1EsTUFBQSxHQUFBbFEsT0FBQTtVQUVBLElBQUFpSyxNQUFBLEdBQUFqSyxPQUFBO1VBQ0EsSUFBQW1RLENBQUEsR0FBQW5RLE9BQUE7VUFFQSxJQUFBNkssUUFBQSxHQUFBN0ssT0FBQTtVQUNBLElBQUFvUSxZQUFBLEdBQUFwUSxPQUFBO1VBQ0EsSUFBQThPLE1BQUEsR0FBQTlPLE9BQUE7VUFDQSxJQUFBcVEsT0FBQSxHQUFBclEsT0FBQTtVQUVBLElBQUFzUSxRQUFBLEdBQUF0USxPQUFBO1VBQ0EsSUFBQTJOLFdBQUEsR0FBQTNOLE9BQUE7VUFDQSxJQUFBOEQsU0FBQSxHQUFBOUQsT0FBQTtVQUNBLElBQUF1USxRQUFBLEdBQUF2USxPQUFBO1VBRUEsTUFBTXdRLE9BQU8sR0FBR25MLE9BQUEsQ0FBQWtCLE9BQU0sRUFBRUMsTUFBTSxFQUFFd0ksUUFBUSxJQUFJLFFBQVE7VUFDN0M7VUFBVSxTQUNSdE8sSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQTJCO1lBQy9DLE1BQU0sQ0FBQ2dILEtBQUssRUFBRW1KLFFBQVEsQ0FBQyxHQUFHLElBQUF4RyxNQUFBLENBQUF5RyxRQUFRLEVBQUNwUSxLQUFLLENBQUNnSCxLQUFLLENBQUM7WUFDL0MsTUFBTSxDQUFDeUcsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRyxJQUFBL0QsTUFBQSxDQUFBeUcsUUFBUSxFQUFhO2NBQUUvUCxJQUFJLEVBQUUsS0FBSztjQUFFVSxJQUFJLEVBQUU7WUFBSSxDQUFFLENBQUM7WUFDckYsTUFBTSxDQUFDcUgsSUFBSSxFQUFFaUksT0FBTyxDQUFDLEdBQUcsSUFBQTFHLE1BQUEsQ0FBQXlHLFFBQVEsRUFBeUIsU0FBUyxDQUFDO1lBQ25FLE1BQU0sR0FBR0Usb0JBQW9CLENBQUMsR0FBRyxJQUFBM0csTUFBQSxDQUFBeUcsUUFBUSxFQUFDcFEsS0FBSyxDQUFDd0csS0FBSyxFQUFFeEQsWUFBWSxFQUFFOUIsS0FBSyxFQUFFd0UsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUN4RixNQUFNLENBQUM2SyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHLElBQUE3RyxNQUFBLENBQUF5RyxRQUFRLEVBQUNwUSxLQUFLLENBQUN5USxhQUFhLEVBQUUsQ0FBQztZQUN6RCxNQUFNLENBQUMxSCxRQUFRLEVBQUUySCxXQUFXLENBQUMsR0FBRyxJQUFBL0csTUFBQSxDQUFBeUcsUUFBUSxFQUFDcFEsS0FBSyxDQUFDK0ksUUFBUSxDQUFDO1lBQ3hELE1BQU07Y0FBRVI7WUFBSyxDQUFFLEdBQUd2SSxLQUFLO1lBRXZCLElBQUE0UCxNQUFBLENBQUFlLFNBQVMsRUFBQyxDQUFDM1EsS0FBSyxDQUFDLEVBQUUsTUFBTW1RLFFBQVEsQ0FBQ25RLEtBQUssQ0FBQ2dILEtBQUssQ0FBQyxDQUFDO1lBQy9DLElBQUE0SSxNQUFBLENBQUFlLFNBQVMsRUFBQyxDQUFDM1EsS0FBSyxDQUFDLEVBQUUsTUFBTXNRLG9CQUFvQixDQUFDdFEsS0FBSyxDQUFDd0csS0FBSyxFQUFFeEQsWUFBWSxFQUFFOUIsS0FBSyxFQUFFd0UsTUFBTSxJQUFJLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQztZQUM3RyxJQUFBa0ssTUFBQSxDQUFBZSxTQUFTLEVBQUMsQ0FBQzNRLEtBQUssQ0FBQyxFQUFFLE1BQU13USxRQUFRLENBQUN4USxLQUFLLENBQUN5USxhQUFhLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQztZQUNuRSxJQUFBYixNQUFBLENBQUFlLFNBQVMsRUFBQyxDQUFDM1EsS0FBSyxDQUFDLEVBQUUsTUFBTTBRLFdBQVcsQ0FBQzFRLEtBQUssQ0FBQytJLFFBQVEsQ0FBQyxFQUFFLGtCQUFrQixDQUFDO1lBQ3pFLElBQUksQ0FBQy9CLEtBQUssRUFBRSxPQUFPMkMsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDeUUsR0FBQSxDQUFBcUMsVUFBVTtjQUFDN0gsUUFBUSxFQUFFO1lBQUksRUFBSTtZQUNqRCxJQUFJLENBQUMvSSxLQUFLLENBQUN3RyxLQUFLLENBQUNPLEtBQUssRUFBRSxPQUFPNEMsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDK0YsQ0FBQSxDQUFBakcsUUFBUTtjQUFDNUosS0FBSyxFQUFFQSxLQUFLO2NBQUV1SSxLQUFLLEVBQUVBO1lBQUssRUFBSTtZQUN2RSxJQUFJdkksS0FBSyxDQUFDd0csS0FBSyxDQUFDakIsaUJBQWlCLEtBQUssQ0FBQyxFQUFFLE9BQU9vRSxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUMwRSxNQUFBLENBQUFHLEtBQUs7Y0FBQzNPLEtBQUssRUFBRUEsS0FBSztjQUFFdUksS0FBSyxFQUFFQTtZQUFLLEVBQUk7WUFFckYsTUFBTWIsS0FBSyxHQUFHO2NBQUVhLEtBQUs7Y0FBRS9CLEtBQUssRUFBRXhHLEtBQUssQ0FBQ3dHLEtBQUs7Y0FBRXhHLEtBQUs7Y0FBRXlOLFVBQVU7Y0FBRUMsYUFBYTtjQUFFdEYsSUFBSTtjQUFFaUk7WUFBTyxDQUFFO1lBRTVGLE1BQU1RLEdBQUcsR0FBRyxzQkFBc0I5SCxRQUFRLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUNsRSxPQUNDWSxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUN5RSxHQUFBLENBQUFLLGFBQWE7Y0FBQ3pFLFNBQVMsRUFBRTBHO1lBQUcsR0FDNUJsSCxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUNTLFFBQUEsQ0FBQTBDLGdCQUFnQixDQUFDNkQsUUFBUTtjQUFDcEosS0FBSyxFQUFFQTtZQUFLLEdBQ3RDaUMsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDaUcsT0FBQSxDQUFBZCxNQUFNLE9BQUcsRUFDVnRGLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsQ0FBQ2tHLFFBQUEsQ0FBQWUsY0FBYyxPQUFHLEVBQ2xCcEgsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDdUQsV0FBQSxDQUFBVyxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRSxDQUFDLENBQUNqTyxLQUFLLENBQUNpSSxnQkFBZ0I7Y0FDbkMrSSxPQUFPO2NBQ1B6RixPQUFPLEVBQUU7Z0JBQ1IwRixLQUFLLEVBQUV0SCxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUNtRyxRQUFBLENBQUFpQixXQUFXLE9BQUc7Z0JBQ3RCQyxJQUFJLEVBQUV4SCxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUN0RyxTQUFBLENBQUE0TixZQUFZOztZQUNuQixFQUNBLEVBQ0Z6SCxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUNnRyxZQUFBLENBQUF0QyxXQUFXLE9BQUcsQ0FDWSxDQUNiO1VBRWxCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hEQSxJQUFBN0QsTUFBQSxHQUFBakssT0FBQTtVQUNBLElBQUE2SyxRQUFBLEdBQUE3SyxPQUFBO1VBQ0EsSUFBQTRPLE1BQUEsR0FBQTVPLE9BQUE7VUFDQSxJQUFBMlIsT0FBQSxHQUFBM1IsT0FBQTtVQUVNLFNBQVU0UixjQUFjQSxDQUFDO1lBQUUvSjtVQUFJLENBQUU7WUFDdEMsTUFBTTtjQUFFOEksT0FBTztjQUFFN0osS0FBSztjQUFFK0IsS0FBSztjQUFFdkk7WUFBSyxDQUFFLEdBQUcsSUFBQXVLLFFBQUEsQ0FBQUUsbUJBQW1CLEdBQUU7WUFDOUQsTUFBTW5ILElBQUksR0FBRytOLE9BQUEsQ0FBQXhDLEtBQUssQ0FBQ3RILElBQUksQ0FBQ3pGLElBQUksQ0FBQztZQUM3QixJQUFJK08sR0FBRyxHQUFHLGlDQUFpQ3RKLElBQUksQ0FBQ3pGLElBQUksRUFBRTtZQUN0RCxJQUFJOUIsS0FBSyxDQUFDaUksZ0JBQWdCLEVBQUVuRyxJQUFJLEtBQUt5RixJQUFJLENBQUN6RixJQUFJLEVBQUU7Y0FDL0MrTyxHQUFHLElBQUksU0FBUzs7WUFFakIsTUFBTWhQLEtBQUssR0FBRzBGLElBQUksQ0FBQzFGLEtBQUs7WUFFeEIsTUFBTTBQLFdBQVcsR0FBR0MsS0FBSyxJQUFHO2NBQzNCeFIsS0FBSyxDQUFDMEosY0FBYyxDQUFDbkMsSUFBSSxDQUFDO1lBQzNCLENBQUM7WUFDRCxPQUNDb0MsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFTSyxTQUFTLEVBQUUwRyxHQUFHO2NBQUUxQixPQUFPLEVBQUVvQztZQUFXLEdBQzVDNUgsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDd0UsTUFBQSxDQUFBbUQsVUFBVTtjQUFDbk8sSUFBSSxFQUFFQSxJQUFJO2NBQUV6QixLQUFLLEVBQUVBO1lBQUssRUFBSSxDQUMvQjtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCQSxJQUFBOEgsTUFBQSxHQUFBakssT0FBQTtVQUNBLElBQUE2SyxRQUFBLEdBQUE3SyxPQUFBO1VBQ0EsSUFBQWdTLEtBQUEsR0FBQWhTLE9BQUE7VUFDQSxJQUFBaVMsS0FBQSxHQUFBalMsT0FBQTtVQUNBLElBQUFrUyxlQUFBLEdBQUFsUyxPQUFBO1VBRUEsSUFBQTRPLE1BQUEsR0FBQTVPLE9BQUE7VUFDTSxTQUFVcVIsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUV2SyxLQUFLO2NBQUUrQixLQUFLO2NBQUV2STtZQUFLLENBQUUsR0FBRyxJQUFBdUssUUFBQSxDQUFBRSxtQkFBbUIsR0FBRTtZQUNyRCxNQUFNb0gsT0FBTyxHQUFHLHVCQUF1QjdSLEtBQUssQ0FBQ2lJLGdCQUFnQixHQUFHLG9CQUFvQixHQUFHLEVBQUUsRUFBRTtZQUMzRixNQUFNLENBQUM2SixVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHcEksTUFBQSxDQUFBMUQsT0FBSyxDQUFDbUssUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNNEIsU0FBUyxHQUFHUixLQUFLLElBQUc7Y0FDekJBLEtBQUssQ0FBQ1MsZUFBZSxFQUFFO2NBQ3ZCRixhQUFhLENBQUMsSUFBSSxDQUFDO2NBQ25CL1IsS0FBSyxDQUFDdUosT0FBTyxFQUFFO2NBQ2YySSxVQUFVLENBQUMsTUFBSztnQkFDZkgsYUFBYSxDQUFDLEtBQUssQ0FBQztjQUNyQixDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ1QsQ0FBQztZQUNELE9BQ0NwSSxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBO2NBQVFLLFNBQVMsRUFBQztZQUE0QixHQUM3Q1IsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNSLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUE7Y0FBU0ssU0FBUyxFQUFDO1lBQWUsR0FDakNSLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsYUFBS3ZCLEtBQUssQ0FBQzRKLElBQUksQ0FBQ0MsUUFBUSxDQUFNLEVBQzlCekksTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxlLEtBQ0d0RCxLQUFLLENBQUN4RCxZQUFZLENBQUM5QixLQUFLLEVBQUV3RSxNQUFNLEUsS0FBRzZDLEtBQUssQ0FBQzRKLElBQUksQ0FBQ25QLFlBQVksRSxJQUN0RCxDQUNFLEVBQ1YyRyxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLGtCQUNDSCxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUM0SCxLQUFBLENBQUFXLEtBQUs7Y0FBQ3ZRLElBQUksRUFBQyxNQUFNO2NBQUNxSSxTQUFTLEVBQUMsZ0JBQWdCO2NBQUNtSSxXQUFXLEVBQUUvSixLQUFLLENBQUM0SixJQUFJLENBQUNJLE1BQU07Y0FBRWpQLElBQUksRUFBQztZQUFRLEVBQUcsQ0FDckYsQ0FDTCxFQUNOcUcsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNSLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsQ0FBQzZILEtBQUEsQ0FBQWEsSUFBSTtjQUFDckksU0FBUyxFQUFFMEgsT0FBTztjQUFFM1EsS0FBSyxFQUFFc0YsS0FBSyxDQUFDdkYsVUFBVSxDQUFDQyxLQUFLO2NBQUV1UixPQUFPLEVBQUViLGVBQUEsQ0FBQU47WUFBYyxFQUFJLEVBQ3BGM0gsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDd0UsTUFBQSxDQUFBbUQsVUFBVTtjQUNWaUIsUUFBUSxFQUFFWixVQUFVO2NBQ3BCM0MsT0FBTyxFQUFFNkMsU0FBUztjQUNsQjFPLElBQUksRUFBQyxTQUFTO2NBQ2RxUCxPQUFPLEVBQUMsU0FBUztjQUNqQnhJLFNBQVMsRUFBQztZQUFRLEVBQ2pCLENBQ0csQ0FDRTtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVDQSxJQUFBUixNQUFBLEdBQUFqSyxPQUFBO1VBQ0EsSUFBQWtULE1BQUEsR0FBQWxULE9BQUE7VUFDQSxJQUFBNkssUUFBQSxHQUFBN0ssT0FBQTtVQUVNLFNBQVVtVCxjQUFjQSxDQUFDO1lBQUV0TDtVQUFJLENBQUU7WUFDdEMsTUFBTTtjQUFFdEUsSUFBSTtjQUFFbUUsUUFBUTtjQUFFMUM7WUFBVyxDQUFFLEdBQUc2QyxJQUFJO1lBQzVDLE1BQU07Y0FBRWdCLEtBQUs7Y0FBRW1GLGFBQWE7Y0FBRTFOO1lBQUssQ0FBRSxHQUFHLElBQUF1SyxRQUFBLENBQUFFLG1CQUFtQixHQUFFO1lBRTdELE1BQU1xSSxlQUFlLEdBQUdwTyxXQUFXLENBQUN6RCxVQUFVLENBQUNrRCxHQUFHLENBQUNpRCxRQUFRLENBQUM1RixFQUFFLENBQUM7WUFFL0QsSUFBSU0sSUFBSSxHQUFHZ1IsZUFBZSxHQUFHLFNBQVMsR0FBRyxTQUFTO1lBQ2xELE1BQU1DLE1BQU0sR0FBRyxFQUFFO1lBRWpCLElBQUkzTCxRQUFRLENBQUN0RixJQUFJLEtBQUssWUFBWSxJQUFJc0YsUUFBUSxDQUFDNEwsT0FBTyxLQUFLLGlCQUFpQixJQUFJalMsSUFBSSxDQUFDQSxJQUFJLEVBQUU7Y0FDMUZnUyxNQUFNLENBQUM3TyxJQUFJLENBQ1Z5RixNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLGVBQ0V2QyxJQUFJLENBQUN4RyxJQUFJLENBQUNpSyxRQUFRLENBQUNHLE9BQU8sRSxNQUFJNUQsSUFBSSxDQUFDeEcsSUFBSSxDQUFDaUssUUFBUSxDQUFDQyxLQUFLLENBQ2pELENBQ1A7O1lBR0YsSUFBSXVFLEtBQUssR0FBR3NELGVBQWUsR0FBRyxNQUFNLEdBQUcsU0FBUztZQUVoRCxJQUFJMUwsUUFBUSxDQUFDdEYsSUFBSSxLQUFLLFFBQVEsSUFBSXlGLElBQUksQ0FBQ3hHLElBQUksRUFBRTtjQUM1QyxNQUFNMEUsSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQUksQ0FBQzhCLElBQUksQ0FBQ3hHLElBQUksQ0FBQztjQUNuQ3lPLEtBQUssR0FBRy9KLElBQUksQ0FBQ0csTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRWtILEdBQUcsS0FBS2xILEdBQUcsR0FBRzBCLElBQUksQ0FBQ3hHLElBQUksQ0FBQ2dNLEdBQUcsQ0FBQyxDQUFDekosSUFBSSxFQUFFLEVBQUUsQ0FBQztjQUNoRXhCLElBQUksR0FBRyxTQUFTOztZQUdqQixJQUFJc0YsUUFBUSxDQUFDdEYsSUFBSSxLQUFLLFlBQVksSUFBSXNGLFFBQVEsQ0FBQzRMLE9BQU8sS0FBSyxpQkFBaUIsSUFBSWpTLElBQUksQ0FBQ0EsSUFBSSxFQUFFO2NBQzFGLE1BQU07Z0JBQUVvSyxPQUFPO2dCQUFFRjtjQUFLLENBQUUsR0FBRzFELElBQUksQ0FBQ3hHLElBQUksRUFBRWlLLFFBQVE7Y0FDOUMsSUFBSUcsT0FBTyxHQUFHRixLQUFLLEdBQUcsQ0FBQyxFQUFFbkosSUFBSSxHQUFHLE9BQU87Y0FDdkMwTixLQUFLLEdBQUcsR0FBR3JFLE9BQU8sS0FBS0YsS0FBSyxFQUFFOztZQUcvQixJQUFJNkgsZUFBZSxJQUFJcE8sV0FBVyxDQUFDekQsVUFBVSxDQUFDbUcsUUFBUSxDQUFDNUYsRUFBRSxDQUFDLEVBQUUwQixRQUFRLEVBQUU7Y0FDckVzTSxLQUFLLEdBQUdqSCxLQUFLLENBQUMwSyxjQUFjLEdBQUdoUSxJQUFJLENBQUNoQyxVQUFVLENBQUNtRyxRQUFRLENBQUM1RixFQUFFLENBQUMsRUFBRTBCLFFBQVEsQ0FBQ0MsS0FBSzs7WUFFNUUsTUFBTWdNLE9BQU8sR0FBR3FDLEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDUyxlQUFlLEVBQUU7Y0FDdkJULEtBQUssQ0FBQzBCLGNBQWMsRUFBRTtjQUN0QixNQUFNbEwsUUFBUSxHQUFHaEksS0FBSyxDQUFDa0osZ0JBQWdCLENBQUNqRyxJQUFJLENBQUN6QixFQUFFLENBQUM7Y0FFaERrTSxhQUFhLENBQUM7Z0JBQ2JyTixJQUFJLEVBQUUsSUFBSTtnQkFDVitILElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCckgsSUFBSSxFQUFFO2tCQUNMaUgsUUFBUTtrQkFDUm1MLFVBQVUsRUFBRS9MLFFBQVEsQ0FBQzVGLEVBQUU7a0JBQ3ZCLEdBQUcrRjs7ZUFFSixDQUFDO1lBQ0gsQ0FBQztZQUVELE9BQ0NvQyxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBO2NBQUlxRixPQUFPLEVBQUVBLE9BQU87Y0FBRXBDLEdBQUcsRUFBRSxHQUFHOUosSUFBSSxDQUFDekIsRUFBRSxJQUFJNEYsUUFBUSxDQUFDNUYsRUFBRTtZQUFFLEdBQ3JEbUksTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxlQUFPMUMsUUFBUSxDQUFDdkYsS0FBSyxDQUFRLEVBQzdCOEgsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDOEksTUFBQSxDQUFBUSxJQUFJO2NBQUNULE9BQU8sRUFBRTdRLElBQUk7Y0FBRXFJLFNBQVMsRUFBRSxHQUFHckksSUFBSTtZQUFPLEdBQzVDME4sS0FBSyxDQUNBLENBQ0g7VUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5REEsSUFBQTdGLE1BQUEsR0FBQWpLLE9BQUE7VUFDQSxJQUFBNkssUUFBQSxHQUFBN0ssT0FBQTtVQUNBLElBQUFpUyxLQUFBLEdBQUFqUyxPQUFBO1VBQ0EsSUFBQThELFNBQUEsR0FBQTlELE9BQUE7VUFDQSxJQUFBMlQsTUFBQSxHQUFBM1QsT0FBQTtVQUNBLElBQUEyTixXQUFBLEdBQUEzTixPQUFBO1VBQ0EsSUFBQTRULE1BQUEsR0FBQTVULE9BQUE7VUFFTSxTQUFVMkUsSUFBSUEsQ0FBQztZQUFFa0Q7VUFBSSxDQUFFO1lBQzVCLE1BQU07Y0FBRWdCLEtBQUs7Y0FBRS9CLEtBQUs7Y0FBRXhHLEtBQUs7Y0FBRTBOO1lBQWEsQ0FBRSxHQUFHLElBQUFuRCxRQUFBLENBQUFFLG1CQUFtQixHQUFFO1lBRXBFLE1BQU07Y0FBRXhIO1lBQUksQ0FBRSxHQUFHc0UsSUFBSTtZQUVyQixNQUFNbUUsYUFBYSxHQUFHbEcsTUFBTSxDQUFDQyxJQUFJLENBQUM4QixJQUFJLENBQUN0RyxVQUFVLENBQUM7WUFDbEQsTUFBTXNTLGFBQWEsR0FBRy9NLEtBQUssQ0FBQ3ZGLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDd0MsR0FBRyxDQUFDMEQsUUFBUSxJQUFHO2NBQzNELE9BQU87Z0JBQ05BLFFBQVE7Z0JBQ1JuRSxJQUFJLEVBQUVzRSxJQUFJLENBQUN0RSxJQUFJO2dCQUNmOEosR0FBRyxFQUFFM0YsUUFBUSxDQUFDNUYsRUFBRTtnQkFDaEJrRCxXQUFXLEVBQUU2QyxJQUFJO2dCQUNqQnhHLElBQUksRUFBRXdHLElBQUksQ0FBQ3RHLFVBQVUsQ0FBQ21HLFFBQVEsQ0FBQzVGLEVBQUUsQ0FBQyxFQUFFVDtlQUNwQztZQUNGLENBQUMsQ0FBQztZQUVGLE1BQU15UyxVQUFVLEdBQVk5SCxhQUFhLENBQUNoRyxNQUFNLEdBQUdjLEtBQUssQ0FBQ3ZGLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDd0UsTUFBTSxHQUFJLEdBQUc7WUFDdkYsTUFBTStOLGNBQWMsR0FBRyxnQkFBZ0J6VCxLQUFLLENBQUNxSSxZQUFZLDBCQUEwQmQsSUFBSSxDQUFDdEUsSUFBSSxDQUFDekIsRUFBRSxFQUFFO1lBQ2pHLE1BQU1rUyxXQUFXLEdBQUdsQyxLQUFLLElBQUc7Y0FDM0JBLEtBQUssQ0FBQzBCLGNBQWMsRUFBRTtjQUV0QnhGLGFBQWEsQ0FBQztnQkFDYnJOLElBQUksRUFBRSxJQUFJO2dCQUNWK0gsSUFBSSxFQUFFLFNBQVM7Z0JBQ2ZySCxJQUFJLEVBQUV3RztlQUNOLENBQUM7Y0FDRm9NLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGlCQUFpQixFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ3ZNLElBQUksQ0FBQ3RFLElBQUksQ0FBQyxDQUFDO2NBQ2xFLE9BQU8sS0FBSztZQUNiLENBQUM7WUFFRCxPQUNDMEcsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFJSyxTQUFTLEVBQUM7WUFBMkIsR0FDeENSLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsaUJBQ0NILE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsQ0FBQ3VKLE1BQUEsQ0FBQVUsS0FBSztjQUNMMUUsR0FBRyxFQUNGcE0sSUFBSSxFQUFFM0IsUUFBUSxHQUNYMkIsSUFBSSxDQUFDM0IsUUFBUSxHQUNiLHdGQUF3RjtjQUU1RmdPLEdBQUcsRUFBRSxHQUFHck0sSUFBSSxDQUFDMUIsSUFBSSxTQUFTO2NBQzFCNEksU0FBUyxFQUFDO1lBQWUsRUFDeEIsRUFDRlIsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDdUQsV0FBQSxDQUFBMkcsSUFBSTtjQUFDQyxJQUFJLEVBQUVSLGNBQWM7Y0FBRXRFLE9BQU8sRUFBRXVFO1lBQVcsR0FDL0MvSixNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLGFBQUs3RyxJQUFJLENBQUMxQixJQUFJLENBQU0sQ0FDZCxDQUNDLEVBQ1RvSSxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUFjLEdBQzVCUixNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBO2NBQUlLLFNBQVMsRUFBQztZQUFtQixHQUMvQjVCLEtBQUssQ0FBQzJMLFNBQVMsRUFDaEJ2SyxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLGVBQU8sSUFBQXdKLE1BQUEsQ0FBQWEsYUFBYSxFQUFDWCxVQUFVLENBQUMsRSxJQUFTLENBQ3JDLEVBQ0w3SixNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUM2SCxLQUFBLENBQUFhLElBQUk7Y0FBQ3JJLFNBQVMsRUFBQyxtQ0FBbUM7Y0FBQ2pKLEtBQUssRUFBRXFTLGFBQWE7Y0FBRWQsT0FBTyxFQUFFalAsU0FBQSxDQUFBcVA7WUFBYyxFQUFJLENBQ2hHLENBQ0Y7VUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvREEsSUFBQWxKLE1BQUEsR0FBQWpLLE9BQUE7VUFDQSxJQUFBNkssUUFBQSxHQUFBN0ssT0FBQTtVQUNBLElBQUEwVSxLQUFBLEdBQUExVSxPQUFBO1VBQ0EsSUFBQTJVLFFBQUEsR0FBQTNVLE9BQUE7VUFDQSxJQUFBaVMsS0FBQSxHQUFBalMsT0FBQTtVQUVNLFNBQVU0VSxVQUFVQSxDQUFDO1lBQUV2VDtVQUFJLENBQUU7WUFDbEMsTUFBTTtjQUFFd0g7WUFBSyxDQUFFLEdBQUcsSUFBQWdDLFFBQUEsQ0FBQUUsbUJBQW1CLEdBQUU7WUFFdkMsTUFBTThKLEtBQUssR0FBRy9PLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDMk8sS0FBQSxDQUFBSSxLQUFLLENBQUM7WUFFaEMsTUFBTS9CLE9BQU8sR0FBR0EsQ0FBQztjQUFFMVI7WUFBSSxDQUFFLEtBQUk7Y0FDNUIsT0FDQzRJLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsQ0FBQ3VLLFFBQUEsQ0FBQUksT0FBTztnQkFBQ0MsT0FBTyxFQUFFM1Q7Y0FBSSxHQUNyQjRJLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUE7Z0JBQU1LLFNBQVMsRUFBQztjQUFjLEdBQUVpSyxLQUFBLENBQUFJLEtBQUssQ0FBQ3pULElBQUksQ0FBQyxDQUFRLENBQzFDO1lBRVosQ0FBQztZQUVELE1BQU00VCxTQUFTLEdBQUc1VCxJQUFJLENBQUNpTSxNQUFNLElBQUl4SCxNQUFNLENBQUNDLElBQUksQ0FBQzFFLElBQUksQ0FBQ2lNLE1BQU0sQ0FBQyxFQUFFdEgsTUFBTTtZQUNqRSxPQUNDaUUsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFTSyxTQUFTLEVBQUM7WUFBYyxHQUNoQ1IsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxhQUFLdkIsS0FBSyxDQUFDeUUsTUFBTSxDQUFNLEVBQ3RCMkgsU0FBUyxHQUNUaEwsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDNkgsS0FBQSxDQUFBYSxJQUFJO2NBQUNySSxTQUFTLEVBQUMsbUJBQW1CO2NBQUNqSixLQUFLLEVBQUVxVCxLQUFLO2NBQUU5QixPQUFPLEVBQUVBO1lBQU8sRUFBSSxHQUV0RTlJLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUE7Y0FBTUssU0FBUyxFQUFDO1lBQW1CLG1CQUNuQyxDQUNRO1VBRVo7Ozs7Ozs7Ozs7O1VDOUJBOztVQUVBM0UsTUFBQSxDQUFBaUMsY0FBQSxDQUFBM0csT0FBQTtZQUNBNEcsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUEyRixXQUFBLEdBQUEzTixPQUFBO1VBQ0EsSUFBQWtWLEtBQUEsR0FBQWxWLE9BQUE7VUFDQSxJQUFBNkssUUFBQSxHQUFBN0ssT0FBQTtVQUNBLElBQUFtVixXQUFBLEdBQUFuVixPQUFBO1VBQ0EsSUFBQW9WLEtBQUEsR0FBQXBWLE9BQUE7VUFDQSxJQUFBdUssT0FBQSxHQUFBdkssT0FBQTtVQUNBLElBQUFxVixPQUFBLEdBQUFyVixPQUFBO1VBRU87VUFBVSxTQUFVc1Ysa0JBQWtCQSxDQUFDO1lBQUU1TixRQUFRO1lBQUU2TjtVQUFXLENBQUU7WUFDdEUsTUFBTTtjQUFFMU07WUFBSyxDQUFFLEdBQUcsSUFBQWdDLFFBQUEsQ0FBQUUsbUJBQW1CLEdBQUU7WUFDdkNuQixPQUFPLENBQUM0TCxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ2YsT0FDQ04sS0FBQSxDQUFBOUssYUFBQSxDQUFBOEssS0FBQSxDQUFBN0ssUUFBQSxRQUNDNkssS0FBQSxDQUFBOUssYUFBQTtjQUFTSyxTQUFTLEVBQUM7WUFBb0IsR0FDdEN5SyxLQUFBLENBQUE5SyxhQUFBLENBQUNpTCxPQUFBLENBQUFJLGNBQWM7Y0FBQy9OLFFBQVEsRUFBRUEsUUFBUTtjQUFFNk4sV0FBVyxFQUFFQTtZQUFXLEVBQUksRUFFaEVMLEtBQUEsQ0FBQTlLLGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQWlDLEdBQy9DeUssS0FBQSxDQUFBOUssYUFBQTtjQUFTSyxTQUFTLEVBQUM7WUFBc0IsR0FDeEN5SyxLQUFBLENBQUE5SyxhQUFBLGVBQ0M4SyxLQUFBLENBQUE5SyxhQUFBLGlCQUFTdkIsS0FBSyxDQUFDekcsSUFBSSxFLElBQVcsRSxLQUFFc0YsUUFBUSxDQUFDdEYsSUFBSSxDQUN2QyxFQUNOc0YsUUFBUSxDQUFDNEwsT0FBTyxJQUNoQjRCLEtBQUEsQ0FBQTlLLGFBQUEsZUFDQzhLLEtBQUEsQ0FBQTlLLGFBQUEsaUJBQVN2QixLQUFLLENBQUN5SyxPQUFPLEUsSUFBVyxFLEtBQUU1TCxRQUFRLENBQUM0TCxPQUFPLENBRXBELENBQ1EsRUFFVjRCLEtBQUEsQ0FBQTlLLGFBQUE7Y0FBU0ssU0FBUyxFQUFDO1lBQTZCLEdBQy9DeUssS0FBQSxDQUFBOUssYUFBQSxhQUFLdkIsS0FBSyxDQUFDNUcsV0FBVyxDQUFNLEVBQzVCaVQsS0FBQSxDQUFBOUssYUFBQTtjQUFHSyxTQUFTLEVBQUM7WUFBSSxHQUFFL0MsUUFBUSxDQUFDekYsV0FBVyxDQUFLLENBQ25DLENBQ0wsQ0FDRyxFQUNWaVQsS0FBQSxDQUFBOUssYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBb0IsR0FDbEN5SyxLQUFBLENBQUE5SyxhQUFBLENBQUN1RCxXQUFBLENBQUFXLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFN0csUUFBUSxDQUFDdEYsSUFBSTtjQUN4QnlKLE9BQU8sRUFBRTtnQkFDUjZKLFlBQVksRUFBRVIsS0FBQSxDQUFBOUssYUFBQSxDQUFDZ0wsS0FBQSxDQUFBTyxRQUFRO2tCQUFDOU4sSUFBSSxFQUFFSDtnQkFBUSxFQUFJO2dCQUMxQyxnQkFBZ0IsRUFBRXdOLEtBQUEsQ0FBQTlLLGFBQUEsQ0FBQ2dMLEtBQUEsQ0FBQU8sUUFBUTtrQkFBQzlOLElBQUksRUFBRUg7Z0JBQVEsRUFBSTtnQkFDOUMsZ0JBQWdCLEVBQUV3TixLQUFBLENBQUE5SyxhQUFBLENBQUNnTCxLQUFBLENBQUFPLFFBQVE7a0JBQUM5TixJQUFJLEVBQUVIO2dCQUFRLEVBQUk7Z0JBQzlDa08sTUFBTSxFQUFFVixLQUFBLENBQUE5SyxhQUFBLENBQUNnTCxLQUFBLENBQUFPLFFBQVE7a0JBQUM5TixJQUFJLEVBQUVIO2dCQUFRLEVBQUk7Z0JBQ3BDLGlCQUFpQixFQUFFd04sS0FBQSxDQUFBOUssYUFBQSxDQUFDK0ssV0FBQSxDQUFBVSxrQkFBa0I7a0JBQUNoTyxJQUFJLEVBQUVIO2dCQUFRLEVBQUk7Z0JBQ3pEb08sVUFBVSxFQUFFWixLQUFBLENBQUE5SyxhQUFBLENBQUMrSyxXQUFBLENBQUFVLGtCQUFrQjtrQkFBQ2hPLElBQUksRUFBRUg7Z0JBQVEsRUFBSTtnQkFDbEQ0RixNQUFNLEVBQUU0SCxLQUFBLENBQUE5SyxhQUFBLENBQUNHLE9BQUEsQ0FBQXdMLGNBQWM7a0JBQUNsTyxJQUFJLEVBQUVIO2dCQUFROztZQUN0QyxFQUNBLENBQ0csQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xEQSxJQUFBaUcsV0FBQSxHQUFBM04sT0FBQTtVQUNBLElBQUFrVixLQUFBLEdBQUFsVixPQUFBO1VBQ0EsSUFBQTZLLFFBQUEsR0FBQTdLLE9BQUE7VUFDQSxJQUFBbVYsV0FBQSxHQUFBblYsT0FBQTtVQUNBLElBQUFvVixLQUFBLEdBQUFwVixPQUFBO1VBQ0EsSUFBQXVLLE9BQUEsR0FBQXZLLE9BQUE7VUFDQSxJQUFBcVYsT0FBQSxHQUFBclYsT0FBQTtVQUVBLElBQUFrTyxNQUFBLEdBQUFsTyxPQUFBO1VBQ0EsSUFBQTRPLE1BQUEsR0FBQTVPLE9BQUE7VUFDQSxJQUFBa1EsTUFBQSxHQUFBbFEsT0FBQTtVQUdPO1VBQVUsU0FBVWdXLGVBQWVBLENBQUM7WUFBRW5PO1VBQUksQ0FBRTtZQUNsRCxNQUFNO2NBQ0x2SCxLQUFLO2NBQ0x1SSxLQUFLLEVBQUU7Z0JBQUV0SCxVQUFVLEVBQUVzSDtjQUFLO1lBQUUsQ0FDNUIsR0FBRyxJQUFBZ0MsUUFBQSxDQUFBRSxtQkFBbUIsR0FBRTtZQUN6QixNQUFNO2NBQUV6QyxRQUFRO2NBQUVtTDtZQUFVLENBQUUsR0FBRzVMLElBQUk7WUFDckMsTUFBTTtjQUFFdEUsSUFBSSxFQUFFbUwsT0FBTztjQUFFMUo7WUFBVyxDQUFFLEdBQUc2QyxJQUFJO1lBQzNDLE1BQU0sQ0FBQ0gsUUFBUSxFQUFFNk4sV0FBVyxDQUFDLEdBQUdMLEtBQUssQ0FBQ3hFLFFBQVEsQ0FBQ3BJLFFBQVEsQ0FBQy9HLFVBQVUsQ0FBQ1AsR0FBRyxDQUFDeVMsVUFBVSxDQUFDLENBQUM7WUFDbkYsTUFBTSxDQUFDcEssUUFBUSxFQUFFMkgsV0FBVyxDQUFDLEdBQUdrRSxLQUFLLENBQUN4RSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ3BKLEtBQUssRUFBRW1KLFFBQVEsQ0FBQyxHQUFHeUUsS0FBSyxDQUFDeEUsUUFBUSxDQUFDcEksUUFBUSxDQUFDaEIsS0FBSyxDQUFDO1lBQ3hELElBQUE0SSxNQUFBLENBQUFlLFNBQVMsRUFBQyxDQUFDM0ksUUFBUSxDQUFDLEVBQUUsTUFBSztjQUMxQm1JLFFBQVEsQ0FBQ25JLFFBQVEsQ0FBQ2hCLEtBQUssQ0FBQztjQUN4QixJQUFJZ0IsUUFBUSxDQUFDaEIsS0FBSyxFQUFFO2dCQUNuQmlPLFdBQVcsQ0FBQ2pOLFFBQVEsQ0FBQy9HLFVBQVUsQ0FBQ1AsR0FBRyxDQUFDeVMsVUFBVSxDQUFDLENBQUM7O1lBRWxELENBQUMsQ0FBQztZQUVGeUIsS0FBSyxDQUFDZSxTQUFTLENBQUMsTUFBSztjQUNwQnhGLFFBQVEsQ0FBQyxLQUFLLENBQUM7Y0FDZitCLFVBQVUsQ0FBQyxNQUFLO2dCQUNmL0IsUUFBUSxDQUFDLElBQUksQ0FBQztjQUNmLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDUCxDQUFDLEVBQUUsQ0FBQy9JLFFBQVEsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDSixLQUFLLElBQUksQ0FBQ0ksUUFBUSxFQUFFO2NBQ3hCLE9BQU93TixLQUFBLENBQUE5SyxhQUFBLENBQUN1RCxXQUFBLENBQUF1SSxPQUFPO2dCQUFDQyxNQUFNO2NBQUEsRUFBRzs7WUFHMUIsTUFBTTdELFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCdEIsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQjFRLEtBQUssQ0FBQ3lKLGFBQWEsRUFBRSxDQUFDcU0sT0FBTyxDQUFDLE1BQUs7Z0JBQ2xDcEYsV0FBVyxDQUFDLEtBQUssQ0FBQztjQUNuQixDQUFDLENBQUM7WUFDSCxDQUFDO1lBQ0QsTUFBTUcsR0FBRyxHQUFHLHNCQUFzQjlILFFBQVEsR0FBRyxjQUFjLEdBQUcsRUFBRSxFQUFFO1lBQ2xFLE9BQ0M2TCxLQUFBLENBQUE5SyxhQUFBO2NBQUtLLFNBQVMsRUFBRTBHO1lBQUcsR0FDbEIrRCxLQUFBLENBQUE5SyxhQUFBO2NBQVFLLFNBQVMsRUFBQztZQUEwQixHQUMzQ3lLLEtBQUEsQ0FBQTlLLGFBQUE7Y0FBU0ssU0FBUyxFQUFDO1lBQStDLEdBQ2pFeUssS0FBQSxDQUFBOUssYUFBQSxhQUFLc0UsT0FBTyxDQUFDN00sSUFBSSxDQUFNLEVBQ3ZCcVQsS0FBQSxDQUFBOUssYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBbUMsR0FDakR5SyxLQUFBLENBQUE5SyxhQUFBLENBQUN3RSxNQUFBLENBQUFtRCxVQUFVO2NBQUNuTyxJQUFJLEVBQUMsU0FBUztjQUFDNkcsU0FBUyxFQUFDLFFBQVE7Y0FBQ2dGLE9BQU8sRUFBRTZDO1lBQVMsRUFBSSxFQUNwRTRDLEtBQUEsQ0FBQTlLLGFBQUEsQ0FBQzhELE1BQU0sQ0FBQ21JLFdBQVcsT0FBRyxDQUNqQixDQUNHLENBQ0YsRUFDUixDQUFDL08sS0FBSyxHQUNONE4sS0FBQSxDQUFBOUssYUFBQSxDQUFDdUQsV0FBQSxDQUFBdUksT0FBTztjQUFDQyxNQUFNO1lBQUEsRUFBRyxHQUVsQmpCLEtBQUEsQ0FBQTlLLGFBQUEsQ0FBQThLLEtBQUEsQ0FBQTdLLFFBQUEsUUFDQzZLLEtBQUEsQ0FBQTlLLGFBQUE7Y0FBU0ssU0FBUyxFQUFDO1lBQW9CLEdBQ3RDeUssS0FBQSxDQUFBOUssYUFBQSxDQUFDaUwsT0FBQSxDQUFBSSxjQUFjO2NBQUMvTixRQUFRLEVBQUVBLFFBQVE7Y0FBRTZOLFdBQVcsRUFBRUE7WUFBVyxFQUFJLEVBRWhFTCxLQUFBLENBQUE5SyxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUFpQyxHQUMvQ3lLLEtBQUEsQ0FBQTlLLGFBQUE7Y0FBU0ssU0FBUyxFQUFDO1lBQXNCLEdBQ3hDeUssS0FBQSxDQUFBOUssYUFBQSxlQUNDOEssS0FBQSxDQUFBOUssYUFBQSxpQkFBU3ZCLEtBQUssQ0FBQ3pHLElBQUksRSxJQUFXLEUsS0FBRXNGLFFBQVEsQ0FBQ3RGLElBQUksQ0FDdkMsRUFDTnNGLFFBQVEsQ0FBQzRMLE9BQU8sSUFDaEI0QixLQUFBLENBQUE5SyxhQUFBLGVBQ0M4SyxLQUFBLENBQUE5SyxhQUFBLGlCQUFTdkIsS0FBSyxDQUFDeUssT0FBTyxFLElBQVcsRSxLQUFFNUwsUUFBUSxDQUFDNEwsT0FBTyxDQUVwRCxDQUNRLEVBRVY0QixLQUFBLENBQUE5SyxhQUFBO2NBQVNLLFNBQVMsRUFBQztZQUE2QixHQUMvQ3lLLEtBQUEsQ0FBQTlLLGFBQUEsYUFBS3ZCLEtBQUssQ0FBQzVHLFdBQVcsQ0FBTSxFQUM1QmlULEtBQUEsQ0FBQTlLLGFBQUE7Y0FBR0ssU0FBUyxFQUFDO1lBQUksR0FBRS9DLFFBQVEsQ0FBQ3pGLFdBQVcsQ0FBSyxDQUNuQyxDQUNMLENBQ0csRUFDVmlULEtBQUEsQ0FBQTlLLGFBQUEsQ0FBQ3VELFdBQUEsQ0FBQVcsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUU3RyxRQUFRLENBQUN0RixJQUFJO2NBQ3hCeUosT0FBTyxFQUFFO2dCQUNSNkosWUFBWSxFQUFFUixLQUFBLENBQUE5SyxhQUFBLENBQUNnTCxLQUFBLENBQUFPLFFBQVE7a0JBQUM5TixJQUFJLEVBQUVIO2dCQUFRLEVBQUk7Z0JBQzFDLGdCQUFnQixFQUFFd04sS0FBQSxDQUFBOUssYUFBQSxDQUFDZ0wsS0FBQSxDQUFBTyxRQUFRO2tCQUFDOU4sSUFBSSxFQUFFSDtnQkFBUSxFQUFJO2dCQUM5QyxnQkFBZ0IsRUFBRXdOLEtBQUEsQ0FBQTlLLGFBQUEsQ0FBQ2dMLEtBQUEsQ0FBQU8sUUFBUTtrQkFBQzlOLElBQUksRUFBRUg7Z0JBQVEsRUFBSTtnQkFDOUNrTyxNQUFNLEVBQUVWLEtBQUEsQ0FBQTlLLGFBQUEsQ0FBQ2dMLEtBQUEsQ0FBQU8sUUFBUTtrQkFBQzlOLElBQUksRUFBRUg7Z0JBQVEsRUFBSTtnQkFDcEMsaUJBQWlCLEVBQUV3TixLQUFBLENBQUE5SyxhQUFBLENBQUMrSyxXQUFBLENBQUFVLGtCQUFrQjtrQkFBQ2hPLElBQUksRUFBRUg7Z0JBQVEsRUFBSTtnQkFDekRvTyxVQUFVLEVBQUVaLEtBQUEsQ0FBQTlLLGFBQUEsQ0FBQytLLFdBQUEsQ0FBQVUsa0JBQWtCO2tCQUFDaE8sSUFBSSxFQUFFSDtnQkFBUSxFQUFJO2dCQUNsRDRGLE1BQU0sRUFBRTRILEtBQUEsQ0FBQTlLLGFBQUEsQ0FBQ0csT0FBQSxDQUFBd0wsY0FBYztrQkFBQ2xPLElBQUksRUFBRUg7Z0JBQVE7O1lBQ3RDLEVBQ0EsQ0FFSCxDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkdBLElBQUFpRyxXQUFBLEdBQUEzTixPQUFBO1VBQ0EsSUFBQWtWLEtBQUEsR0FBQWxWLE9BQUE7VUFDQSxJQUFBNkssUUFBQSxHQUFBN0ssT0FBQTtVQU1BLElBQUFrTyxNQUFBLEdBQUFsTyxPQUFBO1VBQ0EsSUFBQTRPLE1BQUEsR0FBQTVPLE9BQUE7VUFDQSxJQUFBa1EsTUFBQSxHQUFBbFEsT0FBQTtVQUNBLElBQUFzVyxRQUFBLEdBQUF0VyxPQUFBO1VBRU87VUFBVSxTQUFVeU8sY0FBY0EsQ0FBQztZQUFFNUc7VUFBSSxDQUFFO1lBQ2pELE1BQU07Y0FDTHZILEtBQUs7Y0FDTHVJLEtBQUssRUFBRTtnQkFBRXRILFVBQVUsRUFBRXNIO2NBQUs7WUFBRSxDQUM1QixHQUFHLElBQUFnQyxRQUFBLENBQUFFLG1CQUFtQixHQUFFO1lBQ3pCLE1BQU07Y0FBRXpDLFFBQVE7Y0FBRW1MO1lBQVUsQ0FBRSxHQUFHNUwsSUFBSTtZQUNyQyxNQUFNO2NBQUV0RSxJQUFJLEVBQUVtTCxPQUFPO2NBQUUxSjtZQUFXLENBQUUsR0FBRzZDLElBQUk7WUFDM0MsTUFBTSxDQUFDSCxRQUFRLEVBQUU2TixXQUFXLENBQUMsR0FBR0wsS0FBSyxDQUFDeEUsUUFBUSxDQUFDcEksUUFBUSxDQUFDL0csVUFBVSxDQUFDUCxHQUFHLENBQUN5UyxVQUFVLENBQUMsQ0FBQztZQUNuRixNQUFNLENBQUNwSyxRQUFRLEVBQUUySCxXQUFXLENBQUMsR0FBR2tFLEtBQUssQ0FBQ3hFLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDcEosS0FBSyxFQUFFbUosUUFBUSxDQUFDLEdBQUd5RSxLQUFLLENBQUN4RSxRQUFRLENBQUNwSSxRQUFRLENBQUNoQixLQUFLLENBQUM7WUFDeEQsSUFBQTRJLE1BQUEsQ0FBQWUsU0FBUyxFQUFDLENBQUMzSSxRQUFRLENBQUMsRUFBRSxNQUFLO2NBQzFCbUksUUFBUSxDQUFDbkksUUFBUSxDQUFDaEIsS0FBSyxDQUFDO2NBQ3hCLElBQUlnQixRQUFRLENBQUNoQixLQUFLLEVBQUU7Z0JBQ25CaU8sV0FBVyxDQUFDak4sUUFBUSxDQUFDL0csVUFBVSxDQUFDUCxHQUFHLENBQUN5UyxVQUFVLENBQUMsQ0FBQzs7WUFFbEQsQ0FBQyxDQUFDO1lBRUZ5QixLQUFLLENBQUNlLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCeEYsUUFBUSxDQUFDLEtBQUssQ0FBQztjQUNmK0IsVUFBVSxDQUFDLE1BQUs7Z0JBQ2YvQixRQUFRLENBQUMsSUFBSSxDQUFDO2NBQ2YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNQLENBQUMsRUFBRSxDQUFDL0ksUUFBUSxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUNKLEtBQUssSUFBSSxDQUFDSSxRQUFRLEVBQUU7Y0FDeEIsT0FBT3dOLEtBQUEsQ0FBQTlLLGFBQUEsQ0FBQ3VELFdBQUEsQ0FBQXVJLE9BQU87Z0JBQUNDLE1BQU07Y0FBQSxFQUFHOztZQUcxQixNQUFNN0QsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEJ0QixXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCMVEsS0FBSyxDQUFDeUosYUFBYSxFQUFFLENBQUNxTSxPQUFPLENBQUMsTUFBSztnQkFDbENwRixXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ25CLENBQUMsQ0FBQztZQUNILENBQUM7WUFDRCxNQUFNRyxHQUFHLEdBQUcsc0JBQXNCOUgsUUFBUSxHQUFHLGNBQWMsR0FBRyxFQUFFLEVBQUU7WUFDbEUsT0FDQzZMLEtBQUEsQ0FBQTlLLGFBQUE7Y0FBS0ssU0FBUyxFQUFFMEc7WUFBRyxHQUNsQitELEtBQUEsQ0FBQTlLLGFBQUE7Y0FBUUssU0FBUyxFQUFDO1lBQTBCLEdBQzNDeUssS0FBQSxDQUFBOUssYUFBQTtjQUFTSyxTQUFTLEVBQUM7WUFBK0MsR0FDakV5SyxLQUFBLENBQUE5SyxhQUFBLGFBQUtzRSxPQUFPLENBQUM3TSxJQUFJLENBQU0sRUFDdkJxVCxLQUFBLENBQUE5SyxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUFtQyxHQUNqRHlLLEtBQUEsQ0FBQTlLLGFBQUEsQ0FBQ3dFLE1BQUEsQ0FBQW1ELFVBQVU7Y0FBQ25PLElBQUksRUFBQyxTQUFTO2NBQUM2RyxTQUFTLEVBQUMsUUFBUTtjQUFDZ0YsT0FBTyxFQUFFNkM7WUFBUyxFQUFJLEVBQ3BFNEMsS0FBQSxDQUFBOUssYUFBQSxDQUFDOEQsTUFBTSxDQUFDbUksV0FBVyxPQUFHLENBQ2pCLENBQ0csQ0FDRixFQUVUbkIsS0FBQSxDQUFBOUssYUFBQSxDQUFDdUQsV0FBQSxDQUFBVyxvQkFBb0I7Y0FDcEJnRCxPQUFPO2NBQ1AvQyxTQUFTLEVBQUUsQ0FBQyxDQUFDakgsS0FBSyxJQUFJLENBQUMsQ0FBQ0ksUUFBUTtjQUNoQ21FLE9BQU8sRUFBRTtnQkFDUjRGLElBQUksRUFBRXlELEtBQUEsQ0FBQTlLLGFBQUEsQ0FBQ2tNLFFBQUEsQ0FBQWhCLGtCQUFrQjtrQkFBQzVOLFFBQVEsRUFBRUEsUUFBUTtrQkFBRTZOLFdBQVcsRUFBRUE7Z0JBQVcsRUFBSTtnQkFDMUVoRSxLQUFLLEVBQUUyRCxLQUFBLENBQUE5SyxhQUFBLENBQUN1RCxXQUFBLENBQUF1SSxPQUFPO2tCQUFDQyxNQUFNO2dCQUFBOztZQUN0QixFQUNBLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyRUEsSUFBQWxNLE1BQUEsR0FBQWpLLE9BQUE7VUFDQSxJQUFBc0ssU0FBQSxHQUFBdEssT0FBQTtVQUVNLFNBQVU2VixrQkFBa0JBLENBQUM7WUFBRWhPO1VBQUksQ0FBRTtZQUMxQyxPQUNDb0MsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxjQUNDSCxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUNFLFNBQUEsQ0FBQWlNLG9CQUFvQjtjQUFDMU8sSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDL0I7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUQSxJQUFBb0MsTUFBQSxHQUFBakssT0FBQTtVQUVBLElBQUF3VyxjQUFBLEdBQUF4VyxPQUFBO1VBQ0EsSUFBQTZLLFFBQUEsR0FBQTdLLE9BQUE7VUFDQSxJQUFBOE8sTUFBQSxHQUFBOU8sT0FBQTtVQUNBLElBQUF5VyxVQUFBLEdBQUF6VyxPQUFBO1VBSkE7O1VBTU0sU0FBVTJWLFFBQVFBLENBQUM7WUFBRTlOO1VBQUksQ0FBRTtZQUNoQyxNQUFNO2NBQ0xnQixLQUFLLEVBQUU7Z0JBQUVjLElBQUksRUFBRWQ7Y0FBSztZQUFFLENBQ3RCLEdBQUcsSUFBQWdDLFFBQUEsQ0FBQUUsbUJBQW1CLEdBQUU7WUFFekIsSUFBSSxDQUFDbEQsSUFBSSxDQUFDNk8sU0FBUyxFQUFFNVUsRUFBRSxFQUFFLE9BQU9tSSxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUMwRSxNQUFBLENBQUE2SCxhQUFhLE9BQUc7WUFFakQsTUFBTUMsTUFBTSxHQUFHL08sSUFBSSxDQUFDNk8sU0FBUyxDQUFDNVUsRUFBRTtZQUVoQyxPQUNDbUksTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBZ0IsR0FDN0I1QyxJQUFJLEVBQUV4RyxJQUFJLEVBQUVtQyxRQUFRLEVBQUVSLFNBQVMsSUFDL0JpSCxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUFILE1BQUEsQ0FBQTFELE9BQUEsQ0FBQThELFFBQUEsUUFDQ0osTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxhQUFLdkIsS0FBSyxDQUFDN0YsU0FBUyxDQUFNLEVBQzFCaUgsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxZQUFJdkMsSUFBSSxDQUFDeEcsSUFBSSxDQUFDbUMsUUFBUSxFQUFFUixTQUFTLENBQUssQ0FFdkMsRUFDRGlILE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsYUFBS3ZCLEtBQUssQ0FBQzFHLEtBQUssQ0FBTSxFQUN0QjhILE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQWdCLEdBQzlCUixNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUNvTSxjQUFBLENBQUFLLG1CQUFtQjtjQUFDL1UsRUFBRSxFQUFFOFUsTUFBTTtjQUFFdkgsS0FBSyxFQUFFb0gsVUFBQSxDQUFBSyxTQUFTO2NBQUVsVCxJQUFJLEVBQUM7WUFBOEIsR0FDckZxRyxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUNvTSxjQUFBLENBQUFPLGVBQWUsT0FBRyxDQUNFLENBQ2pCLENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0EsSUFBQTlNLE1BQUEsR0FBQWpLLE9BQUE7VUFFQSxJQUFBZ1gsU0FBQSxHQUFBaFgsT0FBQTtVQUNBLElBQUE2SyxRQUFBLEdBQUE3SyxPQUFBO1VBQ00sU0FBVWlYLG9CQUFvQkEsQ0FBQTtZQUNuQyxNQUFNO2NBQUUzVztZQUFLLENBQUUsR0FBRyxJQUFBdUssUUFBQSxDQUFBRSxtQkFBbUIsR0FBRTtZQUV2QyxPQUFPZCxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUM0TSxTQUFBLENBQUFFLFFBQVE7Y0FBQ2xDLE9BQU8sRUFBRTFVLEtBQUssQ0FBQ3dWLFVBQVUsQ0FBQ3FCO1lBQW9CLEVBQUk7VUFDcEU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkEsSUFBQXJJLE1BQUEsR0FBQTlPLE9BQUE7VUFDQSxJQUFBaUssTUFBQSxHQUFBakssT0FBQTtVQUNBLElBQUE2SyxRQUFBLEdBQUE3SyxPQUFBO1VBRU0sU0FBVThXLFNBQVNBLENBQUE7WUFDeEIsTUFBTTtjQUNMak8sS0FBSyxFQUFFO2dCQUNOYyxJQUFJLEVBQUU7a0JBQUUwRixLQUFLLEVBQUV4RztnQkFBSztjQUFFLENBQ3RCO2NBQ0R2STtZQUFLLENBQ0wsR0FBRyxJQUFBdUssUUFBQSxDQUFBRSxtQkFBbUIsR0FBRTtZQUV6QixJQUFJLENBQUN6SyxLQUFLLEVBQUV3RyxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBRTlCLE1BQU07Y0FBRTNFLEtBQUs7Y0FBRUY7WUFBVyxDQUFFLEdBQUc0RyxLQUFLO1lBRXBDLE9BQ0NvQixNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUFZLEdBQzFCUixNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUMwRSxNQUFBLENBQUFHLEtBQUs7Y0FBQ3JMLElBQUksRUFBQyxNQUFNO2NBQUM2RyxTQUFTLEVBQUM7WUFBRSxHQUM5QlIsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxhQUFLakksS0FBSyxDQUFNLEVBQ2hCOEgsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxlQUFPbkksV0FBVyxDQUFRLENBQ25CLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQTRNLEdBQUEsR0FBQTdPLE9BQUE7VUFDQSxJQUFBaUssTUFBQSxHQUFBakssT0FBQTtVQUNBLElBQUE2SyxRQUFBLEdBQUE3SyxPQUFBO1VBQ00sU0FBVTJXLGFBQWFBLENBQUM7WUFBRVM7VUFBTyxDQUF3QjtZQUM5RCxNQUFNO2NBQUV2TztZQUFLLENBQUUsR0FBRyxJQUFBZ0MsUUFBQSxDQUFBRSxtQkFBbUIsR0FBRTtZQUN2Q3FNLE9BQU8sR0FBR0EsT0FBTyxJQUFJdk8sS0FBSyxDQUFDdEgsVUFBVSxDQUFDOE4sS0FBSztZQUMzQyxPQUFPcEYsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDeUUsR0FBQSxDQUFBd0ksU0FBUztjQUFDelQsSUFBSSxFQUFDLE1BQU07Y0FBQ3dELElBQUksRUFBRWdRLE9BQU87Y0FBRTNNLFNBQVMsRUFBQztZQUEwQixFQUFHO1VBQ3JGOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BBLElBQUFSLE1BQUEsR0FBQWpLLE9BQUE7VUFFTSxTQUFVc1gsZUFBZUEsQ0FBQztZQUFFelA7VUFBSSxDQUFFO1lBQ3ZDLE9BQU9vQyxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLGNBQU12QyxJQUFJLENBQUM1RixXQUFXLENBQU87VUFDckM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQWdJLE1BQUEsR0FBQWpLLE9BQUE7VUFDQSxJQUFBNkssUUFBQSxHQUFBN0ssT0FBQTtVQUNNLFNBQVV1WCxRQUFRQSxDQUFDO1lBQUUxUDtVQUFJLENBQUU7WUFDaEMsTUFBTTtjQUFFZ0I7WUFBSyxDQUFFLEdBQUcsSUFBQWdDLFFBQUEsQ0FBQUUsbUJBQW1CLEdBQUU7WUFDdkMsSUFBSSxDQUFDbEQsSUFBSSxDQUFDeEcsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUUzQixNQUFNO2NBQ0xpSyxRQUFRLEVBQUU7Z0JBQUVDLEtBQUs7Z0JBQUVFO2NBQU87WUFBRSxDQUM1QixHQUFHNUQsSUFBSSxDQUFDeEcsSUFBSTtZQUNiLE9BQ0M0SSxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBO2NBQVNLLFNBQVMsRUFBQztZQUFnRSxHQUNsRlIsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxjQUNFdkIsS0FBSyxDQUFDMEMsS0FBSyxFLE1BQUlBLEtBQUssRSxPQUFLMUMsS0FBSyxDQUFDNEMsT0FBTyxFLE1BQUlBLE9BQU8sQ0FDN0MsQ0FDRztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQSxJQUFBeUUsTUFBQSxHQUFBbFEsT0FBQTtVQUNBLElBQUFpSyxNQUFBLEdBQUFqSyxPQUFBO1VBQ0EsSUFBQTZLLFFBQUEsR0FBQTdLLE9BQUE7VUFDQSxJQUFBOE8sTUFBQSxHQUFBOU8sT0FBQTtVQUNBLElBQUF3WCxTQUFBLEdBQUF4WCxPQUFBO1VBQ0EsSUFBQXlYLFVBQUEsR0FBQXpYLE9BQUE7VUFHTztVQUFXLE1BQU11VyxvQkFBb0IsR0FBOEJBLENBQUM7WUFBRTFPO1VBQUksQ0FBRSxLQUFJO1lBQ3RGLE1BQU07Y0FBRXZILEtBQUs7Y0FBRXVJO1lBQUssQ0FBRSxHQUFHLElBQUFnQyxRQUFBLENBQUFFLG1CQUFtQixHQUFFO1lBRTlDLE1BQU0sQ0FBQ08sUUFBUSxFQUFFb00sV0FBVyxDQUFDLEdBQUd6TixNQUFBLENBQUExRCxPQUFLLENBQUNtSyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2xELElBQUFSLE1BQUEsQ0FBQWUsU0FBUyxFQUFDLENBQUMzUSxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCb1gsV0FBVyxDQUFDO2dCQUFFLEdBQUc3UCxJQUFJLENBQUN5RDtjQUFRLENBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUM7WUFFRixJQUFJLENBQUN6RCxJQUFJLENBQUN4RyxJQUFJLEVBQUU7Y0FDZixPQUFPNEksTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDMEUsTUFBQSxDQUFBNkgsYUFBYTtnQkFBQ1MsT0FBTyxFQUFFdk8sS0FBSyxDQUFDdEgsVUFBVSxDQUFDOE47Y0FBSyxFQUFJOztZQUUxRCxPQUNDcEYsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFBSCxNQUFBLENBQUExRCxPQUFBLENBQUE4RCxRQUFBLFFBQ0NKLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsQ0FBQ29OLFNBQUEsQ0FBQUQsUUFBUTtjQUFDMVAsSUFBSSxFQUFFQTtZQUFJLEVBQUksRUFDeEJvQyxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUNxTixVQUFBLENBQUFFLG1CQUFtQjtjQUFDOVAsSUFBSSxFQUFFQSxJQUFJO2NBQUUrUCxXQUFXLEVBQUU7WUFBSSxFQUFJLENBQ3BEO1VBRUwsQ0FBQztVQUFDeFcsT0FBQSxDQUFBbVYsb0JBQUEsR0FBQUEsb0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJGLElBQUF0TSxNQUFBLEdBQUFqSyxPQUFBO1VBQ00sU0FBVTZYLFVBQVVBLENBQUM7WUFBRUMsTUFBTTtZQUFFQyxDQUFDO1lBQUUxVyxJQUFJO1lBQUV1VyxXQUFXO1lBQUVJO1VBQVEsQ0FBRTtZQUNwRSxJQUFJN0csR0FBRyxHQUFHLGNBQWM5UCxJQUFJLENBQUM0VyxNQUFNLEtBQUtGLENBQUMsR0FBRyxtQkFBbUIsR0FBRyxFQUFFLEdBQUc7WUFFdkUsSUFBSTFXLElBQUksQ0FBQzRXLE1BQU0sS0FBS0YsQ0FBQyxFQUFFNUcsR0FBRyxJQUFJLFNBQVM5UCxJQUFJLENBQUM2VyxRQUFRLEdBQUcsa0JBQWtCLEdBQUcsZ0JBQWdCLEVBQUU7WUFDOUYsSUFBSU4sV0FBVyxJQUFJRyxDQUFDLEtBQUtDLFFBQVEsQ0FBQ0csYUFBYSxFQUFFaEgsR0FBRyxJQUFJLGtCQUFrQjtZQUUxRSxPQUNDbEgsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFLaUQsR0FBRyxFQUFFeUssTUFBTTtjQUFFck4sU0FBUyxFQUFFMEc7WUFBRyxHQUMvQmxILE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsZUFBTzBOLE1BQU0sQ0FBUSxDQUNoQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBLElBQUE3TixNQUFBLEdBQUFqSyxPQUFBO1VBRUEsSUFBQW9ZLE9BQUEsR0FBQXBZLE9BQUE7VUFHTztVQUFXLE1BQU0yWCxtQkFBbUIsR0FBOEJBLENBQUM7WUFBRTlQLElBQUk7WUFBRStQO1VBQVcsQ0FBRSxLQUFJO1lBQ2xHLE1BQU07Y0FBRXZXO1lBQUksQ0FBRSxHQUFHd0csSUFBSTtZQUVyQixNQUFNd1EsU0FBUyxHQUFHaFgsSUFBSSxDQUFDZ1gsU0FBUyxJQUFJLEVBQUU7WUFDdEMsTUFBTWhGLE1BQU0sR0FBR3hMLElBQUksQ0FBQ2lPLFVBQVUsQ0FBQ3dDLFNBQVMsQ0FBQ3RVLEdBQUcsQ0FBQyxDQUFDZ1UsUUFBUSxFQUFFaE4sS0FBSyxLQUFJO2NBQ2hFLE1BQU0zSixJQUFJLEdBQUcsQ0FBQ2dYLFNBQVMsSUFBSUEsU0FBUyxDQUFDck4sS0FBSyxDQUFDLEtBQUssRUFBRTtjQUNsRCxNQUFNYSxPQUFPLEdBQUdtTSxRQUFRLENBQUNuTSxPQUFPLENBQUM3SCxHQUFHLENBQUMsQ0FBQzhULE1BQU0sRUFBRUMsQ0FBQyxLQUFJO2dCQUNsRCxNQUFNUSxLQUFLLEdBQUc7a0JBQUVSLENBQUM7a0JBQUUxVyxJQUFJO2tCQUFFMlcsUUFBUTtrQkFBRUYsTUFBTTtrQkFBRUY7Z0JBQVcsQ0FBRTtnQkFDeEQsT0FBTzNOLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsQ0FBQ2dPLE9BQUEsQ0FBQVAsVUFBVTtrQkFBQ3hLLEdBQUcsRUFBRSxZQUFZMEssQ0FBQyxXQUFXL00sS0FBSyxFQUFFO2tCQUFBLEdBQU11TjtnQkFBSyxFQUFJO2NBQ3ZFLENBQUMsQ0FBQztjQUVGLE9BQ0N0TyxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBO2dCQUFLaUQsR0FBRyxFQUFFMkssUUFBUSxDQUFDQSxRQUFRO2dCQUFFdk4sU0FBUyxFQUFDO2NBQWtELEdBQ3hGUixNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLGFBQUs0TixRQUFRLENBQUNBLFFBQVEsQ0FBTSxFQUMzQm5NLE9BQU8sQ0FDSDtZQUVSLENBQUMsQ0FBQztZQUNGLE9BQU81QixNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUFILE1BQUEsQ0FBQTFELE9BQUEsQ0FBQThELFFBQUEsUUFBR2dKLE1BQU0sQ0FBSTtVQUNyQixDQUFDO1VBQUNqUyxPQUFBLENBQUF1VyxtQkFBQSxHQUFBQSxtQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkYsSUFBQTFOLE1BQUEsR0FBQWpLLE9BQUE7VUFFQSxJQUFBcUYsT0FBQSxHQUFBckYsT0FBQTtVQUNBLElBQUFpUyxLQUFBLEdBQUFqUyxPQUFBO1VBQ0EsSUFBQTZLLFFBQUEsR0FBQTdLLE9BQUE7VUFDQSxJQUFBOE8sTUFBQSxHQUFBOU8sT0FBQTtVQUNBLElBQUEwRSxLQUFBLEdBQUExRSxPQUFBO1VBQ00sU0FBVStWLGNBQWNBLENBQUM7WUFBRWxPO1VBQUksQ0FBRTtZQUN0QyxNQUFNO2NBQUVnQixLQUFLO2NBQUV2STtZQUFLLENBQUUsR0FBRyxJQUFBdUssUUFBQSxDQUFBRSxtQkFBbUIsR0FBRTtZQUU5QyxJQUFJLENBQUNsRCxJQUFJLENBQUN4RyxJQUFJLEVBQUUsT0FBTzRJLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsQ0FBQzBFLE1BQUEsQ0FBQTZILGFBQWE7Y0FBQ1MsT0FBTyxFQUFFdk8sS0FBSyxDQUFDdEgsVUFBVSxDQUFDOE47WUFBSyxFQUFJO1lBRXpFLE1BQU1tSixRQUFRLEdBQUcxUyxNQUFNLENBQUNDLElBQUksQ0FBQzhCLElBQUksQ0FBQ3hHLElBQUksQ0FBQyxDQUFDMkMsR0FBRyxDQUFDcUosR0FBRyxJQUFJeEYsSUFBSSxDQUFDeEcsSUFBSSxDQUFDZ00sR0FBRyxDQUFDLENBQUM7WUFDbEUsTUFBTW9MLFFBQVEsR0FBRyxHQUFHcFQsT0FBQSxDQUFBa0IsT0FBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxnQkFBZ0JwRyxLQUFLLENBQUN3RyxLQUFLLENBQUM2QixZQUFZLGVBQWVkLElBQUksQ0FBQy9GLEVBQUUsYUFBYXhCLEtBQUssQ0FBQ21KLE1BQU0sUUFBUTtZQUU3SSxPQUNDUSxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUFnQyxHQUM5Q1IsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxhQUFLdkIsS0FBSyxDQUFDNlAsV0FBVyxDQUFDdlcsS0FBSyxDQUFNLEVBQ2xDOEgsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFHSyxTQUFTLEVBQUM7WUFBSSxHQUFFNUIsS0FBSyxDQUFDNlAsV0FBVyxDQUFDQyxRQUFRLENBQUssRUFFbEQxTyxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUF3RCxHQUN0RVIsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxhQUFLdkIsS0FBSyxDQUFDK1AsWUFBWSxDQUFNLEVBQzdCM08sTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBYyxHQUM1QlIsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFPeU8sUUFBUTtjQUFDQyxPQUFPLEVBQUM7WUFBVSxHQUNqQzdPLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUE7Y0FBUXVGLEdBQUcsRUFBRThJO1lBQVEsRUFBSSxFLG1EQUVsQixDQUNILENBQ0QsRUFHTnhPLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsQ0FBQzZILEtBQUEsQ0FBQWEsSUFBSTtjQUFDaUcsU0FBUyxFQUFDLEtBQUs7Y0FBQ3ZYLEtBQUssRUFBRWdYLFFBQVE7Y0FBRXpGLE9BQU8sRUFBRXJPLEtBQUEsQ0FBQXNVO1lBQVUsRUFBSSxDQUN6RDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQSxJQUFBL08sTUFBQSxHQUFBakssT0FBQTtVQUNPLE1BQU1nWixVQUFVLEdBQUdBLENBQUM7WUFBRTNYO1VBQUksQ0FBRSxLQUFJO1lBQ3RDLE1BQU13RyxJQUFJLEdBQUd4RyxJQUFJO1lBQ2pCLE9BQ0M0SSxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBO2NBQVNLLFNBQVMsRUFBQztZQUEyQixHQUM3Q1IsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFTSyxTQUFTLEVBQUM7WUFBdUIsR0FDekNSLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsZUFBT3ZDLElBQUksQ0FBQ2pFLElBQUksQ0FBUSxDQUNmLEVBQ1ZxRyxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLGtCQUNDSCxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLGlCQUNDSCxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLGFBQUt2QyxJQUFJLENBQUNoRyxJQUFJLENBQU0sQ0FDWixFQUNUb0ksTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFHSyxTQUFTLEVBQUM7WUFBSSxHQUFFNUMsSUFBSSxDQUFDb1IsUUFBUSxDQUFLLENBQzVCLENBQ0Q7VUFFWixDQUFDO1VBQUM3WCxPQUFBLENBQUE0WCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJGLElBQUEvTyxNQUFBLEdBQUFqSyxPQUFBO1VBR0EsSUFBQWtaLFNBQUEsR0FBQWxaLE9BQUE7VUFDQSxJQUFBbVosT0FBQSxHQUFBblosT0FBQTtVQUNBLElBQUE2SyxRQUFBLEdBQUE3SyxPQUFBO1VBQ0EsSUFBQTBFLEtBQUEsR0FBQTFFLE9BQUE7VUFDTSxTQUFVeVYsY0FBY0EsQ0FBQztZQUFFL04sUUFBUTtZQUFFNk47VUFBVyxDQUFFO1lBQ3ZELE1BQU07Y0FBRWpWO1lBQUssQ0FBRSxHQUFHLElBQUF1SyxRQUFBLENBQUFFLG1CQUFtQixHQUFFO1lBRXZDLE1BQU0sQ0FBQ3FPLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdwUCxNQUFBLENBQUExRCxPQUFLLENBQUNtSyxRQUFRLENBQVNoSixRQUFRLENBQUM1RixFQUFFLENBQUM7WUFFbkUsTUFBTU4sS0FBSyxHQUFHbEIsS0FBSyxDQUFDd0csS0FBSyxDQUFDdkYsVUFBVSxDQUFDQyxLQUFLLENBQ3hDOFgsTUFBTSxDQUFDNVIsUUFBUSxJQUFJQSxRQUFRLENBQUM1RixFQUFFLEtBQUtzWCxRQUFRLENBQUMsQ0FDNUNwVixHQUFHLENBQUMwRCxRQUFRLElBQUc7Y0FDZixPQUFPdUMsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDMUYsS0FBQSxDQUFBNlUsa0JBQWtCO2dCQUFDbE0sR0FBRyxFQUFFM0YsUUFBUSxDQUFDNUYsRUFBRTtnQkFBRTRGLFFBQVEsRUFBRUEsUUFBUTtnQkFBRTJSLFdBQVcsRUFBRTlEO2NBQVcsRUFBSTtZQUM5RixDQUFDLENBQUM7WUFFSCxPQUNDdEwsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDOE8sU0FBQSxDQUFBTSxRQUFRO2NBQUMvTyxTQUFTLEVBQUM7WUFBZSxHQUNsQ1IsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDOE8sU0FBQSxDQUFBTyxjQUFjLFFBQUV4UCxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUMrTyxPQUFBLENBQUFPLFlBQVk7Y0FBQ0MsRUFBRSxFQUFDLEtBQUs7Y0FBQzdYLEVBQUUsRUFBRXNYLFFBQVE7Y0FBRS9MLEdBQUcsRUFBRSxHQUFHK0wsUUFBUTtZQUFTLEVBQUksQ0FBa0IsRUFDckduUCxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUM4TyxTQUFBLENBQUFVLFlBQVksUUFBRXBZLEtBQUssQ0FBZ0IsQ0FDMUI7VUFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQXlJLE1BQUEsR0FBQWpLLE9BQUE7VUFDQSxJQUFBNE8sTUFBQSxHQUFBNU8sT0FBQTtVQUVBLElBQUFrWixTQUFBLEdBQUFsWixPQUFBO1VBRUEsSUFBQTZLLFFBQUEsR0FBQTdLLE9BQUE7VUFNTSxTQUFVdVosa0JBQWtCQSxDQUFDO1lBQUVGLFdBQVc7WUFBRTNSLFFBQVE7WUFBRWlTLEVBQUUsR0FBR1QsU0FBQSxDQUFBVztVQUFZLENBQTJCO1lBQ3ZHLE1BQU07Y0FBRXZaO1lBQUssQ0FBRSxHQUFHLElBQUF1SyxRQUFBLENBQUFFLG1CQUFtQixHQUFFO1lBRXZDLE1BQU0rTyxPQUFPLEdBQUcsc0JBQXNCcFMsUUFBUSxDQUFDdEYsSUFBSSxFQUFFO1lBQ3JELE1BQU0yWCxPQUFPLEdBQUdKLEVBQUU7WUFDbEIsTUFBTWxLLE9BQU8sR0FBR3FDLEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDMEIsY0FBYyxFQUFFO2NBQ3RCNkYsV0FBVyxDQUFDM1IsUUFBUSxDQUFDO1lBQ3RCLENBQUM7WUFDRCxPQUNDdUMsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDMlAsT0FBTztjQUFDdFAsU0FBUyxFQUFDLGlCQUFpQjtjQUFDZ0YsT0FBTyxFQUFFQTtZQUFPLEdBQ3BEeEYsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBMEIsR0FDeENSLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUE7Y0FBU0ssU0FBUyxFQUFFcVA7WUFBTyxHQUMxQjdQLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsQ0FBQ3dFLE1BQUEsQ0FBQW9MLE9BQU87Y0FBQ3ZQLFNBQVMsRUFBQyxhQUFhO2NBQUM3RyxJQUFJLEVBQUU4RCxRQUFRLENBQUN0RjtZQUFJLEVBQUksQ0FDL0MsRUFDVjZILE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsZUFBTzFDLFFBQVEsQ0FBQ3ZGLEtBQUssQ0FBUSxDQUN4QixDQUNHO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUE4SCxNQUFBLEdBQUFqSyxPQUFBO1VBRUEsSUFBQTRPLE1BQUEsR0FBQTVPLE9BQUE7VUFFQSxJQUFBa1osU0FBQSxHQUFBbFosT0FBQTtVQUNBLElBQUE2SyxRQUFBLEdBQUE3SyxPQUFBO1VBQ00sU0FBVTBaLFlBQVlBLENBQUM7WUFBRTVYLEVBQUU7WUFBRTZYLEVBQUUsR0FBR1QsU0FBQSxDQUFBVztVQUFZLENBQTRCO1lBQy9FLE1BQU07Y0FBRXZaO1lBQUssQ0FBRSxHQUFHLElBQUF1SyxRQUFBLENBQUFFLG1CQUFtQixHQUFFO1lBRXZDLE1BQU1yRCxRQUFRLEdBQUdwSCxLQUFLLENBQUN3RyxLQUFLLENBQUN2RixVQUFVLENBQUNQLEdBQUcsQ0FBQ2MsRUFBRSxDQUFDO1lBQy9DLElBQUksQ0FBQzRGLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFDMUIsTUFBTW9TLE9BQU8sR0FBRyxzQkFBc0JwUyxRQUFRLENBQUN0RixJQUFJLEVBQUU7WUFDckQsTUFBTTJYLE9BQU8sR0FBR0osRUFBRTtZQUNsQixJQUFJLENBQUNqUyxRQUFRLEVBQUU7Y0FDZGtDLE9BQU8sQ0FBQ3FRLElBQUksQ0FBQyxvQkFBb0IsRUFBRW5ZLEVBQUUsQ0FBQztjQUN0QyxPQUFPLElBQUk7O1lBRVosT0FDQ21JLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsQ0FBQzJQLE9BQU87Y0FBQ3RQLFNBQVMsRUFBQztZQUFpQixHQUNuQ1IsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBMEIsR0FDeENSLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUE7Y0FBU0ssU0FBUyxFQUFFcVA7WUFBTyxHQUMxQjdQLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsQ0FBQ3dFLE1BQUEsQ0FBQW9MLE9BQU87Y0FBQ3ZQLFNBQVMsRUFBQyxhQUFhO2NBQUM3RyxJQUFJLEVBQUU4RCxRQUFRLENBQUN0RjtZQUFJLEVBQUksQ0FDL0MsRUFDVjZILE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsZUFBTzFDLFFBQVEsQ0FBQ3ZGLEtBQUssQ0FBUSxDQUN4QixFQUNOOEgsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFDd0UsTUFBQSxDQUFBb0wsT0FBTztjQUFDcFcsSUFBSSxFQUFDO1lBQWUsRUFBRyxDQUN2QjtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCQSxJQUFBc1IsS0FBQSxHQUFBbFYsT0FBQTtVQUNBLElBQUFrYSxVQUFBLEdBQUFsYSxPQUFBO1VBQ0EsSUFBQWlTLEtBQUEsR0FBQWpTLE9BQUE7VUFDQSxJQUFBNE8sTUFBQSxHQUFBNU8sT0FBQTtVQUNBLElBQUE2SyxRQUFBLEdBQUE3SyxPQUFBO1VBQ0EsSUFBQW1hLFlBQUEsR0FBQW5hLE9BQUE7VUFDTSxTQUFVb2EseUJBQXlCQSxDQUFDO1lBQUV2UyxJQUFJO1lBQUVtRDtVQUFLLENBQUU7WUFDeEQsTUFBTTtjQUFFbkM7WUFBSyxDQUFFLEdBQUcsSUFBQWdDLFFBQUEsQ0FBQUUsbUJBQW1CLEdBQUU7WUFDdkMsTUFBTSxDQUFDc1AsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR3BGLEtBQUssQ0FBQ3hFLFFBQVEsQ0FBQzFGLEtBQUssS0FBSyxDQUFDLENBQUM7WUFDL0QsTUFBTXVQLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCRCxhQUFhLENBQUMsQ0FBQ0QsVUFBVSxDQUFDO1lBQzNCLENBQUM7WUFFRCxPQUNDbkYsS0FBQSxDQUFBOUssYUFBQTtjQUFTSyxTQUFTLEVBQUM7WUFBMEIsR0FDNUN5SyxLQUFBLENBQUE5SyxhQUFBLENBQUMrUCxZQUFBLENBQUFLLG9CQUFvQjtjQUFDRCxRQUFRLEVBQUVBLFFBQVE7Y0FBRXBNLElBQUksRUFBRWtNO1lBQVUsR0FDekRuRixLQUFBLENBQUE5SyxhQUFBLENBQUMrUCxZQUFBLENBQUFNLGlCQUFpQixRQUNqQnZGLEtBQUEsQ0FBQTlLLGFBQUE7Y0FBUUssU0FBUyxFQUFDO1lBQWtCLEdBQ25DeUssS0FBQSxDQUFBOUssYUFBQTtjQUFTSyxTQUFTLEVBQUUsaUNBQWlDNUMsSUFBSSxDQUFDSCxRQUFRLENBQUN0RixJQUFJO1lBQUUsR0FDeEU4UyxLQUFBLENBQUE5SyxhQUFBLENBQUN3RSxNQUFBLENBQUFvTCxPQUFPO2NBQUNwVyxJQUFJLEVBQUVnTCxNQUFBLENBQUFPLEtBQUssQ0FBQ3RILElBQUksQ0FBQ0gsUUFBUSxDQUFDdEYsSUFBSTtZQUFDLEVBQUksQ0FDbkMsRUFDVjhTLEtBQUEsQ0FBQTlLLGFBQUEsY0FDQzhLLEtBQUEsQ0FBQTlLLGFBQUEsYUFBS3ZDLElBQUksQ0FBQ0gsUUFBUSxDQUFDdkYsS0FBSyxDQUFNLEVBQzlCK1MsS0FBQSxDQUFBOUssYUFBQSxlQUFPdkIsS0FBSyxDQUFDdEgsVUFBVSxDQUFDbVosS0FBSyxDQUFDN1MsSUFBSSxDQUFDSCxRQUFRLENBQUN0RixJQUFJLENBQUMsQ0FBUSxDQUNwRCxDQUNFLENBQ1UsRUFDcEI4UyxLQUFBLENBQUE5SyxhQUFBLENBQUMrUCxZQUFBLENBQUFRLGtCQUFrQixRQUNsQnpGLEtBQUEsQ0FBQTlLLGFBQUEsQ0FBQThLLEtBQUEsQ0FBQTdLLFFBQUEsUUFDQzZLLEtBQUEsQ0FBQTlLLGFBQUE7Y0FBSUssU0FBUyxFQUFDO1lBQU8sR0FBRTVCLEtBQUssQ0FBQ3RILFVBQVUsQ0FBQ29DLE9BQU8sQ0FBTSxFQUNyRHVSLEtBQUEsQ0FBQTlLLGFBQUEsYUFBS3ZDLElBQUksQ0FBQ2hHLElBQUksRSxJQUFPLEVBQ3JCcVQsS0FBQSxDQUFBOUssYUFBQSxZQUFJdkMsSUFBSSxDQUFDN0UsU0FBUyxDQUFLLEVBQ3ZCa1MsS0FBQSxDQUFBOUssYUFBQTtjQUFJSyxTQUFTLEVBQUM7WUFBTyxHQUFFNUIsS0FBSyxDQUFDdEgsVUFBVSxDQUFDcVosT0FBTyxDQUFNLEVBQ3JEMUYsS0FBQSxDQUFBOUssYUFBQSxDQUFDNkgsS0FBQSxDQUFBYSxJQUFJO2NBQ0pySSxTQUFTLEVBQUMsb0NBQW9DO2NBQzlDakosS0FBSyxFQUFFcUcsSUFBSSxDQUFDbkUsUUFBUSxDQUFDWixVQUFVO2NBQy9CaVEsT0FBTyxFQUFFbUgsVUFBQSxDQUFBVztZQUFrQyxFQUMxQyxDQUNBLENBQ2lCLENBQ0MsQ0FDZDtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNDQSxJQUFBM0YsS0FBQSxHQUFBbFYsT0FBQTtVQUVNLFNBQVU2YSxrQ0FBa0NBLENBQUM7WUFBRWhUO1VBQUksQ0FBRTtZQUMxRCxNQUFNO2NBQUVoRyxJQUFJO2NBQUVpWixRQUFRO2NBQUV4WjtZQUFNLENBQUUsR0FBR3VHLElBQUk7WUFDdkMsT0FDQ3FOLEtBQUEsQ0FBQTlLLGFBQUEsY0FDQzhLLEtBQUEsQ0FBQTlLLGFBQUE7Y0FBUUssU0FBUyxFQUFDO1lBQXNDLEdBQ3ZEeUssS0FBQSxDQUFBOUssYUFBQSxhQUFLdkksSUFBSSxDQUFNLEVBQ2ZxVCxLQUFBLENBQUE5SyxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUFtQixHQUNqQ3lLLEtBQUEsQ0FBQTlLLGFBQUEsZUFBTzlJLE1BQU0sQ0FBQ3NDLElBQUksQ0FBUSxFQUMxQnNSLEtBQUEsQ0FBQTlLLGFBQUEsZUFBTzlJLE1BQU0sQ0FBQ08sSUFBSSxDQUFRLENBQ3JCLENBQ0UsRUFFVHFULEtBQUEsQ0FBQTlLLGFBQUEsWUFBSTBRLFFBQVEsQ0FBSyxDQUNaO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJBLElBQUE1RixLQUFBLEdBQUFsVixPQUFBO1VBQ0EsSUFBQWtPLE1BQUEsR0FBQWxPLE9BQUE7VUFDQSxJQUFBaVMsS0FBQSxHQUFBalMsT0FBQTtVQUNBLElBQUE4RCxTQUFBLEdBQUE5RCxPQUFBO1VBQ0EsSUFBQTRPLE1BQUEsR0FBQTVPLE9BQUE7VUFDQSxJQUFBNkssUUFBQSxHQUFBN0ssT0FBQTtVQUVNLFNBQVUyTyx3QkFBd0JBLENBQUM7WUFBRTlHO1VBQUksQ0FBRTtZQUNoRCxNQUFNO2NBQUV2SDtZQUFLLENBQUUsR0FBRyxJQUFBdUssUUFBQSxDQUFBRSxtQkFBbUIsR0FBRTtZQUN2QyxNQUFNO2NBQUV4SCxJQUFJLEVBQUVtTDtZQUFPLENBQUUsR0FBRzdHLElBQUk7WUFDOUIsTUFBTSxDQUFDckcsS0FBSyxFQUFFdVosUUFBUSxDQUFDLEdBQUc3RixLQUFLLENBQUN4RSxRQUFRLENBQUM3SSxJQUFJLENBQUN0RyxVQUFVLENBQUNDLEtBQUssQ0FBQztZQUMvRCxNQUFNLENBQUM2SCxRQUFRLEVBQUUySCxXQUFXLENBQUMsR0FBR2tFLEtBQUssQ0FBQ3hFLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTTRCLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCdEIsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQjFRLEtBQUssQ0FBQ3lKLGFBQWEsRUFBRSxDQUFDcU0sT0FBTyxDQUFDLE1BQUs7Z0JBQ2xDcEYsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDbEIrSixRQUFRLENBQUNsVCxJQUFJLENBQUN0RyxVQUFVLENBQUNDLEtBQUssQ0FBQztjQUNoQyxDQUFDLENBQUM7WUFDSCxDQUFDO1lBRUQsTUFBTTJQLEdBQUcsR0FBRyxzQkFBc0I5SCxRQUFRLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUVsRSxPQUNDNkwsS0FBQSxDQUFBOUssYUFBQTtjQUFLSyxTQUFTLEVBQUUwRztZQUFHLEdBQ2xCK0QsS0FBQSxDQUFBOUssYUFBQTtjQUFRSyxTQUFTLEVBQUM7WUFBMEIsR0FDM0N5SyxLQUFBLENBQUE5SyxhQUFBO2NBQVNLLFNBQVMsRUFBQztZQUErQyxHQUNqRXlLLEtBQUEsQ0FBQTlLLGFBQUEsYUFBS3NFLE9BQU8sQ0FBQzdNLElBQUksQ0FBTSxFQUN2QnFULEtBQUEsQ0FBQTlLLGFBQUEsY0FDQzhLLEtBQUEsQ0FBQTlLLGFBQUEsQ0FBQ3dFLE1BQUEsQ0FBQW1ELFVBQVU7Y0FBQ25PLElBQUksRUFBQyxTQUFTO2NBQUM2RyxTQUFTLEVBQUMsUUFBUTtjQUFDZ0YsT0FBTyxFQUFFNkM7WUFBUyxFQUFJLEVBQ3BFNEMsS0FBQSxDQUFBOUssYUFBQSxDQUFDOEQsTUFBTSxDQUFDbUksV0FBVyxPQUFHLENBQ2pCLENBQ0csQ0FDRixFQUNUbkIsS0FBQSxDQUFBOUssYUFBQTtjQUFTSyxTQUFTLEVBQUM7WUFBb0IsR0FDdEN5SyxLQUFBLENBQUE5SyxhQUFBLENBQUM2SCxLQUFBLENBQUFhLElBQUk7Y0FBQ3JJLFNBQVMsRUFBQywwQkFBMEI7Y0FBQ2pKLEtBQUssRUFBRUEsS0FBSztjQUFFdVIsT0FBTyxFQUFFalAsU0FBQSxDQUFBc1c7WUFBeUIsRUFBSSxDQUN0RixDQUNMO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENBLElBQUFsRixLQUFBLEdBQUFsVixPQUFBO1VBQ0EsSUFBQTJULE1BQUEsR0FBQTNULE9BQUE7VUFHTSxTQUFVNlAsUUFBUUEsQ0FBQztZQUFFQyxLQUFLO1lBQUV6TyxJQUFJLEVBQUU7Y0FBRU8sUUFBUTtjQUFFQztZQUFJO1VBQUUsQ0FBMEI7WUFDbkYsT0FDQ3FULEtBQUEsQ0FBQTlLLGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQW9CLEdBQ2xDeUssS0FBQSxDQUFBOUssYUFBQTtjQUFJSyxTQUFTLEVBQUM7WUFBa0IsR0FBRXFGLEtBQUssQ0FBTSxFQUM3Q29GLEtBQUEsQ0FBQTlLLGFBQUE7Y0FBU0ssU0FBUyxFQUFDO1lBQW1CLEdBQ3JDeUssS0FBQSxDQUFBOUssYUFBQSxDQUFDdUosTUFBQSxDQUFBVSxLQUFLO2NBQUM1SixTQUFTLEVBQUMsZ0JBQWdCO2NBQUNrRixHQUFHLEVBQUUvTjtZQUFRLEVBQUksRUFDbkRzVCxLQUFBLENBQUE5SyxhQUFBO2NBQU1LLFNBQVMsRUFBQztZQUFpQixHQUFFNUksSUFBSSxDQUFRLENBQ3RDLENBQ0w7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkQSxJQUFBd0QsT0FBQSxHQUFBckYsT0FBQTtVQUNBLElBQUFpSyxNQUFBLEdBQUFqSyxPQUFBO1VBQ0EsSUFBQTZLLFFBQUEsR0FBQTdLLE9BQUE7VUFDQSxJQUFBNE8sTUFBQSxHQUFBNU8sT0FBQTtVQUNBLElBQUFpUyxLQUFBLEdBQUFqUyxPQUFBO1VBQ0EsSUFBQThILFlBQUEsR0FBQTlILE9BQUE7VUFDQSxJQUFBOE8sTUFBQSxHQUFBOU8sT0FBQTtVQUNBLElBQUFrUSxNQUFBLEdBQUFsUSxPQUFBO1VBQ0EsTUFBTXdRLE9BQU8sR0FBR25MLE9BQUEsQ0FBQWtCLE9BQU0sRUFBRUMsTUFBTSxFQUFFd0ksUUFBUSxJQUFJLFFBQVE7VUFDN0M7VUFBVSxTQUNSMEMsWUFBWUEsQ0FBQTtZQUNwQixNQUFNO2NBQUVwUjtZQUFLLENBQUUsR0FBRyxJQUFBdUssUUFBQSxDQUFBRSxtQkFBbUIsR0FBRTtZQUN2QyxNQUFNO2NBQUV4QyxnQkFBZ0IsRUFBRWI7WUFBUSxDQUFFLEdBQUdwSCxLQUFLO1lBQzVDLE1BQU0sQ0FBQzBhLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUdoUixNQUFBLENBQUExRCxPQUFLLENBQUNtSyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2hELElBQUFSLE1BQUEsQ0FBQWUsU0FBUyxFQUFDLENBQUMzUSxLQUFLLENBQUMsRUFBRSxNQUFNMmEsVUFBVSxDQUFDM2EsS0FBSyxDQUFDaUksZ0JBQWdCLENBQUMsRUFBRSxjQUFjLENBQUM7WUFFNUUsTUFBTTZGLE9BQU8sR0FBR0EsQ0FBQSxLQUFLO2NBQ3BCOU4sS0FBSyxDQUFDMEosY0FBYyxDQUFDLElBQUksQ0FBQztZQUMzQixDQUFDO1lBRUQsT0FDQ0MsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFBSCxNQUFBLENBQUExRCxPQUFBLENBQUE4RCxRQUFBLFFBQ0NKLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUE7Y0FBU0ssU0FBUyxFQUFFLGdDQUFnQy9DLFFBQVEsQ0FBQ3RGLElBQUk7WUFBRSxHQUNsRTZILE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsY0FDQ0gsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxhQUFLMUMsUUFBUSxDQUFDdkYsS0FBSyxFLElBQU8sQ0FDckIsRUFFTjhILE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQVksR0FDMUJSLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsQ0FBQ3dFLE1BQUEsQ0FBQW1ELFVBQVU7Y0FBQ25PLElBQUksRUFBQyxPQUFPO2NBQUN6QixLQUFLLEVBQUMsT0FBTztjQUFDc04sT0FBTyxFQUFFckI7WUFBTyxFQUFJLENBQ3RELENBQ0csRUFDVDFHLFFBQVEsQ0FBQ3BFLFlBQVksQ0FBQzBDLE1BQU0sR0FDNUJpRSxNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUM2SCxLQUFBLENBQUFhLElBQUk7Y0FBQ3JJLFNBQVMsRUFBQyxzQkFBc0I7Y0FBQ2pKLEtBQUssRUFBRWtHLFFBQVEsQ0FBQ3BFLFlBQVk7Y0FBRXlQLE9BQU8sRUFBRWpMLFlBQUEsQ0FBQW9UO1lBQW1CLEVBQUksR0FFckdqUixNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUMwRSxNQUFBLENBQUFHLEtBQUs7Y0FBQzdILElBQUksRUFBRTtZQUF1QixFQUNwQyxDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENBLElBQUEvQixPQUFBLEdBQUFyRixPQUFBO1VBQ0EsSUFBQWlLLE1BQUEsR0FBQWpLLE9BQUE7VUFDQSxJQUFBNkssUUFBQSxHQUFBN0ssT0FBQTtVQUdBLElBQUE2TyxHQUFBLEdBQUE3TyxPQUFBO1VBQ0EsSUFBQWlTLEtBQUEsR0FBQWpTLE9BQUE7VUFDQSxJQUFBa2EsVUFBQSxHQUFBbGEsT0FBQTtVQUNBLE1BQU13USxPQUFPLEdBQUduTCxPQUFBLENBQUFrQixPQUFNLEVBQUVDLE1BQU0sRUFBRXdJLFFBQVEsSUFBSSxRQUFRO1VBQzdDO1VBQVUsU0FDUmtNLG1CQUFtQkEsQ0FBQztZQUFFclQ7VUFBSSxDQUFFO1lBQ3BDLE1BQU07Y0FBRXZIO1lBQUssQ0FBRSxHQUFHLElBQUF1SyxRQUFBLENBQUFFLG1CQUFtQixHQUFFO1lBQ3ZDLE1BQU07Y0FBRXhDLGdCQUFnQixFQUFFYjtZQUFRLENBQUUsR0FBR3BILEtBQUs7WUFDNUMsTUFBTWUsSUFBSSxHQUFHd0csSUFBSSxDQUFDdEcsVUFBVSxDQUFDUCxHQUFHLENBQUMwRyxRQUFRLENBQUM1RixFQUFFLENBQUM7WUFFN0MsSUFBSSxDQUFDVCxJQUFJLEVBQUU7Y0FDVnVJLE9BQU8sQ0FBQ3FRLElBQUksQ0FBQyxZQUFZcFMsSUFBSSxDQUFDdEUsSUFBSSxDQUFDMUIsSUFBSSxrQ0FBa0MsRUFBRWdHLElBQUksQ0FBQztjQUNoRixPQUFPLElBQUk7O1lBR1osTUFBTXVHLE9BQU8sR0FBR0EsQ0FBQSxLQUFLO2NBQ3BCOU4sS0FBSyxDQUFDMEosY0FBYyxDQUFDLElBQUksQ0FBQztZQUMzQixDQUFDO1lBRUQsTUFBTXpHLElBQUksR0FBR3NFLElBQUksQ0FBQ3RFLElBQUk7WUFDdEIsT0FDQzBHLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQXNCLEdBQ3BDUixNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBO2NBQVNLLFNBQVMsRUFBQztZQUFLLEdBQ3ZCUixNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUN5RSxHQUFBLENBQUFnQixRQUFRO2NBQUN4TyxJQUFJLEVBQUV3RyxJQUFJLENBQUN0RTtZQUFJLEVBQUksQ0FDcEIsRUFDVjBHLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsa0JBQ0NILE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsQ0FBQzZILEtBQUEsQ0FBQWEsSUFBSTtjQUFDdFIsS0FBSyxFQUFFSCxJQUFJLENBQUNxQyxRQUFRLENBQUNaLFVBQVU7Y0FBRWlRLE9BQU8sRUFBRW1ILFVBQUEsQ0FBQVc7WUFBa0MsRUFBSSxDQUM3RSxDQUNMO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBLElBQUF4VixPQUFBLEdBQUFyRixPQUFBO1VBQ0EsSUFBQWlTLEtBQUEsR0FBQWpTLE9BQUE7VUFDQSxJQUFBaUssTUFBQSxHQUFBakssT0FBQTtVQUNBLElBQUE0SyxPQUFBLEdBQUE1SyxPQUFBO1VBQ0EsSUFBQTZLLFFBQUEsR0FBQTdLLE9BQUE7VUFFQSxJQUFBMEUsS0FBQSxHQUFBMUUsT0FBQTtVQUVBLE1BQU13USxPQUFPLEdBQUduTCxPQUFBLENBQUFrQixPQUFNLEVBQUVDLE1BQU0sRUFBRXdJLFFBQVEsSUFBSSxRQUFRO1VBQzdDO1VBQVUsU0FDUndDLFdBQVdBLENBQUE7WUFDbkIsTUFBTTtjQUFFbFI7WUFBSyxDQUFFLEdBQUcsSUFBQXVLLFFBQUEsQ0FBQUUsbUJBQW1CLEdBQUU7WUFFdkMsT0FDQ2QsTUFBQSxDQUFBMUQsT0FBQSxDQUFBNkQsYUFBQSxDQUFBSCxNQUFBLENBQUExRCxPQUFBLENBQUE4RCxRQUFBLFFBQ0NKLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUEsQ0FBQ1EsT0FBQSxDQUFBSixNQUFNO2NBQUNuSixJQUFJLEVBQUVmLEtBQUssQ0FBQ3dHLEtBQUssQ0FBQ3hEO1lBQVksRUFBSSxFQUMxQzJHLE1BQUEsQ0FBQTFELE9BQUEsQ0FBQTZELGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQWlCLEdBQy9CUixNQUFBLENBQUExRCxPQUFBLENBQUE2RCxhQUFBLENBQUM2SCxLQUFBLENBQUFhLElBQUk7Y0FBQ3JJLFNBQVMsRUFBQywyQkFBMkI7Y0FBQ2pKLEtBQUssRUFBRWxCLEtBQUssQ0FBQ3dHLEtBQUssQ0FBQ3hELFlBQVksQ0FBQzlCLEtBQUs7Y0FBRXVSLE9BQU8sRUFBRXJPLEtBQUEsQ0FBQUM7WUFBSSxFQUFJLENBQy9GLENBQ0o7VUFFTCIsImlnbm9yZUxpc3QiOltdfQ==