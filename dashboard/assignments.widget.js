System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.10/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/reactive@1.1.12/entities", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@aimpact/ailearn-app@0.2.10/components/ui", "@aimpact/ailearn-app@0.2.10/components/navbar-header.code", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.2.10/config", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/list", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/tooltip", "@aimpact/ailearn-app@0.2.10/components/icons", "pragmate-ui@1.0.0-beta.6/collapsible", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/drawer", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/perfect-scrollbar", "pragmate-ui@1.0.0-beta.6/form"], function (_export, _context2) {
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
    }, function (_pragmateUi100Beta6Icons) {
      dependency_18 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp0210Config) {
      dependency_19 = _aimpactAilearnApp0210Config;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_20 = _pragmateUi100Beta6Empty;
    }, function (_pragmateUi100Beta6List) {
      dependency_21 = _pragmateUi100Beta6List;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_22 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Components) {
      dependency_23 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Image) {
      dependency_24 = _pragmateUi100Beta6Image;
    }, function (_pragmateUi100Beta6Tooltip) {
      dependency_25 = _pragmateUi100Beta6Tooltip;
    }, function (_aimpactAilearnApp0210ComponentsIcons) {
      dependency_26 = _aimpactAilearnApp0210ComponentsIcons;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_27 = _pragmateUi100Beta6Collapsible;
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_28 = _aimpactChatSdk130ChatComponentCode;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_29 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_30 = _pragmateUi100Beta6Tabs;
    }, function (_pragmateUi100Beta6Drawer) {
      dependency_31 = _pragmateUi100Beta6Drawer;
    }, function (_beyondJsKernel019Routing) {
      dependency_32 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta6PerfectScrollbar) {
      dependency_33 = _pragmateUi100Beta6PerfectScrollbar;
    }, function (_pragmateUi100Beta6Form) {
      dependency_34 = _pragmateUi100Beta6Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.10"], ["@aimpact/ailearn-app", "0.2.10"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_5], ['@aimpact/ailearn-sdk/reactive/model', dependency_6], ['@aimpact/http-suite/api', dependency_7], ['@aimpact/ailearn-sdk/config', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-sdk/tracking', dependency_10], ['@beyond-js/reactive/entities', dependency_11], ['@aimpact/ailearn-sdk/core', dependency_12], ['@beyond-js/kernel/texts', dependency_13], ['@beyond-js/kernel/core', dependency_14], ['react', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_17], ['pragmate-ui/icons', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['pragmate-ui/empty', dependency_20], ['pragmate-ui/list', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['pragmate-ui/components', dependency_23], ['pragmate-ui/image', dependency_24], ['pragmate-ui/tooltip', dependency_25], ['@aimpact/ailearn-app/components/icons', dependency_26], ['pragmate-ui/collapsible', dependency_27], ['@aimpact/chat-sdk/chat-component.code', dependency_28], ['@aimpact/chat-sdk/widgets/markdown', dependency_29], ['pragmate-ui/tabs', dependency_30], ['pragmate-ui/drawer', dependency_31], ['@beyond-js/kernel/routing', dependency_32], ['pragmate-ui/perfect-scrollbar', dependency_33], ['pragmate-ui/form', dependency_34]]);
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
        hash: 1916910585,
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
        hash: 3893251696,
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
              const specs = {};
              if (activity.type === 'spoken') {
                specs.properties = Object.keys(data);
              }
              const Activity = Objects[activity.type] || Objects.detault;
              const instance = new Activity({
                activity,
                ...specs,
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
                if (!this.has(item.id)) {}
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
        hash: 1407264248,
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
        hash: 1614082382,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantSpokenActivity = void 0;
          var _item = require("@aimpact/ailearn-sdk/reactive/entities/item");
          class ParticipantSpokenActivity extends _item.Item {
            #objectives = [];
            get objectives() {
              return this.#objectives;
            }
            get icons() {
              return this.#objectives.map(objective => this[objective]);
            }
            get totalPoints() {
              return this.#objectives.reduce((acc, objective) => acc + this[objective].points, 0);
            }
            constructor({
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['alerts', 'activity', ...properties]
              });
              this.#objectives = properties;
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
        hash: 113886854,
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
        hash: 1445526502,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatActivityParticipant = ChatActivityParticipant;
          var _react = require("react");
          var _context = require("../../../context");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var _collapsible = require("pragmate-ui/collapsible");
          var _objective = require("./objective");
          var _objectiveIcon = require("../../../components/objective-icon");
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
                view: 'student-chat',
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
        hash: 2197292947,
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
                content: objective
              }, participantActivity[objective].icon);
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
        hash: 795779390,
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
            } = (0, _context.useDashboardContext)();
            const ref = React.useRef();
            const tActivity = tracking.activities.get(item.activity.id);
            const chatId = tActivity?.chatModel?.id;
            React.useEffect(() => {
              if (!ref.current) return;
              ref.current.addEventListener('scroll', event => {
                event.stopPropagation();
                event.preventDefault();
                console.log('scroll');
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
        hash: 247572159,
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
            } = (0, _context.useDashboardContext)();
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
        hash: 381889859,
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
            } = (0, _context.useDashboardContext)();
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
            }, texts.activities.chat, item.messages?.count ? React.createElement("i", {
              className: "drawer__badge"
            }, interactions) : null));
            if (item?.alerts?.length) tabs.push(React.createElement(_tabs.Tab, {
              key: "alerts",
              className: "alerts-tab"
            }, texts.alerts, React.createElement("span", {
              className: "drawer__badge drawer__badge--danger"
            }, item.alerts.length)));
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
        hash: 4137041369,
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
        hash: 1366773697,
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
            } = (0, _context.useDashboardContext)();
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
        hash: 1523140810,
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
            } = (0, _context.useDashboardContext)();
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

      /******************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/multiple-choice
      ******************************************************************/

      ims.set('./views/assignment/drawer/activity/multiple-choice', {
        hash: 2266077665,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityMultipleChoiceBody = StudentAssignmentActivityMultipleChoiceBody;
          var React = require("react");
          var _context = require("../../../context");
          var _components = require("pragmate-ui/components");
          function StudentAssignmentActivityMultipleChoiceBody({
            item,
            user,
            activityId
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            return React.createElement("div", {
              className: "activity-data-section mt-15"
            }, React.createElement("p", null, item.activity.description), React.createElement("h6", null, texts.activities.multipleChoice.participation.title), React.createElement(_components.HtmlWrapper, {
              params: {
                ...item.counters
              }
            }, texts.activities.multipleChoice.participation.detail));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/spoken
      *********************************************************/

      ims.set('./views/assignment/drawer/activity/spoken', {
        hash: 87887805,
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
            } = (0, _context.useDashboardContext)();
            const audioUrl = `${_config.default.params.apis.ailearn}/assignments/${tracking.id}/activities/${item.activity.id}/tracking/${user.id}/audio`;
            const output = item.objectives.map(objective => {
              return React.createElement("div", {
                className: "mt-15 activity-data-section",
                key: `${item.id}-${objective}`
              }, React.createElement("div", null, React.createElement("h6", {
                className: "flex-container flex-vertical-center gap-05"
              }, React.createElement(_icons.AppIcon, {
                icon: `points${item[objective].points}`
              }), item[objective].name)), React.createElement("div", null, React.createElement("span", null, item[objective].feedback)));
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
        hash: 2593227741,
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
            } = (0, _context.useDashboardContext)();
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

      /*****************************************************
      INTERNAL MODULE: ./views/assignment/drawer/drawer-chat
      *****************************************************/

      ims.set('./views/assignment/drawer/drawer-chat', {
        hash: 209421501,
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
            } = (0, _context.useDashboardContext)();
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
        hash: 1253370653,
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
            } = (0, _context.useDashboardContext)();
            const {
              user: student
            } = participant;
            const [items, setItems] = React.useState(participant.activities.items);
            const [fetching, setFetching] = React.useState(false);
            const [ready, setReady] = React.useState(tracking.ready);
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            globalThis.student = participant;
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
            return React.createElement("div", {
              className: cls
            }, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("div", null, React.createElement("h2", null, student.name), React.createElement("div", {
              className: "user__credits"
            }, texts.interactions, ": ", tracking.credits.consumed, " ", texts.of, " ", tracking.credits.total)), React.createElement("div", null, React.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle",
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
            })));
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
        hash: 2733682910,
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
            }, participantActivity.counters.total), _react.default.createElement("span", {
              className: "activity-item-divider"
            }, "/"), _react.default.createElement("span", {
              className: "activity-item-counter"
            }, participantActivity.counters.correct)) : null))));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/spoken
      *******************************************************/

      ims.set('./views/assignment/item/activity/spoken', {
        hash: 1431740573,
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
              items: participantActivity?.icons,
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
        hash: 2745601695,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDashboardContext = exports.DashboardContext = void 0;
          var _react = require("react");
          const DashboardContext = exports.DashboardContext = _react.default.createContext({});
          const useDashboardContext = () => _react.default.useContext(DashboardContext);
          exports.useDashboardContext = useDashboardContext;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/drawer/aside-drawer
      *******************************************/

      ims.set('./views/drawer/aside-drawer', {
        hash: 3021782879,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideDrawer = AsideDrawer;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _drawer = require("pragmate-ui/drawer");
          var _drawer2 = require("../assignment/drawer");
          var _context = require("../context");
          var _wall = require("./wall");
          var _drawerChat = require("../assignment/drawer/drawer-chat");
          var _routing = require("@beyond-js/kernel/routing");
          function AsideDrawer() {
            const {
              showDrawer,
              store,
              setShowDrawer
            } = (0, _context.useDashboardContext)();
            _react.default.useEffect(() => {
              if (!showDrawer?.view) {
                _routing.routing.replaceState({}, null, `?`);
                return;
              }
              _routing.routing.pushState(`?drawer=${showDrawer.view}`);
            }, [showDrawer.view]);
            if (showDrawer.show === false) return;
            return _react.default.createElement(_drawer.Drawer, {
              className: "ds-drawer",
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
            }));
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
        hash: 2628510498,
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
            } = (0, _context.useDashboardContext)();
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
        hash: 1854130627,
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
        hash: 2423261707,
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
              src: photoUrl
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
        hash: 2945072150,
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
              if (showDrawer.show === false) {
                container.classList.remove('overflow-hidden');
                return;
              }
              container.classList.add('overflow-hidden');
            }, [ref?.current, showDrawer?.show]);
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
              showDrawer,
              setShowDrawer,
              view,
              setView
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
            }), _react.default.createElement(_asideDrawer.AsideDrawer, null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJQYXJ0aWNpcGFudEFjdGl2aXR5IiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlBhcnRpY2lwYW50QWN0aXZpdGllcyIsInBhcmVudCIsInZhbHVlcyIsImFjdGl2aXR5IiwiZ2V0QWN0aXZpdHlJbnN0YW5jZSIsInVwZGF0ZSIsImJpbmQiLCJPYmplY3RzIiwic3Bva2VuIiwiUGFydGljaXBhbnRTcG9rZW5BY3Rpdml0eSIsImRldGF1bHQiLCJQYXJ0aWNpcGFudE11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJBY3Rpdml0eSIsIml0ZW0iLCJpY29ucyIsInRvdGFsUG9pbnRzIiwicG9pbnRzIiwiX2NvbGxlY3Rpb24iLCJfdHJhY2tpbmciLCJfcHJvdmlkZXIiLCJQYXJ0aWNpcGFudCIsInRyYWNraW5nIiwiYXNzaWdubWVudElkIiwicHJvdmlkZXIiLCJQYXJ0aWNpcGFudFByb3ZpZGVyIiwiVHJhY2tpbmciLCJ1c2VySWQiLCJjaGF0IiwiX3BhcnRpY2lwYW50IiwiYXJyYXlJdGVtcyIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJwcm9jZXNzTG9hZCIsIlByb3ZpZGVyIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbDIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfY29yZSIsImlzU3RvcmUiLCJhY3Rpdml0eVNlbGVjdGVkIiwiY3VycmVudFRyYWNraW5nIiwic2Vzc2lvbiIsInZpZXciLCJhc3NpZ25tZW50IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJzcGVjaWZpZXIiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwidXNlcnMiLCJ0cmFja2luZ3MiLCJ0cmlnZ2VyRXZlbnQiLCJvbiIsInNldE1vZGVsIiwiZmV0Y2hpbmciLCJtIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJsb2FkVXNlclRyYWNraW5nIiwicmVmcmVzaCIsInRyaWdnZXIiLCJyZWZyZXNoRHJhd2VyIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiY2hhdE1vZGVsIiwibG9hZEFsbCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwicmVmcmVzaFRyYWNraW5nIiwic2VsZWN0QWN0aXZpdHkiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfdWkiLCJfY29udGV4dCIsIkVtcHR5TWF0ZXJpYWwiLCJtZXNzYWdlIiwidXNlRGFzaGJvYXJkQ29udGV4dCIsImVtcHR5IiwiRW1wdHlDYXJkIiwiY2xhc3NOYW1lIiwiX2ljb25zIiwiX2xpc3QiLCJfZW1wdHkiLCJfaG9va3MiLCJfY29tcG9uZW50cyIsIkFjdGl2aXR5VmlldyIsInNldFZpZXciLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInVzZVN0YXRlIiwib25DbG9zZSIsInVuZGVmaW5lZCIsInVzZUJpbmRlciIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsInRydWUiLCJMaXN0IiwiY29udHJvbCIsIkFjdGl2aXR5UGFydGljaXBhbnQiLCJmYWxzZSIsIkVtcHR5IiwiX2ltYWdlIiwiX2NvbGxhcHNpYmxlIiwiX29iamVjdGl2ZSIsIl9vYmplY3RpdmVJY29uIiwiQ2hhdEFjdGl2aXR5UGFydGljaXBhbnQiLCJzZXRTaG93RHJhd2VyIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJhbmFseXNpcyIsIm9uVG9nZ2xlIiwid2FybiIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsInRvZ2dsZWFibGUiLCJvcGVuIiwiQ29sbGFwc2libGVIZWFkZXIiLCJJbWFnZSIsInNyYyIsIkxpbmsiLCJocmVmIiwibm9TdW1tYXJ5IiwiQWN0aXZpdHlPYmplY3RpdmVTdGF0dXNJY29uIiwiQ29sbGFwc2libGVDb250ZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZSIsIl9jaGF0IiwiU3Bva2VuQWN0aXZpdHlQYXJ0aWNpcGFudCIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlQYXJ0aWNpcGFudCIsIl90b29sdGlwIiwibXVsdGlwbGVDaG9pY2UiLCJhY3Rpdml0eUlkIiwicGFydGljaXBhbnRBY3Rpdml0eSIsIkljb25TdGF0ZSIsIlRvb2x0aXAiLCJjb250ZW50IiwiY29ycmVjdCIsImNvdW50ZXJzIiwid3JvbmciLCJSZWFjdCIsImljb25OYW1lcyIsInBlbmRpbmciLCJjb21wbGV0ZWQiLCJvdXRzdGFuZGluZyIsIm9iamVjdGl2ZXNTdGF0dXMiLCJBcHBJY29uIiwibm9BbmFseXNpcyIsIl9jaGF0Q29tcG9uZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRUYWIiLCJyZWYiLCJ1c2VSZWYiLCJ0QWN0aXZpdHkiLCJjaGF0SWQiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkVtcHR5Q2hhdCIsInNsaWNlIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsIkFnZW50c0NoYXRQYW5lbCIsIl90YWJzIiwiX2RyYXdlckFsZXJ0cyIsIl9vYmplY3RpdmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRCb2R5Iiwic2V0TWVzc2FnZXMiLCJ0cmlnZ2VyQ2hhbmdlIiwib2ZmIiwidGFicyIsIlRhYiIsImtleSIsImludGVyYWN0aW9ucyIsImFsZXJ0cyIsIm9wZW5DaGF0IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlPYmplY3RpdmVzIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwiRHJhd2VyQWxlcnQiLCJwcm9ncmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eSIsImluZGV4IiwiaGFzUGFydGljaXBhdGVkIiwiY2xzRHJhd2VyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiSUNPTlMiLCJ0eXBlcyIsImRlYmF0ZSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZUJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5U3Bva2VuQm9keSIsInBhcnRpY2lwYXRpb24iLCJIdG1sV3JhcHBlciIsImRldGFpbCIsImF1ZGlvVXJsIiwib3V0cHV0IiwiZmVlZGJhY2siLCJhdWRpbyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiX2ljb25zMiIsIl9jaGF0VGFiIiwiX3JvdXRpbmciLCJTdHVkZW50RHJhd2VyQ2hhdCIsInN0dWRlbnQiLCJzZXRJdGVtcyIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJjbHMiLCJvblJlZnJlc2giLCJvbkJhY2siLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiQXBwSWNvbkJ1dHRvbiIsImNyZWRpdHMiLCJjb25zdW1lZCIsIm9mIiwidG90YWwiLCJEcmF3ZXIiLCJTdHVkZW50QXNzaWdubWVudFN1bW1hcnkiLCJDbG9zZUJ1dHRvbiIsIkdlbmVyYWxWaWV3IiwiX2xhYmVsIiwiX2FjdGl2aXR5SWNvbiIsIl9zdGF0dXMiLCJNb2R1bGVBY3Rpdml0eUNoYXQiLCJzdWJ0eXBlIiwiQWN0aXZpdHlJY29uIiwiTW9kdWxlQWN0aXZpdHlNZXNzYWdlcyIsIk1vZHVsZUFjdGl2aXR5U3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlEZXRhaWxzIiwiSWNvbiIsIk1vZHVsZUFjdGl2aXR5IiwiTW9kdWxlQWN0aXZpdHlTcG9rZW4iLCJNb2R1bGVBY3Rpdml0eU11bHRpcGxlQ2hvaWNlIiwibGFiZWwiLCJkb25lIiwidG90YWxNZXNzYWdlcyIsImpvaW4iLCJtZXNzYWdlQ291bnRlciIsImhhc0FsZXJ0cyIsIkljb25JdGVtIiwicGFydGljaXBhbnRVcmkiLCJvcGVuRHJhd2VyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbHQiLCJfaWNvbkJveCIsIkljb25Cb3giLCJhcyIsIkRyYXdlckFsZXJ0SXRlbSIsInNldE9wZW4iLCJpdGVyYXRpb24iLCJhc3Npc3RhbnQiLCJBUFAiLCJBUFBfTkFNRSIsIlBhZ2VDb250YWluZXIiLCJjbGFzc3dvcmtzIiwiRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2RyYXdlciIsIl9kcmF3ZXIyIiwiX3dhbGwiLCJfZHJhd2VyQ2hhdCIsIkFzaWRlRHJhd2VyIiwic2hvd0RyYXdlciIsInB1c2hTdGF0ZSIsInBvc2l0aW9uIiwid2FsbCIsIldhbGwiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiX3VzZXJEYXRhIiwiSGVhZGVyIiwib3duZXIiLCJvbkNsYXNzcm9vbUNsaWNrIiwiRW50aXR5SW1hZ2UiLCJVc2VyRGF0YSIsImFjdGlvbnMiLCJfZm9ybSIsIl9hY3Rpdml0eUZpbHRlciIsIlN0dWRlbnRzSGVhZGVyIiwibGlzdENscyIsInJlZnJlc2hpbmciLCJzZXRSZWZyZXNoaW5nIiwib25GaWx0ZXIiLCJjdXJyZW50VGFyZ2V0IiwibGlzdCIsInN0dWRlbnRzIiwiSW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwic3R1ZGVudEhlYWRlciIsImRpc2FibGVkIiwiXyIsIl9hc2lkZURyYXdlciIsIl9oZWFkZXIiLCJfZ2VuZXJhbCIsIl9zdHVkZW50SGVhZGVyIiwiX3ZpZXciLCJzZXRUb3RhbFBhcnRpY2lwYW50cyIsInN0YXRlIiwic2V0U3RhdGUiLCJnZXRQcm9wZXJ0aWVzIiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsImFkZCIsIlBhZ2VMb2FkZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tb2RlbC9EQVRBLnRzIiwiL3RzL21vZGVsL2FjdGl2aXRpZXMvYWN0aXZpdGllcy50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXR5LnRzIiwiL3RzL21vZGVsL2luZGV4LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL2FjdGl2aXR5LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL3Nwb2tlbi50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvcGFydGljaXBhbnQudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50cy50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvcHJvdmlkZXIudHMiLCIvdHMvbW9kZWwvcHJvdmlkZXIudHMiLCIvdHlwZXMudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvNDA0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L2NoYXQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L211bHRpcGxlLWNob2ljZS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9jaGF0LXRhYi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlcy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9jaGF0LXRhYi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZHJhd2VyLWNoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9nZW5lcmFsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2RldGFpbHMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2xhYmVsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvc3RhdHVzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWN0aXZpdHktaWNvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lbXB0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pY29uLWJveC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9vYmplY3RpdmUtaWNvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kcmF3ZXIvYXNpZGUtZHJhd2VyLnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvY29udGVudC50c3giLCIvdHMvdmlld3MvZHJhd2VyL3dhbGwudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FjdGl2aXR5LWZpbHRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvc3R1ZGVudC1oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci91c2VyLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSFIsZ0JBQUEsQ0FBQVMsWUFBWSxDQUFDQyxhQUFhLEVBQUU7Y0FFNUIsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxD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