System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "@aimpact/ailearn-app@0.1.13/components/ui", "@aimpact/ailearn-app@0.1.13/components/navbar-header.code", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/config", "pragmate-ui@1.0.0-beta.6/empty", "@aimpact/ailearn-app@0.1.13/shared/charts", "pragmate-ui@1.0.0-beta.6/drawer", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/perfect-scrollbar", "@aimpact/ailearn-app@0.1.13/components/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/chips", "pragmate-ui@1.0.0-beta.6/image", "@aimpact/ailearn-app@0.1.13/utils", "pragmate-ui@1.0.0-beta.6/tooltip", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/dropdown", "pragmate-ui@1.0.0-beta.6/collapsible"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, dependency_32, dependency_33, dependency_34, bimport, __Bundle, __pkg, ims, Controller, View, DetailActivity, MultipleChoiceReport, AssessmentQuestions, ActivityView, ActivityParticipant, GeneralView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
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
        hash: 2275294456,
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
        hash: 3349626648,
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
            async loadUserTracking(id, userId) {
              try {
                if (this.#model) {
                  this.#model = undefined;
                }
                this.#assignmentId = id;
                this.#model = _tracking.Tracking.get({
                  assignmentId: id,
                  userId,
                  chat: true
                });
                await this.#model.load({
                  id,
                  userId
                });
                this.triggerEvent();
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
        hash: 2026120419,
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
              setShowDrawer
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
              setShowDrawer({
                show: true,
                view: 'student-activity',
                data: {
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

      /**********************************************
      INTERNAL MODULE: ./views/student/activity/index
      **********************************************/

      ims.set('./views/student/activity/index', {
        hash: 3689854431,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DetailActivity = DetailActivity;
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("../../context");
          var _assessment = require("./materials/assessment");
          var _chat = require("./materials/chat");
          var _spoken = require("./materials/spoken");
          var _select = require("./select");
          var Drawer = require("pragmate-ui/drawer");
          var _icons = require("pragmate-ui/icons");
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
              user: student,
              participant
            } = item;
            const [activity, setActivity] = React.useState(item.activity);
            const [fetching, setFetching] = React.useState(false);
            const [ready, setReady] = React.useState(false);
            React.useEffect(() => {
              setReady(false);
              setTimeout(() => {
                setReady(true);
              }, 50);
            }, [activity]);
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
        hash: 2392104620,
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
            return _react.default.createElement(_react.default.Fragment, null, item?.data?.messages?.synthesis && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h4", null, texts.synthesis), _react.default.createElement("p", null, item.data.messages?.synthesis)), _react.default.createElement("h4", null, texts.title), _react.default.createElement("div", {
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
        hash: 2321276851,
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
            item
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const [isDragging, setIsDragging] = React.useState(false);
            const onToggle = () => !isDragging;
            console.log(30, item);
            return React.createElement("article", {
              className: "ds-drawer__activity-item"
            }, React.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJQYXJ0aWNpcGFudEFjdGl2aXRpZXMiLCJwYXJlbnQiLCJhY3Rpdml0eSIsIlBhcnRpY2lwYW50QWN0aXZpdHkiLCJQYXJ0aWNpcGFudCIsIml0ZW0iLCJfcGFydGljaXBhbnQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsMiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl90cmFja2luZyIsInRyYWNraW5nIiwiYWN0aXZpdHlTZWxlY3RlZCIsImN1cnJlbnRUcmFja2luZyIsInNlc3Npb24iLCJ2aWV3IiwiYXNzaWdubWVudElkIiwiYXNzaWdubWVudCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwic3BlY2lmaWVyIiwidXNlcnMiLCJvbiIsInRyaWdnZXJFdmVudCIsInNldE1vZGVsIiwiZmV0Y2hpbmciLCJtIiwiZSIsImxvYWRVc2VyVHJhY2tpbmciLCJ1c2VySWQiLCJ1bmRlZmluZWQiLCJUcmFja2luZyIsImNoYXQiLCJjb25zb2xlIiwicmVmcmVzaCIsInRyaWdnZXIiLCJyZWZyZXNoRHJhd2VyIiwic2VsZWN0QWN0aXZpdHkiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfbXVsdGlwbGUiLCJfc3Bva2VuIiwiQ2hhcnRzIiwiY2xhc3NOYW1lIiwiTXVsdGlwbGVDaGFydCIsIlNwb2tlbkNoYXJ0IiwiX2NoYXJ0cyIsIl9jb250ZXh0IiwiX3NldHRpbmdzIiwidXNlRGFzaGJvYXJkQ29udGV4dCIsImluZGV4IiwiY3VycmVudCIsImNvdW50T2JqZWN0c1dpdGhvdXRVc2VNdWx0aXBsZSIsImhhc05vblplcm9Db3VudCIsInZhbHVlcyIsInNvbWUiLCJjb3VudGVycyIsInRvdGFsIiwiY29ycmVjdCIsIndyb25nIiwiZGlmZiIsIkNoYXJ0Iiwib3B0aW9ucyIsInNlcmllcyIsImxhYmVscyIsInBhcnRpY2lwYXRpb24iLCJwZW5kaW5nIiwiQ0hBUlRfQkFTRV9TUEVDUyIsInJlc3BvbnNpdmUiLCJSRVNQT05TSVZFX0JBU0VfU1BFQ1MiLCJ0aGVtZSIsInBhbGV0dGUiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImhvcml6b250YWxBbGlnbiIsImNoYXJ0IiwiaGVpZ2h0IiwiZGF0YUxhYmVscyIsImZvcm1hdHRlciIsInNlcmllc0luZGV4IiwidyIsImNvbmZpZyIsImJyZWFrcG9pbnQiLCJ3aWR0aCIsInNwb2tlbklkIiwiZmluZCIsImtleSIsInNwb2tlbiIsIkRhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9kcmF3ZXIiLCJfY29tcG9uZW50cyIsIl9hc3NpZ25tZW50IiwiX3BlcmZlY3RTY3JvbGxiYXIiLCJBc2lkZURyYXdlciIsInNob3dEcmF3ZXIiLCJzZXRTaG93RHJhd2VyIiwiV2FsbCIsIkRyYXdlciIsIm9wZW4iLCJvbkNsb3NlIiwiU2Nyb2xsQ29udGFpbmVyIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ3YWxsIiwiRGV0YWlsQWN0aXZpdHkiLCJzdHVkZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRTdW1tYXJ5IiwiX2ljb25zIiwiX3VpIiwiX2VtcHR5IiwiQVBQIiwiQVBQX05BTUUiLCJFbXB0eSIsIlBhZ2VDb250YWluZXIiLCJJQ09OUyIsImNsYXNzd29ya3MiLCJlbXB0eSIsIl91c2VyRGF0YSIsIkhlYWRlciIsIm93bmVyIiwib25DbGljayIsIkVudGl0eUltYWdlIiwic3JjIiwiYWx0IiwiVXNlckRhdGEiLCJsYWJlbCIsIkJ1dHRvbiIsImJvcmRlcmVkIiwiYWN0aW9ucyIsIl9ob29rcyIsIl8iLCJfYXNpZGVEcmF3ZXIiLCJfaGVhZGVyIiwiX2hlYWRlcjIiLCJfZ2VuZXJhbCIsIkFQUE5BTUUiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0VmlldyIsInNldFRvdGFsUGFydGljaXBhbnRzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImdldFByb3BlcnRpZXMiLCJzZXRGZXRjaGluZyIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJjbHMiLCJQcm92aWRlciIsIlN0dWRlbnRzSGVhZGVyIiwidGVybmFyeSIsImZhbHNlIiwiR2VuZXJhbFZpZXciLCJ0cnVlIiwiQWN0aXZpdHlWaWV3IiwiX2ljb25zMiIsIkFjdGl2aXR5RmlsdGVyIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsIkljb25CdXR0b24iLCJfZm9ybSIsIl9saXN0IiwiX2FjdGl2aXR5RmlsdGVyIiwibGlzdENscyIsInJlZnJlc2hpbmciLCJzZXRSZWZyZXNoaW5nIiwib25SZWZyZXNoIiwic3RvcFByb3BhZ2F0aW9uIiwic2V0VGltZW91dCIsImxpc3QiLCJzdHVkZW50cyIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJzZWFyY2giLCJMaXN0IiwiY29udHJvbCIsImRpc2FibGVkIiwidmFyaWFudCIsIl9jaGlwcyIsIk1vZHVsZUFjdGl2aXR5IiwiaGFzUGFydGljaXBhdGVkIiwib3V0cHV0Iiwic3VidHlwZSIsIm1lc3NhZ2VDb3VudGVyIiwicHJldmVudERlZmF1bHQiLCJDaGlwIiwiX2ltYWdlIiwiX3V0aWxzIiwiYWN0aXZpdHlJdGVtcyIsInBlcmNlbnRpbGUiLCJwYXJ0aWNpcGFudFVyaSIsInZpZXdTdHVkZW50IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJJbWFnZSIsIkxpbmsiLCJocmVmIiwicGVyY2VudGlsIiwibGltaXREZWNpbWFscyIsIl9jb3JlIiwiX3Rvb2x0aXAiLCJTcG9rZW5EYXRhIiwiZmFjZXMiLCJGYWNlcyIsIlRvb2x0aXAiLCJjb250ZW50IiwiaGFzU3Bva2VuIiwiUmVhY3QiLCJfYXNzZXNzbWVudCIsIl9jaGF0IiwiX3NlbGVjdCIsInNldEFjdGl2aXR5IiwidXNlRWZmZWN0IiwiZmluYWxseSIsIkNsb3NlQnV0dG9uIiwiU3Bpbm5lciIsImFjdGl2ZSIsIkFjdGl2aXR5U2VsZWN0IiwiY29udmVyc2F0aW9uIiwiVXNlckNoYXQiLCJkZWJhdGUiLCJNYXRlcmlhbEFzc2Vzc21lbnQiLCJhc3Nlc3NtZW50IiwiU3Bva2VuQW5hbHlzaXMiLCJNdWx0aXBsZUNob2ljZVJlcG9ydCIsIl9jaGF0Q29tcG9uZW50IiwiX2VtcHR5Q2hhdCIsImNoYXRNb2RlbCIsIkVtcHR5TWF0ZXJpYWwiLCJjaGF0SWQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiRW1wdHlDaGF0IiwiQWdlbnRzQ2hhdFBhbmVsIiwiX21hcmtkb3duIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJNYXJrZG93biIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwibWVzc2FnZSIsIkVtcHR5Q2FyZCIsIkRlZmF1bHRNYXRlcmlhbCIsIkNvdW50ZXJzIiwiX2NvdW50ZXJzIiwiX3F1ZXN0aW9ucyIsInNldENvdW50ZXJzIiwiQXNzZXNzbWVudFF1ZXN0aW9ucyIsInNob3dBbnN3ZXJzIiwiSXRlbU9wdGlvbiIsIm9wdGlvbiIsImkiLCJxdWVzdGlvbiIsImFuc3dlciIsImFjY3VyYWN5IiwiY29ycmVjdEFuc3dlciIsIl9vcHRpb24iLCJyZXNwb25zZXMiLCJxdWVzdGlvbnMiLCJhdHRycyIsImVsZW1lbnRzIiwiYXVkaW9VcmwiLCJhc3Nlc3NtZW50cyIsIm9yYWxUZXh0Iiwic3R1ZGVudEF1ZGlvIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiY29udGFpbmVyIiwiU3Bva2VuSXRlbSIsImZlZWRiYWNrIiwiX2Ryb3Bkb3duIiwiX3RvZ2dsZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJmaWx0ZXIiLCJBY3Rpdml0eVNlbGVjdEl0ZW0iLCJEcm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiVG9nZ2xlT3B0aW9uIiwiYXMiLCJEcm9wZG93bk1lbnUiLCJEcm9wZG93bkl0ZW0iLCJpY29uQ2xzIiwiQ29udHJvbCIsIkFwcEljb24iLCJ3YXJuIiwiX29iamVjdGl2ZSIsIl9jb2xsYXBzaWJsZSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHkiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwibG9nIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInR5cGVzIiwiQ29sbGFwc2libGVDb250ZW50IiwicHJvZ3JlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlPYmplY3RpdmUiLCJhbmFseXNpcyIsInNldEl0ZW1zIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJBY3Rpdml0eVBhcnRpY2lwYW50Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvREFUQS50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXRpZXMudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdHkudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudHMudHMiLCIvdHlwZXMudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvNDA0LnRzeCIsIi90cy92aWV3cy9jaGFydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9tdWx0aXBsZS50c3giLCIvdHMvdmlld3MvY2hhcnRzL3NldHRpbmdzLnRzeCIsIi90cy92aWV3cy9jaGFydHMvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RyYXdlci9hc2lkZS1kcmF3ZXIudHN4IiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaGVhZGVyL2FjdGl2aXR5LWZpbHRlci50c3giLCIvdHMvdmlld3MvbGlzdC9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9hY3Rpdml0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vc3Bva2VuLnRzeCIsIi9hY3RpdGl0eS10eXBlcy50cyIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9hc3Nlc3NtZW50LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9jaGF0LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9jb21wZXRlbmNpZXMudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL2VtcHR5LWNoYXQudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvbXVsdGlwbGUvY291bnRlcnMudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL211bHRpcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9tdWx0aXBsZS9vcHRpb24udHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL211bHRpcGxlL3F1ZXN0aW9ucy50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9zcG9rZW4vaXRlbS50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9zZWxlY3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvc2VsZWN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvc2VsZWN0L3RvZ2dsZS50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hc3NpZ25tZW50L2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2Fzc2lnbm1lbnQvYWN0aXZpdHkvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2Fzc2lnbm1lbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3VzZXItZGF0YS50c3giLCIvdHMvdmlld3Mvdmlld3MvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3ZpZXdzL2FjdGl2aXR5L3BhcnRpY2lwYW50LnRzeCIsIi90cy92aWV3cy92aWV3cy9nZW5lcmFsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxnQkFBQSxHQUFBSCxPQUFBO1VBQ087VUFBVSxNQUNYSSxVQUFXLFNBQVFMLEtBQUEsQ0FBQU0seUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUwsTUFBQSxDQUFBTyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0hSLGdCQUFBLENBQUFTLFlBQVksQ0FBQ0MsYUFBYSxFQUFFO2NBQzVCLElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxJQUFJLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUUzQztZQUVBOzs7WUFHQUUsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBWixLQUFNLENBQUNhLEtBQUssRUFBRTtZQUNwQjs7VUFDQUMsT0FB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