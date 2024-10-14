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
        hash: 2618430359,
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
        hash: 1728994319,
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
        hash: 3917475592,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiUGFydGljaXBhbnRBY3Rpdml0aWVzIiwicGFyZW50IiwiYWN0aXZpdHkiLCJPYmplY3RzIiwic3Bva2VuIiwiUGFydGljaXBhbnRTcG9rZW5BY3Rpdml0eSIsImRldGF1bHQiLCJQYXJ0aWNpcGFudEFjdGl2aXR5IiwiUGFydGljaXBhbnRNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwiQWN0aXZpdHkiLCJpY29ucyIsInRvdGFsUG9pbnRzIiwicG9pbnRzIiwiUGFydGljaXBhbnQiLCJpdGVtIiwiX3BhcnRpY2lwYW50IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbDIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfdHJhY2tpbmciLCJfY29yZSIsImlzU3RvcmUiLCJ0cmFja2luZyIsImFjdGl2aXR5U2VsZWN0ZWQiLCJjdXJyZW50VHJhY2tpbmciLCJzZXNzaW9uIiwidmlldyIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsInNwZWNpZmllciIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ1c2VycyIsInRyYWNraW5ncyIsInRyaWdnZXJFdmVudCIsIm9uIiwic2V0TW9kZWwiLCJmZXRjaGluZyIsIm0iLCJlIiwibG9hZFVzZXJUcmFja2luZyIsInVzZXJJZCIsIlRyYWNraW5nIiwiY2hhdCIsImNvbnNvbGUiLCJyZWZyZXNoIiwidHJpZ2dlciIsInJlZnJlc2hEcmF3ZXIiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsInNlbGVjdEFjdGl2aXR5IiwiX3JlYWN0IiwiTm90Rm91bmQiLCJjb2RlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiUmVhY3QiLCJfY29udGV4dCIsIl9saXN0IiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlBbGVydHMiLCJwYXJ0aWNpcGFudEFjdGl2aXR5IiwidXNlRGFzaGJvYXJkQ29udGV4dCIsImFsZXJ0cyIsImNsYXNzTmFtZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJpdGVyYXRpb24iLCJhc3Npc3RhbnQiLCJzdHVkZW50IiwiTGlzdCIsImFzIiwiY29udHJvbCIsIl9jb21wb25lbnRzIiwiX2Fzc2Vzc21lbnQiLCJfY2hhdCIsIl9zZWxlY3QiLCJEZXRhaWxBY3Rpdml0eUJvZHkiLCJhc3NpZ25tZW50QWN0aXZpdHkiLCJzZXRBY3Rpdml0eSIsIkFjdGl2aXR5U2VsZWN0IiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvcHRpb25zIiwiY29udmVyc2F0aW9uIiwiVXNlckNoYXQiLCJkZWJhdGUiLCJNYXRlcmlhbEFzc2Vzc21lbnQiLCJhc3Nlc3NtZW50IiwiU3Bva2VuQW5hbHlzaXMiLCJEcmF3ZXIiLCJfaWNvbnMiLCJfaG9va3MiLCJfY29udGVudCIsIl9icmVhZGNydW1iIiwiRGV0YWlsQWN0aXZpdHkiLCJhY3Rpdml0eUlkIiwidXNlU3RhdGUiLCJzZXRGZXRjaGluZyIsInNldFJlYWR5IiwidXNlQmluZGVyIiwib25SZWZyZXNoIiwiZmluYWxseSIsImNscyIsIm9uQ2xpY2siLCJldmVudCIsImxvZyIsImJyZWFkY3J1bWIiLCJ1bmRlZmluZWQiLCJCcmVhZENydW1iIiwiSWNvbkJ1dHRvbiIsIkNsb3NlQnV0dG9uIiwidGVybmFyeSIsInRydWUiLCJmYWxzZSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJFbXB0eURldGFpbEFjdGl2aXR5IiwiX211bHRpcGxlIiwiTXVsdGlwbGVDaG9pY2VSZXBvcnQiLCJfY2hhdENvbXBvbmVudCIsIl9lbXB0eSIsIl9lbXB0eUNoYXQiLCJfdGFicyIsIl9kcmF3ZXJBbGVydHMiLCJjaGF0VGV4dHMiLCJjaGF0TW9kZWwiLCJFbXB0eU1hdGVyaWFsIiwiY2hhdElkIiwiVGFic0NvbnRhaW5lciIsIlRhYnMiLCJUYWIiLCJQYW5lcyIsIkFnZW50c0NoYXRDb250YWluZXIiLCJlbXB0eSIsIkVtcHR5Q2hhdCIsIkFnZW50c0NoYXRQYW5lbCIsIkRyYXdlckFsZXJ0IiwiX21hcmtkb3duIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJNYXJrZG93biIsImNvbnRlbnQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIkVtcHR5IiwiX3VpIiwibWVzc2FnZSIsIkVtcHR5Q2FyZCIsIkRlZmF1bHRNYXRlcmlhbCIsIkNvdW50ZXJzIiwiY291bnRlcnMiLCJ0b3RhbCIsImNvcnJlY3QiLCJfY291bnRlcnMiLCJfcXVlc3Rpb25zIiwic2V0Q291bnRlcnMiLCJBc3Nlc3NtZW50UXVlc3Rpb25zIiwic2hvd0Fuc3dlcnMiLCJJdGVtT3B0aW9uIiwib3B0aW9uIiwiaSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwia2V5IiwiX29wdGlvbiIsInJlc3BvbnNlcyIsIm91dHB1dCIsInF1ZXN0aW9ucyIsImluZGV4IiwiYXR0cnMiLCJlbGVtZW50cyIsImF1ZGlvVXJsIiwiYXNzZXNzbWVudHMiLCJvcmFsVGV4dCIsInN0dWRlbnRBdWRpbyIsImNvbnRyb2xzIiwicHJlbG9hZCIsInNyYyIsImNvbnRhaW5lciIsIlNwb2tlbkl0ZW0iLCJmZWVkYmFjayIsIl9kcm9wZG93biIsIl90b2dnbGUiLCJzZWxlY3RlZCIsIkFjdGl2aXR5U2VsZWN0SXRlbSIsInNldFNlbGVjdGVkIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlRvZ2dsZU9wdGlvbiIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duSXRlbSIsImljb25DbHMiLCJDb250cm9sIiwicHJldmVudERlZmF1bHQiLCJBcHBJY29uIiwidHlwZXMiLCJ3YXJuIiwiQWN0aXZpdHlWaWV3Iiwic2V0VmlldyIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwib25DbG9zZSIsIkFjdGl2aXR5UGFydGljaXBhbnQiLCJfaW1hZ2UiLCJfdG9vbHRpcCIsIl9vYmplY3RpdmUiLCJDaGF0QWN0aXZpdHlQYXJ0aWNpcGFudCIsInNldFNob3dEcmF3ZXIiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwic3RvcFByb3BhZ2F0aW9uIiwiSWNvblN0YXRlIiwiVG9vbHRpcCIsIm9wZW4iLCJMaW5rIiwiaHJlZiIsIkltYWdlIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZSIsIlNwb2tlbkFjdGl2aXR5UGFydGljaXBhbnQiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5UGFydGljaXBhbnQiLCJtdWx0aXBsZUNob2ljZSIsIndyb25nIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRCb2R5IiwicHJvZ3JlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHkiLCJvbk5hdmlnYXRlIiwiSUNPTlMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VCb2R5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eVNwb2tlbkJvZHkiLCJwYXJ0aWNpcGF0aW9uIiwiSHRtbFdyYXBwZXIiLCJkZXRhaWwiLCJhbmFseXNpcyIsIm9iamVjdGl2ZVN0YXR1c2VzIiwiU3R1ZGVudEFzc2lnbm1lbnRTdW1tYXJ5Iiwic2V0SXRlbXMiLCJHZW5lcmFsVmlldyIsIk1vZHVsZUFjdGl2aXR5RGV0YWlscyIsInN1YnR5cGUiLCJJY29uIiwiX2xhYmVsIiwiX2FjdGl2aXR5SWNvbiIsIk1vZHVsZUFjdGl2aXR5IiwiQWN0aXZpdHlJY29uIiwiTW9kdWxlQWN0aXZpdHlNZXNzYWdlcyIsImhhc1BhcnRpY2lwYXRlZCIsImxhYmVsIiwidG90YWxNZXNzYWdlcyIsInZhbHVlcyIsImpvaW4iLCJtZXNzYWdlQ291bnRlciIsImhhc0FsZXJ0cyIsIl91dGlscyIsImFjdGl2aXR5SXRlbXMiLCJwZXJjZW50aWxlIiwicGFydGljaXBhbnRVcmkiLCJ2aWV3U3R1ZGVudCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiYWx0IiwicGVyY2VudGlsIiwibGltaXREZWNpbWFscyIsIlNwb2tlbkRhdGEiLCJmYWNlcyIsIkZhY2VzIiwiaGFzU3Bva2VuIiwiQ2hhcnRzIiwiTXVsdGlwbGVDaGFydCIsIlNwb2tlbkNoYXJ0IiwiX2NoYXJ0cyIsIl9zZXR0aW5ncyIsImN1cnJlbnQiLCJjb3VudE9iamVjdHNXaXRob3V0VXNlTXVsdGlwbGUiLCJoYXNOb25aZXJvQ291bnQiLCJzb21lIiwiZGlmZiIsIkNoYXJ0Iiwic2VyaWVzIiwibGFiZWxzIiwicGVuZGluZyIsIkNIQVJUX0JBU0VfU1BFQ1MiLCJyZXNwb25zaXZlIiwiUkVTUE9OU0lWRV9CQVNFX1NQRUNTIiwidGhlbWUiLCJwYWxldHRlIiwibGVnZW5kIiwicG9zaXRpb24iLCJob3Jpem9udGFsQWxpZ24iLCJjaGFydCIsImhlaWdodCIsImRhdGFMYWJlbHMiLCJmb3JtYXR0ZXIiLCJzZXJpZXNJbmRleCIsInciLCJjb25maWciLCJicmVha3BvaW50Iiwid2lkdGgiLCJzcG9rZW5JZCIsImZpbmQiLCJfaWNvbkJveCIsIkljb25Cb3giLCJEcmF3ZXJBbGVydEl0ZW0iLCJBUFAiLCJBUFBfTkFNRSIsIlBhZ2VDb250YWluZXIiLCJjbGFzc3dvcmtzIiwiRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2RyYXdlciIsIl9kcmF3ZXIyIiwiX2RyYXdlcjMiLCJfcGVyZmVjdFNjcm9sbGJhciIsIl93YWxsIiwiQXNpZGVEcmF3ZXIiLCJzaG93RHJhd2VyIiwiU2Nyb2xsQ29udGFpbmVyIiwid2FsbCIsIldhbGwiLCJfaWNvbnMyIiwiQWN0aXZpdHlGaWx0ZXIiLCJoYW5kbGVDbGljayIsIl91c2VyRGF0YSIsIkhlYWRlciIsIm93bmVyIiwiRW50aXR5SW1hZ2UiLCJVc2VyRGF0YSIsIkJ1dHRvbiIsImJvcmRlcmVkIiwiYWN0aW9ucyIsIl9mb3JtIiwiX2FjdGl2aXR5RmlsdGVyIiwiU3R1ZGVudHNIZWFkZXIiLCJsaXN0Q2xzIiwicmVmcmVzaGluZyIsInNldFJlZnJlc2hpbmciLCJvbkZpbHRlciIsImN1cnJlbnRUYXJnZXQiLCJsaXN0Iiwic3R1ZGVudHMiLCJJbnB1dCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzZWFyY2giLCJkaXNhYmxlZCIsInZhcmlhbnQiLCJfIiwiX2FzaWRlRHJhd2VyIiwiX2hlYWRlciIsIl9nZW5lcmFsIiwiX3N0dWRlbnRIZWFkZXIiLCJfdmlldyIsInNldFRvdGFsUGFydGljaXBhbnRzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImdldFByb3BlcnRpZXMiLCJQYWdlTG9hZGVyIiwiUHJvdmlkZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tb2RlbC9EQVRBLnRzIiwiL3RzL21vZGVsL2FjdGl2aXRpZXMvYWN0aXZpdGllcy50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXR5LnRzIiwiL3RzL21vZGVsL2luZGV4LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9zcG9rZW4udHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXR5LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvcGFydGljaXBhbnRzLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvYWN0aXRpdHktdHlwZXMudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvYWxlcnRzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9jb250ZW50LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbG9hZGluZy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL2Fzc2Vzc21lbnQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvY29tcGV0ZW5jaWVzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvZW1wdHktY2hhdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9tdWx0aXBsZS9jb3VudGVycy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL211bHRpcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvbXVsdGlwbGUvb3B0aW9uLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvbXVsdGlwbGUvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvc3Bva2VuL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL3NlbGVjdC9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvc2VsZWN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL3NlbGVjdC90b2dnbGUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvY2hhdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2dlbmVyYWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9kZXRhaWxzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9sYWJlbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vc3Bva2VuLnRzeCIsIi90cy92aWV3cy9jaGFydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9tdWx0aXBsZS50c3giLCIvdHMvdmlld3MvY2hhcnRzL3NldHRpbmdzLnRzeCIsIi90cy92aWV3cy9jaGFydHMvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FjdGl2aXR5LWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaWNvbi1ib3gudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZHJhd2VyL2FzaWRlLWRyYXdlci50c3giLCIvdHMvdmlld3MvZHJhd2VyL2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci93YWxsLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hY3Rpdml0eS1maWx0ZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaGVhZGVyL3N0dWRlbnQtaGVhZGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvdXNlci1kYXRhLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxnQkFBQSxHQUFBSCxPQUFBO1VBQ087VUFBVSxNQUNYSSxVQUFXLFNBQVFMLEtBQUEsQ0FBQU0seUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUwsTUFBQSxDQUFBTyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1B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