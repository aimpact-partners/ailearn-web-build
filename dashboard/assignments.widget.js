System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/http-suite@0.0.1/api", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.0.0/tracking", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.3.1/dashboard-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/ailearn-app@0.3.1/config", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, dependency_32, bimport, __Bundle, __pkg, ims, Controller, ParticipantProvider, ActivityView, ChatActivityParticipant, MultipleChoiceActivityParticipant, SpokenActivityParticipant, EmptyCard, GeneralView, ActivityIcon, DrawerAlert, DrawerAlertItem, IconBox, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactReactive001EntitiesItem) {
      dependency_4 = _aimpactReactive001EntitiesItem;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_5 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk141Session) {
      dependency_6 = _aimpactChatSdk141Session;
    }, function (_aimpactHttpSuite001Api) {
      dependency_7 = _aimpactHttpSuite001Api;
    }, function (_aimpactReactive001Model) {
      dependency_8 = _aimpactReactive001Model;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_9 = _aimpactAilearnSdk100Tracking;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_10 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp031DashboardLayoutWidget) {
      dependency_11 = _aimpactAilearnApp031DashboardLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_12 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Core) {
      dependency_13 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_14 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_15 = _pragmateUi100Beta7Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_16 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_17 = _aimpactAilearnApp031ComponentsUi;
    }, function (_aimpactAilearnApp031Config) {
      dependency_18 = _aimpactAilearnApp031Config;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_19 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7List) {
      dependency_20 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_21 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Image) {
      dependency_22 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_23 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7Tooltip) {
      dependency_24 = _pragmateUi100Beta7Tooltip;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_25 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_aimpactChatSdk141ChatComponentCode) {
      dependency_26 = _aimpactChatSdk141ChatComponentCode;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_27 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_28 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_29 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Drawer) {
      dependency_30 = _pragmateUi100Beta7Drawer;
    }, function (_beyondJsKernel019Routing) {
      dependency_31 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta7Form) {
      dependency_32 = _pragmateUi100Beta7Form;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/reactive/entities/item', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/http-suite/api', dependency_7], ['@aimpact/reactive/model', dependency_8], ['@aimpact/ailearn-sdk/tracking', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_11], ['@beyond-js/kernel/texts', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['react', dependency_14], ['pragmate-ui/components', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['pragmate-ui/icons', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/empty', dependency_21], ['pragmate-ui/image', dependency_22], ['pragmate-ui/collapsible', dependency_23], ['pragmate-ui/tooltip', dependency_24], ['@aimpact/ailearn-app/components/icons', dependency_25], ['@aimpact/chat-sdk/chat-component.code', dependency_26], ['@aimpact/chat-sdk/widgets/markdown', dependency_27], ['pragmate-ui/tabs', dependency_28], ['pragmate-ui/modal', dependency_29], ['pragmate-ui/drawer', dependency_30], ['@beyond-js/kernel/routing', dependency_31], ['pragmate-ui/form', dependency_32]]);
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
        hash: 796399531,
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
              return response;
            }
            async restore() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              ///assignments/{id}/tracking/{trackingId}/coins/consume
              const response = await this.#api.post(`/assignments/${this.id}/restore`, {});
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
        hash: 652195548,
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
            const onClick = () => {
              setShowDrawer({
                show: true,
                view: 'wall'
              });
            };
            (0, _hooks.useBinder)([model], () => {
              setUpdate({});
            }, 'archived.changed');
            const archive = () => store.archive();
            const restore = () => store.restore();
            const actionText = model.archived ? 'restore' : 'archive';
            const action = model.archived ? restore : archive;
            return _react.default.createElement("div", {
              className: "dashboard-actions flex-container flex-vertical-center gap-05"
            }, model.isUserCreator ? _react.default.createElement(_components.Button, {
              bordered: true,
              icon: "shared-folder",
              className: "btn btn-primary outline pui-button has-icon ",
              onClick: action
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
        hash: 2866451056,
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
            }, _react.default.createElement("div", null), _react.default.createElement(_actions.DashboardActions, null), _react.default.createElement(_header.Header, null), _react.default.createElement(_studentHeader.StudentsHeader, null), _react.default.createElement(_components.ConditionalContainer, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsImRhdGEiLCJzdGF0dXMiLCJhY3Rpdml0aWVzIiwiaXRlbXMiLCJkdXJhdGlvbiIsIm1vZHVsZSIsImNyZWF0b3IiLCJwaG90b1VybCIsIm5hbWUiLCJpZCIsImF1ZGllbmNlIiwiYWkiLCJkZXNjcmlwdGlvbiIsImxhbmd1YWdlIiwidGl0bGUiLCJ0eXBlIiwicGljdHVyZSIsIm9iamVjdGl2ZSIsInB1YmxpYyIsInRpbWVVcGRhdGVkIiwidGltZUNyZWF0ZWQiLCJyZXNvdXJjZXMiLCJzcGVjcyIsImluc3RydWN0aW9ucyIsInJvbGUiLCJvYmplY3RpdmVzIiwibWF0ZXJpYWxzIiwic3ludGhlc2lzIiwiYXJ0aWNsZSIsImR5c2xleGlhIiwic3ViamVjdCIsIm9yZGVyIiwiY2xhc3Nyb29tIiwicGFydGljaXBhbnRzIiwidXNlciIsIm1lc3NhZ2VzIiwiY291bnQiLCJwcm9ncmVzcyIsInN1bW1hcnkiLCJpY29uIiwidUpWeFJkSWpyR01nT1luVEZzRUtnOVVGeDBaMiIsIl9hY3Rpdml0eSIsIkFzc2lnbm1lbnRBY3Rpdml0aWVzIiwibWFwIiwiTWFwIiwiZGFzaGJvYXJkIiwiY29uc3RydWN0b3IiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJzZXQiLCJwdXNoIiwiaGFzIiwiX2l0ZW0iLCJJdGVtIiwicGFydGljaXBhbnRzTWFwIiwiZW50aXR5IiwicHJvcGVydGllcyIsImFkZFBhcnRpY2lwYW50IiwicGFydGljaXBhbnQiLCJnZXRQYXJ0aWNpcGFudCIsImhhc1BhcnRpY2lwYW50IiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9tb2RlbCIsIl9hY3Rpdml0aWVzIiwiX3BhcnRpY2lwYW50cyIsIkRhc2hib2FyZCIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJlcnJvciIsInRvdGFsUGFydGljaXBhbnRzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInRvdGFsTXVsdGlwbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwidG90YWxTcG9rZW4iLCJpc1VzZXJDcmVhdG9yIiwic2Vzc2lvbldyYXBwZXIiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJQYXJ0aWNpcGFudHMiLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiYmVhcmVyIiwidG9rZW4iLCJyZXNwb25zZSIsIkVycm9yIiwidGV4dCIsImZvdW5kIiwicmVhZHkiLCJkYXNoYm9hcmRJZCIsImFkZENyZWRpdHMiLCJ0cmFja2luZyIsInBvc3QiLCJjcmVkaXRzIiwiYXJjaGl2ZSIsInJlc3RvcmUiLCJQYXJ0aWNpcGFudEFjdGl2aXR5IiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlBhcnRpY2lwYW50QWN0aXZpdGllcyIsInBhcmVudCIsInZhbHVlcyIsImFjdGl2aXR5IiwiZ2V0QWN0aXZpdHlJbnN0YW5jZSIsInVwZGF0ZSIsImJpbmQiLCJPYmplY3RzIiwic3Bva2VuIiwiUGFydGljaXBhbnRTcG9rZW5BY3Rpdml0eSIsImRldGF1bHQiLCJQYXJ0aWNpcGFudE11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJBY3Rpdml0eSIsIml0ZW0iLCJxdWVzdGlvbnMiLCJKU09OIiwicGFyc2UiLCJhc3Nlc3NtZW50IiwiZSIsImNvbnNvbGUiLCJ3YXJuIiwicGFydGljaXBhdGlvbkRhdGEiLCJxdWVzdGlvbiIsImluZGV4IiwiYW5zd2VyIiwicmVzcG9uc2VzIiwiYWNjdXJhY3kiLCJpY29ucyIsImtleSIsInRvdGFsUG9pbnRzIiwicG9pbnRzIiwiYXR0ZW1wdHMiLCJ0cmFuc2NyaXB0aW9uIiwib2JqZWN0aXZlc0tleXMiLCJfdHJhY2tpbmciLCJfY29sbGVjdGlvbiIsIl9wcm92aWRlciIsIlBhcnRpY2lwYW50IiwiYXNzaWdubWVudElkIiwicHJvdmlkZXIiLCJQYXJ0aWNpcGFudFByb3ZpZGVyIiwiVHJhY2tpbmciLCJ1c2VySWQiLCJjaGF0IiwiYXJncyIsIl9wYXJ0aWNpcGFudCIsImFycmF5SXRlbXMiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwicHJvY2Vzc0xvYWQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2Rhc2hib2FyZExheW91dCIsIl9tb2RlbDIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfY29yZSIsImlzU3RvcmUiLCJhY3Rpdml0eVNlbGVjdGVkIiwiY3VycmVudFRyYWNraW5nIiwic2Vzc2lvbiIsInZpZXciLCJhc3NpZ25tZW50IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJzcGVjaWZpZXIiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZ2xvYmFsVGV4dHMiLCJ1c2VycyIsInRyYWNraW5ncyIsInRyaWdnZXJFdmVudCIsIkxheW91dEJyb2tlciIsInNldE1vZGVsIiwib3ZlcmxheSIsIm9uIiwiZmV0Y2giLCJmZXRjaGluZyIsIm0iLCJiYWNrTGluayIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsImNsYXNzcm9vbXMiLCJsb2ciLCJsb2FkVXNlclRyYWNraW5nIiwicmVmcmVzaCIsInRyaWdnZXIiLCJyZWZyZXNoRHJhd2VyIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiY2hhdE1vZGVsIiwibG9hZEFsbCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwicmVmcmVzaFRyYWNraW5nIiwic2VsZWN0QWN0aXZpdHkiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2hvb2tzIiwiRGFzaGJvYXJkQWN0aW9ucyIsInNldFNob3dEcmF3ZXIiLCJ1c2VEYXNoYm9hcmRDb250ZXh0Iiwic2V0VXBkYXRlIiwidXNlU3RhdGUiLCJvbkNsaWNrIiwidXNlQmluZGVyIiwiYWN0aW9uVGV4dCIsImFyY2hpdmVkIiwiYWN0aW9uIiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwid2FsbCIsIl91aSIsIkVtcHR5TWF0ZXJpYWwiLCJtZXNzYWdlIiwiZW1wdHkiLCJFbXB0eUNhcmQiLCJfaWNvbnMiLCJfbGlzdCIsIl9lbXB0eSIsIkFjdGl2aXR5VmlldyIsInNldFZpZXciLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsIm9uQ2xvc2UiLCJ1bmRlZmluZWQiLCJJY29uQnV0dG9uIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsInRydWUiLCJMaXN0IiwiY29udHJvbCIsIkFjdGl2aXR5UGFydGljaXBhbnQiLCJmYWxzZSIsIkVtcHR5IiwiX2ltYWdlIiwiX2NvbGxhcHNpYmxlIiwiX29iamVjdGl2ZUljb24iLCJfb2JqZWN0aXZlIiwiQ2hhdEFjdGl2aXR5UGFydGljaXBhbnQiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsImFuYWx5c2lzIiwib25Ub2dnbGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiQ29sbGFwc2libGVDb250YWluZXIiLCJ0b2dnbGVhYmxlIiwib3BlbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSW1hZ2UiLCJzcmMiLCJMaW5rIiwiaHJlZiIsIm5vU3VtbWFyeSIsIkFjdGl2aXR5T2JqZWN0aXZlU3RhdHVzSWNvbiIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlPYmplY3RpdmUiLCJfY2hhdCIsIlNwb2tlbkFjdGl2aXR5UGFydGljaXBhbnQiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5UGFydGljaXBhbnQiLCJfdG9vbHRpcCIsIm11bHRpcGxlQ2hvaWNlIiwiYWN0aXZpdHlJZCIsInBhcnRpY2lwYW50QWN0aXZpdHkiLCJJY29uU3RhdGUiLCJUb29sdGlwIiwiY29udGVudCIsImNvcnJlY3QiLCJ0b3RhbCIsIndyb25nIiwiY291bnRlcnMiLCJjbHMiLCJSZWFjdCIsImljb25OYW1lcyIsInBlbmRpbmciLCJjb21wbGV0ZWQiLCJvdXRzdGFuZGluZyIsIm9iamVjdGl2ZXNTdGF0dXMiLCJBcHBJY29uIiwibm9BbmFseXNpcyIsIl9jaGF0Q29tcG9uZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRUYWIiLCJ1c2VEcmF3ZXJDb250ZXh0IiwicmVmIiwidXNlUmVmIiwidEFjdGl2aXR5IiwiY2hhdElkIiwiRW1wdHlDaGF0Iiwic2xpY2UiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiQWdlbnRzQ2hhdFBhbmVsIiwiX3RhYnMiLCJfZHJhd2VyQWxlcnRzIiwiX29iamVjdGl2ZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdEJvZHkiLCJzZXRNZXNzYWdlcyIsInVzZUVmZmVjdCIsInRyaWdnZXJDaGFuZ2UiLCJvZmYiLCJ0YWJzIiwiVGFiIiwiaW50ZXJhY3Rpb25zIiwiYWxlcnRzIiwib3BlbkNoYXQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZXMiLCJ2YXJpYW50IiwiRHJhd2VyQWxlcnQiLCJwcm9ncmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eSIsImhhc1BhcnRpY2lwYXRlZCIsImNsc0RyYXdlciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJJQ09OUyIsInR5cGVzIiwiZGViYXRlIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlTcG9rZW5Cb2R5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlUXVlc3Rpb25PcHRpb25zIiwiY29ycmVjdEFuc3dlciIsInNlbGVjdGVkIiwiX3F1ZXN0aW9ucyIsInBhcnRpY2lwYXRpb24iLCJkZXRhaWwiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbnMiLCJfYW5zd2VyIiwiYXVkaW9VcmwiLCJvdXRwdXQiLCJmZWVkYmFjayIsImF1ZGlvIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJhZGRFdmVudExpc3RlbmVyIiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsImNhbGxiYWNrIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiQ29uZmlybU1vZGFsIiwib25DYW5jZWwiLCJfaWNvbnMyIiwiX2NoYXRUYWIiLCJfcm91dGluZyIsIlN0dWRlbnREcmF3ZXJDaGF0Iiwic3R1ZGVudCIsInNldEl0ZW1zIiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsIm9uUmVmcmVzaCIsIm9uQmFjayIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJBcHBJY29uQnV0dG9uIiwiY29uc3VtZWQiLCJvZiIsIkRyYXdlciIsIlN0dWRlbnRBc3NpZ25tZW50U3VtbWFyeSIsIkNsb3NlQnV0dG9uIiwiR2VuZXJhbFZpZXciLCJfbGFiZWwiLCJfYWN0aXZpdHlJY29uIiwiX3N0YXR1cyIsIk1vZHVsZUFjdGl2aXR5Q2hhdCIsInN1YnR5cGUiLCJBY3Rpdml0eUljb24iLCJNb2R1bGVBY3Rpdml0eU1lc3NhZ2VzIiwiTW9kdWxlQWN0aXZpdHlTdGF0dXMiLCJNb2R1bGVBY3Rpdml0eURldGFpbHMiLCJJY29uIiwiTW9kdWxlQWN0aXZpdHkiLCJNb2R1bGVBY3Rpdml0eVNwb2tlbiIsIk1vZHVsZUFjdGl2aXR5TXVsdGlwbGVDaG9pY2UiLCJsYWJlbCIsImRvbmUiLCJ0b3RhbE1lc3NhZ2VzIiwiam9pbiIsIm1lc3NhZ2VDb3VudGVyIiwiaGFzQWxlcnRzIiwiSWNvbkl0ZW0iLCJwYXJ0aWNpcGFudFVyaSIsIm9wZW5EcmF3ZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWx0IiwiX2ljb25Cb3giLCJJY29uQm94IiwiYXMiLCJEcmF3ZXJBbGVydEl0ZW0iLCJpdGVyYXRpb24iLCJhc3Npc3RhbnQiLCJBUFAiLCJBUFBfTkFNRSIsIlBhZ2VDb250YWluZXIiLCJjbGFzc3dvcmtzIiwiRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRHJhd2VyQ29udGV4dCIsIl9kcmF3ZXIiLCJfZHJhd2VyMiIsIl9kcmF3ZXJDaGF0IiwiX3dhbGwiLCJBc2lkZURyYXdlciIsInNob3dEcmF3ZXIiLCJwdXNoU3RhdGUiLCJwb3NpdGlvbiIsIldhbGwiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiX3VzZXJEYXRhIiwiSGVhZGVyIiwib3duZXIiLCJvbkNsYXNzcm9vbUNsaWNrIiwiRW50aXR5SW1hZ2UiLCJVc2VyRGF0YSIsIl9mb3JtIiwiX2FjdGl2aXR5RmlsdGVyIiwiU3R1ZGVudHNIZWFkZXIiLCJsaXN0Q2xzIiwicmVmcmVzaGluZyIsInNldFJlZnJlc2hpbmciLCJvbkZpbHRlciIsImN1cnJlbnRUYXJnZXQiLCJsaXN0Iiwic3R1ZGVudHMiLCJJbnB1dCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzZWFyY2giLCJzdHVkZW50SGVhZGVyIiwiZGlzYWJsZWQiLCJfIiwiX2FzaWRlRHJhd2VyIiwiX2hlYWRlciIsIl9hY3Rpb25zIiwiX3ZpZXciLCJfZ2VuZXJhbCIsIl9zdHVkZW50SGVhZGVyIiwic2V0VG90YWxQYXJ0aWNpcGFudHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiZ2V0UHJvcGVydGllcyIsIlBhZ2VMb2FkZXIiLCJkcmF3ZXJWYWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvREFUQS50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXRpZXMudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9zcG9rZW4udHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudHMudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3Byb3ZpZGVyLnRzIiwiL3RzL21vZGVsL3Byb3ZpZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvYW5zd2VyLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9kcmF3ZXItY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2dlbmVyYWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvZGV0YWlscy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hY3Rpdml0eS1pY29uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2ljb24tYm94LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29iamVjdGl2ZS1pY29uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RyYXdlci9hc2lkZS1kcmF3ZXIudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9jb250ZW50LnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvd2FsbC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYWN0aXZpdHktZmlsdGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9zdHVkZW50LWhlYWRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL3VzZXItZGF0YS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsQ0FBQVIsS0FBTSxDQUFDUyxJQUFJLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUUzQztZQUVBOzs7WUFHQUUsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBVixLQUFNLENB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