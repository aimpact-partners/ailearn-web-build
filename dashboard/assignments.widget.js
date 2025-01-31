System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/http-suite@0.0.1/api", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.0.0/tracking", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.3.1/dashboard-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/ailearn-app@0.3.1/config", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, bimport, __Bundle, __pkg, ims, Controller, ParticipantProvider, ActivityView, ChatActivityParticipant, MultipleChoiceActivityParticipant, SpokenActivityParticipant, EmptyCard, GeneralView, ActivityIcon, DrawerAlert, DrawerAlertItem, IconBox, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    ParticipantProvider: void 0,
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
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_2 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactReactive001EntitiesItem) {
      dependency_3 = _aimpactReactive001EntitiesItem;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_4 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk141Session) {
      dependency_5 = _aimpactChatSdk141Session;
    }, function (_aimpactHttpSuite001Api) {
      dependency_6 = _aimpactHttpSuite001Api;
    }, function (_aimpactReactive001Model) {
      dependency_7 = _aimpactReactive001Model;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_8 = _aimpactAilearnSdk100Tracking;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_9 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp031DashboardLayoutWidget) {
      dependency_10 = _aimpactAilearnApp031DashboardLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_11 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Core) {
      dependency_12 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_13 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_14 = _pragmateUi100Beta7Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_15 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_16 = _aimpactAilearnApp031ComponentsUi;
    }, function (_aimpactAilearnApp031Config) {
      dependency_17 = _aimpactAilearnApp031Config;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_18 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7List) {
      dependency_19 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_20 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Image) {
      dependency_21 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_22 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7Tooltip) {
      dependency_23 = _pragmateUi100Beta7Tooltip;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_24 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_aimpactChatSdk141ChatComponentCode) {
      dependency_25 = _aimpactChatSdk141ChatComponentCode;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_26 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_27 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_28 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Drawer) {
      dependency_29 = _pragmateUi100Beta7Drawer;
    }, function (_beyondJsKernel019Routing) {
      dependency_30 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta7Form) {
      dependency_31 = _pragmateUi100Beta7Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/dashboard/assignments",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/reactive/entities/item', dependency_3], ['@aimpact/ailearn-sdk/config', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/http-suite/api', dependency_6], ['@aimpact/reactive/model', dependency_7], ['@aimpact/ailearn-sdk/tracking', dependency_8], ['@aimpact/ailearn-sdk/core', dependency_9], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@beyond-js/kernel/core', dependency_12], ['react', dependency_13], ['pragmate-ui/components', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/ailearn-app/config', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/empty', dependency_20], ['pragmate-ui/image', dependency_21], ['pragmate-ui/collapsible', dependency_22], ['pragmate-ui/tooltip', dependency_23], ['@aimpact/ailearn-app/components/icons', dependency_24], ['@aimpact/chat-sdk/chat-component.code', dependency_25], ['@aimpact/chat-sdk/widgets/markdown', dependency_26], ['pragmate-ui/tabs', dependency_27], ['pragmate-ui/modal', dependency_28], ['pragmate-ui/drawer', dependency_29], ['@beyond-js/kernel/routing', dependency_30], ['pragmate-ui/form', dependency_31]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-dashboard-assignments",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/dashboard/assignments.widget",
        "is": "page",
        "route": "/dashboard/${id}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/dashboard/assignments.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 239082409,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
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
        hash: 791669060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentActivity = void 0;
          var _item = require("@aimpact/reactive/entities/item");
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
        hash: 3225056565,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dashboard = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/http-suite/api");
          var _model = require("@aimpact/reactive/model");
          var _activities = require("./activities/activities");
          var _participants = require("./participants/participants");
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
            get isUserCreator() {
              return _session.sessionWrapper.user.id === this.#module.creator?.id;
            }
            constructor() {
              super({
                properties: ['archived']
              });
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#participants = new _participants.Participants(this);
              //@ts-ignore
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
              this.set(response.data);
              this.#activities = new _activities.AssignmentActivities(this, activities);
              this.#participants.load(participants, this.#activities);
              globalThis.model = this;
              this.#module = module;
              this.#classroom = classroom;
              this.id = dashboardId;
              this.found = true;
              this.ready = true;
            }
            async addCredits(tracking) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              ///assignments/{id}/tracking/{trackingId}/coins/consume
              const response = await this.#api.post(`/assignments/${this.id}/tracking/${tracking.id}/coins/consume`, {});
              tracking.set({
                credits: response.data.credits
              });
              return response;
            }
            async archive() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/assignments/${this.id}/archive`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              this.set(response.data);
              return response;
            }
            async restore() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              ///assignments/{id}/tracking/{trackingId}/coins/consume
              const response = await this.#api.post(`/assignments/${this.id}/restore`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              console.log(21, response.data);
              this.set(response.data);
              return response;
            }
          }
          exports.Dashboard = Dashboard;
        }
      });

      /********************************************************
      INTERNAL MODULE: ./model/participants/activities/activity
      ********************************************************/

      ims.set('./model/participants/activities/activity', {
        hash: 243905006,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantActivity = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          class ParticipantActivity extends _item.Item {
            constructor({
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['alerts', 'messages', 'interactions', 'progress', 'activity', 'synthesis', 'data', 'counters', 'responses', ...properties]
              });
            }
          }
          exports.ParticipantActivity = ParticipantActivity;
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./model/participants/activities/collection
      **********************************************************/

      ims.set('./model/participants/activities/collection', {
        hash: 3023685049,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantActivities = void 0;
          var _activity = require("./activity");
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
              return [...this.#map.values()];
            }
            constructor(parent, items) {
              this.#items = items;
              const keys = Object.keys(items);
              keys.map(id => {
                const activity = parent.dashboard.activities.get(id);
                const instance = this.getActivityInstance(activity, items[id]?.data);
                activity.addParticipant(parent);
                this.#parent = parent;
                this.#map.set(id, instance);
                return instance;
              });
              this.update = this.update.bind(this);
            }
            has(id) {
              return this.#map.has(id);
            }
            get(id) {
              return this.#map.get(id);
            }
            getActivityInstance(activity, data = {}) {
              const Objects = {
                spoken: _spoken.ParticipantSpokenActivity,
                detault: _activity.ParticipantActivity,
                'multiple-choice': _multipleChoice.ParticipantMultipleChoiceActivity
              };
              if (this.has(activity.id)) {
                return this.get(activity.id);
              }
              const Activity = Objects[activity.type] || Objects.detault;
              const instance = new Activity({
                activity,
                ...data
              });
              return instance;
            }
            update(items) {
              const keys = Object.keys(items);
              keys.forEach(id => {
                const item = items[id];
                if (!item.data) {
                  return;
                }
                const activity = this.parent.dashboard.activities.get(id);
                const instance = this.getActivityInstance(activity, item.data);
                instance.set(item.data);
                this.#map.set(item.id, instance);
              });
            }
          }
          exports.ParticipantActivities = ParticipantActivities;
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./model/participants/activities/multiple-choice
      ***************************************************************/

      ims.set('./model/participants/activities/multiple-choice', {
        hash: 3949132676,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantMultipleChoiceActivity = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          class ParticipantMultipleChoiceActivity extends _item.Item {
            #objectives = [];
            get objectives() {
              return this.#objectives;
            }
            get questions() {
              try {
                return JSON.parse(this?.activity.resources.materials.assessment).questions;
              } catch (e) {
                console.warn(e);
              }
            }
            get participationData() {
              return this.questions?.map((question, index) => {
                return {
                  ...question,
                  answer: this.responses?.[index].answer,
                  accuracy: this.responses?.[index].accuracy
                };
              });
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
        hash: 1727874112,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantSpokenActivity = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          class ParticipantSpokenActivity extends _item.Item {
            get icons() {
              if (this.assessment) {
                return Object.keys(this.assessment).map(key => this.assessment[key]);
              }
              return [];
            }
            get totalPoints() {
              return this.assessment?.reduce((acc, objective) => acc + this.assessment[objective].points, 0);
            }
            get assessment() {
              return this.attempts?.[0]?.assessment;
            }
            get transcription() {
              return this.attempts?.[0]?.transcription;
            }
            get objectives() {
              if (!this.assessment) return [];
              const objectivesKeys = Object.keys(this.assessment);
              return objectivesKeys.map(key => {
                return {
                  objective: key,
                  ...this.assessment[key]
                };
              });
            }
            constructor({
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['activity', 'attempts']
              });
            }
          }
          exports.ParticipantSpokenActivity = ParticipantSpokenActivity;
        }
      });

      /************************************************
      INTERNAL MODULE: ./model/participants/participant
      ************************************************/

      ims.set('./model/participants/participant', {
        hash: 3319986552,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Participant = void 0;
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          var _item = require("@aimpact/reactive/entities/item");
          var _collection = require("./activities/collection");
          var _provider = require("./provider");
          class Participant extends _item.Item {
            #activities;
            get activities() {
              return this.#activities;
            }
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            #dashboard;
            get dashboard() {
              return this.#dashboard;
            }
            get assignmentId() {
              return this.#dashboard.id;
            }
            constructor(dashboard, item) {
              super({
                entity: 'participant',
                provider: _provider.ParticipantProvider,
                ...item,
                properties: ['user', 'id'] // we need to update activities structure
              });
              this.#dashboard = dashboard;
              this.#activities = new _collection.ParticipantActivities(this, item.activities);
              this.#tracking = _tracking.Tracking.get({
                assignmentId: dashboard.id,
                userId: this.user.id,
                chat: true
              });
            }
            async load(args = {}) {
              const data = await super.load({
                userId: this.user.id
              });
              this.activities.update(data.activities?.items);
              return data;
            }
          }
          exports.Participant = Participant;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./model/participants/participants
      *************************************************/

      ims.set('./model/participants/participants', {
        hash: 439197960,
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
              const arrayItems = Object.keys(items).map(id => {
                const participant = new _participant.Participant(this.dashboard, {
                  id,
                  ...items[id]
                });
                this.#items.push(participant);
                this.#map.set(id, participant);
                return participant;
              });
              this.#items = arrayItems.sort((a, b) => a.user.name.localeCompare(b.user.name));
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

      /*********************************************
      INTERNAL MODULE: ./model/participants/provider
      *********************************************/

      ims.set('./model/participants/provider', {
        hash: 3632341174,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantProvider = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/http-suite/api");
          /*bundle*/ /**
                      * Represents the Tracking of an assignment.
                      *
                      *
                      */
          class ParticipantProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.get(`/assignments/${this.#parent.assignmentId}/tracking`, specs);
              const {
                status,
                data,
                error
              } = response;
              if (!status) {
                throw new Error('error loading class');
              }
              if (specs?.progress) await this.#parent.processLoad(data);
              return data;
            };
          }
          exports.ParticipantProvider = ParticipantProvider;
        }
      });

      /********************************
      INTERNAL MODULE: ./model/provider
      ********************************/

      ims.set('./model/provider', {
        hash: 1882101225,
        creator: function (require, exports) {
          // import config from '@aimpact/ailearn-sdk/config';
          // import { sessionWrapper } from '@aimpact/chat-sdk/session';
          // import { Api } from '@aimpact/http-suite/api';
          // import { IEntityProvider } from '@aimpact/reactive/entities/item';
          // import { IResponse } from './types';
          // export class Provider implements Partial<IEntityProvider> {
          // 	#api: Api;
          // 	#parent: any;
          // 	constructor(parent: any) {
          // 		this.#api = new Api(config.params.apis.ailearn);
          // 		this.#parent = parent;
          // 	}
          // 	async load(id) {
          // 		this.#api.bearer(sessionWrapper.user.token);
          // 		const response: IResponse = await this.#api.get(`/assignments/${id}/dashboard`);
          // 		return response;
          // 	}
          // 	async addCredits(assignmentId, trackingId) {
          // 		this.#api.bearer(sessionWrapper.user.token);
          // 		///assignments/{id}/tracking/{trackingId}/coins/consume
          // 		const response: IResponse = await this.#api.post(
          // 			`/assignments/${assignmentId}/tracking/${trackingId}/coins/consume`,
          // 			{}
          // 		);
          // 		return response;
          // 	}
          // }
          "use strict";
        }
      });

      /*****************************
      INTERNAL MODULE: ./model/types
      *****************************/

      ims.set('./model/types', {
        hash: 986252637,
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
        hash: 3360078847,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _dashboardLayout = require("@aimpact/ailearn-app/dashboard-layout.widget");
          var _model = require("./model");
          var _model2 = require("@aimpact/reactive/model");
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
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            get ready() {
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
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
              _dashboardLayout.LayoutBroker.setModel(this);
              this.#model = new _model.Dashboard();
              _dashboardLayout.LayoutBroker.overlay = true;
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.on('change', this.triggerEvent);
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts.fetch();
              globalThis.store = this;
            }
            async load(id) {
              try {
                this.fetching = true;
                this.#assignmentId = id;
                await this.#texts.fetch();
                await this.#model.load(id);
                globalThis.m = this.#model;
                _dashboardLayout.LayoutBroker.set({
                  backLink: `/classrooms/view/${this.#model.classroom.id}`,
                  breadcrumb: [[this.globalTexts.entities.classrooms, '/classrooms/list'], [this.#model.classroom.name, `/classrooms/view/${this.#model.classroom.id}`], [`Dashboard > ${this.#model.module.title}`]]
                });
              } catch (e) {
                console.log(e);
              } finally {
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
            refreshDrawer = async ({
              userId,
              activity
            } = {}) => {
              try {
                const promise = new _core.PendingPromise();
                this.fetching = true;
                this.trigger('fetching.drawer');
                await this.model.load(this.#assignmentId);
                if (userId) {
                  const tracking = await this.loadUserTracking(userId);
                  await tracking.load({
                    id: this.#assignmentId,
                    userId
                  });
                }
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
            refreshTracking = async userId => {
              const tracking = this.#trackings.get(userId);
              tracking.load({
                id: this.#assignmentId,
                userId
              });
            };
            clear() {
              _dashboardLayout.LayoutBroker.clear();
            }
            selectActivity(id) {
              this.#activitySelected = id;
              this.view = 'activity';
              this.trigger('change');
            }
            async archive() {
              this.fetching = true;
              await this.model.archive();
              this.fetching = false;
            }
            async restore() {
              this.fetching = true;
              await this.model.restore();
              this.fetching = false;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***************************
      INTERNAL MODULE: ./views/404
      ***************************/

      ims.set('./views/404', {
        hash: 1040410774,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("app-missing-control", null));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/actions
      *******************************/

      ims.set('./views/actions', {
        hash: 3579053472,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardActions = DashboardActions;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function DashboardActions() {
            const {
              model,
              store,
              texts,
              setShowDrawer
            } = (0, _context.useDashboardContext)();
            const [update, setUpdate] = _react.default.useState({});
            const [fetching, setFetching] = _react.default.useState(false);
            const onClick = () => {
              setShowDrawer({
                show: true,
                view: 'wall'
              });
            };
            (0, _hooks.useBinder)([model], () => {
              setUpdate({});
            }, 'archived.changed');
            const archive = async () => {
              setFetching(true);
              await store.archive();
              setFetching(false);
            };
            const restore = async () => {
              setFetching(true);
              await store.restore();
              setFetching(false);
            };
            const actionText = model.archived ? 'restore' : 'archive';
            const action = model.archived ? restore : archive;
            return _react.default.createElement("div", {
              className: "dashboard-actions flex-container flex-vertical-center gap-05"
            }, model.isUserCreator ? _react.default.createElement(_components.Button, {
              bordered: true,
              icon: "shared-folder",
              className: "btn btn-primary outline pui-button has-icon ",
              onClick: action,
              disabled: fetching,
              fetching: fetching
            }, actionText) : null, _react.default.createElement(_components.Button, {
              bordered: true,
              icon: "shared-folder",
              className: "btn btn-primary outline pui-button has-icon ",
              onClick: onClick
            }, texts.actions.wall));
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
        hash: 2153615600,
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
            const onClose = () => store.selectActivity(undefined);
            (0, _hooks.useBinder)([store], () => setUpdated(store.activitySelected), 'data.updated');
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: `activity-header bottom-rounded bg-activity--${activity.type}`
            }, _react.default.createElement("div", null, _react.default.createElement("h4", null, activity.title, " ")), _react.default.createElement("div", {
              className: "close-icon"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "close",
              title: "Close",
              onClick: onClose,
              className: "circle"
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
        hash: 513719031,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatActivityParticipant = ChatActivityParticipant;
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../../../context");
          var _collapsible = require("pragmate-ui/collapsible");
          var _objectiveIcon = require("../../../components/objective-icon");
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
            const {
              analysis
            } = item;
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
                view: 'student',
                data: {
                  tracking,
                  activity,
                  participant: item
                }
              });
              return false;
            };
            return _react.default.createElement("div", {
              className: "activity-participant"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, {
              toggleable: !!data?.progress?.objectives,
              onToggle: onToggle,
              open: isDragging
            }, _react.default.createElement(_collapsible.CollapsibleHeader, {
              className: "activity-participant__header header--collapsible"
            }, _react.default.createElement("div", {
              className: "activity-participant__header-content"
            }, _react.default.createElement("header", null, _react.default.createElement(_image.Image, {
              className: "user-data__img",
              src: item.user.photoUrl
            }), _react.default.createElement(_components.Link, {
              className: "hidden-md",
              href: `/dashboard/${store.assignmentId}?studentId=${item.user.id}`,
              onClick: onClick
            }, _react.default.createElement("h6", null, item.user.name))), _react.default.createElement("div", null, _react.default.createElement(_components.Link, {
              className: "hidden-xs",
              href: `/dashboard/${store.assignmentId}?studentId=${item.user.id}`,
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
              className: "unstyled-list objectives-header__states",
              items: data?.progress?.objectives,
              control: _objectiveIcon.ActivityObjectiveStatusIcon
            })), _react.default.createElement(_collapsible.CollapsibleContent, {
              className: "activity-participant__collapsible-content"
            }, _react.default.createElement(_list.List, {
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
        hash: 2278052649,
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
                view: 'student',
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
            const {
              correct,
              total,
              wrong
            } = participantActivity.counters;
            const cls = `dashboard-chip ${correct > total / 2 ? ' success-label' : ' error-label'} `;
            return _react.default.createElement("div", {
              className: "activity-participant"
            }, _react.default.createElement("div", {
              className: "activity-participant__header"
            }, _react.default.createElement(_components.Link, {
              href: `/dashboard/${store.assignmentId}?studentId=${item.user.id}`,
              onClick: onClick
            }, _react.default.createElement("div", {
              className: "user-data__section"
            }, _react.default.createElement(_image.Image, {
              className: "user-data__img",
              src: item.user.photoUrl
            }), _react.default.createElement("h6", null, item.user.name))), _react.default.createElement("div", {
              className: "activity-participant__header-content"
            }, _react.default.createElement("span", {
              className: cls
            }, participantActivity.counters.correct, " / ", participantActivity.counters.total))));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/activities/view/participant/objective
      *************************************************************/

      ims.set('./views/activities/view/participant/objective', {
        hash: 852723765,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityObjective = StudentAssignmentActivityObjective;
          var React = require("react");
          var _context = require("../../../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function StudentAssignmentActivityObjective({
            item
          }) {
            if (!item) {
              return null;
            }
            const {
              name,
              analysis,
              status
            } = item;
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const iconNames = {
              'in-progress': 'activityInProgress',
              pending: 'activityPending',
              completed: 'activityCompleted',
              outstanding: 'activityOutstanding'
            };
            return React.createElement("div", {
              className: "assigment-activity-objective__container"
            }, React.createElement("div", {
              className: "objective-title__container"
            }, React.createElement("div", null, React.createElement("h6", null, name)), React.createElement("div", {
              className: `status__container status__container--${item.status.text}`
            }, React.createElement("span", null, texts.activities.objectivesStatus[status.text]), React.createElement(_icons.AppIcon, {
              icon: iconNames[item.status.text],
              className: `activity-status__icon icon-${item.status.text}`
            }))), React.createElement("p", null, analysis ? analysis : texts.activities.noAnalysis));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./views/activities/view/participant/spoken
      **********************************************************/

      ims.set('./views/activities/view/participant/spoken', {
        hash: 2563312999,
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
          var _icons = require("@aimpact/ailearn-app/components/icons");
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
                view: 'student',
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
                content: objective.objective
              }, _react.default.createElement(_icons.AppIcon, {
                icon: `points${objective.points}`
              }));
            };
            return _react.default.createElement("div", {
              className: "activity-participant"
            }, _react.default.createElement("div", {
              className: "activity-participant__header flex-container flex-vertical-center"
            }, _react.default.createElement(_components.Link, {
              href: `/dashboard/${store.assignmentId}?studentId=${item.user.id}`,
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

      /****************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/chat/chat-tab
      ****************************************************************/

      ims.set('./views/assignment/drawer/activity/chat/chat-tab', {
        hash: 2732010957,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityChatTab = StudentAssignmentActivityChatTab;
          var React = require("react");
          var _context = require("../../../../context");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _empty = require("./empty");
          //@ts-ignore

          function StudentAssignmentActivityChatTab({
            item,
            tracking
          }) {
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const ref = React.useRef();
            const tActivity = tracking.activities.map.get(item.activity.id);
            const chatId = tActivity?.chatModel?.id;
            if (!tActivity.chatModel.messages.items.length) {
              return React.createElement("div", {
                className: "chat-tab",
                ref: ref
              }, React.createElement(_empty.EmptyChat, null));
            }
            return React.createElement("div", {
              className: "chat-tab",
              ref: ref
            }, tActivity.chatModel.messages.items.slice(-2).map(item => {
              React.createElement("div", null, item.text);
            }));
            return React.createElement("div", {
              className: "chat-tab",
              ref: ref
            }, React.createElement(_chatComponent.AgentsChatContainer, {
              chat: tActivity?.chatModel?.id,
              id: chatId,
              empty: _empty.EmptyChat,
              icon: "/assets/rvd/profile-blue.png"
            }, React.createElement(_chatComponent.AgentsChatPanel, null)));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/chat/empty
      *************************************************************/

      ims.set('./views/assignment/drawer/activity/chat/empty', {
        hash: 2871249374,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyChat = EmptyChat;
          var _empty = require("pragmate-ui/empty");
          var _react = require("react");
          var _context = require("../../../../context");
          function EmptyChat() {
            const {
              texts: {
                chat: {
                  empty: texts
                }
              },
              store
            } = (0, _context.useDrawerContext)();
            if (!store?.model) return null;
            const {
              title,
              description
            } = texts;
            return _react.default.createElement("div", {
              className: "empty-chat"
            }, _react.default.createElement(_empty.Empty, {
              icon: "info"
            }, _react.default.createElement("h3", null, title), _react.default.createElement("span", null, description)));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/chat/index
      *************************************************************/

      ims.set('./views/assignment/drawer/activity/chat/index', {
        hash: 514716474,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityChatBody = StudentAssignmentActivityChatBody;
          var _tabs = require("pragmate-ui/tabs");
          var React = require("react");
          var _drawerAlerts = require("../../../../components/drawer-alerts");
          var _context = require("../../../../context");
          var _components = require("pragmate-ui/components");
          var _objectives = require("./objectives");
          //@ts-ignore

          /**
           *
           * @param paramm item: ParticipantActivity
           * @returns
           */
          function StudentAssignmentActivityChatBody({
            item,
            user,
            tracking,
            activityId,
            participant
          }) {
            const {
              texts,
              setShowDrawer
            } = (0, _context.useDrawerContext)();
            const tActivity = tracking.activities.map.get(activityId);
            const chatId = tActivity?.chatModel?.id;
            const [messages, setMessages] = React.useState(tActivity?.chatModel?.messages.items ?? []);
            React.useEffect(() => {
              if (!chatId) return;
              const triggerChange = () => {
                setMessages([...tActivity.chatModel.messages.items]);
              };
              tActivity.chatModel.on('change', triggerChange);
              return () => {
                tActivity.chatModel.off('change', triggerChange);
              };
            }, [chatId]);
            const tabs = [];
            if (item.progress?.objectives) tabs.push(React.createElement(_tabs.Tab, {
              key: "objectives"
            }, texts.activities.objectives));
            const interactions = item.interactions ? item.interactions : item.messages?.count;
            tabs.push(React.createElement(_tabs.Tab, {
              key: "summary"
            }, React.createElement("div", {
              className: "tab__label"
            }, texts.activities.chat, item.messages?.count ? React.createElement("i", {
              className: "drawer__badge"
            }, interactions) : null)));
            if (item?.alerts?.length) tabs.push(React.createElement(_tabs.Tab, {
              key: "alerts",
              className: "alerts-tab"
            }, React.createElement("div", {
              className: "tab__label"
            }, texts.alerts, React.createElement("span", {
              className: "drawer__badge drawer__badge--danger"
            }, item.alerts.length))));
            const openChat = event => {
              setShowDrawer({
                show: true,
                view: 'student-chat',
                data: {
                  tracking,
                  participant,
                  participantActivity: item,
                  chat: tActivity.chatModel
                }
              });
            };
            return React.createElement(_tabs.TabsContainer, {
              active: 0
            }, React.createElement(_tabs.Tabs, {
              className: "drawer__tabs"
            }, tabs), React.createElement(_tabs.Panes, null, item.progress?.objectives && React.createElement(_objectives.StudentAssignmentActivityObjectives, {
              item: item,
              tracking: tracking
            }), React.createElement("div", null, React.createElement("section", {
              className: "mt-15 activity-data-section"
            }, React.createElement("h6", null, texts.activities.summary), React.createElement("p", null, item.synthesis), React.createElement(_components.ConditionalContainer, {
              condition: !!interactions,
              ternary: true,
              options: {
                true: React.createElement("footer", {
                  className: "mt-15 flex-container flex-end"
                }, React.createElement(_components.Button, {
                  onClick: openChat,
                  className: "chat__btn",
                  variant: "primary",
                  bordered: true
                }, texts.activities.chat)),
                false: null
              }
            }))), React.createElement(_drawerAlerts.DrawerAlert, {
              alerts: item?.alerts,
              user: user
            })));
          }
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/chat/objective
      *****************************************************************/

      ims.set('./views/assignment/drawer/activity/chat/objective', {
        hash: 1844398951,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityObjective = StudentAssignmentActivityObjective;
          var React = require("react");
          var _context = require("../../../../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
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
            } = (0, _context.useDrawerContext)();
            const iconNames = {
              'in-progress': 'activityInProgress',
              pending: 'activityPending',
              completed: 'activityCompleted',
              outstanding: 'activityOutstanding'
            };
            return React.createElement("div", {
              className: "assigment-activity-objective__container"
            }, React.createElement("div", {
              className: "objective-title__container"
            }, React.createElement("div", null, React.createElement("h6", null, name), React.createElement("p", null, analysis ? analysis : texts.activities.noAnalysis)), React.createElement("div", null, React.createElement("div", {
              className: `status__container status__container--${item.status.text}`
            }, React.createElement("span", null, texts.activities.objectivesStatus[status.text]), React.createElement(_icons.AppIcon, {
              icon: iconNames[item.status.text],
              className: `activity-status__icon icon-${item.status.text}`
            })))));
          }
        }
      });

      /******************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/chat/objectives
      ******************************************************************/

      ims.set('./views/assignment/drawer/activity/chat/objectives', {
        hash: 1586503523,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityObjectives = StudentAssignmentActivityObjectives;
          var _list = require("pragmate-ui/list");
          var React = require("react");
          var _context = require("../../../../context");
          var _objective = require("./objective");
          //@ts-ignore
          function StudentAssignmentActivityObjectives({
            item,
            tracking
          }) {
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const tActivity = tracking.activities.map.get(item.activity.id);
            const chatId = tActivity?.chatModel.id;
            return React.createElement("div", null, React.createElement("div", {
              className: "objectives__summary"
            }, React.createElement("p", null, item.progress?.summary)), item.progress?.objectives && React.createElement("div", null, React.createElement("h4", {
              className: "mt-15"
            }, texts.activities.progres), React.createElement(_list.List, {
              className: "unstyled-list",
              items: item.progress?.objectives,
              control: _objective.StudentAssignmentActivityObjective
            })));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/index
      ********************************************************/

      ims.set('./views/assignment/drawer/activity/index', {
        hash: 5524567,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivity = StudentAssignmentActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _collapsible = require("pragmate-ui/collapsible");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("../../../context");
          var _chat = require("./chat");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          /**
           *
           * @param param0 activityId is passed when the user clicks on an activity
           * @returns
           */
          function StudentAssignmentActivity({
            item: activity,
            user,
            index,
            tracking,
            activityId,
            participant
          }) {
            const {
              texts,
              store,
              setShowDrawer
            } = (0, _context.useDrawerContext)();
            const hasParticipated = participant.activities.has(activity.id);
            const item = participant.activities.get(activity.id);
            const open = !activityId && index === 0 || activityId === activity.id;
            const [isDragging, setIsDragging] = React.useState(open);
            const ref = React.useRef(null);
            const onToggle = () => {
              setIsDragging(!isDragging);
            };
            const clsDrawer = `ds-drawer__activity-item ${isDragging ? 'is-open' : ''} ${open ? 'is-open' : ''}}`;
            if (!activityId) activityId = activity.id;
            React.useEffect(() => {
              if (!open) return;
              ref.current?.classList.toggle('activity-item--opened');
              setTimeout(() => {
                ref.current?.classList.toggle('activity-item--opened');
              }, 1000);
            }, [open]);
            if (!hasParticipated) {
              return React.createElement("article", {
                className: "ds-drawer__activity-item is-disabled",
                ref: ref
              }, React.createElement(_collapsible.CollapsibleContainer, null, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("header", {
                className: "activity__header"
              }, React.createElement("section", {
                className: "activity-header__container"
              }, React.createElement("picture", {
                className: `activity-type__icon activity--${activity?.type}`
              }, React.createElement(_icons.AppIcon, {
                icon: _icons.ICONS[activity.type]
              })), React.createElement("div", null, React.createElement("h5", null, activity.title), React.createElement("div", null, React.createElement("span", null, texts.activities.types[activity.type]), React.createElement("div", {
                className: "activity-status"
              }, texts.activities.status.pending))))))));
            }
            return React.createElement("article", {
              className: clsDrawer,
              ref: ref
            }, React.createElement(_collapsible.CollapsibleContainer, {
              data: item,
              onToggle: onToggle,
              open: isDragging
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("header", {
              className: "activity__header"
            }, React.createElement("section", {
              className: "activity-header__container"
            }, React.createElement("picture", {
              className: `activity-type__icon activity--${activity?.type}`
            }, React.createElement(_icons.AppIcon, {
              icon: _icons.ICONS[activity.type]
            })), React.createElement("div", null, React.createElement("h5", null, activity.title), React.createElement("span", null, texts.activities.types[activity.type]))))), React.createElement(_collapsible.CollapsibleContent, {
              className: "ds-drawer__activity-item__collapsible-content"
            }, React.createElement(_components.ConditionalContainer, {
              condition: activity.type,
              options: {
                'content-theory': React.createElement(_chat.StudentAssignmentActivityChatBody, {
                  tracking: tracking,
                  item: item,
                  user: user,
                  participant: participant,
                  activityId: activityId
                }),
                'character-talk': React.createElement(_chat.StudentAssignmentActivityChatBody, {
                  tracking: tracking,
                  item: item,
                  user: user,
                  participant: participant,
                  activityId: activityId
                }),
                debate: React.createElement(_chat.StudentAssignmentActivityChatBody, {
                  tracking: tracking,
                  item: item,
                  user: user,
                  participant: participant,
                  activityId: activityId
                }),
                'multiple-choice': React.createElement(_multipleChoice.StudentAssignmentActivityMultipleChoiceBody, {
                  item: item,
                  user: user,
                  activityId: activityId
                }),
                spoken: React.createElement(_spoken.StudentAssignmentActivitySpokenBody, {
                  item: item,
                  user: user,
                  tracking: tracking,
                  activityId: activityId
                })
              }
            }))));
          }
        }
      });

      /*************************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/multiple-choice/answer
      *************************************************************************/

      ims.set('./views/assignment/drawer/activity/multiple-choice/answer', {
        hash: 1375693988,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityMultipleChoiceQuestionOptions = StudentAssignmentActivityMultipleChoiceQuestionOptions;
          var React = require("react");
          var _context = require("../../../../context");
          function StudentAssignmentActivityMultipleChoiceQuestionOptions({
            item,
            answer,
            correctAnswer,
            index
          }) {
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const selected = index === answer;
            let cls = `option-item `;
            if (index === correctAnswer) cls += `option--correct`;
            if (selected) {
              cls += `${selected && index === correctAnswer ? ` option--corrected` : `option--wrong `}`;
            }
            if (index === answer) cls += ` option--selected`;
            // if (index === correctAnswer) cls += ` option--correct`;
            return React.createElement("div", {
              className: cls
            }, item);
          }
        }
      });

      /************************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/multiple-choice/index
      ************************************************************************/

      ims.set('./views/assignment/drawer/activity/multiple-choice/index', {
        hash: 672735612,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityMultipleChoiceBody = StudentAssignmentActivityMultipleChoiceBody;
          var React = require("react");
          var _context = require("../../../../context");
          var _list = require("pragmate-ui/list");
          var _questions = require("./questions");
          function StudentAssignmentActivityMultipleChoiceBody({
            item,
            user,
            activityId
          }) {
            const {
              texts
            } = (0, _context.useDrawerContext)();
            return React.createElement("div", {
              className: "activity-data-section mt-15"
            }, React.createElement("p", null, item.activity.description), React.createElement("h6", null, texts.activities.multipleChoice.participation.title), React.createElement("div", {
              className: "multiple-choice__container"
            }, React.createElement("h6", null, texts.activities.multipleChoice.participation.detail, ": ", item.counters.correct, "/", item.counters.total), React.createElement(_list.List, {
              className: "multiple-choice__list questions-list",
              items: item.participationData,
              control: _questions.StudentAssignmentActivityMultipleChoiceQuestions
            })));
          }
        }
      });

      /****************************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/multiple-choice/questions
      ****************************************************************************/

      ims.set('./views/assignment/drawer/activity/multiple-choice/questions', {
        hash: 1633830241,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityMultipleChoiceQuestions = StudentAssignmentActivityMultipleChoiceQuestions;
          var React = require("react");
          var _context = require("../../../../context");
          var _list = require("pragmate-ui/list");
          var _answer = require("./answer");
          function StudentAssignmentActivityMultipleChoiceQuestions({
            item,
            user,
            activityId
          }) {
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const specs = {
              answer: item.answer,
              correctAnswer: item.correctAnswer
            };
            return React.createElement("li", {
              className: "multiple-choice__item"
            }, React.createElement("h6", null, item.question), React.createElement(_list.List, {
              className: "multiple-choice__list options-list",
              items: item.options,
              specs: specs,
              control: _answer.StudentAssignmentActivityMultipleChoiceQuestionOptions
            }));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/spoken
      *********************************************************/

      ims.set('./views/assignment/drawer/activity/spoken', {
        hash: 2242268867,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivitySpokenBody = StudentAssignmentActivitySpokenBody;
          var React = require("react");
          var _context = require("../../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _config = require("@aimpact/ailearn-app/config");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _tabs = require("pragmate-ui/tabs");
          function StudentAssignmentActivitySpokenBody({
            item,
            user,
            tracking,
            activityId
          }) {
            const {
              texts,
              store
            } = (0, _context.useDrawerContext)();
            const audioUrl = `${_config.default.params.apis.ailearn}/assignments/${store.model.id}/activities/${item.activity.id}/tracking/${user.id}/audio`;
            const output = item.objectives.map(objective => {
              return React.createElement("div", {
                className: "tab-feedback-section",
                key: `${item.id}-${objective.objective}`
              }, React.createElement("div", null, React.createElement("h6", {
                className: "flex-container flex-vertical-center gap-05"
              }, React.createElement(_icons.AppIcon, {
                icon: `points${objective.points}`
              }), objective.name)), React.createElement("div", null, React.createElement("span", null, objective.feedback)));
            });
            const tabs = [React.createElement(_tabs.Tab, {
              key: "feedback"
            }, texts.activities.spoken.feedback)];
            if (item.transcription) tabs.push(React.createElement(_tabs.Tab, {
              key: "transcription"
            }, texts.activities.spoken.transcription));
            return React.createElement("div", null, React.createElement("div", {
              className: "activity-data-section"
            }, React.createElement("h5", null, texts.activities.spoken.audio), React.createElement(_ui.AudioPlayer, {
              url: audioUrl
            })), React.createElement(_tabs.TabsContainer, {
              active: 0,
              className: "drawer-activity__tabs-container"
            }, React.createElement(_tabs.Tabs, {
              className: "drawer__tabs"
            }, tabs), React.createElement(_tabs.Panes, null, React.createElement("div", {
              className: "activity-data-section-list"
            }, output), React.createElement("div", {
              className: "activity-data__content"
            }, React.createElement("p", null, item.transcription)))));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/assignment/drawer/chat-tab
      **************************************************/

      ims.set('./views/assignment/drawer/chat-tab', {
        hash: 2873980972,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityChatTab = StudentAssignmentActivityChatTab;
          var React = require("react");
          var _context = require("../../context");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _empty = require("./activity/chat/empty");
          //@ts-ignore

          function StudentAssignmentActivityChatTab({
            item: {
              chat,
              participantActivity
            },
            tracking
          }) {
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const ref = React.useRef(null);
            const tActivity = tracking.activities.map.get(participantActivity.id);
            const chatId = tActivity?.chatModel?.id;
            React.useEffect(() => {
              if (!ref.current) return;
              ref.current.addEventListener('scroll', event => {
                event.stopPropagation();
                event.preventDefault();
                console.log('scroll');
              });
            }, [ref.current]);
            if (!chat?.messages.items.length) {
              return React.createElement("div", {
                className: "chat-tab",
                ref: ref
              }, React.createElement(_empty.EmptyChat, null));
            }
            return React.createElement("div", {
              className: "chat-tab",
              ref: ref
            }, React.createElement(_chatComponent.AgentsChatContainer, {
              chat: chat,
              id: chat?.id,
              empty: _empty.EmptyChat,
              icon: "/assets/rvd/profile-blue.png"
            }, React.createElement(_chatComponent.AgentsChatPanel, null)));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/assignment/drawer/confirm-action
      ********************************************************/

      ims.set('./views/assignment/drawer/confirm-action', {
        hash: 2473476240,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmAction = ConfirmAction;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          function ConfirmAction({
            callback
          }) {
            const [open, setOpen] = _react.default.useState(false);
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const toggleOpen = () => setOpen(!open);
            const onClickButton = event => {
              event.stopPropagation();
              toggleOpen();
            };
            const onConfirm = async () => {
              await callback();
              toggleOpen();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              className: "btn-credits",
              variant: "primary",
              onClick: onClickButton
            }, texts.addCredits.action), open && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              onConfirm: onConfirm,
              onCancel: toggleOpen
            }, _react.default.createElement("div", {
              className: "modal-overlay",
              onClick: toggleOpen
            }), _react.default.createElement("div", {
              className: "modal-content"
            }, _react.default.createElement("h3", null, texts.addCredits.title), _react.default.createElement("p", null, texts.addCredits.description))));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/assignment/drawer/drawer-chat
      *****************************************************/

      ims.set('./views/assignment/drawer/drawer-chat', {
        hash: 53564705,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentDrawerChat = StudentDrawerChat;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("pragmate-ui/icons");
          var React = require("react");
          var _context = require("../../context");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _chatTab = require("./chat-tab");
          var _routing = require("@beyond-js/kernel/routing");
          function StudentDrawerChat({
            item,
            toggleOpen
          }) {
            const {
              participant,
              tracking,
              activity,
              participantActivity
            } = item;
            const {
              texts,
              store,
              setShowDrawer
            } = (0, _context.useDrawerContext)();
            const {
              user: student
            } = participant;
            const [items, setItems] = React.useState(participant.activities.items);
            const [fetching, setFetching] = React.useState(false);
            const [ready, setReady] = React.useState(tracking.ready);
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            const activityId = activity?.id;
            const onRefresh = async () => {
              setFetching(true);
              await item.participant.load();
              setTimeout(() => {
                setItems([...participant.activities.items]);
                setFetching(false);
              }, 1000);
            };
            (0, _hooks.useBinder)([tracking], () => {
              setReady(tracking.ready);
              setItems([...participant.activities.items]);
            });
            if (!ready) return null;
            const onBack = () => {
              _routing.routing.replaceState({}, null, `?drawer=student`);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
                  tracking,
                  participant,
                  participantActivity: item,
                  activity
                }
              });
            };
            return React.createElement("div", {
              className: cls
            }, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement(_icons2.AppIconButton, {
              onClick: onBack,
              icon: "backArrow",
              className: "circle"
            }), React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("div", null, React.createElement("h2", null, student.name), React.createElement("div", {
              className: "user__credits"
            }, texts.interactions, ": ", tracking.credits.consumed, " ", texts.of, " ", tracking.credits.total)), React.createElement("div", null, React.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle",
              onClick: onRefresh
            })))), React.createElement(_chatTab.StudentAssignmentActivityChatTab, {
              item: item,
              tracking: tracking
            }));
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
        hash: 255959465,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentSummary = StudentAssignmentSummary;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var Drawer = require("pragmate-ui/drawer");
          var _icons = require("pragmate-ui/icons");
          var _list = require("pragmate-ui/list");
          var React = require("react");
          var _context = require("../../context");
          var _activity = require("./activity");
          var _empty = require("./empty");
          function StudentAssignmentSummary({
            item
          }) {
            const {
              participant,
              tracking,
              activity
            } = item;
            const {
              texts,
              store
            } = (0, _context.useDrawerContext)();
            const {
              user: student
            } = participant;
            const [items, setItems] = React.useState(participant.activities.items);
            const [fetching, setFetching] = React.useState(false);
            const [ready, setReady] = React.useState(tracking.ready);
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            const activityId = activity?.id;
            const onRefresh = async () => {
              setFetching(true);
              await item.participant.load();
              setTimeout(() => {
                setItems([...participant.activities.items]);
                setFetching(false);
              }, 1000);
            };
            (0, _hooks.useBinder)([tracking], () => {
              setReady(tracking.ready);
              setItems([...participant.activities.items]);
            });
            if (!ready) return null;
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: cls
            }, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("div", null, React.createElement("h2", null, student.name), React.createElement("div", {
              className: "user__credits"
            }, texts.interactions, ": ", tracking.credits.consumed, " ", texts.of, " ", tracking.credits.total)), React.createElement("div", {
              className: "drawer__header-actions"
            }, React.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle refresh-icon",
              onClick: onRefresh
            }), React.createElement(Drawer.CloseButton, null)))), React.createElement("section", {
              className: "ds-drawer__content"
            }, items.length ? React.createElement(_list.List, {
              className: "assignment-activity-list",
              items: store.model.activities.items,
              specs: {
                user: student,
                tracking,
                activityId,
                participant
              },
              control: _activity.StudentAssignmentActivity
            }) : React.createElement(_empty.EmptyCard, {
              text: texts.assignment.empty.title
            }))));
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
        hash: 234936428,
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
          var _status = require("./status");
          function ModuleActivityChat({
            activity,
            participant
          }) {
            const {
              user
            } = participant;
            const {
              setShowDrawer,
              store
            } = (0, _context.useDashboardContext)();
            const data = participant.activities[activity.id]?.data;
            const output = [];
            if (activity.type === 'assessment' && activity.subtype === 'multiple-choice' && data.data) {
              output.push(_react.default.createElement("span", null, activity.data.counters.correct, " /", activity.data.counters.total));
            }
            const onClick = async event => {
              event.stopPropagation();
              event.preventDefault();
              const tracking = await store.loadUserTracking(user.id);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
                  tracking,
                  participant,
                  activity
                }
              });
            };
            return _react.default.createElement("li", {
              onClick: onClick,
              key: `${user.id}.${activity.id}`,
              className: "card-student-item"
            }, _react.default.createElement("div", null, _react.default.createElement(_activityIcon.ActivityIcon, {
              type: activity.type
            })), _react.default.createElement("div", {
              className: "activity-title__container-content"
            }, _react.default.createElement("span", {
              className: "activity-title"
            }, activity.title), _react.default.createElement("div", {
              className: "user-activity__information"
            }, _react.default.createElement(_label.ModuleActivityMessages, {
              item: activity,
              participant: participant
            }), _react.default.createElement(_status.ModuleActivityStatus, {
              item: activity,
              participant: participant
            }))));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/details
      ********************************************************/

      ims.set('./views/assignment/item/activity/details', {
        hash: 3912473552,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityDetails = ModuleActivityDetails;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _status = require("./status");
          function ModuleActivityDetails({
            item
          }) {
            const {
              activity,
              participant
            } = item;
            const participantActivity = participant.activities.get(activity.id);
            const output = [];
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
            }) : null), _react.default.createElement(_status.ModuleActivityStatus, {
              item: item,
              participant: participant
            }));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/index
      ******************************************************/

      ims.set('./views/assignment/item/activity/index', {
        hash: 3795714024,
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
            item: activity,
            participant
          }) {
            const type = ['content-theory', 'debate', 'character-talk'].includes(activity.type) ? 'chat' : activity.type;
            return _react.default.createElement(_components.ConditionalContainer, {
              condition: type,
              options: {
                chat: _react.default.createElement(_chat.ModuleActivityChat, {
                  activity: activity,
                  participant: participant
                }),
                spoken: _react.default.createElement(_spoken.ModuleActivitySpoken, {
                  activity: activity,
                  participant: participant
                }),
                'multiple-choice': _react.default.createElement(_multipleChoice.ModuleActivityMultipleChoice, {
                  activity: activity,
                  participant: participant
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
        hash: 529886888,
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
            item,
            participant
          }) {
            const activity = item;
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const hasParticipated = participant.activities.has(activity.id);
            const participantActivity = participant.activities.get(activity.id);
            let type = 'warning';
            let label = texts.activities.status.pending;
            if (hasParticipated) {
              type = 'success';
              label = texts.activities.status.done;
            }
            if (['content-theory', 'debate', 'character-talk'].includes(activity.type)) {
              if (participantActivity?.interactions) {
                label = `${participantActivity?.interactions.count} ${texts.activities.interactions}`;
              } else {
                const totalMessages = participantActivity?.messages?.count ?? 0;
                label = `${totalMessages} ${texts.activities.interactions}`;
              }
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
        hash: 810429526,
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
            activity,
            participant
          }) {
            const {
              user
            } = participant;
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
                view: 'student',
                data: {
                  tracking,
                  participant,
                  activity
                }
              });
            };
            return _react.default.createElement("li", {
              onClick: onClick,
              key: `${user.id}.${activity.id}`,
              className: "card-student-item"
            }, _react.default.createElement("div", null, _react.default.createElement(_activityIcon.ActivityIcon, {
              type: activity.type
            })), _react.default.createElement("div", {
              className: "activity-title__container-content"
            }, _react.default.createElement("span", {
              className: "activity-title"
            }, activity.title), _react.default.createElement("div", {
              className: "user-activity__information"
            }, _react.default.createElement("div", null, _react.default.createElement(_label.ModuleActivityMessages, {
              item: activity,
              participant: participant
            })), _react.default.createElement("div", null, participantActivity?.counters ? _react.default.createElement("div", {
              className: "user-activity__information user-activity__information-multiple-choice"
            }, _react.default.createElement("span", {
              className: "activity-item-counter"
            }, participantActivity.counters.correct), _react.default.createElement("span", {
              className: "activity-item-divider"
            }, "/"), _react.default.createElement("span", {
              className: "activity-item-counter"
            }, participantActivity.counters.total)) : null))));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/spoken
      *******************************************************/

      ims.set('./views/assignment/item/activity/spoken', {
        hash: 3187413673,
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
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _list = require("pragmate-ui/list");
          function ModuleActivitySpoken({
            activity,
            participant
          }) {
            const {
              user
            } = participant;
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
                view: 'student',
                data: {
                  tracking,
                  participant,
                  activity
                }
              });
            };
            const IconItem = ({
              item: icon
            }) => _react.default.createElement(_icons.AppIcon, {
              icon: `points${icon.points}`
            });
            return _react.default.createElement("li", {
              onClick: onClick,
              key: `${user.id}.${activity.id}`,
              className: "card-student-item"
            }, _react.default.createElement("div", null, _react.default.createElement(_activityIcon.ActivityIcon, {
              type: activity.type
            })), _react.default.createElement("div", {
              className: "activity-title__container-content"
            }, _react.default.createElement("span", {
              className: "activity-title"
            }, activity.title), _react.default.createElement("div", {
              className: "user-activity__information"
            }, _react.default.createElement(_label.ModuleActivityMessages, {
              item: activity,
              participant: participant
            }), _react.default.createElement("div", {
              className: "spoken-icons"
            }, _react.default.createElement(_list.List, {
              items: participantActivity?.objectives,
              control: IconItem
            })))));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/status
      *******************************************************/

      ims.set('./views/assignment/item/activity/status', {
        hash: 2552220279,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityStatus = ModuleActivityStatus;
          var _react = require("react");
          var _objectiveIcon = require("../../../components/objective-icon");
          var _context = require("../../../context");
          function ModuleActivityStatus({
            item,
            participant
          }) {
            const activity = item;
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const participantActivity = participant.activities.get(activity.id);
            if (!participantActivity?.progress?.objectives) return null;
            const icons = participantActivity?.progress?.objectives?.map((item, index) => _react.default.createElement(_objectiveIcon.ActivityObjectiveStatusIcon, {
              key: `${item?.text}-${index}-icon`,
              item: item
            }));
            return _react.default.createElement("div", {
              className: "activity-status__container"
            }, icons);
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/assignment/item/index
      *********************************************/

      ims.set('./views/assignment/item/index', {
        hash: 2473288592,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../../context");
          var _activity = require("./activity");
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
            const participantUri = `/assignments/${store.assignmentId}/dashboard/participant/${item.user.id}`;
            const openDrawer = event => {
              event.preventDefault();
              const tracking = store.loadUserTracking(user.id);
              setShowDrawer({
                show: true,
                view: 'student',
                tracking,
                data: {
                  tracking,
                  participant: item
                }
              });
              localStorage.setItem('student.details', JSON.stringify(item.user));
              return false;
            };
            return _react.default.createElement("li", {
              className: "dashboard-card card__user"
            }, _react.default.createElement("header", null, _react.default.createElement(_image.Image, {
              src: user?.photoUrl,
              alt: `${user.name}-avatar`,
              className: "avatar__image"
            }), _react.default.createElement(_components.Link, {
              href: participantUri,
              onClick: openDrawer
            }, _react.default.createElement("h5", null, user.name))), _react.default.createElement("div", {
              className: "detail__info"
            }, _react.default.createElement(_list.List, {
              className: "user-activity__data",
              specs: {
                participant: item
              },
              items: model.activities.items,
              control: _activity.ModuleActivity
            })));
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
        hash: 3059207640,
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
              className: "mt-15 ds-drawer__list",
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
        hash: 105732952,
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
            const ref = React.useRef(null);
            const [open, setOpen] = React.useState(false);
            const cls = `ds-drawer__activity-item ${open ? 'is-open' : ''}`;
            const onToggle = () => {
              setOpen(!open);
              return true;
            };
            return React.createElement("article", {
              className: cls,
              ref: ref
            }, React.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("span", null, item.text)), React.createElement(_collapsible.CollapsibleContent, null, React.createElement("div", {
              className: "alert-item"
            }, React.createElement("h6", null, "RVD AI"), React.createElement("div", null, item.iteration.assistant), React.createElement("h6", null, user.name), React.createElement("div", null, item.iteration.student)))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/empty
      ****************************************/

      ims.set('./views/components/empty', {
        hash: 7042573,
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
          var _context = require("../context");
          var _empty = require("pragmate-ui/empty");
          var _actions = require("../actions");
          var _header = require("../header");
          const APP = _config.default?.params?.APP_NAME ?? 'RVD AI';
          function Empty({
            store,
            texts
          }) {
            const value = {
              texts,
              model: store.model,
              store
            };
            return _react.default.createElement(_context.DashboardContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_actions.DashboardActions, null), _react.default.createElement(_header.Header, null), _react.default.createElement(_empty.Empty, {
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

      /*************************************************
      INTERNAL MODULE: ./views/components/objective-icon
      *************************************************/

      ims.set('./views/components/objective-icon', {
        hash: 3530902262,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityObjectiveStatusIcon = ActivityObjectiveStatusIcon;
          var _react = require("react");
          var _tooltip = require("pragmate-ui/tooltip");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../context");
          function ActivityObjectiveStatusIcon({
            item
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const iconNames = {
              'in-progress': 'activityInProgress',
              pending: 'activityPending',
              completed: 'activityCompleted',
              outstanding: 'activityOutstanding'
            };
            return _react.default.createElement(_tooltip.Tooltip, {
              content: `${item.name}: ${texts.activities.objectivesStatus[item.status.text]}`,
              key: `${item.name}.${item.status.text}`
            }, _react.default.createElement(_icons.AppIcon, {
              icon: iconNames[item.status.text],
              className: `activity-status__icon icon-${item.status.text}`
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3275824565,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDrawerContext = exports.useDashboardContext = exports.DrawerContext = exports.DashboardContext = void 0;
          var _react = require("react");
          const DashboardContext = exports.DashboardContext = _react.default.createContext({});
          const useDashboardContext = () => _react.default.useContext(DashboardContext);
          exports.useDashboardContext = useDashboardContext;
          const DrawerContext = exports.DrawerContext = _react.default.createContext({});
          const useDrawerContext = () => _react.default.useContext(DrawerContext);
          exports.useDrawerContext = useDrawerContext;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/drawer/aside-drawer
      *******************************************/

      ims.set('./views/drawer/aside-drawer', {
        hash: 4007820917,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideDrawer = AsideDrawer;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var _drawer = require("pragmate-ui/drawer");
          var _modal = require("pragmate-ui/modal");
          var _drawer2 = require("../assignment/drawer");
          var _drawerChat = require("../assignment/drawer/drawer-chat");
          var _context = require("../context");
          var _wall = require("./wall");
          function AsideDrawer() {
            const {
              texts,
              showDrawer,
              store,
              setShowDrawer
            } = (0, _context.useDrawerContext)();
            const [open, setOpen] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            _react.default.useEffect(() => {
              if (!showDrawer?.view) {
                _routing.routing.replaceState({}, null, `?`);
                return;
              }
              _routing.routing.pushState(`?drawer=${showDrawer.view}`);
            }, [showDrawer.view]);
            if (showDrawer.show === false) return;
            const toggleOpen = () => setOpen(!open);
            const addCredits = async () => {
              try {
                // setFetching(true);
                await store.model.addCredits(showDrawer.data.tracking);
                setFetching(false);
              } catch (e) {
                console.error(e);
              } finally {
                // setFetching(false);
              }
            };
            const onConfirm = async () => {
              await addCredits();
              toggleOpen();
            };
            const cls = `ds-drawer ${fetching ? ' is-fetching' : ''}`;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_drawer.Drawer, {
              className: cls,
              position: "right",
              open: showDrawer.show,
              onClose: () => setShowDrawer({
                show: false
              })
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: showDrawer.view,
              options: {
                wall: _react.default.createElement(_wall.Wall, {
                  item: showDrawer.data
                }),
                'student-activity': _react.default.createElement(_drawer2.StudentAssignmentSummary, {
                  toggleOpen: toggleOpen,
                  item: showDrawer.data
                }),
                'student-chat': _react.default.createElement(_drawerChat.StudentDrawerChat, {
                  item: showDrawer.data,
                  toggleOpen: toggleOpen
                }),
                student: _react.default.createElement(_drawer2.StudentAssignmentSummary, {
                  item: showDrawer.data,
                  toggleOpen: toggleOpen
                })
              }
            })), open && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              onConfirm: onConfirm,
              onCancel: toggleOpen
            }, _react.default.createElement("div", {
              className: "modal-overlay",
              onClick: toggleOpen
            }), _react.default.createElement("div", {
              className: "modal-content"
            }, _react.default.createElement("h3", null, texts.addCredits.title), _react.default.createElement("p", null, texts.addCredits.description))));
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
        hash: 3833546780,
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
            } = (0, _context.useDrawerContext)();
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
        hash: 4263261696,
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
          var _tooltip = require("pragmate-ui/tooltip");
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
            return _react.default.createElement(_tooltip.Tooltip, {
              content: title
            }, _react.default.createElement("section", {
              className: cls,
              onClick: handleClick
            }, _react.default.createElement(_icons.Icon, {
              icon: icon
            })));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/header/index
      ************************************/

      ims.set('./views/header/index', {
        hash: 3173162532,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _collapsible = require("pragmate-ui/collapsible");
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
            const onClassroomClick = event => {
              event.stopPropagation();
              event.preventDefault();
              _routing.routing.pushState(`/classrooms/view/${model.classroom.id}`);
            };
            return _react.default.createElement(_collapsible.CollapsibleContainer, {
              className: "page__header-container"
            }, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("header", {
              className: "dashboard-header"
            }, _react.default.createElement(_ui.EntityImage, {
              entity: "module",
              src: picture,
              alt: title
            }), _react.default.createElement("div", null, _react.default.createElement(_components.Link, {
              href: `/assignments/${model.id}`
            }, _react.default.createElement("h1", null, title)), _react.default.createElement("div", {
              className: "dashboard-header__data"
            }, _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "dashboard-header__classroom",
              onClick: onClassroomClick
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "classroom"
            }), _react.default.createElement("span", {
              className: "assignment-classroom"
            }, model.classroom.name)), creator && _react.default.createElement(_userData.UserData, {
              data: creator
            })))))), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("div", {
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
            }))));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/header/student-header
      *********************************************/

      ims.set('./views/header/student-header', {
        hash: 3483649314,
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
            }, _react.default.createElement("span", {
              className: "p3"
            }, texts.list.students), _react.default.createElement("span", null, "(", model.participants.items?.length, " ", texts.list.participants, ")")), _react.default.createElement("section", null, _react.default.createElement(_form.Input, {
              onChange: onFilter,
              type: "text",
              className: "header__search",
              placeholder: texts.list.search,
              icon: "search"
            }))), _react.default.createElement("div", {
              className: "ds-students-header__col"
            }, _react.default.createElement("h6", null, texts.studentHeader.filter), _react.default.createElement(_list.List, {
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
        hash: 1427243274,
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
              src: `1111${photoUrl}1`
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
        hash: 1432325299,
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
          var _empty = require("./components/empty");
          var _context = require("./context");
          var _asideDrawer = require("./drawer/aside-drawer");
          var _header = require("./header");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _actions = require("./actions");
          var _view = require("./activities/view");
          var _general = require("./assignment/general");
          var _studentHeader = require("./header/student-header");
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
            const ref = _react.default.useRef(null);
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
              setShowDrawer,
              view,
              setView
            };
            const drawerValue = {
              texts,
              model: store.model,
              showDrawer,
              store,
              setShowDrawer
            };
            const cls = `dashboard-container${fetching ? ' is-fetching' : ''}`;
            return _react.default.createElement("div", {
              ref: ref
            }, store.model.archived ? _react.default.createElement("div", {
              className: "notifications-bar center-items notifications--info"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "info"
            }), texts.archived) : null, _react.default.createElement(_ui.PageContainer, {
              className: cls
            }, _react.default.createElement(_context.DashboardContext.Provider, {
              value: value
            }, _react.default.createElement(_actions.DashboardActions, null), _react.default.createElement(_header.Header, null), _react.default.createElement(_studentHeader.StudentsHeader, null), _react.default.createElement(_components.ConditionalContainer, {
              condition: !!store.activitySelected,
              ternary: true,
              options: {
                false: _react.default.createElement(_general.GeneralView, null),
                true: _react.default.createElement(_view.ActivityView, null)
              }
            })), _react.default.createElement(_context.DrawerContext.Provider, {
              value: drawerValue
            }, _react.default.createElement(_asideDrawer.AsideDrawer, null))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./model/participants/provider",
        "from": "ParticipantProvider",
        "name": "ParticipantProvider"
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
        (require || prop === 'ParticipantProvider') && _export("ParticipantProvider", ParticipantProvider = require ? require('./model/participants/provider').ParticipantProvider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsImRhdGEiLCJzdGF0dXMiLCJhY3Rpdml0aWVzIiwiaXRlbXMiLCJkdXJhdGlvbiIsIm1vZHVsZSIsImNyZWF0b3IiLCJwaG90b1VybCIsIm5hbWUiLCJpZCIsImF1ZGllbmNlIiwiYWkiLCJkZXNjcmlwdGlvbiIsImxhbmd1YWdlIiwidGl0bGUiLCJ0eXBlIiwicGljdHVyZSIsIm9iamVjdGl2ZSIsInB1YmxpYyIsInRpbWVVcGRhdGVkIiwidGltZUNyZWF0ZWQiLCJyZXNvdXJjZXMiLCJzcGVjcyIsImluc3RydWN0aW9ucyIsInJvbGUiLCJvYmplY3RpdmVzIiwibWF0ZXJpYWxzIiwic3ludGhlc2lzIiwiYXJ0aWNsZSIsImR5c2xleGlhIiwic3ViamVjdCIsIm9yZGVyIiwiY2xhc3Nyb29tIiwicGFydGljaXBhbnRzIiwidXNlciIsIm1lc3NhZ2VzIiwiY291bnQiLCJwcm9ncmVzcyIsInN1bW1hcnkiLCJpY29uIiwidUpWeFJkSWpyR01nT1luVEZzRUtnOVVGeDBaMiIsIl9hY3Rpdml0eSIsIkFzc2lnbm1lbnRBY3Rpdml0aWVzIiwibWFwIiwiTWFwIiwiZGFzaGJvYXJkIiwiY29uc3RydWN0b3IiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJzZXQiLCJwdXNoIiwiaGFzIiwiX2l0ZW0iLCJJdGVtIiwicGFydGljaXBhbnRzTWFwIiwiZW50aXR5IiwicHJvcGVydGllcyIsImFkZFBhcnRpY2lwYW50IiwicGFydGljaXBhbnQiLCJnZXRQYXJ0aWNpcGFudCIsImhhc1BhcnRpY2lwYW50IiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9tb2RlbCIsIl9hY3Rpdml0aWVzIiwiX3BhcnRpY2lwYW50cyIsIkRhc2hib2FyZCIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJlcnJvciIsInRvdGFsUGFydGljaXBhbnRzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInRvdGFsTXVsdGlwbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwidG90YWxTcG9rZW4iLCJpc1VzZXJDcmVhdG9yIiwic2Vzc2lvbldyYXBwZXIiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJQYXJ0aWNpcGFudHMiLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiYmVhcmVyIiwidG9rZW4iLCJyZXNwb25zZSIsIkVycm9yIiwidGV4dCIsImZvdW5kIiwicmVhZHkiLCJkYXNoYm9hcmRJZCIsImFkZENyZWRpdHMiLCJ0cmFja2luZyIsInBvc3QiLCJjcmVkaXRzIiwiYXJjaGl2ZSIsInJlc3RvcmUiLCJjb25zb2xlIiwibG9nIiwiUGFydGljaXBhbnRBY3Rpdml0eSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJQYXJ0aWNpcGFudEFjdGl2aXRpZXMiLCJwYXJlbnQiLCJ2YWx1ZXMiLCJhY3Rpdml0eSIsImdldEFjdGl2aXR5SW5zdGFuY2UiLCJ1cGRhdGUiLCJiaW5kIiwiT2JqZWN0cyIsInNwb2tlbiIsIlBhcnRpY2lwYW50U3Bva2VuQWN0aXZpdHkiLCJkZXRhdWx0IiwiUGFydGljaXBhbnRNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwiQWN0aXZpdHkiLCJpdGVtIiwicXVlc3Rpb25zIiwiSlNPTiIsInBhcnNlIiwiYXNzZXNzbWVudCIsImUiLCJ3YXJuIiwicGFydGljaXBhdGlvbkRhdGEiLCJxdWVzdGlvbiIsImluZGV4IiwiYW5zd2VyIiwicmVzcG9uc2VzIiwiYWNjdXJhY3kiLCJpY29ucyIsImtleSIsInRvdGFsUG9pbnRzIiwicG9pbnRzIiwiYXR0ZW1wdHMiLCJ0cmFuc2NyaXB0aW9uIiwib2JqZWN0aXZlc0tleXMiLCJfdHJhY2tpbmciLCJfY29sbGVjdGlvbiIsIl9wcm92aWRlciIsIlBhcnRpY2lwYW50IiwiYXNzaWdubWVudElkIiwicHJvdmlkZXIiLCJQYXJ0aWNpcGFudFByb3ZpZGVyIiwiVHJhY2tpbmciLCJ1c2VySWQiLCJjaGF0IiwiYXJncyIsIl9wYXJ0aWNpcGFudCIsImFycmF5SXRlbXMiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwicHJvY2Vzc0xvYWQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2Rhc2hib2FyZExheW91dCIsIl9tb2RlbDIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfY29yZSIsImlzU3RvcmUiLCJhY3Rpdml0eVNlbGVjdGVkIiwiY3VycmVudFRyYWNraW5nIiwic2Vzc2lvbiIsInZpZXciLCJhc3NpZ25tZW50IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJzcGVjaWZpZXIiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZ2xvYmFsVGV4dHMiLCJ1c2VycyIsInRyYWNraW5ncyIsInRyaWdnZXJFdmVudCIsIkxheW91dEJyb2tlciIsInNldE1vZGVsIiwib3ZlcmxheSIsIm9uIiwiZmV0Y2giLCJmZXRjaGluZyIsIm0iLCJiYWNrTGluayIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsImNsYXNzcm9vbXMiLCJsb2FkVXNlclRyYWNraW5nIiwicmVmcmVzaCIsInRyaWdnZXIiLCJyZWZyZXNoRHJhd2VyIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiY2hhdE1vZGVsIiwibG9hZEFsbCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwicmVmcmVzaFRyYWNraW5nIiwic2VsZWN0QWN0aXZpdHkiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2hvb2tzIiwiRGFzaGJvYXJkQWN0aW9ucyIsInNldFNob3dEcmF3ZXIiLCJ1c2VEYXNoYm9hcmRDb250ZXh0Iiwic2V0VXBkYXRlIiwidXNlU3RhdGUiLCJzZXRGZXRjaGluZyIsIm9uQ2xpY2siLCJ1c2VCaW5kZXIiLCJhY3Rpb25UZXh0IiwiYXJjaGl2ZWQiLCJhY3Rpb24iLCJjbGFzc05hbWUiLCJCdXR0b24iLCJib3JkZXJlZCIsImRpc2FibGVkIiwiYWN0aW9ucyIsIndhbGwiLCJfdWkiLCJFbXB0eU1hdGVyaWFsIiwibWVzc2FnZSIsImVtcHR5IiwiRW1wdHlDYXJkIiwiX2ljb25zIiwiX2xpc3QiLCJfZW1wdHkiLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJvbkNsb3NlIiwidW5kZWZpbmVkIiwiSWNvbkJ1dHRvbiIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidGVybmFyeSIsIm9wdGlvbnMiLCJ0cnVlIiwiTGlzdCIsImNvbnRyb2wiLCJBY3Rpdml0eVBhcnRpY2lwYW50IiwiZmFsc2UiLCJFbXB0eSIsIl9pbWFnZSIsIl9jb2xsYXBzaWJsZSIsIl9vYmplY3RpdmVJY29uIiwiX29iamVjdGl2ZSIsIkNoYXRBY3Rpdml0eVBhcnRpY2lwYW50IiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJhbmFseXNpcyIsIm9uVG9nZ2xlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwidG9nZ2xlYWJsZSIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkltYWdlIiwic3JjIiwiTGluayIsImhyZWYiLCJub1N1bW1hcnkiLCJBY3Rpdml0eU9iamVjdGl2ZVN0YXR1c0ljb24iLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiX2NoYXQiLCJTcG9rZW5BY3Rpdml0eVBhcnRpY2lwYW50IiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVBhcnRpY2lwYW50IiwiX3Rvb2x0aXAiLCJtdWx0aXBsZUNob2ljZSIsImFjdGl2aXR5SWQiLCJwYXJ0aWNpcGFudEFjdGl2aXR5IiwiSWNvblN0YXRlIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJjb3JyZWN0IiwidG90YWwiLCJ3cm9uZyIsImNvdW50ZXJzIiwiY2xzIiwiUmVhY3QiLCJpY29uTmFtZXMiLCJwZW5kaW5nIiwiY29tcGxldGVkIiwib3V0c3RhbmRpbmciLCJvYmplY3RpdmVzU3RhdHVzIiwiQXBwSWNvbiIsIm5vQW5hbHlzaXMiLCJfY2hhdENvbXBvbmVudCIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlDaGF0VGFiIiwidXNlRHJhd2VyQ29udGV4dCIsInJlZiIsInVzZVJlZiIsInRBY3Rpdml0eSIsImNoYXRJZCIsIkVtcHR5Q2hhdCIsInNsaWNlIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsIkFnZW50c0NoYXRQYW5lbCIsIl90YWJzIiwiX2RyYXdlckFsZXJ0cyIsIl9vYmplY3RpdmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRCb2R5Iiwic2V0TWVzc2FnZXMiLCJ1c2VFZmZlY3QiLCJ0cmlnZ2VyQ2hhbmdlIiwib2ZmIiwidGFicyIsIlRhYiIsImludGVyYWN0aW9ucyIsImFsZXJ0cyIsIm9wZW5DaGF0IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlPYmplY3RpdmVzIiwidmFyaWFudCIsIkRyYXdlckFsZXJ0IiwicHJvZ3JlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHkiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJjbHNEcmF3ZXIiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiSUNPTlMiLCJ0eXBlcyIsImRlYmF0ZSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZUJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5U3Bva2VuQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZVF1ZXN0aW9uT3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJzZWxlY3RlZCIsIl9xdWVzdGlvbnMiLCJwYXJ0aWNpcGF0aW9uIiwiZGV0YWlsIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlUXVlc3Rpb25zIiwiX2Fuc3dlciIsImF1ZGlvVXJsIiwib3V0cHV0IiwiZmVlZGJhY2siLCJhdWRpbyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJjYWxsYmFjayIsInNldE9wZW4iLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsIm9uQ29uZmlybSIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiX2ljb25zMiIsIl9jaGF0VGFiIiwiX3JvdXRpbmciLCJTdHVkZW50RHJhd2VyQ2hhdCIsInN0dWRlbnQiLCJzZXRJdGVtcyIsInNldFJlYWR5Iiwib25SZWZyZXNoIiwib25CYWNrIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsIkFwcEljb25CdXR0b24iLCJjb25zdW1lZCIsIm9mIiwiRHJhd2VyIiwiU3R1ZGVudEFzc2lnbm1lbnRTdW1tYXJ5IiwiQ2xvc2VCdXR0b24iLCJHZW5lcmFsVmlldyIsIl9sYWJlbCIsIl9hY3Rpdml0eUljb24iLCJfc3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlDaGF0Iiwic3VidHlwZSIsIkFjdGl2aXR5SWNvbiIsIk1vZHVsZUFjdGl2aXR5TWVzc2FnZXMiLCJNb2R1bGVBY3Rpdml0eVN0YXR1cyIsIk1vZHVsZUFjdGl2aXR5RGV0YWlscyIsIkljb24iLCJNb2R1bGVBY3Rpdml0eSIsIk1vZHVsZUFjdGl2aXR5U3Bva2VuIiwiTW9kdWxlQWN0aXZpdHlNdWx0aXBsZUNob2ljZSIsImxhYmVsIiwiZG9uZSIsInRvdGFsTWVzc2FnZXMiLCJqb2luIiwibWVzc2FnZUNvdW50ZXIiLCJoYXNBbGVydHMiLCJJY29uSXRlbSIsInBhcnRpY2lwYW50VXJpIiwib3BlbkRyYXdlciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhbHQiLCJfaWNvbkJveCIsIkljb25Cb3giLCJhcyIsIkRyYXdlckFsZXJ0SXRlbSIsIml0ZXJhdGlvbiIsImFzc2lzdGFudCIsIl9hY3Rpb25zIiwiX2hlYWRlciIsIkFQUCIsIkFQUF9OQU1FIiwiRGFzaGJvYXJkQ29udGV4dCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkhlYWRlciIsImNsYXNzd29ya3MiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYXdlckNvbnRleHQiLCJfZHJhd2VyIiwiX2RyYXdlcjIiLCJfZHJhd2VyQ2hhdCIsIl93YWxsIiwiQXNpZGVEcmF3ZXIiLCJzaG93RHJhd2VyIiwicHVzaFN0YXRlIiwicG9zaXRpb24iLCJXYWxsIiwiQWN0aXZpdHlGaWx0ZXIiLCJoYW5kbGVDbGljayIsIl91c2VyRGF0YSIsIm93bmVyIiwib25DbGFzc3Jvb21DbGljayIsIkVudGl0eUltYWdlIiwiVXNlckRhdGEiLCJfZm9ybSIsIl9hY3Rpdml0eUZpbHRlciIsIlN0dWRlbnRzSGVhZGVyIiwibGlzdENscyIsInJlZnJlc2hpbmciLCJzZXRSZWZyZXNoaW5nIiwib25GaWx0ZXIiLCJjdXJyZW50VGFyZ2V0IiwibGlzdCIsInN0dWRlbnRzIiwiSW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwic3R1ZGVudEhlYWRlciIsIl8iLCJfYXNpZGVEcmF3ZXIiLCJfdmlldyIsIl9nZW5lcmFsIiwiX3N0dWRlbnRIZWFkZXIiLCJzZXRUb3RhbFBhcnRpY2lwYW50cyIsInN0YXRlIiwic2V0U3RhdGUiLCJnZXRQcm9wZXJ0aWVzIiwiUGFnZUxvYWRlciIsImRyYXdlclZhbHVlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvREFUQS50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXRpZXMudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9zcG9rZW4udHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudHMudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3Byb3ZpZGVyLnRzIiwiL3RzL21vZGVsL3Byb3ZpZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvYW5zd2VyLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9kcmF3ZXItY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2dlbmVyYWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvZGV0YWlscy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hY3Rpdml0eS1pY29uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2ljb24tYm94LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29iamVjdGl2ZS1pY29uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RyYXdlci9hc2lkZS1kcmF3ZXIudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9jb250ZW50LnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvd2FsbC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYWN0aXZpdHktZmlsdGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9zdHVkZW50LWhlYWRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL3VzZXItZGF0YS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLENBQUFSLEtBQU0sQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQ0gsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFFM0M7WUFFQTs7O1lBR0FFLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFD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