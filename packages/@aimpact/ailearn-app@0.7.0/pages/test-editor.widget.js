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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImRyYWZ0SWQiLCJ1cmkiLCJxcyIsImdldCIsImFjdGl2aXR5SWQiLCJsb2FkIiwiZXhwb3J0cyIsIl9iYXNlIiwiX2xlYXJuaW5nTW9kdWxlcyIsIkJhc2VTdG9yZU1hbmFnZXIiLCJnYWxsZXJ5IiwiZHJhZnQiLCJpc1N0b3JlIiwiYWN0aXZpdHkiLCJhY3Rpdml0aWVzIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIkRyYWZ0IiwiaWQiLCJ0cmlnZ2VyIiwiUmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2dhbGxlcnkiLCJfZWRpdG9yIiwiX2NvcmUiLCJfaG9va3MiLCJfY29udGV4dCIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwidXNlU3RhdGUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJwcm9taXNlIiwic2V0UHJvbWlzZSIsInVzZVN0b3JlIiwib25DaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xvc2UiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwidGV4dHMiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJjbGFzc05hbWUiLCJXaWtpRWRpdG9yIiwibmFtZSIsImluaXRpYWxDb250ZW50IiwibG9hZGVycyIsImltYWdlIiwicmVzcG9uc2UiLCJQZW5kaW5nUHJvbWlzZSIsIkdhbGxlcnlNb2RhbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQU9HLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDbkUsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBRUEsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxNQUFNQyxPQUFPLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLHNDQUFzQztjQUNwRixNQUFNQyxVQUFVLEdBQUcsSUFBSSxDQUFDSCxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLHNDQUFzQztjQUMxRixJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVyxJQUFJLENBQUM7Z0JBQUVMLE9BQU87Z0JBQUVJO2NBQVUsQ0FBRSxDQUFDO1lBQzFDOztVQUNBRSxPQUFBLENBQUFkLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkQsSUFBQWUsS0FBQSxHQUFBbEIsT0FBQTtVQUdBLElBQUFtQixnQkFBQSxHQUFBbkIsT0FBQTtVQUVNLE1BQU9PLFlBQWEsU0FBUVcsS0FBQSxDQUFBRSxnQkFBZ0I7WUFDakQsQ0FBQUMs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System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "react@18.3.1", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/ailearn-app@0.7.0/modules/draft/gallery.code", "@aimpact/chat-sdk@1.5.5/editor", "@beyond-js/kernel@0.1.14/core", "@beyond-js/react-18-widgets@1.1.8/hooks", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context2) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImRyYWZ0SWQiLCJ1cmkiLCJxcyIsImdldCIsImFjdGl2aXR5SWQiLCJsb2FkIiwiZXhwb3J0cyIsIl9iYXNlIiwiX2xlYXJuaW5nTW9kdWxlcyIsIkJhc2VTdG9yZU1hbmFnZXIiLCJnYWxsZXJ5IiwiZHJhZnQiLCJpc1N0b3JlIiwiYWN0aXZpdHkiLCJhY3Rpdml0aWVzIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIkRyYWZ0IiwiaWQiLCJ0cmlnZ2VyIiwiUmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2dhbGxlcnkiLCJfZWRpdG9yIiwiX2NvcmUiLCJfaG9va3MiLCJfY29udGV4dCIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwidXNlU3RhdGUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJwcm9taXNlIiwic2V0UHJvbWlzZSIsInVzZVN0b3JlIiwib25DaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xvc2UiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwidGV4dHMiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJjbGFzc05hbWUiLCJXaWtpRWRpdG9yIiwibmFtZSIsImluaXRpYWxDb250ZW50IiwibG9hZGVycyIsImltYWdlIiwicmVzcG9uc2UiLCJQZW5kaW5nUHJvbWlzZSIsIkdhbGxlcnlNb2RhbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQU9HLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDbkUsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBRUEsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxNQUFNQyxPQUFPLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLHNDQUFzQztjQUNwRixNQUFNQyxVQUFVLEdBQUcsSUFBSSxDQUFDSCxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLHNDQUFzQztjQUMxRixJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVyxJQUFJLENBQUM7Z0JBQUVMLE9BQU87Z0JBQUVJO2NBQVUsQ0FBRSxDQUFDO1lBQzFDOztVQUNBRSxPQUFBLENBQUFkLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkQsSUFBQWUsS0FBQSxHQUFBbEIsT0FBQTtVQUdBLElBQUFtQixnQkFBQSxHQUFBbkIsT0FBQTtVQUVNLE1BQU9PLFlBQWEsU0FBUVcsS0FBQSxDQUFBRSxnQkFBZ0I7WUFDakQsQ0FBQUMs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