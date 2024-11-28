System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.10/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/reactive@1.1.12/entities", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@aimpact/ailearn-app@0.2.10/components/ui", "@aimpact/ailearn-app@0.2.10/components/navbar-header.code", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.2.10/config", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/list", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.2.10/components/icons", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
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
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp0210DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0210DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk100ReactiveEntitiesItem) {
      dependency_5 = _aimpactAilearnSdk100ReactiveEntitiesItem;
    }, function (_aimpactAilearnSdk100ReactiveModel) {
      dependency_6 = _aimpactAilearnSdk100ReactiveModel;
    }, function (_aimpactHttpSuite001Api) {
      dependency_7 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_8 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk130Session) {
      dependency_9 = _aimpactChatSdk130Session;
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
    }, function (_aimpactAilearnApp0210ComponentsUi) {
      dependency_16 = _aimpactAilearnApp0210ComponentsUi;
    }, function (_aimpactAilearnApp0210ComponentsNavbarHeaderCode) {
      dependency_17 = _aimpactAilearnApp0210ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_18 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp0210Config) {
      dependency_19 = _aimpactAilearnApp0210Config;
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
    }, function (_aimpactAilearnApp0210ComponentsIcons) {
      dependency_27 = _aimpactAilearnApp0210ComponentsIcons;
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_28 = _aimpactChatSdk130ChatComponentCode;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_29 = _aimpactChatSdk130WidgetsMarkdown;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.10"], ["@aimpact/ailearn-app", "0.2.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.10/dashboard/assignments",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_5], ['@aimpact/ailearn-sdk/reactive/model', dependency_6], ['@aimpact/http-suite/api', dependency_7], ['@aimpact/ailearn-sdk/config', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-sdk/tracking', dependency_10], ['@beyond-js/reactive/entities', dependency_11], ['@aimpact/ailearn-sdk/core', dependency_12], ['@beyond-js/kernel/texts', dependency_13], ['@beyond-js/kernel/core', dependency_14], ['react', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_17], ['pragmate-ui/icons', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['pragmate-ui/empty', dependency_20], ['pragmate-ui/list', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['pragmate-ui/components', dependency_23], ['pragmate-ui/image', dependency_24], ['pragmate-ui/collapsible', dependency_25], ['pragmate-ui/tooltip', dependency_26], ['@aimpact/ailearn-app/components/icons', dependency_27], ['@aimpact/chat-sdk/chat-component.code', dependency_28], ['@aimpact/chat-sdk/widgets/markdown', dependency_29], ['pragmate-ui/tabs', dependency_30], ['pragmate-ui/modal', dependency_31], ['pragmate-ui/drawer', dependency_32], ['@beyond-js/kernel/routing', dependency_33], ['pragmate-ui/form', dependency_34]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-dashboard-assignments",
        "vspecifier": "@aimpact/ailearn-app@0.2.10/dashboard/assignments.widget",
        "is": "page",
        "route": "/dashboard/${id}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.10/dashboard/assignments.widget');
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
        hash: 3916055062,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentActivity = void 0;
          var _item = require("@aimpact/ailearn-sdk/reactive/entities/item");
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
        hash: 2558975185,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dashboard = void 0;
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
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
        hash: 3209396798,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantActivity = void 0;
          var _item = require("@aimpact/ailearn-sdk/reactive/entities/item");
          class ParticipantActivity extends _item.Item {
            constructor({
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['alerts', 'messages', 'progress', 'activity', 'synthesis', 'data', 'counters', 'responses', ...properties]
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
        hash: 2279477346,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantMultipleChoiceActivity = void 0;
          var _item = require("@aimpact/ailearn-sdk/reactive/entities/item");
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
        hash: 1985302929,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantSpokenActivity = void 0;
          var _item = require("@aimpact/ailearn-sdk/reactive/entities/item");
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
        hash: 3964490113,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Participant = void 0;
          var _item = require("@aimpact/ailearn-sdk/reactive/entities/item");
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
        hash: 605781678,
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
        hash: 1624189798,
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
        hash: 2293543973,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _dashboardLayout = require("@aimpact/ailearn-app/dashboard-layout.widget");
          var _model = require("./model");
          var _model2 = require("@aimpact/ailearn-sdk/reactive/model");
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
        hash: 2973524870,
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
                view: 'student-chat',
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
              className: "dashboard-chip success-label"
            }, texts.correct, ": ", participantActivity.counters.correct), _react.default.createElement("span", {
              className: "dashboard-chip  error-label"
            }, texts.wrong, ": ", participantActivity.counters.wrong))));
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
        hash: 2890665196,
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
                view: 'student-chat',
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
        hash: 3294760156,
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
            React.useEffect(() => {
              if (!ref.current) return;
              ref.current.addEventListener('scroll', event => {
                event.stopPropagation();
                event.preventDefault();
              });
            }, [ref.current]);
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
        hash: 2370206653,
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
              icon: "info",
              className: ""
            }, _react.default.createElement("h3", null, title), _react.default.createElement("span", null, description)));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/chat/index
      *************************************************************/

      ims.set('./views/assignment/drawer/activity/chat/index', {
        hash: 2691753889,
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
        hash: 4196556823,
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
            if (selected) cls += `${selected && index === correctAnswer ? ` option--corrected` : `option--wrong `}`;
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
        hash: 579530515,
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
            const audioUrl = `${_config.default.params.apis.ailearn}/assignments/${tracking.id}/activities/${item.activity.id}/tracking/${user.id}/audio`;
            const output = item.objectives.map(objective => {
              return React.createElement("div", {
                className: "mt-15 activity-data-section",
                key: `${item.id}-${objective.objective}`
              }, React.createElement("div", null, React.createElement("h6", {
                className: "flex-container flex-vertical-center gap-05"
              }, React.createElement(_icons.AppIcon, {
                icon: `points${objective.points}`
              }), objective.name)), React.createElement("div", null, React.createElement("span", null, objective.feedback)));
            });
            return React.createElement("div", null, React.createElement("div", {
              className: "activity-data-section"
            }, React.createElement("h5", null, texts.activities.spoken.audio), React.createElement(_ui.AudioPlayer, {
              url: audioUrl
            })), React.createElement("h5", null, texts.activities.spoken.feedback), React.createElement("div", {
              className: "activity-data-section-list"
            }, output));
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
        hash: 3117503979,
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
                label = `${participantActivity?.interactions} ${texts.activities.interactions}`;
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
        hash: 3673063472,
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
              if (showDrawer.show) {
                // Save the current scroll position
                const scrollY = window.scrollY;
                container.style.position = 'fixed';
                container.style.top = `-${scrollY - 79}px`;
              } else {
                // Restore scroll position and reset styles
                const scrollY = Math.abs(parseInt(container.style.top || '0', 10));
                container.style.position = '';
                container.style.top = '';
                window.scrollTo(0, scrollY);
              }
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
            console.log(0.1, view);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJhZGRDcmVkaXRzIiwidHJhY2tpbmciLCJwb3N0IiwiY3JlZGl0cyIsIlBhcnRpY2lwYW50QWN0aXZpdHkiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiUGFydGljaXBhbnRBY3Rpdml0aWVzIiwicGFyZW50IiwidmFsdWVzIiwiYWN0aXZpdHkiLCJnZXRBY3Rpdml0eUluc3RhbmNlIiwidXBkYXRlIiwiYmluZCIsIk9iamVjdHMiLCJzcG9rZW4iLCJQYXJ0aWNpcGFudFNwb2tlbkFjdGl2aXR5IiwiZGV0YXVsdCIsIlBhcnRpY2lwYW50TXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsIkFjdGl2aXR5IiwiaXRlbSIsInF1ZXN0aW9ucyIsIkpTT04iLCJwYXJzZSIsImFzc2Vzc21lbnQiLCJlIiwiY29uc29sZSIsIndhcm4iLCJwYXJ0aWNpcGF0aW9uRGF0YSIsInF1ZXN0aW9uIiwiaW5kZXgiLCJhbnN3ZXIiLCJyZXNwb25zZXMiLCJhY2N1cmFjeSIsImljb25zIiwia2V5IiwidG90YWxQb2ludHMiLCJwb2ludHMiLCJhdHRlbXB0cyIsIm9iamVjdGl2ZXNLZXlzIiwiX2NvbGxlY3Rpb24iLCJfdHJhY2tpbmciLCJfcHJvdmlkZXIiLCJQYXJ0aWNpcGFudCIsImFzc2lnbm1lbnRJZCIsInByb3ZpZGVyIiwiUGFydGljaXBhbnRQcm92aWRlciIsIlRyYWNraW5nIiwidXNlcklkIiwiY2hhdCIsIl9wYXJ0aWNpcGFudCIsImFycmF5SXRlbXMiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwicHJvY2Vzc0xvYWQiLCJQcm92aWRlciIsInRyYWNraW5nSWQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsMiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9jb3JlIiwiaXNTdG9yZSIsImFjdGl2aXR5U2VsZWN0ZWQiLCJjdXJyZW50VHJhY2tpbmciLCJzZXNzaW9uIiwidmlldyIsImFzc2lnbm1lbnQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsInNwZWNpZmllciIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ1c2VycyIsInRyYWNraW5ncyIsInRyaWdnZXJFdmVudCIsIm9uIiwic2V0TW9kZWwiLCJmZXRjaGluZyIsIm0iLCJsb2ciLCJsb2FkVXNlclRyYWNraW5nIiwicmVmcmVzaCIsInRyaWdnZXIiLCJyZWZyZXNoRHJhd2VyIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiY2hhdE1vZGVsIiwibG9hZEFsbCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwicmVmcmVzaFRyYWNraW5nIiwic2VsZWN0QWN0aXZpdHkiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfdWkiLCJfY29udGV4dCIsIkVtcHR5TWF0ZXJpYWwiLCJtZXNzYWdlIiwidXNlRGFzaGJvYXJkQ29udGV4dCIsImVtcHR5IiwiRW1wdHlDYXJkIiwiY2xhc3NOYW1lIiwiX2ljb25zIiwiX2xpc3QiLCJfZW1wdHkiLCJfaG9va3MiLCJfY29tcG9uZW50cyIsIkFjdGl2aXR5VmlldyIsInNldFZpZXciLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInVzZVN0YXRlIiwib25DbG9zZSIsInVuZGVmaW5lZCIsInVzZUJpbmRlciIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsInRydWUiLCJMaXN0IiwiY29udHJvbCIsIkFjdGl2aXR5UGFydGljaXBhbnQiLCJmYWxzZSIsIkVtcHR5IiwiX2ltYWdlIiwiX2NvbGxhcHNpYmxlIiwiX29iamVjdGl2ZUljb24iLCJfb2JqZWN0aXZlIiwiQ2hhdEFjdGl2aXR5UGFydGljaXBhbnQiLCJzZXRTaG93RHJhd2VyIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJhbmFseXNpcyIsIm9uVG9nZ2xlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwidG9nZ2xlYWJsZSIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkltYWdlIiwic3JjIiwiTGluayIsImhyZWYiLCJub1N1bW1hcnkiLCJBY3Rpdml0eU9iamVjdGl2ZVN0YXR1c0ljb24iLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiX2NoYXQiLCJTcG9rZW5BY3Rpdml0eVBhcnRpY2lwYW50IiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVBhcnRpY2lwYW50IiwiX3Rvb2x0aXAiLCJtdWx0aXBsZUNob2ljZSIsImFjdGl2aXR5SWQiLCJwYXJ0aWNpcGFudEFjdGl2aXR5IiwiSWNvblN0YXRlIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJjb3JyZWN0IiwiY291bnRlcnMiLCJ3cm9uZyIsIlJlYWN0IiwiaWNvbk5hbWVzIiwicGVuZGluZyIsImNvbXBsZXRlZCIsIm91dHN0YW5kaW5nIiwib2JqZWN0aXZlc1N0YXR1cyIsIkFwcEljb24iLCJub0FuYWx5c2lzIiwiX2NoYXRDb21wb25lbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdFRhYiIsInVzZURyYXdlckNvbnRleHQiLCJyZWYiLCJ1c2VSZWYiLCJ0QWN0aXZpdHkiLCJjaGF0SWQiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkVtcHR5Q2hhdCIsInNsaWNlIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsIkFnZW50c0NoYXRQYW5lbCIsIl90YWJzIiwiX2RyYXdlckFsZXJ0cyIsIl9vYmplY3RpdmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRCb2R5Iiwic2V0TWVzc2FnZXMiLCJ0cmlnZ2VyQ2hhbmdlIiwib2ZmIiwidGFicyIsIlRhYiIsImludGVyYWN0aW9ucyIsImFsZXJ0cyIsIm9wZW5DaGF0IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlPYmplY3RpdmVzIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwiRHJhd2VyQWxlcnQiLCJwcm9ncmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eSIsImhhc1BhcnRpY2lwYXRlZCIsImNsc0RyYXdlciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIklDT05TIiwidHlwZXMiLCJkZWJhdGUiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VCb2R5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eVNwb2tlbkJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbk9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwic2VsZWN0ZWQiLCJjbHMiLCJfcXVlc3Rpb25zIiwicGFydGljaXBhdGlvbiIsImRldGFpbCIsInRvdGFsIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlUXVlc3Rpb25zIiwiX2Fuc3dlciIsImF1ZGlvVXJsIiwib3V0cHV0IiwiZmVlZGJhY2siLCJhdWRpbyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsImNhbGxiYWNrIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiYWN0aW9uIiwiQ29uZmlybU1vZGFsIiwib25DYW5jZWwiLCJfaWNvbnMyIiwiX2NoYXRUYWIiLCJfcm91dGluZyIsIlN0dWRlbnREcmF3ZXJDaGF0Iiwic3R1ZGVudCIsInNldEl0ZW1zIiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsIm9uUmVmcmVzaCIsIm9uQmFjayIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJBcHBJY29uQnV0dG9uIiwiY29uc3VtZWQiLCJvZiIsIkRyYXdlciIsIlN0dWRlbnRBc3NpZ25tZW50U3VtbWFyeSIsInBlcmNlbnRhZ2VBdmFpbGFibGUiLCJDbG9zZUJ1dHRvbiIsIkdlbmVyYWxWaWV3IiwiX2xhYmVsIiwiX2FjdGl2aXR5SWNvbiIsIl9zdGF0dXMiLCJNb2R1bGVBY3Rpdml0eUNoYXQiLCJzdWJ0eXBlIiwiQWN0aXZpdHlJY29uIiwiTW9kdWxlQWN0aXZpdHlNZXNzYWdlcyIsIk1vZHVsZUFjdGl2aXR5U3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlEZXRhaWxzIiwiSWNvbiIsIk1vZHVsZUFjdGl2aXR5IiwiTW9kdWxlQWN0aXZpdHlTcG9rZW4iLCJNb2R1bGVBY3Rpdml0eU11bHRpcGxlQ2hvaWNlIiwibGFiZWwiLCJkb25lIiwidG90YWxNZXNzYWdlcyIsImpvaW4iLCJtZXNzYWdlQ291bnRlciIsImhhc0FsZXJ0cyIsIkljb25JdGVtIiwicGFydGljaXBhbnRVcmkiLCJvcGVuRHJhd2VyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFsdCIsIl9pY29uQm94IiwiSWNvbkJveCIsImFzIiwiRHJhd2VyQWxlcnRJdGVtIiwiaXRlcmF0aW9uIiwiYXNzaXN0YW50IiwiQVBQIiwiQVBQX05BTUUiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3N3b3JrcyIsIkRhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYXdlckNvbnRleHQiLCJfZHJhd2VyIiwiX2RyYXdlcjIiLCJfZHJhd2VyQ2hhdCIsIl93YWxsIiwiQXNpZGVEcmF3ZXIiLCJzaG93RHJhd2VyIiwicHVzaFN0YXRlIiwicG9zaXRpb24iLCJ3YWxsIiwiV2FsbCIsIkFjdGl2aXR5RmlsdGVyIiwiaGFuZGxlQ2xpY2siLCJfdXNlckRhdGEiLCJIZWFkZXIiLCJvd25lciIsIm9uQ2xhc3Nyb29tQ2xpY2siLCJFbnRpdHlJbWFnZSIsIlVzZXJEYXRhIiwiYWN0aW9ucyIsIl9mb3JtIiwiX2FjdGl2aXR5RmlsdGVyIiwiU3R1ZGVudHNIZWFkZXIiLCJsaXN0Q2xzIiwicmVmcmVzaGluZyIsInNldFJlZnJlc2hpbmciLCJvbkZpbHRlciIsImN1cnJlbnRUYXJnZXQiLCJsaXN0Iiwic3R1ZGVudHMiLCJJbnB1dCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzZWFyY2giLCJzdHVkZW50SGVhZGVyIiwiZGlzYWJsZWQiLCJfIiwiX2FzaWRlRHJhd2VyIiwiX2hlYWRlciIsIl9nZW5lcmFsIiwiX3N0dWRlbnRIZWFkZXIiLCJfdmlldyIsInNldFRvdGFsUGFydGljaXBhbnRzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImdldFByb3BlcnRpZXMiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsWSIsIndpbmRvdyIsInN0eWxlIiwidG9wIiwiTWF0aCIsImFicyIsInBhcnNlSW50Iiwic2Nyb2xsVG8iLCJQYWdlTG9hZGVyIiwiZHJhd2VyVmFsdWUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tb2RlbC9EQVRBLnRzIiwiL3RzL21vZGVsL2FjdGl2aXRpZXMvYWN0aXZpdGllcy50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXR5LnRzIiwiL3RzL21vZGVsL2luZGV4LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL2FjdGl2aXR5LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL3Nwb2tlbi50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvcGFydGljaXBhbnQudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50cy50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvcHJvdmlkZXIudHMiLCIvdHMvbW9kZWwvcHJvdmlkZXIudHMiLCIvdHlwZXMudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvNDA0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L2NoYXQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L211bHRpcGxlLWNob2ljZS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9jaGF0LXRhYi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlcy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9hbnN3ZXIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9ucy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9jaGF0LXRhYi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2RyYXdlci1jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZ2VuZXJhbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2NoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9kZXRhaWxzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9sYWJlbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L3N0YXR1cy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FjdGl2aXR5LWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaWNvbi1ib3gudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb2JqZWN0aXZlLWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZHJhd2VyL2FzaWRlLWRyYXdlci50c3giLCIvdHMvdmlld3MvZHJhd2VyL2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci93YWxsLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hY3Rpdml0eS1maWx0ZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaGVhZGVyL3N0dWRlbnQtaGVhZGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvdXNlci1kYXRhLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxnQkFBQSxHQUFBSCxPQUFBO1VBQ087VUFBVSxNQUNYSSxVQUFXLFNBQVFMLEtBQUEsQ0FBQU0seUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUwsTUFBQSxDQUFBTyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0hSLGdCQUFBLENBQUFTLFlBQVksQ0FBQ0MsYUFBYSxFQUFFO2NBRTVCLElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxJQUFJLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUUzQztZQUVBOzs7WUFHQUUsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBWixLQUFNLENBQUNhLEtBQUssRUFBRTtZ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