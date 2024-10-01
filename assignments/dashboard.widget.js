System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "@aimpact/ailearn-app@0.1.13/components/ui", "@aimpact/ailearn-app@0.1.13/components/navbar-header.code", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/config", "pragmate-ui@1.0.0-beta.6/empty", "@aimpact/ailearn-app@0.1.13/shared/charts", "pragmate-ui@1.0.0-beta.6/drawer", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/ailearn-app@0.1.13/components/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/chips", "pragmate-ui@1.0.0-beta.6/image", "@aimpact/ailearn-app@0.1.13/utils", "pragmate-ui@1.0.0-beta.6/tooltip", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/dropdown"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, dependency_32, bimport, __Bundle, __pkg, ims, Controller, View, DetailActivity, MultipleChoiceReport, AssessmentQuestions, ActivityView, ActivityParticipant, GeneralView, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_22 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_23 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6List) {
      dependency_24 = _pragmateUi100Beta6List;
    }, function (_pragmateUi100Beta6Form) {
      dependency_25 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Chips) {
      dependency_26 = _pragmateUi100Beta6Chips;
    }, function (_pragmateUi100Beta6Image) {
      dependency_27 = _pragmateUi100Beta6Image;
    }, function (_aimpactAilearnApp0113Utils) {
      dependency_28 = _aimpactAilearnApp0113Utils;
    }, function (_pragmateUi100Beta6Tooltip) {
      dependency_29 = _pragmateUi100Beta6Tooltip;
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_30 = _aimpactChatSdk130ChatComponentCode;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_31 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6Dropdown) {
      dependency_32 = _pragmateUi100Beta6Dropdown;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_5], ['@aimpact/ailearn-sdk/reactive/model', dependency_6], ['@aimpact/http-suite/api', dependency_7], ['@aimpact/ailearn-sdk/config', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@aimpact/ailearn-sdk/tracking', dependency_12], ['react', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_15], ['pragmate-ui/icons', dependency_16], ['@aimpact/ailearn-app/config', dependency_17], ['pragmate-ui/empty', dependency_18], ['@aimpact/ailearn-app/shared/charts', dependency_19], ['pragmate-ui/drawer', dependency_20], ['pragmate-ui/components', dependency_21], ['@aimpact/ailearn-app/components/icons', dependency_22], ['@beyond-js/react-18-widgets/hooks', dependency_23], ['pragmate-ui/list', dependency_24], ['pragmate-ui/form', dependency_25], ['pragmate-ui/chips', dependency_26], ['pragmate-ui/image', dependency_27], ['@aimpact/ailearn-app/utils', dependency_28], ['pragmate-ui/tooltip', dependency_29], ['@aimpact/chat-sdk/chat-component.code', dependency_30], ['@aimpact/chat-sdk/widgets/markdown', dependency_31], ['pragmate-ui/dropdown', dependency_32]]);
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
        hash: 4178167771,
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
                const data = await this.#model.load({
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
        hash: 3884198417,
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
            }));
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
        hash: 973289514,
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
            })));
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
        hash: 976433290,
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
          /*bundle*/
          function DetailActivity({
            item
          }) {
            const {
              texts: {
                activities: texts
              }
            } = (0, _context.useDashboardContext)();
            const {
              activity,
              user: student,
              participant
            } = item;
            return React.createElement("div", {
              className: "drawer-content"
            }, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("h2", null, student.name), React.createElement(Drawer.CloseButton, null))), React.createElement("section", {
              className: 'ds-drawer__content'
            }, React.createElement(_select.ActivitySelect, {
              current: activity.id
            }), React.createElement("h2", null, activity.title, " "), React.createElement("section", {
              className: "activity-information"
            }, React.createElement("span", null, React.createElement("strong", null, texts.type, ":"), " ", activity.type), activity.subtype && React.createElement("span", null, React.createElement("strong", null, texts.subtype, ":"), " ", activity.subtype)), React.createElement("section", {
              className: "activity__description mb-30"
            }, React.createElement("h3", null, texts.description), React.createElement("p", {
              className: "p2"
            }, activity.description))), React.createElement(_components.ConditionalContainer, {
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
        hash: 1905451162,
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
              },
              store
            } = (0, _context.useDashboardContext)();
            console.log(9, item);
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
        hash: 849224571,
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
            current
          }) {
            const {
              store
            } = (0, _context.useDashboardContext)();
            const keys = Object.keys(store.model.activities.items);
            const [selected, setSelected] = _react.default.useState(current);
            const items = keys.filter(id => id !== selected).map(id => _react.default.createElement(_item.ActivitySelectItem, {
              setSelected: setSelected,
              id: id,
              key: id
            }));
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
        hash: 2622616530,
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
            id,
            as = _dropdown.DropdownItem
          }) {
            const {
              store
            } = (0, _context.useDashboardContext)();
            const activity = store.model.activities.items[id];
            const iconCls = `icon-select  icon--${activity.type}`;
            const Control = as;
            const onClick = event => {
              event.preventDefault();
              setSelected(id);
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
        hash: 3812287372,
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
          function StudentAssignmentActivity({
            item
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            return React.createElement("article", {
              className: "ds-drawer__activity-item"
            }, React.createElement("header", {
              className: "activity__header flex-container flex-vertical-center gap-05"
            }, React.createElement("picture", {
              className: `activity-type__icon activity--${item.activity.type}`
            }, React.createElement(_icons.AppIcon, {
              icon: _icons.ICONS[item.activity.type]
            })), React.createElement("div", null, React.createElement("h5", null, item.activity.title), React.createElement("span", null, texts.activities.types[item.activity.type]))), React.createElement("h4", {
              className: "mt-30"
            }, "Resumen de la conversaci\u00F3n"), React.createElement("h6", null, item.name, " "), React.createElement("p", null, item.synthesis), React.createElement("h4", {
              className: "mb-30"
            }, "Progreso de los objetivos de la conversaci\u00F3n"), React.createElement(_list.List, {
              className: "unstyled-list activity__users-list",
              items: item.progress.objectives,
              control: _objective.StudentAssignmentActivityObjective
            }));
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
        hash: 27636303,
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
          function StudentAssignmentSummary({
            item
          }) {
            console.log(4, item);
            const {
              activity,
              user: student,
              participant
            } = item;
            return React.createElement("div", null, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("h2", null, student.name), React.createElement(Drawer.CloseButton, null))), React.createElement("section", {
              className: "ds-drawer__content"
            }, React.createElement(_list.List, {
              className: "assignment-activity-list",
              items: item.activities.items,
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
        hash: 3820562734,
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
          const APPNAME = _config.default?.params?.APP_NAME ?? 'RVD.AI';
          /*bundle*/
          function ActivityView() {
            const {
              store
            } = (0, _context.useDashboardContext)();
            const {
              activitySelected: activity
            } = store;
            const onClose = () => {
              store.selectActivity(null);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: `activity-header bg-activity--${activity.type}`
            }, _react.default.createElement("div", null, _react.default.createElement("h4", null, activity.title)), _react.default.createElement("div", {
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
        hash: 3133744105,
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
          var _asideDrawer = require("../drawer/aside-drawer");
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
            })), _react.default.createElement(_asideDrawer.AsideDrawer, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJQYXJ0aWNpcGFudEFjdGl2aXRpZXMiLCJwYXJlbnQiLCJhY3Rpdml0eSIsIlBhcnRpY2lwYW50QWN0aXZpdHkiLCJQYXJ0aWNpcGFudCIsIml0ZW0iLCJfcGFydGljaXBhbnQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsMiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl90cmFja2luZyIsInRyYWNraW5nIiwiYWN0aXZpdHlTZWxlY3RlZCIsImN1cnJlbnRUcmFja2luZyIsInNlc3Npb24iLCJ2aWV3IiwiYXNzaWdubWVudElkIiwiYXNzaWdubWVudCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwic3BlY2lmaWVyIiwidXNlcnMiLCJvbiIsInRyaWdnZXJFdmVudCIsInNldE1vZGVsIiwiZmV0Y2hpbmciLCJtIiwiZSIsImxvYWRVc2VyVHJhY2tpbmciLCJ1c2VySWQiLCJ1bmRlZmluZWQiLCJUcmFja2luZyIsImNoYXQiLCJjb25zb2xlIiwicmVmcmVzaCIsInRyaWdnZXIiLCJzZWxlY3RBY3Rpdml0eSIsIl9yZWFjdCIsIk5vdEZvdW5kIiwiY29kZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9tdWx0aXBsZSIsIl9zcG9rZW4iLCJDaGFydHMiLCJjbGFzc05hbWUiLCJNdWx0aXBsZUNoYXJ0IiwiU3Bva2VuQ2hhcnQiLCJfY2hhcnRzIiwiX2NvbnRleHQiLCJfc2V0dGluZ3MiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwiaW5kZXgiLCJjdXJyZW50IiwiY291bnRPYmplY3RzV2l0aG91dFVzZU11bHRpcGxlIiwiaGFzTm9uWmVyb0NvdW50IiwidmFsdWVzIiwic29tZSIsImNvdW50ZXJzIiwidG90YWwiLCJjb3JyZWN0Iiwid3JvbmciLCJkaWZmIiwiQ2hhcnQiLCJvcHRpb25zIiwic2VyaWVzIiwibGFiZWxzIiwicGFydGljaXBhdGlvbiIsInBlbmRpbmciLCJDSEFSVF9CQVNFX1NQRUNTIiwicmVzcG9uc2l2ZSIsIlJFU1BPTlNJVkVfQkFTRV9TUEVDUyIsInRoZW1lIiwicGFsZXR0ZSIsImxlZ2VuZCIsInBvc2l0aW9uIiwiaG9yaXpvbnRhbEFsaWduIiwiY2hhcnQiLCJoZWlnaHQiLCJkYXRhTGFiZWxzIiwiZm9ybWF0dGVyIiwic2VyaWVzSW5kZXgiLCJ3IiwiY29uZmlnIiwiYnJlYWtwb2ludCIsIndpZHRoIiwic3Bva2VuSWQiLCJmaW5kIiwia2V5Iiwic3Bva2VuIiwiRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2RyYXdlciIsIl9jb21wb25lbnRzIiwiX2Fzc2lnbm1lbnQiLCJBc2lkZURyYXdlciIsInNob3dEcmF3ZXIiLCJzZXRTaG93RHJhd2VyIiwiV2FsbCIsIkRyYXdlciIsIm9wZW4iLCJvbkNsb3NlIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ3YWxsIiwiRGV0YWlsQWN0aXZpdHkiLCJzdHVkZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRTdW1tYXJ5IiwiX2ljb25zIiwiX3VpIiwiX2VtcHR5IiwiQVBQIiwiQVBQX05BTUUiLCJFbXB0eSIsIlBhZ2VDb250YWluZXIiLCJJQ09OUyIsImNsYXNzd29ya3MiLCJlbXB0eSIsIl91c2VyRGF0YSIsIkhlYWRlciIsIm93bmVyIiwib25DbGljayIsIkVudGl0eUltYWdlIiwic3JjIiwiYWx0IiwiVXNlckRhdGEiLCJsYWJlbCIsIkJ1dHRvbiIsImJvcmRlcmVkIiwiYWN0aW9ucyIsIl9ob29rcyIsIl8iLCJfaGVhZGVyIiwiX2hlYWRlcjIiLCJfZ2VuZXJhbCIsIkFQUE5BTUUiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0VmlldyIsInNldFRvdGFsUGFydGljaXBhbnRzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImdldFByb3BlcnRpZXMiLCJzZXRGZXRjaGluZyIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJjbHMiLCJQcm92aWRlciIsIlN0dWRlbnRzSGVhZGVyIiwidGVybmFyeSIsImZhbHNlIiwiR2VuZXJhbFZpZXciLCJ0cnVlIiwiQWN0aXZpdHlWaWV3IiwiX2ljb25zMiIsIkFjdGl2aXR5RmlsdGVyIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsIkljb25CdXR0b24iLCJfZm9ybSIsIl9saXN0IiwiX2FjdGl2aXR5RmlsdGVyIiwibGlzdENscyIsInJlZnJlc2hpbmciLCJzZXRSZWZyZXNoaW5nIiwib25SZWZyZXNoIiwic3RvcFByb3BhZ2F0aW9uIiwic2V0VGltZW91dCIsImxpc3QiLCJzdHVkZW50cyIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJzZWFyY2giLCJMaXN0IiwiY29udHJvbCIsImRpc2FibGVkIiwidmFyaWFudCIsIl9jaGlwcyIsIk1vZHVsZUFjdGl2aXR5IiwiaGFzUGFydGljaXBhdGVkIiwib3V0cHV0Iiwic3VidHlwZSIsIm1lc3NhZ2VDb3VudGVyIiwicHJldmVudERlZmF1bHQiLCJDaGlwIiwiX2ltYWdlIiwiX3V0aWxzIiwiYWN0aXZpdHlJdGVtcyIsInBlcmNlbnRpbGUiLCJwYXJ0aWNpcGFudFVyaSIsInZpZXdTdHVkZW50IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJJbWFnZSIsIkxpbmsiLCJocmVmIiwicGVyY2VudGlsIiwibGltaXREZWNpbWFscyIsIl9jb3JlIiwiX3Rvb2x0aXAiLCJTcG9rZW5EYXRhIiwiZmFjZXMiLCJGYWNlcyIsIlRvb2x0aXAiLCJjb250ZW50IiwiaGFzU3Bva2VuIiwiUmVhY3QiLCJfYXNzZXNzbWVudCIsIl9jaGF0IiwiX3NlbGVjdCIsIkNsb3NlQnV0dG9uIiwiQWN0aXZpdHlTZWxlY3QiLCJjb252ZXJzYXRpb24iLCJVc2VyQ2hhdCIsImRlYmF0ZSIsIk1hdGVyaWFsQXNzZXNzbWVudCIsImFzc2Vzc21lbnQiLCJTcG9rZW5BbmFseXNpcyIsIk11bHRpcGxlQ2hvaWNlUmVwb3J0IiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHlDaGF0IiwibG9nIiwiY2hhdE1vZGVsIiwiRW1wdHlNYXRlcmlhbCIsImNoYXRJZCIsIkFnZW50c0NoYXRDb250YWluZXIiLCJFbXB0eUNoYXQiLCJBZ2VudHNDaGF0UGFuZWwiLCJfbWFya2Rvd24iLCJDb21wZXRlbmNpZXNGZWVkYmFjayIsIk1hcmtkb3duIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJtZXNzYWdlIiwiRW1wdHlDYXJkIiwiRGVmYXVsdE1hdGVyaWFsIiwiQ291bnRlcnMiLCJfY291bnRlcnMiLCJfcXVlc3Rpb25zIiwic2V0Q291bnRlcnMiLCJBc3Nlc3NtZW50UXVlc3Rpb25zIiwic2hvd0Fuc3dlcnMiLCJJdGVtT3B0aW9uIiwib3B0aW9uIiwiaSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwiX29wdGlvbiIsInJlc3BvbnNlcyIsInF1ZXN0aW9ucyIsImF0dHJzIiwiZWxlbWVudHMiLCJhdWRpb1VybCIsImFzc2Vzc21lbnRzIiwib3JhbFRleHQiLCJzdHVkZW50QXVkaW8iLCJjb250cm9scyIsInByZWxvYWQiLCJjb250YWluZXIiLCJTcG9rZW5JdGVtIiwiZmVlZGJhY2siLCJfZHJvcGRvd24iLCJfdG9nZ2xlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImZpbHRlciIsIkFjdGl2aXR5U2VsZWN0SXRlbSIsIkRyb3Bkb3duIiwiRHJvcGRvd25Ub2dnbGUiLCJUb2dnbGVPcHRpb24iLCJhcyIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duSXRlbSIsImljb25DbHMiLCJDb250cm9sIiwiQXBwSWNvbiIsIndhcm4iLCJfb2JqZWN0aXZlIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eSIsInR5cGVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZSIsImFuYWx5c2lzIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCIsIl9hc2lkZURyYXdlciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsL0RBVEEudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0aWVzLnRzIiwiL3RzL21vZGVsL2FjdGl2aXRpZXMvYWN0aXZpdHkudHMiLCIvdHMvbW9kZWwvaW5kZXgudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXR5LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvcGFydGljaXBhbnRzLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvY2hhcnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGFydHMvbXVsdGlwbGUudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9zZXR0aW5ncy50c3giLCIvdHMvdmlld3MvY2hhcnRzL3Nwb2tlbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kcmF3ZXIvYXNpZGUtZHJhd2VyLnRzeCIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2hlYWRlci9hY3Rpdml0eS1maWx0ZXIudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vYWN0aXZpdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3Nwb2tlbi50c3giLCIvYWN0aXRpdHktdHlwZXMudHMiLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvYXNzZXNzbWVudC50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvY2hhdC50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvY29tcGV0ZW5jaWVzLnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9lbXB0eS1jaGF0LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9lbXB0eS50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL211bHRpcGxlL2NvdW50ZXJzLnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9tdWx0aXBsZS9pbmRleC50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvbXVsdGlwbGUvb3B0aW9uLnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L21hdGVyaWFscy9tdWx0aXBsZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvbWF0ZXJpYWxzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hY3Rpdml0eS9tYXRlcmlhbHMvc3Bva2VuL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYWN0aXZpdHkvc2VsZWN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L3NlbGVjdC9pdGVtLnRzeCIsIi90cy92aWV3cy9zdHVkZW50L2FjdGl2aXR5L3NlbGVjdC90b2dnbGUudHN4IiwiL3RzL3ZpZXdzL3N0dWRlbnQvYXNzaWdubWVudC9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hc3NpZ25tZW50L2FjdGl2aXR5L29iamVjdGl2ZS50c3giLCIvdHMvdmlld3Mvc3R1ZGVudC9hc3NpZ25tZW50L2luZGV4LnRzeCIsIi90cy92aWV3cy91c2VyLWRhdGEudHN4IiwiL3RzL3ZpZXdzL3ZpZXdzL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy92aWV3cy9hY3Rpdml0eS9wYXJ0aWNpcGFudC50c3giLCIvdHMvdmlld3Mvdmlld3MvZ2VuZXJhbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFD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