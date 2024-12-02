System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.14/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/reactive@1.1.12/entities", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@aimpact/ailearn-app@0.2.14/components/ui", "@aimpact/ailearn-app@0.2.14/components/navbar-header.code", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.2.14/config", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/list", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.2.14/components/icons", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0214DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0214DashboardLayoutWidget;
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
    }, function (_aimpactAilearnApp0214ComponentsUi) {
      dependency_16 = _aimpactAilearnApp0214ComponentsUi;
    }, function (_aimpactAilearnApp0214ComponentsNavbarHeaderCode) {
      dependency_17 = _aimpactAilearnApp0214ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_18 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp0214Config) {
      dependency_19 = _aimpactAilearnApp0214Config;
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
    }, function (_aimpactAilearnApp0214ComponentsIcons) {
      dependency_27 = _aimpactAilearnApp0214ComponentsIcons;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.14"], ["@aimpact/ailearn-app", "0.2.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.14/dashboard/assignments",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_5], ['@aimpact/ailearn-sdk/reactive/model', dependency_6], ['@aimpact/http-suite/api', dependency_7], ['@aimpact/ailearn-sdk/config', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-sdk/tracking', dependency_10], ['@beyond-js/reactive/entities', dependency_11], ['@aimpact/ailearn-sdk/core', dependency_12], ['@beyond-js/kernel/texts', dependency_13], ['@beyond-js/kernel/core', dependency_14], ['react', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_17], ['pragmate-ui/icons', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['pragmate-ui/empty', dependency_20], ['pragmate-ui/list', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['pragmate-ui/components', dependency_23], ['pragmate-ui/image', dependency_24], ['pragmate-ui/collapsible', dependency_25], ['pragmate-ui/tooltip', dependency_26], ['@aimpact/ailearn-app/components/icons', dependency_27], ['@aimpact/chat-sdk/chat-component.code', dependency_28], ['@aimpact/chat-sdk/widgets/markdown', dependency_29], ['pragmate-ui/tabs', dependency_30], ['pragmate-ui/modal', dependency_31], ['pragmate-ui/drawer', dependency_32], ['@beyond-js/kernel/routing', dependency_33], ['pragmate-ui/form', dependency_34]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-dashboard-assignments",
        "vspecifier": "@aimpact/ailearn-app@0.2.14/dashboard/assignments.widget",
        "is": "page",
        "route": "/dashboard/${id}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.14/dashboard/assignments.widget');
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
        hash: 719236738,
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
        hash: 985943430,
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
              console.log(99, this.attempts, this.attempts?.[0], this.attempts?.[0]?.transcription);
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
        hash: 2063699823,
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
            console.log(99, participantActivity.counters);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJhZGRDcmVkaXRzIiwidHJhY2tpbmciLCJwb3N0IiwiY3JlZGl0cyIsIlBhcnRpY2lwYW50QWN0aXZpdHkiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiUGFydGljaXBhbnRBY3Rpdml0aWVzIiwicGFyZW50IiwidmFsdWVzIiwiYWN0aXZpdHkiLCJnZXRBY3Rpdml0eUluc3RhbmNlIiwidXBkYXRlIiwiYmluZCIsIk9iamVjdHMiLCJzcG9rZW4iLCJQYXJ0aWNpcGFudFNwb2tlbkFjdGl2aXR5IiwiZGV0YXVsdCIsIlBhcnRpY2lwYW50TXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsIkFjdGl2aXR5IiwiaXRlbSIsInF1ZXN0aW9ucyIsIkpTT04iLCJwYXJzZSIsImFzc2Vzc21lbnQiLCJlIiwiY29uc29sZSIsIndhcm4iLCJwYXJ0aWNpcGF0aW9uRGF0YSIsInF1ZXN0aW9uIiwiaW5kZXgiLCJhbnN3ZXIiLCJyZXNwb25zZXMiLCJhY2N1cmFjeSIsImljb25zIiwia2V5IiwidG90YWxQb2ludHMiLCJwb2ludHMiLCJhdHRlbXB0cyIsInRyYW5zY3JpcHRpb24iLCJsb2ciLCJvYmplY3RpdmVzS2V5cyIsIl9jb2xsZWN0aW9uIiwiX3RyYWNraW5nIiwiX3Byb3ZpZGVyIiwiUGFydGljaXBhbnQiLCJhc3NpZ25tZW50SWQiLCJwcm92aWRlciIsIlBhcnRpY2lwYW50UHJvdmlkZXIiLCJUcmFja2luZyIsInVzZXJJZCIsImNoYXQiLCJfcGFydGljaXBhbnQiLCJhcnJheUl0ZW1zIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsInByb2Nlc3NMb2FkIiwiUHJvdmlkZXIiLCJ0cmFja2luZ0lkIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbDIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfY29yZSIsImlzU3RvcmUiLCJhY3Rpdml0eVNlbGVjdGVkIiwiY3VycmVudFRyYWNraW5nIiwic2Vzc2lvbiIsInZpZXciLCJhc3NpZ25tZW50IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJzcGVjaWZpZXIiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwidXNlcnMiLCJ0cmFja2luZ3MiLCJ0cmlnZ2VyRXZlbnQiLCJvbiIsInNldE1vZGVsIiwiZmV0Y2hpbmciLCJtIiwibG9hZFVzZXJUcmFja2luZyIsInJlZnJlc2giLCJ0cmlnZ2VyIiwicmVmcmVzaERyYXdlciIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImNoYXRNb2RlbCIsImxvYWRBbGwiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsInJlZnJlc2hUcmFja2luZyIsInNlbGVjdEFjdGl2aXR5IiwiX3JlYWN0IiwiTm90Rm91bmQiLCJjb2RlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX3VpIiwiX2NvbnRleHQiLCJFbXB0eU1hdGVyaWFsIiwibWVzc2FnZSIsInVzZURhc2hib2FyZENvbnRleHQiLCJlbXB0eSIsIkVtcHR5Q2FyZCIsImNsYXNzTmFtZSIsIl9pY29ucyIsIl9saXN0IiwiX2VtcHR5IiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJ1c2VTdGF0ZSIsIm9uQ2xvc2UiLCJ1bmRlZmluZWQiLCJ1c2VCaW5kZXIiLCJJY29uQnV0dG9uIiwib25DbGljayIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidGVybmFyeSIsIm9wdGlvbnMiLCJ0cnVlIiwiTGlzdCIsImNvbnRyb2wiLCJBY3Rpdml0eVBhcnRpY2lwYW50IiwiZmFsc2UiLCJFbXB0eSIsIl9pbWFnZSIsIl9jb2xsYXBzaWJsZSIsIl9vYmplY3RpdmVJY29uIiwiX29iamVjdGl2ZSIsIkNoYXRBY3Rpdml0eVBhcnRpY2lwYW50Iiwic2V0U2hvd0RyYXdlciIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwiYW5hbHlzaXMiLCJvblRvZ2dsZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsInRvZ2dsZWFibGUiLCJvcGVuIiwiQ29sbGFwc2libGVIZWFkZXIiLCJJbWFnZSIsInNyYyIsIkxpbmsiLCJocmVmIiwibm9TdW1tYXJ5IiwiQWN0aXZpdHlPYmplY3RpdmVTdGF0dXNJY29uIiwiQ29sbGFwc2libGVDb250ZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZSIsIl9jaGF0IiwiU3Bva2VuQWN0aXZpdHlQYXJ0aWNpcGFudCIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlQYXJ0aWNpcGFudCIsIl90b29sdGlwIiwibXVsdGlwbGVDaG9pY2UiLCJhY3Rpdml0eUlkIiwicGFydGljaXBhbnRBY3Rpdml0eSIsIkljb25TdGF0ZSIsIlRvb2x0aXAiLCJjb250ZW50IiwiY291bnRlcnMiLCJjb3JyZWN0IiwidG90YWwiLCJ3cm9uZyIsImNscyIsIlJlYWN0IiwiaWNvbk5hbWVzIiwicGVuZGluZyIsImNvbXBsZXRlZCIsIm91dHN0YW5kaW5nIiwib2JqZWN0aXZlc1N0YXR1cyIsIkFwcEljb24iLCJub0FuYWx5c2lzIiwiX2NoYXRDb21wb25lbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdFRhYiIsInVzZURyYXdlckNvbnRleHQiLCJyZWYiLCJ1c2VSZWYiLCJ0QWN0aXZpdHkiLCJjaGF0SWQiLCJFbXB0eUNoYXQiLCJzbGljZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJBZ2VudHNDaGF0UGFuZWwiLCJfdGFicyIsIl9kcmF3ZXJBbGVydHMiLCJfb2JqZWN0aXZlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlDaGF0Qm9keSIsInNldE1lc3NhZ2VzIiwidXNlRWZmZWN0IiwidHJpZ2dlckNoYW5nZSIsIm9mZiIsInRhYnMiLCJUYWIiLCJpbnRlcmFjdGlvbnMiLCJhbGVydHMiLCJvcGVuQ2hhdCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlcyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIkRyYXdlckFsZXJ0IiwicHJvZ3JlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHkiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJjbHNEcmF3ZXIiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiSUNPTlMiLCJ0eXBlcyIsImRlYmF0ZSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZUJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5U3Bva2VuQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZVF1ZXN0aW9uT3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJzZWxlY3RlZCIsIl9xdWVzdGlvbnMiLCJwYXJ0aWNpcGF0aW9uIiwiZGV0YWlsIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlUXVlc3Rpb25zIiwiX2Fuc3dlciIsImF1ZGlvVXJsIiwib3V0cHV0IiwiZmVlZGJhY2siLCJhdWRpbyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJjYWxsYmFjayIsInNldE9wZW4iLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsIm9uQ29uZmlybSIsImFjdGlvbiIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiX2ljb25zMiIsIl9jaGF0VGFiIiwiX3JvdXRpbmciLCJTdHVkZW50RHJhd2VyQ2hhdCIsInN0dWRlbnQiLCJzZXRJdGVtcyIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJvblJlZnJlc2giLCJvbkJhY2siLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiQXBwSWNvbkJ1dHRvbiIsImNvbnN1bWVkIiwib2YiLCJEcmF3ZXIiLCJTdHVkZW50QXNzaWdubWVudFN1bW1hcnkiLCJwZXJjZW50YWdlQXZhaWxhYmxlIiwiQ2xvc2VCdXR0b24iLCJHZW5lcmFsVmlldyIsIl9sYWJlbCIsIl9hY3Rpdml0eUljb24iLCJfc3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlDaGF0Iiwic3VidHlwZSIsIkFjdGl2aXR5SWNvbiIsIk1vZHVsZUFjdGl2aXR5TWVzc2FnZXMiLCJNb2R1bGVBY3Rpdml0eVN0YXR1cyIsIk1vZHVsZUFjdGl2aXR5RGV0YWlscyIsIkljb24iLCJNb2R1bGVBY3Rpdml0eSIsIk1vZHVsZUFjdGl2aXR5U3Bva2VuIiwiTW9kdWxlQWN0aXZpdHlNdWx0aXBsZUNob2ljZSIsImxhYmVsIiwiZG9uZSIsInRvdGFsTWVzc2FnZXMiLCJqb2luIiwibWVzc2FnZUNvdW50ZXIiLCJoYXNBbGVydHMiLCJJY29uSXRlbSIsInBhcnRpY2lwYW50VXJpIiwib3BlbkRyYXdlciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhbHQiLCJfaWNvbkJveCIsIkljb25Cb3giLCJhcyIsIkRyYXdlckFsZXJ0SXRlbSIsIml0ZXJhdGlvbiIsImFzc2lzdGFudCIsIkFQUCIsIkFQUF9OQU1FIiwiUGFnZUNvbnRhaW5lciIsImNsYXNzd29ya3MiLCJEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0IiwiX2RyYXdlciIsIl9kcmF3ZXIyIiwiX2RyYXdlckNoYXQiLCJfd2FsbCIsIkFzaWRlRHJhd2VyIiwic2hvd0RyYXdlciIsInB1c2hTdGF0ZSIsInBvc2l0aW9uIiwid2FsbCIsIldhbGwiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiX3VzZXJEYXRhIiwiSGVhZGVyIiwib3duZXIiLCJvbkNsYXNzcm9vbUNsaWNrIiwiRW50aXR5SW1hZ2UiLCJVc2VyRGF0YSIsImFjdGlvbnMiLCJfZm9ybSIsIl9hY3Rpdml0eUZpbHRlciIsIlN0dWRlbnRzSGVhZGVyIiwibGlzdENscyIsInJlZnJlc2hpbmciLCJzZXRSZWZyZXNoaW5nIiwib25GaWx0ZXIiLCJjdXJyZW50VGFyZ2V0IiwibGlzdCIsInN0dWRlbnRzIiwiSW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwic3R1ZGVudEhlYWRlciIsImRpc2FibGVkIiwiXyIsIl9hc2lkZURyYXdlciIsIl9oZWFkZXIiLCJfZ2VuZXJhbCIsIl9zdHVkZW50SGVhZGVyIiwiX3ZpZXciLCJzZXRUb3RhbFBhcnRpY2lwYW50cyIsInN0YXRlIiwic2V0U3RhdGUiLCJnZXRQcm9wZXJ0aWVzIiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsIlBhZ2VMb2FkZXIiLCJkcmF3ZXJWYWx1ZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsL0RBVEEudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0aWVzLnRzIiwiL3RzL21vZGVsL2FjdGl2aXRpZXMvYWN0aXZpdHkudHMiLCIvdHMvbW9kZWwvaW5kZXgudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvYWN0aXZpdHkudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvc3Bva2VuLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvcGFydGljaXBhbnRzLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wcm92aWRlci50cyIsIi90cy9tb2RlbC9wcm92aWRlci50cyIsIi90eXBlcy50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy80MDQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvY2hhdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2NoYXQtdGFiLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9vYmplY3RpdmVzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2Fuc3dlci50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NoYXQtdGFiLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZHJhd2VyLWNoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9nZW5lcmFsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2RldGFpbHMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2xhYmVsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvc3RhdHVzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWN0aXZpdHktaWNvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lbXB0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pY29uLWJveC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9vYmplY3RpdmUtaWNvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kcmF3ZXIvYXNpZGUtZHJhd2VyLnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvY29udGVudC50c3giLCIvdHMvdmlld3MvZHJhd2VyL3dhbGwudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FjdGl2aXR5LWZpbHRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvc3R1ZGVudC1oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci91c2VyLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSFIsZ0JBQUEsQ0FBQVMsWUFBWSxDQUFDQyxhQUFhLEVBQUU7Y0FFNUIsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBRTNDO1lBRUE7OztZQUdBRSxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFaLEtBQU0sQ0FBQ2EsS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFBLENBQUFoQixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7VUM3QkQsTUFBTWlCLElBQUksR0FBRztZQUNaQyxNQUFNLEVBQUUsSUFBSTtZQUNaRCxJQUFJLEVBQUU7Y0FDTEUsVUFBVSxFQUFFO2dCQUNYQyxLQUFLLEVBQUU7a0JBQ04sc0NBQXNDLEVBQUU7b0JBQ3ZDQyxRQUFRLEVBQUUsQ0FBQztvQkFDWEMsTUFBTSxFQUFFO3NCQUNQQyxPQUFPLEVBQUU7d0JBQ1JDLFFBQVEsRUFDUCx3RkFBd0Y7d0JBQ3pGQyxJQUFJLEVBQUUsYUFBYTt3QkFDbkJDLEVBQUUsRUFBRTt1QkFDSjtzQkFDREMsUUFBUSxFQUFFLFNBQVM7c0JBQ25CQyxFQUFFLEVBQUUsSUFBSTtzQkFDUkMsV0FBVyxFQUNWLGlOQUFpTjtzQkFDbE5DLFFBQVEsRUFBRSxJQUFJO3NCQUNkQyxLQUFLLEVBQUUsK0JBQStCO3NCQUN0Q0MsSUFBSSxFQUFFLFFBQVE7c0JBQ2RDLE9BQU8sRUFBRSxFQUFFO3NCQUNYQyxTQUFTLEVBQUUsK0VBQStFO3NCQUMxRmIsUUFBUSxFQUFFLElBQUk7c0JBQ2RjLE1BQU0sRUFBRSxJQUFJO3NCQUNaQyxXQUFXLEVBQUUsYUFBYTtzQkFDMUJDLFdBQVcsRUFBRSxhQUFhO3NCQUMxQlgsRUFBRSxFQUFFLHNDQUFzQztzQkFDMUNSLE1BQU0sRUFBRTtxQkFDUjtvQkFDRFcsV0FBVyxFQUNWLDBiQUEwYjtvQkFDM2JTLFNBQVMsRUFBRTtzQkFDVkMsS0FBSyxFQUFFO3dCQUNOQyxZQUFZLEVBQ1gsMk5BQTJOO3dCQUM1TkMsSUFBSSxFQUFFLGdEQUFnRDt3QkFDdERDLFVBQVUsRUFBRSxDQUNYOzBCQUNDakIsSUFBSSxFQUFFLDBCQUEwQjswQkFDaENTLFNBQVMsRUFDUjt5QkFDRCxFQUNEOzBCQUNDVCxJQUFJLEVBQUUsdUJBQXVCOzBCQUM3QlMsU0FBUyxFQUNSO3lCQUNELEVBQ0Q7MEJBQ0NULElBQUksRUFBRSwyQkFBMkI7MEJBQ2pDUyxTQUFTLEVBQ1I7eUJBQ0Q7dUJBRUY7c0JBQ0RTLFNBQVMsRUFBRTtxQkFDWDtvQkFDRGIsUUFBUSxFQUFFLElBQUk7b0JBQ2RKLEVBQUUsRUFBRSxzQ0FBc0M7b0JBQzFDTSxJQUFJLEVBQUUsZ0JBQWdCO29CQUN0QkQsS0FBSyxFQUFFLHNEQUFzRDtvQkFDN0RFLE9BQU8sRUFBRSxFQUFFO29CQUNYQyxTQUFTLEVBQ1I7bUJBQ0Q7a0JBQ0Qsc0NBQXNDLEVBQUU7b0JBQ3ZDYixRQUFRLEVBQUUsQ0FBQztvQkFDWEMsTUFBTSxFQUFFO3NCQUNQQyxPQUFPLEVBQUU7d0JBQ1JDLFFBQVEsRUFDUCx3RkFBd0Y7d0JBQ3pGQyxJQUFJLEVBQUUsYUFBYTt3QkFDbkJDLEVBQUUsRUFBRTt1QkFDSjtzQkFDREMsUUFBUSxFQUFFLFNBQVM7c0JBQ25CQyxFQUFFLEVBQUUsSUFBSTtzQkFDUkMsV0FBVyxFQUNWLGlOQUFpTjtzQkFDbE5DLFFBQVEsRUFBRSxJQUFJO3NCQUNkQyxLQUFLLEVBQUUsK0JBQStCO3NCQUN0Q0MsSUFBSSxFQUFFLFFBQVE7c0JBQ2RDLE9BQU8sRUFBRSxFQUFFO3NCQUNYQyxTQUFTLEVBQUUsK0VBQStFO3NCQUMxRmIsUUFBUSxFQUFFLElBQUk7c0JBQ2RjLE1BQU0sRUFBRSxJQUFJO3NCQUNaQyxXQUFXLEVBQUUsYUFBYTtzQkFDMUJDLFdBQVcsRUFBRSxhQUFhO3NCQUMxQlgsRUFBRSxFQUFFLHNDQUFzQztzQkFDMUNSLE1BQU0sRUFBRTtxQkFDUjtvQkFDRFcsV0FBVyxFQUNWLHNZQUFzWTtvQkFDdllTLFNBQVMsRUFBRTtzQkFDVkMsS0FBSyxFQUFFO3dCQUNOQyxZQUFZLEVBQ1gscVBBQXFQO3dCQUN0UEMsSUFBSSxFQUFFLFNBQVM7d0JBQ2ZDLFVBQVUsRUFBRSxDQUNYOzBCQUNDakIsSUFBSSxFQUFFLGdDQUFnQzswQkFDdENTLFNBQVMsRUFDUjt5QkFDRCxFQUNEOzBCQUNDVCxJQUFJLEVBQUUsc0NBQXNDOzBCQUM1Q1MsU0FBUyxFQUFFO3lCQUNYO3VCQUVGO3NCQUNEUyxTQUFTLEVBQUU7d0JBQ1ZDLFNBQVMsRUFDUix3YkFBd2I7d0JBQ3piQyxPQUFPLEVBQ04saVRBQWlUO3dCQUNsVEMsUUFBUSxFQUNQOztxQkFFRjtvQkFDRGhCLFFBQVEsRUFBRSxJQUFJO29CQUNkSixFQUFFLEVBQUUsc0NBQXNDO29CQUMxQ00sSUFBSSxFQUFFLGdCQUFnQjtvQkFDdEJELEtBQUssRUFBRSwrQkFBK0I7b0JBQ3RDRSxPQUFPLEVBQUUsRUFBRTtvQkFDWEMsU0FBUyxFQUNSO21CQUNEO2tCQUNELHNDQUFzQyxFQUFFO29CQUN2Q2IsUUFBUSxFQUFFLENBQUM7b0JBQ1hDLE1BQU0sRUFBRTtzQkFDUEMsT0FBTyxFQUFFO3dCQUNSQyxRQUFRLEVBQ1Asd0ZBQXdGO3dCQUN6RkMsSUFBSSxFQUFFLGFBQWE7d0JBQ25CQyxFQUFFLEVBQUU7dUJBQ0o7c0JBQ0RDLFFBQVEsRUFBRSxTQUFTO3NCQUNuQkMsRUFBRSxFQUFFLElBQUk7c0JBQ1JDLFdBQVcsRUFDVixpTkFBaU47c0JBQ2xOQyxRQUFRLEVBQUUsSUFBSTtzQkFDZEMsS0FBSyxFQUFFLCtCQUErQjtzQkFDdENDLElBQUksRUFBRSxRQUFRO3NCQUNkQyxPQUFPLEVBQUUsRUFBRTtzQkFDWEMsU0FBUyxFQUFFLCtFQUErRTtzQkFDMUZiLFFBQVEsRUFBRSxJQUFJO3NCQUNkYyxNQUFNLEVBQUUsSUFBSTtzQkFDWkMsV0FBVyxFQUFFLGFBQWE7c0JBQzFCQyxXQUFXLEVBQUUsYUFBYTtzQkFDMUJYLEVBQUUsRUFBRSxzQ0FBc0M7c0JBQzFDUixNQUFNLEVBQUU7cUJBQ1I7b0JBQ0RXLFdBQVcsRUFDVix1TUFBdU07b0JBQ3hNUyxTQUFTLEVBQUU7c0JBQ1ZDLEtBQUssRUFBRTt3QkFDTkMsWUFBWSxFQUNYLDJSQUEyUjt3QkFDNVJDLElBQUksRUFBRSxTQUFTO3dCQUNmTSxPQUFPLEVBQ04sa0hBQWtIO3dCQUNuSEwsVUFBVSxFQUFFLENBQ1g7MEJBQ0NqQixJQUFJLEVBQUUsdUJBQXVCOzBCQUM3QlMsU0FBUyxFQUNSO3lCQUNELEVBQ0Q7MEJBQ0NULElBQUksRUFBRSx1QkFBdUI7MEJBQzdCUyxTQUFTLEVBQ1I7eUJBQ0QsRUFDRDswQkFDQ1QsSUFBSSxFQUFFLHNCQUFzQjswQkFDNUJTLFNBQVMsRUFDUjt5QkFDRCxFQUNEOzBCQUNDVCxJQUFJLEVBQUUsc0JBQXNCOzBCQUM1QlMsU0FBUyxFQUFFO3lCQUNYO3VCQUVGO3NCQUNEUyxTQUFTLEVBQUU7cUJBQ1g7b0JBQ0RiLFFBQVEsRUFBRSxJQUFJO29CQUNkSixFQUFFLEVBQUUsc0NBQXNDO29CQUMxQ00sSUFBSSxFQUFFLFFBQVE7b0JBQ2RELEtBQUssRUFBRSxpREFBaUQ7b0JBQ3hERSxPQUFPLEVBQUUsRUFBRTtvQkFDWEMsU0FBUyxFQUNSOztpQkFFRjtnQkFDRGMsS0FBSyxFQUFFLENBQ04sc0NBQXNDLEVBQ3RDLHNDQUFzQyxFQUN0QyxzQ0FBc0M7ZUFFdkM7Y0FDRDFCLE1BQU0sRUFBRTtnQkFDUEQsUUFBUSxFQUFFLElBQUk7Z0JBQ2RFLE9BQU8sRUFBRTtrQkFDUkMsUUFBUSxFQUFFLHdGQUF3RjtrQkFDbEdDLElBQUksRUFBRSxhQUFhO2tCQUNuQkMsRUFBRSxFQUFFO2lCQUNKO2dCQUNEQyxRQUFRLEVBQUUsU0FBUztnQkFDbkJFLFdBQVcsRUFDVixpTkFBaU47Z0JBQ2xOQyxRQUFRLEVBQUUsSUFBSTtnQkFDZEosRUFBRSxFQUFFLHNDQUFzQztnQkFDMUNLLEtBQUssRUFBRSwrQkFBK0I7Z0JBQ3RDRSxPQUFPLEVBQUUsRUFBRTtnQkFDWEMsU0FBUyxFQUFFO2VBQ1g7Y0FDRGUsU0FBUyxFQUFFO2dCQUNWeEIsSUFBSSxFQUFFLG1CQUFtQjtnQkFDekJDLEVBQUUsRUFBRSxzQ0FBc0M7Z0JBQzFDTyxPQUFPLEVBQUU7ZUFDVDtjQUNEUCxFQUFFLEVBQUUsc0NBQXNDO2NBQzFDd0IsWUFBWSxFQUFFO2dCQUNiLDhCQUE4QixFQUFFO2tCQUMvQkMsSUFBSSxFQUFFO29CQUNMM0IsUUFBUSxFQUFFLHdGQUF3RjtvQkFDbEdDLElBQUksRUFBRSxhQUFhO29CQUNuQkMsRUFBRSxFQUFFO21CQUNKO2tCQUNEUCxVQUFVLEVBQUU7b0JBQ1gsc0NBQXNDLEVBQUU7c0JBQ3ZDRixJQUFJLEVBQUU7d0JBQ0xtQyxRQUFRLEVBQUU7MEJBQ1RDLEtBQUssRUFBRTt5QkFDUDt3QkFDREMsUUFBUSxFQUFFOzBCQUNUQyxPQUFPLEVBQ04seUtBQXlLOzBCQUMxS2IsVUFBVSxFQUFFLENBQ1g7NEJBQ0NqQixJQUFJLEVBQUUsdUJBQXVCOzRCQUM3QlMsU0FBUyxFQUNSLHFLQUFxSzs0QkFDdEtoQixNQUFNLEVBQUU7OEJBQ1BPLElBQUksRUFBRSxXQUFXOzhCQUNqQitCLElBQUksRUFBRTs7MkJBRVAsRUFDRDs0QkFDQy9CLElBQUksRUFBRSx1QkFBdUI7NEJBQzdCUyxTQUFTLEVBQ1Isb0lBQW9JOzRCQUNySWhCLE1BQU0sRUFBRTs4QkFDUE8sSUFBSSxFQUFFLGFBQWE7OEJBQ25CK0IsSUFBSSxFQUFFOzsyQkFFUCxFQUNEOzRCQUNDL0IsSUFBSSxFQUFFLHNCQUFzQjs0QkFDNUJTLFNBQVMsRUFDUixtSkFBbUo7NEJBQ3BKaEIsTUFBTSxFQUFFOzhCQUNQTyxJQUFJLEVBQUUsV0FBVzs4QkFDakIrQixJQUFJLEVBQUU7OzJCQUVQLEVBQ0Q7NEJBQ0MvQixJQUFJLEVBQUUsc0JBQXNCOzRCQUM1QlMsU0FBUyxFQUNSLGdKQUFnSjs0QkFDakpoQixNQUFNLEVBQUU7OEJBQ1BPLElBQUksRUFBRSxhQUFhOzhCQUNuQitCLElBQUksRUFBRTs7MkJBRVA7Ozs7O2lCQU1OO2dCQUNEQyw0QkFBNEIsRUFBRTtrQkFDN0JOLElBQUksRUFBRTtvQkFDTDNCLFFBQVEsRUFDUCw0RkFBNEY7b0JBQzdGQyxJQUFJLEVBQUUsYUFBYTtvQkFDbkJDLEVBQUUsRUFBRTttQkFDSjtrQkFDRFAsVUFBVSxFQUFFO29CQUNYLHNDQUFzQyxFQUFFO3NCQUN2Q0YsSUFBSSxFQUFFO3dCQUNMbUMsUUFBUSxFQUFFOzBCQUNUQyxLQUFLLEVBQUU7eUJBQ1A7d0JBQ0RDLFFBQVEsRUFBRTswQkFDVEMsT0FBTyxFQUNOLDJPQUEyTzswQkFDNU9iLFVBQVUsRUFBRSxDQUNYOzRCQUNDakIsSUFBSSxFQUFFLHVCQUF1Qjs0QkFDN0JTLFNBQVMsRUFDUiwrSkFBK0o7NEJBQ2hLaEIsTUFBTSxFQUFFOzhCQUNQTyxJQUFJLEVBQUUsYUFBYTs4QkFDbkIrQixJQUFJLEVBQUU7OzJCQUVQLEVBQ0Q7NEJBQ0MvQixJQUFJLEVBQUUsdUJBQXVCOzRCQUM3QlMsU0FBUyxFQUFFLGFBQWE7NEJBQ3hCaEIsTUFBTSxFQUFFOzhCQUNQTyxJQUFJLEVBQUUsYUFBYTs4QkFDbkIrQixJQUFJLEVBQUU7OzJCQUVQLEVBQ0Q7NEJBQ0MvQixJQUFJLEVBQUUsc0JBQXNCOzRCQUM1QlMsU0FBUyxFQUNSLDRJQUE0STs0QkFDN0loQixNQUFNLEVBQUU7OEJBQ1BPLElBQUksRUFBRSxXQUFXOzhCQUNqQitCLElBQUksRUFBRTs7MkJBRVAsRUFDRDs0QkFDQy9CLElBQUksRUFBRSxzQkFBc0I7NEJBQzVCUyxTQUFTLEVBQUUsYUFBYTs0QkFDeEJoQixNQUFNLEVBQUU7OEJBQ1BPLElBQUksRUFBRSxhQUFhOzhCQUNuQitCLElBQUksRUFBRTs7MkJBRVA7Ozs7Ozs7O1dBU1Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbFZELElBQUFFLFNBQUEsR0FBQTlELE9BQUE7VUFFTSxNQUFPK0Qsb0JBQW9CO1lBQ2hDLENBQUF2QyxLQUFNLEdBQXlCLEVBQUU7WUFDakMsQ0FBQXdDLEdBQUksR0FBb0MsSUFBSUMsR0FBRyxFQUFFO1lBQ2pELElBQUl6QyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUEwQyxTQUFVO1lBQ1YsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFDQUMsWUFBWUQsU0FBUyxFQUFFN0MsSUFBSTtjQUMxQixJQUFJLENBQUMsQ0FBQTZDLFNBQVUsR0FBR0EsU0FBUztjQUMzQjdDLElBQUksQ0FBQytCLEtBQUssQ0FBQ2dCLE9BQU8sQ0FBQ3RDLEVBQUUsSUFBRztnQkFDdkIsTUFBTXVDLFFBQVEsR0FBRyxJQUFJUCxTQUFBLENBQUFRLGtCQUFrQixDQUFDakQsSUFBSSxDQUFDRyxLQUFLLENBQUNNLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLENBQUMsQ0FBQWtDLEdBQUksQ0FBQ08sR0FBRyxDQUFDekMsRUFBRSxFQUFFdUMsUUFBUSxDQUFDO2dCQUMzQixJQUFJLENBQUMsQ0FBQTdDLEtBQU0sQ0FBQ2dELElBQUksQ0FBQ0gsUUFBUSxDQUFDO2NBQzNCLENBQUMsQ0FBQztZQUNIO1lBRUFJLEdBQUdBLENBQUMzQyxFQUFVO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQWtDLEdBQUksQ0FBQ1MsR0FBRyxDQUFDM0MsRUFBRSxDQUFDO1lBQ3pCO1lBQ0FkLEdBQUdBLENBQUNjLEVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBa0MsR0FBSSxDQUFDaEQsR0FBRyxDQUFDYyxFQUFFLENBQUM7WUFDekI7O1VBQ0FWLE9BQUEsQ0FBQTJDLG9CQUFBLEdBQUFBLG9CQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdCRCxJQUFBVyxLQUFBLEdBQUExRSxPQUFBO1VBR00sTUFBT3NFLGtCQUFtQixTQUFRSSxLQUFBLENBQUFDLElBQUk7WUFZM0MsQ0FBQUMsZUFBZ0IsR0FBNkIsSUFBSVgsR0FBRyxFQUFFO1lBQ3RELENBQUFYLFlBQWEsR0FBa0IsRUFBRTtZQUNqQyxJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUNBYSxZQUFZOUMsSUFBSTtjQUNmLEtBQUssQ0FBQztnQkFDTHdELE1BQU0sRUFBRSxxQkFBcUI7Z0JBQzdCLEdBQUd4RCxJQUFJO2dCQUNQeUQsVUFBVSxFQUFFLENBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixhQUFhLEVBQ2IsV0FBVyxFQUNYLFVBQVUsRUFDVixJQUFJLEVBQ0osTUFBTSxFQUNOLE9BQU8sRUFDUCxTQUFTLEVBQ1QsV0FBVztlQUVaLENBQUM7Y0FFRjtZQUNEO1lBRUFDLGNBQWNBLENBQUNDLFdBQXdCO2NBQ3RDLElBQUksQ0FBQyxDQUFBMUIsWUFBYSxDQUFDa0IsSUFBSSxDQUFDUSxXQUFXLENBQUM7Y0FDcEMsSUFBSSxDQUFDLENBQUFKLGVBQWdCLENBQUNMLEdBQUcsQ0FBQ1MsV0FBVyxDQUFDbEQsRUFBRSxFQUFFa0QsV0FBVyxDQUFDO1lBQ3ZEO1lBRUFDLGNBQWNBLENBQUNuRCxFQUFVO2NBQ3hCLE9BQU8sSUFBSSxDQUFDLENBQUE4QyxlQUFnQixDQUFDNUQsR0FBRyxDQUFDYyxFQUFFLENBQUM7WUFDckM7WUFFQW9ELGNBQWNBLENBQUNwRCxFQUFVO2NBQ3hCLE9BQU8sSUFBSSxDQUFDLENBQUE4QyxlQUFnQixDQUFDSCxHQUFHLENBQUMzQyxFQUFFLENBQUM7WUFDckM7O1VBQ0FWLE9BQUEsQ0FBQWtELGtCQUFBLEdBQUFBLGtCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JERCxJQUFBYSxNQUFBLEdBQUFuRixPQUFBO1VBQ0EsSUFBQW9GLElBQUEsR0FBQXBGLE9BQUE7VUFDQSxJQUFBcUYsT0FBQSxHQUFBckYsT0FBQTtVQUNBLElBQUFzRixRQUFBLEdBQUF0RixPQUFBO1VBR0EsSUFBQXVGLGFBQUEsR0FBQXZGLE9BQUE7VUFDQSxJQUFBd0YsV0FBQSxHQUFBeEYsT0FBQTtVQUVNLE1BQU95RixTQUFVLFNBQVFOLE1BQUEsQ0FBQU8sYUFBeUI7WUFDdkQsQ0FBQUMsR0FBSTtZQU1KLENBQUFyQyxZQUFhO1lBRWIsSUFBSUEsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFDQSxDQUFBNUIsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBQ0EsQ0FBQTJCLFNBQVU7WUFDVixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUNBLENBQUE5QixVQUFXO1lBQ1gsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFQSxDQUFBcUUsS0FBTSxHQUEwQyxJQUFJO1lBQ3BELElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSUMsaUJBQWlCQSxDQUFBO2NBQ3BCLE9BQU9DLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ3pDLFlBQVksQ0FBQzlCLEtBQUssQ0FBQyxDQUFDd0UsTUFBTTtZQUNuRDtZQUVBLElBQUlDLGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxJQUFJLENBQUMzQyxZQUFZLENBQUM5QixLQUFLLENBQUMwRSxNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFQyxJQUFJLEtBQUk7Z0JBQ25EO2dCQUNBLE9BQU9ELEdBQUc7Z0JBQ1YsQ0FBQztjQUNGLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTjtZQUNBLElBQUlFLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQy9DLFlBQVksQ0FBQzlCLEtBQUssQ0FBQzBFLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVDLElBQUksS0FBSTtnQkFDbkQ7Z0JBQ0EsT0FBT0QsR0FBRztjQUNYLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTjtZQUNBaEMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBd0IsR0FBSSxHQUFHLElBQUlQLElBQUEsQ0FBQWtCLEdBQUcsQ0FBQ2pCLE9BQUEsQ0FBQWtCLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMvQyxJQUFJLENBQUMsQ0FBQXBELFlBQWEsR0FBRyxJQUFJaUMsYUFBQSxDQUFBb0IsWUFBWSxDQUFDLElBQUksQ0FBQztjQUMzQyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztjQUN4RUMsVUFBVSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtZQUN4QjtZQUVBLE1BQU03RixJQUFJQSxDQUFDYSxFQUFFO2NBQ1osSUFBSSxDQUFDLENBQUE2RCxHQUFJLENBQUNvQixNQUFNLENBQUN6QixRQUFBLENBQUEwQixjQUFjLENBQUN6RCxJQUFJLENBQUMwRCxLQUFLLENBQUM7Y0FFM0MsTUFBTUMsUUFBUSxHQUFjLE1BQU0sSUFBSSxDQUFDLENBQUF2QixHQUFJLENBQUMzRSxHQUFHLENBQUMsZ0JBQWdCYyxFQUFFLFlBQVksQ0FBQztjQUUvRSxJQUFJLENBQUNvRixRQUFRLENBQUM1RixNQUFNLEVBQUU7Z0JBQ3JCLElBQUksT0FBTzRGLFFBQVEsQ0FBQ3RCLEtBQUssS0FBSyxRQUFRLEVBQUU7a0JBQ3ZDLElBQUksQ0FBQyxDQUFBQSxLQUFNLEdBQUdzQixRQUFRLENBQUN0QixLQUFLOztnQkFFN0IsTUFBTSxJQUFJdUIsS0FBSyxDQUFDRCxRQUFRLENBQUN0QixLQUFLLEVBQUV3QixJQUFJLENBQUM7O2NBR3RDLElBQUl0QixNQUFNLENBQUNDLElBQUksQ0FBQ21CLFFBQVEsQ0FBQzdGLElBQUksQ0FBQyxDQUFDMkUsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDNUMsSUFBSSxDQUFDcUIsS0FBSyxHQUFHLEtBQUs7Z0JBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUk7Z0JBQ2pCOztjQUdELE1BQU07Z0JBQUU1RixNQUFNO2dCQUFFNEIsWUFBWTtnQkFBRS9CLFVBQVU7Z0JBQUU4QixTQUFTO2dCQUFFdkIsRUFBRSxFQUFFeUY7Y0FBVyxDQUFFLEdBQUdMLFFBQVEsQ0FBQzdGLElBQUk7Y0FFdEYsSUFBSSxDQUFDLENBQUFFLFVBQVcsR0FBRyxJQUFJaUUsV0FBQSxDQUFBekIsb0JBQW9CLENBQUMsSUFBSSxFQUFFeEMsVUFBVSxDQUFDO2NBQzdELElBQUksQ0FBQyxDQUFBK0IsWUFBYSxDQUFDckMsSUFBSSxDQUFDcUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBL0IsVUFBVyxDQUFDO2NBQ3ZEc0YsVUFBVSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtjQUN2QixJQUFJLENBQUMsQ0FBQXBGLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQTJCLFNBQVUsR0FBR0EsU0FBUztjQUUzQixJQUFJLENBQUN2QixFQUFFLEdBQUd5RixXQUFXO2NBRXJCLElBQUksQ0FBQ0YsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtZQUNsQjtZQUVBLE1BQU1FLFVBQVVBLENBQUNDLFFBQVE7Y0FDeEIsSUFBSSxDQUFDLENBQUE5QixHQUFJLENBQUNvQixNQUFNLENBQUN6QixRQUFBLENBQUEwQixjQUFjLENBQUN6RCxJQUFJLENBQUMwRCxLQUFLLENBQUM7Y0FDM0M7Y0FDQSxNQUFNQyxRQUFRLEdBQWMsTUFBTSxJQUFJLENBQUMsQ0FBQXZCLEdBQUksQ0FBQytCLElBQUksQ0FDL0MsZ0JBQWdCLElBQUksQ0FBQzVGLEVBQUUsYUFBYTJGLFFBQVEsQ0FBQzNGLEVBQUUsZ0JBQWdCLEVBQy9ELEVBQUUsQ0FDRjtjQUNEMkYsUUFBUSxDQUFDbEQsR0FBRyxDQUFDO2dCQUFFb0QsT0FBTyxFQUFFVCxRQUFRLENBQUM3RixJQUFJLENBQUNzRztjQUFPLENBQUUsQ0FBQztjQUVoRCxPQUFPVCxRQUFRO1lBQ2hCOztVQUNBOUYsT0FBQSxDQUFBcUUsU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNHRCxJQUFBZixLQUFBLEdBQUExRSxPQUFBO1VBVU0sTUFBTzRILG1CQUFvQixTQUFRbEQsS0FBQSxDQUFBQyxJQUFJO1lBRTVDUixZQUFZO2NBQUVXLFVBQVUsR0FBRyxFQUFFO2NBQUUsR0FBR3pEO1lBQUksQ0FBRTtjQUN2QyxLQUFLLENBQUM7Z0JBQ0wsR0FBR0EsSUFBSTtnQkFDUHdELE1BQU0sRUFBRSxzQkFBc0I7Z0JBQzlCQyxVQUFVLEVBQUUsQ0FDWCxRQUFRLEVBQ1IsVUFBVSxFQUNWLGNBQWMsRUFDZCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFdBQVcsRUFDWCxNQUFNLEVBQ04sVUFBVSxFQUNWLFdBQVcsRUFDWCxHQUFHQSxVQUFVO2VBRWQsQ0FBQztZQUNIOztVQUNBMUQsT0FBQSxDQUFBd0csbUJBQUEsR0FBQUEsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JELElBQUE5RCxTQUFBLEdBQUE5RCxPQUFBO1VBRUEsSUFBQTZILGVBQUEsR0FBQTdILE9BQUE7VUFDQSxJQUFBOEgsT0FBQSxHQUFBOUgsT0FBQTtVQUVNLE1BQU8rSCxxQkFBcUI7WUFDakMsQ0FBQXZHLEtBQU0sR0FBMEIsRUFBRTtZQUNsQyxDQUFBd0MsR0FBSSxHQUFxQyxJQUFJQyxHQUFHLEVBQUU7WUFDbEQsQ0FBQStELE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUNBLElBQUl4RyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUF3QyxHQUFJLENBQUNpRSxNQUFNLEVBQUUsQ0FBQztZQUMvQjtZQUVBOUQsWUFBWTZELE1BQW1CLEVBQUV4RyxLQUFLO2NBQ3JDLElBQUksQ0FBQyxDQUFBQSxLQUFNLEdBQUdBLEtBQUs7Y0FDbkIsTUFBTXVFLElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFJLENBQUN2RSxLQUFLLENBQUM7Y0FDL0J1RSxJQUFJLENBQUMvQixHQUFHLENBQUNsQyxFQUFFLElBQUc7Z0JBQ2IsTUFBTW9HLFFBQVEsR0FBR0YsTUFBTSxDQUFDOUQsU0FBUyxDQUFDM0MsVUFBVSxDQUFDUCxHQUFHLENBQUNjLEVBQUUsQ0FBQztnQkFDcEQsTUFBTXVDLFFBQVEsR0FBRyxJQUFJLENBQUM4RCxtQkFBbUIsQ0FBQ0QsUUFBUSxFQUFFMUcsS0FBSyxDQUFDTSxFQUFFLENBQUMsRUFBRVQsSUFBSSxDQUFDO2dCQUVwRTZHLFFBQVEsQ0FBQ25ELGNBQWMsQ0FBQ2lELE1BQU0sQ0FBQztnQkFDL0IsSUFBSSxDQUFDLENBQUFBLE1BQU8sR0FBR0EsTUFBTTtnQkFDckIsSUFBSSxDQUFDLENBQUFoRSxHQUFJLENBQUNPLEdBQUcsQ0FBQ3pDLEVBQUUsRUFBRXVDLFFBQVEsQ0FBQztnQkFDM0IsT0FBT0EsUUFBUTtjQUNoQixDQUFDLENBQUM7Y0FDRixJQUFJLENBQUMrRCxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDckM7WUFFQTVELEdBQUdBLENBQUMzQyxFQUFVO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQWtDLEdBQUksQ0FBQ1MsR0FBRyxDQUFDM0MsRUFBRSxDQUFDO1lBQ3pCO1lBQ0FkLEdBQUdBLENBQUNjLEVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBa0MsR0FBSSxDQUFDaEQsR0FBRyxDQUFDYyxFQUFFLENBQUM7WUFDekI7WUFFQXFHLG1CQUFtQkEsQ0FBQ0QsUUFBUSxFQUFFN0csSUFBSSxHQUFHLEVBQUU7Y0FDdEMsTUFBTWlILE9BQU8sR0FBRztnQkFDZkMsTUFBTSxFQUFFVCxPQUFBLENBQUFVLHlCQUF5QjtnQkFDakNDLE9BQU8sRUFBRTNFLFNBQUEsQ0FBQThELG1CQUFtQjtnQkFDNUIsaUJBQWlCLEVBQUVDLGVBQUEsQ0FBQWE7ZUFDbkI7Y0FFRCxJQUFJLElBQUksQ0FBQ2pFLEdBQUcsQ0FBQ3lELFFBQVEsQ0FBQ3BHLEVBQUUsQ0FBQyxFQUFFO2dCQUMxQixPQUFPLElBQUksQ0FBQ2QsR0FBRyxDQUFDa0gsUUFBUSxDQUFDcEcsRUFBRSxDQUFDOztjQUc3QixNQUFNNkcsUUFBUSxHQUFHTCxPQUFPLENBQUNKLFFBQVEsQ0FBQzlGLElBQUksQ0FBQyxJQUFJa0csT0FBTyxDQUFDRyxPQUFPO2NBQzFELE1BQU1wRSxRQUFRLEdBQUcsSUFBSXNFLFFBQVEsQ0FBQztnQkFDN0JULFFBQVE7Z0JBQ1IsR0FBRzdHO2VBQ0gsQ0FBQztjQUNGLE9BQU9nRCxRQUFRO1lBQ2hCO1lBRUErRCxNQUFNQSxDQUFDNUcsS0FBSztjQUNYLE1BQU11RSxJQUFJLEdBQUdELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDdkUsS0FBSyxDQUFDO2NBRS9CdUUsSUFBSSxDQUFDM0IsT0FBTyxDQUFDdEMsRUFBRSxJQUFHO2dCQUNqQixNQUFNOEcsSUFBSSxHQUFHcEgsS0FBSyxDQUFDTSxFQUFFLENBQUM7Z0JBRXRCLElBQUksQ0FBQzhHLElBQUksQ0FBQ3ZILElBQUksRUFBRTtrQkFDZjs7Z0JBR0QsTUFBTTZHLFFBQVEsR0FBRyxJQUFJLENBQUNGLE1BQU0sQ0FBQzlELFNBQVMsQ0FBQzNDLFVBQVUsQ0FBQ1AsR0FBRyxDQUFDYyxFQUFFLENBQUM7Z0JBQ3pELE1BQU11QyxRQUFRLEdBQUcsSUFBSSxDQUFDOEQsbUJBQW1CLENBQUNELFFBQVEsRUFBRVUsSUFBSSxDQUFDdkgsSUFBSSxDQUFDO2dCQUM5RGdELFFBQVEsQ0FBQ0UsR0FBRyxDQUFDcUUsSUFBSSxDQUFDdkgsSUFBSSxDQUFDO2dCQUV2QixJQUFJLENBQUMsQ0FBQTJDLEdBQUksQ0FBQ08sR0FBRyxDQUFDcUUsSUFBSSxDQUFDOUcsRUFBRSxFQUFFdUMsUUFBUSxDQUFDO2NBQ2pDLENBQUMsQ0FBQztZQUNIOztVQUNBakQsT0FBQSxDQUFBMkcscUJBQUEsR0FBQUEscUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0VELElBQUFyRCxLQUFBLEdBQUExRSxPQUFBO1VBVU0sTUFBTzBJLGlDQUFrQyxTQUFRaEUsS0FBQSxDQUFBQyxJQUFJO1lBRzFELENBQUE3QixVQUFXLEdBQWEsRUFBRTtZQUUxQixJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBLElBQUkrRixTQUFTQSxDQUFBO2NBQ1osSUFBSTtnQkFDSCxPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLEVBQUViLFFBQVEsQ0FBQ3hGLFNBQVMsQ0FBQ0ssU0FBUyxDQUFDaUcsVUFBVSxDQUFDLENBQUNILFNBQVM7ZUFDMUUsQ0FBQyxPQUFPSSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDRixDQUFDLENBQUM7O1lBRWpCO1lBRUEsSUFBSUcsaUJBQWlCQSxDQUFBO2NBQ3BCLE9BQU8sSUFBSSxDQUFDUCxTQUFTLEVBQUU3RSxHQUFHLENBQUMsQ0FBQ3FGLFFBQVEsRUFBRUMsS0FBSyxLQUFJO2dCQUM5QyxPQUFPO2tCQUNOLEdBQUdELFFBQVE7a0JBQ1hFLE1BQU0sRUFBRSxJQUFJLENBQUNDLFNBQVMsR0FBR0YsS0FBSyxDQUFDLENBQUNDLE1BQU07a0JBQ3RDRSxRQUFRLEVBQUUsSUFBSSxDQUFDRCxTQUFTLEdBQUdGLEtBQUssQ0FBQyxDQUFDRztpQkFDbEM7Y0FDRixDQUFDLENBQUM7WUFDSDtZQUVBdEYsWUFBWTtjQUFFVyxVQUFVLEdBQUcsRUFBRTtjQUFFLEdBQUd6RDtZQUFJLENBQUU7Y0FDdkMsS0FBSyxDQUFDO2dCQUNMLEdBQUdBLElBQUk7Z0JBQ1B3RCxNQUFNLEVBQUUsc0JBQXNCO2dCQUM5QkMsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEdBQUdBLFVBQVU7ZUFDekUsQ0FBQztjQUNGLElBQUksQ0FBQyxDQUFBaEMsVUFBVyxHQUFHZ0MsVUFBVTtZQUM5Qjs7VUFDQTFELE9BQUEsQ0FBQXNILGlDQUFBLEdBQUFBLGlDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdDRCxJQUFBaEUsS0FBQSxHQUFBMUUsT0FBQTtVQVVNLE1BQU93SSx5QkFBMEIsU0FBUTlELEtBQUEsQ0FBQUMsSUFBSTtZQUdsRCxJQUFJK0UsS0FBS0EsQ0FBQTtjQUNSLElBQUksSUFBSSxDQUFDVixVQUFVLEVBQUU7Z0JBQ3BCLE9BQU9sRCxNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNpRCxVQUFVLENBQUMsQ0FBQ2hGLEdBQUcsQ0FBQzJGLEdBQUcsSUFBSSxJQUFJLENBQUNYLFVBQVUsQ0FBQ1csR0FBRyxDQUFDLENBQUM7O2NBRXJFLE9BQU8sRUFBRTtZQUNWO1lBRUEsSUFBSUMsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDWixVQUFVLEVBQUU5QyxNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFN0QsU0FBUyxLQUFLNkQsR0FBRyxHQUFHLElBQUksQ0FBQzZDLFVBQVUsQ0FBQzFHLFNBQVMsQ0FBQyxDQUFDdUgsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUMvRjtZQUVBLElBQUliLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQ2MsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFZCxVQUFVO1lBQ3RDO1lBRUEsSUFBSWUsYUFBYUEsQ0FBQTtjQUNoQmIsT0FBTyxDQUFDYyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQ0YsUUFBUSxFQUFFLElBQUksQ0FBQ0EsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ0EsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFQyxhQUFhLENBQUM7Y0FDckYsT0FBTyxJQUFJLENBQUNELFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRUMsYUFBYTtZQUN6QztZQUVBLElBQUlqSCxVQUFVQSxDQUFBO2NBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQ2tHLFVBQVUsRUFBRSxPQUFPLEVBQUU7Y0FDL0IsTUFBTWlCLGNBQWMsR0FBR25FLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ2lELFVBQVUsQ0FBQztjQUVuRCxPQUFPaUIsY0FBYyxDQUFDakcsR0FBRyxDQUFDMkYsR0FBRyxJQUFHO2dCQUMvQixPQUFPO2tCQUNOckgsU0FBUyxFQUFFcUgsR0FBRztrQkFDZCxHQUFHLElBQUksQ0FBQ1gsVUFBVSxDQUFDVyxHQUFHO2lCQUN0QjtjQUNGLENBQUMsQ0FBQztZQUNIO1lBRUF4RixZQUFZO2NBQUVXLFVBQVUsR0FBRyxFQUFFO2NBQUUsR0FBR3pEO1lBQUksQ0FBRTtjQUN2QyxLQUFLLENBQUM7Z0JBQ0wsR0FBR0EsSUFBSTtnQkFDUHdELE1BQU0sRUFBRSxzQkFBc0I7Z0JBQzlCQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVTtlQUNuQyxDQUFDO1lBQ0g7O1VBQ0ExRCxPQUFBLENBQUFvSCx5QkFBQSxHQUFBQSx5QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuREQsSUFBQTlELEtBQUEsR0FBQTFFLE9BQUE7VUFDQSxJQUFBa0ssV0FBQSxHQUFBbEssT0FBQTtVQUVBLElBQUFtSyxTQUFBLEdBQUFuSyxPQUFBO1VBQ0EsSUFBQW9LLFNBQUEsR0FBQXBLLE9BQUE7VUEwQk0sTUFBT3FLLFdBQVksU0FBUTNGLEtBQUEsQ0FBQUMsSUFBSTtZQUdwQyxDQUFBcEQsVUFBVztZQUNYLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBRUEsQ0FBQWtHLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUF2RCxTQUFVO1lBQ1YsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFFQSxJQUFJb0csWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFwRyxTQUFVLENBQUNwQyxFQUFFO1lBQzFCO1lBRUFxQyxZQUFZRCxTQUFTLEVBQUUwRSxJQUFJO2NBQzFCLEtBQUssQ0FBQztnQkFDTC9ELE1BQU0sRUFBRSxhQUFhO2dCQUNyQjBGLFFBQVEsRUFBRUgsU0FBQSxDQUFBSSxtQkFBbUI7Z0JBQzdCLEdBQUc1QixJQUFJO2dCQUNQOUQsVUFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2VBQzNCLENBQUM7Y0FDRixJQUFJLENBQUMsQ0FBQVosU0FBVSxHQUFHQSxTQUFTO2NBRTNCLElBQUksQ0FBQyxDQUFBM0MsVUFBVyxHQUFHLElBQUkySSxXQUFBLENBQUFuQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUVhLElBQUksQ0FBQ3JILFVBQVUsQ0FBQztjQUNuRSxJQUFJLENBQUMsQ0FBQWtHLFFBQVMsR0FBRzBDLFNBQUEsQ0FBQU0sUUFBUSxDQUFDekosR0FBRyxDQUFDO2dCQUFFc0osWUFBWSxFQUFFcEcsU0FBUyxDQUFDcEMsRUFBRTtnQkFBRTRJLE1BQU0sRUFBRSxJQUFJLENBQUNuSCxJQUFJLENBQUN6QixFQUFFO2dCQUFFNkksSUFBSSxFQUFFO2NBQUksQ0FBRSxDQUFDO1lBQ2hHO1lBRUEsTUFBTTFKLElBQUlBLENBQUE7Y0FDVCxNQUFNO2dCQUFFSyxNQUFNO2dCQUFFRDtjQUFJLENBQUUsR0FBUSxNQUFNLEtBQUssQ0FBQ0osSUFBSSxDQUFDO2dCQUFFeUosTUFBTSxFQUFFLElBQUksQ0FBQ25ILElBQUksQ0FBQ3pCO2NBQUUsQ0FBRSxDQUFDO2NBQ3hFLElBQUksQ0FBQ1IsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSTZGLEtBQUssQ0FBQywyQkFBMkIsQ0FBQzs7Y0FHN0MsSUFBSSxDQUFDNUYsVUFBVSxDQUFDNkcsTUFBTSxDQUFDL0csSUFBSSxDQUFDRSxVQUFVLEVBQUVDLEtBQUssQ0FBQztZQUMvQzs7VUFDQUosT0FBQSxDQUFBaUosV0FBQSxHQUFBQSxXQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pFRCxJQUFBTyxZQUFBLEdBQUE1SyxPQUFBO1VBRU0sTUFBTzJHLFlBQVk7WUFDeEIsQ0FBQTNDLEdBQUksR0FBNkIsSUFBSUMsR0FBRyxFQUFFO1lBQzFDLENBQUF6QyxLQUFNLEdBQWtCLEVBQUU7WUFDMUIsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBMEMsU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBQ0FDLFlBQVlELFNBQVM7Y0FDcEIsSUFBSSxDQUFDLENBQUFBLFNBQVUsR0FBR0EsU0FBUztZQUM1QjtZQUVBOzs7OztZQUtBakQsSUFBSUEsQ0FBQ08sS0FBSyxFQUFFRCxVQUFVO2NBQ3JCLE1BQU1zSixVQUFVLEdBQUcvRSxNQUFNLENBQUNDLElBQUksQ0FBQ3ZFLEtBQUssQ0FBQyxDQUFDd0MsR0FBRyxDQUFDbEMsRUFBRSxJQUFHO2dCQUM5QyxNQUFNa0QsV0FBVyxHQUFHLElBQUk0RixZQUFBLENBQUFQLFdBQVcsQ0FBQyxJQUFJLENBQUNuRyxTQUFTLEVBQUU7a0JBQUVwQyxFQUFFO2tCQUFFLEdBQUdOLEtBQUssQ0FBQ00sRUFBRTtnQkFBQyxDQUFFLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxDQUFBTixLQUFNLENBQUNnRCxJQUFJLENBQUNRLFdBQVcsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLENBQUFoQixHQUFJLENBQUNPLEdBQUcsQ0FBQ3pDLEVBQUUsRUFBRWtELFdBQVcsQ0FBQztnQkFDOUIsT0FBT0EsV0FBVztjQUNuQixDQUFDLENBQUM7Y0FDRixJQUFJLENBQUMsQ0FBQXhELEtBQU0sR0FBR3FKLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLRCxDQUFDLENBQUN4SCxJQUFJLENBQUMxQixJQUFJLENBQUNvSixhQUFhLENBQUNELENBQUMsQ0FBQ3pILElBQUksQ0FBQzFCLElBQUksQ0FBQyxDQUFDO1lBQ2hGO1lBRUE0QyxHQUFHQSxDQUFDM0MsRUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFrQyxHQUFJLENBQUNTLEdBQUcsQ0FBQzNDLEVBQUUsQ0FBQztZQUN6QjtZQUNBZCxHQUFHQSxDQUFDYyxFQUFVO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQWtDLEdBQUksQ0FBQ2hELEdBQUcsQ0FBQ2MsRUFBRSxDQUFDO1lBQ3pCOztVQUNBVixPQUFBLENBQUF1RixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbENELElBQUF0QixPQUFBLEdBQUFyRixPQUFBO1VBQ0EsSUFBQW9GLElBQUEsR0FBQXBGLE9BQUE7VUFDQSxJQUFBc0YsUUFBQSxHQUFBdEYsT0FBQTtVQU9PLFdBTFA7Ozs7O1VBS2lCLE1BQU93SyxtQkFBbUI7WUFDMUMsQ0FBQTdFLEdBQUk7WUFFSixDQUFBcUMsTUFBTztZQUNQN0QsWUFBWTZELE1BQVc7Y0FDdEIsSUFBSSxDQUFDLENBQUFyQyxHQUFJLEdBQUcsSUFBSVAsSUFBQSxDQUFBa0IsR0FBRyxDQUFDakIsT0FBQSxDQUFBa0IsT0FBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQy9DLElBQUksQ0FBQyxDQUFBc0IsTUFBTyxHQUFHQSxNQUFNO1lBQ3RCO1lBRUEvRyxJQUFJLEdBQUcsTUFBTTBCLEtBQUssSUFBRztjQUNwQixJQUFJLENBQUMsQ0FBQWdELEdBQUksQ0FBQ29CLE1BQU0sQ0FBQ3pCLFFBQUEsQ0FBQTBCLGNBQWMsQ0FBQ3pELElBQUksQ0FBQzBELEtBQUssQ0FBQztjQUUzQyxNQUFNQyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXZCLEdBQUksQ0FBQzNFLEdBQUcsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUFnSCxNQUFPLENBQUNzQyxZQUFZLFdBQVcsRUFBRTNILEtBQUssQ0FBQztjQUNqRyxNQUFNO2dCQUFFckIsTUFBTTtnQkFBRUQsSUFBSTtnQkFBRXVFO2NBQUssQ0FBRSxHQUFHc0IsUUFBUTtjQUV4QyxJQUFJLENBQUM1RixNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJNkYsS0FBSyxDQUFDLHFCQUFxQixDQUFDOztjQUd2QyxJQUFJeEUsS0FBSyxFQUFFZSxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQXNFLE1BQU8sQ0FBQ2tELFdBQVcsQ0FBQzdKLElBQUksQ0FBQztjQUV6RCxPQUFPO2dCQUFFQyxNQUFNO2dCQUFFRCxJQUFJO2dCQUFFdUU7Y0FBSyxDQUFFO1lBQy9CLENBQUM7O1VBQ0R4RSxPQUFBLENBQUFvSixtQkFBQSxHQUFBQSxtQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQ0QsSUFBQXBGLElBQUEsR0FBQXBGLE9BQUE7VUFFQSxJQUFBcUYsT0FBQSxHQUFBckYsT0FBQTtVQUNBLElBQUFzRixRQUFBLEdBQUF0RixPQUFBO1VBR00sTUFBT21MLFFBQVE7WUFDcEIsQ0FBQXhGLEdBQUk7WUFDSixDQUFBcUMsTUFBTztZQUNQN0QsWUFBWTZELE1BQVc7Y0FDdEIsSUFBSSxDQUFDLENBQUFyQyxHQUFJLEdBQUcsSUFBSVAsSUFBQSxDQUFBa0IsR0FBRyxDQUFDakIsT0FBQSxDQUFBa0IsT0FBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQy9DLElBQUksQ0FBQyxDQUFBc0IsTUFBTyxHQUFHQSxNQUFNO1lBQ3RCO1lBRUEsTUFBTS9HLElBQUlBLENBQUNhLEVBQUU7Y0FDWixJQUFJLENBQUMsQ0FBQTZELEdBQUksQ0FBQ29CLE1BQU0sQ0FBQ3pCLFFBQUEsQ0FBQTBCLGNBQWMsQ0FBQ3pELElBQUksQ0FBQzBELEtBQUssQ0FBQztjQUUzQyxNQUFNQyxRQUFRLEdBQWMsTUFBTSxJQUFJLENBQUMsQ0FBQXZCLEdBQUksQ0FBQzNFLEdBQUcsQ0FBQyxnQkFBZ0JjLEVBQUUsWUFBWSxDQUFDO2NBQy9FLE9BQU9vRixRQUFRO1lBQ2hCO1lBRUEsTUFBTU0sVUFBVUEsQ0FBQzhDLFlBQVksRUFBRWMsVUFBVTtjQUN4QyxJQUFJLENBQUMsQ0FBQXpGLEdBQUksQ0FBQ29CLE1BQU0sQ0FBQ3pCLFFBQUEsQ0FBQTBCLGNBQWMsQ0FBQ3pELElBQUksQ0FBQzBELEtBQUssQ0FBQztjQUMzQztjQUNBLE1BQU1DLFFBQVEsR0FBYyxNQUFNLElBQUksQ0FBQyxDQUFBdkIsR0FBSSxDQUFDK0IsSUFBSSxDQUMvQyxnQkFBZ0I0QyxZQUFZLGFBQWFjLFVBQVUsZ0JBQWdCLEVBQ25FLEVBQUUsQ0FDRjtjQUNELE9BQU9sRSxRQUFRO1lBQ2hCOztVQUNBOUYsT0FBQSxDQUFBK0osUUFBQSxHQUFBQSxRQUFBOzs7Ozs7Ozs7OztVQy9CRDs7VUFFQXJGLE1BQUEsQ0FBQXVGLGNBQUEsQ0FBQWpLLE9BQUE7WUFDQWtLLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNEQSxJQUFBbkwsZ0JBQUEsR0FBQUgsT0FBQTtVQUVBLElBQUFtRixNQUFBLEdBQUFuRixPQUFBO1VBQ0EsSUFBQXVMLE9BQUEsR0FBQXZMLE9BQUE7VUFDQSxJQUFBd0wsTUFBQSxHQUFBeEwsT0FBQTtVQUNBLElBQUF5TCxlQUFBLEdBQUF6TCxPQUFBO1VBQ0EsSUFBQW1LLFNBQUEsR0FBQW5LLE9BQUE7VUFDQSxJQUFBMEwsS0FBQSxHQUFBMUwsT0FBQTtVQVJBOztVQVVNLE1BQU9RLFlBQWEsU0FBUStLLE9BQUEsQ0FBQTdGLGFBQTJCO1lBQzVEaUcsT0FBTztZQUVQLENBQUFsRSxRQUFTO1lBQ1QsQ0FBQW1FLGdCQUFpQjtZQUNqQixJQUFJQSxnQkFBZ0JBLENBQUE7Y0FDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsZ0JBQWlCO1lBQzlCO1lBRUEsSUFBSUMsZUFBZUEsQ0FBQTtjQUNsQixPQUFPLElBQUksQ0FBQyxDQUFBcEUsUUFBUztZQUN0QjtZQUNBLENBQUFxRSxPQUFRO1lBQ1IsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFFQSxDQUFBQyxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxJQUFZO2NBQ3BCLElBQUksQ0FBQyxDQUFBQSxJQUFLLEdBQUdBLElBQUk7WUFDbEI7WUFDQSxDQUFBekIsWUFBYTtZQUNiLElBQUlBLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBRUEsSUFBSTBCLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBRixPQUFRO1lBQ3JCO1lBQ0EsQ0FBQWhGLEtBQU07WUFDTjs7O1lBR0EsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxDQUFBbUYsS0FBTSxHQUErQixJQUFJVCxNQUFBLENBQUFVLFlBQVksQ0FBQ1QsZUFBQSxDQUFBL0osTUFBTSxDQUFDeUssU0FBUyxDQUFDO1lBQ3ZFLElBQUlGLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUVYLEtBQUs7WUFDMUI7WUFFQSxDQUFBYyxNQUFPO1lBQ1AsSUFBSTlJLFlBQVlBLENBQUE7Y0FDZixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE4SSxNQUFPLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQXRGLEtBQU0sQ0FBQ3hELFlBQVksQ0FBQzlCLEtBQUs7Y0FDeEQsTUFBTTBGLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQUosS0FBTSxDQUFDeEQsWUFBWSxDQUFDOUIsS0FBSyxDQUFDNEssTUFBTSxDQUFDeEQsSUFBSSxJQUMxREEsSUFBSSxDQUFDckYsSUFBSSxDQUFDMUIsSUFBSSxDQUFDd0ssV0FBVyxFQUFFLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQUYsTUFBTyxDQUFDQyxXQUFXLEVBQUUsQ0FBQyxDQUNqRTtjQUVELE9BQU9uRixRQUFRO1lBQ2hCO1lBQ0EsSUFBSUksS0FBS0EsQ0FBQTtjQUNSLE9BQU8sS0FBSyxDQUFDQSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUEyRSxLQUFNLENBQUMzRSxLQUFLO1lBQ3hDO1lBRUEsQ0FBQWlGLEtBQU0sR0FBcUIsSUFBSXRJLEdBQUcsRUFBRTtZQUNwQyxDQUFBNEgsZUFBZ0I7WUFDaEIsQ0FBQVcsU0FBVSxHQUEwQixJQUFJdkksR0FBRyxFQUFFO1lBQzdDLElBQUlzSSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBSCxNQUFNQSxDQUFDQSxNQUFNO2NBQ1osSUFBSSxDQUFDLENBQUFBLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUNLLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDNUI7WUFDQXRJLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQThILEtBQU0sQ0FBQ1MsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNELFlBQVksQ0FBQztjQUMzQ3RNLGdCQUFBLENBQUFTLFlBQVksQ0FBQytMLFFBQVEsQ0FBQyxJQUFJLENBQUM7Y0FDM0IsSUFBSSxDQUFDLENBQUE3RixLQUFNLEdBQUcsSUFBSTNCLE1BQUEsQ0FBQU0sU0FBUyxFQUFFO2NBQzdCb0IsVUFBVSxDQUFDdkcsS0FBSyxHQUFHLElBQUk7WUFDeEI7WUFDQSxNQUFNVyxJQUFJQSxDQUFDYSxFQUFFO2NBQ1osSUFBSTtnQkFDSCxJQUFJLENBQUM4SyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsSUFBSSxDQUFDLENBQUF0QyxZQUFhLEdBQUd4SSxFQUFFO2dCQUV2QixNQUFNLElBQUksQ0FBQyxDQUFBZ0YsS0FBTSxDQUFDN0YsSUFBSSxDQUFDYSxFQUFFLENBQUM7Z0JBQzFCK0UsVUFBVSxDQUFDZ0csQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBL0YsS0FBTTtlQUMxQixDQUFDLE9BQU9tQyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2MsR0FBRyxDQUFDZixDQUFDLENBQUM7ZUFDZCxTQUFTO2dCQUNULEtBQUssQ0FBQzNCLEtBQUssR0FBRyxJQUFJO2dCQUNsQixJQUFJLENBQUNzRixRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQUUsZ0JBQWdCQSxDQUFDcEMsTUFBTTtjQUN0QixJQUFJO2dCQUNILElBQUksSUFBSSxDQUFDLENBQUE4QixTQUFVLENBQUMvSCxHQUFHLENBQUNpRyxNQUFNLENBQUMsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBOEIsU0FBVSxDQUFDeEwsR0FBRyxDQUFDMEosTUFBTSxDQUFDO2dCQUVuRSxJQUFJLENBQUMsQ0FBQW1CLGVBQWdCLEdBQUcxQixTQUFBLENBQUFNLFFBQVEsQ0FBQ3pKLEdBQUcsQ0FBQztrQkFBRXNKLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQUEsWUFBYTtrQkFBRUksTUFBTTtrQkFBRUMsSUFBSSxFQUFFO2dCQUFJLENBQUUsQ0FBQztnQkFDOUYsSUFBSSxDQUFDLENBQUE2QixTQUFVLENBQUNqSSxHQUFHLENBQUNtRyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUFtQixlQUFnQixDQUFDO2dCQUNsRCxJQUFJLENBQUMsQ0FBQUEsZUFBZ0IsQ0FBQzVLLElBQUksQ0FBQztrQkFBRWEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBd0ksWUFBYTtrQkFBRUk7Z0JBQU0sQ0FBRSxDQUFDO2dCQUU5RCxJQUFJLENBQUMrQixZQUFZLEVBQUU7Z0JBRW5CLE9BQU8sSUFBSSxDQUFDLENBQUFaLGVBQWdCO2VBQzVCLENBQUMsT0FBTzVDLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDdEQsS0FBSyxDQUFDcUQsQ0FBQyxDQUFDOztZQUVsQjtZQUVBOEQsT0FBTyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUNwQixJQUFJO2dCQUNILElBQUksQ0FBQ0gsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU0sSUFBSSxDQUFDOUYsS0FBSyxDQUFDN0YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBcUosWUFBYSxDQUFDO2dCQUV6QyxJQUFJLENBQUMwQyxPQUFPLENBQUMsY0FBYyxDQUFDO2VBQzVCLENBQUMsT0FBTy9ELENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDdEQsS0FBSyxDQUFDcUQsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDMkQsUUFBUSxHQUFHLEtBQUs7O1lBRXZCLENBQUM7WUFFREssYUFBYSxHQUFHLE1BQUFBLENBQU87Y0FBRXZDLE1BQU07Y0FBRXhDO1lBQVEsSUFBMEMsRUFBRSxLQUFJO2NBQ3hGLElBQUk7Z0JBQ0gsTUFBTWdGLE9BQU8sR0FBRyxJQUFJeEIsS0FBQSxDQUFBeUIsY0FBYyxFQUFFO2dCQUNwQyxJQUFJLENBQUNQLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixJQUFJLENBQUNJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztnQkFDL0IsTUFBTSxJQUFJLENBQUNsRyxLQUFLLENBQUM3RixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFxSixZQUFhLENBQUM7Z0JBRXpDLElBQUlJLE1BQU0sRUFBRTtrQkFDWCxNQUFNakQsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDcUYsZ0JBQWdCLENBQUNwQyxNQUFNLENBQUM7a0JBQ3BELE1BQU1qRCxRQUFRLENBQUN4RyxJQUFJLENBQUM7b0JBQUVhLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQXdJLFlBQWE7b0JBQUVJO2tCQUFNLENBQUUsQ0FBQzs7Z0JBRXhELElBQUl4QyxRQUFRLElBQUlBLFFBQVEsQ0FBQ2tGLFNBQVMsRUFBRTtrQkFDbkNsRixRQUFRLENBQUNrRixTQUFTLENBQUNDLE9BQU8sQ0FBQztvQkFBRXZMLEVBQUUsRUFBRW9HLFFBQVEsQ0FBQ2tGLFNBQVMsQ0FBQ3RMO2tCQUFFLENBQUUsQ0FBQzs7Z0JBRTFEK0UsVUFBVSxDQUFDeUcsVUFBVSxDQUFDLE1BQUs7a0JBQzFCSixPQUFPLENBQUNLLE9BQU8sRUFBRTtnQkFDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQztnQkFDUixPQUFPTCxPQUFPO2VBQ2QsQ0FBQyxPQUFPakUsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUN0RCxLQUFLLENBQUNxRCxDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUMyRCxRQUFRLEdBQUcsS0FBSztnQkFDckIsSUFBSSxDQUFDSSxPQUFPLENBQUMsaUJBQWlCLENBQUM7O1lBRWpDLENBQUM7WUFFRFEsZUFBZSxHQUFHLE1BQU05QyxNQUFNLElBQUc7Y0FDaEMsTUFBTWpELFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQStFLFNBQVUsQ0FBQ3hMLEdBQUcsQ0FBQzBKLE1BQU0sQ0FBQztjQUM1Q2pELFFBQVEsQ0FBQ3hHLElBQUksQ0FBQztnQkFBRWEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBd0ksWUFBYTtnQkFBRUk7Y0FBTSxDQUFFLENBQUM7WUFDbEQsQ0FBQztZQUVEdkosS0FBS0EsQ0FBQTtjQUNKaEIsZ0JBQUEsQ0FBQVMsWUFBWSxDQUFDTyxLQUFLLEVBQUU7WUFDckI7WUFFQXNNLGNBQWNBLENBQUMzTCxFQUFFO2NBQ2hCLElBQUksQ0FBQyxDQUFBOEosZ0JBQWlCLEdBQUc5SixFQUFFO2NBQzNCLElBQUksQ0FBQ2lLLElBQUksR0FBRyxVQUFVO2NBQ3RCLElBQUksQ0FBQ2lCLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7O1VBQ0E1TCxPQUFBLENBQUFaLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzS0QsSUFBQWtOLE1BQUEsR0FBQTFOLE9BQUE7VUFPTSxTQUFVMk4sUUFBUUEsQ0FBQztZQUFFck4sS0FBSztZQUFFMkw7VUFBSyxDQUFFO1lBQ3hDLElBQUkzTCxLQUFLLENBQUN3RyxLQUFLLENBQUNsQixLQUFLLEVBQUVnSSxJQUFJLEtBQUssR0FBRyxFQUFFO2NBQ3BDLE9BQU9GLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEseUJBQW1COztZQUUzQixPQUNDSCxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUFILE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXVILFFBQUEsUUFDQ0osTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxxQkFBZSxDQUNiO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUFFLEdBQUEsR0FBQS9OLE9BQUE7VUFDQSxJQUFBME4sTUFBQSxHQUFBMU4sT0FBQTtVQUNBLElBQUFnTyxRQUFBLEdBQUFoTyxPQUFBO1VBQ00sU0FBVWlPLGFBQWFBLENBQUM7WUFBRUM7VUFBTyxDQUF3QjtZQUM5RCxNQUFNO2NBQUVqQztZQUFLLENBQUUsR0FBRyxJQUFBK0IsUUFBQSxDQUFBRyxtQkFBbUIsR0FBRTtZQUN2Q0QsT0FBTyxHQUFHQSxPQUFPLElBQUlqQyxLQUFLLENBQUMxSyxVQUFVLENBQUM2TSxLQUFLO1lBQzNDLE9BQU9WLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ0UsR0FBQSxDQUFBTSxTQUFTO2NBQUN6SyxJQUFJLEVBQUMsTUFBTTtjQUFDd0QsSUFBSSxFQUFFOEcsT0FBTztjQUFFSSxTQUFTLEVBQUM7WUFBMEIsRUFBRztVQUNyRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNOQSxJQUFBWixNQUFBLEdBQUExTixPQUFBO1VBQ0EsSUFBQWdPLFFBQUEsR0FBQWhPLE9BQUE7VUFDQSxJQUFBdU8sTUFBQSxHQUFBdk8sT0FBQTtVQUNBLElBQUF3TyxLQUFBLEdBQUF4TyxPQUFBO1VBQ0EsSUFBQTRLLFlBQUEsR0FBQTVLLE9BQUE7VUFDQSxJQUFBeU8sTUFBQSxHQUFBek8sT0FBQTtVQUNBLElBQUEwTyxNQUFBLEdBQUExTyxPQUFBO1VBQ0EsSUFBQTJPLFdBQUEsR0FBQTNPLE9BQUE7VUFFTztVQUFVLFNBQ1I0TyxZQUFZQSxDQUFDLEVBQUU7WUFDdkIsTUFBTTtjQUFFdE8sS0FBSztjQUFFdU87WUFBTyxDQUFFLEdBQUcsSUFBQWIsUUFBQSxDQUFBRyxtQkFBbUIsR0FBRTtZQUNoRCxNQUFNO2NBQUV2QyxnQkFBZ0IsRUFBRTFEO1lBQVEsQ0FBRSxHQUFHNUgsS0FBSztZQUM1QyxNQUFNLENBQUN3TyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHckIsTUFBQSxDQUFBbkgsT0FBSyxDQUFDeUksUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNoRCxNQUFNQyxPQUFPLEdBQUdBLENBQUEsS0FBTTNPLEtBQUssQ0FBQ21OLGNBQWMsQ0FBQ3lCLFNBQVMsQ0FBQztZQUVyRCxJQUFBUixNQUFBLENBQUFTLFNBQVMsRUFBQyxDQUFDN08sS0FBSyxDQUFDLEVBQUUsTUFBTXlPLFVBQVUsQ0FBQ3pPLEtBQUssQ0FBQ3NMLGdCQUFnQixDQUFDLEVBQUUsY0FBYyxDQUFDO1lBRTVFLE9BQ0M4QixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUFILE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXVILFFBQUEsUUFDQ0osTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQTtjQUFTUyxTQUFTLEVBQUUsK0NBQStDcEcsUUFBUSxDQUFDOUYsSUFBSTtZQUFFLEdBQ2pGc0wsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxjQUNDSCxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLGFBQUszRixRQUFRLENBQUMvRixLQUFLLEUsSUFBTyxDQUNyQixFQUNOdUwsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBWSxHQUMxQlosTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDVSxNQUFBLENBQUFhLFVBQVU7Y0FBQ3hMLElBQUksRUFBQyxPQUFPO2NBQUN6QixLQUFLLEVBQUMsT0FBTztjQUFDa04sT0FBTyxFQUFFSixPQUFPO2NBQUVYLFNBQVMsRUFBQztZQUFRLEVBQUcsQ0FDekUsQ0FDRyxFQUNWWixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUNjLFdBQUEsQ0FBQVcsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUVySCxRQUFRLENBQUM1RSxZQUFZLENBQUMwQyxNQUFNLEdBQUcsQ0FBQztjQUMzQ3dKLE9BQU87Y0FDUEMsT0FBTyxFQUFFO2dCQUNSQyxJQUFJLEVBQ0hoQyxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUNXLEtBQUEsQ0FBQW1CLElBQUk7a0JBQ0pyQixTQUFTLEVBQUMsc0JBQXNCO2tCQUNoQzlNLEtBQUssRUFBRTBHLFFBQVEsQ0FBQzVFLFlBQVk7a0JBQzVCc00sT0FBTyxFQUFFaEYsWUFBQSxDQUFBaUYsbUJBQW1CO2tCQUM1QmxOLEtBQUssRUFBRTtvQkFBRXVGO2tCQUFRO2dCQUFFLEVBRXBCO2dCQUNENEgsS0FBSyxFQUFFcEMsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDWSxNQUFBLENBQUFzQixLQUFLO2tCQUFDM0ksSUFBSSxFQUFFO2dCQUF1Qjs7WUFDM0MsRUFDQSxDQUNBO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBLElBQUF1SCxXQUFBLEdBQUEzTyxPQUFBO1VBQ0EsSUFBQWdRLE1BQUEsR0FBQWhRLE9BQUE7VUFDQSxJQUFBd08sS0FBQSxHQUFBeE8sT0FBQTtVQUNBLElBQUEwTixNQUFBLEdBQUExTixPQUFBO1VBQ0EsSUFBQWdPLFFBQUEsR0FBQWhPLE9BQUE7VUFDQSxJQUFBaVEsWUFBQSxHQUFBalEsT0FBQTtVQUVBLElBQUFrUSxjQUFBLEdBQUFsUSxPQUFBO1VBQ0EsSUFBQW1RLFVBQUEsR0FBQW5RLE9BQUE7VUFFTztVQUFVLFNBQ1JvUSx1QkFBdUJBLENBQUM7WUFBRXhIO1VBQUksQ0FBRTtZQUN4QyxNQUFNO2NBQUV0SSxLQUFLO2NBQUUrUCxhQUFhO2NBQUVwRTtZQUFLLENBQUUsR0FBRyxJQUFBK0IsUUFBQSxDQUFBRyxtQkFBbUIsR0FBRTtZQUM3RCxNQUFNO2NBQUV2QyxnQkFBZ0IsRUFBRTFEO1lBQVEsQ0FBRSxHQUFHNUgsS0FBSztZQUM1QyxNQUFNZSxJQUFJLEdBQUd1SCxJQUFJLENBQUNySCxVQUFVLENBQUNQLEdBQUcsQ0FBQ2tILFFBQVEsQ0FBQ3BHLEVBQUUsQ0FBQztZQUM3QyxNQUFNLENBQUN3TyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHN0MsTUFBQSxDQUFBbkgsT0FBSyxDQUFDeUksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNO2NBQUV3QjtZQUFRLENBQUUsR0FBRzVILElBQUk7WUFDekIsTUFBTTZILFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCRixhQUFhLENBQUMsQ0FBQ0QsVUFBVSxDQUFDO1lBQzNCLENBQUM7WUFDRCxJQUFJLENBQUNqUCxJQUFJLEVBQUU7Y0FDVjZILE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLFlBQVlQLElBQUksQ0FBQ3JGLElBQUksQ0FBQzFCLElBQUksa0NBQWtDLEVBQUUrRyxJQUFJLENBQUM7Y0FDaEYsT0FBTyxJQUFJOztZQUdaLE1BQU15RyxPQUFPLEdBQUdxQixLQUFLLElBQUc7Y0FDdkJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCRCxLQUFLLENBQUNFLGNBQWMsRUFBRTtjQUN0QixNQUFNbkosUUFBUSxHQUFHbkgsS0FBSyxDQUFDd00sZ0JBQWdCLENBQUNsRSxJQUFJLENBQUM5RyxFQUFFLENBQUM7Y0FDaER1TyxhQUFhLENBQUM7Z0JBQ2IxUCxJQUFJLEVBQUUsSUFBSTtnQkFDVm9MLElBQUksRUFBRSxTQUFTO2dCQUNmMUssSUFBSSxFQUFFO2tCQUNMb0csUUFBUTtrQkFDUlMsUUFBUTtrQkFDUmxELFdBQVcsRUFBRTREOztlQUVkLENBQUM7Y0FDRixPQUFPLEtBQUs7WUFDYixDQUFDO1lBRUQsT0FDQzhFLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUE7Y0FBS1MsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDWixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUNvQyxZQUFBLENBQUFZLG9CQUFvQjtjQUFDQyxVQUFVLEVBQUUsQ0FBQyxDQUFDelAsSUFBSSxFQUFFcUMsUUFBUSxFQUFFWixVQUFVO2NBQUUyTixRQUFRLEVBQUVBLFFBQVE7Y0FBRU0sSUFBSSxFQUFFVDtZQUFVLEdBQ25HNUMsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDb0MsWUFBQSxDQUFBZSxpQkFBaUI7Y0FBQzFDLFNBQVMsRUFBQztZQUFrRCxHQUM5RVosTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBc0MsR0FDcERaLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsaUJBQ0NILE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ21DLE1BQUEsQ0FBQWlCLEtBQUs7Y0FBQzNDLFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQzRDLEdBQUcsRUFBRXRJLElBQUksQ0FBQ3JGLElBQUksQ0FBQzNCO1lBQVEsRUFBSSxFQUM3RDhMLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ2MsV0FBQSxDQUFBd0MsSUFBSTtjQUNKN0MsU0FBUyxFQUFDLFdBQVc7Y0FDckI4QyxJQUFJLEVBQUUsY0FBYzlRLEtBQUssQ0FBQ2dLLFlBQVksY0FBYzFCLElBQUksQ0FBQ3JGLElBQUksQ0FBQ3pCLEVBQUUsRUFBRTtjQUNsRXVOLE9BQU8sRUFBRUE7WUFBTyxHQUVoQjNCLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsYUFBS2pGLElBQUksQ0FBQ3JGLElBQUksQ0FBQzFCLElBQUksQ0FBTSxDQUNuQixDQUNDLEVBQ1Q2TCxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLGNBQ0NILE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ2MsV0FBQSxDQUFBd0MsSUFBSTtjQUNKN0MsU0FBUyxFQUFDLFdBQVc7Y0FDckI4QyxJQUFJLEVBQUUsY0FBYzlRLEtBQUssQ0FBQ2dLLFlBQVksY0FBYzFCLElBQUksQ0FBQ3JGLElBQUksQ0FBQ3pCLEVBQUUsRUFBRTtjQUNsRXVOLE9BQU8sRUFBRUE7WUFBTyxHQUVoQjNCLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsYUFBS2pGLElBQUksQ0FBQ3JGLElBQUksQ0FBQzFCLElBQUksQ0FBTSxDQUNuQixFQUNQNkwsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQTtjQUFNUyxTQUFTLEVBQUM7WUFBaUMsR0FDaERaLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ2MsV0FBQSxDQUFBVyxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRSxDQUFDLENBQUNsTyxJQUFJLEVBQUVxQyxRQUFRLEVBQUVDLE9BQU87Y0FDcEM2TCxPQUFPO2NBQ1BDLE9BQU8sRUFBRTtnQkFDUkMsSUFBSSxFQUFFaEMsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFBSCxNQUFBLENBQUFuSCxPQUFBLENBQUF1SCxRQUFBLFFBQUd6TSxJQUFJLEVBQUVxQyxRQUFRLEVBQUVDLE9BQU8sQ0FBSTtnQkFDcENtTSxLQUFLLEVBQUVwQyxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUFILE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXVILFFBQUEsUUFBRzdCLEtBQUssQ0FBQzFLLFVBQVUsQ0FBQzhQLFNBQVM7O1lBQ3BDLEVBQ0EsQ0FDSSxDQUNGLENBQ0QsRUFFTjNELE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ1csS0FBQSxDQUFBbUIsSUFBSTtjQUNKckIsU0FBUyxFQUFDLHlDQUF5QztjQUNuRDlNLEtBQUssRUFBRUgsSUFBSSxFQUFFcUMsUUFBUSxFQUFFWixVQUFVO2NBQ2pDOE0sT0FBTyxFQUFFTSxjQUFBLENBQUFvQjtZQUEyQixFQUNuQyxDQUNpQixFQUNwQjVELE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ29DLFlBQUEsQ0FBQXNCLGtCQUFrQjtjQUFDakQsU0FBUyxFQUFDO1lBQTJDLEdBQ3hFWixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUNXLEtBQUEsQ0FBQW1CLElBQUk7Y0FBQ25PLEtBQUssRUFBRUgsSUFBSSxFQUFFcUMsUUFBUSxFQUFFWixVQUFVO2NBQUU4TSxPQUFPLEVBQUVPLFVBQUEsQ0FBQXFCO1lBQWtDLEVBQUksQ0FDcEUsQ0FDQyxDQUNsQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pGQSxJQUFBOUQsTUFBQSxHQUFBMU4sT0FBQTtVQUNBLElBQUEyTyxXQUFBLEdBQUEzTyxPQUFBO1VBQ0EsSUFBQXlSLEtBQUEsR0FBQXpSLE9BQUE7VUFDQSxJQUFBNkgsZUFBQSxHQUFBN0gsT0FBQTtVQUNBLElBQUE4SCxPQUFBLEdBQUE5SCxPQUFBO1VBRU0sU0FBVTZQLG1CQUFtQkEsQ0FBQztZQUFFakgsSUFBSTtZQUFFVixRQUFRO1lBQUUsR0FBR3ZGO1VBQUssQ0FBRTtZQUMvRCxNQUFNUCxJQUFJLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQ2tLLFFBQVEsQ0FBQ3BFLFFBQVEsQ0FBQzlGLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRzhGLFFBQVEsQ0FBQzlGLElBQUk7WUFFNUcsT0FDQ3NMLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ2MsV0FBQSxDQUFBVyxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRW5OLElBQUk7Y0FDZnFOLE9BQU8sRUFBRTtnQkFDUjlFLElBQUksRUFBRStDLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQzRELEtBQUEsQ0FBQXJCLHVCQUF1QjtrQkFBQ3hILElBQUksRUFBRUE7Z0JBQUksRUFBSTtnQkFDN0NMLE1BQU0sRUFBRW1GLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQy9GLE9BQUEsQ0FBQTRKLHlCQUF5QjtrQkFBQzlJLElBQUksRUFBRUE7Z0JBQUksRUFBSTtnQkFDakQsaUJBQWlCLEVBQUU4RSxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUNoRyxlQUFBLENBQUE4SixpQ0FBaUM7a0JBQUMvSSxJQUFJLEVBQUVBO2dCQUFJOztZQUNoRSxFQUNBO1VBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBLElBQUE4RSxNQUFBLEdBQUExTixPQUFBO1VBQ0EsSUFBQWdPLFFBQUEsR0FBQWhPLE9BQUE7VUFDQSxJQUFBZ1EsTUFBQSxHQUFBaFEsT0FBQTtVQUNBLElBQUEyTyxXQUFBLEdBQUEzTyxPQUFBO1VBQ0EsSUFBQTRSLFFBQUEsR0FBQTVSLE9BQUE7VUFFTztVQUFVLFNBQ1IyUixpQ0FBaUNBLENBQUM7WUFBRS9JO1VBQUksQ0FBRTtZQUNsRCxNQUFNO2NBQ0x0SSxLQUFLO2NBQ0wrUCxhQUFhO2NBQ2JwRSxLQUFLLEVBQUU7Z0JBQ04xSyxVQUFVLEVBQUU7a0JBQUVzUSxjQUFjLEVBQUU1RjtnQkFBSztjQUFFO1lBQ3JDLENBQ0QsR0FBRyxJQUFBK0IsUUFBQSxDQUFBRyxtQkFBbUIsR0FBRTtZQUN6QixNQUFNO2NBQUV2QyxnQkFBZ0IsRUFBRTFEO1lBQVEsQ0FBRSxHQUFHNUgsS0FBSztZQUM1QyxNQUFNZSxJQUFJLEdBQUd1SCxJQUFJLENBQUNySCxVQUFVLENBQUNQLEdBQUcsQ0FBQ2tILFFBQVEsQ0FBQ3BHLEVBQUUsQ0FBQztZQUU3QyxNQUFNLENBQUN3TyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHN0MsTUFBQSxDQUFBbkgsT0FBSyxDQUFDeUksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNeUIsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckJGLGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7WUFDM0IsQ0FBQztZQUNELElBQUksQ0FBQ2pQLElBQUksRUFBRTtjQUNWNkgsT0FBTyxDQUFDQyxJQUFJLENBQUMsWUFBWVAsSUFBSSxDQUFDckYsSUFBSSxDQUFDMUIsSUFBSSxrQ0FBa0MsRUFBRStHLElBQUksQ0FBQztjQUNoRixPQUFPLElBQUk7O1lBR1osTUFBTXlHLE9BQU8sR0FBR3FCLEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJELEtBQUssQ0FBQ0UsY0FBYyxFQUFFO2NBQ3RCLE1BQU1uSixRQUFRLEdBQUduSCxLQUFLLENBQUN3TSxnQkFBZ0IsQ0FBQ2xFLElBQUksQ0FBQzlHLEVBQUUsQ0FBQztjQUNoRHVPLGFBQWEsQ0FBQztnQkFDYjFQLElBQUksRUFBRSxJQUFJO2dCQUNWb0wsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YxSyxJQUFJLEVBQUU7a0JBQ0xvRyxRQUFRO2tCQUNScUssVUFBVSxFQUFFNUosUUFBUSxDQUFDcEcsRUFBRTtrQkFDdkJrRCxXQUFXLEVBQUU0RDs7ZUFFZCxDQUFDO2NBQ0YsT0FBTyxLQUFLO1lBQ2IsQ0FBQztZQUNELE1BQU1tSixtQkFBbUIsR0FBR25KLElBQUksQ0FBQ3JILFVBQVUsQ0FBQ1AsR0FBRyxDQUFDa0gsUUFBUSxDQUFDcEcsRUFBRSxDQUFDO1lBQzVELE1BQU1rUSxTQUFTLEdBQUdBLENBQUM7Y0FBRXBKO1lBQUksQ0FBRSxLQUFLOEUsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDK0QsUUFBQSxDQUFBSyxPQUFPO2NBQUNDLE9BQU8sRUFBRXRKLElBQUksQ0FBQ3RILE1BQU0sQ0FBQzhGO1lBQUksR0FBR3dCLElBQUksQ0FBQ3RILE1BQU0sQ0FBQ3NDLElBQUksQ0FBVztZQUVoR3NGLE9BQU8sQ0FBQ2MsR0FBRyxDQUFDLEVBQUUsRUFBRStILG1CQUFtQixDQUFDSSxRQUFRLENBQUM7WUFDN0MsTUFBTTtjQUFFQyxPQUFPO2NBQUVDLEtBQUs7Y0FBRUM7WUFBSyxDQUFFLEdBQUdQLG1CQUFtQixDQUFDSSxRQUFRO1lBQzlELE1BQU1JLEdBQUcsR0FBRyxrQkFBa0JILE9BQU8sR0FBR0MsS0FBSyxHQUFHLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxjQUFjLEdBQUc7WUFDeEYsT0FDQzNFLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUE7Y0FBS1MsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDWixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQUtTLFNBQVMsRUFBQztZQUE4QixHQUM1Q1osTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDYyxXQUFBLENBQUF3QyxJQUFJO2NBQUNDLElBQUksRUFBRSxjQUFjOVEsS0FBSyxDQUFDZ0ssWUFBWSxjQUFjMUIsSUFBSSxDQUFDckYsSUFBSSxDQUFDekIsRUFBRSxFQUFFO2NBQUV1TixPQUFPLEVBQUVBO1lBQU8sR0FDekYzQixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQUtTLFNBQVMsRUFBQztZQUFvQixHQUNsQ1osTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDbUMsTUFBQSxDQUFBaUIsS0FBSztjQUFDM0MsU0FBUyxFQUFDLGdCQUFnQjtjQUFDNEMsR0FBRyxFQUFFdEksSUFBSSxDQUFDckYsSUFBSSxDQUFDM0I7WUFBUSxFQUFJLEVBQzdEOEwsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxhQUFLakYsSUFBSSxDQUFDckYsSUFBSSxDQUFDMUIsSUFBSSxDQUFNLENBQ3BCLENBQ0EsRUFDUDZMLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUE7Y0FBS1MsU0FBUyxFQUFDO1lBQXNDLEdBQ3BEWixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQU1TLFNBQVMsRUFBRWlFO1lBQUcsR0FDbEJSLG1CQUFtQixDQUFDSSxRQUFRLENBQUNDLE9BQU8sRSxPQUFLTCxtQkFBbUIsQ0FBQ0ksUUFBUSxDQUFDRSxLQUFLLENBQ3RFLENBQ0YsQ0FDRCxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakVBLElBQUFHLEtBQUEsR0FBQXhTLE9BQUE7VUFDQSxJQUFBZ08sUUFBQSxHQUFBaE8sT0FBQTtVQUNBLElBQUF1TyxNQUFBLEdBQUF2TyxPQUFBO1VBQ00sU0FBVXdSLGtDQUFrQ0EsQ0FBQztZQUFFNUk7VUFBSSxDQUFFO1lBQzFELElBQUksQ0FBQ0EsSUFBSSxFQUFFO2NBQ1YsT0FBTyxJQUFJOztZQUVaLE1BQU07Y0FBRS9HLElBQUk7Y0FBRTJPLFFBQVE7Y0FBRWxQO1lBQU0sQ0FBRSxHQUFHc0gsSUFBSTtZQUN2QyxNQUFNO2NBQUVxRDtZQUFLLENBQUUsR0FBRyxJQUFBK0IsUUFBQSxDQUFBRyxtQkFBbUIsR0FBRTtZQUN2QyxNQUFNc0UsU0FBUyxHQUFHO2NBQ2pCLGFBQWEsRUFBRSxvQkFBb0I7Y0FDbkNDLE9BQU8sRUFBRSxpQkFBaUI7Y0FDMUJDLFNBQVMsRUFBRSxtQkFBbUI7Y0FDOUJDLFdBQVcsRUFBRTthQUNiO1lBQ0QsT0FDQ0osS0FBQSxDQUFBM0UsYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBeUMsR0FDdkRrRSxLQUFBLENBQUEzRSxhQUFBO2NBQUtTLFNBQVMsRUFBQztZQUE0QixHQUMxQ2tFLEtBQUEsQ0FBQTNFLGFBQUEsY0FDQzJFLEtBQUEsQ0FBQTNFLGFBQUEsYUFBS2hNLElBQUksQ0FBTSxDQUNWLEVBQ04yUSxLQUFBLENBQUEzRSxhQUFBO2NBQUtTLFNBQVMsRUFBRSx3Q0FBd0MxRixJQUFJLENBQUN0SCxNQUFNLENBQUM4RixJQUFJO1lBQUUsR0FDekVvTCxLQUFBLENBQUEzRSxhQUFBLGVBQU81QixLQUFLLENBQUMxSyxVQUFVLENBQUNzUixnQkFBZ0IsQ0FBQ3ZSLE1BQU0sQ0FBQzhGLElBQUksQ0FBQyxDQUFRLEVBQzdEb0wsS0FBQSxDQUFBM0UsYUFBQSxDQUFDVSxNQUFBLENBQUF1RSxPQUFPO2NBQ1BsUCxJQUFJLEVBQUU2TyxTQUFTLENBQUM3SixJQUFJLENBQUN0SCxNQUFNLENBQUM4RixJQUFJLENBQUM7Y0FDakNrSCxTQUFTLEVBQUUsOEJBQThCMUYsSUFBSSxDQUFDdEgsTUFBTSxDQUFDOEYsSUFBSTtZQUFFLEVBQzFELENBQ0csQ0FDRCxFQUNOb0wsS0FBQSxDQUFBM0UsYUFBQSxZQUFJMkMsUUFBUSxHQUFHQSxRQUFRLEdBQUd2RSxLQUFLLENBQUMxSyxVQUFVLENBQUN3UixVQUFVLENBQUssQ0FDckQ7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0EsSUFBQXJGLE1BQUEsR0FBQTFOLE9BQUE7VUFDQSxJQUFBZ08sUUFBQSxHQUFBaE8sT0FBQTtVQUNBLElBQUFnUSxNQUFBLEdBQUFoUSxPQUFBO1VBQ0EsSUFBQTJPLFdBQUEsR0FBQTNPLE9BQUE7VUFDQSxJQUFBNFIsUUFBQSxHQUFBNVIsT0FBQTtVQUNBLElBQUF1TyxNQUFBLEdBQUF2TyxPQUFBO1VBQ0EsSUFBQXdPLEtBQUEsR0FBQXhPLE9BQUE7VUFJTztVQUFVLFNBQ1IwUix5QkFBeUJBLENBQUM7WUFBRTlJO1VBQUksQ0FBRTtZQUMxQyxNQUFNO2NBQUV0SSxLQUFLO2NBQUUrUDtZQUFhLENBQUUsR0FBRyxJQUFBckMsUUFBQSxDQUFBRyxtQkFBbUIsR0FBRTtZQUN0RCxNQUFNO2NBQUV2QyxnQkFBZ0IsRUFBRTFEO1lBQVEsQ0FBRSxHQUFHNUgsS0FBSztZQUM1QyxNQUFNZSxJQUFJLEdBQUd1SCxJQUFJLENBQUNySCxVQUFVLENBQUNQLEdBQUcsQ0FBQ2tILFFBQVEsQ0FBQ3BHLEVBQUUsQ0FBQztZQUM3QyxNQUFNLENBQUN3TyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHN0MsTUFBQSxDQUFBbkgsT0FBSyxDQUFDeUksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNeUIsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckJGLGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7WUFDM0IsQ0FBQztZQUNELElBQUksQ0FBQ2pQLElBQUksRUFBRTtjQUNWNkgsT0FBTyxDQUFDQyxJQUFJLENBQUMsWUFBWVAsSUFBSSxDQUFDckYsSUFBSSxDQUFDMUIsSUFBSSxrQ0FBa0MsRUFBRStHLElBQUksQ0FBQztjQUNoRixPQUFPLElBQUk7O1lBR1osTUFBTXlHLE9BQU8sR0FBR3FCLEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJELEtBQUssQ0FBQ0UsY0FBYyxFQUFFO2NBQ3RCLE1BQU1uSixRQUFRLEdBQUduSCxLQUFLLENBQUN3TSxnQkFBZ0IsQ0FBQ2xFLElBQUksQ0FBQzlHLEVBQUUsQ0FBQztjQUNoRHVPLGFBQWEsQ0FBQztnQkFDYjFQLElBQUksRUFBRSxJQUFJO2dCQUNWb0wsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YxSyxJQUFJLEVBQUU7a0JBQ0xvRyxRQUFRO2tCQUNScUssVUFBVSxFQUFFNUosUUFBUSxDQUFDcEcsRUFBRTtrQkFDdkJrRCxXQUFXLEVBQUU0RDs7ZUFFZCxDQUFDO2NBQ0YsT0FBTyxLQUFLO1lBQ2IsQ0FBQztZQUNELE1BQU1tSixtQkFBbUIsR0FBR25KLElBQUksQ0FBQ3JILFVBQVUsQ0FBQ1AsR0FBRyxDQUFDa0gsUUFBUSxDQUFDcEcsRUFBRSxDQUFDO1lBQzVELE1BQU1rUSxTQUFTLEdBQUdBLENBQUM7Y0FBRXBKLElBQUksRUFBRXRHO1lBQVMsQ0FBRSxLQUFJO2NBQ3pDLE9BQ0NvTCxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUMrRCxRQUFBLENBQUFLLE9BQU87Z0JBQUNDLE9BQU8sRUFBRTVQLFNBQVMsQ0FBQ0E7Y0FBUyxHQUNwQ29MLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ1UsTUFBQSxDQUFBdUUsT0FBTztnQkFBQ2xQLElBQUksRUFBRSxTQUFTdEIsU0FBUyxDQUFDdUgsTUFBTTtjQUFFLEVBQUksQ0FDckM7WUFFWixDQUFDO1lBRUQsT0FDQzZELE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUE7Y0FBS1MsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDWixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQUtTLFNBQVMsRUFBQztZQUFrRSxHQUNoRlosTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDYyxXQUFBLENBQUF3QyxJQUFJO2NBQUNDLElBQUksRUFBRSxjQUFjOVEsS0FBSyxDQUFDZ0ssWUFBWSxjQUFjMUIsSUFBSSxDQUFDckYsSUFBSSxDQUFDekIsRUFBRSxFQUFFO2NBQUV1TixPQUFPLEVBQUVBO1lBQU8sR0FDekYzQixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQUtTLFNBQVMsRUFBQztZQUFvQixHQUNsQ1osTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDbUMsTUFBQSxDQUFBaUIsS0FBSztjQUFDM0MsU0FBUyxFQUFDLGdCQUFnQjtjQUFDNEMsR0FBRyxFQUFFdEksSUFBSSxDQUFDckYsSUFBSSxDQUFDM0I7WUFBUSxFQUFJLEVBQzdEOEwsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxhQUFLakYsSUFBSSxDQUFDckYsSUFBSSxDQUFDMUIsSUFBSSxDQUFNLENBQ3BCLENBQ0EsRUFFUDZMLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsY0FDQ0gsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDVyxLQUFBLENBQUFtQixJQUFJO2NBQUNyQixTQUFTLEVBQUMsZUFBZTtjQUFDOU0sS0FBSyxFQUFFdVEsbUJBQW1CLENBQUNqUCxVQUFVO2NBQUU4TSxPQUFPLEVBQUVvQztZQUFTLEVBQUksQ0FDeEYsQ0FDRCxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEVBLElBQUFRLEtBQUEsR0FBQXhTLE9BQUE7VUFDQSxJQUFBZ08sUUFBQSxHQUFBaE8sT0FBQTtVQUVBLElBQUFnVCxjQUFBLEdBQUFoVCxPQUFBO1VBQ0EsSUFBQXlPLE1BQUEsR0FBQXpPLE9BQUE7VUFGQTs7VUFLTSxTQUFVaVQsZ0NBQWdDQSxDQUFDO1lBQUVySyxJQUFJO1lBQUVuQjtVQUFRLENBQUU7WUFDbEUsTUFBTTtjQUFFd0U7WUFBSyxDQUFFLEdBQUcsSUFBQStCLFFBQUEsQ0FBQWtGLGdCQUFnQixHQUFFO1lBQ3BDLE1BQU1DLEdBQUcsR0FBR1gsS0FBSyxDQUFDWSxNQUFNLEVBQUU7WUFDMUIsTUFBTUMsU0FBUyxHQUFHNUwsUUFBUSxDQUFDbEcsVUFBVSxDQUFDUCxHQUFHLENBQUM0SCxJQUFJLENBQUNWLFFBQVEsQ0FBQ3BHLEVBQUUsQ0FBQztZQUMzRCxNQUFNd1IsTUFBTSxHQUFHRCxTQUFTLEVBQUVqRyxTQUFTLEVBQUV0TCxFQUFFO1lBRXZDLElBQUksQ0FBQ3VSLFNBQVMsQ0FBQ2pHLFNBQVMsQ0FBQzVKLFFBQVEsQ0FBQ2hDLEtBQUssQ0FBQ3dFLE1BQU0sRUFBRTtjQUMvQyxPQUNDd00sS0FBQSxDQUFBM0UsYUFBQTtnQkFBS1MsU0FBUyxFQUFDLFVBQVU7Z0JBQUM2RSxHQUFHLEVBQUVBO2NBQUcsR0FDakNYLEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQ1ksTUFBQSxDQUFBOEUsU0FBUyxPQUFHLENBQ1I7O1lBR1IsT0FDQ2YsS0FBQSxDQUFBM0UsYUFBQTtjQUFLUyxTQUFTLEVBQUMsVUFBVTtjQUFDNkUsR0FBRyxFQUFFQTtZQUFHLEdBQ2hDRSxTQUFTLENBQUNqRyxTQUFTLENBQUM1SixRQUFRLENBQUNoQyxLQUFLLENBQUNnUyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3hQLEdBQUcsQ0FBQzRFLElBQUksSUFBRztjQUN4RDRKLEtBQUEsQ0FBQTNFLGFBQUEsY0FBTWpGLElBQUksQ0FBQ3hCLElBQUksQ0FBTztZQUN2QixDQUFDLENBQUMsQ0FDRztZQUVQLE9BQ0NvTCxLQUFBLENBQUEzRSxhQUFBO2NBQUtTLFNBQVMsRUFBQyxVQUFVO2NBQUM2RSxHQUFHLEVBQUVBO1lBQUcsR0FDakNYLEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQ21GLGNBQUEsQ0FBQVMsbUJBQW1CO2NBQ25COUksSUFBSSxFQUFFMEksU0FBUyxFQUFFakcsU0FBUyxFQUFFdEwsRUFBRTtjQUM5QkEsRUFBRSxFQUFFd1IsTUFBTTtjQUNWbEYsS0FBSyxFQUFFSyxNQUFBLENBQUE4RSxTQUFTO2NBQ2hCM1AsSUFBSSxFQUFDO1lBQThCLEdBRW5DNE8sS0FBQSxDQUFBM0UsYUFBQSxDQUFDbUYsY0FBQSxDQUFBVSxlQUFlLE9BQUcsQ0FDRSxDQUNqQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZDQSxJQUFBakYsTUFBQSxHQUFBek8sT0FBQTtVQUNBLElBQUEwTixNQUFBLEdBQUExTixPQUFBO1VBQ0EsSUFBQWdPLFFBQUEsR0FBQWhPLE9BQUE7VUFFTSxTQUFVdVQsU0FBU0EsQ0FBQTtZQUN4QixNQUFNO2NBQ0x0SCxLQUFLLEVBQUU7Z0JBQ050QixJQUFJLEVBQUU7a0JBQUV5RCxLQUFLLEVBQUVuQztnQkFBSztjQUFFLENBQ3RCO2NBQ0QzTDtZQUFLLENBQ0wsR0FBRyxJQUFBME4sUUFBQSxDQUFBa0YsZ0JBQWdCLEdBQUU7WUFFdEIsSUFBSSxDQUFDNVMsS0FBSyxFQUFFd0csS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUU5QixNQUFNO2NBQUUzRSxLQUFLO2NBQUVGO1lBQVcsQ0FBRSxHQUFHZ0ssS0FBSztZQUVwQyxPQUNDeUIsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBWSxHQUMxQlosTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDWSxNQUFBLENBQUFzQixLQUFLO2NBQUNuTSxJQUFJLEVBQUM7WUFBTSxHQUNqQjhKLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsYUFBSzFMLEtBQUssQ0FBTSxFQUNoQnVMLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsZUFBTzVMLFdBQVcsQ0FBUSxDQUNuQixDQUNIO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUEwUixLQUFBLEdBQUEzVCxPQUFBO1VBQ0EsSUFBQXdTLEtBQUEsR0FBQXhTLE9BQUE7VUFDQSxJQUFBNFQsYUFBQSxHQUFBNVQsT0FBQTtVQUNBLElBQUFnTyxRQUFBLEdBQUFoTyxPQUFBO1VBRUEsSUFBQTJPLFdBQUEsR0FBQTNPLE9BQUE7VUFDQSxJQUFBNlQsV0FBQSxHQUFBN1QsT0FBQTtVQUZBOztVQUtBOzs7OztVQUtNLFNBQVU4VCxpQ0FBaUNBLENBQUM7WUFBRWxMLElBQUk7WUFBRXJGLElBQUk7WUFBRWtFLFFBQVE7WUFBRXFLLFVBQVU7WUFBRTlNO1VBQVcsQ0FBRTtZQUNsRyxNQUFNO2NBQUVpSCxLQUFLO2NBQUVvRTtZQUFhLENBQUUsR0FBRyxJQUFBckMsUUFBQSxDQUFBa0YsZ0JBQWdCLEdBQUU7WUFFbkQsTUFBTUcsU0FBUyxHQUFHNUwsUUFBUSxDQUFDbEcsVUFBVSxDQUFDUCxHQUFHLENBQUM4USxVQUFVLENBQUM7WUFFckQsTUFBTXdCLE1BQU0sR0FBR0QsU0FBUyxFQUFFakcsU0FBUyxFQUFFdEwsRUFBRTtZQUN2QyxNQUFNLENBQUMwQixRQUFRLEVBQUV1USxXQUFXLENBQUMsR0FBR3ZCLEtBQUssQ0FBQ3hELFFBQVEsQ0FBQ3FFLFNBQVMsRUFBRWpHLFNBQVMsRUFBRTVKLFFBQVEsQ0FBQ2hDLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDMUZnUixLQUFLLENBQUN3QixTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJLENBQUNWLE1BQU0sRUFBRTtjQUNiLE1BQU1XLGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2dCQUMxQkYsV0FBVyxDQUFDLENBQUMsR0FBR1YsU0FBUyxDQUFDakcsU0FBUyxDQUFDNUosUUFBUSxDQUFDaEMsS0FBSyxDQUFDLENBQUM7Y0FDckQsQ0FBQztjQUNENlIsU0FBUyxDQUFDakcsU0FBUyxDQUFDVixFQUFFLENBQUMsUUFBUSxFQUFFdUgsYUFBYSxDQUFDO2NBQy9DLE9BQU8sTUFBSztnQkFDWFosU0FBUyxDQUFDakcsU0FBUyxDQUFDOEcsR0FBRyxDQUFDLFFBQVEsRUFBRUQsYUFBYSxDQUFDO2NBQ2pELENBQUM7WUFDRixDQUFDLEVBQUUsQ0FBQ1gsTUFBTSxDQUFDLENBQUM7WUFDWixNQUFNYSxJQUFJLEdBQUcsRUFBRTtZQUNmLElBQUl2TCxJQUFJLENBQUNsRixRQUFRLEVBQUVaLFVBQVUsRUFBRXFSLElBQUksQ0FBQzNQLElBQUksQ0FBQ2dPLEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQVMsR0FBRztjQUFDekssR0FBRyxFQUFDO1lBQVksR0FBRXNDLEtBQUssQ0FBQzFLLFVBQVUsQ0FBQ3VCLFVBQVUsQ0FBTyxDQUFDO1lBQ25HLE1BQU11UixZQUFZLEdBQUd6TCxJQUFJLENBQUN5TCxZQUFZLEdBQUd6TCxJQUFJLENBQUN5TCxZQUFZLEdBQUd6TCxJQUFJLENBQUNwRixRQUFRLEVBQUVDLEtBQUs7WUFDakYwUSxJQUFJLENBQUMzUCxJQUFJLENBQ1JnTyxLQUFBLENBQUEzRSxhQUFBLENBQUM4RixLQUFBLENBQUFTLEdBQUc7Y0FBQ3pLLEdBQUcsRUFBQztZQUFTLEdBQ2pCNkksS0FBQSxDQUFBM0UsYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBWSxHQUN6QnJDLEtBQUssQ0FBQzFLLFVBQVUsQ0FBQ29KLElBQUksRUFDckIvQixJQUFJLENBQUNwRixRQUFRLEVBQUVDLEtBQUssR0FBRytPLEtBQUEsQ0FBQTNFLGFBQUE7Y0FBR1MsU0FBUyxFQUFDO1lBQWUsR0FBRStGLFlBQVksQ0FBSyxHQUFHLElBQUksQ0FDekUsQ0FDRCxDQUNOO1lBRUQsSUFBSXpMLElBQUksRUFBRTBMLE1BQU0sRUFBRXRPLE1BQU0sRUFDdkJtTyxJQUFJLENBQUMzUCxJQUFJLENBQ1JnTyxLQUFBLENBQUEzRSxhQUFBLENBQUM4RixLQUFBLENBQUFTLEdBQUc7Y0FBQ3pLLEdBQUcsRUFBQyxRQUFRO2NBQUMyRSxTQUFTLEVBQUM7WUFBWSxHQUN2Q2tFLEtBQUEsQ0FBQTNFLGFBQUE7Y0FBS1MsU0FBUyxFQUFDO1lBQVksR0FDekJyQyxLQUFLLENBQUNxSSxNQUFNLEVBQ2I5QixLQUFBLENBQUEzRSxhQUFBO2NBQU1TLFNBQVMsRUFBQztZQUFxQyxHQUFFMUYsSUFBSSxDQUFDMEwsTUFBTSxDQUFDdE8sTUFBTSxDQUFRLENBQzVFLENBQ0QsQ0FDTjtZQUVGLE1BQU11TyxRQUFRLEdBQUc3RCxLQUFLLElBQUc7Y0FDeEJMLGFBQWEsQ0FBQztnQkFDYjFQLElBQUksRUFBRSxJQUFJO2dCQUNWb0wsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YxSyxJQUFJLEVBQUU7a0JBQ0xvRyxRQUFRO2tCQUNSekMsV0FBVztrQkFDWCtNLG1CQUFtQixFQUFFbkosSUFBSTtrQkFDekIrQixJQUFJLEVBQUUwSSxTQUFTLENBQUNqRzs7ZUFFakIsQ0FBQztZQUNILENBQUM7WUFFRCxPQUNDb0YsS0FBQSxDQUFBM0UsYUFBQSxDQUFDOEYsS0FBQSxDQUFBYSxhQUFhO2NBQUNDLE1BQU0sRUFBRTtZQUFDLEdBQ3ZCakMsS0FBQSxDQUFBM0UsYUFBQSxDQUFDOEYsS0FBQSxDQUFBZSxJQUFJO2NBQUNwRyxTQUFTLEVBQUM7WUFBYyxHQUFFNkYsSUFBSSxDQUFRLEVBQzVDM0IsS0FBQSxDQUFBM0UsYUFBQSxDQUFDOEYsS0FBQSxDQUFBZ0IsS0FBSyxRQUNKL0wsSUFBSSxDQUFDbEYsUUFBUSxFQUFFWixVQUFVLElBQUkwUCxLQUFBLENBQUEzRSxhQUFBLENBQUNnRyxXQUFBLENBQUFlLG1DQUFtQztjQUFDaE0sSUFBSSxFQUFFQSxJQUFJO2NBQUVuQixRQUFRLEVBQUVBO1lBQVEsRUFBSSxFQUNyRytLLEtBQUEsQ0FBQTNFLGFBQUEsY0FDQzJFLEtBQUEsQ0FBQTNFLGFBQUE7Y0FBU1MsU0FBUyxFQUFDO1lBQTZCLEdBQy9Da0UsS0FBQSxDQUFBM0UsYUFBQSxhQUFLNUIsS0FBSyxDQUFDMUssVUFBVSxDQUFDb0MsT0FBTyxDQUFNLEVBQ25DNk8sS0FBQSxDQUFBM0UsYUFBQSxZQUFJakYsSUFBSSxDQUFDNUYsU0FBUyxDQUFLLEVBQ3ZCd1AsS0FBQSxDQUFBM0UsYUFBQSxDQUFDYyxXQUFBLENBQUFXLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFLENBQUMsQ0FBQzhFLFlBQVk7Y0FDekI3RSxPQUFPO2NBQ1BDLE9BQU8sRUFBRTtnQkFDUkMsSUFBSSxFQUNIOEMsS0FBQSxDQUFBM0UsYUFBQTtrQkFBUVMsU0FBUyxFQUFDO2dCQUErQixHQUNoRGtFLEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQ2MsV0FBQSxDQUFBa0csTUFBTTtrQkFBQ3hGLE9BQU8sRUFBRWtGLFFBQVE7a0JBQUVqRyxTQUFTLEVBQUMsV0FBVztrQkFBQ3dHLE9BQU8sRUFBQyxTQUFTO2tCQUFDQyxRQUFRO2dCQUFBLEdBQ3pFOUksS0FBSyxDQUFDMUssVUFBVSxDQUFDb0osSUFBSSxDQUNkLENBRVY7Z0JBQ0RtRixLQUFLLEVBQUU7O1lBQ1AsRUFDQSxDQUNPLENBQ0wsRUFFTjBDLEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQytGLGFBQUEsQ0FBQW9CLFdBQVc7Y0FBQ1YsTUFBTSxFQUFFMUwsSUFBSSxFQUFFMEwsTUFBTTtjQUFFL1EsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDMUMsQ0FDTztVQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoR0EsSUFBQWlQLEtBQUEsR0FBQXhTLE9BQUE7VUFDQSxJQUFBZ08sUUFBQSxHQUFBaE8sT0FBQTtVQUNBLElBQUF1TyxNQUFBLEdBQUF2TyxPQUFBO1VBRU0sU0FBVXdSLGtDQUFrQ0EsQ0FBQztZQUFFNUk7VUFBSSxDQUFFO1lBQzFELE1BQU07Y0FBRS9HLElBQUk7Y0FBRTJPLFFBQVE7Y0FBRWxQO1lBQU0sQ0FBRSxHQUFHc0gsSUFBSTtZQUN2QyxNQUFNO2NBQUVxRDtZQUFLLENBQUUsR0FBRyxJQUFBK0IsUUFBQSxDQUFBa0YsZ0JBQWdCLEdBQUU7WUFDcEMsTUFBTVQsU0FBUyxHQUFHO2NBQ2pCLGFBQWEsRUFBRSxvQkFBb0I7Y0FDbkNDLE9BQU8sRUFBRSxpQkFBaUI7Y0FDMUJDLFNBQVMsRUFBRSxtQkFBbUI7Y0FDOUJDLFdBQVcsRUFBRTthQUNiO1lBQ0QsT0FDQ0osS0FBQSxDQUFBM0UsYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBeUMsR0FDdkRrRSxLQUFBLENBQUEzRSxhQUFBO2NBQUtTLFNBQVMsRUFBQztZQUE0QixHQUMxQ2tFLEtBQUEsQ0FBQTNFLGFBQUEsY0FDQzJFLEtBQUEsQ0FBQTNFLGFBQUEsYUFBS2hNLElBQUksQ0FBTSxFQUNmMlEsS0FBQSxDQUFBM0UsYUFBQSxZQUFJMkMsUUFBUSxHQUFHQSxRQUFRLEdBQUd2RSxLQUFLLENBQUMxSyxVQUFVLENBQUN3UixVQUFVLENBQUssQ0FDckQsRUFDTlAsS0FBQSxDQUFBM0UsYUFBQSxjQUNDMkUsS0FBQSxDQUFBM0UsYUFBQTtjQUFLUyxTQUFTLEVBQUUsd0NBQXdDMUYsSUFBSSxDQUFDdEgsTUFBTSxDQUFDOEYsSUFBSTtZQUFFLEdBQ3pFb0wsS0FBQSxDQUFBM0UsYUFBQSxlQUFPNUIsS0FBSyxDQUFDMUssVUFBVSxDQUFDc1IsZ0JBQWdCLENBQUN2UixNQUFNLENBQUM4RixJQUFJLENBQUMsQ0FBUSxFQUM3RG9MLEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQ1UsTUFBQSxDQUFBdUUsT0FBTztjQUNQbFAsSUFBSSxFQUFFNk8sU0FBUyxDQUFDN0osSUFBSSxDQUFDdEgsTUFBTSxDQUFDOEYsSUFBSSxDQUFDO2NBQ2pDa0gsU0FBUyxFQUFFLDhCQUE4QjFGLElBQUksQ0FBQ3RILE1BQU0sQ0FBQzhGLElBQUk7WUFBRSxFQUMxRCxDQUNHLENBQ0QsQ0FDRCxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENBLElBQUFvSCxLQUFBLEdBQUF4TyxPQUFBO1VBQ0EsSUFBQXdTLEtBQUEsR0FBQXhTLE9BQUE7VUFDQSxJQUFBZ08sUUFBQSxHQUFBaE8sT0FBQTtVQUNBLElBQUFtUSxVQUFBLEdBQUFuUSxPQUFBO1VBQ0E7VUFFTSxTQUFVNFUsbUNBQW1DQSxDQUFDO1lBQUVoTSxJQUFJO1lBQUVuQjtVQUFRLENBQUU7WUFDckUsTUFBTTtjQUFFd0U7WUFBSyxDQUFFLEdBQUcsSUFBQStCLFFBQUEsQ0FBQWtGLGdCQUFnQixHQUFFO1lBRXBDLE1BQU1HLFNBQVMsR0FBRzVMLFFBQVEsQ0FBQ2xHLFVBQVUsQ0FBQ1AsR0FBRyxDQUFDNEgsSUFBSSxDQUFDVixRQUFRLENBQUNwRyxFQUFFLENBQUM7WUFDM0QsTUFBTXdSLE1BQU0sR0FBR0QsU0FBUyxFQUFFakcsU0FBUyxDQUFDdEwsRUFBRTtZQUV0QyxPQUNDMFEsS0FBQSxDQUFBM0UsYUFBQSxjQUNDMkUsS0FBQSxDQUFBM0UsYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBcUIsR0FDbkNrRSxLQUFBLENBQUEzRSxhQUFBLFlBQUlqRixJQUFJLENBQUNsRixRQUFRLEVBQUVDLE9BQU8sQ0FBSyxDQUMxQixFQUNMaUYsSUFBSSxDQUFDbEYsUUFBUSxFQUFFWixVQUFVLElBQ3pCMFAsS0FBQSxDQUFBM0UsYUFBQSxjQUNDMkUsS0FBQSxDQUFBM0UsYUFBQTtjQUFJUyxTQUFTLEVBQUM7WUFBTyxHQUFFckMsS0FBSyxDQUFDMUssVUFBVSxDQUFDMFQsT0FBTyxDQUFNLEVBQ3JEekMsS0FBQSxDQUFBM0UsYUFBQSxDQUFDVyxLQUFBLENBQUFtQixJQUFJO2NBQ0pyQixTQUFTLEVBQUMsZUFBZTtjQUN6QjlNLEtBQUssRUFBRW9ILElBQUksQ0FBQ2xGLFFBQVEsRUFBRVosVUFBVTtjQUNoQzhNLE9BQU8sRUFBRU8sVUFBQSxDQUFBcUI7WUFBa0MsRUFDMUMsQ0FFSCxDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JBLElBQUFqRCxNQUFBLEdBQUF2TyxPQUFBO1VBQ0EsSUFBQWlRLFlBQUEsR0FBQWpRLE9BQUE7VUFDQSxJQUFBMk8sV0FBQSxHQUFBM08sT0FBQTtVQUNBLElBQUF3UyxLQUFBLEdBQUF4UyxPQUFBO1VBQ0EsSUFBQWdPLFFBQUEsR0FBQWhPLE9BQUE7VUFDQSxJQUFBeVIsS0FBQSxHQUFBelIsT0FBQTtVQUNBLElBQUE2SCxlQUFBLEdBQUE3SCxPQUFBO1VBQ0EsSUFBQThILE9BQUEsR0FBQTlILE9BQUE7VUFFQTs7Ozs7VUFLTSxTQUFVa1YseUJBQXlCQSxDQUFDO1lBQUV0TSxJQUFJLEVBQUVWLFFBQVE7WUFBRTNFLElBQUk7WUFBRStGLEtBQUs7WUFBRTdCLFFBQVE7WUFBRXFLLFVBQVU7WUFBRTlNO1VBQVcsQ0FBRTtZQUMzRyxNQUFNO2NBQUVpSCxLQUFLO2NBQUUzTCxLQUFLO2NBQUUrUDtZQUFhLENBQUUsR0FBRyxJQUFBckMsUUFBQSxDQUFBa0YsZ0JBQWdCLEdBQUU7WUFDMUQsTUFBTWlDLGVBQWUsR0FBR25RLFdBQVcsQ0FBQ3pELFVBQVUsQ0FBQ2tELEdBQUcsQ0FBQ3lELFFBQVEsQ0FBQ3BHLEVBQUUsQ0FBQztZQUMvRCxNQUFNOEcsSUFBSSxHQUFHNUQsV0FBVyxDQUFDekQsVUFBVSxDQUFDUCxHQUFHLENBQUNrSCxRQUFRLENBQUNwRyxFQUFFLENBQUM7WUFDcEQsTUFBTWlQLElBQUksR0FBSSxDQUFDZSxVQUFVLElBQUl4SSxLQUFLLEtBQUssQ0FBQyxJQUFLd0ksVUFBVSxLQUFLNUosUUFBUSxDQUFDcEcsRUFBRTtZQUN2RSxNQUFNLENBQUN3TyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHaUMsS0FBSyxDQUFDeEQsUUFBUSxDQUFDK0IsSUFBSSxDQUFDO1lBQ3hELE1BQU1vQyxHQUFHLEdBQUdYLEtBQUssQ0FBQ1ksTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixNQUFNM0MsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckJGLGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7WUFDM0IsQ0FBQztZQUNELE1BQU04RSxTQUFTLEdBQUcsNEJBQTRCOUUsVUFBVSxHQUFHLFNBQVMsR0FBRyxFQUFFLElBQUlTLElBQUksR0FBRyxTQUFTLEdBQUcsRUFBRSxHQUFHO1lBQ3JHLElBQUksQ0FBQ2UsVUFBVSxFQUFFQSxVQUFVLEdBQUc1SixRQUFRLENBQUNwRyxFQUFFO1lBRXpDMFEsS0FBSyxDQUFDd0IsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSSxDQUFDakQsSUFBSSxFQUFFO2NBQ1hvQyxHQUFHLENBQUNrQyxPQUFPLEVBQUVDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLHVCQUF1QixDQUFDO2NBQ3REakksVUFBVSxDQUFDLE1BQUs7Z0JBQ2Y2RixHQUFHLENBQUNrQyxPQUFPLEVBQUVDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLHVCQUF1QixDQUFDO2NBQ3ZELENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVCxDQUFDLEVBQUUsQ0FBQ3hFLElBQUksQ0FBQyxDQUFDO1lBRVYsSUFBSSxDQUFDb0UsZUFBZSxFQUFFO2NBQ3JCLE9BQ0MzQyxLQUFBLENBQUEzRSxhQUFBO2dCQUFTUyxTQUFTLEVBQUMsc0NBQXNDO2dCQUFDNkUsR0FBRyxFQUFFQTtjQUFHLEdBQ2pFWCxLQUFBLENBQUEzRSxhQUFBLENBQUNvQyxZQUFBLENBQUFZLG9CQUFvQixRQUNwQjJCLEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQ29DLFlBQUEsQ0FBQWUsaUJBQWlCLFFBQ2pCd0IsS0FBQSxDQUFBM0UsYUFBQTtnQkFBUVMsU0FBUyxFQUFDO2NBQWtCLEdBQ25Da0UsS0FBQSxDQUFBM0UsYUFBQTtnQkFBU1MsU0FBUyxFQUFDO2NBQTRCLEdBQzlDa0UsS0FBQSxDQUFBM0UsYUFBQTtnQkFBU1MsU0FBUyxFQUFFLGlDQUFpQ3BHLFFBQVEsRUFBRTlGLElBQUk7Y0FBRSxHQUNwRW9RLEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQ1UsTUFBQSxDQUFBdUUsT0FBTztnQkFBQ2xQLElBQUksRUFBRTJLLE1BQUEsQ0FBQWlILEtBQUssQ0FBQ3ROLFFBQVEsQ0FBQzlGLElBQUk7Y0FBQyxFQUFJLENBQzlCLEVBQ1ZvUSxLQUFBLENBQUEzRSxhQUFBLGNBQ0MyRSxLQUFBLENBQUEzRSxhQUFBLGFBQUszRixRQUFRLENBQUMvRixLQUFLLENBQU0sRUFDekJxUSxLQUFBLENBQUEzRSxhQUFBLGNBQ0MyRSxLQUFBLENBQUEzRSxhQUFBLGVBQU81QixLQUFLLENBQUMxSyxVQUFVLENBQUNrVSxLQUFLLENBQUN2TixRQUFRLENBQUM5RixJQUFJLENBQUMsQ0FBUSxFQUNwRG9RLEtBQUEsQ0FBQTNFLGFBQUE7Z0JBQUtTLFNBQVMsRUFBQztjQUFpQixHQUFFckMsS0FBSyxDQUFDMUssVUFBVSxDQUFDRCxNQUFNLENBQUNvUixPQUFPLENBQU8sQ0FDbkUsQ0FDRCxDQUNHLENBQ0YsQ0FDVSxDQUNFLENBQ2Q7O1lBSVosT0FDQ0YsS0FBQSxDQUFBM0UsYUFBQTtjQUFTUyxTQUFTLEVBQUU4RyxTQUFTO2NBQUVqQyxHQUFHLEVBQUVBO1lBQUcsR0FDdENYLEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQ29DLFlBQUEsQ0FBQVksb0JBQW9CO2NBQUN4UCxJQUFJLEVBQUV1SCxJQUFJO2NBQUU2SCxRQUFRLEVBQUVBLFFBQVE7Y0FBRU0sSUFBSSxFQUFFVDtZQUFVLEdBQ3JFa0MsS0FBQSxDQUFBM0UsYUFBQSxDQUFDb0MsWUFBQSxDQUFBZSxpQkFBaUIsUUFDakJ3QixLQUFBLENBQUEzRSxhQUFBO2NBQVFTLFNBQVMsRUFBQztZQUFrQixHQUNuQ2tFLEtBQUEsQ0FBQTNFLGFBQUE7Y0FBU1MsU0FBUyxFQUFDO1lBQTRCLEdBQzlDa0UsS0FBQSxDQUFBM0UsYUFBQTtjQUFTUyxTQUFTLEVBQUUsaUNBQWlDcEcsUUFBUSxFQUFFOUYsSUFBSTtZQUFFLEdBQ3BFb1EsS0FBQSxDQUFBM0UsYUFBQSxDQUFDVSxNQUFBLENBQUF1RSxPQUFPO2NBQUNsUCxJQUFJLEVBQUUySyxNQUFBLENBQUFpSCxLQUFLLENBQUN0TixRQUFRLENBQUM5RixJQUFJO1lBQUMsRUFBSSxDQUM5QixFQUNWb1EsS0FBQSxDQUFBM0UsYUFBQSxjQUNDMkUsS0FBQSxDQUFBM0UsYUFBQSxhQUFLM0YsUUFBUSxDQUFDL0YsS0FBSyxDQUFNLEVBQ3pCcVEsS0FBQSxDQUFBM0UsYUFBQSxlQUFPNUIsS0FBSyxDQUFDMUssVUFBVSxDQUFDa1UsS0FBSyxDQUFDdk4sUUFBUSxDQUFDOUYsSUFBSSxDQUFDLENBQVEsQ0FDL0MsQ0FDRyxDQUNGLENBQ1UsRUFDcEJvUSxLQUFBLENBQUEzRSxhQUFBLENBQUNvQyxZQUFBLENBQUFzQixrQkFBa0I7Y0FBQ2pELFNBQVMsRUFBQztZQUErQyxHQUM1RWtFLEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQ2MsV0FBQSxDQUFBVyxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRXJILFFBQVEsQ0FBQzlGLElBQUk7Y0FDeEJxTixPQUFPLEVBQUU7Z0JBQ1IsZ0JBQWdCLEVBQ2YrQyxLQUFBLENBQUEzRSxhQUFBLENBQUM0RCxLQUFBLENBQUFxQyxpQ0FBaUM7a0JBQ2pDck0sUUFBUSxFQUFFQSxRQUFRO2tCQUNsQm1CLElBQUksRUFBRUEsSUFBSTtrQkFDVnJGLElBQUksRUFBRUEsSUFBSTtrQkFDVnlCLFdBQVcsRUFBRUEsV0FBVztrQkFDeEI4TSxVQUFVLEVBQUVBO2dCQUFVLEVBRXZCO2dCQUNELGdCQUFnQixFQUNmVSxLQUFBLENBQUEzRSxhQUFBLENBQUM0RCxLQUFBLENBQUFxQyxpQ0FBaUM7a0JBQ2pDck0sUUFBUSxFQUFFQSxRQUFRO2tCQUNsQm1CLElBQUksRUFBRUEsSUFBSTtrQkFDVnJGLElBQUksRUFBRUEsSUFBSTtrQkFDVnlCLFdBQVcsRUFBRUEsV0FBVztrQkFDeEI4TSxVQUFVLEVBQUVBO2dCQUFVLEVBRXZCO2dCQUNENEQsTUFBTSxFQUNMbEQsS0FBQSxDQUFBM0UsYUFBQSxDQUFDNEQsS0FBQSxDQUFBcUMsaUNBQWlDO2tCQUNqQ3JNLFFBQVEsRUFBRUEsUUFBUTtrQkFDbEJtQixJQUFJLEVBQUVBLElBQUk7a0JBQ1ZyRixJQUFJLEVBQUVBLElBQUk7a0JBQ1Z5QixXQUFXLEVBQUVBLFdBQVc7a0JBQ3hCOE0sVUFBVSxFQUFFQTtnQkFBVSxFQUV2QjtnQkFDRCxpQkFBaUIsRUFDaEJVLEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQ2hHLGVBQUEsQ0FBQThOLDJDQUEyQztrQkFDM0MvTSxJQUFJLEVBQUVBLElBQUk7a0JBQ1ZyRixJQUFJLEVBQUVBLElBQUk7a0JBQ1Z1TyxVQUFVLEVBQUVBO2dCQUFVLEVBRXZCO2dCQUNEdkosTUFBTSxFQUNMaUssS0FBQSxDQUFBM0UsYUFBQSxDQUFDL0YsT0FBQSxDQUFBOE4sbUNBQW1DO2tCQUNuQ2hOLElBQUksRUFBRUEsSUFBSTtrQkFDVnJGLElBQUksRUFBRUEsSUFBSTtrQkFDVmtFLFFBQVEsRUFBRUEsUUFBUTtrQkFDbEJxSyxVQUFVLEVBQUVBO2dCQUFVOztZQUd4QixFQUNBLENBQ2tCLENBQ0MsQ0FDZDtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hJQSxJQUFBVSxLQUFBLEdBQUF4UyxPQUFBO1VBQ0EsSUFBQWdPLFFBQUEsR0FBQWhPLE9BQUE7VUFJTSxTQUFVNlYsc0RBQXNEQSxDQUFDO1lBQUVqTixJQUFJO1lBQUVXLE1BQU07WUFBRXVNLGFBQWE7WUFBRXhNO1VBQUssQ0FBRTtZQUM1RyxNQUFNO2NBQUUyQztZQUFLLENBQUUsR0FBRyxJQUFBK0IsUUFBQSxDQUFBa0YsZ0JBQWdCLEdBQUU7WUFFcEMsTUFBTTZDLFFBQVEsR0FBR3pNLEtBQUssS0FBS0MsTUFBTTtZQUNqQyxJQUFJZ0osR0FBRyxHQUFHLGNBQWM7WUFDeEIsSUFBSWpKLEtBQUssS0FBS3dNLGFBQWEsRUFBRXZELEdBQUcsSUFBSSxpQkFBaUI7WUFDckQsSUFBSXdELFFBQVEsRUFBRTtjQUNieEQsR0FBRyxJQUFJLEdBQUd3RCxRQUFRLElBQUl6TSxLQUFLLEtBQUt3TSxhQUFhLEdBQUcsb0JBQW9CLEdBQUcsZ0JBQWdCLEVBQUU7O1lBRTFGLElBQUl4TSxLQUFLLEtBQUtDLE1BQU0sRUFBRWdKLEdBQUcsSUFBSSxtQkFBbUI7WUFDaEQ7WUFDQSxPQUFPQyxLQUFBLENBQUEzRSxhQUFBO2NBQUtTLFNBQVMsRUFBRWlFO1lBQUcsR0FBRzNKLElBQUksQ0FBTztVQUN6Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkEsSUFBQTRKLEtBQUEsR0FBQXhTLE9BQUE7VUFDQSxJQUFBZ08sUUFBQSxHQUFBaE8sT0FBQTtVQUVBLElBQUF3TyxLQUFBLEdBQUF4TyxPQUFBO1VBQ0EsSUFBQWdXLFVBQUEsR0FBQWhXLE9BQUE7VUFFTSxTQUFVMlYsMkNBQTJDQSxDQUFDO1lBQUUvTSxJQUFJO1lBQUVyRixJQUFJO1lBQUV1TztVQUFVLENBQUU7WUFDckYsTUFBTTtjQUFFN0Y7WUFBSyxDQUFFLEdBQUcsSUFBQStCLFFBQUEsQ0FBQWtGLGdCQUFnQixHQUFFO1lBRXBDLE9BQ0NWLEtBQUEsQ0FBQTNFLGFBQUE7Y0FBS1MsU0FBUyxFQUFDO1lBQTZCLEdBQzNDa0UsS0FBQSxDQUFBM0UsYUFBQSxZQUFJakYsSUFBSSxDQUFDVixRQUFRLENBQUNqRyxXQUFXLENBQUssRUFDbEN1USxLQUFBLENBQUEzRSxhQUFBLGFBQUs1QixLQUFLLENBQUMxSyxVQUFVLENBQUNzUSxjQUFjLENBQUNvRSxhQUFhLENBQUM5VCxLQUFLLENBQU0sRUFDOURxUSxLQUFBLENBQUEzRSxhQUFBO2NBQUtTLFNBQVMsRUFBQztZQUE0QixHQUMxQ2tFLEtBQUEsQ0FBQTNFLGFBQUEsYUFDRTVCLEtBQUssQ0FBQzFLLFVBQVUsQ0FBQ3NRLGNBQWMsQ0FBQ29FLGFBQWEsQ0FBQ0MsTUFBTSxFLE1BQUl0TixJQUFJLENBQUN1SixRQUFRLENBQUNDLE9BQU8sRSxLQUM3RXhKLElBQUksQ0FBQ3VKLFFBQVEsQ0FBQ0UsS0FBSyxDQUNoQixFQUVMRyxLQUFBLENBQUEzRSxhQUFBLENBQUNXLEtBQUEsQ0FBQW1CLElBQUk7Y0FDSnJCLFNBQVMsRUFBQyxzQ0FBc0M7Y0FDaEQ5TSxLQUFLLEVBQUVvSCxJQUFJLENBQUNRLGlCQUFpQjtjQUM3QndHLE9BQU8sRUFBRW9HLFVBQUEsQ0FBQUc7WUFBZ0QsRUFDeEQsQ0FDRyxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JBLElBQUEzRCxLQUFBLEdBQUF4UyxPQUFBO1VBQ0EsSUFBQWdPLFFBQUEsR0FBQWhPLE9BQUE7VUFFQSxJQUFBd08sS0FBQSxHQUFBeE8sT0FBQTtVQUNBLElBQUFvVyxPQUFBLEdBQUFwVyxPQUFBO1VBRU0sU0FBVW1XLGdEQUFnREEsQ0FBQztZQUFFdk4sSUFBSTtZQUFFckYsSUFBSTtZQUFFdU87VUFBVSxDQUFFO1lBQzFGLE1BQU07Y0FBRTdGO1lBQUssQ0FBRSxHQUFHLElBQUErQixRQUFBLENBQUFrRixnQkFBZ0IsR0FBRTtZQUNwQyxNQUFNdlEsS0FBSyxHQUFHO2NBQ2I0RyxNQUFNLEVBQUVYLElBQUksQ0FBQ1csTUFBTTtjQUNuQnVNLGFBQWEsRUFBRWxOLElBQUksQ0FBQ2tOO2FBQ3BCO1lBQ0QsT0FDQ3RELEtBQUEsQ0FBQTNFLGFBQUE7Y0FBSVMsU0FBUyxFQUFDO1lBQXVCLEdBQ3BDa0UsS0FBQSxDQUFBM0UsYUFBQSxhQUFLakYsSUFBSSxDQUFDUyxRQUFRLENBQU0sRUFDeEJtSixLQUFBLENBQUEzRSxhQUFBLENBQUNXLEtBQUEsQ0FBQW1CLElBQUk7Y0FDSnJCLFNBQVMsRUFBQyxvQ0FBb0M7Y0FDOUM5TSxLQUFLLEVBQUVvSCxJQUFJLENBQUM2RyxPQUFPO2NBQ25COU0sS0FBSyxFQUFFQSxLQUFLO2NBQ1ppTixPQUFPLEVBQUV3RyxPQUFBLENBQUFQO1lBQXNELEVBQzlELENBQ0U7VUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQXJELEtBQUEsR0FBQXhTLE9BQUE7VUFDQSxJQUFBZ08sUUFBQSxHQUFBaE8sT0FBQTtVQUNBLElBQUErTixHQUFBLEdBQUEvTixPQUFBO1VBQ0EsSUFBQXFGLE9BQUEsR0FBQXJGLE9BQUE7VUFDQSxJQUFBdU8sTUFBQSxHQUFBdk8sT0FBQTtVQUNBLElBQUEyVCxLQUFBLEdBQUEzVCxPQUFBO1VBRU0sU0FBVTRWLG1DQUFtQ0EsQ0FBQztZQUFFaE4sSUFBSTtZQUFFckYsSUFBSTtZQUFFa0UsUUFBUTtZQUFFcUs7VUFBVSxDQUFFO1lBQ3ZGLE1BQU07Y0FBRTdGLEtBQUs7Y0FBRTNMO1lBQUssQ0FBRSxHQUFHLElBQUEwTixRQUFBLENBQUFrRixnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNbUQsUUFBUSxHQUFHLEdBQUdoUixPQUFBLENBQUFrQixPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLGdCQUFnQnBHLEtBQUssQ0FBQ3dHLEtBQUssQ0FBQ2hGLEVBQUUsZUFBZThHLElBQUksQ0FBQ1YsUUFBUSxDQUFDcEcsRUFBRSxhQUFheUIsSUFBSSxDQUFDekIsRUFBRSxRQUFRO1lBRXZJLE1BQU13VSxNQUFNLEdBQUcxTixJQUFJLENBQUM5RixVQUFVLENBQUNrQixHQUFHLENBQUMxQixTQUFTLElBQUc7Y0FDOUMsT0FDQ2tRLEtBQUEsQ0FBQTNFLGFBQUE7Z0JBQUtTLFNBQVMsRUFBQyxzQkFBc0I7Z0JBQUMzRSxHQUFHLEVBQUUsR0FBR2YsSUFBSSxDQUFDOUcsRUFBRSxJQUFJUSxTQUFTLENBQUNBLFNBQVM7Y0FBRSxHQUM3RWtRLEtBQUEsQ0FBQTNFLGFBQUEsY0FDQzJFLEtBQUEsQ0FBQTNFLGFBQUE7Z0JBQUlTLFNBQVMsRUFBQztjQUE0QyxHQUN6RGtFLEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQ1UsTUFBQSxDQUFBdUUsT0FBTztnQkFBQ2xQLElBQUksRUFBRSxTQUFTdEIsU0FBUyxDQUFDdUgsTUFBTTtjQUFFLEVBQUksRUFDN0N2SCxTQUFTLENBQUNULElBQUksQ0FDWCxDQUNBLEVBQ04yUSxLQUFBLENBQUEzRSxhQUFBLGNBQ0MyRSxLQUFBLENBQUEzRSxhQUFBLGVBQU92TCxTQUFTLENBQUNpVSxRQUFRLENBQVEsQ0FDNUIsQ0FDRDtZQUVSLENBQUMsQ0FBQztZQUVGLE1BQU1wQyxJQUFJLEdBQUcsQ0FBQzNCLEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQVMsR0FBRztjQUFDekssR0FBRyxFQUFDO1lBQVUsR0FBRXNDLEtBQUssQ0FBQzFLLFVBQVUsQ0FBQ2dILE1BQU0sQ0FBQ2dPLFFBQVEsQ0FBTyxDQUFDO1lBQzNFLElBQUkzTixJQUFJLENBQUNtQixhQUFhLEVBQUVvSyxJQUFJLENBQUMzUCxJQUFJLENBQUNnTyxLQUFBLENBQUEzRSxhQUFBLENBQUM4RixLQUFBLENBQUFTLEdBQUc7Y0FBQ3pLLEdBQUcsRUFBQztZQUFlLEdBQUVzQyxLQUFLLENBQUMxSyxVQUFVLENBQUNnSCxNQUFNLENBQUN3QixhQUFhLENBQU8sQ0FBQztZQUV6RyxPQUNDeUksS0FBQSxDQUFBM0UsYUFBQSxjQUNDMkUsS0FBQSxDQUFBM0UsYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBdUIsR0FDckNrRSxLQUFBLENBQUEzRSxhQUFBLGFBQUs1QixLQUFLLENBQUMxSyxVQUFVLENBQUNnSCxNQUFNLENBQUNpTyxLQUFLLENBQU0sRUFDeENoRSxLQUFBLENBQUEzRSxhQUFBLENBQUNFLEdBQUEsQ0FBQTBJLFdBQVc7Y0FBQ0MsR0FBRyxFQUFFTDtZQUFRLEVBQUksQ0FDekIsRUFDTjdELEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQWEsYUFBYTtjQUFDQyxNQUFNLEVBQUUsQ0FBQztjQUFFbkcsU0FBUyxFQUFDO1lBQWlDLEdBQ3BFa0UsS0FBQSxDQUFBM0UsYUFBQSxDQUFDOEYsS0FBQSxDQUFBZSxJQUFJO2NBQUNwRyxTQUFTLEVBQUM7WUFBYyxHQUFFNkYsSUFBSSxDQUFRLEVBQzVDM0IsS0FBQSxDQUFBM0UsYUFBQSxDQUFDOEYsS0FBQSxDQUFBZ0IsS0FBSyxRQUNMbkMsS0FBQSxDQUFBM0UsYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBNEIsR0FBRWdJLE1BQU0sQ0FBTyxFQUUxRDlELEtBQUEsQ0FBQTNFLGFBQUE7Y0FBS1MsU0FBUyxFQUFDO1lBQXdCLEdBQ3RDa0UsS0FBQSxDQUFBM0UsYUFBQSxZQUFJakYsSUFBSSxDQUFDbUIsYUFBYSxDQUFLLENBQ3RCLENBQ0MsQ0FDTyxDQUNYO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaERBLElBQUF5SSxLQUFBLEdBQUF4UyxPQUFBO1VBQ0EsSUFBQWdPLFFBQUEsR0FBQWhPLE9BQUE7VUFFQSxJQUFBZ1QsY0FBQSxHQUFBaFQsT0FBQTtVQUNBLElBQUF5TyxNQUFBLEdBQUF6TyxPQUFBO1VBRkE7O1VBS00sU0FBVWlULGdDQUFnQ0EsQ0FBQztZQUFFckssSUFBSSxFQUFFO2NBQUUrQixJQUFJO2NBQUVvSDtZQUFtQixDQUFFO1lBQUV0SztVQUFRLENBQUU7WUFDakcsTUFBTTtjQUFFd0U7WUFBSyxDQUFFLEdBQUcsSUFBQStCLFFBQUEsQ0FBQWtGLGdCQUFnQixHQUFFO1lBQ3BDLE1BQU1DLEdBQUcsR0FBR1gsS0FBSyxDQUFDWSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCLE1BQU1DLFNBQVMsR0FBRzVMLFFBQVEsQ0FBQ2xHLFVBQVUsQ0FBQ1AsR0FBRyxDQUFDK1EsbUJBQW1CLENBQUNqUSxFQUFFLENBQUM7WUFDakUsTUFBTXdSLE1BQU0sR0FBR0QsU0FBUyxFQUFFakcsU0FBUyxFQUFFdEwsRUFBRTtZQUV2QzBRLEtBQUssQ0FBQ3dCLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUksQ0FBQ2IsR0FBRyxDQUFDa0MsT0FBTyxFQUFFO2NBQ2xCbEMsR0FBRyxDQUFDa0MsT0FBTyxDQUFDc0IsZ0JBQWdCLENBQUMsUUFBUSxFQUFFakcsS0FBSyxJQUFHO2dCQUM5Q0EsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Z0JBQ3ZCRCxLQUFLLENBQUNFLGNBQWMsRUFBRTtnQkFDdEIxSCxPQUFPLENBQUNjLEdBQUcsQ0FBQyxRQUFRLENBQUM7Y0FDdEIsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxFQUFFLENBQUNtSixHQUFHLENBQUNrQyxPQUFPLENBQUMsQ0FBQztZQUVqQixJQUFJLENBQUMxSyxJQUFJLEVBQUVuSCxRQUFRLENBQUNoQyxLQUFLLENBQUN3RSxNQUFNLEVBQUU7Y0FDakMsT0FDQ3dNLEtBQUEsQ0FBQTNFLGFBQUE7Z0JBQUtTLFNBQVMsRUFBQyxVQUFVO2dCQUFDNkUsR0FBRyxFQUFFQTtjQUFHLEdBQ2pDWCxLQUFBLENBQUEzRSxhQUFBLENBQUNZLE1BQUEsQ0FBQThFLFNBQVMsT0FBRyxDQUNSOztZQUlSLE9BQ0NmLEtBQUEsQ0FBQTNFLGFBQUE7Y0FBS1MsU0FBUyxFQUFDLFVBQVU7Y0FBQzZFLEdBQUcsRUFBRUE7WUFBRyxHQUNqQ1gsS0FBQSxDQUFBM0UsYUFBQSxDQUFDbUYsY0FBQSxDQUFBUyxtQkFBbUI7Y0FBQzlJLElBQUksRUFBRUEsSUFBSTtjQUFFN0ksRUFBRSxFQUFFNkksSUFBSSxFQUFFN0ksRUFBRTtjQUFFc00sS0FBSyxFQUFFSyxNQUFBLENBQUE4RSxTQUFTO2NBQUUzUCxJQUFJLEVBQUM7WUFBOEIsR0FDbkc0TyxLQUFBLENBQUEzRSxhQUFBLENBQUNtRixjQUFBLENBQUFVLGVBQWUsT0FBRyxDQUNFLENBQ2pCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENBLElBQUFoRyxNQUFBLEdBQUExTixPQUFBO1VBRUEsSUFBQTRXLE1BQUEsR0FBQTVXLE9BQUE7VUFFQSxJQUFBMk8sV0FBQSxHQUFBM08sT0FBQTtVQUNBLElBQUFnTyxRQUFBLEdBQUFoTyxPQUFBO1VBSU0sU0FBVTZXLGFBQWFBLENBQUM7WUFBRUM7VUFBUSxDQUF1QjtZQUM5RCxNQUFNLENBQUMvRixJQUFJLEVBQUVnRyxPQUFPLENBQUMsR0FBR3JKLE1BQUEsQ0FBQW5ILE9BQUssQ0FBQ3lJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFN0MsTUFBTTtjQUFFL0M7WUFBSyxDQUFFLEdBQUcsSUFBQStCLFFBQUEsQ0FBQWtGLGdCQUFnQixHQUFFO1lBRXBDLE1BQU04RCxVQUFVLEdBQUdBLENBQUEsS0FBTUQsT0FBTyxDQUFDLENBQUNoRyxJQUFJLENBQUM7WUFDdkMsTUFBTWtHLGFBQWEsR0FBR3ZHLEtBQUssSUFBRztjQUM3QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJxRyxVQUFVLEVBQUU7WUFDYixDQUFDO1lBRUQsTUFBTUUsU0FBUyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM1QixNQUFNSixRQUFRLEVBQUU7Y0FDaEJFLFVBQVUsRUFBRTtZQUNiLENBQUM7WUFFRCxPQUNDdEosTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFBSCxNQUFBLENBQUFuSCxPQUFBLENBQUF1SCxRQUFBLFFBQ0NKLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ2MsV0FBQSxDQUFBa0csTUFBTTtjQUFDdkcsU0FBUyxFQUFDLGFBQWE7Y0FBQ3dHLE9BQU8sRUFBQyxTQUFTO2NBQUN6RixPQUFPLEVBQUU0SDtZQUFhLEdBQ3RFaEwsS0FBSyxDQUFDekUsVUFBVSxDQUFDMlAsTUFBTSxDQUNoQixFQUNScEcsSUFBSSxJQUNKckQsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDK0ksTUFBQSxDQUFBUSxZQUFZO2NBQUN6VyxJQUFJO2NBQUN1VyxTQUFTLEVBQUVBLFNBQVM7Y0FBRUcsUUFBUSxFQUFFTDtZQUFVLEdBQzVEdEosTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQTtjQUFLUyxTQUFTLEVBQUMsZUFBZTtjQUFDZSxPQUFPLEVBQUUySDtZQUFVLEVBQUksRUFDdER0SixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQUtTLFNBQVMsRUFBQztZQUFlLEdBQzdCWixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLGFBQUs1QixLQUFLLENBQUN6RSxVQUFVLENBQUNyRixLQUFLLENBQU0sRUFDakN1TCxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLFlBQUk1QixLQUFLLENBQUN6RSxVQUFVLENBQUN2RixXQUFXLENBQUssQ0FDaEMsQ0FFUCxDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUF5TSxNQUFBLEdBQUExTyxPQUFBO1VBRUEsSUFBQXVPLE1BQUEsR0FBQXZPLE9BQUE7VUFDQSxJQUFBd1MsS0FBQSxHQUFBeFMsT0FBQTtVQUNBLElBQUFnTyxRQUFBLEdBQUFoTyxPQUFBO1VBQ0EsSUFBQXNYLE9BQUEsR0FBQXRYLE9BQUE7VUFDQSxJQUFBdVgsUUFBQSxHQUFBdlgsT0FBQTtVQUNBLElBQUF3WCxRQUFBLEdBQUF4WCxPQUFBO1VBRU0sU0FBVXlYLGlCQUFpQkEsQ0FBQztZQUFFN08sSUFBSTtZQUFFb087VUFBVSxDQUFFO1lBQ3JELE1BQU07Y0FBRWhTLFdBQVc7Y0FBRXlDLFFBQVE7Y0FBRVMsUUFBUTtjQUFFNko7WUFBbUIsQ0FBRSxHQUFHbkosSUFBSTtZQUNyRSxNQUFNO2NBQUVxRCxLQUFLO2NBQUUzTCxLQUFLO2NBQUUrUDtZQUFhLENBQUUsR0FBRyxJQUFBckMsUUFBQSxDQUFBa0YsZ0JBQWdCLEdBQUU7WUFDMUQsTUFBTTtjQUFFM1AsSUFBSSxFQUFFbVU7WUFBTyxDQUFFLEdBQUcxUyxXQUFXO1lBQ3JDLE1BQU0sQ0FBQ3hELEtBQUssRUFBRW1XLFFBQVEsQ0FBQyxHQUFHbkYsS0FBSyxDQUFDeEQsUUFBUSxDQUFDaEssV0FBVyxDQUFDekQsVUFBVSxDQUFDQyxLQUFLLENBQUM7WUFDdEUsTUFBTSxDQUFDb0wsUUFBUSxFQUFFZ0wsV0FBVyxDQUFDLEdBQUdwRixLQUFLLENBQUN4RCxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQzFILEtBQUssRUFBRXVRLFFBQVEsQ0FBQyxHQUFHckYsS0FBSyxDQUFDeEQsUUFBUSxDQUFDdkgsUUFBUSxDQUFDSCxLQUFLLENBQUM7WUFDeEQsTUFBTWlMLEdBQUcsR0FBRyxzQkFBc0IzRixRQUFRLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUVsRSxNQUFNa0YsVUFBVSxHQUFHNUosUUFBUSxFQUFFcEcsRUFBRTtZQUMvQixNQUFNZ1csU0FBUyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM1QkYsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQixNQUFNaFAsSUFBSSxDQUFDNUQsV0FBVyxDQUFDL0QsSUFBSSxFQUFFO2NBRTdCcU0sVUFBVSxDQUFDLE1BQUs7Z0JBQ2ZxSyxRQUFRLENBQUMsQ0FBQyxHQUFHM1MsV0FBVyxDQUFDekQsVUFBVSxDQUFDQyxLQUFLLENBQUMsQ0FBQztnQkFDM0NvVyxXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVCxDQUFDO1lBRUQsSUFBQWxKLE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUMxSCxRQUFRLENBQUMsRUFBRSxNQUFLO2NBQzFCb1EsUUFBUSxDQUFDcFEsUUFBUSxDQUFDSCxLQUFLLENBQUM7Y0FDeEJxUSxRQUFRLENBQUMsQ0FBQyxHQUFHM1MsV0FBVyxDQUFDekQsVUFBVSxDQUFDQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUM7WUFFRixJQUFJLENBQUM4RixLQUFLLEVBQUUsT0FBTyxJQUFJO1lBRXZCLE1BQU15USxNQUFNLEdBQUdBLENBQUEsS0FBSztjQUNuQlAsUUFBQSxDQUFBUSxPQUFPLENBQUNDLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixDQUFDO2NBRWpENUgsYUFBYSxDQUFDO2dCQUNiMVAsSUFBSSxFQUFFLElBQUk7Z0JBQ1ZvTCxJQUFJLEVBQUUsU0FBUztnQkFDZjFLLElBQUksRUFBRTtrQkFDTG9HLFFBQVE7a0JBQ1J6QyxXQUFXO2tCQUNYK00sbUJBQW1CLEVBQUVuSixJQUFJO2tCQUN6QlY7O2VBRUQsQ0FBQztZQUNILENBQUM7WUFDRCxPQUNDc0ssS0FBQSxDQUFBM0UsYUFBQTtjQUFLUyxTQUFTLEVBQUVpRTtZQUFHLEdBQ2xCQyxLQUFBLENBQUEzRSxhQUFBO2NBQVFTLFNBQVMsRUFBQztZQUEwQixHQUMzQ2tFLEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQ3lKLE9BQUEsQ0FBQVksYUFBYTtjQUFDN0ksT0FBTyxFQUFFMEksTUFBTTtjQUFFblUsSUFBSSxFQUFDLFdBQVc7Y0FBQzBLLFNBQVMsRUFBQztZQUFRLEVBQUcsRUFDdEVrRSxLQUFBLENBQUEzRSxhQUFBO2NBQVNTLFNBQVMsRUFBQztZQUErQyxHQUNqRWtFLEtBQUEsQ0FBQTNFLGFBQUEsY0FDQzJFLEtBQUEsQ0FBQTNFLGFBQUEsYUFBSzZKLE9BQU8sQ0FBQzdWLElBQUksQ0FBTSxFQUN2QjJRLEtBQUEsQ0FBQTNFLGFBQUE7Y0FBS1MsU0FBUyxFQUFDO1lBQWUsR0FDNUJyQyxLQUFLLENBQUNvSSxZQUFZLEUsTUFBSTVNLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDd1EsUUFBUSxFLEtBQUdsTSxLQUFLLENBQUNtTSxFQUFFLEUsS0FBRzNRLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDMEssS0FBSyxDQUMvRSxDQUNELEVBRU5HLEtBQUEsQ0FBQTNFLGFBQUEsY0FDQzJFLEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQ1UsTUFBQSxDQUFBYSxVQUFVO2NBQUN4TCxJQUFJLEVBQUMsU0FBUztjQUFDMEssU0FBUyxFQUFDLFFBQVE7Y0FBQ2UsT0FBTyxFQUFFeUk7WUFBUyxFQUFJLENBQy9ELENBQ0csQ0FDRixFQUNUdEYsS0FBQSxDQUFBM0UsYUFBQSxDQUFDMEosUUFBQSxDQUFBdEUsZ0NBQWdDO2NBQUNySyxJQUFJLEVBQUVBLElBQUk7Y0FBRW5CLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQy9EO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEVBLElBQUFpRyxNQUFBLEdBQUExTixPQUFBO1VBQ0EsSUFBQXlPLE1BQUEsR0FBQXpPLE9BQUE7VUFVTztVQUFXLFNBQVVxTyxTQUFTQSxDQUFDO1lBQ3JDakgsSUFBSTtZQUVKa0g7VUFBUyxDQUNJO1lBQ2IsTUFBTWlFLEdBQUcsR0FBRywyQkFBMkJqRSxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBRXpFLE9BQ0NaLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ1ksTUFBQSxDQUFBc0IsS0FBSztjQUFDekIsU0FBUyxFQUFFaUU7WUFBRyxHQUNwQjdFLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsWUFBSXpHLElBQUksQ0FBSyxDQUNOO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUFpUixNQUFBLEdBQUFyWSxPQUFBO1VBQ0EsSUFBQXVPLE1BQUEsR0FBQXZPLE9BQUE7VUFDQSxJQUFBd08sS0FBQSxHQUFBeE8sT0FBQTtVQUNBLElBQUF3UyxLQUFBLEdBQUF4UyxPQUFBO1VBQ0EsSUFBQWdPLFFBQUEsR0FBQWhPLE9BQUE7VUFDQSxJQUFBOEQsU0FBQSxHQUFBOUQsT0FBQTtVQUNBLElBQUF5TyxNQUFBLEdBQUF6TyxPQUFBO1VBQ0EsSUFBQTBPLE1BQUEsR0FBQTFPLE9BQUE7VUFNTSxTQUFVc1ksd0JBQXdCQSxDQUFDO1lBQUUxUCxJQUFJO1lBQUVvTztVQUFVLENBQUU7WUFDNUQsTUFBTTtjQUFFaFMsV0FBVztjQUFFeUMsUUFBUTtjQUFFUztZQUFRLENBQUUsR0FBR1UsSUFBSTtZQUNoRCxNQUFNO2NBQUVxRCxLQUFLO2NBQUUzTDtZQUFLLENBQUUsR0FBRyxJQUFBME4sUUFBQSxDQUFBa0YsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTTtjQUFFM1AsSUFBSSxFQUFFbVU7WUFBTyxDQUFFLEdBQUcxUyxXQUFXO1lBQ3JDLE1BQU0sQ0FBQ3hELEtBQUssRUFBRW1XLFFBQVEsQ0FBQyxHQUFHbkYsS0FBSyxDQUFDeEQsUUFBUSxDQUFDaEssV0FBVyxDQUFDekQsVUFBVSxDQUFDQyxLQUFLLENBQUM7WUFDdEUsTUFBTSxDQUFDb0wsUUFBUSxFQUFFZ0wsV0FBVyxDQUFDLEdBQUdwRixLQUFLLENBQUN4RCxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQzFILEtBQUssRUFBRXVRLFFBQVEsQ0FBQyxHQUFHckYsS0FBSyxDQUFDeEQsUUFBUSxDQUFDdkgsUUFBUSxDQUFDSCxLQUFLLENBQUM7WUFDeEQsTUFBTWlMLEdBQUcsR0FBRyxzQkFBc0IzRixRQUFRLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUVsRSxNQUFNa0YsVUFBVSxHQUFHNUosUUFBUSxFQUFFcEcsRUFBRTtZQUUvQixNQUFNNkYsT0FBTyxHQUFRckgsS0FBSyxDQUFDd0csS0FBSztZQUNoQyxNQUFNdUwsS0FBSyxHQUFHMUssT0FBTyxHQUFHQSxPQUFPLENBQUMwSyxLQUFLLEdBQUcxSyxPQUFPLENBQUN3USxRQUFRLEdBQUcsQ0FBQztZQUM1RCxNQUFNSSxtQkFBbUIsR0FBSWxHLEtBQUssR0FBRzFLLE9BQU8sQ0FBQzBLLEtBQUssR0FBSSxHQUFHO1lBQ3pELE1BQU15RixTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCRixXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCLE1BQU1oUCxJQUFJLENBQUM1RCxXQUFXLENBQUMvRCxJQUFJLEVBQUU7Y0FFN0JxTSxVQUFVLENBQUMsTUFBSztnQkFDZnFLLFFBQVEsQ0FBQyxDQUFDLEdBQUczUyxXQUFXLENBQUN6RCxVQUFVLENBQUNDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQ29XLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNULENBQUM7WUFFRCxJQUFBbEosTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQzFILFFBQVEsQ0FBQyxFQUFFLE1BQUs7Y0FDMUJvUSxRQUFRLENBQUNwUSxRQUFRLENBQUNILEtBQUssQ0FBQztjQUN4QnFRLFFBQVEsQ0FBQyxDQUFDLEdBQUczUyxXQUFXLENBQUN6RCxVQUFVLENBQUNDLEtBQUssQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQztZQUNGLE1BQU15VixhQUFhLEdBQUd2RyxLQUFLLElBQUc7Y0FDN0JBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCcUcsVUFBVSxFQUFFO1lBQ2IsQ0FBQztZQUVELElBQUksQ0FBQzFQLEtBQUssRUFBRSxPQUFPLElBQUk7WUFFdkIsT0FDQ2tMLEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQTJFLEtBQUEsQ0FBQTFFLFFBQUEsUUFDQzBFLEtBQUEsQ0FBQTNFLGFBQUE7Y0FBS1MsU0FBUyxFQUFFaUU7WUFBRyxHQUNsQkMsS0FBQSxDQUFBM0UsYUFBQTtjQUFRUyxTQUFTLEVBQUM7WUFBMEIsR0FDM0NrRSxLQUFBLENBQUEzRSxhQUFBO2NBQVNTLFNBQVMsRUFBQztZQUErQyxHQUNqRWtFLEtBQUEsQ0FBQTNFLGFBQUEsY0FDQzJFLEtBQUEsQ0FBQTNFLGFBQUEsYUFBSzZKLE9BQU8sQ0FBQzdWLElBQUksQ0FBTSxFQUN2QjJRLEtBQUEsQ0FBQTNFLGFBQUE7Y0FBS1MsU0FBUyxFQUFDO1lBQWUsR0FDNUJyQyxLQUFLLENBQUNvSSxZQUFZLEUsTUFBSTVNLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDd1EsUUFBUSxFLEtBQUdsTSxLQUFLLENBQUNtTSxFQUFFLEUsS0FBRzNRLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDMEssS0FBSyxDQUMvRSxDQUNELEVBRU5HLEtBQUEsQ0FBQTNFLGFBQUE7Y0FBS1MsU0FBUyxFQUFDO1lBQXdCLEdBVXRDa0UsS0FBQSxDQUFBM0UsYUFBQSxDQUFDVSxNQUFBLENBQUFhLFVBQVU7Y0FBQ3hMLElBQUksRUFBQyxTQUFTO2NBQUMwSyxTQUFTLEVBQUMscUJBQXFCO2NBQUNlLE9BQU8sRUFBRXlJO1lBQVMsRUFBSSxFQUNqRnRGLEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQ3dLLE1BQU0sQ0FBQ0csV0FBVyxPQUFHLENBQ2pCLENBQ0csQ0FDRixFQUNUaEcsS0FBQSxDQUFBM0UsYUFBQTtjQUFTUyxTQUFTLEVBQUM7WUFBb0IsR0FDckM5TSxLQUFLLENBQUN3RSxNQUFNLEdBQ1p3TSxLQUFBLENBQUEzRSxhQUFBLENBQUNXLEtBQUEsQ0FBQW1CLElBQUk7Y0FDSnJCLFNBQVMsRUFBQywwQkFBMEI7Y0FDcEM5TSxLQUFLLEVBQUVsQixLQUFLLENBQUN3RyxLQUFLLENBQUN2RixVQUFVLENBQUNDLEtBQUs7Y0FDbkNtQixLQUFLLEVBQUU7Z0JBQUVZLElBQUksRUFBRW1VLE9BQU87Z0JBQUVqUSxRQUFRO2dCQUFFcUssVUFBVTtnQkFBRTlNO2NBQVcsQ0FBRTtjQUMzRDRLLE9BQU8sRUFBRTlMLFNBQUEsQ0FBQW9SO1lBQXlCLEVBQ2pDLEdBRUYxQyxLQUFBLENBQUEzRSxhQUFBLENBQUNZLE1BQUEsQ0FBQUosU0FBUztjQUFDakgsSUFBSSxFQUFFNkUsS0FBSyxDQUFDRCxVQUFVLENBQUNvQyxLQUFLLENBQUNqTTtZQUFLLEVBQzdDLENBQ1EsQ0FDTCxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekZBLElBQUFxTSxLQUFBLEdBQUF4TyxPQUFBO1VBQ0EsSUFBQTBOLE1BQUEsR0FBQTFOLE9BQUE7VUFDQSxJQUFBZ08sUUFBQSxHQUFBaE8sT0FBQTtVQUNBLElBQUEwRSxLQUFBLEdBQUExRSxPQUFBO1VBRU87VUFBVSxTQUNSeVksV0FBV0EsQ0FBQTtZQUNuQixNQUFNO2NBQUVuWTtZQUFLLENBQUUsR0FBRyxJQUFBME4sUUFBQSxDQUFBRyxtQkFBbUIsR0FBRTtZQUV2QyxPQUNDVCxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUFILE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXVILFFBQUEsUUFDQ0osTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBaUIsR0FDL0JaLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ1csS0FBQSxDQUFBbUIsSUFBSTtjQUFDckIsU0FBUyxFQUFDLDJCQUEyQjtjQUFDOU0sS0FBSyxFQUFFbEIsS0FBSyxDQUFDZ0QsWUFBWTtjQUFFc00sT0FBTyxFQUFFbEwsS0FBQSxDQUFBQztZQUFJLEVBQUksQ0FDbkYsQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pCQSxJQUFBK0ksTUFBQSxHQUFBMU4sT0FBQTtVQUNBLElBQUFnTyxRQUFBLEdBQUFoTyxPQUFBO1VBQ0EsSUFBQTBZLE1BQUEsR0FBQTFZLE9BQUE7VUFDQSxJQUFBMlksYUFBQSxHQUFBM1ksT0FBQTtVQUVBLElBQUE0WSxPQUFBLEdBQUE1WSxPQUFBO1VBRU0sU0FBVTZZLGtCQUFrQkEsQ0FBQztZQUFFM1EsUUFBUTtZQUFFbEQ7VUFBVyxDQUFFO1lBQzNELE1BQU07Y0FBRXpCO1lBQUksQ0FBRSxHQUFHeUIsV0FBVztZQUM1QixNQUFNO2NBQUVxTCxhQUFhO2NBQUUvUDtZQUFLLENBQUUsR0FBRyxJQUFBME4sUUFBQSxDQUFBRyxtQkFBbUIsR0FBRTtZQUN0RCxNQUFNOU0sSUFBSSxHQUFHMkQsV0FBVyxDQUFDekQsVUFBVSxDQUFDMkcsUUFBUSxDQUFDcEcsRUFBRSxDQUFDLEVBQUVULElBQUk7WUFDdEQsTUFBTWlWLE1BQU0sR0FBRyxFQUFFO1lBRWpCLElBQUlwTyxRQUFRLENBQUM5RixJQUFJLEtBQUssWUFBWSxJQUFJOEYsUUFBUSxDQUFDNFEsT0FBTyxLQUFLLGlCQUFpQixJQUFJelgsSUFBSSxDQUFDQSxJQUFJLEVBQUU7Y0FDMUZpVixNQUFNLENBQUM5UixJQUFJLENBQ1ZrSixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLGVBQ0UzRixRQUFRLENBQUM3RyxJQUFJLENBQUM4USxRQUFRLENBQUNDLE9BQU8sRSxNQUFJbEssUUFBUSxDQUFDN0csSUFBSSxDQUFDOFEsUUFBUSxDQUFDRSxLQUFLLENBQ3pELENBQ1A7O1lBR0YsTUFBTWhELE9BQU8sR0FBRyxNQUFNcUIsS0FBSyxJQUFHO2NBQzdCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QkQsS0FBSyxDQUFDRSxjQUFjLEVBQUU7Y0FDdEIsTUFBTW5KLFFBQVEsR0FBRyxNQUFNbkgsS0FBSyxDQUFDd00sZ0JBQWdCLENBQUN2SixJQUFJLENBQUN6QixFQUFFLENBQUM7Y0FFdER1TyxhQUFhLENBQUM7Z0JBQ2IxUCxJQUFJLEVBQUUsSUFBSTtnQkFDVm9MLElBQUksRUFBRSxTQUFTO2dCQUNmMUssSUFBSSxFQUFFO2tCQUNMb0csUUFBUTtrQkFDUnpDLFdBQVc7a0JBQ1hrRDs7ZUFFRCxDQUFDO1lBQ0gsQ0FBQztZQUVELE9BQ0N3RixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQUl3QixPQUFPLEVBQUVBLE9BQU87Y0FBRTFGLEdBQUcsRUFBRSxHQUFHcEcsSUFBSSxDQUFDekIsRUFBRSxJQUFJb0csUUFBUSxDQUFDcEcsRUFBRSxFQUFFO2NBQUV3TSxTQUFTLEVBQUM7WUFBbUIsR0FFcEZaLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsY0FDQ0gsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDOEssYUFBQSxDQUFBSSxZQUFZO2NBQUMzVyxJQUFJLEVBQUU4RixRQUFRLENBQUM5RjtZQUFJLEVBQUksQ0FDaEMsRUFDTnNMLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUE7Y0FBS1MsU0FBUyxFQUFDO1lBQW1DLEdBQ2pEWixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQU1TLFNBQVMsRUFBQztZQUFnQixHQUFFcEcsUUFBUSxDQUFDL0YsS0FBSyxDQUFRLEVBQ3hEdUwsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBNEIsR0FDMUNaLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQzZLLE1BQUEsQ0FBQU0sc0JBQXNCO2NBQUNwUSxJQUFJLEVBQUVWLFFBQVE7Y0FBRWxELFdBQVcsRUFBRUE7WUFBVyxFQUFJLEVBQ3BFMEksTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDK0ssT0FBQSxDQUFBSyxvQkFBb0I7Y0FBQ3JRLElBQUksRUFBRVYsUUFBUTtjQUFFbEQsV0FBVyxFQUFFQTtZQUFXLEVBQUksQ0FDN0QsQ0FDRCxDQUNGO1VBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcERBLElBQUEwSSxNQUFBLEdBQUExTixPQUFBO1VBQ0EsSUFBQXVPLE1BQUEsR0FBQXZPLE9BQUE7VUFDQSxJQUFBNFksT0FBQSxHQUFBNVksT0FBQTtVQUVNLFNBQVVrWixxQkFBcUJBLENBQUM7WUFBRXRRO1VBQUksQ0FBRTtZQUM3QyxNQUFNO2NBQUVWLFFBQVE7Y0FBRWxEO1lBQVcsQ0FBRSxHQUFHNEQsSUFBSTtZQUN0QyxNQUFNbUosbUJBQW1CLEdBQUcvTSxXQUFXLENBQUN6RCxVQUFVLENBQUNQLEdBQUcsQ0FBQ2tILFFBQVEsQ0FBQ3BHLEVBQUUsQ0FBQztZQUNuRSxNQUFNd1UsTUFBTSxHQUFHLEVBQUU7WUFFakIsSUFBSXBPLFFBQVEsQ0FBQzlGLElBQUksS0FBSyxZQUFZLElBQUk4RixRQUFRLENBQUM0USxPQUFPLEtBQUssaUJBQWlCLElBQUl6WCxJQUFJLENBQUNBLElBQUksRUFBRTtjQUMxRmlWLE1BQU0sQ0FBQzlSLElBQUksQ0FDVmtKLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsZUFDRWpGLElBQUksQ0FBQ3ZILElBQUksQ0FBQzhRLFFBQVEsQ0FBQ0MsT0FBTyxFLE1BQUl4SixJQUFJLENBQUN2SCxJQUFJLENBQUM4USxRQUFRLENBQUNFLEtBQUssQ0FDakQsQ0FDUDs7WUFHRixPQUNDM0UsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBNEIsR0FDMUNaLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUE7Y0FBS1MsU0FBUyxFQUFDO1lBQTRDLEdBQ3pEeUQsbUJBQW1CLEVBQUV1QyxNQUFNLEVBQUV0TyxNQUFNLEdBQUcwSCxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUNVLE1BQUEsQ0FBQTRLLElBQUk7Y0FBQ3ZWLElBQUksRUFBQyxPQUFPO2NBQUMwSyxTQUFTLEVBQUM7WUFBWSxFQUFHLEdBQUcsSUFBSSxDQUNyRixFQUNOWixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUMrSyxPQUFBLENBQUFLLG9CQUFvQjtjQUFDclEsSUFBSSxFQUFFQSxJQUFJO2NBQUU1RCxXQUFXLEVBQUVBO1lBQVcsRUFBSSxDQUN6RDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQSxJQUFBMEksTUFBQSxHQUFBMU4sT0FBQTtVQUNBLElBQUEyTyxXQUFBLEdBQUEzTyxPQUFBO1VBQ0EsSUFBQXlSLEtBQUEsR0FBQXpSLE9BQUE7VUFDQSxJQUFBOEgsT0FBQSxHQUFBOUgsT0FBQTtVQUNBLElBQUE2SCxlQUFBLEdBQUE3SCxPQUFBO1VBRU0sU0FBVW9aLGNBQWNBLENBQUM7WUFBRXhRLElBQUksRUFBRVYsUUFBUTtZQUFFbEQ7VUFBVyxDQUFFO1lBQzdELE1BQU01QyxJQUFJLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQ2tLLFFBQVEsQ0FBQ3BFLFFBQVEsQ0FBQzlGLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRzhGLFFBQVEsQ0FBQzlGLElBQUk7WUFFNUcsT0FDQ3NMLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ2MsV0FBQSxDQUFBVyxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRW5OLElBQUk7Y0FDZnFOLE9BQU8sRUFBRTtnQkFDUjlFLElBQUksRUFBRStDLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQzRELEtBQUEsQ0FBQW9ILGtCQUFrQjtrQkFBQzNRLFFBQVEsRUFBRUEsUUFBUTtrQkFBRWxELFdBQVcsRUFBRUE7Z0JBQVcsRUFBSTtnQkFDMUV1RCxNQUFNLEVBQUVtRixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUMvRixPQUFBLENBQUF1UixvQkFBb0I7a0JBQUNuUixRQUFRLEVBQUVBLFFBQVE7a0JBQUVsRCxXQUFXLEVBQUVBO2dCQUFXLEVBQUk7Z0JBQzlFLGlCQUFpQixFQUFFMEksTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDaEcsZUFBQSxDQUFBeVIsNEJBQTRCO2tCQUFDcFIsUUFBUSxFQUFFQSxRQUFRO2tCQUFFbEQsV0FBVyxFQUFFQTtnQkFBVzs7WUFDN0YsRUFDQTtVQUVKOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBMEksTUFBQSxHQUFBMU4sT0FBQTtVQUNBLElBQUFnTyxRQUFBLEdBQUFoTyxPQUFBO1VBQ0EsSUFBQXVPLE1BQUEsR0FBQXZPLE9BQUE7VUFFTSxTQUFVZ1osc0JBQXNCQSxDQUFDO1lBQUVwUSxJQUFJO1lBQUU1RDtVQUFXLENBQUU7WUFDM0QsTUFBTWtELFFBQVEsR0FBR1UsSUFBSTtZQUNyQixNQUFNO2NBQUVxRDtZQUFLLENBQUUsR0FBRyxJQUFBK0IsUUFBQSxDQUFBRyxtQkFBbUIsR0FBRTtZQUN2QyxNQUFNZ0gsZUFBZSxHQUFHblEsV0FBVyxDQUFDekQsVUFBVSxDQUFDa0QsR0FBRyxDQUFDeUQsUUFBUSxDQUFDcEcsRUFBRSxDQUFDO1lBQy9ELE1BQU1pUSxtQkFBbUIsR0FBRy9NLFdBQVcsQ0FBQ3pELFVBQVUsQ0FBQ1AsR0FBRyxDQUFDa0gsUUFBUSxDQUFDcEcsRUFBRSxDQUFDO1lBRW5FLElBQUlNLElBQUksR0FBRyxTQUFTO1lBQ3BCLElBQUltWCxLQUFLLEdBQUd0TixLQUFLLENBQUMxSyxVQUFVLENBQUNELE1BQU0sQ0FBQ29SLE9BQU87WUFFM0MsSUFBSXlDLGVBQWUsRUFBRTtjQUNwQi9TLElBQUksR0FBRyxTQUFTO2NBQ2hCbVgsS0FBSyxHQUFHdE4sS0FBSyxDQUFDMUssVUFBVSxDQUFDRCxNQUFNLENBQUNrWSxJQUFJOztZQUdyQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUNsTixRQUFRLENBQUNwRSxRQUFRLENBQUM5RixJQUFJLENBQUMsRUFBRTtjQUMzRSxJQUFJMlAsbUJBQW1CLEVBQUVzQyxZQUFZLEVBQUU7Z0JBQ3RDa0YsS0FBSyxHQUFHLEdBQUd4SCxtQkFBbUIsRUFBRXNDLFlBQVksQ0FBQzVRLEtBQUssSUFBSXdJLEtBQUssQ0FBQzFLLFVBQVUsQ0FBQzhTLFlBQVksRUFBRTtlQUNyRixNQUFNO2dCQUNOLE1BQU1vRixhQUFhLEdBQUcxSCxtQkFBbUIsRUFBRXZPLFFBQVEsRUFBRUMsS0FBSyxJQUFJLENBQUM7Z0JBQy9EOFYsS0FBSyxHQUFHLEdBQUdFLGFBQWEsSUFBSXhOLEtBQUssQ0FBQzFLLFVBQVUsQ0FBQzhTLFlBQVksRUFBRTs7O1lBSTdELElBQUluTSxRQUFRLENBQUM5RixJQUFJLEtBQUssUUFBUSxJQUFJd0csSUFBSSxDQUFDdkgsSUFBSSxFQUFFO2NBQzVDLE1BQU1xSSxLQUFLLEdBQUc1RCxNQUFNLENBQUNtQyxNQUFNLENBQUNXLElBQUksQ0FBQ3ZILElBQUksQ0FBQyxDQUNwQzJDLEdBQUcsQ0FBQzNDLElBQUksSUFBS0EsSUFBWSxDQUFDdUMsSUFBSSxDQUFDLENBQy9COFYsSUFBSSxDQUFDLEVBQUUsQ0FBQztjQUNWSCxLQUFLLEdBQUc3UCxLQUFLO2NBQ2J0SCxJQUFJLEdBQUcsU0FBUzs7WUFHakIsSUFBSThGLFFBQVEsQ0FBQzlGLElBQUksS0FBSyxZQUFZLElBQUk4RixRQUFRLENBQUM0USxPQUFPLEtBQUssaUJBQWlCLElBQUlsUSxJQUFJLENBQUN2SCxJQUFJLEVBQUU7Y0FDMUYsTUFBTTtnQkFBRStRLE9BQU87Z0JBQUVDO2NBQUssQ0FBRSxHQUFHekosSUFBSSxDQUFDdkgsSUFBSSxDQUFDOFEsUUFBUTtjQUM3QyxJQUFJQyxPQUFPLEdBQUdDLEtBQUssR0FBRyxDQUFDLEVBQUVqUSxJQUFJLEdBQUcsT0FBTztjQUN2Q21YLEtBQUssR0FBRyxHQUFHbkgsT0FBTyxNQUFNQyxLQUFLLEVBQUU7O1lBR2hDLElBQUk4QyxlQUFlLElBQUlwRCxtQkFBbUIsRUFBRXZPLFFBQVEsRUFBRTtjQUNyRCtWLEtBQUssR0FBRyxHQUFHdE4sS0FBSyxDQUFDME4sY0FBYyxJQUFJNUgsbUJBQW1CLEVBQUV2TyxRQUFRLENBQUNDLEtBQUssRUFBRTs7WUFHekUsTUFBTW1XLFNBQVMsR0FBRzdILG1CQUFtQixFQUFFdUMsTUFBTSxFQUFFdE8sTUFBTTtZQUNyRCxNQUFNdU0sR0FBRyxHQUFHLGtCQUFrQnFILFNBQVMsR0FBRyxhQUFhLEdBQUcsRUFBRSxFQUFFO1lBQzlELE9BQ0NsTSxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQUtTLFNBQVMsRUFBRWlFO1lBQUcsR0FDbEI3RSxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLGVBQU8wTCxLQUFLLENBQVEsRUFDbkJLLFNBQVMsR0FBR2xNLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ1UsTUFBQSxDQUFBNEssSUFBSTtjQUFDdlYsSUFBSSxFQUFDLE9BQU87Y0FBQzBLLFNBQVMsRUFBQztZQUFZLEVBQUcsR0FBRyxJQUFJLENBQzNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckRBLElBQUFaLE1BQUEsR0FBQTFOLE9BQUE7VUFDQSxJQUFBZ08sUUFBQSxHQUFBaE8sT0FBQTtVQUNBLElBQUEwWSxNQUFBLEdBQUExWSxPQUFBO1VBQ0EsSUFBQTJZLGFBQUEsR0FBQTNZLE9BQUE7VUFFTSxTQUFVc1osNEJBQTRCQSxDQUFDO1lBQUVwUixRQUFRO1lBQUVsRDtVQUFXLENBQUU7WUFDckUsTUFBTTtjQUFFekI7WUFBSSxDQUFFLEdBQUd5QixXQUFXO1lBQzVCLE1BQU07Y0FBRXFMLGFBQWE7Y0FBRS9QO1lBQUssQ0FBRSxHQUFHLElBQUEwTixRQUFBLENBQUFHLG1CQUFtQixHQUFFO1lBQ3RELE1BQU00RCxtQkFBbUIsR0FBRy9NLFdBQVcsQ0FBQ3pELFVBQVUsQ0FBQ1AsR0FBRyxDQUFDa0gsUUFBUSxDQUFDcEcsRUFBRSxDQUFDO1lBRW5FLE1BQU11TixPQUFPLEdBQUdxQixLQUFLLElBQUc7Y0FDdkJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCRCxLQUFLLENBQUNFLGNBQWMsRUFBRTtjQUN0QixNQUFNbkosUUFBUSxHQUFHbkgsS0FBSyxDQUFDd00sZ0JBQWdCLENBQUN2SixJQUFJLENBQUN6QixFQUFFLENBQUM7Y0FFaER1TyxhQUFhLENBQUM7Z0JBQ2IxUCxJQUFJLEVBQUUsSUFBSTtnQkFDVm9MLElBQUksRUFBRSxTQUFTO2dCQUNmMUssSUFBSSxFQUFFO2tCQUNMb0csUUFBUTtrQkFDUnpDLFdBQVc7a0JBQ1hrRDs7ZUFFRCxDQUFDO1lBQ0gsQ0FBQztZQUVELE9BQ0N3RixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQUl3QixPQUFPLEVBQUVBLE9BQU87Y0FBRTFGLEdBQUcsRUFBRSxHQUFHcEcsSUFBSSxDQUFDekIsRUFBRSxJQUFJb0csUUFBUSxDQUFDcEcsRUFBRSxFQUFFO2NBQUV3TSxTQUFTLEVBQUM7WUFBbUIsR0FDcEZaLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsY0FDQ0gsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDOEssYUFBQSxDQUFBSSxZQUFZO2NBQUMzVyxJQUFJLEVBQUU4RixRQUFRLENBQUM5RjtZQUFJLEVBQUksQ0FDaEMsRUFDTnNMLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUE7Y0FBS1MsU0FBUyxFQUFDO1lBQW1DLEdBQ2pEWixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQU1TLFNBQVMsRUFBQztZQUFnQixHQUFFcEcsUUFBUSxDQUFDL0YsS0FBSyxDQUFRLEVBQ3hEdUwsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBNEIsR0FDMUNaLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsY0FDQ0gsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDNkssTUFBQSxDQUFBTSxzQkFBc0I7Y0FBQ3BRLElBQUksRUFBRVYsUUFBUTtjQUFFbEQsV0FBVyxFQUFFQTtZQUFXLEVBQUksQ0FDL0QsRUFDTjBJLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsY0FDRWtFLG1CQUFtQixFQUFFSSxRQUFRLEdBQzdCekUsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBdUUsR0FDckZaLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUE7Y0FBTVMsU0FBUyxFQUFDO1lBQXVCLEdBQUV5RCxtQkFBbUIsQ0FBQ0ksUUFBUSxDQUFDQyxPQUFPLENBQVEsRUFDckYxRSxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQU1TLFNBQVMsRUFBQztZQUF1QixPQUFTLEVBQ2hEWixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQU1TLFNBQVMsRUFBQztZQUF1QixHQUFFeUQsbUJBQW1CLENBQUNJLFFBQVEsQ0FBQ0UsS0FBSyxDQUFRLENBQzlFLEdBQ0gsSUFBSSxDQUNILENBQ0QsQ0FDRCxDQUNGO1VBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbERBLElBQUEzRSxNQUFBLEdBQUExTixPQUFBO1VBQ0EsSUFBQWdPLFFBQUEsR0FBQWhPLE9BQUE7VUFDQSxJQUFBMFksTUFBQSxHQUFBMVksT0FBQTtVQUNBLElBQUEyWSxhQUFBLEdBQUEzWSxPQUFBO1VBRUEsSUFBQXVPLE1BQUEsR0FBQXZPLE9BQUE7VUFDQSxJQUFBd08sS0FBQSxHQUFBeE8sT0FBQTtVQUNNLFNBQVVxWixvQkFBb0JBLENBQUM7WUFBRW5SLFFBQVE7WUFBRWxEO1VBQVcsQ0FBRTtZQUM3RCxNQUFNO2NBQUV6QjtZQUFJLENBQUUsR0FBR3lCLFdBQVc7WUFFNUIsTUFBTTtjQUFFcUwsYUFBYTtjQUFFL1A7WUFBSyxDQUFFLEdBQUcsSUFBQTBOLFFBQUEsQ0FBQUcsbUJBQW1CLEdBQUU7WUFDdEQsTUFBTTRELG1CQUFtQixHQUFHL00sV0FBVyxDQUFDekQsVUFBVSxDQUFDUCxHQUFHLENBQUNrSCxRQUFRLENBQUNwRyxFQUFFLENBQUM7WUFFbkUsTUFBTXVOLE9BQU8sR0FBR3FCLEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJELEtBQUssQ0FBQ0UsY0FBYyxFQUFFO2NBQ3RCLE1BQU1uSixRQUFRLEdBQUduSCxLQUFLLENBQUN3TSxnQkFBZ0IsQ0FBQ3ZKLElBQUksQ0FBQ3pCLEVBQUUsQ0FBQztjQUVoRHVPLGFBQWEsQ0FBQztnQkFDYjFQLElBQUksRUFBRSxJQUFJO2dCQUNWb0wsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YxSyxJQUFJLEVBQUU7a0JBQ0xvRyxRQUFRO2tCQUNSekMsV0FBVztrQkFDWGtEOztlQUVELENBQUM7WUFDSCxDQUFDO1lBRUQsTUFBTTJSLFFBQVEsR0FBR0EsQ0FBQztjQUFFalIsSUFBSSxFQUFFaEY7WUFBSSxDQUFFLEtBQUs4SixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUNVLE1BQUEsQ0FBQXVFLE9BQU87Y0FBQ2xQLElBQUksRUFBRSxTQUFTQSxJQUFJLENBQUNpRyxNQUFNO1lBQUUsRUFBSTtZQUM5RSxPQUNDNkQsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQTtjQUFJd0IsT0FBTyxFQUFFQSxPQUFPO2NBQUUxRixHQUFHLEVBQUUsR0FBR3BHLElBQUksQ0FBQ3pCLEVBQUUsSUFBSW9HLFFBQVEsQ0FBQ3BHLEVBQUUsRUFBRTtjQUFFd00sU0FBUyxFQUFDO1lBQW1CLEdBQ3BGWixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLGNBQ0NILE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQzhLLGFBQUEsQ0FBQUksWUFBWTtjQUFDM1csSUFBSSxFQUFFOEYsUUFBUSxDQUFDOUY7WUFBSSxFQUFJLENBQ2hDLEVBQ05zTCxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQUtTLFNBQVMsRUFBQztZQUFtQyxHQUNqRFosTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQTtjQUFNUyxTQUFTLEVBQUM7WUFBZ0IsR0FBRXBHLFFBQVEsQ0FBQy9GLEtBQUssQ0FBUSxFQUN4RHVMLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUE7Y0FBS1MsU0FBUyxFQUFDO1lBQTRCLEdBQzFDWixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUM2SyxNQUFBLENBQUFNLHNCQUFzQjtjQUFDcFEsSUFBSSxFQUFFVixRQUFRO2NBQUVsRCxXQUFXLEVBQUVBO1lBQVcsRUFBSSxFQUNwRTBJLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUE7Y0FBS1MsU0FBUyxFQUFDO1lBQWMsR0FDNUJaLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ1csS0FBQSxDQUFBbUIsSUFBSTtjQUFDbk8sS0FBSyxFQUFFdVEsbUJBQW1CLEVBQUVqUCxVQUFVO2NBQUU4TSxPQUFPLEVBQUVpSztZQUFRLEVBQUksQ0FDOUQsQ0FDRCxDQUNELENBQ0Y7VUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q0EsSUFBQW5NLE1BQUEsR0FBQTFOLE9BQUE7VUFFQSxJQUFBa1EsY0FBQSxHQUFBbFEsT0FBQTtVQUNBLElBQUFnTyxRQUFBLEdBQUFoTyxPQUFBO1VBRU0sU0FBVWlaLG9CQUFvQkEsQ0FBQztZQUFFclEsSUFBSTtZQUFFNUQ7VUFBVyxDQUFFO1lBQ3pELE1BQU1rRCxRQUFRLEdBQUdVLElBQUk7WUFDckIsTUFBTTtjQUFFcUQ7WUFBSyxDQUFFLEdBQUcsSUFBQStCLFFBQUEsQ0FBQUcsbUJBQW1CLEdBQUU7WUFDdkMsTUFBTTRELG1CQUFtQixHQUFHL00sV0FBVyxDQUFDekQsVUFBVSxDQUFDUCxHQUFHLENBQUNrSCxRQUFRLENBQUNwRyxFQUFFLENBQUM7WUFFbkUsSUFBSSxDQUFDaVEsbUJBQW1CLEVBQUVyTyxRQUFRLEVBQUVaLFVBQVUsRUFBRSxPQUFPLElBQUk7WUFDM0QsTUFBTTRHLEtBQUssR0FBR3FJLG1CQUFtQixFQUFFck8sUUFBUSxFQUFFWixVQUFVLEVBQUVrQixHQUFHLENBQUMsQ0FBQzRFLElBQUksRUFBRVUsS0FBSyxLQUN4RW9FLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ3FDLGNBQUEsQ0FBQW9CLDJCQUEyQjtjQUFDM0gsR0FBRyxFQUFFLEdBQUdmLElBQUksRUFBRXhCLElBQUksSUFBSWtDLEtBQUssT0FBTztjQUFFVixJQUFJLEVBQUVBO1lBQUksRUFDM0UsQ0FBQztZQUVGLE9BQU84RSxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQUtTLFNBQVMsRUFBQztZQUE0QixHQUFFNUUsS0FBSyxDQUFPO1VBQ2pFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQSxJQUFBaUYsV0FBQSxHQUFBM08sT0FBQTtVQUNBLElBQUFnUSxNQUFBLEdBQUFoUSxPQUFBO1VBQ0EsSUFBQXdPLEtBQUEsR0FBQXhPLE9BQUE7VUFDQSxJQUFBME4sTUFBQSxHQUFBMU4sT0FBQTtVQUNBLElBQUFnTyxRQUFBLEdBQUFoTyxPQUFBO1VBQ0EsSUFBQThELFNBQUEsR0FBQTlELE9BQUE7VUFFTSxTQUFVMkUsSUFBSUEsQ0FBQztZQUFFaUU7VUFBSSxDQUFFO1lBQzVCLE1BQU07Y0FBRXFELEtBQUs7Y0FBRW5GLEtBQUs7Y0FBRXhHLEtBQUs7Y0FBRStQO1lBQWEsQ0FBRSxHQUFHLElBQUFyQyxRQUFBLENBQUFHLG1CQUFtQixHQUFFO1lBQ3BFLE1BQU07Y0FBRTVLO1lBQUksQ0FBRSxHQUFHcUYsSUFBSTtZQUVyQixNQUFNa1IsY0FBYyxHQUFHLGdCQUFnQnhaLEtBQUssQ0FBQ2dLLFlBQVksMEJBQTBCMUIsSUFBSSxDQUFDckYsSUFBSSxDQUFDekIsRUFBRSxFQUFFO1lBQ2pHLE1BQU1pWSxVQUFVLEdBQUdySixLQUFLLElBQUc7Y0FDMUJBLEtBQUssQ0FBQ0UsY0FBYyxFQUFFO2NBQ3RCLE1BQU1uSixRQUFRLEdBQUduSCxLQUFLLENBQUN3TSxnQkFBZ0IsQ0FBQ3ZKLElBQUksQ0FBQ3pCLEVBQUUsQ0FBQztjQUNoRHVPLGFBQWEsQ0FBQztnQkFDYjFQLElBQUksRUFBRSxJQUFJO2dCQUNWb0wsSUFBSSxFQUFFLFNBQVM7Z0JBQ2Z0RSxRQUFRO2dCQUNScEcsSUFBSSxFQUFFO2tCQUNMb0csUUFBUTtrQkFDUnpDLFdBQVcsRUFBRTREOztlQUVkLENBQUM7Y0FDRm9SLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGlCQUFpQixFQUFFblIsSUFBSSxDQUFDb1IsU0FBUyxDQUFDdFIsSUFBSSxDQUFDckYsSUFBSSxDQUFDLENBQUM7Y0FDbEUsT0FBTyxLQUFLO1lBQ2IsQ0FBQztZQUVELE9BQ0NtSyxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQUlTLFNBQVMsRUFBQztZQUEyQixHQUN4Q1osTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxpQkFDQ0gsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDbUMsTUFBQSxDQUFBaUIsS0FBSztjQUFDQyxHQUFHLEVBQUUzTixJQUFJLEVBQUUzQixRQUFRO2NBQUV1WSxHQUFHLEVBQUUsR0FBRzVXLElBQUksQ0FBQzFCLElBQUksU0FBUztjQUFFeU0sU0FBUyxFQUFDO1lBQWUsRUFBRyxFQUNwRlosTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDYyxXQUFBLENBQUF3QyxJQUFJO2NBQUNDLElBQUksRUFBRTBJLGNBQWM7Y0FBRXpLLE9BQU8sRUFBRTBLO1lBQVUsR0FDOUNyTSxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLGFBQUt0SyxJQUFJLENBQUMxQixJQUFJLENBQU0sQ0FDZCxDQUNDLEVBQ1Q2TCxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQUtTLFNBQVMsRUFBQztZQUFjLEdBQzVCWixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUNXLEtBQUEsQ0FBQW1CLElBQUk7Y0FDSnJCLFNBQVMsRUFBQyxxQkFBcUI7Y0FDL0IzTCxLQUFLLEVBQUU7Z0JBQUVxQyxXQUFXLEVBQUU0RDtjQUFJLENBQUU7Y0FDNUJwSCxLQUFLLEVBQUVzRixLQUFLLENBQUN2RixVQUFVLENBQUNDLEtBQUs7Y0FDN0JvTyxPQUFPLEVBQUU5TCxTQUFBLENBQUFzVjtZQUFjLEVBQ3RCLENBQ0csQ0FDRjtVQUVQOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlDQSxJQUFBNUcsS0FBQSxHQUFBeFMsT0FBQTtVQUVBLElBQUFvYSxRQUFBLEdBQUFwYSxPQUFBO1VBRU87VUFBVSxTQUFVK1ksWUFBWUEsQ0FBQztZQUFFM1csSUFBSTtZQUFFa007VUFBUyxDQUF3QztZQUNoRyxNQUFNaUUsR0FBRyxHQUFHLGdDQUFnQ25RLElBQUksZ0JBQWdCa00sU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNsRyxPQUNDa0UsS0FBQSxDQUFBM0UsYUFBQTtjQUFLUyxTQUFTLEVBQUVpRTtZQUFHLEdBQ2xCQyxLQUFBLENBQUEzRSxhQUFBLENBQUN1TSxRQUFBLENBQUFDLE9BQU87Y0FBQ3hZLElBQUksRUFBRU87WUFBSSxFQUFJLENBQ2xCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWEEsSUFBQW9RLEtBQUEsR0FBQXhTLE9BQUE7VUFDQSxJQUFBd08sS0FBQSxHQUFBeE8sT0FBQTtVQUNBLElBQUEwRSxLQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQWdPLFFBQUEsR0FBQWhPLE9BQUE7VUFFTztVQUFVLFNBQVVnVixXQUFXQSxDQUFDO1lBQUVWLE1BQU07WUFBRS9RO1VBQUksQ0FBRTtZQUN0RCxNQUFNO2NBQUUwSTtZQUFLLENBQUUsR0FBRyxJQUFBK0IsUUFBQSxDQUFBRyxtQkFBbUIsR0FBRTtZQUV2QyxJQUFJLENBQUNtRyxNQUFNLEVBQUV0TyxNQUFNLEVBQUUsT0FBTyxJQUFJO1lBRWhDLE9BQ0N3TSxLQUFBLENBQUEzRSxhQUFBLENBQUEyRSxLQUFBLENBQUExRSxRQUFBLFFBQ0MwRSxLQUFBLENBQUEzRSxhQUFBLENBQUNXLEtBQUEsQ0FBQW1CLElBQUk7Y0FDSjJLLEVBQUUsRUFBQyxLQUFLO2NBQ1JoTSxTQUFTLEVBQUMsdUJBQXVCO2NBQ2pDOU0sS0FBSyxFQUFFOFMsTUFBTTtjQUNiMUUsT0FBTyxFQUFFbEwsS0FBQSxDQUFBNlYsZUFBZTtjQUN4QjVYLEtBQUssRUFBRTtnQkFBRVk7Y0FBSTtZQUFFLEVBQ2QsQ0FDQTtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBaVAsS0FBQSxHQUFBeFMsT0FBQTtVQUdBLElBQUFpUSxZQUFBLEdBQUFqUSxPQUFBO1VBRU87VUFBVSxTQUFVdWEsZUFBZUEsQ0FBQztZQUFFM1IsSUFBSTtZQUFFckY7VUFBSSxDQUFFO1lBQ3hELE1BQU00UCxHQUFHLEdBQUdYLEtBQUssQ0FBQ1ksTUFBTSxDQUFDLElBQUksQ0FBQztZQUU5QixNQUFNLENBQUNyQyxJQUFJLEVBQUVnRyxPQUFPLENBQUMsR0FBR3ZFLEtBQUssQ0FBQ3hELFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDN0MsTUFBTXVELEdBQUcsR0FBRyw0QkFBNEJ4QixJQUFJLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRTtZQUMvRCxNQUFNTixRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQnNHLE9BQU8sQ0FBQyxDQUFDaEcsSUFBSSxDQUFDO2NBQ2QsT0FBTyxJQUFJO1lBQ1osQ0FBQztZQUNELE9BQ0N5QixLQUFBLENBQUEzRSxhQUFBO2NBQVNTLFNBQVMsRUFBRWlFLEdBQUc7Y0FBRVksR0FBRyxFQUFFQTtZQUFHLEdBQ2hDWCxLQUFBLENBQUEzRSxhQUFBLENBQUNvQyxZQUFBLENBQUFZLG9CQUFvQjtjQUFDSixRQUFRLEVBQUVBO1lBQVEsR0FDdkMrQixLQUFBLENBQUEzRSxhQUFBLENBQUNvQyxZQUFBLENBQUFlLGlCQUFpQixRQUNqQndCLEtBQUEsQ0FBQTNFLGFBQUEsZUFBT2pGLElBQUksQ0FBQ3hCLElBQUksQ0FBUSxDQUNMLEVBQ3BCb0wsS0FBQSxDQUFBM0UsYUFBQSxDQUFDb0MsWUFBQSxDQUFBc0Isa0JBQWtCLFFBQ2xCaUIsS0FBQSxDQUFBM0UsYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBWSxHQUMxQmtFLEtBQUEsQ0FBQTNFLGFBQUEsc0JBQWUsRUFFZjJFLEtBQUEsQ0FBQTNFLGFBQUEsY0FBTWpGLElBQUksQ0FBQzRSLFNBQVMsQ0FBQ0MsU0FBUyxDQUFPLEVBQ3JDakksS0FBQSxDQUFBM0UsYUFBQSxhQUFLdEssSUFBSSxDQUFDMUIsSUFBSSxDQUFNLEVBQ3BCMlEsS0FBQSxDQUFBM0UsYUFBQSxjQUFNakYsSUFBSSxDQUFDNFIsU0FBUyxDQUFDOUMsT0FBTyxDQUFPLENBQzlCLENBQ2MsQ0FDQyxDQUNkO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENBLElBQUFuSixNQUFBLEdBQUF2TyxPQUFBO1VBQ0EsSUFBQStOLEdBQUEsR0FBQS9OLE9BQUE7VUFDQSxJQUFBcUYsT0FBQSxHQUFBckYsT0FBQTtVQUNBLElBQUEwTixNQUFBLEdBQUExTixPQUFBO1VBRUEsSUFBQXlPLE1BQUEsR0FBQXpPLE9BQUE7VUFFQSxNQUFNMGEsR0FBRyxHQUFHclYsT0FBQSxDQUFBa0IsT0FBTSxFQUFFQyxNQUFNLEVBQUVtVSxRQUFRLElBQUksUUFBUTtVQUMxQyxTQUFVNUssS0FBS0EsQ0FBQztZQUFFelAsS0FBSztZQUFFMkw7VUFBSyxDQUFFO1lBQ3JDLE9BQ0N5QixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUFILE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXVILFFBQUEsUUFDQ0osTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDRSxHQUFBLENBQUE2TSxhQUFhLFFBQ2JsTixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUNZLE1BQUEsQ0FBQXNCLEtBQWM7Y0FBQ3pCLFNBQVMsRUFBQywwQkFBMEI7Y0FBQzFLLElBQUksRUFBRTJLLE1BQUEsQ0FBQWlILEtBQUssQ0FBQ3FGO1lBQVUsR0FDMUVuTixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQUlTLFNBQVMsRUFBQztZQUFPLEdBQUVoTyxLQUFLLENBQUN3RyxLQUFLLENBQUNwRixNQUFNLENBQUNTLEtBQUssQ0FBTSxFQUNyRHVMLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsWUFBSTVCLEtBQUssQ0FBQ21DLEtBQUssQ0FBSyxDQUNKLENBQ0YsQ0FDZDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBb0UsS0FBQSxHQUFBeFMsT0FBQTtVQUNBLElBQUF1TyxNQUFBLEdBQUF2TyxPQUFBO1VBRU87VUFBVSxTQUFVcWEsT0FBT0EsQ0FBQztZQUFFeFksSUFBSTtZQUFFeU07VUFBUyxDQUF3QztZQUMzRixNQUFNaUUsR0FBRyxHQUFHLGVBQWVqRSxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzdELE9BQU9rRSxLQUFBLENBQUEzRSxhQUFBLENBQUNVLE1BQUEsQ0FBQXVFLE9BQU87Y0FBQ2xQLElBQUksRUFBRS9CLElBQUk7Y0FBRXlNLFNBQVMsRUFBRWlFO1lBQUcsRUFBSTtVQUMvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNOQSxJQUFBN0UsTUFBQSxHQUFBMU4sT0FBQTtVQUVBLElBQUE0UixRQUFBLEdBQUE1UixPQUFBO1VBQ0EsSUFBQXVPLE1BQUEsR0FBQXZPLE9BQUE7VUFDQSxJQUFBZ08sUUFBQSxHQUFBaE8sT0FBQTtVQUVNLFNBQVVzUiwyQkFBMkJBLENBQUM7WUFBRTFJO1VBQUksQ0FBRTtZQUNuRCxNQUFNO2NBQUVxRDtZQUFLLENBQUUsR0FBRyxJQUFBK0IsUUFBQSxDQUFBRyxtQkFBbUIsR0FBRTtZQUN2QyxNQUFNc0UsU0FBUyxHQUFHO2NBQ2pCLGFBQWEsRUFBRSxvQkFBb0I7Y0FDbkNDLE9BQU8sRUFBRSxpQkFBaUI7Y0FDMUJDLFNBQVMsRUFBRSxtQkFBbUI7Y0FDOUJDLFdBQVcsRUFBRTthQUNiO1lBQ0QsT0FDQ2xGLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQytELFFBQUEsQ0FBQUssT0FBTztjQUNQQyxPQUFPLEVBQUUsR0FBR3RKLElBQUksQ0FBQy9HLElBQUksS0FBS29LLEtBQUssQ0FBQzFLLFVBQVUsQ0FBQ3NSLGdCQUFnQixDQUFDakssSUFBSSxDQUFDdEgsTUFBTSxDQUFDOEYsSUFBSSxDQUFDLEVBQUU7Y0FDL0V1QyxHQUFHLEVBQUUsR0FBR2YsSUFBSSxDQUFDL0csSUFBSSxJQUFJK0csSUFBSSxDQUFDdEgsTUFBTSxDQUFDOEYsSUFBSTtZQUFFLEdBRXZDc0csTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDVSxNQUFBLENBQUF1RSxPQUFPO2NBQUNsUCxJQUFJLEVBQUU2TyxTQUFTLENBQUM3SixJQUFJLENBQUN0SCxNQUFNLENBQUM4RixJQUFJLENBQUM7Y0FBRWtILFNBQVMsRUFBRSw4QkFBOEIxRixJQUFJLENBQUN0SCxNQUFNLENBQUM4RixJQUFJO1lBQUUsRUFBSSxDQUNsRztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCQSxJQUFBc0csTUFBQSxHQUFBMU4sT0FBQTtVQThCTyxNQUFNOGEsZ0JBQWdCLEdBQUExWixPQUFBLENBQUEwWixnQkFBQSxHQUFHcE4sTUFBQSxDQUFBbkgsT0FBSyxDQUFDd1UsYUFBYSxDQUFDLEVBQW9DLENBQUM7VUFDbEYsTUFBTTVNLG1CQUFtQixHQUFHQSxDQUFBLEtBQU1ULE1BQUEsQ0FBQW5ILE9BQUssQ0FBQ3lVLFVBQVUsQ0FBQ0YsZ0JBQWdCLENBQUM7VUFBQzFaLE9BQUEsQ0FBQStNLG1CQUFBLEdBQUFBLG1CQUFBO1VBRXJFLE1BQU04TSxhQUFhLEdBQUE3WixPQUFBLENBQUE2WixhQUFBLEdBQUd2TixNQUFBLENBQUFuSCxPQUFLLENBQUN3VSxhQUFhLENBQUMsRUFBb0MsQ0FBQztVQUMvRSxNQUFNN0gsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTXhGLE1BQUEsQ0FBQW5ILE9BQUssQ0FBQ3lVLFVBQVUsQ0FBQ0MsYUFBYSxDQUFDO1VBQUM3WixPQUFBLENBQUE4UixnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ3RFLElBQUF4RixNQUFBLEdBQUExTixPQUFBO1VBRUEsSUFBQXdYLFFBQUEsR0FBQXhYLE9BQUE7VUFDQSxJQUFBMk8sV0FBQSxHQUFBM08sT0FBQTtVQUNBLElBQUFrYixPQUFBLEdBQUFsYixPQUFBO1VBQ0EsSUFBQTRXLE1BQUEsR0FBQTVXLE9BQUE7VUFDQSxJQUFBbWIsUUFBQSxHQUFBbmIsT0FBQTtVQUNBLElBQUFvYixXQUFBLEdBQUFwYixPQUFBO1VBQ0EsSUFBQWdPLFFBQUEsR0FBQWhPLE9BQUE7VUFDQSxJQUFBcWIsS0FBQSxHQUFBcmIsT0FBQTtVQUNNLFNBQVVzYixXQUFXQSxDQUFBO1lBQzFCLE1BQU07Y0FBRXJQLEtBQUs7Y0FBRXNQLFVBQVU7Y0FBRWpiLEtBQUs7Y0FBRStQO1lBQWEsQ0FBRSxHQUFHLElBQUFyQyxRQUFBLENBQUFrRixnQkFBZ0IsR0FBRTtZQUN0RSxNQUFNLENBQUNuQyxJQUFJLEVBQUVnRyxPQUFPLENBQUMsR0FBR3JKLE1BQUEsQ0FBQW5ILE9BQUssQ0FBQ3lJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDN0MsTUFBTSxDQUFDcEMsUUFBUSxFQUFFZ0wsV0FBVyxDQUFDLEdBQUdsSyxNQUFBLENBQUFuSCxPQUFLLENBQUN5SSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JEdEIsTUFBQSxDQUFBbkgsT0FBSyxDQUFDeU4sU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSSxDQUFDdUgsVUFBVSxFQUFFeFAsSUFBSSxFQUFFO2dCQUN0QnlMLFFBQUEsQ0FBQVEsT0FBTyxDQUFDQyxZQUFZLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7Z0JBQ25DOztjQUVEVCxRQUFBLENBQUFRLE9BQU8sQ0FBQ3dELFNBQVMsQ0FBQyxXQUFXRCxVQUFVLENBQUN4UCxJQUFJLEVBQUUsQ0FBQztZQUNoRCxDQUFDLEVBQUUsQ0FBQ3dQLFVBQVUsQ0FBQ3hQLElBQUksQ0FBQyxDQUFDO1lBRXJCLElBQUl3UCxVQUFVLENBQUM1YSxJQUFJLEtBQUssS0FBSyxFQUFFO1lBQy9CLE1BQU1xVyxVQUFVLEdBQUdBLENBQUEsS0FBTUQsT0FBTyxDQUFDLENBQUNoRyxJQUFJLENBQUM7WUFDdkMsTUFBTXZKLFVBQVUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDN0IsSUFBSTtnQkFDSDtnQkFDQSxNQUFNbEgsS0FBSyxDQUFDd0csS0FBSyxDQUFDVSxVQUFVLENBQUMrVCxVQUFVLENBQUNsYSxJQUFJLENBQUNvRyxRQUFRLENBQUM7Z0JBQ3REbVEsV0FBVyxDQUFDLEtBQUssQ0FBQztlQUNsQixDQUFDLE9BQU8zTyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ3RELEtBQUssQ0FBQ3FELENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNUO2NBQUE7WUFFRixDQUFDO1lBQ0QsTUFBTWlPLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIsTUFBTTFQLFVBQVUsRUFBRTtjQUNsQndQLFVBQVUsRUFBRTtZQUNiLENBQUM7WUFFRCxNQUFNekUsR0FBRyxHQUFHLGFBQWEzRixRQUFRLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUN6RCxPQUNDYyxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUFILE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXVILFFBQUEsUUFDQ0osTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDcU4sT0FBQSxDQUFBN0MsTUFBTTtjQUNOL0osU0FBUyxFQUFFaUUsR0FBRztjQUNka0osUUFBUSxFQUFDLE9BQU87Y0FDaEIxSyxJQUFJLEVBQUV3SyxVQUFVLENBQUM1YSxJQUFJO2NBQ3JCc08sT0FBTyxFQUFFQSxDQUFBLEtBQU1vQixhQUFhLENBQUM7Z0JBQUUxUCxJQUFJLEVBQUU7Y0FBSyxDQUFFO1lBQUMsR0FFN0MrTSxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUNjLFdBQUEsQ0FBQVcsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUVnTSxVQUFVLENBQUN4UCxJQUFJO2NBQzFCMEQsT0FBTyxFQUFFO2dCQUNSaU0sSUFBSSxFQUFFaE8sTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDd04sS0FBQSxDQUFBTSxJQUFJO2tCQUFDL1MsSUFBSSxFQUFFMlMsVUFBVSxDQUFDbGE7Z0JBQUksRUFBSTtnQkFDckMsa0JBQWtCLEVBQUVxTSxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUNzTixRQUFBLENBQUE3Qyx3QkFBd0I7a0JBQUN0QixVQUFVLEVBQUVBLFVBQVU7a0JBQUVwTyxJQUFJLEVBQUUyUyxVQUFVLENBQUNsYTtnQkFBSSxFQUFJO2dCQUMvRixjQUFjLEVBQUVxTSxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUN1TixXQUFBLENBQUEzRCxpQkFBaUI7a0JBQUM3TyxJQUFJLEVBQUUyUyxVQUFVLENBQUNsYSxJQUFJO2tCQUFFMlYsVUFBVSxFQUFFQTtnQkFBVSxFQUFJO2dCQUNwRlUsT0FBTyxFQUFFaEssTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDc04sUUFBQSxDQUFBN0Msd0JBQXdCO2tCQUFDMVAsSUFBSSxFQUFFMlMsVUFBVSxDQUFDbGEsSUFBSTtrQkFBRTJWLFVBQVUsRUFBRUE7Z0JBQVU7O1lBQ2hGLEVBQ0EsQ0FDTSxFQUNSakcsSUFBSSxJQUNKckQsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDK0ksTUFBQSxDQUFBUSxZQUFZO2NBQUN6VyxJQUFJO2NBQUN1VyxTQUFTLEVBQUVBLFNBQVM7Y0FBRUcsUUFBUSxFQUFFTDtZQUFVLEdBQzVEdEosTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQTtjQUFLUyxTQUFTLEVBQUMsZUFBZTtjQUFDZSxPQUFPLEVBQUUySDtZQUFVLEVBQUksRUFDdER0SixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQUtTLFNBQVMsRUFBQztZQUFlLEdBQzdCWixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLGFBQUs1QixLQUFLLENBQUN6RSxVQUFVLENBQUNyRixLQUFLLENBQU0sRUFDakN1TCxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLFlBQUk1QixLQUFLLENBQUN6RSxVQUFVLENBQUN2RixXQUFXLENBQUssQ0FDaEMsQ0FFUCxDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEVBLElBQUF1USxLQUFBLEdBQUF4UyxPQUFBO1VBQ0EsSUFBQXFZLE1BQUEsR0FBQXJZLE9BQUE7VUFJTSxTQUFVMmIsSUFBSUEsQ0FBQztZQUFFL1M7VUFBSSxDQUFFO1lBQzVCLE1BQU07Y0FBRXJGLElBQUksRUFBRW1VO1lBQU8sQ0FBRSxHQUFHOU8sSUFBSTtZQUM5QixNQUFNLENBQUNnRSxRQUFRLEVBQUVnTCxXQUFXLENBQUMsR0FBR3BGLEtBQUssQ0FBQ3hELFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTXVELEdBQUcsR0FBRyxzQkFBc0IzRixRQUFRLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUVsRSxPQUNDNEYsS0FBQSxDQUFBM0UsYUFBQTtjQUFLUyxTQUFTLEVBQUVpRTtZQUFHLEdBQ2xCQyxLQUFBLENBQUEzRSxhQUFBO2NBQVFTLFNBQVMsRUFBQztZQUEwQixHQUMzQ2tFLEtBQUEsQ0FBQTNFLGFBQUE7Y0FBU1MsU0FBUyxFQUFDO1lBQStDLEdBQ2pFa0UsS0FBQSxDQUFBM0UsYUFBQSxhQUFLNkosT0FBTyxDQUFDN1YsSUFBSSxDQUFNLEVBQ3ZCMlEsS0FBQSxDQUFBM0UsYUFBQSxjQUNDMkUsS0FBQSxDQUFBM0UsYUFBQSxDQUFDd0ssTUFBTSxDQUFDRyxXQUFXLE9BQUcsQ0FDakIsQ0FDRyxDQUNGLENBQ0o7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0QkEsSUFBQWhHLEtBQUEsR0FBQXhTLE9BQUE7VUFDQSxJQUFBcVksTUFBQSxHQUFBclksT0FBQTtVQUVBLElBQUFnTyxRQUFBLEdBQUFoTyxPQUFBO1VBRU0sU0FBVTJiLElBQUlBLENBQUM7WUFBRS9TO1VBQUksQ0FBRTtZQUM1QixNQUFNO2NBQUV0STtZQUFLLENBQUUsR0FBRyxJQUFBME4sUUFBQSxDQUFBa0YsZ0JBQWdCLEdBQUU7WUFFcEMsTUFBTSxDQUFDdEcsUUFBUSxFQUFFZ0wsV0FBVyxDQUFDLEdBQUdwRixLQUFLLENBQUN4RCxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU11RCxHQUFHLEdBQUcsc0JBQXNCM0YsUUFBUSxHQUFHLGNBQWMsR0FBRyxFQUFFLEVBQUU7WUFFbEUsT0FDQzRGLEtBQUEsQ0FBQTNFLGFBQUE7Y0FBS1MsU0FBUyxFQUFFaUU7WUFBRyxHQUNsQkMsS0FBQSxDQUFBM0UsYUFBQTtjQUFRUyxTQUFTLEVBQUM7WUFBMEIsR0FDM0NrRSxLQUFBLENBQUEzRSxhQUFBO2NBQVNTLFNBQVMsRUFBQztZQUErQyxHQUNqRWtFLEtBQUEsQ0FBQTNFLGFBQUEsb0JBQWEsRUFDYjJFLEtBQUEsQ0FBQTNFLGFBQUEsY0FDQzJFLEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQ3dLLE1BQU0sQ0FBQ0csV0FBVyxPQUFHLENBQ2pCLENBQ0csQ0FDRixFQUNUaEcsS0FBQSxDQUFBM0UsYUFBQTtjQUFTUyxTQUFTLEVBQUM7WUFBb0IsR0FDdENrRSxLQUFBLENBQUEzRSxhQUFBO2NBQW9CL0wsRUFBRSxFQUFFeEIsS0FBSyxDQUFDZ0s7WUFBWSxFQUFJLENBQ3JDLENBQ0w7VUFFUjs7Ozs7Ozs7Ozs7VUMxQkE7O1VBRUF4RSxNQUFBLENBQUF1RixjQUFBLENBQUFqSyxPQUFBO1lBQ0FrSyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQW9DLE1BQUEsR0FBQTFOLE9BQUE7VUFDQSxJQUFBZ08sUUFBQSxHQUFBaE8sT0FBQTtVQUNBLElBQUF1TyxNQUFBLEdBQUF2TyxPQUFBO1VBQ0EsSUFBQXNYLE9BQUEsR0FBQXRYLE9BQUE7VUFDQSxJQUFBNFIsUUFBQSxHQUFBNVIsT0FBQTtVQUNNLFNBQVU0YixjQUFjQSxDQUFDO1lBQUVoVDtVQUFJLENBQUU7WUFDdEMsTUFBTTtjQUFFdEk7WUFBSyxDQUFFLEdBQUcsSUFBQTBOLFFBQUEsQ0FBQUcsbUJBQW1CLEdBQUU7WUFDdkMsTUFBTXZLLElBQUksR0FBRzBULE9BQUEsQ0FBQTlCLEtBQUssQ0FBQzVNLElBQUksQ0FBQ3hHLElBQUksQ0FBQztZQUM3QixJQUFJbVEsR0FBRyxHQUFHLGlDQUFpQzNKLElBQUksQ0FBQ3hHLElBQUksRUFBRTtZQUV0RCxJQUFJOUIsS0FBSyxDQUFDc0wsZ0JBQWdCLEVBQUV4SixJQUFJLEtBQUt3RyxJQUFJLENBQUN4RyxJQUFJLEVBQUVtUSxHQUFHLElBQUksU0FBUztZQUVoRSxNQUFNcFEsS0FBSyxHQUFHeUcsSUFBSSxDQUFDekcsS0FBSztZQUN4QixNQUFNMFosV0FBVyxHQUFHbkwsS0FBSyxJQUFJcFEsS0FBSyxDQUFDbU4sY0FBYyxDQUFDN0UsSUFBSSxDQUFDO1lBRXZELE9BQ0M4RSxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUMrRCxRQUFBLENBQUFLLE9BQU87Y0FBQ0MsT0FBTyxFQUFFL1A7WUFBSyxHQUN0QnVMLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUE7Y0FBU1MsU0FBUyxFQUFFaUUsR0FBRztjQUFFbEQsT0FBTyxFQUFFd007WUFBVyxHQUM1Q25PLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ1UsTUFBQSxDQUFBNEssSUFBSTtjQUFDdlYsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDWCxDQUNEO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJBLElBQUFtSyxHQUFBLEdBQUEvTixPQUFBO1VBQ0EsSUFBQTJPLFdBQUEsR0FBQTNPLE9BQUE7VUFDQSxJQUFBME4sTUFBQSxHQUFBMU4sT0FBQTtVQUNBLElBQUFnTyxRQUFBLEdBQUFoTyxPQUFBO1VBQ0EsSUFBQThiLFNBQUEsR0FBQTliLE9BQUE7VUFDQSxJQUFBaVEsWUFBQSxHQUFBalEsT0FBQTtVQUNBLElBQUF1TyxNQUFBLEdBQUF2TyxPQUFBO1VBQ0EsSUFBQXdYLFFBQUEsR0FBQXhYLE9BQUE7VUFFTSxTQUFVK2IsTUFBTUEsQ0FBQTtZQUNyQixNQUFNO2NBQUVqVixLQUFLO2NBQUVtRixLQUFLO2NBQUVvRTtZQUFhLENBQUUsR0FBRyxJQUFBckMsUUFBQSxDQUFBRyxtQkFBbUIsR0FBRTtZQUM3RCxNQUFNO2NBQUVoTSxLQUFLO2NBQUVGLFdBQVc7Y0FBRUksT0FBTztjQUFFMlosS0FBSztjQUFFcmE7WUFBTyxDQUFFLEdBQUdtRixLQUFLLENBQUNwRixNQUFNO1lBQ3BFLE1BQU0yTixPQUFPLEdBQUdBLENBQUEsS0FBSztjQUNwQmdCLGFBQWEsQ0FBQztnQkFDYjFQLElBQUksRUFBRSxJQUFJO2dCQUNWb0wsSUFBSSxFQUFFO2VBQ04sQ0FBQztZQUNILENBQUM7WUFFRCxNQUFNa1EsZ0JBQWdCLEdBQUd2TCxLQUFLLElBQUc7Y0FDaENBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCRCxLQUFLLENBQUNFLGNBQWMsRUFBRTtjQUN0QjRHLFFBQUEsQ0FBQVEsT0FBTyxDQUFDd0QsU0FBUyxDQUFDLG9CQUFvQjFVLEtBQUssQ0FBQ3pELFNBQVMsQ0FBQ3ZCLEVBQUUsRUFBRSxDQUFDO1lBQzVELENBQUM7WUFDRCxPQUNDNEwsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDb0MsWUFBQSxDQUFBWSxvQkFBb0I7Y0FBQ3ZDLFNBQVMsRUFBQztZQUF3QixHQUN2RFosTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDb0MsWUFBQSxDQUFBZSxpQkFBaUIsUUFDakJ0RCxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQVFTLFNBQVMsRUFBQztZQUFrQixHQUNuQ1osTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDRSxHQUFBLENBQUFtTyxXQUFXO2NBQUNyWCxNQUFNLEVBQUMsUUFBUTtjQUFDcU0sR0FBRyxFQUFFN08sT0FBTztjQUFFOFgsR0FBRyxFQUFFaFk7WUFBSyxFQUFJLEVBQ3pEdUwsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxjQUNDSCxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUNjLFdBQUEsQ0FBQXdDLElBQUk7Y0FBQ0MsSUFBSSxFQUFFLGdCQUFnQnRLLEtBQUssQ0FBQ2hGLEVBQUU7WUFBRSxHQUNyQzRMLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsYUFBSzFMLEtBQUssQ0FBTSxDQUNWLEVBQ1B1TCxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQUtTLFNBQVMsRUFBQztZQUF3QixHQUN0Q1osTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxjQUNDSCxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQUtTLFNBQVMsRUFBQyw2QkFBNkI7Y0FBQ2UsT0FBTyxFQUFFNE07WUFBZ0IsR0FDckV2TyxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUNVLE1BQUEsQ0FBQXVFLE9BQU87Y0FBQ2xQLElBQUksRUFBQztZQUFXLEVBQUcsRUFDNUI4SixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQU1TLFNBQVMsRUFBQztZQUFzQixHQUFFeEgsS0FBSyxDQUFDekQsU0FBUyxDQUFDeEIsSUFBSSxDQUFRLENBQy9ELEVBQ0xGLE9BQU8sSUFBSStMLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ2lPLFNBQUEsQ0FBQUssUUFBUTtjQUFDOWEsSUFBSSxFQUFFTTtZQUFPLEVBQUksQ0FDbEMsRUFFTitMLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ2MsV0FBQSxDQUFBa0csTUFBTTtjQUNORSxRQUFRO2NBQ1JuUixJQUFJLEVBQUMsZUFBZTtjQUNwQjBLLFNBQVMsRUFBQyw4Q0FBOEM7Y0FDeERlLE9BQU8sRUFBRUE7WUFBTyxHQUVmcEQsS0FBSyxDQUFDbVEsT0FBTyxDQUFDVixJQUFJLENBQ1gsQ0FDSixDQUNELENBQ0UsQ0FDVSxFQUNwQmhPLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ29DLFlBQUEsQ0FBQXNCLGtCQUFrQixRQUNsQjdELE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUE7Y0FBS1MsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDWixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQVNTLFNBQVMsRUFBQztZQUFjLEdBQ2hDWixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQUdTLFNBQVMsRUFBQztZQUFjLEdBQUVyTSxXQUFXLENBQUssRUFDN0N5TCxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQUtTLFNBQVMsRUFBQztZQUEwQixHQUN4Q1osTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBMEIsR0FDdkMzTSxPQUFPLElBQUkrTCxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUNpTyxTQUFBLENBQUFLLFFBQVE7Y0FBQzlhLElBQUksRUFBRU07WUFBTyxFQUFJLEVBQ3RDcWEsS0FBSyxJQUFJdE8sTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDaU8sU0FBQSxDQUFBSyxRQUFRO2NBQUM1QyxLQUFLLEVBQUV0TixLQUFLLENBQUMrUCxLQUFLO2NBQUUzYSxJQUFJLEVBQUUyYTtZQUFLLEVBQUksQ0FDbEQsQ0FDRCxDQUNHLEVBQ1Z0TyxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQUtTLFNBQVMsRUFBQztZQUFTLEVBQU8sQ0FDMUIsQ0FDYyxDQUNDO1VBRXpCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RFQSxJQUFBWixNQUFBLEdBQUExTixPQUFBO1VBQ0EsSUFBQWdPLFFBQUEsR0FBQWhPLE9BQUE7VUFDQSxJQUFBcWMsS0FBQSxHQUFBcmMsT0FBQTtVQUNBLElBQUF3TyxLQUFBLEdBQUF4TyxPQUFBO1VBQ0EsSUFBQXNjLGVBQUEsR0FBQXRjLE9BQUE7VUFDQSxJQUFBdU8sTUFBQSxHQUFBdk8sT0FBQTtVQUVNLFNBQVV1YyxjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRXpWLEtBQUs7Y0FBRW1GLEtBQUs7Y0FBRTNMO1lBQUssQ0FBRSxHQUFHLElBQUEwTixRQUFBLENBQUFHLG1CQUFtQixHQUFFO1lBQ3JELE1BQU1xTyxPQUFPLEdBQUcsdUJBQXVCbGMsS0FBSyxDQUFDc0wsZ0JBQWdCLEdBQUcsb0JBQW9CLEdBQUcsRUFBRSxFQUFFO1lBQzNGLE1BQU0sQ0FBQzZRLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUdoUCxNQUFBLENBQUFuSCxPQUFLLENBQUN5SSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU04SSxTQUFTLEdBQUdwSCxLQUFLLElBQUc7Y0FDekJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCK0wsYUFBYSxDQUFDLElBQUksQ0FBQztjQUNuQnBjLEtBQUssQ0FBQ3lNLE9BQU8sRUFBRTtjQUNmTyxVQUFVLENBQUMsTUFBSztnQkFDZm9QLGFBQWEsQ0FBQyxLQUFLLENBQUM7Y0FDckIsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNULENBQUM7WUFDRCxNQUFNQyxRQUFRLEdBQUdqTSxLQUFLLElBQUc7Y0FDeEJwUSxLQUFLLENBQUM4TCxNQUFNLENBQUNzRSxLQUFLLENBQUNrTSxhQUFhLENBQUN0UixLQUFLLENBQUM7WUFDeEMsQ0FBQztZQUNELE9BQ0NvQyxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBO2NBQVFTLFNBQVMsRUFBQztZQUE0QixHQUM3Q1osTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNaLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUE7Y0FBU1MsU0FBUyxFQUFDO1lBQWUsR0FDakNaLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUE7Y0FBTVMsU0FBUyxFQUFDO1lBQUksR0FBRXJDLEtBQUssQ0FBQzRRLElBQUksQ0FBQ0MsUUFBUSxDQUFRLEVBQ2pEcFAsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxlLEtBQ0cvRyxLQUFLLENBQUN4RCxZQUFZLENBQUM5QixLQUFLLEVBQUV3RSxNQUFNLEUsS0FBR2lHLEtBQUssQ0FBQzRRLElBQUksQ0FBQ3ZaLFlBQVksRSxJQUN0RCxDQUNFLEVBQ1ZvSyxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLGtCQUNDSCxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUN3TyxLQUFBLENBQUFVLEtBQUs7Y0FDTEMsUUFBUSxFQUFFTCxRQUFRO2NBQ2xCdmEsSUFBSSxFQUFDLE1BQU07Y0FDWGtNLFNBQVMsRUFBQyxnQkFBZ0I7Y0FDMUIyTyxXQUFXLEVBQUVoUixLQUFLLENBQUM0USxJQUFJLENBQUNLLE1BQU07Y0FDOUJ0WixJQUFJLEVBQUM7WUFBUSxFQUNaLENBQ08sQ0FDTCxFQUNOOEosTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNaLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsYUFBSzVCLEtBQUssQ0FBQ2tSLGFBQWEsQ0FBQy9RLE1BQU0sQ0FBTSxFQUNyQ3NCLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ1csS0FBQSxDQUFBbUIsSUFBSTtjQUFDckIsU0FBUyxFQUFFa08sT0FBTztjQUFFaGIsS0FBSyxFQUFFc0YsS0FBSyxDQUFDdkYsVUFBVSxDQUFDQyxLQUFLO2NBQUVvTyxPQUFPLEVBQUUwTSxlQUFBLENBQUFWO1lBQWMsRUFBSSxFQUNwRmxPLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ1UsTUFBQSxDQUFBYSxVQUFVO2NBQ1ZnTyxRQUFRLEVBQUVYLFVBQVU7Y0FDcEJwTixPQUFPLEVBQUV5SSxTQUFTO2NBQ2xCbFUsSUFBSSxFQUFDLFNBQVM7Y0FDZGtSLE9BQU8sRUFBQyxTQUFTO2NBQ2pCeEcsU0FBUyxFQUFDO1lBQVEsRUFDakIsQ0FDRyxDQUNFO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdERBLElBQUFrRSxLQUFBLEdBQUF4UyxPQUFBO1VBQ0EsSUFBQWdRLE1BQUEsR0FBQWhRLE9BQUE7VUFHTSxTQUFVbWMsUUFBUUEsQ0FBQztZQUFFNUMsS0FBSztZQUFFbFksSUFBSSxFQUFFO2NBQUVPLFFBQVE7Y0FBRUM7WUFBSTtVQUFFLENBQW1DO1lBQzVGLE9BQ0MyUSxLQUFBLENBQUEzRSxhQUFBO2NBQUtTLFNBQVMsRUFBQztZQUFvQixHQUNsQ2tFLEtBQUEsQ0FBQTNFLGFBQUE7Y0FBSVMsU0FBUyxFQUFDO1lBQWtCLEdBQUVpTCxLQUFLLENBQU0sRUFDN0MvRyxLQUFBLENBQUEzRSxhQUFBO2NBQVNTLFNBQVMsRUFBQztZQUFtQixHQUNyQ2tFLEtBQUEsQ0FBQTNFLGFBQUEsQ0FBQ21DLE1BQUEsQ0FBQWlCLEtBQUs7Y0FBQzNDLFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQzRDLEdBQUcsRUFBRSxPQUFPdFAsUUFBUTtZQUFHLEVBQUksRUFDN0Q0USxLQUFBLENBQUEzRSxhQUFBO2NBQU1TLFNBQVMsRUFBQztZQUFpQixHQUFFek0sSUFBSSxDQUFRLENBQ3RDLENBQ0w7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkQSxJQUFBa00sR0FBQSxHQUFBL04sT0FBQTtVQUNBLElBQUEwTyxNQUFBLEdBQUExTyxPQUFBO1VBQ0EsSUFBQTBOLE1BQUEsR0FBQTFOLE9BQUE7VUFDQSxJQUFBcWQsQ0FBQSxHQUFBcmQsT0FBQTtVQUNBLElBQUFnTyxRQUFBLEdBQUFoTyxPQUFBO1VBQ0EsSUFBQXNkLFlBQUEsR0FBQXRkLE9BQUE7VUFDQSxJQUFBeU8sTUFBQSxHQUFBek8sT0FBQTtVQUNBLElBQUF1ZCxPQUFBLEdBQUF2ZCxPQUFBO1VBRUEsSUFBQTJPLFdBQUEsR0FBQTNPLE9BQUE7VUFFQSxJQUFBd2QsUUFBQSxHQUFBeGQsT0FBQTtVQUdBLElBQUF5ZCxjQUFBLEdBQUF6ZCxPQUFBO1VBQ0EsSUFBQTBkLEtBQUEsR0FBQTFkLE9BQUE7VUFDTztVQUFVLFNBQVVVLElBQUlBLENBQUM7WUFBRUo7VUFBSyxDQUEyQjtZQUNqRSxNQUFNLENBQUNnSCxLQUFLLEVBQUV1USxRQUFRLENBQUMsR0FBRyxJQUFBbkssTUFBQSxDQUFBc0IsUUFBUSxFQUFDMU8sS0FBSyxDQUFDZ0gsS0FBSyxDQUFDO1lBQy9DLE1BQU0sQ0FBQ2lVLFVBQVUsRUFBRWxMLGFBQWEsQ0FBQyxHQUFHLElBQUEzQyxNQUFBLENBQUFzQixRQUFRLEVBQXNCO2NBQUVyTyxJQUFJLEVBQUUsS0FBSztjQUFFVSxJQUFJLEVBQUU7WUFBSSxDQUFFLENBQUM7WUFDOUYsTUFBTSxDQUFDMEssSUFBSSxFQUFFOEMsT0FBTyxDQUFDLEdBQUcsSUFBQW5CLE1BQUEsQ0FBQXNCLFFBQVEsRUFBeUIsU0FBUyxDQUFDO1lBQ25FLE1BQU0sR0FBRzJPLG9CQUFvQixDQUFDLEdBQUcsSUFBQWpRLE1BQUEsQ0FBQXNCLFFBQVEsRUFBQzFPLEtBQUssQ0FBQ3dHLEtBQUssRUFBRXhELFlBQVksRUFBRTlCLEtBQUssRUFBRXdFLE1BQU0sSUFBSSxDQUFDLENBQUM7WUFDeEYsTUFBTSxDQUFDNFgsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRyxJQUFBblEsTUFBQSxDQUFBc0IsUUFBUSxFQUFDMU8sS0FBSyxDQUFDd2QsYUFBYSxFQUFFLENBQUM7WUFDekQsTUFBTSxDQUFDbFIsUUFBUSxFQUFFZ0wsV0FBVyxDQUFDLEdBQUcsSUFBQWxLLE1BQUEsQ0FBQXNCLFFBQVEsRUFBQzFPLEtBQUssQ0FBQ3NNLFFBQVEsQ0FBQztZQUN4RCxNQUFNO2NBQUVYO1lBQUssQ0FBRSxHQUFHM0wsS0FBSztZQUN2QixNQUFNNlMsR0FBRyxHQUFHekYsTUFBQSxDQUFBbkgsT0FBSyxDQUFDNk0sTUFBTSxDQUFDLElBQUksQ0FBQztZQUU5QjFGLE1BQUEsQ0FBQW5ILE9BQUssQ0FBQ3lOLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUksQ0FBQ2IsR0FBRyxFQUFFa0MsT0FBTyxFQUFFO2NBRW5CLE1BQU0wSSxTQUFTLEdBQUc1SyxHQUFHLENBQUNrQyxPQUFPLENBQUMySSxhQUFhLENBQUMsa0JBQWtCLENBQUM7Y0FFL0Q7Y0FDQTtjQUNBO2NBQ0E7Y0FDQTtjQUNBO2NBQ0E7Y0FDQTtjQUNBO2NBQ0E7Y0FDQTtjQUNBO1lBQ0QsQ0FBQyxFQUFFLENBQUM3SyxHQUFHLEVBQUVrQyxPQUFPLEVBQUVrRyxVQUFVLENBQUM1YSxJQUFJLENBQUMsQ0FBQztZQUVuQyxJQUFBK04sTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQzdPLEtBQUssQ0FBQyxFQUFFLE1BQU11WCxRQUFRLENBQUN2WCxLQUFLLENBQUNnSCxLQUFLLENBQUMsQ0FBQztZQUMvQyxJQUFBb0gsTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQzdPLEtBQUssQ0FBQyxFQUFFLE1BQU1xZCxvQkFBb0IsQ0FBQ3JkLEtBQUssQ0FBQ2dELFlBQVksQ0FBQzBDLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUM7WUFDOUYsSUFBQTBJLE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUM3TyxLQUFLLENBQUMsRUFBRSxNQUFNdWQsUUFBUSxDQUFDdmQsS0FBSyxDQUFDd2QsYUFBYSxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUM7WUFDbkUsSUFBQXBQLE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUM3TyxLQUFLLENBQUMsRUFBRSxNQUFNc1gsV0FBVyxDQUFDdFgsS0FBSyxDQUFDc00sUUFBUSxDQUFDLEVBQUUsa0JBQWtCLENBQUM7WUFFekUsSUFBSSxDQUFDdEYsS0FBSyxFQUFFLE9BQU9vRyxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUNFLEdBQUEsQ0FBQWtRLFVBQVU7Y0FBQ3JSLFFBQVEsRUFBRTtZQUFJLEVBQUk7WUFDakQsSUFBSSxDQUFDdE0sS0FBSyxDQUFDd0csS0FBSyxDQUFDTyxLQUFLLEVBQUUsT0FBT3FHLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ3dQLENBQUEsQ0FBQTFQLFFBQVE7Y0FBQ3JOLEtBQUssRUFBRUEsS0FBSztjQUFFMkwsS0FBSyxFQUFFQTtZQUFLLEVBQUk7WUFDdkUsSUFBSTNMLEtBQUssQ0FBQ3dHLEtBQUssQ0FBQ2pCLGlCQUFpQixLQUFLLENBQUMsRUFBRSxPQUFPNkgsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDWSxNQUFBLENBQUFzQixLQUFLO2NBQUN6UCxLQUFLLEVBQUVBLEtBQUs7Y0FBRTJMLEtBQUssRUFBRUE7WUFBSyxFQUFJO1lBRXJGLE1BQU1YLEtBQUssR0FBRztjQUFFVyxLQUFLO2NBQUVuRixLQUFLLEVBQUV4RyxLQUFLLENBQUN3RyxLQUFLO2NBQUV4RyxLQUFLO2NBQUUrUCxhQUFhO2NBQUV0RSxJQUFJO2NBQUU4QztZQUFPLENBQUU7WUFDaEYsTUFBTXFQLFdBQVcsR0FBRztjQUFFalMsS0FBSztjQUFFbkYsS0FBSyxFQUFFeEcsS0FBSyxDQUFDd0csS0FBSztjQUFFeVUsVUFBVTtjQUFFamIsS0FBSztjQUFFK1A7WUFBYSxDQUFFO1lBQ25GLE1BQU1rQyxHQUFHLEdBQUcsc0JBQXNCM0YsUUFBUSxHQUFHLGNBQWMsR0FBRyxFQUFFLEVBQUU7WUFFbEUsT0FDQ2MsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQTtjQUFLc0YsR0FBRyxFQUFFQTtZQUFHLEdBQ1p6RixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUNFLEdBQUEsQ0FBQTZNLGFBQWE7Y0FBQ3RNLFNBQVMsRUFBRWlFO1lBQUcsR0FDNUI3RSxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUNHLFFBQUEsQ0FBQThNLGdCQUFnQixDQUFDM1AsUUFBUTtjQUFDRyxLQUFLLEVBQUVBO1lBQUssR0FDdENvQyxNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUMwUCxPQUFBLENBQUF4QixNQUFNLE9BQUcsRUFDVnJPLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQzRQLGNBQUEsQ0FBQWxCLGNBQWMsT0FBRyxFQUNsQjdPLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ2MsV0FBQSxDQUFBVyxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRSxDQUFDLENBQUNqUCxLQUFLLENBQUNzTCxnQkFBZ0I7Y0FDbkM0RCxPQUFPO2NBQ1BDLE9BQU8sRUFBRTtnQkFDUkssS0FBSyxFQUFFcEMsTUFBQSxDQUFBbkgsT0FBQSxDQUFBc0gsYUFBQSxDQUFDMlAsUUFBQSxDQUFBL0UsV0FBVyxPQUFHO2dCQUN0Qi9JLElBQUksRUFBRWhDLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQzZQLEtBQUEsQ0FBQTlPLFlBQVk7O1lBQ25CLEVBQ0EsQ0FDeUIsRUFDNUJsQixNQUFBLENBQUFuSCxPQUFBLENBQUFzSCxhQUFBLENBQUNHLFFBQUEsQ0FBQWlOLGFBQWEsQ0FBQzlQLFFBQVE7Y0FBQ0csS0FBSyxFQUFFNFM7WUFBVyxHQUN6Q3hRLE1BQUEsQ0FBQW5ILE9BQUEsQ0FBQXNILGFBQUEsQ0FBQ3lQLFlBQUEsQ0FBQWhDLFdBQVcsT0FBRyxDQUNTLENBQ1YsQ0FDWDtVQUVSIiwiaWdub3JlTGlzdCI6W119