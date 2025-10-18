System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/stores/base", "react@18.3.1", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/react-18-widgets@1.1.8/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_react) {
      dependency_4 = _react;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_5 = _aimpactAilearnApp070ComponentsUi;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_6 = _aimpactMediaManager100Uploader;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_7 = _beyondJsReact18Widgets118Hooks;
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
          "vspecifier": "@aimpact/ailearn-app@0.7.0/pages/test-uploader",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/stores/base', dependency_3], ['react', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['@aimpact/media-manager/uploader', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-test-uploader",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/pages/test-uploader.widget",
        "is": "page",
        "route": "/test/uploader"
      }]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 4165609597,
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
            createStore() {
              return new _store.StoreManager();
            }
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2710675053,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _base.BaseStoreManager {
            constructor() {
              super(_beyond_context.module.specifier);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 4178569911,
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
        hash: 2768378045,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var React = require("react");
          var _useUploader = require("./use-uploader");
          /*bundle*/
          function View({
            store
          }) {
            const fetching = false;
            const {
              triggerRef,
              dropZoneRef,
              files,
              uploading,
              progress,
              errors
            } = (0, _useUploader.useUploader)({
              multiple: true,
              accept: 'image/*',
              validators: [{
                name: 'image',
                options: {
                  maxSize: 5
                }
              }],
              processors: ['image'] // image processor for preview & base64
            });
            return React.createElement(_ui.PageContainer, null, React.createElement(_ui.PageTitle, null), React.createElement("div", null, React.createElement("h2", null, "Uploader Test Page"), React.createElement("p", null, "This is a test page for file uploading functionality.")), React.createElement("div", null, React.createElement("button", {
              ref: triggerRef
            }, "Select Images"), React.createElement("div", {
              ref: dropZoneRef,
              style: {
                border: '2px dashed #aaa',
                padding: 20,
                marginTop: 10
              }
            }, "Drop files here"), uploading && React.createElement("p", null, "Loading... ", progress, "%"), errors && React.createElement("p", {
              style: {
                color: 'red'
              }
            }, String(errors)), React.createElement("div", {
              style: {
                display: 'flex',
                flexWrap: 'wrap',
                marginTop: 20
              }
            }, files.map(file => React.createElement("div", {
              key: file.id,
              style: {
                marginRight: 10
              }
            }, file.previewUrl ? React.createElement("img", {
              src: file.previewUrl,
              alt: file.name,
              style: {
                width: 100,
                height: 100,
                objectFit: 'cover'
              }
            }) : React.createElement("div", {
              style: {
                width: 100,
                height: 100,
                background: '#eee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999'
              }
            }, "No Preview"), React.createElement("p", {
              style: {
                fontSize: 12
              }
            }, file.name), React.createElement("button", {
              onClick: async () => {
                const base64 = await file.toBase64();
                console.log('Base64 for', file.name, base64);
              }
            }, "Get Base64"))))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/use-uploader
      ************************************/

      ims.set('./views/use-uploader', {
        hash: 1461900729,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploader = useUploader;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _uploader = require("@aimpact/media-manager/uploader");
          // react/use-uploader.ts

          /**
           * Minimal React hook for using the Uploader inside components.
           * Supports generics so you can specialize files (IImageFile, IVideoFile, etc.).
           */
          function useUploader(specs) {
            const triggerRef = React.useRef(null);
            const dropZoneRef = React.useRef(null);
            // Create uploader instance once
            const [uploader] = React.useState(() => new _uploader.Uploader(specs));
            const store = (0, _hooks.useStore)(uploader);
            // Bind uploader with trigger/dropzone once mounted
            React.useEffect(() => {
              if (!triggerRef.current) return;
              uploader.create(triggerRef.current, dropZoneRef.current ?? undefined);
              return () => uploader.destroy();
            }, [uploader]);
            const count = store.files.total;
            const progress = store.files.total > 0 ? Math.round(store.files.items.length / store.files.total * 100) : 0;
            return {
              triggerRef,
              dropZoneRef,
              uploader,
              files: store.files.items,
              errors: store.errors,
              uploading: store.fetching,
              progress,
              count,
              hmr: _uploader.hmr
            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsIlJlYWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl91c2VVcGxvYWRlciIsInN0b3JlIiwiZmV0Y2hpbmciLCJ0cmlnZ2VyUmVmIiwiZHJvcFpvbmVSZWYiLCJmaWxlcyIsInVwbG9hZGluZyIsInByb2dyZXNzIiwiZXJyb3JzIiwidXNlVXBsb2FkZXIiLCJtdWx0aXBsZSIsImFjY2VwdCIsInZhbGlkYXRvcnMiLCJuYW1lIiwib3B0aW9ucyIsIm1heFNpemUiLCJwcm9jZXNzb3JzIiwiY3JlYXRlRWxlbWVudCIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJyZWYiLCJzdHlsZSIsImJvcmRlciIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJjb2xvciIsIlN0cmluZyIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcCIsImZpbGUiLCJrZXkiLCJpZCIsIm1hcmdpblJpZ2h0IiwicHJldmlld1VybCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiYmFja2dyb3VuZCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIiwib25DbGljayIsImJhc2U2NCIsInRvQmFzZTY0IiwiY29uc29sZSIsImxvZyIsIl9ob29rcyIsIl91cGxvYWRlciIsInNwZWNzIiwidXNlUmVmIiwidXBsb2FkZXIiLCJ1c2VTdGF0ZSIsIlVwbG9hZGVyIiwidXNlU3RvcmUiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiY3JlYXRlIiwidW5kZWZpbmVkIiwiZGVzdHJveSIsImNvdW50IiwidG90YWwiLCJNYXRoIiwicm91bmQiLCJpdGVtcyIsImxlbmd0aCIsImhtciJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvdXNlLXVwbG9hZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFBT0csVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNuRUMsV0FBV0EsQ0FBQTtjQUNWLE9BQU8sSUFBSUgsTUFBQSxDQUFBSSxZQUFZLEVBQUU7WUFDMUI7WUFFQSxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQU4sVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pELElBQUFPLEtBQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFXLGVBQUEsR0FBQVgsT0FBQTtVQUVNLE1BQU9NLFlBQWEsU0FBUUksS0FBQSxDQUFBRSxnQkFBZ0I7WUFDakRDLFlBQUE7Y0FDQyxLQUFLLENBQUNGLGVBQUEsQ0FBQUcsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDeEI7O1VBQ0FOLE9BQUEsQ0FBQUgsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BELElBQUFVLEtBQUEsR0FBQWhCLE9BQUE7VUFRTyxNQUFNaUIsYUFBYSxH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