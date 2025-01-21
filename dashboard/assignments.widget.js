System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/dashboard-layout.widget", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/reactive@0.0.1/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-sdk@1.0.0/tracking", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/ailearn-app@0.3.1/components/navbar-header.code", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.1/config", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/list", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
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
    }, function (_aimpactAilearnSdk100Core) {
      dependency_11 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Texts) {
      dependency_12 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Core) {
      dependency_13 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_14 = _react2;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_15 = _aimpactAilearnApp031ComponentsUi;
    }, function (_aimpactAilearnApp031ComponentsNavbarHeaderCode) {
      dependency_16 = _aimpactAilearnApp031ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_17 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp031Config) {
      dependency_18 = _aimpactAilearnApp031Config;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_19 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7List) {
      dependency_20 = _pragmateUi100Beta7List;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_21 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Components) {
      dependency_22 = _pragmateUi100Beta7Components;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/reactive/entities/item', dependency_5], ['@aimpact/reactive/model', dependency_6], ['@aimpact/http-suite/api', dependency_7], ['@aimpact/ailearn-sdk/config', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-sdk/tracking', dependency_10], ['@aimpact/ailearn-sdk/core', dependency_11], ['@beyond-js/kernel/texts', dependency_12], ['@beyond-js/kernel/core', dependency_13], ['react', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['pragmate-ui/empty', dependency_19], ['pragmate-ui/list', dependency_20], ['@beyond-js/react-18-widgets/hooks', dependency_21], ['pragmate-ui/components', dependency_22], ['pragmate-ui/image', dependency_23], ['pragmate-ui/collapsible', dependency_24], ['pragmate-ui/tooltip', dependency_25], ['@aimpact/ailearn-app/components/icons', dependency_26], ['@aimpact/chat-sdk/chat-component.code', dependency_27], ['@aimpact/chat-sdk/widgets/markdown', dependency_28], ['pragmate-ui/tabs', dependency_29], ['pragmate-ui/modal', dependency_30], ['pragmate-ui/drawer', dependency_31], ['@beyond-js/kernel/routing', dependency_32], ['pragmate-ui/form', dependency_33]]);
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
        hash: 610331744,
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
        hash: 1882306570,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Provider = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/http-suite/api");
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
        hash: 2335593802,
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
        hash: 3101926007,
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
        hash: 3324742386,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJhZGRDcmVkaXRzIiwidHJhY2tpbmciLCJwb3N0IiwiY3JlZGl0cyIsIlBhcnRpY2lwYW50QWN0aXZpdHkiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiUGFydGljaXBhbnRBY3Rpdml0aWVzIiwicGFyZW50IiwidmFsdWVzIiwiYWN0aXZpdHkiLCJnZXRBY3Rpdml0eUluc3RhbmNlIiwidXBkYXRlIiwiYmluZCIsIk9iamVjdHMiLCJzcG9rZW4iLCJQYXJ0aWNpcGFudFNwb2tlbkFjdGl2aXR5IiwiZGV0YXVsdCIsIlBhcnRpY2lwYW50TXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsIkFjdGl2aXR5IiwiaXRlbSIsInF1ZXN0aW9ucyIsIkpTT04iLCJwYXJzZSIsImFzc2Vzc21lbnQiLCJlIiwiY29uc29sZSIsIndhcm4iLCJwYXJ0aWNpcGF0aW9uRGF0YSIsInF1ZXN0aW9uIiwiaW5kZXgiLCJhbnN3ZXIiLCJyZXNwb25zZXMiLCJhY2N1cmFjeSIsImljb25zIiwia2V5IiwidG90YWxQb2ludHMiLCJwb2ludHMiLCJhdHRlbXB0cyIsInRyYW5zY3JpcHRpb24iLCJvYmplY3RpdmVzS2V5cyIsIl90cmFja2luZyIsIl9jb2xsZWN0aW9uIiwiX3Byb3ZpZGVyIiwiUGFydGljaXBhbnQiLCJhc3NpZ25tZW50SWQiLCJwcm92aWRlciIsIlBhcnRpY2lwYW50UHJvdmlkZXIiLCJUcmFja2luZyIsInVzZXJJZCIsImNoYXQiLCJhcmdzIiwiX3BhcnRpY2lwYW50IiwiYXJyYXlJdGVtcyIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJwcm9jZXNzTG9hZCIsIlByb3ZpZGVyIiwidHJhY2tpbmdJZCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbW9kZWwyIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvcmUiLCJpc1N0b3JlIiwiYWN0aXZpdHlTZWxlY3RlZCIsImN1cnJlbnRUcmFja2luZyIsInNlc3Npb24iLCJ2aWV3IiwiYXNzaWdubWVudCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwic3BlY2lmaWVyIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInVzZXJzIiwidHJhY2tpbmdzIiwidHJpZ2dlckV2ZW50Iiwib24iLCJzZXRNb2RlbCIsImZldGNoaW5nIiwibSIsImxvZyIsImxvYWRVc2VyVHJhY2tpbmciLCJyZWZyZXNoIiwidHJpZ2dlciIsInJlZnJlc2hEcmF3ZXIiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJjaGF0TW9kZWwiLCJsb2FkQWxsIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJyZWZyZXNoVHJhY2tpbmciLCJzZWxlY3RBY3Rpdml0eSIsIl9yZWFjdCIsIk5vdEZvdW5kIiwiY29kZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl91aSIsIl9jb250ZXh0IiwiRW1wdHlNYXRlcmlhbCIsIm1lc3NhZ2UiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwiZW1wdHkiLCJFbXB0eUNhcmQiLCJjbGFzc05hbWUiLCJfaWNvbnMiLCJfbGlzdCIsIl9lbXB0eSIsIl9ob29rcyIsIl9jb21wb25lbnRzIiwiQWN0aXZpdHlWaWV3Iiwic2V0VmlldyIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwidXNlU3RhdGUiLCJvbkNsb3NlIiwidW5kZWZpbmVkIiwidXNlQmluZGVyIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpc3QiLCJjb250cm9sIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCIsImZhbHNlIiwiRW1wdHkiLCJfaW1hZ2UiLCJfY29sbGFwc2libGUiLCJfb2JqZWN0aXZlSWNvbiIsIl9vYmplY3RpdmUiLCJDaGF0QWN0aXZpdHlQYXJ0aWNpcGFudCIsInNldFNob3dEcmF3ZXIiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsImFuYWx5c2lzIiwib25Ub2dnbGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiQ29sbGFwc2libGVDb250YWluZXIiLCJ0b2dnbGVhYmxlIiwib3BlbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSW1hZ2UiLCJzcmMiLCJMaW5rIiwiaHJlZiIsIm5vU3VtbWFyeSIsIkFjdGl2aXR5T2JqZWN0aXZlU3RhdHVzSWNvbiIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlPYmplY3RpdmUiLCJfY2hhdCIsIlNwb2tlbkFjdGl2aXR5UGFydGljaXBhbnQiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5UGFydGljaXBhbnQiLCJfdG9vbHRpcCIsIm11bHRpcGxlQ2hvaWNlIiwiYWN0aXZpdHlJZCIsInBhcnRpY2lwYW50QWN0aXZpdHkiLCJJY29uU3RhdGUiLCJUb29sdGlwIiwiY29udGVudCIsImNvcnJlY3QiLCJ0b3RhbCIsIndyb25nIiwiY291bnRlcnMiLCJjbHMiLCJSZWFjdCIsImljb25OYW1lcyIsInBlbmRpbmciLCJjb21wbGV0ZWQiLCJvdXRzdGFuZGluZyIsIm9iamVjdGl2ZXNTdGF0dXMiLCJBcHBJY29uIiwibm9BbmFseXNpcyIsIl9jaGF0Q29tcG9uZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRUYWIiLCJ1c2VEcmF3ZXJDb250ZXh0IiwicmVmIiwidXNlUmVmIiwidEFjdGl2aXR5IiwiY2hhdElkIiwiRW1wdHlDaGF0Iiwic2xpY2UiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiQWdlbnRzQ2hhdFBhbmVsIiwiX3RhYnMiLCJfZHJhd2VyQWxlcnRzIiwiX29iamVjdGl2ZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdEJvZHkiLCJzZXRNZXNzYWdlcyIsInVzZUVmZmVjdCIsInRyaWdnZXJDaGFuZ2UiLCJvZmYiLCJ0YWJzIiwiVGFiIiwiaW50ZXJhY3Rpb25zIiwiYWxlcnRzIiwib3BlbkNoYXQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZXMiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJEcmF3ZXJBbGVydCIsInByb2dyZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5IiwiaGFzUGFydGljaXBhdGVkIiwiY2xzRHJhd2VyIiwiY3VycmVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIklDT05TIiwidHlwZXMiLCJkZWJhdGUiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VCb2R5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eVNwb2tlbkJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbk9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwic2VsZWN0ZWQiLCJfcXVlc3Rpb25zIiwicGFydGljaXBhdGlvbiIsImRldGFpbCIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZVF1ZXN0aW9ucyIsIl9hbnN3ZXIiLCJhdWRpb1VybCIsIm91dHB1dCIsImZlZWRiYWNrIiwiYXVkaW8iLCJBdWRpb1BsYXllciIsInVybCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfbW9kYWwiLCJDb25maXJtQWN0aW9uIiwiY2FsbGJhY2siLCJzZXRPcGVuIiwidG9nZ2xlT3BlbiIsIm9uQ2xpY2tCdXR0b24iLCJvbkNvbmZpcm0iLCJhY3Rpb24iLCJDb25maXJtTW9kYWwiLCJvbkNhbmNlbCIsIl9pY29uczIiLCJfY2hhdFRhYiIsIl9yb3V0aW5nIiwiU3R1ZGVudERyYXdlckNoYXQiLCJzdHVkZW50Iiwic2V0SXRlbXMiLCJzZXRGZXRjaGluZyIsInNldFJlYWR5Iiwib25SZWZyZXNoIiwib25CYWNrIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsIkFwcEljb25CdXR0b24iLCJjb25zdW1lZCIsIm9mIiwiRHJhd2VyIiwiU3R1ZGVudEFzc2lnbm1lbnRTdW1tYXJ5IiwiQ2xvc2VCdXR0b24iLCJHZW5lcmFsVmlldyIsIl9sYWJlbCIsIl9hY3Rpdml0eUljb24iLCJfc3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlDaGF0Iiwic3VidHlwZSIsIkFjdGl2aXR5SWNvbiIsIk1vZHVsZUFjdGl2aXR5TWVzc2FnZXMiLCJNb2R1bGVBY3Rpdml0eVN0YXR1cyIsIk1vZHVsZUFjdGl2aXR5RGV0YWlscyIsIkljb24iLCJNb2R1bGVBY3Rpdml0eSIsIk1vZHVsZUFjdGl2aXR5U3Bva2VuIiwiTW9kdWxlQWN0aXZpdHlNdWx0aXBsZUNob2ljZSIsImxhYmVsIiwiZG9uZSIsInRvdGFsTWVzc2FnZXMiLCJqb2luIiwibWVzc2FnZUNvdW50ZXIiLCJoYXNBbGVydHMiLCJJY29uSXRlbSIsInBhcnRpY2lwYW50VXJpIiwib3BlbkRyYXdlciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhbHQiLCJfaWNvbkJveCIsIkljb25Cb3giLCJhcyIsIkRyYXdlckFsZXJ0SXRlbSIsIml0ZXJhdGlvbiIsImFzc2lzdGFudCIsIkFQUCIsIkFQUF9OQU1FIiwiUGFnZUNvbnRhaW5lciIsImNsYXNzd29ya3MiLCJEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0IiwiX2RyYXdlciIsIl9kcmF3ZXIyIiwiX2RyYXdlckNoYXQiLCJfd2FsbCIsIkFzaWRlRHJhd2VyIiwic2hvd0RyYXdlciIsInB1c2hTdGF0ZSIsInBvc2l0aW9uIiwid2FsbCIsIldhbGwiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiX3VzZXJEYXRhIiwiSGVhZGVyIiwib3duZXIiLCJvbkNsYXNzcm9vbUNsaWNrIiwiRW50aXR5SW1hZ2UiLCJVc2VyRGF0YSIsImFjdGlvbnMiLCJfZm9ybSIsIl9hY3Rpdml0eUZpbHRlciIsIlN0dWRlbnRzSGVhZGVyIiwibGlzdENscyIsInJlZnJlc2hpbmciLCJzZXRSZWZyZXNoaW5nIiwib25GaWx0ZXIiLCJjdXJyZW50VGFyZ2V0IiwibGlzdCIsInN0dWRlbnRzIiwiSW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwic3R1ZGVudEhlYWRlciIsImRpc2FibGVkIiwiXyIsIl9hc2lkZURyYXdlciIsIl9oZWFkZXIiLCJfZ2VuZXJhbCIsIl9zdHVkZW50SGVhZGVyIiwiX3ZpZXciLCJzZXRUb3RhbFBhcnRpY2lwYW50cyIsInN0YXRlIiwic2V0U3RhdGUiLCJnZXRQcm9wZXJ0aWVzIiwiUGFnZUxvYWRlciIsImRyYXdlclZhbHVlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvREFUQS50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXRpZXMudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9zcG9rZW4udHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudHMudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3Byb3ZpZGVyLnRzIiwiL3RzL21vZGVsL3Byb3ZpZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvYW5zd2VyLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9kcmF3ZXItY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2dlbmVyYWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvZGV0YWlscy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hY3Rpdml0eS1pY29uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2ljb24tYm94LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29iamVjdGl2ZS1pY29uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RyYXdlci9hc2lkZS1kcmF3ZXIudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9jb250ZW50LnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvd2FsbC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYWN0aXZpdHktZmlsdGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9zdHVkZW50LWhlYWRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL3VzZXItZGF0YS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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