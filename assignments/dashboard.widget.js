System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@aimpact/ailearn-app@0.1.13/components/ui", "@aimpact/ailearn-app@0.1.13/components/navbar-header.code", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/config", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/collapsible", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/drawer", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/dropdown", "@aimpact/ailearn-app@0.1.13/components/icons", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/tooltip", "@aimpact/ailearn-app@0.1.13/utils", "@aimpact/ailearn-app@0.1.13/shared/charts", "pragmate-ui@1.0.0-beta.6/perfect-scrollbar", "pragmate-ui@1.0.0-beta.6/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, dependency_32, dependency_33, dependency_34, dependency_35, bimport, __Bundle, __pkg, ims, Controller, ActivityAlerts, DetailActivityBody, DetailActivity, EmptyDetailActivity, MultipleChoiceReport, AssessmentQuestions, ActivityView, ActivityParticipant, EmptyCard, GeneralView, ActivityIcon, DrawerAlert, DrawerAlertItem, IconBox, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    ActivityAlerts: void 0,
    DetailActivityBody: void 0,
    DetailActivity: void 0,
    EmptyDetailActivity: void 0,
    MultipleChoiceReport: void 0,
    AssessmentQuestions: void 0,
    ActivityView: void 0,
    ActivityParticipant: void 0,
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
    }, function (_aimpactAilearnApp0113Utils) {
      dependency_32 = _aimpactAilearnApp0113Utils;
    }, function (_aimpactAilearnApp0113SharedCharts) {
      dependency_33 = _aimpactAilearnApp0113SharedCharts;
    }, function (_pragmateUi100Beta6PerfectScrollbar) {
      dependency_34 = _pragmateUi100Beta6PerfectScrollbar;
    }, function (_pragmateUi100Beta6Form) {
      dependency_35 = _pragmateUi100Beta6Form;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_5], ['@aimpact/ailearn-sdk/reactive/model', dependency_6], ['@aimpact/http-suite/api', dependency_7], ['@aimpact/ailearn-sdk/config', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@aimpact/ailearn-sdk/tracking', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['react', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['pragmate-ui/empty', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/collapsible', dependency_21], ['pragmate-ui/components', dependency_22], ['pragmate-ui/tabs', dependency_23], ['pragmate-ui/drawer', dependency_24], ['@beyond-js/react-18-widgets/hooks', dependency_25], ['@aimpact/chat-sdk/chat-component.code', dependency_26], ['@aimpact/chat-sdk/widgets/markdown', dependency_27], ['pragmate-ui/dropdown', dependency_28], ['@aimpact/ailearn-app/components/icons', dependency_29], ['pragmate-ui/image', dependency_30], ['pragmate-ui/tooltip', dependency_31], ['@aimpact/ailearn-app/utils', dependency_32], ['@aimpact/ailearn-app/shared/charts', dependency_33], ['pragmate-ui/perfect-scrollbar', dependency_34], ['pragmate-ui/form', dependency_35]]);
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
        hash: 3944300216,
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
                console.log(99, id, items[id], participant.activities.items.map(item => item.messages?.count));
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
        hash: 1535571532,
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
        hash: 2355723822,
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
            }, _react.default.createElement(_tabs.Tab, null, _react.default.createElement("h4", null, chatTexts.title)), participantActivity?.alerts.length && _react.default.createElement(_tabs.Tab, {
              className: "alerts-tab"
            }, texts.alerts)), _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_chatComponent.AgentsChatContainer, {
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
      INTERNAL MODULE: ./views/activities/view/index
      *********************************************/

      ims.set('./views/activities/view/index', {
        hash: 3501703820,
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
              control: _participant.ActivityParticipant
            }) : _react.default.createElement(_empty.Empty, {
              text: 'No participants found'
            }));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/activities/view/participant
      ***************************************************/

      ims.set('./views/activities/view/participant', {
        hash: 1921325428,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityParticipant = ActivityParticipant;
          var _react = require("react");
          var _context = require("../../context");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _tooltip = require("pragmate-ui/tooltip");
          var _list = require("pragmate-ui/list");
          var _collapsible = require("pragmate-ui/collapsible");
          var _objective = require("../../assignment/drawer/activity/objective");
          /*bundle*/
          function ActivityParticipant({
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
            const onClick = () => {
              setShowDrawer({
                show: true,
                view: 'student',
                data: item
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
              items: data.progress.objectives,
              control: IconState
            }))), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement(_list.List, {
              items: data.progress.objectives,
              control: _objective.StudentAssignmentActivityObjective
            }))));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/index
      ********************************************************/

      ims.set('./views/assignment/drawer/activity/index', {
        hash: 1860511132,
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
          var _drawerAlerts = require("../../../components/drawer-alerts");
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
              className: `activity-type__icon activity--${item.activity.type}`
            }, React.createElement(_icons.AppIcon, {
              icon: _icons.ICONS[item.activity.type]
            })), React.createElement("div", null, React.createElement("h5", null, item.activity.title), React.createElement("span", null, texts.activities.types[item.activity.type]))), React.createElement(_components.Link, {
              onClick: onNavigate,
              className: "activity-messages-count"
            }, "(mensajes ", item.messages.count, ")"))), React.createElement(_collapsible.CollapsibleContent, null, React.createElement(React.Fragment, null, React.createElement(_drawerAlerts.DrawerAlert, {
              alerts: item.alerts,
              user: user
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

      /************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/objective
      ************************************************************/

      ims.set('./views/assignment/drawer/activity/objective', {
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

      /***********************************************
      INTERNAL MODULE: ./views/assignment/drawer/empty
      ***********************************************/

      ims.set('./views/assignment/drawer/empty', {
        hash: 3894440303,
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
            className,
            description,
            children
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
        hash: 2730568233,
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
            const icons = participantActivity?.progress?.objectives?.map(item => item?.status?.icon);
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
        "im": "./views/activities/view/participant",
        "from": "ActivityParticipant",
        "name": "ActivityParticipant"
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
        (require || prop === 'ActivityParticipant') && _export("ActivityParticipant", ActivityParticipant = require ? require('./views/activities/view/participant').ActivityParticipant : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJQYXJ0aWNpcGFudEFjdGl2aXRpZXMiLCJwYXJlbnQiLCJhY3Rpdml0eSIsIlBhcnRpY2lwYW50QWN0aXZpdHkiLCJQYXJ0aWNpcGFudCIsIml0ZW0iLCJfcGFydGljaXBhbnQiLCJjb25zb2xlIiwibG9nIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbDIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfdHJhY2tpbmciLCJfY29yZSIsImlzU3RvcmUiLCJ0cmFja2luZyIsImFjdGl2aXR5U2VsZWN0ZWQiLCJjdXJyZW50VHJhY2tpbmciLCJzZXNzaW9uIiwidmlldyIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsInNwZWNpZmllciIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ1c2VycyIsInRyYWNraW5ncyIsInRyaWdnZXJFdmVudCIsIm9uIiwic2V0TW9kZWwiLCJmZXRjaGluZyIsIm0iLCJlIiwibG9hZFVzZXJUcmFja2luZyIsInVzZXJJZCIsIlRyYWNraW5nIiwiY2hhdCIsInJlZnJlc2giLCJ0cmlnZ2VyIiwicmVmcmVzaERyYXdlciIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwic2VsZWN0QWN0aXZpdHkiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJSZWFjdCIsIl9jb250ZXh0IiwiX2xpc3QiLCJfY29sbGFwc2libGUiLCJBY3Rpdml0eUFsZXJ0cyIsInBhcnRpY2lwYW50QWN0aXZpdHkiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwiYWxlcnRzIiwiY2xhc3NOYW1lIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIml0ZXJhdGlvbiIsImFzc2lzdGFudCIsInN0dWRlbnQiLCJMaXN0IiwiYXMiLCJjb250cm9sIiwiX2NvbXBvbmVudHMiLCJfYXNzZXNzbWVudCIsIl9jaGF0IiwiX3Nwb2tlbiIsIl9zZWxlY3QiLCJEZXRhaWxBY3Rpdml0eUJvZHkiLCJhc3NpZ25tZW50QWN0aXZpdHkiLCJzZXRBY3Rpdml0eSIsIkFjdGl2aXR5U2VsZWN0IiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvcHRpb25zIiwiY29udmVyc2F0aW9uIiwiVXNlckNoYXQiLCJkZWJhdGUiLCJNYXRlcmlhbEFzc2Vzc21lbnQiLCJhc3Nlc3NtZW50Iiwic3Bva2VuIiwiU3Bva2VuQW5hbHlzaXMiLCJEcmF3ZXIiLCJfaWNvbnMiLCJfaG9va3MiLCJfY29udGVudCIsIkRldGFpbEFjdGl2aXR5IiwiYWN0aXZpdHlJZCIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIm9uUmVmcmVzaCIsImZpbmFsbHkiLCJjbHMiLCJJY29uQnV0dG9uIiwib25DbGljayIsIkNsb3NlQnV0dG9uIiwidGVybmFyeSIsInRydWUiLCJmYWxzZSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJFbXB0eURldGFpbEFjdGl2aXR5IiwiX211bHRpcGxlIiwiTXVsdGlwbGVDaG9pY2VSZXBvcnQiLCJfY2hhdENvbXBvbmVudCIsIl9lbXB0eSIsIl9lbXB0eUNoYXQiLCJfdGFicyIsIl9kcmF3ZXJBbGVydHMiLCJjaGF0VGV4dHMiLCJjaGF0TW9kZWwiLCJFbXB0eU1hdGVyaWFsIiwiY2hhdElkIiwiVGFic0NvbnRhaW5lciIsIlRhYnMiLCJUYWIiLCJQYW5lcyIsIkFnZW50c0NoYXRDb250YWluZXIiLCJlbXB0eSIsIkVtcHR5Q2hhdCIsIkFnZW50c0NoYXRQYW5lbCIsIkRyYXdlckFsZXJ0IiwiX21hcmtkb3duIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJNYXJrZG93biIsImNvbnRlbnQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIkVtcHR5IiwiX3VpIiwibWVzc2FnZSIsIkVtcHR5Q2FyZCIsIkRlZmF1bHRNYXRlcmlhbCIsIkNvdW50ZXJzIiwiY291bnRlcnMiLCJ0b3RhbCIsImNvcnJlY3QiLCJfY291bnRlcnMiLCJfcXVlc3Rpb25zIiwic2V0Q291bnRlcnMiLCJBc3Nlc3NtZW50UXVlc3Rpb25zIiwic2hvd0Fuc3dlcnMiLCJJdGVtT3B0aW9uIiwib3B0aW9uIiwiaSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwia2V5IiwiX29wdGlvbiIsInJlc3BvbnNlcyIsIm91dHB1dCIsInF1ZXN0aW9ucyIsImluZGV4IiwiYXR0cnMiLCJlbGVtZW50cyIsImF1ZGlvVXJsIiwiYXNzZXNzbWVudHMiLCJvcmFsVGV4dCIsInN0dWRlbnRBdWRpbyIsImNvbnRyb2xzIiwicHJlbG9hZCIsInNyYyIsImNvbnRhaW5lciIsIlNwb2tlbkl0ZW0iLCJmZWVkYmFjayIsIl9kcm9wZG93biIsIl90b2dnbGUiLCJzZWxlY3RlZCIsIkFjdGl2aXR5U2VsZWN0SXRlbSIsInNldFNlbGVjdGVkIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlRvZ2dsZU9wdGlvbiIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duSXRlbSIsImljb25DbHMiLCJDb250cm9sIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkFwcEljb24iLCJ0eXBlcyIsIndhcm4iLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJvbkNsb3NlIiwidW5kZWZpbmVkIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCIsIl9pbWFnZSIsIl90b29sdGlwIiwiX29iamVjdGl2ZSIsInNldFNob3dEcmF3ZXIiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwiSWNvblN0YXRlIiwiVG9vbHRpcCIsIm9wZW4iLCJMaW5rIiwiaHJlZiIsIkltYWdlIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHkiLCJvbk5hdmlnYXRlIiwiSUNPTlMiLCJwcm9ncmVzIiwiYW5hbHlzaXMiLCJjaGlsZHJlbiIsIlN0dWRlbnRBc3NpZ25tZW50U3VtbWFyeSIsInNldEl0ZW1zIiwiR2VuZXJhbFZpZXciLCJNb2R1bGVBY3Rpdml0eURldGFpbHMiLCJpY29ucyIsInN1YnR5cGUiLCJJY29uIiwiX2xhYmVsIiwiX2FjdGl2aXR5SWNvbiIsIk1vZHVsZUFjdGl2aXR5Iiwic3RvcFByb3BhZ2F0aW9uIiwiQWN0aXZpdHlJY29uIiwiTW9kdWxlQWN0aXZpdHlNZXNzYWdlcyIsImhhc1BhcnRpY2lwYXRlZCIsImxhYmVsIiwidG90YWxNZXNzYWdlcyIsInZhbHVlcyIsImpvaW4iLCJtZXNzYWdlQ291bnRlciIsImhhc0FsZXJ0cyIsIl91dGlscyIsInBhcnRpY2lwYXRpb24iLCJhY3Rpdml0eUl0ZW1zIiwicGVyY2VudGlsZSIsInBhcnRpY2lwYW50VXJpIiwidmlld1N0dWRlbnQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImFsdCIsInBlcmNlbnRpbCIsImxpbWl0RGVjaW1hbHMiLCJTcG9rZW5EYXRhIiwiZmFjZXMiLCJGYWNlcyIsImhhc1Nwb2tlbiIsIkNoYXJ0cyIsIk11bHRpcGxlQ2hhcnQiLCJTcG9rZW5DaGFydCIsIl9jaGFydHMiLCJfc2V0dGluZ3MiLCJjdXJyZW50IiwiY291bnRPYmplY3RzV2l0aG91dFVzZU11bHRpcGxlIiwiaGFzTm9uWmVyb0NvdW50Iiwic29tZSIsIndyb25nIiwiZGlmZiIsIkNoYXJ0Iiwic2VyaWVzIiwibGFiZWxzIiwicGVuZGluZyIsIkNIQVJUX0JBU0VfU1BFQ1MiLCJyZXNwb25zaXZlIiwiUkVTUE9OU0lWRV9CQVNFX1NQRUNTIiwidGhlbWUiLCJwYWxldHRlIiwibGVnZW5kIiwicG9zaXRpb24iLCJob3Jpem9udGFsQWxpZ24iLCJjaGFydCIsImhlaWdodCIsImRhdGFMYWJlbHMiLCJmb3JtYXR0ZXIiLCJzZXJpZXNJbmRleCIsInciLCJjb25maWciLCJicmVha3BvaW50Iiwid2lkdGgiLCJzcG9rZW5JZCIsImZpbmQiLCJfaWNvbkJveCIsIkljb25Cb3giLCJEcmF3ZXJBbGVydEl0ZW0iLCJBUFAiLCJBUFBfTkFNRSIsIlBhZ2VDb250YWluZXIiLCJjbGFzc3dvcmtzIiwiRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2RyYXdlciIsIl9kcmF3ZXIyIiwiX2RyYXdlcjMiLCJfcGVyZmVjdFNjcm9sbGJhciIsIl93YWxsIiwiQXNpZGVEcmF3ZXIiLCJzaG93RHJhd2VyIiwiU2Nyb2xsQ29udGFpbmVyIiwid2FsbCIsIldhbGwiLCJfaWNvbnMyIiwiQWN0aXZpdHlGaWx0ZXIiLCJoYW5kbGVDbGljayIsIl91c2VyRGF0YSIsIkhlYWRlciIsIm93bmVyIiwiRW50aXR5SW1hZ2UiLCJVc2VyRGF0YSIsIkJ1dHRvbiIsImJvcmRlcmVkIiwiYWN0aW9ucyIsIl9mb3JtIiwiX2FjdGl2aXR5RmlsdGVyIiwiU3R1ZGVudHNIZWFkZXIiLCJsaXN0Q2xzIiwicmVmcmVzaGluZyIsInNldFJlZnJlc2hpbmciLCJvbkZpbHRlciIsImN1cnJlbnRUYXJnZXQiLCJsaXN0Iiwic3R1ZGVudHMiLCJJbnB1dCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzZWFyY2giLCJkaXNhYmxlZCIsInZhcmlhbnQiLCJfIiwiX2FzaWRlRHJhd2VyIiwiX2hlYWRlciIsIl9nZW5lcmFsIiwiX3N0dWRlbnRIZWFkZXIiLCJfdmlldyIsInNldFRvdGFsUGFydGljaXBhbnRzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImdldFByb3BlcnRpZXMiLCJQYWdlTG9hZGVyIiwiUHJvdmlkZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tb2RlbC9EQVRBLnRzIiwiL3RzL21vZGVsL2FjdGl2aXRpZXMvYWN0aXZpdGllcy50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXR5LnRzIiwiL3RzL21vZGVsL2luZGV4LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvcGFydGljaXBhbnQudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50cy50cyIsIi90eXBlcy50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy80MDQudHN4IiwiL2FjdGl0aXR5LXR5cGVzLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL2FsZXJ0cy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvY29udGVudC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL2xvYWRpbmcudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9hc3Nlc3NtZW50LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvY2hhdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL2VtcHR5LWNoYXQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvbXVsdGlwbGUvY291bnRlcnMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9tdWx0aXBsZS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL211bHRpcGxlL29wdGlvbi50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL211bHRpcGxlL3F1ZXN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL3Nwb2tlbi9pdGVtLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9zZWxlY3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL3NlbGVjdC9pdGVtLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9zZWxlY3QvdG9nZ2xlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2dlbmVyYWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9kZXRhaWxzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9sYWJlbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vc3Bva2VuLnRzeCIsIi90cy92aWV3cy9jaGFydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9tdWx0aXBsZS50c3giLCIvdHMvdmlld3MvY2hhcnRzL3NldHRpbmdzLnRzeCIsIi90cy92aWV3cy9jaGFydHMvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FjdGl2aXR5LWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaWNvbi1ib3gudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZHJhd2VyL2FzaWRlLWRyYXdlci50c3giLCIvdHMvdmlld3MvZHJhd2VyL2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci93YWxsLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hY3Rpdml0eS1maWx0ZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaGVhZGVyL3N0dWRlbnQtaGVhZGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvdXNlci1kYXRhLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENB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