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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsIlJlYWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl91c2VVcGxvYWRlciIsInN0b3JlIiwiZmV0Y2hpbmciLCJ0cmlnZ2VyUmVmIiwiZHJvcFpvbmVSZWYiLCJmaWxlcyIsInVwbG9hZGluZyIsInByb2dyZXNzIiwiZXJyb3JzIiwidXNlVXBsb2FkZXIiLCJtdWx0aXBsZSIsImFjY2VwdCIsInZhbGlkYXRvcnMiLCJuYW1lIiwib3B0aW9ucyIsIm1heFNpemUiLCJwcm9jZXNzb3JzIiwiY3JlYXRlRWxlbWVudCIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJyZWYiLCJzdHlsZSIsImJvcmRlciIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJjb2xvciIsIlN0cmluZyIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcCIsImZpbGUiLCJrZXkiLCJpZCIsIm1hcmdpblJpZ2h0IiwicHJldmlld1VybCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiYmFja2dyb3VuZCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIiwib25DbGljayIsImJhc2U2NCIsInRvQmFzZTY0IiwiY29uc29sZSIsImxvZyIsIl9ob29rcyIsIl91cGxvYWRlciIsInNwZWNzIiwidXNlUmVmIiwidXBsb2FkZXIiLCJ1c2VTdGF0ZSIsIlVwbG9hZGVyIiwidXNlU3RvcmUiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiY3JlYXRlIiwidW5kZWZpbmVkIiwiZGVzdHJveSIsImNvdW50IiwidG90YWwiLCJNYXRoIiwicm91bmQiLCJpdGVtcyIsImxlbmd0aCIsImhtciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3VzZS11cGxvYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQU9HLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDbkVDLFdBQVdBLENBQUE7Y0FDVixPQUFPLElBQUlILE1BQUEsQ0FBQUksWUFBWSxFQUFFO1lBQzFCO1lBRUEsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaOztVQUNBQyxPQUFBLENBQUFOLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaRCxJQUFBTyxLQUFBLEdBQUFWLE9BQUE7VUFDQSxJQUFBVyxlQUFBLEdBQUFYLE9BQUE7VUFFTSxNQUFPTSxZQUFhLFNBQVFJLEtBQUEsQ0FBQUUsZ0JBQWdCO1lBQ2pEQyxZQUFBO2NBQ0MsS0FBSyxDQUFDRixlQUFBLENBQUFHLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3hCOztVQUNBTixPQUFBLENBQUFILFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQRCxJQUFBVSxLQUFBLEdBQUFoQixPQUFBO1VBUU8sTUFBTWlCLGFBQWEsR0FBQVIs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