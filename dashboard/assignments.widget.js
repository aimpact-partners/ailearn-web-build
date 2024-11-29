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
        hash: 2746024285,
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
        hash: 64520156,
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
              active: 0
            }, React.createElement(_tabs.Tabs, {
              className: "drawer__tabs"
            }, tabs), React.createElement(_tabs.Panes, null, React.createElement("div", {
              className: "activity-data-section-list"
            }, output), item.transcrition ? React.createElement("div", null, React.createElement("p", null, item.transcription)) : null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJhZGRDcmVkaXRzIiwidHJhY2tpbmciLCJwb3N0IiwiY3JlZGl0cyIsIlBhcnRpY2lwYW50QWN0aXZpdHkiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiUGFydGljaXBhbnRBY3Rpdml0aWVzIiwicGFyZW50IiwidmFsdWVzIiwiYWN0aXZpdHkiLCJnZXRBY3Rpdml0eUluc3RhbmNlIiwidXBkYXRlIiwiYmluZCIsIk9iamVjdHMiLCJzcG9rZW4iLCJQYXJ0aWNpcGFudFNwb2tlbkFjdGl2aXR5IiwiZGV0YXVsdCIsIlBhcnRpY2lwYW50TXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsIkFjdGl2aXR5IiwiaXRlbSIsInF1ZXN0aW9ucyIsIkpTT04iLCJwYXJzZSIsImFzc2Vzc21lbnQiLCJlIiwiY29uc29sZSIsIndhcm4iLCJwYXJ0aWNpcGF0aW9uRGF0YSIsInF1ZXN0aW9uIiwiaW5kZXgiLCJhbnN3ZXIiLCJyZXNwb25zZXMiLCJhY2N1cmFjeSIsImljb25zIiwia2V5IiwidG90YWxQb2ludHMiLCJwb2ludHMiLCJhdHRlbXB0cyIsInRyYW5zY3JpcHRpb24iLCJvYmplY3RpdmVzS2V5cyIsIl9jb2xsZWN0aW9uIiwiX3RyYWNraW5nIiwiX3Byb3ZpZGVyIiwiUGFydGljaXBhbnQiLCJhc3NpZ25tZW50SWQiLCJwcm92aWRlciIsIlBhcnRpY2lwYW50UHJvdmlkZXIiLCJUcmFja2luZyIsInVzZXJJZCIsImNoYXQiLCJfcGFydGljaXBhbnQiLCJhcnJheUl0ZW1zIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsInByb2Nlc3NMb2FkIiwiUHJvdmlkZXIiLCJ0cmFja2luZ0lkIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbDIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfY29yZSIsImlzU3RvcmUiLCJhY3Rpdml0eVNlbGVjdGVkIiwiY3VycmVudFRyYWNraW5nIiwic2Vzc2lvbiIsInZpZXciLCJhc3NpZ25tZW50IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJzcGVjaWZpZXIiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwidXNlcnMiLCJ0cmFja2luZ3MiLCJ0cmlnZ2VyRXZlbnQiLCJvbiIsInNldE1vZGVsIiwiZmV0Y2hpbmciLCJtIiwibG9nIiwibG9hZFVzZXJUcmFja2luZyIsInJlZnJlc2giLCJ0cmlnZ2VyIiwicmVmcmVzaERyYXdlciIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImNoYXRNb2RlbCIsImxvYWRBbGwiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsInJlZnJlc2hUcmFja2luZyIsInNlbGVjdEFjdGl2aXR5IiwiX3JlYWN0IiwiTm90Rm91bmQiLCJjb2RlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX3VpIiwiX2NvbnRleHQiLCJFbXB0eU1hdGVyaWFsIiwibWVzc2FnZSIsInVzZURhc2hib2FyZENvbnRleHQiLCJlbXB0eSIsIkVtcHR5Q2FyZCIsImNsYXNzTmFtZSIsIl9pY29ucyIsIl9saXN0IiwiX2VtcHR5IiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJ1c2VTdGF0ZSIsIm9uQ2xvc2UiLCJ1bmRlZmluZWQiLCJ1c2VCaW5kZXIiLCJJY29uQnV0dG9uIiwib25DbGljayIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidGVybmFyeSIsIm9wdGlvbnMiLCJ0cnVlIiwiTGlzdCIsImNvbnRyb2wiLCJBY3Rpdml0eVBhcnRpY2lwYW50IiwiZmFsc2UiLCJFbXB0eSIsIl9pbWFnZSIsIl9jb2xsYXBzaWJsZSIsIl9vYmplY3RpdmVJY29uIiwiX29iamVjdGl2ZSIsIkNoYXRBY3Rpdml0eVBhcnRpY2lwYW50Iiwic2V0U2hvd0RyYXdlciIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwiYW5hbHlzaXMiLCJvblRvZ2dsZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsInRvZ2dsZWFibGUiLCJvcGVuIiwiQ29sbGFwc2libGVIZWFkZXIiLCJJbWFnZSIsInNyYyIsIkxpbmsiLCJocmVmIiwibm9TdW1tYXJ5IiwiQWN0aXZpdHlPYmplY3RpdmVTdGF0dXNJY29uIiwiQ29sbGFwc2libGVDb250ZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZSIsIl9jaGF0IiwiU3Bva2VuQWN0aXZpdHlQYXJ0aWNpcGFudCIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlQYXJ0aWNpcGFudCIsIl90b29sdGlwIiwibXVsdGlwbGVDaG9pY2UiLCJhY3Rpdml0eUlkIiwicGFydGljaXBhbnRBY3Rpdml0eSIsIkljb25TdGF0ZSIsIlRvb2x0aXAiLCJjb250ZW50IiwiY29ycmVjdCIsImNvdW50ZXJzIiwid3JvbmciLCJSZWFjdCIsImljb25OYW1lcyIsInBlbmRpbmciLCJjb21wbGV0ZWQiLCJvdXRzdGFuZGluZyIsIm9iamVjdGl2ZXNTdGF0dXMiLCJBcHBJY29uIiwibm9BbmFseXNpcyIsIl9jaGF0Q29tcG9uZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRUYWIiLCJ1c2VEcmF3ZXJDb250ZXh0IiwicmVmIiwidXNlUmVmIiwidEFjdGl2aXR5IiwiY2hhdElkIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJFbXB0eUNoYXQiLCJzbGljZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJBZ2VudHNDaGF0UGFuZWwiLCJfdGFicyIsIl9kcmF3ZXJBbGVydHMiLCJfb2JqZWN0aXZlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlDaGF0Qm9keSIsInNldE1lc3NhZ2VzIiwidHJpZ2dlckNoYW5nZSIsIm9mZiIsInRhYnMiLCJUYWIiLCJpbnRlcmFjdGlvbnMiLCJhbGVydHMiLCJvcGVuQ2hhdCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlcyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIkRyYXdlckFsZXJ0IiwicHJvZ3JlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHkiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJjbHNEcmF3ZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJJQ09OUyIsInR5cGVzIiwiZGViYXRlIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlTcG9rZW5Cb2R5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlUXVlc3Rpb25PcHRpb25zIiwiY29ycmVjdEFuc3dlciIsInNlbGVjdGVkIiwiY2xzIiwiX3F1ZXN0aW9ucyIsInBhcnRpY2lwYXRpb24iLCJkZXRhaWwiLCJ0b3RhbCIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZVF1ZXN0aW9ucyIsIl9hbnN3ZXIiLCJhdWRpb1VybCIsIm91dHB1dCIsImZlZWRiYWNrIiwiYXVkaW8iLCJBdWRpb1BsYXllciIsInVybCIsInRyYW5zY3JpdGlvbiIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJjYWxsYmFjayIsInNldE9wZW4iLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsIm9uQ29uZmlybSIsImFjdGlvbiIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiX2ljb25zMiIsIl9jaGF0VGFiIiwiX3JvdXRpbmciLCJTdHVkZW50RHJhd2VyQ2hhdCIsInN0dWRlbnQiLCJzZXRJdGVtcyIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJvblJlZnJlc2giLCJvbkJhY2siLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiQXBwSWNvbkJ1dHRvbiIsImNvbnN1bWVkIiwib2YiLCJEcmF3ZXIiLCJTdHVkZW50QXNzaWdubWVudFN1bW1hcnkiLCJwZXJjZW50YWdlQXZhaWxhYmxlIiwiQ2xvc2VCdXR0b24iLCJHZW5lcmFsVmlldyIsIl9sYWJlbCIsIl9hY3Rpdml0eUljb24iLCJfc3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlDaGF0Iiwic3VidHlwZSIsIkFjdGl2aXR5SWNvbiIsIk1vZHVsZUFjdGl2aXR5TWVzc2FnZXMiLCJNb2R1bGVBY3Rpdml0eVN0YXR1cyIsIk1vZHVsZUFjdGl2aXR5RGV0YWlscyIsIkljb24iLCJNb2R1bGVBY3Rpdml0eSIsIk1vZHVsZUFjdGl2aXR5U3Bva2VuIiwiTW9kdWxlQWN0aXZpdHlNdWx0aXBsZUNob2ljZSIsImxhYmVsIiwiZG9uZSIsInRvdGFsTWVzc2FnZXMiLCJqb2luIiwibWVzc2FnZUNvdW50ZXIiLCJoYXNBbGVydHMiLCJJY29uSXRlbSIsInBhcnRpY2lwYW50VXJpIiwib3BlbkRyYXdlciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhbHQiLCJfaWNvbkJveCIsIkljb25Cb3giLCJhcyIsIkRyYXdlckFsZXJ0SXRlbSIsIml0ZXJhdGlvbiIsImFzc2lzdGFudCIsIkFQUCIsIkFQUF9OQU1FIiwiUGFnZUNvbnRhaW5lciIsImNsYXNzd29ya3MiLCJEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0IiwiX2RyYXdlciIsIl9kcmF3ZXIyIiwiX2RyYXdlckNoYXQiLCJfd2FsbCIsIkFzaWRlRHJhd2VyIiwic2hvd0RyYXdlciIsInB1c2hTdGF0ZSIsInBvc2l0aW9uIiwid2FsbCIsIldhbGwiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiX3VzZXJEYXRhIiwiSGVhZGVyIiwib3duZXIiLCJvbkNsYXNzcm9vbUNsaWNrIiwiRW50aXR5SW1hZ2UiLCJVc2VyRGF0YSIsImFjdGlvbnMiLCJfZm9ybSIsIl9hY3Rpdml0eUZpbHRlciIsIlN0dWRlbnRzSGVhZGVyIiwibGlzdENscyIsInJlZnJlc2hpbmciLCJzZXRSZWZyZXNoaW5nIiwib25GaWx0ZXIiLCJjdXJyZW50VGFyZ2V0IiwibGlzdCIsInN0dWRlbnRzIiwiSW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwic3R1ZGVudEhlYWRlciIsImRpc2FibGVkIiwiXyIsIl9hc2lkZURyYXdlciIsIl9oZWFkZXIiLCJfZ2VuZXJhbCIsIl9zdHVkZW50SGVhZGVyIiwiX3ZpZXciLCJzZXRUb3RhbFBhcnRpY2lwYW50cyIsInN0YXRlIiwic2V0U3RhdGUiLCJnZXRQcm9wZXJ0aWVzIiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsIlBhZ2VMb2FkZXIiLCJkcmF3ZXJWYWx1ZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsL0RBVEEudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0aWVzLnRzIiwiL3RzL21vZGVsL2FjdGl2aXRpZXMvYWN0aXZpdHkudHMiLCIvdHMvbW9kZWwvaW5kZXgudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvYWN0aXZpdHkudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvc3Bva2VuLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvcGFydGljaXBhbnRzLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wcm92aWRlci50cyIsIi90cy9tb2RlbC9wcm92aWRlci50cyIsIi90eXBlcy50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy80MDQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvY2hhdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2NoYXQtdGFiLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9vYmplY3RpdmVzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2Fuc3dlci50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NoYXQtdGFiLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZHJhd2VyLWNoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9nZW5lcmFsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2RldGFpbHMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2xhYmVsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvc3RhdHVzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWN0aXZpdHktaWNvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lbXB0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pY29uLWJveC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9vYmplY3RpdmUtaWNvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kcmF3ZXIvYXNpZGUtZHJhd2VyLnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvY29udGVudC50c3giLCIvdHMvdmlld3MvZHJhd2VyL3dhbGwudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FjdGl2aXR5LWZpbHRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvc3R1ZGVudC1oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci91c2VyLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSFIsZ0JBQUEsQ0FBQVMsWUFBWSxDQUFDQyxhQUFhLEVBQUU7Y0FFNUIsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBRTNDO1lBRUE7OztZQUdBRSxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFaLEtBQU0sQ0FBQ2EsS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFBLENBQUFoQixVQUFBLEdBQUFBLFVB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