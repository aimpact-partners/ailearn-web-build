System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/reactive@0.0.1/entities/item", "@aimpact/ailearn-sdk@1.1.0/config", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/http-suite@0.0.1/api", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.1.0/tracking", "@aimpact/ailearn-sdk@1.1.0/core", "@aimpact/ailearn-app@0.3.16/dashboard-layout.widget", "@beyond-js/kernel@0.1.9/core", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.16/components/ui", "@aimpact/ailearn-app@0.3.16/config", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.3.16/components/icons", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "lodash@4.17.21", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
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
    }, function (_lodash) {
      dependency_31 = _lodash;
    }, function (_beyondJsKernel019Routing) {
      dependency_32 = _beyondJsKernel019Routing;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/reactive/entities/item', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/http-suite/api', dependency_7], ['@aimpact/reactive/model', dependency_8], ['@aimpact/ailearn-sdk/tracking', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_11], ['@beyond-js/kernel/core', dependency_12], ['@beyond-js/kernel/texts', dependency_13], ['react', dependency_14], ['pragmate-ui/components', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['pragmate-ui/icons', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/empty', dependency_21], ['pragmate-ui/image', dependency_22], ['pragmate-ui/collapsible', dependency_23], ['pragmate-ui/tooltip', dependency_24], ['@aimpact/ailearn-app/components/icons', dependency_25], ['@aimpact/chat-sdk/chat-component.code', dependency_26], ['@aimpact/chat-sdk/widgets/markdown', dependency_27], ['pragmate-ui/tabs', dependency_28], ['pragmate-ui/modal', dependency_29], ['pragmate-ui/drawer', dependency_30], ['lodash', dependency_31], ['@beyond-js/kernel/routing', dependency_32], ['pragmate-ui/form', dependency_33]]);
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
        hash: 1207649057,
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
        hash: 2122987888,
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
        hash: 1522615955,
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
              className: "activity-data-section"
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
        hash: 3248460129,
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
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useDrawerContext)();
            const activity = store.model.activities.get(item.id);
            console.log(9, item);
            return React.createElement("div", {
              className: "activity-data-section"
            }, React.createElement("p", null, activity.description), React.createElement("h6", null, texts.activities.multipleChoice.participation.title), React.createElement("div", {
              className: "multiple-choice__container"
            }, React.createElement("h6", null, texts.activities.multipleChoice.participation.detail, ": ", item.counters.correct, "/", item.counters.total), React.createElement(_list.List, {
              className: "multiple-choice__list questions-list",
              items: item.assessment.questions,
              control: _questions.StudentAssignmentActivityMultipleChoiceQuestions
            })));
          }
        }
      });

      /****************************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/multiple-choice/questions
      ****************************************************************************/

      ims.set('./views/assignment/drawer/activity/multiple-choice/questions', {
        hash: 2792998688,
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
        hash: 3395552193,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentDrawerChat = StudentDrawerChat;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _headerSkeleton = require("../../drawer/header-skeleton");
          var _chatTab = require("./chat-tab");
          var _header = require("./header");
          function StudentDrawerChat({
            item
          }) {
            const {
              tracking,
              participantActivity
            } = item;
            const [ready, setReady] = React.useState(participantActivity.chatModel.ready);
            (0, _hooks.useBinder)([participantActivity.chatModel], () => {
              setReady(participantActivity.chatModel.ready);
            });
            if (!participantActivity.chatModel.ready) return React.createElement(_headerSkeleton.DrawerSkeleton, {
              item: item
            });
            return React.createElement("div", {
              className: "ds-drawer-container"
            }, React.createElement(_header.StudentDrawerHeader, {
              item: item,
              showActivity: true
            }), React.createElement(_chatTab.StudentAssignmentActivityChatTab, {
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
        hash: 3577829344,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentDrawerHeader = StudentDrawerHeader;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var Drawer = require("pragmate-ui/drawer");
          var _icons = require("pragmate-ui/icons");
          var React = require("react");
          var _context = require("../../context");
          function StudentDrawerHeader(props) {
            const {
              item,
              showCredits = false,
              showActivity = false,
              onRefresh
            } = props;
            const {
              participant,
              participantActivity
            } = item;
            const activity = participantActivity?.activity;
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const {
              user: student
            } = participant;
            const [credits, setCredits] = React.useState(participant.credits.getProperties());
            (0, _hooks.useBinder)([participant], () => {
              setCredits(participant.credits.getProperties());
            });
            return React.createElement(React.Fragment, null, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("div", null, React.createElement("h2", null, student.name), showCredits && credits.total ? React.createElement("div", {
              className: "drawer__header__subtext"
            }, texts.interactions, ": ", credits.consumed, " ", texts.of, " ", credits.total) : null, showActivity && activity ? React.createElement("div", {
              className: "drawer__header__subtext"
            }, activity.title) : null), React.createElement("div", {
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
        hash: 307837461,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentSummary = StudentAssignmentSummary;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _list = require("pragmate-ui/list");
          var React = require("react");
          var _context = require("../../context");
          var _activity = require("./activity");
          var _empty = require("./empty");
          var _header = require("./header");
          var _headerSkeleton = require("../../drawer/header-skeleton");
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
            (0, _hooks.useBinder)([participant], () => {
              setReady(participant.ready);
              setItems([...participant.activities.items]);
              setCredits(participant.credits.getProperties());
            });
            if (!ready) return React.createElement(_headerSkeleton.DrawerSkeleton, {
              item: item
            });
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: cls
            }, React.createElement(_header.StudentDrawerHeader, {
              item: item,
              showCredits: true
            }), React.createElement("section", {
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

      /**********************************************
      INTERNAL MODULE: ./views/drawer/header-skeleton
      **********************************************/

      ims.set('./views/drawer/header-skeleton', {
        hash: 3380651438,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DrawerSkeleton = DrawerSkeleton;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var Drawer = require("pragmate-ui/drawer");
          var _icons = require("pragmate-ui/icons");
          var React = require("react");
          function DrawerSkeleton({
            item
          }) {
            return React.createElement(React.Fragment, null, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("div", null, React.createElement("h2", null, item?.participant?.user?.name ? React.createElement(React.Fragment, null, item.participant.user.name) : React.createElement(_ui.SkeletonText, {
              height: "8px",
              width: "100px"
            })), React.createElement("div", {
              className: "drawer__header__subtext"
            }, React.createElement(_ui.SkeletonText, {
              height: "11px",
              width: "100px",
              color: "#fff"
            }))), React.createElement("div", {
              className: "drawer__header-actions"
            }, React.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle refresh-icon",
              disabled: true
            }), React.createElement(Drawer.CloseButton, null)))));
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
        hash: 1820096290,
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
              model
            } = (0, _context.useDashboardContext)();
            const {
              title,
              description,
              picture,
              creator,
              owner
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
            }, model.classroom.name)), _react.default.createElement("div", {
              className: "users-data__container"
            }, creator && _react.default.createElement(_userData.UserData, {
              data: creator,
              label: "Creator"
            }), owner && _react.default.createElement(_userData.UserData, {
              data: creator,
              label: "Owner"
            }))))))), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("div", {
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
        hash: 902094316,
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
            }, _react.default.createElement("section", null, _react.default.createElement(_form.Input, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsImRhdGEiLCJzdGF0dXMiLCJhY3Rpdml0aWVzIiwiaXRlbXMiLCJkdXJhdGlvbiIsIm1vZHVsZSIsImNyZWF0b3IiLCJwaG90b1VybCIsIm5hbWUiLCJpZCIsImF1ZGllbmNlIiwiYWkiLCJkZXNjcmlwdGlvbiIsImxhbmd1YWdlIiwidGl0bGUiLCJ0eXBlIiwicGljdHVyZSIsIm9iamVjdGl2ZSIsInB1YmxpYyIsInRpbWVVcGRhdGVkIiwidGltZUNyZWF0ZWQiLCJyZXNvdXJjZXMiLCJzcGVjcyIsImluc3RydWN0aW9ucyIsInJvbGUiLCJvYmplY3RpdmVzIiwibWF0ZXJpYWxzIiwic3ludGhlc2lzIiwiYXJ0aWNsZSIsImR5c2xleGlhIiwic3ViamVjdCIsIm9yZGVyIiwiY2xhc3Nyb29tIiwicGFydGljaXBhbnRzIiwidXNlciIsIm1lc3NhZ2VzIiwiY291bnQiLCJwcm9ncmVzcyIsInN1bW1hcnkiLCJpY29uIiwidUpWeFJkSWpyR01nT1luVEZzRUtnOVVGeDBaMiIsIl9hY3Rpdml0eSIsIkFzc2lnbm1lbnRBY3Rpdml0aWVzIiwibWFwIiwiTWFwIiwiZGFzaGJvYXJkIiwiY29uc3RydWN0b3IiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJzZXQiLCJwdXNoIiwiaGFzIiwiX2l0ZW0iLCJJdGVtIiwicGFydGljaXBhbnRzTWFwIiwiZW50aXR5IiwicHJvcGVydGllcyIsImFkZFBhcnRpY2lwYW50IiwicGFydGljaXBhbnQiLCJnZXRQYXJ0aWNpcGFudCIsImhhc1BhcnRpY2lwYW50IiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9tb2RlbCIsIl9hY3Rpdml0aWVzIiwiX3BhcnRpY2lwYW50cyIsIkRhc2hib2FyZCIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJlcnJvciIsInRvdGFsUGFydGljaXBhbnRzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInRvdGFsTXVsdGlwbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwidG90YWxTcG9rZW4iLCJpc1VzZXJDcmVhdG9yIiwic2Vzc2lvbldyYXBwZXIiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJQYXJ0aWNpcGFudHMiLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiYmVhcmVyIiwidG9rZW4iLCJyZXNwb25zZSIsIkVycm9yIiwidGV4dCIsImZvdW5kIiwicmVhZHkiLCJkYXNoYm9hcmRJZCIsImFkZENyZWRpdHMiLCJ0cmFja2luZyIsInBvc3QiLCJjcmVkaXRzIiwiYXJjaGl2ZSIsInJlc3RvcmUiLCJQYXJ0aWNpcGFudEFjdGl2aXR5IiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlBhcnRpY2lwYW50QWN0aXZpdGllcyIsInBhcmVudCIsInZhbHVlcyIsImFjdGl2aXR5IiwiZ2V0QWN0aXZpdHlJbnN0YW5jZSIsInVwZGF0ZSIsImJpbmQiLCJPYmplY3RzIiwic3Bva2VuIiwiUGFydGljaXBhbnRTcG9rZW5BY3Rpdml0eSIsImRldGF1bHQiLCJQYXJ0aWNpcGFudE11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJBY3Rpdml0eSIsIml0ZW0iLCJxdWVzdGlvbnMiLCJKU09OIiwicGFyc2UiLCJhc3Nlc3NtZW50IiwiZSIsImNvbnNvbGUiLCJ3YXJuIiwicGFydGljaXBhdGlvbkRhdGEiLCJxdWVzdGlvbiIsImluZGV4IiwiYW5zd2VyIiwicmVzcG9uc2VzIiwiYWNjdXJhY3kiLCJpY29ucyIsImtleSIsInRvdGFsUG9pbnRzIiwicG9pbnRzIiwiYXR0ZW1wdHMiLCJ0cmFuc2NyaXB0aW9uIiwib2JqZWN0aXZlc0tleXMiLCJfdHJhY2tpbmciLCJfY29sbGVjdGlvbiIsIl9wcm92aWRlciIsIlBhcnRpY2lwYW50IiwiYXNzaWdubWVudElkIiwicHJvdmlkZXIiLCJQYXJ0aWNpcGFudFByb3ZpZGVyIiwiVHJhY2tpbmciLCJ1c2VySWQiLCJjaGF0IiwiYXJncyIsInVpZCIsIl9wYXJ0aWNpcGFudCIsImFycmF5SXRlbXMiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwicHJvY2Vzc0xvYWQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2Rhc2hib2FyZExheW91dCIsIl9jb3JlIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiaXNTdG9yZSIsImFjdGl2aXR5U2VsZWN0ZWQiLCJjdXJyZW50VHJhY2tpbmciLCJzZXNzaW9uIiwidmlldyIsImFzc2lnbm1lbnQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsInNwZWNpZmllciIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJnbG9iYWxUZXh0cyIsInVzZXJzIiwidHJhY2tpbmdzIiwidHJpZ2dlckV2ZW50IiwiTGF5b3V0QnJva2VyIiwic2V0TW9kZWwiLCJvdmVybGF5Iiwib24iLCJmZXRjaCIsIlRyYWNraW5nRGFzaGJvYXJkIiwiZmV0Y2hpbmciLCJtIiwicmVmcmVzaCIsImJhY2tMaW5rIiwiYnJlYWRjcnVtYiIsImVudGl0aWVzIiwiY2xhc3Nyb29tcyIsImxvZyIsImxvYWRVc2VyVHJhY2tpbmciLCJ0cmlnZ2VyIiwicmVmcmVzaERyYXdlciIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImNoYXRNb2RlbCIsImxvYWRBbGwiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsInJlZnJlc2hUcmFja2luZyIsInNlbGVjdEFjdGl2aXR5IiwiX3JlYWN0IiwiTm90Rm91bmQiLCJjb2RlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9ob29rcyIsIkRhc2hib2FyZEFjdGlvbnMiLCJzZXRTaG93RHJhd2VyIiwidXNlRGFzaGJvYXJkQ29udGV4dCIsInNldFVwZGF0ZSIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJvbkNsaWNrIiwidXNlQmluZGVyIiwiYWN0aW9uVGV4dCIsImFyY2hpdmVkIiwiYWN0aW9uIiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsImFjdGlvbnMiLCJ3YWxsIiwiX3VpIiwiRW1wdHlNYXRlcmlhbCIsIm1lc3NhZ2UiLCJlbXB0eSIsIkVtcHR5Q2FyZCIsIl9pY29ucyIsIl9saXN0IiwiX2VtcHR5IiwiQWN0aXZpdHlWaWV3Iiwic2V0VmlldyIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwib25DbG9zZSIsInVuZGVmaW5lZCIsIkljb25CdXR0b24iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpc3QiLCJjb250cm9sIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCIsImZhbHNlIiwiRW1wdHkiLCJfaW1hZ2UiLCJfY29sbGFwc2libGUiLCJfb2JqZWN0aXZlSWNvbiIsIl9vYmplY3RpdmUiLCJDaGF0QWN0aXZpdHlQYXJ0aWNpcGFudCIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwiYW5hbHlzaXMiLCJvblRvZ2dsZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsInRvZ2dsZWFibGUiLCJvcGVuIiwiQ29sbGFwc2libGVIZWFkZXIiLCJJbWFnZSIsInNyYyIsIkxpbmsiLCJocmVmIiwibm9TdW1tYXJ5IiwiQWN0aXZpdHlPYmplY3RpdmVTdGF0dXNJY29uIiwiQ29sbGFwc2libGVDb250ZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZSIsIl9jaGF0IiwiU3Bva2VuQWN0aXZpdHlQYXJ0aWNpcGFudCIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlQYXJ0aWNpcGFudCIsIm11bHRpcGxlQ2hvaWNlIiwicGFydGljaXBhbnRBY3Rpdml0eSIsImNvcnJlY3QiLCJ0b3RhbCIsIndyb25nIiwiY291bnRlcnMiLCJjbHMiLCJSZWFjdCIsImljb25OYW1lcyIsInBlbmRpbmciLCJjb21wbGV0ZWQiLCJvdXRzdGFuZGluZyIsIm9iamVjdGl2ZXNTdGF0dXMiLCJBcHBJY29uIiwibm9BbmFseXNpcyIsIl90b29sdGlwIiwiYWN0aXZpdHlJZCIsIkljb25TdGF0ZSIsIlRvb2x0aXAiLCJjb250ZW50IiwiX2NoYXRDb21wb25lbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdFRhYiIsInVzZURyYXdlckNvbnRleHQiLCJyZWYiLCJ1c2VSZWYiLCJ0QWN0aXZpdHkiLCJjaGF0SWQiLCJFbXB0eUNoYXQiLCJzbGljZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJBZ2VudHNDaGF0UGFuZWwiLCJfdGFicyIsIl9kcmF3ZXJBbGVydHMiLCJfb2JqZWN0aXZlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlDaGF0Qm9keSIsInByb3BzIiwic2V0TWVzc2FnZXMiLCJ1c2VFZmZlY3QiLCJ0cmlnZ2VyQ2hhbmdlIiwib2ZmIiwidGFicyIsIlRhYiIsImludGVyYWN0aW9ucyIsImFsZXJ0cyIsIm9wZW5DaGF0IiwibG9hZENoYXQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZXMiLCJ2YXJpYW50IiwiRHJhd2VyQWxlcnQiLCJwcm9ncmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eSIsImhhc1BhcnRpY2lwYXRlZCIsImNsc0RyYXdlciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJJQ09OUyIsInR5cGVzIiwiZGViYXRlIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlTcG9rZW5Cb2R5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlUXVlc3Rpb25PcHRpb25zIiwiY29ycmVjdEFuc3dlciIsInNlbGVjdGVkIiwiX3F1ZXN0aW9ucyIsInBhcnRpY2lwYXRpb24iLCJkZXRhaWwiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbnMiLCJfYW5zd2VyIiwiYXVkaW9VcmwiLCJvdXRwdXQiLCJmZWVkYmFjayIsImF1ZGlvIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJhZGRFdmVudExpc3RlbmVyIiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsImNhbGxiYWNrIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiQ29uZmlybU1vZGFsIiwib25DYW5jZWwiLCJfaGVhZGVyU2tlbGV0b24iLCJfY2hhdFRhYiIsIl9oZWFkZXIiLCJTdHVkZW50RHJhd2VyQ2hhdCIsInNldFJlYWR5IiwiRHJhd2VyU2tlbGV0b24iLCJTdHVkZW50RHJhd2VySGVhZGVyIiwic2hvd0FjdGl2aXR5IiwiRHJhd2VyIiwic2hvd0NyZWRpdHMiLCJvblJlZnJlc2giLCJzdHVkZW50Iiwic2V0Q3JlZGl0cyIsImdldFByb3BlcnRpZXMiLCJjb25zdW1lZCIsIm9mIiwiQ2xvc2VCdXR0b24iLCJTdHVkZW50QXNzaWdubWVudFN1bW1hcnkiLCJzZXRJdGVtcyIsIkdlbmVyYWxWaWV3IiwiX2xhYmVsIiwiX2FjdGl2aXR5SWNvbiIsIl9zdGF0dXMiLCJNb2R1bGVBY3Rpdml0eUNoYXQiLCJzdWJ0eXBlIiwiQWN0aXZpdHlJY29uIiwiTW9kdWxlQWN0aXZpdHlNZXNzYWdlcyIsIk1vZHVsZUFjdGl2aXR5U3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlEZXRhaWxzIiwiSWNvbiIsIk1vZHVsZUFjdGl2aXR5IiwiTW9kdWxlQWN0aXZpdHlTcG9rZW4iLCJNb2R1bGVBY3Rpdml0eU11bHRpcGxlQ2hvaWNlIiwibGFiZWwiLCJkb25lIiwidG90YWxNZXNzYWdlcyIsImpvaW4iLCJtZXNzYWdlQ291bnRlciIsImhhc0FsZXJ0cyIsIkljb25JdGVtIiwicGFydGljaXBhbnRVcmkiLCJvcGVuRHJhd2VyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFsdCIsIl9pY29uQm94IiwiSWNvbkJveCIsImFzIiwiRHJhd2VyQWxlcnRJdGVtIiwiX21hcmtkb3duIiwiaXRlcmF0aW9uIiwiYXNzaXN0YW50IiwiTWFya2Rvd24iLCJub01lc3NhZ2VzIiwiX2FjdGlvbnMiLCJBUFAiLCJBUFBfTkFNRSIsIkRhc2hib2FyZENvbnRleHQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXIiLCJjbGFzc3dvcmtzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0IiwiX3JvdXRpbmciLCJfZHJhd2VyIiwiX2RyYXdlcjIiLCJfZHJhd2VyQ2hhdCIsIl93YWxsIiwiQXNpZGVEcmF3ZXIiLCJzaG93RHJhd2VyIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsInB1c2hTdGF0ZSIsInBvc2l0aW9uIiwiV2FsbCIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIndpZHRoIiwiY29sb3IiLCJfaWNvbnMyIiwiQWN0aXZpdHlGaWx0ZXIiLCJoYW5kbGVDbGljayIsIl91c2VyRGF0YSIsIm93bmVyIiwib25DbGFzc3Jvb21DbGljayIsIkVudGl0eUltYWdlIiwiVXNlckRhdGEiLCJfZm9ybSIsIl9hY3Rpdml0eUZpbHRlciIsIlN0dWRlbnRzSGVhZGVyIiwibGlzdENscyIsInJlZnJlc2hpbmciLCJzZXRSZWZyZXNoaW5nIiwib25GaWx0ZXIiLCJjdXJyZW50VGFyZ2V0IiwiSW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwibGlzdCIsInNlYXJjaCIsInN0dWRlbnRIZWFkZXIiLCJfIiwiX2FzaWRlRHJhd2VyIiwiX3ZpZXciLCJfZ2VuZXJhbCIsIl9zdHVkZW50SGVhZGVyIiwic2V0VG90YWxQYXJ0aWNpcGFudHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiUGFnZUxvYWRlciIsImRyYXdlclZhbHVlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvREFUQS50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXRpZXMudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9zcG9rZW4udHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudHMudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3Byb3ZpZGVyLnRzIiwiL3RzL21vZGVsL3Byb3ZpZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvYW5zd2VyLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9kcmF3ZXItY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2hlYWRlci50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZ2VuZXJhbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2NoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9kZXRhaWxzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9sYWJlbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L3N0YXR1cy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FjdGl2aXR5LWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaWNvbi1ib3gudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb2JqZWN0aXZlLWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZHJhd2VyL2FzaWRlLWRyYXdlci50c3giLCIvdHMvdmlld3MvZHJhd2VyL2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9oZWFkZXItc2tlbGV0b24udHN4IiwiL3RzL3ZpZXdzL2RyYXdlci93YWxsLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hY3Rpdml0eS1maWx0ZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaGVhZGVyL3N0dWRlbnQtaGVhZGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvdXNlci1kYXRhLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixN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