System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.6.1/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/articles", "react@18.3.1", "@aimpact/ailearn-app@0.6.1/components/ui", "@aimpact/ailearn-app@0.6.1/shared/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnApp061StoresBase) {
      dependency_4 = _aimpactAilearnApp061StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesArticles) {
      dependency_5 = _aimpactAilearnSdk120EntitiesArticles;
    }, function (_react) {
      dependency_6 = _react;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_7 = _aimpactAilearnApp061ComponentsUi;
    }, function (_aimpactAilearnApp061SharedHooks) {
      dependency_8 = _aimpactAilearnApp061SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.13.16"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/kb/search",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['@aimpact/ailearn-sdk/entities/articles', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/ui', dependency_7], ['@aimpact/ailearn-app/shared/hooks', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-kb-search",
        "vspecifier": "@aimpact/ailearn-app@0.6.1/kb/search.widget",
        "is": "page",
        "route": "/kb/search",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/kb/search.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1429326874,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _index = require("./views/index");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _index.View;
            }
            show() {
              const searchText = this.uri.qs.get('q');
              const organizationId = this.uri.qs.get('org');
              if (searchText) {
                this.#store.load(searchText, organizationId);
              }
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 742219498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _articles = require("@aimpact/ailearn-sdk/entities/articles");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _base.BaseStoreManager {
            #kb;
            constructor() {
              super(_beyond_context.module.specifier);
              this.#kb = new _articles.KBCollection();
            }
            get kbCollection() {
              return this.#kb;
            }
            get ready() {
              return super.ready;
            }
            async load(text, orgId) {
              try {
                if (!text || !this.#kb) return;
                await this.#kb.load({
                  text,
                  organizationId: orgId
                });
                super.ready = true;
              } catch (e) {
                console.error(e);
              } finally {
                super.ready = true;
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1394739192,
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
        hash: 1037040207,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var React = require("react");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _searchResults = require("./search-results");
          /*bundle*/
          function View({
            store
          }) {
            // Subscribe to store changes
            (0, _hooks.useStore)(store);
            console.log(0.2, store.ready);
            if (!store.ready) return React.createElement(_ui.PageLoader, {
              fetching: true
            });
            const contextValue = {
              texts: store.texts,
              store: store,
              fetching: store.fetching || false
            };
            return React.createElement(_hooks.ModuleContextProvider, {
              value: contextValue
            }, React.createElement(_ui.PageContainer, null, React.createElement(_ui.PageTitle, {
              title: store.texts.title
            }), React.createElement(_searchResults.SearchResults, null)));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/search-results
      **************************************/

      ims.set('./views/search-results', {
        hash: 2918618468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SearchResults = SearchResults;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          function SearchResults() {
            const {
              store,
              texts
            } = (0, _hooks.useModuleContext)();
            const {
              kbCollection
            } = store;
            if (!kbCollection || !kbCollection.items || kbCollection.items.length === 0) {
              return React.createElement(_ui.EmptyCard, {
                text: texts.noResults,
                description: texts.noResultsDescription,
                icon: "search"
              });
            }
            return React.createElement("div", {
              className: "search-results"
            }, React.createElement("h2", null, texts.searchResults), React.createElement("div", {
              className: "results-list"
            }, kbCollection.items.map(item => React.createElement(SearchResultItem, {
              key: item.id,
              item: item
            }))));
          }
          function SearchResultItem({
            item
          }) {
            const {
              texts
            } = (0, _hooks.useModuleContext)();
            return React.createElement("div", {
              className: "search-result-item"
            }, React.createElement("div", {
              className: "item-header"
            }, React.createElement("h3", {
              className: "item-title"
            }, item.metadata?.title || texts.noTitle), React.createElement("span", {
              className: "item-score"
            }, texts.score, ": ", Math.round((item.score || 0) * 100), "%")), React.createElement("div", {
              className: "item-content"
            }, React.createElement("p", {
              className: "item-text"
            }, item.metadata?.text || texts.noContent)), React.createElement("div", {
              className: "item-tags"
            }, React.createElement("span", {
              className: "tags-label"
            }, texts.tags, ":"), item.metadata?.tags && item.metadata.tags.length > 0 ? React.createElement("div", {
              className: "tags-list"
            }, item.metadata.tags.map((tag, index) => React.createElement("span", {
              key: index,
              className: "tag"
            }, tag))) : React.createElement("span", {
              className: "no-tags"
            }, texts.noTags)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfaW5kZXgiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInNlYXJjaFRleHQiLCJ1cmkiLCJxcyIsImdldCIsIm9yZ2FuaXphdGlvbklkIiwibG9hZCIsImV4cG9ydHMiLCJfYmFzZSIsIl9hcnRpY2xlcyIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJrYiIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiS0JDb2xsZWN0aW9uIiwia2JDb2xsZWN0aW9uIiwicmVhZHkiLCJ0ZXh0Iiwib3JnSWQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiUmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2hvb2tzIiwiX3NlYXJjaFJlc3VsdHMiLCJ1c2VTdG9yZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJ0ZXh0cyIsIk1vZHVsZUNvbnRleHRQcm92aWRlciIsInZhbHVlIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsInRpdGxlIiwiU2VhcmNoUmVzdWx0cyIsIml0ZW1zIiwibGVuZ3RoIiwiRW1wdHlDYXJkIiwibm9SZXN1bHRzIiwiZGVzY3JpcHRpb24iLCJub1Jlc3VsdHNEZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJzZWFyY2hSZXN1bHRzIiwibWFwIiwiaXRlbSIsIlNlYXJjaFJlc3VsdEl0ZW0iLCJrZXkiLCJpZCIsIm1ldGFkYXRhIiwibm9UaXRsZSIsInNjb3JlIiwiTWF0aCIsInJvdW5kIiwibm9Db250ZW50IiwidGFncyIsInRhZyIsImluZGV4Iiwibm9UYWdzIl0sInNvdXJjZXMiOlsiLy90cy9jb250cm9sbGVyLnRzIiwiLy90cy9zdG9yZS50cyIsIi8vdHMvdmlld3MvY29udGV4dC50cyIsIi8vdHMvdmlld3MvaW5kZXgudHN4IiwiLy90cy92aWV3cy9zZWFyY2gtcmVzdWx0cy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBR087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBcUIsSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDakM7WUFFQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILE1BQU1DLFVBQVUsR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsR0FBRyxDQUFDO2NBQ3ZDLE1BQU1DLGNBQWMsR0FBRyxJQUFJLENBQUNILEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO2NBRTdDLElBQUlILFVBQVUsRUFBRTtnQkFDZixJQUFJLENBQUMsQ0FBQU4sS0FBTSxDQUFDVyxJQUFJLENBQUNMLFVBQVUsRUFBRUksY0FBYyxDQUFDOztZQUU5Qzs7VUFDQUUsT0FBQSxDQUFBZCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJELElBQUFlLEtBQUEsR0FBQWxC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