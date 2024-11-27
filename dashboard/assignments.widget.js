System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.10/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/reactive@1.1.12/entities", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@aimpact/ailearn-app@0.2.10/components/ui", "@aimpact/ailearn-app@0.2.10/components/navbar-header.code", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.2.10/config", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/list", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/tooltip", "@aimpact/ailearn-app@0.2.10/components/icons", "pragmate-ui@1.0.0-beta.6/collapsible", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/drawer", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/perfect-scrollbar", "pragmate-ui@1.0.0-beta.6/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, dependency_32, dependency_33, dependency_34, dependency_35, bimport, __Bundle, __pkg, ims, Controller, ParticipantProvider, ActivityView, ChatActivityParticipant, MultipleChoiceActivityParticipant, SpokenActivityParticipant, EmptyCard, GeneralView, ActivityIcon, DrawerAlert, DrawerAlertItem, IconBox, View, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta6Modal) {
      dependency_31 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Drawer) {
      dependency_32 = _pragmateUi100Beta6Drawer;
    }, function (_beyondJsKernel019Routing) {
      dependency_33 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta6PerfectScrollbar) {
      dependency_34 = _pragmateUi100Beta6PerfectScrollbar;
    }, function (_pragmateUi100Beta6Form) {
      dependency_35 = _pragmateUi100Beta6Form;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_5], ['@aimpact/ailearn-sdk/reactive/model', dependency_6], ['@aimpact/http-suite/api', dependency_7], ['@aimpact/ailearn-sdk/config', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-sdk/tracking', dependency_10], ['@beyond-js/reactive/entities', dependency_11], ['@aimpact/ailearn-sdk/core', dependency_12], ['@beyond-js/kernel/texts', dependency_13], ['@beyond-js/kernel/core', dependency_14], ['react', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_17], ['pragmate-ui/icons', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['pragmate-ui/empty', dependency_20], ['pragmate-ui/list', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['pragmate-ui/components', dependency_23], ['pragmate-ui/image', dependency_24], ['pragmate-ui/tooltip', dependency_25], ['@aimpact/ailearn-app/components/icons', dependency_26], ['pragmate-ui/collapsible', dependency_27], ['@aimpact/chat-sdk/chat-component.code', dependency_28], ['@aimpact/chat-sdk/widgets/markdown', dependency_29], ['pragmate-ui/tabs', dependency_30], ['pragmate-ui/modal', dependency_31], ['pragmate-ui/drawer', dependency_32], ['@beyond-js/kernel/routing', dependency_33], ['pragmate-ui/perfect-scrollbar', dependency_34], ['pragmate-ui/form', dependency_35]]);
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
        hash: 989926675,
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
        hash: 4130254650,
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

      /*************************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/multiple-choice/answer
      *************************************************************************/

      ims.set('./views/assignment/drawer/activity/multiple-choice/answer', {
        hash: 1450401753,
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
            } = (0, _context.useDashboardContext)();
            let cls = `option-item`;
            if (index === answer) cls += ` option--selected`;
            if (index === correctAnswer) cls += ` option--correct`;
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
        hash: 2426584573,
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
            } = (0, _context.useDashboardContext)();
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
        hash: 2112850602,
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
            } = (0, _context.useDashboardContext)();
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
        hash: 4033204707,
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

      /********************************************************
      INTERNAL MODULE: ./views/assignment/drawer/confirm-action
      ********************************************************/

      ims.set('./views/assignment/drawer/confirm-action', {
        hash: 250420620,
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
            } = (0, _context.useDashboardContext)();
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
        hash: 2561791242,
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
        hash: 738898076,
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
            } = (0, _context.useDashboardContext)();
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
        hash: 264798545,
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
          var _modal = require("pragmate-ui/modal");
          function AsideDrawer() {
            const {
              texts,
              showDrawer,
              store,
              setShowDrawer
            } = (0, _context.useDashboardContext)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJhZGRDcmVkaXRzIiwidHJhY2tpbmciLCJwb3N0IiwiY3JlZGl0cyIsIlBhcnRpY2lwYW50QWN0aXZpdHkiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiUGFydGljaXBhbnRBY3Rpdml0aWVzIiwicGFyZW50IiwidmFsdWVzIiwiYWN0aXZpdHkiLCJnZXRBY3Rpdml0eUluc3RhbmNlIiwidXBkYXRlIiwiYmluZCIsIk9iamVjdHMiLCJzcG9rZW4iLCJQYXJ0aWNpcGFudFNwb2tlbkFjdGl2aXR5IiwiZGV0YXVsdCIsIlBhcnRpY2lwYW50TXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsIkFjdGl2aXR5IiwiaXRlbSIsInF1ZXN0aW9ucyIsIkpTT04iLCJwYXJzZSIsImFzc2Vzc21lbnQiLCJlIiwiY29uc29sZSIsIndhcm4iLCJwYXJ0aWNpcGF0aW9uRGF0YSIsInF1ZXN0aW9uIiwiaW5kZXgiLCJhbnN3ZXIiLCJyZXNwb25zZXMiLCJhY2N1cmFjeSIsImljb25zIiwia2V5IiwidG90YWxQb2ludHMiLCJwb2ludHMiLCJhdHRlbXB0cyIsIm9iamVjdGl2ZXNLZXlzIiwiX2NvbGxlY3Rpb24iLCJfdHJhY2tpbmciLCJfcHJvdmlkZXIiLCJQYXJ0aWNpcGFudCIsImFzc2lnbm1lbnRJZCIsInByb3ZpZGVyIiwiUGFydGljaXBhbnRQcm92aWRlciIsIlRyYWNraW5nIiwidXNlcklkIiwiY2hhdCIsIl9wYXJ0aWNpcGFudCIsImFycmF5SXRlbXMiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwicHJvY2Vzc0xvYWQiLCJQcm92aWRlciIsInRyYWNraW5nSWQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsMiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9jb3JlIiwiaXNTdG9yZSIsImFjdGl2aXR5U2VsZWN0ZWQiLCJjdXJyZW50VHJhY2tpbmciLCJzZXNzaW9uIiwidmlldyIsImFzc2lnbm1lbnQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsInNwZWNpZmllciIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ1c2VycyIsInRyYWNraW5ncyIsInRyaWdnZXJFdmVudCIsIm9uIiwic2V0TW9kZWwiLCJmZXRjaGluZyIsIm0iLCJsb2ciLCJsb2FkVXNlclRyYWNraW5nIiwicmVmcmVzaCIsInRyaWdnZXIiLCJyZWZyZXNoRHJhd2VyIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiY2hhdE1vZGVsIiwibG9hZEFsbCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwicmVmcmVzaFRyYWNraW5nIiwic2VsZWN0QWN0aXZpdHkiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfdWkiLCJfY29udGV4dCIsIkVtcHR5TWF0ZXJpYWwiLCJtZXNzYWdlIiwidXNlRGFzaGJvYXJkQ29udGV4dCIsImVtcHR5IiwiRW1wdHlDYXJkIiwiY2xhc3NOYW1lIiwiX2ljb25zIiwiX2xpc3QiLCJfZW1wdHkiLCJfaG9va3MiLCJfY29tcG9uZW50cyIsIkFjdGl2aXR5VmlldyIsInNldFZpZXciLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInVzZVN0YXRlIiwib25DbG9zZSIsInVuZGVmaW5lZCIsInVzZUJpbmRlciIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsInRydWUiLCJMaXN0IiwiY29udHJvbCIsIkFjdGl2aXR5UGFydGljaXBhbnQiLCJmYWxzZSIsIkVtcHR5IiwiX2ltYWdlIiwiX2NvbGxhcHNpYmxlIiwiX29iamVjdGl2ZSIsIl9vYmplY3RpdmVJY29uIiwiQ2hhdEFjdGl2aXR5UGFydGljaXBhbnQiLCJzZXRTaG93RHJhd2VyIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJhbmFseXNpcyIsIm9uVG9nZ2xlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwidG9nZ2xlYWJsZSIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkltYWdlIiwic3JjIiwiTGluayIsImhyZWYiLCJub1N1bW1hcnkiLCJBY3Rpdml0eU9iamVjdGl2ZVN0YXR1c0ljb24iLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiX2NoYXQiLCJTcG9rZW5BY3Rpdml0eVBhcnRpY2lwYW50IiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVBhcnRpY2lwYW50IiwiX3Rvb2x0aXAiLCJtdWx0aXBsZUNob2ljZSIsImFjdGl2aXR5SWQiLCJwYXJ0aWNpcGFudEFjdGl2aXR5IiwiSWNvblN0YXRlIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJjb3JyZWN0IiwiY291bnRlcnMiLCJ3cm9uZyIsIlJlYWN0IiwiaWNvbk5hbWVzIiwicGVuZGluZyIsImNvbXBsZXRlZCIsIm91dHN0YW5kaW5nIiwib2JqZWN0aXZlc1N0YXR1cyIsIkFwcEljb24iLCJub0FuYWx5c2lzIiwiX2NoYXRDb21wb25lbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdFRhYiIsInJlZiIsInVzZVJlZiIsInRBY3Rpdml0eSIsImNoYXRJZCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiRW1wdHlDaGF0Iiwic2xpY2UiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiQWdlbnRzQ2hhdFBhbmVsIiwiX3RhYnMiLCJfZHJhd2VyQWxlcnRzIiwiX29iamVjdGl2ZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdEJvZHkiLCJzZXRNZXNzYWdlcyIsInRyaWdnZXJDaGFuZ2UiLCJvZmYiLCJ0YWJzIiwiVGFiIiwiaW50ZXJhY3Rpb25zIiwiYWxlcnRzIiwib3BlbkNoYXQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZXMiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJEcmF3ZXJBbGVydCIsInByb2dyZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5IiwiaGFzUGFydGljaXBhdGVkIiwiY2xzRHJhd2VyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiSUNPTlMiLCJ0eXBlcyIsImRlYmF0ZSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZUJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5U3Bva2VuQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZVF1ZXN0aW9uT3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJjbHMiLCJfcXVlc3Rpb25zIiwicGFydGljaXBhdGlvbiIsImRldGFpbCIsInRvdGFsIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlUXVlc3Rpb25zIiwiX2Fuc3dlciIsImF1ZGlvVXJsIiwib3V0cHV0IiwiZmVlZGJhY2siLCJhdWRpbyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsImNhbGxiYWNrIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiYWN0aW9uIiwiQ29uZmlybU1vZGFsIiwib25DYW5jZWwiLCJfaWNvbnMyIiwiX2NoYXRUYWIiLCJfcm91dGluZyIsIlN0dWRlbnREcmF3ZXJDaGF0Iiwic3R1ZGVudCIsInNldEl0ZW1zIiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsIm9uUmVmcmVzaCIsIm9uQmFjayIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJBcHBJY29uQnV0dG9uIiwiY29uc3VtZWQiLCJvZiIsIkRyYXdlciIsIlN0dWRlbnRBc3NpZ25tZW50U3VtbWFyeSIsInBlcmNlbnRhZ2VBdmFpbGFibGUiLCJDbG9zZUJ1dHRvbiIsIkdlbmVyYWxWaWV3IiwiX2xhYmVsIiwiX2FjdGl2aXR5SWNvbiIsIl9zdGF0dXMiLCJNb2R1bGVBY3Rpdml0eUNoYXQiLCJzdWJ0eXBlIiwiQWN0aXZpdHlJY29uIiwiTW9kdWxlQWN0aXZpdHlNZXNzYWdlcyIsIk1vZHVsZUFjdGl2aXR5U3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlEZXRhaWxzIiwiSWNvbiIsIk1vZHVsZUFjdGl2aXR5IiwiTW9kdWxlQWN0aXZpdHlTcG9rZW4iLCJNb2R1bGVBY3Rpdml0eU11bHRpcGxlQ2hvaWNlIiwibGFiZWwiLCJkb25lIiwidG90YWxNZXNzYWdlcyIsImpvaW4iLCJtZXNzYWdlQ291bnRlciIsImhhc0FsZXJ0cyIsIkljb25JdGVtIiwicGFydGljaXBhbnRVcmkiLCJvcGVuRHJhd2VyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFsdCIsIl9pY29uQm94IiwiSWNvbkJveCIsImFzIiwiRHJhd2VyQWxlcnRJdGVtIiwiaXRlcmF0aW9uIiwiYXNzaXN0YW50IiwiQVBQIiwiQVBQX05BTUUiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3N3b3JrcyIsIkRhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9kcmF3ZXIiLCJfZHJhd2VyMiIsIl93YWxsIiwiX2RyYXdlckNoYXQiLCJBc2lkZURyYXdlciIsInNob3dEcmF3ZXIiLCJwdXNoU3RhdGUiLCJwb3NpdGlvbiIsIndhbGwiLCJXYWxsIiwiQWN0aXZpdHlGaWx0ZXIiLCJoYW5kbGVDbGljayIsIl91c2VyRGF0YSIsIkhlYWRlciIsIm93bmVyIiwib25DbGFzc3Jvb21DbGljayIsIkVudGl0eUltYWdlIiwiVXNlckRhdGEiLCJhY3Rpb25zIiwiX2Zvcm0iLCJfYWN0aXZpdHlGaWx0ZXIiLCJTdHVkZW50c0hlYWRlciIsImxpc3RDbHMiLCJyZWZyZXNoaW5nIiwic2V0UmVmcmVzaGluZyIsIm9uRmlsdGVyIiwiY3VycmVudFRhcmdldCIsImxpc3QiLCJzdHVkZW50cyIsIklucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsInN0dWRlbnRIZWFkZXIiLCJkaXNhYmxlZCIsIl8iLCJfYXNpZGVEcmF3ZXIiLCJfaGVhZGVyIiwiX2dlbmVyYWwiLCJfc3R1ZGVudEhlYWRlciIsIl92aWV3Iiwic2V0VG90YWxQYXJ0aWNpcGFudHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiZ2V0UHJvcGVydGllcyIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiLCJhZGQiLCJQYWdlTG9hZGVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvREFUQS50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXRpZXMudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9zcG9rZW4udHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudHMudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3Byb3ZpZGVyLnRzIiwiL3RzL21vZGVsL3Byb3ZpZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvYW5zd2VyLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9kcmF3ZXItY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2dlbmVyYWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvZGV0YWlscy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hY3Rpdml0eS1pY29uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2ljb24tYm94LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29iamVjdGl2ZS1pY29uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RyYXdlci9hc2lkZS1kcmF3ZXIudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9jb250ZW50LnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvd2FsbC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYWN0aXZpdHktZmlsdGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9zdHVkZW50LWhlYWRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL3VzZXItZGF0YS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxs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O1lBQ3ZFLElBQUl6TCxLQUFLLENBQUN3RyxLQUFLLENBQUNqQixpQkFBaUIsS0FBSyxDQUFDLEVBQUUsT0FBTzRILE1BQUEsQ0FBQWxILE9BQUEsQ0FBQXFILGFBQUEsQ0FBQ1ksTUFBQSxDQUFBc0IsS0FBSztjQUFDeFAsS0FBSyxFQUFFQSxLQUFLO2NBQUV5TCxLQUFLLEVBQUVBO1lBQUssRUFBSTtZQUVyRixNQUFNWCxLQUFLLEdBQUc7Y0FBRVcsS0FBSztjQUFFakYsS0FBSyxFQUFFeEcsS0FBSyxDQUFDd0csS0FBSztjQUFFeEcsS0FBSztjQUFFNmEsVUFBVTtjQUFFL0ssYUFBYTtjQUFFdkUsSUFBSTtjQUFFK0M7WUFBTyxDQUFFO1lBRTVGLE1BQU1nSCxHQUFHLEdBQUcsc0JBQXNCbEosUUFBUSxHQUFHLGNBQWMsR0FBRyxFQUFFLEVBQUU7WUFDbEUsT0FDQ2UsTUFBQSxDQUFBbEgsT0FBQSxDQUFBcUgsYUFBQTtjQUFLbUYsR0FBRyxFQUFFQTtZQUFHLEdBQ1p0RixNQUFBLENBQUFsSCxPQUFBLENBQUFxSCxhQUFBLENBQUNFLEdBQUEsQ0FBQTJNLGFBQWE7Y0FBQ3BNLFNBQVMsRUFBRXVIO1lBQUcsR0FDNUJuSSxNQUFBLENBQUFsSCxPQUFBLENBQUFxSCxhQUFBLENBQUNHLFFBQUEsQ0FBQTRNLGdCQUFnQixDQUFDMVAsUUFBUTtjQUFDRyxLQUFLLEVBQUVBO1lBQUssR0FDdENxQyxNQUFBLENBQUFsSCxPQUFBLENBQUFxSCxhQUFBLENBQUN1UCxPQUFBLENBQUF4QixNQUFNLE9BQUcsRUFDVmxPLE1BQUEsQ0FBQWxILE9BQUEsQ0FBQXFILGFBQUEsQ0FBQ3lQLGNBQUEsQ0FBQWxCLGNBQWMsT0FBRyxFQUNsQjFPLE1BQUEsQ0FBQWxILE9BQUEsQ0FBQXFILGFBQUEsQ0FBQ2MsV0FBQSxDQUFBVyxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRSxDQUFDLENBQUNoUCxLQUFLLENBQUNvTCxnQkFBZ0I7Y0FDbkM2RCxPQUFPO2NBQ1BDLE9BQU8sRUFBRTtnQkFDUkssS0FBSyxFQUFFcEMsTUFBQSxDQUFBbEgsT0FBQSxDQUFBcUgsYUFBQSxDQUFDd1AsUUFBQSxDQUFBOUUsV0FBVyxPQUFHO2dCQUN0QjdJLElBQUksRUFBRWhDLE1BQUEsQ0FBQWxILE9BQUEsQ0FBQXFILGFBQUEsQ0FBQzBQLEtBQUEsQ0FBQTNPLFlBQVk7O1lBQ25CLEVBQ0EsRUFDRmxCLE1BQUEsQ0FBQWxILE9BQUEsQ0FBQXFILGFBQUEsQ0FBQ3NQLFlBQUEsQ0FBQWhDLFdBQVcsT0FBRyxDQUNZLENBQ2IsQ0FDWDtVQUVSIiwiaWdub3JlTGlzdCI6W119System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.10/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/reactive@1.1.12/entities", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@aimpact/ailearn-app@0.2.10/components/ui", "@aimpact/ailearn-app@0.2.10/components/navbar-header.code", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.2.10/config", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/list", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/tooltip", "@aimpact/ailearn-app@0.2.10/components/icons", "pragmate-ui@1.0.0-beta.6/collapsible", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/drawer", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/perfect-scrollbar", "pragmate-ui@1.0.0-beta.6/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, dependency_32, dependency_33, dependency_34, dependency_35, bimport, __Bundle, __pkg, ims, Controller, ParticipantProvider, ActivityView, ChatActivityParticipant, MultipleChoiceActivityParticipant, SpokenActivityParticipant, EmptyCard, GeneralView, ActivityIcon, DrawerAlert, DrawerAlertItem, IconBox, View, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta6Modal) {
      dependency_31 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Drawer) {
      dependency_32 = _pragmateUi100Beta6Drawer;
    }, function (_beyondJsKernel019Routing) {
      dependency_33 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta6PerfectScrollbar) {
      dependency_34 = _pragmateUi100Beta6PerfectScrollbar;
    }, function (_pragmateUi100Beta6Form) {
      dependency_35 = _pragmateUi100Beta6Form;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_5], ['@aimpact/ailearn-sdk/reactive/model', dependency_6], ['@aimpact/http-suite/api', dependency_7], ['@aimpact/ailearn-sdk/config', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-sdk/tracking', dependency_10], ['@beyond-js/reactive/entities', dependency_11], ['@aimpact/ailearn-sdk/core', dependency_12], ['@beyond-js/kernel/texts', dependency_13], ['@beyond-js/kernel/core', dependency_14], ['react', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_17], ['pragmate-ui/icons', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['pragmate-ui/empty', dependency_20], ['pragmate-ui/list', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['pragmate-ui/components', dependency_23], ['pragmate-ui/image', dependency_24], ['pragmate-ui/tooltip', dependency_25], ['@aimpact/ailearn-app/components/icons', dependency_26], ['pragmate-ui/collapsible', dependency_27], ['@aimpact/chat-sdk/chat-component.code', dependency_28], ['@aimpact/chat-sdk/widgets/markdown', dependency_29], ['pragmate-ui/tabs', dependency_30], ['pragmate-ui/modal', dependency_31], ['pragmate-ui/drawer', dependency_32], ['@beyond-js/kernel/routing', dependency_33], ['pragmate-ui/perfect-scrollbar', dependency_34], ['pragmate-ui/form', dependency_35]]);
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
        hash: 989926675,
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
        hash: 4130254650,
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

      /*************************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/multiple-choice/answer
      *************************************************************************/

      ims.set('./views/assignment/drawer/activity/multiple-choice/answer', {
        hash: 1450401753,
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
            } = (0, _context.useDashboardContext)();
            let cls = `option-item`;
            if (index === answer) cls += ` option--selected`;
            if (index === correctAnswer) cls += ` option--correct`;
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
        hash: 2426584573,
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
            } = (0, _context.useDashboardContext)();
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
        hash: 2112850602,
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
            } = (0, _context.useDashboardContext)();
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
        hash: 4033204707,
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

      /********************************************************
      INTERNAL MODULE: ./views/assignment/drawer/confirm-action
      ********************************************************/

      ims.set('./views/assignment/drawer/confirm-action', {
        hash: 250420620,
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
            } = (0, _context.useDashboardContext)();
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
        hash: 2561791242,
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
        hash: 738898076,
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
            } = (0, _context.useDashboardContext)();
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
        hash: 264798545,
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
          var _modal = require("pragmate-ui/modal");
          function AsideDrawer() {
            const {
              texts,
              showDrawer,
              store,
              setShowDrawer
            } = (0, _context.useDashboardContext)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiZGF0YSIsInN0YXR1cyIsImFjdGl2aXRpZXMiLCJpdGVtcyIsImR1cmF0aW9uIiwibW9kdWxlIiwiY3JlYXRvciIsInBob3RvVXJsIiwibmFtZSIsImlkIiwiYXVkaWVuY2UiLCJhaSIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInR5cGUiLCJwaWN0dXJlIiwib2JqZWN0aXZlIiwicHVibGljIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsInJlc291cmNlcyIsInNwZWNzIiwiaW5zdHJ1Y3Rpb25zIiwicm9sZSIsIm9iamVjdGl2ZXMiLCJtYXRlcmlhbHMiLCJzeW50aGVzaXMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJzdWJqZWN0Iiwib3JkZXIiLCJjbGFzc3Jvb20iLCJwYXJ0aWNpcGFudHMiLCJ1c2VyIiwibWVzc2FnZXMiLCJjb3VudCIsInByb2dyZXNzIiwic3VtbWFyeSIsImljb24iLCJ1SlZ4UmRJanJHTWdPWW5URnNFS2c5VUZ4MFoyIiwiX2FjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXRpZXMiLCJtYXAiLCJNYXAiLCJkYXNoYm9hcmQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJpbnN0YW5jZSIsIkFzc2lnbm1lbnRBY3Rpdml0eSIsInNldCIsInB1c2giLCJoYXMiLCJfaXRlbSIsIkl0ZW0iLCJwYXJ0aWNpcGFudHNNYXAiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwiYWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImdldFBhcnRpY2lwYW50IiwiaGFzUGFydGljaXBhbnQiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX3BhcnRpY2lwYW50cyIsIl9hY3Rpdml0aWVzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImVycm9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ0b3RhbFNwb2tlbiIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIlBhcnRpY2lwYW50cyIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInRva2VuIiwicmVzcG9uc2UiLCJFcnJvciIsInRleHQiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJhZGRDcmVkaXRzIiwidHJhY2tpbmciLCJwb3N0IiwiY3JlZGl0cyIsIlBhcnRpY2lwYW50QWN0aXZpdHkiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiUGFydGljaXBhbnRBY3Rpdml0aWVzIiwicGFyZW50IiwidmFsdWVzIiwiYWN0aXZpdHkiLCJnZXRBY3Rpdml0eUluc3RhbmNlIiwidXBkYXRlIiwiYmluZCIsIk9iamVjdHMiLCJzcG9rZW4iLCJQYXJ0aWNpcGFudFNwb2tlbkFjdGl2aXR5IiwiZGV0YXVsdCIsIlBhcnRpY2lwYW50TXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsIkFjdGl2aXR5IiwiaXRlbSIsInF1ZXN0aW9ucyIsIkpTT04iLCJwYXJzZSIsImFzc2Vzc21lbnQiLCJlIiwiY29uc29sZSIsIndhcm4iLCJwYXJ0aWNpcGF0aW9uRGF0YSIsInF1ZXN0aW9uIiwiaW5kZXgiLCJhbnN3ZXIiLCJyZXNwb25zZXMiLCJhY2N1cmFjeSIsImljb25zIiwia2V5IiwidG90YWxQb2ludHMiLCJwb2ludHMiLCJhdHRlbXB0cyIsIm9iamVjdGl2ZXNLZXlzIiwiX2NvbGxlY3Rpb24iLCJfdHJhY2tpbmciLCJfcHJvdmlkZXIiLCJQYXJ0aWNpcGFudCIsImFzc2lnbm1lbnRJZCIsInByb3ZpZGVyIiwiUGFydGljaXBhbnRQcm92aWRlciIsIlRyYWNraW5nIiwidXNlcklkIiwiY2hhdCIsIl9wYXJ0aWNpcGFudCIsImFycmF5SXRlbXMiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwicHJvY2Vzc0xvYWQiLCJQcm92aWRlciIsInRyYWNraW5nSWQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsMiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9jb3JlIiwiaXNTdG9yZSIsImFjdGl2aXR5U2VsZWN0ZWQiLCJjdXJyZW50VHJhY2tpbmciLCJzZXNzaW9uIiwidmlldyIsImFzc2lnbm1lbnQiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsInNwZWNpZmllciIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ1c2VycyIsInRyYWNraW5ncyIsInRyaWdnZXJFdmVudCIsIm9uIiwic2V0TW9kZWwiLCJmZXRjaGluZyIsIm0iLCJsb2ciLCJsb2FkVXNlclRyYWNraW5nIiwicmVmcmVzaCIsInRyaWdnZXIiLCJyZWZyZXNoRHJhd2VyIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiY2hhdE1vZGVsIiwibG9hZEFsbCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwicmVmcmVzaFRyYWNraW5nIiwic2VsZWN0QWN0aXZpdHkiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfdWkiLCJfY29udGV4dCIsIkVtcHR5TWF0ZXJpYWwiLCJtZXNzYWdlIiwidXNlRGFzaGJvYXJkQ29udGV4dCIsImVtcHR5IiwiRW1wdHlDYXJkIiwiY2xhc3NOYW1lIiwiX2ljb25zIiwiX2xpc3QiLCJfZW1wdHkiLCJfaG9va3MiLCJfY29tcG9uZW50cyIsIkFjdGl2aXR5VmlldyIsInNldFZpZXciLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInVzZVN0YXRlIiwib25DbG9zZSIsInVuZGVmaW5lZCIsInVzZUJpbmRlciIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsInRydWUiLCJMaXN0IiwiY29udHJvbCIsIkFjdGl2aXR5UGFydGljaXBhbnQiLCJmYWxzZSIsIkVtcHR5IiwiX2ltYWdlIiwiX2NvbGxhcHNpYmxlIiwiX29iamVjdGl2ZSIsIl9vYmplY3RpdmVJY29uIiwiQ2hhdEFjdGl2aXR5UGFydGljaXBhbnQiLCJzZXRTaG93RHJhd2VyIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJhbmFseXNpcyIsIm9uVG9nZ2xlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwidG9nZ2xlYWJsZSIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkltYWdlIiwic3JjIiwiTGluayIsImhyZWYiLCJub1N1bW1hcnkiLCJBY3Rpdml0eU9iamVjdGl2ZVN0YXR1c0ljb24iLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiX2NoYXQiLCJTcG9rZW5BY3Rpdml0eVBhcnRpY2lwYW50IiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVBhcnRpY2lwYW50IiwiX3Rvb2x0aXAiLCJtdWx0aXBsZUNob2ljZSIsImFjdGl2aXR5SWQiLCJwYXJ0aWNpcGFudEFjdGl2aXR5IiwiSWNvblN0YXRlIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJjb3JyZWN0IiwiY291bnRlcnMiLCJ3cm9uZyIsIlJlYWN0IiwiaWNvbk5hbWVzIiwicGVuZGluZyIsImNvbXBsZXRlZCIsIm91dHN0YW5kaW5nIiwib2JqZWN0aXZlc1N0YXR1cyIsIkFwcEljb24iLCJub0FuYWx5c2lzIiwiX2NoYXRDb21wb25lbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdFRhYiIsInJlZiIsInVzZVJlZiIsInRBY3Rpdml0eSIsImNoYXRJZCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiRW1wdHlDaGF0Iiwic2xpY2UiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiQWdlbnRzQ2hhdFBhbmVsIiwiX3RhYnMiLCJfZHJhd2VyQWxlcnRzIiwiX29iamVjdGl2ZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdEJvZHkiLCJzZXRNZXNzYWdlcyIsInRyaWdnZXJDaGFuZ2UiLCJvZmYiLCJ0YWJzIiwiVGFiIiwiaW50ZXJhY3Rpb25zIiwiYWxlcnRzIiwib3BlbkNoYXQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZXMiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJEcmF3ZXJBbGVydCIsInByb2dyZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5IiwiaGFzUGFydGljaXBhdGVkIiwiY2xzRHJhd2VyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiSUNPTlMiLCJ0eXBlcyIsImRlYmF0ZSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZUJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5U3Bva2VuQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZVF1ZXN0aW9uT3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJjbHMiLCJfcXVlc3Rpb25zIiwicGFydGljaXBhdGlvbiIsImRldGFpbCIsInRvdGFsIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlUXVlc3Rpb25zIiwiX2Fuc3dlciIsImF1ZGlvVXJsIiwib3V0cHV0IiwiZmVlZGJhY2siLCJhdWRpbyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsImNhbGxiYWNrIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiYWN0aW9uIiwiQ29uZmlybU1vZGFsIiwib25DYW5jZWwiLCJfaWNvbnMyIiwiX2NoYXRUYWIiLCJfcm91dGluZyIsIlN0dWRlbnREcmF3ZXJDaGF0Iiwic3R1ZGVudCIsInNldEl0ZW1zIiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsIm9uUmVmcmVzaCIsIm9uQmFjayIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJBcHBJY29uQnV0dG9uIiwiY29uc3VtZWQiLCJvZiIsIkRyYXdlciIsIlN0dWRlbnRBc3NpZ25tZW50U3VtbWFyeSIsInBlcmNlbnRhZ2VBdmFpbGFibGUiLCJDbG9zZUJ1dHRvbiIsIkdlbmVyYWxWaWV3IiwiX2xhYmVsIiwiX2FjdGl2aXR5SWNvbiIsIl9zdGF0dXMiLCJNb2R1bGVBY3Rpdml0eUNoYXQiLCJzdWJ0eXBlIiwiQWN0aXZpdHlJY29uIiwiTW9kdWxlQWN0aXZpdHlNZXNzYWdlcyIsIk1vZHVsZUFjdGl2aXR5U3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlEZXRhaWxzIiwiSWNvbiIsIk1vZHVsZUFjdGl2aXR5IiwiTW9kdWxlQWN0aXZpdHlTcG9rZW4iLCJNb2R1bGVBY3Rpdml0eU11bHRpcGxlQ2hvaWNlIiwibGFiZWwiLCJkb25lIiwidG90YWxNZXNzYWdlcyIsImpvaW4iLCJtZXNzYWdlQ291bnRlciIsImhhc0FsZXJ0cyIsIkljb25JdGVtIiwicGFydGljaXBhbnRVcmkiLCJvcGVuRHJhd2VyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFsdCIsIl9pY29uQm94IiwiSWNvbkJveCIsImFzIiwiRHJhd2VyQWxlcnRJdGVtIiwiaXRlcmF0aW9uIiwiYXNzaXN0YW50IiwiQVBQIiwiQVBQX05BTUUiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3N3b3JrcyIsIkRhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9kcmF3ZXIiLCJfZHJhd2VyMiIsIl93YWxsIiwiX2RyYXdlckNoYXQiLCJBc2lkZURyYXdlciIsInNob3dEcmF3ZXIiLCJwdXNoU3RhdGUiLCJwb3NpdGlvbiIsIndhbGwiLCJXYWxsIiwiQWN0aXZpdHlGaWx0ZXIiLCJoYW5kbGVDbGljayIsIl91c2VyRGF0YSIsIkhlYWRlciIsIm93bmVyIiwib25DbGFzc3Jvb21DbGljayIsIkVudGl0eUltYWdlIiwiVXNlckRhdGEiLCJhY3Rpb25zIiwiX2Zvcm0iLCJfYWN0aXZpdHlGaWx0ZXIiLCJTdHVkZW50c0hlYWRlciIsImxpc3RDbHMiLCJyZWZyZXNoaW5nIiwic2V0UmVmcmVzaGluZyIsIm9uRmlsdGVyIiwiY3VycmVudFRhcmdldCIsImxpc3QiLCJzdHVkZW50cyIsIklucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsInN0dWRlbnRIZWFkZXIiLCJkaXNhYmxlZCIsIl8iLCJfYXNpZGVEcmF3ZXIiLCJfaGVhZGVyIiwiX2dlbmVyYWwiLCJfc3R1ZGVudEhlYWRlciIsIl92aWV3Iiwic2V0VG90YWxQYXJ0aWNpcGFudHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiZ2V0UHJvcGVydGllcyIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiLCJhZGQiLCJQYWdlTG9hZGVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvREFUQS50cyIsIi90cy9tb2RlbC9hY3Rpdml0aWVzL2FjdGl2aXRpZXMudHMiLCIvdHMvbW9kZWwvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9hY3Rpdml0eS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS50cyIsIi90cy9tb2RlbC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9zcG9rZW4udHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50LnRzIiwiL3RzL21vZGVsL3BhcnRpY2lwYW50cy9wYXJ0aWNpcGFudHMudHMiLCIvdHMvbW9kZWwvcGFydGljaXBhbnRzL3Byb3ZpZGVyLnRzIiwiL3RzL21vZGVsL3Byb3ZpZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvYW5zd2VyLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9kcmF3ZXItY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2dlbmVyYWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvZGV0YWlscy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hY3Rpdml0eS1pY29uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2ljb24tYm94LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29iamVjdGl2ZS1pY29uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RyYXdlci9hc2lkZS1kcmF3ZXIudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9jb250ZW50LnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvd2FsbC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYWN0aXZpdHktZmlsdGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9zdHVkZW50LWhlYWRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL3VzZXItZGF0YS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxs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O1lBQ3ZFLElBQUl6TCxLQUFLLENBQUN3RyxLQUFLLENBQUNqQixpQkFBaUIsS0FBSyxDQUFDLEVBQUUsT0FBTzRILE1BQUEsQ0FBQWxILE9BQUEsQ0FBQXFILGFBQUEsQ0FBQ1ksTUFBQSxDQUFBc0IsS0FBSztjQUFDeFAsS0FBSyxFQUFFQSxLQUFLO2NBQUV5TCxLQUFLLEVBQUVBO1lBQUssRUFBSTtZQUVyRixNQUFNWCxLQUFLLEdBQUc7Y0FBRVcsS0FBSztjQUFFakYsS0FBSyxFQUFFeEcsS0FBSyxDQUFDd0csS0FBSztjQUFFeEcsS0FBSztjQUFFNmEsVUFBVTtjQUFFL0ssYUFBYTtjQUFFdkUsSUFBSTtjQUFFK0M7WUFBTyxDQUFFO1lBRTVGLE1BQU1nSCxHQUFHLEdBQUcsc0JBQXNCbEosUUFBUSxHQUFHLGNBQWMsR0FBRyxFQUFFLEVBQUU7WUFDbEUsT0FDQ2UsTUFBQSxDQUFBbEgsT0FBQSxDQUFBcUgsYUFBQTtjQUFLbUYsR0FBRyxFQUFFQTtZQUFHLEdBQ1p0RixNQUFBLENBQUFsSCxPQUFBLENBQUFxSCxhQUFBLENBQUNFLEdBQUEsQ0FBQTJNLGFBQWE7Y0FBQ3BNLFNBQVMsRUFBRXVIO1lBQUcsR0FDNUJuSSxNQUFBLENBQUFsSCxPQUFBLENBQUFxSCxhQUFBLENBQUNHLFFBQUEsQ0FBQTRNLGdCQUFnQixDQUFDMVAsUUFBUTtjQUFDRyxLQUFLLEVBQUVBO1lBQUssR0FDdENxQyxNQUFBLENBQUFsSCxPQUFBLENBQUFxSCxhQUFBLENBQUN1UCxPQUFBLENBQUF4QixNQUFNLE9BQUcsRUFDVmxPLE1BQUEsQ0FBQWxILE9BQUEsQ0FBQXFILGFBQUEsQ0FBQ3lQLGNBQUEsQ0FBQWxCLGNBQWMsT0FBRyxFQUNsQjFPLE1BQUEsQ0FBQWxILE9BQUEsQ0FBQXFILGFBQUEsQ0FBQ2MsV0FBQSxDQUFBVyxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRSxDQUFDLENBQUNoUCxLQUFLLENBQUNvTCxnQkFBZ0I7Y0FDbkM2RCxPQUFPO2NBQ1BDLE9BQU8sRUFBRTtnQkFDUkssS0FBSyxFQUFFcEMsTUFBQSxDQUFBbEgsT0FBQSxDQUFBcUgsYUFBQSxDQUFDd1AsUUFBQSxDQUFBOUUsV0FBVyxPQUFHO2dCQUN0QjdJLElBQUksRUFBRWhDLE1BQUEsQ0FBQWxILE9BQUEsQ0FBQXFILGFBQUEsQ0FBQzBQLEtBQUEsQ0FBQTNPLFlBQVk7O1lBQ25CLEVBQ0EsRUFDRmxCLE1BQUEsQ0FBQWxILE9BQUEsQ0FBQXFILGFBQUEsQ0FBQ3NQLFlBQUEsQ0FBQWhDLFdBQVcsT0FBRyxDQUNZLENBQ2IsQ0FDWDtVQUVSIiwiaWdub3JlTGlzdCI6W119