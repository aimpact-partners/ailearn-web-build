System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.6.1/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/articles", "react@18.3.1", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.6.1/shared/hooks", "@aimpact/ailearn-app@0.6.1/components/ui", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/icons", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/toast", "@aimpact/ailearn-app@0.6.1/components/icons", "@aimpact/ailearn-app@0.6.1/kb-articles/assign", "react-virtuoso@4.14.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, View, ArticleItemPublished, ArticleItem, ArticlesList, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_3 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnApp061StoresBase) {
      dependency_4 = _aimpactAilearnApp061StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesArticles) {
      dependency_5 = _aimpactAilearnSdk120EntitiesArticles;
    }, function (_react) {
      dependency_6 = _react;
    }, function (_pragmateUi108Components) {
      dependency_7 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp061SharedHooks) {
      dependency_8 = _aimpactAilearnApp061SharedHooks;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_9 = _aimpactAilearnApp061ComponentsUi;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_10 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108Icons) {
      dependency_11 = _pragmateUi108Icons;
    }, function (_beyondJsKernel0114Routing) {
      dependency_12 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Modal) {
      dependency_13 = _pragmateUi108Modal;
    }, function (_pragmateUi108Toast) {
      dependency_14 = _pragmateUi108Toast;
    }, function (_aimpactAilearnApp061ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp061ComponentsIcons;
    }, function (_aimpactAilearnApp061KbArticlesAssign) {
      dependency_16 = _aimpactAilearnApp061KbArticlesAssign;
    }, function (_reactVirtuoso2) {
      dependency_17 = _reactVirtuoso2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/kb-articles/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['@aimpact/ailearn-sdk/entities/articles', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/shared/hooks', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/icons', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['pragmate-ui/modal', dependency_13], ['pragmate-ui/toast', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['@aimpact/ailearn-app/kb-articles/assign', dependency_16], ['react-virtuoso', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-kb-articles-list",
        "vspecifier": "@aimpact/ailearn-app@0.6.1/kb-articles/list.widget",
        "is": "page",
        "route": "/kb/articles/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/kb-articles/list.widget');
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
        hash: 396880046,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _empty = require("./empty");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks2 = require("@aimpact/ailearn-app/shared/hooks");
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
            return React.createElement(_hooks2.ModuleContextProvider, {
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
        hash: 1275209238,
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
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _assign = require("@aimpact/ailearn-app/kb-articles/assign");
          /*bundle*/
          function ArticleItemPublished({
            article
          }) {
            const [showDeleteModal, setShowDeleteModal] = React.useState(false);
            const [openModal, setOpenModal] = React.useState(false);
            const [actionSelected, setActionSelected] = React.useState(undefined);
            const {
              texts
            } = (0, _hooks.useModuleContext)();
            const [openClone, setOpenClone] = React.useState(false);
            const {
              store: {
                globalTexts
              }
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
            const onAction = event => {
              event.stopPropagation();
              setOpenModal(true);
              setActionSelected(event.currentTarget.dataset.action);
            };
            const toggleModal = event => {
              event?.stopPropagation();
              setActionSelected(undefined);
              setOpenModal(!openModal);
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
            }, React.createElement(_ui.Chip, {
              variant: "light"
            }, article.type))), React.createElement("div", {
              className: "article-item__actions"
            }, React.createElement(_icons2.AppIconButton, {
              "data-action": "share",
              onClick: onAction,
              icon: "assign",
              title: globalTexts.actions.assignToClassroom
            }), React.createElement(_icons.IconButton, {
              icon: "eye",
              onClick: handleView,
              title: texts.actions.view
            }), React.createElement(_icons.IconButton, {
              icon: "delete",
              onClick: () => setShowDeleteModal(true),
              title: texts.actions.delete
            }))), (openModal || actionSelected) && React.createElement(_assign.ArticleKbObjects, {
              item: article,
              action: actionSelected,
              onClose: toggleModal,
              texts: texts.assign
            }), showDeleteModal && React.createElement(_modal.ConfirmModal, {
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
        hash: 3984665922,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticleItem = ArticleItem;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            }, React.createElement(_ui.Chip, {
              variant: "light"
            }, article.type))), React.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImV4cG9ydHMiLCJfYmFzZSIsIl9hcnRpY2xlcyIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJhcnRpY2xlcyIsImRyYWZ0QXJ0aWNsZXMiLCJjdXJyZW50Q29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiQXJ0aWNsZXMiLCJEcmFmdEFydGljbGVzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJ0cmlnZ2VyIiwiaW5jbHVkZXMiLCJFcnJvciIsImdUZXh0cyIsImZldGNoIiwiYnJva2VyIiwic2V0Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJnbG9iYWxUZXh0cyIsImVudGl0aWVzIiwia2JBcnRpY2xlcyIsImNvbGxlY3Rpb24iLCJsb2FkZWQiLCJyZXNwb25zZSIsInJlYWR5IiwiZGVsZXRlQXJ0aWNsZSIsImlkIiwiaXRlbSIsIm1hcCIsImRlbGV0ZSIsIlJlYWN0IiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfdWkiLCJFbXB0eUxpc3QiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfZW1wdHkiLCJfcm91dGluZyIsIl9ob29rczIiLCJfbGlzdCIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkSXRlbSIsInVzZVN0YXRlIiwidGFiU2VsZWN0Iiwic2V0VGFiU2VsZWN0IiwidGFicyIsInRhYkluZGV4IiwiaW5kZXhPZiIsInVzZVN0b3JlIiwidXNlRWZmZWN0IiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwidG90YWxJdGVtcyIsIml0ZW1zIiwibGVuZ3RoIiwiaGFuZGxlVGFiQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaW5kZXgiLCJwYXJzZUludCIsImRhdGFzZXQiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJnbG9iYWxUaGlzIiwibG9jYXRpb24iLCJzZWFyY2giLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiZG9jdW1lbnQiLCJ0b1N0cmluZyIsImhhc0l0ZW1zIiwiaXNMb2FkaW5nIiwiTW9kdWxlQ29udGV4dFByb3ZpZGVyIiwidmFsdWUiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwia2V5Iiwib25DbGljayIsIkFwcExvYWRlciIsIkFydGljbGVzTGlzdCIsIl9pY29ucyIsIl9tb2RhbCIsIl90b2FzdCIsIl9pY29uczIiLCJfYXNzaWduIiwiQXJ0aWNsZUl0ZW1QdWJsaXNoZWQiLCJhcnRpY2xlIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwiYWN0aW9uU2VsZWN0ZWQiLCJzZXRBY3Rpb25TZWxlY3RlZCIsInVuZGVmaW5lZCIsIm9wZW5DbG9uZSIsInNldE9wZW5DbG9uZSIsImhhbmRsZURlbGV0ZSIsInRvYXN0Iiwic3VjY2VzcyIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVZpZXciLCJwdXNoU3RhdGUiLCJvbkFjdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsImFjdGlvbiIsInRvZ2dsZU1vZGFsIiwiRnJhZ21lbnQiLCJpc0ZlYXR1cmVkIiwiQ2hpcCIsInZhcmlhbnQiLCJ0eXBlIiwiQXBwSWNvbkJ1dHRvbiIsImFzc2lnblRvQ2xhc3Nyb29tIiwiSWNvbkJ1dHRvbiIsInZpZXciLCJBcnRpY2xlS2JPYmplY3RzIiwib25DbG9zZSIsImFzc2lnbiIsIkNvbmZpcm1Nb2RhbCIsIm9uQ29uZmlybSIsIm9uQ2FuY2VsIiwiYnRuQ29uZmlybSIsImxhYmVsIiwiY29uZmlybSIsImJ0bkNhbmNlbCIsImNhbmNlbCIsIm1lc3NhZ2UiLCJBcnRpY2xlSXRlbSIsImVkaXQiLCJfcmVhY3RWaXJ0dW9zbyIsIl9pdGVtIiwiX2l0ZW1QdWJsaXNoZWQiLCJpc0RyYWZ0cyIsIml0ZW1Db250ZW50IiwiVmlydHVvc28iLCJkYXRhIiwib3ZlcnNjYW4iXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3cy9lbXB0eS50c3giLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvaXRlbS1wdWJsaXNoZWQudHN4IiwiLy90cy92aWV3cy9pdGVtLnRzeCIsIi8vdHMvdmlld3MvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUdPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxNQUFN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