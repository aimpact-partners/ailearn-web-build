System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/dashboard-layout.widget", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/reactive@0.0.1/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-sdk@1.0.0/tracking", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/ailearn-app@0.3.1/config", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, dependency_32, dependency_33, bimport, __Bundle, __pkg, ims, Controller, ParticipantProvider, ActivityView, ChatActivityParticipant, MultipleChoiceActivityParticipant, SpokenActivityParticipant, EmptyCard, GeneralView, ActivityIcon, DrawerAlert, DrawerAlertItem, IconBox, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactReactive001Model) {
      dependency_7 = _aimpactReactive001Model;
    }, function (_aimpactHttpSuite001Api) {
      dependency_8 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_9 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk141Session) {
      dependency_10 = _aimpactChatSdk141Session;
    }, function (_beyondJsKernel019Core) {
      dependency_11 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_12 = _aimpactAilearnSdk100Tracking;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_13 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Texts) {
      dependency_14 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_15 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_16 = _pragmateUi100Beta7Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_17 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_18 = _aimpactAilearnApp031ComponentsUi;
    }, function (_aimpactAilearnApp031Config) {
      dependency_19 = _aimpactAilearnApp031Config;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_20 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7List) {
      dependency_21 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_22 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Image) {
      dependency_23 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_24 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7Tooltip) {
      dependency_25 = _pragmateUi100Beta7Tooltip;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_26 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_aimpactChatSdk141ChatComponentCode) {
      dependency_27 = _aimpactChatSdk141ChatComponentCode;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_28 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_29 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_30 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Drawer) {
      dependency_31 = _pragmateUi100Beta7Drawer;
    }, function (_beyondJsKernel019Routing) {
      dependency_32 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta7Form) {
      dependency_33 = _pragmateUi100Beta7Form;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/reactive/entities/item', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@aimpact/reactive/model', dependency_7], ['@aimpact/http-suite/api', dependency_8], ['@aimpact/ailearn-sdk/config', dependency_9], ['@aimpact/chat-sdk/session', dependency_10], ['@beyond-js/kernel/core', dependency_11], ['@aimpact/ailearn-sdk/tracking', dependency_12], ['@aimpact/ailearn-sdk/core', dependency_13], ['@beyond-js/kernel/texts', dependency_14], ['react', dependency_15], ['pragmate-ui/components', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['@aimpact/ailearn-app/components/ui', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['pragmate-ui/icons', dependency_20], ['pragmate-ui/list', dependency_21], ['pragmate-ui/empty', dependency_22], ['pragmate-ui/image', dependency_23], ['pragmate-ui/collapsible', dependency_24], ['pragmate-ui/tooltip', dependency_25], ['@aimpact/ailearn-app/components/icons', dependency_26], ['@aimpact/chat-sdk/chat-component.code', dependency_27], ['@aimpact/chat-sdk/widgets/markdown', dependency_28], ['pragmate-ui/tabs', dependency_29], ['pragmate-ui/modal', dependency_30], ['pragmate-ui/drawer', dependency_31], ['@beyond-js/kernel/routing', dependency_32], ['pragmate-ui/form', dependency_33]]);
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
        hash: 3304371581,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dashboard = void 0;
          var _model = require("@aimpact/reactive/model");
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
            get isUserCreator() {
              return _session.sessionWrapper.user.id === store.model.module.creator?.id;
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
              // const promise = new PendingPromise();
              // setTimeout(() => {
              // 	this.archived = true;
              // 	promise.resolve(true);
              // }, 2000);
              // return promise;
              ///assignments/{id}/tracking/{trackingId}/coins/consume
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
        hash: 2394851576,
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
                console.log(1, this.texts);
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
        hash: 1508060740,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsImlzVXNlckNyZWF0b3IiLCJzZXNzaW9uV3JhcHBlciIsIm1vZGVsIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiUGFydGljaXBhbnRzIiwicmVhY3RpdmVQcm9wcyIsImdsb2JhbFRoaXMiLCJiZWFyZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwiRXJyb3IiLCJ0ZXh0IiwiZm91bmQiLCJyZWFkeSIsImRhc2hib2FyZElkIiwiYWRkQ3JlZGl0cyIsInRyYWNraW5nIiwicG9zdCIsImNyZWRpdHMiLCJhcmNoaXZlIiwicmVzdG9yZSIsIlBhcnRpY2lwYW50QWN0aXZpdHkiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiUGFydGljaXBhbnRBY3Rpdml0aWVzIiwicGFyZW50IiwidmFsdWVzIiwiYWN0aXZpdHkiLCJnZXRBY3Rpdml0eUluc3RhbmNlIiwidXBkYXRlIiwiYmluZCIsIk9iamVjdHMiLCJzcG9rZW4iLCJQYXJ0aWNpcGFudFNwb2tlbkFjdGl2aXR5IiwiZGV0YXVsdCIsIlBhcnRpY2lwYW50TXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsIkFjdGl2aXR5IiwiaXRlbSIsInF1ZXN0aW9ucyIsIkpTT04iLCJwYXJzZSIsImFzc2Vzc21lbnQiLCJlIiwiY29uc29sZSIsIndhcm4iLCJwYXJ0aWNpcGF0aW9uRGF0YSIsInF1ZXN0aW9uIiwiaW5kZXgiLCJhbnN3ZXIiLCJyZXNwb25zZXMiLCJhY2N1cmFjeSIsImljb25zIiwia2V5IiwidG90YWxQb2ludHMiLCJwb2ludHMiLCJhdHRlbXB0cyIsInRyYW5zY3JpcHRpb24iLCJvYmplY3RpdmVzS2V5cyIsIl90cmFja2luZyIsIl9jb2xsZWN0aW9uIiwiX3Byb3ZpZGVyIiwiUGFydGljaXBhbnQiLCJhc3NpZ25tZW50SWQiLCJwcm92aWRlciIsIlBhcnRpY2lwYW50UHJvdmlkZXIiLCJUcmFja2luZyIsInVzZXJJZCIsImNoYXQiLCJhcmdzIiwiX3BhcnRpY2lwYW50IiwiYXJyYXlJdGVtcyIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJwcm9jZXNzTG9hZCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbW9kZWwyIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvcmUiLCJpc1N0b3JlIiwiYWN0aXZpdHlTZWxlY3RlZCIsImN1cnJlbnRUcmFja2luZyIsInNlc3Npb24iLCJ2aWV3IiwiYXNzaWdubWVudCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwic3BlY2lmaWVyIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInVzZXJzIiwidHJhY2tpbmdzIiwidHJpZ2dlckV2ZW50Iiwib24iLCJzZXRNb2RlbCIsImZldGNoaW5nIiwiZmV0Y2giLCJtIiwibG9nIiwic2hvd01lc3NhZ2UiLCJhcmNoaXZlZCIsImxvYWRVc2VyVHJhY2tpbmciLCJyZWZyZXNoIiwidHJpZ2dlciIsInJlZnJlc2hEcmF3ZXIiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJjaGF0TW9kZWwiLCJsb2FkQWxsIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJyZWZyZXNoVHJhY2tpbmciLCJzZWxlY3RBY3Rpdml0eSIsIl9yZWFjdCIsIk5vdEZvdW5kIiwiY29kZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfaG9va3MiLCJEYXNoYm9hcmRBY3Rpb25zIiwic2V0U2hvd0RyYXdlciIsInVzZURhc2hib2FyZENvbnRleHQiLCJzZXRVcGRhdGUiLCJ1c2VTdGF0ZSIsIm9uQ2xpY2siLCJ1c2VCaW5kZXIiLCJhY3Rpb25UZXh0IiwiYWN0aW9uIiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwid2FsbCIsIl91aSIsIkVtcHR5TWF0ZXJpYWwiLCJtZXNzYWdlIiwiZW1wdHkiLCJFbXB0eUNhcmQiLCJfaWNvbnMiLCJfbGlzdCIsIl9lbXB0eSIsIkFjdGl2aXR5VmlldyIsInNldFZpZXciLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsIm9uQ2xvc2UiLCJ1bmRlZmluZWQiLCJJY29uQnV0dG9uIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsInRydWUiLCJMaXN0IiwiY29udHJvbCIsIkFjdGl2aXR5UGFydGljaXBhbnQiLCJmYWxzZSIsIkVtcHR5IiwiX2ltYWdlIiwiX2NvbGxhcHNpYmxlIiwiX29iamVjdGl2ZUljb24iLCJfb2JqZWN0aXZlIiwiQ2hhdEFjdGl2aXR5UGFydGljaXBhbnQiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsImFuYWx5c2lzIiwib25Ub2dnbGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiQ29sbGFwc2libGVDb250YWluZXIiLCJ0b2dnbGVhYmxlIiwib3BlbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSW1hZ2UiLCJzcmMiLCJMaW5rIiwiaHJlZiIsIm5vU3VtbWFyeSIsIkFjdGl2aXR5T2JqZWN0aXZlU3RhdHVzSWNvbiIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlPYmplY3RpdmUiLCJfY2hhdCIsIlNwb2tlbkFjdGl2aXR5UGFydGljaXBhbnQiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5UGFydGljaXBhbnQiLCJfdG9vbHRpcCIsIm11bHRpcGxlQ2hvaWNlIiwiYWN0aXZpdHlJZCIsInBhcnRpY2lwYW50QWN0aXZpdHkiLCJJY29uU3RhdGUiLCJUb29sdGlwIiwiY29udGVudCIsImNvcnJlY3QiLCJ0b3RhbCIsIndyb25nIiwiY291bnRlcnMiLCJjbHMiLCJSZWFjdCIsImljb25OYW1lcyIsInBlbmRpbmciLCJjb21wbGV0ZWQiLCJvdXRzdGFuZGluZyIsIm9iamVjdGl2ZXNTdGF0dXMiLCJBcHBJY29uIiwibm9BbmFseXNpcyIsIl9jaGF0Q29tcG9uZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRUYWIiLCJ1c2VEcmF3ZXJDb250ZXh0IiwicmVmIiwidXNlUmVmIiwidEFjdGl2aXR5IiwiY2hhdElkIiwiRW1wdHlDaGF0Iiwic2xpY2UiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiQWdlbnRzQ2hhdFBhbmVsIiwiX3RhYnMiLCJfZHJhd2VyQWxlcnRzIiwiX29iamVjdGl2ZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdEJvZHkiLCJzZXRNZXNzYWdlcyIsInVzZUVmZmVjdCIsInRyaWdnZXJDaGFuZ2UiLCJvZmYiLCJ0YWJzIiwiVGFiIiwiaW50ZXJhY3Rpb25zIiwiYWxlcnRzIiwib3BlbkNoYXQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZXMiLCJ2YXJpYW50IiwiRHJhd2VyQWxlcnQiLCJwcm9ncmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eSIsImhhc1BhcnRpY2lwYXRlZCIsImNsc0RyYXdlciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJJQ09OUyIsInR5cGVzIiwiZGViYXRlIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlTcG9rZW5Cb2R5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlUXVlc3Rpb25PcHRpb25zIiwiY29ycmVjdEFuc3dlciIsInNlbGVjdGVkIiwiX3F1ZXN0aW9ucyIsInBhcnRpY2lwYXRpb24iLCJkZXRhaWwiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbnMiLCJfYW5zd2VyIiwiYXVkaW9VcmwiLCJvdXRwdXQiLCJmZWVkYmFjayIsImF1ZGlvIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJhZGRFdmVudExpc3RlbmVyIiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsImNhbGxiYWNrIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiQ29uZmlybU1vZGFsIiwib25DYW5jZWwiLCJfaWNvbnMyIiwiX2NoYXRUYWIiLCJfcm91dGluZyIsIlN0dWRlbnREcmF3ZXJDaGF0Iiwic3R1ZGVudCIsInNldEl0ZW1zIiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsIm9uUmVmcmVzaCIsIm9uQmFjayIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJBcHBJY29uQnV0dG9uIiwiY29uc3VtZWQiLCJvZiIsIkRyYXdlciIsIlN0dWRlbnRBc3NpZ25tZW50U3VtbWFyeSIsIkNsb3NlQnV0dG9uIiwiR2VuZXJhbFZpZXciLCJfbGFiZWwiLCJfYWN0aXZpdHlJY29uIiwiX3N0YXR1cyIsIk1vZHVsZUFjdGl2aXR5Q2hhdCIsInN1YnR5cGUiLCJBY3Rpdml0eUljb24iLCJNb2R1bGVBY3Rpdml0eU1lc3NhZ2VzIiwiTW9kdWxlQWN0aXZpdHlTdGF0dXMiLCJNb2R1bGVBY3Rpdml0eURldGFpbHMiLCJJY29uIiwiTW9kdWxlQWN0aXZpdHkiLCJNb2R1bGVBY3Rpdml0eVNwb2tlbiIsIk1vZHVsZUFjdGl2aXR5TXVsdGlwbGVDaG9pY2UiLCJsYWJlbCIsImRvbmUiLCJ0b3RhbE1lc3NhZ2VzIiwiam9pbiIsIm1lc3NhZ2VDb3VudGVyIiwiaGFzQWxlcnRzIiwiSWNvbkl0ZW0iLCJwYXJ0aWNpcGFudFVyaSIsIm9wZW5EcmF3ZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWx0IiwiX2ljb25Cb3giLCJJY29uQm94IiwiYXMiLCJEcmF3ZXJBbGVydEl0ZW0iLCJpdGVyYXRpb24iLCJhc3Npc3RhbnQiLCJBUFAiLCJBUFBfTkFNRSIsIlBhZ2VDb250YWluZXIiLCJjbGFzc3dvcmtzIiwiRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRHJhd2VyQ29udGV4dCIsIl9kcmF3ZXIiLCJfZHJhd2VyMiIsIl9kcmF3ZXJDaGF0IiwiX3dhbGwiLCJBc2lkZURyYXdlciIsInNob3dEcmF3ZXIiLCJwdXNoU3RhdGUiLCJwb3NpdGlvbiIsIldhbGwiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiX3VzZXJEYXRhIiwiSGVhZGVyIiwib3duZXIiLCJvbkNsYXNzcm9vbUNsaWNrIiwiRW50aXR5SW1hZ2UiLCJVc2VyRGF0YSIsIl9mb3JtIiwiX2FjdGl2aXR5RmlsdGVyIiwiU3R1ZGVudHNIZWFkZXIiLCJsaXN0Q2xzIiwicmVmcmVzaGluZyIsInNldFJlZnJlc2hpbmciLCJvbkZpbHRlciIsImN1cnJlbnRUYXJnZXQiLCJsaXN0Iiwic3R1ZGVudHMiLCJJbnB1dCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzZWFyY2giLCJzdHVkZW50SGVhZGVyIiwiZGlzYWJsZWQiLCJfIiwiX2FzaWRlRHJhd2VyIiwiX2hlYWRlciIsIl9hY3Rpb25zIiwiX3ZpZXciLCJfZ2VuZXJhbCIsIl9zdHVkZW50SGVhZGVyIiwic2V0VG90YWxQYXJ0aWNpcGFudHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiZ2V0UHJvcGVydGllcyIsIlBhZ2VMb2FkZXIiLCJkcmF3ZXJWYWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvREFUQS50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXRpZXMudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9zcG9rZW4udHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudHMudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3Byb3ZpZGVyLnRzIiwiL3RzL21vZGVsL3Byb3ZpZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvYW5zd2VyLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9kcmF3ZXItY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2dlbmVyYWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvZGV0YWlscy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hY3Rpdml0eS1pY29uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2ljb24tYm94LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29iamVjdGl2ZS1pY29uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RyYXdlci9hc2lkZS1kcmF3ZXIudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9jb250ZW50LnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvd2FsbC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYWN0aXZpdHktZmlsdGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9zdHVkZW50LWhlYWRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL3VzZXItZGF0YS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsZ0JBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxTQUFRTCxLQUFBLENBQUFNLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlMLE1BQUEsQ0FBQU8sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNIUixnQkFBQSxDQUFBUyxZQUFZLENBQUNDLGFBQWEsRUFBRTtjQUU1QixJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csSUFBSSxDQUFDLElBQUksQ0FBQ0gsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFFM0M7WUFFQTs7O1lBR0FFLElBQUlBLENBQUE7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