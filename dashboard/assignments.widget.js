System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/ailearn-sdk@1.1.0/config", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/http-suite@0.0.1/api", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.1.0/tracking", "@aimpact/ailearn-sdk@1.1.0/core", "@aimpact/ailearn-app@0.3.16/dashboard-layout.widget", "@beyond-js/kernel@0.1.9/core", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.16/components/ui", "@aimpact/ailearn-app@0.3.16/config", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.3.16/components/icons", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "@beyond-js/kernel@0.1.9/routing", "lodash@4.17.21", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_3 = _beyondJsReact18Widgets113Page;
    }, function (_aimpactReactive001EntitiesItem) {
      dependency_4 = _aimpactReactive001EntitiesItem;
    }, function (_aimpactAilearnSdk110Config) {
      dependency_5 = _aimpactAilearnSdk110Config;
    }, function (_aimpactChatSdk141Session) {
      dependency_6 = _aimpactChatSdk141Session;
    }, function (_aimpactHttpSuite001Api) {
      dependency_7 = _aimpactHttpSuite001Api;
    }, function (_aimpactReactive001Model) {
      dependency_8 = _aimpactReactive001Model;
    }, function (_aimpactAilearnSdk110Tracking) {
      dependency_9 = _aimpactAilearnSdk110Tracking;
    }, function (_aimpactAilearnSdk110Core) {
      dependency_10 = _aimpactAilearnSdk110Core;
    }, function (_aimpactAilearnApp0316DashboardLayoutWidget) {
      dependency_11 = _aimpactAilearnApp0316DashboardLayoutWidget;
    }, function (_beyondJsKernel019Core) {
      dependency_12 = _beyondJsKernel019Core;
    }, function (_beyondJsKernel019Texts) {
      dependency_13 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_14 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_15 = _pragmateUi100Beta7Components;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_16 = _beyondJsReact18Widgets113Hooks;
    }, function (_aimpactAilearnApp0316ComponentsUi) {
      dependency_17 = _aimpactAilearnApp0316ComponentsUi;
    }, function (_aimpactAilearnApp0316Config) {
      dependency_18 = _aimpactAilearnApp0316Config;
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
    }, function (_aimpactAilearnApp0316ComponentsIcons) {
      dependency_25 = _aimpactAilearnApp0316ComponentsIcons;
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
    }, function (_lodash) {
      dependency_32 = _lodash;
    }, function (_pragmateUi100Beta7Form) {
      dependency_33 = _pragmateUi100Beta7Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.16"], ["@aimpact/ailearn-app", "0.3.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.16/dashboard/assignments",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/reactive/entities/item', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/http-suite/api', dependency_7], ['@aimpact/reactive/model', dependency_8], ['@aimpact/ailearn-sdk/tracking', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_11], ['@beyond-js/kernel/core', dependency_12], ['@beyond-js/kernel/texts', dependency_13], ['react', dependency_14], ['pragmate-ui/components', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['pragmate-ui/icons', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/empty', dependency_21], ['pragmate-ui/image', dependency_22], ['pragmate-ui/collapsible', dependency_23], ['pragmate-ui/tooltip', dependency_24], ['@aimpact/ailearn-app/components/icons', dependency_25], ['@aimpact/chat-sdk/chat-component.code', dependency_26], ['@aimpact/chat-sdk/widgets/markdown', dependency_27], ['pragmate-ui/tabs', dependency_28], ['pragmate-ui/modal', dependency_29], ['pragmate-ui/drawer', dependency_30], ['@beyond-js/kernel/routing', dependency_31], ['lodash', dependency_32], ['pragmate-ui/form', dependency_33]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-dashboard-assignments",
        "vspecifier": "@aimpact/ailearn-app@0.3.16/dashboard/assignments.widget",
        "is": "page",
        "route": "/dashboard/${id}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.16/dashboard/assignments.widget');
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
        hash: 1501079645,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _dashboardLayout = require("@aimpact/ailearn-app/dashboard-layout.widget");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          var _model = require("@aimpact/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          //@ts-ignore

          class StoreManager extends _model.ReactiveModel {
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
              _dashboardLayout.LayoutBroker.overlay = true;
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.on('change', this.triggerEvent);
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts.fetch();
              globalThis.store = this;
            }
            async load(id) {
              try {
                if (this.#model && this.#model.id === id) return;
                this.#model = new _tracking.TrackingDashboard({
                  id
                });
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
            async loadUserTracking(userId) {
              try {
                const participant = this.model.participants.map.get(userId);
                await participant.load();
                this.#currentTracking = participant;
                // if (this.#trackings.has(userId)) return this.#trackings.get(userId);
                // this.#currentTracking = Tracking.get({ assignmentId: this.#assignmentId, userId, chat: true });
                // this.#trackings.set(userId, this.#currentTracking);
                // this.#currentTracking.load({ id: this.#assignmentId, userId });
                // this.triggerEvent();
                return this.#currentTracking;
              } catch (e) {
                console.error(e);
              }
            }
            refresh = async () => {
              try {
                this.fetching = true;
                await this.model.load();
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
            /**
             *
             * @param activity DashboardActivity entity
             */
            selectActivity(activity) {
              this.#activitySelected = activity;
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
        hash: 3479951444,
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
              store.loadUserTracking(item.id);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
                  activitySelected: activity.id,
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
        hash: 2704072229,
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
                  activitySelected: activity.id,
                  participant: item
                }
              });
              return false;
            };
            const participantActivity = item.activities.get(activity.id);
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
        hash: 3604324203,
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
            console.log(1, item, item?.activity);
            return null;
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
        hash: 3780676815,
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
          function StudentAssignmentActivityChatBody(props) {
            const {
              item,
              user,
              tracking,
              activityId,
              participant
            } = props;
            const {
              texts,
              setShowDrawer
            } = (0, _context.useDrawerContext)();
            const tActivity = participant.activities.get(activityId);
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
              item.loadChat();
              console.log(5, participant, item);
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
        hash: 693015359,
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
        hash: 3769908235,
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
            activitySelected,
            participant
          }) {
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const hasParticipated = participant.activities.has(activity.id);
            const item = participant.activities.get(activity.id);
            const open = !activitySelected && index === 0 || activitySelected === activity.id;
            const [isDragging, setIsDragging] = React.useState(open);
            const ref = React.useRef(null);
            const onToggle = () => setIsDragging(!isDragging);
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
        hash: 3963458936,
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
              texts,
              store
            } = (0, _context.useDrawerContext)();
            const activity = store.model.activities.get(item.id);
            return React.createElement("div", {
              className: "activity-data-section mt-15"
            }, React.createElement("p", null, activity.description), React.createElement("h6", null, texts.activities.multipleChoice.participation.title), React.createElement("div", {
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
        hash: 1885122332,
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
          /**
           *
           * @param param0  item: ParticipantActivity
           * @returns
           */
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
            const audioUrl = `${_config.default.params.apis.ailearn}/assignments/${store.model.id}/activities/${item.id}/tracking/${user.id}/audio`;
            const output = item?.objectives?.map(objective => {
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
        hash: 3094267707,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityChatTab = StudentAssignmentActivityChatTab;
          var React = require("react");
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
            const ref = React.useRef(null);
            React.useEffect(() => {
              if (!ref.current) return;
              ref.current.addEventListener('scroll', event => {
                event.stopPropagation();
                event.preventDefault();
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
              model: chat,
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
        hash: 379290031,
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
            item
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
            const [credits, setCredits] = React.useState(participant.credits.getProperties());
            const [fetching, setFetching] = React.useState(false);
            const [ready, setReady] = React.useState(participantActivity.chatModel.ready);
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            const onRefresh = async () => {
              setFetching(true);
              await participantActivity.chatModel.loadAll();
              setFetching(false);
            };
            (0, _hooks.useBinder)([participantActivity.chatModel], () => {
              setReady(participantActivity.chatModel.ready);
              setCredits(participant.credits.getProperties());
            });
            if (!participantActivity.chatModel.ready) return null;
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
            }, React.createElement("div", null, React.createElement("h2", null, student.name), credits.total >= 0 ? React.createElement("div", {
              className: "user__credits"
            }, texts.interactions, ": ", credits.consumed, " ", texts.of, " ", credits.total) : null), React.createElement("div", null, React.createElement(_icons.IconButton, {
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

      /************************************************
      INTERNAL MODULE: ./views/assignment/drawer/header
      ************************************************/

      ims.set('./views/assignment/drawer/header', {
        hash: 1645654812,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudetDrawerHeader = StudetDrawerHeader;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var Drawer = require("pragmate-ui/drawer");
          var _icons = require("pragmate-ui/icons");
          var React = require("react");
          var _context = require("../../context");
          function StudetDrawerHeader(props) {
            const {
              item
            } = props;
            const {
              participant,
              tracking,
              activity,
              activitySelected
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
            const [credits, setCredits] = React.useState(participant.credits.getProperties());
            const onRefresh = async () => {
              setFetching(true);
              await item.participant.load();
              setTimeout(() => {
                setItems([...participant.activities.items]);
                setFetching(false);
              }, 1000);
            };
            (0, _hooks.useBinder)([participant], () => {
              setCredits(participant.credits.getProperties());
            });
            return React.createElement(React.Fragment, null, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("div", null, React.createElement("h2", null, student.name), credits.total >= 0 ? React.createElement("div", {
              className: "user__credits"
            }, texts.interactions, ": ", credits.consumed, " ", texts.of, " ", credits.total) : null), React.createElement("div", {
              className: "drawer__header-actions"
            }, React.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle refresh-icon",
              onClick: onRefresh
            }), React.createElement(Drawer.CloseButton, null)))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/assignment/drawer/index
      ***********************************************/

      ims.set('./views/assignment/drawer/index', {
        hash: 626330069,
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
          function StudentAssignmentSummary(props) {
            const {
              item
            } = props;
            const {
              participant,
              tracking,
              activity,
              activitySelected
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
            const [credits, setCredits] = React.useState(participant.credits.getProperties());
            const [ready, setReady] = React.useState(participant.ready);
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
            (0, _hooks.useBinder)([participant], () => {
              setReady(participant.ready);
              setItems([...participant.activities.items]);
              setCredits(participant.credits.getProperties());
            });
            if (!ready) return null;
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: cls
            }, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("div", null, React.createElement("h2", null, student.name), credits.total >= 0 ? React.createElement("div", {
              className: "user__credits"
            }, texts.interactions, ": ", credits.consumed, " ", texts.of, " ", credits.total) : null), React.createElement("div", {
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
                participant,
                activitySelected
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
        hash: 1342881986,
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
              await store.loadUserTracking(participant.user.id);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
                  activitySelected: activity.id,
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
        hash: 4236369841,
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
              store.loadUserTracking(user.id);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
                  activitySelected: activity.id,
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
        hash: 4283006167,
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
              event.stopPropagation();
              store.loadUserTracking(user.id);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
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
        hash: 4061542701,
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
        hash: 2668477207,
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
                  item: showDrawer.data
                }),
                'student-chat': _react.default.createElement(_drawerChat.StudentDrawerChat, {
                  item: showDrawer.data
                }),
                student: _react.default.createElement(_drawer2.StudentAssignmentSummary, {
                  item: showDrawer.data
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
        hash: 3550910537,
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
            }, description)), _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsImRhdGEiLCJzdGF0dXMiLCJhY3Rpdml0aWVzIiwiaXRlbXMiLCJkdXJhdGlvbiIsIm1vZHVsZSIsImNyZWF0b3IiLCJwaG90b1VybCIsIm5hbWUiLCJpZCIsImF1ZGllbmNlIiwiYWkiLCJkZXNjcmlwdGlvbiIsImxhbmd1YWdlIiwidGl0bGUiLCJ0eXBlIiwicGljdHVyZSIsIm9iamVjdGl2ZSIsInB1YmxpYyIsInRpbWVVcGRhdGVkIiwidGltZUNyZWF0ZWQiLCJyZXNvdXJjZXMiLCJzcGVjcyIsImluc3RydWN0aW9ucyIsInJvbGUiLCJvYmplY3RpdmVzIiwibWF0ZXJpYWxzIiwic3ludGhlc2lzIiwiYXJ0aWNsZSIsImR5c2xleGlhIiwic3ViamVjdCIsIm9yZGVyIiwiY2xhc3Nyb29tIiwicGFydGljaXBhbnRzIiwidXNlciIsIm1lc3NhZ2VzIiwiY291bnQiLCJwcm9ncmVzcyIsInN1bW1hcnkiLCJpY29uIiwidUpWeFJkSWpyR01nT1luVEZzRUtnOVVGeDBaMiIsIl9hY3Rpdml0eSIsIkFzc2lnbm1lbnRBY3Rpdml0aWVzIiwibWFwIiwiTWFwIiwiZGFzaGJvYXJkIiwiY29uc3RydWN0b3IiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJzZXQiLCJwdXNoIiwiaGFzIiwiX2l0ZW0iLCJJdGVtIiwicGFydGljaXBhbnRzTWFwIiwiZW50aXR5IiwicHJvcGVydGllcyIsImFkZFBhcnRpY2lwYW50IiwicGFydGljaXBhbnQiLCJnZXRQYXJ0aWNpcGFudCIsImhhc1BhcnRpY2lwYW50IiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9tb2RlbCIsIl9hY3Rpdml0aWVzIiwiX3BhcnRpY2lwYW50cyIsIkRhc2hib2FyZCIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJlcnJvciIsInRvdGFsUGFydGljaXBhbnRzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInRvdGFsTXVsdGlwbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwidG90YWxTcG9rZW4iLCJpc1VzZXJDcmVhdG9yIiwic2Vzc2lvbldyYXBwZXIiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJQYXJ0aWNpcGFudHMiLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiYmVhcmVyIiwidG9rZW4iLCJyZXNwb25zZSIsIkVycm9yIiwidGV4dCIsImZvdW5kIiwicmVhZHkiLCJkYXNoYm9hcmRJZCIsImFkZENyZWRpdHMiLCJ0cmFja2luZyIsInBvc3QiLCJjcmVkaXRzIiwiYXJjaGl2ZSIsInJlc3RvcmUiLCJQYXJ0aWNpcGFudEFjdGl2aXR5IiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlBhcnRpY2lwYW50QWN0aXZpdGllcyIsInBhcmVudCIsInZhbHVlcyIsImFjdGl2aXR5IiwiZ2V0QWN0aXZpdHlJbnN0YW5jZSIsInVwZGF0ZSIsImJpbmQiLCJPYmplY3RzIiwic3Bva2VuIiwiUGFydGljaXBhbnRTcG9rZW5BY3Rpdml0eSIsImRldGF1bHQiLCJQYXJ0aWNpcGFudE11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJBY3Rpdml0eSIsIml0ZW0iLCJxdWVzdGlvbnMiLCJKU09OIiwicGFyc2UiLCJhc3Nlc3NtZW50IiwiZSIsImNvbnNvbGUiLCJ3YXJuIiwicGFydGljaXBhdGlvbkRhdGEiLCJxdWVzdGlvbiIsImluZGV4IiwiYW5zd2VyIiwicmVzcG9uc2VzIiwiYWNjdXJhY3kiLCJpY29ucyIsImtleSIsInRvdGFsUG9pbnRzIiwicG9pbnRzIiwiYXR0ZW1wdHMiLCJ0cmFuc2NyaXB0aW9uIiwib2JqZWN0aXZlc0tleXMiLCJfdHJhY2tpbmciLCJfY29sbGVjdGlvbiIsIl9wcm92aWRlciIsIlBhcnRpY2lwYW50IiwiYXNzaWdubWVudElkIiwicHJvdmlkZXIiLCJQYXJ0aWNpcGFudFByb3ZpZGVyIiwiVHJhY2tpbmciLCJ1c2VySWQiLCJjaGF0IiwiYXJncyIsInVpZCIsIl9wYXJ0aWNpcGFudCIsImFycmF5SXRlbXMiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwicHJvY2Vzc0xvYWQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2Rhc2hib2FyZExheW91dCIsIl9jb3JlIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiaXNTdG9yZSIsImFjdGl2aXR5U2VsZWN0ZWQiLCJjdXJyZW50VHJhY2tpbmciLCJzZXNzaW9uIiwidmlldyIsImFzc2lnbm1lbnQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsInNwZWNpZmllciIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJnbG9iYWxUZXh0cyIsInVzZXJzIiwidHJhY2tpbmdzIiwidHJpZ2dlckV2ZW50IiwiTGF5b3V0QnJva2VyIiwic2V0TW9kZWwiLCJvdmVybGF5Iiwib24iLCJmZXRjaCIsIlRyYWNraW5nRGFzaGJvYXJkIiwiZmV0Y2hpbmciLCJtIiwicmVmcmVzaCIsImJhY2tMaW5rIiwiYnJlYWRjcnVtYiIsImVudGl0aWVzIiwiY2xhc3Nyb29tcyIsImxvZyIsImxvYWRVc2VyVHJhY2tpbmciLCJ0cmlnZ2VyIiwicmVmcmVzaERyYXdlciIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImNoYXRNb2RlbCIsImxvYWRBbGwiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsInJlZnJlc2hUcmFja2luZyIsInNlbGVjdEFjdGl2aXR5IiwiX3JlYWN0IiwiTm90Rm91bmQiLCJjb2RlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9ob29rcyIsIkRhc2hib2FyZEFjdGlvbnMiLCJzZXRTaG93RHJhd2VyIiwidXNlRGFzaGJvYXJkQ29udGV4dCIsInNldFVwZGF0ZSIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJvbkNsaWNrIiwidXNlQmluZGVyIiwiYWN0aW9uVGV4dCIsImFyY2hpdmVkIiwiYWN0aW9uIiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsImFjdGlvbnMiLCJ3YWxsIiwiX3VpIiwiRW1wdHlNYXRlcmlhbCIsIm1lc3NhZ2UiLCJlbXB0eSIsIkVtcHR5Q2FyZCIsIl9pY29ucyIsIl9saXN0IiwiX2VtcHR5IiwiQWN0aXZpdHlWaWV3Iiwic2V0VmlldyIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwib25DbG9zZSIsInVuZGVmaW5lZCIsIkljb25CdXR0b24iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpc3QiLCJjb250cm9sIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCIsImZhbHNlIiwiRW1wdHkiLCJfaW1hZ2UiLCJfY29sbGFwc2libGUiLCJfb2JqZWN0aXZlSWNvbiIsIl9vYmplY3RpdmUiLCJDaGF0QWN0aXZpdHlQYXJ0aWNpcGFudCIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwiYW5hbHlzaXMiLCJvblRvZ2dsZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsInRvZ2dsZWFibGUiLCJvcGVuIiwiQ29sbGFwc2libGVIZWFkZXIiLCJJbWFnZSIsInNyYyIsIkxpbmsiLCJocmVmIiwibm9TdW1tYXJ5IiwiQWN0aXZpdHlPYmplY3RpdmVTdGF0dXNJY29uIiwiQ29sbGFwc2libGVDb250ZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZSIsIl9jaGF0IiwiU3Bva2VuQWN0aXZpdHlQYXJ0aWNpcGFudCIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlQYXJ0aWNpcGFudCIsIm11bHRpcGxlQ2hvaWNlIiwicGFydGljaXBhbnRBY3Rpdml0eSIsImNvcnJlY3QiLCJ0b3RhbCIsIndyb25nIiwiY291bnRlcnMiLCJjbHMiLCJSZWFjdCIsImljb25OYW1lcyIsInBlbmRpbmciLCJjb21wbGV0ZWQiLCJvdXRzdGFuZGluZyIsIm9iamVjdGl2ZXNTdGF0dXMiLCJBcHBJY29uIiwibm9BbmFseXNpcyIsIl90b29sdGlwIiwiYWN0aXZpdHlJZCIsIkljb25TdGF0ZSIsIlRvb2x0aXAiLCJjb250ZW50IiwiX2NoYXRDb21wb25lbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdFRhYiIsInVzZURyYXdlckNvbnRleHQiLCJyZWYiLCJ1c2VSZWYiLCJ0QWN0aXZpdHkiLCJjaGF0SWQiLCJFbXB0eUNoYXQiLCJzbGljZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJBZ2VudHNDaGF0UGFuZWwiLCJfdGFicyIsIl9kcmF3ZXJBbGVydHMiLCJfb2JqZWN0aXZlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlDaGF0Qm9keSIsInByb3BzIiwic2V0TWVzc2FnZXMiLCJ1c2VFZmZlY3QiLCJ0cmlnZ2VyQ2hhbmdlIiwib2ZmIiwidGFicyIsIlRhYiIsImludGVyYWN0aW9ucyIsImFsZXJ0cyIsIm9wZW5DaGF0IiwibG9hZENoYXQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZXMiLCJ2YXJpYW50IiwiRHJhd2VyQWxlcnQiLCJwcm9ncmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eSIsImhhc1BhcnRpY2lwYXRlZCIsImNsc0RyYXdlciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJJQ09OUyIsInR5cGVzIiwiZGViYXRlIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlTcG9rZW5Cb2R5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlUXVlc3Rpb25PcHRpb25zIiwiY29ycmVjdEFuc3dlciIsInNlbGVjdGVkIiwiX3F1ZXN0aW9ucyIsInBhcnRpY2lwYXRpb24iLCJkZXRhaWwiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbnMiLCJfYW5zd2VyIiwiYXVkaW9VcmwiLCJvdXRwdXQiLCJmZWVkYmFjayIsImF1ZGlvIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJhZGRFdmVudExpc3RlbmVyIiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsImNhbGxiYWNrIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiQ29uZmlybU1vZGFsIiwib25DYW5jZWwiLCJfaWNvbnMyIiwiX2NoYXRUYWIiLCJfcm91dGluZyIsIlN0dWRlbnREcmF3ZXJDaGF0Iiwic3R1ZGVudCIsInNldENyZWRpdHMiLCJnZXRQcm9wZXJ0aWVzIiwic2V0UmVhZHkiLCJvblJlZnJlc2giLCJvbkJhY2siLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiQXBwSWNvbkJ1dHRvbiIsImNvbnN1bWVkIiwib2YiLCJEcmF3ZXIiLCJTdHVkZXREcmF3ZXJIZWFkZXIiLCJzZXRJdGVtcyIsIkNsb3NlQnV0dG9uIiwiU3R1ZGVudEFzc2lnbm1lbnRTdW1tYXJ5IiwiR2VuZXJhbFZpZXciLCJfbGFiZWwiLCJfYWN0aXZpdHlJY29uIiwiX3N0YXR1cyIsIk1vZHVsZUFjdGl2aXR5Q2hhdCIsInN1YnR5cGUiLCJBY3Rpdml0eUljb24iLCJNb2R1bGVBY3Rpdml0eU1lc3NhZ2VzIiwiTW9kdWxlQWN0aXZpdHlTdGF0dXMiLCJNb2R1bGVBY3Rpdml0eURldGFpbHMiLCJJY29uIiwiTW9kdWxlQWN0aXZpdHkiLCJNb2R1bGVBY3Rpdml0eVNwb2tlbiIsIk1vZHVsZUFjdGl2aXR5TXVsdGlwbGVDaG9pY2UiLCJsYWJlbCIsImRvbmUiLCJ0b3RhbE1lc3NhZ2VzIiwiam9pbiIsIm1lc3NhZ2VDb3VudGVyIiwiaGFzQWxlcnRzIiwiSWNvbkl0ZW0iLCJwYXJ0aWNpcGFudFVyaSIsIm9wZW5EcmF3ZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWx0IiwiX2ljb25Cb3giLCJJY29uQm94IiwiYXMiLCJEcmF3ZXJBbGVydEl0ZW0iLCJfbWFya2Rvd24iLCJpdGVyYXRpb24iLCJhc3Npc3RhbnQiLCJNYXJrZG93biIsIm5vTWVzc2FnZXMiLCJfYWN0aW9ucyIsIl9oZWFkZXIiLCJBUFAiLCJBUFBfTkFNRSIsIkRhc2hib2FyZENvbnRleHQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXIiLCJjbGFzc3dvcmtzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0IiwiX2RyYXdlciIsIl9kcmF3ZXIyIiwiX2RyYXdlckNoYXQiLCJfd2FsbCIsIkFzaWRlRHJhd2VyIiwic2hvd0RyYXdlciIsInB1c2hTdGF0ZSIsInBvc2l0aW9uIiwiV2FsbCIsIkFjdGl2aXR5RmlsdGVyIiwiaGFuZGxlQ2xpY2siLCJfdXNlckRhdGEiLCJvd25lciIsIm9uQ2xhc3Nyb29tQ2xpY2siLCJFbnRpdHlJbWFnZSIsIlVzZXJEYXRhIiwiX2Zvcm0iLCJfYWN0aXZpdHlGaWx0ZXIiLCJTdHVkZW50c0hlYWRlciIsImxpc3RDbHMiLCJyZWZyZXNoaW5nIiwic2V0UmVmcmVzaGluZyIsIm9uRmlsdGVyIiwiY3VycmVudFRhcmdldCIsImxpc3QiLCJzdHVkZW50cyIsIklucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsInN0dWRlbnRIZWFkZXIiLCJfIiwiX2FzaWRlRHJhd2VyIiwiX3ZpZXciLCJfZ2VuZXJhbCIsIl9zdHVkZW50SGVhZGVyIiwic2V0VG90YWxQYXJ0aWNpcGFudHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiUGFnZUxvYWRlciIsImRyYXdlclZhbHVlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvREFUQS50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXRpZXMudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9zcG9rZW4udHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudHMudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3Byb3ZpZGVyLnRzIiwiL3RzL21vZGVsL3Byb3ZpZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvYW5zd2VyLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9kcmF3ZXItY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2hlYWRlci50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZ2VuZXJhbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2NoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9kZXRhaWxzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9sYWJlbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L3N0YXR1cy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FjdGl2aXR5LWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaWNvbi1ib3gudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb2JqZWN0aXZlLWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZHJhd2VyL2FzaWRlLWRyYXdlci50c3giLCIvdHMvdmlld3MvZHJhd2VyL2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci93YWxsLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hY3Rpdml0eS1maWx0ZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaGVhZGVyL3N0dWRlbnQtaGVhZGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvdXNlci1kYXRhLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJ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