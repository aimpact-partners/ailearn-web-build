System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "react@18.3.1", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/ailearn-app@0.7.0/modules/draft/gallery.code", "@aimpact/chat-sdk@1.5.5/editor", "@beyond-js/kernel@0.1.14/core", "@beyond-js/react-18-widgets@1.1.8/hooks", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp070ModulesDraftGalleryCode) {
      dependency_7 = _aimpactAilearnApp070ModulesDraftGalleryCode;
    }, function (_aimpactChatSdk155Editor) {
      dependency_8 = _aimpactChatSdk155Editor;
    }, function (_beyondJsKernel0114Core) {
      dependency_9 = _beyondJsKernel0114Core;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_10 = _beyondJsReact18Widgets118Hooks;
    }, function (_beyondJsKernel0114Styles) {
      dependency_11 = _beyondJsKernel0114Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/stores/base', dependency_3], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/ailearn-app/modules/draft/gallery.code', dependency_7], ['@aimpact/chat-sdk/editor', dependency_8], ['@beyond-js/kernel/core', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@beyond-js/kernel/styles', dependency_11]]);
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
        hash: 3995139050,
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2655703043,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _gallery = require("@aimpact/ailearn-app/modules/draft/gallery.code");
          var _editor = require("@aimpact/chat-sdk/editor");
          var _core = require("@beyond-js/kernel/core");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function View({
            store
          }) {
            const [content, setContent] = React.useState('');
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
              initialContent: content,
              onChange: onChange,
              loaders: {
                image: () => {
                  const response = new _core.PendingPromise();
                  setPromise(response);
                  setShowModal(true);
                  return response;
                }
              }
            })), showModal && React.createElement(_gallery.GalleryModal, {
              onClose: onClose,
              promise: promise,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImRyYWZ0SWQiLCJ1cmkiLCJxcyIsImdldCIsImFjdGl2aXR5SWQiLCJsb2FkIiwiZXhwb3J0cyIsIl9iYXNlIiwiX2xlYXJuaW5nTW9kdWxlcyIsIkJhc2VTdG9yZU1hbmFnZXIiLCJnYWxsZXJ5IiwiZHJhZnQiLCJpc1N0b3JlIiwiYWN0aXZpdHkiLCJhY3Rpdml0aWVzIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIkRyYWZ0IiwiaWQiLCJ0cmlnZ2VyIiwiUmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2dhbGxlcnkiLCJfZWRpdG9yIiwiX2NvcmUiLCJfaG9va3MiLCJfY29udGV4dCIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwidXNlU3RhdGUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJwcm9taXNlIiwic2V0UHJvbWlzZSIsInVzZVN0b3JlIiwib25DaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xvc2UiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwidGV4dHMiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJjbGFzc05hbWUiLCJXaWtpRWRpdG9yIiwibmFtZSIsImluaXRpYWxDb250ZW50IiwibG9hZGVycyIsImltYWdlIiwicmVzcG9uc2UiLCJQZW5kaW5nUHJvbWlzZSIsIkdhbGxlcnlNb2RhbCJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUFPRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ25FLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsTUFBTUMsT0FBTyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxzQ0FBc0M7Y0FDcEYsTUFBTUMsVUFBVSxHQUFHLElBQUksQ0FBQ0gsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxzQ0FBc0M7Y0FDMUYsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1csSUFBSSxDQUFDO2dCQUFFTCxPQUFPO2dCQUFFSTtjQUFVLENBQUUsQ0FBQztZQUMxQzs7VUFDQUUsT0FBQSxDQUFBZCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEJELElBQUFlLEtBQUEsR0FBQWxCLE9BQUE7VUFHQSxJQUFBbUIsZ0JBQUEsR0FBQW5CLE9BQUE7VUFFTSxNQUFPTyxZQUFhLFNBQVFXLEtBQUEsQ0FBQUUsZ0JBQWdCO1lBQ2pELENB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