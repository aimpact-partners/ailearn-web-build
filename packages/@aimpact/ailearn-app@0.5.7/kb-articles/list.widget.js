System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.5.7/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/articles", "react@18.3.1", "pragmate-ui@1.0.6/components", "@aimpact/ailearn-app@0.5.7/shared/hooks", "@aimpact/ailearn-app@0.5.7/components/ui", "pragmate-ui@1.0.6/icons", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.6/modal", "pragmate-ui@1.0.6/toast", "react-virtuoso@4.14.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, View, ArticleItemPublished, ArticleItem, ArticlesList, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    ArticleItemPublished: void 0,
    ArticleItem: void 0,
    ArticlesList: void 0
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
    }, function (_aimpactAilearnApp057StoresBase) {
      dependency_4 = _aimpactAilearnApp057StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesArticles) {
      dependency_5 = _aimpactAilearnSdk120EntitiesArticles;
    }, function (_react) {
      dependency_6 = _react;
    }, function (_pragmateUi106Components) {
      dependency_7 = _pragmateUi106Components;
    }, function (_aimpactAilearnApp057SharedHooks) {
      dependency_8 = _aimpactAilearnApp057SharedHooks;
    }, function (_aimpactAilearnApp057ComponentsUi) {
      dependency_9 = _aimpactAilearnApp057ComponentsUi;
    }, function (_pragmateUi106Icons) {
      dependency_10 = _pragmateUi106Icons;
    }, function (_beyondJsKernel0112Routing) {
      dependency_11 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi106Modal) {
      dependency_12 = _pragmateUi106Modal;
    }, function (_pragmateUi106Toast) {
      dependency_13 = _pragmateUi106Toast;
    }, function (_reactVirtuoso2) {
      dependency_14 = _reactVirtuoso2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/kb-articles/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['@aimpact/ailearn-sdk/entities/articles', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/shared/hooks', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['pragmate-ui/icons', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['pragmate-ui/modal', dependency_12], ['pragmate-ui/toast', dependency_13], ['react-virtuoso', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-kb-articles-list",
        "vspecifier": "@aimpact/ailearn-app@0.5.7/kb-articles/list.widget",
        "is": "page",
        "route": "/kb/articles/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/kb-articles/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 301523666,
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
              const tab = this.uri.qs.get('tab');
              this.#store.load(tab);
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 460458740,
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
            #articles;
            #draftArticles;
            #tab = 'drafts'; // Default tab
            get articles() {
              return this.#articles;
            }
            get draftArticles() {
              return this.#draftArticles;
            }
            get tab() {
              return this.#tab;
            }
            get currentCollection() {
              return this.#tab === 'drafts' ? this.#draftArticles : this.#articles;
            }
            constructor() {
              super(_beyond_context.module.specifier);
              //@ts-ignore
              this.#articles = new _articles.Articles();
              //@ts-ignore
              this.#draftArticles = new _articles.DraftArticles();
              // Subscribe to collection events
              this.#articles.on('change', this.triggerEvent);
              this.#articles.on('items.changed', () => this.trigger('items.changed'));
              this.#draftArticles.on('change', this.triggerEvent);
              this.#draftArticles.on('items.changed', () => this.trigger('items.changed'));
            }
            async load(tab = 'drafts') {
              // Validate tab
              if (!['drafts', 'published'].includes(tab)) {
                throw new Error(`Invalid tab: ${tab}`);
              }
              await this.gTexts().fetch();
              this.broker.set({
                overlay: false,
                breadcrumb: [[this.globalTexts.entities.kbArticles]]
              });
              // Update tab
              this.#tab = tab;
              // Load appropriate collection
              const collection = tab === 'drafts' ? this.#draftArticles : this.#articles;
              if (collection.loaded) return;
              const response = await collection.load();
              this.ready = true;
              return response;
            }
            async deleteArticle(id) {
              const collection = this.currentCollection;
              const item = collection.map.get(id);
              await item.delete();
              this.trigger('items.changed');
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 1791647994,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyList() {
            const {
              texts,
              store
            } = (0, _hooks.useModuleContext)();
            return React.createElement(_ui.EmptyCard, {
              text: texts.empty.title,
              description: texts.empty.description,
              icon: "edit"
            }, React.createElement("div", {
              className: "actions flex-container flex-center"
            }, React.createElement(_components.Link, {
              href: "/kb/articles/management",
              className: "grow btn btn-primary"
            }, store.globalTexts.actions.create)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4083576647,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var React = require("react");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _components = require("pragmate-ui/components");
          var _empty = require("./empty");
          var _routing = require("@beyond-js/kernel/routing");
          var _list = require("./list");
          /*bundle*/
          function View({
            store
          }) {
            const [selectedItem, setSelectedItem] = React.useState(null);
            const [tabSelect, setTabSelect] = React.useState(0);
            const tabs = ['drafts', 'published'];
            const tabIndex = tabs.indexOf(store.tab);
            // Subscribe to store changes
            (0, _hooks.useStore)(store, ['change', 'items.changed']);
            // Initialize tab selection
            React.useEffect(() => {
              setTabSelect(tabIndex);
            }, [tabIndex]);
            if (!store.ready) return React.createElement(_ui.PageLoader, {
              fetching: true
            });
            const contextValue = {
              texts: store.texts,
              store: store,
              fetching: store.fetching || false,
              selectedItem,
              setSelectedItem,
              totalItems: store.currentCollection?.items?.length || 0
            };
            const handleTabChange = async event => {
              const target = event.currentTarget;
              const index = parseInt(target.dataset.index || '0');
              const tab = tabs[index];
              // Update URL params
              const urlParams = new URLSearchParams(globalThis.location.search);
              urlParams.set('tab', tab);
              _routing.routing.replaceState({}, document.title, `/kb/articles/list?${urlParams.toString()}`);
              // Update tab selection
              setTabSelect(index);
              // Load collection for the selected tab
              await store.load(tab);
            };
            const currentCollection = store.currentCollection;
            const hasItems = currentCollection?.items?.length > 0;
            const isLoading = (store.fetching || store.currentCollection?.fetching) && !hasItems;
            return React.createElement(_hooks.ModuleContextProvider, {
              value: contextValue
            }, React.createElement(_ui.PageContainer, {
              fetching: store.fetching
            }, React.createElement(_ui.PageTitle, {
              title: store.texts.title
            }, React.createElement("section", {
              className: "title__actions"
            }, React.createElement(_components.Link, {
              href: "/kb/articles/management",
              className: "grow btn btn-primary"
            }, store.globalTexts.actions.create))), React.createElement("div", {
              className: "pui-tabs-container pui-page-tabs-container"
            }, React.createElement("header", {
              className: "pui-tabs-menu tabs page__tabs"
            }, tabs.map((tab, index) => React.createElement("div", {
              key: tab,
              "data-index": index,
              className: `pui-tab tab${tabSelect === index ? ' active' : ''}`,
              onClick: handleTabChange
            }, store.texts.tabs[tab])))), React.createElement("div", {
              className: "pui-tab-panes mt-15"
            }, isLoading ? React.createElement(_ui.AppLoader, null) : hasItems ? React.createElement(_list.ArticlesList, {
              collection: currentCollection
            }) : React.createElement(_empty.EmptyList, null))));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/item-published
      **************************************/

      ims.set('./views/item-published', {
        hash: 3340039603,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticleItemPublished = ArticleItemPublished;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _toast = require("pragmate-ui/toast");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          /*bundle*/
          function ArticleItemPublished({
            article
          }) {
            const [showDeleteModal, setShowDeleteModal] = React.useState(false);
            const {
              texts
            } = (0, _hooks.useModuleContext)();
            const handleDelete = async () => {
              try {
                // Call the delete method on the article item
                await article.delete();
                // Show success toast
                _toast.toast.success('Article deleted successfully');
                // Close modal
                setShowDeleteModal(false);
              } catch (error) {
                console.error('Error deleting article:', error);
                _toast.toast.error('Error deleting article');
              }
            };
            const handleView = () => {
              _routing.routing.pushState(`/kb/articles/view/${article.id}`);
            };
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "article-item"
            }, React.createElement("div", {
              className: "article-item__content"
            }, React.createElement("div", {
              className: "article-item__header"
            }, React.createElement("h3", {
              className: "article-item__title"
            }, article.title), article.isFeatured && React.createElement("span", {
              className: "article-item__featured"
            }, "\u2B50")), React.createElement("p", {
              className: "article-item__description"
            }, article.description), React.createElement("div", {
              className: "article-item__meta"
            }, React.createElement("span", {
              className: "article-item__type"
            }, article.type), article.publicationDate && React.createElement("span", {
              className: "article-item__date"
            }, new Date(article.publicationDate).toLocaleDateString()), article.categories?.length > 0 && React.createElement("div", {
              className: "article-item__categories"
            }, article.categories.slice(0, 3).map((category, index) => React.createElement("span", {
              key: index,
              className: "article-item__category"
            }, category))))), React.createElement("div", {
              className: "article-item__actions"
            }, React.createElement(_icons.IconButton, {
              icon: "eye",
              onClick: handleView,
              title: texts.actions.view
            }), React.createElement(_icons.IconButton, {
              icon: "delete",
              onClick: () => setShowDeleteModal(true),
              title: texts.actions.delete
            }))), showDeleteModal && React.createElement(_modal.ConfirmModal, {
              title: texts.delete.title,
              show: showDeleteModal,
              onConfirm: handleDelete,
              onCancel: () => setShowDeleteModal(false),
              btnConfirm: {
                label: texts.delete.confirm,
                variant: 'primary'
              },
              btnCancel: {
                label: texts.delete.cancel
              }
            }, React.createElement("p", null, texts.delete.message)));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/item
      ****************************/

      ims.set('./views/item', {
        hash: 1936128917,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticleItem = ArticleItem;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          /*bundle*/
          function ArticleItem({
            article
          }) {
            const {
              texts
            } = (0, _hooks.useModuleContext)();
            return React.createElement("div", {
              className: "article-item"
            }, React.createElement("div", {
              className: "article-item__content"
            }, React.createElement("div", {
              className: "article-item__header"
            }, React.createElement("h3", {
              className: "article-item__title"
            }, article.title), article.isFeatured && React.createElement("span", {
              className: "article-item__featured"
            }, "\u2B50")), React.createElement("p", {
              className: "article-item__description"
            }, article.description), React.createElement("div", {
              className: "article-item__meta"
            }, React.createElement("span", {
              className: "article-item__type"
            }, article.type), article.publicationDate && React.createElement("span", {
              className: "article-item__date"
            }, new Date(article.publicationDate).toLocaleDateString()), article.categories?.length > 0 && React.createElement("div", {
              className: "article-item__categories"
            }, article.categories.slice(0, 3).map((category, index) => React.createElement("span", {
              key: index,
              className: "article-item__category"
            }, category))))), React.createElement("div", {
              className: "article-item__actions"
            }, React.createElement(_icons.IconButton, {
              icon: "edit",
              href: `/kb/articles/management?id=${article.id}`,
              title: texts.actions.edit
            })));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 56284214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticlesList = ArticlesList;
          var React = require("react");
          var _reactVirtuoso = require("react-virtuoso");
          var _item = require("./item");
          var _itemPublished = require("./item-published");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          /*bundle*/
          function ArticlesList({
            collection
          }) {
            const {
              store
            } = (0, _hooks.useModuleContext)();
            const articles = collection?.items || [];
            const isDrafts = store.tab === 'drafts';
            const itemContent = (index, article) => {
              if (isDrafts) {
                return React.createElement(_item.ArticleItem, {
                  key: article.id || index,
                  article: article
                });
              } else {
                return React.createElement(_itemPublished.ArticleItemPublished, {
                  key: article.id || index,
                  article: article
                });
              }
            };
            return React.createElement("div", {
              className: "articles-list"
            }, React.createElement(_reactVirtuoso.Virtuoso, {
              data: articles,
              itemContent: itemContent,
              overscan: 5,
              className: "articles-list__virtuoso"
            }));
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
      }, {
        "im": "./views/item-published",
        "from": "ArticleItemPublished",
        "name": "ArticleItemPublished"
      }, {
        "im": "./views/item",
        "from": "ArticleItem",
        "name": "ArticleItem"
      }, {
        "im": "./views/list",
        "from": "ArticlesList",
        "name": "ArticlesList"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'ArticleItemPublished') && _export("ArticleItemPublished", ArticleItemPublished = require ? require('./views/item-published').ArticleItemPublished : value);
        (require || prop === 'ArticleItem') && _export("ArticleItem", ArticleItem = require ? require('./views/item').ArticleItem : value);
        (require || prop === 'ArticlesList') && _export("ArticlesList", ArticlesList = require ? require('./views/list').ArticlesList : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImV4cG9ydHMiLCJfYmFzZSIsIl9hcnRpY2xlcyIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJhcnRpY2xlcyIsImRyYWZ0QXJ0aWNsZXMiLCJjdXJyZW50Q29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiQXJ0aWNsZXMiLCJEcmFmdEFydGljbGVzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJ0cmlnZ2VyIiwiaW5jbHVkZXMiLCJFcnJvciIsImdUZXh0cyIsImZldGNoIiwiYnJva2VyIiwic2V0Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJnbG9iYWxUZXh0cyIsImVudGl0aWVzIiwia2JBcnRpY2xlcyIsImNvbGxlY3Rpb24iLCJsb2FkZWQiLCJyZXNwb25zZSIsInJlYWR5IiwiZGVsZXRlQXJ0aWNsZSIsImlkIiwiaXRlbSIsIm1hcCIsImRlbGV0ZSIsIlJlYWN0IiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfdWkiLCJFbXB0eUxpc3QiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfZW1wdHkiLCJfcm91dGluZyIsIl9saXN0Iiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwidXNlU3RhdGUiLCJ0YWJTZWxlY3QiLCJzZXRUYWJTZWxlY3QiLCJ0YWJzIiwidGFiSW5kZXgiLCJpbmRleE9mIiwidXNlU3RvcmUiLCJ1c2VFZmZlY3QiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJ0b3RhbEl0ZW1zIiwiaXRlbXMiLCJsZW5ndGgiLCJoYW5kbGVUYWJDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJpbmRleCIsInBhcnNlSW50IiwiZGF0YXNldCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImdsb2JhbFRoaXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJkb2N1bWVudCIsInRvU3RyaW5nIiwiaGFzSXRlbXMiLCJpc0xvYWRpbmciLCJNb2R1bGVDb250ZXh0UHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJrZXkiLCJvbkNsaWNrIiwiQXBwTG9hZGVyIiwiQXJ0aWNsZXNMaXN0IiwiX2ljb25zIiwiX21vZGFsIiwiX3RvYXN0IiwiQXJ0aWNsZUl0ZW1QdWJsaXNoZWQiLCJhcnRpY2xlIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwiaGFuZGxlRGVsZXRlIiwidG9hc3QiLCJzdWNjZXNzIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlVmlldyIsInB1c2hTdGF0ZSIsIkZyYWdtZW50IiwiaXNGZWF0dXJlZCIsInR5cGUiLCJwdWJsaWNhdGlvbkRhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiY2F0ZWdvcmllcyIsInNsaWNlIiwiY2F0ZWdvcnkiLCJJY29uQnV0dG9uIiwidmlldyIsIkNvbmZpcm1Nb2RhbCIsIm9uQ29uZmlybSIsIm9uQ2FuY2VsIiwiYnRuQ29uZmlybSIsImxhYmVsIiwiY29uZmlybSIsInZhcmlhbnQiLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJtZXNzYWdlIiwiQXJ0aWNsZUl0ZW0iLCJlZGl0IiwiX3JlYWN0VmlydHVvc28iLCJfaXRlbSIsIl9pdGVtUHVibGlzaGVkIiwiaXNEcmFmdHMiLCJpdGVtQ29udGVudCIsIlZpcnR1b3NvIiwiZGF0YSIsIm92ZXJzY2FuIl0sInNvdXJjZXMiOlsiLy90cy9jb250cm9sbGVyLnRzIiwiLy90cy9zdG9yZS50cyIsIi8vdHMvdmlld3MvZW1wdHkudHN4IiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2l0ZW0tcHVibGlzaGVkLnRzeCIsIi8vdHMvdmlld3MvaXRlbS50c3giLCIvL3RzL3ZpZXdzL2xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFHTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQyxPQUFxQixJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNqQztZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsTUFBTUMsR0FBRyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Y0FFbEMsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1UsSUFBSSxDQUFDSixHQUFHLENBQUM7WUFDdEI7O1VBQ0FLLE9BQUEsQ0FBQWIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCRCxJQUFBYyxLQUFBLEdB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