System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@beyond-js/reactive@2.1.2/model", "pragmate-ui@1.0.8/components", "react@18.3.1", "pragmate-ui@1.0.8/alert", "@aimpact/ailearn-app@0.7.0/components/module-card", "@beyond-js/react-18-widgets@1.1.8/hooks", "@aimpact/ailearn-app@0.7.0/components/icons", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/toast", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/list", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/image", "@beyond-js/kernel@0.1.14/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_3 = _beyondJsReact18Widgets118Page;
    }, function (_beyondJsReactive212Model) {
      dependency_4 = _beyondJsReactive212Model;
    }, function (_pragmateUi108Components) {
      dependency_5 = _pragmateUi108Components;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi108Alert) {
      dependency_7 = _pragmateUi108Alert;
    }, function (_aimpactAilearnApp070ComponentsModuleCard) {
      dependency_8 = _aimpactAilearnApp070ComponentsModuleCard;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_9 = _beyondJsReact18Widgets118Hooks;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_11 = _aimpactAilearnApp070ComponentsUi;
    }, function (_pragmateUi108Toast) {
      dependency_12 = _pragmateUi108Toast;
    }, function (_pragmateUi108Form) {
      dependency_13 = _pragmateUi108Form;
    }, function (_pragmateUi108List) {
      dependency_14 = _pragmateUi108List;
    }, function (_pragmateUi108Icons) {
      dependency_15 = _pragmateUi108Icons;
    }, function (_pragmateUi108Image) {
      dependency_16 = _pragmateUi108Image;
    }, function (_beyondJsKernel0114Routing) {
      dependency_17 = _beyondJsKernel0114Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/ui/components"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['pragmate-ui/components', dependency_5], ['react', dependency_6], ['pragmate-ui/alert', dependency_7], ['@aimpact/ailearn-app/components/module-card', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/toast', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/image', dependency_16], ['@beyond-js/kernel/routing', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-ui-components",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/ui/components",
        "is": "page",
        "route": "/ui/components",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/ui/components');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 4202921180,
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
              globalThis.c = this;
              this.#store = new _store.StoreManager(this.uri.qs.get('view'));
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.view = this.uri.qs.get('view');
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 4196239097,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            isStore;
            constructor(view) {
              super({
                properties: ['view']
              });
              this.view = view || 'classrooms';
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/components/buttons/index
      ************************************************/

      ims.set('./views/components/buttons/index', {
        hash: 1980298454,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Buttons = Buttons;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          function Buttons() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Buttons"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container flex-column gap-10"
            }, _react.default.createElement("h4", null, "Default Variants"), _react.default.createElement("div", {
              className: "flex gap-10 flex-wrap"
            }, _react.default.createElement(_components.Button, null, "Default Button"), _react.default.createElement(_components.Button, {
              variant: "primary"
            }, "Primary Button"), _react.default.createElement(_components.Button, {
              variant: "secondary"
            }, "Secondary Button"), _react.default.createElement(_components.Button, {
              variant: "tertiary"
            }, "Tertiary Button")), _react.default.createElement("h4", null, "Bordered Variants"), _react.default.createElement("div", {
              className: "flex gap-10 flex-wrap"
            }, _react.default.createElement(_components.Button, {
              bordered: true
            }, "Default Bordered"), _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true
            }, "Primary Bordered"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              bordered: true
            }, "Secondary Bordered"), _react.default.createElement(_components.Button, {
              variant: "tertiary",
              bordered: true
            }, "Tertiary Bordered")), _react.default.createElement("h4", null, "Disabled States"), _react.default.createElement("div", {
              className: "flex gap-10 flex-wrap"
            }, _react.default.createElement(_components.Button, {
              disabled: true
            }, "Default Disabled"), _react.default.createElement(_components.Button, {
              variant: "primary",
              disabled: true
            }, "Primary Disabled"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              disabled: true
            }, "Secondary Disabled"), _react.default.createElement(_components.Button, {
              variant: "tertiary",
              disabled: true
            }, "Tertiary Disabled")), _react.default.createElement("h4", null, "Sizes"), _react.default.createElement("div", {
              className: "flex gap-10 align-items-center flex-wrap"
            }, _react.default.createElement(_components.Button, {
              sizing: "xs"
            }, "Extra Small"), _react.default.createElement(_components.Button, {
              sizing: "sm"
            }, "Small"), _react.default.createElement(_components.Button, {
              sizing: "md"
            }, "Medium"), _react.default.createElement(_components.Button, {
              sizing: "lg"
            }, "Large")), _react.default.createElement("h4", null, "With Icons"), _react.default.createElement("div", {
              className: "flex gap-10 flex-wrap"
            }, _react.default.createElement(_components.Button, {
              icon: "plus",
              variant: "primary"
            }, "Add Item"), _react.default.createElement(_components.Button, {
              icon: "trash",
              variant: "secondary"
            }, "Delete"), _react.default.createElement(_components.Button, {
              icon: "edit",
              variant: "tertiary"
            }, "Edit")), _react.default.createElement("h4", null, "Loading State - Default Variants"), _react.default.createElement("div", {
              className: "flex gap-10 flex-wrap"
            }, _react.default.createElement(_components.Button, {
              loading: true
            }, "Default Loading"), _react.default.createElement(_components.Button, {
              loading: true,
              variant: "primary"
            }, "Primary Loading"), _react.default.createElement(_components.Button, {
              loading: true,
              variant: "secondary"
            }, "Secondary Loading"), _react.default.createElement(_components.Button, {
              loading: true,
              variant: "tertiary"
            }, "Tertiary Loading")), _react.default.createElement("h4", null, "Loading State - Bordered"), _react.default.createElement("div", {
              className: "flex gap-10 flex-wrap"
            }, _react.default.createElement(_components.Button, {
              loading: true,
              bordered: true
            }, "Default Bordered"), _react.default.createElement(_components.Button, {
              loading: true,
              variant: "primary",
              bordered: true
            }, "Primary Bordered"), _react.default.createElement(_components.Button, {
              loading: true,
              variant: "secondary",
              bordered: true
            }, "Secondary Bordered"), _react.default.createElement(_components.Button, {
              loading: true,
              variant: "tertiary",
              bordered: true
            }, "Tertiary Bordered")), _react.default.createElement("h4", null, "Loading State - Sizes"), _react.default.createElement("div", {
              className: "flex gap-10 align-items-center flex-wrap"
            }, _react.default.createElement(_components.Button, {
              loading: true,
              sizing: "xs"
            }, "Extra Small"), _react.default.createElement(_components.Button, {
              loading: true,
              sizing: "sm"
            }, "Small"), _react.default.createElement(_components.Button, {
              loading: true,
              sizing: "md"
            }, "Medium"), _react.default.createElement(_components.Button, {
              loading: true,
              sizing: "lg"
            }, "Large")), _react.default.createElement("h4", null, "Loading State - With Icons"), _react.default.createElement("div", {
              className: "flex gap-10 flex-wrap"
            }, _react.default.createElement(_components.Button, {
              loading: true,
              icon: "plus",
              variant: "primary"
            }, "Add Item"), _react.default.createElement(_components.Button, {
              loading: true,
              icon: "trash",
              variant: "secondary"
            }, "Delete"), _react.default.createElement(_components.Button, {
              loading: true,
              icon: "edit",
              variant: "tertiary"
            }, "Edit")), _react.default.createElement("h4", null, "Block Buttons (Full Width)"), _react.default.createElement("div", {
              className: "flex-column gap-10"
            }, _react.default.createElement(_components.Button, {
              block: true,
              variant: "primary"
            }, "Block Primary Button"), _react.default.createElement(_components.Button, {
              block: true,
              variant: "secondary"
            }, "Block Secondary Button")), _react.default.createElement("h4", null, "Button Groups"), _react.default.createElement("div", {
              className: "flex-column gap-10"
            }, _react.default.createElement(_components.ButtonGroup, null, _react.default.createElement(_components.Button, null, "First"), _react.default.createElement(_components.Button, null, "Second"), _react.default.createElement(_components.Button, null, "Third")), _react.default.createElement(_components.ButtonGroup, null, _react.default.createElement(_components.Button, {
              variant: "primary"
            }, "Save"), _react.default.createElement(_components.Button, {
              variant: "secondary"
            }, "Cancel"), _react.default.createElement(_components.Button, {
              variant: "tertiary"
            }, "Reset"))), _react.default.createElement("h4", null, "Combined Features"), _react.default.createElement("div", {
              className: "flex gap-10 flex-wrap"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              sizing: "lg",
              bordered: true
            }, "Large Bordered Primary"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              sizing: "sm",
              icon: "search"
            }, "Small with Icon"), _react.default.createElement(_components.Button, {
              variant: "tertiary",
              sizing: "lg"
            }, "Large Tertiary")))));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/components/cards/DATA
      *********************************************/

      ims.set('./views/components/cards/DATA', {
        hash: 3850177292,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CARDS_DATA = void 0;
          const CARDS_DATA = exports.CARDS_DATA = {
            assignment: {
              module: {
                classroom: {
                  name: 'Matematicas',
                  id: 'ddc86faf-4e0c-4f22-a406-525d5f9b8947',
                  picture: ''
                },
                owner: {
                  photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTteBk-dzWH8dPy8wGf6OUdISFnBiASQbKLgugwXqfDy-PyQ=s96-c',
                  name: "Henry Test's",
                  id: '650d629a-59ef-4dc2-9b98-28cdaed68f04'
                },
                activities: {
                  count: 3,
                  types: ['content-theory', 'debate', 'spoken']
                },
                audience: {
                  catetory: 'aaa',
                  level: '3er Año'
                },
                language: 'es',
                timeUpdated: 1715290709493,
                timeCreated: 1715290709493,
                description: 'Módulo destinado a comprender y aplicar los principios fundamentales de la trigonometría en situaciones prácticas y analíticas. Los estudiantes aprenderán sobre las razones trigonométricas en triángulos rectángulos, funciones trigonométricas, y el uso de herramientas digitales para su análisis.',
                id: '403932c9-7314-4bb2-b861-e0e077b3a6ee',
                title: 'Título de la tarjeta de módulos publicados puede tener hasta tres líneas...',
                picture: 'https://dev.ailearn.api.aimpact.partners/modules/403932c9-7314-4bb2-b861-e0e077b3a6ee/picture'
              },
              id: '274fa1c9-99cd-4d84-8780-1fe04881b93f'
            },
            community: {
              owner: {
                photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTteBk-dzWH8dPy8wGf6OUdISFnBiASQbKLgugwXqfDy-PyQ=s96-c',
                name: "Henry Test's",
                id: '650d629a-59ef-4dc2-9b98-28cdaed68f04'
              },
              audience: {
                catetory: 'aaa',
                level: '3er Año'
              },
              creator: {
                photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTteBk-dzWH8dPy8wGf6OUdISFnBiASQbKLgugwXqfDy-PyQ=s96-c',
                name: 'Henry Box',
                id: '9hYZlT9NGYT4bfdPxqRzkit2exa2'
              },
              description: 'Este módulo te invita a explorar el impacto de la Inteligencia Artificial (IA) en la educación. Desde cómo puede personalizar tu aprendizaje hasta su papel como complemento en la enseñanza, buscamos fomentar un debate informado sobre sus beneficios y desafíos.',
              language: 'es',
              title: 'Inteligencia Artificial en el Aula',
              picture: 'https://ailearn-http-v2-j2rcifstnq-uc.a.run.app/modules/cd9a1fa7-280e-415b-951c-459b2248b38d/picture?95154.29999999702',
              objective: 'Analizar y reflexionar sobre el uso de la Inteligencia Artificial en el aula desde diferentes perspectivas, promoviendo debates estructurados para evaluar críticamente sus ventajas y desafíos en la enseñanza. Se abordará el valor de la misma en la personalización del aprendizaje, su rol complementario en la labor docente, y se invitará a la reflexión sobre su influencia en el proceso de aprendizaje de manera individual. Se utilizarán ejemplos cotidianos.',
              duration: 15,
              activities: {
                count: 3,
                types: ['content-theory', 'debate', 'spoken']
              },
              timeUpdated: 1715290709493,
              playground: {
                assignment: '/assignments/2c3b24a8-e7b1-4f8a-86ea-0c0fbd3761ef'
              },
              timeCreated: 1715290709493,
              id: '6f78c411-b383-4d3d-8051-2e34e887af40'
            },
            activity: {
              id: '717d372a-ded8-4239-9d16-6ad668305216',
              objective: 'Demostrar la comprensión de los efectos de las antenas Wi-Fi mediante una presentación oral estructurada.',
              type: 'spoken',
              title: 'Presentación Oral sobre Efectos de Wi-Fi',
              description: 'Prepararás y presentarás un breve informe oral sobre los efectos de la radiación de las antenas Wi-Fi en la salud humana.',
              language: 'es',
              picture: '',
              duration: 30,
              module: {
                id: 'd816e99f-0105-43f2-b5a6-e005fd45e1ed',
                creator: {
                  id: '9hYZlT9NGYT4bfdPxqRzkit2exa2',
                  name: 'Henry Box',
                  photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTteBk-dzWH8dPy8wGf6OUdISFnBiASQbKLgugwXqfDy-PyQ=s96-c'
                },
                objective: 'Analizar el impacto de las antenas Wi-Fi en la salud humana, fomentando la comprensión de los principios básicos de la radiación electromagnética y su relación con el cuerpo humano, así como la capacidad para explicar fenómenos científicos asociados a esta tecnología.',
                title: 'Impacto de las Antenas Wi-Fi en la Salud Humana',
                description: 'Este módulo está diseñado para analizar el efecto de las antenas Wi-Fi en la salud humana, proporcionando una comprensión de la radiación electromagnética y su interacción con el cuerpo humano.',
                language: 'es',
                picture: 'https://dev.ailearn.api.aimpact.partners/modules/d816e99f-0105-43f2-b5a6-e005fd45e1ed/picture?6477436',
                duration: '45',
                audience: '5to año',
                public: true,
                status: 'active',
                type: 'module',
                timeCreated: 1730817517390,
                timeUpdated: 1730817517390,
                ai: true
              },
              resources: {
                materials: {},
                specs: {
                  assessment: 'La tarea consiste en evaluar la presentación oral del estudiante sobre los efectos de las antenas Wi-Fi. Se debe considerar la claridad de la exposición, la comprensión del tema y la estructura del texto entregado. Se evaluarán aspectos como la precisión de la información, la capacidad de argumentación y la calidad del lenguaje utilizado. Al finalizar la actividad, se debe leer atentamente el texto de la presentación y tomar nota de los puntos fuertes y las áreas de mejora.',
                  criteria: [{
                    name: 'Claridad',
                    subject: 'El alumno debe exponer de manera clara y comprensible, evitando tecnicismos innecesarios y facilitando la comprensión del tema a la audiencia.'
                  }, {
                    name: 'Estructura',
                    subject: 'La presentación debe seguir una estructura lógica con introducción, desarrollo y conclusiones claramente definidas, permitiendo un seguimiento fácil por parte del oyente.'
                  }, {
                    name: 'Contenido',
                    subject: 'Se evaluará la precisión y relevancia de la información presentada sobre las antenas Wi-Fi, así como la inclusión de argumentos relacionados con los efectos en la salud y el medio ambiente.'
                  }, {
                    name: 'Lenguaje',
                    subject: 'El uso de un lenguaje apropiado y el cuidado en la pronunciación, ortografía y gramática serán factores clave en la evaluación del texto entregado.'
                  }],
                  task: 'Realiza una presentación oral de hasta tres minutos sobre los efectos de las antenas Wi-Fi. La presentación debe incluir una introducción sobre qué son las antenas Wi-Fi, cómo funcionan y los posibles efectos en la salud y el medio ambiente. Asegúrate de estructurar tu exposición en: introducción, desarrollo y conclusiones. Utiliza un lenguaje claro y conciso, y demuestra tu comprensión del tema. Prepara un texto que puedas entregar después de tu exposición.',
                  objectives: '',
                  instructions: ''
                }
              }
            }
          };
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/components/cards/alerts
      ***********************************************/

      ims.set('./views/components/cards/alerts', {
        hash: 2963831404,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Alerts = Alerts;
          var _alert = require("pragmate-ui/alert");
          var _react = require("react");
          function Alerts() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", null, " Texts states"), _react.default.createElement("div", {
              className: "flex-column gap-10"
            }, _react.default.createElement("span", {
              className: "text-success mb-10"
            }, " Success alert"), _react.default.createElement("span", {
              className: "text-error"
            }, " error alert"), _react.default.createElement("span", {
              className: "text-info mb-10"
            }, " info alert"), _react.default.createElement("span", {
              className: "text-warning mb-10"
            }, " warning alert")), _react.default.createElement("h3", {
              className: "mb-10 h2 "
            }, "Alerts"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container flex-column gap-10"
            }, _react.default.createElement(_alert.Alert, {
              type: "success"
            }, " Success alert"), _react.default.createElement(_alert.Alert, {
              type: "error"
            }, " error alert"), _react.default.createElement(_alert.Alert, {
              type: "info"
            }, " info alert"), _react.default.createElement(_alert.Alert, {
              type: "warning"
            }, " warning alert"), _react.default.createElement(_alert.Alert, {
              type: "error"
            }, _react.default.createElement("h3", null, "Alert title"), _react.default.createElement("p", null, "Content in de alert")), _react.default.createElement(_alert.Alert, {
              type: "success"
            }, _react.default.createElement("h3", null, "Alert title"), _react.default.createElement("p", null, "Content in de alert")), _react.default.createElement(_alert.Alert, {
              type: "error"
            }, _react.default.createElement("h3", null, "Alert title"), _react.default.createElement("p", null, "Content in de alert")), _react.default.createElement(_alert.Alert, {
              type: "info"
            }, _react.default.createElement("h3", null, "Alert title"), _react.default.createElement("p", null, "Content in de alert")))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/cards/index
      **********************************************/

      ims.set('./views/components/cards/index', {
        hash: 3040713242,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardsTemplate = CardsTemplate;
          var React = require("react");
          var _assignments = require("./types/assignments");
          var _community = require("./types/community");
          var _draft = require("./types/draft");
          var _module = require("./types/module");
          var _homeAssignments = require("./types/home-assignments");
          var _activity = require("./types/activity");
          function CardsTemplate() {
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h1", null, "Cards"), React.createElement("div", {
              className: "tree-columns"
            }, React.createElement(_activity.ActivityCardExample, {
              type: "content-theory"
            }), React.createElement(_activity.ActivityCardExample, {
              type: "character-talk"
            }), React.createElement(_activity.ActivityCardExample, {
              type: "multiple-choice"
            }), React.createElement(_module.ModuleCardExample, null), React.createElement(_community.CommunityCard, null), React.createElement(_draft.DraftCard, null), React.createElement(_assignments.AssignmentCardExample, null), React.createElement(_assignments.AssignmentCardExample, {
              className: "entity-card--xs"
            }), React.createElement(_homeAssignments.AssignmentHomeCardExample, null)));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/components/cards/types/activity
      *******************************************************/

      ims.set('./views/components/cards/types/activity', {
        hash: 4179321000,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityCardExample = ActivityCardExample;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _DATA = require("../DATA");
          function ActivityCardExample({
            className,
            type
          }) {
            const {
              activity: item
            } = _DATA.CARDS_DATA;
            const [hmrUpdated, setHmrUpdated] = React.useState({});
            // listen module-card changes and re-render the component
            (0, _hooks.useBinder)([_moduleCard.hmr], () => setHmrUpdated({}));
            const texts = {
              item: {
                description: 'This is a description',
                title: 'This is a title'
              },
              actions: {
                link: 'Navegar'
              },
              types: {
                'content-theory': 'Contenido/Teoría',
                'multiple-choice': 'Selección Múltiple',
                'character-talk': 'Conversación con un Personaje',
                debate: 'Debate',
                assessment: 'Selección Múltiple',
                spoken: 'Exposición Oral'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h3", null, "Activity"), React.createElement(_moduleCard.ActivityCard, {
              type: type,
              className: className,
              item: item,
              texts: texts,
              audience: false,
              entity: "assignment"
            }));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./views/components/cards/types/assignments
      **********************************************************/

      ims.set('./views/components/cards/types/assignments', {
        hash: 680018754,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentCardExample = AssignmentCardExample;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _DATA = require("../DATA");
          function AssignmentCardExample({
            className
          }) {
            const {
              assignment: item
            } = _DATA.CARDS_DATA;
            const [hmrUpdated, setHmrUpdated] = React.useState({});
            // listen module-card changes and re-render the component
            (0, _hooks.useBinder)([_moduleCard.hmr], () => setHmrUpdated({}));
            const texts = {
              item: {
                description: 'This is a description',
                title: 'This is a title'
              },
              actions: {
                link: 'Navegar'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h3", null, "Assignment mobile"), React.createElement(_moduleCard.AssignmentCard, {
              className: className,
              item: item.module,
              texts: texts,
              audience: false,
              entity: "assignment"
            }));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/components/cards/types/community
      ********************************************************/

      ims.set('./views/components/cards/types/community', {
        hash: 4161253365,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityCard = CommunityCard;
          var React = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _DATA = require("../DATA");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function CommunityCard() {
            const {
              community: item
            } = _DATA.CARDS_DATA;
            const [hmrUpdated, setHmrUpdated] = React.useState({});
            // listen module-card changes and re-render the component
            (0, _hooks.useBinder)([_moduleCard.hmr], () => setHmrUpdated({}));
            const texts = {
              item: {
                description: 'This is a description',
                title: 'This is a title'
              },
              actions: {
                use: 'Usar',
                test: 'Probar'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h3", null, "Community"), React.createElement(_moduleCard.ModuleCard, {
              href: item.playground.assignment,
              className: "community-card",
              item: item,
              texts: texts,
              entity: "assignment"
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, React.createElement(_moduleCard.ModuleCardActionsFooter, null, item?.playground?.assignment && React.createElement(_icons.AppIconButton, {
              icon: "watch",
              title: texts.actions.test,
              href: item.playground.assignment
            }), React.createElement(_icons.AppIconButton, {
              icon: "clone",
              title: texts.actions.use
            })))));
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/components/cards/types/draft
      ****************************************************/

      ims.set('./views/components/cards/types/draft', {
        hash: 1143737405,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftCard = DraftCard;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var React = require("react");
          var _DATA = require("../DATA");
          // import { useHmr } from '@aimpact/ailearn-app/shared/hooks';

          function DraftCard() {
            const {
              assignment: item
            } = _DATA.CARDS_DATA;
            // listen module-card changes and re-render the component
            // useHmr([hmr]);
            const texts = {
              item: {
                description: 'This is a description',
                title: 'This is a title',
                draftTitle: 'Draft Module'
              },
              actions: {
                link: 'Navegar'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h3", null, "Draft"), React.createElement(_moduleCard.DraftCard, {
              className: "draft--card",
              item: item.module,
              texts: texts,
              audience: false,
              entity: "module"
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item.module
            }, React.createElement(_moduleCard.ModuleCardActionsFooter, null, React.createElement(_icons.AppIconButton, {
              icon: "watch",
              title: texts.actions.link,
              href: `/assignments/${item.id}`
            })))));
          }
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./views/components/cards/types/home-assignments
      ***************************************************************/

      ims.set('./views/components/cards/types/home-assignments', {
        hash: 1131448942,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentHomeCardExample = AssignmentHomeCardExample;
          var React = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _DATA = require("../DATA");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function AssignmentHomeCardExample() {
            const {
              assignment: item
            } = _DATA.CARDS_DATA;
            const [hmrUpdated, setHmrUpdated] = React.useState({});
            // listen module-card changes and re-render the component
            (0, _hooks.useBinder)([_moduleCard.hmr], () => setHmrUpdated({}));
            const texts = {
              item: {
                description: 'This is a description',
                title: 'This is a title'
              },
              actions: {
                link: 'Navegar'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h3", null, "Home Assignments"), React.createElement(_moduleCard.AssignmentCard, {
              classroom: item.module.classroom,
              item: item.module,
              texts: {
                texts
              },
              audience: {
                level: '3er año'
              },
              entity: "assignment"
            }));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/components/cards/types/module
      *****************************************************/

      ims.set('./views/components/cards/types/module', {
        hash: 3747642367,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleCardExample = ModuleCardExample;
          var React = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _DATA = require("../DATA");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function ModuleCardExample() {
            const {
              assignment: item
            } = _DATA.CARDS_DATA;
            const [hmrUpdated, setHmrUpdated] = React.useState({});
            // listen module-card changes and re-render the component
            (0, _hooks.useBinder)([_moduleCard.hmr], () => setHmrUpdated({}));
            const texts = {
              item: {
                description: 'This is a description',
                title: 'This is a title'
              },
              actions: {
                link: 'Navegar'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h3", null, "Module"), React.createElement(_moduleCard.ModuleCard, {
              item: item.module,
              texts: texts,
              audience: false,
              entity: "assignment"
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item.module
            }, React.createElement(_moduleCard.ModuleCardActionsFooter, null, React.createElement(_icons.AppIconButton, {
              icon: "watch",
              title: texts.actions.link,
              href: `/assignments/${item.id}`
            })))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/chips
      ****************************************/

      ims.set('./views/components/chips', {
        hash: 69787763,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChipsTemplate = ChipsTemplate;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function ChipsTemplate() {
            return React.createElement("div", {
              className: "chips"
            }, React.createElement("h1", null, "Chips"), React.createElement("div", {
              className: "flex-w-container"
            }, React.createElement(_ui.Chip, null, "Chip"), React.createElement(_ui.Chip, {
              variant: "primary"
            }, "Chip"), React.createElement(_ui.Chip, {
              variant: "secondary"
            }, "Chip"), React.createElement(_ui.Chip, {
              variant: "success"
            }, "Chip"), React.createElement(_ui.Chip, {
              variant: "warning"
            }, "Chip"), React.createElement(_ui.Chip, {
              variant: "error"
            }, "Chip"), React.createElement(_ui.Chip, {
              variant: "info"
            }, "Chip"), React.createElement(_ui.Chip, {
              variant: "light"
            }, "Chip"), React.createElement(_ui.Chip, {
              variant: "dark"
            }, "Chip")));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/components/classrooms/DATA
      **************************************************/

      ims.set('./views/components/classrooms/DATA', {
        hash: 2177842802,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DATA = void 0;
          const DATA = exports.DATA = {
            classroom: {
              owner: {
                photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTtdZVHKyHNQutbdqxduIlPEx90m9ufbN-kimmJ7-=s96-c',
                name: 'Julio Rodriguez',
                id: 'tHXKJj7aQsVW9oSvCKRg24dKfds1'
              },
              timeUpdated: 1726753948073,
              description: 'caracas',
              timeCreated: 1726753948073,
              id: '14fe458c-0ef2-41c1-a50d-921442584a06',
              name: 'caracas 2111',
              code: '555112'
            }
          };
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/components/classrooms/index
      ***************************************************/

      ims.set('./views/components/classrooms/index', {
        hash: 2228966926,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomCardsTemplate = ClassroomCardsTemplate;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _toast = require("pragmate-ui/toast");
          var React = require("react");
          var _DATA = require("./DATA");
          function ClassroomCardsTemplate({
            texts
          }) {
            const {
              classroom
            } = _DATA.DATA;
            const copy = event => {
              event.stopPropagation();
              const content = event.currentTarget.dataset.copy;
              navigator.clipboard.writeText(content);
              _toast.toast.success(texts.messages.copied);
            };
            texts = {
              ...texts,
              messages: {
                copied: 'Copiado al portapapeles'
              },
              actions: {
                delete: 'Delete',
                copy: 'Copy'
              },
              classrooms: {
                code: 'Code'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h1", null, "Classrooms"), React.createElement("div", {
              className: "tree-columns"
            }, React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts
            }), React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts,
              className: "bg-debate"
            }), React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts,
              className: "bg-content-theory"
            }), React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts,
              className: "bg-conversation"
            }), React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts,
              className: "bg-spoken"
            }), React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts,
              className: "bg-character-talk"
            }), React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts,
              className: "bg-multiple-choice"
            })));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/components/form/index
      *********************************************/

      ims.set('./views/components/form/index', {
        hash: 1120968173,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormTemplate = FormTemplate;
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          function FormTemplate() {
            const [value, setValue] = _react.default.useState('');
            const onChange = event => {
              setValue(event.target.value);
            };
            return _react.default.createElement("div", {
              className: "icons-page"
            }, _react.default.createElement("h1", null, "Form"), _react.default.createElement("h3", null, "Textarea"), _react.default.createElement(_form.Textarea, {
              placeholder: "placeholder",
              variant: "floating",
              label: "This is a textarea label",
              value: value,
              onChange: onChange
            }));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/icons/icons
      **********************************************/

      ims.set('./views/components/icons/icons', {
        hash: 3414743747,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IconsTemplate = IconsTemplate;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function IconsTemplate() {
            const IconItem = ({
              item
            }) => _react.default.createElement(_icons.AppIcon, {
              name: item,
              title: item
            });
            const IconButtonItem = ({
              item,
              ...props
            }) => _react.default.createElement(_icons.AppIconButton, {
              name: item,
              title: item,
              ...props
            });
            const BgIconItem = ({
              item
            }) => _react.default.createElement(_icons.BgIcon, {
              name: item,
              title: item
            });
            return _react.default.createElement("div", {
              className: "icons-page"
            }, _react.default.createElement("h1", null, "Icons"), _react.default.createElement("h3", null, "All icons"), _react.default.createElement(_list.List, {
              className: "icons-list",
              items: Object.keys(_icons.ICONS),
              control: IconItem
            }), _react.default.createElement("h2", null, "Background icons"), _react.default.createElement(_list.List, {
              className: "icons-list",
              items: ['content-theory', 'debate', 'spoken', 'character-talk', 'multiple-choice'],
              control: BgIconItem
            }), _react.default.createElement("h2", null, "Icon Buttons"), _react.default.createElement("h3", null, "Default"), _react.default.createElement(_list.List, {
              className: "icons-list",
              items: Object.keys(_icons.ICONS),
              control: IconButtonItem
            }), _react.default.createElement("h3", null, "Primary"), _react.default.createElement(_list.List, {
              className: "icons-list",
              specs: {
                variant: 'primary'
              },
              items: Object.keys(_icons.ICONS),
              control: IconButtonItem
            }));
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/components/trash/backgrounds
      ****************************************************/

      ims.set('./views/components/trash/backgrounds', {
        hash: 1161471450,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Backgrounds = Backgrounds;
          var _react = require("react");
          function Backgrounds() {
            const backgrounds = ['primary-container', 'secondary-container', 'primary-dark-container', 'secondary-dark-container', 'primary-light-container', 'secondary-light-container', 'background', 'surface', 'surface-variant'];
            return _react.default.createElement("div", null, backgrounds.map(item => {
              return _react.default.createElement("div", {
                key: item
              }, _react.default.createElement("h3", null, item), _react.default.createElement("div", {
                className: `bg-box bg-${item}`
              }));
            }));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/components/trash/banners
      ************************************************/

      ims.set('./views/components/trash/banners', {
        hash: 3095340695,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Banners = Banners;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Banners() {
            const headerList = [{
              url: '',
              status: 'waiting'
            }, {
              url: '',
              status: 'current'
            }, {
              url: '',
              status: 'done'
            }];
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Banners"), _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("h4", null, "Default"), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.HeaderCard, {
              title: "\u00A1Hello <Student Name>!",
              alt: 'card-robot',
              image: "/assets/ai-robot.webp"
            }, _react.default.createElement("p", {
              className: "p2"
            }, "Welcome to your activity space. You can now access the learning modules assigned to you by your teacher. It's easy!"))), _react.default.createElement("h4", null, "Default Light"), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.HeaderCard, {
              option: "light",
              title: "\u00A1Hello <Student Name>!",
              alt: 'card-robot',
              image: "/assets/ai-robot.webp"
            }, _react.default.createElement("p", {
              className: "p2"
            }, "Welcome to your activity space. You can now access the learning modules assigned to you by your teacher. It's easy!"))), _react.default.createElement("h4", null, "Default with Numbers/List"), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.HeaderCard, {
              optional: "light",
              list: headerList,
              title: "Let's keep evolving"
            }, _react.default.createElement("p", {
              className: "p1 mb-20"
            }, "Here you have a space to list multiple pages and follow up with a nice dynamic header.", _react.default.createElement("br", null), _react.default.createElement("br", null), "Showing the different possibilities that have redirections through links and multiple colours such as the following:", ' '), _react.default.createElement("p", {
              className: "p2 mb-10"
            }, "current: var(--on-primary)"), _react.default.createElement("p", {
              className: "p2 mb-10"
            }, "waiting: var(--tertiary-20)"), _react.default.createElement("p", {
              className: "p2 mb-10"
            }, "success: var(--success-70)")))));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/components/trash/buttons copy
      *****************************************************/

      ims.set('./views/components/trash/buttons copy', {
        hash: 504127515,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Buttons = Buttons;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function Buttons() {
            return _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "button-row"
            }, _react.default.createElement(_components.Button, {
              variant: "primary"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              variant: "primary",
              icon: "user"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              icon: "user"
            }, "Primary button")), _react.default.createElement("div", {
              className: "button-row"
            }, _react.default.createElement(_components.Button, {
              bordered: true,
              variant: "primary"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              bordered: true,
              variant: "secondary"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              bordered: true,
              variant: "primary",
              icon: "user"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              bordered: true,
              variant: "secondary",
              icon: "user"
            }, "Primary button")));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/components/trash/buttons
      ************************************************/

      ims.set('./views/components/trash/buttons', {
        hash: 1649869800,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Buttons = Buttons;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function Buttons() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Buttons"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("span", {
              className: "h3"
            }, "Normal state"), _react.default.createElement(_components.Button, null, "Primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary"
            }, "Secondary button"), _react.default.createElement(_components.Button, {
              variant: "tertiary"
            }, "Tertiary button"), _react.default.createElement("span", {
              className: "h3"
            }, "Disabled Buttons"), _react.default.createElement(_components.Button, {
              disabled: true
            }, "Primary disabled button"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              disabled: true
            }, "Secondary disable button"), _react.default.createElement(_components.Button, {
              variant: "tertiary",
              disabled: true
            }, "Tertiary disable button"), _react.default.createElement("span", {
              className: "h3"
            }, "Bordered"), _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true
            }, "primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              bordered: true
            }, "secondary button"), _react.default.createElement(_components.Button, {
              variant: "tertiary",
              bordered: true
            }, "tertiary button"), _react.default.createElement("span", {
              className: "h3"
            }, "ButtonGroup"), _react.default.createElement(_components.ButtonGroup, null, _react.default.createElement(_components.Button, null, "btn 1"), _react.default.createElement(_components.Button, null, "btn 2"), _react.default.createElement(_components.Button, null, "btn 3")))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/trash/empty
      **********************************************/

      ims.set('./views/components/trash/empty', {
        hash: 2006490327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Empty() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "EmptyList"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement(_ui.EmptyCard, {
              text: "This is a text field to explain what data is missing.",
              icon: "generate"
            }))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/trash/forms
      **********************************************/

      ims.set('./views/components/trash/forms', {
        hash: 3020221867,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Forms = Forms;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          function Forms() {
            const defaultValues = {
              defaultName: '',
              examplePassword: '',
              exampleEmail: '',
              hoverText: '',
              defaultText: ''
            };
            const [values, setValues] = _react.default.useState(defaultValues);
            const handleChange = ({
              currentTarget: target
            }) => {
              const currentValue = {
                ...values
              };
              currentValue[target.name] = target.value;
              setValues(currentValue);
            };
            const {
              defaultName,
              examplePassword,
              exampleEmail,
              hoverText,
              defaultText
            } = values;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Forms"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement(_form.Input, {
              label: "Full Name - Default State",
              type: "text",
              name: "defaultName",
              value: defaultName,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_form.Input, {
              label: "Full Password - Default State",
              type: "password",
              name: "examplePassword",
              value: examplePassword,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_form.Input, {
              label: "Full Email - Default State",
              type: "text",
              name: "hoverText",
              value: hoverText,
              onChange: handleChange,
              placeholder: "This is a placeholder example. Complete State"
            }), _react.default.createElement(_form.Input, {
              label: "Full Email - Default State",
              type: "text",
              name: "defaultText",
              value: defaultText,
              onChange: handleChange,
              placeholder: "Input user name and surname. Complete State"
            }), _react.default.createElement(_form.Input, {
              placeholder: "Default Disabled Input State",
              type: "email",
              name: "exampleEmail",
              disabled: true,
              value: exampleEmail,
              onChange: handleChange,
              required: true
            }))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/trash/icons
      **********************************************/

      ims.set('./views/components/trash/icons', {
        hash: 2311052754,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Icons = Icons;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function Icons() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Icons"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container optional centered"
            }, _react.default.createElement("div", {
              className: "sub-item__container optional"
            }, _react.default.createElement("span", {
              className: "p2 mb-10"
            }, "Default"), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "menu"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "profile"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "refresh"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "drag"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "list-menu"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "mic"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "delete"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "copy"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "chat"
            })), _react.default.createElement("div", {
              className: "sub-item__container optional"
            }, _react.default.createElement("span", {
              className: "p2 mb-10"
            }, "Hover"), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "menu"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "profile"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "refresh"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "drag"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "list-menu"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "mic"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "delete"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "copy"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "chat"
            })))));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/components/trash/illustrations
      ******************************************************/

      ims.set('./views/components/trash/illustrations', {
        hash: 2599249148,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Illustrations = Illustrations;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          function Illustrations() {
            return _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Illustrations"), _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("div", {
              className: "images-list__container"
            }, _react.default.createElement(_image.Image, {
              src: "https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_220/v1/AImpact/fujhhbk2li36uxgyaipn",
              alt: "Sad Explorer"
            }), _react.default.createElement(_image.Image, {
              src: "https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_220/v1/AImpact/lwkztda1sq08ushwipmi",
              alt: "Happy Explorer"
            }), _react.default.createElement(_image.Image, {
              src: "https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_270/v1/AImpact/f7knfihku0pyr8eo2yqh",
              alt: "Neutral Explorer"
            }), _react.default.createElement(_image.Image, {
              src: "https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_220/v1/AImpact/etq89fualhdkhkpeofat",
              alt: "Neutral Explorer"
            }))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/trash/lists
      **********************************************/

      ims.set('./views/components/trash/lists', {
        hash: 110724290,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Lists = Lists;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          const exampleItems = [{
            text: '3'
          }, {
            text: '2'
          }, {
            text: '1'
          }, {
            text: '...'
          }, {
            text: ''
          }];
          function Lists() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Lists"), _react.default.createElement("section", null, _react.default.createElement("div", {
              className: "item__container optional centered"
            }, _react.default.createElement(_list.List, {
              className: "list__container",
              items: exampleItems,
              control: Item
            }))));
          }
          function Item({
            data
          }) {
            return _react.default.createElement("span", {
              className: "p2"
            }, data.text);
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/components/trash/typography
      ***************************************************/

      ims.set('./views/components/trash/typography', {
        hash: 1604906955,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Typography = Typography;
          var _react = require("react");
          function Typography() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Fonts"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("h1", null, "h1: Title with h1"), _react.default.createElement("h2", null, "h2: Title with h2"), _react.default.createElement("h3", null, "h3: Title with h3"), _react.default.createElement("h4", null, "h4: Title with h4"), _react.default.createElement("h5", null, "h5: Title with h5"))), _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Paragraph"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("p", {
              className: "p1"
            }, "P1. Paragraph: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sunt alias aut vel, repellat, tenetur fuga ratione soluta, perspiciatis nihil iste sed voluptatibus voluptates nostrum?Consectetur id corporis optio similique."), _react.default.createElement("p", {
              className: "p2"
            }, "P2. Paragraph: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sunt alias aut vel, repellat, tenetur fuga ratione soluta, perspiciatis nihil iste sed voluptatibus voluptates nostrum?Consectetur id corporis optio similique."), _react.default.createElement("p", {
              className: "p1 disabled-text"
            }, "P1 Disable text"), _react.default.createElement("p", {
              className: "p2 disabled-text"
            }, "P2 Disable text"))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1800317598,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _alerts = require("./components/cards/alerts");
          var _list = require("pragmate-ui/list");
          var _cards = require("./components/cards");
          var _classrooms = require("./components/classrooms");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("./components/icons/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _chips = require("./components/chips");
          var _form = require("./components/form");
          var _buttons = require("./components/buttons");
          /*bundle*/
          function View({
            store
          }) {
            const [view, setView] = _react.default.useState(store.view ? store.view : 'classrooms');
            (0, _hooks.useBinder)([store], () => setView(store.view));
            const components = {
              alerts: _alerts.Alerts,
              buttons: _buttons.Buttons,
              cards: _cards.CardsTemplate,
              // classrooms: CardsTemplate,
              classrooms: _classrooms.ClassroomCardsTemplate,
              icons: _icons.IconsTemplate,
              chips: _chips.ChipsTemplate,
              form: _form.FormTemplate
            };
            const Item = ({
              item
            }) => {
              const onClick = event => {
                _routing.routing.pushState(`/ui/components?view=${item}`);
                setView(item);
              };
              const cls = `components-ui-page__item ${view === item ? 'active' : ''}`;
              return _react.default.createElement("li", {
                onClick: onClick,
                className: cls
              }, item);
            };
            const Main = components[view];
            return _react.default.createElement(_ui.PageContainer, {
              className: "components-ui-page"
            }, _react.default.createElement("aside", null, _react.default.createElement(_list.List, {
              items: Object.keys(components),
              control: Item
            })), _react.default.createElement("main", null, _react.default.createElement(Main, null)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJnbG9iYWxUaGlzIiwiYyIsIlN0b3JlTWFuYWdlciIsInVyaSIsInFzIiwiZ2V0IiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJ2aWV3IiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiaXNTdG9yZSIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsIl9jb21wb25lbnRzIiwiX3JlYWN0IiwiQnV0dG9ucyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsInNpemluZyIsImljb24iLCJsb2FkaW5nIiwiYmxvY2siLCJCdXR0b25Hcm91cCIsIkNBUkRTX0RBVEEiLCJhc3NpZ25tZW50IiwibW9kdWxlIiwiY2xhc3Nyb29tIiwibmFtZSIsImlkIiwicGljdHVyZSIsIm93bmVyIiwicGhvdG9VcmwiLCJhY3Rpdml0aWVzIiwiY291bnQiLCJ0eXBlcyIsImF1ZGllbmNlIiwiY2F0ZXRvcnkiLCJsZXZlbCIsImxhbmd1YWdlIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJjb21tdW5pdHkiLCJjcmVhdG9yIiwib2JqZWN0aXZlIiwiZHVyYXRpb24iLCJwbGF5Z3JvdW5kIiwiYWN0aXZpdHkiLCJ0eXBlIiwicHVibGljIiwic3RhdHVzIiwiYWkiLCJyZXNvdXJjZXMiLCJtYXRlcmlhbHMiLCJzcGVjcyIsImFzc2Vzc21lbnQiLCJjcml0ZXJpYSIsInN1YmplY3QiLCJ0YXNrIiwib2JqZWN0aXZlcyIsImluc3RydWN0aW9ucyIsIl9hbGVydCIsIkFsZXJ0cyIsIkFsZXJ0IiwiUmVhY3QiLCJfYXNzaWdubWVudHMiLCJfY29tbXVuaXR5IiwiX2RyYWZ0IiwiX21vZHVsZSIsIl9ob21lQXNzaWdubWVudHMiLCJfYWN0aXZpdHkiLCJDYXJkc1RlbXBsYXRlIiwiQWN0aXZpdHlDYXJkRXhhbXBsZSIsIk1vZHVsZUNhcmRFeGFtcGxlIiwiQ29tbXVuaXR5Q2FyZCIsIkRyYWZ0Q2FyZCIsIkFzc2lnbm1lbnRDYXJkRXhhbXBsZSIsIkFzc2lnbm1lbnRIb21lQ2FyZEV4YW1wbGUiLCJfbW9kdWxlQ2FyZCIsIl9ob29rcyIsIl9EQVRBIiwiaXRlbSIsImhtclVwZGF0ZWQiLCJzZXRIbXJVcGRhdGVkIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJobXIiLCJ0ZXh0cyIsImFjdGlvbnMiLCJsaW5rIiwiZGViYXRlIiwic3Bva2VuIiwiQWN0aXZpdHlDYXJkIiwiZW50aXR5IiwiQXNzaWdubWVudENhcmQiLCJfaWNvbnMiLCJ1c2UiLCJ0ZXN0IiwiTW9kdWxlQ2FyZCIsImhyZWYiLCJNb2R1bGVDYXJkRm9vdGVyIiwiTW9kdWxlQ2FyZEFjdGlvbnNGb290ZXIiLCJBcHBJY29uQnV0dG9uIiwiZHJhZnRUaXRsZSIsIl91aSIsIkNoaXBzVGVtcGxhdGUiLCJDaGlwIiwiREFUQSIsImNvZGUiLCJfdG9hc3QiLCJDbGFzc3Jvb21DYXJkc1RlbXBsYXRlIiwiY29weSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJjb3BpZWQiLCJkZWxldGUiLCJjbGFzc3Jvb21zIiwiQ2xhc3Nyb29tQ2FyZCIsIl9mb3JtIiwiRm9ybVRlbXBsYXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiVGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwiX2xpc3QiLCJJY29uc1RlbXBsYXRlIiwiSWNvbkl0ZW0iLCJBcHBJY29uIiwiSWNvbkJ1dHRvbkl0ZW0iLCJwcm9wcyIsIkJnSWNvbkl0ZW0iLCJCZ0ljb24iLCJMaXN0IiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiSUNPTlMiLCJjb250cm9sIiwiQmFja2dyb3VuZHMiLCJiYWNrZ3JvdW5kcyIsIm1hcCIsImtleSIsIkJhbm5lcnMiLCJoZWFkZXJMaXN0IiwidXJsIiwiSGVhZGVyQ2FyZCIsImFsdCIsImltYWdlIiwib3B0aW9uIiwib3B0aW9uYWwiLCJsaXN0IiwiRW1wdHkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiRm9ybXMiLCJkZWZhdWx0VmFsdWVzIiwiZGVmYXVsdE5hbWUiLCJleGFtcGxlUGFzc3dvcmQiLCJleGFtcGxlRW1haWwiLCJob3ZlclRleHQiLCJkZWZhdWx0VGV4dCIsInZhbHVlcyIsInNldFZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRWYWx1ZSIsIklucHV0IiwicmVxdWlyZWQiLCJJY29ucyIsIkljb24iLCJfaW1hZ2UiLCJJbGx1c3RyYXRpb25zIiwiSW1hZ2UiLCJzcmMiLCJleGFtcGxlSXRlbXMiLCJMaXN0cyIsIkl0ZW0iLCJkYXRhIiwiVHlwb2dyYXBoeSIsIl9hbGVydHMiLCJfY2FyZHMiLCJfY2xhc3Nyb29tcyIsIl9yb3V0aW5nIiwiX2NoaXBzIiwiX2J1dHRvbnMiLCJzZXRWaWV3IiwiY29tcG9uZW50cyIsImFsZXJ0cyIsImJ1dHRvbnMiLCJjYXJkcyIsImljb25zIiwiY2hpcHMiLCJmb3JtIiwib25DbGljayIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJjbHMiLCJNYWluIiwiUGFnZUNvbnRhaW5lciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYnV0dG9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9jYXJkcy9EQVRBLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvY2FyZHMvYWxlcnRzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL3R5cGVzL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL3R5cGVzL2Fzc2lnbm1lbnRzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL3R5cGVzL2NvbW11bml0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9jYXJkcy90eXBlcy9kcmFmdC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9jYXJkcy90eXBlcy9ob21lLWFzc2lnbm1lbnRzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL3R5cGVzL21vZHVsZS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9jaGlwcy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9jbGFzc3Jvb21zL0RBVEEudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9jbGFzc3Jvb21zL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaWNvbnMvaWNvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHJhc2gvYmFja2dyb3VuZHMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHJhc2gvYmFubmVycy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy90cmFzaC9idXR0b25zIGNvcHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHJhc2gvYnV0dG9ucy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy90cmFzaC9lbXB0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy90cmFzaC9mb3Jtcy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy90cmFzaC9pY29ucy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy90cmFzaC9pbGx1c3RyYXRpb25zLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3RyYXNoL2xpc3RzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3RyYXNoL3R5cG9ncmFwaHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1ZDLFVBQVUsQ0FBQ0MsQ0FBQyxHQUFHLElBQUk7Y0FDbkIsSUFBSSxDQUFDLENBQUFILEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFRLFlBQVksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Y0FDdkQsT0FBTyxJQUFJLENBQUMsQ0FBQVAsS0FBTTtZQUNuQjtZQUNBLElBQUlRLE1BQU1BLENBQUE7Y0FDVCxPQUFPWCxNQUFBLENBQUFZLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNXLElBQUksR0FBRyxJQUFJLENBQUNOLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQzNDO1lBRUE7OztZQUdBSyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQWYsVUFBQSxHQUFBQSxVQUFBOzs7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