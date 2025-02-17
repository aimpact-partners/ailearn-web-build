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
        hash: 2650476725,
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
            }, React.createElement("h6", null, texts.activities.summary, " 11"), React.createElement("p", null, item.synthesis), React.createElement(_components.ConditionalContainer, {
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
        hash: 1034903967,
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
            }, React.createElement("span", null, texts.activities.objectivesStatus[status]), React.createElement(_icons.AppIcon, {
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
        hash: 3265621932,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DrawerAlertItem = DrawerAlertItem;
          var React = require("react");
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
            }, item.iteration.assistant ? React.createElement(React.Fragment, null, React.createElement("h6", null, "RVD AI"), React.createElement("div", null, item.iteration.assistant)) : React.createElement(React.Fragment, null, texts?.noMessages), React.createElement("h6", null, user.name), React.createElement("div", null, item.iteration.student)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsImRhdGEiLCJzdGF0dXMiLCJhY3Rpdml0aWVzIiwiaXRlbXMiLCJkdXJhdGlvbiIsIm1vZHVsZSIsImNyZWF0b3IiLCJwaG90b1VybCIsIm5hbWUiLCJpZCIsImF1ZGllbmNlIiwiYWkiLCJkZXNjcmlwdGlvbiIsImxhbmd1YWdlIiwidGl0bGUiLCJ0eXBlIiwicGljdHVyZSIsIm9iamVjdGl2ZSIsInB1YmxpYyIsInRpbWVVcGRhdGVkIiwidGltZUNyZWF0ZWQiLCJyZXNvdXJjZXMiLCJzcGVjcyIsImluc3RydWN0aW9ucyIsInJvbGUiLCJvYmplY3RpdmVzIiwibWF0ZXJpYWxzIiwic3ludGhlc2lzIiwiYXJ0aWNsZSIsImR5c2xleGlhIiwic3ViamVjdCIsIm9yZGVyIiwiY2xhc3Nyb29tIiwicGFydGljaXBhbnRzIiwidXNlciIsIm1lc3NhZ2VzIiwiY291bnQiLCJwcm9ncmVzcyIsInN1bW1hcnkiLCJpY29uIiwidUpWeFJkSWpyR01nT1luVEZzRUtnOVVGeDBaMiIsIl9hY3Rpdml0eSIsIkFzc2lnbm1lbnRBY3Rpdml0aWVzIiwibWFwIiwiTWFwIiwiZGFzaGJvYXJkIiwiY29uc3RydWN0b3IiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJzZXQiLCJwdXNoIiwiaGFzIiwiX2l0ZW0iLCJJdGVtIiwicGFydGljaXBhbnRzTWFwIiwiZW50aXR5IiwicHJvcGVydGllcyIsImFkZFBhcnRpY2lwYW50IiwicGFydGljaXBhbnQiLCJnZXRQYXJ0aWNpcGFudCIsImhhc1BhcnRpY2lwYW50IiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9tb2RlbCIsIl9hY3Rpdml0aWVzIiwiX3BhcnRpY2lwYW50cyIsIkRhc2hib2FyZCIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJlcnJvciIsInRvdGFsUGFydGljaXBhbnRzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInRvdGFsTXVsdGlwbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwidG90YWxTcG9rZW4iLCJpc1VzZXJDcmVhdG9yIiwic2Vzc2lvbldyYXBwZXIiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJQYXJ0aWNpcGFudHMiLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiYmVhcmVyIiwidG9rZW4iLCJyZXNwb25zZSIsIkVycm9yIiwidGV4dCIsImZvdW5kIiwicmVhZHkiLCJkYXNoYm9hcmRJZCIsImFkZENyZWRpdHMiLCJ0cmFja2luZyIsInBvc3QiLCJjcmVkaXRzIiwiYXJjaGl2ZSIsInJlc3RvcmUiLCJQYXJ0aWNpcGFudEFjdGl2aXR5IiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlBhcnRpY2lwYW50QWN0aXZpdGllcyIsInBhcmVudCIsInZhbHVlcyIsImFjdGl2aXR5IiwiZ2V0QWN0aXZpdHlJbnN0YW5jZSIsInVwZGF0ZSIsImJpbmQiLCJPYmplY3RzIiwic3Bva2VuIiwiUGFydGljaXBhbnRTcG9rZW5BY3Rpdml0eSIsImRldGF1bHQiLCJQYXJ0aWNpcGFudE11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJBY3Rpdml0eSIsIml0ZW0iLCJxdWVzdGlvbnMiLCJKU09OIiwicGFyc2UiLCJhc3Nlc3NtZW50IiwiZSIsImNvbnNvbGUiLCJ3YXJuIiwicGFydGljaXBhdGlvbkRhdGEiLCJxdWVzdGlvbiIsImluZGV4IiwiYW5zd2VyIiwicmVzcG9uc2VzIiwiYWNjdXJhY3kiLCJpY29ucyIsImtleSIsInRvdGFsUG9pbnRzIiwicG9pbnRzIiwiYXR0ZW1wdHMiLCJ0cmFuc2NyaXB0aW9uIiwib2JqZWN0aXZlc0tleXMiLCJfdHJhY2tpbmciLCJfY29sbGVjdGlvbiIsIl9wcm92aWRlciIsIlBhcnRpY2lwYW50IiwiYXNzaWdubWVudElkIiwicHJvdmlkZXIiLCJQYXJ0aWNpcGFudFByb3ZpZGVyIiwiVHJhY2tpbmciLCJ1c2VySWQiLCJjaGF0IiwiYXJncyIsIl9wYXJ0aWNpcGFudCIsImFycmF5SXRlbXMiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwicHJvY2Vzc0xvYWQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2Rhc2hib2FyZExheW91dCIsIl9tb2RlbDIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfY29yZSIsImlzU3RvcmUiLCJhY3Rpdml0eVNlbGVjdGVkIiwiY3VycmVudFRyYWNraW5nIiwic2Vzc2lvbiIsInZpZXciLCJhc3NpZ25tZW50IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJzcGVjaWZpZXIiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZ2xvYmFsVGV4dHMiLCJ1c2VycyIsInRyYWNraW5ncyIsInRyaWdnZXJFdmVudCIsIkxheW91dEJyb2tlciIsInNldE1vZGVsIiwib3ZlcmxheSIsIm9uIiwiZmV0Y2giLCJmZXRjaGluZyIsIm0iLCJiYWNrTGluayIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsImNsYXNzcm9vbXMiLCJsb2ciLCJsb2FkVXNlclRyYWNraW5nIiwicmVmcmVzaCIsInRyaWdnZXIiLCJyZWZyZXNoRHJhd2VyIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiY2hhdE1vZGVsIiwibG9hZEFsbCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwicmVmcmVzaFRyYWNraW5nIiwic2VsZWN0QWN0aXZpdHkiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2hvb2tzIiwiRGFzaGJvYXJkQWN0aW9ucyIsInNldFNob3dEcmF3ZXIiLCJ1c2VEYXNoYm9hcmRDb250ZXh0Iiwic2V0VXBkYXRlIiwidXNlU3RhdGUiLCJzZXRGZXRjaGluZyIsIm9uQ2xpY2siLCJ1c2VCaW5kZXIiLCJhY3Rpb25UZXh0IiwiYXJjaGl2ZWQiLCJhY3Rpb24iLCJjbGFzc05hbWUiLCJCdXR0b24iLCJib3JkZXJlZCIsImRpc2FibGVkIiwiYWN0aW9ucyIsIndhbGwiLCJfdWkiLCJFbXB0eU1hdGVyaWFsIiwibWVzc2FnZSIsImVtcHR5IiwiRW1wdHlDYXJkIiwiX2ljb25zIiwiX2xpc3QiLCJfZW1wdHkiLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJvbkNsb3NlIiwidW5kZWZpbmVkIiwiSWNvbkJ1dHRvbiIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidGVybmFyeSIsIm9wdGlvbnMiLCJ0cnVlIiwiTGlzdCIsImNvbnRyb2wiLCJBY3Rpdml0eVBhcnRpY2lwYW50IiwiZmFsc2UiLCJFbXB0eSIsIl9pbWFnZSIsIl9jb2xsYXBzaWJsZSIsIl9vYmplY3RpdmVJY29uIiwiX29iamVjdGl2ZSIsIkNoYXRBY3Rpdml0eVBhcnRpY2lwYW50IiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJhbmFseXNpcyIsIm9uVG9nZ2xlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwidG9nZ2xlYWJsZSIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkltYWdlIiwic3JjIiwiTGluayIsImhyZWYiLCJub1N1bW1hcnkiLCJBY3Rpdml0eU9iamVjdGl2ZVN0YXR1c0ljb24iLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiX2NoYXQiLCJTcG9rZW5BY3Rpdml0eVBhcnRpY2lwYW50IiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVBhcnRpY2lwYW50IiwiX3Rvb2x0aXAiLCJtdWx0aXBsZUNob2ljZSIsImFjdGl2aXR5SWQiLCJwYXJ0aWNpcGFudEFjdGl2aXR5IiwiSWNvblN0YXRlIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJjb3JyZWN0IiwidG90YWwiLCJ3cm9uZyIsImNvdW50ZXJzIiwiY2xzIiwiUmVhY3QiLCJpY29uTmFtZXMiLCJwZW5kaW5nIiwiY29tcGxldGVkIiwib3V0c3RhbmRpbmciLCJvYmplY3RpdmVzU3RhdHVzIiwiQXBwSWNvbiIsIm5vQW5hbHlzaXMiLCJfY2hhdENvbXBvbmVudCIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlDaGF0VGFiIiwidXNlRHJhd2VyQ29udGV4dCIsInJlZiIsInVzZVJlZiIsInRBY3Rpdml0eSIsImNoYXRJZCIsIkVtcHR5Q2hhdCIsInNsaWNlIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsIkFnZW50c0NoYXRQYW5lbCIsIl90YWJzIiwiX2RyYXdlckFsZXJ0cyIsIl9vYmplY3RpdmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRCb2R5Iiwic2V0TWVzc2FnZXMiLCJ1c2VFZmZlY3QiLCJ0cmlnZ2VyQ2hhbmdlIiwib2ZmIiwidGFicyIsIlRhYiIsImludGVyYWN0aW9ucyIsImFsZXJ0cyIsIm9wZW5DaGF0IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlPYmplY3RpdmVzIiwidmFyaWFudCIsIkRyYXdlckFsZXJ0IiwicHJvZ3JlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHkiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJjbHNEcmF3ZXIiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiSUNPTlMiLCJ0eXBlcyIsImRlYmF0ZSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZUJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5U3Bva2VuQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZVF1ZXN0aW9uT3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJzZWxlY3RlZCIsIl9xdWVzdGlvbnMiLCJwYXJ0aWNpcGF0aW9uIiwiZGV0YWlsIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlUXVlc3Rpb25zIiwiX2Fuc3dlciIsImF1ZGlvVXJsIiwib3V0cHV0IiwiZmVlZGJhY2siLCJhdWRpbyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJjYWxsYmFjayIsInNldE9wZW4iLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsIm9uQ29uZmlybSIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiX2ljb25zMiIsIl9jaGF0VGFiIiwiX3JvdXRpbmciLCJTdHVkZW50RHJhd2VyQ2hhdCIsInN0dWRlbnQiLCJzZXRJdGVtcyIsInNldFJlYWR5Iiwib25SZWZyZXNoIiwib25CYWNrIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsIkFwcEljb25CdXR0b24iLCJjb25zdW1lZCIsIm9mIiwiRHJhd2VyIiwiU3R1ZGVudEFzc2lnbm1lbnRTdW1tYXJ5IiwiQ2xvc2VCdXR0b24iLCJHZW5lcmFsVmlldyIsIl9sYWJlbCIsIl9hY3Rpdml0eUljb24iLCJfc3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlDaGF0Iiwic3VidHlwZSIsIkFjdGl2aXR5SWNvbiIsIk1vZHVsZUFjdGl2aXR5TWVzc2FnZXMiLCJNb2R1bGVBY3Rpdml0eVN0YXR1cyIsIk1vZHVsZUFjdGl2aXR5RGV0YWlscyIsIkljb24iLCJNb2R1bGVBY3Rpdml0eSIsIk1vZHVsZUFjdGl2aXR5U3Bva2VuIiwiTW9kdWxlQWN0aXZpdHlNdWx0aXBsZUNob2ljZSIsImxhYmVsIiwiZG9uZSIsInRvdGFsTWVzc2FnZXMiLCJqb2luIiwibWVzc2FnZUNvdW50ZXIiLCJoYXNBbGVydHMiLCJJY29uSXRlbSIsInBhcnRpY2lwYW50VXJpIiwib3BlbkRyYXdlciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhbHQiLCJfaWNvbkJveCIsIkljb25Cb3giLCJhcyIsIkRyYXdlckFsZXJ0SXRlbSIsIml0ZXJhdGlvbiIsImFzc2lzdGFudCIsIm5vTWVzc2FnZXMiLCJfYWN0aW9ucyIsIl9oZWFkZXIiLCJBUFAiLCJBUFBfTkFNRSIsIkRhc2hib2FyZENvbnRleHQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXIiLCJjbGFzc3dvcmtzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0IiwiX2RyYXdlciIsIl9kcmF3ZXIyIiwiX2RyYXdlckNoYXQiLCJfd2FsbCIsIkFzaWRlRHJhd2VyIiwic2hvd0RyYXdlciIsInB1c2hTdGF0ZSIsInBvc2l0aW9uIiwiV2FsbCIsIkFjdGl2aXR5RmlsdGVyIiwiaGFuZGxlQ2xpY2siLCJfdXNlckRhdGEiLCJvd25lciIsIm9uQ2xhc3Nyb29tQ2xpY2siLCJFbnRpdHlJbWFnZSIsIlVzZXJEYXRhIiwiX2Zvcm0iLCJfYWN0aXZpdHlGaWx0ZXIiLCJTdHVkZW50c0hlYWRlciIsImxpc3RDbHMiLCJyZWZyZXNoaW5nIiwic2V0UmVmcmVzaGluZyIsIm9uRmlsdGVyIiwiY3VycmVudFRhcmdldCIsImxpc3QiLCJzdHVkZW50cyIsIklucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsInN0dWRlbnRIZWFkZXIiLCJfIiwiX2FzaWRlRHJhd2VyIiwiX3ZpZXciLCJfZ2VuZXJhbCIsIl9zdHVkZW50SGVhZGVyIiwic2V0VG90YWxQYXJ0aWNpcGFudHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiZ2V0UHJvcGVydGllcyIsIlBhZ2VMb2FkZXIiLCJkcmF3ZXJWYWx1ZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsL0RBVEEudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0aWVzLnRzIiwiL3RzL21vZGVsL2FjdGl2aXRpZXMvYWN0aXZpdHkudHMiLCIvdHMvbW9kZWwvaW5kZXgudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvYWN0aXZpdHkudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvc3Bva2VuLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvcGFydGljaXBhbnRzLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wcm92aWRlci50cyIsIi90cy9tb2RlbC9wcm92aWRlci50cyIsIi90eXBlcy50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy80MDQudHN4IiwiL3RzL3ZpZXdzL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvY2hhdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2NoYXQtdGFiLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9vYmplY3RpdmVzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2Fuc3dlci50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NoYXQtdGFiLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZHJhd2VyLWNoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9nZW5lcmFsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2RldGFpbHMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2xhYmVsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvc3RhdHVzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWN0aXZpdHktaWNvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lbXB0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pY29uLWJveC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9vYmplY3RpdmUtaWNvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kcmF3ZXIvYXNpZGUtZHJhd2VyLnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvY29udGVudC50c3giLCIvdHMvdmlld3MvZHJhd2VyL3dhbGwudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FjdGl2aXR5LWZpbHRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvc3R1ZGVudC1oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci91c2VyLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLENBQUFSLEtBQU0sQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQ0gsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFFM0M7WUFFQTs7O1lBR0FFLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMs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