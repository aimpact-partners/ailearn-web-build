System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.17/dashboard-layout.widget", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/reactive@0.0.1/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/reactive@1.1.12/entities", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@aimpact/ailearn-app@0.2.17/components/ui", "@aimpact/ailearn-app@0.2.17/components/navbar-header.code", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.2.17/config", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/list", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.2.17/components/icons", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, dependency_32, dependency_33, dependency_34, bimport, __Bundle, __pkg, ims, Controller, ParticipantProvider, ActivityView, ChatActivityParticipant, MultipleChoiceActivityParticipant, SpokenActivityParticipant, EmptyCard, GeneralView, ActivityIcon, DrawerAlert, DrawerAlertItem, IconBox, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0217DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0217DashboardLayoutWidget;
    }, function (_aimpactReactive001EntitiesItem) {
      dependency_5 = _aimpactReactive001EntitiesItem;
    }, function (_aimpactReactive001Model) {
      dependency_6 = _aimpactReactive001Model;
    }, function (_aimpactHttpSuite001Api) {
      dependency_7 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_8 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk141Session) {
      dependency_9 = _aimpactChatSdk141Session;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_10 = _aimpactAilearnSdk100Tracking;
    }, function (_beyondJsReactive1112Entities) {
      dependency_11 = _beyondJsReactive1112Entities;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_12 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Texts) {
      dependency_13 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Core) {
      dependency_14 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_15 = _react2;
    }, function (_aimpactAilearnApp0217ComponentsUi) {
      dependency_16 = _aimpactAilearnApp0217ComponentsUi;
    }, function (_aimpactAilearnApp0217ComponentsNavbarHeaderCode) {
      dependency_17 = _aimpactAilearnApp0217ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_18 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp0217Config) {
      dependency_19 = _aimpactAilearnApp0217Config;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_20 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7List) {
      dependency_21 = _pragmateUi100Beta7List;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_22 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Components) {
      dependency_23 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Image) {
      dependency_24 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_25 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7Tooltip) {
      dependency_26 = _pragmateUi100Beta7Tooltip;
    }, function (_aimpactAilearnApp0217ComponentsIcons) {
      dependency_27 = _aimpactAilearnApp0217ComponentsIcons;
    }, function (_aimpactChatSdk141ChatComponentCode) {
      dependency_28 = _aimpactChatSdk141ChatComponentCode;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_29 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_30 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_31 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Drawer) {
      dependency_32 = _pragmateUi100Beta7Drawer;
    }, function (_beyondJsKernel019Routing) {
      dependency_33 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta7Form) {
      dependency_34 = _pragmateUi100Beta7Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.17"], ["@aimpact/ailearn-app", "0.2.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.17/dashboard/assignments",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/reactive/entities/item', dependency_5], ['@aimpact/reactive/model', dependency_6], ['@aimpact/http-suite/api', dependency_7], ['@aimpact/ailearn-sdk/config', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-sdk/tracking', dependency_10], ['@beyond-js/reactive/entities', dependency_11], ['@aimpact/ailearn-sdk/core', dependency_12], ['@beyond-js/kernel/texts', dependency_13], ['@beyond-js/kernel/core', dependency_14], ['react', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_17], ['pragmate-ui/icons', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['pragmate-ui/empty', dependency_20], ['pragmate-ui/list', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['pragmate-ui/components', dependency_23], ['pragmate-ui/image', dependency_24], ['pragmate-ui/collapsible', dependency_25], ['pragmate-ui/tooltip', dependency_26], ['@aimpact/ailearn-app/components/icons', dependency_27], ['@aimpact/chat-sdk/chat-component.code', dependency_28], ['@aimpact/chat-sdk/widgets/markdown', dependency_29], ['pragmate-ui/tabs', dependency_30], ['pragmate-ui/modal', dependency_31], ['pragmate-ui/drawer', dependency_32], ['@beyond-js/kernel/routing', dependency_33], ['pragmate-ui/form', dependency_34]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-dashboard-assignments",
        "vspecifier": "@aimpact/ailearn-app@0.2.17/dashboard/assignments.widget",
        "is": "page",
        "route": "/dashboard/${id}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.17/dashboard/assignments.widget');
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
        hash: 2826156247,
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
            constructor() {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#participants = new _participants.Participants(this);
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
          }
          exports.Dashboard = Dashboard;
        }
      });

      /********************************************************
      INTERNAL MODULE: ./model/participants/activities/activity
      ********************************************************/

      ims.set('./model/participants/activities/activity', {
        hash: 143467311,
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
        hash: 3300496935,
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
        hash: 60200988,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Participant = void 0;
          var _item = require("@aimpact/reactive/entities/item");
          var _collection = require("./activities/collection");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
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
            async load() {
              const {
                status,
                data
              } = await super.load({
                userId: this.user.id
              });
              if (!status) {
                throw new Error('Error loading participant');
              }
              this.activities.update(data.activities?.items);
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
        hash: 3364422104,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantProvider = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _api = require("@aimpact/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
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
              return {
                status,
                data,
                error
              };
            };
          }
          exports.ParticipantProvider = ParticipantProvider;
        }
      });

      /********************************
      INTERNAL MODULE: ./model/provider
      ********************************/

      ims.set('./model/provider', {
        hash: 1515868395,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Provider = void 0;
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class Provider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#parent = parent;
            }
            async load(id) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.get(`/assignments/${id}/dashboard`);
              return response;
            }
            async addCredits(assignmentId, trackingId) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              ///assignments/{id}/tracking/{trackingId}/coins/consume
              const response = await this.#api.post(`/assignments/${assignmentId}/tracking/${trackingId}/coins/consume`, {});
              return response;
            }
          }
          exports.Provider = Provider;
        }
      });

      /*****************************
      INTERNAL MODULE: ./model/types
      *****************************/

      ims.set('./model/types', {
        hash: 1709577995,
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
        hash: 371878724,
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
                await this.#model.load(id);
                globalThis.m = this.#model;
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
        hash: 266449972,
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
            const tActivity = tracking.activities.get(item.activity.id);
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
        hash: 3588347283,
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
            const tActivity = tracking.activities.get(activityId);
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
                view: 'student',
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
        hash: 172573551,
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
            const tActivity = tracking.activities.get(item.activity.id);
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
        hash: 2817534432,
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
            const tActivity = tracking.activities.get(participantActivity.id);
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
        hash: 298150186,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentSummary = StudentAssignmentSummary;
          var Drawer = require("pragmate-ui/drawer");
          var _icons = require("pragmate-ui/icons");
          var _list = require("pragmate-ui/list");
          var React = require("react");
          var _context = require("../../context");
          var _activity = require("./activity");
          var _empty = require("./empty");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function StudentAssignmentSummary({
            item,
            toggleOpen
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
            const credits = store.model;
            const total = credits ? credits.total - credits.consumed : 0;
            const percentageAvailable = total / credits.total * 100;
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
            const onClickButton = event => {
              event.stopPropagation();
              toggleOpen();
            };
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
        hash: 1818800279,
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
        hash: 778281546,
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
        hash: 742414063,
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
          var _collapsible = require("pragmate-ui/collapsible");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _routing = require("@beyond-js/kernel/routing");
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
            })), _react.default.createElement(_components.Button, {
              bordered: true,
              icon: "shared-folder",
              className: "btn btn-primary outline pui-button has-icon ",
              onClick: onClick
            }, texts.actions.wall))))), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("div", {
              className: "dashboard-content"
            }, _react.default.createElement("section", {
              className: "main-content"
            }, _react.default.createElement("p", {
              className: "p1 hidden-xs"
            }, description), _react.default.createElement("div", {
              className: "module__managers-section"
            }, _react.default.createElement("div", {
              className: "module__managers-section"
            }, creator && _react.default.createElement(_userData.UserData, {
              data: creator
            }), owner && _react.default.createElement(_userData.UserData, {
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
        hash: 1185128409,
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
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              if (!ref?.current) return;
              const container = ref.current.querySelector('.page__container');
              // if (showDrawer.show) {
              // 	// Save the current scroll position
              // 	const scrollY = window.scrollY;
              // 	container.style.position = 'fixed';
              // 	container.style.top = `-${scrollY - 79}px`;
              // } else {
              // 	// Restore scroll position and reset styles
              // 	const scrollY = Math.abs(parseInt(container.style.top || '0', 10));
              // 	container.style.position = '';
              // 	container.style.top = '';
              // 	window.scrollTo(0, scrollY);
              // }
            }, [ref?.current, showDrawer.show]);
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
            }, _react.default.createElement(_ui.PageContainer, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJhZGRDcmVkaXRzIiwidHJhY2tpbmciLCJwb3N0IiwiY3JlZGl0cyIsIlBhcnRpY2lwYW50QWN0aXZpdHkiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiUGFydGljaXBhbnRBY3Rpdml0aWVzIiwicGFyZW50IiwidmFsdWVzIiwiYWN0aXZpdHkiLCJnZXRBY3Rpdml0eUluc3RhbmNlIiwidXBkYXRlIiwiYmluZCIsIk9iamVjdHMiLCJzcG9rZW4iLCJQYXJ0aWNpcGFudFNwb2tlbkFjdGl2aXR5IiwiZGV0YXVsdCIsIlBhcnRpY2lwYW50TXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsIkFjdGl2aXR5IiwiaXRlbSIsInF1ZXN0aW9ucyIsIkpTT04iLCJwYXJzZSIsImFzc2Vzc21lbnQiLCJlIiwiY29uc29sZSIsIndhcm4iLCJwYXJ0aWNpcGF0aW9uRGF0YSIsInF1ZXN0aW9uIiwiaW5kZXgiLCJhbnN3ZXIiLCJyZXNwb25zZXMiLCJhY2N1cmFjeSIsImljb25zIiwia2V5IiwidG90YWxQb2ludHMiLCJwb2ludHMiLCJhdHRlbXB0cyIsInRyYW5zY3JpcHRpb24iLCJvYmplY3RpdmVzS2V5cyIsIl9jb2xsZWN0aW9uIiwiX3RyYWNraW5nIiwiX3Byb3ZpZGVyIiwiUGFydGljaXBhbnQiLCJhc3NpZ25tZW50SWQiLCJwcm92aWRlciIsIlBhcnRpY2lwYW50UHJvdmlkZXIiLCJUcmFja2luZyIsInVzZXJJZCIsImNoYXQiLCJfcGFydGljaXBhbnQiLCJhcnJheUl0ZW1zIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsInByb2Nlc3NMb2FkIiwiUHJvdmlkZXIiLCJ0cmFja2luZ0lkIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbDIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfY29yZSIsImlzU3RvcmUiLCJhY3Rpdml0eVNlbGVjdGVkIiwiY3VycmVudFRyYWNraW5nIiwic2Vzc2lvbiIsInZpZXciLCJhc3NpZ25tZW50IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJzcGVjaWZpZXIiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwidXNlcnMiLCJ0cmFja2luZ3MiLCJ0cmlnZ2VyRXZlbnQiLCJvbiIsInNldE1vZGVsIiwiZmV0Y2hpbmciLCJtIiwibG9nIiwibG9hZFVzZXJUcmFja2luZyIsInJlZnJlc2giLCJ0cmlnZ2VyIiwicmVmcmVzaERyYXdlciIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImNoYXRNb2RlbCIsImxvYWRBbGwiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsInJlZnJlc2hUcmFja2luZyIsInNlbGVjdEFjdGl2aXR5IiwiX3JlYWN0IiwiTm90Rm91bmQiLCJjb2RlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX3VpIiwiX2NvbnRleHQiLCJFbXB0eU1hdGVyaWFsIiwibWVzc2FnZSIsInVzZURhc2hib2FyZENvbnRleHQiLCJlbXB0eSIsIkVtcHR5Q2FyZCIsImNsYXNzTmFtZSIsIl9pY29ucyIsIl9saXN0IiwiX2VtcHR5IiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJ1c2VTdGF0ZSIsIm9uQ2xvc2UiLCJ1bmRlZmluZWQiLCJ1c2VCaW5kZXIiLCJJY29uQnV0dG9uIiwib25DbGljayIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidGVybmFyeSIsIm9wdGlvbnMiLCJ0cnVlIiwiTGlzdCIsImNvbnRyb2wiLCJBY3Rpdml0eVBhcnRpY2lwYW50IiwiZmFsc2UiLCJFbXB0eSIsIl9pbWFnZSIsIl9jb2xsYXBzaWJsZSIsIl9vYmplY3RpdmVJY29uIiwiX29iamVjdGl2ZSIsIkNoYXRBY3Rpdml0eVBhcnRpY2lwYW50Iiwic2V0U2hvd0RyYXdlciIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwiYW5hbHlzaXMiLCJvblRvZ2dsZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsInRvZ2dsZWFibGUiLCJvcGVuIiwiQ29sbGFwc2libGVIZWFkZXIiLCJJbWFnZSIsInNyYyIsIkxpbmsiLCJocmVmIiwibm9TdW1tYXJ5IiwiQWN0aXZpdHlPYmplY3RpdmVTdGF0dXNJY29uIiwiQ29sbGFwc2libGVDb250ZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZSIsIl9jaGF0IiwiU3Bva2VuQWN0aXZpdHlQYXJ0aWNpcGFudCIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlQYXJ0aWNpcGFudCIsIl90b29sdGlwIiwibXVsdGlwbGVDaG9pY2UiLCJhY3Rpdml0eUlkIiwicGFydGljaXBhbnRBY3Rpdml0eSIsIkljb25TdGF0ZSIsIlRvb2x0aXAiLCJjb250ZW50IiwiY29ycmVjdCIsInRvdGFsIiwid3JvbmciLCJjb3VudGVycyIsImNscyIsIlJlYWN0IiwiaWNvbk5hbWVzIiwicGVuZGluZyIsImNvbXBsZXRlZCIsIm91dHN0YW5kaW5nIiwib2JqZWN0aXZlc1N0YXR1cyIsIkFwcEljb24iLCJub0FuYWx5c2lzIiwiX2NoYXRDb21wb25lbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdFRhYiIsInVzZURyYXdlckNvbnRleHQiLCJyZWYiLCJ1c2VSZWYiLCJ0QWN0aXZpdHkiLCJjaGF0SWQiLCJFbXB0eUNoYXQiLCJzbGljZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJBZ2VudHNDaGF0UGFuZWwiLCJfdGFicyIsIl9kcmF3ZXJBbGVydHMiLCJfb2JqZWN0aXZlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlDaGF0Qm9keSIsInNldE1lc3NhZ2VzIiwidXNlRWZmZWN0IiwidHJpZ2dlckNoYW5nZSIsIm9mZiIsInRhYnMiLCJUYWIiLCJpbnRlcmFjdGlvbnMiLCJhbGVydHMiLCJvcGVuQ2hhdCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlcyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIkRyYXdlckFsZXJ0IiwicHJvZ3JlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHkiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJjbHNEcmF3ZXIiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiSUNPTlMiLCJ0eXBlcyIsImRlYmF0ZSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZUJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5U3Bva2VuQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZVF1ZXN0aW9uT3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJzZWxlY3RlZCIsIl9xdWVzdGlvbnMiLCJwYXJ0aWNpcGF0aW9uIiwiZGV0YWlsIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlUXVlc3Rpb25zIiwiX2Fuc3dlciIsImF1ZGlvVXJsIiwib3V0cHV0IiwiZmVlZGJhY2siLCJhdWRpbyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJjYWxsYmFjayIsInNldE9wZW4iLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsIm9uQ29uZmlybSIsImFjdGlvbiIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiX2ljb25zMiIsIl9jaGF0VGFiIiwiX3JvdXRpbmciLCJTdHVkZW50RHJhd2VyQ2hhdCIsInN0dWRlbnQiLCJzZXRJdGVtcyIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJvblJlZnJlc2giLCJvbkJhY2siLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiQXBwSWNvbkJ1dHRvbiIsImNvbnN1bWVkIiwib2YiLCJEcmF3ZXIiLCJTdHVkZW50QXNzaWdubWVudFN1bW1hcnkiLCJwZXJjZW50YWdlQXZhaWxhYmxlIiwiQ2xvc2VCdXR0b24iLCJHZW5lcmFsVmlldyIsIl9sYWJlbCIsIl9hY3Rpdml0eUljb24iLCJfc3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlDaGF0Iiwic3VidHlwZSIsIkFjdGl2aXR5SWNvbiIsIk1vZHVsZUFjdGl2aXR5TWVzc2FnZXMiLCJNb2R1bGVBY3Rpdml0eVN0YXR1cyIsIk1vZHVsZUFjdGl2aXR5RGV0YWlscyIsIkljb24iLCJNb2R1bGVBY3Rpdml0eSIsIk1vZHVsZUFjdGl2aXR5U3Bva2VuIiwiTW9kdWxlQWN0aXZpdHlNdWx0aXBsZUNob2ljZSIsImxhYmVsIiwiZG9uZSIsInRvdGFsTWVzc2FnZXMiLCJqb2luIiwibWVzc2FnZUNvdW50ZXIiLCJoYXNBbGVydHMiLCJJY29uSXRlbSIsInBhcnRpY2lwYW50VXJpIiwib3BlbkRyYXdlciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhbHQiLCJfaWNvbkJveCIsIkljb25Cb3giLCJhcyIsIkRyYXdlckFsZXJ0SXRlbSIsIml0ZXJhdGlvbiIsImFzc2lzdGFudCIsIkFQUCIsIkFQUF9OQU1FIiwiUGFnZUNvbnRhaW5lciIsImNsYXNzd29ya3MiLCJEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0IiwiX2RyYXdlciIsIl9kcmF3ZXIyIiwiX2RyYXdlckNoYXQiLCJfd2FsbCIsIkFzaWRlRHJhd2VyIiwic2hvd0RyYXdlciIsInB1c2hTdGF0ZSIsInBvc2l0aW9uIiwid2FsbCIsIldhbGwiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiX3VzZXJEYXRhIiwiSGVhZGVyIiwib3duZXIiLCJvbkNsYXNzcm9vbUNsaWNrIiwiRW50aXR5SW1hZ2UiLCJVc2VyRGF0YSIsImFjdGlvbnMiLCJfZm9ybSIsIl9hY3Rpdml0eUZpbHRlciIsIlN0dWRlbnRzSGVhZGVyIiwibGlzdENscyIsInJlZnJlc2hpbmciLCJzZXRSZWZyZXNoaW5nIiwib25GaWx0ZXIiLCJjdXJyZW50VGFyZ2V0IiwibGlzdCIsInN0dWRlbnRzIiwiSW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwic3R1ZGVudEhlYWRlciIsImRpc2FibGVkIiwiXyIsIl9hc2lkZURyYXdlciIsIl9oZWFkZXIiLCJfZ2VuZXJhbCIsIl9zdHVkZW50SGVhZGVyIiwiX3ZpZXciLCJzZXRUb3RhbFBhcnRpY2lwYW50cyIsInN0YXRlIiwic2V0U3RhdGUiLCJnZXRQcm9wZXJ0aWVzIiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsIlBhZ2VMb2FkZXIiLCJkcmF3ZXJWYWx1ZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsL0RBVEEudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0aWVzLnRzIiwiL3RzL21vZGVsL2FjdGl2aXRpZXMvYWN0aXZpdHkudHMiLCIvdHMvbW9kZWwvaW5kZXgudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvYWN0aXZpdHkudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvc3Bva2VuLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvcGFydGljaXBhbnRzLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wcm92aWRlci50cyIsIi90cy9tb2RlbC9wcm92aWRlci50cyIsIi90eXBlcy50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy80MDQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvY2hhdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2NoYXQtdGFiLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9vYmplY3RpdmVzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2Fuc3dlci50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NoYXQtdGFiLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZHJhd2VyLWNoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9nZW5lcmFsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2RldGFpbHMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2xhYmVsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvc3RhdHVzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWN0aXZpdHktaWNvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lbXB0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pY29uLWJveC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9vYmplY3RpdmUtaWNvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kcmF3ZXIvYXNpZGUtZHJhd2VyLnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvY29udGVudC50c3giLCIvdHMvdmlld3MvZHJhd2VyL3dhbGwudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FjdGl2aXR5LWZpbHRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvc3R1ZGVudC1oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci91c2VyLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSFIsZ0JBQUEsQ0FBQVMsWUFBWSxDQUFDQyxhQUFhLEVBQUU7Y0FFNUIsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBRTNDO1lBRUE7OztZQUdBRSxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFaLEtBQU0sQ0FBQ2EsS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFBLENBQUFoQixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7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