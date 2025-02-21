System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/http-suite@0.0.1/api", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.0.0/tracking", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.3.1/dashboard-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/ailearn-app@0.3.1/config", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_3 = _beyondJsReact18Widgets113Page;
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
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_16 = _beyondJsReact18Widgets113Hooks;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
        hash: 1530318420,
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
        hash: 2992448683,
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
                userId: this.user.id ?? this.user.uid
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
        hash: 417567489,
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
                _dashboardLayout.LayoutBroker.refresh = this.refresh;
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
        hash: 1100387958,
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
              analysis
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
            const status = ['undefined', 'string'].includes(typeof item.status) ? item.status : item.status.text;
            return React.createElement("div", {
              className: "assigment-activity-objective__container"
            }, React.createElement("div", {
              className: "objective-title__container"
            }, React.createElement("div", null, React.createElement("h6", null, name)), React.createElement("div", {
              className: `status__container status__container--${status}`
            }, React.createElement("span", null, texts.activities.objectivesStatus[status]), React.createElement(_icons.AppIcon, {
              icon: iconNames[status],
              className: `activity-status__icon icon-${status}`
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
        hash: 239820204,
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
              analysis
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
            const status = ['undefined', 'string'].includes(typeof item.status) ? item.status : item.status.text;
            return React.createElement("div", {
              className: "assigment-activity-objective__container"
            }, React.createElement("div", {
              className: "objective-title__container"
            }, React.createElement("div", null, React.createElement("h6", null, name), React.createElement("p", null, analysis ? analysis : texts.activities.noAnalysis)), React.createElement("div", null, React.createElement("div", {
              className: `status__container status__container--${status}`
            }, React.createElement("span", null, texts.activities.objectivesStatus[status]), React.createElement(_icons.AppIcon, {
              icon: iconNames[status],
              className: `activity-status__icon icon-${status}`
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
        hash: 2677120872,
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
            }, React.createElement("div", null, React.createElement("h2", null, student.name), tracking.credits.total >= 0 ? React.createElement("div", {
              className: "user__credits"
            }, texts.interactions, ": ", tracking.credits.consumed, " ", texts.of, ' ', tracking.credits.total) : null), React.createElement("div", {
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
        hash: 2489938494,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DrawerAlertItem = DrawerAlertItem;
          var React = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _collapsible = require("pragmate-ui/collapsible");
          var _context = require("../../context");
          /*bundle*/
          function DrawerAlertItem({
            item,
            user
          }) {
            const ref = React.useRef(null);
            const {
              texts
            } = (0, _context.useDashboardContext)();
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
            }, item.iteration.assistant ? React.createElement(React.Fragment, null, React.createElement("h6", null, "RVD AI"), React.createElement(_markdown.Markdown, {
              content: item.iteration.assistant
            })) : React.createElement(React.Fragment, null, texts?.noMessages), React.createElement("h6", null, user.name), React.createElement(_markdown.Markdown, {
              content: item.iteration.student
            })))));
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
        hash: 3125430000,
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
            const status = ['undefined', 'string'].includes(typeof item.status) ? item.status : item.status.text;
            return _react.default.createElement(_tooltip.Tooltip, {
              content: `${item.name}: ${texts.activities.objectivesStatus[status]}`,
              key: `${item.name}.${status}`
            }, _react.default.createElement(_icons.AppIcon, {
              icon: iconNames[status],
              className: `activity-status__icon icon-${status}`
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
        hash: 3237840323,
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
        hash: 2332352996,
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
              src: `${photoUrl}`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsImRhdGEiLCJzdGF0dXMiLCJhY3Rpdml0aWVzIiwiaXRlbXMiLCJkdXJhdGlvbiIsIm1vZHVsZSIsImNyZWF0b3IiLCJwaG90b1VybCIsIm5hbWUiLCJpZCIsImF1ZGllbmNlIiwiYWkiLCJkZXNjcmlwdGlvbiIsImxhbmd1YWdlIiwidGl0bGUiLCJ0eXBlIiwicGljdHVyZSIsIm9iamVjdGl2ZSIsInB1YmxpYyIsInRpbWVVcGRhdGVkIiwidGltZUNyZWF0ZWQiLCJyZXNvdXJjZXMiLCJzcGVjcyIsImluc3RydWN0aW9ucyIsInJvbGUiLCJvYmplY3RpdmVzIiwibWF0ZXJpYWxzIiwic3ludGhlc2lzIiwiYXJ0aWNsZSIsImR5c2xleGlhIiwic3ViamVjdCIsIm9yZGVyIiwiY2xhc3Nyb29tIiwicGFydGljaXBhbnRzIiwidXNlciIsIm1lc3NhZ2VzIiwiY291bnQiLCJwcm9ncmVzcyIsInN1bW1hcnkiLCJpY29uIiwidUpWeFJkSWpyR01nT1luVEZzRUtnOVVGeDBaMiIsIl9hY3Rpdml0eSIsIkFzc2lnbm1lbnRBY3Rpdml0aWVzIiwibWFwIiwiTWFwIiwiZGFzaGJvYXJkIiwiY29uc3RydWN0b3IiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJzZXQiLCJwdXNoIiwiaGFzIiwiX2l0ZW0iLCJJdGVtIiwicGFydGljaXBhbnRzTWFwIiwiZW50aXR5IiwicHJvcGVydGllcyIsImFkZFBhcnRpY2lwYW50IiwicGFydGljaXBhbnQiLCJnZXRQYXJ0aWNpcGFudCIsImhhc1BhcnRpY2lwYW50IiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9tb2RlbCIsIl9hY3Rpdml0aWVzIiwiX3BhcnRpY2lwYW50cyIsIkRhc2hib2FyZCIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJlcnJvciIsInRvdGFsUGFydGljaXBhbnRzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInRvdGFsTXVsdGlwbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwidG90YWxTcG9rZW4iLCJpc1VzZXJDcmVhdG9yIiwic2Vzc2lvbldyYXBwZXIiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJQYXJ0aWNpcGFudHMiLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiYmVhcmVyIiwidG9rZW4iLCJyZXNwb25zZSIsIkVycm9yIiwidGV4dCIsImZvdW5kIiwicmVhZHkiLCJkYXNoYm9hcmRJZCIsImFkZENyZWRpdHMiLCJ0cmFja2luZyIsInBvc3QiLCJjcmVkaXRzIiwiYXJjaGl2ZSIsInJlc3RvcmUiLCJQYXJ0aWNpcGFudEFjdGl2aXR5IiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlBhcnRpY2lwYW50QWN0aXZpdGllcyIsInBhcmVudCIsInZhbHVlcyIsImFjdGl2aXR5IiwiZ2V0QWN0aXZpdHlJbnN0YW5jZSIsInVwZGF0ZSIsImJpbmQiLCJPYmplY3RzIiwic3Bva2VuIiwiUGFydGljaXBhbnRTcG9rZW5BY3Rpdml0eSIsImRldGF1bHQiLCJQYXJ0aWNpcGFudE11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJBY3Rpdml0eSIsIml0ZW0iLCJxdWVzdGlvbnMiLCJKU09OIiwicGFyc2UiLCJhc3Nlc3NtZW50IiwiZSIsImNvbnNvbGUiLCJ3YXJuIiwicGFydGljaXBhdGlvbkRhdGEiLCJxdWVzdGlvbiIsImluZGV4IiwiYW5zd2VyIiwicmVzcG9uc2VzIiwiYWNjdXJhY3kiLCJpY29ucyIsImtleSIsInRvdGFsUG9pbnRzIiwicG9pbnRzIiwiYXR0ZW1wdHMiLCJ0cmFuc2NyaXB0aW9uIiwib2JqZWN0aXZlc0tleXMiLCJfdHJhY2tpbmciLCJfY29sbGVjdGlvbiIsIl9wcm92aWRlciIsIlBhcnRpY2lwYW50IiwiYXNzaWdubWVudElkIiwicHJvdmlkZXIiLCJQYXJ0aWNpcGFudFByb3ZpZGVyIiwiVHJhY2tpbmciLCJ1c2VySWQiLCJjaGF0IiwiYXJncyIsInVpZCIsIl9wYXJ0aWNpcGFudCIsImFycmF5SXRlbXMiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwicHJvY2Vzc0xvYWQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2Rhc2hib2FyZExheW91dCIsIl9tb2RlbDIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfY29yZSIsImlzU3RvcmUiLCJhY3Rpdml0eVNlbGVjdGVkIiwiY3VycmVudFRyYWNraW5nIiwic2Vzc2lvbiIsInZpZXciLCJhc3NpZ25tZW50IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJzcGVjaWZpZXIiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZ2xvYmFsVGV4dHMiLCJ1c2VycyIsInRyYWNraW5ncyIsInRyaWdnZXJFdmVudCIsIkxheW91dEJyb2tlciIsInNldE1vZGVsIiwib3ZlcmxheSIsIm9uIiwiZmV0Y2giLCJmZXRjaGluZyIsIm0iLCJyZWZyZXNoIiwiYmFja0xpbmsiLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJjbGFzc3Jvb21zIiwibG9nIiwibG9hZFVzZXJUcmFja2luZyIsInRyaWdnZXIiLCJyZWZyZXNoRHJhd2VyIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiY2hhdE1vZGVsIiwibG9hZEFsbCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwicmVmcmVzaFRyYWNraW5nIiwic2VsZWN0QWN0aXZpdHkiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2hvb2tzIiwiRGFzaGJvYXJkQWN0aW9ucyIsInNldFNob3dEcmF3ZXIiLCJ1c2VEYXNoYm9hcmRDb250ZXh0Iiwic2V0VXBkYXRlIiwidXNlU3RhdGUiLCJzZXRGZXRjaGluZyIsIm9uQ2xpY2siLCJ1c2VCaW5kZXIiLCJhY3Rpb25UZXh0IiwiYXJjaGl2ZWQiLCJhY3Rpb24iLCJjbGFzc05hbWUiLCJCdXR0b24iLCJib3JkZXJlZCIsImRpc2FibGVkIiwiYWN0aW9ucyIsIndhbGwiLCJfdWkiLCJFbXB0eU1hdGVyaWFsIiwibWVzc2FnZSIsImVtcHR5IiwiRW1wdHlDYXJkIiwiX2ljb25zIiwiX2xpc3QiLCJfZW1wdHkiLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJvbkNsb3NlIiwidW5kZWZpbmVkIiwiSWNvbkJ1dHRvbiIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidGVybmFyeSIsIm9wdGlvbnMiLCJ0cnVlIiwiTGlzdCIsImNvbnRyb2wiLCJBY3Rpdml0eVBhcnRpY2lwYW50IiwiZmFsc2UiLCJFbXB0eSIsIl9pbWFnZSIsIl9jb2xsYXBzaWJsZSIsIl9vYmplY3RpdmVJY29uIiwiX29iamVjdGl2ZSIsIkNoYXRBY3Rpdml0eVBhcnRpY2lwYW50IiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJhbmFseXNpcyIsIm9uVG9nZ2xlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwidG9nZ2xlYWJsZSIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkltYWdlIiwic3JjIiwiTGluayIsImhyZWYiLCJub1N1bW1hcnkiLCJBY3Rpdml0eU9iamVjdGl2ZVN0YXR1c0ljb24iLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiX2NoYXQiLCJTcG9rZW5BY3Rpdml0eVBhcnRpY2lwYW50IiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVBhcnRpY2lwYW50IiwiX3Rvb2x0aXAiLCJtdWx0aXBsZUNob2ljZSIsImFjdGl2aXR5SWQiLCJwYXJ0aWNpcGFudEFjdGl2aXR5IiwiSWNvblN0YXRlIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJjb3JyZWN0IiwidG90YWwiLCJ3cm9uZyIsImNvdW50ZXJzIiwiY2xzIiwiUmVhY3QiLCJpY29uTmFtZXMiLCJwZW5kaW5nIiwiY29tcGxldGVkIiwib3V0c3RhbmRpbmciLCJvYmplY3RpdmVzU3RhdHVzIiwiQXBwSWNvbiIsIm5vQW5hbHlzaXMiLCJfY2hhdENvbXBvbmVudCIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlDaGF0VGFiIiwidXNlRHJhd2VyQ29udGV4dCIsInJlZiIsInVzZVJlZiIsInRBY3Rpdml0eSIsImNoYXRJZCIsIkVtcHR5Q2hhdCIsInNsaWNlIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsIkFnZW50c0NoYXRQYW5lbCIsIl90YWJzIiwiX2RyYXdlckFsZXJ0cyIsIl9vYmplY3RpdmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRCb2R5Iiwic2V0TWVzc2FnZXMiLCJ1c2VFZmZlY3QiLCJ0cmlnZ2VyQ2hhbmdlIiwib2ZmIiwidGFicyIsIlRhYiIsImludGVyYWN0aW9ucyIsImFsZXJ0cyIsIm9wZW5DaGF0IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlPYmplY3RpdmVzIiwidmFyaWFudCIsIkRyYXdlckFsZXJ0IiwicHJvZ3JlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHkiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJjbHNEcmF3ZXIiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiSUNPTlMiLCJ0eXBlcyIsImRlYmF0ZSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZUJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5U3Bva2VuQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZVF1ZXN0aW9uT3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJzZWxlY3RlZCIsIl9xdWVzdGlvbnMiLCJwYXJ0aWNpcGF0aW9uIiwiZGV0YWlsIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlUXVlc3Rpb25zIiwiX2Fuc3dlciIsImF1ZGlvVXJsIiwib3V0cHV0IiwiZmVlZGJhY2siLCJhdWRpbyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJjYWxsYmFjayIsInNldE9wZW4iLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsIm9uQ29uZmlybSIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiX2ljb25zMiIsIl9jaGF0VGFiIiwiX3JvdXRpbmciLCJTdHVkZW50RHJhd2VyQ2hhdCIsInN0dWRlbnQiLCJzZXRJdGVtcyIsInNldFJlYWR5Iiwib25SZWZyZXNoIiwib25CYWNrIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsIkFwcEljb25CdXR0b24iLCJjb25zdW1lZCIsIm9mIiwiRHJhd2VyIiwiU3R1ZGVudEFzc2lnbm1lbnRTdW1tYXJ5IiwiQ2xvc2VCdXR0b24iLCJHZW5lcmFsVmlldyIsIl9sYWJlbCIsIl9hY3Rpdml0eUljb24iLCJfc3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlDaGF0Iiwic3VidHlwZSIsIkFjdGl2aXR5SWNvbiIsIk1vZHVsZUFjdGl2aXR5TWVzc2FnZXMiLCJNb2R1bGVBY3Rpdml0eVN0YXR1cyIsIk1vZHVsZUFjdGl2aXR5RGV0YWlscyIsIkljb24iLCJNb2R1bGVBY3Rpdml0eSIsIk1vZHVsZUFjdGl2aXR5U3Bva2VuIiwiTW9kdWxlQWN0aXZpdHlNdWx0aXBsZUNob2ljZSIsImxhYmVsIiwiZG9uZSIsInRvdGFsTWVzc2FnZXMiLCJqb2luIiwibWVzc2FnZUNvdW50ZXIiLCJoYXNBbGVydHMiLCJJY29uSXRlbSIsInBhcnRpY2lwYW50VXJpIiwib3BlbkRyYXdlciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhbHQiLCJfaWNvbkJveCIsIkljb25Cb3giLCJhcyIsIkRyYXdlckFsZXJ0SXRlbSIsIl9tYXJrZG93biIsIml0ZXJhdGlvbiIsImFzc2lzdGFudCIsIk1hcmtkb3duIiwibm9NZXNzYWdlcyIsIl9hY3Rpb25zIiwiX2hlYWRlciIsIkFQUCIsIkFQUF9OQU1FIiwiRGFzaGJvYXJkQ29udGV4dCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkhlYWRlciIsImNsYXNzd29ya3MiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYXdlckNvbnRleHQiLCJfZHJhd2VyIiwiX2RyYXdlcjIiLCJfZHJhd2VyQ2hhdCIsIl93YWxsIiwiQXNpZGVEcmF3ZXIiLCJzaG93RHJhd2VyIiwicHVzaFN0YXRlIiwicG9zaXRpb24iLCJXYWxsIiwiQWN0aXZpdHlGaWx0ZXIiLCJoYW5kbGVDbGljayIsIl91c2VyRGF0YSIsIm93bmVyIiwib25DbGFzc3Jvb21DbGljayIsIkVudGl0eUltYWdlIiwiVXNlckRhdGEiLCJfZm9ybSIsIl9hY3Rpdml0eUZpbHRlciIsIlN0dWRlbnRzSGVhZGVyIiwibGlzdENscyIsInJlZnJlc2hpbmciLCJzZXRSZWZyZXNoaW5nIiwib25GaWx0ZXIiLCJjdXJyZW50VGFyZ2V0IiwibGlzdCIsInN0dWRlbnRzIiwiSW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwic3R1ZGVudEhlYWRlciIsIl8iLCJfYXNpZGVEcmF3ZXIiLCJfdmlldyIsIl9nZW5lcmFsIiwiX3N0dWRlbnRIZWFkZXIiLCJzZXRUb3RhbFBhcnRpY2lwYW50cyIsInN0YXRlIiwic2V0U3RhdGUiLCJnZXRQcm9wZXJ0aWVzIiwiUGFnZUxvYWRlciIsImRyYXdlclZhbHVlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvREFUQS50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXRpZXMudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9zcG9rZW4udHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudHMudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3Byb3ZpZGVyLnRzIiwiL3RzL21vZGVsL3Byb3ZpZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvYW5zd2VyLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9kcmF3ZXItY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2dlbmVyYWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvZGV0YWlscy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hY3Rpdml0eS1pY29uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2ljb24tYm94LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29iamVjdGl2ZS1pY29uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RyYXdlci9hc2lkZS1kcmF3ZXIudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9jb250ZW50LnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvd2FsbC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYWN0aXZpdHktZmlsdGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9zdHVkZW50LWhlYWRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL3VzZXItZGF0YS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsQ0FBQVIsS0FBTSxDQUFDUyxJQUFJLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUUzQztZQUVBOzs7WUFH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