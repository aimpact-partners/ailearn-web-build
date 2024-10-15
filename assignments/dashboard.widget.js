System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@aimpact/ailearn-app@0.1.13/components/ui", "@aimpact/ailearn-app@0.1.13/components/navbar-header.code", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/config", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/collapsible", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/drawer", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/breadcrumb", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/dropdown", "@aimpact/ailearn-app@0.1.13/components/icons", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/tooltip", "@aimpact/ailearn-app@0.1.13/utils", "@aimpact/ailearn-app@0.1.13/shared/charts", "pragmate-ui@1.0.0-beta.6/perfect-scrollbar", "pragmate-ui@1.0.0-beta.6/form"], function (_export, _context2) {
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
    }, function (_pragmateUi100Beta6Breadcrumb) {
      dependency_26 = _pragmateUi100Beta6Breadcrumb;
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_27 = _aimpactChatSdk130ChatComponentCode;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_28 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6Dropdown) {
      dependency_29 = _pragmateUi100Beta6Dropdown;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_30 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_pragmateUi100Beta6Image) {
      dependency_31 = _pragmateUi100Beta6Image;
    }, function (_pragmateUi100Beta6Tooltip) {
      dependency_32 = _pragmateUi100Beta6Tooltip;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_5], ['@aimpact/ailearn-sdk/reactive/model', dependency_6], ['@aimpact/http-suite/api', dependency_7], ['@aimpact/ailearn-sdk/config', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@aimpact/ailearn-sdk/tracking', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['react', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['pragmate-ui/empty', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/collapsible', dependency_21], ['pragmate-ui/components', dependency_22], ['pragmate-ui/tabs', dependency_23], ['pragmate-ui/drawer', dependency_24], ['@beyond-js/react-18-widgets/hooks', dependency_25], ['pragmate-ui/breadcrumb', dependency_26], ['@aimpact/chat-sdk/chat-component.code', dependency_27], ['@aimpact/chat-sdk/widgets/markdown', dependency_28], ['pragmate-ui/dropdown', dependency_29], ['@aimpact/ailearn-app/components/icons', dependency_30], ['pragmate-ui/image', dependency_31], ['pragmate-ui/tooltip', dependency_32], ['@aimpact/ailearn-app/utils', dependency_33], ['@aimpact/ailearn-app/shared/charts', dependency_34], ['pragmate-ui/perfect-scrollbar', dependency_35], ['pragmate-ui/form', dependency_36]]);
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
        hash: 1916910585,
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
              this.reactiveProps(['id', 'selection', 'spoken', 'found', 'assessment']);
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
        hash: 1407264248,
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
                properties: ['alerts', 'activity', 'counters', 'responses', ...properties]
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
        hash: 156537293,
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
          var _breadcrumb = require("pragmate-ui/breadcrumb");
          /*bundle*/
          function DetailActivity({
            item
          }) {
            const {
              store,
              texts,
              setShowDrawer
            } = (0, _context.useDashboardContext)();
            const {
              tracking,
              activityId,
              assignment
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
            const onClick = event => {
              event.preventDefault();
              setShowDrawer({
                show: true,
                view: 'student',
                data: participant
              });
              return false;
            };
            // Ensure breadcrumb items are correctly structured as tuples with optional undefined
            const breadcrumb = [[texts.breadcrumb.assignment, onClick, undefined], [texts.breadcrumb.activity]];
            return React.createElement("div", {
              className: cls
            }, React.createElement("header", {
              className: "dashboard-drawer__header ds-drawer__activity"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("div", null, React.createElement("h2", null, student.name), React.createElement(_breadcrumb.BreadCrumb, {
              className: "drawer-breadcrumb",
              items: breadcrumb
            })), React.createElement("div", {
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
        hash: 1777871910,
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
          var _questions = require("./questions");
          var _tabs = require("pragmate-ui/tabs");
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
            const {
              counters: {
                total,
                correct
              }
            } = item.data;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_tabs.TabsContainer, {
              active: 0
            }, _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, _react.default.createElement("h4", null, texts.total, ": ", total, " / ", texts.correct, ": ", correct))), _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_questions.AssessmentQuestions, {
              item: item,
              showAnswers: true
            }))));
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
        hash: 679133445,
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
                className: "ds-drawer__activity-item question__container"
              }, _react.default.createElement("h6", {
                className: "question-title"
              }, question.question), options);
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
        hash: 1145577703,
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
            const audioUrl = `${_config.default.params.apis.ailearn}/assignments/${store.model.id}/activities/${item.id}/tracking/${item.id}/audio`;
            return _react.default.createElement("div", {
              className: "activity-data-section "
            }, _react.default.createElement("p", {
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
              className: "assignment-activity-list",
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
        hash: 688819343,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenItem = void 0;
          var _react = require("react");
          var _context = require("../../../../context");
          const SpokenItem = ({
            item
          }) => {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            return _react.default.createElement("div", {
              className: "activity-data-section",
              key: `${item.id}-${item.name}`
            }, _react.default.createElement("div", null, _react.default.createElement("h6", null, item.icon, " ", item.name)), _react.default.createElement("div", null, _react.default.createElement("span", null, item.feedback)));
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
        hash: 3118189370,
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
        hash: 2316257342,
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
            console.log(0.2, item);
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
        hash: 2214975877,
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
          var _breadcrumb = require("pragmate-ui/breadcrumb");
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
            // Ensure breadcrumb items are correctly structured as tuples with optional undefined
            const breadcrumb = [[texts.breadcrumb.assignment]];
            return React.createElement("div", {
              className: cls
            }, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("div", null, React.createElement("h2", null, student.name), React.createElement(_breadcrumb.BreadCrumb, {
              className: "drawer-breadcrumb",
              items: breadcrumb
            })), React.createElement("div", null, React.createElement(_icons.IconButton, {
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

      /*****************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/chat
      *****************************************************/

      ims.set('./views/assignment/item/activity/chat', {
        hash: 305729173,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityChat = ModuleActivityChat;
          var _react = require("react");
          var _context = require("../../../context");
          var _label = require("./label");
          var _activityIcon = require("../../../components/activity-icon");
          var _tooltip = require("pragmate-ui/tooltip");
          function ModuleActivityChat({
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
        hash: 2876596745,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivity = ModuleActivity;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _chat = require("./chat");
          var _spoken = require("./spoken");
          var _multipleChoice = require("./multiple-choice");
          function ModuleActivity({
            item
          }) {
            const {
              user,
              activity,
              participant
            } = item;
            const type = ['content-theory', 'debate', 'character-talk'].includes(activity.type) ? 'chat' : activity.type;
            return _react.default.createElement(_components.ConditionalContainer, {
              condition: type,
              options: {
                chat: _react.default.createElement(_chat.ModuleActivityChat, {
                  item: item
                }),
                spoken: _react.default.createElement(_spoken.ModuleActivitySpoken, {
                  item: item
                }),
                'multiple-choice': _react.default.createElement(_multipleChoice.ModuleActivityMultipleChoice, {
                  item: item
                })
              }
            });
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

      /****************************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/multiple-choice
      ****************************************************************/

      ims.set('./views/assignment/item/activity/multiple-choice', {
        hash: 82668186,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityMultipleChoice = ModuleActivityMultipleChoice;
          var _react = require("react");
          var _context = require("../../../context");
          var _label = require("./label");
          var _activityIcon = require("../../../components/activity-icon");
          function ModuleActivityMultipleChoice({
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
            console.log(0.2, participantActivity?.counters);
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
            }))), participantActivity?.counters ? _react.default.createElement("div", {
              className: "user-activity__information"
            }, participantActivity.counters.total, "/", participantActivity.counters.correct) : null);
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/spoken
      *******************************************************/

      ims.set('./views/assignment/item/activity/spoken', {
        hash: 4212151458,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivitySpoken = ModuleActivitySpoken;
          var _react = require("react");
          var _context = require("../../../context");
          var _label = require("./label");
          var _activityIcon = require("../../../components/activity-icon");
          function ModuleActivitySpoken({
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
            console.log(22, participantActivity);
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
            }), _react.default.createElement("div", null, participantActivity?.icons)));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/assignment/item/index
      *********************************************/

      ims.set('./views/assignment/item/index', {
        hash: 3877009935,
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
            }, _react.default.createElement(_list.List, {
              className: "list-unstyled user-activity__data",
              items: activityItems,
              control: _activity.ModuleActivity
            })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiUGFydGljaXBhbnRBY3Rpdml0aWVzIiwicGFyZW50IiwiYWN0aXZpdHkiLCJPYmplY3RzIiwic3Bva2VuIiwiUGFydGljaXBhbnRTcG9rZW5BY3Rpdml0eSIsImRldGF1bHQiLCJQYXJ0aWNpcGFudEFjdGl2aXR5IiwiUGFydGljaXBhbnRNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwiQWN0aXZpdHkiLCJpY29ucyIsInRvdGFsUG9pbnRzIiwicG9pbnRzIiwiUGFydGljaXBhbnQiLCJpdGVtIiwiX3BhcnRpY2lwYW50IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbDIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfdHJhY2tpbmciLCJfY29yZSIsImlzU3RvcmUiLCJ0cmFja2luZyIsImFjdGl2aXR5U2VsZWN0ZWQiLCJjdXJyZW50VHJhY2tpbmciLCJzZXNzaW9uIiwidmlldyIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsInNwZWNpZmllciIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ1c2VycyIsInRyYWNraW5ncyIsInRyaWdnZXJFdmVudCIsIm9uIiwic2V0TW9kZWwiLCJmZXRjaGluZyIsIm0iLCJlIiwibG9hZFVzZXJUcmFja2luZyIsInVzZXJJZCIsIlRyYWNraW5nIiwiY2hhdCIsImNvbnNvbGUiLCJyZWZyZXNoIiwidHJpZ2dlciIsInJlZnJlc2hEcmF3ZXIiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsInNlbGVjdEFjdGl2aXR5IiwiX3JlYWN0IiwiTm90Rm91bmQiLCJjb2RlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiUmVhY3QiLCJfY29udGV4dCIsIl9saXN0IiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlBbGVydHMiLCJwYXJ0aWNpcGFudEFjdGl2aXR5IiwidXNlRGFzaGJvYXJkQ29udGV4dCIsImFsZXJ0cyIsImNsYXNzTmFtZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJpdGVyYXRpb24iLCJhc3Npc3RhbnQiLCJzdHVkZW50IiwiTGlzdCIsImFzIiwiY29udHJvbCIsIl9jb21wb25lbnRzIiwiX2Fzc2Vzc21lbnQiLCJfY2hhdCIsIl9zZWxlY3QiLCJEZXRhaWxBY3Rpdml0eUJvZHkiLCJhc3NpZ25tZW50QWN0aXZpdHkiLCJzZXRBY3Rpdml0eSIsIkFjdGl2aXR5U2VsZWN0IiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvcHRpb25zIiwiY29udmVyc2F0aW9uIiwiVXNlckNoYXQiLCJkZWJhdGUiLCJNYXRlcmlhbEFzc2Vzc21lbnQiLCJhc3Nlc3NtZW50IiwiU3Bva2VuQW5hbHlzaXMiLCJEcmF3ZXIiLCJfaWNvbnMiLCJfaG9va3MiLCJfY29udGVudCIsIl9icmVhZGNydW1iIiwiRGV0YWlsQWN0aXZpdHkiLCJzZXRTaG93RHJhd2VyIiwiYWN0aXZpdHlJZCIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIm9uUmVmcmVzaCIsImZpbmFsbHkiLCJjbHMiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImJyZWFkY3J1bWIiLCJ1bmRlZmluZWQiLCJCcmVhZENydW1iIiwiSWNvbkJ1dHRvbiIsIkNsb3NlQnV0dG9uIiwidGVybmFyeSIsInRydWUiLCJmYWxzZSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJFbXB0eURldGFpbEFjdGl2aXR5IiwiX211bHRpcGxlIiwiTXVsdGlwbGVDaG9pY2VSZXBvcnQiLCJfY2hhdENvbXBvbmVudCIsIl9lbXB0eSIsIl9lbXB0eUNoYXQiLCJfdGFicyIsIl9kcmF3ZXJBbGVydHMiLCJjaGF0VGV4dHMiLCJjaGF0TW9kZWwiLCJFbXB0eU1hdGVyaWFsIiwiY2hhdElkIiwiVGFic0NvbnRhaW5lciIsIlRhYnMiLCJUYWIiLCJQYW5lcyIsIkFnZW50c0NoYXRDb250YWluZXIiLCJlbXB0eSIsIkVtcHR5Q2hhdCIsIkFnZW50c0NoYXRQYW5lbCIsIkRyYXdlckFsZXJ0IiwiX21hcmtkb3duIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJNYXJrZG93biIsImNvbnRlbnQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIkVtcHR5IiwiX3VpIiwibWVzc2FnZSIsIkVtcHR5Q2FyZCIsIkRlZmF1bHRNYXRlcmlhbCIsIkNvdW50ZXJzIiwiY291bnRlcnMiLCJ0b3RhbCIsImNvcnJlY3QiLCJfcXVlc3Rpb25zIiwic2V0Q291bnRlcnMiLCJBc3Nlc3NtZW50UXVlc3Rpb25zIiwic2hvd0Fuc3dlcnMiLCJJdGVtT3B0aW9uIiwib3B0aW9uIiwiaSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwia2V5IiwiX29wdGlvbiIsInJlc3BvbnNlcyIsIm91dHB1dCIsInF1ZXN0aW9ucyIsImluZGV4IiwiYXR0cnMiLCJlbGVtZW50cyIsImF1ZGlvVXJsIiwiYXNzZXNzbWVudHMiLCJvcmFsVGV4dCIsInN0dWRlbnRBdWRpbyIsImNvbnRyb2xzIiwicHJlbG9hZCIsInNyYyIsImNvbnRhaW5lciIsIlNwb2tlbkl0ZW0iLCJmZWVkYmFjayIsIl9kcm9wZG93biIsIl90b2dnbGUiLCJzZWxlY3RlZCIsIkFjdGl2aXR5U2VsZWN0SXRlbSIsInNldFNlbGVjdGVkIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlRvZ2dsZU9wdGlvbiIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duSXRlbSIsImljb25DbHMiLCJDb250cm9sIiwiQXBwSWNvbiIsInR5cGVzIiwid2FybiIsIkFjdGl2aXR5VmlldyIsInNldFZpZXciLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsIm9uQ2xvc2UiLCJBY3Rpdml0eVBhcnRpY2lwYW50IiwiX2ltYWdlIiwiX3Rvb2x0aXAiLCJfb2JqZWN0aXZlIiwiQ2hhdEFjdGl2aXR5UGFydGljaXBhbnQiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwic3RvcFByb3BhZ2F0aW9uIiwiSWNvblN0YXRlIiwiVG9vbHRpcCIsIm9wZW4iLCJMaW5rIiwiaHJlZiIsIkltYWdlIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZSIsIlNwb2tlbkFjdGl2aXR5UGFydGljaXBhbnQiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5UGFydGljaXBhbnQiLCJtdWx0aXBsZUNob2ljZSIsIndyb25nIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRCb2R5IiwicHJvZ3JlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHkiLCJvbk5hdmlnYXRlIiwibG9nIiwiSUNPTlMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VCb2R5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eVNwb2tlbkJvZHkiLCJwYXJ0aWNpcGF0aW9uIiwiSHRtbFdyYXBwZXIiLCJkZXRhaWwiLCJhbmFseXNpcyIsIm9iamVjdGl2ZVN0YXR1c2VzIiwiU3R1ZGVudEFzc2lnbm1lbnRTdW1tYXJ5Iiwic2V0SXRlbXMiLCJHZW5lcmFsVmlldyIsIl9sYWJlbCIsIl9hY3Rpdml0eUljb24iLCJNb2R1bGVBY3Rpdml0eUNoYXQiLCJzdWJ0eXBlIiwiQWN0aXZpdHlJY29uIiwiTW9kdWxlQWN0aXZpdHlNZXNzYWdlcyIsIk1vZHVsZUFjdGl2aXR5RGV0YWlscyIsIkljb24iLCJNb2R1bGVBY3Rpdml0eSIsIk1vZHVsZUFjdGl2aXR5U3Bva2VuIiwiTW9kdWxlQWN0aXZpdHlNdWx0aXBsZUNob2ljZSIsImhhc1BhcnRpY2lwYXRlZCIsImxhYmVsIiwidG90YWxNZXNzYWdlcyIsInZhbHVlcyIsImpvaW4iLCJtZXNzYWdlQ291bnRlciIsImhhc0FsZXJ0cyIsImFjdGl2aXR5SXRlbXMiLCJwYXJ0aWNpcGFudFVyaSIsInZpZXdTdHVkZW50IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbHQiLCJDaGFydHMiLCJNdWx0aXBsZUNoYXJ0IiwiU3Bva2VuQ2hhcnQiLCJfY2hhcnRzIiwiX3NldHRpbmdzIiwiY3VycmVudCIsImNvdW50T2JqZWN0c1dpdGhvdXRVc2VNdWx0aXBsZSIsImhhc05vblplcm9Db3VudCIsInNvbWUiLCJkaWZmIiwiQ2hhcnQiLCJzZXJpZXMiLCJsYWJlbHMiLCJwZW5kaW5nIiwiQ0hBUlRfQkFTRV9TUEVDUyIsInJlc3BvbnNpdmUiLCJSRVNQT05TSVZFX0JBU0VfU1BFQ1MiLCJ0aGVtZSIsInBhbGV0dGUiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImhvcml6b250YWxBbGlnbiIsImNoYXJ0IiwiaGVpZ2h0IiwiZGF0YUxhYmVscyIsImZvcm1hdHRlciIsInNlcmllc0luZGV4IiwidyIsImNvbmZpZyIsImJyZWFrcG9pbnQiLCJ3aWR0aCIsInNwb2tlbklkIiwiZmluZCIsIl9pY29uQm94IiwiSWNvbkJveCIsIkRyYXdlckFsZXJ0SXRlbSIsIkFQUCIsIkFQUF9OQU1FIiwiUGFnZUNvbnRhaW5lciIsImNsYXNzd29ya3MiLCJEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfZHJhd2VyIiwiX2RyYXdlcjIiLCJfZHJhd2VyMyIsIl9wZXJmZWN0U2Nyb2xsYmFyIiwiX3dhbGwiLCJBc2lkZURyYXdlciIsInNob3dEcmF3ZXIiLCJTY3JvbGxDb250YWluZXIiLCJ3YWxsIiwiV2FsbCIsIl9pY29uczIiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiX3VzZXJEYXRhIiwiSGVhZGVyIiwib3duZXIiLCJFbnRpdHlJbWFnZSIsIlVzZXJEYXRhIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwiX2Zvcm0iLCJfYWN0aXZpdHlGaWx0ZXIiLCJTdHVkZW50c0hlYWRlciIsImxpc3RDbHMiLCJyZWZyZXNoaW5nIiwic2V0UmVmcmVzaGluZyIsIm9uRmlsdGVyIiwiY3VycmVudFRhcmdldCIsImxpc3QiLCJzdHVkZW50cyIsIklucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsImRpc2FibGVkIiwidmFyaWFudCIsIl8iLCJfYXNpZGVEcmF3ZXIiLCJfaGVhZGVyIiwiX2dlbmVyYWwiLCJfc3R1ZGVudEhlYWRlciIsIl92aWV3Iiwic2V0VG90YWxQYXJ0aWNpcGFudHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiZ2V0UHJvcGVydGllcyIsIlBhZ2VMb2FkZXIiLCJQcm92aWRlciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsL0RBVEEudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0aWVzLnRzIiwiL3RzL21vZGVsL2FjdGl2aXRpZXMvYWN0aXZpdHkudHMiLCIvdHMvbW9kZWwvaW5kZXgudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL3Nwb2tlbi50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdHkudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudHMudHMiLCIvdHlwZXMudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvNDA0LnRzeCIsIi9hY3RpdGl0eS10eXBlcy50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9hbGVydHMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9sb2FkaW5nLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvYXNzZXNzbWVudC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL2NoYXQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9jb21wZXRlbmNpZXMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9lbXB0eS1jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL211bHRpcGxlL2NvdW50ZXJzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvbXVsdGlwbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9tdWx0aXBsZS9vcHRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9tdWx0aXBsZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9zcG9rZW4vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvc2VsZWN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9zZWxlY3QvaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvc2VsZWN0L3RvZ2dsZS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZ2VuZXJhbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2NoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9kZXRhaWxzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9sYWJlbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGFydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9tdWx0aXBsZS50c3giLCIvdHMvdmlld3MvY2hhcnRzL3NldHRpbmdzLnRzeCIsIi90cy92aWV3cy9jaGFydHMvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FjdGl2aXR5LWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaWNvbi1ib3gudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZHJhd2VyL2FzaWRlLWRyYXdlci50c3giLCIvdHMvdmlld3MvZHJhd2VyL2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci93YWxsLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hY3Rpdml0eS1maWx0ZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaGVhZGVyL3N0dWRlbnQtaGVhZGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvdXNlci1kYXRhLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsZ0JBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxTQUFRTCxLQUFBLENBQUFNLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlMLE1BQUEsQ0FBQU8sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNIUixnQkFBQSxDQUFBUyxZQUFZLENBQUNDLGFBQWEsRUFBRTtjQUM1QixJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csSUFBSSxDQUFDLElBQUksQ0FBQ0gsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFFM0M7WUFFQTs7O1lBR0FFLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVosS0FBTSxDQUFDYSxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQWhCLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7OztVQzVCRCxNQUFNaUIsSUFBSSxHQUFHO1lBQ1pDLE1BQU0sRUFBRSxJQUFJO1lBQ1pELElBQUksRUFBRTtjQUNMRSxVQUFVLEVBQUU7Z0JBQ1hDLEtBQUssRUFBRTtrQkFDTixzQ0FBc0MsRUFBRTtvQkFDdkNDLFFBQVEsRUFBRSxDQUFDO29CQUNYQyxNQUFNLEVBQUU7c0JBQ1BDLE9BQU8sRUFBRTt3QkFDUkMsUUFBUSxFQUNQLHdGQUF3Rjt3QkFDekZDLElBQUksRUFBRSxhQUFhO3dCQUNuQkMsRUFBRSxFQUFFO3VCQUNKO3NCQUNEQyxRQUFRLEVBQUUsU0FBUztzQkFDbkJDLEVBQUUsRUFBRSxJQUFJO3NCQUNSQyxXQUFXLEVBQ1YsaU5BQWlOO3NCQUNsTkMsUUFBUSxFQUFFLElBQUk7c0JBQ2RDLEtBQUssRUFBRSwrQkFBK0I7c0JBQ3RDQyxJQUFJLEVBQUUsUUFBUTtzQkFDZEMsT0FBTyxFQUFFLEVBQUU7c0JBQ1hDLFNBQVMsRUFBRSwrRUFBK0U7c0JBQzFGYixRQUFRLEVBQUUsSUFBSTtzQkFDZGMsTUFBTSxFQUFFLElBQUk7c0JBQ1pDLFdBQVcsRUFBRSxhQUFhO3NCQUMxQkMsV0FBVyxFQUFFLGFBQWE7c0JBQzFCWCxFQUFFLEVBQUUsc0NBQXNDO3NCQUMxQ1IsTUFBTSxFQUFFO3FCQUNSO29CQUNEVyxXQUFXLEVBQ1YsMGJBQTBiO29CQUMzYlMsU0FBUyxFQUFFO3NCQUNWQyxLQUFLLEVBQUU7d0JBQ05DLFlBQVksRUFDWCwyTkFBMk47d0JBQzVOQyxJQUFJLEVBQUUsZ0RBQWdEO3dCQUN0REMsVUFBVSxFQUFFLENBQ1g7MEJBQ0NqQixJQUFJLEVBQUUsMEJBQTBCOzBCQUNoQ1MsU0FBUyxFQUNSO3lCQUNELEVBQ0Q7MEJBQ0NULElBQUksRUFBRSx1QkFBdUI7MEJBQzdCUyxTQUFTLEVBQ1I7eUJBQ0QsRUFDRDswQkFDQ1QsSUFBSSxFQUFFLDJCQUEyQjswQkFDakNTLFNBQVMsRUFDUjt5QkFDRDt1QkFFRjtzQkFDRFMsU0FBUyxFQUFFO3FCQUNYO29CQUNEYixRQUFRLEVBQUUsSUFBSTtvQkFDZEosRUFBRSxFQUFFLHNDQUFzQztvQkFDMUNNLElBQUksRUFBRSxnQkFBZ0I7b0JBQ3RCRCxLQUFLLEVBQUUsc0RBQXNEO29CQUM3REUsT0FBTyxFQUFFLEVBQUU7b0JBQ1hDLFNBQVMsRUFDUjttQkFDRDtrQkFDRCxzQ0FBc0MsRUFBRTtvQkFDdkNiLFFBQVEsRUFBRSxDQUFDO29CQUNYQyxNQUFNLEVBQUU7c0JBQ1BDLE9BQU8sRUFBRTt3QkFDUkMsUUFBUSxFQUNQLHdGQUF3Rjt3QkFDekZDLElBQUksRUFBRSxhQUFhO3dCQUNuQkMsRUFBRSxFQUFFO3VCQUNKO3NCQUNEQyxRQUFRLEVBQUUsU0FBUztzQkFDbkJDLEVBQUUsRUFBRSxJQUFJO3NCQUNSQyxXQUFXLEVBQ1YsaU5BQWlOO3NCQUNsTkMsUUFBUSxFQUFFLElBQUk7c0JBQ2RDLEtBQUssRUFBRSwrQkFBK0I7c0JBQ3RDQyxJQUFJLEVBQUUsUUFBUTtzQkFDZEMsT0FBTyxFQUFFLEVBQUU7c0JBQ1hDLFNBQVMsRUFBRSwrRUFBK0U7c0JBQzFGYixRQUFRLEVBQUUsSUFBSTtzQkFDZGMsTUFBTSxFQUFFLElBQUk7c0JBQ1pDLFdBQVcsRUFBRSxhQUFhO3NCQUMxQkMsV0FBVyxFQUFFLGFBQWE7c0JBQzFCWCxFQUFFLEVBQUUsc0NBQXNDO3NCQUMxQ1IsTUFBTSxFQUFFO3FCQUNSO29CQUNEVyxXQUFXLEVBQ1Ysc1lBQXNZO29CQUN2WVMsU0FBUyxFQUFFO3NCQUNWQyxLQUFLLEVBQUU7d0JBQ05DLFlBQVksRUFDWCxxUEFBcVA7d0JBQ3RQQyxJQUFJLEVBQUUsU0FBUzt3QkFDZkMsVUFBVSxFQUFFLENBQ1g7MEJBQ0NqQixJQUFJLEVBQUUsZ0NBQWdDOzBCQUN0Q1MsU0FBUyxFQUNSO3lCQUNELEVBQ0Q7MEJBQ0NULElBQUksRUFBRSxzQ0FBc0M7MEJBQzVDUyxTQUFTLEVBQUU7eUJBQ1g7dUJBRUY7c0JBQ0RTLFNBQVMsRUFBRTt3QkFDVkMsU0FBUyxFQUNSLHdiQUF3Yjt3QkFDemJDLE9BQU8sRUFDTixpVEFBaVQ7d0JBQ2xUQyxRQUFRLEVBQ1A7O3FCQUVGO29CQUNEaEIsUUFBUSxFQUFFLElBQUk7b0JBQ2RKLEVBQUUsRUFBRSxzQ0FBc0M7b0JBQzFDTSxJQUFJLEVBQUUsZ0JBQWdCO29CQUN0QkQsS0FBSyxFQUFFLCtCQUErQjtvQkFDdENFLE9BQU8sRUFBRSxFQUFFO29CQUNYQyxTQUFTLEVBQ1I7bUJBQ0Q7a0JBQ0Qsc0NBQXNDLEVBQUU7b0JBQ3ZDYixRQUFRLEVBQUUsQ0FBQztvQkFDWEMsTUFBTSxFQUFFO3NCQUNQQyxPQUFPLEVBQUU7d0JBQ1JDLFFBQVEsRUFDUCx3RkFBd0Y7d0JBQ3pGQyxJQUFJLEVBQUUsYUFBYTt3QkFDbkJDLEVBQUUsRUFBRTt1QkFDSjtzQkFDREMsUUFBUSxFQUFFLFNBQVM7c0JBQ25CQyxFQUFFLEVBQUUsSUFBSTtzQkFDUkMsV0FBVyxFQUNWLGlOQUFpTjtzQkFDbE5DLFFBQVEsRUFBRSxJQUFJO3NCQUNkQyxLQUFLLEVBQUUsK0JBQStCO3NCQUN0Q0MsSUFBSSxFQUFFLFFBQVE7c0JBQ2RDLE9BQU8sRUFBRSxFQUFFO3NCQUNYQyxTQUFTLEVBQUUsK0VBQStFO3NCQUMxRmIsUUFBUSxFQUFFLElBQUk7c0JBQ2RjLE1BQU0sRUFBRSxJQUFJO3NCQUNaQyxXQUFXLEVBQUUsYUFBYTtzQkFDMUJDLFdBQVcsRUFBRSxhQUFhO3NCQUMxQlgsRUFBRSxFQUFFLHNDQUFzQztzQkFDMUNSLE1BQU0sRUFBRTtxQkFDUjtvQkFDRFcsV0FBVyxFQUNWLHVNQUF1TTtvQkFDeE1TLFNBQVMsRUFBRTtzQkFDVkMsS0FBSyxFQUFFO3dCQUNOQyxZQUFZLEVBQ1gsMlJBQTJSO3dCQUM1UkMsSUFBSSxFQUFFLFNBQVM7d0JBQ2ZNLE9BQU8sRUFDTixrSEFBa0g7d0JBQ25ITCxVQUFVLEVBQUUsQ0FDWDswQkFDQ2pCLElBQUksRUFBRSx1QkFBdUI7MEJBQzdCUyxTQUFTLEVBQ1I7eUJBQ0QsRUFDRDswQkFDQ1QsSUFBSSxFQUFFLHVCQUF1QjswQkFDN0JTLFNBQVMsRUFDUjt5QkFDRCxFQUNEOzBCQUNDVCxJQUFJLEVBQUUsc0JBQXNCOzBCQUM1QlMsU0FBUyxFQUNSO3lCQUNELEVBQ0Q7MEJBQ0NULElBQUksRUFBRSxzQkFBc0I7MEJBQzVCUyxTQUFTLEVBQUU7eUJBQ1g7dUJBRUY7c0JBQ0RTLFNBQVMsRUFBRTtxQkFDWDtvQkFDRGIsUUFBUSxFQUFFLElBQUk7b0JBQ2RKLEVBQUUsRUFBRSxzQ0FBc0M7b0JBQzFDTSxJQUFJLEVBQUUsUUFBUTtvQkFDZEQsS0FBSyxFQUFFLGlEQUFpRDtvQkFDeERFLE9BQU8sRUFBRSxFQUFFO29CQUNYQyxTQUFTLEVBQ1I7O2lCQUVGO2dCQUNEYyxLQUFLLEVBQUUsQ0FDTixzQ0FBc0MsRUFDdEMsc0NBQXNDLEVBQ3RDLHNDQUFzQztlQUV2QztjQUNEMUIsTUFBTSxFQUFFO2dCQUNQRCxRQUFRLEVBQUUsSUFBSTtnQkFDZEUsT0FBTyxFQUFFO2tCQUNSQyxRQUFRLEVBQUUsd0ZBQXdGO2tCQUNsR0MsSUFBSSxFQUFFLGFBQWE7a0JBQ25CQyxFQUFFLEVBQUU7aUJBQ0o7Z0JBQ0RDLFFBQVEsRUFBRSxTQUFTO2dCQUNuQkUsV0FBVyxFQUNWLGlOQUFpTjtnQkFDbE5DLFFBQVEsRUFBRSxJQUFJO2dCQUNkSixFQUFFLEVBQUUsc0NBQXNDO2dCQUMxQ0ssS0FBSyxFQUFFLCtCQUErQjtnQkFDdENFLE9BQU8sRUFBRSxFQUFFO2dCQUNYQyxTQUFTLEVBQUU7ZUFDWDtjQUNEZSxTQUFTLEVBQUU7Z0JBQ1Z4QixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QkMsRUFBRSxFQUFFLHNDQUFzQztnQkFDMUNPLE9BQU8sRUFBRTtlQUNUO2NBQ0RQLEVBQUUsRUFBRSxzQ0FBc0M7Y0FDMUN3QixZQUFZLEVBQUU7Z0JBQ2IsOEJBQThCLEVBQUU7a0JBQy9CQyxJQUFJLEVBQUU7b0JBQ0wzQixRQUFRLEVBQUUsd0ZBQXdGO29CQUNsR0MsSUFBSSxFQUFFLGFBQWE7b0JBQ25CQyxFQUFFLEVBQUU7bUJBQ0o7a0JBQ0RQLFVBQVUsRUFBRTtvQkFDWCxzQ0FBc0MsRUFBRTtzQkFDdkNGLElBQUksRUFBRTt3QkFDTG1DLFFBQVEsRUFBRTswQkFDVEMsS0FBSyxFQUFFO3lCQUNQO3dCQUNEQyxRQUFRLEVBQUU7MEJBQ1RDLE9BQU8sRUFDTix5S0FBeUs7MEJBQzFLYixVQUFVLEVBQUUsQ0FDWDs0QkFDQ2pCLElBQUksRUFBRSx1QkFBdUI7NEJBQzdCUyxTQUFTLEVBQ1IscUtBQXFLOzRCQUN0S2hCLE1BQU0sRUFBRTs4QkFDUE8sSUFBSSxFQUFFLFdBQVc7OEJBQ2pCK0IsSUFBSSxFQUFFOzsyQkFFUCxFQUNEOzRCQUNDL0IsSUFBSSxFQUFFLHVCQUF1Qjs0QkFDN0JTLFNBQVMsRUFDUixvSUFBb0k7NEJBQ3JJaEIsTUFBTSxFQUFFOzhCQUNQTyxJQUFJLEVBQUUsYUFBYTs4QkFDbkIrQixJQUFJLEVBQUU7OzJCQUVQLEVBQ0Q7NEJBQ0MvQixJQUFJLEVBQUUsc0JBQXNCOzRCQUM1QlMsU0FBUyxFQUNSLG1KQUFtSjs0QkFDcEpoQixNQUFNLEVBQUU7OEJBQ1BPLElBQUksRUFBRSxXQUFXOzhCQUNqQitCLElBQUksRUFBRTs7MkJBRVAsRUFDRDs0QkFDQy9CLElBQUksRUFBRSxzQkFBc0I7NEJBQzVCUyxTQUFTLEVBQ1IsZ0pBQWdKOzRCQUNqSmhCLE1BQU0sRUFBRTs4QkFDUE8sSUFBSSxFQUFFLGFBQWE7OEJBQ25CK0IsSUFBSSxFQUFFOzsyQkFFUDs7Ozs7aUJBTU47Z0JBQ0RDLDRCQUE0QixFQUFFO2tCQUM3Qk4sSUFBSSxFQUFFO29CQUNMM0IsUUFBUSxFQUNQLDRGQUE0RjtvQkFDN0ZDLElBQUksRUFBRSxhQUFhO29CQUNuQkMsRUFBRSxFQUFFO21CQUNKO2tCQUNEUCxVQUFVLEVBQUU7b0JBQ1gsc0NBQXNDLEVBQUU7c0JBQ3ZDRixJQUFJLEVBQUU7d0JBQ0xtQyxRQUFRLEVBQUU7MEJBQ1RDLEtBQUssRUFBRTt5QkFDUDt3QkFDREMsUUFBUSxFQUFFOzBCQUNUQyxPQUFPLEVBQ04sMk9BQTJPOzBCQUM1T2IsVUFBVSxFQUFFLENBQ1g7NEJBQ0NqQixJQUFJLEVBQUUsdUJBQXVCOzRCQUM3QlMsU0FBUyxFQUNSLCtKQUErSjs0QkFDaEtoQixNQUFNLEVBQUU7OEJBQ1BPLElBQUksRUFBRSxhQUFhOzhCQUNuQitCLElBQUksRUFBRTs7MkJBRVAsRUFDRDs0QkFDQy9CLElBQUksRUFBRSx1QkFBdUI7NEJBQzdCUyxTQUFTLEVBQUUsYUFBYTs0QkFDeEJoQixNQUFNLEVBQUU7OEJBQ1BPLElBQUksRUFBRSxhQUFhOzhCQUNuQitCLElBQUksRUFBRTs7MkJBRVAsRUFDRDs0QkFDQy9CLElBQUksRUFBRSxzQkFBc0I7NEJBQzVCUyxTQUFTLEVBQ1IsNElBQTRJOzRCQUM3SWhCLE1BQU0sRUFBRTs4QkFDUE8sSUFBSSxFQUFFLFdBQVc7OEJBQ2pCK0IsSUFBSSxFQUFFOzsyQkFFUCxFQUNEOzRCQUNDL0IsSUFBSSxFQUFFLHNCQUFzQjs0QkFDNUJTLFNBQVMsRUFBRSxhQUFhOzRCQUN4QmhCLE1BQU0sRUFBRTs4QkFDUE8sSUFBSSxFQUFFLGFBQWE7OEJBQ25CK0IsSUFBSSxFQUFFOzsyQkFFUDs7Ozs7Ozs7V0FTVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsVkQsSUFBQUUsU0FBQSxHQUFBOUQsT0FBQTtVQUVNLE1BQU8rRCxvQkFBb0I7WUFDaEMsQ0FBQXZDLEtBQU0sR0FBeUIsRUFBRTtZQUNqQyxDQUFBd0MsR0FBSSxHQUFvQyxJQUFJQyxHQUFHLEVBQUU7WUFDakQsSUFBSXpDLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQTBDLFNBQVU7WUFDVixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUNBQyxZQUFZRCxTQUFTLEVBQUU3QyxJQUFJO2NBQzFCLElBQUksQ0FBQyxDQUFBNkMsU0FBVSxHQUFHQSxTQUFTO2NBQzNCN0MsSUFBSSxDQUFDK0IsS0FBSyxDQUFDZ0IsT0FBTyxDQUFDdEMsRUFBRSxJQUFHO2dCQUN2QixNQUFNdUMsUUFBUSxHQUFHLElBQUlQLFNBQUEsQ0FBQVEsa0JBQWtCLENBQUNqRCxJQUFJLENBQUNHLEtBQUssQ0FBQ00sRUFBRSxDQUFDLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxDQUFBa0MsR0FBSSxDQUFDTyxHQUFHLENBQUN6QyxFQUFFLEVBQUV1QyxRQUFRLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxDQUFBN0MsS0FBTSxDQUFDZ0QsSUFBSSxDQUFDSCxRQUFRLENBQUM7Y0FDM0IsQ0FBQyxDQUFDO1lBQ0g7WUFFQUksR0FBR0EsQ0FBQzNDLEVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBa0MsR0FBSSxDQUFDUyxHQUFHLENBQUMzQyxFQUFFLENBQUM7WUFDekI7WUFDQWQsR0FBR0EsQ0FBQ2MsRUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFrQyxHQUFJLENBQUNoRCxHQUFHLENBQUNjLEVBQUUsQ0FBQztZQUN6Qjs7VUFDQVYsT0FBQSxDQUFBMkMsb0JBQUEsR0FBQUEsb0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JELElBQUFXLEtBQUEsR0FBQTFFLE9BQUE7VUFHTSxNQUFPc0Usa0JBQW1CLFNBQVFJLEtBQUEsQ0FBQUMsSUFBSTtZQVkzQyxDQUFBQyxlQUFnQixHQUE2QixJQUFJWCxHQUFHLEVBQUU7WUFDdEQsQ0FBQVgsWUFBYSxHQUFrQixFQUFFO1lBQ2pDLElBQUlBLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBQ0FhLFlBQVk5QyxJQUFJO2NBQ2YsS0FBSyxDQUFDO2dCQUNMd0QsTUFBTSxFQUFFLHFCQUFxQjtnQkFDN0IsR0FBR3hELElBQUk7Z0JBQ1B5RCxVQUFVLEVBQUUsQ0FDWCxVQUFVLEVBQ1YsUUFBUSxFQUNSLGFBQWEsRUFDYixXQUFXLEVBQ1gsVUFBVSxFQUNWLElBQUksRUFFSixNQUFNLEVBQ04sT0FBTyxFQUNQLFNBQVMsRUFDVCxXQUFXO2VBRVosQ0FBQztjQUVGO1lBQ0Q7WUFFQUMsY0FBY0EsQ0FBQ0MsV0FBd0I7Y0FDdEMsSUFBSSxDQUFDLENBQUExQixZQUFhLENBQUNrQixJQUFJLENBQUNRLFdBQVcsQ0FBQztjQUNwQyxJQUFJLENBQUMsQ0FBQUosZUFBZ0IsQ0FBQ0wsR0FBRyxDQUFDUyxXQUFXLENBQUNsRCxFQUFFLEVBQUVrRCxXQUFXLENBQUM7WUFDdkQ7WUFFQUMsY0FBY0EsQ0FBQ25ELEVBQVU7Y0FDeEIsT0FBTyxJQUFJLENBQUMsQ0FBQThDLGVBQWdCLENBQUM1RCxHQUFHLENBQUNjLEVBQUUsQ0FBQztZQUNyQztZQUVBb0QsY0FBY0EsQ0FBQ3BELEVBQVU7Y0FDeEIsT0FBTyxJQUFJLENBQUMsQ0FBQThDLGVBQWdCLENBQUNILEdBQUcsQ0FBQzNDLEVBQUUsQ0FBQztZQUNyQzs7VUFDQVYsT0FBQSxDQUFBa0Qsa0JBQUEsR0FBQUEsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdERELElBQUFhLE1BQUEsR0FBQW5GLE9BQUE7VUFDQSxJQUFBb0YsSUFBQSxHQUFBcEYsT0FBQTtVQUNBLElBQUFxRixPQUFBLEdBQUFyRixPQUFBO1VBQ0EsSUFBQXNGLFFBQUEsR0FBQXRGLE9BQUE7VUFHQSxJQUFBdUYsYUFBQSxHQUFBdkYsT0FBQTtVQUNBLElBQUF3RixXQUFBLEdBQUF4RixPQUFBO1VBRU0sTUFBT3lGLFNBQVUsU0FBUU4sTUFBQSxDQUFBTyxhQUF5QjtZQUN2RCxDQUFBQyxHQUFJO1lBTUosQ0FBQXJDLFlBQWE7WUFFYixJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUNBLENBQUE1QixNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDQSxDQUFBMkIsU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBQ0EsQ0FBQTlCLFVBQVc7WUFDWCxJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBLENBQUFxRSxLQUFNLEdBQTBDLElBQUk7WUFDcEQsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxJQUFJQyxpQkFBaUJBLENBQUE7Y0FDcEIsT0FBT0MsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDekMsWUFBWSxDQUFDOUIsS0FBSyxDQUFDLENBQUN3RSxNQUFNO1lBQ25EO1lBRUEsSUFBSUMsYUFBYUEsQ0FBQTtjQUNoQixPQUFPLElBQUksQ0FBQzNDLFlBQVksQ0FBQzlCLEtBQUssQ0FBQzBFLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVDLElBQUksS0FBSTtnQkFDbkQ7Z0JBQ0EsT0FBT0QsR0FBRztnQkFDVixDQUFDO2NBQ0YsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNOO1lBQ0EsSUFBSUUsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDL0MsWUFBWSxDQUFDOUIsS0FBSyxDQUFDMEUsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRUMsSUFBSSxLQUFJO2dCQUNuRDtnQkFDQSxPQUFPRCxHQUFHO2NBQ1gsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNOO1lBQ0FoQyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUF3QixHQUFJLEdBQUcsSUFBSVAsSUFBQSxDQUFBa0IsR0FBRyxDQUFDakIsT0FBQSxDQUFBa0IsT0FBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQy9DLElBQUksQ0FBQyxDQUFBcEQsWUFBYSxHQUFHLElBQUlpQyxhQUFBLENBQUFvQixZQUFZLENBQUMsSUFBSSxDQUFDO2NBQzNDLElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO2NBQ3hFQyxVQUFVLENBQUNDLEtBQUssR0FBRyxJQUFJO1lBQ3hCO1lBRUEsTUFBTTdGLElBQUlBLENBQUNhLEVBQUU7Y0FDWixJQUFJLENBQUMsQ0FBQTZELEdBQUksQ0FBQ29CLE1BQU0sQ0FBQ3pCLFFBQUEsQ0FBQTBCLGNBQWMsQ0FBQ3pELElBQUksQ0FBQzBELEtBQUssQ0FBQztjQUUzQyxNQUFNQyxRQUFRLEdBQWMsTUFBTSxJQUFJLENBQUMsQ0FBQXZCLEdBQUksQ0FBQzNFLEdBQUcsQ0FBQyxnQkFBZ0JjLEVBQUUsWUFBWSxDQUFDO2NBRS9FLElBQUksQ0FBQ29GLFFBQVEsQ0FBQzVGLE1BQU0sRUFBRTtnQkFDckIsSUFBSSxPQUFPNEYsUUFBUSxDQUFDdEIsS0FBSyxLQUFLLFFBQVEsRUFBRTtrQkFDdkMsSUFBSSxDQUFDLENBQUFBLEtBQU0sR0FBR3NCLFFBQVEsQ0FBQ3RCLEtBQUs7O2dCQUU3QixNQUFNLElBQUl1QixLQUFLLENBQUNELFFBQVEsQ0FBQ3RCLEtBQUssRUFBRXdCLElBQUksQ0FBQzs7Y0FHdEMsSUFBSXRCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDbUIsUUFBUSxDQUFDN0YsSUFBSSxDQUFDLENBQUMyRSxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUM1QyxJQUFJLENBQUNxQixLQUFLLEdBQUcsS0FBSztnQkFDbEIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtnQkFDakI7O2NBR0QsTUFBTTtnQkFBRTVGLE1BQU07Z0JBQUU0QixZQUFZO2dCQUFFL0IsVUFBVTtnQkFBRThCLFNBQVM7Z0JBQUV2QixFQUFFLEVBQUV5RjtjQUFXLENBQUUsR0FBR0wsUUFBUSxDQUFDN0YsSUFBSTtjQUV0RixJQUFJLENBQUMsQ0FBQUUsVUFBVyxHQUFHLElBQUlpRSxXQUFBLENBQUF6QixvQkFBb0IsQ0FBQyxJQUFJLEVBQUV4QyxVQUFVLENBQUM7Y0FDN0QsSUFBSSxDQUFDLENBQUErQixZQUFhLENBQUNyQyxJQUFJLENBQUNxQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUEvQixVQUFXLENBQUM7Y0FDdkRzRixVQUFVLENBQUNDLEtBQUssR0FBRyxJQUFJO2NBQ3ZCLElBQUksQ0FBQyxDQUFBcEYsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxDQUFBMkIsU0FBVSxHQUFHQSxTQUFTO2NBRTNCLElBQUksQ0FBQ3ZCLEVBQUUsR0FBR3lGLFdBQVc7Y0FFckIsSUFBSSxDQUFDRixLQUFLLEdBQUcsSUFBSTtjQUNqQixJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO1lBQ2xCOztVQUNBbEcsT0FBQSxDQUFBcUUsU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlGRCxJQUFBM0IsU0FBQSxHQUFBOUQsT0FBQTtVQUVBLElBQUF3SCxlQUFBLEdBQUF4SCxPQUFBO1VBQ0EsSUFBQXlILE9BQUEsR0FBQXpILE9BQUE7VUFFTSxNQUFPMEgscUJBQXFCO1lBQ2pDLENBQUFsRyxLQUFNLEdBQTBCLEVBQUU7WUFDbEMsQ0FBQXdDLEdBQUksR0FBcUMsSUFBSUMsR0FBRyxFQUFFO1lBQ2xELENBQUEwRCxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDQSxJQUFJbkcsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQTJDLFlBQVl3RCxNQUFtQixFQUFFbkcsS0FBSztjQUNyQyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxHQUFHQSxLQUFLO2NBQ25CLE1BQU11RSxJQUFJLEdBQUdELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDdkUsS0FBSyxDQUFDO2NBQy9CLElBQUksQ0FBQyxDQUFBQSxLQUFNLEdBQUd1RSxJQUFJLENBQUMvQixHQUFHLENBQUNsQyxFQUFFLElBQUc7Z0JBQzNCLE1BQU04RixRQUFRLEdBQUdELE1BQU0sQ0FBQ3pELFNBQVMsQ0FBQzNDLFVBQVUsQ0FBQ1AsR0FBRyxDQUFDYyxFQUFFLENBQUM7Z0JBQ3BEOEYsUUFBUSxDQUFDN0MsY0FBYyxDQUFDNEMsTUFBTSxDQUFDO2dCQUUvQixNQUFNaEYsS0FBSyxHQUFHLEVBQVM7Z0JBQ3ZCLElBQUlpRixRQUFRLENBQUN4RixJQUFJLEtBQUssUUFBUSxFQUFFO2tCQUMvQk8sS0FBSyxDQUFDbUMsVUFBVSxHQUFHZ0IsTUFBTSxDQUFDQyxJQUFJLENBQUN2RSxLQUFLLENBQUNNLEVBQUUsQ0FBQyxFQUFFVCxJQUFJLENBQUM7O2dCQUdoRCxNQUFNd0csT0FBTyxHQUFHO2tCQUNmQyxNQUFNLEVBQUVMLE9BQUEsQ0FBQU0seUJBQXlCO2tCQUNqQ0MsT0FBTyxFQUFFbEUsU0FBQSxDQUFBbUUsbUJBQW1CO2tCQUM1QixpQkFBaUIsRUFBRVQsZUFBQSxDQUFBVTtpQkFDbkI7Z0JBRUQsTUFBTUMsUUFBUSxHQUFHTixPQUFPLENBQUNELFFBQVEsQ0FBQ3hGLElBQUksQ0FBQyxJQUFJeUYsT0FBTyxDQUFDRyxPQUFPO2dCQUMxRCxNQUFNM0QsUUFBUSxHQUFHLElBQUk4RCxRQUFRLENBQUM7a0JBQzdCUCxRQUFRO2tCQUNSLEdBQUdqRixLQUFLO2tCQUNSLEdBQUduQixLQUFLLENBQUNNLEVBQUUsQ0FBQyxFQUFFVDtpQkFDZCxDQUFDO2dCQUNGLElBQUksQ0FBQyxDQUFBMkMsR0FBSSxDQUFDTyxHQUFHLENBQUN6QyxFQUFFLEVBQUV1QyxRQUFRLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxDQUFBc0QsTUFBTyxHQUFHQSxNQUFNO2dCQUVyQixPQUFPdEQsUUFBUTtjQUNoQixDQUFDLENBQUM7WUFDSDtZQUVBSSxHQUFHQSxDQUFDM0MsRUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFrQyxHQUFJLENBQUNTLEdBQUcsQ0FBQzNDLEVBQUUsQ0FBQztZQUN6QjtZQUNBZCxHQUFHQSxDQUFDYyxFQUFVO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQWtDLEdBQUksQ0FBQ2hELEdBQUcsQ0FBQ2MsRUFBRSxDQUFDO1lBQ3pCOztVQUNBVixPQUFBLENBQUFzRyxxQkFBQSxHQUFBQSxxQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0REQsSUFBQWhELEtBQUEsR0FBQTFFLE9BQUE7VUFVTSxNQUFPa0ksaUNBQWtDLFNBQVF4RCxLQUFBLENBQUFDLElBQUk7WUFHMUQsQ0FBQTdCLFVBQVcsR0FBYSxFQUFFO1lBQzFCLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBRUFxQixZQUFZO2NBQUVXLFVBQVUsR0FBRyxFQUFFO2NBQUUsR0FBR3pEO1lBQUksQ0FBRTtjQUN2QyxLQUFLLENBQUM7Z0JBQ0wsR0FBR0EsSUFBSTtnQkFDUHdELE1BQU0sRUFBRSxzQkFBc0I7Z0JBQzlCQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsR0FBR0EsVUFBVTtlQUN6RSxDQUFDO2NBQ0YsSUFBSSxDQUFDLENBQUFoQyxVQUFXLEdBQUdnQyxVQUFVO1lBQzlCOztVQUNBMUQsT0FBQSxDQUFBOEcsaUNBQUEsR0FBQUEsaUNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJELElBQUF4RCxLQUFBLEdBQUExRSxPQUFBO1VBVU0sTUFBTytILHlCQUEwQixTQUFRckQsS0FBQSxDQUFBQyxJQUFJO1lBR2xELENBQUE3QixVQUFXLEdBQWEsRUFBRTtZQUMxQixJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUNBLElBQUlzRixLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQXRGLFVBQVcsQ0FBQ2tCLEdBQUcsQ0FBQzFCLFNBQVMsSUFBSSxJQUFJLENBQUNBLFNBQVMsQ0FBQyxDQUFDc0IsSUFBSSxDQUFDO1lBQy9EO1lBRUEsSUFBSXlFLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQyxDQUFBdkYsVUFBVyxDQUFDb0QsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRTdELFNBQVMsS0FBSzZELEdBQUcsR0FBRyxJQUFJLENBQUM3RCxTQUFTLENBQUMsQ0FBQ2dHLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDcEY7WUFDQW5FLFlBQVk7Y0FBRVcsVUFBVSxHQUFHLEVBQUU7Y0FBRSxHQUFHekQ7WUFBSSxDQUFFO2NBQ3ZDLEtBQUssQ0FBQztnQkFDTCxHQUFHQSxJQUFJO2dCQUNQd0QsTUFBTSxFQUFFLHNCQUFzQjtnQkFDOUJDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBR0EsVUFBVTtlQUNoRCxDQUFDO2NBQ0YsSUFBSSxDQUFDLENBQUFoQyxVQUFXLEdBQUdnQyxVQUFVO1lBQzlCOztVQUNBMUQsT0FBQSxDQUFBMkcseUJBQUEsR0FBQUEseUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENELElBQUFyRCxLQUFBLEdBQUExRSxPQUFBO1VBVU0sTUFBT2lJLG1CQUFvQixTQUFRdkQsS0FBQSxDQUFBQyxJQUFJO1lBRTVDUixZQUFZO2NBQUVXLFVBQVUsR0FBRyxFQUFFO2NBQUUsR0FBR3pEO1lBQUksQ0FBRTtjQUN2QyxLQUFLLENBQUM7Z0JBQ0wsR0FBR0EsSUFBSTtnQkFDUHdELE1BQU0sRUFBRSxzQkFBc0I7Z0JBQzlCQyxVQUFVLEVBQUUsQ0FDWCxRQUFRLEVBQ1IsVUFBVSxFQUNWLFVBQVUsRUFDVixVQUFVLEVBQ1YsV0FBVyxFQUNYLE1BQU0sRUFDTixVQUFVLEVBQ1YsV0FBVyxFQUNYLEdBQUdBLFVBQVU7ZUFFZCxDQUFDO1lBQ0g7O1VBQ0ExRCxPQUFBLENBQUE2RyxtQkFBQSxHQUFBQSxtQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkQsSUFBQTlDLE1BQUEsR0FBQW5GLE9BQUE7VUFDQSxJQUFBd0YsV0FBQSxHQUFBeEYsT0FBQTtVQWdDTSxNQUFPdUksV0FBWSxTQUFRcEQsTUFBQSxDQUFBTyxhQUEwQjtZQUcxRCxDQUFBbkUsVUFBVztZQUNYLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBRUEsQ0FBQTJDLFNBQVU7WUFDVixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBQyxZQUFZRCxTQUFTLEVBQUVzRSxJQUFJO2NBQzFCLEtBQUssQ0FBQztnQkFDTCxHQUFHQSxJQUFJO2dCQUNQMUQsVUFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2VBQzNCLENBQUM7Y0FDRixJQUFJLENBQUMsQ0FBQVosU0FBVSxHQUFHQSxTQUFTO2NBQzNCLElBQUksQ0FBQyxDQUFBM0MsVUFBVyxHQUFHLElBQUlpRSxXQUFBLENBQUFrQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUVjLElBQUksQ0FBQ2pILFVBQVUsQ0FBQztZQUNwRTs7VUFDQUgsT0FBQSxDQUFBbUgsV0FBQSxHQUFBQSxXQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JERCxJQUFBRSxZQUFBLEdBQUF6SSxPQUFBO1VBRU0sTUFBTzJHLFlBQVk7WUFDeEIsQ0FBQTNDLEdBQUksR0FBNkIsSUFBSUMsR0FBRyxFQUFFO1lBQzFDLENBQUF6QyxLQUFNLEdBQWtCLEVBQUU7WUFDMUIsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBMEMsU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBQ0FDLFlBQVlELFNBQVM7Y0FDcEIsSUFBSSxDQUFDLENBQUFBLFNBQVUsR0FBR0EsU0FBUztZQUM1QjtZQUVBOzs7OztZQUtBakQsSUFBSUEsQ0FBQ08sS0FBSyxFQUFFRCxVQUFVO2NBQ3JCLElBQUksQ0FBQyxDQUFBQyxLQUFNLEdBQUdzRSxNQUFNLENBQUNDLElBQUksQ0FBQ3ZFLEtBQUssQ0FBQyxDQUFDd0MsR0FBRyxDQUFDbEMsRUFBRSxJQUFHO2dCQUN6QyxNQUFNa0QsV0FBVyxHQUFHLElBQUl5RCxZQUFBLENBQUFGLFdBQVcsQ0FBQyxJQUFJLENBQUNyRSxTQUFTLEVBQUU7a0JBQUVwQyxFQUFFO2tCQUFFLEdBQUdOLEtBQUssQ0FBQ00sRUFBRTtnQkFBQyxDQUFFLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxDQUFBTixLQUFNLENBQUNnRCxJQUFJLENBQUNRLFdBQVcsQ0FBQztnQkFFN0IsSUFBSSxDQUFDLENBQUFoQixHQUFJLENBQUNPLEdBQUcsQ0FBQ3pDLEVBQUUsRUFBRWtELFdBQVcsQ0FBQztnQkFDOUIsT0FBT0EsV0FBVztjQUNuQixDQUFDLENBQUM7WUFDSDtZQUVBUCxHQUFHQSxDQUFDM0MsRUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFrQyxHQUFJLENBQUNTLEdBQUcsQ0FBQzNDLEVBQUUsQ0FBQztZQUN6QjtZQUNBZCxHQUFHQSxDQUFDYyxFQUFVO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQWtDLEdBQUksQ0FBQ2hELEdBQUcsQ0FBQ2MsRUFBRSxDQUFDO1lBQ3pCOztVQUNBVixPQUFBLENBQUF1RixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7O1VDdkNEOztVQUVBYixNQUFBLENBQUE0QyxjQUFBLENBQUF0SCxPQUFBO1lBQ0F1SCxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDREEsSUFBQXhJLGdCQUFBLEdBQUFILE9BQUE7VUFFQSxJQUFBbUYsTUFBQSxHQUFBbkYsT0FBQTtVQUNBLElBQUE0SSxPQUFBLEdBQUE1SSxPQUFBO1VBQ0EsSUFBQTZJLE1BQUEsR0FBQTdJLE9BQUE7VUFDQSxJQUFBOEksZUFBQSxHQUFBOUksT0FBQTtVQUNBLElBQUErSSxTQUFBLEdBQUEvSSxPQUFBO1VBQ0EsSUFBQWdKLEtBQUEsR0FBQWhKLE9BQUE7VUFSQTs7VUFVTSxNQUFPUSxZQUFhLFNBQVFvSSxPQUFBLENBQUFsRCxhQUEyQjtZQUM1RHVELE9BQU87WUFFUCxDQUFBQyxRQUFTO1lBQ1QsQ0FBQUMsZ0JBQWlCO1lBQ2pCLElBQUlBLGdCQUFnQkEsQ0FBQTtjQUNuQixPQUFPLElBQUksQ0FBQyxDQUFBQSxnQkFBaUI7WUFDOUI7WUFFQSxJQUFJQyxlQUFlQSxDQUFBO2NBQ2xCLE9BQU8sSUFBSSxDQUFDLENBQUFGLFFBQVM7WUFDdEI7WUFDQSxDQUFBRyxPQUFRO1lBQ1IsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFFQSxDQUFBQyxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxJQUFZO2NBQ3BCLElBQUksQ0FBQyxDQUFBQSxJQUFLLEdBQUdBLElBQUk7WUFDbEI7WUFDQSxDQUFBQyxZQUFhO1lBQ2IsSUFBSUEsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFFQSxJQUFJQyxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUgsT0FBUTtZQUNyQjtZQUNBLENBQUF2QyxLQUFNO1lBQ047OztZQUdBLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsQ0FBQTJDLEtBQU0sR0FBK0IsSUFBSVosTUFBQSxDQUFBYSxZQUFZLENBQUNaLGVBQUEsQ0FBQXBILE1BQU0sQ0FBQ2lJLFNBQVMsQ0FBQztZQUN2RSxJQUFJRixLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxFQUFFZCxLQUFLO1lBQzFCO1lBRUEsQ0FBQWlCLE1BQU87WUFDUCxJQUFJdEcsWUFBWUEsQ0FBQTtjQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQXNHLE1BQU8sRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBOUMsS0FBTSxDQUFDeEQsWUFBWSxDQUFDOUIsS0FBSztjQUN4RCxNQUFNMEYsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBSixLQUFNLENBQUN4RCxZQUFZLENBQUM5QixLQUFLLENBQUNvSSxNQUFNLENBQUNwQixJQUFJLElBQzFEQSxJQUFJLENBQUNqRixJQUFJLENBQUMxQixJQUFJLENBQUNnSSxXQUFXLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBRixNQUFPLENBQUNDLFdBQVcsRUFBRSxDQUFDLENBQ2pFO2NBRUQsT0FBTzNDLFFBQVE7WUFDaEI7WUFDQSxJQUFJSSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxLQUFLLENBQUNBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQW1DLEtBQU0sQ0FBQ25DLEtBQUs7WUFDeEM7WUFFQSxDQUFBeUMsS0FBTSxHQUFxQixJQUFJOUYsR0FBRyxFQUFFO1lBQ3BDLENBQUFtRixlQUFnQjtZQUNoQixDQUFBWSxTQUFVLEdBQTBCLElBQUkvRixHQUFHLEVBQUU7WUFDN0MsSUFBSThGLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUFILE1BQU1BLENBQUNBLE1BQU07Y0FDWixJQUFJLENBQUMsQ0FBQUEsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQ0ssWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUM1QjtZQUNBOUYsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBc0YsS0FBTSxDQUFDUyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0QsWUFBWSxDQUFDO2NBQzNDOUosZ0JBQUEsQ0FBQVMsWUFBWSxDQUFDdUosUUFBUSxDQUFDLElBQUksQ0FBQztjQUMzQixJQUFJLENBQUMsQ0FBQXJELEtBQU0sR0FBRyxJQUFJM0IsTUFBQSxDQUFBTSxTQUFTLEVBQUU7Y0FDN0JvQixVQUFVLENBQUN2RyxLQUFLLEdBQUcsSUFBSTtZQUN4QjtZQUNBLE1BQU1XLElBQUlBLENBQUNhLEVBQUU7Y0FDWixJQUFJO2dCQUNILElBQUksQ0FBQ3NJLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixJQUFJLENBQUMsQ0FBQWIsWUFBYSxHQUFHekgsRUFBRTtnQkFFdkIsTUFBTSxJQUFJLENBQUMsQ0FBQWdGLEtBQU0sQ0FBQzdGLElBQUksQ0FBQ2EsRUFBRSxDQUFDO2dCQUMxQitFLFVBQVUsQ0FBQ3dELENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQXZELEtBQU07ZUFDMUIsQ0FBQyxPQUFPd0QsQ0FBQyxFQUFFLEMsQ0FDWCxTQUFTO2dCQUNULEtBQUssQ0FBQ2hELEtBQUssR0FBRyxJQUFJO2dCQUNsQixJQUFJLENBQUM4QyxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQUcsZ0JBQWdCQSxDQUFDQyxNQUFNO2NBQ3RCLElBQUk7Z0JBQ0gsSUFBSSxJQUFJLENBQUMsQ0FBQVIsU0FBVSxDQUFDdkYsR0FBRyxDQUFDK0YsTUFBTSxDQUFDLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQVIsU0FBVSxDQUFDaEosR0FBRyxDQUFDd0osTUFBTSxDQUFDO2dCQUVuRSxJQUFJLENBQUMsQ0FBQXBCLGVBQWdCLEdBQUdMLFNBQUEsQ0FBQTBCLFFBQVEsQ0FBQ3pKLEdBQUcsQ0FBQztrQkFBRXVJLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQUEsWUFBYTtrQkFBRWlCLE1BQU07a0JBQUVFLElBQUksRUFBRTtnQkFBSSxDQUFFLENBQUM7Z0JBQzlGLElBQUksQ0FBQyxDQUFBVixTQUFVLENBQUN6RixHQUFHLENBQUNpRyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUFwQixlQUFnQixDQUFDO2dCQUNsRCxJQUFJLENBQUMsQ0FBQUEsZUFBZ0IsQ0FBQ25JLElBQUksQ0FBQztrQkFBRWEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBeUgsWUFBYTtrQkFBRWlCO2dCQUFNLENBQUUsQ0FBQztnQkFFOUQsSUFBSSxDQUFDUCxZQUFZLEVBQUU7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLENBQUFiLGVBQWdCO2VBQzVCLENBQUMsT0FBT2tCLENBQUMsRUFBRTtnQkFDWEssT0FBTyxDQUFDL0UsS0FBSyxDQUFDMEUsQ0FBQyxDQUFDOztZQUVsQjtZQUdBTSxPQUFPLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3BCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDUixRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTSxJQUFJLENBQUN0RCxLQUFLLENBQUM3RixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFzSSxZQUFhLENBQUM7Z0JBQ3pDLElBQUksQ0FBQ3NCLE9BQU8sQ0FBQyxjQUFjLENBQUM7ZUFDNUIsQ0FBQyxPQUFPUCxDQUFDLEVBQUU7Z0JBQ1hLLE9BQU8sQ0FBQy9FLEtBQUssQ0FBQzBFLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ0YsUUFBUSxHQUFHLEtBQUs7O1lBRXZCLENBQUM7WUFFRFUsYUFBYSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMxQixJQUFJO2dCQUNILE1BQU1DLE9BQU8sR0FBRyxJQUFJL0IsS0FBQSxDQUFBZ0MsY0FBYyxFQUFFO2dCQUVwQyxNQUFNLElBQUksQ0FBQ2xFLEtBQUssQ0FBQzdGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQXNJLFlBQWEsQ0FBQztnQkFDekMxQyxVQUFVLENBQUNvRSxVQUFVLENBQUMsTUFBSztrQkFDMUJGLE9BQU8sQ0FBQ0csT0FBTyxFQUFFO2dCQUNsQixDQUFDLEVBQUUsSUFBSSxDQUFDO2dCQUNSLE9BQU9ILE9BQU87ZUFDZCxDQUFDLE9BQU9ULENBQUMsRUFBRTtnQkFDWEssT0FBTyxDQUFDL0UsS0FBSyxDQUFDMEUsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDRixRQUFRLEdBQUcsS0FBSzs7WUFFdkIsQ0FBQztZQUVEakosS0FBS0EsQ0FBQTtjQUNKaEIsZ0JBQUEsQ0FBQVMsWUFBWSxDQUFDTyxLQUFLLEVBQUU7WUFDckI7WUFFQWdLLGNBQWNBLENBQUNySixFQUFFO2NBQ2hCLElBQUksQ0FBQyxDQUFBcUgsZ0JBQWlCLEdBQUdySCxFQUFFO2NBRTNCLElBQUksQ0FBQ3dILElBQUksR0FBRyxVQUFVO2NBQ3RCLElBQUksQ0FBQ3VCLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7O1VBQ0F6SixPQUFBLENBQUFaLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzSkQsSUFBQTRLLE1BQUEsR0FBQXBMLE9BQUE7VUFPTSxTQUFVcUwsUUFBUUEsQ0FBQztZQUFFL0ssS0FBSztZQUFFbUo7VUFBSyxDQUFFO1lBQ3hDLElBQUluSixLQUFLLENBQUN3RyxLQUFLLENBQUNsQixLQUFLLEVBQUUwRixJQUFJLEtBQUssR0FBRyxFQUFFO2NBQ3BDLE9BQU9GLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEseUJBQW1COztZQUUzQixPQUNDSCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUFILE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWlGLFFBQUEsUUFDQ0osTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxxQkFBZSxDQUNiO1VBRUw7Ozs7Ozs7Ozs7O1VDaEJBOztVQUVBekYsTUFBQSxDQUFBNEMsY0FBQSxDQUFBdEgsT0FBQTtZQUNBdUgsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUE4QyxLQUFBLEdBQUF6TCxPQUFBO1VBQ0EsSUFBQTBMLFFBQUEsR0FBQTFMLE9BQUE7VUFDQSxJQUFBMkwsS0FBQSxHQUFBM0wsT0FBQTtVQUNBLElBQUE0TCxZQUFBLEdBQUE1TCxPQUFBO1VBRU87VUFBVSxTQUFVNkwsY0FBY0EsQ0FBQztZQUFFQztVQUFtQixDQUFFO1lBQ2hFLE1BQU07Y0FBRXJDO1lBQUssQ0FBRSxHQUFHLElBQUFpQyxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBRXZDLElBQUksQ0FBQ0QsbUJBQW1CLEVBQUVFLE1BQU0sQ0FBQ2hHLE1BQU0sRUFBRSxPQUFPLElBQUk7WUFDcEQsTUFBTXJCLElBQUksR0FBR0EsQ0FBQztjQUFFNkQ7WUFBSSxDQUFFLEtBQUk7Y0FDekIsT0FDQ2lELEtBQUEsQ0FBQUYsYUFBQTtnQkFBU1UsU0FBUyxFQUFDO2NBQTBCLEdBQzVDUixLQUFBLENBQUFGLGFBQUEsQ0FBQ0ssWUFBQSxDQUFBTSxvQkFBb0IsUUFDcEJULEtBQUEsQ0FBQUYsYUFBQSxDQUFDSyxZQUFBLENBQUFPLGlCQUFpQixRQUNqQlYsS0FBQSxDQUFBRixhQUFBLGVBQU8vQyxJQUFJLENBQUNwQixJQUFJLENBQVEsQ0FDTCxFQUNwQnFFLEtBQUEsQ0FBQUYsYUFBQSxDQUFDSyxZQUFBLENBQUFRLGtCQUFrQixRQUNsQlgsS0FBQSxDQUFBRixhQUFBO2dCQUFLVSxTQUFTLEVBQUM7Y0FBWSxHQUMxQlIsS0FBQSxDQUFBRixhQUFBLHNCQUFlLEVBRWZFLEtBQUEsQ0FBQUYsYUFBQSxjQUFNL0MsSUFBSSxDQUFDNkQsU0FBUyxDQUFDQyxTQUFTLENBQU8sRUFDckNiLEtBQUEsQ0FBQUYsYUFBQSx1QkFBZ0IsRUFDaEJFLEtBQUEsQ0FBQUYsYUFBQSxjQUFNL0MsSUFBSSxDQUFDNkQsU0FBUyxDQUFDRSxPQUFPLENBQU8sQ0FDOUIsQ0FDYyxDQUNDLENBQ2Q7WUFFWixDQUFDO1lBQ0QsT0FDQ2QsS0FBQSxDQUFBRixhQUFBLENBQUFFLEtBQUEsQ0FBQUQsUUFBQSxRQUNDQyxLQUFBLENBQUFGLGFBQUE7Y0FBU1UsU0FBUyxFQUFDO1lBQW1CLEdBQ3JDUixLQUFBLENBQUFGLGFBQUEsaUJBQ0NFLEtBQUEsQ0FBQUYsYUFBQSxhQUFLOUIsS0FBSyxDQUFDdUMsTUFBTSxDQUFNLENBQ2YsRUFFVFAsS0FBQSxDQUFBRixhQUFBLENBQUNJLEtBQUEsQ0FBQWEsSUFBSTtjQUFDQyxFQUFFLEVBQUMsS0FBSztjQUFDakwsS0FBSyxFQUFFc0ssbUJBQW1CLEVBQUVFLE1BQU07Y0FBRVUsT0FBTyxFQUFFL0g7WUFBSSxFQUFJLENBQzNELENBQ1I7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4Q0EsSUFBQWdJLFdBQUEsR0FBQTNNLE9BQUE7VUFDQSxJQUFBeUwsS0FBQSxHQUFBekwsT0FBQTtVQUNBLElBQUEwTCxRQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQTRNLFdBQUEsR0FBQTVNLE9BQUE7VUFDQSxJQUFBNk0sS0FBQSxHQUFBN00sT0FBQTtVQUNBLElBQUF5SCxPQUFBLEdBQUF6SCxPQUFBO1VBQ0EsSUFBQThNLE9BQUEsR0FBQTlNLE9BQUE7VUFJTztVQUFVLFNBQVUrTSxrQkFBa0JBLENBQUM7WUFBRS9ILFdBQVc7WUFBRWdJLGtCQUFrQjtZQUFFcEYsUUFBUTtZQUFFcUY7VUFBVyxDQUFFO1lBQ3ZHLE1BQU07Y0FBRXhEO1lBQUssQ0FBRSxHQUFHLElBQUFpQyxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBRXZDLE9BQ0NOLEtBQUEsQ0FBQUYsYUFBQSxDQUFBRSxLQUFBLENBQUFELFFBQUEsUUFDQ0MsS0FBQSxDQUFBRixhQUFBO2NBQVNVLFNBQVMsRUFBQztZQUFvQixHQUN0Q1IsS0FBQSxDQUFBRixhQUFBLENBQUN1QixPQUFBLENBQUFJLGNBQWM7Y0FBQ3RGLFFBQVEsRUFBRUEsUUFBUTtjQUFFcUYsV0FBVyxFQUFFQTtZQUFXLEVBQUksRUFDaEV4QixLQUFBLENBQUFGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQWlDLEdBQy9DUixLQUFBLENBQUFGLGFBQUEsYUFBSzlCLEtBQUssQ0FBQ3hILFdBQVcsQ0FBTSxFQUM1QndKLEtBQUEsQ0FBQUYsYUFBQSxZQUFJM0QsUUFBUSxDQUFDM0YsV0FBVyxDQUFLLENBQ3hCLENBQ0csRUFDVndKLEtBQUEsQ0FBQUYsYUFBQTtjQUFLVSxTQUFTLEVBQUM7WUFBZ0QsR0FDOURSLEtBQUEsQ0FBQUYsYUFBQSxDQUFDb0IsV0FBQSxDQUFBUSxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRXhGLFFBQVEsQ0FBQ3hGLElBQUk7Y0FDeEJpTCxPQUFPLEVBQUU7Z0JBQ1JDLFlBQVksRUFBRTdCLEtBQUEsQ0FBQUYsYUFBQSxDQUFDc0IsS0FBQSxDQUFBVSxRQUFRO2tCQUFDL0UsSUFBSSxFQUFFWixRQUFRO2tCQUFFNUMsV0FBVyxFQUFFQSxXQUFXO2tCQUFFNEMsUUFBUSxFQUFFQTtnQkFBUSxFQUFJO2dCQUN4RixnQkFBZ0IsRUFBRTZELEtBQUEsQ0FBQUYsYUFBQSxDQUFDc0IsS0FBQSxDQUFBVSxRQUFRO2tCQUFDL0UsSUFBSSxFQUFFWixRQUFRO2tCQUFFNUMsV0FBVyxFQUFFQSxXQUFXO2tCQUFFNEMsUUFBUSxFQUFFQTtnQkFBUSxFQUFJO2dCQUM1RixnQkFBZ0IsRUFBRTZELEtBQUEsQ0FBQUYsYUFBQSxDQUFDc0IsS0FBQSxDQUFBVSxRQUFRO2tCQUFDL0UsSUFBSSxFQUFFWixRQUFRO2tCQUFFNUMsV0FBVyxFQUFFQSxXQUFXO2tCQUFFNEMsUUFBUSxFQUFFQTtnQkFBUSxFQUFJO2dCQUM1RjRGLE1BQU0sRUFBRS9CLEtBQUEsQ0FBQUYsYUFBQSxDQUFDc0IsS0FBQSxDQUFBVSxRQUFRO2tCQUFDL0UsSUFBSSxFQUFFWixRQUFRO2tCQUFFNUMsV0FBVyxFQUFFQSxXQUFXO2tCQUFFNEMsUUFBUSxFQUFFQTtnQkFBUSxFQUFJO2dCQUNsRixpQkFBaUIsRUFBRTZELEtBQUEsQ0FBQUYsYUFBQSxDQUFDcUIsV0FBQSxDQUFBYSxrQkFBa0I7a0JBQUNqRixJQUFJLEVBQUVaO2dCQUFRLEVBQUk7Z0JBQ3pEOEYsVUFBVSxFQUFFakMsS0FBQSxDQUFBRixhQUFBLENBQUNxQixXQUFBLENBQUFhLGtCQUFrQjtrQkFBQ2pGLElBQUksRUFBRVo7Z0JBQVEsRUFBSTtnQkFDbERFLE1BQU0sRUFBRTJELEtBQUEsQ0FBQUYsYUFBQSxDQUFDOUQsT0FBQSxDQUFBa0csY0FBYztrQkFBQ25GLElBQUksRUFBRVo7Z0JBQVE7O1lBQ3RDLEVBQ0EsQ0FDRyxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENBLElBQUErRSxXQUFBLEdBQUEzTSxPQUFBO1VBQ0EsSUFBQXlMLEtBQUEsR0FBQXpMLE9BQUE7VUFDQSxJQUFBMEwsUUFBQSxHQUFBMUwsT0FBQTtVQUVBLElBQUE0TixNQUFBLEdBQUE1TixPQUFBO1VBQ0EsSUFBQTZOLE1BQUEsR0FBQTdOLE9BQUE7VUFDQSxJQUFBOE4sTUFBQSxHQUFBOU4sT0FBQTtVQUNBLElBQUErTixRQUFBLEdBQUEvTixPQUFBO1VBQ0EsSUFBQWdPLFdBQUEsR0FBQWhPLE9BQUE7VUFFTztVQUFVLFNBQVVpTyxjQUFjQSxDQUFDO1lBQUV6RjtVQUFJLENBQUU7WUFDakQsTUFBTTtjQUFFbEksS0FBSztjQUFFbUosS0FBSztjQUFFeUU7WUFBYSxDQUFFLEdBQUcsSUFBQXhDLFFBQUEsQ0FBQUssbUJBQW1CLEdBQUU7WUFDN0QsTUFBTTtjQUFFN0MsUUFBUTtjQUFFaUYsVUFBVTtjQUFFM0U7WUFBVSxDQUFFLEdBQUdoQixJQUFJO1lBQ2pELE1BQU07Y0FBRXhEO1lBQVcsQ0FBRSxHQUFHd0QsSUFBSTtZQUM1QixNQUFNK0QsT0FBTyxHQUFHdkgsV0FBVyxDQUFDekIsSUFBSTtZQUNoQyxNQUFNLENBQUNxRSxRQUFRLEVBQUVxRixXQUFXLENBQUMsR0FBR3hCLEtBQUssQ0FBQzJDLFFBQVEsQ0FBQ2xGLFFBQVEsQ0FBQzNILFVBQVUsQ0FBQ1AsR0FBRyxDQUFDbU4sVUFBVSxDQUFDLENBQUM7WUFDbkYsTUFBTSxDQUFDL0QsUUFBUSxFQUFFaUUsV0FBVyxDQUFDLEdBQUc1QyxLQUFLLENBQUMyQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQzlHLEtBQUssRUFBRWdILFFBQVEsQ0FBQyxHQUFHN0MsS0FBSyxDQUFDMkMsUUFBUSxDQUFDbEYsUUFBUSxDQUFDNUIsS0FBSyxDQUFDO1lBRXhELElBQUF3RyxNQUFBLENBQUFTLFNBQVMsRUFBQyxDQUFDckYsUUFBUSxDQUFDLEVBQUUsTUFBSztjQUMxQm9GLFFBQVEsQ0FBQ3BGLFFBQVEsQ0FBQzVCLEtBQUssQ0FBQztjQUN4QixJQUFJNEIsUUFBUSxDQUFDNUIsS0FBSyxFQUFFO2dCQUNuQjJGLFdBQVcsQ0FBQy9ELFFBQVEsQ0FBQzNILFVBQVUsQ0FBQ1AsR0FBRyxDQUFDbU4sVUFBVSxDQUFDLENBQUM7O1lBRWxELENBQUMsQ0FBQztZQUVGLE1BQU1LLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCSCxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCL04sS0FBSyxDQUFDd0ssYUFBYSxFQUFFLENBQUMyRCxPQUFPLENBQUMsTUFBTUosV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hELENBQUM7WUFFRCxNQUFNSyxHQUFHLEdBQUcsc0JBQXNCdEUsUUFBUSxHQUFHLGNBQWMsR0FBRyxFQUFFLEVBQUU7WUFFbEUsTUFBTXVFLE9BQU8sR0FBaUJDLEtBQUssSUFBRztjQUNyQ0EsS0FBSyxDQUFDQyxjQUFjLEVBQUU7Y0FFdEJYLGFBQWEsQ0FBQztnQkFDYnZOLElBQUksRUFBRSxJQUFJO2dCQUNWMkksSUFBSSxFQUFFLFNBQVM7Z0JBQ2ZqSSxJQUFJLEVBQUUyRDtlQUNOLENBQUM7Y0FFRixPQUFPLEtBQUs7WUFDYixDQUFDO1lBQ0Q7WUFDQSxNQUFNOEosVUFBVSxHQUF3RCxDQUN2RSxDQUFDckYsS0FBSyxDQUFDcUYsVUFBVSxDQUFDdEYsVUFBVSxFQUFFbUYsT0FBTyxFQUFFSSxTQUFTLENBQUMsRUFDakQsQ0FBQ3RGLEtBQUssQ0FBQ3FGLFVBQVUsQ0FBQ2xILFFBQVEsQ0FBQyxDQUMzQjtZQUVELE9BQ0M2RCxLQUFBLENBQUFGLGFBQUE7Y0FBS1UsU0FBUyxFQUFFeUM7WUFBRyxHQUNsQmpELEtBQUEsQ0FBQUYsYUFBQTtjQUFRVSxTQUFTLEVBQUM7WUFBOEMsR0FDL0RSLEtBQUEsQ0FBQUYsYUFBQTtjQUFTVSxTQUFTLEVBQUM7WUFBK0MsR0FDakVSLEtBQUEsQ0FBQUYsYUFBQSxjQUNDRSxLQUFBLENBQUFGLGFBQUEsYUFBS2dCLE9BQU8sQ0FBQzFLLElBQUksQ0FBTSxFQUN2QjRKLEtBQUEsQ0FBQUYsYUFBQSxDQUFDeUMsV0FBQSxDQUFBZ0IsVUFBVTtjQUFDL0MsU0FBUyxFQUFDLG1CQUFtQjtjQUFDekssS0FBSyxFQUFFc047WUFBVSxFQUFJLENBQzFELEVBRU5yRCxLQUFBLENBQUFGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQW1DLEdBQ2pEUixLQUFBLENBQUFGLGFBQUEsQ0FBQ3NDLE1BQUEsQ0FBQW9CLFVBQVU7Y0FBQ3JMLElBQUksRUFBQyxTQUFTO2NBQUNxSSxTQUFTLEVBQUMsUUFBUTtjQUFDMEMsT0FBTyxFQUFFSDtZQUFTLEVBQUksRUFDcEUvQyxLQUFBLENBQUFGLGFBQUEsQ0FBQ3FDLE1BQU0sQ0FBQ3NCLFdBQVcsT0FBRyxDQUNqQixDQUNHLENBQ0YsRUFDVHpELEtBQUEsQ0FBQUYsYUFBQSxDQUFDb0IsV0FBQSxDQUFBUSxvQkFBb0I7Y0FDcEJnQyxPQUFPO2NBQ1AvQixTQUFTLEVBQUUsQ0FBQyxDQUFDOUYsS0FBSyxJQUFJLENBQUMsQ0FBQ00sUUFBUTtjQUNoQ3lGLE9BQU8sRUFBRTtnQkFDUitCLElBQUksRUFDSDNELEtBQUEsQ0FBQUYsYUFBQSxDQUFDd0MsUUFBQSxDQUFBaEIsa0JBQWtCO2tCQUNsQkMsa0JBQWtCLEVBQUV4RSxJQUFJLENBQUNaLFFBQVE7a0JBQ2pDQSxRQUFRLEVBQUVBLFFBQVE7a0JBQ2xCcUYsV0FBVyxFQUFFQSxXQUFXO2tCQUN4QmpJLFdBQVcsRUFBRUE7Z0JBQVcsRUFFekI7Z0JBQ0RxSyxLQUFLLEVBQUU1RCxLQUFBLENBQUFGLGFBQUEsQ0FBQ29CLFdBQUEsQ0FBQTJDLE9BQU87a0JBQUNDLE1BQU07Z0JBQUE7O1lBQ3RCLEVBQ0EsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pGQSxJQUFBOUQsS0FBQSxHQUFBekwsT0FBQTtVQUVBLElBQUEyTSxXQUFBLEdBQUEzTSxPQUFBO1VBQ0EsSUFBQTROLE1BQUEsR0FBQTVOLE9BQUE7VUFLTztVQUFVLFNBQVV3UCxtQkFBbUJBLENBQUM7WUFBRWhIO1VBQUksQ0FBRTtZQUN0RCxNQUFNO2NBQUV4RDtZQUFXLENBQUUsR0FBR3dELElBQUk7WUFDNUIsTUFBTStELE9BQU8sR0FBR3ZILFdBQVcsQ0FBQ3pCLElBQUk7WUFFaEMsT0FDQ2tJLEtBQUEsQ0FBQUYsYUFBQSxDQUFBRSxLQUFBLENBQUFELFFBQUEsUUFDQ0MsS0FBQSxDQUFBRixhQUFBO2NBQVFVLFNBQVMsRUFBQztZQUEwQixHQUMzQ1IsS0FBQSxDQUFBRixhQUFBO2NBQVNVLFNBQVMsRUFBQztZQUErQyxHQUNqRVIsS0FBQSxDQUFBRixhQUFBLGFBQUtnQixPQUFPLENBQUMxSyxJQUFJLENBQU0sRUFDdkI0SixLQUFBLENBQUFGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQW1DLEdBQ2pEUixLQUFBLENBQUFGLGFBQUEsQ0FBQ3FDLE1BQU0sQ0FBQ3NCLFdBQVcsT0FBRyxDQUNqQixDQUNHLENBQ0YsRUFDVHpELEtBQUEsQ0FBQUYsYUFBQSxDQUFDb0IsV0FBQSxDQUFBMkMsT0FBTztjQUFDQyxNQUFNO1lBQUEsRUFBRyxDQUNoQjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQSxJQUFBbkUsTUFBQSxHQUFBcEwsT0FBQTtVQUNBLElBQUF5UCxTQUFBLEdBQUF6UCxPQUFBO1VBRU0sU0FBVXlOLGtCQUFrQkEsQ0FBQztZQUFFakY7VUFBSSxDQUFFO1lBQzFDLE9BQ0M0QyxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLGNBQ0NILE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ2tFLFNBQUEsQ0FBQUMsb0JBQW9CO2NBQUNsSCxJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUMvQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RBLElBQUE0QyxNQUFBLEdBQUFwTCxPQUFBO1VBRUEsSUFBQTJQLGNBQUEsR0FBQTNQLE9BQUE7VUFDQSxJQUFBMEwsUUFBQSxHQUFBMUwsT0FBQTtVQUNBLElBQUE0UCxNQUFBLEdBQUE1UCxPQUFBO1VBQ0EsSUFBQTZQLFVBQUEsR0FBQTdQLE9BQUE7VUFDQSxJQUFBOFAsS0FBQSxHQUFBOVAsT0FBQTtVQUNBLElBQUErUCxhQUFBLEdBQUEvUCxPQUFBO1VBTkE7O1VBT00sU0FBVXVOLFFBQVFBLENBQUM7WUFBRS9FLElBQUk7WUFBRXhELFdBQVc7WUFBRTRDO1VBQVEsQ0FBRTtZQUN2RCxNQUFNO2NBQUU2QjtZQUFLLENBQUUsR0FBRyxJQUFBaUMsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUN2QyxNQUFNaUUsU0FBUyxHQUFHdkcsS0FBSyxDQUFDaUIsSUFBSTtZQUM1QixJQUFJLENBQUNsQyxJQUFJLENBQUN5SCxTQUFTLEVBQUVuTyxFQUFFLEVBQUUsT0FBT3NKLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ3FFLE1BQUEsQ0FBQU0sYUFBYSxPQUFHO1lBRWpELE1BQU1DLE1BQU0sR0FBRzNILElBQUksQ0FBQ3lILFNBQVMsQ0FBQ25PLEVBQUU7WUFDaEMsTUFBTWdLLG1CQUFtQixHQUFHOUcsV0FBVyxDQUFDekQsVUFBVSxDQUFDUCxHQUFHLENBQUM0RyxRQUFRLENBQUM5RixFQUFFLENBQUM7WUFDbkUsT0FDQ3NKLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQWdCLEdBQzdCekQsSUFBSSxFQUFFbkgsSUFBSSxFQUFFbUMsUUFBUSxFQUFFUixTQUFTLElBQy9Cb0ksTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFBSCxNQUFBLENBQUE3RSxPQUFBLENBQUFpRixRQUFBLFFBQ0NKLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsYUFBS3lFLFNBQVMsQ0FBQ2hOLFNBQVMsQ0FBTSxFQUM5Qm9JLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsWUFBSS9DLElBQUksQ0FBQ25ILElBQUksQ0FBQ21DLFFBQVEsRUFBRVIsU0FBUyxDQUFLLENBRXZDLEVBQ0RvSSxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUN1RSxLQUFBLENBQUFNLGFBQWE7Y0FBQ2IsTUFBTSxFQUFFO1lBQUMsR0FDdkJuRSxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUN1RSxLQUFBLENBQUFPLElBQUk7Y0FBQ3BFLFNBQVMsRUFBQztZQUFjLEdBQzdCYixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUN1RSxLQUFBLENBQUFRLEdBQUcsUUFDSGxGLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsYUFBS3lFLFNBQVMsQ0FBQzdOLEtBQUssQ0FBTSxDQUNyQixFQUNMMkosbUJBQW1CLEVBQUVFLE1BQU0sQ0FBQ2hHLE1BQU0sR0FBR29GLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ3VFLEtBQUEsQ0FBQVEsR0FBRztjQUFDckUsU0FBUyxFQUFDO1lBQVksR0FBRXhDLEtBQUssQ0FBQ3VDLE1BQU0sQ0FBTyxHQUFHLElBQUksQ0FDdkYsRUFDUFosTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDdUUsS0FBQSxDQUFBUyxLQUFLLFFBQ0xuRixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNvRSxjQUFBLENBQUFhLG1CQUFtQjtjQUFDMU8sRUFBRSxFQUFFcU8sTUFBTTtjQUFFTSxLQUFLLEVBQUVaLFVBQUEsQ0FBQWEsU0FBUztjQUFFOU0sSUFBSSxFQUFDO1lBQThCLEdBQ3JGd0gsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDb0UsY0FBQSxDQUFBZ0IsZUFBZSxPQUFHLENBQ0UsRUFFdEJ2RixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUN3RSxhQUFBLENBQUFhLFdBQVc7Y0FBQzVFLE1BQU0sRUFBRUYsbUJBQW1CLEVBQUVFLE1BQU07Y0FBRXpJLElBQUksRUFBRXlCLFdBQVcsQ0FBQ3pCO1lBQUksRUFBSSxDQUNyRSxDQUNPLENBQ1g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4Q0EsSUFBQTZILE1BQUEsR0FBQXBMLE9BQUE7VUFFQSxJQUFBNlEsU0FBQSxHQUFBN1EsT0FBQTtVQUNBLElBQUEwTCxRQUFBLEdBQUExTCxPQUFBO1VBQ00sU0FBVThRLG9CQUFvQkEsQ0FBQTtZQUNuQyxNQUFNO2NBQUV4UTtZQUFLLENBQUUsR0FBRyxJQUFBb0wsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUV2QyxPQUFPWCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNzRixTQUFBLENBQUFFLFFBQVE7Y0FBQ0MsT0FBTyxFQUFFMVEsS0FBSyxDQUFDb04sVUFBVSxDQUFDdUQ7WUFBb0IsRUFBSTtVQUNwRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQSxJQUFBckIsTUFBQSxHQUFBNVAsT0FBQTtVQUNBLElBQUFvTCxNQUFBLEdBQUFwTCxPQUFBO1VBQ0EsSUFBQTBMLFFBQUEsR0FBQTFMLE9BQUE7VUFFTSxTQUFVMFEsU0FBU0EsQ0FBQTtZQUN4QixNQUFNO2NBQ0xqSCxLQUFLLEVBQUU7Z0JBQ05pQixJQUFJLEVBQUU7a0JBQUUrRixLQUFLLEVBQUVoSDtnQkFBSztjQUFFLENBQ3RCO2NBQ0RuSjtZQUFLLENBQ0wsR0FBRyxJQUFBb0wsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUV6QixJQUFJLENBQUN6TCxLQUFLLEVBQUV3RyxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBRTlCLE1BQU07Y0FBRTNFLEtBQUs7Y0FBRUY7WUFBVyxDQUFFLEdBQUd3SCxLQUFLO1lBRXBDLE9BQ0MyQixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUFZLEdBQzFCYixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNxRSxNQUFBLENBQUFzQixLQUFLO2NBQUN0TixJQUFJLEVBQUMsTUFBTTtjQUFDcUksU0FBUyxFQUFDO1lBQUUsR0FDOUJiLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsYUFBS3BKLEtBQUssQ0FBTSxFQUNoQmlKLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsZUFBT3RKLFdBQVcsQ0FBUSxDQUNuQixDQUNIO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUFrUCxHQUFBLEdBQUFuUixPQUFBO1VBQ0EsSUFBQW9MLE1BQUEsR0FBQXBMLE9BQUE7VUFDQSxJQUFBMEwsUUFBQSxHQUFBMUwsT0FBQTtVQUNNLFNBQVVrUSxhQUFhQSxDQUFDO1lBQUVrQjtVQUFPLENBQXdCO1lBQzlELE1BQU07Y0FBRTNIO1lBQUssQ0FBRSxHQUFHLElBQUFpQyxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBQ3ZDcUYsT0FBTyxHQUFHQSxPQUFPLElBQUkzSCxLQUFLLENBQUNsSSxVQUFVLENBQUNrUCxLQUFLO1lBQzNDLE9BQU9yRixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUM0RixHQUFBLENBQUFFLFNBQVM7Y0FBQ3pOLElBQUksRUFBQyxNQUFNO2NBQUN3RCxJQUFJLEVBQUVnSyxPQUFPO2NBQUVuRixTQUFTLEVBQUM7WUFBMEIsRUFBRztVQUNyRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQQSxJQUFBYixNQUFBLEdBQUFwTCxPQUFBO1VBRU0sU0FBVXNSLGVBQWVBLENBQUM7WUFBRTlJO1VBQUksQ0FBRTtZQUN2QyxPQUFPNEMsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxjQUFNL0MsSUFBSSxDQUFDdkcsV0FBVyxDQUFPO1VBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFtSixNQUFBLEdBQUFwTCxPQUFBO1VBQ0EsSUFBQTBMLFFBQUEsR0FBQTFMLE9BQUE7VUFDTSxTQUFVdVIsUUFBUUEsQ0FBQztZQUFFL0k7VUFBSSxDQUFFO1lBQ2hDLE1BQU07Y0FBRWlCO1lBQUssQ0FBRSxHQUFHLElBQUFpQyxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBQ3ZDLElBQUksQ0FBQ3ZELElBQUksQ0FBQ25ILElBQUksRUFBRSxPQUFPLElBQUk7WUFFM0IsTUFBTTtjQUNMbVEsUUFBUSxFQUFFO2dCQUFFQyxLQUFLO2dCQUFFQztjQUFPO1lBQUUsQ0FDNUIsR0FBR2xKLElBQUksQ0FBQ25ILElBQUk7WUFDYixPQUNDK0osTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQTtjQUFTVSxTQUFTLEVBQUM7WUFBZ0UsR0FDbEZiLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsY0FDRTlCLEtBQUssQ0FBQ2dJLEtBQUssRSxNQUFJQSxLQUFLLEUsT0FBS2hJLEtBQUssQ0FBQ2lJLE9BQU8sRSxNQUFJQSxPQUFPLENBQzdDLENBQ0c7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQTVELE1BQUEsR0FBQTlOLE9BQUE7VUFDQSxJQUFBb0wsTUFBQSxHQUFBcEwsT0FBQTtVQUNBLElBQUEwTCxRQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQTRQLE1BQUEsR0FBQTVQLE9BQUE7VUFFQSxJQUFBMlIsVUFBQSxHQUFBM1IsT0FBQTtVQUVBLElBQUE4UCxLQUFBLEdBQUE5UCxPQUFBO1VBQ087VUFBVyxNQUFNMFAsb0JBQW9CLEdBQThCQSxDQUFDO1lBQUVsSDtVQUFJLENBQUUsS0FBSTtZQUN0RixNQUFNO2NBQUVsSSxLQUFLO2NBQUVtSjtZQUFLLENBQUUsR0FBRyxJQUFBaUMsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUU5QyxNQUFNLENBQUN5RixRQUFRLEVBQUVJLFdBQVcsQ0FBQyxHQUFHeEcsTUFBQSxDQUFBN0UsT0FBSyxDQUFDNkgsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNsRCxJQUFBTixNQUFBLENBQUFTLFNBQVMsRUFBQyxDQUFDak8sS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QnNSLFdBQVcsQ0FBQztnQkFBRSxHQUFHcEosSUFBSSxDQUFDZ0o7Y0FBUSxDQUFFLENBQUM7WUFDbEMsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDaEosSUFBSSxDQUFDbkgsSUFBSSxFQUFFO2NBQ2YsT0FBTytKLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ3FFLE1BQUEsQ0FBQU0sYUFBYTtnQkFBQ2tCLE9BQU8sRUFBRTNILEtBQUssQ0FBQ2xJLFVBQVUsQ0FBQ2tQO2NBQUssRUFBSTs7WUFFMUQsTUFBTTtjQUNMZSxRQUFRLEVBQUU7Z0JBQUVDLEtBQUs7Z0JBQUVDO2NBQU87WUFBRSxDQUM1QixHQUFHbEosSUFBSSxDQUFDbkgsSUFBSTtZQUNiLE9BQ0MrSixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUFILE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWlGLFFBQUEsUUFDQ0osTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDdUUsS0FBQSxDQUFBTSxhQUFhO2NBQUNiLE1BQU0sRUFBRTtZQUFDLEdBQ3ZCbkUsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDdUUsS0FBQSxDQUFBTyxJQUFJLFFBQ0pqRixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUN1RSxLQUFBLENBQUFRLEdBQUcsUUFDSGxGLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsYUFDRTlCLEtBQUssQ0FBQ2dJLEtBQUssRSxNQUFJQSxLQUFLLEUsT0FBS2hJLEtBQUssQ0FBQ2lJLE9BQU8sRSxNQUFJQSxPQUFPLENBQzlDLENBQ0EsQ0FDQSxFQUNQdEcsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDdUUsS0FBQSxDQUFBUyxLQUFLLFFBQ0xuRixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNvRyxVQUFBLENBQUFFLG1CQUFtQjtjQUFDckosSUFBSSxFQUFFQSxJQUFJO2NBQUVzSixXQUFXLEVBQUU7WUFBSSxFQUFJLENBQy9DLENBQ08sQ0FDZDtVQUVMLENBQUM7VUFBQzFRLE9BQUEsQ0FBQXNPLG9CQUFBLEdBQUFBLG9CQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RDRixJQUFBdEUsTUFBQSxHQUFBcEwsT0FBQTtVQUNNLFNBQVUrUixVQUFVQSxDQUFDO1lBQUVDLE1BQU07WUFBRUMsQ0FBQztZQUFFNVEsSUFBSTtZQUFFeVEsV0FBVztZQUFFSTtVQUFRLENBQUU7WUFDcEUsSUFBSXhELEdBQUcsR0FBRyxjQUFjck4sSUFBSSxDQUFDOFEsTUFBTSxLQUFLRixDQUFDLEdBQUcsbUJBQW1CLEdBQUcsRUFBRSxHQUFHO1lBRXZFLElBQUk1USxJQUFJLENBQUM4USxNQUFNLEtBQUtGLENBQUMsRUFBRXZELEdBQUcsSUFBSSxTQUFTck4sSUFBSSxDQUFDK1EsUUFBUSxHQUFHLGtCQUFrQixHQUFHLGdCQUFnQixFQUFFO1lBQzlGLElBQUlOLFdBQVcsSUFBSUcsQ0FBQyxLQUFLQyxRQUFRLENBQUNHLGFBQWEsRUFBRTNELEdBQUcsSUFBSSxrQkFBa0I7WUFFMUUsT0FDQ3RELE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBSytHLEdBQUcsRUFBRU4sTUFBTTtjQUFFL0YsU0FBUyxFQUFFeUM7WUFBRyxHQUMvQnRELE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsZUFBT3lHLE1BQU0sQ0FBUSxDQUNoQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBLElBQUE1RyxNQUFBLEdBQUFwTCxPQUFBO1VBRUEsSUFBQXVTLE9BQUEsR0FBQXZTLE9BQUE7VUFHTztVQUFXLE1BQU02UixtQkFBbUIsR0FBOEJBLENBQUM7WUFBRXJKLElBQUk7WUFBRXNKO1VBQVcsQ0FBRSxLQUFJO1lBQ2xHLE1BQU07Y0FBRXpRO1lBQUksQ0FBRSxHQUFHbUgsSUFBSTtZQUVyQixNQUFNZ0ssU0FBUyxHQUFHblIsSUFBSSxDQUFDbVIsU0FBUyxJQUFJLEVBQUU7WUFDdEMsTUFBTUMsTUFBTSxHQUFHakssSUFBSSxDQUFDa0YsVUFBVSxDQUFDZ0YsU0FBUyxDQUFDMU8sR0FBRyxDQUFDLENBQUNrTyxRQUFRLEVBQUVTLEtBQUssS0FBSTtjQUNoRSxNQUFNdFIsSUFBSSxHQUFHLENBQUNtUixTQUFTLElBQUlBLFNBQVMsQ0FBQ0csS0FBSyxDQUFDLEtBQUssRUFBRTtjQUNsRCxNQUFNdEYsT0FBTyxHQUFHNkUsUUFBUSxDQUFDN0UsT0FBTyxDQUFDckosR0FBRyxDQUFDLENBQUNnTyxNQUFNLEVBQUVDLENBQUMsS0FBSTtnQkFDbEQsTUFBTVcsS0FBSyxHQUFHO2tCQUFFWCxDQUFDO2tCQUFFNVEsSUFBSTtrQkFBRTZRLFFBQVE7a0JBQUVGLE1BQU07a0JBQUVGO2dCQUFXLENBQUU7Z0JBQ3hELE9BQU8xRyxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNnSCxPQUFBLENBQUFSLFVBQVU7a0JBQUNPLEdBQUcsRUFBRSxZQUFZTCxDQUFDLFdBQVdVLEtBQUssRUFBRTtrQkFBQSxHQUFNQztnQkFBSyxFQUFJO2NBQ3ZFLENBQUMsQ0FBQztjQUVGLE9BQ0N4SCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2dCQUFLK0csR0FBRyxFQUFFSixRQUFRLENBQUNBLFFBQVE7Z0JBQUVqRyxTQUFTLEVBQUM7Y0FBOEMsR0FDcEZiLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Z0JBQUlVLFNBQVMsRUFBQztjQUFnQixHQUFFaUcsUUFBUSxDQUFDQSxRQUFRLENBQU0sRUFDdEQ3RSxPQUFPLENBQ0g7WUFFUixDQUFDLENBQUM7WUFDRixPQUFPakMsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFBSCxNQUFBLENBQUE3RSxPQUFBLENBQUFpRixRQUFBLFFBQUdpSCxNQUFNLENBQUk7VUFDckIsQ0FBQztVQUFDclIsT0FBQSxDQUFBeVEsbUJBQUEsR0FBQUEsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJGLElBQUF6RyxNQUFBLEdBQUFwTCxPQUFBO1VBRUEsSUFBQXFGLE9BQUEsR0FBQXJGLE9BQUE7VUFDQSxJQUFBMkwsS0FBQSxHQUFBM0wsT0FBQTtVQUNBLElBQUEwTCxRQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQTRQLE1BQUEsR0FBQTVQLE9BQUE7VUFDQSxJQUFBMEUsS0FBQSxHQUFBMUUsT0FBQTtVQUNNLFNBQVUyTixjQUFjQSxDQUFDO1lBQUVuRjtVQUFJLENBQUU7WUFDdEMsTUFBTTtjQUFFaUIsS0FBSztjQUFFbko7WUFBSyxDQUFFLEdBQUcsSUFBQW9MLFFBQUEsQ0FBQUssbUJBQW1CLEdBQUU7WUFFOUMsSUFBSSxDQUFDdkQsSUFBSSxDQUFDbkgsSUFBSSxFQUFFLE9BQU8rSixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNxRSxNQUFBLENBQUFNLGFBQWE7Y0FBQ2tCLE9BQU8sRUFBRTNILEtBQUssQ0FBQ2xJLFVBQVUsQ0FBQ2tQO1lBQUssRUFBSTtZQUV6RSxNQUFNb0MsUUFBUSxHQUFHL00sTUFBTSxDQUFDQyxJQUFJLENBQUN5QyxJQUFJLENBQUNuSCxJQUFJLENBQUMsQ0FBQzJDLEdBQUcsQ0FBQ3NPLEdBQUcsSUFBSTlKLElBQUksQ0FBQ25ILElBQUksQ0FBQ2lSLEdBQUcsQ0FBQyxDQUFDO1lBRWxFLE1BQU1RLFFBQVEsR0FBRyxHQUFHek4sT0FBQSxDQUFBa0IsT0FBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxnQkFBZ0JwRyxLQUFLLENBQUN3RyxLQUFLLENBQUNoRixFQUFFLGVBQWUwRyxJQUFJLENBQUMxRyxFQUFFLGFBQWEwRyxJQUFJLENBQUMxRyxFQUFFLFFBQVE7WUFFOUgsT0FDQ3NKLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQXdCLEdBQ3RDYixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQUdVLFNBQVMsRUFBQztZQUFJLEdBQUV4QyxLQUFLLENBQUNzSixXQUFXLENBQUNDLFFBQVEsQ0FBSyxFQUVsRDVILE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQXdELEdBQ3RFYixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLGFBQUs5QixLQUFLLENBQUN3SixZQUFZLENBQU0sRUFDN0I3SCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUFjLEdBQzVCYixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQU8ySCxRQUFRO2NBQUNDLE9BQU8sRUFBQztZQUFVLEdBQ2pDL0gsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQTtjQUFRNkgsR0FBRyxFQUFFTjtZQUFRLEVBQUksRSxtREFFbEIsQ0FDSCxDQUNELEVBR04xSCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNJLEtBQUEsQ0FBQWEsSUFBSTtjQUFDNkcsU0FBUyxFQUFDLEtBQUs7Y0FBQ3BILFNBQVMsRUFBQywwQkFBMEI7Y0FBQ3pLLEtBQUssRUFBRXFSLFFBQVE7Y0FBRW5HLE9BQU8sRUFBRWhJLEtBQUEsQ0FBQTRPO1lBQVUsRUFBSSxDQUM5RjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQSxJQUFBbEksTUFBQSxHQUFBcEwsT0FBQTtVQUNBLElBQUEwTCxRQUFBLEdBQUExTCxPQUFBO1VBRU8sTUFBTXNULFVBQVUsR0FBR0EsQ0FBQztZQUFFOUs7VUFBSSxDQUFFLEtBQUk7WUFDdEMsTUFBTTtjQUFFaUI7WUFBSyxDQUFFLEdBQUcsSUFBQWlDLFFBQUEsQ0FBQUssbUJBQW1CLEdBQUU7WUFFdkMsT0FDQ1gsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQTtjQUFLVSxTQUFTLEVBQUMsdUJBQXVCO2NBQUNxRyxHQUFHLEVBQUUsR0FBRzlKLElBQUksQ0FBQzFHLEVBQUUsSUFBSTBHLElBQUksQ0FBQzNHLElBQUk7WUFBRSxHQUNwRXVKLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsY0FDQ0gsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxhQUNFL0MsSUFBSSxDQUFDNUUsSUFBSSxFLEtBQUc0RSxJQUFJLENBQUMzRyxJQUFJLENBQ2xCLENBQ0EsRUFDTnVKLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsY0FDQ0gsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxlQUFPL0MsSUFBSSxDQUFDK0ssUUFBUSxDQUFRLENBQ3ZCLENBQ0Q7VUFFUixDQUFDO1VBQUNuUyxPQUFBLENBQUFrUyxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJGLElBQUFsSSxNQUFBLEdBQUFwTCxPQUFBO1VBQ0EsSUFBQXdULFNBQUEsR0FBQXhULE9BQUE7VUFDQSxJQUFBeVQsT0FBQSxHQUFBelQsT0FBQTtVQUNBLElBQUEwTCxRQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQTBFLEtBQUEsR0FBQTFFLE9BQUE7VUFFTSxTQUFVa04sY0FBY0EsQ0FBQztZQUFFdEYsUUFBUTtZQUFFcUY7VUFBVyxDQUFFO1lBQ3ZELE1BQU07Y0FBRTNNO1lBQUssQ0FBRSxHQUFHLElBQUFvTCxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBRXZDLE1BQU0sQ0FBQzJILFFBQVEsQ0FBQyxHQUFHdEksTUFBQSxDQUFBN0UsT0FBSyxDQUFDNkgsUUFBUSxDQUFTeEcsUUFBUSxDQUFDOUYsRUFBRSxDQUFDO1lBRXRELE1BQU1OLEtBQUssR0FBR2xCLEtBQUssQ0FBQ3dHLEtBQUssQ0FBQ3ZGLFVBQVUsQ0FBQ0MsS0FBSyxDQUN4Q29JLE1BQU0sQ0FBQ2hDLFFBQVEsSUFBSUEsUUFBUSxDQUFDOUYsRUFBRSxLQUFLNFIsUUFBUSxDQUFDLENBQzVDMVAsR0FBRyxDQUFDNEQsUUFBUSxJQUFHO2NBQ2YsT0FBT3dELE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQzdHLEtBQUEsQ0FBQWlQLGtCQUFrQjtnQkFBQ3JCLEdBQUcsRUFBRTFLLFFBQVEsQ0FBQzlGLEVBQUU7Z0JBQUU4RixRQUFRLEVBQUVBLFFBQVE7Z0JBQUVnTSxXQUFXLEVBQUUzRztjQUFXLEVBQUk7WUFDOUYsQ0FBQyxDQUFDO1lBRUgsT0FDQzdCLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ2lJLFNBQUEsQ0FBQUssUUFBUTtjQUFDNUgsU0FBUyxFQUFDO1lBQWUsR0FDbENiLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ2lJLFNBQUEsQ0FBQU0sY0FBYyxRQUFFMUksTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDa0ksT0FBQSxDQUFBTSxZQUFZO2NBQUN0SCxFQUFFLEVBQUMsS0FBSztjQUFDM0ssRUFBRSxFQUFFNFIsUUFBUTtjQUFFcEIsR0FBRyxFQUFFLEdBQUdvQixRQUFRO1lBQVMsRUFBSSxDQUFrQixFQUNyR3RJLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ2lJLFNBQUEsQ0FBQVEsWUFBWSxRQUFFeFMsS0FBSyxDQUFnQixDQUMxQjtVQUViOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBNEosTUFBQSxHQUFBcEwsT0FBQTtVQUNBLElBQUE2TixNQUFBLEdBQUE3TixPQUFBO1VBRUEsSUFBQXdULFNBQUEsR0FBQXhULE9BQUE7VUFFQSxJQUFBMEwsUUFBQSxHQUFBMUwsT0FBQTtVQU1NLFNBQVUyVCxrQkFBa0JBLENBQUM7WUFBRUMsV0FBVztZQUFFaE0sUUFBUTtZQUFFNkUsRUFBRSxHQUFHK0csU0FBQSxDQUFBUztVQUFZLENBQTJCO1lBQ3ZHLE1BQU07Y0FBRTNULEtBQUs7Y0FBRW1KO1lBQUssQ0FBRSxHQUFHLElBQUFpQyxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBRTlDLE1BQU1tSSxPQUFPLEdBQUcsc0JBQXNCdE0sUUFBUSxDQUFDeEYsSUFBSSxFQUFFO1lBQ3JELE1BQU0rUixPQUFPLEdBQUcxSCxFQUFFO1lBQ2xCLE1BQU1rQyxPQUFPLEdBQUdDLEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7Y0FDdEIrRSxXQUFXLENBQUNoTSxRQUFRLENBQUM7WUFDdEIsQ0FBQztZQUNELE9BQ0N3RCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUM0SSxPQUFPO2NBQUNsSSxTQUFTLEVBQUMsaUJBQWlCO2NBQUMwQyxPQUFPLEVBQUVBO1lBQU8sR0FDcER2RCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUEwQixHQUN4Q2IsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQTtjQUFTVSxTQUFTLEVBQUVpSTtZQUFPLEdBQzFCOUksTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDc0MsTUFBQSxDQUFBdUcsT0FBTztjQUFDbkksU0FBUyxFQUFDLGFBQWE7Y0FBQ3JJLElBQUksRUFBRWdFLFFBQVEsQ0FBQ3hGO1lBQUksRUFBSSxDQUMvQyxFQUNWZ0osTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxjQUNDSCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLGFBQUszRCxRQUFRLENBQUN6RixLQUFLLENBQU0sRUFDekJpSixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLGVBQU85QixLQUFLLENBQUNsSSxVQUFVLENBQUM4UyxLQUFLLENBQUN6TSxRQUFRLENBQUN4RixJQUFJLENBQUMsQ0FBUSxDQUMvQyxDQUNELENBQ0c7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0EsSUFBQWdKLE1BQUEsR0FBQXBMLE9BQUE7VUFFQSxJQUFBNk4sTUFBQSxHQUFBN04sT0FBQTtVQUVBLElBQUF3VCxTQUFBLEdBQUF4VCxPQUFBO1VBQ0EsSUFBQTBMLFFBQUEsR0FBQTFMLE9BQUE7VUFDTSxTQUFVK1QsWUFBWUEsQ0FBQztZQUFFalMsRUFBRTtZQUFFMkssRUFBRSxHQUFHK0csU0FBQSxDQUFBUztVQUFZLENBQTRCO1lBQy9FLE1BQU07Y0FBRTNULEtBQUs7Y0FBRW1KO1lBQUssQ0FBRSxHQUFHLElBQUFpQyxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBRTlDLE1BQU1uRSxRQUFRLEdBQUd0SCxLQUFLLENBQUN3RyxLQUFLLENBQUN2RixVQUFVLENBQUNQLEdBQUcsQ0FBQ2MsRUFBRSxDQUFDO1lBQy9DLElBQUksQ0FBQzhGLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFDMUIsTUFBTXNNLE9BQU8sR0FBRyxzQkFBc0J0TSxRQUFRLENBQUN4RixJQUFJLEVBQUU7WUFDckQsTUFBTStSLE9BQU8sR0FBRzFILEVBQUU7WUFDbEIsSUFBSSxDQUFDN0UsUUFBUSxFQUFFO2NBQ2QrQyxPQUFPLENBQUMySixJQUFJLENBQUMsb0JBQW9CLEVBQUV4UyxFQUFFLENBQUM7Y0FDdEMsT0FBTyxJQUFJOztZQUVaLE9BQ0NzSixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUM0SSxPQUFPO2NBQUNsSSxTQUFTLEVBQUM7WUFBaUIsR0FDbkNiLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQTBCLEdBQ3hDYixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQVNVLFNBQVMsRUFBRWlJO1lBQU8sR0FDMUI5SSxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNzQyxNQUFBLENBQUF1RyxPQUFPO2NBQUNuSSxTQUFTLEVBQUMsYUFBYTtjQUFDckksSUFBSSxFQUFFZ0UsUUFBUSxDQUFDeEY7WUFBSSxFQUFJLENBQy9DLEVBQ1ZnSixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLGNBQ0NILE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsYUFBSzNELFFBQVEsQ0FBQ3pGLEtBQUssQ0FBTSxFQUN6QmlKLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsZUFBTzlCLEtBQUssQ0FBQ2xJLFVBQVUsQ0FBQzhTLEtBQUssQ0FBQ3pNLFFBQVEsQ0FBQ3hGLElBQUksQ0FBQyxDQUFRLENBQy9DLENBQ0QsRUFDTmdKLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ3NDLE1BQUEsQ0FBQXVHLE9BQU87Y0FBQ3hRLElBQUksRUFBQztZQUFlLEVBQUcsQ0FDdkI7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkEsSUFBQXVOLEdBQUEsR0FBQW5SLE9BQUE7VUFDQSxJQUFBb0wsTUFBQSxHQUFBcEwsT0FBQTtVQUNBLElBQUEwTCxRQUFBLEdBQUExTCxPQUFBO1VBQ00sU0FBVWtRLGFBQWFBLENBQUM7WUFBRWtCO1VBQU8sQ0FBd0I7WUFDOUQsTUFBTTtjQUFFM0g7WUFBSyxDQUFFLEdBQUcsSUFBQWlDLFFBQUEsQ0FBQUssbUJBQW1CLEdBQUU7WUFDdkNxRixPQUFPLEdBQUdBLE9BQU8sSUFBSTNILEtBQUssQ0FBQ2xJLFVBQVUsQ0FBQ2tQLEtBQUs7WUFDM0MsT0FBT3JGLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQzRGLEdBQUEsQ0FBQUUsU0FBUztjQUFDek4sSUFBSSxFQUFDLE1BQU07Y0FBQ3dELElBQUksRUFBRWdLLE9BQU87Y0FBRW5GLFNBQVMsRUFBQztZQUEwQixFQUFHO1VBQ3JGOzs7Ozs7Ozs7Ozs7Ozs7OztVQ05BLElBQUFiLE1BQUEsR0FBQXBMLE9BQUE7VUFDQSxJQUFBMEwsUUFBQSxHQUFBMUwsT0FBQTtVQUNBLElBQUE2TixNQUFBLEdBQUE3TixPQUFBO1VBQ0EsSUFBQTJMLEtBQUEsR0FBQTNMLE9BQUE7VUFDQSxJQUFBeUksWUFBQSxHQUFBekksT0FBQTtVQUNBLElBQUE0UCxNQUFBLEdBQUE1UCxPQUFBO1VBQ0EsSUFBQThOLE1BQUEsR0FBQTlOLE9BQUE7VUFFTztVQUFVLFNBQ1J1VSxZQUFZQSxDQUFDLEVBQUU7WUFDdkIsTUFBTTtjQUFFalUsS0FBSztjQUFFa1U7WUFBTyxDQUFFLEdBQUcsSUFBQTlJLFFBQUEsQ0FBQUssbUJBQW1CLEdBQUU7WUFDaEQsTUFBTTtjQUFFNUMsZ0JBQWdCLEVBQUV2QjtZQUFRLENBQUUsR0FBR3RILEtBQUs7WUFDNUMsTUFBTSxDQUFDbVUsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3RKLE1BQUEsQ0FBQTdFLE9BQUssQ0FBQzZILFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFFaEQsSUFBQU4sTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQ2pPLEtBQUssQ0FBQyxFQUFFLE1BQU1vVSxVQUFVLENBQUNwVSxLQUFLLENBQUM2SSxnQkFBZ0IsQ0FBQyxFQUFFLGNBQWMsQ0FBQztZQUM1RSxNQUFNd0wsT0FBTyxHQUFHQSxDQUFBLEtBQU1yVSxLQUFLLENBQUM2SyxjQUFjLENBQUM0RCxTQUFTLENBQUM7WUFFckQsT0FDQzNELE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQUgsTUFBQSxDQUFBN0UsT0FBQSxDQUFBaUYsUUFBQSxRQUNDSixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQVNVLFNBQVMsRUFBRSxnQ0FBZ0NyRSxRQUFRLENBQUN4RixJQUFJO1lBQUUsR0FDbEVnSixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLGNBQ0NILE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsYUFBSzNELFFBQVEsQ0FBQ3pGLEtBQUssRSxJQUFPLENBQ3JCLEVBRU5pSixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUFZLEdBQzFCYixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNzQyxNQUFBLENBQUFvQixVQUFVO2NBQUNyTCxJQUFJLEVBQUMsT0FBTztjQUFDekIsS0FBSyxFQUFDLE9BQU87Y0FBQ3dNLE9BQU8sRUFBRWdHO1lBQU8sRUFBSSxDQUN0RCxDQUNHLEVBQ1QvTSxRQUFRLENBQUN0RSxZQUFZLENBQUMwQyxNQUFNLEdBQzVCb0YsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDSSxLQUFBLENBQUFhLElBQUk7Y0FDSlAsU0FBUyxFQUFDLHNCQUFzQjtjQUNoQ3pLLEtBQUssRUFBRW9HLFFBQVEsQ0FBQ3RFLFlBQVk7Y0FDNUJvSixPQUFPLEVBQUVqRSxZQUFBLENBQUFtTSxtQkFBbUI7Y0FDNUJqUyxLQUFLLEVBQUU7Z0JBQUVpRjtjQUFRO1lBQUUsRUFDbEIsR0FFRndELE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ3FFLE1BQUEsQ0FBQXNCLEtBQUs7Y0FBQzlKLElBQUksRUFBRTtZQUF1QixFQUNwQyxDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUFnRSxNQUFBLEdBQUFwTCxPQUFBO1VBQ0EsSUFBQTBMLFFBQUEsR0FBQTFMLE9BQUE7VUFDQSxJQUFBNlUsTUFBQSxHQUFBN1UsT0FBQTtVQUNBLElBQUEyTSxXQUFBLEdBQUEzTSxPQUFBO1VBQ0EsSUFBQThVLFFBQUEsR0FBQTlVLE9BQUE7VUFDQSxJQUFBMkwsS0FBQSxHQUFBM0wsT0FBQTtVQUVBLElBQUE0TCxZQUFBLEdBQUE1TCxPQUFBO1VBQ0EsSUFBQStVLFVBQUEsR0FBQS9VLE9BQUE7VUFFTztVQUFVLFNBQ1JnVix1QkFBdUJBLENBQUM7WUFBRXhNO1VBQUksQ0FBRTtZQUN4QyxNQUFNO2NBQUVsSSxLQUFLO2NBQUU0TjtZQUFhLENBQUUsR0FBRyxJQUFBeEMsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUN0RCxNQUFNO2NBQUU1QyxnQkFBZ0IsRUFBRXZCO1lBQVEsQ0FBRSxHQUFHdEgsS0FBSztZQUM1QyxNQUFNZSxJQUFJLEdBQUdtSCxJQUFJLENBQUNqSCxVQUFVLENBQUNQLEdBQUcsQ0FBQzRHLFFBQVEsQ0FBQzlGLEVBQUUsQ0FBQztZQUM3QyxNQUFNLENBQUNtVCxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHOUosTUFBQSxDQUFBN0UsT0FBSyxDQUFDNkgsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNK0csUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckJELGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7WUFDM0IsQ0FBQztZQUNELElBQUksQ0FBQzVULElBQUksRUFBRTtjQUNWc0osT0FBTyxDQUFDMkosSUFBSSxDQUFDLFlBQVk5TCxJQUFJLENBQUNqRixJQUFJLENBQUMxQixJQUFJLGtDQUFrQyxFQUFFMkcsSUFBSSxDQUFDO2NBQ2hGLE9BQU8sSUFBSTs7WUFHWixNQUFNbUcsT0FBTyxHQUFHQyxLQUFLLElBQUc7Y0FDdkJBLEtBQUssQ0FBQ3dHLGVBQWUsRUFBRTtjQUN2QnhHLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3RCLE1BQU0zRixRQUFRLEdBQUc1SSxLQUFLLENBQUNpSyxnQkFBZ0IsQ0FBQy9CLElBQUksQ0FBQzFHLEVBQUUsQ0FBQztjQUNoRG9NLGFBQWEsQ0FBQztnQkFDYnZOLElBQUksRUFBRSxJQUFJO2dCQUNWMkksSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEJqSSxJQUFJLEVBQUU7a0JBQ0w2SCxRQUFRO2tCQUNSaUYsVUFBVSxFQUFFdkcsUUFBUSxDQUFDOUYsRUFBRTtrQkFDdkJrRCxXQUFXLEVBQUV3RDs7ZUFFZCxDQUFDO2NBQ0YsT0FBTyxLQUFLO1lBQ2IsQ0FBQztZQUVELE1BQU02TSxTQUFTLEdBQUdBLENBQUM7Y0FBRTdNO1lBQUksQ0FBRSxLQUFLNEMsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDdUosUUFBQSxDQUFBUSxPQUFPO2NBQUN0RSxPQUFPLEVBQUV4SSxJQUFJLENBQUNsSCxNQUFNLENBQUM4RjtZQUFJLEdBQUdvQixJQUFJLENBQUNsSCxNQUFNLENBQUNzQyxJQUFJLENBQVc7WUFDaEcsT0FDQ3dILE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDYixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQVNVLFNBQVMsRUFBQztZQUFLLEVBQVcsRUFDbkNiLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsaUJBQW1CLEVBQ25CSCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNLLFlBQUEsQ0FBQU0sb0JBQW9CO2NBQUNpSixRQUFRLEVBQUVBLFFBQVE7Y0FBRUksSUFBSSxFQUFFTjtZQUFVLEdBQ3pEN0osTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDSyxZQUFBLENBQUFPLGlCQUFpQjtjQUFDRixTQUFTLEVBQUM7WUFBOEIsR0FDMURiLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ29CLFdBQUEsQ0FBQTZJLElBQUk7Y0FDSkMsSUFBSSxFQUFFLGdCQUFnQm5WLEtBQUssQ0FBQ2lKLFlBQVksa0NBQWtDZixJQUFJLENBQUNqRixJQUFJLENBQUN6QixFQUFFLEVBQUU7Y0FDeEY2TSxPQUFPLEVBQUVBO1lBQU8sR0FFaEJ2RCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUFvQixHQUNsQ2IsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDc0osTUFBQSxDQUFBYSxLQUFLO2NBQUN6SixTQUFTLEVBQUMsZ0JBQWdCO2NBQUNtSCxHQUFHLEVBQUU1SyxJQUFJLENBQUNqRixJQUFJLENBQUMzQjtZQUFRLEVBQUksRUFDN0R3SixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLGFBQUsvQyxJQUFJLENBQUNqRixJQUFJLENBQUMxQixJQUFJLENBQU0sQ0FDcEIsQ0FDQSxFQUNQdUosTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxjQUNDSCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNJLEtBQUEsQ0FBQWEsSUFBSTtjQUFDUCxTQUFTLEVBQUMsZUFBZTtjQUFDekssS0FBSyxFQUFFSCxJQUFJLEVBQUVxQyxRQUFRLEVBQUVaLFVBQVU7Y0FBRTRKLE9BQU8sRUFBRTJJO1lBQVMsRUFBSSxDQUNwRixDQUNhLEVBQ3BCakssTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDSyxZQUFBLENBQUFRLGtCQUFrQixRQUNsQmhCLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ0ksS0FBQSxDQUFBYSxJQUFJO2NBQUNoTCxLQUFLLEVBQUVILElBQUksRUFBRXFDLFFBQVEsRUFBRVosVUFBVTtjQUFFNEosT0FBTyxFQUFFcUksVUFBQSxDQUFBWTtZQUFrQyxFQUFJLENBQ3BFLENBQ0MsQ0FDbEI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsRUEsSUFBQXZLLE1BQUEsR0FBQXBMLE9BQUE7VUFDQSxJQUFBMk0sV0FBQSxHQUFBM00sT0FBQTtVQUNBLElBQUE2TSxLQUFBLEdBQUE3TSxPQUFBO1VBQ0EsSUFBQXdILGVBQUEsR0FBQXhILE9BQUE7VUFDQSxJQUFBeUgsT0FBQSxHQUFBekgsT0FBQTtVQUVNLFNBQVU0VSxtQkFBbUJBLENBQUM7WUFBRXBNLElBQUk7WUFBRVosUUFBUTtZQUFFLEdBQUdqRjtVQUFLLENBQUU7WUFDL0QsTUFBTVAsSUFBSSxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUMwSCxRQUFRLENBQUNsQyxRQUFRLENBQUN4RixJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUd3RixRQUFRLENBQUN4RixJQUFJO1lBRTVHLE9BQ0NnSixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNvQixXQUFBLENBQUFRLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFaEwsSUFBSTtjQUNmaUwsT0FBTyxFQUFFO2dCQUNSM0MsSUFBSSxFQUFFVSxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNzQixLQUFBLENBQUFtSSx1QkFBdUI7a0JBQUN4TSxJQUFJLEVBQUVBO2dCQUFJLEVBQUk7Z0JBQzdDVixNQUFNLEVBQUVzRCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUM5RCxPQUFBLENBQUFtTyx5QkFBeUI7a0JBQUNwTixJQUFJLEVBQUVBO2dCQUFJLEVBQUk7Z0JBQ2pELGlCQUFpQixFQUFFNEMsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDL0QsZUFBQSxDQUFBcU8saUNBQWlDO2tCQUFDck4sSUFBSSxFQUFFQTtnQkFBSTs7WUFDaEUsRUFDQTtVQUVKOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBNEMsTUFBQSxHQUFBcEwsT0FBQTtVQUNBLElBQUEwTCxRQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQTZVLE1BQUEsR0FBQTdVLE9BQUE7VUFDQSxJQUFBMk0sV0FBQSxHQUFBM00sT0FBQTtVQUNBLElBQUE4VSxRQUFBLEdBQUE5VSxPQUFBO1VBRU87VUFBVSxTQUNSNlYsaUNBQWlDQSxDQUFDO1lBQUVyTjtVQUFJLENBQUU7WUFDbEQsTUFBTTtjQUNMbEksS0FBSztjQUNMNE4sYUFBYTtjQUNiekUsS0FBSyxFQUFFO2dCQUNObEksVUFBVSxFQUFFO2tCQUFFdVUsY0FBYyxFQUFFck07Z0JBQUs7Y0FBRTtZQUNyQyxDQUNELEdBQUcsSUFBQWlDLFFBQUEsQ0FBQUssbUJBQW1CLEdBQUU7WUFDekIsTUFBTTtjQUFFNUMsZ0JBQWdCLEVBQUV2QjtZQUFRLENBQUUsR0FBR3RILEtBQUs7WUFDNUMsTUFBTWUsSUFBSSxHQUFHbUgsSUFBSSxDQUFDakgsVUFBVSxDQUFDUCxHQUFHLENBQUM0RyxRQUFRLENBQUM5RixFQUFFLENBQUM7WUFFN0MsTUFBTSxDQUFDbVQsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzlKLE1BQUEsQ0FBQTdFLE9BQUssQ0FBQzZILFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTStHLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCRCxhQUFhLENBQUMsQ0FBQ0QsVUFBVSxDQUFDO1lBQzNCLENBQUM7WUFDRCxJQUFJLENBQUM1VCxJQUFJLEVBQUU7Y0FDVnNKLE9BQU8sQ0FBQzJKLElBQUksQ0FBQyxZQUFZOUwsSUFBSSxDQUFDakYsSUFBSSxDQUFDMUIsSUFBSSxrQ0FBa0MsRUFBRTJHLElBQUksQ0FBQztjQUNoRixPQUFPLElBQUk7O1lBR1osTUFBTW1HLE9BQU8sR0FBR0MsS0FBSyxJQUFHO2NBQ3ZCQSxLQUFLLENBQUN3RyxlQUFlLEVBQUU7Y0FDdkJ4RyxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QixNQUFNM0YsUUFBUSxHQUFHNUksS0FBSyxDQUFDaUssZ0JBQWdCLENBQUMvQixJQUFJLENBQUMxRyxFQUFFLENBQUM7Y0FDaERvTSxhQUFhLENBQUM7Z0JBQ2J2TixJQUFJLEVBQUUsSUFBSTtnQkFDVjJJLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCakksSUFBSSxFQUFFO2tCQUNMNkgsUUFBUTtrQkFDUmlGLFVBQVUsRUFBRXZHLFFBQVEsQ0FBQzlGLEVBQUU7a0JBQ3ZCa0QsV0FBVyxFQUFFd0Q7O2VBRWQsQ0FBQztjQUNGLE9BQU8sS0FBSztZQUNiLENBQUM7WUFDRCxNQUFNc0QsbUJBQW1CLEdBQUd0RCxJQUFJLENBQUNqSCxVQUFVLENBQUNQLEdBQUcsQ0FBQzRHLFFBQVEsQ0FBQzlGLEVBQUUsQ0FBQztZQUM1RCxNQUFNdVQsU0FBUyxHQUFHQSxDQUFDO2NBQUU3TTtZQUFJLENBQUUsS0FBSzRDLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ3VKLFFBQUEsQ0FBQVEsT0FBTztjQUFDdEUsT0FBTyxFQUFFeEksSUFBSSxDQUFDbEgsTUFBTSxDQUFDOEY7WUFBSSxHQUFHb0IsSUFBSSxDQUFDbEgsTUFBTSxDQUFDc0MsSUFBSSxDQUFXO1lBRWhHLE9BQ0N3SCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUFzQixHQUNwQ2IsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQTtjQUFLVSxTQUFTLEVBQUM7WUFBOEIsR0FDNUNiLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ29CLFdBQUEsQ0FBQTZJLElBQUk7Y0FDSkMsSUFBSSxFQUFFLGdCQUFnQm5WLEtBQUssQ0FBQ2lKLFlBQVksa0NBQWtDZixJQUFJLENBQUNqRixJQUFJLENBQUN6QixFQUFFLEVBQUU7Y0FDeEY2TSxPQUFPLEVBQUVBO1lBQU8sR0FFaEJ2RCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUFvQixHQUNsQ2IsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDc0osTUFBQSxDQUFBYSxLQUFLO2NBQUN6SixTQUFTLEVBQUMsZ0JBQWdCO2NBQUNtSCxHQUFHLEVBQUU1SyxJQUFJLENBQUNqRixJQUFJLENBQUMzQjtZQUFRLEVBQUksRUFDN0R3SixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLGFBQUsvQyxJQUFJLENBQUNqRixJQUFJLENBQUMxQixJQUFJLENBQU0sQ0FDcEIsQ0FDQSxFQUNQdUosTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxjQUNDSCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQU1VLFNBQVMsRUFBQztZQUE4QixHQUM1Q3hDLEtBQUssQ0FBQ2lJLE9BQU8sRSxNQUFJNUYsbUJBQW1CLENBQUMwRixRQUFRLENBQUNFLE9BQU8sQ0FDaEQsRUFDUHRHLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBTVUsU0FBUyxFQUFDO1lBQTZCLEdBQzNDeEMsS0FBSyxDQUFDc00sS0FBSyxFLE1BQUlqSyxtQkFBbUIsQ0FBQzBGLFFBQVEsQ0FBQ3VFLEtBQUssQ0FDNUMsQ0FDRixDQUNELENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwRUEsSUFBQTNLLE1BQUEsR0FBQXBMLE9BQUE7VUFDQSxJQUFBMEwsUUFBQSxHQUFBMUwsT0FBQTtVQUNBLElBQUE2VSxNQUFBLEdBQUE3VSxPQUFBO1VBQ0EsSUFBQTJNLFdBQUEsR0FBQTNNLE9BQUE7VUFDQSxJQUFBOFUsUUFBQSxHQUFBOVUsT0FBQTtVQUNBLElBQUEyTCxLQUFBLEdBQUEzTCxPQUFBO1VBSU87VUFBVSxTQUNSNFYseUJBQXlCQSxDQUFDO1lBQUVwTjtVQUFJLENBQUU7WUFDMUMsTUFBTTtjQUFFbEksS0FBSztjQUFFNE47WUFBYSxDQUFFLEdBQUcsSUFBQXhDLFFBQUEsQ0FBQUssbUJBQW1CLEdBQUU7WUFDdEQsTUFBTTtjQUFFNUMsZ0JBQWdCLEVBQUV2QjtZQUFRLENBQUUsR0FBR3RILEtBQUs7WUFDNUMsTUFBTWUsSUFBSSxHQUFHbUgsSUFBSSxDQUFDakgsVUFBVSxDQUFDUCxHQUFHLENBQUM0RyxRQUFRLENBQUM5RixFQUFFLENBQUM7WUFDN0MsTUFBTSxDQUFDbVQsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzlKLE1BQUEsQ0FBQTdFLE9BQUssQ0FBQzZILFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTStHLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCRCxhQUFhLENBQUMsQ0FBQ0QsVUFBVSxDQUFDO1lBQzNCLENBQUM7WUFDRCxJQUFJLENBQUM1VCxJQUFJLEVBQUU7Y0FDVnNKLE9BQU8sQ0FBQzJKLElBQUksQ0FBQyxZQUFZOUwsSUFBSSxDQUFDakYsSUFBSSxDQUFDMUIsSUFBSSxrQ0FBa0MsRUFBRTJHLElBQUksQ0FBQztjQUNoRixPQUFPLElBQUk7O1lBR1osTUFBTW1HLE9BQU8sR0FBR0MsS0FBSyxJQUFHO2NBQ3ZCQSxLQUFLLENBQUN3RyxlQUFlLEVBQUU7Y0FDdkJ4RyxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QixNQUFNM0YsUUFBUSxHQUFHNUksS0FBSyxDQUFDaUssZ0JBQWdCLENBQUMvQixJQUFJLENBQUMxRyxFQUFFLENBQUM7Y0FDaERvTSxhQUFhLENBQUM7Z0JBQ2J2TixJQUFJLEVBQUUsSUFBSTtnQkFDVjJJLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCakksSUFBSSxFQUFFO2tCQUNMNkgsUUFBUTtrQkFDUmlGLFVBQVUsRUFBRXZHLFFBQVEsQ0FBQzlGLEVBQUU7a0JBQ3ZCa0QsV0FBVyxFQUFFd0Q7O2VBRWQsQ0FBQztjQUNGLE9BQU8sS0FBSztZQUNiLENBQUM7WUFDRCxNQUFNc0QsbUJBQW1CLEdBQUd0RCxJQUFJLENBQUNqSCxVQUFVLENBQUNQLEdBQUcsQ0FBQzRHLFFBQVEsQ0FBQzlGLEVBQUUsQ0FBQztZQUM1RCxNQUFNdVQsU0FBUyxHQUFHQSxDQUFDO2NBQUU3TSxJQUFJLEVBQUVsRztZQUFTLENBQUUsS0FBSTtjQUN6QyxPQUFPOEksTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDdUosUUFBQSxDQUFBUSxPQUFPO2dCQUFDdEUsT0FBTyxFQUFFMU87Y0FBUyxHQUFHd0osbUJBQW1CLENBQUN4SixTQUFTLENBQUMsQ0FBQ3NCLElBQUksQ0FBVztZQUNwRixDQUFDO1lBRUQsT0FDQ3dILE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDYixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUE4QixHQUM1Q2IsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDb0IsV0FBQSxDQUFBNkksSUFBSTtjQUNKQyxJQUFJLEVBQUUsZ0JBQWdCblYsS0FBSyxDQUFDaUosWUFBWSxrQ0FBa0NmLElBQUksQ0FBQ2pGLElBQUksQ0FBQ3pCLEVBQUUsRUFBRTtjQUN4RjZNLE9BQU8sRUFBRUE7WUFBTyxHQUVoQnZELE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQW9CLEdBQ2xDYixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNzSixNQUFBLENBQUFhLEtBQUs7Y0FBQ3pKLFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQ21ILEdBQUcsRUFBRTVLLElBQUksQ0FBQ2pGLElBQUksQ0FBQzNCO1lBQVEsRUFBSSxFQUM3RHdKLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsYUFBSy9DLElBQUksQ0FBQ2pGLElBQUksQ0FBQzFCLElBQUksQ0FBTSxDQUNwQixDQUNBLEVBQ1B1SixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLGNBQ0NILE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ0ksS0FBQSxDQUFBYSxJQUFJO2NBQUNQLFNBQVMsRUFBQyxlQUFlO2NBQUN6SyxLQUFLLEVBQUVzSyxtQkFBbUIsQ0FBQ2hKLFVBQVU7Y0FBRTRKLE9BQU8sRUFBRTJJO1lBQVMsRUFBSSxDQUN4RixDQUNELENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3REEsSUFBQTVKLEtBQUEsR0FBQXpMLE9BQUE7VUFDQSxJQUFBK1UsVUFBQSxHQUFBL1UsT0FBQTtVQUNBLElBQUEyTCxLQUFBLEdBQUEzTCxPQUFBO1VBQ0EsSUFBQTBMLFFBQUEsR0FBQTFMLE9BQUE7VUFDQSxJQUFBK1AsYUFBQSxHQUFBL1AsT0FBQTtVQUNBLElBQUE4UCxLQUFBLEdBQUE5UCxPQUFBO1VBRU0sU0FBVWdXLGlDQUFpQ0EsQ0FBQztZQUFFeE4sSUFBSTtZQUFFakY7VUFBSSxDQUFFO1lBQy9ELE1BQU07Y0FBRWtHO1lBQUssQ0FBRSxHQUFHLElBQUFpQyxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBRXZDLE9BQ0NOLEtBQUEsQ0FBQUYsYUFBQSxDQUFDdUUsS0FBQSxDQUFBTSxhQUFhO2NBQUNiLE1BQU0sRUFBRTtZQUFDLEdBQ3ZCOUQsS0FBQSxDQUFBRixhQUFBLENBQUN1RSxLQUFBLENBQUFPLElBQUk7Y0FBQ3BFLFNBQVMsRUFBQztZQUFjLEdBQzdCUixLQUFBLENBQUFGLGFBQUEsQ0FBQ3VFLEtBQUEsQ0FBQVEsR0FBRyxRQUNIN0UsS0FBQSxDQUFBRixhQUFBLGFBQUs5QixLQUFLLENBQUNsSSxVQUFVLENBQUNvQyxPQUFPLEUsSUFBTyxDQUMvQixFQUNMNkUsSUFBSSxFQUFFd0QsTUFBTSxFQUFFaEcsTUFBTSxHQUFHeUYsS0FBQSxDQUFBRixhQUFBLENBQUN1RSxLQUFBLENBQUFRLEdBQUc7Y0FBQ3JFLFNBQVMsRUFBQztZQUFZLEdBQUV4QyxLQUFLLENBQUN1QyxNQUFNLENBQU8sR0FBRyxJQUFJLENBQ3pFLEVBQ1BQLEtBQUEsQ0FBQUYsYUFBQSxDQUFDdUUsS0FBQSxDQUFBUyxLQUFLLFFBQ0w5RSxLQUFBLENBQUFGLGFBQUEsY0FDQ0UsS0FBQSxDQUFBRixhQUFBO2NBQVNVLFNBQVMsRUFBQztZQUF1QixHQUN6Q1IsS0FBQSxDQUFBRixhQUFBLFlBQUkvQyxJQUFJLENBQUN4RixTQUFTLENBQUssQ0FDZCxFQUNWeUksS0FBQSxDQUFBRixhQUFBO2NBQUlVLFNBQVMsRUFBQztZQUFPLEdBQUV4QyxLQUFLLENBQUNsSSxVQUFVLENBQUMwVSxPQUFPLENBQU0sRUFDckR4SyxLQUFBLENBQUFGLGFBQUEsQ0FBQ0ksS0FBQSxDQUFBYSxJQUFJO2NBQ0pQLFNBQVMsRUFBQyxvQ0FBb0M7Y0FDOUN6SyxLQUFLLEVBQUVnSCxJQUFJLENBQUM5RSxRQUFRLEVBQUVaLFVBQVU7Y0FDaEM0SixPQUFPLEVBQUVxSSxVQUFBLENBQUFZO1lBQWtDLEVBQzFDLENBQ0csRUFFTmxLLEtBQUEsQ0FBQUYsYUFBQSxDQUFDd0UsYUFBQSxDQUFBYSxXQUFXO2NBQUM1RSxNQUFNLEVBQUV4RCxJQUFJLEVBQUV3RCxNQUFNO2NBQUV6SSxJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUMxQyxDQUNPO1VBRWxCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQSxJQUFBa0ksS0FBQSxHQUFBekwsT0FBQTtVQUNBLElBQUE2TixNQUFBLEdBQUE3TixPQUFBO1VBQ0EsSUFBQTBMLFFBQUEsR0FBQTFMLE9BQUE7VUFDQSxJQUFBNEwsWUFBQSxHQUFBNUwsT0FBQTtVQUNBLElBQUEyTSxXQUFBLEdBQUEzTSxPQUFBO1VBRUEsSUFBQTZNLEtBQUEsR0FBQTdNLE9BQUE7VUFDQSxJQUFBd0gsZUFBQSxHQUFBeEgsT0FBQTtVQUNBLElBQUF5SCxPQUFBLEdBQUF6SCxPQUFBO1VBRU0sU0FBVWtXLHlCQUF5QkEsQ0FBQztZQUFFMU4sSUFBSTtZQUFFakYsSUFBSTtZQUFFb1A7VUFBSyxDQUFFO1lBQzlELE1BQU07Y0FBRWxKLEtBQUs7Y0FBRW5KLEtBQUs7Y0FBRTROO1lBQWEsQ0FBRSxHQUFHLElBQUF4QyxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBQzdELE1BQU0sQ0FBQ2tKLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUd6SixLQUFLLENBQUMyQyxRQUFRLENBQUN1RSxLQUFLLEtBQUssQ0FBQyxDQUFDO1lBQy9ELE1BQU13QyxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQkQsYUFBYSxDQUFDLENBQUNELFVBQVUsQ0FBQztZQUMzQixDQUFDO1lBRUQsTUFBTWtCLFVBQVUsR0FBR3ZILEtBQUssSUFBRztjQUMxQkEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7Y0FDdEJYLGFBQWEsQ0FBQztnQkFDYnZOLElBQUksRUFBRSxJQUFJO2dCQUNWMkksSUFBSSxFQUFFLGtCQUFrQjtnQkFFeEJqSSxJQUFJLEVBQUU7a0JBQ0w2SCxRQUFRLEVBQUU1SSxLQUFLLENBQUNpSyxnQkFBZ0IsQ0FBQ2hILElBQUksQ0FBQ3pCLEVBQUUsQ0FBQztrQkFDekNxTSxVQUFVLEVBQUUzRixJQUFJLENBQUNaLFFBQVEsQ0FBQzlGLEVBQUU7a0JBQzVCa0QsV0FBVyxFQUFFMUUsS0FBSyxDQUFDd0csS0FBSyxDQUFDeEQsWUFBWSxDQUFDdEMsR0FBRyxDQUFDdUMsSUFBSSxDQUFDekIsRUFBRSxDQUFDO2tCQUNsRCxHQUFHMEc7O2VBRUosQ0FBQztjQUNGLE9BQU8sS0FBSztZQUNiLENBQUM7WUFDRG1DLE9BQU8sQ0FBQ3lMLEdBQUcsQ0FBQyxHQUFHLEVBQUU1TixJQUFJLENBQUM7WUFFdEIsT0FDQ2lELEtBQUEsQ0FBQUYsYUFBQTtjQUFTVSxTQUFTLEVBQUM7WUFBMEIsR0FDNUNSLEtBQUEsQ0FBQUYsYUFBQSxDQUFDSyxZQUFBLENBQUFNLG9CQUFvQjtjQUFDaUosUUFBUSxFQUFFQSxRQUFRO2NBQUVJLElBQUksRUFBRU47WUFBVSxHQUN6RHhKLEtBQUEsQ0FBQUYsYUFBQSxDQUFDSyxZQUFBLENBQUFPLGlCQUFpQixRQUNqQlYsS0FBQSxDQUFBRixhQUFBO2NBQVFVLFNBQVMsRUFBQztZQUFrQixHQUNuQ1IsS0FBQSxDQUFBRixhQUFBO2NBQVNVLFNBQVMsRUFBQztZQUE0QixHQUM5Q1IsS0FBQSxDQUFBRixhQUFBO2NBQVNVLFNBQVMsRUFBRSxpQ0FBaUN6RCxJQUFJLENBQUNaLFFBQVEsRUFBRXhGLElBQUk7WUFBRSxHQUN6RXFKLEtBQUEsQ0FBQUYsYUFBQSxDQUFDc0MsTUFBQSxDQUFBdUcsT0FBTztjQUFDeFEsSUFBSSxFQUFFaUssTUFBQSxDQUFBd0ksS0FBSyxDQUFDN04sSUFBSSxDQUFDWixRQUFRLENBQUN4RixJQUFJO1lBQUMsRUFBSSxDQUNuQyxFQUNWcUosS0FBQSxDQUFBRixhQUFBLGNBQ0NFLEtBQUEsQ0FBQUYsYUFBQSxhQUFLL0MsSUFBSSxDQUFDWixRQUFRLENBQUN6RixLQUFLLENBQU0sRUFDOUJzSixLQUFBLENBQUFGLGFBQUEsZUFBTzlCLEtBQUssQ0FBQ2xJLFVBQVUsQ0FBQzhTLEtBQUssQ0FBQzdMLElBQUksQ0FBQ1osUUFBUSxDQUFDeEYsSUFBSSxDQUFDLENBQVEsQ0FDcEQsQ0FDRyxFQUNUb0csSUFBSSxDQUFDaEYsUUFBUSxHQUNiaUksS0FBQSxDQUFBRixhQUFBLENBQUNvQixXQUFBLENBQUE2SSxJQUFJO2NBQUM3RyxPQUFPLEVBQUV3SCxVQUFVO2NBQUVsSyxTQUFTLEVBQUM7WUFBeUIsR0FDNUR4QyxLQUFLLENBQUNELFVBQVUsQ0FBQ2hHLFFBQVEsRSxLQUFHZ0YsSUFBSSxDQUFDaEYsUUFBUSxFQUFFQyxLQUFLLElBQUksQ0FBQyxDQUNoRCxHQUNKLElBQUksQ0FDQSxDQUNVLEVBQ3BCZ0ksS0FBQSxDQUFBRixhQUFBLENBQUNLLFlBQUEsQ0FBQVEsa0JBQWtCLFFBQ2xCWCxLQUFBLENBQUFGLGFBQUEsQ0FBQ29CLFdBQUEsQ0FBQVEsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUU1RSxJQUFJLENBQUNaLFFBQVEsQ0FBQ3hGLElBQUk7Y0FDN0JpTCxPQUFPLEVBQUU7Z0JBQ1IsZ0JBQWdCLEVBQUU1QixLQUFBLENBQUFGLGFBQUEsQ0FBQ3NCLEtBQUEsQ0FBQW1KLGlDQUFpQztrQkFBQ3hOLElBQUksRUFBRUEsSUFBSTtrQkFBRWpGLElBQUksRUFBRUE7Z0JBQUksRUFBSTtnQkFDL0UsZ0JBQWdCLEVBQUVrSSxLQUFBLENBQUFGLGFBQUEsQ0FBQ3NCLEtBQUEsQ0FBQW1KLGlDQUFpQztrQkFBQ3hOLElBQUksRUFBRUEsSUFBSTtrQkFBRWpGLElBQUksRUFBRUE7Z0JBQUksRUFBSTtnQkFDL0VpSyxNQUFNLEVBQUUvQixLQUFBLENBQUFGLGFBQUEsQ0FBQ3NCLEtBQUEsQ0FBQW1KLGlDQUFpQztrQkFBQ3hOLElBQUksRUFBRUEsSUFBSTtrQkFBRWpGLElBQUksRUFBRUE7Z0JBQUksRUFBSTtnQkFDckUsaUJBQWlCLEVBQUVrSSxLQUFBLENBQUFGLGFBQUEsQ0FBQy9ELGVBQUEsQ0FBQThPLDJDQUEyQztrQkFBQzlOLElBQUksRUFBRUEsSUFBSTtrQkFBRWpGLElBQUksRUFBRUE7Z0JBQUksRUFBSTtnQkFDMUZ1RSxNQUFNLEVBQUUyRCxLQUFBLENBQUFGLGFBQUEsQ0FBQzlELE9BQUEsQ0FBQThPLG1DQUFtQztrQkFBQy9OLElBQUksRUFBRUEsSUFBSTtrQkFBRWpGLElBQUksRUFBRUE7Z0JBQUk7O1lBQ25FLEVBQ0EsQ0FDa0IsQ0FDQyxDQUNkO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEVBLElBQUFrSSxLQUFBLEdBQUF6TCxPQUFBO1VBQ0EsSUFBQTBMLFFBQUEsR0FBQTFMLE9BQUE7VUFDQSxJQUFBMk0sV0FBQSxHQUFBM00sT0FBQTtVQUVNLFNBQVVzVywyQ0FBMkNBLENBQUM7WUFBRTlOLElBQUk7WUFBRWpGO1VBQUksQ0FBRTtZQUN6RSxNQUFNO2NBQUVrRztZQUFLLENBQUUsR0FBRyxJQUFBaUMsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUV2QyxPQUNDTixLQUFBLENBQUFGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQTZCLEdBQzNDUixLQUFBLENBQUFGLGFBQUEsWUFBSS9DLElBQUksQ0FBQ1osUUFBUSxDQUFDM0YsV0FBVyxDQUFLLEVBQ2xDd0osS0FBQSxDQUFBRixhQUFBLGFBQUs5QixLQUFLLENBQUNsSSxVQUFVLENBQUN1VSxjQUFjLENBQUNVLGFBQWEsQ0FBQ3JVLEtBQUssQ0FBTSxFQUM5RHNKLEtBQUEsQ0FBQUYsYUFBQSxDQUFDb0IsV0FBQSxDQUFBOEosV0FBVztjQUNYalEsTUFBTSxFQUFFO2dCQUNQLEdBQUdnQyxJQUFJLENBQUNnSjs7WUFDUixHQUVBL0gsS0FBSyxDQUFDbEksVUFBVSxDQUFDdVUsY0FBYyxDQUFDVSxhQUFhLENBQUNFLE1BQU0sQ0FDeEMsQ0FDVDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQSxJQUFBakwsS0FBQSxHQUFBekwsT0FBQTtVQUNBLElBQUEwTCxRQUFBLEdBQUExTCxPQUFBO1VBRU0sU0FBVTJWLGtDQUFrQ0EsQ0FBQztZQUFFbk47VUFBSSxDQUFFO1lBQzFELE1BQU07Y0FBRTNHLElBQUk7Y0FBRThVLFFBQVE7Y0FBRXJWO1lBQU0sQ0FBRSxHQUFHa0gsSUFBSTtZQUN2QyxNQUFNO2NBQUVpQjtZQUFLLENBQUUsR0FBRyxJQUFBaUMsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUV2QyxPQUNDTixLQUFBLENBQUFGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQXlDLEdBQ3ZEUixLQUFBLENBQUFGLGFBQUEsY0FDQ0UsS0FBQSxDQUFBRixhQUFBLGFBQUsxSixJQUFJLENBQU0sRUFDZjRKLEtBQUEsQ0FBQUYsYUFBQSxZQUFJb0wsUUFBUSxDQUFLLENBQ1osRUFFTmxMLEtBQUEsQ0FBQUYsYUFBQSxjQUNDRSxLQUFBLENBQUFGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDUixLQUFBLENBQUFGLGFBQUEsZUFBT2pLLE1BQU0sQ0FBQ3NDLElBQUksQ0FBUSxFQUMxQjZILEtBQUEsQ0FBQUYsYUFBQSxlQUFPOUIsS0FBSyxDQUFDbEksVUFBVSxDQUFDcVYsaUJBQWlCLENBQUN0VixNQUFNLENBQUM4RixJQUFJLENBQUMsQ0FBUSxDQUN6RCxDQUNELENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0QkEsSUFBQXFFLEtBQUEsR0FBQXpMLE9BQUE7VUFHQSxJQUFBMEwsUUFBQSxHQUFBMUwsT0FBQTtVQUlNLFNBQVV1VyxtQ0FBbUNBLENBQUM7WUFBRS9OLElBQUk7WUFBRWpGO1VBQUksQ0FBRTtZQUNqRSxNQUFNO2NBQUVrRztZQUFLLENBQUUsR0FBRyxJQUFBaUMsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUV2QyxNQUFNMEcsTUFBTSxHQUFHakssSUFBSSxDQUFDMUYsVUFBVSxDQUFDa0IsR0FBRyxDQUFDMUIsU0FBUyxJQUFHO2NBQzlDLE9BQ0NtSixLQUFBLENBQUFGLGFBQUE7Z0JBQUtVLFNBQVMsRUFBQyx1QkFBdUI7Z0JBQUNxRyxHQUFHLEVBQUUsR0FBRzlKLElBQUksQ0FBQzFHLEVBQUUsSUFBSVEsU0FBUztjQUFFLEdBQ3BFbUosS0FBQSxDQUFBRixhQUFBLGNBQ0NFLEtBQUEsQ0FBQUYsYUFBQSxhQUNFL0MsSUFBSSxDQUFDbEcsU0FBUyxDQUFDLENBQUNzQixJQUFJLEUsS0FBRzRFLElBQUksQ0FBQ2xHLFNBQVMsQ0FBQyxDQUFDVCxJQUFJLENBQ3hDLENBQ0EsRUFDTjRKLEtBQUEsQ0FBQUYsYUFBQSxjQUNDRSxLQUFBLENBQUFGLGFBQUEsZUFBTy9DLElBQUksQ0FBQ2xHLFNBQVMsQ0FBQyxDQUFDaVIsUUFBUSxDQUFRLENBQ2xDLENBQ0Q7WUFFUixDQUFDLENBQUM7WUFFRixPQUFPOUgsS0FBQSxDQUFBRixhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUE0QixHQUFFd0csTUFBTSxDQUFPO1VBQ2xFOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQSxJQUFBckgsTUFBQSxHQUFBcEwsT0FBQTtVQUNBLElBQUE0UCxNQUFBLEdBQUE1UCxPQUFBO1VBVU87VUFBVyxTQUFVcVIsU0FBU0EsQ0FBQztZQUNyQ2pLLElBQUk7WUFFSjZFO1VBQVMsQ0FDSTtZQUNiLE1BQU15QyxHQUFHLEdBQUcsMkJBQTJCekMsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUV6RSxPQUNDYixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNxRSxNQUFBLENBQUFzQixLQUFLO2NBQUNqRixTQUFTLEVBQUV5QztZQUFHLEdBQ3BCdEQsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxZQUFJbkUsSUFBSSxDQUFLLENBQ047VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQXFFLEtBQUEsR0FBQXpMLE9BQUE7VUFDQSxJQUFBNE4sTUFBQSxHQUFBNU4sT0FBQTtVQUNBLElBQUEyTCxLQUFBLEdBQUEzTCxPQUFBO1VBQ0EsSUFBQThELFNBQUEsR0FBQTlELE9BQUE7VUFDQSxJQUFBNk4sTUFBQSxHQUFBN04sT0FBQTtVQUNBLElBQUEwTCxRQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQTRQLE1BQUEsR0FBQTVQLE9BQUE7VUFDQSxJQUFBZ08sV0FBQSxHQUFBaE8sT0FBQTtVQUVNLFNBQVU2Vyx3QkFBd0JBLENBQUM7WUFBRXJPO1VBQUksQ0FBRTtZQUNoRCxNQUFNO2NBQUVsSSxLQUFLO2NBQUVtSjtZQUFLLENBQUUsR0FBRyxJQUFBaUMsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUM5QyxNQUFNO2NBQUV4SSxJQUFJLEVBQUVnSjtZQUFPLENBQUUsR0FBRy9ELElBQUk7WUFDOUIsTUFBTSxDQUFDaEgsS0FBSyxFQUFFc1YsUUFBUSxDQUFDLEdBQUdyTCxLQUFLLENBQUMyQyxRQUFRLENBQUM1RixJQUFJLENBQUNqSCxVQUFVLENBQUNDLEtBQUssQ0FBQztZQUMvRCxNQUFNLENBQUM0SSxRQUFRLEVBQUVpRSxXQUFXLENBQUMsR0FBRzVDLEtBQUssQ0FBQzJDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTUksU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEJILFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakIvTixLQUFLLENBQUN3SyxhQUFhLEVBQUUsQ0FBQzJELE9BQU8sQ0FBQyxNQUFLO2dCQUNsQ0osV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDbEJ5SSxRQUFRLENBQUMsQ0FBQyxHQUFHdE8sSUFBSSxDQUFDakgsVUFBVSxDQUFDQyxLQUFLLENBQUMsQ0FBQztjQUNyQyxDQUFDLENBQUM7WUFDSCxDQUFDO1lBRUQsTUFBTWtOLEdBQUcsR0FBRyxzQkFBc0J0RSxRQUFRLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUNsRTtZQUNBLE1BQU0wRSxVQUFVLEdBQXdELENBQUMsQ0FBQ3JGLEtBQUssQ0FBQ3FGLFVBQVUsQ0FBQ3RGLFVBQVUsQ0FBQyxDQUFDO1lBRXZHLE9BQ0NpQyxLQUFBLENBQUFGLGFBQUE7Y0FBS1UsU0FBUyxFQUFFeUM7WUFBRyxHQUNsQmpELEtBQUEsQ0FBQUYsYUFBQTtjQUFRVSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NSLEtBQUEsQ0FBQUYsYUFBQTtjQUFTVSxTQUFTLEVBQUM7WUFBK0MsR0FDakVSLEtBQUEsQ0FBQUYsYUFBQSxjQUNDRSxLQUFBLENBQUFGLGFBQUEsYUFBS2dCLE9BQU8sQ0FBQzFLLElBQUksQ0FBTSxFQUN2QjRKLEtBQUEsQ0FBQUYsYUFBQSxDQUFDeUMsV0FBQSxDQUFBZ0IsVUFBVTtjQUFDL0MsU0FBUyxFQUFDLG1CQUFtQjtjQUFDekssS0FBSyxFQUFFc047WUFBVSxFQUFJLENBQzFELEVBRU5yRCxLQUFBLENBQUFGLGFBQUEsY0FDQ0UsS0FBQSxDQUFBRixhQUFBLENBQUNzQyxNQUFBLENBQUFvQixVQUFVO2NBQUNyTCxJQUFJLEVBQUMsU0FBUztjQUFDcUksU0FBUyxFQUFDLFFBQVE7Y0FBQzBDLE9BQU8sRUFBRUg7WUFBUyxFQUFJLEVBQ3BFL0MsS0FBQSxDQUFBRixhQUFBLENBQUNxQyxNQUFNLENBQUNzQixXQUFXLE9BQUcsQ0FDakIsQ0FDRyxDQUNGLEVBQ1R6RCxLQUFBLENBQUFGLGFBQUE7Y0FBU1UsU0FBUyxFQUFDO1lBQW9CLEdBQ3JDekssS0FBSyxDQUFDd0UsTUFBTSxHQUNaeUYsS0FBQSxDQUFBRixhQUFBLENBQUNJLEtBQUEsQ0FBQWEsSUFBSTtjQUNKUCxTQUFTLEVBQUMsMEJBQTBCO2NBQ3BDekssS0FBSyxFQUFFQSxLQUFLO2NBQ1ptQixLQUFLLEVBQUU7Z0JBQUVZLElBQUksRUFBRWdKO2NBQU8sQ0FBRTtjQUN4QkcsT0FBTyxFQUFFNUksU0FBQSxDQUFBb1M7WUFBeUIsRUFDakMsR0FFRnpLLEtBQUEsQ0FBQUYsYUFBQSxDQUFDcUUsTUFBQSxDQUFBeUIsU0FBUztjQUFDakssSUFBSSxFQUFFcUMsS0FBSyxDQUFDRCxVQUFVLENBQUNpSCxLQUFLLENBQUN0TztZQUFLLEVBQzdDLENBQ1EsQ0FDTDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3REQSxJQUFBd0osS0FBQSxHQUFBM0wsT0FBQTtVQUNBLElBQUFvTCxNQUFBLEdBQUFwTCxPQUFBO1VBQ0EsSUFBQTBMLFFBQUEsR0FBQTFMLE9BQUE7VUFDQSxJQUFBMEUsS0FBQSxHQUFBMUUsT0FBQTtVQUVPO1VBQVUsU0FDUitXLFdBQVdBLENBQUE7WUFDbkIsTUFBTTtjQUFFelc7WUFBSyxDQUFFLEdBQUcsSUFBQW9MLFFBQUEsQ0FBQUssbUJBQW1CLEdBQUU7WUFFdkMsT0FDQ1gsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFBSCxNQUFBLENBQUE3RSxPQUFBLENBQUFpRixRQUFBLFFBQ0NKLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQWlCLEdBQy9CYixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNJLEtBQUEsQ0FBQWEsSUFBSTtjQUFDUCxTQUFTLEVBQUMsMkJBQTJCO2NBQUN6SyxLQUFLLEVBQUVsQixLQUFLLENBQUNnRCxZQUFZO2NBQUVvSixPQUFPLEVBQUVoSSxLQUFBLENBQUFDO1lBQUksRUFBSSxDQUNuRixDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJBLElBQUF5RyxNQUFBLEdBQUFwTCxPQUFBO1VBQ0EsSUFBQTBMLFFBQUEsR0FBQTFMLE9BQUE7VUFDQSxJQUFBZ1gsTUFBQSxHQUFBaFgsT0FBQTtVQUNBLElBQUFpWCxhQUFBLEdBQUFqWCxPQUFBO1VBQ0EsSUFBQThVLFFBQUEsR0FBQTlVLE9BQUE7VUFFTSxTQUFVa1gsa0JBQWtCQSxDQUFDO1lBQUUxTztVQUFJLENBQUU7WUFDMUMsTUFBTTtjQUFFakYsSUFBSTtjQUFFcUUsUUFBUTtjQUFFNUM7WUFBVyxDQUFFLEdBQUd3RCxJQUFJO1lBQzVDLE1BQU07Y0FBRTBGLGFBQWE7Y0FBRTVOO1lBQUssQ0FBRSxHQUFHLElBQUFvTCxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBQ3RELE1BQU1ELG1CQUFtQixHQUFHOUcsV0FBVyxDQUFDekQsVUFBVSxDQUFDUCxHQUFHLENBQUM0RyxRQUFRLENBQUM5RixFQUFFLENBQUM7WUFDbkUsTUFBTTJRLE1BQU0sR0FBRyxFQUFFO1lBRWpCLElBQUk3SyxRQUFRLENBQUN4RixJQUFJLEtBQUssWUFBWSxJQUFJd0YsUUFBUSxDQUFDdVAsT0FBTyxLQUFLLGlCQUFpQixJQUFJOVYsSUFBSSxDQUFDQSxJQUFJLEVBQUU7Y0FDMUZvUixNQUFNLENBQUNqTyxJQUFJLENBQ1Y0RyxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLGVBQ0UvQyxJQUFJLENBQUNuSCxJQUFJLENBQUNtUSxRQUFRLENBQUNFLE9BQU8sRSxNQUFJbEosSUFBSSxDQUFDbkgsSUFBSSxDQUFDbVEsUUFBUSxDQUFDQyxLQUFLLENBQ2pELENBQ1A7O1lBR0YsTUFBTTlDLE9BQU8sR0FBR0MsS0FBSyxJQUFHO2NBQ3ZCQSxLQUFLLENBQUN3RyxlQUFlLEVBQUU7Y0FDdkJ4RyxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QixNQUFNM0YsUUFBUSxHQUFHNUksS0FBSyxDQUFDaUssZ0JBQWdCLENBQUNoSCxJQUFJLENBQUN6QixFQUFFLENBQUM7Y0FFaERvTSxhQUFhLENBQUM7Z0JBQ2J2TixJQUFJLEVBQUUsSUFBSTtnQkFDVjJJLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCakksSUFBSSxFQUFFO2tCQUNMNkgsUUFBUTtrQkFDUmlGLFVBQVUsRUFBRXZHLFFBQVEsQ0FBQzlGLEVBQUU7a0JBQ3ZCLEdBQUcwRzs7ZUFFSixDQUFDO1lBQ0gsQ0FBQztZQUVELE1BQU1KLEtBQUssR0FBRzBELG1CQUFtQixFQUFFcEksUUFBUSxFQUFFWixVQUFVLEVBQUVrQixHQUFHLENBQUN3RSxJQUFJLElBQUc7Y0FDbkUsT0FDQzRDLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ3VKLFFBQUEsQ0FBQVEsT0FBTztnQkFBQ3RFLE9BQU8sRUFBRSxHQUFHeEksSUFBSSxDQUFDM0csSUFBSSxLQUFLMkcsSUFBSSxDQUFDbEgsTUFBTSxDQUFDOEYsSUFBSSxFQUFFO2dCQUFFa0wsR0FBRyxFQUFFLEdBQUc5SixJQUFJLENBQUMzRyxJQUFJLElBQUkyRyxJQUFJLENBQUNsSCxNQUFNLENBQUM4RixJQUFJO2NBQUUsR0FDN0ZnRSxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUFILE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWlGLFFBQUEsUUFBR2hELElBQUksQ0FBQ2xILE1BQU0sQ0FBQ3NDLElBQUksQ0FBSSxDQUNkO1lBRVosQ0FBQyxDQUFDO1lBRUYsT0FDQ3dILE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBSW9ELE9BQU8sRUFBRUEsT0FBTztjQUFFMkQsR0FBRyxFQUFFLEdBQUcvTyxJQUFJLENBQUN6QixFQUFFLElBQUk4RixRQUFRLENBQUM5RixFQUFFLEVBQUU7Y0FBRW1LLFNBQVMsRUFBQztZQUFtQixHQUNwRmIsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQTtjQUFLVSxTQUFTLEVBQUM7WUFBMkIsR0FDekNiLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsY0FDQ0gsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDMEwsYUFBQSxDQUFBRyxZQUFZO2NBQUNoVixJQUFJLEVBQUV3RixRQUFRLENBQUN4RjtZQUFJLEVBQUksQ0FDaEMsRUFDTmdKLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsZUFDQ0gsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQTtjQUFNVSxTQUFTLEVBQUM7WUFBZ0IsR0FBRXJFLFFBQVEsQ0FBQ3pGLEtBQUssQ0FBUSxFQUN4RGlKLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ3lMLE1BQUEsQ0FBQUssc0JBQXNCO2NBQUM3TyxJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUNoQyxDQUNGLEVBRU40QyxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUE0QixHQUMxQ2IsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQTtjQUFLVSxTQUFTLEVBQUM7WUFBNEMsRUFBTyxFQUNsRWIsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxjQUFNbkQsS0FBSyxDQUFPLENBQ2IsQ0FDRjtVQUVQOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlEQSxJQUFBZ0QsTUFBQSxHQUFBcEwsT0FBQTtVQUNBLElBQUE2TixNQUFBLEdBQUE3TixPQUFBO1VBRU0sU0FBVXNYLHFCQUFxQkEsQ0FBQztZQUFFOU87VUFBSSxDQUFFO1lBQzdDLE1BQU07Y0FBRVosUUFBUTtjQUFFNUM7WUFBVyxDQUFFLEdBQUd3RCxJQUFJO1lBQ3RDLE1BQU1zRCxtQkFBbUIsR0FBRzlHLFdBQVcsQ0FBQ3pELFVBQVUsQ0FBQ1AsR0FBRyxDQUFDNEcsUUFBUSxDQUFDOUYsRUFBRSxDQUFDO1lBQ25FLE1BQU0yUSxNQUFNLEdBQUcsRUFBRTtZQUNqQixNQUFNckssS0FBSyxHQUFHMEQsbUJBQW1CLEVBQUVwSSxRQUFRLEVBQUVaLFVBQVUsRUFBRWtCLEdBQUcsQ0FBQ3dFLElBQUksSUFBSUEsSUFBSSxFQUFFbEgsTUFBTSxFQUFFc0MsSUFBSSxDQUFDO1lBQ3hGLElBQUlnRSxRQUFRLENBQUN4RixJQUFJLEtBQUssWUFBWSxJQUFJd0YsUUFBUSxDQUFDdVAsT0FBTyxLQUFLLGlCQUFpQixJQUFJOVYsSUFBSSxDQUFDQSxJQUFJLEVBQUU7Y0FDMUZvUixNQUFNLENBQUNqTyxJQUFJLENBQ1Y0RyxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLGVBQ0UvQyxJQUFJLENBQUNuSCxJQUFJLENBQUNtUSxRQUFRLENBQUNFLE9BQU8sRSxNQUFJbEosSUFBSSxDQUFDbkgsSUFBSSxDQUFDbVEsUUFBUSxDQUFDQyxLQUFLLENBQ2pELENBQ1A7O1lBR0YsT0FDQ3JHLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQTRCLEdBQzFDYixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUE0QyxHQUN6REgsbUJBQW1CLEVBQUVFLE1BQU0sRUFBRWhHLE1BQU0sR0FBR29GLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ3NDLE1BQUEsQ0FBQTBKLElBQUk7Y0FBQzNULElBQUksRUFBQyxPQUFPO2NBQUNxSSxTQUFTLEVBQUM7WUFBWSxFQUFHLEdBQUcsSUFBSSxDQUNyRixFQUNMN0QsS0FBSyxJQUFJZ0QsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxjQUFNbkQsS0FBSyxDQUFPLENBQ3ZCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUFnRCxNQUFBLEdBQUFwTCxPQUFBO1VBQ0EsSUFBQTJNLFdBQUEsR0FBQTNNLE9BQUE7VUFDQSxJQUFBNk0sS0FBQSxHQUFBN00sT0FBQTtVQUNBLElBQUF5SCxPQUFBLEdBQUF6SCxPQUFBO1VBQ0EsSUFBQXdILGVBQUEsR0FBQXhILE9BQUE7VUFFTSxTQUFVd1gsY0FBY0EsQ0FBQztZQUFFaFA7VUFBSSxDQUFFO1lBQ3RDLE1BQU07Y0FBRWpGLElBQUk7Y0FBRXFFLFFBQVE7Y0FBRTVDO1lBQVcsQ0FBRSxHQUFHd0QsSUFBSTtZQUU1QyxNQUFNcEcsSUFBSSxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUMwSCxRQUFRLENBQUNsQyxRQUFRLENBQUN4RixJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUd3RixRQUFRLENBQUN4RixJQUFJO1lBRTVHLE9BQ0NnSixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNvQixXQUFBLENBQUFRLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFaEwsSUFBSTtjQUNmaUwsT0FBTyxFQUFFO2dCQUNSM0MsSUFBSSxFQUFFVSxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNzQixLQUFBLENBQUFxSyxrQkFBa0I7a0JBQUMxTyxJQUFJLEVBQUVBO2dCQUFJLEVBQUk7Z0JBQ3hDVixNQUFNLEVBQUVzRCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUM5RCxPQUFBLENBQUFnUSxvQkFBb0I7a0JBQUNqUCxJQUFJLEVBQUVBO2dCQUFJLEVBQUk7Z0JBQzVDLGlCQUFpQixFQUFFNEMsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDL0QsZUFBQSxDQUFBa1EsNEJBQTRCO2tCQUFDbFAsSUFBSSxFQUFFQTtnQkFBSTs7WUFDM0QsRUFDQTtVQUVKOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBNEMsTUFBQSxHQUFBcEwsT0FBQTtVQUNBLElBQUEwTCxRQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQTZOLE1BQUEsR0FBQTdOLE9BQUE7VUFFTSxTQUFVcVgsc0JBQXNCQSxDQUFDO1lBQUU3TztVQUFJLENBQUU7WUFDOUMsTUFBTTtjQUFFWixRQUFRO2NBQUU1QztZQUFXLENBQUUsR0FBR3dELElBQUk7WUFDdEMsTUFBTTtjQUFFaUI7WUFBSyxDQUFFLEdBQUcsSUFBQWlDLFFBQUEsQ0FBQUssbUJBQW1CLEdBQUU7WUFDdkMsTUFBTTRMLGVBQWUsR0FBRzNTLFdBQVcsQ0FBQ3pELFVBQVUsQ0FBQ2tELEdBQUcsQ0FBQ21ELFFBQVEsQ0FBQzlGLEVBQUUsQ0FBQztZQUMvRCxNQUFNZ0ssbUJBQW1CLEdBQUc5RyxXQUFXLENBQUN6RCxVQUFVLENBQUNQLEdBQUcsQ0FBQzRHLFFBQVEsQ0FBQzlGLEVBQUUsQ0FBQztZQUVuRSxJQUFJTSxJQUFJLEdBQUcsU0FBUztZQUNwQixJQUFJd1YsS0FBSyxHQUFHLFNBQVM7WUFFckIsSUFBSUQsZUFBZSxFQUFFO2NBQ3BCdlYsSUFBSSxHQUFHLFNBQVM7Y0FDaEJ3VixLQUFLLEdBQUcsTUFBTTs7WUFHZixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM5TixRQUFRLENBQUNsQyxRQUFRLENBQUN4RixJQUFJLENBQUMsRUFBRTtjQUMzRSxNQUFNeVYsYUFBYSxHQUFHL0wsbUJBQW1CLEVBQUV0SSxRQUFRLEVBQUVDLEtBQUssSUFBSSxDQUFDO2NBQy9EbVUsS0FBSyxHQUFHLEdBQUdDLGFBQWEsV0FBVzs7WUFHcEMsSUFBSWpRLFFBQVEsQ0FBQ3hGLElBQUksS0FBSyxRQUFRLElBQUlvRyxJQUFJLENBQUNuSCxJQUFJLEVBQUU7Y0FDNUMsTUFBTStHLEtBQUssR0FBR3RDLE1BQU0sQ0FBQ2dTLE1BQU0sQ0FBQ3RQLElBQUksQ0FBQ25ILElBQUksQ0FBQyxDQUNwQzJDLEdBQUcsQ0FBQzNDLElBQUksSUFBS0EsSUFBWSxDQUFDdUMsSUFBSSxDQUFDLENBQy9CbVUsSUFBSSxDQUFDLEVBQUUsQ0FBQztjQUNWSCxLQUFLLEdBQUd4UCxLQUFLO2NBQ2JoRyxJQUFJLEdBQUcsU0FBUzs7WUFHakIsSUFBSXdGLFFBQVEsQ0FBQ3hGLElBQUksS0FBSyxZQUFZLElBQUl3RixRQUFRLENBQUN1UCxPQUFPLEtBQUssaUJBQWlCLElBQUkzTyxJQUFJLENBQUNuSCxJQUFJLEVBQUU7Y0FDMUYsTUFBTTtnQkFBRXFRLE9BQU87Z0JBQUVEO2NBQUssQ0FBRSxHQUFHakosSUFBSSxDQUFDbkgsSUFBSSxDQUFDbVEsUUFBUTtjQUM3QyxJQUFJRSxPQUFPLEdBQUdELEtBQUssR0FBRyxDQUFDLEVBQUVyUCxJQUFJLEdBQUcsT0FBTztjQUN2Q3dWLEtBQUssR0FBRyxHQUFHbEcsT0FBTyxNQUFNRCxLQUFLLEVBQUU7O1lBR2hDLElBQUlrRyxlQUFlLElBQUk3TCxtQkFBbUIsRUFBRXRJLFFBQVEsRUFBRTtjQUNyRG9VLEtBQUssR0FBRyxHQUFHbk8sS0FBSyxDQUFDdU8sY0FBYyxJQUFJbE0sbUJBQW1CLEVBQUV0SSxRQUFRLENBQUNDLEtBQUssRUFBRTs7WUFHekUsTUFBTXdVLFNBQVMsR0FBR25NLG1CQUFtQixFQUFFRSxNQUFNLEVBQUVoRyxNQUFNO1lBQ3JELE1BQU0wSSxHQUFHLEdBQUcsa0JBQWtCdUosU0FBUyxHQUFHLGFBQWEsR0FBRyxFQUFFLEVBQUU7WUFDOUQsT0FDQzdNLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBS1UsU0FBUyxFQUFFeUM7WUFBRyxHQUNsQnRELE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsZUFBT3FNLEtBQUssQ0FBUSxFQUNuQkssU0FBUyxHQUFHN00sTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDc0MsTUFBQSxDQUFBMEosSUFBSTtjQUFDM1QsSUFBSSxFQUFDLE9BQU87Y0FBQ3FJLFNBQVMsRUFBQztZQUFZLEVBQUcsR0FBRyxJQUFJLENBQzNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakRBLElBQUFiLE1BQUEsR0FBQXBMLE9BQUE7VUFDQSxJQUFBMEwsUUFBQSxHQUFBMUwsT0FBQTtVQUNBLElBQUFnWCxNQUFBLEdBQUFoWCxPQUFBO1VBQ0EsSUFBQWlYLGFBQUEsR0FBQWpYLE9BQUE7VUFFTSxTQUFVMFgsNEJBQTRCQSxDQUFDO1lBQUVsUDtVQUFJLENBQUU7WUFDcEQsTUFBTTtjQUFFakYsSUFBSTtjQUFFcUUsUUFBUTtjQUFFNUM7WUFBVyxDQUFFLEdBQUd3RCxJQUFJO1lBQzVDLE1BQU07Y0FBRTBGLGFBQWE7Y0FBRTVOO1lBQUssQ0FBRSxHQUFHLElBQUFvTCxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBQ3RELE1BQU1ELG1CQUFtQixHQUFHOUcsV0FBVyxDQUFDekQsVUFBVSxDQUFDUCxHQUFHLENBQUM0RyxRQUFRLENBQUM5RixFQUFFLENBQUM7WUFFbkUsTUFBTTZNLE9BQU8sR0FBR0MsS0FBSyxJQUFHO2NBQ3ZCQSxLQUFLLENBQUN3RyxlQUFlLEVBQUU7Y0FDdkJ4RyxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QixNQUFNM0YsUUFBUSxHQUFHNUksS0FBSyxDQUFDaUssZ0JBQWdCLENBQUNoSCxJQUFJLENBQUN6QixFQUFFLENBQUM7Y0FFaERvTSxhQUFhLENBQUM7Z0JBQ2J2TixJQUFJLEVBQUUsSUFBSTtnQkFDVjJJLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCakksSUFBSSxFQUFFO2tCQUNMNkgsUUFBUTtrQkFDUmlGLFVBQVUsRUFBRXZHLFFBQVEsQ0FBQzlGLEVBQUU7a0JBQ3ZCLEdBQUcwRzs7ZUFFSixDQUFDO1lBQ0gsQ0FBQztZQUVEbUMsT0FBTyxDQUFDeUwsR0FBRyxDQUFDLEdBQUcsRUFBRXRLLG1CQUFtQixFQUFFMEYsUUFBUSxDQUFDO1lBQy9DLE9BQ0NwRyxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQUlvRCxPQUFPLEVBQUVBLE9BQU87Y0FBRTJELEdBQUcsRUFBRSxHQUFHL08sSUFBSSxDQUFDekIsRUFBRSxJQUFJOEYsUUFBUSxDQUFDOUYsRUFBRSxFQUFFO2NBQUVtSyxTQUFTLEVBQUM7WUFBbUIsR0FDcEZiLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQTJCLEdBQ3pDYixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLGNBQ0NILE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQzBMLGFBQUEsQ0FBQUcsWUFBWTtjQUFDaFYsSUFBSSxFQUFFd0YsUUFBUSxDQUFDeEY7WUFBSSxFQUFJLENBQ2hDLEVBQ05nSixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLGVBQ0NILE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBTVUsU0FBUyxFQUFDO1lBQWdCLEdBQUVyRSxRQUFRLENBQUN6RixLQUFLLENBQVEsRUFDeERpSixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUN5TCxNQUFBLENBQUFLLHNCQUFzQjtjQUFDN08sSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDaEMsQ0FDRixFQUVMc0QsbUJBQW1CLEVBQUUwRixRQUFRLEdBQzdCcEcsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQTtjQUFLVSxTQUFTLEVBQUM7WUFBNEIsR0FDekNILG1CQUFtQixDQUFDMEYsUUFBUSxDQUFDQyxLQUFLLEUsS0FBRzNGLG1CQUFtQixDQUFDMEYsUUFBUSxDQUFDRSxPQUFPLENBQ3JFLEdBQ0gsSUFBSSxDQUNKO1VBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBLElBQUF0RyxNQUFBLEdBQUFwTCxPQUFBO1VBQ0EsSUFBQTBMLFFBQUEsR0FBQTFMLE9BQUE7VUFDQSxJQUFBZ1gsTUFBQSxHQUFBaFgsT0FBQTtVQUNBLElBQUFpWCxhQUFBLEdBQUFqWCxPQUFBO1VBR00sU0FBVXlYLG9CQUFvQkEsQ0FBQztZQUFFalA7VUFBSSxDQUFFO1lBQzVDLE1BQU07Y0FBRWpGLElBQUk7Y0FBRXFFLFFBQVE7Y0FBRTVDO1lBQVcsQ0FBRSxHQUFHd0QsSUFBSTtZQUM1QyxNQUFNO2NBQUUwRixhQUFhO2NBQUU1TjtZQUFLLENBQUUsR0FBRyxJQUFBb0wsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUN0RCxNQUFNRCxtQkFBbUIsR0FBRzlHLFdBQVcsQ0FBQ3pELFVBQVUsQ0FBQ1AsR0FBRyxDQUFDNEcsUUFBUSxDQUFDOUYsRUFBRSxDQUFDO1lBRW5FLE1BQU02TSxPQUFPLEdBQUdDLEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDd0csZUFBZSxFQUFFO2NBQ3ZCeEcsS0FBSyxDQUFDQyxjQUFjLEVBQUU7Y0FDdEIsTUFBTTNGLFFBQVEsR0FBRzVJLEtBQUssQ0FBQ2lLLGdCQUFnQixDQUFDaEgsSUFBSSxDQUFDekIsRUFBRSxDQUFDO2NBRWhEb00sYUFBYSxDQUFDO2dCQUNidk4sSUFBSSxFQUFFLElBQUk7Z0JBQ1YySSxJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QmpJLElBQUksRUFBRTtrQkFDTDZILFFBQVE7a0JBQ1JpRixVQUFVLEVBQUV2RyxRQUFRLENBQUM5RixFQUFFO2tCQUN2QixHQUFHMEc7O2VBRUosQ0FBQztZQUNILENBQUM7WUFFRG1DLE9BQU8sQ0FBQ3lMLEdBQUcsQ0FBQyxFQUFFLEVBQUV0SyxtQkFBbUIsQ0FBQztZQUNwQyxPQUNDVixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQUlvRCxPQUFPLEVBQUVBLE9BQU87Y0FBRTJELEdBQUcsRUFBRSxHQUFHL08sSUFBSSxDQUFDekIsRUFBRSxJQUFJOEYsUUFBUSxDQUFDOUYsRUFBRSxFQUFFO2NBQUVtSyxTQUFTLEVBQUM7WUFBbUIsR0FDcEZiLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQTJCLEdBQ3pDYixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLGNBQ0NILE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQzBMLGFBQUEsQ0FBQUcsWUFBWTtjQUFDaFYsSUFBSSxFQUFFd0YsUUFBUSxDQUFDeEY7WUFBSSxFQUFJLENBQ2hDLEVBQ05nSixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLGVBQ0NILE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBTVUsU0FBUyxFQUFDO1lBQWdCLEdBQUVyRSxRQUFRLENBQUN6RixLQUFLLENBQVEsRUFDeERpSixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUN5TCxNQUFBLENBQUFLLHNCQUFzQjtjQUFDN08sSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDaEMsQ0FDRixFQUVONEMsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQTtjQUFLVSxTQUFTLEVBQUM7WUFBNEIsR0FDMUNiLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQTRDLEVBQU8sRUFDbEViLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsY0FBTU8sbUJBQW1CLEVBQUUxRCxLQUFLLENBQU8sQ0FDbEMsQ0FDRjtVQUVQOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlDQSxJQUFBZ0QsTUFBQSxHQUFBcEwsT0FBQTtVQUNBLElBQUEwTCxRQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQTJMLEtBQUEsR0FBQTNMLE9BQUE7VUFDQSxJQUFBOEQsU0FBQSxHQUFBOUQsT0FBQTtVQUNBLElBQUE2VSxNQUFBLEdBQUE3VSxPQUFBO1VBQ0EsSUFBQTJNLFdBQUEsR0FBQTNNLE9BQUE7VUFHTSxTQUFVMkUsSUFBSUEsQ0FBQztZQUFFNkQ7VUFBSSxDQUFFO1lBQzVCLE1BQU07Y0FBRWlCLEtBQUs7Y0FBRTNDLEtBQUs7Y0FBRXhHLEtBQUs7Y0FBRTROO1lBQWEsQ0FBRSxHQUFHLElBQUF4QyxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBQ3BFLE1BQU07Y0FBRXhJO1lBQUksQ0FBRSxHQUFHaUYsSUFBSTtZQUNyQixNQUFNZ08sYUFBYSxHQUFHMVEsTUFBTSxDQUFDQyxJQUFJLENBQUN5QyxJQUFJLENBQUNqSCxVQUFVLENBQUM7WUFDbEQsTUFBTTJXLGFBQWEsR0FBR3BSLEtBQUssQ0FBQ3ZGLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDd0MsR0FBRyxDQUFDNEQsUUFBUSxJQUFHO2NBQzNELE9BQU87Z0JBQ05BLFFBQVE7Z0JBQ1JyRSxJQUFJLEVBQUVpRixJQUFJLENBQUNqRixJQUFJO2dCQUNmK08sR0FBRyxFQUFFMUssUUFBUSxDQUFDOUYsRUFBRTtnQkFDaEJrRCxXQUFXLEVBQUV3RCxJQUFJO2dCQUNqQm5ILElBQUksRUFBRW1ILElBQUksQ0FBQ2pILFVBQVUsQ0FBQ3FHLFFBQVEsQ0FBQzlGLEVBQUUsQ0FBQyxFQUFFVDtlQUNwQztZQUNGLENBQUMsQ0FBQztZQUVGLE1BQU04VyxjQUFjLEdBQUcsZ0JBQWdCN1gsS0FBSyxDQUFDaUosWUFBWSwwQkFBMEJmLElBQUksQ0FBQ2pGLElBQUksQ0FBQ3pCLEVBQUUsRUFBRTtZQUNqRyxNQUFNc1csV0FBVyxHQUFHeEosS0FBSyxJQUFHO2NBQzNCQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUV0QlgsYUFBYSxDQUFDO2dCQUNidk4sSUFBSSxFQUFFLElBQUk7Z0JBQ1YySSxJQUFJLEVBQUUsU0FBUztnQkFDZmpJLElBQUksRUFBRW1IO2VBQ04sQ0FBQztjQUNGNlAsWUFBWSxDQUFDQyxPQUFPLENBQUMsaUJBQWlCLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDaFEsSUFBSSxDQUFDakYsSUFBSSxDQUFDLENBQUM7Y0FDbEUsT0FBTyxLQUFLO1lBQ2IsQ0FBQztZQUVELE1BQU02UCxHQUFHLEdBQUc3UCxJQUFJLEVBQUUzQixRQUFRLEdBQ3ZCMkIsSUFBSSxDQUFDM0IsUUFBUSxHQUNiLHdGQUF3RjtZQUUzRixPQUNDd0osTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQTtjQUFJVSxTQUFTLEVBQUM7WUFBMkIsR0FDeENiLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsaUJBQ0NILE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ3NKLE1BQUEsQ0FBQWEsS0FBSztjQUFDdEMsR0FBRyxFQUFFQSxHQUFHO2NBQUVxRixHQUFHLEVBQUUsR0FBR2xWLElBQUksQ0FBQzFCLElBQUksU0FBUztjQUFFb0ssU0FBUyxFQUFDO1lBQWUsRUFBRyxFQUN6RWIsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDb0IsV0FBQSxDQUFBNkksSUFBSTtjQUFDQyxJQUFJLEVBQUUwQyxjQUFjO2NBQUV4SixPQUFPLEVBQUV5SjtZQUFXLEdBQy9DaE4sTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxhQUFLaEksSUFBSSxDQUFDMUIsSUFBSSxDQUFNLENBQ2QsQ0FDQyxFQUNUdUosTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQTtjQUFLVSxTQUFTLEVBQUM7WUFBYyxHQUs1QmIsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDSSxLQUFBLENBQUFhLElBQUk7Y0FBQ1AsU0FBUyxFQUFDLG1DQUFtQztjQUFDekssS0FBSyxFQUFFMFcsYUFBYTtjQUFFeEwsT0FBTyxFQUFFNUksU0FBQSxDQUFBMFQ7WUFBYyxFQUFJLENBQ2hHLENBQ0Y7VUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4REEsSUFBQXBNLE1BQUEsR0FBQXBMLE9BQUE7VUFDQSxJQUFBeVAsU0FBQSxHQUFBelAsT0FBQTtVQUNBLElBQUF5SCxPQUFBLEdBQUF6SCxPQUFBO1VBQ0E7VUFFTSxTQUFVMFksTUFBTUEsQ0FBQztZQUFFclg7VUFBSSxDQUFFO1lBQzlCLE9BQ0MrSixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQVNVLFNBQVMsRUFBQztZQUFtQixHQUVyQ2IsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDa0UsU0FBQSxDQUFBa0osYUFBYSxPQUFHLEVBQ2pCdk4sTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDOUQsT0FBQSxDQUFBbVIsV0FBVyxPQUFHLENBQ047VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQSxJQUFBeE4sTUFBQSxHQUFBcEwsT0FBQTtVQUNBLElBQUE2WSxPQUFBLEdBQUE3WSxPQUFBO1VBQ0EsSUFBQTBMLFFBQUEsR0FBQTFMLE9BQUE7VUFFQSxJQUFBOFksU0FBQSxHQUFBOVksT0FBQTtVQUVNLFNBQVUyWSxhQUFhQSxDQUFBO1lBQzVCLE1BQU07Y0FBRXJZLEtBQUs7Y0FBRW1KO1lBQUssQ0FBRSxHQUFHLElBQUFpQyxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBQzlDbEYsVUFBVSxDQUFDdkcsS0FBSyxHQUFHQSxLQUFLO1lBQ3hCLElBQUlzSCxRQUFRO1lBQ1o5QixNQUFNLENBQUNDLElBQUksQ0FBQ3pGLEtBQUssQ0FBQ3dHLEtBQUssQ0FBQ3ZGLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDLENBQUM0QyxPQUFPLENBQUN1TyxLQUFLLElBQUc7Y0FDekQsSUFBSS9LLFFBQVEsRUFBRTtjQUNkLE1BQU1tUixPQUFPLEdBQUd6WSxLQUFLLENBQUN3RyxLQUFLLENBQUN2RixVQUFVLENBQUNDLEtBQUssR0FBR21SLEtBQUssQ0FBQztjQUNyRCxJQUFJb0csT0FBTyxJQUFJQSxPQUFPLENBQUMzVyxJQUFJLEtBQUssaUJBQWlCLEVBQUV3RixRQUFRLEdBQUdtUixPQUFPO1lBQ3RFLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQ25SLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFFMUIsTUFBTW9SLDhCQUE4QixHQUFJMVYsWUFBNEIsSUFBWTtjQUMvRSxPQUFPQSxZQUFZLENBQUM0QyxNQUFNLENBQUMsQ0FBQ3pDLEtBQUssRUFBRStFLElBQUksS0FBSTtnQkFDMUMsTUFBTXlRLGVBQWUsR0FBR25ULE1BQU0sQ0FBQ2dTLE1BQU0sQ0FBQ3RQLElBQUksQ0FBQ2pILFVBQVUsQ0FBQyxDQUFDMlgsSUFBSSxDQUFDdFIsUUFBUSxJQUFHO2tCQUN0RSxNQUFNNEosUUFBUSxHQUFHNUosUUFBUSxDQUFDdkcsSUFBSSxFQUFFbVEsUUFBUTtrQkFDeEMsT0FDQ0EsUUFBUSxJQUNSQSxRQUFRLENBQUNDLEtBQUssS0FBSzFDLFNBQVMsSUFDNUJ5QyxRQUFRLENBQUNFLE9BQU8sS0FBSzNDLFNBQVMsSUFDOUJ5QyxRQUFRLENBQUN1RSxLQUFLLEtBQUtoSCxTQUFTO2dCQUU5QixDQUFDLENBQUM7Z0JBQ0YsT0FBT3RMLEtBQUssSUFBSXdWLGVBQWUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2NBQ3pDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTixDQUFDO1lBRUQsTUFBTUUsSUFBSSxHQUFHSCw4QkFBOEIsQ0FBQzFZLEtBQUssQ0FBQ3dHLEtBQUssQ0FBQ3hELFlBQVksQ0FBQztZQUVyRSxPQUNDOEgsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQTtjQUFTVSxTQUFTLEVBQUM7WUFBYyxHQUNoQ2IsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxhQUFLM0QsUUFBUSxDQUFDekYsS0FBSyxDQUFNLEVBQ3pCaUosTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDc04sT0FBQSxDQUFBTyxLQUFLO2NBQ0wvTCxPQUFPLEVBQUU7Z0JBQ1JnTSxNQUFNLEVBQUUsQ0FBQy9ZLEtBQUssQ0FBQ3dHLEtBQUssQ0FBQ3hELFlBQVksQ0FBQzBDLE1BQU0sR0FBR21ULElBQUksRUFBRUEsSUFBSSxDQUFDO2dCQUN0REcsTUFBTSxFQUFFLENBQUM3UCxLQUFLLENBQUMrTSxhQUFhLENBQUMrQyxPQUFPLEVBQUU5UCxLQUFLLENBQUMrTSxhQUFhLENBQUMvRSxLQUFLLENBQUM7Z0JBQ2hFLEdBQUdxSCxTQUFBLENBQUFVLGdCQUFnQjtnQkFDbkJDLFVBQVUsRUFBRVgsU0FBQSxDQUFBWTs7WUFDWixFQUNBLENBQ087VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRE8sTUFBTUYsZ0JBQWdCLEdBQUFwWSxPQUFBLENBQUFvWSxnQkFBQSxHQUFHO1lBQy9CRyxLQUFLLEVBQUU7Y0FDTkMsT0FBTyxFQUFFLFVBQVUsQ0FBQzthQUNwQjtZQUNEQyxNQUFNLEVBQUU7Y0FDUEMsUUFBUSxFQUFFLFFBQVE7Y0FDbEJDLGVBQWUsRUFBRTthQUNqQjtZQUNEQyxLQUFLLEVBQUU7Y0FDTjVYLElBQUksRUFBRSxPQUFPO2NBQ2I2WCxNQUFNLEVBQUU7YUFDUjtZQUNEQyxVQUFVLEVBQUU7Y0FDWEMsU0FBUyxFQUFFQSxDQUFDeFIsS0FBSyxFQUFFdEgsSUFBSSxLQUFJO2dCQUMxQixNQUFNO2tCQUNMK1ksV0FBVztrQkFDWEMsQ0FBQyxFQUFFO29CQUNGQyxNQUFNLEVBQUU7c0JBQUVqQjtvQkFBTTtrQkFBRTtnQkFDbEIsQ0FDRCxHQUFHaFksSUFBSTtnQkFFUixPQUFPZ1ksTUFBTSxDQUFDZSxXQUFXLENBQUM7Y0FDM0I7O1dBRUQ7VUFFTSxNQUFNVixxQkFBcUIsR0FBQXRZLE9BQUEsQ0FBQXNZLHFCQUFBLEdBQUcsQ0FDcEM7WUFDQ2EsVUFBVSxFQUFFLEdBQUc7WUFDZmxOLE9BQU8sRUFBRTtjQUNSd00sTUFBTSxFQUFFO2dCQUNQQyxRQUFRLEVBQUU7ZUFDVjtjQUNERSxLQUFLLEVBQUU7Z0JBQ05RLEtBQUssRUFBRSxPQUFPO2dCQUNkUCxNQUFNLEVBQUU7OztXQUdWLEVBQ0Q7WUFDQ00sVUFBVSxFQUFFLEdBQUc7WUFDZmxOLE9BQU8sRUFBRTtjQUNSd00sTUFBTSxFQUFFO2dCQUNQQyxRQUFRLEVBQUUsUUFBUTtnQkFDbEJDLGVBQWUsRUFBRTtlQUNqQjtjQUNEQyxLQUFLLEVBQUU7Z0JBQ05RLEtBQUssRUFBRTs7O1dBR1QsQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuREQsSUFBQXBQLE1BQUEsR0FBQXBMLE9BQUE7VUFDQSxJQUFBNlksT0FBQSxHQUFBN1ksT0FBQTtVQUNBLElBQUEwTCxRQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQThZLFNBQUEsR0FBQTlZLE9BQUE7VUFFTSxTQUFVNFksV0FBV0EsQ0FBQTtZQUMxQixNQUFNO2NBQUV0WSxLQUFLO2NBQUVtSixLQUFLO2NBQUUzQztZQUFLLENBQUUsR0FBRyxJQUFBNEUsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUNyRCxNQUFNO2NBQUV2SyxLQUFLLEVBQUVELFVBQVU7Y0FBRTZCO1lBQUssQ0FBRSxHQUFHMEQsS0FBSyxDQUFDdkYsVUFBVTtZQUVyRCxNQUFNa1osUUFBUSxHQUFHM1UsTUFBTSxDQUFDQyxJQUFJLENBQUN4RSxVQUFVLENBQUMsQ0FBQ21aLElBQUksQ0FBQ3BJLEdBQUcsSUFBSS9RLFVBQVUsQ0FBQytRLEdBQUcsQ0FBQyxDQUFDbFEsSUFBSSxLQUFLLFFBQVEsQ0FBQztZQUN2RixJQUFJLENBQUNxWSxRQUFRLEVBQUUsT0FBTyxJQUFJO1lBQzFCLE1BQU1oSixLQUFLLEdBQUduUixLQUFLLENBQUN3RyxLQUFLLENBQUN4RCxZQUFZLENBQUM0QyxNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFcUMsSUFBSSxLQUFNQSxJQUFJLENBQUNqSCxVQUFVLENBQUNrWixRQUFRLENBQUMsR0FBR3RVLEdBQUcsR0FBRyxDQUFDLEdBQUdBLEdBQUksRUFBRSxDQUFDLENBQUM7WUFDNUcsTUFBTWdULElBQUksR0FBRzdZLEtBQUssQ0FBQ3dHLEtBQUssQ0FBQ3hELFlBQVksQ0FBQzBDLE1BQU0sR0FBR3lMLEtBQUs7WUFFcEQsT0FDQ3JHLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBU1UsU0FBUyxFQUFDO1lBQWMsR0FDaENiLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsYUFBSzlCLEtBQUssQ0FBQzNCLE1BQU0sQ0FBTSxFQUN2QnNELE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ3NOLE9BQUEsQ0FBQU8sS0FBSztjQUNML0wsT0FBTyxFQUFFO2dCQUNSZ00sTUFBTSxFQUFFLENBQUNGLElBQUksRUFBRTdZLEtBQUssQ0FBQ3dHLEtBQUssQ0FBQ3hELFlBQVksQ0FBQzBDLE1BQU0sR0FBR21ULElBQUksQ0FBQztnQkFDdERHLE1BQU0sRUFBRSxDQUFDN1AsS0FBSyxDQUFDK00sYUFBYSxDQUFDK0MsT0FBTyxFQUFFOVAsS0FBSyxDQUFDK00sYUFBYSxDQUFDL0UsS0FBSyxDQUFDO2dCQUNoRSxHQUFHcUgsU0FBQSxDQUFBVSxnQkFBZ0I7Z0JBQ25CQyxVQUFVLEVBQUVYLFNBQUEsQ0FBQVk7O1lBQ1osRUFDQSxDQUNPO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JBLElBQUFqTyxLQUFBLEdBQUF6TCxPQUFBO1VBRUEsSUFBQTJhLFFBQUEsR0FBQTNhLE9BQUE7VUFFTztVQUFVLFNBQVVvWCxZQUFZQSxDQUFDO1lBQUVoVixJQUFJO1lBQUU2SjtVQUFTLENBQXdDO1lBQ2hHLE1BQU15QyxHQUFHLEdBQUcsZ0NBQWdDdE0sSUFBSSxnQkFBZ0I2SixTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2xHLE9BQ0NSLEtBQUEsQ0FBQUYsYUFBQTtjQUFLVSxTQUFTLEVBQUV5QztZQUFHLEdBQ2xCakQsS0FBQSxDQUFBRixhQUFBLENBQUNvUCxRQUFBLENBQUFDLE9BQU87Y0FBQy9ZLElBQUksRUFBRU8sSUFBSTtjQUFFNkosU0FBUyxFQUFFeUM7WUFBRyxFQUFJLENBQ2xDO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWEEsSUFBQWpELEtBQUEsR0FBQXpMLE9BQUE7VUFDQSxJQUFBMkwsS0FBQSxHQUFBM0wsT0FBQTtVQUNBLElBQUEwRSxLQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQTBMLFFBQUEsR0FBQTFMLE9BQUE7VUFFTztVQUFVLFNBQVU0USxXQUFXQSxDQUFDO1lBQUU1RSxNQUFNO1lBQUV6STtVQUFJLENBQUU7WUFDdEQsTUFBTTtjQUFFa0c7WUFBSyxDQUFFLEdBQUcsSUFBQWlDLFFBQUEsQ0FBQUssbUJBQW1CLEdBQUU7WUFFdkMsSUFBSSxDQUFDQyxNQUFNLEVBQUVoRyxNQUFNLEVBQUUsT0FBTyxJQUFJO1lBRWhDLE9BQ0N5RixLQUFBLENBQUFGLGFBQUEsQ0FBQUUsS0FBQSxDQUFBRCxRQUFBLFFBQ0NDLEtBQUEsQ0FBQUYsYUFBQSxDQUFDSSxLQUFBLENBQUFhLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLEtBQUs7Y0FBQ1IsU0FBUyxFQUFDLGlCQUFpQjtjQUFDekssS0FBSyxFQUFFd0ssTUFBTTtjQUFFVSxPQUFPLEVBQUVoSSxLQUFBLENBQUFtVyxlQUFlO2NBQUVsWSxLQUFLLEVBQUU7Z0JBQUVZO2NBQUk7WUFBRSxFQUFJLENBQ3JHO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkEsSUFBQWtJLEtBQUEsR0FBQXpMLE9BQUE7VUFHQSxJQUFBNEwsWUFBQSxHQUFBNUwsT0FBQTtVQUVPO1VBQVUsU0FBVTZhLGVBQWVBLENBQUM7WUFBRXJTLElBQUk7WUFBRWpGO1VBQUksQ0FBRTtZQUN4RCxPQUNDa0ksS0FBQSxDQUFBRixhQUFBO2NBQVNVLFNBQVMsRUFBQztZQUEwQixHQUM1Q1IsS0FBQSxDQUFBRixhQUFBLENBQUNLLFlBQUEsQ0FBQU0sb0JBQW9CLFFBQ3BCVCxLQUFBLENBQUFGLGFBQUEsQ0FBQ0ssWUFBQSxDQUFBTyxpQkFBaUIsUUFDakJWLEtBQUEsQ0FBQUYsYUFBQSxlQUFPL0MsSUFBSSxDQUFDcEIsSUFBSSxDQUFRLENBQ0wsRUFDcEJxRSxLQUFBLENBQUFGLGFBQUEsQ0FBQ0ssWUFBQSxDQUFBUSxrQkFBa0IsUUFDbEJYLEtBQUEsQ0FBQUYsYUFBQTtjQUFLVSxTQUFTLEVBQUM7WUFBWSxHQUMxQlIsS0FBQSxDQUFBRixhQUFBLHNCQUFlLEVBRWZFLEtBQUEsQ0FBQUYsYUFBQSxjQUFNL0MsSUFBSSxDQUFDNkQsU0FBUyxDQUFDQyxTQUFTLENBQU8sRUFDckNiLEtBQUEsQ0FBQUYsYUFBQSxhQUFLaEksSUFBSSxDQUFDMUIsSUFBSSxDQUFNLEVBQ3BCNEosS0FBQSxDQUFBRixhQUFBLGNBQU0vQyxJQUFJLENBQUM2RCxTQUFTLENBQUNFLE9BQU8sQ0FBTyxDQUM5QixDQUNjLENBQ0MsQ0FDZDtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBc0IsTUFBQSxHQUFBN04sT0FBQTtVQUNBLElBQUFtUixHQUFBLEdBQUFuUixPQUFBO1VBQ0EsSUFBQXFGLE9BQUEsR0FBQXJGLE9BQUE7VUFDQSxJQUFBb0wsTUFBQSxHQUFBcEwsT0FBQTtVQUVBLElBQUE0UCxNQUFBLEdBQUE1UCxPQUFBO1VBRUEsTUFBTThhLEdBQUcsR0FBR3pWLE9BQUEsQ0FBQWtCLE9BQU0sRUFBRUMsTUFBTSxFQUFFdVUsUUFBUSxJQUFJLFFBQVE7VUFDMUMsU0FBVTdKLEtBQUtBLENBQUM7WUFBRTVRLEtBQUs7WUFBRW1KO1VBQUssQ0FBRTtZQUNyQyxPQUNDMkIsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFBSCxNQUFBLENBQUE3RSxPQUFBLENBQUFpRixRQUFBLFFBQ0NKLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQzRGLEdBQUEsQ0FBQTZKLGFBQWEsUUFDYjVQLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ3FFLE1BQUEsQ0FBQXNCLEtBQWM7Y0FBQ2pGLFNBQVMsRUFBQywwQkFBMEI7Y0FBQ3JJLElBQUksRUFBRWlLLE1BQUEsQ0FBQXdJLEtBQUssQ0FBQzRFO1lBQVUsR0FDMUU3UCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQUlVLFNBQVMsRUFBQztZQUFPLEdBQUUzTCxLQUFLLENBQUN3RyxLQUFLLENBQUNwRixNQUFNLENBQUNTLEtBQUssQ0FBTSxFQUNyRGlKLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsWUFBSTlCLEtBQUssQ0FBQ2dILEtBQUssQ0FBSyxDQUNKLENBQ0YsQ0FDZDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBaEYsS0FBQSxHQUFBekwsT0FBQTtVQUNBLElBQUE2TixNQUFBLEdBQUE3TixPQUFBO1VBRU87VUFBVSxTQUFVNGEsT0FBT0EsQ0FBQztZQUFFL1ksSUFBSTtZQUFFb0s7VUFBUyxDQUF3QztZQUMzRixNQUFNeUMsR0FBRyxHQUFHLGVBQWV6QyxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzdELE9BQU9SLEtBQUEsQ0FBQUYsYUFBQSxDQUFDc0MsTUFBQSxDQUFBdUcsT0FBTztjQUFDeFEsSUFBSSxFQUFFL0IsSUFBSTtjQUFFb0ssU0FBUyxFQUFFeUM7WUFBRyxFQUFJO1VBQy9DOzs7Ozs7Ozs7Ozs7Ozs7OztVQ05BLElBQUF0RCxNQUFBLEdBQUFwTCxPQUFBO1VBcUJPLE1BQU1rYixnQkFBZ0IsR0FBQTlaLE9BQUEsQ0FBQThaLGdCQUFBLEdBQUc5UCxNQUFBLENBQUE3RSxPQUFLLENBQUM0VSxhQUFhLENBQUMsRUFBb0MsQ0FBQztVQUNsRixNQUFNcFAsbUJBQW1CLEdBQUdBLENBQUEsS0FBTVgsTUFBQSxDQUFBN0UsT0FBSyxDQUFDNlUsVUFBVSxDQUFDRixnQkFBZ0IsQ0FBQztVQUFDOVosT0FBQSxDQUFBMkssbUJBQUEsR0FBQUEsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEI1RSxJQUFBWCxNQUFBLEdBQUFwTCxPQUFBO1VBRUEsSUFBQXFiLE9BQUEsR0FBQXJiLE9BQUE7VUFDQSxJQUFBMEwsUUFBQSxHQUFBMUwsT0FBQTtVQUNBLElBQUEyTSxXQUFBLEdBQUEzTSxPQUFBO1VBQ0EsSUFBQXNiLFFBQUEsR0FBQXRiLE9BQUE7VUFDQSxJQUFBdWIsUUFBQSxHQUFBdmIsT0FBQTtVQUNBLElBQUF3YixpQkFBQSxHQUFBeGIsT0FBQTtVQUNBLElBQUF5YixLQUFBLEdBQUF6YixPQUFBO1VBRU0sU0FBVTBiLFdBQVdBLENBQUE7WUFDMUIsTUFBTTtjQUFFQyxVQUFVO2NBQUVyYixLQUFLO2NBQUU0TjtZQUFhLENBQUUsR0FBRyxJQUFBeEMsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUVsRSxJQUFJNFAsVUFBVSxDQUFDaGIsSUFBSSxLQUFLLEtBQUssRUFBRTtZQUUvQixPQUNDeUssTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDOFAsT0FBQSxDQUFBek4sTUFBTTtjQUNOM0IsU0FBUyxFQUFDLFdBQVc7Y0FDckI2TixRQUFRLEVBQUMsT0FBTztjQUNoQnZFLElBQUksRUFBRW9HLFVBQVUsQ0FBQ2hiLElBQUk7Y0FDckJnVSxPQUFPLEVBQUVBLENBQUEsS0FBTXpHLGFBQWEsQ0FBQztnQkFBRXZOLElBQUksRUFBRTtjQUFLLENBQUU7WUFBQyxHQUU3Q3lLLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ2lRLGlCQUFBLENBQUFJLGVBQWU7Y0FDZjNQLFNBQVMsRUFBQyw0QkFBNEI7Y0FBQSwwQkFDZixFQUFFO2NBQUEsMEJBQ0Y7WUFBTSxHQUU3QmIsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDb0IsV0FBQSxDQUFBUSxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRXVPLFVBQVUsQ0FBQ3JTLElBQUk7Y0FDMUIrRCxPQUFPLEVBQUU7Z0JBQ1J3TyxJQUFJLEVBQUV6USxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNrUSxLQUFBLENBQUFLLElBQUk7a0JBQUN0VCxJQUFJLEVBQUVtVCxVQUFVLENBQUN0YTtnQkFBSSxFQUFJO2dCQUNyQyxrQkFBa0IsRUFBRStKLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQytQLFFBQUEsQ0FBQXJOLGNBQWM7a0JBQUN6RixJQUFJLEVBQUVtVCxVQUFVLENBQUN0YTtnQkFBSSxFQUFJO2dCQUM3RGtMLE9BQU8sRUFBRW5CLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ2dRLFFBQUEsQ0FBQTFFLHdCQUF3QjtrQkFBQ3JPLElBQUksRUFBRW1ULFVBQVUsQ0FBQ3RhO2dCQUFJOztZQUN4RCxFQUNBLENBQ2UsQ0FDVjtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RDQSxJQUFBb0ssS0FBQSxHQUFBekwsT0FBQTtVQUNBLElBQUE0TixNQUFBLEdBQUE1TixPQUFBO1VBSU0sU0FBVThiLElBQUlBLENBQUM7WUFBRXRUO1VBQUksQ0FBRTtZQUM1QixNQUFNO2NBQUVqRixJQUFJLEVBQUVnSjtZQUFPLENBQUUsR0FBRy9ELElBQUk7WUFDOUIsTUFBTSxDQUFDNEIsUUFBUSxFQUFFaUUsV0FBVyxDQUFDLEdBQUc1QyxLQUFLLENBQUMyQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU1NLEdBQUcsR0FBRyxzQkFBc0J0RSxRQUFRLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUVsRSxPQUNDcUIsS0FBQSxDQUFBRixhQUFBO2NBQUtVLFNBQVMsRUFBRXlDO1lBQUcsR0FDbEJqRCxLQUFBLENBQUFGLGFBQUE7Y0FBUVUsU0FBUyxFQUFDO1lBQTBCLEdBQzNDUixLQUFBLENBQUFGLGFBQUE7Y0FBU1UsU0FBUyxFQUFDO1lBQStDLEdBQ2pFUixLQUFBLENBQUFGLGFBQUEsYUFBS2dCLE9BQU8sQ0FBQzFLLElBQUksQ0FBTSxFQUN2QjRKLEtBQUEsQ0FBQUYsYUFBQSxjQUNDRSxLQUFBLENBQUFGLGFBQUEsQ0FBQ3FDLE1BQU0sQ0FBQ3NCLFdBQVcsT0FBRyxDQUNqQixDQUNHLENBQ0YsQ0FDSjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCQSxJQUFBekQsS0FBQSxHQUFBekwsT0FBQTtVQUNBLElBQUE0TixNQUFBLEdBQUE1TixPQUFBO1VBRUEsSUFBQTBMLFFBQUEsR0FBQTFMLE9BQUE7VUFFTSxTQUFVOGIsSUFBSUEsQ0FBQztZQUFFdFQ7VUFBSSxDQUFFO1lBQzVCLE1BQU07Y0FBRWxJO1lBQUssQ0FBRSxHQUFHLElBQUFvTCxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBRXZDLE1BQU0sQ0FBQzNCLFFBQVEsRUFBRWlFLFdBQVcsQ0FBQyxHQUFHNUMsS0FBSyxDQUFDMkMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNTSxHQUFHLEdBQUcsc0JBQXNCdEUsUUFBUSxHQUFHLGNBQWMsR0FBRyxFQUFFLEVBQUU7WUFFbEUsT0FDQ3FCLEtBQUEsQ0FBQUYsYUFBQTtjQUFLVSxTQUFTLEVBQUV5QztZQUFHLEdBQ2xCakQsS0FBQSxDQUFBRixhQUFBO2NBQVFVLFNBQVMsRUFBQztZQUEwQixHQUMzQ1IsS0FBQSxDQUFBRixhQUFBO2NBQVNVLFNBQVMsRUFBQztZQUErQyxHQUNqRVIsS0FBQSxDQUFBRixhQUFBLG9CQUFhLEVBQ2JFLEtBQUEsQ0FBQUYsYUFBQSxjQUNDRSxLQUFBLENBQUFGLGFBQUEsQ0FBQ3FDLE1BQU0sQ0FBQ3NCLFdBQVcsT0FBRyxDQUNqQixDQUNHLENBQ0YsRUFDVHpELEtBQUEsQ0FBQUYsYUFBQTtjQUFTVSxTQUFTLEVBQUM7WUFBb0IsR0FDdENSLEtBQUEsQ0FBQUYsYUFBQTtjQUFvQnpKLEVBQUUsRUFBRXhCLEtBQUssQ0FBQ2lKO1lBQVksRUFBSSxDQUNyQyxDQUNMO1VBRVI7Ozs7Ozs7Ozs7O1VDMUJBOztVQUVBekQsTUFBQSxDQUFBNEMsY0FBQSxDQUFBdEgsT0FBQTtZQUNBdUgsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUF5QyxNQUFBLEdBQUFwTCxPQUFBO1VBQ0EsSUFBQTBMLFFBQUEsR0FBQTFMLE9BQUE7VUFDQSxJQUFBNk4sTUFBQSxHQUFBN04sT0FBQTtVQUNBLElBQUErYixPQUFBLEdBQUEvYixPQUFBO1VBRU0sU0FBVWdjLGNBQWNBLENBQUM7WUFBRXhUO1VBQUksQ0FBRTtZQUN0QyxNQUFNO2NBQUVsSTtZQUFLLENBQUUsR0FBRyxJQUFBb0wsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUN2QyxNQUFNbkksSUFBSSxHQUFHbVksT0FBQSxDQUFBMUYsS0FBSyxDQUFDN04sSUFBSSxDQUFDcEcsSUFBSSxDQUFDO1lBQzdCLElBQUlzTSxHQUFHLEdBQUcsaUNBQWlDbEcsSUFBSSxDQUFDcEcsSUFBSSxFQUFFO1lBQ3RELElBQUk5QixLQUFLLENBQUM2SSxnQkFBZ0IsRUFBRS9HLElBQUksS0FBS29HLElBQUksQ0FBQ3BHLElBQUksRUFBRTtjQUMvQ3NNLEdBQUcsSUFBSSxTQUFTOztZQUVqQixNQUFNdk0sS0FBSyxHQUFHcUcsSUFBSSxDQUFDckcsS0FBSztZQUV4QixNQUFNOFosV0FBVyxHQUFHck4sS0FBSyxJQUFHO2NBQzNCdE8sS0FBSyxDQUFDNkssY0FBYyxDQUFDM0MsSUFBSSxDQUFDO1lBQzNCLENBQUM7WUFDRCxPQUNDNEMsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQTtjQUFTVSxTQUFTLEVBQUV5QyxHQUFHO2NBQUVDLE9BQU8sRUFBRXNOO1lBQVcsR0FDNUM3USxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNzQyxNQUFBLENBQUFvQixVQUFVO2NBQUNyTCxJQUFJLEVBQUVBLElBQUk7Y0FBRXpCLEtBQUssRUFBRUE7WUFBSyxFQUFJLENBQy9CO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJBLElBQUFnUCxHQUFBLEdBQUFuUixPQUFBO1VBQ0EsSUFBQTJNLFdBQUEsR0FBQTNNLE9BQUE7VUFDQSxJQUFBb0wsTUFBQSxHQUFBcEwsT0FBQTtVQUNBLElBQUEwTCxRQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQWtjLFNBQUEsR0FBQWxjLE9BQUE7VUFDQSxJQUFBNEwsWUFBQSxHQUFBNUwsT0FBQTtVQUVNLFNBQVVtYyxNQUFNQSxDQUFBO1lBQ3JCLE1BQU07Y0FBRXJWLEtBQUs7Y0FBRTJDLEtBQUs7Y0FBRXlFO1lBQWEsQ0FBRSxHQUFHLElBQUF4QyxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBQzdELE1BQU07Y0FBRTVKLEtBQUs7Y0FBRUYsV0FBVztjQUFFSSxPQUFPO2NBQUUrWixLQUFLO2NBQUV6YTtZQUFPLENBQUUsR0FBR21GLEtBQUssQ0FBQ3BGLE1BQU07WUFDcEUsTUFBTWlOLE9BQU8sR0FBR0EsQ0FBQSxLQUFLO2NBQ3BCVCxhQUFhLENBQUM7Z0JBQ2J2TixJQUFJLEVBQUUsSUFBSTtnQkFDVjJJLElBQUksRUFBRTtlQUNOLENBQUM7WUFDSCxDQUFDO1lBQ0QsT0FDQzhCLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ0ssWUFBQSxDQUFBTSxvQkFBb0I7Y0FBQ0QsU0FBUyxFQUFDO1lBQXdCLEdBQ3ZEYixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNLLFlBQUEsQ0FBQU8saUJBQWlCLFFBQ2pCZixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQVFVLFNBQVMsRUFBQztZQUFrQixHQUNuQ2IsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDNEYsR0FBQSxDQUFBa0wsV0FBVztjQUFDeFgsTUFBTSxFQUFDLFFBQVE7Y0FBQ3VPLEdBQUcsRUFBRS9RLE9BQU87Y0FBRW9XLEdBQUcsRUFBRXRXO1lBQUssRUFBSSxFQUN6RGlKLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsY0FDQ0gsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxhQUFLcEosS0FBSyxDQUFNLEVBQ2ZSLE9BQU8sSUFBSXlKLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQzJRLFNBQUEsQ0FBQUksUUFBUTtjQUFDamIsSUFBSSxFQUFFTTtZQUFPLEVBQUksQ0FDbEMsQ0FDRSxDQUNVLEVBQ3BCeUosTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDSyxZQUFBLENBQUFRLGtCQUFrQixRQUNsQmhCLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDYixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQVNVLFNBQVMsRUFBQztZQUFjLEdBQ2hDYixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQUdVLFNBQVMsRUFBQztZQUFjLEdBQUVoSyxXQUFXLENBQUssRUFDN0NtSixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUEwQixHQUN4Q2IsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQTtjQUFLVSxTQUFTLEVBQUM7WUFBMEIsR0FDdkNtUSxLQUFLLElBQUloUixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUMyUSxTQUFBLENBQUFJLFFBQVE7Y0FBQzFFLEtBQUssRUFBRW5PLEtBQUssQ0FBQzJTLEtBQUs7Y0FBRS9hLElBQUksRUFBRSthO1lBQUssRUFBSSxDQUNsRCxDQUNELENBQ0csRUFDVmhSLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQVMsR0FDdkJiLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ29CLFdBQUEsQ0FBQTRQLE1BQU07Y0FDTkMsUUFBUTtjQUNSNVksSUFBSSxFQUFDLGVBQWU7Y0FDcEJxSSxTQUFTLEVBQUMsOENBQThDO2NBQ3hEMEMsT0FBTyxFQUFFQTtZQUFPLEdBRWZsRixLQUFLLENBQUNnVCxPQUFPLENBQUNaLElBQUksQ0FDWCxDQUNKLENBQ0QsQ0FDYyxDQUNDO1VBRXpCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25EQSxJQUFBelEsTUFBQSxHQUFBcEwsT0FBQTtVQUNBLElBQUEwTCxRQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQTBjLEtBQUEsR0FBQTFjLE9BQUE7VUFDQSxJQUFBMkwsS0FBQSxHQUFBM0wsT0FBQTtVQUNBLElBQUEyYyxlQUFBLEdBQUEzYyxPQUFBO1VBQ0EsSUFBQTZOLE1BQUEsR0FBQTdOLE9BQUE7VUFFTSxTQUFVNGMsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUU5VixLQUFLO2NBQUUyQyxLQUFLO2NBQUVuSjtZQUFLLENBQUUsR0FBRyxJQUFBb0wsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUNyRCxNQUFNOFEsT0FBTyxHQUFHLHVCQUF1QnZjLEtBQUssQ0FBQzZJLGdCQUFnQixHQUFHLG9CQUFvQixHQUFHLEVBQUUsRUFBRTtZQUMzRixNQUFNLENBQUMyVCxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHM1IsTUFBQSxDQUFBN0UsT0FBSyxDQUFDNkgsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNSSxTQUFTLEdBQUdJLEtBQUssSUFBRztjQUN6QkEsS0FBSyxDQUFDd0csZUFBZSxFQUFFO2NBQ3ZCMkgsYUFBYSxDQUFDLElBQUksQ0FBQztjQUNuQnpjLEtBQUssQ0FBQ3NLLE9BQU8sRUFBRTtjQUNmSyxVQUFVLENBQUMsTUFBSztnQkFDZjhSLGFBQWEsQ0FBQyxLQUFLLENBQUM7Y0FDckIsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNULENBQUM7WUFDRCxNQUFNQyxRQUFRLEdBQUdwTyxLQUFLLElBQUc7Y0FDeEJ0TyxLQUFLLENBQUNzSixNQUFNLENBQUNnRixLQUFLLENBQUNxTyxhQUFhLENBQUN0VSxLQUFLLENBQUM7WUFDeEMsQ0FBQztZQUNELE9BQ0N5QyxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBO2NBQVFVLFNBQVMsRUFBQztZQUE0QixHQUM3Q2IsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQTtjQUFLVSxTQUFTLEVBQUM7WUFBeUIsR0FDdkNiLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBU1UsU0FBUyxFQUFDO1lBQWUsR0FDakNiLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsYUFBSzlCLEtBQUssQ0FBQ3lULElBQUksQ0FBQ0MsUUFBUSxDQUFNLEVBQzlCL1IsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxlLEtBQ0d6RSxLQUFLLENBQUN4RCxZQUFZLENBQUM5QixLQUFLLEVBQUV3RSxNQUFNLEUsS0FBR3lELEtBQUssQ0FBQ3lULElBQUksQ0FBQzVaLFlBQVksRSxJQUN0RCxDQUNFLEVBQ1Y4SCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLGtCQUNDSCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNtUixLQUFBLENBQUFVLEtBQUs7Y0FDTEMsUUFBUSxFQUFFTCxRQUFRO2NBQ2xCNWEsSUFBSSxFQUFDLE1BQU07Y0FDWDZKLFNBQVMsRUFBQyxnQkFBZ0I7Y0FDMUJxUixXQUFXLEVBQUU3VCxLQUFLLENBQUN5VCxJQUFJLENBQUNLLE1BQU07Y0FDOUIzWixJQUFJLEVBQUM7WUFBUSxFQUNaLENBQ08sQ0FDTCxFQUNOd0gsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQTtjQUFLVSxTQUFTLEVBQUM7WUFBeUIsR0FDdkNiLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ0ksS0FBQSxDQUFBYSxJQUFJO2NBQUNQLFNBQVMsRUFBRTRRLE9BQU87Y0FBRXJiLEtBQUssRUFBRXNGLEtBQUssQ0FBQ3ZGLFVBQVUsQ0FBQ0MsS0FBSztjQUFFa0wsT0FBTyxFQUFFaVEsZUFBQSxDQUFBWDtZQUFjLEVBQUksRUFDcEY1USxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNzQyxNQUFBLENBQUFvQixVQUFVO2NBQ1Z1TyxRQUFRLEVBQUVWLFVBQVU7Y0FDcEJuTyxPQUFPLEVBQUVILFNBQVM7Y0FDbEI1SyxJQUFJLEVBQUMsU0FBUztjQUNkNlosT0FBTyxFQUFDLFNBQVM7Y0FDakJ4UixTQUFTLEVBQUM7WUFBUSxFQUNqQixDQUNHLENBQ0U7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREEsSUFBQVIsS0FBQSxHQUFBekwsT0FBQTtVQUNBLElBQUE2VSxNQUFBLEdBQUE3VSxPQUFBO1VBR00sU0FBVXNjLFFBQVFBLENBQUM7WUFBRTFFLEtBQUs7WUFBRXZXLElBQUksRUFBRTtjQUFFTyxRQUFRO2NBQUVDO1lBQUk7VUFBRSxDQUFtQztZQUM1RixPQUNDNEosS0FBQSxDQUFBRixhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUFvQixHQUNsQ1IsS0FBQSxDQUFBRixhQUFBO2NBQUlVLFNBQVMsRUFBQztZQUFrQixHQUFFMkwsS0FBSyxDQUFNLEVBQzdDbk0sS0FBQSxDQUFBRixhQUFBO2NBQVNVLFNBQVMsRUFBQztZQUFtQixHQUNyQ1IsS0FBQSxDQUFBRixhQUFBLENBQUNzSixNQUFBLENBQUFhLEtBQUs7Y0FBQ3pKLFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQ21ILEdBQUcsRUFBRXhSO1lBQVEsRUFBSSxFQUNuRDZKLEtBQUEsQ0FBQUYsYUFBQTtjQUFNVSxTQUFTLEVBQUM7WUFBaUIsR0FBRXBLLElBQUksQ0FBUSxDQUN0QyxDQUNMO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEEsSUFBQXNQLEdBQUEsR0FBQW5SLE9BQUE7VUFDQSxJQUFBOE4sTUFBQSxHQUFBOU4sT0FBQTtVQUNBLElBQUFvTCxNQUFBLEdBQUFwTCxPQUFBO1VBQ0EsSUFBQTBkLENBQUEsR0FBQTFkLE9BQUE7VUFDQSxJQUFBMEwsUUFBQSxHQUFBMUwsT0FBQTtVQUNBLElBQUEyZCxZQUFBLEdBQUEzZCxPQUFBO1VBQ0EsSUFBQTRQLE1BQUEsR0FBQTVQLE9BQUE7VUFDQSxJQUFBNGQsT0FBQSxHQUFBNWQsT0FBQTtVQUVBLElBQUEyTSxXQUFBLEdBQUEzTSxPQUFBO1VBRUEsSUFBQTZkLFFBQUEsR0FBQTdkLE9BQUE7VUFHQSxJQUFBOGQsY0FBQSxHQUFBOWQsT0FBQTtVQUNBLElBQUErZCxLQUFBLEdBQUEvZCxPQUFBO1VBQ087VUFBVSxTQUFVVSxJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBMkI7WUFDakUsTUFBTSxDQUFDZ0gsS0FBSyxFQUFFZ0gsUUFBUSxDQUFDLEdBQUcsSUFBQWxELE1BQUEsQ0FBQWdELFFBQVEsRUFBQzlOLEtBQUssQ0FBQ2dILEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUNxVSxVQUFVLEVBQUV6TixhQUFhLENBQUMsR0FBRyxJQUFBOUMsTUFBQSxDQUFBZ0QsUUFBUSxFQUFhO2NBQUV6TixJQUFJLEVBQUUsS0FBSztjQUFFVSxJQUFJLEVBQUU7WUFBSSxDQUFFLENBQUM7WUFDckYsTUFBTSxDQUFDaUksSUFBSSxFQUFFa0wsT0FBTyxDQUFDLEdBQUcsSUFBQXBKLE1BQUEsQ0FBQWdELFFBQVEsRUFBeUIsU0FBUyxDQUFDO1lBQ25FLE1BQU0sR0FBRzRQLG9CQUFvQixDQUFDLEdBQUcsSUFBQTVTLE1BQUEsQ0FBQWdELFFBQVEsRUFBQzlOLEtBQUssQ0FBQ3dHLEtBQUssRUFBRXhELFlBQVksRUFBRTlCLEtBQUssRUFBRXdFLE1BQU0sSUFBSSxDQUFDLENBQUM7WUFDeEYsTUFBTSxDQUFDaVksS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRyxJQUFBOVMsTUFBQSxDQUFBZ0QsUUFBUSxFQUFDOU4sS0FBSyxDQUFDNmQsYUFBYSxFQUFFLENBQUM7WUFDekQsTUFBTSxDQUFDL1QsUUFBUSxFQUFFaUUsV0FBVyxDQUFDLEdBQUcsSUFBQWpELE1BQUEsQ0FBQWdELFFBQVEsRUFBQzlOLEtBQUssQ0FBQzhKLFFBQVEsQ0FBQztZQUN4RCxNQUFNO2NBQUVYO1lBQUssQ0FBRSxHQUFHbkosS0FBSztZQUV2QixJQUFBd04sTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQ2pPLEtBQUssQ0FBQyxFQUFFLE1BQU1nTyxRQUFRLENBQUNoTyxLQUFLLENBQUNnSCxLQUFLLENBQUMsQ0FBQztZQUMvQyxJQUFBd0csTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQ2pPLEtBQUssQ0FBQyxFQUFFLE1BQU0wZCxvQkFBb0IsQ0FBQzFkLEtBQUssQ0FBQ2dELFlBQVksQ0FBQzBDLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUM7WUFDOUYsSUFBQThILE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUNqTyxLQUFLLENBQUMsRUFBRSxNQUFNNGQsUUFBUSxDQUFDNWQsS0FBSyxDQUFDNmQsYUFBYSxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUM7WUFDbkUsSUFBQXJRLE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUNqTyxLQUFLLENBQUMsRUFBRSxNQUFNK04sV0FBVyxDQUFDL04sS0FBSyxDQUFDOEosUUFBUSxDQUFDLEVBQUUsa0JBQWtCLENBQUM7WUFFekUsSUFBSSxDQUFDOUMsS0FBSyxFQUFFLE9BQU84RCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUM0RixHQUFBLENBQUFpTixVQUFVO2NBQUNoVSxRQUFRLEVBQUU7WUFBSSxFQUFJO1lBQ2pELElBQUksQ0FBQzlKLEtBQUssQ0FBQ3dHLEtBQUssQ0FBQ08sS0FBSyxFQUFFLE9BQU8rRCxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNtUyxDQUFBLENBQUFyUyxRQUFRO2NBQUMvSyxLQUFLLEVBQUVBLEtBQUs7Y0FBRW1KLEtBQUssRUFBRUE7WUFBSyxFQUFJO1lBQ3ZFLElBQUluSixLQUFLLENBQUN3RyxLQUFLLENBQUNqQixpQkFBaUIsS0FBSyxDQUFDLEVBQUUsT0FBT3VGLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ3FFLE1BQUEsQ0FBQXNCLEtBQUs7Y0FBQzVRLEtBQUssRUFBRUEsS0FBSztjQUFFbUosS0FBSyxFQUFFQTtZQUFLLEVBQUk7WUFFckYsTUFBTWQsS0FBSyxHQUFHO2NBQUVjLEtBQUs7Y0FBRTNDLEtBQUssRUFBRXhHLEtBQUssQ0FBQ3dHLEtBQUs7Y0FBRXhHLEtBQUs7Y0FBRXFiLFVBQVU7Y0FBRXpOLGFBQWE7Y0FBRTVFLElBQUk7Y0FBRWtMO1lBQU8sQ0FBRTtZQUU1RixNQUFNOUYsR0FBRyxHQUFHLHNCQUFzQnRFLFFBQVEsR0FBRyxjQUFjLEdBQUcsRUFBRSxFQUFFO1lBQ2xFLE9BQ0NnQixNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUM0RixHQUFBLENBQUE2SixhQUFhO2NBQUMvTyxTQUFTLEVBQUV5QztZQUFHLEdBQzVCdEQsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDRyxRQUFBLENBQUF3UCxnQkFBZ0IsQ0FBQ21ELFFBQVE7Y0FBQzFWLEtBQUssRUFBRUE7WUFBSyxHQUN0Q3lDLE1BQUEsQ0FBQTdFLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ3FTLE9BQUEsQ0FBQXpCLE1BQU0sT0FBRyxFQUNWL1EsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDdVMsY0FBQSxDQUFBbEIsY0FBYyxPQUFHLEVBQ2xCeFIsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDb0IsV0FBQSxDQUFBUSxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRSxDQUFDLENBQUM5TSxLQUFLLENBQUM2SSxnQkFBZ0I7Y0FDbkNnRyxPQUFPO2NBQ1A5QixPQUFPLEVBQUU7Z0JBQ1JnQyxLQUFLLEVBQUVqRSxNQUFBLENBQUE3RSxPQUFBLENBQUFnRixhQUFBLENBQUNzUyxRQUFBLENBQUE5RyxXQUFXLE9BQUc7Z0JBQ3RCM0gsSUFBSSxFQUFFaEUsTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDd1MsS0FBQSxDQUFBeEosWUFBWTs7WUFDbkIsRUFDQSxFQUNGbkosTUFBQSxDQUFBN0UsT0FBQSxDQUFBZ0YsYUFBQSxDQUFDb1MsWUFBQSxDQUFBakMsV0FBVyxPQUFHLENBQ1ksQ0FDYjtVQUVsQiIsImlnbm9yZUxpc3QiOltdfQ==