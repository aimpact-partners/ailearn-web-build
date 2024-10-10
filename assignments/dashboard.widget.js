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
        hash: 2940750358,
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
        hash: 1027775504,
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
          var _tabs = require("pragmate-ui/tabs");
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
            }, "(mensajes ", item.messages.count, ")"))), React.createElement(_collapsible.CollapsibleContent, null, React.createElement("div", {
              className: "mt-30 ds-drawer__content ds-drawer__content--variant"
            }, React.createElement(_tabs.TabsContainer, {
              active: 0
            }, React.createElement(_tabs.Tabs, {
              className: "drawer__tabs"
            }, React.createElement(_tabs.Tab, null, React.createElement("h4", null, texts.activities.summary)), item?.alerts.length && React.createElement(_tabs.Tab, {
              className: "alerts-tab"
            }, texts.alerts)), React.createElement(_tabs.Panes, null, React.createElement("div", null, React.createElement("p", null, item.synthesis), React.createElement("h4", {
              className: "mb-30"
            }, texts.activities.progres), React.createElement(_list.List, {
              className: "unstyled-list activity__users-list",
              items: item.progress.objectives,
              control: _objective.StudentAssignmentActivityObjective
            })), React.createElement(_drawerAlerts.DrawerAlert, {
              alerts: item?.alerts,
              user: user
            })))))));
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
        hash: 3463591899,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJQYXJ0aWNpcGFudEFjdGl2aXRpZXMiLCJwYXJlbnQiLCJhY3Rpdml0eSIsIlBhcnRpY2lwYW50QWN0aXZpdHkiLCJQYXJ0aWNpcGFudCIsIml0ZW0iLCJfcGFydGljaXBhbnQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsMiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl90cmFja2luZyIsIl9jb3JlIiwiaXNTdG9yZSIsInRyYWNraW5nIiwiYWN0aXZpdHlTZWxlY3RlZCIsImN1cnJlbnRUcmFja2luZyIsInNlc3Npb24iLCJ2aWV3IiwiYXNzaWdubWVudElkIiwiYXNzaWdubWVudCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwic3BlY2lmaWVyIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInVzZXJzIiwidHJhY2tpbmdzIiwidHJpZ2dlckV2ZW50Iiwib24iLCJzZXRNb2RlbCIsImZldGNoaW5nIiwibSIsImUiLCJsb2FkVXNlclRyYWNraW5nIiwidXNlcklkIiwiVHJhY2tpbmciLCJjaGF0IiwiY29uc29sZSIsInJlZnJlc2giLCJ0cmlnZ2VyIiwicmVmcmVzaERyYXdlciIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwic2VsZWN0QWN0aXZpdHkiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJSZWFjdCIsIl9jb250ZXh0IiwiX2xpc3QiLCJfY29sbGFwc2libGUiLCJBY3Rpdml0eUFsZXJ0cyIsInBhcnRpY2lwYW50QWN0aXZpdHkiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwiYWxlcnRzIiwiY2xhc3NOYW1lIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIml0ZXJhdGlvbiIsImFzc2lzdGFudCIsInN0dWRlbnQiLCJMaXN0IiwiYXMiLCJjb250cm9sIiwiX2NvbXBvbmVudHMiLCJfYXNzZXNzbWVudCIsIl9jaGF0IiwiX3Nwb2tlbiIsIl9zZWxlY3QiLCJEZXRhaWxBY3Rpdml0eUJvZHkiLCJhc3NpZ25tZW50QWN0aXZpdHkiLCJzZXRBY3Rpdml0eSIsIkFjdGl2aXR5U2VsZWN0IiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvcHRpb25zIiwiY29udmVyc2F0aW9uIiwiVXNlckNoYXQiLCJkZWJhdGUiLCJNYXRlcmlhbEFzc2Vzc21lbnQiLCJhc3Nlc3NtZW50Iiwic3Bva2VuIiwiU3Bva2VuQW5hbHlzaXMiLCJEcmF3ZXIiLCJfaWNvbnMiLCJfaG9va3MiLCJfY29udGVudCIsIkRldGFpbEFjdGl2aXR5IiwiYWN0aXZpdHlJZCIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIm9uUmVmcmVzaCIsImZpbmFsbHkiLCJjbHMiLCJJY29uQnV0dG9uIiwib25DbGljayIsIkNsb3NlQnV0dG9uIiwidGVybmFyeSIsInRydWUiLCJmYWxzZSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJFbXB0eURldGFpbEFjdGl2aXR5IiwiX211bHRpcGxlIiwiTXVsdGlwbGVDaG9pY2VSZXBvcnQiLCJfY2hhdENvbXBvbmVudCIsIl9lbXB0eSIsIl9lbXB0eUNoYXQiLCJfdGFicyIsIl9kcmF3ZXJBbGVydHMiLCJjaGF0VGV4dHMiLCJjaGF0TW9kZWwiLCJFbXB0eU1hdGVyaWFsIiwiY2hhdElkIiwiVGFic0NvbnRhaW5lciIsIlRhYnMiLCJUYWIiLCJQYW5lcyIsIkFnZW50c0NoYXRDb250YWluZXIiLCJlbXB0eSIsIkVtcHR5Q2hhdCIsIkFnZW50c0NoYXRQYW5lbCIsIkRyYXdlckFsZXJ0IiwiX21hcmtkb3duIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJNYXJrZG93biIsImNvbnRlbnQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIkVtcHR5IiwiX3VpIiwibWVzc2FnZSIsIkVtcHR5Q2FyZCIsIkRlZmF1bHRNYXRlcmlhbCIsIkNvdW50ZXJzIiwiY291bnRlcnMiLCJ0b3RhbCIsImNvcnJlY3QiLCJfY291bnRlcnMiLCJfcXVlc3Rpb25zIiwic2V0Q291bnRlcnMiLCJBc3Nlc3NtZW50UXVlc3Rpb25zIiwic2hvd0Fuc3dlcnMiLCJJdGVtT3B0aW9uIiwib3B0aW9uIiwiaSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwia2V5IiwiX29wdGlvbiIsInJlc3BvbnNlcyIsIm91dHB1dCIsInF1ZXN0aW9ucyIsImluZGV4IiwiYXR0cnMiLCJlbGVtZW50cyIsImF1ZGlvVXJsIiwiYXNzZXNzbWVudHMiLCJvcmFsVGV4dCIsInN0dWRlbnRBdWRpbyIsImNvbnRyb2xzIiwicHJlbG9hZCIsInNyYyIsImNvbnRhaW5lciIsIlNwb2tlbkl0ZW0iLCJmZWVkYmFjayIsIl9kcm9wZG93biIsIl90b2dnbGUiLCJzZWxlY3RlZCIsIkFjdGl2aXR5U2VsZWN0SXRlbSIsInNldFNlbGVjdGVkIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlRvZ2dsZU9wdGlvbiIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duSXRlbSIsImljb25DbHMiLCJDb250cm9sIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkFwcEljb24iLCJ0eXBlcyIsIndhcm4iLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJvbkNsb3NlIiwidW5kZWZpbmVkIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCIsIl9pbWFnZSIsIl90b29sdGlwIiwiX29iamVjdGl2ZSIsInNldFNob3dEcmF3ZXIiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwiSWNvblN0YXRlIiwiVG9vbHRpcCIsIm9wZW4iLCJMaW5rIiwiaHJlZiIsIkltYWdlIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHkiLCJvbk5hdmlnYXRlIiwiSUNPTlMiLCJwcm9ncmVzIiwiYW5hbHlzaXMiLCJTdHVkZW50QXNzaWdubWVudFN1bW1hcnkiLCJzZXRJdGVtcyIsIkdlbmVyYWxWaWV3IiwiTW9kdWxlQWN0aXZpdHlEZXRhaWxzIiwiaWNvbnMiLCJzdWJ0eXBlIiwiSWNvbiIsIl9sYWJlbCIsIl9hY3Rpdml0eUljb24iLCJNb2R1bGVBY3Rpdml0eSIsInN0b3BQcm9wYWdhdGlvbiIsIkFjdGl2aXR5SWNvbiIsIk1vZHVsZUFjdGl2aXR5TWVzc2FnZXMiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJsYWJlbCIsInRvdGFsTWVzc2FnZXMiLCJ2YWx1ZXMiLCJqb2luIiwibWVzc2FnZUNvdW50ZXIiLCJoYXNBbGVydHMiLCJfdXRpbHMiLCJwYXJ0aWNpcGF0aW9uIiwiYWN0aXZpdHlJdGVtcyIsInBlcmNlbnRpbGUiLCJwYXJ0aWNpcGFudFVyaSIsInZpZXdTdHVkZW50IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbHQiLCJwZXJjZW50aWwiLCJsaW1pdERlY2ltYWxzIiwiU3Bva2VuRGF0YSIsImZhY2VzIiwiRmFjZXMiLCJoYXNTcG9rZW4iLCJDaGFydHMiLCJNdWx0aXBsZUNoYXJ0IiwiU3Bva2VuQ2hhcnQiLCJfY2hhcnRzIiwiX3NldHRpbmdzIiwiY3VycmVudCIsImNvdW50T2JqZWN0c1dpdGhvdXRVc2VNdWx0aXBsZSIsImhhc05vblplcm9Db3VudCIsInNvbWUiLCJ3cm9uZyIsImRpZmYiLCJDaGFydCIsInNlcmllcyIsImxhYmVscyIsInBlbmRpbmciLCJDSEFSVF9CQVNFX1NQRUNTIiwicmVzcG9uc2l2ZSIsIlJFU1BPTlNJVkVfQkFTRV9TUEVDUyIsInRoZW1lIiwicGFsZXR0ZSIsImxlZ2VuZCIsInBvc2l0aW9uIiwiaG9yaXpvbnRhbEFsaWduIiwiY2hhcnQiLCJoZWlnaHQiLCJkYXRhTGFiZWxzIiwiZm9ybWF0dGVyIiwic2VyaWVzSW5kZXgiLCJ3IiwiY29uZmlnIiwiYnJlYWtwb2ludCIsIndpZHRoIiwic3Bva2VuSWQiLCJmaW5kIiwiX2ljb25Cb3giLCJJY29uQm94IiwiRHJhd2VyQWxlcnRJdGVtIiwiQVBQIiwiQVBQX05BTUUiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3N3b3JrcyIsIkRhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9kcmF3ZXIiLCJfZHJhd2VyMiIsIl9kcmF3ZXIzIiwiX3BlcmZlY3RTY3JvbGxiYXIiLCJfd2FsbCIsIkFzaWRlRHJhd2VyIiwic2hvd0RyYXdlciIsIlNjcm9sbENvbnRhaW5lciIsIndhbGwiLCJXYWxsIiwiX2ljb25zMiIsIkFjdGl2aXR5RmlsdGVyIiwiaGFuZGxlQ2xpY2siLCJfdXNlckRhdGEiLCJIZWFkZXIiLCJvd25lciIsIkVudGl0eUltYWdlIiwiVXNlckRhdGEiLCJCdXR0b24iLCJib3JkZXJlZCIsImFjdGlvbnMiLCJfZm9ybSIsIl9hY3Rpdml0eUZpbHRlciIsIlN0dWRlbnRzSGVhZGVyIiwibGlzdENscyIsInJlZnJlc2hpbmciLCJzZXRSZWZyZXNoaW5nIiwib25GaWx0ZXIiLCJjdXJyZW50VGFyZ2V0IiwibGlzdCIsInN0dWRlbnRzIiwiSW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwiZGlzYWJsZWQiLCJ2YXJpYW50IiwiXyIsIl9hc2lkZURyYXdlciIsIl9oZWFkZXIiLCJfZ2VuZXJhbCIsIl9zdHVkZW50SGVhZGVyIiwiX3ZpZXciLCJzZXRUb3RhbFBhcnRpY2lwYW50cyIsInN0YXRlIiwic2V0U3RhdGUiLCJnZXRQcm9wZXJ0aWVzIiwiUGFnZUxvYWRlciIsIlByb3ZpZGVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvREFUQS50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXRpZXMudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdHkudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudHMudHMiLCIvdHlwZXMudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvNDA0LnRzeCIsIi9hY3RpdGl0eS10eXBlcy50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9hbGVydHMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9sb2FkaW5nLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvYXNzZXNzbWVudC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL2NoYXQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9jb21wZXRlbmNpZXMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9lbXB0eS1jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL211bHRpcGxlL2NvdW50ZXJzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvbXVsdGlwbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9tdWx0aXBsZS9vcHRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9tdWx0aXBsZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9zcG9rZW4vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvc2VsZWN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9zZWxlY3QvaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvc2VsZWN0L3RvZ2dsZS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9nZW5lcmFsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvZGV0YWlscy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL3Nwb2tlbi50c3giLCIvdHMvdmlld3MvY2hhcnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGFydHMvbXVsdGlwbGUudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9zZXR0aW5ncy50c3giLCIvdHMvdmlld3MvY2hhcnRzL3Nwb2tlbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hY3Rpdml0eS1pY29uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2ljb24tYm94LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RyYXdlci9hc2lkZS1kcmF3ZXIudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9jb250ZW50LnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvd2FsbC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYWN0aXZpdHktZmlsdGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9zdHVkZW50LWhlYWRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL3VzZXItZGF0YS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxnQkFBQSxHQUFBSCxPQUFBO1VBQ087VUFBVSxNQUNYSSxVQUFXLFNBQVFMLEtBQUEsQ0FBQU0seUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUwsTUFBQSxDQUFBTyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0hSLGdCQUFBLENB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