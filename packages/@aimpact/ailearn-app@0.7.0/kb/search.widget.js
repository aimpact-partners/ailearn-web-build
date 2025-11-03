System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/articles", "react@18.3.1", "@aimpact/ailearn-app@0.7.0/components/ui", "@beyond-js/react-18-widgets@1.1.8/hooks", "@aimpact/ailearn-app@0.7.0/shared/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp070StoresBase) {
      dependency_4 = _aimpactAilearnApp070StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesArticles) {
      dependency_5 = _aimpactAilearnSdk120EntitiesArticles;
    }, function (_react) {
      dependency_6 = _react;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_7 = _aimpactAilearnApp070ComponentsUi;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_8 = _beyondJsReact18Widgets118Hooks;
    }, function (_aimpactAilearnApp070SharedHooks) {
      dependency_9 = _aimpactAilearnApp070SharedHooks;
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
          "vspecifier": "@aimpact/ailearn-app@0.7.0/kb/search",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['@aimpact/ailearn-sdk/entities/articles', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/ui', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/ailearn-app/shared/hooks', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-kb-search",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/kb/search.widget",
        "is": "page",
        "route": "/kb/search",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/kb/search.widget');
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
        hash: 2864035728,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/ailearn-app/shared/hooks");
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
            return React.createElement(_hooks2.ModuleContextProvider, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfaW5kZXgiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInNlYXJjaFRleHQiLCJ1cmkiLCJxcyIsImdldCIsIm9yZ2FuaXphdGlvbklkIiwibG9hZCIsImV4cG9ydHMiLCJfYmFzZSIsIl9hcnRpY2xlcyIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJrYiIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiS0JDb2xsZWN0aW9uIiwia2JDb2xsZWN0aW9uIiwicmVhZHkiLCJ0ZXh0Iiwib3JnSWQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiUmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9zZWFyY2hSZXN1bHRzIiwidXNlU3RvcmUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwidGV4dHMiLCJNb2R1bGVDb250ZXh0UHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJ0aXRsZSIsIlNlYXJjaFJlc3VsdHMiLCJpdGVtcyIsImxlbmd0aCIsIkVtcHR5Q2FyZCIsIm5vUmVzdWx0cyIsImRlc2NyaXB0aW9uIiwibm9SZXN1bHRzRGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwic2VhcmNoUmVzdWx0cyIsIm1hcCIsIml0ZW0iLCJTZWFyY2hSZXN1bHRJdGVtIiwia2V5IiwiaWQiLCJtZXRhZGF0YSIsIm5vVGl0bGUiLCJzY29yZSIsIk1hdGgiLCJyb3VuZCIsIm5vQ29udGVudCIsInRhZ3MiLCJ0YWciLCJpbmRleCIsIm5vVGFncyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlYXJjaC1yZXN1bHRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUdPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBRUEsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxNQUFNQyxVQUFVLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQztjQUN2QyxNQUFNQyxjQUFjLEdBQUcsSUFBSSxDQUFDSCxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztjQUU3QyxJQUFJSCxVQUFVLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLENBQUFOLEtBQU0sQ0FBQ1csSUFBSSxDQUFDTCxVQUFVLEVBQUVJLGNBQWMsQ0FBQzs7WUFFOUM7O1VBQ0FFLE9BQUEsQ0FBQWQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCRCxJQUFBZSxLQUFB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LElBQUFULE1BQUEsQ0FBQUgsZ0JBQWdCLEdBQUU7WUFFcEMsT0FDQ0gsS0FBQSxDQUFBVyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBb0IsR0FDbEM3QixLQUFBLENBQUFXLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQztZQUFhLEdBQzNCN0IsS0FBQSxDQUFBVyxhQUFBO2NBQUlrQixTQUFTLEVBQUM7WUFBWSxHQUFFRyxJQUFJLENBQUNJLFFBQVEsRUFBRWhCLEtBQUssSUFBSUwsS0FBSyxDQUFDc0IsT0FBTyxDQUFNLEVBQ3ZFckMsS0FBQSxDQUFBVyxhQUFBO2NBQU1rQixTQUFTLEVBQUM7WUFBWSxHQUMxQmQsS0FBSyxDQUFDdUIsS0FBSyxFLE1BQUlDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUNSLElBQUksQ0FBQ00sS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRSxJQUM3QyxDQUNGLEVBQ050QyxLQUFBLENBQUFXLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQztZQUFjLEdBQzVCN0IsS0FBQSxDQUFBVyxhQUFBO2NBQUdrQixTQUFTLEVBQUM7WUFBVyxHQUFFRyxJQUFJLENBQUNJLFFBQVEsRUFBRXpDLElBQUksSUFBSW9CLEtBQUssQ0FBQzBCLFNBQVMsQ0FBSyxDQUNoRSxFQUNOekMsS0FBQSxDQUFBVyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBVyxHQUN6QjdCLEtBQUEsQ0FBQVcsYUFBQTtjQUFNa0IsU0FBUyxFQUFDO1lBQVksR0FBRWQsS0FBSyxDQUFDMkIsSUFBSSxFLElBQVMsRUFDaERWLElBQUksQ0FBQ0ksUUFBUSxFQUFFTSxJQUFJLElBQUlWLElBQUksQ0FBQ0ksUUFBUSxDQUFDTSxJQUFJLENBQUNuQixNQUFNLEdBQUcsQ0FBQyxHQUNwRHZCLEtBQUEsQ0FBQVcsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQVcsR0FDeEJHLElBQUksQ0FBQ0ksUUFBUSxDQUFDTSxJQUFJLENBQUNYLEdBQUcsQ0FBQyxDQUFDWSxHQUFXLEVBQUVDLEtBQWEsS0FDbEQ1QyxLQUFBLENBQUFXLGFBQUE7Y0FBTXVCLEdBQUcsRUFBRVUsS0FBSztjQUFFZixTQUFTLEVBQUM7WUFBSyxHQUMvQmMsR0FBRyxDQUVMLENBQUMsQ0FDRyxHQUVOM0MsS0FBQSxDQUFBVyxhQUFBO2NBQU1rQixTQUFTLEVBQUM7WUFBUyxHQUFFZCxLQUFLLENBQUM4QixNQUFNLENBQ3ZDLENBQ0ksQ0FDRDtVQUVSIiwiaWdub3JlTGlzdCI6W119