System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/dashboard-layout.widget", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/http-suite@0.0.1/api", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.0.0/tracking", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/ailearn-app@0.3.1/config", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp031DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp031DashboardLayoutWidget;
    }, function (_aimpactReactive001EntitiesItem) {
      dependency_5 = _aimpactReactive001EntitiesItem;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_6 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk141Session) {
      dependency_7 = _aimpactChatSdk141Session;
    }, function (_aimpactHttpSuite001Api) {
      dependency_8 = _aimpactHttpSuite001Api;
    }, function (_aimpactReactive001Model) {
      dependency_9 = _aimpactReactive001Model;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_10 = _aimpactAilearnSdk100Tracking;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_11 = _aimpactAilearnSdk100Core;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/reactive/entities/item', dependency_5], ['@aimpact/ailearn-sdk/config', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/http-suite/api', dependency_8], ['@aimpact/reactive/model', dependency_9], ['@aimpact/ailearn-sdk/tracking', dependency_10], ['@aimpact/ailearn-sdk/core', dependency_11], ['@beyond-js/kernel/texts', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['react', dependency_14], ['pragmate-ui/components', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['pragmate-ui/icons', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/empty', dependency_21], ['pragmate-ui/image', dependency_22], ['pragmate-ui/collapsible', dependency_23], ['pragmate-ui/tooltip', dependency_24], ['@aimpact/ailearn-app/components/icons', dependency_25], ['@aimpact/chat-sdk/chat-component.code', dependency_26], ['@aimpact/chat-sdk/widgets/markdown', dependency_27], ['pragmate-ui/tabs', dependency_28], ['pragmate-ui/modal', dependency_29], ['pragmate-ui/drawer', dependency_30], ['@beyond-js/kernel/routing', dependency_31], ['pragmate-ui/form', dependency_32]]);
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
        hash: 3950531445,
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
        hash: 2452894665,
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
                await this.#texts.fetch();
                await this.#model.load(id);
                globalThis.m = this.#model;
                _dashboardLayout.LayoutBroker.showMessage('info', this.texts.archived);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfYXBpIiwiX21vZGVsIiwiX2FjdGl2aXRpZXMiLCJfcGFydGljaXBhbnRzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsImlzVXNlckNyZWF0b3IiLCJzZXNzaW9uV3JhcHBlciIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwiRXJyb3IiLCJ0ZXh0IiwiZm91bmQiLCJyZWFkeSIsImRhc2hib2FyZElkIiwiYWRkQ3JlZGl0cyIsInRyYWNraW5nIiwicG9zdCIsImNyZWRpdHMiLCJhcmNoaXZlIiwicmVzdG9yZSIsIlBhcnRpY2lwYW50QWN0aXZpdHkiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiUGFydGljaXBhbnRBY3Rpdml0aWVzIiwicGFyZW50IiwidmFsdWVzIiwiYWN0aXZpdHkiLCJnZXRBY3Rpdml0eUluc3RhbmNlIiwidXBkYXRlIiwiYmluZCIsIk9iamVjdHMiLCJzcG9rZW4iLCJQYXJ0aWNpcGFudFNwb2tlbkFjdGl2aXR5IiwiZGV0YXVsdCIsIlBhcnRpY2lwYW50TXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsIkFjdGl2aXR5IiwiaXRlbSIsInF1ZXN0aW9ucyIsIkpTT04iLCJwYXJzZSIsImFzc2Vzc21lbnQiLCJlIiwiY29uc29sZSIsIndhcm4iLCJwYXJ0aWNpcGF0aW9uRGF0YSIsInF1ZXN0aW9uIiwiaW5kZXgiLCJhbnN3ZXIiLCJyZXNwb25zZXMiLCJhY2N1cmFjeSIsImljb25zIiwia2V5IiwidG90YWxQb2ludHMiLCJwb2ludHMiLCJhdHRlbXB0cyIsInRyYW5zY3JpcHRpb24iLCJvYmplY3RpdmVzS2V5cyIsIl90cmFja2luZyIsIl9jb2xsZWN0aW9uIiwiX3Byb3ZpZGVyIiwiUGFydGljaXBhbnQiLCJhc3NpZ25tZW50SWQiLCJwcm92aWRlciIsIlBhcnRpY2lwYW50UHJvdmlkZXIiLCJUcmFja2luZyIsInVzZXJJZCIsImNoYXQiLCJhcmdzIiwiX3BhcnRpY2lwYW50IiwiYXJyYXlJdGVtcyIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJwcm9jZXNzTG9hZCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbW9kZWwyIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvcmUiLCJpc1N0b3JlIiwiYWN0aXZpdHlTZWxlY3RlZCIsImN1cnJlbnRUcmFja2luZyIsInNlc3Npb24iLCJ2aWV3IiwiYXNzaWdubWVudCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwic3BlY2lmaWVyIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInVzZXJzIiwidHJhY2tpbmdzIiwidHJpZ2dlckV2ZW50Iiwib24iLCJzZXRNb2RlbCIsImZldGNoaW5nIiwiZmV0Y2giLCJtIiwic2hvd01lc3NhZ2UiLCJhcmNoaXZlZCIsImxvZyIsImxvYWRVc2VyVHJhY2tpbmciLCJyZWZyZXNoIiwidHJpZ2dlciIsInJlZnJlc2hEcmF3ZXIiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJjaGF0TW9kZWwiLCJsb2FkQWxsIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJyZWZyZXNoVHJhY2tpbmciLCJzZWxlY3RBY3Rpdml0eSIsIl9yZWFjdCIsIk5vdEZvdW5kIiwiY29kZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfaG9va3MiLCJEYXNoYm9hcmRBY3Rpb25zIiwic2V0U2hvd0RyYXdlciIsInVzZURhc2hib2FyZENvbnRleHQiLCJzZXRVcGRhdGUiLCJ1c2VTdGF0ZSIsIm9uQ2xpY2siLCJ1c2VCaW5kZXIiLCJhY3Rpb25UZXh0IiwiYWN0aW9uIiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwid2FsbCIsIl91aSIsIkVtcHR5TWF0ZXJpYWwiLCJtZXNzYWdlIiwiZW1wdHkiLCJFbXB0eUNhcmQiLCJfaWNvbnMiLCJfbGlzdCIsIl9lbXB0eSIsIkFjdGl2aXR5VmlldyIsInNldFZpZXciLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsIm9uQ2xvc2UiLCJ1bmRlZmluZWQiLCJJY29uQnV0dG9uIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsInRydWUiLCJMaXN0IiwiY29udHJvbCIsIkFjdGl2aXR5UGFydGljaXBhbnQiLCJmYWxzZSIsIkVtcHR5IiwiX2ltYWdlIiwiX2NvbGxhcHNpYmxlIiwiX29iamVjdGl2ZUljb24iLCJfb2JqZWN0aXZlIiwiQ2hhdEFjdGl2aXR5UGFydGljaXBhbnQiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsImFuYWx5c2lzIiwib25Ub2dnbGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiQ29sbGFwc2libGVDb250YWluZXIiLCJ0b2dnbGVhYmxlIiwib3BlbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSW1hZ2UiLCJzcmMiLCJMaW5rIiwiaHJlZiIsIm5vU3VtbWFyeSIsIkFjdGl2aXR5T2JqZWN0aXZlU3RhdHVzSWNvbiIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlPYmplY3RpdmUiLCJfY2hhdCIsIlNwb2tlbkFjdGl2aXR5UGFydGljaXBhbnQiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5UGFydGljaXBhbnQiLCJfdG9vbHRpcCIsIm11bHRpcGxlQ2hvaWNlIiwiYWN0aXZpdHlJZCIsInBhcnRpY2lwYW50QWN0aXZpdHkiLCJJY29uU3RhdGUiLCJUb29sdGlwIiwiY29udGVudCIsImNvcnJlY3QiLCJ0b3RhbCIsIndyb25nIiwiY291bnRlcnMiLCJjbHMiLCJSZWFjdCIsImljb25OYW1lcyIsInBlbmRpbmciLCJjb21wbGV0ZWQiLCJvdXRzdGFuZGluZyIsIm9iamVjdGl2ZXNTdGF0dXMiLCJBcHBJY29uIiwibm9BbmFseXNpcyIsIl9jaGF0Q29tcG9uZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRUYWIiLCJ1c2VEcmF3ZXJDb250ZXh0IiwicmVmIiwidXNlUmVmIiwidEFjdGl2aXR5IiwiY2hhdElkIiwiRW1wdHlDaGF0Iiwic2xpY2UiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiQWdlbnRzQ2hhdFBhbmVsIiwiX3RhYnMiLCJfZHJhd2VyQWxlcnRzIiwiX29iamVjdGl2ZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdEJvZHkiLCJzZXRNZXNzYWdlcyIsInVzZUVmZmVjdCIsInRyaWdnZXJDaGFuZ2UiLCJvZmYiLCJ0YWJzIiwiVGFiIiwiaW50ZXJhY3Rpb25zIiwiYWxlcnRzIiwib3BlbkNoYXQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZXMiLCJ2YXJpYW50IiwiRHJhd2VyQWxlcnQiLCJwcm9ncmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eSIsImhhc1BhcnRpY2lwYXRlZCIsImNsc0RyYXdlciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJJQ09OUyIsInR5cGVzIiwiZGViYXRlIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlTcG9rZW5Cb2R5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlUXVlc3Rpb25PcHRpb25zIiwiY29ycmVjdEFuc3dlciIsInNlbGVjdGVkIiwiX3F1ZXN0aW9ucyIsInBhcnRpY2lwYXRpb24iLCJkZXRhaWwiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbnMiLCJfYW5zd2VyIiwiYXVkaW9VcmwiLCJvdXRwdXQiLCJmZWVkYmFjayIsImF1ZGlvIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJhZGRFdmVudExpc3RlbmVyIiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsImNhbGxiYWNrIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiQ29uZmlybU1vZGFsIiwib25DYW5jZWwiLCJfaWNvbnMyIiwiX2NoYXRUYWIiLCJfcm91dGluZyIsIlN0dWRlbnREcmF3ZXJDaGF0Iiwic3R1ZGVudCIsInNldEl0ZW1zIiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsIm9uUmVmcmVzaCIsIm9uQmFjayIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJBcHBJY29uQnV0dG9uIiwiY29uc3VtZWQiLCJvZiIsIkRyYXdlciIsIlN0dWRlbnRBc3NpZ25tZW50U3VtbWFyeSIsIkNsb3NlQnV0dG9uIiwiR2VuZXJhbFZpZXciLCJfbGFiZWwiLCJfYWN0aXZpdHlJY29uIiwiX3N0YXR1cyIsIk1vZHVsZUFjdGl2aXR5Q2hhdCIsInN1YnR5cGUiLCJBY3Rpdml0eUljb24iLCJNb2R1bGVBY3Rpdml0eU1lc3NhZ2VzIiwiTW9kdWxlQWN0aXZpdHlTdGF0dXMiLCJNb2R1bGVBY3Rpdml0eURldGFpbHMiLCJJY29uIiwiTW9kdWxlQWN0aXZpdHkiLCJNb2R1bGVBY3Rpdml0eVNwb2tlbiIsIk1vZHVsZUFjdGl2aXR5TXVsdGlwbGVDaG9pY2UiLCJsYWJlbCIsImRvbmUiLCJ0b3RhbE1lc3NhZ2VzIiwiam9pbiIsIm1lc3NhZ2VDb3VudGVyIiwiaGFzQWxlcnRzIiwiSWNvbkl0ZW0iLCJwYXJ0aWNpcGFudFVyaSIsIm9wZW5EcmF3ZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWx0IiwiX2ljb25Cb3giLCJJY29uQm94IiwiYXMiLCJEcmF3ZXJBbGVydEl0ZW0iLCJpdGVyYXRpb24iLCJhc3Npc3RhbnQiLCJBUFAiLCJBUFBfTkFNRSIsIlBhZ2VDb250YWluZXIiLCJjbGFzc3dvcmtzIiwiRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRHJhd2VyQ29udGV4dCIsIl9kcmF3ZXIiLCJfZHJhd2VyMiIsIl9kcmF3ZXJDaGF0IiwiX3dhbGwiLCJBc2lkZURyYXdlciIsInNob3dEcmF3ZXIiLCJwdXNoU3RhdGUiLCJwb3NpdGlvbiIsIldhbGwiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiX3VzZXJEYXRhIiwiSGVhZGVyIiwib3duZXIiLCJvbkNsYXNzcm9vbUNsaWNrIiwiRW50aXR5SW1hZ2UiLCJVc2VyRGF0YSIsIl9mb3JtIiwiX2FjdGl2aXR5RmlsdGVyIiwiU3R1ZGVudHNIZWFkZXIiLCJsaXN0Q2xzIiwicmVmcmVzaGluZyIsInNldFJlZnJlc2hpbmciLCJvbkZpbHRlciIsImN1cnJlbnRUYXJnZXQiLCJsaXN0Iiwic3R1ZGVudHMiLCJJbnB1dCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzZWFyY2giLCJzdHVkZW50SGVhZGVyIiwiZGlzYWJsZWQiLCJfIiwiX2FzaWRlRHJhd2VyIiwiX2hlYWRlciIsIl9hY3Rpb25zIiwiX3ZpZXciLCJfZ2VuZXJhbCIsIl9zdHVkZW50SGVhZGVyIiwic2V0VG90YWxQYXJ0aWNpcGFudHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiZ2V0UHJvcGVydGllcyIsIlBhZ2VMb2FkZXIiLCJkcmF3ZXJWYWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvREFUQS50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXRpZXMudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9zcG9rZW4udHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudHMudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3Byb3ZpZGVyLnRzIiwiL3RzL21vZGVsL3Byb3ZpZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvYW5zd2VyLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9kcmF3ZXItY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2dlbmVyYWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvZGV0YWlscy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hY3Rpdml0eS1pY29uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2ljb24tYm94LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29iamVjdGl2ZS1pY29uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RyYXdlci9hc2lkZS1kcmF3ZXIudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9jb250ZW50LnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvd2FsbC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYWN0aXZpdHktZmlsdGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9zdHVkZW50LWhlYWRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL3VzZXItZGF0YS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSFIsZ0JBQUEsQ0FBQVMsWUFBWSxDQUFDQyxhQUFhLEVBQUU7Y0FFNUIsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBRTNDO1lBRUE7OztZQUdBRSxJQUFJQSxDQUFBO2NB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