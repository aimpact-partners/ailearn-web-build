System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.1/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@aimpact/ailearn-app@0.2.1/components/ui", "@aimpact/ailearn-app@0.2.1/components/navbar-header.code", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.2.1/config", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/collapsible", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/drawer", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/breadcrumb", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/dropdown", "@aimpact/ailearn-app@0.2.1/components/icons", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/tooltip", "@aimpact/ailearn-app@0.2.1/utils", "@aimpact/ailearn-app@0.2.1/shared/charts", "pragmate-ui@1.0.0-beta.6/perfect-scrollbar", "pragmate-ui@1.0.0-beta.6/form"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp021DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp021DashboardLayoutWidget;
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
    }, function (_aimpactAilearnApp021ComponentsUi) {
      dependency_15 = _aimpactAilearnApp021ComponentsUi;
    }, function (_aimpactAilearnApp021ComponentsNavbarHeaderCode) {
      dependency_16 = _aimpactAilearnApp021ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_17 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp021Config) {
      dependency_18 = _aimpactAilearnApp021Config;
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
    }, function (_aimpactAilearnApp021ComponentsIcons) {
      dependency_30 = _aimpactAilearnApp021ComponentsIcons;
    }, function (_pragmateUi100Beta6Image) {
      dependency_31 = _pragmateUi100Beta6Image;
    }, function (_pragmateUi100Beta6Tooltip) {
      dependency_32 = _pragmateUi100Beta6Tooltip;
    }, function (_aimpactAilearnApp021Utils) {
      dependency_33 = _aimpactAilearnApp021Utils;
    }, function (_aimpactAilearnApp021SharedCharts) {
      dependency_34 = _aimpactAilearnApp021SharedCharts;
    }, function (_pragmateUi100Beta6PerfectScrollbar) {
      dependency_35 = _pragmateUi100Beta6PerfectScrollbar;
    }, function (_pragmateUi100Beta6Form) {
      dependency_36 = _pragmateUi100Beta6Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.1"], ["@aimpact/ailearn-app", "0.2.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.1/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_5], ['@aimpact/ailearn-sdk/reactive/model', dependency_6], ['@aimpact/http-suite/api', dependency_7], ['@aimpact/ailearn-sdk/config', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@aimpact/ailearn-sdk/tracking', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['react', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['pragmate-ui/empty', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/collapsible', dependency_21], ['pragmate-ui/components', dependency_22], ['pragmate-ui/tabs', dependency_23], ['pragmate-ui/drawer', dependency_24], ['@beyond-js/react-18-widgets/hooks', dependency_25], ['pragmate-ui/breadcrumb', dependency_26], ['@aimpact/chat-sdk/chat-component.code', dependency_27], ['@aimpact/chat-sdk/widgets/markdown', dependency_28], ['pragmate-ui/dropdown', dependency_29], ['@aimpact/ailearn-app/components/icons', dependency_30], ['pragmate-ui/image', dependency_31], ['pragmate-ui/tooltip', dependency_32], ['@aimpact/ailearn-app/utils', dependency_33], ['@aimpact/ailearn-app/shared/charts', dependency_34], ['pragmate-ui/perfect-scrollbar', dependency_35], ['pragmate-ui/form', dependency_36]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.2.1/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.1/assignments/dashboard.widget');
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
        hash: 2064335904,
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
            refreshDrawer = async activity => {
              try {
                const promise = new _core.PendingPromise();
                this.fetching = true;
                this.trigger('fetching.drawer');
                await this.model.load(this.#assignmentId);
                if (activity && activity.chatModel) {
                  activity.chatModel.loadAll({
                    id: activity.chatModel.id
                  });
                }
                globalThis.setTimeout(() => {
                  promise.resolve();
                }, 1000);
                return promise;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
                this.trigger('fetching.drawer');
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
        hash: 1111233322,
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
              store
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
            const [fetchingDrawer, setFetchingDrawer] = React.useState(false);
            const [ready, setReady] = React.useState(tracking.ready);
            (0, _hooks.useBinder)([tracking], () => {
              setReady(tracking.ready);
              if (tracking.ready) {
                setActivity(tracking.activities.get(activityId));
              }
            });
            (0, _hooks.useBinder)([store.model], () => {
              setActivity(tracking.activities.get(activityId));
            });
            const onRefresh = () => {
              setFetching(true);
              store.refreshDrawer(activity).finally(() => setFetching(false));
            };
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            const onClick = event => console.log('hola');
            // Ensure breadcrumb items are correctly structured as tuples with optional undefined
            const breadcrumb = [['Module', onClick, undefined], ['Activity']];
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
        hash: 2699245295,
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
              chat: item.chatModel,
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
        hash: 3793626453,
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
          var _components = require("pragmate-ui/components");
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
              className: `activity-header bottom-rounded bg-activity--${activity.type}`
            }, _react.default.createElement("div", null, _react.default.createElement("h4", null, activity.title, " ")), _react.default.createElement("div", {
              className: "close-icon"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "close",
              title: "Close",
              onClick: onClose
            }))), _react.default.createElement(_components.ConditionalContainer, {
              condition: activity.participants.length > 0,
              ternary: true,
              options: {
                true: _react.default.createElement(_list.List, {
                  className: "activity-users__list",
                  items: activity.participants,
                  control: _participant.ActivityParticipant,
                  specs: {
                    activity
                  }
                }),
                false: _react.default.createElement(_empty.Empty, {
                  text: 'No participants found'
                })
              }
            }));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/activities/view/participant/chat
      ********************************************************/

      ims.set('./views/activities/view/participant/chat', {
        hash: 970327208,
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
          var _objective = require("./objective");
          /*bundle*/
          function ChatActivityParticipant({
            item
          }) {
            const {
              store,
              setShowDrawer,
              texts
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
            }, _react.default.createElement(_collapsible.CollapsibleContainer, {
              toggleable: !!data?.progress?.objectives,
              onToggle: onToggle,
              open: isDragging
            }, _react.default.createElement(_collapsible.CollapsibleHeader, {
              className: "activity-participant__header"
            }, _react.default.createElement("div", {
              className: "activity-participant__header-content"
            }, _react.default.createElement(_image.Image, {
              className: "user-data__img",
              src: item.user.photoUrl
            }), _react.default.createElement("div", null, _react.default.createElement(_components.Link, {
              href: `/assignments/${store.assignmentId}/dashboard/classroom?studentId=${item.user.id}`,
              onClick: onClick
            }, _react.default.createElement("h6", null, item.user.name)), _react.default.createElement("span", {
              className: "activity-participant__synthesis"
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: !!data?.progress?.summary,
              ternary: true,
              options: {
                true: _react.default.createElement(_react.default.Fragment, null, data?.progress?.summary),
                false: _react.default.createElement(_react.default.Fragment, null, texts.activities.noSummary)
              }
            })))), _react.default.createElement(_list.List, {
              className: "unstyled-list",
              items: data?.progress?.objectives,
              control: IconState
            })), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement(_list.List, {
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

      /*************************************************************
      INTERNAL MODULE: ./views/activities/view/participant/objective
      *************************************************************/

      ims.set('./views/activities/view/participant/objective', {
        hash: 2532828341,
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

      /**********************************************************
      INTERNAL MODULE: ./views/activities/view/participant/spoken
      **********************************************************/

      ims.set('./views/activities/view/participant/spoken', {
        hash: 4100026115,
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
              className: "activity-participant__header flex-container flex-vertical-center"
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
        hash: 2524162320,
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
            }, React.createElement("p", null, item.synthesis)), item.progress?.objectives && React.createElement(React.Fragment, null, React.createElement("h4", {
              className: "mt-15"
            }, texts.activities.progres), React.createElement(_list.List, {
              className: "unstyled-list activity__users-list",
              items: item.progress?.objectives,
              control: _objective.StudentAssignmentActivityObjective
            }))), React.createElement(_drawerAlerts.DrawerAlert, {
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
        hash: 4217039120,
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
        hash: 2532828341,
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
        hash: 504608874,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
            (0, _hooks.useBinder)([item], () => {
              setItems([...item.activities.items]);
            });
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

      /*****************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/chat
      *****************************************************/

      ims.set('./views/assignment/item/activity/chat', {
        hash: 151087784,
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
            })), _react.default.createElement("div", {
              className: "activity-title__container-content"
            }, _react.default.createElement("span", {
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
        hash: 3126415124,
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
        hash: 1682528722,
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
        hash: 2869623979,
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
        hash: 1185574957,
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
              name: type
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
        hash: 843810341,
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
            if (store.activitySelected?.type === item.type) cls += ' active';
            const title = item.title;
            const handleClick = event => store.selectActivity(item);
            return _react.default.createElement("section", {
              className: cls,
              onClick: handleClick
            }, _react.default.createElement(_icons.Icon, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiUGFydGljaXBhbnRBY3Rpdml0aWVzIiwicGFyZW50IiwiYWN0aXZpdHkiLCJPYmplY3RzIiwic3Bva2VuIiwiUGFydGljaXBhbnRTcG9rZW5BY3Rpdml0eSIsImRldGF1bHQiLCJQYXJ0aWNpcGFudEFjdGl2aXR5IiwiUGFydGljaXBhbnRNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwiQWN0aXZpdHkiLCJpY29ucyIsInRvdGFsUG9pbnRzIiwicG9pbnRzIiwiUGFydGljaXBhbnQiLCJpdGVtIiwiX3BhcnRpY2lwYW50IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbDIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfdHJhY2tpbmciLCJfY29yZSIsImlzU3RvcmUiLCJ0cmFja2luZyIsImFjdGl2aXR5U2VsZWN0ZWQiLCJjdXJyZW50VHJhY2tpbmciLCJzZXNzaW9uIiwidmlldyIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsInNwZWNpZmllciIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ1c2VycyIsInRyYWNraW5ncyIsInRyaWdnZXJFdmVudCIsIm9uIiwic2V0TW9kZWwiLCJmZXRjaGluZyIsIm0iLCJlIiwibG9hZFVzZXJUcmFja2luZyIsInVzZXJJZCIsIlRyYWNraW5nIiwiY2hhdCIsImNvbnNvbGUiLCJyZWZyZXNoIiwidHJpZ2dlciIsInJlZnJlc2hEcmF3ZXIiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJjaGF0TW9kZWwiLCJsb2FkQWxsIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJzZWxlY3RBY3Rpdml0eSIsIl9yZWFjdCIsIk5vdEZvdW5kIiwiY29kZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIlJlYWN0IiwiX2NvbnRleHQiLCJfbGlzdCIsIl9jb2xsYXBzaWJsZSIsIkFjdGl2aXR5QWxlcnRzIiwicGFydGljaXBhbnRBY3Rpdml0eSIsInVzZURhc2hib2FyZENvbnRleHQiLCJhbGVydHMiLCJjbGFzc05hbWUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiaXRlcmF0aW9uIiwiYXNzaXN0YW50Iiwic3R1ZGVudCIsIkxpc3QiLCJhcyIsImNvbnRyb2wiLCJfY29tcG9uZW50cyIsIl9hc3Nlc3NtZW50IiwiX2NoYXQiLCJfc2VsZWN0IiwiRGV0YWlsQWN0aXZpdHlCb2R5IiwiYXNzaWdubWVudEFjdGl2aXR5Iiwic2V0QWN0aXZpdHkiLCJBY3Rpdml0eVNlbGVjdCIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsImNvbnZlcnNhdGlvbiIsIlVzZXJDaGF0IiwiZGViYXRlIiwiTWF0ZXJpYWxBc3Nlc3NtZW50IiwiYXNzZXNzbWVudCIsIlNwb2tlbkFuYWx5c2lzIiwiRHJhd2VyIiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRlbnQiLCJfYnJlYWRjcnVtYiIsIkRldGFpbEFjdGl2aXR5IiwiYWN0aXZpdHlJZCIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJmZXRjaGluZ0RyYXdlciIsInNldEZldGNoaW5nRHJhd2VyIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJvblJlZnJlc2giLCJmaW5hbGx5IiwiY2xzIiwib25DbGljayIsImV2ZW50IiwibG9nIiwiYnJlYWRjcnVtYiIsInVuZGVmaW5lZCIsIkJyZWFkQ3J1bWIiLCJJY29uQnV0dG9uIiwiQ2xvc2VCdXR0b24iLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiU3Bpbm5lciIsImFjdGl2ZSIsIkVtcHR5RGV0YWlsQWN0aXZpdHkiLCJfbXVsdGlwbGUiLCJNdWx0aXBsZUNob2ljZVJlcG9ydCIsIl9jaGF0Q29tcG9uZW50IiwiX2VtcHR5IiwiX2VtcHR5Q2hhdCIsIl90YWJzIiwiX2RyYXdlckFsZXJ0cyIsImNoYXRUZXh0cyIsIkVtcHR5TWF0ZXJpYWwiLCJjaGF0SWQiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsIlRhYiIsIlBhbmVzIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsImVtcHR5IiwiRW1wdHlDaGF0IiwiQWdlbnRzQ2hhdFBhbmVsIiwiRHJhd2VyQWxlcnQiLCJfbWFya2Rvd24iLCJDb21wZXRlbmNpZXNGZWVkYmFjayIsIk1hcmtkb3duIiwiY29udGVudCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiRW1wdHkiLCJfdWkiLCJtZXNzYWdlIiwiRW1wdHlDYXJkIiwiRGVmYXVsdE1hdGVyaWFsIiwiQ291bnRlcnMiLCJjb3VudGVycyIsInRvdGFsIiwiY29ycmVjdCIsIl9xdWVzdGlvbnMiLCJzZXRDb3VudGVycyIsIkFzc2Vzc21lbnRRdWVzdGlvbnMiLCJzaG93QW5zd2VycyIsIkl0ZW1PcHRpb24iLCJvcHRpb24iLCJpIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJrZXkiLCJfb3B0aW9uIiwicmVzcG9uc2VzIiwib3V0cHV0IiwicXVlc3Rpb25zIiwiaW5kZXgiLCJhdHRycyIsImVsZW1lbnRzIiwiYXVkaW9VcmwiLCJhc3Nlc3NtZW50cyIsIm9yYWxUZXh0Iiwic3R1ZGVudEF1ZGlvIiwiY29udHJvbHMiLCJwcmVsb2FkIiwic3JjIiwiY29udGFpbmVyIiwiU3Bva2VuSXRlbSIsImZlZWRiYWNrIiwiX2Ryb3Bkb3duIiwiX3RvZ2dsZSIsInNlbGVjdGVkIiwiQWN0aXZpdHlTZWxlY3RJdGVtIiwic2V0U2VsZWN0ZWQiLCJEcm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiVG9nZ2xlT3B0aW9uIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25JdGVtIiwiaWNvbkNscyIsIkNvbnRyb2wiLCJwcmV2ZW50RGVmYXVsdCIsIkFwcEljb24iLCJ0eXBlcyIsIndhcm4iLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJvbkNsb3NlIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCIsIl9pbWFnZSIsIl90b29sdGlwIiwiX29iamVjdGl2ZSIsIkNoYXRBY3Rpdml0eVBhcnRpY2lwYW50Iiwic2V0U2hvd0RyYXdlciIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib25Ub2dnbGUiLCJzdG9wUHJvcGFnYXRpb24iLCJJY29uU3RhdGUiLCJUb29sdGlwIiwidG9nZ2xlYWJsZSIsIm9wZW4iLCJJbWFnZSIsIkxpbmsiLCJocmVmIiwibm9TdW1tYXJ5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZSIsIlNwb2tlbkFjdGl2aXR5UGFydGljaXBhbnQiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5UGFydGljaXBhbnQiLCJtdWx0aXBsZUNob2ljZSIsIndyb25nIiwiYW5hbHlzaXMiLCJvYmplY3RpdmVTdGF0dXNlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlDaGF0Qm9keSIsInByb2dyZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Iiwib25OYXZpZ2F0ZSIsIklDT05TIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlTcG9rZW5Cb2R5IiwicGFydGljaXBhdGlvbiIsIkh0bWxXcmFwcGVyIiwiZGV0YWlsIiwiU3R1ZGVudEFzc2lnbm1lbnRTdW1tYXJ5Iiwic2V0SXRlbXMiLCJHZW5lcmFsVmlldyIsIl9sYWJlbCIsIl9hY3Rpdml0eUljb24iLCJNb2R1bGVBY3Rpdml0eUNoYXQiLCJzdWJ0eXBlIiwiQWN0aXZpdHlJY29uIiwiTW9kdWxlQWN0aXZpdHlNZXNzYWdlcyIsIk1vZHVsZUFjdGl2aXR5RGV0YWlscyIsIkljb24iLCJNb2R1bGVBY3Rpdml0eSIsIk1vZHVsZUFjdGl2aXR5U3Bva2VuIiwiTW9kdWxlQWN0aXZpdHlNdWx0aXBsZUNob2ljZSIsImhhc1BhcnRpY2lwYXRlZCIsImxhYmVsIiwidG90YWxNZXNzYWdlcyIsInZhbHVlcyIsImpvaW4iLCJtZXNzYWdlQ291bnRlciIsImhhc0FsZXJ0cyIsImFjdGl2aXR5SXRlbXMiLCJwZXJjZW50aWxlIiwicGFydGljaXBhbnRVcmkiLCJ2aWV3U3R1ZGVudCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiYWx0IiwiQ2hhcnRzIiwiTXVsdGlwbGVDaGFydCIsIlNwb2tlbkNoYXJ0IiwiX2NoYXJ0cyIsIl9zZXR0aW5ncyIsImN1cnJlbnQiLCJjb3VudE9iamVjdHNXaXRob3V0VXNlTXVsdGlwbGUiLCJoYXNOb25aZXJvQ291bnQiLCJzb21lIiwiZGlmZiIsIkNoYXJ0Iiwic2VyaWVzIiwibGFiZWxzIiwicGVuZGluZyIsIkNIQVJUX0JBU0VfU1BFQ1MiLCJyZXNwb25zaXZlIiwiUkVTUE9OU0lWRV9CQVNFX1NQRUNTIiwidGhlbWUiLCJwYWxldHRlIiwibGVnZW5kIiwicG9zaXRpb24iLCJob3Jpem9udGFsQWxpZ24iLCJjaGFydCIsImhlaWdodCIsImRhdGFMYWJlbHMiLCJmb3JtYXR0ZXIiLCJzZXJpZXNJbmRleCIsInciLCJjb25maWciLCJicmVha3BvaW50Iiwid2lkdGgiLCJzcG9rZW5JZCIsImZpbmQiLCJfaWNvbkJveCIsIkljb25Cb3giLCJEcmF3ZXJBbGVydEl0ZW0iLCJBUFAiLCJBUFBfTkFNRSIsIlBhZ2VDb250YWluZXIiLCJjbGFzc3dvcmtzIiwiRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2RyYXdlciIsIl9kcmF3ZXIyIiwiX2RyYXdlcjMiLCJfcGVyZmVjdFNjcm9sbGJhciIsIl93YWxsIiwiQXNpZGVEcmF3ZXIiLCJzaG93RHJhd2VyIiwiU2Nyb2xsQ29udGFpbmVyIiwid2FsbCIsIldhbGwiLCJfaWNvbnMyIiwiQWN0aXZpdHlGaWx0ZXIiLCJoYW5kbGVDbGljayIsIl91c2VyRGF0YSIsIkhlYWRlciIsIm93bmVyIiwiRW50aXR5SW1hZ2UiLCJVc2VyRGF0YSIsIkJ1dHRvbiIsImJvcmRlcmVkIiwiYWN0aW9ucyIsIl9mb3JtIiwiX2FjdGl2aXR5RmlsdGVyIiwiU3R1ZGVudHNIZWFkZXIiLCJsaXN0Q2xzIiwicmVmcmVzaGluZyIsInNldFJlZnJlc2hpbmciLCJvbkZpbHRlciIsImN1cnJlbnRUYXJnZXQiLCJsaXN0Iiwic3R1ZGVudHMiLCJJbnB1dCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzZWFyY2giLCJkaXNhYmxlZCIsInZhcmlhbnQiLCJfIiwiX2FzaWRlRHJhd2VyIiwiX2hlYWRlciIsIl9nZW5lcmFsIiwiX3N0dWRlbnRIZWFkZXIiLCJfdmlldyIsInNldFRvdGFsUGFydGljaXBhbnRzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImdldFByb3BlcnRpZXMiLCJQYWdlTG9hZGVyIiwiUHJvdmlkZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tb2RlbC9EQVRBLnRzIiwiL3RzL21vZGVsL2FjdGl2aXRpZXMvYWN0aXZpdGllcy50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXR5LnRzIiwiL3RzL21vZGVsL2luZGV4LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9zcG9rZW4udHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXR5LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvcGFydGljaXBhbnRzLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvYWN0aXRpdHktdHlwZXMudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvYWxlcnRzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9jb250ZW50LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbG9hZGluZy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL2Fzc2Vzc21lbnQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvY29tcGV0ZW5jaWVzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvZW1wdHktY2hhdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9tdWx0aXBsZS9jb3VudGVycy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL211bHRpcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvbXVsdGlwbGUvb3B0aW9uLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvbXVsdGlwbGUvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvc3Bva2VuL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL3NlbGVjdC9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvc2VsZWN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL3NlbGVjdC90b2dnbGUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvY2hhdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2dlbmVyYWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvZGV0YWlscy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhcnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGFydHMvbXVsdGlwbGUudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9zZXR0aW5ncy50c3giLCIvdHMvdmlld3MvY2hhcnRzL3Nwb2tlbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hY3Rpdml0eS1pY29uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2ljb24tYm94LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RyYXdlci9hc2lkZS1kcmF3ZXIudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9jb250ZW50LnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvd2FsbC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYWN0aXZpdHktZmlsdGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9zdHVkZW50LWhlYWRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL3VzZXItZGF0YS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFB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