System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@aimpact/ailearn-app@0.1.13/components/ui", "@aimpact/ailearn-app@0.1.13/components/navbar-header.code", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/config", "pragmate-ui@1.0.0-beta.6/empty", "@aimpact/ailearn-app@0.1.13/shared/charts", "pragmate-ui@1.0.0-beta.6/drawer", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/perfect-scrollbar", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/ailearn-app@0.1.13/components/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/chips", "pragmate-ui@1.0.0-beta.6/image", "@aimpact/ailearn-app@0.1.13/utils", "pragmate-ui@1.0.0-beta.6/tooltip", "pragmate-ui@1.0.0-beta.6/collapsible", "pragmate-ui@1.0.0-beta.6/alert", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/dropdown"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, dependency_32, dependency_33, dependency_34, dependency_35, dependency_36, bimport, __Bundle, __pkg, ims, Controller, View, ActivityAlerts, DetailActivityBody, DetailActivity, MultipleChoiceReport, AssessmentQuestions, ActivityView, ActivityParticipant, GeneralView, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0113SharedCharts) {
      dependency_20 = _aimpactAilearnApp0113SharedCharts;
    }, function (_pragmateUi100Beta6Drawer) {
      dependency_21 = _pragmateUi100Beta6Drawer;
    }, function (_pragmateUi100Beta6Components) {
      dependency_22 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6PerfectScrollbar) {
      dependency_23 = _pragmateUi100Beta6PerfectScrollbar;
    }, function (_pragmateUi100Beta6List) {
      dependency_24 = _pragmateUi100Beta6List;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_25 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_26 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Form) {
      dependency_27 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Chips) {
      dependency_28 = _pragmateUi100Beta6Chips;
    }, function (_pragmateUi100Beta6Image) {
      dependency_29 = _pragmateUi100Beta6Image;
    }, function (_aimpactAilearnApp0113Utils) {
      dependency_30 = _aimpactAilearnApp0113Utils;
    }, function (_pragmateUi100Beta6Tooltip) {
      dependency_31 = _pragmateUi100Beta6Tooltip;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_32 = _pragmateUi100Beta6Collapsible;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_33 = _pragmateUi100Beta6Alert;
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_34 = _aimpactChatSdk130ChatComponentCode;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_35 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6Dropdown) {
      dependency_36 = _pragmateUi100Beta6Dropdown;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_5], ['@aimpact/ailearn-sdk/reactive/model', dependency_6], ['@aimpact/http-suite/api', dependency_7], ['@aimpact/ailearn-sdk/config', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@aimpact/ailearn-sdk/tracking', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['react', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['pragmate-ui/empty', dependency_19], ['@aimpact/ailearn-app/shared/charts', dependency_20], ['pragmate-ui/drawer', dependency_21], ['pragmate-ui/components', dependency_22], ['pragmate-ui/perfect-scrollbar', dependency_23], ['pragmate-ui/list', dependency_24], ['@aimpact/ailearn-app/components/icons', dependency_25], ['@beyond-js/react-18-widgets/hooks', dependency_26], ['pragmate-ui/form', dependency_27], ['pragmate-ui/chips', dependency_28], ['pragmate-ui/image', dependency_29], ['@aimpact/ailearn-app/utils', dependency_30], ['pragmate-ui/tooltip', dependency_31], ['pragmate-ui/collapsible', dependency_32], ['pragmate-ui/alert', dependency_33], ['@aimpact/chat-sdk/chat-component.code', dependency_34], ['@aimpact/chat-sdk/widgets/markdown', dependency_35], ['pragmate-ui/dropdown', dependency_36]]);
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
        hash: 3757617644,
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
            #filter;
            get participants() {
              if (!this.#filter) return this.#model.participants.items;
              return this.#model.participants.items.filter(item => item.user.name.toLowerCase().includes(this.#filter.toLowerCase()));
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
              this.triggerEvent('update.items');
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
        hash: 3735098627,
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
            const onFilter = event => {
              console.log(10, event.currentTarget.value);
              store.filter(event.currentTarget.value);
            };
            return _react.default.createElement("header", {
              className: "dashboard-students__header"
            }, _react.default.createElement("div", {
              className: "ds-students-header__col"
            }, _react.default.createElement("section", {
              className: "header__title"
            }, _react.default.createElement("h6", null, texts.list.students), _react.default.createElement("span", null, "(", model.participants.items?.length, " ", texts.list.participants, ")")), _react.default.createElement("section", null, _react.default.createElement(_form.Input, {
              onClick: onFilter,
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
        hash: 3675197099,
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
        hash: 3648140877,
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
        hash: 1575860301,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityParticipant = ActivityParticipant;
          var _config = require("@aimpact/ailearn-app/config");
          var _react = require("react");
          var _context = require("../../context");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _tooltip = require("pragmate-ui/tooltip");
          var _list = require("pragmate-ui/list");
          var _objective = require("../../student/assignment/activity/objective");
          var _collapsible = require("pragmate-ui/collapsible");
          const APPNAME = _config.default?.params?.APP_NAME ?? 'RVD.AI';
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

      /*************************************
      INTERNAL MODULE: ./views/views/general
      *************************************/

      ims.set('./views/views/general', {
        hash: 2382527529,
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
              items: store.participants,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJQYXJ0aWNpcGFudEFjdGl2aXRpZXMiLCJwYXJlbnQiLCJhY3Rpdml0eSIsIlBhcnRpY2lwYW50QWN0aXZpdHkiLCJQYXJ0aWNpcGFudCIsIml0ZW0iLCJfcGFydGljaXBhbnQiLCJjb25zb2xlIiwibG9nIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbDIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfdHJhY2tpbmciLCJfY29yZSIsImlzU3RvcmUiLCJ0cmFja2luZyIsImFjdGl2aXR5U2VsZWN0ZWQiLCJjdXJyZW50VHJhY2tpbmciLCJzZXNzaW9uIiwidmlldyIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsInNwZWNpZmllciIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ1c2VycyIsInRyYWNraW5ncyIsInRyaWdnZXJFdmVudCIsIm9uIiwic2V0TW9kZWwiLCJmZXRjaGluZyIsIm0iLCJlIiwibG9hZFVzZXJUcmFja2luZyIsInVzZXJJZCIsIlRyYWNraW5nIiwiY2hhdCIsInJlZnJlc2giLCJ0cmlnZ2VyIiwicmVmcmVzaERyYXdlciIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwic2VsZWN0QWN0aXZpdHkiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfbXVsdGlwbGUiLCJfc3Bva2VuIiwiQ2hhcnRzIiwiY2xhc3NOYW1lIiwiTXVsdGlwbGVDaGFydCIsIlNwb2tlbkNoYXJ0IiwiX2NoYXJ0cyIsIl9jb250ZXh0IiwiX3NldHRpbmdzIiwidXNlRGFzaGJvYXJkQ29udGV4dCIsImluZGV4IiwiY3VycmVudCIsImNvdW50T2JqZWN0c1dpdGhvdXRVc2VNdWx0aXBsZSIsImhhc05vblplcm9Db3VudCIsInZhbHVlcyIsInNvbWUiLCJjb3VudGVycyIsInRvdGFsIiwidW5kZWZpbmVkIiwiY29ycmVjdCIsIndyb25nIiwiZGlmZiIsIkNoYXJ0Iiwib3B0aW9ucyIsInNlcmllcyIsImxhYmVscyIsInBhcnRpY2lwYXRpb24iLCJwZW5kaW5nIiwiQ0hBUlRfQkFTRV9TUEVDUyIsInJlc3BvbnNpdmUiLCJSRVNQT05TSVZFX0JBU0VfU1BFQ1MiLCJ0aGVtZSIsInBhbGV0dGUiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImhvcml6b250YWxBbGlnbiIsImNoYXJ0IiwiaGVpZ2h0IiwiZGF0YUxhYmVscyIsImZvcm1hdHRlciIsInNlcmllc0luZGV4IiwidyIsImNvbmZpZyIsImJyZWFrcG9pbnQiLCJ3aWR0aCIsInNwb2tlbklkIiwiZmluZCIsImtleSIsInNwb2tlbiIsIkRhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9kcmF3ZXIiLCJfY29tcG9uZW50cyIsIl9hc3NpZ25tZW50IiwiX3BlcmZlY3RTY3JvbGxiYXIiLCJfd2FsbCIsIkFzaWRlRHJhd2VyIiwic2hvd0RyYXdlciIsInNldFNob3dEcmF3ZXIiLCJEcmF3ZXIiLCJvcGVuIiwib25DbG9zZSIsIlNjcm9sbENvbnRhaW5lciIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwid2FsbCIsIldhbGwiLCJEZXRhaWxBY3Rpdml0eSIsInN0dWRlbnQiLCJTdHVkZW50QXNzaWdubWVudFN1bW1hcnkiLCJSZWFjdCIsInNldEl0ZW1zIiwidXNlU3RhdGUiLCJzZXRGZXRjaGluZyIsIm9uUmVmcmVzaCIsImZpbmFsbHkiLCJjbHMiLCJDbG9zZUJ1dHRvbiIsIl9pY29ucyIsIl91aSIsIl9lbXB0eSIsIkFQUCIsIkFQUF9OQU1FIiwiRW1wdHkiLCJQYWdlQ29udGFpbmVyIiwiSUNPTlMiLCJjbGFzc3dvcmtzIiwiZW1wdHkiLCJfdXNlckRhdGEiLCJIZWFkZXIiLCJvd25lciIsIm9uQ2xpY2siLCJFbnRpdHlJbWFnZSIsInNyYyIsImFsdCIsIlVzZXJEYXRhIiwibGFiZWwiLCJCdXR0b24iLCJib3JkZXJlZCIsImFjdGlvbnMiLCJfaG9va3MiLCJfIiwiX2FzaWRlRHJhd2VyIiwiX2hlYWRlciIsIl9oZWFkZXIyIiwiX2dlbmVyYWwiLCJBUFBOQU1FIiwic2V0UmVhZHkiLCJzZXRWaWV3Iiwic2V0VG90YWxQYXJ0aWNpcGFudHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiZ2V0UHJvcGVydGllcyIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJQcm92aWRlciIsIlN0dWRlbnRzSGVhZGVyIiwidGVybmFyeSIsImZhbHNlIiwiR2VuZXJhbFZpZXciLCJ0cnVlIiwiQWN0aXZpdHlWaWV3IiwiX2ljb25zMiIsIkFjdGl2aXR5RmlsdGVyIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsIkljb25CdXR0b24iLCJfZm9ybSIsIl9saXN0IiwiX2FjdGl2aXR5RmlsdGVyIiwibGlzdENscyIsInJlZnJlc2hpbmciLCJzZXRSZWZyZXNoaW5nIiwic3RvcFByb3BhZ2F0aW9uIiwib25GaWx0ZXIiLCJjdXJyZW50VGFyZ2V0IiwibGlzdCIsInN0dWRlbnRzIiwiSW5wdXQiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsIkxpc3QiLCJjb250cm9sIiwiZGlzYWJsZWQiLCJ2YXJpYW50IiwiTW9kdWxlQWN0aXZpdHkiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJwYXJ0aWNpcGFudEFjdGl2aXR5Iiwib3V0cHV0Iiwic3VidHlwZSIsIm1lc3NhZ2VDb3VudGVyIiwicHJldmVudERlZmF1bHQiLCJhY3Rpdml0eUlkIiwiaWNvbnMiLCJhbGVydHMiLCJJY29uIiwiX2ltYWdlIiwiX3V0aWxzIiwiYWN0aXZpdHlJdGVtcyIsInBlcmNlbnRpbGUiLCJwYXJ0aWNpcGFudFVyaSIsInZpZXdTdHVkZW50IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJJbWFnZSIsIkxpbmsiLCJocmVmIiwicGVyY2VudGlsIiwibGltaXREZWNpbWFscyIsIl90b29sdGlwIiwiU3Bva2VuRGF0YSIsImZhY2VzIiwiRmFjZXMiLCJUb29sdGlwIiwiY29udGVudCIsImhhc1Nwb2tlbiIsIl9jb2xsYXBzaWJsZSIsIkFjdGl2aXR5QWxlcnRzIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIml0ZXJhdGlvbiIsImFzc2lzdGFudCIsImFzIiwiX2Fzc2Vzc21lbnQiLCJfY2hhdCIsIl9zZWxlY3QiLCJfYWxlcnRzIiwiRGV0YWlsQWN0aXZpdHlCb2R5IiwiYXNzaWdubWVudEFjdGl2aXR5Iiwic2V0QWN0aXZpdHkiLCJBY3Rpdml0eVNlbGVjdCIsImNvbnZlcnNhdGlvbiIsIlVzZXJDaGF0IiwiZGViYXRlIiwiTWF0ZXJpYWxBc3Nlc3NtZW50IiwiYXNzZXNzbWVudCIsIlNwb2tlbkFuYWx5c2lzIiwiX2NvbnRlbnQiLCJ1c2VFZmZlY3QiLCJTcGlubmVyIiwiYWN0aXZlIiwiTXVsdGlwbGVDaG9pY2VSZXBvcnQiLCJfY2hhdENvbXBvbmVudCIsIl9lbXB0eUNoYXQiLCJjaGF0TW9kZWwiLCJFbXB0eU1hdGVyaWFsIiwiY2hhdElkIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsIkVtcHR5Q2hhdCIsIkFnZW50c0NoYXRQYW5lbCIsIl9tYXJrZG93biIsIkNvbXBldGVuY2llc0ZlZWRiYWNrIiwiTWFya2Rvd24iLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIm1lc3NhZ2UiLCJFbXB0eUNhcmQiLCJEZWZhdWx0TWF0ZXJpYWwiLCJDb3VudGVycyIsIl9jb3VudGVycyIsIl9xdWVzdGlvbnMiLCJzZXRDb3VudGVycyIsIkFzc2Vzc21lbnRRdWVzdGlvbnMiLCJzaG93QW5zd2VycyIsIkl0ZW1PcHRpb24iLCJvcHRpb24iLCJpIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJfb3B0aW9uIiwicmVzcG9uc2VzIiwicXVlc3Rpb25zIiwiYXR0cnMiLCJlbGVtZW50cyIsImF1ZGlvVXJsIiwiYXNzZXNzbWVudHMiLCJvcmFsVGV4dCIsInN0dWRlbnRBdWRpbyIsImNvbnRyb2xzIiwicHJlbG9hZCIsImNvbnRhaW5lciIsIlNwb2tlbkl0ZW0iLCJmZWVkYmFjayIsIl9kcm9wZG93biIsIl90b2dnbGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiQWN0aXZpdHlTZWxlY3RJdGVtIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlRvZ2dsZU9wdGlvbiIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duSXRlbSIsImljb25DbHMiLCJDb250cm9sIiwiQXBwSWNvbiIsInR5cGVzIiwid2FybiIsIl9vYmplY3RpdmUiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5IiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJvblRvZ2dsZSIsIm9uTmF2aWdhdGUiLCJwcm9ncmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZSIsImFuYWx5c2lzIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJBY3Rpdml0eVBhcnRpY2lwYW50IiwiSWNvblN0YXRlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvREFUQS50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXRpZXMudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdHkudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudHMudHMiLCIvdHlwZXMudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvNDA0LnRzeCIsIi90cy92aWV3cy9jaGFydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9tdWx0aXBsZS50c3giLCIvdHMvdmlld3MvY2hhcnRzL3NldHRpbmdzLnRzeCIsIi90cy92aWV3cy9jaGFydHMvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RyYXdlci9hc2lkZS1kcmF3ZXIudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9jb250ZW50LnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvd2FsbC50c3giLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9oZWFkZXIvYWN0aXZpdHktZmlsdGVyLnRzeCIsIi90cy92aWV3cy9saXN0L2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9zcG9rZW4udHN4IiwiL2FjdGl0aXR5LXR5cGVzLnRzIiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvYWxlcnRzLnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL2Fzc2Vzc21lbnQudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL2NoYXQudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvZW1wdHktY2hhdC50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9tdWx0aXBsZS9jb3VudGVycy50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvbXVsdGlwbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL211bHRpcGxlL29wdGlvbi50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvbXVsdGlwbGUvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL3Nwb2tlbi9pdGVtLnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L3NlbGVjdC9pbmRleC50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9zZWxlY3QvaXRlbS50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9zZWxlY3QvdG9nZ2xlLnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2Fzc2lnbm1lbnQvYWN0aXZpdHkvYWxlcnRzLnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2Fzc2lnbm1lbnQvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYXNzaWdubWVudC9hY3Rpdml0eS9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYXNzaWdubWVudC9pbmRleC50c3giLCIvdHMvdmlld3MvdXNlci1kYXRhLnRzeCIsIi90cy92aWV3cy92aWV3cy9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3Mvdmlld3MvYWN0aXZpdHkvcGFydGljaXBhbnQudHN4IiwiL3RzL3ZpZXdzL3ZpZXdzL2dlbmVyYWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxnQkFBQSxHQUFBSCxPQUFBO1VBQ087VUFBVSxNQUNYSSxVQUFXLFNBQVFMLEtBQUEs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