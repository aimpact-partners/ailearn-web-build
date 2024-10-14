System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@aimpact/ailearn-app@0.1.13/components/ui", "@aimpact/ailearn-app@0.1.13/components/navbar-header.code", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/config", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/collapsible", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/drawer", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/dropdown", "@aimpact/ailearn-app@0.1.13/components/icons", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/tooltip", "pragmate-ui@1.0.0-beta.6/chips", "@aimpact/ailearn-app@0.1.13/utils", "@aimpact/ailearn-app@0.1.13/shared/charts", "pragmate-ui@1.0.0-beta.6/perfect-scrollbar", "pragmate-ui@1.0.0-beta.6/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, dependency_32, dependency_33, dependency_34, dependency_35, dependency_36, bimport, __Bundle, __pkg, ims, Controller, ActivityAlerts, DetailActivityBody, DetailActivity, EmptyDetailActivity, MultipleChoiceReport, AssessmentQuestions, ActivityView, ChatActivityParticipant, MultipleChoiceActivityParticipant, SpokenActivityParticipant, EmptyCard, GeneralView, ActivityIcon, DrawerAlert, DrawerAlertItem, IconBox, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    ActivityAlerts: void 0,
    DetailActivityBody: void 0,
    DetailActivity: void 0,
    EmptyDetailActivity: void 0,
    MultipleChoiceReport: void 0,
    AssessmentQuestions: void 0,
    ActivityView: void 0,
    ChatActivityParticipant: void 0,
    MultipleChoiceActivityParticipant: void 0,
    SpokenActivityParticipant: void 0,
    EmptyCard: void 0,
    GeneralView: void 0,
    ActivityIcon: void 0,
    DrawerAlert: void 0,
    DrawerAlertItem: void 0,
    IconBox: void 0,
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
    }, function (_beyondJsKernel019Core) {
      dependency_13 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_14 = _react2;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_15 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_aimpactAilearnApp0113ComponentsNavbarHeaderCode) {
      dependency_16 = _aimpactAilearnApp0113ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_17 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp0113Config) {
      dependency_18 = _aimpactAilearnApp0113Config;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_19 = _pragmateUi100Beta6Empty;
    }, function (_pragmateUi100Beta6List) {
      dependency_20 = _pragmateUi100Beta6List;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_21 = _pragmateUi100Beta6Collapsible;
    }, function (_pragmateUi100Beta6Components) {
      dependency_22 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_23 = _pragmateUi100Beta6Tabs;
    }, function (_pragmateUi100Beta6Drawer) {
      dependency_24 = _pragmateUi100Beta6Drawer;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_25 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_26 = _aimpactChatSdk130ChatComponentCode;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_27 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6Dropdown) {
      dependency_28 = _pragmateUi100Beta6Dropdown;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_29 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_pragmateUi100Beta6Image) {
      dependency_30 = _pragmateUi100Beta6Image;
    }, function (_pragmateUi100Beta6Tooltip) {
      dependency_31 = _pragmateUi100Beta6Tooltip;
    }, function (_pragmateUi100Beta6Chips) {
      dependency_32 = _pragmateUi100Beta6Chips;
    }, function (_aimpactAilearnApp0113Utils) {
      dependency_33 = _aimpactAilearnApp0113Utils;
    }, function (_aimpactAilearnApp0113SharedCharts) {
      dependency_34 = _aimpactAilearnApp0113SharedCharts;
    }, function (_pragmateUi100Beta6PerfectScrollbar) {
      dependency_35 = _pragmateUi100Beta6PerfectScrollbar;
    }, function (_pragmateUi100Beta6Form) {
      dependency_36 = _pragmateUi100Beta6Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_5], ['@aimpact/ailearn-sdk/reactive/model', dependency_6], ['@aimpact/http-suite/api', dependency_7], ['@aimpact/ailearn-sdk/config', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@aimpact/ailearn-sdk/tracking', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['react', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['pragmate-ui/empty', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/collapsible', dependency_21], ['pragmate-ui/components', dependency_22], ['pragmate-ui/tabs', dependency_23], ['pragmate-ui/drawer', dependency_24], ['@beyond-js/react-18-widgets/hooks', dependency_25], ['@aimpact/chat-sdk/chat-component.code', dependency_26], ['@aimpact/chat-sdk/widgets/markdown', dependency_27], ['pragmate-ui/dropdown', dependency_28], ['@aimpact/ailearn-app/components/icons', dependency_29], ['pragmate-ui/image', dependency_30], ['pragmate-ui/tooltip', dependency_31], ['pragmate-ui/chips', dependency_32], ['@aimpact/ailearn-app/utils', dependency_33], ['@aimpact/ailearn-app/shared/charts', dependency_34], ['pragmate-ui/perfect-scrollbar', dependency_35], ['pragmate-ui/form', dependency_36]]);
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
        hash: 3047706340,
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

      /*****************************************************
      INTERNAL MODULE: ./model/participants/activities/index
      *****************************************************/

      ims.set('./model/participants/activities/index', {
        hash: 336044294,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantActivities = void 0;
          var _activity = require("../activity");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
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
                const activity = parent.dashboard.activities.get(id);
                activity.addParticipant(parent);
                const specs = {};
                if (activity.type === 'spoken') {
                  specs.properties = Object.keys(items[id]?.data);
                }
                const Objects = {
                  spoken: _spoken.ParticipantSpokenActivity,
                  detault: _activity.ParticipantActivity,
                  'multiple-choice': _multipleChoice.ParticipantMultipleChoiceActivity
                };
                const Activity = Objects[activity.type] || Objects.detault;
                const instance = new Activity({
                  activity,
                  ...specs,
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

      /***************************************************************
      INTERNAL MODULE: ./model/participants/activities/multiple-choice
      ***************************************************************/

      ims.set('./model/participants/activities/multiple-choice', {
        hash: 1344734528,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantMultipleChoiceActivity = void 0;
          var _item = require("@aimpact/ailearn-sdk/reactive/entities/item");
          class ParticipantMultipleChoiceActivity extends _item.Item {
            #objectives = [];
            get objectives() {
              return this.#objectives;
            }
            constructor({
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['alerts', 'counters', 'responses', ...properties]
              });
              this.#objectives = properties;
            }
          }
          exports.ParticipantMultipleChoiceActivity = ParticipantMultipleChoiceActivity;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./model/participants/activities/spoken
      ******************************************************/

      ims.set('./model/participants/activities/spoken', {
        hash: 2460120244,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantSpokenActivity = void 0;
          var _item = require("@aimpact/ailearn-sdk/reactive/entities/item");
          class ParticipantSpokenActivity extends _item.Item {
            #objectives = [];
            get objectives() {
              return this.#objectives;
            }
            get icons() {
              return this.#objectives.map(objective => this[objective].icon);
            }
            get totalPoints() {
              return this.#objectives.reduce((acc, objective) => acc + this[objective].points, 0);
            }
            constructor({
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['alerts', 'activity', ...properties]
              });
              this.#objectives = properties;
            }
          }
          exports.ParticipantSpokenActivity = ParticipantSpokenActivity;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./model/participants/activity
      *********************************************/

      ims.set('./model/participants/activity', {
        hash: 3209396798,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantActivity = void 0;
          var _item = require("@aimpact/ailearn-sdk/reactive/entities/item");
          class ParticipantActivity extends _item.Item {
            constructor({
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['alerts', 'messages', 'progress', 'activity', 'synthesis', 'data', 'counters', 'responses', ...properties]
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
        hash: 2133065122,
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
            /**
             * Loads the participants and activities
             * @param items - The participants data
             * @param activities - The activities data
             */
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
        hash: 2572141254,
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
          var _core = require("@beyond-js/kernel/core");
          //@ts-ignore

          class StoreManager extends _model2.ReactiveModel {
            isStore;
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
            #model;
            /**
             * Dashboard model
             */
            get model() {
              return this.#model;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            #filter;
            get participants() {
              if (!this.#filter) return this.#model.participants.items;
              const response = this.#model.participants.items.filter(item => item.user.name.toLowerCase().includes(this.#filter.toLowerCase()));
              return response;
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
            filter(filter) {
              this.#filter = filter;
              this.triggerEvent('change');
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
                const promise = new _core.PendingPromise();
                await this.model.load(this.#assignmentId);
                globalThis.setTimeout(() => {
                  promise.resolve();
                }, 1000);
                return promise;
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

      /********************************************************
      INTERNAL MODULE: ./views/activities/drawer/actitity-types
      ********************************************************/

      ims.set('./views/activities/drawer/actitity-types', {
        hash: 2900269673,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/activities/drawer/alerts
      ************************************************/

      ims.set('./views/activities/drawer/alerts', {
        hash: 188767846,
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
            participantActivity
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            if (!participantActivity?.alerts.length) return null;
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

      /*************************************************
      INTERNAL MODULE: ./views/activities/drawer/content
      *************************************************/

      ims.set('./views/activities/drawer/content', {
        hash: 2635529689,
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
            participant,
            assignmentActivity,
            activity,
            setActivity
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            return React.createElement(React.Fragment, null, React.createElement("section", {
              className: "ds-drawer__content"
            }, React.createElement(_select.ActivitySelect, {
              activity: activity,
              setActivity: setActivity
            }), React.createElement("div", {
              className: "activity__information-container"
            }, React.createElement("h6", null, texts.description), React.createElement("p", null, activity.description))), React.createElement("div", {
              className: "ds-drawer__content ds-drawer__content--variant"
            }, React.createElement(_components.ConditionalContainer, {
              condition: activity.type,
              options: {
                conversation: React.createElement(_chat.UserChat, {
                  item: activity,
                  participant: participant,
                  activity: activity
                }),
                'content-theory': React.createElement(_chat.UserChat, {
                  item: activity,
                  participant: participant,
                  activity: activity
                }),
                'character-talk': React.createElement(_chat.UserChat, {
                  item: activity,
                  participant: participant,
                  activity: activity
                }),
                debate: React.createElement(_chat.UserChat, {
                  item: activity,
                  participant: participant,
                  activity: activity
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

      /***********************************************
      INTERNAL MODULE: ./views/activities/drawer/index
      ***********************************************/

      ims.set('./views/activities/drawer/index', {
        hash: 2545681758,
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
              store
            } = (0, _context.useDashboardContext)();
            const {
              tracking,
              activityId
            } = item;
            const {
              participant
            } = item;
            const student = participant.user;
            const [activity, setActivity] = React.useState(tracking.activities.get(activityId));
            const [fetching, setFetching] = React.useState(false);
            const [ready, setReady] = React.useState(tracking.ready);
            (0, _hooks.useBinder)([tracking], () => {
              setReady(tracking.ready);
              if (tracking.ready) {
                setActivity(tracking.activities.get(activityId));
              }
            });
            const onRefresh = () => {
              setFetching(true);
              store.refreshDrawer().finally(() => setFetching(false));
            };
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement("header", {
              className: "dashboard-drawer__header ds-drawer__activity"
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

      /*************************************************
      INTERNAL MODULE: ./views/activities/drawer/loading
      *************************************************/

      ims.set('./views/activities/drawer/loading', {
        hash: 247323929,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyDetailActivity = EmptyDetailActivity;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var Drawer = require("pragmate-ui/drawer");
          /*bundle*/
          function EmptyDetailActivity({
            item
          }) {
            const {
              participant
            } = item;
            const student = participant.user;
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
        }
      });

      /**************************************************************
      INTERNAL MODULE: ./views/activities/drawer/materials/assessment
      **************************************************************/

      ims.set('./views/activities/drawer/materials/assessment', {
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

      /********************************************************
      INTERNAL MODULE: ./views/activities/drawer/materials/chat
      ********************************************************/

      ims.set('./views/activities/drawer/materials/chat', {
        hash: 4051895108,
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
          var _tabs = require("pragmate-ui/tabs");
          var _drawerAlerts = require("../../../components/drawer-alerts");
          //@ts-ignore

          function UserChat({
            item,
            participant,
            activity
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const chatTexts = texts.chat;
            if (!item.chatModel?.id) return _react.default.createElement(_empty.EmptyMaterial, null);
            const chatId = item.chatModel.id;
            const participantActivity = participant.activities.get(activity.id);
            return _react.default.createElement("div", {
              className: "drawer-content"
            }, item?.data?.messages?.synthesis && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h4", null, chatTexts.synthesis), _react.default.createElement("p", null, item.data.messages?.synthesis)), _react.default.createElement(_tabs.TabsContainer, {
              active: 0
            }, _react.default.createElement(_tabs.Tabs, {
              className: "drawer__tabs"
            }, _react.default.createElement(_tabs.Tab, null, _react.default.createElement("h4", null, chatTexts.title)), participantActivity?.alerts.length ? _react.default.createElement(_tabs.Tab, {
              className: "alerts-tab"
            }, texts.alerts) : null), _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_chatComponent.AgentsChatContainer, {
              id: chatId,
              empty: _emptyChat.EmptyChat,
              icon: "/assets/rvd/profile-blue.png"
            }, _react.default.createElement(_chatComponent.AgentsChatPanel, null)), _react.default.createElement(_drawerAlerts.DrawerAlert, {
              alerts: participantActivity?.alerts,
              user: participant.user
            }))));
          }
        }
      });

      /****************************************************************
      INTERNAL MODULE: ./views/activities/drawer/materials/competencies
      ****************************************************************/

      ims.set('./views/activities/drawer/materials/competencies', {
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

      /**************************************************************
      INTERNAL MODULE: ./views/activities/drawer/materials/empty-chat
      **************************************************************/

      ims.set('./views/activities/drawer/materials/empty-chat', {
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

      /*********************************************************
      INTERNAL MODULE: ./views/activities/drawer/materials/empty
      *********************************************************/

      ims.set('./views/activities/drawer/materials/empty', {
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

      /*********************************************************
      INTERNAL MODULE: ./views/activities/drawer/materials/index
      *********************************************************/

      ims.set('./views/activities/drawer/materials/index', {
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

      /*********************************************************************
      INTERNAL MODULE: ./views/activities/drawer/materials/multiple/counters
      *********************************************************************/

      ims.set('./views/activities/drawer/materials/multiple/counters', {
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

      /******************************************************************
      INTERNAL MODULE: ./views/activities/drawer/materials/multiple/index
      ******************************************************************/

      ims.set('./views/activities/drawer/materials/multiple/index', {
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

      /*******************************************************************
      INTERNAL MODULE: ./views/activities/drawer/materials/multiple/option
      *******************************************************************/

      ims.set('./views/activities/drawer/materials/multiple/option', {
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

      /**********************************************************************
      INTERNAL MODULE: ./views/activities/drawer/materials/multiple/questions
      **********************************************************************/

      ims.set('./views/activities/drawer/materials/multiple/questions', {
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

      /****************************************************************
      INTERNAL MODULE: ./views/activities/drawer/materials/spoken/index
      ****************************************************************/

      ims.set('./views/activities/drawer/materials/spoken/index', {
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

      /***************************************************************
      INTERNAL MODULE: ./views/activities/drawer/materials/spoken/item
      ***************************************************************/

      ims.set('./views/activities/drawer/materials/spoken/item', {
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

      /******************************************************
      INTERNAL MODULE: ./views/activities/drawer/select/index
      ******************************************************/

      ims.set('./views/activities/drawer/select/index', {
        hash: 2357868919,
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
            const [selected] = _react.default.useState(activity.id);
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

      /*****************************************************
      INTERNAL MODULE: ./views/activities/drawer/select/item
      *****************************************************/

      ims.set('./views/activities/drawer/select/item', {
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

      /*******************************************************
      INTERNAL MODULE: ./views/activities/drawer/select/toggle
      *******************************************************/

      ims.set('./views/activities/drawer/select/toggle', {
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

      /*********************************************
      INTERNAL MODULE: ./views/activities/view/empty
      *********************************************/

      ims.set('./views/activities/view/empty', {
        hash: 1827167088,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyMaterial = EmptyMaterial;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../../context");
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

      /*********************************************
      INTERNAL MODULE: ./views/activities/view/index
      *********************************************/

      ims.set('./views/activities/view/index', {
        hash: 3129417923,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityView = ActivityView;
          var _react = require("react");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          var _list = require("pragmate-ui/list");
          var _participant = require("./participant");
          var _empty = require("pragmate-ui/empty");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function ActivityView({}) {
            const {
              store,
              setView
            } = (0, _context.useDashboardContext)();
            const {
              activitySelected: activity
            } = store;
            const [updated, setUpdated] = _react.default.useState({});
            (0, _hooks.useBinder)([store], () => setUpdated(store.activitySelected), 'data.updated');
            const onClose = () => store.selectActivity(undefined);
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
              control: _participant.ActivityParticipant,
              specs: {
                activity
              }
            }) : _react.default.createElement(_empty.Empty, {
              text: 'No participants found'
            }));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/activities/view/participant/chat
      ********************************************************/

      ims.set('./views/activities/view/participant/chat', {
        hash: 3354335847,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatActivityParticipant = ChatActivityParticipant;
          var _react = require("react");
          var _context = require("../../../context");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _tooltip = require("pragmate-ui/tooltip");
          var _list = require("pragmate-ui/list");
          var _collapsible = require("pragmate-ui/collapsible");
          var _objective = require("../../../assignment/drawer/activity/objective");
          /*bundle*/
          function ChatActivityParticipant({
            item
          }) {
            const {
              store,
              setShowDrawer
            } = (0, _context.useDashboardContext)();
            const {
              activitySelected: activity
            } = store;
            const data = item.activities.get(activity.id);
            const [isDragging, setIsDragging] = _react.default.useState(false);
            const onToggle = () => {
              setIsDragging(!isDragging);
            };
            if (!data) {
              console.warn(`the user ${item.user.name} has not participate on activity`, item);
              return null;
            }
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              const tracking = store.loadUserTracking(item.id);
              setShowDrawer({
                show: true,
                view: 'student-activity',
                data: {
                  tracking,
                  activityId: activity.id,
                  participant: item
                }
              });
              return false;
            };
            const IconState = ({
              item
            }) => _react.default.createElement(_tooltip.Tooltip, {
              content: item.status.text
            }, item.status.icon);
            return _react.default.createElement("div", {
              className: "activity-participant"
            }, _react.default.createElement("section", {
              className: "col"
            }), _react.default.createElement("section", null), _react.default.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle,
              open: isDragging
            }, _react.default.createElement(_collapsible.CollapsibleHeader, {
              className: "activity-participant__header"
            }, _react.default.createElement(_components.Link, {
              href: `/assignments/${store.assignmentId}/dashboard/classroom?studentId=${item.user.id}`,
              onClick: onClick
            }, _react.default.createElement("div", {
              className: "user-data__section"
            }, _react.default.createElement(_image.Image, {
              className: "user-data__img",
              src: item.user.photoUrl
            }), _react.default.createElement("h6", null, item.user.name))), _react.default.createElement("div", null, _react.default.createElement(_list.List, {
              className: "unstyled-list",
              items: data?.progress?.objectives,
              control: IconState
            }))), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement(_list.List, {
              items: data?.progress?.objectives,
              control: _objective.StudentAssignmentActivityObjective
            }))));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./views/activities/view/participant/index
      *********************************************************/

      ims.set('./views/activities/view/participant/index', {
        hash: 3716156993,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityParticipant = ActivityParticipant;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _chat = require("./chat");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          function ActivityParticipant({
            item,
            activity,
            ...specs
          }) {
            const type = ['content-theory', 'debate', 'character-talk'].includes(activity.type) ? 'chat' : activity.type;
            return _react.default.createElement(_components.ConditionalContainer, {
              condition: type,
              options: {
                chat: _react.default.createElement(_chat.ChatActivityParticipant, {
                  item: item
                }),
                spoken: _react.default.createElement(_spoken.SpokenActivityParticipant, {
                  item: item
                }),
                'multiple-choice': _react.default.createElement(_multipleChoice.MultipleChoiceActivityParticipant, {
                  item: item
                })
              }
            });
          }
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./views/activities/view/participant/multiple-choice
      *******************************************************************/

      ims.set('./views/activities/view/participant/multiple-choice', {
        hash: 2479779952,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivityParticipant = MultipleChoiceActivityParticipant;
          var _react = require("react");
          var _context = require("../../../context");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _tooltip = require("pragmate-ui/tooltip");
          /*bundle*/
          function MultipleChoiceActivityParticipant({
            item
          }) {
            const {
              store,
              setShowDrawer,
              texts: {
                activities: {
                  multipleChoice: texts
                }
              }
            } = (0, _context.useDashboardContext)();
            const {
              activitySelected: activity
            } = store;
            const data = item.activities.get(activity.id);
            const [isDragging, setIsDragging] = _react.default.useState(false);
            const onToggle = () => {
              setIsDragging(!isDragging);
            };
            if (!data) {
              console.warn(`the user ${item.user.name} has not participate on activity`, item);
              return null;
            }
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              const tracking = store.loadUserTracking(item.id);
              setShowDrawer({
                show: true,
                view: 'student-activity',
                data: {
                  tracking,
                  activityId: activity.id,
                  participant: item
                }
              });
              return false;
            };
            const participantActivity = item.activities.get(activity.id);
            const IconState = ({
              item
            }) => _react.default.createElement(_tooltip.Tooltip, {
              content: item.status.text
            }, item.status.icon);
            return _react.default.createElement("div", {
              className: "activity-participant"
            }, _react.default.createElement("div", {
              className: "activity-participant__header"
            }, _react.default.createElement(_components.Link, {
              href: `/assignments/${store.assignmentId}/dashboard/classroom?studentId=${item.user.id}`,
              onClick: onClick
            }, _react.default.createElement("div", {
              className: "user-data__section"
            }, _react.default.createElement(_image.Image, {
              className: "user-data__img",
              src: item.user.photoUrl
            }), _react.default.createElement("h6", null, item.user.name))), _react.default.createElement("div", null, _react.default.createElement("span", {
              className: "dashboard-chip success-label"
            }, texts.correct, ": ", participantActivity.counters.correct), _react.default.createElement("span", {
              className: "dashboard-chip  error-label"
            }, texts.wrong, ": ", participantActivity.counters.wrong))));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./views/activities/view/participant/spoken
      **********************************************************/

      ims.set('./views/activities/view/participant/spoken', {
        hash: 1464383378,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivityParticipant = SpokenActivityParticipant;
          var _react = require("react");
          var _context = require("../../../context");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _tooltip = require("pragmate-ui/tooltip");
          var _list = require("pragmate-ui/list");
          /*bundle*/
          function SpokenActivityParticipant({
            item
          }) {
            const {
              store,
              setShowDrawer
            } = (0, _context.useDashboardContext)();
            const {
              activitySelected: activity
            } = store;
            const data = item.activities.get(activity.id);
            const [isDragging, setIsDragging] = _react.default.useState(false);
            const onToggle = () => {
              setIsDragging(!isDragging);
            };
            if (!data) {
              console.warn(`the user ${item.user.name} has not participate on activity`, item);
              return null;
            }
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              const tracking = store.loadUserTracking(item.id);
              setShowDrawer({
                show: true,
                view: 'student-activity',
                data: {
                  tracking,
                  activityId: activity.id,
                  participant: item
                }
              });
              return false;
            };
            const participantActivity = item.activities.get(activity.id);
            const IconState = ({
              item: objective
            }) => {
              return _react.default.createElement(_tooltip.Tooltip, {
                content: objective
              }, participantActivity[objective].icon);
            };
            return _react.default.createElement("div", {
              className: "activity-participant"
            }, _react.default.createElement("div", {
              className: "activity-participant__header"
            }, _react.default.createElement(_components.Link, {
              href: `/assignments/${store.assignmentId}/dashboard/classroom?studentId=${item.user.id}`,
              onClick: onClick
            }, _react.default.createElement("div", {
              className: "user-data__section"
            }, _react.default.createElement(_image.Image, {
              className: "user-data__img",
              src: item.user.photoUrl
            }), _react.default.createElement("h6", null, item.user.name))), _react.default.createElement("div", null, _react.default.createElement(_list.List, {
              className: "unstyled-list",
              items: participantActivity.objectives,
              control: IconState
            }))));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/chat
      *******************************************************/

      ims.set('./views/assignment/drawer/activity/chat', {
        hash: 4259873429,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityChatBody = StudentAssignmentActivityChatBody;
          var React = require("react");
          var _objective = require("./objective");
          var _list = require("pragmate-ui/list");
          var _context = require("../../../context");
          var _drawerAlerts = require("../../../components/drawer-alerts");
          var _tabs = require("pragmate-ui/tabs");
          function StudentAssignmentActivityChatBody({
            item,
            user
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            return React.createElement(_tabs.TabsContainer, {
              active: 0
            }, React.createElement(_tabs.Tabs, {
              className: "drawer__tabs"
            }, React.createElement(_tabs.Tab, null, React.createElement("h4", null, texts.activities.summary, " ")), item?.alerts?.length ? React.createElement(_tabs.Tab, {
              className: "alerts-tab"
            }, texts.alerts) : null), React.createElement(_tabs.Panes, null, React.createElement("div", null, React.createElement("section", {
              className: "activity-data-section"
            }, React.createElement("p", null, item.synthesis)), React.createElement("h4", {
              className: "mt-15"
            }, texts.activities.progres), React.createElement(_list.List, {
              className: "unstyled-list activity__users-list",
              items: item.progress?.objectives,
              control: _objective.StudentAssignmentActivityObjective
            })), React.createElement(_drawerAlerts.DrawerAlert, {
              alerts: item?.alerts,
              user: user
            })));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/index
      ********************************************************/

      ims.set('./views/assignment/drawer/activity/index', {
        hash: 2275310641,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivity = StudentAssignmentActivity;
          var React = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../../../context");
          var _collapsible = require("pragmate-ui/collapsible");
          var _components = require("pragmate-ui/components");
          var _chat = require("./chat");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          function StudentAssignmentActivity({
            item,
            user,
            index
          }) {
            const {
              texts,
              store,
              setShowDrawer
            } = (0, _context.useDashboardContext)();
            const [isDragging, setIsDragging] = React.useState(index === 0);
            const onToggle = () => {
              setIsDragging(!isDragging);
            };
            const onNavigate = event => {
              event.preventDefault();
              setShowDrawer({
                show: true,
                view: 'student-activity',
                data: {
                  tracking: store.loadUserTracking(user.id),
                  activityId: item.activity.id,
                  participant: store.model.participants.get(user.id),
                  ...item
                }
              });
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
              className: `activity-type__icon activity--${item.activity?.type}`
            }, React.createElement(_icons.AppIcon, {
              icon: _icons.ICONS[item.activity.type]
            })), React.createElement("div", null, React.createElement("h5", null, item.activity.title), React.createElement("span", null, texts.activities.types[item.activity.type]))), item.messages ? React.createElement(_components.Link, {
              onClick: onNavigate,
              className: "activity-messages-count"
            }, texts.assignment.messages, " ", item.messages?.count ?? 0) : null)), React.createElement(_collapsible.CollapsibleContent, null, React.createElement(_components.ConditionalContainer, {
              condition: item.activity.type,
              options: {
                'content-theory': React.createElement(_chat.StudentAssignmentActivityChatBody, {
                  item: item,
                  user: user
                }),
                'character-talk': React.createElement(_chat.StudentAssignmentActivityChatBody, {
                  item: item,
                  user: user
                }),
                debate: React.createElement(_chat.StudentAssignmentActivityChatBody, {
                  item: item,
                  user: user
                }),
                'multiple-choice': React.createElement(_multipleChoice.StudentAssignmentActivityMultipleChoiceBody, {
                  item: item,
                  user: user
                }),
                spoken: React.createElement(_spoken.StudentAssignmentActivitySpokenBody, {
                  item: item,
                  user: user
                })
              }
            }))));
          }
        }
      });

      /******************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/multiple-choice
      ******************************************************************/

      ims.set('./views/assignment/drawer/activity/multiple-choice', {
        hash: 199169181,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityMultipleChoiceBody = StudentAssignmentActivityMultipleChoiceBody;
          var React = require("react");
          var _context = require("../../../context");
          var _components = require("pragmate-ui/components");
          function StudentAssignmentActivityMultipleChoiceBody({
            item,
            user
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            return React.createElement("div", {
              className: "activity-data-section mt-15"
            }, React.createElement("p", null, item.activity.description), React.createElement("h6", null, texts.activities.multipleChoice.participation.title), React.createElement(_components.HtmlWrapper, {
              params: {
                ...item.counters
              }
            }, texts.activities.multipleChoice.participation.detail));
          }
        }
      });

      /************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/objective
      ************************************************************/

      ims.set('./views/assignment/drawer/activity/objective', {
        hash: 336757173,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityObjective = StudentAssignmentActivityObjective;
          var React = require("react");
          var _context = require("../../../context");
          function StudentAssignmentActivityObjective({
            item
          }) {
            const {
              name,
              analysis,
              status
            } = item;
            const {
              texts
            } = (0, _context.useDashboardContext)();
            return React.createElement("div", {
              className: "assigment-activity-objective__container"
            }, React.createElement("div", null, React.createElement("h6", null, name), React.createElement("p", null, analysis)), React.createElement("div", null, React.createElement("div", {
              className: "status__container"
            }, React.createElement("span", null, status.icon), React.createElement("span", null, texts.activities.objectiveStatuses[status.text]))));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/spoken
      *********************************************************/

      ims.set('./views/assignment/drawer/activity/spoken', {
        hash: 2912782954,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivitySpokenBody = StudentAssignmentActivitySpokenBody;
          var React = require("react");
          var _context = require("../../../context");
          function StudentAssignmentActivitySpokenBody({
            item,
            user
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const output = item.objectives.map(objective => {
              return React.createElement("div", {
                className: "activity-data-section",
                key: `${item.id}-${objective}`
              }, React.createElement("div", null, React.createElement("h6", null, item[objective].icon, " ", item[objective].name)), React.createElement("div", null, React.createElement("span", null, item[objective].feedback)));
            });
            return React.createElement("div", {
              className: "activity-data-section-list"
            }, output);
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/assignment/drawer/empty
      ***********************************************/

      ims.set('./views/assignment/drawer/empty', {
        hash: 3745556353,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyCard = EmptyCard;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          /*bundle */
          function EmptyCard({
            text,
            className
          }) {
            const cls = `empty-section__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_empty.Empty, {
              className: cls
            }, _react.default.createElement("p", null, text));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/assignment/drawer/index
      ***********************************************/

      ims.set('./views/assignment/drawer/index', {
        hash: 2780831520,
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
          var _empty = require("./empty");
          function StudentAssignmentSummary({
            item
          }) {
            const {
              store,
              texts
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
            }, items.length ? React.createElement(_list.List, {
              className: "assignment-activity-list",
              items: items,
              specs: {
                user: student
              },
              control: _activity.StudentAssignmentActivity
            }) : React.createElement(_empty.EmptyCard, {
              text: texts.assignment.empty.title
            })));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/assignment/general
      ******************************************/

      ims.set('./views/assignment/general', {
        hash: 30264229,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GeneralView = GeneralView;
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          /*bundle*/
          function GeneralView() {
            const {
              store
            } = (0, _context.useDashboardContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "dashboard__list"
            }, _react.default.createElement(_list.List, {
              className: "list-unstyled users__list",
              items: store.participants,
              control: _item.Item
            })));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/details
      ********************************************************/

      ims.set('./views/assignment/item/activity/details', {
        hash: 2476319677,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityDetails = ModuleActivityDetails;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function ModuleActivityDetails({
            item
          }) {
            const {
              activity,
              participant
            } = item;
            const participantActivity = participant.activities.get(activity.id);
            const output = [];
            const icons = participantActivity?.progress?.objectives?.map(item => item?.status?.icon);
            if (activity.type === 'assessment' && activity.subtype === 'multiple-choice' && data.data) {
              output.push(_react.default.createElement("span", null, item.data.counters.correct, " /", item.data.counters.total));
            }
            return _react.default.createElement("div", {
              className: "user-activity__information"
            }, _react.default.createElement("div", {
              className: "flex-container flex-vertical-center gap-05"
            }, participantActivity?.alerts?.length ? _react.default.createElement(_icons.Icon, {
              icon: "error",
              className: "error-icon"
            }) : null), icons && _react.default.createElement("div", null, icons));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/index
      ******************************************************/

      ims.set('./views/assignment/item/activity/index', {
        hash: 1159318441,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivity = ModuleActivity;
          var _react = require("react");
          var _context = require("../../../context");
          var _label = require("./label");
          var _activityIcon = require("../../../components/activity-icon");
          var _tooltip = require("pragmate-ui/tooltip");
          function ModuleActivity({
            item
          }) {
            const {
              user,
              activity,
              participant
            } = item;
            const {
              setShowDrawer,
              store
            } = (0, _context.useDashboardContext)();
            const participantActivity = participant.activities.get(activity.id);
            const output = [];
            if (activity.type === 'assessment' && activity.subtype === 'multiple-choice' && data.data) {
              output.push(_react.default.createElement("span", null, item.data.counters.correct, " /", item.data.counters.total));
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
            const icons = participantActivity?.progress?.objectives?.map(item => {
              return _react.default.createElement(_tooltip.Tooltip, {
                content: `${item.name}: ${item.status.text}`,
                key: `${item.name}.${item.status.text}`
              }, _react.default.createElement(_react.default.Fragment, null, item.status.icon));
            });
            return _react.default.createElement("li", {
              onClick: onClick,
              key: `${user.id}.${activity.id}`,
              className: "card-student-item"
            }, _react.default.createElement("div", {
              className: "activity-title__container"
            }, _react.default.createElement("div", null, _react.default.createElement(_activityIcon.ActivityIcon, {
              type: activity.type
            })), _react.default.createElement("span", null, _react.default.createElement("span", {
              className: "activity-title"
            }, activity.title), _react.default.createElement(_label.ModuleActivityMessages, {
              item: item
            }))), _react.default.createElement("div", {
              className: "user-activity__information"
            }, _react.default.createElement("div", {
              className: "flex-container flex-vertical-center gap-05"
            }), _react.default.createElement("div", null, icons)));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/label
      ******************************************************/

      ims.set('./views/assignment/item/activity/label', {
        hash: 316911223,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityMessages = ModuleActivityMessages;
          var _react = require("react");
          var _context = require("../../../context");
          var _icons = require("pragmate-ui/icons");
          function ModuleActivityMessages({
            item
          }) {
            const {
              activity,
              participant
            } = item;
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const hasParticipated = participant.activities.has(activity.id);
            const participantActivity = participant.activities.get(activity.id);
            let type = 'warning';
            let label = 'Pending';
            if (hasParticipated) {
              type = 'success';
              label = 'Done';
            }
            if (['content-theory', 'debate', 'character-talk'].includes(activity.type)) {
              const totalMessages = participantActivity?.messages?.count ?? 0;
              label = `${totalMessages} messages`;
            }
            if (activity.type === 'spoken' && item.data) {
              const icons = Object.values(item.data).map(data => data.icon).join('');
              label = icons;
              type = 'default';
            }
            if (activity.type === 'assessment' && activity.subtype === 'multiple-choice' && item.data) {
              const {
                correct,
                total
              } = item.data.counters;
              if (correct < total / 2) type = 'error';
              label = `${correct} / ${total}`;
            }
            if (hasParticipated && participantActivity?.messages) {
              label = `${texts.messageCounter} ${participantActivity?.messages.count}`;
            }
            const hasAlerts = participantActivity?.alerts?.length;
            const cls = `activity-status${hasAlerts ? ' has-alerts' : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("span", null, label), hasAlerts ? _react.default.createElement(_icons.Icon, {
              icon: "error",
              className: "error-icon"
            }) : null);
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/assignment/item/index
      *********************************************/

      ims.set('./views/assignment/item/index', {
        hash: 3944274231,
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
            const src = user?.photoUrl ? user.photoUrl : 'https://res.cloudinary.com/versus/image/upload/f_auto,q_auto/v1/AImpact/Avatar/default';
            return _react.default.createElement("li", {
              className: "dashboard-card card__user"
            }, _react.default.createElement("header", null, _react.default.createElement(_image.Image, {
              src: src,
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

      /**********************************************
      INTERNAL MODULE: ./views/assignment/item/spoken
      **********************************************/

      ims.set('./views/assignment/item/spoken', {
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
        hash: 1550588913,
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

      /************************************************
      INTERNAL MODULE: ./views/components/activity-icon
      ************************************************/

      ims.set('./views/components/activity-icon', {
        hash: 882302355,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityIcon = ActivityIcon;
          var React = require("react");
          var _iconBox = require("./icon-box");
          /*bundle*/
          function ActivityIcon({
            type,
            className
          }) {
            const cls = `icon-box-container activity--${type} pui-box-icon${className ? ` ${className}` : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement(_iconBox.IconBox, {
              name: type,
              className: cls
            }));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/components/drawer-alerts/index
      ******************************************************/

      ims.set('./views/components/drawer-alerts/index', {
        hash: 1373342340,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DrawerAlert = DrawerAlert;
          var React = require("react");
          var _list = require("pragmate-ui/list");
          var _item = require("./item");
          var _context = require("../../context");
          /*bundle*/
          function DrawerAlert({
            alerts,
            user
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            if (!alerts?.length) return null;
            return React.createElement(React.Fragment, null, React.createElement(_list.List, {
              as: "div",
              className: "ds-drawer__list",
              items: alerts,
              control: _item.DrawerAlertItem,
              specs: {
                user
              }
            }));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/components/drawer-alerts/item
      *****************************************************/

      ims.set('./views/components/drawer-alerts/item', {
        hash: 2093131627,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DrawerAlertItem = DrawerAlertItem;
          var React = require("react");
          var _collapsible = require("pragmate-ui/collapsible");
          /*bundle*/
          function DrawerAlertItem({
            item,
            user
          }) {
            return React.createElement("article", {
              className: "ds-drawer__activity-item"
            }, React.createElement(_collapsible.CollapsibleContainer, null, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("span", null, item.text)), React.createElement(_collapsible.CollapsibleContent, null, React.createElement("div", {
              className: "alert-item"
            }, React.createElement("h6", null, "RVD AI"), React.createElement("div", null, item.iteration.assistant), React.createElement("h6", null, user.name), React.createElement("div", null, item.iteration.student)))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/empty
      ****************************************/

      ims.set('./views/components/empty', {
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

      /*******************************************
      INTERNAL MODULE: ./views/components/icon-box
      *******************************************/

      ims.set('./views/components/icon-box', {
        hash: 2839980169,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IconBox = IconBox;
          var React = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function IconBox({
            name,
            className
          }) {
            const cls = `pui-box-icon${className ? ` ${className}` : ''}`;
            return React.createElement(_icons.AppIcon, {
              icon: name,
              className: cls
            });
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
        hash: 672915931,
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
          var _drawer2 = require("../activities/drawer");
          var _drawer3 = require("../assignment/drawer");
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
                'student-activity': _react.default.createElement(_drawer2.DetailActivity, {
                  item: showDrawer.data
                }),
                student: _react.default.createElement(_drawer3.StudentAssignmentSummary, {
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
        hash: 4248281599,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wall = Wall;
          var React = require("react");
          var Drawer = require("pragmate-ui/drawer");
          function Wall({
            item
          }) {
            const {
              user: student
            } = item;
            const [fetching, setFetching] = React.useState(false);
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

      /**********************************************
      INTERNAL MODULE: ./views/header/activity-filter
      **********************************************/

      ims.set('./views/header/activity-filter', {
        hash: 1807739678,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityFilter = ActivityFilter;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          function ActivityFilter({
            item
          }) {
            const {
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

      /************************************
      INTERNAL MODULE: ./views/header/index
      ************************************/

      ims.set('./views/header/index', {
        hash: 2261676627,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../context");
          var _userData = require("./user-data");
          var _collapsible = require("pragmate-ui/collapsible");
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
            return _react.default.createElement(_collapsible.CollapsibleContainer, {
              className: "page__header-container"
            }, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("header", {
              className: "dashboard-header"
            }, _react.default.createElement(_ui.EntityImage, {
              entity: "module",
              src: picture,
              alt: title
            }), _react.default.createElement("div", null, _react.default.createElement("h1", null, title), creator && _react.default.createElement(_userData.UserData, {
              data: creator
            })))), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("div", {
              className: "dashboard-content"
            }, _react.default.createElement("section", {
              className: "main-content"
            }, _react.default.createElement("p", {
              className: "p1 hidden-xs"
            }, description), _react.default.createElement("div", {
              className: "module__managers-section"
            }, _react.default.createElement("div", {
              className: "module__managers-section"
            }, owner && _react.default.createElement(_userData.UserData, {
              label: texts.owner,
              data: owner
            })))), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              bordered: true,
              icon: "shared-folder",
              className: "btn btn-primary outline pui-button has-icon ",
              onClick: onClick
            }, texts.actions.wall)))));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/header/student-header
      *********************************************/

      ims.set('./views/header/student-header', {
        hash: 2788127070,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentsHeader = StudentsHeader;
          var _react = require("react");
          var _context = require("../context");
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
            const onFilter = event => {
              store.filter(event.currentTarget.value);
            };
            return _react.default.createElement("header", {
              className: "dashboard-students__header"
            }, _react.default.createElement("div", {
              className: "ds-students-header__col"
            }, _react.default.createElement("section", {
              className: "header__title"
            }, _react.default.createElement("h6", null, texts.list.students), _react.default.createElement("span", null, "(", model.participants.items?.length, " ", texts.list.participants, ")")), _react.default.createElement("section", null, _react.default.createElement(_form.Input, {
              onChange: onFilter,
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

      /****************************************
      INTERNAL MODULE: ./views/header/user-data
      ****************************************/

      ims.set('./views/header/user-data', {
        hash: 2423261707,
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1518747860,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _ = require("./404");
          var _context = require("./context");
          var _asideDrawer = require("./drawer/aside-drawer");
          var _empty = require("./components/empty");
          var _header = require("./header");
          var _components = require("pragmate-ui/components");
          var _general = require("./assignment/general");
          var _studentHeader = require("./header/student-header");
          var _view = require("./activities/view");
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
            (0, _hooks.useBinder)([store], () => setTotalParticipants(store.participants.length ?? 0), 'data.updated');
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
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_studentHeader.StudentsHeader, null), _react.default.createElement(_components.ConditionalContainer, {
              condition: !!store.activitySelected,
              ternary: true,
              options: {
                false: _react.default.createElement(_general.GeneralView, null),
                true: _react.default.createElement(_view.ActivityView, null)
              }
            }), _react.default.createElement(_asideDrawer.AsideDrawer, null)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/activities/drawer/alerts",
        "from": "ActivityAlerts",
        "name": "ActivityAlerts"
      }, {
        "im": "./views/activities/drawer/content",
        "from": "DetailActivityBody",
        "name": "DetailActivityBody"
      }, {
        "im": "./views/activities/drawer/index",
        "from": "DetailActivity",
        "name": "DetailActivity"
      }, {
        "im": "./views/activities/drawer/loading",
        "from": "EmptyDetailActivity",
        "name": "EmptyDetailActivity"
      }, {
        "im": "./views/activities/drawer/materials/multiple/index",
        "from": "MultipleChoiceReport",
        "name": "MultipleChoiceReport"
      }, {
        "im": "./views/activities/drawer/materials/multiple/questions",
        "from": "AssessmentQuestions",
        "name": "AssessmentQuestions"
      }, {
        "im": "./views/activities/view/index",
        "from": "ActivityView",
        "name": "ActivityView"
      }, {
        "im": "./views/activities/view/participant/chat",
        "from": "ChatActivityParticipant",
        "name": "ChatActivityParticipant"
      }, {
        "im": "./views/activities/view/participant/multiple-choice",
        "from": "MultipleChoiceActivityParticipant",
        "name": "MultipleChoiceActivityParticipant"
      }, {
        "im": "./views/activities/view/participant/spoken",
        "from": "SpokenActivityParticipant",
        "name": "SpokenActivityParticipant"
      }, {
        "im": "./views/assignment/drawer/empty",
        "from": "EmptyCard",
        "name": "EmptyCard"
      }, {
        "im": "./views/assignment/general",
        "from": "GeneralView",
        "name": "GeneralView"
      }, {
        "im": "./views/components/activity-icon",
        "from": "ActivityIcon",
        "name": "ActivityIcon"
      }, {
        "im": "./views/components/drawer-alerts/index",
        "from": "DrawerAlert",
        "name": "DrawerAlert"
      }, {
        "im": "./views/components/drawer-alerts/item",
        "from": "DrawerAlertItem",
        "name": "DrawerAlertItem"
      }, {
        "im": "./views/components/icon-box",
        "from": "IconBox",
        "name": "IconBox"
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
        (require || prop === 'ActivityAlerts') && _export("ActivityAlerts", ActivityAlerts = require ? require('./views/activities/drawer/alerts').ActivityAlerts : value);
        (require || prop === 'DetailActivityBody') && _export("DetailActivityBody", DetailActivityBody = require ? require('./views/activities/drawer/content').DetailActivityBody : value);
        (require || prop === 'DetailActivity') && _export("DetailActivity", DetailActivity = require ? require('./views/activities/drawer/index').DetailActivity : value);
        (require || prop === 'EmptyDetailActivity') && _export("EmptyDetailActivity", EmptyDetailActivity = require ? require('./views/activities/drawer/loading').EmptyDetailActivity : value);
        (require || prop === 'MultipleChoiceReport') && _export("MultipleChoiceReport", MultipleChoiceReport = require ? require('./views/activities/drawer/materials/multiple/index').MultipleChoiceReport : value);
        (require || prop === 'AssessmentQuestions') && _export("AssessmentQuestions", AssessmentQuestions = require ? require('./views/activities/drawer/materials/multiple/questions').AssessmentQuestions : value);
        (require || prop === 'ActivityView') && _export("ActivityView", ActivityView = require ? require('./views/activities/view/index').ActivityView : value);
        (require || prop === 'ChatActivityParticipant') && _export("ChatActivityParticipant", ChatActivityParticipant = require ? require('./views/activities/view/participant/chat').ChatActivityParticipant : value);
        (require || prop === 'MultipleChoiceActivityParticipant') && _export("MultipleChoiceActivityParticipant", MultipleChoiceActivityParticipant = require ? require('./views/activities/view/participant/multiple-choice').MultipleChoiceActivityParticipant : value);
        (require || prop === 'SpokenActivityParticipant') && _export("SpokenActivityParticipant", SpokenActivityParticipant = require ? require('./views/activities/view/participant/spoken').SpokenActivityParticipant : value);
        (require || prop === 'EmptyCard') && _export("EmptyCard", EmptyCard = require ? require('./views/assignment/drawer/empty').EmptyCard : value);
        (require || prop === 'GeneralView') && _export("GeneralView", GeneralView = require ? require('./views/assignment/general').GeneralView : value);
        (require || prop === 'ActivityIcon') && _export("ActivityIcon", ActivityIcon = require ? require('./views/components/activity-icon').ActivityIcon : value);
        (require || prop === 'DrawerAlert') && _export("DrawerAlert", DrawerAlert = require ? require('./views/components/drawer-alerts/index').DrawerAlert : value);
        (require || prop === 'DrawerAlertItem') && _export("DrawerAlertItem", DrawerAlertItem = require ? require('./views/components/drawer-alerts/item').DrawerAlertItem : value);
        (require || prop === 'IconBox') && _export("IconBox", IconBox = require ? require('./views/components/icon-box').IconBox : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiUGFydGljaXBhbnRBY3Rpdml0aWVzIiwicGFyZW50IiwiYWN0aXZpdHkiLCJPYmplY3RzIiwic3Bva2VuIiwiUGFydGljaXBhbnRTcG9rZW5BY3Rpdml0eSIsImRldGF1bHQiLCJQYXJ0aWNpcGFudEFjdGl2aXR5IiwiUGFydGljaXBhbnRNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwiQWN0aXZpdHkiLCJpY29ucyIsInRvdGFsUG9pbnRzIiwicG9pbnRzIiwiUGFydGljaXBhbnQiLCJpdGVtIiwiX3BhcnRpY2lwYW50IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbDIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfdHJhY2tpbmciLCJfY29yZSIsImlzU3RvcmUiLCJ0cmFja2luZyIsImFjdGl2aXR5U2VsZWN0ZWQiLCJjdXJyZW50VHJhY2tpbmciLCJzZXNzaW9uIiwidmlldyIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsInNwZWNpZmllciIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ1c2VycyIsInRyYWNraW5ncyIsInRyaWdnZXJFdmVudCIsIm9uIiwic2V0TW9kZWwiLCJmZXRjaGluZyIsIm0iLCJlIiwibG9hZFVzZXJUcmFja2luZyIsInVzZXJJZCIsIlRyYWNraW5nIiwiY2hhdCIsImNvbnNvbGUiLCJyZWZyZXNoIiwidHJpZ2dlciIsInJlZnJlc2hEcmF3ZXIiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsInNlbGVjdEFjdGl2aXR5IiwiX3JlYWN0IiwiTm90Rm91bmQiLCJjb2RlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiUmVhY3QiLCJfY29udGV4dCIsIl9saXN0IiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlBbGVydHMiLCJwYXJ0aWNpcGFudEFjdGl2aXR5IiwidXNlRGFzaGJvYXJkQ29udGV4dCIsImFsZXJ0cyIsImNsYXNzTmFtZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJpdGVyYXRpb24iLCJhc3Npc3RhbnQiLCJzdHVkZW50IiwiTGlzdCIsImFzIiwiY29udHJvbCIsIl9jb21wb25lbnRzIiwiX2Fzc2Vzc21lbnQiLCJfY2hhdCIsIl9zZWxlY3QiLCJEZXRhaWxBY3Rpdml0eUJvZHkiLCJhc3NpZ25tZW50QWN0aXZpdHkiLCJzZXRBY3Rpdml0eSIsIkFjdGl2aXR5U2VsZWN0IiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvcHRpb25zIiwiY29udmVyc2F0aW9uIiwiVXNlckNoYXQiLCJkZWJhdGUiLCJNYXRlcmlhbEFzc2Vzc21lbnQiLCJhc3Nlc3NtZW50IiwiU3Bva2VuQW5hbHlzaXMiLCJEcmF3ZXIiLCJfaWNvbnMiLCJfaG9va3MiLCJfY29udGVudCIsIkRldGFpbEFjdGl2aXR5IiwiYWN0aXZpdHlJZCIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIm9uUmVmcmVzaCIsImZpbmFsbHkiLCJjbHMiLCJJY29uQnV0dG9uIiwib25DbGljayIsIkNsb3NlQnV0dG9uIiwidGVybmFyeSIsInRydWUiLCJmYWxzZSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJFbXB0eURldGFpbEFjdGl2aXR5IiwiX211bHRpcGxlIiwiTXVsdGlwbGVDaG9pY2VSZXBvcnQiLCJfY2hhdENvbXBvbmVudCIsIl9lbXB0eSIsIl9lbXB0eUNoYXQiLCJfdGFicyIsIl9kcmF3ZXJBbGVydHMiLCJjaGF0VGV4dHMiLCJjaGF0TW9kZWwiLCJFbXB0eU1hdGVyaWFsIiwiY2hhdElkIiwiVGFic0NvbnRhaW5lciIsIlRhYnMiLCJUYWIiLCJQYW5lcyIsIkFnZW50c0NoYXRDb250YWluZXIiLCJlbXB0eSIsIkVtcHR5Q2hhdCIsIkFnZW50c0NoYXRQYW5lbCIsIkRyYXdlckFsZXJ0IiwiX21hcmtkb3duIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJNYXJrZG93biIsImNvbnRlbnQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIkVtcHR5IiwiX3VpIiwibWVzc2FnZSIsIkVtcHR5Q2FyZCIsIkRlZmF1bHRNYXRlcmlhbCIsIkNvdW50ZXJzIiwiY291bnRlcnMiLCJ0b3RhbCIsImNvcnJlY3QiLCJfY291bnRlcnMiLCJfcXVlc3Rpb25zIiwic2V0Q291bnRlcnMiLCJBc3Nlc3NtZW50UXVlc3Rpb25zIiwic2hvd0Fuc3dlcnMiLCJJdGVtT3B0aW9uIiwib3B0aW9uIiwiaSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwia2V5IiwiX29wdGlvbiIsInJlc3BvbnNlcyIsIm91dHB1dCIsInF1ZXN0aW9ucyIsImluZGV4IiwiYXR0cnMiLCJlbGVtZW50cyIsImF1ZGlvVXJsIiwiYXNzZXNzbWVudHMiLCJvcmFsVGV4dCIsInN0dWRlbnRBdWRpbyIsImNvbnRyb2xzIiwicHJlbG9hZCIsInNyYyIsImNvbnRhaW5lciIsIlNwb2tlbkl0ZW0iLCJmZWVkYmFjayIsIl9kcm9wZG93biIsIl90b2dnbGUiLCJzZWxlY3RlZCIsIkFjdGl2aXR5U2VsZWN0SXRlbSIsInNldFNlbGVjdGVkIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlRvZ2dsZU9wdGlvbiIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duSXRlbSIsImljb25DbHMiLCJDb250cm9sIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkFwcEljb24iLCJ0eXBlcyIsIndhcm4iLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJvbkNsb3NlIiwidW5kZWZpbmVkIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCIsIl9pbWFnZSIsIl90b29sdGlwIiwiX29iamVjdGl2ZSIsIkNoYXRBY3Rpdml0eVBhcnRpY2lwYW50Iiwic2V0U2hvd0RyYXdlciIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib25Ub2dnbGUiLCJzdG9wUHJvcGFnYXRpb24iLCJJY29uU3RhdGUiLCJUb29sdGlwIiwib3BlbiIsIkxpbmsiLCJocmVmIiwiSW1hZ2UiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiU3Bva2VuQWN0aXZpdHlQYXJ0aWNpcGFudCIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlQYXJ0aWNpcGFudCIsIm11bHRpcGxlQ2hvaWNlIiwid3JvbmciLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdEJvZHkiLCJwcm9ncmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eSIsIm9uTmF2aWdhdGUiLCJJQ09OUyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZUJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5U3Bva2VuQm9keSIsInBhcnRpY2lwYXRpb24iLCJIdG1sV3JhcHBlciIsImRldGFpbCIsImFuYWx5c2lzIiwib2JqZWN0aXZlU3RhdHVzZXMiLCJTdHVkZW50QXNzaWdubWVudFN1bW1hcnkiLCJzZXRJdGVtcyIsIkdlbmVyYWxWaWV3IiwiTW9kdWxlQWN0aXZpdHlEZXRhaWxzIiwic3VidHlwZSIsIkljb24iLCJfbGFiZWwiLCJfYWN0aXZpdHlJY29uIiwiTW9kdWxlQWN0aXZpdHkiLCJBY3Rpdml0eUljb24iLCJNb2R1bGVBY3Rpdml0eU1lc3NhZ2VzIiwiaGFzUGFydGljaXBhdGVkIiwibGFiZWwiLCJ0b3RhbE1lc3NhZ2VzIiwidmFsdWVzIiwiam9pbiIsIm1lc3NhZ2VDb3VudGVyIiwiaGFzQWxlcnRzIiwiX3V0aWxzIiwiYWN0aXZpdHlJdGVtcyIsInBlcmNlbnRpbGUiLCJwYXJ0aWNpcGFudFVyaSIsInZpZXdTdHVkZW50IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbHQiLCJwZXJjZW50aWwiLCJsaW1pdERlY2ltYWxzIiwiU3Bva2VuRGF0YSIsImZhY2VzIiwiRmFjZXMiLCJoYXNTcG9rZW4iLCJDaGFydHMiLCJNdWx0aXBsZUNoYXJ0IiwiU3Bva2VuQ2hhcnQiLCJfY2hhcnRzIiwiX3NldHRpbmdzIiwiY3VycmVudCIsImNvdW50T2JqZWN0c1dpdGhvdXRVc2VNdWx0aXBsZSIsImhhc05vblplcm9Db3VudCIsInNvbWUiLCJkaWZmIiwiQ2hhcnQiLCJzZXJpZXMiLCJsYWJlbHMiLCJwZW5kaW5nIiwiQ0hBUlRfQkFTRV9TUEVDUyIsInJlc3BvbnNpdmUiLCJSRVNQT05TSVZFX0JBU0VfU1BFQ1MiLCJ0aGVtZSIsInBhbGV0dGUiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImhvcml6b250YWxBbGlnbiIsImNoYXJ0IiwiaGVpZ2h0IiwiZGF0YUxhYmVscyIsImZvcm1hdHRlciIsInNlcmllc0luZGV4IiwidyIsImNvbmZpZyIsImJyZWFrcG9pbnQiLCJ3aWR0aCIsInNwb2tlbklkIiwiZmluZCIsIl9pY29uQm94IiwiSWNvbkJveCIsIkRyYXdlckFsZXJ0SXRlbSIsIkFQUCIsIkFQUF9OQU1FIiwiUGFnZUNvbnRhaW5lciIsImNsYXNzd29ya3MiLCJEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfZHJhd2VyIiwiX2RyYXdlcjIiLCJfZHJhd2VyMyIsIl9wZXJmZWN0U2Nyb2xsYmFyIiwiX3dhbGwiLCJBc2lkZURyYXdlciIsInNob3dEcmF3ZXIiLCJTY3JvbGxDb250YWluZXIiLCJ3YWxsIiwiV2FsbCIsIl9pY29uczIiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiX3VzZXJEYXRhIiwiSGVhZGVyIiwib3duZXIiLCJFbnRpdHlJbWFnZSIsIlVzZXJEYXRhIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwiX2Zvcm0iLCJfYWN0aXZpdHlGaWx0ZXIiLCJTdHVkZW50c0hlYWRlciIsImxpc3RDbHMiLCJyZWZyZXNoaW5nIiwic2V0UmVmcmVzaGluZyIsIm9uRmlsdGVyIiwiY3VycmVudFRhcmdldCIsImxpc3QiLCJzdHVkZW50cyIsIklucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsImRpc2FibGVkIiwidmFyaWFudCIsIl8iLCJfYXNpZGVEcmF3ZXIiLCJfaGVhZGVyIiwiX2dlbmVyYWwiLCJfc3R1ZGVudEhlYWRlciIsIl92aWV3Iiwic2V0VG90YWxQYXJ0aWNpcGFudHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiZ2V0UHJvcGVydGllcyIsIlBhZ2VMb2FkZXIiLCJQcm92aWRlciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsL0RBVEEudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0aWVzLnRzIiwiL3RzL21vZGVsL2FjdGl2aXRpZXMvYWN0aXZpdHkudHMiLCIvdHMvbW9kZWwvaW5kZXgudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL3Nwb2tlbi50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdHkudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudHMudHMiLCIvdHlwZXMudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvNDA0LnRzeCIsIi9hY3RpdGl0eS10eXBlcy50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9hbGVydHMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9sb2FkaW5nLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvYXNzZXNzbWVudC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL2NoYXQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9jb21wZXRlbmNpZXMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9lbXB0eS1jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL211bHRpcGxlL2NvdW50ZXJzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvbXVsdGlwbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9tdWx0aXBsZS9vcHRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9tdWx0aXBsZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9zcG9rZW4vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvc2VsZWN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9zZWxlY3QvaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvc2VsZWN0L3RvZ2dsZS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZ2VuZXJhbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2RldGFpbHMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2xhYmVsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhcnRzL211bHRpcGxlLnRzeCIsIi90cy92aWV3cy9jaGFydHMvc2V0dGluZ3MudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWN0aXZpdHktaWNvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lbXB0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pY29uLWJveC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kcmF3ZXIvYXNpZGUtZHJhd2VyLnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvY29udGVudC50c3giLCIvdHMvdmlld3MvZHJhd2VyL3dhbGwudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FjdGl2aXR5LWZpbHRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvc3R1ZGVudC1oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci91c2VyLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElB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QVE7Y0FBQy9LLEtBQUssRUFBRUEsS0FBSztjQUFFbUosS0FBSyxFQUFFQTtZQUFLLEVBQUk7WUFDdkUsSUFBSW5KLEtBQUssQ0FBQ3dHLEtBQUssQ0FBQ2pCLGlCQUFpQixLQUFLLENBQUMsRUFBRSxPQUFPdUYsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDOEQsTUFBQSxDQUFBc0IsS0FBSztjQUFDclEsS0FBSyxFQUFFQSxLQUFLO2NBQUVtSixLQUFLLEVBQUVBO1lBQUssRUFBSTtZQUVyRixNQUFNZCxLQUFLLEdBQUc7Y0FBRWMsS0FBSztjQUFFM0MsS0FBSyxFQUFFeEcsS0FBSyxDQUFDd0csS0FBSztjQUFFeEcsS0FBSztjQUFFdWIsVUFBVTtjQUFFL0csYUFBYTtjQUFFeEwsSUFBSTtjQUFFOEs7WUFBTyxDQUFFO1lBRTVGLE1BQU01RixHQUFHLEdBQUcsc0JBQXNCcEUsUUFBUSxHQUFHLGNBQWMsR0FBRyxFQUFFLEVBQUU7WUFDbEUsT0FDQ2dCLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ3FGLEdBQUEsQ0FBQXNLLGFBQWE7Y0FBQ2pQLFNBQVMsRUFBRXVDO1lBQUcsR0FDNUJwRCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNHLFFBQUEsQ0FBQTBQLGdCQUFnQixDQUFDbUQsUUFBUTtjQUFDNVYsS0FBSyxFQUFFQTtZQUFLLEdBQ3RDeUMsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDdVMsT0FBQSxDQUFBekIsTUFBTSxPQUFHLEVBQ1ZqUixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUN5UyxjQUFBLENBQUFsQixjQUFjLE9BQUcsRUFDbEIxUixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNvQixXQUFBLENBQUFRLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFLENBQUMsQ0FBQzlNLEtBQUssQ0FBQzZJLGdCQUFnQjtjQUNuQ3lGLE9BQU87Y0FDUHZCLE9BQU8sRUFBRTtnQkFDUnlCLEtBQUssRUFBRTFELE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ3dTLFFBQUEsQ0FBQW5ILFdBQVcsT0FBRztnQkFDdEIvSCxJQUFJLEVBQUV6RCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUMwUyxLQUFBLENBQUE5SixZQUFZOztZQUNuQixFQUNBLEVBQ0YvSSxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNzUyxZQUFBLENBQUFqQyxXQUFXLE9BQUcsQ0FDWSxDQUNiO1VBRWxCIiwiaWdub3JlTGlzdCI6W119