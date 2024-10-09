System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@aimpact/ailearn-app@0.1.13/components/ui", "@aimpact/ailearn-app@0.1.13/components/navbar-header.code", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/config", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/collapsible", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/drawer", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/dropdown", "@aimpact/ailearn-app@0.1.13/components/icons", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/tooltip", "@aimpact/ailearn-app@0.1.13/utils", "@aimpact/ailearn-app@0.1.13/shared/charts", "pragmate-ui@1.0.0-beta.6/perfect-scrollbar", "pragmate-ui@1.0.0-beta.6/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, dependency_32, dependency_33, dependency_34, bimport, __Bundle, __pkg, ims, Controller, ActivityAlerts, DetailActivityBody, DetailActivity, MultipleChoiceReport, AssessmentQuestions, ActivityView, ActivityParticipant, GeneralView, ActivityIcon, DrawerAlert, DrawerAlertItem, IconBox, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    ActivityAlerts: void 0,
    DetailActivityBody: void 0,
    DetailActivity: void 0,
    MultipleChoiceReport: void 0,
    AssessmentQuestions: void 0,
    ActivityView: void 0,
    ActivityParticipant: void 0,
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
    }, function (_pragmateUi100Beta6Drawer) {
      dependency_23 = _pragmateUi100Beta6Drawer;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_24 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_25 = _aimpactChatSdk130ChatComponentCode;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_26 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6Dropdown) {
      dependency_27 = _pragmateUi100Beta6Dropdown;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_28 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_pragmateUi100Beta6Image) {
      dependency_29 = _pragmateUi100Beta6Image;
    }, function (_pragmateUi100Beta6Tooltip) {
      dependency_30 = _pragmateUi100Beta6Tooltip;
    }, function (_aimpactAilearnApp0113Utils) {
      dependency_31 = _aimpactAilearnApp0113Utils;
    }, function (_aimpactAilearnApp0113SharedCharts) {
      dependency_32 = _aimpactAilearnApp0113SharedCharts;
    }, function (_pragmateUi100Beta6PerfectScrollbar) {
      dependency_33 = _pragmateUi100Beta6PerfectScrollbar;
    }, function (_pragmateUi100Beta6Form) {
      dependency_34 = _pragmateUi100Beta6Form;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_5], ['@aimpact/ailearn-sdk/reactive/model', dependency_6], ['@aimpact/http-suite/api', dependency_7], ['@aimpact/ailearn-sdk/config', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@aimpact/ailearn-sdk/tracking', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['react', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['pragmate-ui/empty', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/collapsible', dependency_21], ['pragmate-ui/components', dependency_22], ['pragmate-ui/drawer', dependency_23], ['@beyond-js/react-18-widgets/hooks', dependency_24], ['@aimpact/chat-sdk/chat-component.code', dependency_25], ['@aimpact/chat-sdk/widgets/markdown', dependency_26], ['pragmate-ui/dropdown', dependency_27], ['@aimpact/ailearn-app/components/icons', dependency_28], ['pragmate-ui/image', dependency_29], ['pragmate-ui/tooltip', dependency_30], ['@aimpact/ailearn-app/utils', dependency_31], ['@aimpact/ailearn-app/shared/charts', dependency_32], ['pragmate-ui/perfect-scrollbar', dependency_33], ['pragmate-ui/form', dependency_34]]);
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
        hash: 648713352,
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
          var _drawerAlerts = require("../../components/drawer-alerts");
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
            }, React.createElement(_drawerAlerts.DrawerAlert, {
              alerts: participantActivity.alerts,
              user: participant.user
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

      /***********************************************
      INTERNAL MODULE: ./views/activities/drawer/index
      ***********************************************/

      ims.set('./views/activities/drawer/index', {
        hash: 3942276398,
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
        hash: 1347288076,
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
            console.log(20, item);
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
      INTERNAL MODULE: ./views/assignment/drawer/index
      ***********************************************/

      ims.set('./views/assignment/drawer/index', {
        hash: 3347855290,
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
              specs: {
                user: student
              },
              control: _activity.StudentAssignmentActivity
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
        hash: 3043897634,
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
            return React.createElement(React.Fragment, null, React.createElement("section", {
              className: "alerts__container"
            }, React.createElement("header", null, React.createElement("h6", null, texts.alerts, " ", React.createElement("span", null, "(", alerts?.length, ")"))), React.createElement(_list.List, {
              as: "div",
              items: alerts,
              control: _item.DrawerAlertItem,
              specs: {
                user
              }
            })));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/components/drawer-alerts/item
      *****************************************************/

      ims.set('./views/components/drawer-alerts/item', {
        hash: 2748285396,
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
            return React.createElement(_collapsible.CollapsibleContainer, null, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("span", null, item.text)), React.createElement(_collapsible.CollapsibleContent, null, React.createElement("div", {
              className: "alert-item"
            }, React.createElement("h6", null, "RVD AI"), React.createElement("div", null, item.iteration.assistant), React.createElement("h6", null, user.name), React.createElement("div", null, item.iteration.student))));
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
        hash: 3070293159,
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
        (require || prop === 'MultipleChoiceReport') && _export("MultipleChoiceReport", MultipleChoiceReport = require ? require('./views/activities/drawer/materials/multiple/index').MultipleChoiceReport : value);
        (require || prop === 'AssessmentQuestions') && _export("AssessmentQuestions", AssessmentQuestions = require ? require('./views/activities/drawer/materials/multiple/questions').AssessmentQuestions : value);
        (require || prop === 'ActivityView') && _export("ActivityView", ActivityView = require ? require('./views/activities/view/index').ActivityView : value);
        (require || prop === 'ActivityParticipant') && _export("ActivityParticipant", ActivityParticipant = require ? require('./views/activities/view/participant').ActivityParticipant : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJQYXJ0aWNpcGFudEFjdGl2aXRpZXMiLCJwYXJlbnQiLCJhY3Rpdml0eSIsIlBhcnRpY2lwYW50QWN0aXZpdHkiLCJQYXJ0aWNpcGFudCIsIml0ZW0iLCJfcGFydGljaXBhbnQiLCJjb25zb2xlIiwibG9nIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbDIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfdHJhY2tpbmciLCJfY29yZSIsImlzU3RvcmUiLCJ0cmFja2luZyIsImFjdGl2aXR5U2VsZWN0ZWQiLCJjdXJyZW50VHJhY2tpbmciLCJzZXNzaW9uIiwidmlldyIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsInNwZWNpZmllciIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ1c2VycyIsInRyYWNraW5ncyIsInRyaWdnZXJFdmVudCIsIm9uIiwic2V0TW9kZWwiLCJmZXRjaGluZyIsIm0iLCJlIiwibG9hZFVzZXJUcmFja2luZyIsInVzZXJJZCIsIlRyYWNraW5nIiwiY2hhdCIsInJlZnJlc2giLCJ0cmlnZ2VyIiwicmVmcmVzaERyYXdlciIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwic2VsZWN0QWN0aXZpdHkiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJSZWFjdCIsIl9jb250ZXh0IiwiX2xpc3QiLCJfY29sbGFwc2libGUiLCJBY3Rpdml0eUFsZXJ0cyIsInBhcnRpY2lwYW50QWN0aXZpdHkiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwiYWxlcnRzIiwiY2xhc3NOYW1lIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIml0ZXJhdGlvbiIsImFzc2lzdGFudCIsInN0dWRlbnQiLCJMaXN0IiwiYXMiLCJjb250cm9sIiwiX2NvbXBvbmVudHMiLCJfYXNzZXNzbWVudCIsIl9jaGF0IiwiX3Nwb2tlbiIsIl9zZWxlY3QiLCJfZHJhd2VyQWxlcnRzIiwiRGV0YWlsQWN0aXZpdHlCb2R5IiwiYXNzaWdubWVudEFjdGl2aXR5Iiwic2V0QWN0aXZpdHkiLCJBY3Rpdml0eVNlbGVjdCIsInN1YnR5cGUiLCJEcmF3ZXJBbGVydCIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsImNvbnZlcnNhdGlvbiIsIlVzZXJDaGF0IiwiZGViYXRlIiwiTWF0ZXJpYWxBc3Nlc3NtZW50IiwiYXNzZXNzbWVudCIsInNwb2tlbiIsIlNwb2tlbkFuYWx5c2lzIiwiRHJhd2VyIiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRlbnQiLCJEZXRhaWxBY3Rpdml0eSIsImFjdGl2aXR5SWQiLCJ1c2VTdGF0ZSIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJ1c2VFZmZlY3QiLCJDbG9zZUJ1dHRvbiIsIlNwaW5uZXIiLCJhY3RpdmUiLCJvblJlZnJlc2giLCJmaW5hbGx5IiwiY2xzIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiX211bHRpcGxlIiwiTXVsdGlwbGVDaG9pY2VSZXBvcnQiLCJfY2hhdENvbXBvbmVudCIsIl9lbXB0eSIsIl9lbXB0eUNoYXQiLCJjaGF0TW9kZWwiLCJFbXB0eU1hdGVyaWFsIiwiY2hhdElkIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsImVtcHR5IiwiRW1wdHlDaGF0IiwiQWdlbnRzQ2hhdFBhbmVsIiwiX21hcmtkb3duIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJNYXJrZG93biIsImNvbnRlbnQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIkVtcHR5IiwiX3VpIiwibWVzc2FnZSIsIkVtcHR5Q2FyZCIsIkRlZmF1bHRNYXRlcmlhbCIsIkNvdW50ZXJzIiwiY291bnRlcnMiLCJ0b3RhbCIsImNvcnJlY3QiLCJfY291bnRlcnMiLCJfcXVlc3Rpb25zIiwic2V0Q291bnRlcnMiLCJBc3Nlc3NtZW50UXVlc3Rpb25zIiwic2hvd0Fuc3dlcnMiLCJJdGVtT3B0aW9uIiwib3B0aW9uIiwiaSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwia2V5IiwiX29wdGlvbiIsInJlc3BvbnNlcyIsIm91dHB1dCIsInF1ZXN0aW9ucyIsImluZGV4IiwiYXR0cnMiLCJlbGVtZW50cyIsImF1ZGlvVXJsIiwiYXNzZXNzbWVudHMiLCJvcmFsVGV4dCIsInN0dWRlbnRBdWRpbyIsImNvbnRyb2xzIiwicHJlbG9hZCIsInNyYyIsImNvbnRhaW5lciIsIlNwb2tlbkl0ZW0iLCJmZWVkYmFjayIsIl9kcm9wZG93biIsIl90b2dnbGUiLCJzZWxlY3RlZCIsIkFjdGl2aXR5U2VsZWN0SXRlbSIsInNldFNlbGVjdGVkIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlRvZ2dsZU9wdGlvbiIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duSXRlbSIsImljb25DbHMiLCJDb250cm9sIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkFwcEljb24iLCJ0eXBlcyIsIndhcm4iLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJvbkNsb3NlIiwidW5kZWZpbmVkIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCIsIl9pbWFnZSIsIl90b29sdGlwIiwiX29iamVjdGl2ZSIsInNldFNob3dEcmF3ZXIiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwiSWNvblN0YXRlIiwiVG9vbHRpcCIsIm9wZW4iLCJMaW5rIiwiaHJlZiIsIkltYWdlIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHkiLCJvbk5hdmlnYXRlIiwiSUNPTlMiLCJwcm9ncmVzIiwiYW5hbHlzaXMiLCJTdHVkZW50QXNzaWdubWVudFN1bW1hcnkiLCJzZXRJdGVtcyIsIkdlbmVyYWxWaWV3IiwiTW9kdWxlQWN0aXZpdHlEZXRhaWxzIiwiaWNvbnMiLCJJY29uIiwiX2xhYmVsIiwiX2FjdGl2aXR5SWNvbiIsIk1vZHVsZUFjdGl2aXR5Iiwic3RvcFByb3BhZ2F0aW9uIiwiQWN0aXZpdHlJY29uIiwiTW9kdWxlQWN0aXZpdHlNZXNzYWdlcyIsImhhc1BhcnRpY2lwYXRlZCIsImxhYmVsIiwidG90YWxNZXNzYWdlcyIsInZhbHVlcyIsImpvaW4iLCJtZXNzYWdlQ291bnRlciIsImhhc0FsZXJ0cyIsIl91dGlscyIsInBhcnRpY2lwYXRpb24iLCJhY3Rpdml0eUl0ZW1zIiwicGVyY2VudGlsZSIsInBhcnRpY2lwYW50VXJpIiwidmlld1N0dWRlbnQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImFsdCIsInBlcmNlbnRpbCIsImxpbWl0RGVjaW1hbHMiLCJTcG9rZW5EYXRhIiwiZmFjZXMiLCJGYWNlcyIsImhhc1Nwb2tlbiIsIkNoYXJ0cyIsIk11bHRpcGxlQ2hhcnQiLCJTcG9rZW5DaGFydCIsIl9jaGFydHMiLCJfc2V0dGluZ3MiLCJjdXJyZW50IiwiY291bnRPYmplY3RzV2l0aG91dFVzZU11bHRpcGxlIiwiaGFzTm9uWmVyb0NvdW50Iiwic29tZSIsIndyb25nIiwiZGlmZiIsIkNoYXJ0Iiwic2VyaWVzIiwibGFiZWxzIiwicGVuZGluZyIsIkNIQVJUX0JBU0VfU1BFQ1MiLCJyZXNwb25zaXZlIiwiUkVTUE9OU0lWRV9CQVNFX1NQRUNTIiwidGhlbWUiLCJwYWxldHRlIiwibGVnZW5kIiwicG9zaXRpb24iLCJob3Jpem9udGFsQWxpZ24iLCJjaGFydCIsImhlaWdodCIsImRhdGFMYWJlbHMiLCJmb3JtYXR0ZXIiLCJzZXJpZXNJbmRleCIsInciLCJjb25maWciLCJicmVha3BvaW50Iiwid2lkdGgiLCJzcG9rZW5JZCIsImZpbmQiLCJfaWNvbkJveCIsIkljb25Cb3giLCJEcmF3ZXJBbGVydEl0ZW0iLCJBUFAiLCJBUFBfTkFNRSIsIlBhZ2VDb250YWluZXIiLCJjbGFzc3dvcmtzIiwiRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2RyYXdlciIsIl9kcmF3ZXIyIiwiX2RyYXdlcjMiLCJfcGVyZmVjdFNjcm9sbGJhciIsIl93YWxsIiwiQXNpZGVEcmF3ZXIiLCJzaG93RHJhd2VyIiwiU2Nyb2xsQ29udGFpbmVyIiwid2FsbCIsIldhbGwiLCJfaWNvbnMyIiwiQWN0aXZpdHlGaWx0ZXIiLCJoYW5kbGVDbGljayIsIl91c2VyRGF0YSIsIkhlYWRlciIsIm93bmVyIiwiRW50aXR5SW1hZ2UiLCJVc2VyRGF0YSIsIkJ1dHRvbiIsImJvcmRlcmVkIiwiYWN0aW9ucyIsIl9mb3JtIiwiX2FjdGl2aXR5RmlsdGVyIiwiU3R1ZGVudHNIZWFkZXIiLCJsaXN0Q2xzIiwicmVmcmVzaGluZyIsInNldFJlZnJlc2hpbmciLCJvbkZpbHRlciIsImN1cnJlbnRUYXJnZXQiLCJsaXN0Iiwic3R1ZGVudHMiLCJJbnB1dCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzZWFyY2giLCJkaXNhYmxlZCIsInZhcmlhbnQiLCJfIiwiX2FzaWRlRHJhd2VyIiwiX2hlYWRlciIsIl9nZW5lcmFsIiwiX3N0dWRlbnRIZWFkZXIiLCJfdmlldyIsInNldFRvdGFsUGFydGljaXBhbnRzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImdldFByb3BlcnRpZXMiLCJQYWdlTG9hZGVyIiwiUHJvdmlkZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tb2RlbC9EQVRBLnRzIiwiL3RzL21vZGVsL2FjdGl2aXRpZXMvYWN0aXZpdGllcy50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXR5LnRzIiwiL3RzL21vZGVsL2luZGV4LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvcGFydGljaXBhbnQudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50cy50cyIsIi90eXBlcy50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy80MDQudHN4IiwiL2FjdGl0aXR5LXR5cGVzLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL2FsZXJ0cy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvY29udGVudC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9hc3Nlc3NtZW50LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvY2hhdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL2VtcHR5LWNoYXQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9tYXRlcmlhbHMvbXVsdGlwbGUvY291bnRlcnMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL21hdGVyaWFscy9tdWx0aXBsZS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL211bHRpcGxlL29wdGlvbi50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL211bHRpcGxlL3F1ZXN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9kcmF3ZXIvbWF0ZXJpYWxzL3Nwb2tlbi9pdGVtLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9zZWxlY3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZHJhd2VyL3NlbGVjdC9pdGVtLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2RyYXdlci9zZWxlY3QvdG9nZ2xlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZ2VuZXJhbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2RldGFpbHMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2xhYmVsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhcnRzL211bHRpcGxlLnRzeCIsIi90cy92aWV3cy9jaGFydHMvc2V0dGluZ3MudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWN0aXZpdHktaWNvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lbXB0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pY29uLWJveC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kcmF3ZXIvYXNpZGUtZHJhd2VyLnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvY29udGVudC50c3giLCIvdHMvdmlld3MvZHJhd2VyL3dhbGwudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FjdGl2aXR5LWZpbHRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvc3R1ZGVudC1oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci91c2VyLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSFIsZ0JBQUEsQ0FBQVMsWUFBWSxDQUFDQyxhQUFhLEVBQUU7Y0FDNUIsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FB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