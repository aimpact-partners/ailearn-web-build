System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "react@18.3.1", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/ailearn-app@0.7.0/entity-attachments.code", "@aimpact/chat-sdk@1.5.5/editor.code", "@beyond-js/kernel@0.1.14/core", "@beyond-js/react-18-widgets@1.1.8/hooks", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_2 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnApp070StoresBase) {
      dependency_3 = _aimpactAilearnApp070StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_4 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_react) {
      dependency_5 = _react;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_6 = _aimpactAilearnApp070ComponentsUi;
    }, function (_aimpactAilearnApp070EntityAttachmentsCode) {
      dependency_7 = _aimpactAilearnApp070EntityAttachmentsCode;
    }, function (_aimpactChatSdk155EditorCode) {
      dependency_8 = _aimpactChatSdk155EditorCode;
    }, function (_beyondJsKernel0114Core) {
      dependency_9 = _beyondJsKernel0114Core;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_10 = _beyondJsReact18Widgets118Hooks;
    }, function (_beyondJsKernel0114Styles) {
      dependency_11 = _beyondJsKernel0114Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/pages/test-editor",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/stores/base', dependency_3], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/ailearn-app/entity-attachments.code', dependency_7], ['@aimpact/chat-sdk/editor.code', dependency_8], ['@beyond-js/kernel/core', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@beyond-js/kernel/styles', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-test-editor",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/pages/test-editor.widget",
        "is": "page",
        "route": "/test/article/editor",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/pages/test-editor.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 440227798,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
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
              const draftId = this.uri.qs.get('draftId') || `303edbb3-92d0-4f9d-89ab-0a511ec00f9b`;
              const activityId = this.uri.qs.get('activityId') || `fce612ed-ce71-4afd-a716-01f0e4265aa1`;
              this.#store.load({
                draftId,
                activityId
              });
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 351201106,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          class StoreManager extends _base.BaseStoreManager {
            #gallery;
            #draft;
            #activityId;
            get draft() {
              return this.#draft;
            }
            isStore;
            get gallery() {
              return this.#gallery;
            }
            get activity() {
              return this.#draft.activities.get(this.#activityId);
            }
            #ready = false;
            get ready() {
              return this.#ready && super.ready;
            }
            constructor() {
              super('@aimpact/ailearn-app/pages/test-editor');
            }
            async load({
              draftId,
              activityId
            }) {
              this.#activityId = activityId;
              this.#draft = new _learningModules.Draft({
                id: draftId
              });
              globalThis.draft = this.#draft;
              await this.#draft.load();
              this.#ready = true;
              this.trigger('change');
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1165446272,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var React = require("react");
          const ModuleContext = exports.ModuleContext = React.createContext({});
          const useModuleContext = () => React.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/hardcoded
      *********************************/

      ims.set('./views/hardcoded', {
        hash: 4056231838,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.plain = exports.markdown = void 0;
          const markdown = exports.markdown = `- **Metodología general**
  - *crítica de fuentes*
  - *criterios historiográficos*
  - *evidencia arqueológica y documental*

- **Crítica textual**
  - **Objetivo:** reconstruir texto original
  - **Indicadores:** variante manuscrita, antigüedad, consenso

- **Crítica literaria**
  - **Enfoque:** género y intención autoral
  - **Géneros:** epopeya, parábola, genealogía, crónica
  - **Implicación:** expectativas de factualidad

- **Crítica de formas (Formkritik)**
  - **Foco:** tradición oral previa
  - **Unidades:** dichos independientes, función litúrgica/catequética
  - **Resultado:** posible elaboración posterior

- **Crítica redaccional**
  - **Foco:** editoría y propósito teológico
  - **Señales:** modificaciones sistemáticas, agenda apologética

- **Criterios historiográficos**
  - **Múltiples atestaciones:** fuentes independientes → mayor probabilidad
  - **Lo embarazoso:** detalles incómodos → autenticidad probable
  - **Coherencia:** concordancia con reconstrucción previa
  - **Plausibilidad histórica:** adecuación cultural, social e institucional

- **Evidencia arqueológica y documental**
  - **Estratigrafía:** secuencias temporales relativas
  - **Tipología cerámica:** dataciones finas, conexiones culturales
  - **Inscripciones (epigrafía):** nombres, titulaturas, fechas
  - **Documentos administrativos:** papiros, tablillas, listados fiscales
  - **Principio:** convergencia texto↔evidencia refuerza historicidad

- **Aplicación integradora**
  - *crítica textual + literaria* → definir unidad
  - *formkritik + redacción* → detectar capas
  - *criterios historiográficos* → ponderar verosimilitud
  - *arqueología/documentos* → fechar/contextualizar/refutar
  - **Conclusión sólida:** fuentes, criterios, bibliografía

- **Bibliografía recomendada**
  - *Bruce M. Metzger* — *The Text of the New Testament*
  - *Dibelius & Bultmann* — *crítica de formas*
  - *John P. Meier; E. P. Sanders* — *reconstrucción histórica*
  - *William G. Dever; Amihai Mazar* — *arqueología de Israel*
  - *Finkelstein & Silberman* — *The Bible Unearthed*
  - **Revistas:** *Journal of Biblical Literature*; *BASOR*
`;
          const plain = exports.plain = '- Metodología general\n  - crítica de fuentes\n  - criterios historiográficos\n  - evidencia arqueológica y documental\n\n- Crítica textual\n  - Objetivo: reconstruir texto original\n  - Indicadores: variante manuscrita, antigüedad, consenso\n\n- Crítica literaria\n  - Enfoque: género y intención autoral\n  - Géneros: epopeya, parábola, genealogía, crónica\n  - Implicación: expectativas de factualidad\n\n- Crítica de formas (Formkritik)\n  - Foco: tradición oral previa\n  - Unidades: dichos independientes, función litúrgica/catequética\n  - Resultado: posible elaboración posterior\n\n- Crítica redaccional\n  - Foco: editoría y propósito teológico\n  - Señales: modificaciones sistemáticas, agenda apologética\n\n- Criterios historiográficos\n  - Múltiples atestaciones: fuentes independientes → mayor probabilidad\n  - Lo embarazoso: detalles incómodos → autenticidad probable\n  - Coherencia: concordancia con reconstrucción previa\n  - Plausibilidad histórica: adecuación cultural, social e institucional\n\n- Evidencia arqueológica y documental\n  - Estratigrafía: secuencias temporales relativas\n  - Tipología cerámica: dataciones finas, conexiones culturales\n  - Inscripciones (epigrafía): nombres, titulaturas, fechas\n  - Documentos administrativos: papiros, tablillas, listados fiscales\n  - Principio: convergencia texto↔evidencia refuerza historicidad\n\n- Aplicación integradora\n  - crítica textual + literaria → definir unidad\n  - formkritik + redacción → detectar capas\n  - criterios historiográficos → ponderar verosimilitud\n  - arqueología/documentos → fechar/contextualizar/refutar\n  - Conclusión sólida: fuentes, criterios, bibliografía\n\n- Bibliografía recomendada\n  - Bruce M. Metzger — The Text of the New Testament\n  - Dibelius & Bultmann — crítica de formas\n  - John P. Meier; E. P. Sanders — reconstrucción histórica\n  - William G. Dever; Amihai Mazar — arqueología de Israel\n  - Finkelstein & Silberman — The Bible Unearthed\n  - Revistas: Journal of Biblical Literature; BASOR';
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3149039145,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _entityAttachments = require("@aimpact/ailearn-app/entity-attachments.code");
          var _editor = require("@aimpact/chat-sdk/editor.code");
          var _core = require("@beyond-js/kernel/core");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var HARDCODED = require("./hardcoded");
          var _context = require("./context");
          /*bundle*/
          function View({
            store
          }) {
            const [content, setContent] = React.useState(HARDCODED.markdown);
            const [showModal, setShowModal] = React.useState(false);
            const [promise, setPromise] = React.useState(null);
            (0, _hooks.useStore)(store);
            const onChange = event => {
              console.log(event.target.value);
            };
            const onClose = () => {
              setPromise(null);
              setShowModal(false);
            };
            if (!store.ready) return React.createElement(_ui.PageLoader, {
              fetching: true
            });
            const value = {
              texts: store.texts,
              store
            };
            return React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_ui.PageContainer, null, React.createElement(_ui.PageTitle, null), React.createElement("div", {
              className: "textarea__container"
            }, React.createElement(_editor.WikiEditor, {
              name: "content",
              initialContent: HARDCODED.markdown,
              onChange: onChange,
              loaders: {
                image: () => {
                  const response = new _core.PendingPromise();
                  setPromise(response);
                  setShowModal(true);
                  return response;
                }
              }
            })), showModal && React.createElement(_entityAttachments.AttachmentsModal, {
              onClose: onClose,
              promise: promise,
              credits: store.draft.credits,
              activity: store.activity
            })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImRyYWZ0SWQiLCJ1cmkiLCJxcyIsImdldCIsImFjdGl2aXR5SWQiLCJsb2FkIiwiZXhwb3J0cyIsIl9iYXNlIiwiX2xlYXJuaW5nTW9kdWxlcyIsIkJhc2VTdG9yZU1hbmFnZXIiLCJnYWxsZXJ5IiwiZHJhZnQiLCJpc1N0b3JlIiwiYWN0aXZpdHkiLCJhY3Rpdml0aWVzIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIkRyYWZ0IiwiaWQiLCJnbG9iYWxUaGlzIiwidHJpZ2dlciIsIlJlYWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIm1hcmtkb3duIiwicGxhaW4iLCJfdWkiLCJfZW50aXR5QXR0YWNobWVudHMiLCJfZWRpdG9yIiwiX2NvcmUiLCJfaG9va3MiLCJIQVJEQ09ERUQiLCJfY29udGV4dCIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwidXNlU3RhdGUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJwcm9taXNlIiwic2V0UHJvbWlzZSIsInVzZVN0b3JlIiwib25DaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xvc2UiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwidGV4dHMiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJjbGFzc05hbWUiLCJXaWtpRWRpdG9yIiwibmFtZSIsImluaXRpYWxDb250ZW50IiwibG9hZGVycyIsImltYWdlIiwicmVzcG9uc2UiLCJQZW5kaW5nUHJvbWlzZSIsIkF0dGFjaG1lbnRzTW9kYWwiLCJjcmVkaXRzIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oYXJkY29kZWQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFBT0csVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNuRSxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFFQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILE1BQU1DLE9BQU8sR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksc0NBQXNDO2NBQ3BGLE1BQU1DLFVBQVUsR0FBRyxJQUFJLENBQUNILEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksc0NBQXNDO2NBQzFGLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNXLElBQUksQ0FBQztnQkFBRUwsT0FBTztnQkFBRUk7Y0FBVSxDQUFFLENBQUM7WUFDMUM7O1VBQ0FFLE9BQUEsQ0FBQWQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCRCxJQUFBZSxL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